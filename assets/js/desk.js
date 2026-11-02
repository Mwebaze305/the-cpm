/* The Credence Letters — expert desk: code shared by expert.html and review.html.

   Accounts, drafts and approvals live in Supabase (supabaseUrl and supabaseKey
   in config.js; tables in supabase/schema.sql). Add ?preview to the address to
   try the pages on sample data instead: nothing leaves the browser tab. */
(function () {
  "use strict";

  var CFG = window.CPM_CONFIG || {};
  var PHOTOS = window.CPM_PHOTOS || {};
  var TEAM = window.CPM_TEAM || [];
  var Desk = window.Desk = {};

  Desk.preview = /[?&]preview(=|&|$)/.test(window.location.search);
  Desk.configured = !!(CFG.supabaseUrl && CFG.supabaseKey);

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
        s.src = "https://cdn.jsdelivr.net/npm/mammoth@1.13.0/mammoth.browser.min.js";
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
  Desk.api = Desk.preview || !Desk.configured ? previewApi() : supabaseApi();

  function must(r) { if (r.error) throw r.error; return r.data; }

  function supabaseApi() {
    if (!window.supabase || !window.supabase.createClient) {
      var down = function () { return Promise.reject(new Error("Could not reach the sign-in service. Check your connection and reload the page.")); };
      return { live: true, init: down, signIn: down, signOut: down, sendReset: down, setPassword: down, me: down, myPieces: down, allPieces: down,
        create: down, update: down, remove: down, upload: down, removeFile: down, fileUrl: down };
    }
    var hash = window.location.hash || "";
    var mode = /type=(invite|signup|magiclink)/.test(hash) ? "invite" : /type=recovery/.test(hash) ? "recovery" : null;
    var linkError = /error_description=([^&]+)/.exec(hash);
    var sb = window.supabase.createClient(CFG.supabaseUrl, CFG.supabaseKey, {
      auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true, flowType: "implicit", storageKey: "cl-desk-auth" }
    });
    var user = null;
    sb.auth.onAuthStateChange(function (event, session) {
      user = session ? session.user : null;
      if (event === "PASSWORD_RECOVERY") mode = "recovery";
    });
    var PIECE_COLS = "id,author,title,summary,body,sources,focus,photo,idea_id,file_path,file_name,status,editor_note,slug,submitted_at,approved_at,publish_on,created_at,updated_at";
    function withAuthor(rows) {
      return (rows || []).map(function (r) {
        r.author_name = r.profile ? r.profile.name : "";
        r.author_team = r.profile ? r.profile.team_id : "";
        delete r.profile;
        return r;
      });
    }
    return {
      live: true,
      init: function () {
        return sb.auth.getSession().then(function (r) {
          var s = must(r).session;
          user = s ? s.user : null;
          return { signedIn: !!s, mode: s ? mode : null, linkError: linkError ? decodeURIComponent(linkError[1].replace(/\+/g, " ")) : "" };
        });
      },
      signIn: function (email, password) { return sb.auth.signInWithPassword({ email: email, password: password }).then(function (r) { user = must(r).user; }); },
      signOut: function () { return sb.auth.signOut(); },
      sendReset: function (email, redirect) { return sb.auth.resetPasswordForEmail(email, { redirectTo: redirect }).then(must); },
      setPassword: function (pw) { return sb.auth.updateUser({ password: pw }).then(must); },
      me: function () {
        return sb.from("profiles").select("id,name,team_id,role").eq("id", user.id).single().then(must).then(function (p) {
          p.email = user.email;
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

  /* Preview: sample accounts and pieces kept in this tab (sessionStorage),
     following the same rules as the database. */
  function previewApi() {
    var KEY = "cl-desk-preview";
    var PEOPLE = {
      "u-dominick": { id: "u-dominick", name: "Dominick Damian Msalila", team_id: "dominick", role: "expert", email: "dominick@example.org" },
      "u-yidnekachew": { id: "u-yidnekachew", name: "Yidnekachew Addis", team_id: "yidnekachew", role: "expert", email: "yidnekachew@example.org" },
      "u-aaron": { id: "u-aaron", name: "Aaron Mwesigwa Mwebaze", team_id: "aaron", role: "editor", email: "editor@example.org" }
    };
    var files = {};
    function now() { return new Date().toISOString(); }
    function seed() {
      var t = Desk.today();
      return {
        user: null,
        pieces: [
          { id: "p-sample-1", author: "u-dominick", title: "Screening without closing borders", summary: "What the Ebola response at East Africa's points of entry can teach the Mekong, and the other way round.",
            body: "This is sample text for the preview.\n\nIn the live desk, an expert's own words appear here.\n\n## A subheading\n\nParagraphs are separated by a blank line.",
            sources: "WHO Disease Outbreak News (23 Oct 2026) https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON622",
            focus: "health", photo: "goma-kivu", idea_id: null, status: "approved", slug: "screening-without-closing-borders-sample",
            publish_on: Desk.addDays(t, -1), approved_at: now(), submitted_at: now(), created_at: now(), updated_at: now() },
          { id: "p-sample-2", author: "u-yidnekachew", title: "Who gains when refugees and hosts share the same investment?", summary: "",
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
    return {
      live: false,
      sampleUsers: PEOPLE,
      init: function () { return late({ signedIn: !!db.user, mode: null, linkError: "" }); },
      signIn: function (email, password, as) {
        if (!email || !password) return fail("Enter an email and a password.");
        db.user = as || "u-dominick"; persist(); return late();
      },
      signOut: function () { db.user = null; persist(); return late(); },
      sendReset: function () { return late(); },
      setPassword: function () { return late(); },
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

  /* ---------- shared screens: sign-in and choosing a password ---------- */
  Desk.authView = function (opts) {
    var preview = Desk.preview, live = !preview && Desk.configured;
    return '<section class="desk-auth">' +
      '<svg class="desk-auth-seal" viewBox="0 0 100 100" aria-hidden="true"><use href="#seal-mini"></use></svg>' +
      '<p class="label">' + esc(opts.eyebrow) + "</p>" +
      "<h1>" + esc(opts.title) + "</h1>" +
      '<p class="desk-auth-lede">' + esc(opts.lede) + "</p>" +
      (preview ? '<p class="desk-notice">Preview: any email and password will do. Changes stay in this browser tab and nobody else sees them.</p>' :
        !live ? '<p class="desk-notice">The desk is not connected yet. <a href="' + esc(opts.page) + '?preview">See a preview →</a></p>' : "") +
      (opts.message ? '<p class="desk-notice desk-notice-err" role="alert">' + esc(opts.message) + "</p>" : "") +
      '<form class="desk-form" data-signin novalidate>' +
        '<div class="field"><label for="d-email">Email</label><input id="d-email" type="email" autocomplete="username" required></div>' +
        '<div class="field"><label for="d-pass">Password</label><input id="d-pass" type="password" autocomplete="current-password" required></div>' +
        '<p class="status" data-auth-status role="status"></p>' +
        '<button class="btn" type="submit"' + (!live && !preview ? " disabled" : "") + ">SIGN IN</button>" +
      "</form>" +
      (live ? '<details class="desk-forgot"><summary>Forgot your password?</summary>' +
        '<form class="desk-form" data-reset novalidate><div class="field"><label for="d-remail">Email</label><input id="d-remail" type="email" autocomplete="username" required></div>' +
        '<p class="status" data-reset-status role="status"></p><button class="btn btn-quiet" type="submit">SEND A RESET LINK</button></form></details>' : "") +
      '<p class="desk-auth-foot">Accounts are by invitation. To join, write to the editors through <a href="exchange.html#register">Exchange of Notes</a>.</p>' +
    "</section>";
  };

  Desk.passwordView = function (mode) {
    return '<section class="desk-auth">' +
      '<svg class="desk-auth-seal" viewBox="0 0 100 100" aria-hidden="true"><use href="#seal-mini"></use></svg>' +
      '<p class="label">' + (mode === "invite" ? "WELCOME" : "NEW PASSWORD") + "</p>" +
      "<h1>Choose your password</h1>" +
      '<p class="desk-auth-lede">At least 10 characters. Only you will know it: the editors cannot see passwords.</p>' +
      '<form class="desk-form" data-newpass novalidate>' +
        '<div class="field"><label for="d-np1">New password</label><input id="d-np1" type="password" autocomplete="new-password" minlength="10" required></div>' +
        '<div class="field"><label for="d-np2">Type it again</label><input id="d-np2" type="password" autocomplete="new-password" minlength="10" required></div>' +
        '<p class="status" data-np-status role="status"></p>' +
        '<button class="btn" type="submit">SAVE PASSWORD</button>' +
      "</form></section>";
  };

  /* Wires up the sign-in, reset and new-password forms; calls done() once signed in. */
  Desk.bindAuth = function (root, done, as) {
    var signin = Desk.$("[data-signin]", root);
    if (signin) signin.addEventListener("submit", function (e) {
      e.preventDefault();
      var st = Desk.$("[data-auth-status]", root), btn = Desk.$("button", signin);
      var email = Desk.$("#d-email", root).value.trim(), pw = Desk.$("#d-pass", root).value;
      st.className = "status"; st.textContent = "";
      if (!email || !pw) { st.className = "status err"; st.textContent = "Enter your email and password."; return; }
      btn.disabled = true; btn.textContent = "SIGNING IN…";
      Desk.api.signIn(email, pw, as).then(done).catch(function (err) {
        st.className = "status err";
        st.textContent = /invalid/i.test(err && err.message) ? "That email and password do not match an account." : "Could not sign in: " + (err && err.message || "please try again.");
        btn.disabled = false; btn.textContent = "SIGN IN";
      });
    });
    var reset = Desk.$("[data-reset]", root);
    if (reset) reset.addEventListener("submit", function (e) {
      e.preventDefault();
      var st = Desk.$("[data-reset-status]", root), email = Desk.$("#d-remail", root).value.trim();
      if (!email) { st.className = "status err"; st.textContent = "Enter your email."; return; }
      var back = window.location.origin + window.location.pathname;
      Desk.api.sendReset(email, back).then(function () {
        st.className = "status ok"; st.textContent = "If that email has an account, a reset link is on its way.";
      }).catch(function (err) { st.className = "status err"; st.textContent = "Could not send the link: " + (err && err.message || "please try again."); });
    });
    var np = Desk.$("[data-newpass]", root);
    if (np) np.addEventListener("submit", function (e) {
      e.preventDefault();
      var st = Desk.$("[data-np-status]", root), a = Desk.$("#d-np1", root).value, b = Desk.$("#d-np2", root).value;
      st.className = "status err";
      if (a.length < 10) { st.textContent = "Use at least 10 characters."; return; }
      if (a !== b) { st.textContent = "The two passwords are different."; return; }
      Desk.api.setPassword(a).then(done).catch(function (err) { st.textContent = "Could not save it: " + (err && err.message || "please try again."); });
    });
  };
})();
