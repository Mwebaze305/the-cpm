// The emails: plain language, short, in the look of the site (navy and gold).
// Pure functions: they take what they need and return { subject, html, text }.
// No address, key or secret is in this file.

export type Person = { team_id: string; name: string; role: string; dept?: string | null };
export type Mail = { subject: string; html: string; text: string };

const NAVY = "#19486A", NAVY_DEEP = "#0E2C42", GOLD = "#BC9A5E", GOLD_DEEP = "#8C6D35", GOLD_INK = "#6F552A";
const INK = "#10293B", SOFT = "#3A5266", PAPER = "#F1EEE6", CARD = "#FAF8F3", LINE = "#E3DCCB", RED = "#8A2B2B";
const SERIF = "Georgia, 'Times New Roman', serif";
const SANS = "'Helvetica Neue', Helvetica, Arial, sans-serif";

export const esc = (s: unknown): string =>
  String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
export function fmtDate(iso?: string | null): string {
  const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(iso || "");
  return m ? `${Number(m[3])} ${MONTHS[Number(m[2]) - 1]} ${m[1]}` : "";
}
export function daysBetween(fromIso: string, toIso: string): number {
  return Math.round((Date.parse(toIso.slice(0, 10)) - Date.parse(fromIso.slice(0, 10))) / 86400000);
}
export const clip = (s: string, n: number): string => {
  const t = String(s || "").replace(/\s+/g, " ").trim();
  return t.length <= n ? t : t.slice(0, n - 1).replace(/\s+\S*$/, "") + "…";
};
const cap = (s: string) => (s ? s[0].toUpperCase() + s.slice(1) : s);

export const DEPT: Record<string, string> = { health: "Public health", gov: "Governance and development" };
const APPLY: Record<string, string> = { personal: "Personal application", organisation: "Application by The Credence Letters", paper: "Paper under our name" };

// "Dominick", "Albert", "Pavious": the team id, as the team pages show people.
export const first = (p?: Person | string | null): string => cap(typeof p === "string" ? p : p?.team_id || "");
export function nameList(ids: string[]): string {
  const n = ids.map((i) => cap(i));
  return n.length <= 1 ? n.join("") : n.slice(0, -1).join(", ") + " and " + n[n.length - 1];
}

export type Ctx = {
  site: string;                 // https://thecredenceletters.com
  today: string;                // YYYY-MM-DD, Bangkok
  to: Person;                   // the recipient
  people: Record<string, Person>;
  piece?: any; author?: Person; by?: Person | null; quote?: string; reason?: string;
  proposal?: any; proposals?: any[]; team?: string[]; draftTitle?: string;
  items?: any[];                // reminders
  digest?: any;
};

const page = (c: Ctx) => (c.to.role === "researcher" ? "researchers" : "experts");
const desk = (c: Ctx) => `${c.site}/${page(c)}`;
const pieceUrl = (c: Ctx, review: boolean) => `${desk(c)}#${review ? "review" : "piece"}/${c.piece.id}`;
const proposalUrl = (c: Ctx, id: string) => `${desk(c)}#proposal/${id}`;

// ---------- the frame ----------

type Frame = { pre: string; label: string; title: string; html: string; text: string; button?: { href: string; label: string }; note?: string };

function frame(c: Ctx, f: Frame): string {
  const settings = `${desk(c)}#emails`;
  const button = f.button
    ? `<table role="presentation" cellpadding="0" cellspacing="0" style="margin:26px 0 6px"><tr><td bgcolor="${GOLD}" style="border-radius:2px">
         <a href="${esc(f.button.href)}" style="display:inline-block;padding:13px 26px;font:700 12px/1 ${SANS};letter-spacing:.16em;text-transform:uppercase;color:${NAVY_DEEP};text-decoration:none">${esc(f.button.label)}</a>
       </td></tr></table>`
    : "";
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="color-scheme" content="light"><meta name="supported-color-schemes" content="light">
<title>${esc(f.title)}</title></head>
<body style="margin:0;padding:0;background:${PAPER};-webkit-text-size-adjust:100%">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;color:${PAPER};font-size:1px;line-height:1px">${esc(f.pre)}&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" bgcolor="${PAPER}"><tr><td align="center" style="padding:28px 12px 36px">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px">
  <tr><td bgcolor="${NAVY}" style="padding:22px 32px 20px;border-bottom:3px solid ${GOLD}">
    <div style="font:700 11px/1 ${SANS};letter-spacing:.3em;color:${GOLD}">THE CREDENCE</div>
    <div style="font:italic 400 27px/1.15 ${SERIF};color:#FFFFFF;padding-top:4px">Letters</div>
  </td></tr>
  <tr><td bgcolor="#FFFFFF" style="padding:34px 32px 30px;color:${INK};font:400 16px/1.6 ${SERIF}">
    <div style="font:700 11px/1.4 ${SANS};letter-spacing:.2em;text-transform:uppercase;color:${GOLD_INK}">${esc(f.label)}</div>
    <h1 style="margin:10px 0 18px;font:400 27px/1.25 ${SERIF};color:${NAVY_DEEP}">${esc(f.title)}</h1>
    <p style="margin:0 0 16px">Dear ${esc(first(c.to))},</p>
    ${f.html}
    ${button}
    ${f.note ? `<p style="margin:22px 0 0;font:400 14px/1.55 ${SANS};color:${SOFT}">${f.note}</p>` : ""}
  </td></tr>
  <tr><td style="padding:20px 32px 0;font:400 12px/1.6 ${SANS};color:${SOFT}">
    You receive this because you are on The Credence Letters team. Only the events that matter send an email, and none is sent for saving or commenting.
    <a href="${esc(settings)}" style="color:${GOLD_INK}">Change or switch off your emails</a>.
  </td></tr>
  <tr><td style="padding:8px 32px 0;font:400 12px/1.6 ${SANS};color:${SOFT}">The Credence Letters · Chiang Rai, Thailand · <a href="${esc(c.site)}" style="color:${GOLD_INK}">thecredenceletters.com</a></td></tr>
</table></td></tr></table></body></html>`;
}

function plain(c: Ctx, f: Frame): string {
  return [
    "THE CREDENCE LETTERS", "", f.label.toUpperCase(), f.title, "", `Dear ${first(c.to)},`, "", f.text.trim(),
    ...(f.button ? ["", `${f.button.label}: ${f.button.href}`] : []),
    ...(f.note ? ["", f.note.replace(/<[^>]+>/g, "")] : []),
    "", "—", "You receive this because you are on The Credence Letters team. Only the events that matter send an email.",
    `Change or switch off your emails: ${desk(c)}#emails`,
  ].join("\n");
}

const p = (html: string) => `<p style="margin:0 0 16px">${html}</p>`;
const small = (html: string) => `<span style="font:400 14px/1.5 ${SANS};color:${SOFT}">${html}</span>`;

function box(rows: string): string {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:6px 0 18px"><tr>
    <td bgcolor="${CARD}" style="padding:16px 18px;border:1px solid ${LINE};border-left:4px solid ${GOLD}">${rows}</td></tr></table>`;
}

function quote(text: string, who: string): string {
  const raw = String(text || "").trim();
  const body = esc(raw.length > 900 ? raw.slice(0, 899).replace(/\s+\S*$/, "") + "…" : raw).replace(/\n+/g, "<br>");
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:6px 0 18px"><tr>
    <td style="padding:2px 0 2px 18px;border-left:3px solid ${GOLD};font:italic 400 16px/1.6 ${SERIF};color:${INK}">${body}
    <div style="font:700 11px/1.4 ${SANS};letter-spacing:.14em;text-transform:uppercase;font-style:normal;color:${GOLD_INK};padding-top:8px">${esc(who)}</div></td></tr></table>`;
}

function pieceBox(c: Ctx): string {
  const pc = c.piece;
  const bits = [DEPT[pc.dept] || "", c.author ? `by ${first(c.author)}` : "", pc.submitted_at ? `sent ${fmtDate(pc.submitted_at)}` : ""].filter(Boolean).join(" · ");
  return box(`<div style="font:400 20px/1.3 ${SERIF};color:${NAVY_DEEP}">${esc(pc.title || "Untitled piece")}</div>
    <div style="font:400 13px/1.5 ${SANS};color:${SOFT};padding-top:6px">${esc(bits)}</div>`);
}

// A proposal, as on the team pages: what it is, the deadline, who, and the links.
export function proposalCard(c: Ctx, pr: any, pair?: string[]): string {
  const left = pr.deadline ? daysBetween(c.today, pr.deadline) : null;
  const urgent = left !== null && left <= 7;
  const people = (pair && pair.length ? pair : (pr.pair || []).map((x: any) => x.id)) as string[];
  const roles: Record<string, string> = {};
  (pr.pair || []).forEach((x: any) => { roles[x.id] = x.role; });
  const who = people.map((id) => `<strong>${esc(cap(id))}</strong>${roles[id] && pr.apply === "personal" ? ` ${small("(" + esc(roles[id].toLowerCase()) + ")")}` : ""}`).join(" and ");
  const links = [
    `<a href="${esc(proposalUrl(c, pr.id))}" style="color:${GOLD_INK};font-weight:700">Open</a>`,
    pr.link ? `<a href="${esc(pr.link)}" style="color:${GOLD_INK};font-weight:700">The call</a>` : "",
    (pr.briefs || []).length ? `${(pr.briefs || []).length} briefing idea${(pr.briefs || []).length > 1 ? "s" : ""}` : "",
  ].filter(Boolean).join(` <span style="color:${LINE}">&nbsp;|&nbsp;</span> `);
  return box(`
    <div style="font:700 10px/1.4 ${SANS};letter-spacing:.18em;text-transform:uppercase;color:${GOLD_INK}">${esc(APPLY[pr.apply] || "Proposal")}${pr.dept ? " · " + esc(DEPT[pr.dept] || "") : ""}</div>
    <div style="font:400 20px/1.3 ${SERIF};color:${NAVY_DEEP};padding:6px 0 8px">${esc(pr.title)}</div>
    ${pr.deadline ? `<div style="font:400 13px/1.5 ${SANS};color:${SOFT}">Deadline ${esc(fmtDate(pr.deadline))}${left !== null && left >= 0 ? ` · <strong style="color:${urgent ? RED : GOLD_INK}">${left === 0 ? "today" : left === 1 ? "1 day left" : left + " days left"}</strong>` : ""}</div>` : ""}
    ${who ? `<div style="font:400 15px/1.5 ${SERIF};color:${INK};padding-top:8px">${who}</div>` : ""}
    ${pr.ask ? `<div style="font:400 14px/1.55 ${SANS};color:${SOFT};padding-top:8px">${esc(clip(pr.ask, 230))}</div>` : ""}
    <div style="font:400 13px/1.5 ${SANS};color:${SOFT};padding-top:10px">${links}</div>`);
}

function proposalCardText(c: Ctx, pr: any, pair?: string[]): string {
  const left = pr.deadline ? daysBetween(c.today, pr.deadline) : null;
  const people = pair && pair.length ? pair : (pr.pair || []).map((x: any) => x.id);
  return [`• ${pr.title}`, `  ${APPLY[pr.apply] || "Proposal"}${pr.deadline ? " · deadline " + fmtDate(pr.deadline) : ""}${left !== null && left >= 0 ? " (" + left + " days left)" : ""}`,
    people.length ? `  ${nameList(people)}` : "", `  ${proposalUrl(c, pr.id)}`].filter(Boolean).join("\n");
}

const shorten = (s: string, n: number) => clip(s, Math.min(n, 62));

// ---------- the emails ----------

export function render(kind: string, c: Ctx): Mail {
  const title = c.piece?.title || "Untitled piece";
  let f: Frame, subject: string;

  switch (kind) {
    case "submitted": {
      subject = `For your review: ${shorten(title, 80)}`;
      f = {
        pre: `${first(c.author)} has sent a piece for review.`, label: "For your review",
        title: `${first(c.author)} has sent a piece for review`,
        html: p(`A piece is waiting for you. Please read it, then approve it or send it back with your comments.`) + pieceBox(c) +
          (c.reason ? p(small(esc(c.reason))) : ""),
        text: `A piece is waiting for you. Please read it, then approve it or send it back with your comments.\n\n"${title}" by ${first(c.author)}${c.piece.dept ? " (" + DEPT[c.piece.dept] + ")" : ""}\n${c.reason || ""}`,
        button: { href: pieceUrl(c, true), label: "Open the piece" },
        note: "If you cannot get to it soon, please tell the editor so it can be passed on.",
      };
      break;
    }
    case "resubmitted": {
      subject = `Back for your review: ${shorten(title, 80)}`;
      f = {
        pre: `${first(c.author)} has answered the comments and sent the piece again.`, label: "Sent again",
        title: `${first(c.author)} has sent the piece again`,
        html: p(`The piece you sent back has been revised and is waiting for you again.`) + pieceBox(c) +
          (c.quote ? p(small("Their note to you:")) + quote(c.quote, first(c.author)) : ""),
        text: `The piece you sent back has been revised and is waiting for you again.\n\n"${title}" by ${first(c.author)}\n${c.quote ? "\nTheir note to you:\n" + clip(c.quote, 900) : ""}`,
        button: { href: pieceUrl(c, true), label: "Open the piece" },
      };
      break;
    }
    case "returned": {
      subject = `Comments on your piece: ${shorten(title, 80)}`;
      const who = first(c.by) || "A reviewer";
      f = {
        pre: `${who} has sent your piece back with comments.`, label: "Sent back to you",
        title: `${who} has sent your piece back with comments`,
        html: p(`Thank you for “${esc(title)}”. It needs a little more work before it can be approved.`) +
          (c.quote ? quote(c.quote, who) : "") +
          p(`Please read the comments, make the changes, answer any questions, and send it again.`),
        text: `Thank you for "${title}". It needs a little more work before it can be approved.\n\n${c.quote ? `${who} writes:\n${clip(c.quote, 900)}\n\n` : ""}Please read the comments, make the changes, answer any questions, and send it again.`,
        button: { href: pieceUrl(c, false), label: "Open your piece" },
      };
      break;
    }
    case "approved": {
      subject = `Approved: ${shorten(title, 80)}`;
      const when = c.piece.publish_on ? `It will appear on the site on ${fmtDate(c.piece.publish_on)}.` : "The editor will set the day it appears on the site.";
      f = {
        pre: `“${title}” has been approved.`, label: "Approved",
        title: "Your piece has been approved",
        html: p(`Congratulations: “${esc(title)}” has been approved${c.by ? " by " + esc(first(c.by)) : ""}. ${esc(when)}`) +
          p(`Thank you for the care you put into it.`),
        text: `Congratulations: "${title}" has been approved${c.by ? " by " + first(c.by) : ""}. ${when}\n\nThank you for the care you put into it.`,
        button: { href: pieceUrl(c, false), label: "Open your piece" },
      };
      break;
    }
    case "approved_editor": {
      subject = `Approved by ${first(c.by)}: ${shorten(title, 70)}`;
      const when = c.piece.publish_on ? `It is set to appear on ${fmtDate(c.piece.publish_on)}.` : "It has no publishing day yet.";
      f = {
        pre: `${first(c.by)} approved a piece by ${first(c.author)}.`, label: "Approved",
        title: `${first(c.by)} has approved a piece`,
        html: p(`${esc(first(c.by))} approved this piece by ${esc(first(c.author))}. ${esc(when)}`) + pieceBox(c),
        text: `${first(c.by)} approved this piece by ${first(c.author)}. ${when}\n\n"${title}"`,
        button: { href: pieceUrl(c, true), label: "Open the piece" },
      };
      break;
    }
    case "proposal_team": {
      const pr = c.proposal, others = (c.team || []).filter((i) => i !== c.to.team_id);
      const withWho = others.length ? nameList(others) : "the editor";
      subject = `You and ${withWho} could work on: ${shorten(pr.title, 60)}`;
      f = {
        pre: `The editor has confirmed ${nameList(c.team || [])} on this proposal.`, label: "A proposal for you",
        title: others.length ? `You and ${withWho} could work on this` : "You could work on this",
        html: p(`The editor has confirmed you${others.length ? " and " + esc(withWho) : ""} on this proposal. Open it to read the call and start the shared draft, which only ${others.length ? "the two of you" : "you"} and the editor can see.`) +
          proposalCard(c, pr, c.team),
        text: `The editor has confirmed ${nameList(c.team || [])} on this proposal. Open it to read the call and start the shared draft, which only the people on it and the editor can see.\n\n${proposalCardText(c, pr, c.team)}`,
        button: { href: proposalUrl(c, pr.id), label: "Open the proposal" },
        note: pr.deadline ? `Our own date for a finished draft is ${esc(fmtDate(pr.due || pr.deadline))}.` : undefined,
      };
      break;
    }
    case "proposal_new": {
      const list = c.proposals || [];
      subject = list.length === 1 ? `A new proposal to confirm: ${shorten(list[0].title, 70)}` : `${list.length} new proposals to confirm`;
      f = {
        pre: list.length === 1 ? "A call the team could answer, with two suggested people." : "Calls the team could answer, each with two suggested people.",
        label: "For you to confirm",
        title: list.length === 1 ? "A new proposal is suggested" : `${list.length} new proposals are suggested`,
        html: p(`${list.length === 1 ? "A call" : "These calls"} the team could answer ${list.length === 1 ? "has" : "have"} been worked out, with suggested people. Nobody is told until you confirm the people, or change them, on the team page.`) +
          list.map((x) => proposalCard(c, x)).join(""),
        text: `${list.length === 1 ? "A call" : "These calls"} the team could answer ${list.length === 1 ? "has" : "have"} been worked out, with suggested people. Nobody is told until you confirm the people, or change them, on the team page.\n\n${list.map((x) => proposalCardText(c, x)).join("\n\n")}`,
        button: { href: list.length === 1 ? proposalUrl(c, list[0].id) : `${desk(c)}#`, label: list.length === 1 ? "Confirm the people" : "Open the proposals" },
      };
      break;
    }
    case "proposal_ready": {
      const pr = c.proposal;
      subject = `Proposal ready for you: ${shorten(c.draftTitle || pr.title, 70)}`;
      f = {
        pre: `${first(c.by)} has marked the shared draft ready.`, label: "Ready for you",
        title: "A proposal draft is ready",
        html: p(`${esc(first(c.by) || "A colleague")} has marked the shared draft of this proposal ready for you to read.`) + proposalCard(c, pr, c.team),
        text: `${first(c.by) || "A colleague"} has marked the shared draft of this proposal ready for you to read.\n\n${proposalCardText(c, pr, c.team)}`,
        button: { href: proposalUrl(c, pr.id), label: "Read the draft" },
      };
      break;
    }
    case "reminder": {
      const items = c.items || [];
      const second = items.some((i) => i.nth === 2);
      subject = items.length === 1 ? `${second ? "Still waiting" : "A reminder"}: ${shorten(items[0].title || "Untitled piece", 70)}` : `${second ? "Still waiting" : "A reminder"}: ${items.length} pieces need you`;
      const line = (i: any) => i.stage === "waiting"
        ? `waiting for your review for ${i.days} days`
        : `sent back to you ${i.days} days ago`;
      f = {
        pre: items.length === 1 ? `“${items[0].title}” is ${line(items[0])}.` : "Some work is waiting for you.", label: second ? "Still waiting" : "A gentle reminder",
        title: items.length === 1 ? "One piece is waiting for you" : `${items.length} pieces are waiting for you`,
        html: p(`So that nothing is forgotten, here is what is waiting:`) +
          items.map((i) => `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 10px"><tr><td bgcolor="${CARD}" style="padding:12px 16px;border:1px solid ${LINE};border-left:4px solid ${i.stage === "waiting" ? GOLD : NAVY}">
            <a href="${esc(`${desk(c)}#${i.stage === "waiting" ? "review" : "piece"}/${i.piece_id}`)}" style="font:400 18px/1.3 ${SERIF};color:${NAVY_DEEP};text-decoration:none">${esc(i.title || "Untitled piece")}</a>
            <div style="font:400 13px/1.5 ${SANS};color:${SOFT};padding-top:4px">${esc(cap(line(i)))}</div></td></tr></table>`).join(""),
        text: `So that nothing is forgotten, here is what is waiting:\n\n${items.map((i) => `• ${i.title || "Untitled piece"}: ${line(i)}\n  ${desk(c)}#${i.stage === "waiting" ? "review" : "piece"}/${i.piece_id}`).join("\n")}`,
        button: { href: `${desk(c)}#`, label: "Open your desk" },
        note: "You will not be reminded about the same piece more than twice.",
      };
      break;
    }
    case "digest": {
      const d = c.digest;
      subject = `Your fortnight at The Credence Letters`;
      const sect = (label: string, inner: string) => `<div style="font:700 11px/1.4 ${SANS};letter-spacing:.2em;text-transform:uppercase;color:${GOLD_INK};padding:14px 0 8px;border-top:1px solid ${LINE};margin-top:8px">${esc(label)}</div>${inner}`;
      let html = p(`Here is what is worth your attention over the last two weeks.`);
      let text = "Here is what is worth your attention over the last two weeks.\n";
      if (d.waiting || d.returned || d.unconfirmed) {
        const bits = [d.waiting ? `${d.waiting} piece${d.waiting > 1 ? "s" : ""} waiting for your review` : "", d.returned ? `${d.returned} piece${d.returned > 1 ? "s" : ""} sent back to you` : "", d.unconfirmed ? `${d.unconfirmed} proposal${d.unconfirmed > 1 ? "s" : ""} waiting for you to confirm the people` : ""].filter(Boolean);
        html += sect("Waiting for you", `<ul style="margin:0 0 12px;padding-left:20px">${bits.map((b) => `<li style="margin:0 0 4px">${esc(b)}</li>`).join("")}</ul>`);
        text += `\nWAITING FOR YOU\n${bits.map((b) => "• " + b).join("\n")}\n`;
      }
      if ((d.proposals || []).length) {
        html += sect("Your proposals", d.proposals.map((x: any) => proposalCard(c, x.item, x.team)).join(""));
        text += `\nYOUR PROPOSALS\n${d.proposals.map((x: any) => proposalCardText(c, x.item, x.team)).join("\n\n")}\n`;
      }
      if ((d.ideas || []).length) {
        html += sect("Briefing ideas that suit you", d.ideas.map((i: any) => box(`
          <div style="font:700 10px/1.4 ${SANS};letter-spacing:.18em;text-transform:uppercase;color:${GOLD_INK}">${esc(fmtDate(i.date))}</div>
          <div style="font:400 19px/1.3 ${SERIF};color:${NAVY_DEEP};padding:5px 0 0">${esc(i.title)}</div>
          ${i.also.length ? `<div style="font:400 14px/1.5 ${SERIF};color:${INK};padding-top:8px">${i.also.length > 1 ? "You, " : "You and "}<strong>${esc(nameList(i.also))}</strong> could write this one together.</div>` : ""}`)).join(""));
        text += `\nBRIEFING IDEAS THAT SUIT YOU\n${d.ideas.map((i: any) => `• ${i.title} (${fmtDate(i.date)})${i.also.length ? "\n  " + (i.also.length > 1 ? "You, " : "You and ") + nameList(i.also) + " could write this one together." : ""}`).join("\n")}\n`;
      }
      f = { pre: "Work waiting, your proposals, and briefing ideas that suit you.", label: "Every two weeks", title: "Your fortnight at The Credence Letters", html, text, button: { href: `${desk(c)}#`, label: "Open your desk" } };
      break;
    }
    case "test": {
      subject = "A test email from The Credence Letters";
      f = {
        pre: "If you can read this, the team emails are working.", label: "Test", title: "The team emails are working",
        html: p(`This is a test. If you can read it, the emails for review, comments, approval, proposals and the fortnightly digest will reach you here.`),
        text: "This is a test. If you can read it, the emails for review, comments, approval, proposals and the fortnightly digest will reach you here.",
        button: { href: `${desk(c)}#`, label: "Open your desk" },
      };
      break;
    }
    default:
      throw new Error(`Unknown email kind: ${kind}`);
  }
  return { subject, html: frame(c, f), text: plain(c, f) };
}
