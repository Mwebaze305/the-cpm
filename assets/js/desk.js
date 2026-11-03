/* The Credence Letters — expert desk: code shared by expert.html and review.html.

   Team members sign in with their name and a password. The first time, they
   choose their name, enter the one-time setup code the editor gave them, and
   create their own password. Behind the scenes each account is
   <team id>@desk.thecredenceletters.com, an address that receives no email.
   Accounts, drafts and approvals live in Supabase (supabaseUrl and supabaseKey
   in config.js; tables in supabase/schema.sql).

   Two-step sign-in: after the password, an account linked to an
   authenticator app must also give the 6-digit code from it. The editor's
   account must have one; experts can turn it on from their desk. The
   database enforces both (supabase/schema.sql, section 8).

   On a local test copy only (localhost), ?preview runs the pages on sample
   data kept in the browser tab. It does nothing on the live site. */
(function () {
  "use strict";

  /* The desk never runs inside another site's frame, so nobody can lay a
     page over it to trick a member into pressing Approve or Publish. */
  if (window.top !== window.self) {
    window.Desk = null;
    document.documentElement.style.display = "none";
    return;
  }

  var CFG = window.CPM_CONFIG || {};
  var PHOTOS = window.CPM_PHOTOS || {};
  var TEAM = window.CPM_TEAM || [];
  var Desk = window.Desk = {};

  Desk.local = /^(localhost|127\.0\.0\.1|\[::1\]|.+\.localhost)$/.test(window.location.hostname);
  Desk.preview = Desk.local && /[?&]preview(=|&|$)/.test(window.location.search);
  Desk.configured = !!(CFG.supabaseUrl && CFG.supabaseKey);
  Desk.DOMAIN = CFG.deskDomain || "desk.thecredenceletters.com";
  Desk.loginEmail = function (teamId) { return String(teamId || "").toLowerCase() + "@" + Desk.DOMAIN; };
  /* Everyone in team.js who can have an account, alphabetically by name. */
  Desk.members = function () {
    return TEAM.filter(function (m) { return ["founder", "expert", "researcher"].indexOf(m.group) > -1; })
      .slice().sort(function (a, b) { return a.name.localeCompare(b.name); });
  };

  /* ---------- helpers ---------- */
  var esc = Desk.esc = function (s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };
  Desk.$ = function (sel, root) { return (root || document).querySelector(sel); };
  Desk.$all = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };

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

  /* ---------- people, photos, focus areas ---------- */
  Desk.member = function (id) {
    for (var i = 0; i < TEAM.length; i++) if (TEAM[i].id === id) return TEAM[i];
    return null;
  };
  Desk.field = function (teamId) {
    var m = Desk.member(teamId);
    return m && m.field ? (m.field.en || "") : "";
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

  /* ---------- status: what the expert's button shows ---------- */
  Desk.status = function (p) {
    if (!p || p.status === "draft" || !p.status) return { key: "draft", tone: "red", label: "Draft", button: "PUBLISH" };
    if (p.status === "returned") return { key: "returned", tone: "red", label: "Returned with a note", button: "PUBLISH" };
    if (p.status === "waiting") return { key: "waiting", tone: "orange", label: "Waiting approval", button: "WAITING APPROVAL" };
    var live = p.publish_on && p.publish_on <= Desk.today();
    return live ?
      { key: "published", tone: "green", label: "Approved · published " + Desk.day(p.publish_on), button: "APPROVED", sub: "Published " + Desk.day(p.publish_on) } :
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

  /* ---------- uploads ---------- */
  Desk.MAX_FILE = 20 * 1024 * 1024;
  var TYPES = {
    docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    doc: "application/msword",
    odt: "application/vnd.oasis.opendocument.text",
    pdf: "application/pdf",
    rtf: "application/rtf",
    txt: "text/plain"
  };
  Desk.fileExt = function (name) { var m = /\.([a-z0-9]+)$/i.exec(name || ""); return m ? m[1].toLowerCase() : ""; };
  Desk.fileType = function (name) { return TYPES[Desk.fileExt(name)] || ""; };
  Desk.ACCEPT = Object.keys(TYPES).map(function (k) { return "." + k; }).join(",");

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

  /* ---------- connection ---------- */
  Desk.api = Desk.preview ? previewApi() : Desk.configured ? supabaseApi() : offlineApi();

  function must(r) { if (r.error) throw r.error; return r.data; }
  function nameOf(teamId) { var m = Desk.member(teamId); return m ? m.name : ""; }

  /* Before Supabase is set up: nobody can sign in. */
  function offlineApi() {
    var down = function () { return Promise.reject(new Error("The desk is not connected yet.")); };
    return { live: false, offline: true, init: function () { return Promise.resolve({ signedIn: false }); },
      signIn: down, setup: down, signOut: function () { return Promise.resolve(); }, me: down, myPieces: down, allPieces: down,
      create: down, update: down, remove: down, upload: down, removeFile: down, fileUrl: down,
      level: down, factors: down, enroll: down, verify: down, unenroll: down };
  }

  function supabaseApi() {
    if (!window.supabase || !window.supabase.createClient) {
      var down = function () { return Promise.reject(new Error("Could not reach the sign-in service. Check your connection and reload the page.")); };
      return { live: true, init: down, signIn: down, setup: down, signOut: down, me: down, myPieces: down, allPieces: down,
        create: down, update: down, remove: down, upload: down, removeFile: down, fileUrl: down,
        level: down, factors: down, enroll: down, verify: down, unenroll: down };
    }
    var sb = window.supabase.createClient(CFG.supabaseUrl, CFG.supabaseKey, {
      auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: false, storageKey: "cl-desk-auth" }
    });
    var user = null;
    sb.auth.onAuthStateChange(function (event, session) { user = session ? session.user : null; });
    var PIECE_COLS = "id,author,title,summary,body,sources,focus,photo,idea_id,file_path,file_name,status,editor_note,slug,submitted_at,approved_at,publish_on,created_at,updated_at";
    function withAuthor(rows) {
      return (rows || []).map(function (r) {
        r.author_team = r.profile ? r.profile.team_id : "";
        r.author_name = (r.profile && r.profile.name) || nameOf(r.author_team);
        delete r.profile;
        return r;
      });
    }
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
        return sb.from("profiles").select("id,name,team_id,role").eq("id", user.id).single().then(must).then(function (p) {
          if (!p.name) p.name = nameOf(p.team_id);
          return p;
        });
      },
      myPieces: function () { return sb.from("pieces").select(PIECE_COLS).eq("author", user.id).order("updated_at", { ascending: false }).then(must); },
      allPieces: function () { return sb.from("pieces").select(PIECE_COLS + ",profile:profiles(name,team_id)").order("updated_at", { ascending: false }).then(must).then(withAuthor); },
      create: function (fields) { return sb.from("pieces").insert(fields).select(PIECE_COLS).single().then(must); },
      update: function (id, fields) { return sb.from("pieces").update(fields).eq("id", id).select(PIECE_COLS).single().then(must); },
      remove: function (id) { return sb.from("pieces").delete().eq("id", id).then(must); },
      upload: function (piece, file) {
        var safe = file.name.replace(/[^\w.\-]+/g, "_").slice(-80);
        var path = user.id + "/" + piece.id + "/" + Date.now() + "-" + safe;
        return sb.storage.from("drafts").upload(path, file, { contentType: Desk.fileType(file.name) || "application/octet-stream", upsert: false })
          .then(must).then(function () { return { file_path: path, file_name: file.name }; });
      },
      removeFile: function (path) { return path ? sb.storage.from("drafts").remove([path]).then(must) : Promise.resolve(); },
      fileUrl: function (path) { return sb.storage.from("drafts").createSignedUrl(path, 600).then(must).then(function (d) { return d.signedUrl; }); }
    };
  }

  /* Preview (local test copies only): sample accounts and pieces kept in this
     tab (sessionStorage), following the same rules as the database. Sample
     people have sample names, so no real member is shown with invented text. */
  function previewApi() {
    var KEY = "cl-desk-preview-v2";
    var PEOPLE = {
      "u-expert": { id: "u-expert", name: "Sample Expert", team_id: "dominick", role: "expert" },
      "u-expert2": { id: "u-expert2", name: "Second Sample Expert", team_id: "yidnekachew", role: "expert" },
      "u-editor": { id: "u-editor", name: "Sample Editor", team_id: "aaron", role: "editor" }
    };
    var BY_TEAM = { dominick: "u-expert", yidnekachew: "u-expert2", aaron: "u-editor" };
    var files = {};
    function now() { return new Date().toISOString(); }
    function seed() {
      var t = Desk.today();
      return {
        user: null,
        codes: {},
        pieces: [
          { id: "p-sample-1", author: "u-expert", title: "A sample published piece", summary: "Sample text for the preview, shown as a published briefing.",
            body: "This is sample text for the preview.\n\nIn the live desk, an expert's own words appear here.\n\n## A subheading\n\nParagraphs are separated by a blank line.",
            sources: "WHO Disease Outbreak News (23 Oct 2026) https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON622",
            focus: "health", photo: "goma-kivu", idea_id: null, status: "approved", slug: "a-sample-published-piece",
            publish_on: Desk.addDays(t, -1), approved_at: now(), submitted_at: now(), created_at: now(), updated_at: now() },
          { id: "p-sample-2", author: "u-expert2", title: "A sample piece waiting for the editor", summary: "",
            body: "Sample text for the preview: a piece waiting for the editor.", sources: "", focus: "health", photo: "bidibidi",
            idea_id: "drdip-measure", status: "waiting", submitted_at: now(), created_at: now(), updated_at: now() }
        ]
      };
    }
    function load() {
      try { var s = JSON.parse(window.sessionStorage.getItem(KEY)); if (s && s.pieces) return s; } catch (e) { /* storage blocked */ }
      return seed();
    }
    var db = load();
    function persist() { try { window.sessionStorage.setItem(KEY, JSON.stringify(db)); } catch (e) { /* storage blocked: keep in memory */ } }
    function me() { return db.user ? PEOPLE[db.user] : null; }
    function copy(o) { return JSON.parse(JSON.stringify(o)); }
    function find(id) { for (var i = 0; i < db.pieces.length; i++) if (db.pieces[i].id === id) return db.pieces[i]; return null; }
    function late(v) { return new Promise(function (r) { setTimeout(function () { r(v); }, 180); }); }
    function fail(msg) { return new Promise(function (r, j) { setTimeout(function () { j(new Error(msg)); }, 120); }); }
    function guard(old, next) {
      var u = me(), editor = u && u.role === "editor";
      if (!editor) {
        if (old.author !== u.id) throw new Error("Not your piece");
        if (old.status === "draft" || old.status === "returned") {
          if (["draft", "waiting", old.status].indexOf(next.status) < 0) throw new Error("Only the editor can approve or return a piece");
        } else if (next.status !== "draft") throw new Error("Withdraw or reopen the piece before changing it");
        next.editor_note = old.editor_note;
      }
      if (next.status === "waiting" && old.status !== "waiting") next.submitted_at = now();
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
      c.author_name = a.name || ""; c.author_team = a.team_id || "";
      return c;
    }
    /* In the preview the setup code is "sample-code"; a password, once made, is required after that.
       The two-step code is always 123456. */
    function account(teamId) { return BY_TEAM[teamId] || "u-expert"; }
    db.mfa = db.mfa || {};
    function factor() { return db.user ? db.mfa[db.user] : null; }
    return {
      live: false,
      init: function () { return late({ signedIn: !!db.user }); },
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
        return late().then(function () { return beforeChange ? beforeChange() : null; }).then(function () {
          db.codes[id] = password; persist();
        });
      },
      signOut: function () { db.user = null; db.aal2 = false; persist(); return late(); },
      level: function () {
        var f = factor();
        return late({ currentLevel: db.aal2 ? "aal2" : "aal1", nextLevel: f && f.verified ? "aal2" : "aal1" });
      },
      factors: function () { var f = factor(); return late(f && f.verified ? [{ id: "f-" + db.user, status: "verified" }] : []); },
      enroll: function () {
        db.mfa[db.user] = { verified: false }; persist();
        return late({ id: "f-" + db.user, qr: "", secret: "PREVIEWSAMPLESECRETCODE2" });
      },
      verify: function (factorId, code) {
        if (code !== "123456") return fail("Invalid TOTP code entered");
        db.mfa[db.user].verified = true; db.aal2 = true; persist(); return late();
      },
      unenroll: function () { delete db.mfa[db.user]; db.aal2 = false; persist(); return late(); },
      me: function () { return late(copy(me())); },
      myPieces: function () {
        var u = me();
        return late(db.pieces.filter(function (p) { return p.author === u.id; }).map(decorate).sort(function (a, b) { return a.updated_at < b.updated_at ? 1 : -1; }));
      },
      allPieces: function () { return late(db.pieces.map(decorate).sort(function (a, b) { return a.updated_at < b.updated_at ? 1 : -1; })); },
      create: function (fields) {
        var u = me();
        var p = Object.assign({ id: "p-" + Date.now().toString(36), title: "", summary: "", body: "", sources: "", status: "draft", created_at: now() }, fields);
        p.author = u.id;
        if (u.role !== "editor" && p.status !== "waiting") p.status = "draft";
        guard({ status: "draft", author: u.id }, p);
        db.pieces.push(p); persist(); return late(decorate(p));
      },
      update: function (id, fields) {
        var old = find(id);
        if (!old) return fail("Piece not found");
        try {
          var next = guard(old, Object.assign(copy(old), fields));
          db.pieces[db.pieces.indexOf(old)] = next; persist(); return late(decorate(next));
        } catch (e) { return fail(e.message); }
      },
      remove: function (id) { db.pieces = db.pieces.filter(function (p) { return p.id !== id; }); persist(); return late(); },
      upload: function (piece, file) {
        var path = "preview/" + piece.id + "/" + file.name;
        files[path] = file;
        return late({ file_path: path, file_name: file.name });
      },
      removeFile: function (path) { delete files[path]; return late(); },
      fileUrl: function (path) { return files[path] ? late(URL.createObjectURL(files[path])) : fail("In the preview, uploaded files are kept only on the page where they were added."); }
    };
  }

  /* ---------- the sign-in screen: name and password, or first-time setup ---------- */
  function nameSelect(id) {
    return '<select id="' + id + '" required autocomplete="username"><option value="">Choose your name…</option>' +
      Desk.members().map(function (m) { return '<option value="' + esc(m.id) + '">' + esc(m.name) + "</option>"; }).join("") + "</select>";
  }

  Desk.authView = function (opts) {
    var ready = Desk.preview || Desk.configured;
    return '<section class="desk-auth">' +
      '<svg class="desk-auth-seal" viewBox="0 0 100 100" aria-hidden="true"><use href="#seal-mini"></use></svg>' +
      '<p class="label">' + esc(opts.eyebrow) + "</p>" +
      "<h1 data-auth-title>" + esc(opts.title) + "</h1>" +
      '<p class="desk-auth-lede">For members of The Credence Letters team.</p>' +
      (Desk.preview ? '<p class="desk-notice">Test copy with sample data. Sign in with any name and password, or set up with the code sample-code. The two-step code is 123456.</p>' :
        !ready ? '<p class="desk-notice">The desk is being set up. It will open once the accounts are ready.</p>' : "") +
      (opts.message ? '<p class="desk-notice desk-notice-err" role="alert">' + esc(opts.message) + "</p>" : "") +
      '<form class="desk-form" data-signin novalidate>' +
        '<div class="field"><label for="d-name">Your name</label>' + nameSelect("d-name") + "</div>" +
        '<div class="field"><label for="d-pass">Password</label><input id="d-pass" type="password" autocomplete="current-password" required></div>' +
        '<p class="status" data-auth-status role="status"></p>' +
        '<button class="btn" type="submit"' + (ready ? "" : " disabled") + ">SIGN IN</button>" +
        '<p class="desk-switch"><button type="button" class="desk-link" data-auth-mode="setup">First time here, or have a new setup code?</button></p>' +
      "</form>" +
      '<form class="desk-form" data-setup novalidate hidden>' +
        '<p class="desk-form-intro">Choose your name, enter the setup code the editor gave you, then create your own password. You will use your name and this password from now on.</p>' +
        '<div class="field"><label for="d-sname">Your name</label>' + nameSelect("d-sname") + "</div>" +
        '<div class="field"><label for="d-code">Setup code</label><input id="d-code" type="password" autocomplete="one-time-code" required></div>' +
        '<div class="field"><label for="d-np1">Create a password</label><p class="hint" id="d-np1-h">At least 10 characters. Only you will know it.</p>' +
          '<input id="d-np1" type="password" autocomplete="new-password" minlength="10" aria-describedby="d-np1-h" required></div>' +
        '<div class="field"><label for="d-np2">Confirm the password</label><input id="d-np2" type="password" autocomplete="new-password" minlength="10" required></div>' +
        '<p class="status" data-setup-status role="status"></p>' +
        '<button class="btn" type="submit"' + (ready ? "" : " disabled") + ">CREATE MY PASSWORD</button>" +
        '<p class="desk-switch"><button type="button" class="desk-link" data-auth-mode="signin">Back to sign in</button></p>' +
      "</form>" +
      '<p class="desk-auth-foot">Forgotten your password? Ask the editor for a new setup code, then choose "First time here".</p>' +
    "</section>";
  };

  /* Wires up both forms; calls done() once signed in. */
  Desk.bindAuth = function (root, done) {
    var signin = Desk.$("[data-signin]", root), setup = Desk.$("[data-setup]", root);
    root.addEventListener("click", function (e) {
      var b = e.target.closest ? e.target.closest("[data-auth-mode]") : null;
      if (!b || !signin) return;
      var toSetup = b.getAttribute("data-auth-mode") === "setup";
      signin.hidden = toSetup; setup.hidden = !toSetup;
      var t = Desk.$("[data-auth-title]", root);
      if (t) t.textContent = toSetup ? "Set up your account" : "Sign in";
      var first = Desk.$(toSetup ? "#d-sname" : "#d-name", root);
      if (first) {
        var other = Desk.$(toSetup ? "#d-name" : "#d-sname", root);
        if (other && other.value && !first.value) first.value = other.value;
        first.focus();
      }
    });
    function bad(err) { return /invalid|credentials/i.test(err && err.message || ""); }
    if (signin) signin.addEventListener("submit", function (e) {
      e.preventDefault();
      var st = Desk.$("[data-auth-status]", root), btn = Desk.$('button[type="submit"]', signin);
      var who = Desk.$("#d-name", root).value, pw = Desk.$("#d-pass", root).value;
      st.className = "status err"; st.textContent = "";
      if (!who || !pw) { st.textContent = "Choose your name and enter your password."; return; }
      btn.disabled = true; btn.textContent = "SIGNING IN…";
      Desk.api.signIn(who, pw).then(done).catch(function (err) {
        st.textContent = bad(err) ? "That name and password do not match. If this is your first time, use your setup code." : "Could not sign in: " + (err && err.message || "please try again.");
        btn.disabled = false; btn.textContent = "SIGN IN";
      });
    });
    if (setup) setup.addEventListener("submit", function (e) {
      e.preventDefault();
      var st = Desk.$("[data-setup-status]", root), btn = Desk.$('button[type="submit"]', setup);
      var who = Desk.$("#d-sname", root).value, code = Desk.$("#d-code", root).value.trim();
      var a = Desk.$("#d-np1", root).value, b = Desk.$("#d-np2", root).value;
      st.className = "status err"; st.textContent = "";
      if (!who) { st.textContent = "Choose your name."; return; }
      if (!code) { st.textContent = "Enter the setup code from the editor."; return; }
      if (a.length < 10) { st.textContent = "Use at least 10 characters for your password."; return; }
      if (a !== b) { st.textContent = "The two passwords are different."; return; }
      if (a === code) { st.textContent = "Choose a password that is different from the setup code."; return; }
      btn.disabled = true; btn.textContent = "SETTING UP…";
      /* An account with an authenticator app gives its code before the password changes. */
      function codeFirst() {
        return Desk.api.level().then(function (lv) {
          if (lv.currentLevel === "aal2" || lv.nextLevel !== "aal2") return;
          var box = document.createElement("div");
          setup.hidden = true;
          setup.parentNode.insertBefore(box, setup);
          return askCode(box, { inline: true }).then(function () {
            box.parentNode.removeChild(box);
            setup.hidden = false;
          });
        });
      }
      Desk.api.setup(who, code, a, codeFirst).then(done).catch(function (err) {
        st.textContent = bad(err) ? "That setup code does not match this name. Check it with the editor; a code works only until a password is created." : "Could not set up: " + (err && err.message || "please try again.");
        btn.disabled = false; btn.textContent = "CREATE MY PASSWORD";
      });
    });
  };

  /* ---------- two-step sign-in ---------- */
  var SEAL = '<svg class="desk-auth-seal" viewBox="0 0 100 100" aria-hidden="true"><use href="#seal-mini"></use></svg>';
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
     must enter its code; with opts.require (the editor), an account without one
     must add one first. */
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
              "The editor's account decides what appears on the site, so it needs a second step: a code from your phone as well as your password." :
              "After your password, the desk will also ask for a code from your phone. Someone who learns your password still cannot get in.") + "</p>" +
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
            '<p class="desk-auth-foot">Keep the app on your phone. If you lose the phone, ' + (opts.required ?
              "two-step sign-in can be reset in the Supabase project" : "the editor can reset this") + " so you can add a new one.</p>" +
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

  /* The member's own two-step setting (expert desk, #security). */
  Desk.securityView = function (host, me, back) {
    host.innerHTML = '<p class="desk-loading">Opening…</p>';
    Desk.api.factors().then(function (list) {
      if (!list.length) {
        return addApp(host, { required: false }).then(function (on) { if (on) Desk.securityView(host, me, back); else back(); });
      }
      var editor = me && me.role === "editor";
      host.innerHTML = '<section class="desk-auth">' + SEAL + '<p class="label">TWO-STEP SIGN-IN</p><h1>Your sign-in</h1>' +
        '<p class="desk-on">Two-step sign-in is on. Each time you sign in, the desk asks for the code from the authenticator app on your phone.</p>' +
        (editor ? '<p class="hint">The editor\'s account always needs it.</p>' :
          '<form class="desk-form" data-off-form novalidate><p class="status" data-off-status role="status"></p>' +
            '<button class="btn btn-quiet" type="submit">TURN IT OFF</button></form>') +
        '<p class="desk-switch"><button type="button" class="desk-link" data-sec-back>Back to your desk</button></p></section>';
      Desk.$("[data-sec-back]", host).addEventListener("click", function () { back(); });
      var off = Desk.$("[data-off-form]", host);
      if (off) off.addEventListener("submit", function (e) {
        e.preventDefault();
        if (!window.confirm("Turn off two-step sign-in? Your password alone will open your desk again.")) return;
        var st = Desk.$("[data-off-status]", host);
        Desk.api.unenroll(list[0].id).then(function () { Desk.securityView(host, me, back); }).catch(function (err) {
          st.className = "status err"; st.textContent = "Could not turn it off: " + (err && err.message || "please try again.");
        });
      });
    }).catch(function (err) {
      host.innerHTML = '<section class="desk-auth"><h1>Could not open</h1><p class="desk-auth-lede">' + esc(err && err.message || "Please try again.") + "</p>" +
        '<p class="desk-switch"><button type="button" class="desk-link" data-sec-back>Back to your desk</button></p></section>';
      Desk.$("[data-sec-back]", host).addEventListener("click", function () { back(); });
    });
  };
})();
