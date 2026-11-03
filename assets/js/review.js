/* The Credence Letters — the editor's review queue (review.html).
   Pieces sent by experts wait here. The editor reads them, can make light
   edits, and approves each for a publish date or sends it back with a note.
   Only accounts with the editor role can act; the database enforces this too. */
(function () {
  "use strict";

  var D = window.Desk;
  if (!D) return;                     // inside another site's frame: the queue stays closed
  var esc = D.esc, $ = D.$, $all = D.$all, api = D.api;
  var root = $("[data-desk]"), bar = $("[data-desk-bar]");
  var me = null, pieces = [], tab = "waiting", cur = null, edits = {};
  var TABS = [["waiting", "Waiting approval"], ["scheduled", "Scheduled"], ["published", "Published"], ["returned", "Sent back"], ["draft", "Being written"]];
  var EDITABLE = ["title", "summary", "body", "sources", "focus", "photo"];

  function boot() {
    api.init().then(function (s) {
      if (s.signedIn) return enter();
      showSignIn("");
    }).catch(function (e) { showSignIn(e.message); });
  }

  function showSignIn(message) {
    me = null;
    renderBar();
    root.innerHTML = D.authView({ eyebrow: "EDITOR'S DESK", title: "Sign in", message: message });
    D.bindAuth(root, enter);
  }

  /* The editor's account always needs the two-step code: approving and
     publishing work only after it, here and in the database. */
  function enter() {
    var loading = '<p class="desk-loading">Opening the queue…</p>';
    root.innerHTML = loading;
    D.twoStep(root).then(function () {
      return api.me();
    }).then(function (p) {
      if (!p || p.role !== "editor") {
        me = p;
        renderBar();
        root.innerHTML = '<section class="desk-auth"><h1>This page is for the editor</h1><p class="desk-auth-lede">Your own pieces and their status are on your desk.</p>' +
          '<a class="btn" href="expert.html' + (D.preview ? "?preview" : "") + '">GO TO YOUR DESK</a></section>';
        return null;
      }
      return D.twoStep(root, { require: true }).then(function () {
        me = p;
        renderBar();
        root.innerHTML = loading;
        return load().then(route);
      });
    }).catch(function (err) {
      root.innerHTML = '<section class="desk-auth"><h1>Could not open the queue</h1><p class="desk-auth-lede">' + esc(err && err.message || "Please try again.") + "</p></section>";
    });
  }

  function load() { return api.allPieces().then(function (list) { pieces = list || []; }); }

  function renderBar() {
    var waiting = pieces.filter(function (p) { return p.status === "waiting"; }).length;
    bar.innerHTML =
      '<div class="wrap desk-bar-in">' +
        '<a class="brand" href="index.html" aria-label="The Credence Letters, home"><svg viewBox="0 0 100 100" aria-hidden="true"><use href="#seal-mini"></use></svg>' +
          '<span class="brand-word"><span class="bw-1">THE CREDENCE</span><span class="bw-2">Letters</span></span></a>' +
        '<a class="desk-bar-title" href="#">Review queue' + (me && waiting ? ' <span class="desk-count">' + waiting + "</span>" : "") + "</a>" +
        (D.preview ? '<span class="desk-preview-tag">PREVIEW</span>' : "") +
        (me ? '<div class="desk-bar-user"><span class="desk-bar-name">' + esc(me.name || me.email || "") + "</span>" +
          '<a href="expert.html' + (D.preview ? "?preview" : "") + '">My desk</a><button type="button" data-signout>Sign out</button></div>' : "") +
      "</div>";
  }

  document.addEventListener("click", function (e) {
    if (!(e.target.closest && e.target.closest("[data-signout]"))) return;
    api.signOut().then(function () { pieces = []; showSignIn(""); });
  });

  function route() {
    if (!me || me.role !== "editor") return;
    var m = /^#piece\/([\w-]+)$/.exec(window.location.hash);
    if (m) return showPiece(find(m[1]));
    showQueue();
  }
  window.addEventListener("hashchange", function () {
    if (cur && Object.keys(edits).length && !window.confirm("You have edits that are not saved. Leave without saving them?")) {
      try { window.history.replaceState(null, "", "#piece/" + cur.id); } catch (e) { /* ignore */ }
      return;
    }
    edits = {};
    load().then(function () { renderBar(); route(); });
  });
  window.addEventListener("beforeunload", function (e) { if (Object.keys(edits).length) { e.preventDefault(); e.returnValue = ""; } });

  function find(id) { for (var i = 0; i < pieces.length; i++) if (pieces[i].id === id) return pieces[i]; return null; }
  function replace(p) { for (var i = 0; i < pieces.length; i++) if (pieces[i].id === p.id) { pieces[i] = Object.assign({}, pieces[i], p); return pieces[i]; } return p; }
  function key(p) { return D.status(p).key; }
  function top() { try { window.scrollTo({ top: 0, behavior: "instant" }); } catch (e) { window.scrollTo(0, 0); } }

  /* ---------- the queue ---------- */
  function rowWhen(p) {
    var k = key(p);
    if (k === "waiting") return "Sent " + D.when(p.submitted_at);
    if (k === "scheduled") return "Publishes " + D.day(p.publish_on, true);
    if (k === "published") return "Published " + D.day(p.publish_on);
    if (k === "returned") return "Sent back " + D.when(p.updated_at);
    return "Edited " + D.when(p.updated_at);
  }
  function sorted(k) {
    var list = pieces.filter(function (p) { return key(p) === k; });
    var by = k === "waiting" ? function (a, b) { return a.submitted_at < b.submitted_at ? -1 : 1; } :
      k === "scheduled" ? function (a, b) { return a.publish_on < b.publish_on ? -1 : 1; } :
      k === "published" ? function (a, b) { return a.publish_on < b.publish_on ? 1 : -1; } :
      function (a, b) { return a.updated_at < b.updated_at ? 1 : -1; };
    return list.sort(by);
  }

  function showQueue() {
    cur = null;
    var list = sorted(tab);
    root.innerHTML =
      '<section class="desk-hero"><div class="wrap">' +
        '<p class="label">EDITOR\'S DESK</p><h1>Review queue</h1>' +
        '<p class="desk-lede">Pieces the experts have sent wait here. Read each one, make light edits if needed, then approve it for a publish date or send it back with a note. The author sees the result on their desk.</p>' +
      "</div></section>" +
      '<section class="desk-sec"><div class="wrap">' +
        '<div class="rv-tabs" role="tablist" aria-label="Pieces by status">' + TABS.map(function (t) {
          var n = sorted(t[0]).length;
          return '<button type="button" role="tab" aria-selected="' + (tab === t[0]) + '" data-tab="' + t[0] + '">' + esc(t[1]) +
            ' <span class="rv-n' + (t[0] === "waiting" && n ? " is-hot" : "") + '">' + n + "</span></button>";
        }).join("") + "</div>" +
        (list.length ? '<ul class="piece-list">' + list.map(function (p) {
          return '<li><a class="piece-row" href="#piece/' + esc(p.id) + '">' +
            '<span class="piece-title' + (p.title ? "" : " untitled") + '">' + esc(p.title || "Untitled draft") + "</span>" +
            '<span class="piece-meta">' + D.chip(p) + '<span class="piece-when">' + esc(p.author_name || "") + " · " + esc(rowWhen(p)) + "</span></span>" +
            (p.summary ? '<span class="piece-sum">' + esc(p.summary) + "</span>" : "") +
          "</a></li>";
        }).join("") + "</ul>" : '<p class="desk-empty">' + esc(
          tab === "waiting" ? "Nothing is waiting. When an expert presses Publish, the piece appears here." :
          tab === "scheduled" ? "Nothing is scheduled." : tab === "published" ? "Nothing has been published yet." :
          tab === "returned" ? "Nothing has been sent back." : "No drafts in progress.") + "</p>") +
      "</div></section>";
    top();
  }

  root.addEventListener("click", function (e) {
    var b = e.target.closest ? e.target.closest("[data-tab]") : null;
    if (b) { tab = b.getAttribute("data-tab"); showQueue(); }
  });

  /* ---------- one piece ---------- */
  function radio(name, value, label, checked) {
    return '<label class="rv-radio"><input type="radio" name="' + name + '" value="' + esc(value) + '"' + (checked ? " checked" : "") + "><span>" + label + "</span></label>";
  }

  function showPiece(p) {
    if (!p) { window.location.hash = ""; return; }
    cur = p; edits = {};
    var k = key(p), today = D.today(), tomorrow = D.addDays(today, 1);
    var field = D.field(p.author_team);
    var actions;
    if (k === "waiting" || k === "returned") {
      actions =
        '<div class="rv-box"><h2>Approve</h2><fieldset class="rv-when"><legend class="hint">Publish on</legend>' +
          radio("when", today, "Today, " + esc(D.day(today, true)), true) +
          radio("when", tomorrow, "Tomorrow, " + esc(D.day(tomorrow, true)), false) +
          '<label class="rv-radio"><input type="radio" name="when" value="other"><span>Another day</span></label>' +
          '<input type="date" class="rv-date" data-other-date min="' + today + '" value="' + D.addDays(today, 2) + '" aria-label="Another day">' +
        "</fieldset>" +
        '<button type="button" class="st-btn st-green" data-approve>APPROVE</button></div>' +
        '<div class="rv-box"><h2>Or send it back</h2><div class="field"><label for="rv-note">A note for ' + esc(String(p.author_name || "the author").split(" ")[0]) + "</label>" +
          '<textarea id="rv-note" rows="4" data-note placeholder="What to change, and why">' + esc(k === "returned" ? p.editor_note || "" : "") + "</textarea></div>" +
          '<button type="button" class="btn btn-return" data-return>SEND BACK WITH NOTE</button></div>';
    } else if (k === "scheduled" || k === "published") {
      actions =
        '<div class="rv-box"><h2>' + (k === "published" ? "Published" : "Scheduled") + "</h2>" +
          "<p>" + (k === "published" ? "On the site since " + esc(D.day(p.publish_on, true)) + '. <a href="briefings.html#b-' + esc(p.slug) + '" target="_blank" rel="noopener">View it →</a>' :
            "Appears in Briefings on " + esc(D.day(p.publish_on, true)) + ".") + "</p>" +
          (k === "scheduled" ? '<div class="field"><label for="rv-date">Change the date</label><input id="rv-date" type="date" class="rv-date" min="' + today + '" value="' + esc(p.publish_on) + '"></div>' +
            '<button type="button" class="btn btn-quiet" data-redate>SAVE NEW DATE</button>' : "") +
        "</div>" +
        '<div class="rv-box"><h2>Take it back</h2><p class="hint">' + (k === "published" ? "Removes it from the site" : "Takes it off the schedule") + " and returns it to Waiting approval.</p>" +
          '<button type="button" class="btn btn-return" data-unapprove>MOVE BACK TO WAITING</button></div>';
    } else {
      actions = '<div class="rv-box"><h2>Still being written</h2><p>The author has not pressed Publish yet. It will move to Waiting approval when they do.</p></div>';
    }

    var photos = D.photoKeys();
    root.innerHTML =
      '<div class="wrap ed-top"><a class="desk-back" href="#">← Review queue</a><span class="ed-saved" data-saved aria-live="polite"></span></div>' +
      '<div class="wrap rv-grid">' +
        '<div class="rv-main">' +
          '<div class="rv-head">' + D.chip(p) +
            '<p class="rv-by">By <strong>' + esc(p.author_name || "an expert") + "</strong>" + (field ? " · " + esc(field) : "") + "</p>" +
            '<p class="rv-by">' + esc(rowWhen(p)) + (p.idea_id ? " · started from an idea" : "") + "</p></div>" +
          '<div class="rv-switch" role="tablist" aria-label="View"><button type="button" role="tab" aria-selected="true" data-view="read">How it will look</button>' +
            '<button type="button" role="tab" aria-selected="false" data-view="edit">Edit the text</button></div>' +
          '<div data-pane="read"></div>' +
          '<div data-pane="edit" hidden>' +
            '<p class="hint">Light edits only; the author sees the edited version. Bigger changes are better sent back with a note.</p>' +
            '<div class="field"><label for="rv-title">Title</label><input id="rv-title" type="text" data-e="title" value="' + esc(p.title) + '"></div>' +
            '<div class="field"><label for="rv-summary">Summary</label><textarea id="rv-summary" rows="2" data-e="summary">' + esc(p.summary) + "</textarea></div>" +
            '<div class="field"><label for="rv-body">Text</label><textarea id="rv-body" class="ed-body" data-e="body">' + esc(p.body) + "</textarea></div>" +
            '<div class="field"><label for="rv-sources">Sources</label><textarea id="rv-sources" rows="4" data-e="sources">' + esc(p.sources) + "</textarea></div>" +
            '<div class="rv-two"><div class="field"><label for="rv-focus">Focus area</label><select id="rv-focus" data-e="focus"><option value="">None</option>' +
              D.FOCUS.map(function (f) { return '<option value="' + f[0] + '"' + (p.focus === f[0] ? " selected" : "") + ">" + esc(f[1]) + "</option>"; }).join("") + "</select></div>" +
            '<div class="field"><label for="rv-photo">Photo</label><select id="rv-photo" data-e="photo"><option value="">No photo</option>' +
              photos.map(function (k2) { return '<option value="' + esc(k2) + '"' + (p.photo === k2 ? " selected" : "") + ">" + esc(D.photoCap(k2)) + "</option>"; }).join("") + "</select></div></div>" +
            '<button type="button" class="btn" data-save-edits disabled>SAVE EDITS</button>' +
          "</div>" +
        "</div>" +
        '<aside class="rv-side">' +
          (p.file_path ? '<div class="rv-box"><h2>Attached document</h2><div class="ed-filechip"><span class="ed-file-icon" aria-hidden="true">' + esc((D.fileExt(p.file_name) || "doc").toUpperCase()) + "</span>" +
            '<span class="ed-file-name">' + esc(p.file_name) + '</span><button type="button" class="desk-link" data-open-file>Open</button></div></div>' : "") +
          actions +
          '<p class="status" data-rv-status role="status"></p>' +
        "</aside>" +
      "</div>";
    renderRead();
    top();
  }

  function merged() { return Object.assign({}, cur, edits); }
  function renderRead() {
    var p = merged();
    var pane = $('[data-pane="read"]', root);
    if (!pane) return;
    pane.innerHTML =
      '<article class="brief-article rv-preview">' +
        (p.photo ? '<figure class="brief-fig">' + D.photoImg(p.photo, "(max-width: 900px) 100vw, 700px") + "<figcaption>" + D.photoCredit(p.photo) + "</figcaption></figure>" : "") +
        (p.focus ? '<p class="brief-focus">' + esc(D.focusName(p.focus)) + "</p>" : "") +
        '<h1 class="brief-title">' + esc(p.title || "Untitled") + "</h1>" +
        (p.summary ? '<p class="brief-summary">' + esc(p.summary) + "</p>" : "") +
        '<div class="brief-body">' + (D.renderBody(p.body) || '<p class="hint">No text in the box' + (p.file_path ? "; read the attached document." : ".") + "</p>") + "</div>" +
        (String(p.sources || "").trim() ? '<section class="brief-sources"><h2>Sources</h2>' + D.renderSources(p.sources) + "</section>" :
          '<p class="rv-warn">No sources listed. Every piece we publish names its sources.</p>') +
      "</article>";
  }

  function status(text, err) {
    var s = $("[data-rv-status]", root);
    if (!s) return;
    s.className = "status " + (err ? "err" : "ok");
    s.textContent = text;
  }

  root.addEventListener("input", function (e) {
    var el = e.target;
    if (!cur || !el.hasAttribute || !el.hasAttribute("data-e")) return;
    var k = el.getAttribute("data-e");
    var v = el.tagName === "SELECT" ? (el.value || null) : el.value;
    if (v === (cur[k] == null ? (el.tagName === "SELECT" ? null : "") : cur[k])) delete edits[k]; else edits[k] = v;
    var b = $("[data-save-edits]", root);
    if (b) b.disabled = !Object.keys(edits).length;
    var saved = $("[data-saved]", root);
    if (saved) saved.textContent = Object.keys(edits).length ? "Unsaved edits" : "";
  });
  root.addEventListener("change", function (e) {
    if (e.target.tagName === "SELECT" && e.target.hasAttribute("data-e")) e.target.dispatchEvent(new Event("input", { bubbles: true }));
    if (e.target.hasAttribute && e.target.hasAttribute("data-other-date")) {
      var r = $('input[name="when"][value="other"]', root);
      if (r) r.checked = true;
    }
  });

  root.addEventListener("click", function (e) {
    var t = e.target.closest ? e.target : null;
    if (!t || !cur) return;
    var b;
    if ((b = t.closest("[data-view]"))) {
      var v = b.getAttribute("data-view");
      $all("[data-view]", root).forEach(function (x) { x.setAttribute("aria-selected", x === b ? "true" : "false"); });
      $all("[data-pane]", root).forEach(function (x) { x.hidden = x.getAttribute("data-pane") !== v; });
      if (v === "read") renderRead();
    } else if (t.closest("[data-other-date]")) {
      var r = $('input[name="when"][value="other"]', root);
      if (r) r.checked = true;
    } else if (t.closest("[data-save-edits]")) {
      act(Object.assign({}, edits), "Edits saved.");
    } else if (t.closest("[data-approve]")) {
      var pick = $('input[name="when"]:checked', root);
      var date = pick && pick.value === "other" ? $("[data-other-date]", root).value : pick && pick.value;
      if (!/^\d{4}-\d{2}-\d{2}$/.test(date || "")) return status("Choose a publish date.", true);
      if (date < D.today()) return status("Choose today or a later date.", true);
      var first = String(cur.author_name || "The author").split(" ")[0];
      act(Object.assign({}, edits, { status: "approved", publish_on: date }),
        date === D.today() ? "Approved and published. " + first + " now sees it in green." : "Approved for " + D.day(date, true) + ". " + first + " now sees it in green.", true);
    } else if (t.closest("[data-return]")) {
      var note = $("[data-note]", root).value.trim();
      if (!note) { $("[data-note]", root).focus(); return status("Write a short note so the author knows what to change.", true); }
      act(Object.assign({}, edits, { status: "returned", editor_note: note }), "Sent back with your note.", true);
    } else if (t.closest("[data-redate]")) {
      var d2 = $("#rv-date", root).value;
      if (!/^\d{4}-\d{2}-\d{2}$/.test(d2) || d2 < D.today()) return status("Choose today or a later date.", true);
      act({ publish_on: d2 }, "Date changed to " + D.day(d2, true) + ".", true);
    } else if (t.closest("[data-unapprove]")) {
      if (window.confirm("Move this piece back to Waiting approval? It will come off the " + (key(cur) === "published" ? "site" : "schedule") + ".")) {
        act({ status: "waiting" }, "Moved back to Waiting approval.", true);
      }
    } else if (t.closest("[data-open-file]")) {
      api.fileUrl(cur.file_path).then(function (url) { window.open(url, "_blank", "noopener"); })
        .catch(function (err) { status(err && err.message || "Could not open the file.", true); });
    }
  });

  function act(fields, done, rerender) {
    $all("[data-approve],[data-return],[data-redate],[data-unapprove],[data-save-edits]", root).forEach(function (b) { b.disabled = true; });
    api.update(cur.id, fields).then(function (p) {
      cur = replace(p);
      edits = {};
      renderBar();
      if (rerender) showPiece(cur);
      else {
        var b = $("[data-save-edits]", root); if (b) b.disabled = true;
        var s = $("[data-saved]", root); if (s) s.textContent = "";
        $all("[data-approve],[data-return],[data-redate],[data-unapprove]", root).forEach(function (x) { x.disabled = false; });
        renderRead();
      }
      status(done);
    }).catch(function (err) {
      $all("[data-approve],[data-return],[data-redate],[data-unapprove]", root).forEach(function (b) { b.disabled = false; });
      var se = $("[data-save-edits]", root); if (se) se.disabled = !Object.keys(edits).length;
      status("Could not save: " + (err && err.message || "please try again."), true);
    });
  }

  boot();
})();
