/* The Credence Letters — the team pages: researchers.html and experts.html.
   The page's <body data-mode> says which one: "researcher" or "expert".

   Researchers: dispatches in two departments (Public health; Governance and
   development), each with two or three questions to research, a Free (green)
   or Taken up (red) button, and the guidelines. Taking one up opens a draft.

   Experts: pieces awaiting their review, hot topics (dispatches taken up in
   their department), free topics, their own writing and what they have
   published. They read a piece, see what changed since they sent it back,
   ask questions or suggest corrections, send it back or approve it. Their
   approval publishes it.

   Both: the writing page (type, upload a document, upload a cover picture,
   sources, save, submit). Every suggestion is copied into the draft as
   ordinary editable text. */
(function () {
  "use strict";

  var D = window.Desk;
  if (!D) return;                     // inside another site's frame: the pages stay closed
  var esc = D.esc, $ = D.$, $all = D.$all, api = D.api;
  var MODE = document.body.getAttribute("data-mode") === "expert" ? "expert" : "researcher";
  var IDEAS = window.CPM_IDEAS || { items: [] };
  var GUIDE = window.CPM_GUIDELINES || { sections: [] };
  var root = $("[data-desk]"), bar = $("[data-desk-bar]");

  var me = null, people = {}, pieces = [], takeups = [], notes = [];
  var deptTab = D.store.get("dept") || null, expertTab = "review";
  var cur = null;                     // the piece open in the writing page
  var saveTimer = null, saving = null, again = false, pending = false;
  var FIELDS = ["title", "summary", "body", "sources", "focus", "photo", "dept", "contested", "cover_credit"];

  /* ---------- start ---------- */
  function boot() {
    api.init().then(function (s) {
      if (s.signedIn) return enter();
      showSignIn("");
    }).catch(function (e) { showSignIn(e.message); });
  }

  function showSignIn(message) {
    me = null;
    renderBar();
    root.innerHTML = D.authView({ message: message });
    D.bindAuth(root, { role: MODE }, function (role) {
      if (role !== MODE) { window.location.href = D.page(role); return; }
      enter();
    });
  }

  function stop(title, text, actions) {
    root.innerHTML = '<section class="desk-auth"><svg class="desk-auth-seal" viewBox="0 0 100 100" aria-hidden="true"><use href="#seal-mini"></use></svg>' +
      "<h1>" + esc(title) + '</h1><p class="desk-auth-lede">' + text + "</p>" + (actions || '<button class="btn" type="button" data-signout>SIGN OUT</button>') + "</section>";
  }

  /* Password first (done), then the two-step code: required on the experts
     page, asked on the researchers page only if the member turned it on. */
  function enter() {
    var loading = '<p class="desk-loading">Opening…</p>';
    root.innerHTML = loading;
    api.version().then(function (v) {
      if (v < D.VERSION) { var e = new Error("version"); e.version = true; throw e; }
      return D.twoStep(root);
    }).then(function () {
      return api.me();
    }).then(function (p) {
      if (!p) throw new Error("no profile");
      me = p;
      if (MODE === "expert" && p.role !== "expert" && p.role !== "editor") {
        renderBar();
        var e = new Error("not expert"); e.notExpert = true; throw e;
      }
      return MODE === "expert" ? D.twoStep(root, { require: true }) : null;
    }).then(function () {
      root.innerHTML = loading;
      return load();
    }).then(function () {
      if (!deptTab) deptTab = me.dept || "health";
      renderBar();
      route();
    }).catch(function (err) {
      if (err && err.version) return stop("Being updated", "The team pages are being updated. Please try again in a few minutes.");
      if (err && err.notExpert) return stop("This page is for experts", "You are signed in as a researcher. Your dispatches and writing are on the researchers page.",
        '<a class="btn" href="' + esc(D.page("researcher")) + '">GO TO THE RESEARCHERS PAGE</a> <button class="btn btn-quiet" type="button" data-signout>SIGN OUT</button>');
      stop("Your account is almost ready", "The editor still needs to finish setting it up. Please try again later.");
    });
  }

  function load() {
    return Promise.all([api.pieces(), api.takeups(), api.team()]).then(function (r) {
      pieces = r[0] || []; takeups = r[1] || [];
      people = {};
      (r[2] || []).forEach(function (p) { people[p.id] = p; });
      var ids = pieces.filter(function (p) { return p.status !== "draft"; }).map(function (p) { return p.id; });
      return api.notes(ids);
    }).then(function (n) { notes = n || []; });
  }

  /* ---------- top bar ---------- */
  function isReviewer() { return me && (me.role === "expert" || me.role === "editor"); }
  function renderBar() {
    var other = me && MODE === "researcher" && isReviewer() ? '<a href="' + esc(D.page("expert")) + '">Experts page</a>' :
      me && MODE === "expert" ? '<a href="' + esc(D.page("researcher")) + '">Researchers page</a>' : "";
    var waiting = me && MODE === "expert" ? toReview().filter(function (p) { return p.status === "waiting"; }).length : 0;
    bar.innerHTML =
      '<div class="wrap desk-bar-in">' +
        '<a class="brand" href="index.html" aria-label="The Credence Letters, home"><svg viewBox="0 0 100 100" aria-hidden="true"><use href="#seal-mini"></use></svg>' +
          '<span class="brand-word"><span class="bw-1">THE CREDENCE</span><span class="bw-2">Letters</span></span></a>' +
        '<a class="desk-bar-title" href="#">' + (MODE === "expert" ? "Experts" : "Researchers") +
          (waiting ? ' <span class="desk-count" title="Waiting for your review">' + waiting + "</span>" : "") + "</a>" +
        (D.preview ? '<span class="desk-preview-tag">PREVIEW</span>' : "") +
        (me ? '<div class="desk-bar-user">' +
          '<span class="desk-bar-name">' + esc(me.name || "") + "</span>" + other +
          '<a href="#guidelines">Guidelines</a>' +
          '<a href="#security">Two-step sign-in</a>' +
          '<button type="button" data-signout>Sign out</button></div>' : "") +
      "</div>";
  }

  document.addEventListener("click", function (e) {
    var b = e.target.closest ? e.target.closest("[data-signout]") : null;
    if (!b) return;
    flush().then(function () { return api.signOut(); }).then(function () { showSignIn(""); });
  });

  /* ---------- routing ----------
     #dispatch/<id>, #piece/<id>, #new, #review/<id>, #guidelines, #security */
  function route() {
    if (!me) return;
    var h = window.location.hash.replace(/^#/, ""), m;
    cur = null;
    if ((m = /^dispatch\/([\w-]+)$/.exec(h))) return showDispatch(m[1]);
    if ((m = /^piece\/([\w-]+)$/.exec(h))) return showEditor(findPiece(m[1]));
    if (h === "new") return showEditor({ status: "draft", title: "", summary: "", body: "", sources: "", dept: me.dept || deptTab || null, contested: false });
    if ((m = /^review\/([\w-]+)$/.exec(h))) return showReview(findPiece(m[1]));
    if (h === "guidelines") return showGuidelines();
    if (h === "security") return D.securityView(root, me, function () { window.location.hash = ""; });
    if (MODE === "expert") showExpertHome(); else showResearcherHome();
  }
  window.addEventListener("hashchange", function () {
    flush().then(function () { return load().catch(function () { /* keep what we have */ }); }).then(function () { renderBar(); route(); });
  });

  /* ---------- data helpers ---------- */
  function findPiece(id) { for (var i = 0; i < pieces.length; i++) if (pieces[i].id === id) return pieces[i]; return null; }
  function upsert(p) {
    for (var i = 0; i < pieces.length; i++) if (pieces[i].id === p.id) { pieces[i] = Object.assign({}, pieces[i], p); return pieces[i]; }
    pieces.unshift(p);
    return p;
  }
  function takeupOf(id) { for (var i = 0; i < takeups.length; i++) if (takeups[i].dispatch_id === id) return takeups[i]; return null; }
  function person(uid) { return people[uid] || {}; }
  function personName(uid) { return person(uid).name || "a team member"; }
  function mine() { return pieces.filter(function (p) { return p.author === me.id; }); }
  function notesFor(id) { return notes.filter(function (n) { return n.piece_id === id; }); }
  function top() { try { window.scrollTo({ top: 0, behavior: "instant" }); } catch (e) { window.scrollTo(0, 0); } }
  function ideaFor(dispatchId) { return IDEAS.items.filter(function (i) { return i.dispatch === dispatchId; })[0] || null; }

  /* Mirrors the database rule (desk.can_review): who reviews what. */
  function canReview(p) {
    if (!me || !p || p.author === me.id) return false;
    if (["waiting", "returned", "approved"].indexOf(p.status) < 0) return false;
    if (me.role === "editor") return true;
    return me.role === "expert" && !!me.dept && me.dept === p.dept && !p.contested && p.author_role !== "expert";
  }
  function toReview() { return pieces.filter(canReview); }
  /* Who will review a piece, for the writer. */
  function reviewersFor(p) {
    var editors = [], experts = [];
    Object.keys(people).forEach(function (k) {
      var x = people[k];
      if (x.id === me.id) return;
      if (x.role === "editor") editors.push(x.name);
      else if (x.role === "expert" && x.dept && x.dept === p.dept) experts.push(x.name);
    });
    var toEditor = p.contested || me.role === "expert" || !experts.length;
    return { who: toEditor ? "the editor" : "the " + D.deptName(p.dept) + " " + (experts.length > 1 ? "experts" : "expert"),
      names: toEditor ? editors : experts, editor: toEditor };
  }

  function greeting() {
    var h = new Date().getHours(), first = D.first(me.name);
    return (h < 12 ? "Good morning" : h < 17 ? "Good afternoon" : "Good evening") + (first ? ", " + first : "") + ".";
  }

  /* ---------- dispatch cards ---------- */
  function deptTabs(active, counts) {
    return '<div class="dp-tabs" role="tablist" aria-label="Departments">' + D.DEPTS.map(function (d) {
      return '<button type="button" role="tab" class="dp-tab dp-' + d[0] + '" aria-selected="' + (active === d[0]) + '" data-dept="' + d[0] + '">' +
        '<span class="dp-tab-name">' + esc(d[1]) + "</span>" + (counts ? '<span class="dp-tab-n">' + esc(counts[d[0]] || 0) + "</span>" : "") + "</button>";
    }).join("") + "</div>";
  }
  root.addEventListener("click", function (e) {
    var b = e.target.closest ? e.target.closest("[data-dept]") : null;
    if (!b || !root.contains(b) || b.closest("[data-editor-dept]")) return;
    deptTab = b.getAttribute("data-dept");
    D.store.set("dept", deptTab);
    route();
  });

  function takeButton(d) {
    var t = takeupOf(d.id);
    if (!t) return '<button type="button" class="tk-btn tk-free" data-take="' + esc(d.id) + '"><i aria-hidden="true"></i>FREE</button>' +
      '<span class="tk-hint">Tap to take it up</span>';
    if (t.member === me.id) {
      return '<span class="tk-btn tk-taken tk-mine"><i aria-hidden="true"></i>TAKEN UP</span>' +
        '<span class="tk-hint">By you · ' + esc(D.day(t.taken_at)) + "</span>";
    }
    return '<span class="tk-btn tk-taken" aria-disabled="true"><i aria-hidden="true"></i>TAKEN UP</span>' +
      '<span class="tk-hint">By ' + esc(personName(t.member)) + " · " + esc(D.day(t.taken_at)) + "</span>";
  }

  function dispatchCard(d) {
    var t = takeupOf(d.id), mineT = t && t.member === me.id;
    var draft = mineT ? pieceForDispatch(d.id) : null;
    return '<article class="dc-card' + (t ? " is-taken" : " is-free") + '" id="d-' + esc(d.id) + '">' +
      '<a class="dc-media" href="#dispatch/' + esc(d.id) + '" tabindex="-1" aria-hidden="true">' + D.photoImg(d.photo, "(max-width: 700px) 92vw, 420px") + "</a>" +
      '<div class="dc-body">' +
        '<p class="dc-meta">' + esc(D.REGIONS[d.region] || "") + " · " + esc(D.day(d.date)) + (d.contested ? ' · <span class="dc-ed">Reviewed by the editor</span>' : "") + "</p>" +
        '<h3 class="dc-title"><a href="#dispatch/' + esc(d.id) + '">' + esc(d.title) + "</a></h3>" +
        '<p class="dc-sum">' + esc(d.summary) + "</p>" +
        '<div class="dc-qs"><p class="dc-qs-h">Questions to research</p>' +
          (d.questions.length ? "<ol>" + d.questions.map(function (q) { return "<li>" + esc(q) + "</li>"; }).join("") + "</ol>" :
            '<p class="dc-noq">Questions for this dispatch are on the way. You can still take it up with your own question.</p>') + "</div>" +
        '<div class="dc-foot"><div class="tk">' + takeButton(d) + "</div>" +
          '<div class="dc-links">' +
            (mineT ? '<a class="desk-link" href="' + (draft ? "#piece/" + esc(draft.id) : "#dispatch/" + esc(d.id)) + '">' + (draft ? "Open your draft" : "Start writing") + "</a>" : "") +
            '<a class="desk-link" href="#dispatch/' + esc(d.id) + '">Read more</a>' +
            '<a class="desk-link" href="#guidelines">Guidelines</a>' +
          "</div></div>" +
      "</div></article>";
  }
  function pieceForDispatch(id) {
    var t = takeupOf(id);
    var list = mine().filter(function (p) { return p.dispatch_id === id || (t && t.piece_id === p.id); });
    return list[0] || null;
  }

  function legend() {
    return '<div class="tk-legend" aria-label="What the buttons mean">' +
      '<span><span class="tk-dot tk-free" aria-hidden="true"></span>Free: nobody has taken it up</span>' +
      '<span><span class="tk-dot tk-taken" aria-hidden="true"></span>Taken up: someone is researching it</span></div>';
  }

  /* ---------- your writing ---------- */
  function pieceRow(p, href) {
    var s = D.status(p), d = p.dispatch_id ? D.dispatch(p.dispatch_id) : null;
    var n = notesFor(p.id).filter(function (x) { return x.kind === "review"; }).length;
    return '<li><a class="piece-row" href="' + esc(href || "#piece/" + p.id) + '">' +
      '<span class="piece-title' + (p.title ? "" : " untitled") + '">' + esc(p.title || "Untitled draft") + "</span>" +
      '<span class="piece-meta">' + D.chip(p) + '<span class="piece-when">' +
        esc(s.key === "waiting" ? "Sent " + D.when(p.submitted_at) : s.key === "returned" ? "Sent back " + D.when(p.updated_at) : "Edited " + D.when(p.updated_at)) + "</span>" +
        (p.dept ? '<span class="piece-dept">' + esc(D.deptName(p.dept)) + "</span>" : "") + "</span>" +
      (d ? '<span class="piece-sum">From the dispatch: ' + esc(d.title) + "</span>" : "") +
      (p.status === "returned" ? '<span class="piece-note">' + (n ? n + (n === 1 ? " comment" : " comments") + " to answer. " : "") + "Open it to see the corrections and questions.</span>" : "") +
    "</a></li>";
  }
  function writingSection(id, title) {
    var list = mine();
    return '<section class="desk-sec desk-sec-alt" aria-labelledby="' + id + '"><div class="wrap">' +
      '<div class="desk-sec-head"><h2 id="' + id + '">' + esc(title) + '</h2><a class="desk-link" href="#new">+ Your own question</a></div>' +
      (list.length ? '<ul class="piece-list">' + list.map(function (p) { return pieceRow(p); }).join("") + "</ul>" :
        '<p class="desk-empty">Nothing yet. Take up a free dispatch above, or start from your own question.</p>') +
      '<div class="st-legend" aria-label="What the colours mean">' +
        '<span class="st-chip st-grey"><i aria-hidden="true"></i>Draft: not sent</span>' +
        '<span class="st-chip st-orange"><i aria-hidden="true"></i>Waiting review</span>' +
        '<span class="st-chip st-red"><i aria-hidden="true"></i>Sent back</span>' +
        '<span class="st-chip st-green"><i aria-hidden="true"></i>Published</span>' +
      "</div></div></section>";
  }

  /* ---------- researchers' home ---------- */
  function showResearcherHome() {
    var all = D.dispatches(), list = all.filter(function (d) { return d.dept === deptTab; });
    var counts = {}; all.forEach(function (d) { counts[d.dept] = (counts[d.dept] || 0) + 1; });
    var back = mine().filter(function (p) { return p.status === "returned"; });
    root.innerHTML =
      '<section class="desk-hero"><div class="wrap">' +
        '<p class="label">RESEARCHERS</p><h1>' + esc(greeting()) + "</h1>" +
        '<p class="desk-lede">Choose a department, then a dispatch. Each one comes with questions to research. Tap <strong>Free</strong> to take it up: it turns red for everyone else, and your draft opens.</p>' +
        (back.length ? '<p class="desk-alert"><a href="#piece/' + esc(back[0].id) + '">' + (back.length === 1 ? "A piece of yours was sent back with comments." : back.length + " pieces of yours were sent back with comments.") + " Open it →</a></p>" : "") +
      "</div></section>" +
      '<section class="desk-sec" aria-labelledby="disp-h"><div class="wrap">' +
        '<div class="desk-sec-head"><h2 id="disp-h">Dispatches</h2><p class="desk-meta">' + (D.dispatchesUpdated ? "Updated " + esc(D.day(D.dispatchesUpdated)) : "") + "</p></div>" +
        deptTabs(deptTab, counts) + legend() +
        (list.length ? '<div class="dc-grid">' + list.map(dispatchCard).join("") + "</div>" :
          '<p class="desk-empty">No dispatches in this department yet. New ones arrive with the daily update.</p>') +
      "</div></section>" +
      writingSection("mine-h", "Your writing");
    top();
  }

  /* ---------- experts' home ---------- */
  function topicRow(t) {
    var d = D.dispatch(t.dispatch_id), p = t.piece_id ? findPiece(t.piece_id) : null;
    if (!p) p = pieces.filter(function (x) { return x.dispatch_id === t.dispatch_id && x.author === t.member; })[0] || null;
    var st = p ? D.status(p) : null;
    var state = !p ? "Being written" : st.key === "waiting" ? "Waiting review" : st.key === "returned" ? "Sent back" : st.key === "draft" ? "Being written" : st.label;
    var canFree = me.role === "editor" || (me.role === "expert" && me.dept === t.dept);
    return '<li class="hot-row">' + D.face(person(t.member).team_id, 44) +
      '<div class="hot-main"><p class="hot-title">' + (d ? '<a href="#dispatch/' + esc(d.id) + '">' + esc(d.title) + "</a>" : esc(t.title || t.dispatch_id)) + "</p>" +
        '<p class="hot-meta">Taken up by <strong>' + esc(personName(t.member)) + "</strong> · " + esc(D.day(t.taken_at)) + ' · <span class="hot-state">' + esc(state) + "</span></p>" +
        '<p class="hot-acts">' +
          (p && canReview(p) ? '<a class="desk-link" href="#review/' + esc(p.id) + '">' + (p.status === "waiting" ? "Review it" : "Open") + "</a>" : "") +
          (d ? '<a class="desk-link" href="#dispatch/' + esc(d.id) + '">Read the dispatch</a>' : "") +
          (canFree && t.member !== me.id ? '<button type="button" class="desk-link desk-link-danger" data-free="' + esc(t.dispatch_id) + '">Free it</button>' : "") +
        "</p></div></li>";
  }

  function reviewRow(p) {
    var changed = p.status === "waiting" && p.returned_body != null && p.returned_body !== p.body;
    var d = p.dispatch_id ? D.dispatch(p.dispatch_id) : null;
    return '<li><a class="piece-row" href="#review/' + esc(p.id) + '">' +
      '<span class="piece-title' + (p.title ? "" : " untitled") + '">' + esc(p.title || "Untitled") + "</span>" +
      '<span class="piece-meta">' + D.chip(p) + '<span class="piece-when">By ' + esc(p.author_name || personName(p.author)) + " · " +
        esc(p.status === "waiting" ? "sent " + D.when(p.submitted_at) : p.status === "returned" ? "sent back " + D.when(p.updated_at) : D.status(p).label) + "</span>" +
        (p.dept ? '<span class="piece-dept">' + esc(D.deptName(p.dept)) + "</span>" : "") +
        (changed ? '<span class="piece-tag">Corrected since you sent it back</span>' : "") + "</span>" +
      (d ? '<span class="piece-sum">From the dispatch: ' + esc(d.title) + "</span>" : "") +
    "</a></li>";
  }

  var EX_TABS = [["review", "Awaiting review"], ["hot", "Hot topics"], ["free", "Free topics"], ["mine", "Your writing"], ["published", "Published"]];
  function showExpertHome() {
    var dept = me.role === "editor" ? deptTab : (me.dept || deptTab);
    var review = toReview(), waiting = review.filter(function (p) { return p.status === "waiting"; });
    var withWriter = review.filter(function (p) { return p.status === "returned"; });
    var published = review.filter(function (p) { return p.status === "approved"; });
    var all = D.dispatches();
    var hot = takeups.filter(function (t) { return t.dept === dept; }).sort(function (a, b) { return a.taken_at < b.taken_at ? 1 : -1; });
    var free = all.filter(function (d) { return d.dept === dept && !takeupOf(d.id); });
    var counts = { review: waiting.length, hot: hot.length, free: free.length, mine: mine().length, published: published.length };
    var body;
    if (expertTab === "review") {
      body = '<h2 class="sr-only">Awaiting review</h2>' +
        (waiting.length ? '<ul class="piece-list">' + waiting.sort(function (a, b) { return a.submitted_at < b.submitted_at ? -1 : 1; }).map(reviewRow).join("") + "</ul>" :
          '<p class="desk-empty">Nothing is waiting for you. When a ' + (me.role === "editor" ? "member" : "researcher in " + esc(D.deptName(me.dept))) + " submits a piece, it appears here.</p>") +
        (withWriter.length ? '<h3 class="desk-sub">Sent back, with the writer</h3><ul class="piece-list">' + withWriter.map(reviewRow).join("") + "</ul>" : "");
    } else if (expertTab === "hot") {
      body = (me.role === "editor" ? deptTabs(dept) : "") +
        '<p class="desk-note">Dispatches someone has taken up in ' + esc(D.deptName(dept)) + ". Free one that has stalled so someone else can take it.</p>" +
        (hot.length ? '<ul class="hot-list">' + hot.map(topicRow).join("") + "</ul>" : '<p class="desk-empty">Nobody has taken up a dispatch in this department yet.</p>');
    } else if (expertTab === "free") {
      body = (me.role === "editor" ? deptTabs(dept) : "") + legend() +
        (free.length ? '<div class="dc-grid">' + free.map(dispatchCard).join("") + "</div>" : '<p class="desk-empty">Every dispatch in this department has been taken up.</p>');
    } else if (expertTab === "mine") {
      body = '<p class="desk-note">' + (me.role === "editor" ? "Your pieces are reviewed by an expert of their department." : "Your pieces go to the editor for review.") +
        ' <a class="desk-link" href="#new">+ New piece</a></p>' +
        (mine().length ? '<ul class="piece-list">' + mine().map(function (p) { return pieceRow(p); }).join("") + "</ul>" : '<p class="desk-empty">Nothing yet.</p>');
    } else {
      body = (published.length ? '<ul class="piece-list">' + published.sort(function (a, b) { return a.publish_on < b.publish_on ? 1 : -1; }).map(reviewRow).join("") + "</ul>" :
        '<p class="desk-empty">Nothing you reviewed has been published yet.</p>');
    }
    root.innerHTML =
      '<section class="desk-hero"><div class="wrap">' +
        '<p class="label">' + (me.role === "editor" ? "EDITOR" : "EXPERTS · " + esc(D.deptName(me.dept).toUpperCase())) + "</p><h1>" + esc(greeting()) + "</h1>" +
        '<p class="desk-lede">' + (waiting.length ? (waiting.length === 1 ? "One piece is" : waiting.length + " pieces are") + " waiting for your review. " : "") +
          (me.role === "editor" ? "You review pieces by experts and pieces on contested political disputes, and can review any other." :
            "You review pieces by researchers in " + esc(D.deptName(me.dept)) + ". Your approval publishes a piece.") + "</p>" +
      "</div></section>" +
      '<section class="desk-sec"><div class="wrap">' +
        '<div class="rv-tabs" role="tablist" aria-label="Your desk">' + EX_TABS.map(function (t) {
          return '<button type="button" role="tab" aria-selected="' + (expertTab === t[0]) + '" data-xtab="' + t[0] + '">' + esc(t[1]) +
            ' <span class="rv-n' + (t[0] === "review" && counts.review ? " is-hot" : "") + '">' + counts[t[0]] + "</span></button>";
        }).join("") + "</div>" +
        '<div class="xt-body">' + body + "</div>" +
      "</div></section>";
    top();
  }
  root.addEventListener("click", function (e) {
    var b = e.target.closest ? e.target.closest("[data-xtab]") : null;
    if (b) { expertTab = b.getAttribute("data-xtab"); showExpertHome(); }
  });

  /* ---------- taking up, giving back, freeing ---------- */
  root.addEventListener("click", function (e) {
    var b = e.target.closest ? e.target.closest("[data-take], [data-give-back], [data-free]") : null;
    if (!b) return;
    if (b.hasAttribute("data-take")) return take(b, b.getAttribute("data-take"));
    var id = b.getAttribute("data-give-back") || b.getAttribute("data-free");
    var own = b.hasAttribute("data-give-back");
    if (!window.confirm(own ? "Give this dispatch back? It turns green again so someone else can take it up. Your draft is kept." :
      "Free this dispatch? " + personName((takeupOf(id) || {}).member) + " will no longer have it, and anyone can take it up. Their draft is kept.")) return;
    b.disabled = true;
    api.giveBack(id).then(function (done) {
      if (!done) throw new Error("you cannot free this one.");
      takeups = takeups.filter(function (t) { return t.dispatch_id !== id; });
      route();
    }).catch(function (err) { b.disabled = false; window.alert("Could not do that: " + (err && err.message || "please try again.")); });
  });

  function take(btn, id) {
    var d = D.dispatch(id);
    if (!d) return;
    btn.disabled = true; btn.innerHTML = '<i aria-hidden="true"></i>TAKING…';
    api.take(id, d.dept, d.title).then(function (t) {
      takeups.push(t);
      return startFromDispatch(d);
    }).catch(function (err) {
      if (err && err.message === "taken") {
        return api.takeups().then(function (list) { takeups = list; route(); window.alert("Someone has just taken this one up. Choose another, or ask them to work with you."); });
      }
      btn.disabled = false; btn.innerHTML = '<i aria-hidden="true"></i>FREE';
      window.alert("Could not take it up: " + (err && err.message || "please try again."));
    });
  }

  /* A new draft from a dispatch: the questions, a suggested outline ending in
     "What should be done", and the dispatch's sources, all as editable text. */
  function startFromDispatch(d) {
    var idea = ideaFor(d.id);
    var outline = idea && idea.outline && idea.outline.length ? idea.outline.slice() : ["What is happening", "Why it matters"];
    if (!/what should be done/i.test(outline[outline.length - 1])) outline.push("What should be done");
    return api.create({
      title: "", summary: "",
      body: outline.map(function (h) { return "## " + h + "\n\n"; }).join(""),
      sources: (d.sources || []).map(D.sourceLine).join("\n"),
      focus: d.focus || null, photo: d.photo || null, dept: d.dept, contested: !!d.contested,
      dispatch_id: d.id, idea_id: idea ? idea.id : null
    }).then(function (p) {
      upsert(p);
      return api.linkTakeup(d.id, p.id).catch(function () { /* the link is a convenience */ }).then(function () {
        var t = takeupOf(d.id); if (t) t.piece_id = p.id;
        window.location.hash = "piece/" + p.id;
      });
    });
  }

  /* ---------- one dispatch ---------- */
  function showDispatch(id) {
    var d = D.dispatch(id);
    if (!d) {
      var t = takeupOf(id);
      root.innerHTML = '<article class="wrap wrap-narrow desk-idea"><a class="desk-back" href="#">← Back</a><h1>' + esc(t && t.title || "This dispatch") + "</h1>" +
        "<p>This dispatch has left the current list. Pieces started from it are kept.</p></article>";
      return top();
    }
    var t2 = takeupOf(id), draft = pieceForDispatch(id), idea = ideaFor(id);
    root.innerHTML =
      '<article class="wrap wrap-narrow desk-idea">' +
        '<a class="desk-back" href="#">← ' + (MODE === "expert" ? "Your desk" : "Dispatches") + "</a>" +
        (d.photo ? '<figure class="idea-fig">' + D.photoImg(d.photo, "(max-width: 820px) 100vw, 820px") + "<figcaption>" + D.photoCredit(d.photo) + "</figcaption></figure>" : "") +
        '<p class="idea-meta">' + esc(D.deptName(d.dept)) + " · " + esc(D.REGIONS[d.region] || "") + " · " + esc(D.day(d.date)) + "</p>" +
        "<h1>" + esc(d.title) + "</h1>" +
        (d.contested ? '<p class="desk-note">This dispatch touches a contested political dispute, so pieces on it are reviewed by the editor.</p>' : "") +
        '<div class="tk tk-big">' + takeButton(d) + "</div>" +
        "<h2>What is happening</h2><p>" + esc(d.summary) + "</p>" +
        (d.why ? "<h2>Why it matters</h2><p>" + esc(d.why) + "</p>" : "") +
        "<h2>Questions to research</h2>" + (d.questions.length ? '<ol class="dq">' + d.questions.map(function (q) { return "<li>" + esc(q) + "</li>"; }).join("") + "</ol>" :
          "<p>Questions for this dispatch are on the way. You can take it up with your own question.</p>") +
        (idea && idea.titles && idea.titles.length ? "<h2>Possible titles</h2><ul class=\"idea-titles\">" + idea.titles.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>" : "") +
        (d.sources.length ? "<h2>Sources</h2><ul class=\"idea-sources\">" + d.sources.map(function (s) {
          return '<li><a href="' + esc(s.url) + '" target="_blank" rel="noopener">' + esc(s.name) + "</a>" + (s.date ? ", " + esc(D.day(s.date)) : "") + "</li>";
        }).join("") + "</ul>" : "") +
        '<p class="desk-suggest">Before you write, read the <a href="#guidelines">guidelines</a>. Every piece names its sources and ends with what should be done.</p>' +
        '<div class="desk-actions">' +
          (t2 && t2.member === me.id ? (draft ? '<a class="btn" href="#piece/' + esc(draft.id) + '">OPEN YOUR DRAFT</a>' :
            '<button type="button" class="btn" data-start="' + esc(d.id) + '">START WRITING</button>') +
            '<button type="button" class="btn btn-quiet" data-give-back="' + esc(d.id) + '">GIVE IT BACK</button>' : "") +
          (t2 && t2.member !== me.id && (me.role === "editor" || (me.role === "expert" && me.dept === t2.dept)) ?
            '<button type="button" class="btn btn-return" data-free="' + esc(d.id) + '">FREE IT</button>' : "") +
          '<a class="btn btn-quiet" href="#">BACK</a>' +
        "</div>" +
      "</article>";
    top();
  }
  root.addEventListener("click", function (e) {
    var b = e.target.closest ? e.target.closest("[data-start]") : null;
    if (!b) return;
    var d = D.dispatch(b.getAttribute("data-start"));
    b.disabled = true; b.textContent = "OPENING…";
    startFromDispatch(d).catch(function (err) { b.disabled = false; b.textContent = "START WRITING"; window.alert("Could not open a draft: " + (err && err.message || "please try again.")); });
  });

  /* ---------- guidelines ---------- */
  function guidelinesHTML() {
    return (GUIDE.status ? '<p class="desk-notice">' + esc(GUIDE.status) + "</p>" : "") +
      (GUIDE.sections || []).map(function (s) {
        return "<h2>" + esc(s.h) + "</h2>" + (s.p || []).map(function (x) { return "<p>" + esc(x) + "</p>"; }).join("") +
          (s.ul ? "<ul>" + s.ul.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>" : "");
      }).join("");
  }
  function showGuidelines() {
    root.innerHTML = '<article class="wrap wrap-narrow desk-idea desk-guide"><a class="desk-back" href="#">← Back</a>' +
      '<p class="idea-meta">FOR EVERY PIECE</p><h1>Guidelines</h1>' + guidelinesHTML() +
      (GUIDE.updated ? '<p class="desk-meta">Updated ' + esc(D.day(GUIDE.updated)) + "</p>" : "") +
      '<p class="desk-suggest">Read the full standards on the <a href="ethics.html" target="_blank" rel="noopener">Independence and standards</a> page.</p></article>';
    top();
  }

  /* ---------- the writing page ---------- */
  function locked(p) { return p.status === "waiting" || p.status === "approved"; }

  function thread(list, opts) {
    if (!list.length) return opts && opts.empty ? '<p class="hint">' + esc(opts.empty) + "</p>" : "";
    return '<ol class="nt-list">' + list.map(function (n) {
      var who = person(n.author);
      return '<li class="nt nt-' + esc(n.kind) + '">' + D.face(who.team_id, 32) + '<div><p class="nt-by"><strong>' + esc(who.name || "A team member") + "</strong> · " +
        esc(n.kind === "reply" ? "writer" : "reviewer") + " · " + esc(D.when(n.created_at)) + "</p>" +
        '<p class="nt-body">' + esc(n.body).replace(/\n/g, "<br>") + "</p></div></li>";
    }).join("") + "</ol>";
  }

  function showEditor(p) {
    if (!p) { window.location.hash = ""; return; }
    if (p.id && p.author !== me.id) { window.location.hash = canReview(p) ? "review/" + p.id : ""; return; }
    cur = JSON.parse(JSON.stringify(p));
    var d = cur.dispatch_id ? D.dispatch(cur.dispatch_id) : null;
    var idea = cur.idea_id ? IDEAS.items.filter(function (i) { return i.id === cur.idea_id; })[0] : (d ? ideaFor(d.id) : null);
    root.innerHTML =
      '<div class="desk-editor">' +
        '<div class="wrap ed-top"><a class="desk-back" href="#">← ' + (MODE === "expert" ? "Your desk" : "Dispatches and your writing") + '</a><span class="ed-saved" data-saved aria-live="polite"></span></div>' +
        '<div class="wrap ed-grid">' +
          '<div class="ed-main">' +
            '<div data-banner></div>' +
            (d ? '<details class="ed-idea ed-dispatch" open><summary>Your dispatch and its questions</summary><p class="ed-idea-title"><a href="#dispatch/' + esc(d.id) + '">' + esc(d.title) + "</a></p>" +
              (d.questions.length ? '<p class="hint">Tap a question to add it to your text as a note to yourself.</p>' +
                d.questions.map(function (q, n) { return '<div class="ed-angle"><p>' + esc(q) + '</p><button type="button" class="desk-link" data-lockable data-add-q="' + n + '">+ Add to my text</button></div>'; }).join("") :
                '<p class="hint">Questions for this dispatch are on the way: work on your own question meanwhile.</p>') +
              "</details>" : "") +
            '<div class="field"><label for="ed-title">Title</label>' +
              '<input id="ed-title" class="ed-title" type="text" data-f="title" maxlength="200" placeholder="A clear, specific title" value="' + esc(cur.title) + '"></div>' +
            (idea && idea.titles && idea.titles.length ? '<div class="ed-chips" data-lockable><span class="hint">Possible titles: tap one to use it, then change it as you like.</span>' +
              idea.titles.map(function (t) { return '<button type="button" class="ed-chip" data-use-title="' + esc(t) + '">' + esc(t) + "</button>"; }).join("") + "</div>" : "") +
            '<div class="field"><label for="ed-summary">Summary</label><p class="hint" id="ed-summary-h">One or two sentences. They appear under the title on the Analysis page.</p>' +
              '<textarea id="ed-summary" rows="2" data-f="summary" aria-describedby="ed-summary-h" maxlength="600">' + esc(cur.summary) + "</textarea></div>" +
            '<div class="field"><label for="ed-body">Your text</label>' +
              '<p class="hint" id="ed-body-h">Type or paste. Leave a blank line between paragraphs. A line that starts with ## becomes a subheading. End with a section headed ## What should be done: the practical solution you propose.</p>' +
              '<textarea id="ed-body" class="ed-body" data-f="body" aria-describedby="ed-body-h">' + esc(cur.body) + "</textarea>" +
              '<p class="ed-count" data-count></p></div>' +
            '<div class="field ed-file-field"><span class="ed-file-label" id="ed-file-l">Or upload your document</span><div data-file></div></div>' +
            '<div class="field"><label for="ed-sources">Sources</label><p class="hint" id="ed-sources-h">One per line: author or organisation, date, title, link. Every piece we publish names its sources.</p>' +
              '<textarea id="ed-sources" rows="5" data-f="sources" aria-describedby="ed-sources-h">' + esc(cur.sources) + "</textarea></div>" +
          "</div>" +
          '<aside class="ed-side">' +
            '<fieldset class="field ed-dept"><legend>Department</legend><div class="ed-dept-opts">' + D.DEPTS.map(function (x) {
              return '<label class="ed-radio"><input type="radio" name="ed-dept" value="' + x[0] + '" data-f="dept"' + (cur.dept === x[0] ? " checked" : "") + (d ? " disabled" : "") + "><span>" + esc(x[1]) + "</span></label>";
            }).join("") + "</div>" + (d ? '<p class="hint">Set by the dispatch.</p>' : "") + "</fieldset>" +
            '<p class="ed-reviewer" data-reviewer></p>' +
            (d ? "" : '<label class="ed-check"><input type="checkbox" data-f="contested"' + (cur.contested ? " checked" : "") + "><span>It touches a contested political dispute (the editor reviews it)</span></label>") +
            '<div class="field"><label for="ed-focus">Focus area</label><select id="ed-focus" data-f="focus"><option value="">Choose…</option>' +
              D.FOCUS.map(function (f) { return '<option value="' + f[0] + '"' + (cur.focus === f[0] ? " selected" : "") + ">" + esc(f[1]) + "</option>"; }).join("") + "</select></div>" +
            '<div class="field ed-cover"><span class="ed-file-label" id="ed-cover-l">Cover picture</span><div data-cover></div></div>' +
            '<p class="ed-guide"><a class="desk-link" href="#guidelines">Read the guidelines</a></p>' +
          "</aside>" +
        "</div>" +
        '<div class="ed-bar"><div class="wrap ed-bar-in">' +
          '<div class="ed-bar-left" data-bar-left></div>' +
          '<div class="ed-bar-right"><p class="ed-bar-msg" data-bar-msg role="status"></p>' +
            '<button type="button" class="btn btn-quiet ed-save" data-save>SAVE</button>' +
            '<button type="button" class="st-btn" data-submit></button></div>' +
        "</div></div>" +
      "</div>";
    renderState(false);
    renderCover();
    renderReviewer();
    count();
    autosize($("#ed-body", root));
    setSaved(cur.id ? "Saved" : "");
    top();
    if (!cur.id) { var t = $("#ed-title", root); if (t) t.focus(); }
  }

  function renderReviewer() {
    var el = $("[data-reviewer]", root);
    if (!el || !cur) return;
    if (!cur.dept) { el.textContent = "Choose a department: it decides who reviews your piece."; return; }
    var r = reviewersFor(cur);
    el.innerHTML = "When you submit, it goes to " + esc(r.who) + (r.names.length ? ": " + esc(r.names.join(", ")) : "") + ".";
  }

  function renderState(animate) {
    var s = D.status(cur), lock = locked(cur);
    var btn = $("[data-submit]", root);
    btn.className = "st-btn st-" + (s.key === "draft" ? "red" : s.tone) + (animate ? " st-changed" : "");
    btn.textContent = s.button;
    btn.setAttribute("aria-disabled", lock ? "true" : "false");
    $("[data-save]", root).hidden = lock;
    var left = $("[data-bar-left]", root), msg = $("[data-bar-msg]", root);
    msg.className = "ed-bar-msg"; msg.textContent = s.sub || "";
    left.innerHTML =
      cur.status === "waiting" ? '<button type="button" class="desk-link" data-withdraw>Withdraw to make changes</button>' :
      cur.status === "approved" ? '<button type="button" class="desk-link" data-reopen>Make changes</button>' :
      cur.id ? '<button type="button" class="desk-link desk-link-danger" data-delete>Delete draft</button>' : "";

    var list = cur.id ? notesFor(cur.id) : [];
    var reviewer = cur.reviewed_by ? person(cur.reviewed_by).name : "";
    var banner = "";
    if (cur.status === "returned") banner = '<div class="ed-banner ed-banner-red"><p class="label">SENT BACK' + (reviewer ? " BY " + esc(reviewer.toUpperCase()) : "") + "</p>" +
      "<p>Read the corrections and questions, make your changes, then press Submit again.</p>" + thread(list) +
      '<div class="field"><label for="ed-reply">Your answer (optional)</label><p class="hint">Answer the questions or say what you changed. It is sent with your piece.</p>' +
        '<textarea id="ed-reply" rows="3" data-reply placeholder="What you changed, and any answers"></textarea></div></div>';
    else if (cur.status === "waiting") banner = '<div class="ed-banner ed-banner-orange"><p class="label">WAITING REVIEW</p><p>Sent ' + esc(D.when(cur.submitted_at)) +
      " to " + esc(reviewersFor(cur).who) + ". It turns green once approved. To change something first, withdraw it.</p>" + thread(list) + "</div>";
    else if (D.status(cur).key === "scheduled") banner = '<div class="ed-banner ed-banner-green"><p class="label">APPROVED</p><p>It will appear on the Analysis page on ' + esc(D.day(cur.publish_on, true)) + ".</p></div>";
    else if (cur.status === "approved") banner = '<div class="ed-banner ed-banner-green"><p class="label">APPROVED AND PUBLISHED</p><p>Published on ' + esc(D.day(cur.publish_on)) +
      (reviewer ? ", approved by " + esc(reviewer) : "") + '. <a href="briefings.html#b-' + esc(cur.slug) + '" target="_blank" rel="noopener">Read it on the site →</a></p></div>';
    $("[data-banner]", root).innerHTML = banner;

    $all("[data-f]", root).forEach(function (el) {
      if (el.tagName === "SELECT" || el.type === "radio" || el.type === "checkbox") el.disabled = lock || (el.type === "radio" && !!cur.dispatch_id);
      else el.readOnly = lock;
    });
    $all("[data-lockable]", root).forEach(function (el) { el.hidden = lock; });
    root.classList.toggle("is-locked", lock);
    renderFile();
    renderCover();
  }

  function renderFile() {
    var box = $("[data-file]", root);
    if (!box || !cur) return;
    var lock = locked(cur);
    box.innerHTML =
      (cur.file_path ? '<div class="ed-filechip"><span class="ed-file-icon" aria-hidden="true">' + esc((D.fileExt(cur.file_name) || "doc").toUpperCase()) + "</span>" +
        '<span class="ed-file-name">' + esc(cur.file_name) + "</span>" +
        '<button type="button" class="desk-link" data-open-file>Open</button>' +
        (lock ? "" : '<button type="button" class="desk-link desk-link-danger" data-remove-file>Remove</button>') + "</div>" : "") +
      (lock ? "" :
        '<label class="ed-drop" data-drop for="ed-file">' +
          '<input id="ed-file" type="file" accept="' + esc(D.ACCEPT) + '" aria-labelledby="ed-file-l" data-file-input>' +
          '<span class="ed-drop-main">' + (cur.file_path ? "Replace the document" : "Choose a file, or drop it here") + "</span>" +
          '<span class="hint">Word, PDF, OpenDocument, RTF or text, up to 20 MB. The words of a Word (.docx) or text file are placed in the box above so you can edit them; the file stays attached for your reviewer.</span>' +
        "</label>") +
      '<p class="status" data-file-status role="status"></p>';
  }

  function renderCover() {
    var box = $("[data-cover]", root);
    if (!box || !cur) return;
    var lock = locked(cur), url = D.coverUrl(cur.cover_path);
    box.innerHTML =
      (url ? '<figure class="ed-cover-fig"><img src="' + esc(url) + '" alt="Your cover picture"></figure>' :
        cur.photo ? '<figure class="ed-cover-fig">' + D.photoImg(cur.photo, "320px") + '<figcaption class="hint">Until you add your own, the dispatch photo is used: ' + D.photoCredit(cur.photo) + "</figcaption></figure>" : "") +
      (lock ? "" :
        '<label class="ed-drop ed-drop-sm" data-drop for="ed-cover">' +
          '<input id="ed-cover" type="file" accept="' + esc(D.ACCEPT_IMAGE) + '" aria-labelledby="ed-cover-l" data-cover-input>' +
          '<span class="ed-drop-main">' + (cur.cover_path ? "Replace the picture" : "Upload a cover picture") + "</span>" +
          '<span class="hint">JPG, PNG or WebP, up to 10 MB, at least 1600 pixels wide if you can.</span></label>') +
      (cur.cover_path ? '<div class="field"><label for="ed-credit">Credit</label><p class="hint" id="ed-credit-h">Who took it, and its licence. Your own photo, or a free-licence image; no press photos.</p>' +
        '<input id="ed-credit" type="text" data-f="cover_credit" maxlength="200" aria-describedby="ed-credit-h" placeholder="Photo: Name, CC BY-SA 4.0" value="' + esc(cur.cover_credit || "") + '"' + (lock ? " readonly" : "") + "></div>" +
        (lock ? "" : '<button type="button" class="desk-link desk-link-danger" data-remove-cover>Remove the picture</button>') : "") +
      '<p class="status" data-cover-status role="status"></p>';
  }

  function count() {
    var el = $("[data-count]", root);
    if (el) { var n = D.words(cur.body); el.textContent = n + (n === 1 ? " word" : " words"); }
  }
  function autosize(ta) {
    if (!ta) return;
    ta.style.height = "auto";
    ta.style.height = Math.max(320, ta.scrollHeight + 4) + "px";
  }

  /* typing */
  root.addEventListener("input", function (e) {
    var el = e.target;
    if (!cur || !el.hasAttribute || !el.hasAttribute("data-f") || locked(cur) || el.type === "radio" || el.type === "checkbox") return;
    cur[el.getAttribute("data-f")] = el.value;
    if (el.id === "ed-body") { count(); autosize(el); }
    queueSave();
  });
  root.addEventListener("change", function (e) {
    var el = e.target;
    if (!cur) return;
    if (el.hasAttribute && el.hasAttribute("data-f") && (el.tagName === "SELECT" || el.type === "radio" || el.type === "checkbox")) {
      var k = el.getAttribute("data-f");
      cur[k] = el.type === "checkbox" ? el.checked : (el.value || null);
      if (k === "dept" || k === "contested") renderReviewer();
      queueSave(true);
    }
    if (el.hasAttribute && el.hasAttribute("data-file-input") && el.files && el.files[0]) takeFile(el.files[0]);
    if (el.hasAttribute && el.hasAttribute("data-cover-input") && el.files && el.files[0]) takeCover(el.files[0]);
  });

  /* ---------- saving ---------- */
  function setSaved(text, err) {
    var el = $("[data-saved]", root);
    if (!el) return;
    el.textContent = text;
    el.classList.toggle("is-err", !!err);
  }
  function blank(p) { return !["title", "summary", "body", "sources"].some(function (f) { return String(p[f] || "").trim(); }); }
  function queueSave(now) {
    pending = true;
    setSaved("Unsaved changes");
    clearTimeout(saveTimer);
    saveTimer = setTimeout(save, now ? 50 : 1200);
  }
  function fields(p) {
    var o = {};
    FIELDS.forEach(function (f) {
      var v = p[f];
      o[f] = f === "contested" ? !!v : v == null ? (["focus", "photo", "dept", "cover_credit"].indexOf(f) > -1 ? null : "") : v;
    });
    return o;
  }

  function save() {
    clearTimeout(saveTimer);
    if (!cur || !pending) return saving || Promise.resolve();
    if (saving) { again = true; return saving; }
    if (!cur.id && blank(cur)) { pending = false; setSaved(""); return Promise.resolve(); }
    var target = cur;
    pending = false;
    setSaved("Saving…");
    var job = target.id ? api.update(target.id, fields(target)) :
      api.create(Object.assign(fields(target), { idea_id: target.idea_id || null, dispatch_id: target.dispatch_id || null }));
    saving = job.then(function (p) {
      var created = !target.id;
      target.id = p.id; target.status = p.status; target.updated_at = p.updated_at; target.author = p.author;
      upsert(Object.assign({}, p, fields(target)));
      if (created && cur === target) {
        try { window.history.replaceState(null, "", "#piece/" + p.id); } catch (e) { /* ignore */ }
        renderState(false);
      }
      if (cur === target) setSaved("Saved " + D.clock());
    }).catch(function (err) {
      pending = true;
      if (cur === target) setSaved("Not saved: " + (err && err.message || "check your connection") + ". Retrying…", true);
      saveTimer = setTimeout(save, 5000);
    }).then(function () {
      saving = null;
      if (again) { again = false; return save(); }
    });
    return saving;
  }
  function flush() {
    clearTimeout(saveTimer);
    if (pending) return save();
    return saving || Promise.resolve();
  }
  window.addEventListener("beforeunload", function (e) {
    if (pending || saving) { e.preventDefault(); e.returnValue = ""; }
  });

  /* ---------- buttons on the writing page ---------- */
  root.addEventListener("click", function (e) {
    var t = e.target.closest ? e.target : null;
    if (!t || !cur) return;
    var b;
    if ((b = t.closest("[data-use-title]")) && !locked(cur)) {
      var input = $("#ed-title", root);
      input.value = b.getAttribute("data-use-title");
      cur.title = input.value;
      input.focus();
      queueSave(true);
    } else if ((b = t.closest("[data-add-q]")) && !locked(cur)) {
      var d = D.dispatch(cur.dispatch_id), q = d && d.questions[+b.getAttribute("data-add-q")];
      if (!q) return;
      var ta = $("#ed-body", root);
      ta.value = ta.value.replace(/\s+$/, "") + (ta.value.trim() ? "\n\n" : "") + "Question: " + q + "\n";
      cur.body = ta.value;
      count(); autosize(ta); queueSave(true);
      b.textContent = "Added ✓";
    } else if (t.closest("[data-save]")) {
      pending = true;
      flush().then(function () { barMsg("Saved."); });
    } else if (t.closest("[data-submit]")) submit(t.closest("[data-submit]"));
    else if (t.closest("[data-withdraw]")) changeStatus("draft", "Withdrawn. You can edit it again; press Submit when it is ready.");
    else if (t.closest("[data-reopen]")) {
      var live = D.status(cur).key === "published";
      if (window.confirm(live ? "This takes the piece off the site until it is approved again. Make changes?" :
        "This takes the piece off the schedule until it is approved again. Make changes?")) changeStatus("draft", "Reopened. Make your changes, then press Submit again.");
    } else if (t.closest("[data-delete]")) {
      if (!window.confirm("Delete this draft? This cannot be undone. A dispatch you took up for it stays yours until you give it back.")) return;
      var id = cur.id, path = cur.file_path, cover = cur.cover_path;
      clearTimeout(saveTimer); pending = false;
      api.remove(id).then(function () {
        api.removeFile(path).catch(function () { /* the file can stay */ });
        api.removeCover(cover).catch(function () { /* the file can stay */ });
        pieces = pieces.filter(function (p) { return p.id !== id; });
        cur = null;
        window.location.hash = "";
      }).catch(function (err) { barMsg("Could not delete: " + (err && err.message || "please try again."), true); });
    } else if (t.closest("[data-open-file]")) {
      api.fileUrl(cur.file_path).then(function (url) { window.open(url, "_blank", "noopener"); })
        .catch(function (err) { msgIn("[data-file-status]", err && err.message || "Could not open the file.", true); });
    } else if (t.closest("[data-remove-file]")) {
      var old = cur.file_path;
      api.update(cur.id, { file_path: null, file_name: null }).then(function (p) {
        cur.file_path = null; cur.file_name = null; upsert(Object.assign({}, p, fields(cur)));
        renderFile();
        return api.removeFile(old).catch(function () { /* already gone */ });
      }).catch(function (err) { msgIn("[data-file-status]", "Could not remove it: " + (err && err.message || "please try again."), true); });
    } else if (t.closest("[data-remove-cover]")) {
      var oldc = cur.cover_path;
      api.update(cur.id, { cover_path: null, cover_credit: null }).then(function (p) {
        cur.cover_path = null; cur.cover_credit = null; upsert(Object.assign({}, p, fields(cur)));
        renderCover();
        return api.removeCover(oldc).catch(function () { /* already gone */ });
      }).catch(function (err) { msgIn("[data-cover-status]", "Could not remove it: " + (err && err.message || "please try again."), true); });
    }
  });

  function barMsg(text, err) {
    var m = $("[data-bar-msg]", root);
    if (!m) return;
    m.textContent = text;
    m.className = "ed-bar-msg" + (err ? " is-err" : "");
  }
  function msgIn(sel, text, err) {
    var m = $(sel, root);
    if (!m) return;
    m.textContent = text;
    m.className = "status " + (err ? "err" : "ok");
  }

  function submit(btn) {
    if (locked(cur)) return;
    var missing = [];
    if (!String(cur.title || "").trim()) missing.push("a title");
    var bodyWords = D.words(String(cur.body || "").replace(/^##.*$/gm, ""));
    if (bodyWords < 30 && !cur.file_path) missing.push("your text (or an uploaded document)");
    if (!cur.dept) missing.push("a department");
    if (!String(cur.sources || "").trim()) missing.push("your sources");
    if (cur.cover_path && !String(cur.cover_credit || "").trim()) missing.push("the credit for your cover picture");
    if (missing.length) {
      barMsg("Add " + missing.join(", ").replace(/, ([^,]*)$/, " and $1") + " before submitting.", true);
      var first = !String(cur.title || "").trim() ? $("#ed-title", root) : bodyWords < 30 && !cur.file_path ? $("#ed-body", root) :
        !String(cur.sources || "").trim() ? $("#ed-sources", root) : $("#ed-credit", root);
      if (first) first.focus();
      return;
    }
    if (bodyWords >= 30 && !D.hasSolution(cur.body) &&
      !window.confirm('Your text has no section headed "What should be done". Every piece ends with one: a line ## What should be done, then the practical solution you propose.\n\nSubmit anyway?')) return;
    var r = reviewersFor(cur);
    var reply = $("[data-reply]", root);
    var answer = reply ? reply.value.trim() : "";
    btn.disabled = true;
    btn.textContent = "SENDING…";
    pending = true;
    flush().then(function () {
      if (!cur.id) throw new Error("The draft could not be saved");
      return answer ? api.addNote(cur.id, answer).then(function (n) { notes.push(n); }) : null;
    }).then(function () {
      return api.update(cur.id, Object.assign(fields(cur), { status: "waiting" }));
    }).then(function (p) {
      Object.assign(cur, p);
      upsert(JSON.parse(JSON.stringify(cur)));
      btn.disabled = false;
      renderState(true);
      barMsg("Sent to " + r.who + ".");
      setSaved("Saved " + D.clock());
    }).catch(function (err) {
      btn.disabled = false;
      renderState(false);
      barMsg("Not sent: " + (err && err.message || "please try again."), true);
    });
  }

  function changeStatus(status, note) {
    api.update(cur.id, { status: status }).then(function (p) {
      Object.assign(cur, p);
      upsert(JSON.parse(JSON.stringify(cur)));
      renderState(true);
      barMsg(note);
    }).catch(function (err) { barMsg("Could not change it: " + (err && err.message || "please try again."), true); });
  }

  /* ---------- uploads ---------- */
  function ensureSaved(fallbackTitle) {
    if (cur.id) return Promise.resolve();
    cur.title = cur.title || fallbackTitle;
    pending = true;
    return save().then(function () { if (!cur.id) throw new Error("The draft could not be saved"); });
  }
  function takeFile(file) {
    if (!D.fileType(file.name)) return msgIn("[data-file-status]", "Please choose a Word, PDF, OpenDocument, RTF or text file.", true);
    if (file.size > D.MAX_FILE) return msgIn("[data-file-status]", "That file is larger than 20 MB. Please send a smaller one, or paste the text.", true);
    msgIn("[data-file-status]", "Uploading " + file.name + "…");
    var old = cur.file_path;
    ensureSaved(file.name.replace(/\.[^.]+$/, "")).then(function () {
      return api.upload(cur, file);
    }).then(function (f) {
      return api.update(cur.id, f).then(function (p) {
        cur.file_path = f.file_path; cur.file_name = f.file_name;
        upsert(Object.assign({}, p, fields(cur)));
        if (old && old !== f.file_path) api.removeFile(old).catch(function () { /* keep going */ });
      });
    }).then(function () {
      renderFile();
      $("#ed-title", root).value = cur.title || "";
      return D.extractText(file).catch(function () { return null; });
    }).then(function (text) {
      if (text == null) return msgIn("[data-file-status]", "Attached. Its text cannot be shown here, so your reviewer will read the file. You can also paste the text into the box.");
      if (!text.trim()) return msgIn("[data-file-status]", "Attached. The document seems to have no text to show here.");
      var ta = $("#ed-body", root);
      var current = String(cur.body || "").replace(/^##.*$/gm, "").trim();
      if (current && !window.confirm("Replace the text in the box with the text from " + file.name + "?\n\nChoose Cancel to keep your current text. The document stays attached either way.")) {
        return msgIn("[data-file-status]", "Attached. Your text in the box is unchanged.");
      }
      ta.value = text;
      cur.body = text;
      count(); autosize(ta); queueSave(true);
      msgIn("[data-file-status]", "Attached, and its text is in the box above so you can edit it.");
    }).catch(function (err) {
      renderFile();
      msgIn("[data-file-status]", "Upload failed: " + (err && err.message || "please try again."), true);
    });
  }
  function takeCover(file) {
    if (!D.imageType(file.name)) return msgIn("[data-cover-status]", "Please choose a JPG, PNG or WebP picture.", true);
    if (file.size > D.MAX_COVER) return msgIn("[data-cover-status]", "That picture is larger than 10 MB. Please choose a smaller one.", true);
    msgIn("[data-cover-status]", "Uploading the picture…");
    var old = cur.cover_path;
    ensureSaved("Untitled draft").then(function () {
      return api.uploadCover(cur, file);
    }).then(function (path) {
      return api.update(cur.id, { cover_path: path }).then(function (p) {
        cur.cover_path = path;
        upsert(Object.assign({}, p, fields(cur)));
        if (old && old !== path) api.removeCover(old).catch(function () { /* keep going */ });
      });
    }).then(function () {
      renderCover();
      msgIn("[data-cover-status]", "Added. Now give its credit: who took it, and the licence.");
      var c = $("#ed-credit", root); if (c) c.focus();
    }).catch(function (err) {
      renderCover();
      msgIn("[data-cover-status]", "Upload failed: " + (err && err.message || "please try again."), true);
    });
  }

  /* drag and drop onto an upload area */
  root.addEventListener("dragover", function (e) {
    var z = e.target.closest ? e.target.closest("[data-drop]") : null;
    if (z) { e.preventDefault(); z.classList.add("is-over"); }
  });
  root.addEventListener("dragleave", function (e) {
    var z = e.target.closest ? e.target.closest("[data-drop]") : null;
    if (z) z.classList.remove("is-over");
  });
  root.addEventListener("drop", function (e) {
    var z = e.target.closest ? e.target.closest("[data-drop]") : null;
    if (!z || !cur || locked(cur)) return;
    e.preventDefault();
    z.classList.remove("is-over");
    var f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
    if (!f) return;
    if (z.querySelector("[data-cover-input]")) takeCover(f); else takeFile(f);
  });

  /* ---------- reviewing a piece (experts page) ---------- */
  function checks(p) {
    var words = D.words(String(p.body || "").replace(/^##.*$/gm, ""));
    var items = [
      [words >= 30 || !!p.file_path, words + " words" + (p.file_path ? ", plus an uploaded document" : "")],
      [D.sourceCount(p.sources) > 0, D.sourceCount(p.sources) + (D.sourceCount(p.sources) === 1 ? " source" : " sources") + " listed"],
      [D.hasSolution(p.body), D.hasSolution(p.body) ? "Ends with What should be done" : "No section headed What should be done"],
      [!p.cover_path || !!String(p.cover_credit || "").trim(), p.cover_path ? (p.cover_credit ? "Cover credit: " + p.cover_credit : "Cover picture has no credit") : "No cover of their own (the dispatch photo is used)"]
    ];
    return '<ul class="rv-checks">' + items.map(function (c) {
      return '<li class="' + (c[0] ? "is-ok" : "is-warn") + '"><span aria-hidden="true">' + (c[0] ? "✓" : "!") + "</span>" + esc(c[1]) + "</li>";
    }).join("") + "</ul>";
  }

  function radio(name, value, label, checked) {
    return '<label class="rv-radio"><input type="radio" name="' + name + '" value="' + esc(value) + '"' + (checked ? " checked" : "") + "><span>" + label + "</span></label>";
  }

  function showReview(p) {
    if (!p) { window.location.hash = ""; return; }
    if (p.author === me.id) { window.location.hash = "piece/" + p.id; return; }
    if (!canReview(p)) { window.location.hash = ""; return; }
    var k = D.status(p).key, today = D.today(), tomorrow = D.addDays(today, 1);
    var first = D.first(p.author_name) || "the writer";
    var d = p.dispatch_id ? D.dispatch(p.dispatch_id) : null;
    var changed = p.returned_body != null && p.returned_body !== p.body;
    var cover = D.coverUrl(p.cover_path);
    var actions;
    if (k === "waiting" || k === "returned") {
      actions =
        '<div class="rv-box"><h2>Comments and questions</h2>' + thread(notesFor(p.id), { empty: "No comments yet." }) +
          '<div class="field"><label for="rv-note">Corrections and questions for ' + esc(first) + '</label>' +
          '<textarea id="rv-note" rows="5" data-note placeholder="What to correct, and anything you want to ask"></textarea></div>' +
          '<button type="button" class="btn btn-return" data-return>SEND BACK TO ' + esc(first.toUpperCase()) + "</button>" +
          '<p class="hint">' + esc(first) + " sees your comments, makes the changes and submits it again. You will see what changed.</p></div>" +
        '<div class="rv-box"><h2>Approve</h2><p>Approving publishes it on the Analysis page, under ' + esc(first) + "'s name.</p>" +
          '<fieldset class="rv-when"><legend class="hint">Publish on</legend>' +
            radio("when", today, "Today, " + esc(D.day(today, true)), true) +
            radio("when", tomorrow, "Tomorrow, " + esc(D.day(tomorrow, true)), false) +
          "</fieldset>" +
          '<button type="button" class="st-btn st-green" data-approve>APPROVE AND PUBLISH</button></div>';
    } else {
      actions =
        '<div class="rv-box"><h2>' + (k === "published" ? "Published" : "Approved") + "</h2>" +
          "<p>" + (k === "published" ? "On the site since " + esc(D.day(p.publish_on, true)) + '. <a href="briefings.html#b-' + esc(p.slug) + '" target="_blank" rel="noopener">View it →</a>' :
            "Appears on the Analysis page on " + esc(D.day(p.publish_on, true)) + ".") + "</p></div>" +
        '<div class="rv-box"><h2>Take it down</h2><p class="hint">Removes it from the site and moves it back to waiting review. Use it if something is wrong.</p>' +
          '<button type="button" class="btn btn-return" data-unapprove>TAKE IT DOWN</button></div>' +
        '<div class="rv-box"><h2>Comments</h2>' + thread(notesFor(p.id), { empty: "No comments." }) + "</div>";
    }

    root.innerHTML =
      '<div class="wrap ed-top"><a class="desk-back" href="#">← Your desk</a><span class="ed-saved" data-saved aria-live="polite"></span></div>' +
      '<div class="wrap rv-grid">' +
        '<div class="rv-main">' +
          '<div class="rv-head">' + D.chip(p) +
            '<div class="rv-byline">' + D.face(p.author_team, 48) + '<p><span class="rv-by-n">By <strong>' + esc(p.author_name || "a team member") + "</strong></span>" +
              "<span>" + esc(D.deptName(p.dept)) + (p.status === "waiting" ? " · sent " + esc(D.when(p.submitted_at)) : "") + "</span>" +
              (d ? '<span>From the dispatch: <a href="#dispatch/' + esc(d.id) + '">' + esc(d.title) + "</a></span>" : "") + "</p></div></div>" +
          checks(p) +
          (changed ? '<div class="rv-switch" role="tablist" aria-label="View"><button type="button" role="tab" aria-selected="false" data-view="read">The piece</button>' +
            '<button type="button" role="tab" aria-selected="true" data-view="diff">What changed since you sent it back</button></div>' : "") +
          '<div data-pane="read"' + (changed ? " hidden" : "") + ' class="rv-preview">' +
            (cover ? '<figure class="brief-fig"><img src="' + esc(cover) + '" alt=""><figcaption class="hint">' + esc(p.cover_credit || "No credit given") + "</figcaption></figure>" :
              p.photo ? '<figure class="brief-fig">' + D.photoImg(p.photo, "(max-width: 860px) 100vw, 760px") + "<figcaption>" + D.photoCredit(p.photo) + "</figcaption></figure>" : "") +
            '<h1 class="brief-title">' + esc(p.title || "Untitled") + "</h1>" +
            (p.summary ? '<p class="brief-summary">' + esc(p.summary) + "</p>" : "") +
            '<div class="brief-body">' + D.renderBody(p.body) + "</div>" +
            (String(p.sources || "").trim() ? '<section class="brief-sources"><h2>Sources</h2>' + D.renderSources(p.sources) + "</section>" : "") +
            (p.file_path ? '<div class="ed-filechip"><span class="ed-file-icon" aria-hidden="true">' + esc((D.fileExt(p.file_name) || "doc").toUpperCase()) + "</span>" +
              '<span class="ed-file-name">' + esc(p.file_name) + '</span><button type="button" class="desk-link" data-open-review-file>Open the document</button></div>' : "") +
          "</div>" +
          (changed ? '<div data-pane="diff" class="rv-preview rv-diff"><p class="hint">Struck through: removed. Highlighted: added.</p><div class="rv-diff-body">' + D.diff(p.returned_body, p.body).html + "</div></div>" : "") +
        "</div>" +
        '<aside class="rv-side">' + actions + '<p class="status" data-rv-status role="status"></p></aside>' +
      "</div>";
    top();

    var view = $(".rv-switch", root);
    if (view) view.addEventListener("click", function (e) {
      var b = e.target.closest("[data-view]");
      if (!b) return;
      $all("[data-view]", view).forEach(function (x) { x.setAttribute("aria-selected", x === b ? "true" : "false"); });
      $all("[data-pane]", root).forEach(function (x) { x.hidden = x.getAttribute("data-pane") !== b.getAttribute("data-view"); });
    });
    var st = $("[data-rv-status]", root);
    function fail(err) { st.className = "status err"; st.textContent = "Could not do that: " + (err && err.message || "please try again."); }
    function after(np, text) { upsert(np); st.className = "status ok"; st.textContent = text; setTimeout(function () { window.location.hash = ""; }, 900); }
    var ret = $("[data-return]", root), ap = $("[data-approve]", root), un = $("[data-unapprove]", root), of = $("[data-open-review-file]", root);
    if (ret) ret.addEventListener("click", function () {
      var note = $("[data-note]", root).value.trim();
      if (!note) { st.className = "status err"; st.textContent = "Write your corrections and questions first, so " + first + " knows what to change."; $("[data-note]", root).focus(); return; }
      ret.disabled = true;
      api.addNote(p.id, note).then(function (n) {
        notes.push(n);
        return api.update(p.id, { status: "returned", editor_note: note.slice(0, 2000) });
      }).then(function (np) { after(np, "Sent back to " + first + "."); }).catch(function (err) { ret.disabled = false; fail(err); });
    });
    if (ap) ap.addEventListener("click", function () {
      var when = ($("input[name=when]:checked", root) || {}).value || today;
      var note = $("[data-note]", root).value.trim();
      ap.disabled = true; ap.textContent = "APPROVING…";
      (note ? api.addNote(p.id, note).then(function (n) { notes.push(n); }) : Promise.resolve()).then(function () {
        return api.update(p.id, { status: "approved", publish_on: when });
      }).then(function (np) { after(np, when === today ? "Approved and published." : "Approved. It publishes " + D.day(when, true) + "."); })
        .catch(function (err) { ap.disabled = false; ap.textContent = "APPROVE AND PUBLISH"; fail(err); });
    });
    if (un) un.addEventListener("click", function () {
      if (!window.confirm("Take this piece off the site? It moves back to waiting review.")) return;
      un.disabled = true;
      api.update(p.id, { status: "waiting" }).then(function (np) { after(np, "Taken down. It is waiting review again."); }).catch(function (err) { un.disabled = false; fail(err); });
    });
    if (of) of.addEventListener("click", function () {
      api.fileUrl(p.file_path).then(function (url) { window.open(url, "_blank", "noopener"); }).catch(fail);
    });
  }

  boot();
})();
