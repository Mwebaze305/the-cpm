// The Credence Letters: team emails.
//
// Called every five minutes (supabase/mail-schedule.sql). Each call:
//   1. reads proposals.js from the site and queues one email to the editor for
//      proposals nobody has been told about yet;
//   2. on the first Monday of each fortnight, queues each member's digest;
//   3. sends what is due in the queue (public.outbox), checking first that the
//      piece or proposal is still in the state the email is about.
//
// Mail goes out through Gmail for now (MAIL_TRANSPORT unset or "gmail") and
// through Resend later (MAIL_TRANSPORT="resend"). Secrets are set in the
// Supabase dashboard (Edge Functions → Secrets), never in this file:
//   GMAIL_APP_PASSWORD   an app password for the sending Gmail account
//   GMAIL_USER           optional; the editor's address is used when unset
//   RESEND_API_KEY, MAIL_FROM   for Resend, when the domain is verified
//   MAIL_REPLY_TO        optional
//   SITE_URL             optional; https://thecredenceletters.com

import { createClient } from "npm:@supabase/supabase-js@2";
import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";
import { parseSiteData } from "./siteData.ts";
import { render, daysBetween, type Ctx, type Person } from "./templates.ts";
import { buildDigest } from "./digest.ts";

const db = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!, { auth: { persistSession: false } });
const SITE = (Deno.env.get("SITE_URL") || "https://thecredenceletters.com").replace(/\/$/, "");
const EXPECT: Record<string, string> = { submitted: "waiting", resubmitted: "waiting", returned: "returned", approved: "approved", approved_editor: "approved" };
const DAILY_CAP = 8; // work emails to one person in 24 hours; more wait until later

const bkk = () => new Date(Date.now() + 7 * 3600 * 1000);
const todayBkk = () => bkk().toISOString().slice(0, 10);

// ---------- what the sender knows ----------

type Known = { people: Record<string, Person>; byId: Record<string, Person>; contacts: Record<string, any> };
async function known(): Promise<Known> {
  const [pr, ct] = await Promise.all([
    db.from("profiles").select("id,team_id,name,role,dept"),
    db.from("member_contacts").select("team_id,email,work_on,digest_on"),
  ]);
  if (pr.error) throw pr.error;
  if (ct.error) throw ct.error;
  const people: Record<string, Person> = {}, byId: Record<string, Person> = {};
  for (const r of pr.data || []) {
    if (!r.team_id) continue;
    const person = { team_id: r.team_id, name: r.name, role: r.role, dept: r.dept };
    people[r.team_id] = person; byId[r.id] = person;
  }
  const contacts: Record<string, any> = {};
  for (const r of ct.data || []) contacts[r.team_id] = r;
  return { people, byId, contacts };
}

const siteCache: Record<string, any> = {};
async function siteData(file: string): Promise<any> {
  if (!siteCache[file]) {
    const res = await fetch(`${SITE}/assets/js/${file}.js`, { headers: { "Cache-Control": "no-cache" } });
    if (!res.ok) throw new Error(`${file}.js: HTTP ${res.status}`);
    siteCache[file] = parseSiteData(await res.text());
  }
  return siteCache[file];
}

// ---------- how mail leaves ----------

function mailer(editorEmail?: string) {
  const transport = (Deno.env.get("MAIL_TRANSPORT") || "gmail").toLowerCase();
  const replyTo = Deno.env.get("MAIL_REPLY_TO") || undefined;
  if (transport === "resend") {
    const key = Deno.env.get("RESEND_API_KEY"), from = Deno.env.get("MAIL_FROM");
    if (!key || !from) return null;
    return {
      name: "resend",
      async send(to: string, m: { subject: string; html: string; text: string }) {
        const res = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
          body: JSON.stringify({ from, to: [to], reply_to: replyTo, subject: m.subject, html: m.html, text: m.text, headers: { "Auto-Submitted": "auto-generated" } }),
        });
        if (!res.ok) throw new Error(`Resend ${res.status}: ${(await res.text()).slice(0, 200)}`);
      },
      async close() {},
    };
  }
  const user = Deno.env.get("GMAIL_USER") || editorEmail;
  const pass = (Deno.env.get("GMAIL_APP_PASSWORD") || "").replace(/\s+/g, "");
  if (!user || !pass) return null;
  const client = new SMTPClient({ connection: { hostname: "smtp.gmail.com", port: 465, tls: true, auth: { username: user, password: pass } } });
  return {
    name: "gmail",
    async send(to: string, m: { subject: string; html: string; text: string }) {
      await client.send({ from: `The Credence Letters <${user}>`, to, replyTo, subject: m.subject, content: m.text, html: m.html, headers: { "Auto-Submitted": "auto-generated" } });
    },
    async close() { try { await client.close(); } catch { /* already closed */ } },
  };
}

// ---------- 1. new proposals, for the editor ----------

async function scanProposals(k: Known): Promise<number> {
  const last = await db.from("mail_state").select("at").eq("key", "last_scan").maybeSingle();
  if (last.data && Date.now() - Date.parse(last.data.at) < 50 * 60 * 1000) return 0;
  await db.from("mail_state").upsert({ key: "last_scan", value: "x", at: new Date().toISOString() });

  const items: any[] = (await siteData("proposals")).items || [];
  const today = todayBkk();
  const [seen, teams] = await Promise.all([db.from("proposal_notices").select("proposal_id"), db.from("proposal_team").select("proposal_id")]);
  const known_ = new Set([...(seen.data || []), ...(teams.data || [])].map((r: any) => r.proposal_id));
  const fresh = items.filter((x) => x.id && x.deadline && daysBetween(today, x.deadline) >= 0 && !known_.has(x.id));
  if (!fresh.length) return 0;

  const ids = fresh.map((x) => x.id).sort();
  const editors = Object.values(k.people).filter((x) => x.role === "editor");
  for (const e of editors) {
    await db.from("outbox").upsert({ kind: "proposal_new", to_team: e.team_id, data: { ids }, dedupe_key: `proposal_new:${e.team_id}:${ids.join(",")}` }, { onConflict: "dedupe_key", ignoreDuplicates: true });
  }
  await db.from("proposal_notices").upsert(ids.map((id) => ({ proposal_id: id })), { onConflict: "proposal_id", ignoreDuplicates: true });
  return ids.length;
}

// ---------- 2. the digest, every second Monday ----------

async function maybeDigest(k: Known): Promise<number> {
  const now = bkk();
  if (now.getUTCDay() !== 1 || now.getUTCHours() < 8) return 0;
  const today = todayBkk();
  const last = await db.from("mail_state").select("value").eq("key", "last_digest").maybeSingle();
  if (last.data?.value && daysBetween(last.data.value, today) < 13) return 0;
  await db.from("mail_state").upsert({ key: "last_digest", value: today, at: new Date().toISOString() });

  const [ideas, proposals, teams, pieces] = await Promise.all([
    siteData("ideas"), siteData("proposals"),
    db.from("proposal_team").select("proposal_id,members"),
    db.from("pieces").select("author,dept,contested,status").in("status", ["waiting", "returned"]),
  ]);
  let n = 0;
  for (const person of Object.values(k.people)) {
    const c = k.contacts[person.team_id];
    if (!c?.email || !c.digest_on) continue;
    const digest = buildDigest({ person, people: k.people, byId: k.byId, today, ideas: ideas.items || [], proposals: proposals.items || [], teams: teams.data || [], pieces: pieces.data || [] });
    if (!digest) continue;
    await db.from("outbox").upsert({ kind: "digest", to_team: person.team_id, data: digest, dedupe_key: `digest:${person.team_id}:${today}` }, { onConflict: "dedupe_key", ignoreDuplicates: true });
    n++;
  }
  return n;
}

// ---------- 3. the queue ----------

type Prepared = { skip: string } | { mail: { subject: string; html: string; text: string } };

async function prepare(row: any, k: Known): Promise<Prepared> {
  const to = k.people[row.to_team];
  const contact = k.contacts[row.to_team];
  if (!to) return { skip: "not on the team" };
  if (!contact?.email) return { skip: "no address" };
  if (row.kind === "digest" ? !contact.digest_on : (row.kind !== "test" && !contact.work_on)) return { skip: "emails off" };

  const c: Ctx = { site: SITE, today: todayBkk(), to, people: k.people };
  const kind: string = row.kind;

  if (EXPECT[kind]) {
    const { data: piece } = await db.from("pieces").select("id,title,status,dept,contested,author,publish_on,editor_note,submitted_at").eq("id", row.piece_id).maybeSingle();
    if (!piece) return { skip: "piece removed" };
    if (piece.status !== EXPECT[kind]) return { skip: `no longer ${EXPECT[kind]}` };
    c.piece = piece; c.author = k.byId[piece.author]; c.by = row.data?.by ? k.people[row.data.by] : null;
    const { data: notes } = await db.from("piece_notes").select("kind,body,created_at").eq("piece_id", piece.id).order("created_at", { ascending: false }).limit(6);
    if (kind === "returned") c.quote = (piece.editor_note || "").trim() || (notes || []).find((n: any) => n.kind === "review")?.body || "";
    if (kind === "resubmitted") c.quote = (notes || []).find((n: any) => n.kind === "reply")?.body || "";
    if (kind === "submitted" && to.role === "editor") {
      c.reason = piece.contested ? "It comes to you because it touches a contested political dispute, which only the editor reviews."
        : c.author?.role === "expert" ? "It comes to you because it was written by an expert."
        : "It comes to you because the department has no other expert to review it.";
    }
  } else if (kind === "proposal_team" || kind === "proposal_ready") {
    const items: any[] = (await siteData("proposals")).items || [];
    const pr = items.find((x) => x.id === row.proposal_id) || { id: row.proposal_id, title: "A proposal" };
    const { data: team } = await db.from("proposal_team").select("members").eq("proposal_id", row.proposal_id).maybeSingle();
    if (kind === "proposal_team" && !(team?.members || []).includes(row.to_team)) return { skip: "no longer on the proposal" };
    if (kind === "proposal_ready") {
      const { data: d } = await db.from("proposal_drafts").select("status,title").eq("proposal_id", row.proposal_id).maybeSingle();
      if (d?.status !== "ready") return { skip: "no longer ready" };
      c.draftTitle = d.title || "";
      c.by = row.data?.by ? k.people[row.data.by] : null;
    }
    c.proposal = pr; c.team = team?.members || (pr.pair || []).map((x: any) => x.id);
  } else if (kind === "proposal_new") {
    const items: any[] = (await siteData("proposals")).items || [];
    const { data: teams } = await db.from("proposal_team").select("proposal_id");
    const done = new Set((teams || []).map((t: any) => t.proposal_id));
    c.proposals = items.filter((x) => (row.data?.ids || []).includes(x.id) && !done.has(x.id) && daysBetween(c.today, x.deadline) >= 0);
    if (!c.proposals.length) return { skip: "already confirmed or closed" };
  } else if (kind === "reminder") {
    const items: any[] = row.data?.items || [];
    const { data: pieces } = await db.from("pieces").select("id,status").in("id", items.map((i) => i.piece_id));
    const status = new Map((pieces || []).map((p: any) => [p.id, p.status]));
    c.items = items.filter((i) => status.get(i.piece_id) === i.stage);
    if (!c.items.length) return { skip: "nothing left waiting" };
  } else if (kind === "digest") {
    c.digest = row.data;
  } else if (kind !== "test") {
    return { skip: `unknown kind ${kind}` };
  }
  return { mail: render(kind, c) };
}

async function processOutbox(k: Known, send: (to: string, m: any) => Promise<void>): Promise<{ sent: number; skipped: number; failed: number; deferred: number }> {
  const out = { sent: 0, skipped: 0, failed: 0, deferred: 0 };
  const nowIso = new Date().toISOString();
  const stale = new Date(Date.now() - 10 * 60 * 1000).toISOString();
  const { data: due, error } = await db.from("outbox").select("*").is("sent_at", null).is("skipped", null)
    .lte("send_after", nowIso).lt("attempts", 5).or(`claimed_at.is.null,claimed_at.lt.${stale}`).order("id").limit(30);
  if (error) throw error;
  for (const row of due || []) {
    const claimed = await db.from("outbox").update({ claimed_at: nowIso, attempts: row.attempts + 1 }).eq("id", row.id).eq("attempts", row.attempts).is("sent_at", null).select("id");
    if (!claimed.data?.length) continue;
    try {
      const prepared = await prepare(row, k);
      if ("skip" in prepared) { await db.from("outbox").update({ skipped: prepared.skip }).eq("id", row.id); out.skipped++; continue; }
      if (!["test", "digest"].includes(row.kind)) {
        const since = new Date(Date.now() - 24 * 3600 * 1000).toISOString();
        const { count } = await db.from("outbox").select("id", { count: "exact", head: true }).eq("to_team", row.to_team).gte("sent_at", since).not("kind", "in", "(test,digest)");
        if ((count || 0) >= DAILY_CAP) {
          await db.from("outbox").update({ send_after: new Date(Date.now() + 6 * 3600 * 1000).toISOString(), claimed_at: null, attempts: row.attempts }).eq("id", row.id);
          out.deferred++; continue;
        }
      }
      await send(k.contacts[row.to_team].email, prepared.mail);
      await db.from("outbox").update({ sent_at: new Date().toISOString(), last_error: null }).eq("id", row.id);
      out.sent++;
    } catch (e) {
      console.error("send failed", row.id, row.kind, String((e as Error)?.message || e));
      await db.from("outbox").update({ last_error: String((e as Error)?.message || e).slice(0, 300), claimed_at: null }).eq("id", row.id);
      out.failed++;
    }
  }
  return out;
}

// ---------- the call ----------

Deno.serve(async () => {
  const report: Record<string, unknown> = { at: new Date().toISOString() };
  try {
    const k = await known();
    const editor = Object.values(k.people).find((x) => x.role === "editor");
    const mail = mailer(editor ? k.contacts[editor.team_id]?.email : undefined);
    report.sender = mail ? mail.name : "not set up yet: nothing is sent";

    try { report.newProposals = await scanProposals(k); } catch (e) { report.scanError = String((e as Error).message || e); }
    if (mail) {
      try { report.digests = await maybeDigest(k); } catch (e) { report.digestError = String((e as Error).message || e); }
      try { report.queue = await processOutbox(k, mail.send); } finally { await mail.close(); }
    }
    return new Response(JSON.stringify({ ok: true, ...report }), { headers: { "Content-Type": "application/json" } });
  } catch (e) {
    console.error(e);
    return new Response(JSON.stringify({ ok: false, error: String((e as Error).message || e) }), { status: 500, headers: { "Content-Type": "application/json" } });
  }
});
