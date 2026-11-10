/* The Credence Letters — the team pages: code shared by researchers.html and
   experts.html (the page itself is team-desk.js).

   Signing in has three steps: Expert or Researcher, then the member's name
   from that list, then their password. The first time, they enter the
   one-time setup code the editor gave them and create their own password.
   Behind the scenes each account is <team id>@desk.thecredenceletters.com, an
   address that receives no email. Accounts, pieces, comments and take-ups live
   in Supabase (supabaseUrl and supabaseKey in config.js; tables and rules in
   supabase/schema.sql).

   Two-step sign-in: after the password, an account linked to an
   authenticator app must also give the 6-digit code from it. Experts and the
   editor must have one before they can review; researchers can turn it on.
   The database enforces both (supabase/schema.sql).

   On a local test copy only (localhost), ?preview runs the pages on sample
   people and sample data kept in the browser tab. It does nothing on the
   live site. */
(function () {
  "use strict";

  /* The team pages never run inside another site's frame, so nobody can lay
     a page over them to trick a member into pressing Approve or Submit. */
  if (window.top !== window.self) {
    window.Desk = null;
    document.documentElement.style.display = "none";
    return;
  }

  var CFG = window.CPM_CONFIG || {};
  var PHOTOS = window.CPM_PHOTOS || {};
  var TEAM = window.CPM_TEAM || [];
  var DISP = window.CPM_DISPATCHES || { items: [] };
  var QS = window.CPM_DESK_QUESTIONS || { items: {} };
  var Desk = window.Desk = {};

  Desk.VERSION = 2;                 /* the database version these pages need (public.desk_version) */
  Desk.local = /^(localhost|127\.0\.0\.1|\[::1\]|.+\.localhost)$/.test(window.location.hostname);
  Desk.preview = Desk.local && /[?&]preview(=|&|$)/.test(window.location.search);
  Desk.configured = !!(CFG.supabaseUrl && CFG.supabaseKey);
  Desk.DOMAIN = CFG.deskDomain || "desk.thecredenceletters.com";
  Desk.loginEmail = function (teamId) { return String(teamId || "").toLowerCase() + "@" + Desk.DOMAIN; };
  Desk.page = function (role) { return (role === "expert" ? "experts.html" : "researchers.html") + (Desk.preview ? "?preview" : ""); };

  /* ---------- helpers ---------- */
  var esc = Desk.esc = function (s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };
  Desk.$ = function (sel, root) { return (root || document).querySelector(sel); };
  Desk.$all = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };
  Desk.store = {
    get: function (k) { try { return window.localStorage.getItem("cl-desk-" + k); } catch (e) { return null; } },
    set: function (k, v) { try { window.localStorage.setItem("cl-desk-" + k, v); } catch (e) { /* storage blocked */ } }
  };

  /* Publish dates follow the editor's calendar in Chiang Rai. */
  Desk.today = function () {
    try {
      return new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Bangkok", year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date());
    } catch (e) { return new Date().toISOString().slice(0, 10); }
  };
  Desk.addDays = function (iso, n) {
    var d = new Date(iso + "T12:00:00Z");
    d.setUTCDate(d.getUTCDate() + n);
    return d.toISOString().slice(0, 10);
  };
  Desk.day = function (iso, long) {
    if (!iso) return "";
    try {
      return new Intl.DateTimeFormat("en-GB", long ? { weekday: "long", day: "numeric", month: "long" } : { day: "numeric", month: "short", year: "numeric" })
        .format(new Date(String(iso).slice(0, 10) + "T12:00:00"));
    } catch (e) { return iso; }
  };
  Desk.when = function (ts) {
    if (!ts) return "";
    var d = new Date(ts);
    try {
      var day = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short" }).format(d);
      var time = new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit" }).format(d);
      return day + ", " + time;
    } catch (e) { return String(ts); }
  };
  Desk.clock = function () {
    try { return new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit" }).format(new Date()); } catch (e) { return ""; }
  };
  Desk.words = function (s) { var m = String(s || "").trim().match(/\S+/g); return m ? m.length : 0; };
  Desk.first = function (name) { return String(name || "").trim().split(/\s+/)[0] || ""; };

  /* ---------- departments, people, photos, focus areas ---------- */
  Desk.DEPTS = [["health", "Public health"], ["gov", "Governance and development"]];
  Desk.deptName = function (key) {
    for (var i = 0; i < Desk.DEPTS.length; i++) if (Desk.DEPTS[i][0] === key) return Desk.DEPTS[i][1];
    return "";
  };
  Desk.REGIONS = { gl: "Great Lakes", nile: "Nile Basin", sea: "Southeast Asia", afasia: "Africa–Asia" };
  var REGION_PHOTO = { gl: "goma-kivu", nile: "gerd-space", sea: "golden-triangle", afasia: "au-addis" };

  Desk.member = function (id) {
    for (var i = 0; i < TEAM.length; i++) if (TEAM[i].id === id) return TEAM[i];
    return null;
  };
  Desk.field = function (teamId) {
    var m = Desk.member(teamId);
    return m && m.field ? (m.field.en || "") : "";
  };
  /* A member's photo from team.js (never in the preview, which uses sample people). */
  Desk.face = function (teamId, size) {
    var m = Desk.preview ? null : Desk.member(teamId);
    size = size || 40;
    return m && m.photo ? '<img class="desk-face" src="' + esc(m.photo) + '" width="' + size + '" height="' + size + '" style="width:' + size + "px;height:" + size + 'px" alt="" loading="lazy">' :
      '<span class="desk-face desk-face-blank" style="width:' + size + "px;height:" + size + 'px" aria-hidden="true"></span>';
  };
  Desk.FOCUS = [
    ["health", "Border health and displacement"],
    ["peace", "Intergovernmental relations, peace and conflict"],
    ["rivers", "Shared rivers and upstream dams"],
    ["trade", "Cross-border trade and regional integration"],
    ["own", "Another question"]
  ];
  Desk.focusName = function (key) {
    for (var i = 0; i < Desk.FOCUS.length; i++) if (Desk.FOCUS[i][0] === key) return Desk.FOCUS[i][1];
    return "";
  };
  Desk.photoKeys = function () { return Object.keys(PHOTOS); };
  Desk.photoCap = function (key) { var p = PHOTOS[key]; return p ? (p.cap.en || "") : ""; };
  Desk.photoImg = function (key, sizes, cls) {
    var p = PHOTOS[key];
    if (!p) return "";
    return '<img' + (cls ? ' class="' + cls + '"' : "") + ' src="' + esc(p.sm) + '" srcset="' + esc(p.sm) + " 800w, " + esc(p.src) + " " + p.w + 'w" sizes="' +
      esc(sizes || "100vw") + '" width="' + p.w + '" height="' + p.h + '" loading="lazy" decoding="async" alt="' + esc(Desk.photoCap(key)) + '">';
  };
  Desk.photoCredit = function (key) {
    var p = PHOTOS[key];
    return p ? '<a class="desk-cap" href="credits.html#p-' + esc(key) + '" target="_blank" rel="noopener">' + esc(p.cap.en) + " · Photo: " + esc(p.artist) + " · " + esc(p.license) + "</a>" : "";
  };

  /* ---------- dispatches, with their department and research questions ---------- */
  var TOPIC_FOCUS = { health: "health", refugees: "health", peace: "peace", diplomacy: "peace", rivers: "rivers", trade: "trade" };
  Desk.dispatchesUpdated = DISP.updated || "";
  Desk.dispatches = function () {
    return (DISP.items || []).filter(function (d) { return d && d.id && d.title && d.title.en; }).map(function (d) {
      var q = (QS.items || {})[d.id] || {};
      return {
        id: d.id, date: d.date, region: d.region, upcoming: !!d.upcoming,
        title: d.title.en, summary: d.summary ? d.summary.en || "" : "", why: d.why ? d.why.en || "" : "",
        sources: d.sources || [],
        photo: d.photo && PHOTOS[d.photo] ? d.photo : REGION_PHOTO[d.region] || null,
        dept: q.dept || (d.topic === "health" ? "health" : "gov"),
        focus: q.focus || TOPIC_FOCUS[d.topic] || "own",
        contested: !!q.contested,
        questions: q.questions || []
      };
    });
  };
  Desk.dispatch = function (id) {
    var all = Desk.dispatches();
    for (var i = 0; i < all.length; i++) if (all[i].id === id) return all[i];
    return null;
  };

  /* ---------- status: what a piece's button and chip show ---------- */
  Desk.status = function (p) {
    if (!p || !p.status || p.status === "draft") return { key: "draft", tone: "grey", label: "Draft · not sent", button: "SUBMIT" };
    if (p.status === "returned") return { key: "returned", tone: "red", label: "Sent back", button: "SUBMIT AGAIN" };
    if (p.status === "waiting") return { key: "waiting", tone: "orange", label: "Waiting review", button: "WAITING REVIEW" };
    var live = p.publish_on && p.publish_on <= Desk.today();
    return live ?
      { key: "published", tone: "green", label: "Published " + Desk.day(p.publish_on), button: "PUBLISHED", sub: "Published " + Desk.day(p.publish_on) } :
      { key: "scheduled", tone: "green", label: "Approved · publishes " + Desk.day(p.publish_on), button: "APPROVED", sub: "Publishes " + Desk.day(p.publish_on, true) };
  };
  Desk.chip = function (p) {
    var s = Desk.status(p);
    return '<span class="st-chip st-' + s.tone + '"><i aria-hidden="true"></i>' + esc(s.label) + "</span>";
  };

  /* ---------- writing: plain text in, safe HTML out (textformat.js) ---------- */
  Desk.renderBody = function (text) { return window.CPM_TEXT.body(text); };
  Desk.renderSources = function (text) { return window.CPM_TEXT.sources(text); };
  Desk.sourceLine = function (s) {
    return [s.name, s.date ? "(" + Desk.day(s.date) + ")" : "", s.title || "", s.url].filter(Boolean).join(" ").replace(/\s+/g, " ");
  };
  Desk.hasSolution = function (body) { return /^##\s*what should be done\s*$/im.test(String(body || "")); };
  Desk.sourceCount = function (text) { return String(text || "").split(/\n/).filter(function (l) { return l.trim(); }).length; };

  /* What changed between two versions of a text, word by word: removed words
     struck through, new words highlighted. */
  Desk.diff = function (before, after) {
    function tokens(s) { return String(s || "").match(/\s+|[^\s]+/g) || []; }
    function lcsDiff(a, b) {
      var n = a.length, m = b.length;
      if (n * m > 4000000) return [["del", a.join("")], ["ins", b.join("")]];
      var dp = [], i, j;
      for (i = 0; i <= n; i++) dp.push(new Uint16Array(m + 1));
      for (i = n - 1; i >= 0; i--) for (j = m - 1; j >= 0; j--) dp[i][j] = a[i] === b[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
      var out = [];
      i = 0; j = 0;
      while (i < n && j < m) {
        if (a[i] === b[j]) { out.push(["same", a[i]]); i++; j++; }
        else if (dp[i + 1][j] >= dp[i][j + 1]) { out.push(["del", a[i]]); i++; }
        else { out.push(["ins", b[j]]); j++; }
      }
      while (i < n) out.push(["del", a[i++]]);
      while (j < m) out.push(["ins", b[j++]]);
      return out;
    }
    var parts = lcsDiff(tokens(before), tokens(after)), html = "", changed = 0;
    parts.forEach(function (p) {
      var t = esc(p[1]).replace(/\n/g, "<br>");
      if (p[0] === "same") html += t;
      else if (/^\s+$/.test(p[1])) html += p[0] === "ins" ? t : "";
      else { changed++; html += p[0] === "ins" ? "<ins>" + t + "</ins>" : "<del>" + t + "</del>"; }
    });
    return { html: html, changed: changed };
  };

  /* ---------- uploads ---------- */
  Desk.MAX_FILE = 20 * 1024 * 1024;
  Desk.MAX_COVER = 10 * 1024 * 1024;
  var TYPES = {
    docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    doc: "application/msword",
    odt: "application/vnd.oasis.opendocument.text",
    pdf: "application/pdf",
    rtf: "application/rtf",
    txt: "text/plain"
  };
  var IMAGES = { jpg: "image/jpeg", jpeg: "image/jpeg", png: "image/png", webp: "image/webp" };
  Desk.fileExt = function (name) { var m = /\.([a-z0-9]+)$/i.exec(name || ""); return m ? m[1].toLowerCase() : ""; };
  Desk.fileType = function (name) { return TYPES[Desk.fileExt(name)] || ""; };
  Desk.imageType = function (name) { return IMAGES[Desk.fileExt(name)] || ""; };
  Desk.ACCEPT = Object.keys(TYPES).map(function (k) { return "." + k; }).join(",");
  Desk.ACCEPT_IMAGE = Object.keys(IMAGES).map(function (k) { return "." + k; }).join(",");
  var previewCovers = {};
  Desk.coverUrl = function (path) {
    if (!path) return "";
    if (Desk.preview) return previewCovers[path] || "";
    return String(CFG.supabaseUrl || "").replace(/\/+$/, "") + "/storage/v1/object/public/covers/" + path.split("/").map(encodeURIComponent).join("/");
  };

  /* Words from a Word or text file, so they can be edited in the box. */
  var mammothLoading = null;
  function loadMammoth() {
    if (window.mammoth) return Promise.resolve(window.mammoth);
    if (!mammothLoading) {
      mammothLoading = new Promise(function (resolve, reject) {
        var s = document.createElement("script");
        s.src = "assets/js/vendor/mammoth-1.13.0.min.js";
        s.onload = function () { resolve(window.mammoth); };
        s.onerror = function () { mammothLoading = null; reject(new Error("Could not load the Word reader")); };
        document.head.appendChild(s);
      });
    }
    return mammothLoading;
  }
  Desk.extractText = function (file) {
    var ext = Desk.fileExt(file.name);
    if (ext === "txt") return file.text();
    if (ext === "docx") {
      return Promise.all([loadMammoth(), file.arrayBuffer()]).then(function (r) {
        return r[0].extractRawText({ arrayBuffer: r[1] }).then(function (out) {
          return String(out.value || "").replace(/\n{3,}/g, "\n\n").trim();
        });
      });
    }
    return Promise.resolve(null);
  };

  /* ---------- who can sign in where ----------
     Experts list: experts and the editor. Researchers list: researchers,
     founders who also research, and experts (who may also write as
     researchers). The preview uses sample people instead of the real team. */
  var SAMPLE_PEOPLE = [
    { id: "sample-health", name: "Sample Health Expert", role: "expert", dept: "health", title: "Public health expert" },
    { id: "sample-gov", name: "Sample Governance Expert", role: "expert", dept: "gov", title: "Governance and development expert" },
    { id: "sample-editor", name: "Sample Editor", role: "editor", dept: null, title: "Editor", researches: true },
    { id: "sample-researcher", name: "Sample Researcher", role: "researcher", dept: null, title: "Researcher" },
    { id: "sample-researcher-2", name: "Second Sample Researcher", role: "researcher", dept: null, title: "Researcher" }
  ];
  function teamPeople() {
    if (Desk.preview) return SAMPLE_PEOPLE;
    return TEAM.filter(function (m) { return m.desk || m.group === "expert" || m.group === "researcher" || m.team; }).map(function (m) {
      var role = m.desk === "editor" ? "editor" : m.group === "expert" ? "expert" : "researcher";
      /* "PUBLIC HEALTH EXPERT · TANZANIA" → "Public health expert · Tanzania" */
      var title = m.role && m.role.en ? m.role.en.split(" · ").map(function (part, i) {
        var low = part.toLowerCase();
        return i === 0 ? low.charAt(0).toUpperCase() + low.slice(1) : low.replace(/(^|[\s-])([a-z])/g, function (x, sp, c) { return sp + c.toUpperCase(); });
      }).join(" · ") : "";
      return { id: m.id, name: m.name, role: role, dept: m.dept || null, title: title, researches: m.team === "researcher" || m.group === "researcher" };
    });
  }
  Desk.people = teamPeople;
  Desk.list = function (role) {
    return teamPeople().filter(function (p) {
      if (role === "expert") return p.role === "expert" || p.role === "editor";
      return p.role === "researcher" || p.role === "expert" || p.researches;
    }).sort(function (a, b) { return a.name.localeCompare(b.name); });
  };

  /* ---------- connection ---------- */
  function must(r) { if (r.error) throw r.error; return r.data; }
  function nameOf(teamId) { var m = Desk.member(teamId); return m ? m.name : ""; }
  var METHODS = ["init", "signIn", "setup", "signOut", "version", "me", "team", "pieces", "create", "update", "remove", "upload", "removeFile", "fileUrl",
    "uploadCover", "removeCover", "takeups", "take", "linkTakeup", "giveBack", "notes", "addNote", "level", "factors", "enroll", "verify", "unenroll"];
  function downApi(message, extra) {
    var o = extra || {};
    METHODS.forEach(function (k) { if (!o[k]) o[k] = function () { return Promise.reject(new Error(message)); }; });
    return o;
  }

  /* Before Supabase is set up: nobody can sign in. */
  function offlineApi() {
    return downApi("The team pages are not connected yet.", { live: false, offline: true,
      init: function () { return Promise.resolve({ signedIn: false }); }, signOut: function () { return Promise.resolve(); } });
  }

  function supabaseApi() {
    if (!window.supabase || !window.supabase.createClient) {
      return downApi("Could not reach the sign-in service. Check your connection and reload the page.", { live: true });
    }
    var sb = window.supabase.createClient(CFG.supabaseUrl, CFG.supabaseKey, {
      auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: false, storageKey: "cl-desk-auth" }
    });
    var user = null;
    sb.auth.onAuthStateChange(function (event, session) { user = session ? session.user : null; });
    var PIECE_COLS = "id,author,title,summary,body,sources,focus,photo,idea_id,file_path,file_name,status,editor_note,slug,submitted_at,approved_at,publish_on," +
      "created_at,updated_at,dept,dispatch_id,cover_path,cover_credit,reviewed_by,returned_body,contested";
    var WITH_AUTHOR = PIECE_COLS + ",profile:profiles!pieces_author_fkey(name,team_id,role)";
    function withAuthor(rows) {
      return (rows || []).map(function (r) {
        r.author_team = r.profile ? r.profile.team_id : "";
        r.author_name = (r.profile && r.profile.name) || nameOf(r.author_team);
        r.author_role = r.profile ? r.profile.role : "";
        delete r.profile;
        return r;
      });
    }
    function one(q) { return q.select(WITH_AUTHOR).single().then(must).then(function (p) { return withAuthor([p])[0]; }); }
    function signIn(teamId, password) {
      return sb.auth.signInWithPassword({ email: Desk.loginEmail(teamId), password: password }).then(function (r) { user = must(r).user; });
    }
    return {
      live: true,
      init: function () {
        return sb.auth.getSession().then(function (r) {
          var s = must(r).session;
          user = s ? s.user : null;
          return { signedIn: !!s };
        });
      },
      signIn: signIn,
      /* First time (or with a new code from the editor): the code is the
         account's temporary password; it is replaced by the member's own.
         beforeChange runs in between (the two-step code, if the account has
         an authenticator app). */
      setup: function (teamId, code, password, beforeChange) {
        return signIn(teamId, code).then(function () {
          return beforeChange ? beforeChange() : null;
        }).then(function () {
          return sb.auth.updateUser({ password: password, currentPassword: code }).then(must);
        }).catch(function (err) {
          return sb.auth.signOut().then(function () { throw err; }, function () { throw err; });
        });
      },
      signOut: function () { return sb.auth.signOut(); },
      /* The database's version; 0 if supabase/schema.sql has not been run since these pages changed. */
      version: function () { return sb.rpc("desk_version").then(function (r) { return r.error ? 0 : (r.data || 0); }, function () { return 0; }); },
      /* Two-step sign-in with an authenticator app (TOTP). */
      level: function () { return sb.auth.mfa.getAuthenticatorAssuranceLevel().then(must); },
      factors: function () { return sb.auth.mfa.listFactors().then(must).then(function (d) { return d.totp || []; }); },
      enroll: function () {
        /* Clear any half-finished attempt first, then start a new one. */
        return sb.auth.mfa.listFactors().then(must).then(function (d) {
          var unfinished = (d.all || []).filter(function (f) { return f.status !== "verified"; });
          return Promise.all(unfinished.map(function (f) { return sb.auth.mfa.unenroll({ factorId: f.id }); }));
        }).then(function () {
          return sb.auth.mfa.enroll({ factorType: "totp", issuer: "The Credence Letters",
            friendlyName: "Phone " + new Date().toISOString().slice(0, 16).replace("T", " ") }).then(must);
        }).then(function (d) { return { id: d.id, qr: d.totp.qr_code, secret: d.totp.secret }; });
      },
      verify: function (factorId, code) { return sb.auth.mfa.challengeAndVerify({ factorId: factorId, code: code }).then(must); },
      unenroll: function (factorId) {
        return sb.auth.mfa.unenroll({ factorId: factorId }).then(must).then(function () { return sb.auth.refreshSession(); }).then(must);
      },
      me: function () {
        return sb.from("profiles").select("id,name,team_id,role,dept").eq("id", user.id).single().then(must).then(function (p) {
          if (!p.name) p.name = nameOf(p.team_id);
          return p;
        });
      },
      team: function () { return sb.from("profiles").select("id,name,team_id,role,dept").then(must); },
      /* Every piece this member may see: their own, those sent to them for review, and published ones. */
      pieces: function () { return sb.from("pieces").select(WITH_AUTHOR).order("updated_at", { ascending: false }).then(must).then(withAuthor); },
      create: function (fields) { return one(sb.from("pieces").insert(fields)); },
      update: function (id, fields) { return one(sb.from("pieces").update(fields).eq("id", id)); },
      remove: function (id) { return sb.from("pieces").delete().eq("id", id).then(must); },
      upload: function (piece, file) {
        var safe = file.name.replace(/[^\w.\-]+/g, "_").slice(-80);
        var path = user.id + "/" + piece.id + "/" + Date.now() + "-" + safe;
        return sb.storage.from("drafts").upload(path, file, { contentType: Desk.fileType(file.name) || "application/octet-stream", upsert: false })
          .then(must).then(function () { return { file_path: path, file_name: file.name }; });
      },
      removeFile: function (path) { return path ? sb.storage.from("drafts").remove([path]).then(must) : Promise.resolve(); },
      fileUrl: function (path) { return sb.storage.from("drafts").createSignedUrl(path, 600).then(must).then(function (d) { return d.signedUrl; }); },
      uploadCover: function (piece, file) {
        var ext = Desk.fileExt(file.name) === "jpeg" ? "jpg" : Desk.fileExt(file.name);
        var path = user.id + "/" + piece.id + "/" + Date.now() + "." + ext;
        return sb.storage.from("covers").upload(path, file, { contentType: Desk.imageType(file.name), upsert: false, cacheControl: "31536000" })
          .then(must).then(function () { return path; });
      },
      removeCover: function (path) { return path ? sb.storage.from("covers").remove([path]).then(must) : Promise.resolve(); },
      takeups: function () { return sb.from("takeups").select("dispatch_id,member,dept,piece_id,taken_at,title").then(must); },
      take: function (dispatchId, dept, title) {
        return sb.from("takeups").insert({ dispatch_id: dispatchId, dept: dept, title: String(title || "").slice(0, 300) }).select().single().then(function (r) {
          if (r.error && (r.error.code === "23505" || /duplicate/i.test(r.error.message || ""))) throw new Error("taken");
          return must(r);
        });
      },
      linkTakeup: function (dispatchId, pieceId) { return sb.from("takeups").update({ piece_id: pieceId }).eq("dispatch_id", dispatchId).then(must); },
      /* Resolves true if it was freed; false if this member may not free it. */
      giveBack: function (dispatchId) {
        return sb.from("takeups").delete().eq("dispatch_id", dispatchId).select("dispatch_id").then(must).then(function (rows) { return !!(rows && rows.length); });
      },
      notes: function (pieceIds) {
        if (!pieceIds.length) return Promise.resolve([]);
        return sb.from("piece_notes").select("id,piece_id,author,kind,body,created_at").in("piece_id", pieceIds).order("created_at", { ascending: true }).then(must);
      },
      addNote: function (pieceId, body) { return sb.from("piece_notes").insert({ piece_id: pieceId, body: body }).select().single().then(must); }
    };
  }

  /* Preview (local test copies only): sample people, pieces, comments and
     take-ups kept in this tab (sessionStorage), following the same rules as
     the database. No real member is shown with invented text. */
  function previewApi() {
    var KEY = "cl-desk-preview-v3";
    var PEOPLE = {};
    SAMPLE_PEOPLE.forEach(function (p) { PEOPLE["u-" + p.id] = { id: "u-" + p.id, name: p.name, team_id: p.id, role: p.role, dept: p.dept }; });
    var files = {};
    function now() { return new Date().toISOString(); }
    function seed() {
      var t = Desk.today(), list = Desk.dispatches();
      var gov = list.filter(function (d) { return d.dept === "gov" && !d.contested; });
      var health = list.filter(function (d) { return d.dept === "health" && !d.contested; });
      var d1 = gov[0] || list[0] || { id: "sample", title: "A sample dispatch", dept: "gov" };
      var d2 = health[0] || list[1] || d1;
      var d3 = gov[1] || list[2] || d1;
      var body1 = "This is sample text for the preview. In the live pages, the writer's own words appear here.\n\n## What is happening\n\nA first paragraph about the dispatch, with a figure that needs a source.\n\n## What should be done\n\nA practical step, and who could take it.";
      return {
        user: null, aal2: false, codes: {}, mfa: {},
        takeups: [
          { dispatch_id: d1.id, member: "u-sample-researcher", dept: d1.dept, piece_id: "p-sample-1", taken_at: now(), title: d1.title },
          { dispatch_id: d2.id, member: "u-sample-researcher-2", dept: d2.dept, piece_id: "p-sample-2", taken_at: now(), title: d2.title },
          { dispatch_id: d3.id, member: "u-sample-researcher-2", dept: d3.dept, piece_id: null, taken_at: now(), title: d3.title }
        ],
        notes: [
          { id: "n-1", piece_id: "p-sample-1", author: "u-sample-gov", kind: "review", body: "Sample comment for the preview: where does the figure in the second paragraph come from? Please add the source.", created_at: now() },
          { id: "n-2", piece_id: "p-sample-1", author: "u-sample-researcher", kind: "reply", body: "Sample answer for the preview: added the source to the paragraph and to the list.", created_at: now() }
        ],
        pieces: [
          { id: "p-sample-1", author: "u-sample-researcher", title: "A sample piece sent back once and corrected", summary: "Sample text for the preview.",
            body: body1.replace("with a figure that needs a source", "with a figure, now with its source (Sample Agency, 2026)"),
            returned_body: body1, sources: "Sample Agency (1 Nov 2026) https://example.org/report",
            focus: d1.focus || "trade", photo: d1.photo || null, dept: d1.dept, dispatch_id: d1.id, contested: false, status: "waiting",
            editor_note: "Where does the figure come from?", reviewed_by: "u-sample-gov",
            submitted_at: now(), created_at: now(), updated_at: now() },
          { id: "p-sample-2", author: "u-sample-researcher-2", title: "A sample piece waiting for review", summary: "",
            body: "Sample text for the preview: a piece waiting for an expert in Public health.\n\n## What should be done\n\nA sample solution.",
            sources: "Sample source (2 Nov 2026) https://example.org", focus: d2.focus || "health", photo: d2.photo || null, dept: d2.dept,
            dispatch_id: d2.id, contested: false, status: "waiting", submitted_at: now(), created_at: now(), updated_at: now() },
          { id: "p-sample-3", author: "u-sample-health", title: "A sample published piece", summary: "Sample text for the preview, shown as a published briefing.",
            body: "This is sample text for the preview.\n\n## What should be done\n\nA sample solution.", sources: "Sample source (23 Oct 2026) https://example.org",
            focus: "health", photo: "goma-kivu", dept: "health", contested: false, status: "approved", slug: "a-sample-published-piece",
            reviewed_by: "u-sample-editor", publish_on: Desk.addDays(t, -1), approved_at: now(), submitted_at: now(), created_at: now(), updated_at: now() }
        ]
      };
    }
    function load() {
      try { var s = JSON.parse(window.sessionStorage.getItem(KEY)); if (s && s.pieces) return s; } catch (e) { /* storage blocked */ }
      return seed();
    }
    var db = load();
    function persist() { try { window.sessionStorage.setItem(KEY, JSON.stringify(db)); } catch (e) { /* keep in memory */ } }
    function me() { return db.user ? PEOPLE[db.user] : null; }
    function copy(o) { return JSON.parse(JSON.stringify(o)); }
    function find(id) { for (var i = 0; i < db.pieces.length; i++) if (db.pieces[i].id === id) return db.pieces[i]; return null; }
    function late(v) { return new Promise(function (r) { setTimeout(function () { r(v); }, 160); }); }
    function fail(msg) { return new Promise(function (r, j) { setTimeout(function () { j(new Error(msg)); }, 120); }); }
    function isEditor() { var u = me(); return !!(u && u.role === "editor" && db.aal2); }
    function canReview(p) {
      var u = me();
      if (!u || !p || p.author === u.id || !db.aal2) return false;
      if (u.role === "editor") return true;
      var a = PEOPLE[p.author] || {};
      return u.role === "expert" && !!u.dept && u.dept === p.dept && !p.contested && a.role !== "expert";
    }
    function visible(p) {
      var u = me();
      return p.author === u.id || isEditor() || (p.status === "approved" && p.publish_on <= Desk.today()) ||
        (["waiting", "returned", "approved"].indexOf(p.status) > -1 && canReview(p));
    }
    var CONTENT = ["title", "summary", "body", "sources", "focus", "photo", "idea_id", "dept", "dispatch_id", "file_path", "file_name", "cover_path", "cover_credit", "returned_body", "contested"];
    function guard(old, next) {
      var u = me(), editor = isEditor();
      if (!editor) {
        next.author = old.author; next.slug = old.slug;
        if (old.author === u.id) {
          next.editor_note = old.editor_note; next.reviewed_by = old.reviewed_by; next.returned_body = old.returned_body;
          if (old.status === "draft" || old.status === "returned") {
            if (["draft", "waiting", old.status].indexOf(next.status) < 0) throw new Error("Only a reviewer can approve or send back a piece");
          } else if (next.status !== "draft") throw new Error("Withdraw or reopen the piece before changing it");
        } else if (canReview(old)) {
          if (["waiting", "returned", "approved"].indexOf(old.status) < 0) throw new Error("This piece has not been sent for review");
          CONTENT.forEach(function (k) { next[k] = old[k]; });
          if (next.publish_on && next.publish_on < Desk.today()) next.publish_on = Desk.today();
        } else throw new Error("Only the writer or a reviewer can change this piece");
      }
      if (next.status === "approved" && old.status !== "approved" && next.author === u.id) throw new Error("Someone else must approve your piece");
      if (next.status !== "draft" && !next.dept) next.dept = next.focus === "health" ? "health" : "gov";
      if (next.status === "waiting" && old.status !== "waiting") next.submitted_at = now();
      if (old.id && ["approved", "returned"].indexOf(next.status) > -1 && old.status !== next.status) {
        next.reviewed_by = u.id;
        if (next.status === "returned") next.returned_body = old.body;
      }
      if (next.status === "approved") {
        if (old.status !== "approved") next.approved_at = now();
        if (!next.publish_on) next.publish_on = Desk.today();
        if (!next.slug) next.slug = (next.title || "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 60) + "-" + next.id.slice(-6);
      } else { next.publish_on = null; next.approved_at = null; }
      next.updated_at = now();
      return next;
    }
    function decorate(p) {
      var c = copy(p), a = PEOPLE[p.author] || {};
      c.author_name = a.name || ""; c.author_team = a.team_id || ""; c.author_role = a.role || "";
      return c;
    }
    function account(teamId) { return PEOPLE["u-" + teamId] ? "u-" + teamId : "u-sample-researcher"; }
    function factor() { return db.user ? db.mfa[db.user] : null; }
    return {
      live: false,
      init: function () { return late({ signedIn: !!db.user }); },
      /* In the preview the setup code is "sample-code"; a password, once made,
         is required after that. The two-step code is always 123456. */
      signIn: function (teamId, password) {
        if (!teamId || !password) return fail("Choose your name and enter your password.");
        var id = account(teamId), pw = db.codes[id];
        if (pw && pw !== password) return fail("Invalid login credentials");
        db.user = id; db.aal2 = false; persist(); return late();
      },
      setup: function (teamId, code, password, beforeChange) {
        if (code !== "sample-code") return fail("Invalid login credentials");
        var id = account(teamId);
        db.user = id; db.aal2 = false; persist();
        return late().then(function () { return beforeChange ? beforeChange() : null; }).then(function () { db.codes[id] = password; persist(); });
      },
      signOut: function () { db.user = null; db.aal2 = false; persist(); return late(); },
      version: function () { return late(Desk.VERSION); },
      level: function () { var f = factor(); return late({ currentLevel: db.aal2 ? "aal2" : "aal1", nextLevel: f && f.verified ? "aal2" : "aal1" }); },
      factors: function () { var f = factor(); return late(f && f.verified ? [{ id: "f-" + db.user, status: "verified" }] : []); },
      enroll: function () { db.mfa[db.user] = { verified: false }; persist(); return late({ id: "f-" + db.user, qr: "", secret: "PREVIEWSAMPLESECRETCODE2" }); },
      verify: function (factorId, code) {
        if (code !== "123456") return fail("Invalid TOTP code entered");
        db.mfa[db.user] = { verified: true }; db.aal2 = true; persist(); return late();
      },
      unenroll: function () { delete db.mfa[db.user]; db.aal2 = false; persist(); return late(); },
      me: function () { return late(copy(me())); },
      team: function () { return late(Object.keys(PEOPLE).map(function (k) { return copy(PEOPLE[k]); })); },
      pieces: function () {
        return late(db.pieces.filter(visible).map(decorate).sort(function (a, b) { return a.updated_at < b.updated_at ? 1 : -1; }));
      },
      create: function (fields) {
        var u = me();
        var p = Object.assign({ id: "p-" + Date.now().toString(36), title: "", summary: "", body: "", sources: "", status: "draft", contested: false, created_at: now() }, fields);
        p.author = u.id;
        if (p.status !== "waiting") p.status = "draft";
        try { guard({ status: "draft", author: u.id }, p); } catch (e) { return fail(e.message); }
        db.pieces.push(p); persist(); return late(decorate(p));
      },
      update: function (id, fields) {
        var old = find(id);
        if (!old || !visible(old)) return fail("Piece not found");
        try {
          var next = guard(old, Object.assign(copy(old), fields));
          db.pieces[db.pieces.indexOf(old)] = next; persist(); return late(decorate(next));
        } catch (e) { return fail(e.message); }
      },
      remove: function (id) { db.pieces = db.pieces.filter(function (p) { return p.id !== id; }); persist(); return late(); },
      upload: function (piece, file) { var path = "preview/" + piece.id + "/" + file.name; files[path] = file; return late({ file_path: path, file_name: file.name }); },
      removeFile: function (path) { delete files[path]; return late(); },
      fileUrl: function (path) { return files[path] ? late(URL.createObjectURL(files[path])) : fail("In the preview, uploaded files are kept only on the page where they were added."); },
      uploadCover: function (piece, file) {
        var path = "preview/" + piece.id + "/" + Date.now() + "." + Desk.fileExt(file.name);
        previewCovers[path] = URL.createObjectURL(file);
        return late(path);
      },
      removeCover: function (path) { delete previewCovers[path]; return late(); },
      takeups: function () { return late(copy(db.takeups)); },
      take: function (dispatchId, dept, title) {
        if (db.takeups.some(function (t) { return t.dispatch_id === dispatchId; })) return fail("taken");
        var t = { dispatch_id: dispatchId, member: db.user, dept: dept, piece_id: null, taken_at: now(), title: title };
        db.takeups.push(t); persist(); return late(copy(t));
      },
      linkTakeup: function (dispatchId, pieceId) {
        db.takeups.forEach(function (t) { if (t.dispatch_id === dispatchId && t.member === db.user) t.piece_id = pieceId; });
        persist(); return late();
      },
      giveBack: function (dispatchId) {
        var u = me(), ok = false;
        db.takeups = db.takeups.filter(function (t) {
          if (t.dispatch_id !== dispatchId) return true;
          ok = t.member === u.id || isEditor() || (db.aal2 && u.role === "expert" && u.dept === t.dept);
          return !ok;
        });
        persist(); return late(ok);
      },
      notes: function (ids) { return late(db.notes.filter(function (n) { var p = find(n.piece_id); return ids.indexOf(n.piece_id) > -1 && p && visible(p); }).map(copy)); },
      addNote: function (pieceId, body) {
        var p = find(pieceId), u = me();
        if (!p || !(p.author === u.id || isEditor() || canReview(p))) return fail("You cannot comment on this piece");
        var n = { id: "n-" + Date.now().toString(36), piece_id: pieceId, author: u.id, kind: p.author === u.id ? "reply" : "review", body: body, created_at: now() };
        db.notes.push(n); persist(); return late(copy(n));
      }
    };
  }

  Desk.api = Desk.preview ? previewApi() : Desk.configured ? supabaseApi() : offlineApi();

  /* ---------- signing in: Expert or Researcher → your name → password ---------- */
  var SEAL = '<svg class="desk-auth-seal" viewBox="0 0 100 100" aria-hidden="true"><use href="#seal-mini"></use></svg>';

  Desk.authView = function (opts) {
    var ready = Desk.preview || Desk.configured;
    return '<section class="desk-auth" data-auth>' + SEAL +
      '<p class="label">THE CREDENCE LETTERS · TEAM</p>' +
      '<h1 data-auth-title>Sign in</h1>' +
      '<p class="desk-auth-lede">For members of The Credence Letters team.</p>' +
      (Desk.preview ? '<p class="desk-notice">Test copy with sample people and sample data. Sign in with any password, or set up with the code sample-code. The two-step code is 123456.</p>' :
        !ready ? '<p class="desk-notice">The team pages are being set up. They will open once the accounts are ready.</p>' : "") +
      (opts.message ? '<p class="desk-notice desk-notice-err" role="alert">' + esc(opts.message) + "</p>" : "") +
      '<div data-auth-step></div>' +
      '<p class="desk-auth-foot">Forgotten your password? Ask the editor for a new setup code, then choose "First time here".<br>' +
        'Not on the team yet? <a href="researchers-wanted.html">See Researchers wanted</a>.</p>' +
    "</section>";
  };

  /* Wires up the steps; calls done(role) once signed in. */
  Desk.bindAuth = function (root, opts, done) {
    var host = Desk.$("[data-auth-step]", root);
    var ready = Desk.preview || Desk.configured;
    var state = { role: null, who: null };
    var title = Desk.$("[data-auth-title]", root);

    function roleTile(key, name, line) {
      return '<button type="button" class="desk-role' + (opts.role === key ? " is-here" : "") + '" data-role="' + key + '"><span class="desk-role-name">' + name + "</span>" +
        '<span class="desk-role-line">' + line + '</span><span class="desk-role-go" aria-hidden="true">→</span></button>';
    }
    function stepRole() {
      title.textContent = "Sign in";
      host.innerHTML =
        '<p class="desk-step-q" id="d-role-q">Are you signing in as an expert or a researcher?</p>' +
        '<div class="desk-roles" role="group" aria-labelledby="d-role-q">' +
          roleTile("expert", "Expert", "Review pieces in your department, follow the topics people have taken up, and write.") +
          roleTile("researcher", "Researcher", "Take up a dispatch, research its questions and write your piece.") +
        "</div>";
    }
    function stepName() {
      var list = Desk.list(state.role), last = Desk.store.get("last-" + state.role);
      title.textContent = state.role === "expert" ? "Experts" : "Researchers";
      host.innerHTML =
        '<p class="desk-step-q" id="d-name-q">Choose your name</p>' +
        (list.length ? '<ul class="desk-names" aria-labelledby="d-name-q">' + list.map(function (p) {
          return '<li><button type="button" class="desk-name' + (p.id === last ? " is-last" : "") + '" data-who="' + esc(p.id) + '">' + Desk.face(p.id, 44) +
            '<span class="desk-name-txt"><span class="desk-name-n">' + esc(p.name) + '</span><span class="desk-name-t">' +
            esc(state.role === "expert" && p.role === "editor" ? "Editor" : p.title) + "</span></span></button></li>";
        }).join("") + "</ul>" : '<p class="desk-empty">Nobody is on this list yet.</p>') +
        '<p class="desk-switch"><button type="button" class="desk-link" data-auth-back="role">← Expert or researcher</button></p>';
      var first = Desk.$(".desk-name.is-last", host) || Desk.$(".desk-name", host);
      if (first) first.focus();
    }
    function person() { var all = Desk.list(state.role); for (var i = 0; i < all.length; i++) if (all[i].id === state.who) return all[i]; return null; }
    function stepPassword(setup) {
      var p = person() || { name: "", role: "" };
      title.textContent = setup ? "Set up your account" : "Sign in";
      host.innerHTML =
        '<div class="desk-who">' + Desk.face(state.who, 52) + '<p><strong>' + esc(p.name) + "</strong><span>" +
          esc(state.role === "expert" ? (p.role === "editor" ? "Editor" : "Expert") : "Researcher") + "</span></p>" +
          '<button type="button" class="desk-link" data-auth-back="name">Not you?</button></div>' +
        (setup ?
          '<form class="desk-form" data-setup novalidate>' +
            '<p class="desk-form-intro">Enter the setup code the editor gave you, then create your own password. You will use your name and this password from now on.</p>' +
            '<div class="field"><label for="d-code">Setup code</label><input id="d-code" type="password" autocomplete="one-time-code" required></div>' +
            '<div class="field"><label for="d-np1">Create a password</label><p class="hint" id="d-np1-h">At least 10 characters. Only you will know it.</p>' +
              '<input id="d-np1" type="password" autocomplete="new-password" minlength="10" aria-describedby="d-np1-h" required></div>' +
            '<div class="field"><label for="d-np2">Confirm the password</label><input id="d-np2" type="password" autocomplete="new-password" minlength="10" required></div>' +
            '<p class="status" data-status role="status"></p>' +
            '<button class="btn" type="submit"' + (ready ? "" : " disabled") + ">CREATE MY PASSWORD</button>" +
            '<p class="desk-switch"><button type="button" class="desk-link" data-auth-mode="signin">Back to sign in</button></p>' +
          "</form>" :
          '<form class="desk-form" data-signin novalidate>' +
            '<input type="text" name="username" autocomplete="username" value="' + esc(state.who) + '" hidden>' +
            '<div class="field"><label for="d-pass">Password</label><input id="d-pass" type="password" autocomplete="current-password" required></div>' +
            '<p class="status" data-status role="status"></p>' +
            '<button class="btn" type="submit"' + (ready ? "" : " disabled") + ">SIGN IN</button>" +
            '<p class="desk-switch"><button type="button" class="desk-link" data-auth-mode="setup">First time here, or have a new setup code?</button></p>' +
          "</form>");
      var f = Desk.$(setup ? "#d-code" : "#d-pass", host);
      if (f) f.focus();
    }

    host.addEventListener("click", function (e) {
      var b = e.target.closest ? e.target.closest("button") : null;
      if (!b) return;
      if (b.hasAttribute("data-role")) { state.role = b.getAttribute("data-role"); stepName(); }
      else if (b.hasAttribute("data-who")) { state.who = b.getAttribute("data-who"); stepPassword(false); }
      else if (b.getAttribute("data-auth-back") === "role") stepRole();
      else if (b.getAttribute("data-auth-back") === "name") stepName();
      else if (b.getAttribute("data-auth-mode") === "setup") stepPassword(true);
      else if (b.getAttribute("data-auth-mode") === "signin") stepPassword(false);
    });

    function bad(err) { return /invalid|credentials/i.test(err && err.message || ""); }
    function finished() {
      Desk.store.set("last-" + state.role, state.who);
      done(state.role);
    }
    host.addEventListener("submit", function (e) {
      e.preventDefault();
      var form = e.target, st = Desk.$("[data-status]", form), btn = Desk.$('button[type="submit"]', form);
      st.className = "status err"; st.textContent = "";
      if (form.hasAttribute("data-signin")) {
        var pw = Desk.$("#d-pass", form).value;
        if (!pw) { st.textContent = "Enter your password."; return; }
        btn.disabled = true; btn.textContent = "SIGNING IN…";
        Desk.api.signIn(state.who, pw).then(finished).catch(function (err) {
          st.textContent = bad(err) ? "That password does not match. If this is your first time, use your setup code." : "Could not sign in: " + (err && err.message || "please try again.");
          btn.disabled = false; btn.textContent = "SIGN IN";
        });
      } else if (form.hasAttribute("data-setup")) {
        var code = Desk.$("#d-code", form).value.trim(), a = Desk.$("#d-np1", form).value, b2 = Desk.$("#d-np2", form).value;
        if (!code) { st.textContent = "Enter the setup code from the editor."; return; }
        if (a.length < 10) { st.textContent = "Use at least 10 characters for your password."; return; }
        if (a !== b2) { st.textContent = "The two passwords are different."; return; }
        if (a === code) { st.textContent = "Choose a password that is different from the setup code."; return; }
        btn.disabled = true; btn.textContent = "SETTING UP…";
        /* An account with an authenticator app gives its code before the password changes. */
        var codeFirst = function () {
          return Desk.api.level().then(function (lv) {
            if (lv.currentLevel === "aal2" || lv.nextLevel !== "aal2") return;
            var box = document.createElement("div");
            form.hidden = true;
            form.parentNode.insertBefore(box, form);
            return askCode(box, { inline: true }).then(function () { box.parentNode.removeChild(box); form.hidden = false; });
          });
        };
        Desk.api.setup(state.who, code, a, codeFirst).then(finished).catch(function (err) {
          st.textContent = bad(err) ? "That setup code does not match this name. Check it with the editor; a code works only until a password is created." : "Could not set up: " + (err && err.message || "please try again.");
          btn.disabled = false; btn.textContent = "CREATE MY PASSWORD";
        });
      }
    });

    stepRole();
  };

  /* ---------- two-step sign-in ---------- */
  function codeField(id) {
    return '<div class="field"><label for="' + id + '">6-digit code</label>' +
      '<input id="' + id + '" class="desk-code" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="7" required></div>';
  }
  function digits(input) { return String(input.value || "").replace(/\D/g, ""); }
  function codeError(err) {
    return /invalid|code|expired|challenge/i.test(err && err.message || "") ?
      "That code did not work. The code changes every 30 seconds; type the one showing now." :
      "Could not check the code: " + (err && err.message || "please try again.");
  }

  /* Resolves once the session may go on. An account with an authenticator app
     must enter its code; with opts.require (experts and the editor on the
     experts page), an account without one must add one first. */
  Desk.twoStep = function (host, opts) {
    opts = opts || {};
    return Desk.api.level().then(function (lv) {
      if (lv.currentLevel === "aal2") return true;
      if (lv.nextLevel === "aal2") return askCode(host, {});
      if (opts.require) return addApp(host, { required: true });
      return true;
    });
  };

  function askCode(host, opts) {
    return new Promise(function (resolve) {
      var form =
        '<form class="desk-form" data-code-form novalidate>' + codeField("d-totp") +
          '<p class="status" data-code-status role="status"></p>' +
          '<button class="btn" type="submit">CONTINUE</button>' +
          (opts.inline ? "" : '<p class="desk-switch"><button type="button" class="desk-link" data-signout>Sign out</button></p>') +
        "</form>";
      var lede = "Open the authenticator app on your phone and type the 6-digit code it shows for The Credence Letters.";
      host.innerHTML = opts.inline ?
        "<h2>Two-step sign-in</h2><p class=\"desk-auth-lede\">" + lede + "</p>" + form :
        '<section class="desk-auth">' + SEAL + '<p class="label">TWO-STEP SIGN-IN</p><h1>Enter your code</h1>' +
          '<p class="desk-auth-lede">' + lede + "</p>" + form +
          '<p class="desk-auth-foot">Lost or changed your phone? Ask the editor to reset your two-step sign-in. Your pieces are kept.</p></section>';
      var f = Desk.$("[data-code-form]", host), input = Desk.$("#d-totp", host);
      input.focus();
      f.addEventListener("submit", function (e) {
        e.preventDefault();
        var st = Desk.$("[data-code-status]", host), btn = Desk.$('button[type="submit"]', f), code = digits(input);
        st.className = "status err"; st.textContent = "";
        if (code.length !== 6) { st.textContent = "Type the 6 digits from the app."; return; }
        btn.disabled = true; btn.textContent = "CHECKING…";
        Desk.api.factors().then(function (list) {
          if (!list.length) throw new Error("no authenticator app is linked to this account.");
          return Desk.api.verify(list[0].id, code);
        }).then(function () { resolve(true); }).catch(function (err) {
          st.textContent = codeError(err);
          btn.disabled = false; btn.textContent = "CONTINUE"; input.select();
        });
      });
    });
  }

  /* Links an authenticator app. Resolves true once it works, false if the
     member chooses "Not now" (never offered when it is required). */
  function addApp(host, opts) {
    return new Promise(function (resolve) {
      host.innerHTML = '<p class="desk-loading">Preparing two-step sign-in…</p>';
      Desk.api.enroll().then(function (f) {
        var secret = String(f.secret || "").replace(/(.{4})/g, "$1 ").trim();
        host.innerHTML =
          '<section class="desk-auth">' + SEAL + '<p class="label">TWO-STEP SIGN-IN</p>' +
            "<h1>" + (opts.required ? "Add your phone" : "Turn on two-step sign-in") + "</h1>" +
            '<p class="desk-auth-lede">' + (opts.required ?
              "Experts and the editor decide what appears on the site, so their accounts need a second step: a code from your phone as well as your password. You set this up once." :
              "After your password, the team pages will also ask for a code from your phone. Someone who learns your password still cannot get in.") + "</p>" +
            '<ol class="desk-steps">' +
              "<li>Install a free authenticator app on your phone if you do not have one, such as Google Authenticator, Microsoft Authenticator or 2FAS.</li>" +
              "<li>In the app, add an account and scan this code.</li></ol>" +
            '<div class="desk-qr">' + (f.qr ? '<img src="' + esc(f.qr) + '" width="200" height="200" alt="QR code for the authenticator app">' :
              '<span class="desk-qr-ph">QR code (preview)</span>') + "</div>" +
            '<p class="hint">Cannot scan? Choose "enter a setup key" in the app and type <code class="desk-secret">' + esc(secret) + "</code></p>" +
            '<ol class="desk-steps" start="3"><li>Type the 6-digit code the app now shows.</li></ol>' +
            '<form class="desk-form" data-enroll-form novalidate>' + codeField("d-totp-new") +
              '<p class="status" data-enroll-status role="status"></p>' +
              '<button class="btn" type="submit">TURN ON</button>' +
              '<p class="desk-switch">' + (opts.required ? '<button type="button" class="desk-link" data-signout>Sign out</button>' :
                '<button type="button" class="desk-link" data-enroll-cancel>Not now</button>') + "</p>" +
            "</form>" +
            '<p class="desk-auth-foot">Keep the app on your phone. If you lose the phone, the editor can reset this so you can add a new one.</p>' +
          "</section>";
        var form = Desk.$("[data-enroll-form]", host), input = Desk.$("#d-totp-new", host);
        var cancel = Desk.$("[data-enroll-cancel]", host);
        if (cancel) cancel.addEventListener("click", function () { resolve(false); });
        form.addEventListener("submit", function (e) {
          e.preventDefault();
          var st = Desk.$("[data-enroll-status]", host), btn = Desk.$('button[type="submit"]', form), code = digits(input);
          st.className = "status err"; st.textContent = "";
          if (code.length !== 6) { st.textContent = "Type the 6 digits from the app."; return; }
          btn.disabled = true; btn.textContent = "CHECKING…";
          Desk.api.verify(f.id, code).then(function () { resolve(true); }).catch(function (err) {
            st.textContent = codeError(err);
            btn.disabled = false; btn.textContent = "TURN ON"; input.select();
          });
        });
      }).catch(function (err) {
        host.innerHTML = '<section class="desk-auth">' + SEAL + '<p class="label">TWO-STEP SIGN-IN</p><h1>Could not start</h1>' +
          '<p class="desk-auth-lede">' + esc(err && err.message || "Please reload the page and try again.") + "</p>" +
          '<p class="desk-switch">' + (opts.required ? '<button type="button" class="desk-link" data-signout>Sign out</button>' :
            '<button type="button" class="desk-link" data-enroll-cancel>Back</button>') + "</p></section>";
        var back = Desk.$("[data-enroll-cancel]", host);
        if (back) back.addEventListener("click", function () { resolve(false); });
      });
    });
  }

  /* The member's own two-step setting (#security). Reviewers cannot turn it off. */
  Desk.securityView = function (host, me, back) {
    host.innerHTML = '<p class="desk-loading">Opening…</p>';
    Desk.api.factors().then(function (list) {
      if (!list.length) {
        return addApp(host, { required: false }).then(function (on) { if (on) Desk.securityView(host, me, back); else back(); });
      }
      var reviewer = me && (me.role === "editor" || me.role === "expert");
      host.innerHTML = '<section class="desk-auth">' + SEAL + '<p class="label">TWO-STEP SIGN-IN</p><h1>Your sign-in</h1>' +
        '<p class="desk-on">Two-step sign-in is on. Each time you sign in, you are asked for the code from the authenticator app on your phone.</p>' +
        (reviewer ? '<p class="hint">Experts and the editor always need it, because they review pieces.</p>' :
          '<form class="desk-form" data-off-form novalidate><p class="status" data-off-status role="status"></p>' +
            '<button class="btn btn-quiet" type="submit">TURN IT OFF</button></form>') +
        '<p class="desk-switch"><button type="button" class="desk-link" data-sec-back>Back</button></p></section>';
      Desk.$("[data-sec-back]", host).addEventListener("click", function () { back(); });
      var off = Desk.$("[data-off-form]", host);
      if (off) off.addEventListener("submit", function (e) {
        e.preventDefault();
        if (!window.confirm("Turn off two-step sign-in? Your password alone will open your account again.")) return;
        var st = Desk.$("[data-off-status]", host);
        Desk.api.unenroll(list[0].id).then(function () { Desk.securityView(host, me, back); }).catch(function (err) {
          st.className = "status err"; st.textContent = "Could not turn it off: " + (err && err.message || "please try again.");
        });
      });
    }).catch(function (err) {
      host.innerHTML = '<section class="desk-auth"><h1>Could not open</h1><p class="desk-auth-lede">' + esc(err && err.message || "Please try again.") + "</p>" +
        '<p class="desk-switch"><button type="button" class="desk-link" data-sec-back>Back</button></p></section>';
      Desk.$("[data-sec-back]", host).addEventListener("click", function () { back(); });
    });
  };
})();
