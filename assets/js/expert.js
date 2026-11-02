/* The Credence Letters — expert desk (expert.html).
   Ideas matched to the expert's field, a writing space with autosave and
   document upload, and the Publish button:
   red PUBLISH → orange WAITING APPROVAL → green APPROVED.
   Everything suggested is copied into the draft as editable text. */
(function () {
  "use strict";

  var D = window.Desk, esc = D.esc, $ = D.$, $all = D.$all, api = D.api;
  var IDEAS = window.CPM_IDEAS || { items: [] };
  var root = $("[data-desk]"), bar = $("[data-desk-bar]");

  var me = null, pieces = [], showAll = false;
  var cur = null;                     // the piece open in the editor
  var saveTimer = null, saving = null, again = false, pending = false, saveErr = false;
  var FIELDS = ["title", "summary", "body", "sources", "focus", "photo"];

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
    root.innerHTML = D.authView({ eyebrow: "EXPERT DESK", title: "Sign in", message: message });
    D.bindAuth(root, enter);
  }

  function enter() {
    root.innerHTML = '<p class="desk-loading">Opening your desk…</p>';
    api.me().then(function (p) {
      if (!p) throw new Error("no profile");
      me = p;
      return api.myPieces();
    }).then(function (list) {
      pieces = list || [];
      renderBar();
      route();
    }).catch(function () {
      root.innerHTML = '<section class="desk-auth"><h1>Your account is almost ready</h1><p class="desk-auth-lede">The editor still needs to finish setting it up. Please try again later.</p><button class="btn" data-signout>SIGN OUT</button></section>';
    });
  }

  /* ---------- top bar ---------- */
  function renderBar() {
    bar.innerHTML =
      '<div class="wrap desk-bar-in">' +
        '<a class="brand" href="index.html" aria-label="The Credence Letters, home"><svg viewBox="0 0 100 100" aria-hidden="true"><use href="#seal-mini"></use></svg>' +
          '<span class="brand-word"><span class="bw-1">THE CREDENCE</span><span class="bw-2">Letters</span></span></a>' +
        '<a class="desk-bar-title" href="' + (me ? "#" : "expert.html") + '">Expert desk</a>' +
        (D.preview ? '<span class="desk-preview-tag">PREVIEW</span>' : "") +
        (me ? '<div class="desk-bar-user">' +
          '<span class="desk-bar-name">' + esc(me.name || me.email || "") + "</span>" +
          (me.role === "editor" ? '<a href="review.html' + (D.preview ? "?preview" : "") + '">Review queue</a>' : "") +
          '<button type="button" data-signout>Sign out</button></div>' : "") +
      "</div>";
  }

  document.addEventListener("click", function (e) {
    var b = e.target.closest ? e.target.closest("[data-signout]") : null;
    if (!b) return;
    flush().then(function () { return api.signOut(); }).then(function () {
      showSignIn("");
    });
  });

  /* ---------- routing: #idea/<id>, #piece/<id>, #new ---------- */
  function route() {
    if (!me) return;
    var h = window.location.hash.replace(/^#/, "");
    var m;
    if ((m = /^idea\/([\w-]+)$/.exec(h))) return showIdea(m[1]);
    if ((m = /^piece\/([\w-]+)$/.exec(h))) return showEditor(find(m[1]));
    if (h === "new") return showEditor({ status: "draft", title: "", summary: "", body: "", sources: "" });
    showHome();
  }
  window.addEventListener("hashchange", function () { flush().then(route); });

  function find(id) { for (var i = 0; i < pieces.length; i++) if (pieces[i].id === id) return pieces[i]; return null; }
  function idea(id) { for (var i = 0; i < IDEAS.items.length; i++) if (IDEAS.items[i].id === id) return IDEAS.items[i]; return null; }
  function upsert(p) {
    for (var i = 0; i < pieces.length; i++) if (pieces[i].id === p.id) { pieces[i] = p; return; }
    pieces.unshift(p);
  }
  function top() { try { window.scrollTo({ top: 0, behavior: "instant" }); } catch (e) { window.scrollTo(0, 0); } }

  /* ---------- home ---------- */
  function myIdeas() {
    var mine = IDEAS.items.filter(function (i) { return me.team_id && (i["for"] || []).indexOf(me.team_id) > -1; });
    return mine.length ? mine : IDEAS.items;
  }
  function greeting() {
    var h = new Date().getHours();
    var first = String(me.name || "").trim().split(/\s+/)[0];
    return (h < 12 ? "Good morning" : h < 17 ? "Good afternoon" : "Good evening") + (first ? ", " + first : "") + ".";
  }

  function ideaCard(i) {
    var started = pieces.some(function (p) { return p.idea_id === i.id; });
    return '<a class="idea-card" href="#idea/' + esc(i.id) + '">' +
      '<div class="idea-media">' + D.photoImg(i.photo, "(max-width: 700px) 85vw, 380px") +
        (started ? '<span class="idea-started">YOU ARE WRITING ON THIS</span>' : "") + "</div>" +
      '<div class="idea-body">' +
        '<p class="idea-meta">' + esc(D.focusName(i.focus)) + (i.date ? " · " + esc(D.day(i.date)) : "") + "</p>" +
        "<h3>" + esc(i.title) + "</h3>" +
        '<p class="idea-story">' + esc(i.story) + "</p>" +
        '<span class="idea-more">READ MORE →</span>' +
      "</div></a>";
  }

  function pieceRow(p) {
    var s = D.status(p);
    return '<li><a class="piece-row" href="#piece/' + esc(p.id) + '">' +
      '<span class="piece-title' + (p.title ? "" : " untitled") + '">' + esc(p.title || "Untitled draft") + "</span>" +
      '<span class="piece-meta">' + D.chip(p) + '<span class="piece-when">' +
        esc(s.key === "waiting" ? "Sent " + D.when(p.submitted_at) : "Edited " + D.when(p.updated_at)) + "</span></span>" +
      (p.status === "returned" && p.editor_note ? '<span class="piece-note">Note from the editor: ' + esc(p.editor_note) + "</span>" : "") +
    "</a></li>";
  }

  function showHome() {
    cur = null;
    var list = showAll ? IDEAS.items : myIdeas();
    var field = D.field(me.team_id);
    root.innerHTML =
      '<section class="desk-hero"><div class="wrap">' +
        '<p class="label">EXPERT DESK</p>' +
        "<h1>" + esc(greeting()) + "</h1>" +
        '<p class="desk-lede">' + (field ? "This week's ideas are matched to your field: " + esc(field) + ". " : "") +
          "Take any of them and make it your own, or start from a blank page.</p>" +
        '<div class="desk-hero-cta"><a class="btn" href="#new">+ NEW PIECE</a></div>' +
      "</div></section>" +
      '<section class="desk-sec" aria-labelledby="ideas-h"><div class="wrap">' +
        '<div class="desk-sec-head"><h2 id="ideas-h">' + (showAll ? "All ideas" : "Ideas for you") + "</h2>" +
          '<p class="desk-meta">Drawn from this week\'s dispatches' + (IDEAS.updated ? " · updated " + esc(D.day(IDEAS.updated)) : "") + "</p></div>" +
        (list.length ? '<div class="idea-row">' + list.map(ideaCard).join("") + "</div>" : '<p class="desk-empty">New ideas arrive with the next dispatches.</p>') +
        (IDEAS.items.length > myIdeas().length || showAll ?
          '<button type="button" class="desk-link" data-toggle-ideas>' + (showAll ? "Show only ideas for my field" : "Show all ideas (" + IDEAS.items.length + ")") + "</button>" : "") +
        '<p class="desk-suggest">Ideas are suggestions. Whatever you start from, every word in your draft is yours to change.</p>' +
      "</div></section>" +
      '<section class="desk-sec desk-sec-alt" aria-labelledby="pieces-h"><div class="wrap">' +
        '<div class="desk-sec-head"><h2 id="pieces-h">Your pieces</h2><a class="desk-link" href="#new">+ New piece</a></div>' +
        (pieces.length ? '<ul class="piece-list">' + pieces.map(pieceRow).join("") + "</ul>" :
          '<p class="desk-empty">Nothing yet. Start from one of the ideas above, or from a blank page.</p>') +
        '<div class="st-legend" aria-label="What the colours mean">' +
          '<span class="st-chip st-red"><i aria-hidden="true"></i>Draft: not sent yet</span>' +
          '<span class="st-chip st-orange"><i aria-hidden="true"></i>Waiting approval</span>' +
          '<span class="st-chip st-green"><i aria-hidden="true"></i>Approved</span>' +
        "</div>" +
      "</div></section>";
    top();
  }

  root.addEventListener("click", function (e) {
    var t = e.target.closest ? e.target.closest("[data-toggle-ideas]") : null;
    if (t) { showAll = !showAll; showHome(); }
  });

  /* ---------- one idea ---------- */
  function showIdea(id) {
    var i = idea(id);
    if (!i) { window.location.hash = ""; return; }
    var mine = pieces.filter(function (p) { return p.idea_id === i.id; });
    root.innerHTML =
      '<article class="wrap wrap-narrow desk-idea">' +
        '<a class="desk-back" href="#">← Your desk</a>' +
        (i.photo ? '<figure class="idea-fig">' + D.photoImg(i.photo, "(max-width: 820px) 100vw, 820px") + "<figcaption>" + D.photoCredit(i.photo) + "</figcaption></figure>" : "") +
        '<p class="idea-meta">' + esc(D.focusName(i.focus)) + (i.date ? " · " + esc(D.day(i.date)) : "") + "</p>" +
        "<h1>" + esc(i.title) + "</h1>" +
        '<p class="desk-suggest">Everything on this page is a suggestion. When you start writing, it is copied into your draft, where you can change any of it.</p>' +
        "<h2>What is happening</h2><p>" + esc(i.story) + "</p>" +
        (i.why ? "<h2>Why it matters</h2><p>" + esc(i.why) + "</p>" : "") +
        (i.angles && i.angles.length ? "<h2>Angles you could take</h2><ul>" + i.angles.map(function (a) { return "<li>" + esc(a) + "</li>"; }).join("") + "</ul>" : "") +
        (i.titles && i.titles.length ? "<h2>Suggested titles</h2><ul class=\"idea-titles\">" + i.titles.map(function (a) { return "<li>" + esc(a) + "</li>"; }).join("") + "</ul>" : "") +
        (i.outline && i.outline.length ? "<h2>A possible outline</h2><ol>" + i.outline.map(function (a) { return "<li>" + esc(a) + "</li>"; }).join("") + "</ol>" : "") +
        (i.sources && i.sources.length ? "<h2>Sources</h2><ul class=\"idea-sources\">" + i.sources.map(function (s) {
          return '<li><a href="' + esc(s.url) + '" target="_blank" rel="noopener">' + esc(s.name) + "</a>" + (s.date ? ", " + esc(D.day(s.date)) : "") + "</li>";
        }).join("") + "</ul>" : "") +
        (i.dispatch ? '<p class="idea-dispatch"><a href="dispatches.html#d-' + esc(i.dispatch) + '" target="_blank" rel="noopener">Read the dispatch on the site →</a></p>' : "") +
        '<div class="desk-actions">' +
          (mine.length ? '<a class="btn" href="#piece/' + esc(mine[0].id) + '">CONTINUE YOUR DRAFT</a><button type="button" class="btn btn-quiet" data-start-idea="' + esc(i.id) + '">START ANOTHER</button>' :
            '<button type="button" class="btn" data-start-idea="' + esc(i.id) + '">WRITE ABOUT THIS</button>') +
          '<a class="btn btn-quiet" href="#">BACK</a>' +
        "</div>" +
        '<p class="status" data-idea-status role="status"></p>' +
      "</article>";
    top();
  }

  root.addEventListener("click", function (e) {
    var b = e.target.closest ? e.target.closest("[data-start-idea]") : null;
    if (!b) return;
    var i = idea(b.getAttribute("data-start-idea"));
    if (!i) return;
    b.disabled = true;
    b.textContent = "OPENING…";
    api.create({
      title: (i.titles && i.titles[0]) || i.title,
      summary: "",
      body: (i.outline || []).map(function (h) { return "## " + h + "\n\n"; }).join(""),
      sources: (i.sources || []).map(D.sourceLine).join("\n"),
      focus: i.focus || null,
      photo: i.photo || null,
      idea_id: i.id
    }).then(function (p) {
      upsert(p);
      window.location.hash = "piece/" + p.id;
    }).catch(function (err) {
      b.disabled = false;
      b.textContent = "WRITE ABOUT THIS";
      var st = $("[data-idea-status]", root);
      st.className = "status err";
      st.textContent = "Could not open a draft: " + (err && err.message || "please try again.");
    });
  });

  /* ---------- the editor ---------- */
  function locked(p) { return p.status === "waiting" || p.status === "approved"; }

  function showEditor(p) {
    if (!p) { window.location.hash = ""; return; }
    cur = JSON.parse(JSON.stringify(p));
    var i = cur.idea_id ? idea(cur.idea_id) : null;
    var photos = D.photoKeys();
    root.innerHTML =
      '<div class="desk-editor">' +
        '<div class="wrap ed-top"><a class="desk-back" href="#">← Your desk</a><span class="ed-saved" data-saved aria-live="polite"></span></div>' +
        '<div class="wrap ed-grid">' +
          '<div class="ed-main">' +
            '<div data-banner></div>' +
            '<div class="field"><label for="ed-title">Title</label>' +
              '<input id="ed-title" class="ed-title" type="text" data-f="title" maxlength="200" placeholder="A clear, specific title" value="' + esc(cur.title) + '"></div>' +
            (i && i.titles && i.titles.length ? '<div class="ed-chips" data-lockable><span class="hint">Suggested titles: tap one to use it, then change it as you like.</span>' +
              i.titles.map(function (t) { return '<button type="button" class="ed-chip" data-use-title="' + esc(t) + '">' + esc(t) + "</button>"; }).join("") + "</div>" : "") +
            '<div class="field"><label for="ed-summary">Summary</label><p class="hint" id="ed-summary-h">One or two sentences. They appear under the title on the Briefings page.</p>' +
              '<textarea id="ed-summary" rows="2" data-f="summary" aria-describedby="ed-summary-h" maxlength="600">' + esc(cur.summary) + "</textarea></div>" +
            '<div class="field"><label for="ed-body">Your text</label>' +
              '<p class="hint" id="ed-body-h">Type or paste. Leave a blank line between paragraphs. A line that starts with ## becomes a subheading' +
                (i ? "; the subheadings already here are the suggested outline: change, move or delete them." : ".") + "</p>" +
              '<textarea id="ed-body" class="ed-body" data-f="body" aria-describedby="ed-body-h">' + esc(cur.body) + "</textarea>" +
              '<p class="ed-count" data-count></p></div>' +
            '<div class="field ed-file-field"><span class="ed-file-label" id="ed-file-l">Or upload your document</span><div data-file></div></div>' +
            '<div class="field"><label for="ed-sources">Sources</label><p class="hint" id="ed-sources-h">One per line: author or organisation, date, title, link. Every piece we publish names its sources.</p>' +
              '<textarea id="ed-sources" rows="4" data-f="sources" aria-describedby="ed-sources-h">' + esc(cur.sources) + "</textarea></div>" +
          "</div>" +
          '<aside class="ed-side">' +
            '<div class="field"><label for="ed-focus">Focus area</label><select id="ed-focus" data-f="focus"><option value="">Choose…</option>' +
              D.FOCUS.map(function (f) { return '<option value="' + f[0] + '"' + (cur.focus === f[0] ? " selected" : "") + ">" + esc(f[1]) + "</option>"; }).join("") + "</select></div>" +
            '<div class="field"><label for="ed-photo">Photo</label><select id="ed-photo" data-f="photo"><option value="">No photo</option>' +
              photos.map(function (k) { return '<option value="' + esc(k) + '"' + (cur.photo === k ? " selected" : "") + ">" + esc(D.photoCap(k)) + "</option>"; }).join("") + "</select>" +
              '<div class="ed-photo" data-photo-prev></div></div>' +
            (i ? '<details class="ed-idea" open><summary>From the idea</summary>' +
              '<p class="ed-idea-title"><a href="#idea/' + esc(i.id) + '">' + esc(i.title) + "</a></p>" +
              '<p class="hint">Use what helps. Each angle can be added to your text and rewritten there.</p>' +
              (i.angles || []).map(function (a, n) {
                return '<div class="ed-angle"><p>' + esc(a) + '</p><button type="button" class="desk-link" data-lockable data-add-angle="' + n + '">+ Add to my text</button></div>';
              }).join("") + "</details>" : "") +
          "</aside>" +
        "</div>" +
        '<div class="ed-bar"><div class="wrap ed-bar-in">' +
          '<div class="ed-bar-left" data-bar-left></div>' +
          '<div class="ed-bar-right"><p class="ed-bar-msg" data-bar-msg role="status"></p><button type="button" class="st-btn" data-publish></button></div>' +
        "</div></div>" +
      "</div>";
    renderFile();
    renderPhoto();
    renderState(false);
    count();
    autosize($("#ed-body", root));
    setSaved(cur.id ? "Saved" : "");
    top();
    if (!cur.id) { var t = $("#ed-title", root); if (t) t.focus(); }
  }

  function renderState(animate) {
    var s = D.status(cur), lock = locked(cur);
    var btn = $("[data-publish]", root);
    btn.className = "st-btn st-" + s.tone + (animate ? " st-changed" : "");
    btn.textContent = s.button;
    btn.setAttribute("aria-disabled", lock ? "true" : "false");
    btn.title = lock ? s.label : "Send to the editor for approval";
    var left = $("[data-bar-left]", root), msg = $("[data-bar-msg]", root);
    msg.className = "ed-bar-msg"; msg.textContent = s.sub || "";
    left.innerHTML =
      cur.status === "waiting" ? '<button type="button" class="desk-link" data-withdraw>Withdraw to make changes</button>' :
      cur.status === "approved" ? '<button type="button" class="desk-link" data-reopen>Make changes</button>' :
      cur.id ? '<button type="button" class="desk-link desk-link-danger" data-delete>Delete draft</button>' : "";

    var banner = "";
    if (cur.status === "returned") banner = '<div class="ed-banner ed-banner-red"><p class="label">SENT BACK BY THE EDITOR</p>' +
      (cur.editor_note ? '<blockquote>' + esc(cur.editor_note) + "</blockquote>" : "") + "<p>Make your changes, then press Publish again.</p></div>";
    else if (cur.status === "waiting") banner = '<div class="ed-banner ed-banner-orange"><p class="label">WAITING APPROVAL</p><p>Sent to the editor ' + esc(D.when(cur.submitted_at)) +
      ". It turns green here once approved. To change something first, withdraw it; it will then need approval again.</p></div>";
    else if (s.key === "scheduled") banner = '<div class="ed-banner ed-banner-green"><p class="label">APPROVED</p><p>It will appear in Briefings on ' + esc(D.day(cur.publish_on, true)) + ".</p></div>";
    else if (s.key === "published") banner = '<div class="ed-banner ed-banner-green"><p class="label">APPROVED AND PUBLISHED</p><p>Published on ' + esc(D.day(cur.publish_on)) +
      '. <a href="briefings.html#b-' + esc(cur.slug) + '" target="_blank" rel="noopener">Read it on the site →</a></p></div>';
    $("[data-banner]", root).innerHTML = banner;

    $all("[data-f]", root).forEach(function (el) {
      if (el.tagName === "SELECT") el.disabled = lock; else el.readOnly = lock;
    });
    $all("[data-lockable]", root).forEach(function (el) { el.hidden = lock; });
    root.classList.toggle("is-locked", lock);
    renderFile();
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
          '<span class="hint">Word, PDF, OpenDocument, RTF or text, up to 20 MB. The words of a Word (.docx) or text file are placed in the box above so you can edit them; the file stays attached for the editor.</span>' +
        "</label>") +
      '<p class="status" data-file-status role="status"></p>';
  }

  function renderPhoto() {
    var box = $("[data-photo-prev]", root);
    if (!box) return;
    box.innerHTML = cur.photo ? D.photoImg(cur.photo, "320px") + '<p class="hint">' + D.photoCredit(cur.photo) + "</p>" : "";
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
    if (!cur || !el.hasAttribute || !el.hasAttribute("data-f") || locked(cur)) return;
    cur[el.getAttribute("data-f")] = el.value;
    if (el.id === "ed-body") { count(); autosize(el); }
    queueSave();
  });
  root.addEventListener("change", function (e) {
    var el = e.target;
    if (!cur) return;
    if (el.tagName === "SELECT" && el.hasAttribute("data-f")) {
      cur[el.getAttribute("data-f")] = el.value || null;
      if (el.id === "ed-photo") renderPhoto();
      queueSave(true);
    }
    if (el.hasAttribute && el.hasAttribute("data-file-input") && el.files && el.files[0]) takeFile(el.files[0]);
  });

  /* ---------- saving ---------- */
  function setSaved(text, err) {
    var el = $("[data-saved]", root);
    if (!el) return;
    el.textContent = text;
    el.classList.toggle("is-err", !!err);
  }
  function blank(p) { return !FIELDS.some(function (f) { return f !== "focus" && f !== "photo" && String(p[f] || "").trim(); }); }
  function queueSave(now) {
    pending = true;
    setSaved("Unsaved changes");
    clearTimeout(saveTimer);
    saveTimer = setTimeout(save, now ? 50 : 1200);
  }
  function fields(p) { var o = {}; FIELDS.forEach(function (f) { o[f] = p[f] == null ? (f === "focus" || f === "photo" ? null : "") : p[f]; }); return o; }

  function save() {
    clearTimeout(saveTimer);
    if (!cur || !pending) return saving || Promise.resolve();
    if (saving) { again = true; return saving; }
    if (!cur.id && blank(cur)) { pending = false; setSaved(""); return Promise.resolve(); }
    var target = cur;
    pending = false;
    setSaved("Saving…");
    var job = target.id ? api.update(target.id, fields(target)) : api.create(Object.assign(fields(target), { idea_id: target.idea_id || null }));
    saving = job.then(function (p) {
      var created = !target.id;
      target.id = p.id; target.status = p.status; target.updated_at = p.updated_at; target.author = p.author;
      upsert(Object.assign({}, p, fields(target)));
      if (created && cur === target) {
        try { window.history.replaceState(null, "", "#piece/" + p.id); } catch (e) { /* ignore */ }
        renderState(false);
      }
      saveErr = false;
      if (cur === target) setSaved("Saved " + D.clock());
    }).catch(function (err) {
      pending = true; saveErr = true;
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

  /* ---------- buttons in the editor ---------- */
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
    } else if ((b = t.closest("[data-add-angle]")) && !locked(cur)) {
      var i = idea(cur.idea_id), a = i && i.angles[+b.getAttribute("data-add-angle")];
      if (!a) return;
      var ta = $("#ed-body", root);
      ta.value = ta.value.replace(/\s+$/, "") + (ta.value.trim() ? "\n\n" : "") + a + "\n";
      cur.body = ta.value;
      count(); autosize(ta); queueSave(true);
      b.textContent = "Added ✓";
      ta.focus();
      ta.setSelectionRange(ta.value.length, ta.value.length);
    } else if (t.closest("[data-publish]")) publish(t.closest("[data-publish]"));
    else if (t.closest("[data-withdraw]")) changeStatus("draft", "Withdrawn. You can edit it again; press Publish when it is ready.");
    else if (t.closest("[data-reopen]")) {
      var live = D.status(cur).key === "published";
      if (window.confirm(live ? "This takes the piece off the site until the editor approves it again. Make changes?" :
        "This takes the piece off the schedule until the editor approves it again. Make changes?")) changeStatus("draft", "Reopened. Make your changes, then press Publish again.");
    } else if (t.closest("[data-delete]")) {
      if (!window.confirm("Delete this draft? This cannot be undone.")) return;
      var id = cur.id, path = cur.file_path;
      clearTimeout(saveTimer); pending = false;
      api.remove(id).then(function () { return api.removeFile(path).catch(function () { /* the file can stay */ }); }).then(function () {
        pieces = pieces.filter(function (p) { return p.id !== id; });
        cur = null;
        window.location.hash = "";
      }).catch(function (err) { barMsg("Could not delete: " + (err && err.message || "please try again."), true); });
    } else if (t.closest("[data-open-file]")) {
      api.fileUrl(cur.file_path).then(function (url) { window.open(url, "_blank", "noopener"); })
        .catch(function (err) { fileMsg(err && err.message || "Could not open the file.", true); });
    } else if (t.closest("[data-remove-file]")) {
      var old = cur.file_path;
      api.update(cur.id, { file_path: null, file_name: null }).then(function (p) {
        cur.file_path = null; cur.file_name = null; upsert(Object.assign({}, p, fields(cur)));
        renderFile();
        return api.removeFile(old).catch(function () { /* already gone */ });
      }).catch(function (err) { fileMsg("Could not remove it: " + (err && err.message || "please try again."), true); });
    }
  });

  function barMsg(text, err) {
    var m = $("[data-bar-msg]", root);
    if (!m) return;
    m.textContent = text;
    m.className = "ed-bar-msg" + (err ? " is-err" : "");
  }
  function fileMsg(text, err) {
    var m = $("[data-file-status]", root);
    if (!m) return;
    m.textContent = text;
    m.className = "status " + (err ? "err" : "ok");
  }

  function publish(btn) {
    if (locked(cur)) return;
    var missing = [];
    if (!String(cur.title || "").trim()) missing.push("a title");
    var bodyWords = D.words(String(cur.body || "").replace(/^##.*$/gm, ""));
    if (bodyWords < 30 && !cur.file_path) missing.push("your text (or an uploaded document)");
    if (missing.length) {
      barMsg("Add " + missing.join(" and ") + " before publishing.", true);
      var first = !String(cur.title || "").trim() ? $("#ed-title", root) : $("#ed-body", root);
      if (first) first.focus();
      return;
    }
    btn.disabled = true;
    btn.textContent = "SENDING…";
    pending = true;
    flush().then(function () {
      if (!cur.id) throw new Error("The draft could not be saved");
      return api.update(cur.id, Object.assign(fields(cur), { status: "waiting" }));
    }).then(function (p) {
      Object.assign(cur, p);
      upsert(JSON.parse(JSON.stringify(cur)));
      btn.disabled = false;
      renderState(true);
      barMsg("Sent to the editor.");
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
      var t = $("#ed-body", root); if (t) t.focus();
    }).catch(function (err) { barMsg("Could not change it: " + (err && err.message || "please try again."), true); });
  }

  /* ---------- uploads ---------- */
  function takeFile(file) {
    if (!D.fileType(file.name)) return fileMsg("Please choose a Word, PDF, OpenDocument, RTF or text file.", true);
    if (file.size > D.MAX_FILE) return fileMsg("That file is larger than 20 MB. Please send a smaller one, or paste the text.", true);
    fileMsg("Uploading " + file.name + "…");
    var old = cur.file_path;
    pending = true;
    var ensure = cur.id ? Promise.resolve() : (cur.title = cur.title || file.name.replace(/\.[^.]+$/, ""), save());
    ensure.then(function () {
      if (!cur.id) throw new Error("The draft could not be saved");
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
      if (text == null) return fileMsg("Attached. Its text cannot be shown here, so the editor will read the file. You can also paste the text into the box.");
      if (!text.trim()) return fileMsg("Attached. The document seems to have no text to show here.");
      var ta = $("#ed-body", root);
      var current = String(cur.body || "").replace(/^##.*$/gm, "").trim();
      if (current && !window.confirm("Replace the text in the box with the text from " + file.name + "?\n\nChoose Cancel to keep your current text. The document stays attached either way.")) {
        return fileMsg("Attached. Your text in the box is unchanged.");
      }
      ta.value = text;
      cur.body = text;
      count(); autosize(ta); queueSave(true);
      fileMsg("Attached, and its text is in the box above so you can edit it.");
    }).catch(function (err) {
      renderFile();
      fileMsg("Upload failed: " + (err && err.message || "please try again."), true);
    });
  }

  /* drag and drop onto the upload area */
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
    if (!z) return;
    e.preventDefault();
    z.classList.remove("is-over");
    if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0]) takeFile(e.dataTransfer.files[0]);
  });

  boot();
})();
