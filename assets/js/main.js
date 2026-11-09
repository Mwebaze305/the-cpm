/* The Credence Letters — language switching and page behaviour.
   No build step and no libraries: every page loads config.js, the i18n files,
   letters.js and this file. */
(function () {
  "use strict";

  var CFG = window.CPM_CONFIG || {};
  var STR = window.CPM_STRINGS || {};
  var LANGS = (CFG.languages || ["en"]).filter(function (l) { return STR[l]; });
  var DEFAULT = CFG.defaultLanguage || "en";
  var STORE_KEY = "cpm-lang";
  var LOCALES = { en: "en-GB", fr: "fr-FR", th: "th-TH", sw: "sw" };
  var LETTERS = (window.CPM_LETTERS || []).slice().sort(function (a, b) { return b.no - a.no; });

  var current = DEFAULT;
  var renderers = [];

  /* ---------- helpers ---------- */
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function readStore() { try { return window.localStorage.getItem(STORE_KEY); } catch (e) { return null; } }
  function writeStore(v) { try { window.localStorage.setItem(STORE_KEY, v); } catch (e) { /* storage blocked: fine */ } }

  function t(key, vars, lang) {
    var l = lang || current;
    var s = STR[l] && STR[l][key];
    if (s == null) s = STR[DEFAULT] && STR[DEFAULT][key];
    if (s == null) return key;
    if (vars) s = s.replace(/\{(\w+)\}/g, function (m, k) { return vars[k] != null ? vars[k] : m; });
    return s;
  }

  function formatDate(iso, lang) {
    try {
      return new Intl.DateTimeFormat(LOCALES[lang] || lang, { day: "numeric", month: "long", year: "numeric" })
        .format(new Date(iso + "T12:00:00"));
    } catch (e) { return iso; }
  }

  function detectLang() {
    var fromUrl = null;
    try { fromUrl = new URLSearchParams(window.location.search).get("lang"); } catch (e) { /* ignore */ }
    if (fromUrl && LANGS.indexOf(fromUrl) > -1) return fromUrl;
    var saved = readStore();
    if (saved && LANGS.indexOf(saved) > -1) return saved;
    var prefs = navigator.languages || [navigator.language || ""];
    for (var i = 0; i < prefs.length; i++) {
      var code = String(prefs[i]).slice(0, 2).toLowerCase();
      if (LANGS.indexOf(code) > -1) return code;
    }
    return DEFAULT;
  }

  /* ---------- static strings ---------- */
  function applyStrings(root) {
    $all("[data-i18n]", root).forEach(function (el) { el.textContent = t(el.getAttribute("data-i18n")); });
    $all("[data-i18n-attr]", root).forEach(function (el) {
      el.getAttribute("data-i18n-attr").split(";").forEach(function (pair) {
        var p = pair.split(":");
        if (p.length === 2) el.setAttribute(p[0].trim(), t(p[1].trim()));
      });
    });
  }

  /* Keep the chosen language when moving between pages (other parameters, such as ?theme=, are kept). */
  function updateLinks() {
    $all("a[href]").forEach(function (a) {
      if (!a.hasAttribute("data-href")) a.setAttribute("data-href", a.getAttribute("href"));
      var raw = a.getAttribute("data-href");
      if (!/^[\w-]+\.html/.test(raw)) return;
      var hash = raw.indexOf("#") > -1 ? raw.slice(raw.indexOf("#")) : "";
      var rest = raw.split("#")[0];
      var path = rest.split("?")[0];
      var query = rest.indexOf("?") > -1 ? rest.slice(rest.indexOf("?") + 1) : "";
      var parts = query ? query.split("&").filter(function (q) { return q && q.indexOf("lang=") !== 0; }) : [];
      if (current !== DEFAULT) parts.push("lang=" + current);
      a.setAttribute("href", path + (parts.length ? "?" + parts.join("&") : "") + hash);
    });
  }

  /* ---------- language switchers ---------- */
  function buildSwitchers() {
    $all("[data-lang-switch]").forEach(function (box) {
      box.setAttribute("role", "group");
      box.innerHTML = LANGS.map(function (l) {
        return '<button type="button" lang="' + l + '" data-set-lang="' + l + '" aria-label="' +
          esc(t("lang.self", null, l)) + '">' + esc(t("lang.code", null, l)) + "</button>";
      }).join("");
    });
    $all("[data-read-in]").forEach(function (box) {
      box.innerHTML = '<span class="label" data-i18n="letter.readIn"></span>' + LANGS.map(function (l) {
        return '<button type="button" lang="' + l + '" data-set-lang="' + l + '">' + esc(t("lang.self", null, l)) + "</button>";
      }).join("");
    });
    document.addEventListener("click", function (e) {
      var b = e.target.closest ? e.target.closest("[data-set-lang]") : null;
      if (b) setLang(b.getAttribute("data-set-lang"), true);
    });
  }

  function setLang(lang, userChose) {
    if (LANGS.indexOf(lang) < 0) lang = DEFAULT;
    current = lang;
    document.documentElement.lang = lang;
    $all("[data-lang-switch]").forEach(function (box) { box.setAttribute("aria-label", t("lang.label")); });
    $all("[data-set-lang]").forEach(function (b) {
      b.setAttribute("aria-pressed", b.getAttribute("data-set-lang") === lang ? "true" : "false");
    });
    applyStrings(document);
    renderers.forEach(function (fn) { fn(); });
    var key = document.body.getAttribute("data-title-key");
    if (key) document.title = t(key);
    updateLinks();
    if (userChose) {
      writeStore(lang);
      try {
        var url = new URL(window.location.href);
        if (lang === DEFAULT) url.searchParams.delete("lang"); else url.searchParams.set("lang", lang);
        window.history.replaceState(null, "", url.pathname + url.search + url.hash);
      } catch (e) { /* not available in every frame */ }
    }
  }

  /* ---------- "Cite as": an APA 7 reference for letters and briefings ----------
     References stay in English (the English text prevails) and point to the live site. */
  var SITE = (CFG.siteUrl || "https://thecredenceletters.com").replace(/\/+$/, "");
  function apaAuthor(name) {
    var parts = String(name || "").trim().split(/\s+/).filter(Boolean);
    if (!parts.length) return "The Credence Letters";
    var last = parts.pop();
    return last + (parts.length ? ", " + parts.map(function (p) { return p.charAt(0).toUpperCase() + "."; }).join(" ") : "");
  }
  function apaDate(iso) {
    var M = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var d = /^(\d{4})-(\d{2})-(\d{2})/.exec(iso || "");
    return d ? d[1] + ", " + M[+d[2] - 1] + " " + (+d[3]) : "n.d.";
  }
  /* parts: author, date, title, note (e.g. "Credence No. 1" or "Briefing"), path */
  function citeBlock(c) {
    var url = SITE + "/" + c.path;
    var who = apaAuthor(c.author); who += /\.$/.test(who) ? "" : ".";
    var text = who + " (" + apaDate(c.date) + "). " + c.title + " " + c.note + ". The Credence Letters. " + url;
    var html = esc(who) + " (" + esc(apaDate(c.date)) + "). <i>" + esc(c.title) + "</i> " + esc(c.note) +
      ". The Credence Letters. " + '<a href="' + esc(url) + '">' + esc(url) + "</a>";
    return '<section class="cite" lang="en"><div class="cite-head"><h2 class="cite-h" lang="' + current + '">' + esc(t("cite.label")) + "</h2>" +
      '<button type="button" class="cite-copy" data-copy-cite data-cite-text="' + esc(text) + '" lang="' + current + '">' + esc(t("cite.copy")) + "</button></div>" +
      '<p class="cite-text">' + html + "</p></section>";
  }
  function initCite() {
    document.addEventListener("click", function (e) {
      var b = e.target.closest ? e.target.closest("[data-copy-cite]") : null;
      if (!b) return;
      var text = b.getAttribute("data-cite-text") || "";
      function done() { b.textContent = t("cite.copied"); setTimeout(function () { b.textContent = t("cite.copy"); }, 2000); }
      function fallback() {
        var p = b.closest(".cite") && b.closest(".cite").querySelector(".cite-text");
        if (!p || !window.getSelection) return;
        var r = document.createRange(); r.selectNodeContents(p);
        var sel = window.getSelection(); sel.removeAllRanges(); sel.addRange(r);
        try { if (document.execCommand("copy")) done(); } catch (err) { /* text stays selected for the reader to copy */ }
      }
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(done, fallback);
      else fallback();
    });
  }

  /* ---------- sharing ----------
     Every dispatch, letter and briefing has a Share button. The link points to
     the piece's page under /share/ (built by tools/share/build.py): its preview
     tags give WhatsApp, Facebook, X, LinkedIn and Telegram the piece's own card
     (cover photo, author, link), and it sends readers straight on to the piece.
     On phones the button opens the phone's own share menu. */
  var SHARE_ICON = '<svg class="share-ico" viewBox="0 0 24 24" aria-hidden="true"><circle cx="18" cy="5" r="2.6"/><circle cx="6" cy="12" r="2.6"/><circle cx="18" cy="19" r="2.6"/><path d="M8.3 10.8l7.4-4.3M8.3 13.2l7.4 4.3"/></svg>';
  function shareUrl(kind, id) {
    return SITE + "/share/" + kind + "/" + encodeURIComponent(id) + (kind !== "b" && current !== "en" ? "." + current : "") + ".html";
  }
  function shareLinks(url, text, title) {
    var u = encodeURIComponent(url), tx = encodeURIComponent(text);
    return [
      ["WhatsApp", "https://wa.me/?text=" + encodeURIComponent(text + " " + url)],
      ["Facebook", "https://www.facebook.com/sharer/sharer.php?u=" + u],
      ["X", "https://twitter.com/intent/tweet?text=" + tx + "&url=" + u],
      ["LinkedIn", "https://www.linkedin.com/sharing/share-offsite/?url=" + u],
      ["Telegram", "https://t.me/share/url?url=" + u + "&text=" + tx]
    ].map(function (l) {
      return '<a class="share-link" href="' + esc(l[1]) + '" target="_blank" rel="noopener">' + esc(l[0]) + "</a>";
    }).join("") +
      '<a class="share-link" href="' + esc("mailto:?subject=" + encodeURIComponent(title) + "&body=" + encodeURIComponent(text + "\n\n" + url)) + '">' + esc(t("share.email")) + "</a>" +
      '<button type="button" class="share-link share-copy" data-share-copy>' + esc(t("share.copy")) + "</button>";
  }
  /* o: kind ("d", "l" or "b"), id, title, by ("By Name", optional),
     fallback (address to share until the piece's share page exists) */
  function shareBlock(o) {
    var url = shareUrl(o.kind, o.id), text = o.title + (o.by ? " · " + o.by : "");
    return '<div class="share" data-share data-share-url="' + esc(url) + '" data-share-title="' + esc(o.title) + '" data-share-text="' + esc(text) + '"' +
      (o.fallback ? ' data-share-check="share/' + o.kind + "/" + esc(encodeURIComponent(o.id)) + '.html" data-share-fallback="' + esc(o.fallback) + '"' : "") + ">" +
      '<button type="button" class="share-btn" aria-expanded="false">' + SHARE_ICON + "<span>" + esc(t("share.label")) + "</span></button>" +
      '<div class="share-menu" role="group" aria-label="' + esc(t("share.menu")) + '" hidden>' + shareLinks(url, text, o.title) + "</div></div>";
  }
  /* A briefing's share page is built a few hours after it is published; until then share its own address. */
  function checkShares() {
    $all("[data-share-check]").forEach(function (box) {
      var path = box.getAttribute("data-share-check");
      box.removeAttribute("data-share-check");
      if (!window.fetch) return;
      fetch(path, { method: "HEAD" }).then(function (r) { if (!r.ok) throw new Error(); }).catch(function () {
        var url = box.getAttribute("data-share-fallback");
        box.setAttribute("data-share-url", url);
        $(".share-menu", box).innerHTML = shareLinks(url, box.getAttribute("data-share-text"), box.getAttribute("data-share-title"));
      });
    });
  }
  function closeShares(except) {
    $all(".share-menu").forEach(function (m) {
      if (m === except || m.hidden) return;
      m.hidden = true;
      var b = m.parentNode && $(".share-btn", m.parentNode);
      if (b) b.setAttribute("aria-expanded", "false");
    });
  }
  function initShare() {
    document.addEventListener("click", function (e) {
      var btn = e.target.closest ? e.target.closest(".share-btn") : null;
      var copy = e.target.closest ? e.target.closest("[data-share-copy]") : null;
      if (btn) {
        var box = btn.closest("[data-share]"), menu = $(".share-menu", box);
        var data = { title: box.getAttribute("data-share-title"), text: box.getAttribute("data-share-text"), url: box.getAttribute("data-share-url") };
        if (navigator.share && window.matchMedia && matchMedia("(pointer: coarse)").matches) {
          navigator.share(data).catch(function () { /* closed by the reader */ });
          return;
        }
        closeShares(menu);
        menu.hidden = !menu.hidden;
        btn.setAttribute("aria-expanded", String(!menu.hidden));
        if (!menu.hidden) { var first = $(".share-link", menu); if (first) first.focus(); }
        return;
      }
      if (copy) {
        var url = copy.closest("[data-share]").getAttribute("data-share-url");
        var done = function () { copy.textContent = t("share.copied"); setTimeout(function () { copy.textContent = t("share.copy"); }, 2000); };
        var fallback = function () {
          var ta = document.createElement("textarea");
          ta.value = url; ta.setAttribute("readonly", ""); ta.style.position = "fixed"; ta.style.opacity = "0";
          document.body.appendChild(ta); ta.select();
          try { if (document.execCommand("copy")) done(); } catch (err) { /* nothing more to try */ }
          document.body.removeChild(ta);
        };
        if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(url).then(done, fallback);
        else fallback();
        return;
      }
      if (!(e.target.closest && e.target.closest(".share-menu"))) closeShares(null);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key !== "Escape") return;
      var open = $all(".share-menu").filter(function (m) { return !m.hidden; })[0];
      if (!open) return;
      closeShares(null);
      var b = $(".share-btn", open.parentNode); if (b) b.focus();
    });
  }

  /* ---------- letters ---------- */
  function findLetter(no) {
    for (var i = 0; i < LETTERS.length; i++) if (LETTERS[i].no === no) return LETTERS[i];
    return null;
  }
  function letterText(letter) {
    var c = letter.content[current];
    if (c) return { c: c, lang: current, fallback: false };
    return { c: letter.content.en, lang: "en", fallback: current !== "en" };
  }
  function letterHref(letter) { return "letter.html#credence-" + letter.no; }

  function coverCredit(cover) {
    if (!cover || !cover.credit) return "";
    return typeof cover.credit === "object" ? (cover.credit[current] || cover.credit.en || "") : cover.credit;
  }

  /* The hero background: a fixed image set in config.js (heroImage), shown
     faintly behind the partnership panel. Falls back to the latest letter's cover. */
  function renderHeroBg() {
    var bg = $("[data-hero-bg]");
    if (!bg) return;
    var latest = LETTERS[0];
    var src = CFG.heroImage || (latest && latest.cover && latest.cover.src) || "";
    bg.style.backgroundImage = src ? 'url("' + src.replace(/"/g, "") + '")' : "";
    bg.classList.toggle("on", !!src);
  }

  function renderTeaser() {
    var box = $("[data-teaser]");
    var letter = LETTERS[0];
    if (!box) return;
    box.hidden = !letter;
    syncAnalysisEmpty();
    if (!letter) return;
    var L = letterText(letter);
    $("[data-teaser-title]", box).textContent = L.c.title;
    $("[data-teaser-title]", box).setAttribute("lang", L.lang);
    var link = $("[data-teaser-link]", box);
    link.textContent = t("letter.readNo", { n: letter.no });
    link.setAttribute("data-href", letterHref(letter));
    var cover = $("[data-teaser-cover]", box);
    if (cover && letter.cover && letter.cover.src) {
      cover.src = letter.cover.src;
      cover.alt = (letter.cover.alt && (letter.cover.alt[current] || letter.cover.alt.en)) || "";
    }
    var no = $("[data-teaser-no]", box);
    if (no) no.textContent = t("letter.no", { n: letter.no });
    var paper = $("[data-teaser-paper]", box);
    paper.setAttribute("lang", L.lang);
    paper.innerHTML =
      '<p class="label">' + esc(t("letter.no", { n: letter.no }, L.lang)) + "</p>" +
      L.c.excerpt.map(function (s) { return '<p class="body">' + esc(s) + "</p>"; }).join("") +
      '<p class="paper-sign">' + esc(letter.author) + "</p>";
  }

  function renderLetterPage() {
    var root = $("[data-letter]");
    if (!root) return;
    var m = /credence-(\d+)/.exec(window.location.hash || "");
    var want = m ? parseInt(m[1], 10) : null;
    /* Credence No. 1 became the founder's note on the Founders page; old links go there. */
    if (want === 1 && !findLetter(1)) { window.location.replace(localHref("founders.html#why")); return; }
    var letter = want ? findLetter(want) : LETTERS[0];
    if (!letter) {
      root.removeAttribute("lang");
      root.innerHTML = '<p class="label">' + esc(t("an.label")) + "</p>" +
        '<p class="letter-missing">' + esc(t("an.empty")) + "</p>" +
        '<p><a class="textlink" href="' + esc(localHref("briefings.html")) + '">' + esc(t("an.all")) + "</a></p>";
      document.title = t("title.briefings");
      return;
    }
    var L = letterText(letter);
    var lang = L.lang;
    var notice = "";
    if (L.fallback) notice = '<p class="notice">' + esc(t("letter.notTranslated", { lang: t("lang.name." + current) })) + "</p>";
    else if (lang !== "en") notice = '<p class="notice">' + esc(t("letter.translated")) + "</p>";

    var cover = "";
    if (letter.cover && letter.cover.src) {
      var alt = (letter.cover.alt && (letter.cover.alt[current] || letter.cover.alt.en)) || "";
      cover = '<figure class="letter-cover"><img src="' + esc(letter.cover.src) + '" alt="' + esc(alt) + '">' +
        (coverCredit(letter.cover) ? "<figcaption>" + esc(coverCredit(letter.cover)) + "</figcaption>" : "") + "</figure>";
    }

    var body = L.c.body.map(function (b) {
      if (b.h2) return "<h2>" + b.h2 + "</h2>";
      if (b.ol) return "<ol>" + b.ol.map(function (li) { return "<li>" + li + "</li>"; }).join("") + "</ol>";
      return "<p>" + b.p + "</p>";
    }).join("");

    root.setAttribute("lang", lang);
    root.innerHTML =
      '<p class="label">' + esc(t("letter.no", { n: letter.no })) + "</p>" +
      '<h1 class="letter-title">' + esc(L.c.title) + "</h1>" +
      '<p class="letter-meta">' + esc(L.c.place) + " · " + esc(formatDate(letter.date, current)) + "</p>" +
      shareBlock({ kind: "l", id: String(letter.no), title: L.c.title, by: t("brief.by", { name: letter.author }) }) +
      notice + cover +
      '<div class="letter-body">' +
        body +
        '<p class="signature"><strong>' + esc(letter.author) + "</strong><br>" + esc(L.c.place) + "</p>" +
        '<p class="disclaimer">' + esc(t("letter.disclaimer", null, lang)) + "</p>" +
      "</div>" +
      '<section class="sources" aria-labelledby="sources-h"><h2 id="sources-h">' + esc(t("letter.sources")) + "</h2><ul>" +
        letter.sources.map(function (s) { return "<li>" + s + "</li>"; }).join("") +
      "</ul></section>" +
      citeBlock({ author: letter.author, date: letter.date, title: letter.content.en.title,
        note: "(Credence No. " + letter.no + ")", path: "letter.html#credence-" + letter.no });

    document.title = t("title.letter", { title: L.c.title });
  }

  /* ---------- people: founders, experts and researchers ----------
     Cards are all the same size and sit in one horizontal row that scrolls
     sideways on every screen, so the team never reads as a hierarchy. */
  var teamFilter = "all";
  function memberPage(m) { return m.group === "founder" ? "founders.html" : "team.html"; }
  /* The member's group on the Team page: experts and researchers, plus any
     founder who also works in the team (team: "expert" or "researcher"). */
  function teamGroup(m) {
    if (m.group === "expert" || m.group === "researcher") return m.group;
    if (m.group === "founder" && (m.team === "expert" || m.team === "researcher")) return m.team;
    return "";
  }
  function workLabel(g) { return g === "researcher" ? t("team.group.researcher") : t("team.group.expert"); }
  function groupLabel(m, onTeam) {
    if (m.group === "founder") return onTeam && teamGroup(m) ? t("writer.eyebrow") + " · " + workLabel(teamGroup(m)) : t("writer.eyebrow");
    return workLabel(m.group);
  }
  function memberCard(m, opts) {
    opts = opts || {};
    var role = (m.role && (m.role[current] || m.role.en)) || "";
    var bio = m.bioKey ? t(m.bioKey) : ((m.bio && (m.bio[current] || m.bio.en)) || "");
    var bioLang = m.bioKey || (m.bio && m.bio[current]) ? current : "en";
    var alt = m.altKey ? t(m.altKey) : t("co.alt", { name: m.name });
    var tag = opts.link ? "a" : "article";
    return "<" + tag + ' class="mcard"' + (opts.link ? ' href="' + esc(memberPage(m) + "#m-" + m.id) + '"' : ' id="m-' + esc(m.id) + '"') + ">" +
      '<div class="mcard-photo"><img src="' + esc(m.photo) + '" width="600" height="750" loading="lazy" alt="' + esc(alt) + '"></div>' +
      '<div class="mcard-body">' +
        '<p class="mcard-group">' + esc(groupLabel(m, opts.onTeam)) + "</p>" +
        '<h' + (opts.h || 2) + ' class="mcard-name">' + esc(m.name) + "</h" + (opts.h || 2) + ">" +
        '<p class="label mcard-role">' + esc(role) + "</p>" +
        '<p class="mcard-bio' + (opts.clamp ? " clamp" : "") + '" lang="' + bioLang + '">' + esc(bio) + "</p>" +
      "</div></" + tag + ">";
  }
  function byName(a, b) { return a.name.localeCompare(b.name); }

  function renderTeam() {
    var box = $("[data-team]");
    var team = (window.CPM_TEAM || []).filter(function (m) { return teamGroup(m); }).sort(byName);
    if (!box) return;
    var shown = team.filter(function (m) {
      return teamFilter === "all" || (teamFilter === "experts" ? teamGroup(m) === "expert" : teamGroup(m) === "researcher");
    });
    var wanted = teamFilter === "experts" ? "" :
      '<a class="mcard mcard-wanted" href="' + esc(localHref("researchers.html")) + '">' +
        '<div class="mcard-body"><p class="mcard-group">' + esc(t("team.wanted.label")) + "</p>" +
        '<h2 class="mcard-name">' + esc(t("team.wanted.title")) + "</h2>" +
        '<p class="mcard-bio">' + esc(t("team.wanted.text")) + "</p>" +
        '<span class="mcard-cta">' + esc(t("team.wanted.cta")) + "</span></div></a>";
    box.innerHTML = shown.map(function (m) { return memberCard(m, { onTeam: true }); }).join("") + wanted;
    box.setAttribute("aria-label", t("team.rowLabel"));
    var note = $("[data-team-note]");
    if (note) note.textContent = teamFilter === "experts" ? t("team.experts.text") : teamFilter === "researchers" ? t("team.researchers.text") :
      t("team.experts.text") + " " + t("team.researchers.text");
    $all("[data-team-filter]").forEach(function (b) { b.setAttribute("aria-pressed", b.getAttribute("data-team-filter") === teamFilter ? "true" : "false"); });
    box.scrollLeft = 0;
    syncRows();
  }

  function renderFounders() {
    var box = $("[data-founders]");
    if (!box) return;
    var founders = (window.CPM_TEAM || []).filter(function (m) { return m.group === "founder"; });
    box.innerHTML = founders.map(function (m) { return memberCard(m); }).join("");
    box.classList.toggle("solo", founders.length < 2);
  }

  /* Horizontal rows: arrow buttons on wide screens, swipe on phones. */
  function syncRows() {
    $all("[data-row]").forEach(function (row) {
      var id = row.id, max = row.scrollWidth - row.clientWidth - 2;
      $all('[data-row-prev="' + id + '"]').forEach(function (b) { b.disabled = row.scrollLeft <= 2; });
      $all('[data-row-next="' + id + '"]').forEach(function (b) { b.disabled = row.scrollLeft >= max; });
      row.classList.toggle("can-scroll", max > 0);
      $all('[data-row-next="' + id + '"]').forEach(function (b) { if (b.parentNode) b.parentNode.hidden = max <= 0; });
    });
  }
  function initRows() {
    $all("[data-row]").forEach(function (row) {
      row.addEventListener("scroll", syncRows, { passive: true });
    });
    document.addEventListener("click", function (e) {
      var b = e.target.closest ? e.target.closest("[data-row-prev], [data-row-next]") : null;
      if (b) {
        var row = document.getElementById(b.getAttribute("data-row-prev") || b.getAttribute("data-row-next"));
        var card = row && row.firstElementChild;
        var step = card ? card.getBoundingClientRect().width + 20 : 300;
        if (row) row.scrollBy({ left: b.hasAttribute("data-row-prev") ? -step : step, behavior: reducedMotion() ? "auto" : "smooth" });
      }
      var f = e.target.closest ? e.target.closest("[data-team-filter]") : null;
      if (f) { teamFilter = f.getAttribute("data-team-filter"); renderTeam(); }
    });
    window.addEventListener("resize", syncRows);
    syncRows();
    /* Arriving at team.html#m-id: bring that card into view inside the row. */
    var m = /^#(m-[\w-]+)$/.exec(window.location.hash || "");
    var el = m && document.getElementById(m[1]);
    if (el && el.parentNode && el.parentNode.hasAttribute("data-row")) {
      el.parentNode.scrollLeft = el.offsetLeft - el.parentNode.offsetLeft;
      el.classList.add("is-target");
      try { el.parentNode.scrollIntoView({ block: "center", behavior: "instant" }); } catch (x) { el.parentNode.scrollIntoView(); }
    }
  }

  /* ---------- dispatches: the animated bar at the top and dispatches.html ---------- */
  var DISP = window.CPM_DISPATCHES || { items: [] };
  var DISP_ITEMS = (DISP.items || []).filter(function (d) { return d && d.title && d.title.en; });
  var dIdx = 0, dUserPaused = false, dHeld = false, dFilter = "all";

  function pick(obj) {
    if (!obj) return { s: "", lang: "en" };
    if (obj[current]) return { s: obj[current], lang: current };
    return { s: obj.en || "", lang: "en" };
  }
  function localHref(raw) {
    var hash = raw.indexOf("#") > -1 ? raw.slice(raw.indexOf("#")) : "";
    var path = raw.split("#")[0];
    return path + (current === DEFAULT ? "" : "?lang=" + current) + hash;
  }
  function shortDate(iso) {
    try {
      return new Intl.DateTimeFormat(LOCALES[current] || current, { day: "numeric", month: "short" })
        .format(new Date(iso + "T12:00:00"));
    } catch (e) { return iso; }
  }
  function reducedMotion() {
    return !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }
  function dispTag(d) {
    return d.upcoming ? t("disp.upcoming") : t("disp.region." + d.region);
  }

  function renderDispatchBar() {
    var host = $("[data-dispatch-bar]");
    if (!host || !DISP_ITEMS.length) return;
    host.className = "dispatch-bar";
    host.setAttribute("role", "region");
    host.setAttribute("aria-label", t("disp.bar"));
    var single = DISP_ITEMS.length < 2;
    host.innerHTML =
      '<div class="wrap dbar">' +
        '<a class="dbar-label" data-href="dispatches.html" href="' + esc(localHref("dispatches.html")) + '">' +
          '<span class="pulse-dot" aria-hidden="true"></span>' +
          '<span class="dbar-word">' + esc(t("disp.label")) + "</span>" +
          '<span class="dbar-date">' + esc(DISP.updated ? t("disp.updated", { date: shortDate(DISP.updated) }) : "") + "</span>" +
        "</a>" +
        '<div class="dbar-view" data-dbar-view aria-live="off" aria-atomic="true"></div>' +
        (single ? "" :
        '<div class="dbar-ctrl">' +
          '<span class="dbar-count" data-dbar-count aria-hidden="true"></span>' +
          '<button type="button" class="dbar-btn" data-dbar="prev" aria-label="' + esc(t("disp.prev")) + '"><span aria-hidden="true">‹</span></button>' +
          '<button type="button" class="dbar-btn" data-dbar="toggle"></button>' +
          '<button type="button" class="dbar-btn" data-dbar="next" aria-label="' + esc(t("disp.next")) + '"><span aria-hidden="true">›</span></button>' +
        "</div>") +
      "</div>" +
      (single ? "" : '<div class="dbar-progress" aria-hidden="true"><i data-dbar-progress></i></div>');
    showDispatch(dIdx, false);
  }

  function showDispatch(i, announce) {
    var view = $("[data-dbar-view]");
    if (!view) return;
    var n = DISP_ITEMS.length;
    dIdx = ((i % n) + n) % n;
    var d = DISP_ITEMS[dIdx];
    var T = pick(d.title);
    view.setAttribute("aria-live", announce ? "polite" : "off");
    view.innerHTML =
      '<a class="dbar-item" data-href="dispatches.html#d-' + esc(d.id) + '" href="' + esc(localHref("dispatches.html#d-" + d.id)) + '">' +
        '<span class="dbar-tag dtag-' + esc(d.upcoming ? "next" : d.region) + '">' + esc(dispTag(d)) + "</span>" +
        '<span class="dbar-title" lang="' + T.lang + '">' + esc(T.s) + "</span>" +
      "</a>";
    var count = $("[data-dbar-count]");
    if (count) count.textContent = t("disp.count", { i: dIdx + 1, n: n });
    restartProgress();
    syncToggle();
  }

  function dispatchRunning() { return !dUserPaused && !dHeld && !reducedMotion(); }

  function restartProgress() {
    var bar = $("[data-dbar-progress]");
    if (!bar) return;
    var fresh = bar.cloneNode(false);
    bar.parentNode.replaceChild(fresh, bar);
    fresh.addEventListener("animationend", function () { if (dispatchRunning()) showDispatch(dIdx + 1, false); });
    syncProgress();
  }
  function syncProgress() {
    var host = $("[data-dispatch-bar]");
    if (host) host.classList.toggle("is-paused", !dispatchRunning());
  }
  function syncToggle() {
    var b = $('[data-dbar="toggle"]');
    if (!b) return;
    var off = dUserPaused || reducedMotion();
    b.setAttribute("aria-label", t(off ? "disp.play" : "disp.pause"));
    b.innerHTML = off
      ? '<svg viewBox="0 0 12 12" aria-hidden="true"><path d="M3 1.5 L10.5 6 L3 10.5 Z" fill="currentColor"/></svg>'
      : '<svg viewBox="0 0 12 12" aria-hidden="true"><rect x="2.5" y="1.5" width="2.4" height="9" fill="currentColor"/><rect x="7.1" y="1.5" width="2.4" height="9" fill="currentColor"/></svg>';
    syncProgress();
  }

  function initDispatchBar() {
    var host = $("[data-dispatch-bar]");
    if (!host || DISP_ITEMS.length < 2) return;
    if (reducedMotion()) dUserPaused = true;
    host.addEventListener("click", function (e) {
      var b = e.target.closest ? e.target.closest("[data-dbar]") : null;
      if (!b) return;
      var act = b.getAttribute("data-dbar");
      if (act === "prev") showDispatch(dIdx - 1, true);
      else if (act === "next") showDispatch(dIdx + 1, true);
      else { dUserPaused = !dUserPaused; syncToggle(); }
    });
    function hold(v) { dHeld = v; syncProgress(); }
    host.addEventListener("mouseenter", function () { hold(true); });
    host.addEventListener("mouseleave", function () { hold(host.contains(document.activeElement)); });
    host.addEventListener("focusin", function () { hold(true); });
    host.addEventListener("focusout", function (e) { if (!host.contains(e.relatedTarget)) hold(false); });
    syncToggle();
  }

  /* Team members whose field matches a dispatch (ids from team.js). */
  function teamLine(d) {
    var team = window.CPM_TEAM || [];
    var people = (d.team || []).map(function (id) {
      for (var i = 0; i < team.length; i++) if (team[i].id === id) return team[i];
      return null;
    }).filter(Boolean);
    if (!people.length) return "";
    return '<div class="dispatch-team"><span class="label">' + esc(t("disp.team")) + "</span><ul>" +
      people.map(function (m) {
        var f = pick(m.field);
        return '<li><a href="' + esc(memberPage(m)) + "#m-" + esc(m.id) + '"><img src="' + esc(m.photo) + '" width="40" height="40" alt="" loading="lazy">' +
          '<span><strong>' + esc(m.name) + '</strong><span lang="' + f.lang + '">' + esc(f.s) + "</span></span></a></li>";
      }).join("") + "</ul></div>";
  }

  function renderDispatchPage() {
    var list = $("[data-dispatches]");
    if (!list) return;
    var upd = $("[data-disp-updated]");
    if (upd) upd.textContent = DISP.updated ? t("disp.updated", { date: formatDate(DISP.updated, current) }) : "";

    var bar = $("[data-disp-filter]");
    if (bar) {
      bar.setAttribute("aria-label", t("disp.filter"));
      var regions = ["all"].concat(["gl", "nile", "sea", "afasia"].filter(function (r) {
        return DISP_ITEMS.some(function (d) { return d.region === r; });
      }));
      bar.innerHTML = regions.map(function (r) {
        return '<button type="button" data-disp-region="' + r + '" aria-pressed="' + (dFilter === r) + '">' +
          (r === "all" ? "" : '<span class="dtag-dot dtag-' + r + '" aria-hidden="true"></span>') +
          esc(t(r === "all" ? "disp.filter.all" : "disp.region." + r)) + "</button>";
      }).join("");
    }

    list.innerHTML = DISP_ITEMS.filter(function (d) { return dFilter === "all" || d.region === dFilter; }).map(function (d) {
      var T = pick(d.title), S = pick(d.summary), W = pick(d.why);
      var srcs = (d.sources || []).map(function (s) {
        return '<a href="' + esc(s.url) + '" target="_blank" rel="noopener">' + esc(s.name) +
          (s.date ? ", " + esc(formatDate(s.date, current)) : "") + "</a>";
      }).join('<span class="dsep" aria-hidden="true"> · </span>');
      var ph = d.photo && PHOTOS[d.photo] ? d.photo : REGION_PHOTO[d.region];
      var figure = ph && PHOTOS[ph] ? '<figure class="dispatch-photo">' + photoImg(ph, "(max-width: 1000px) 100vw, 340px") +
        '<figcaption><a class="photo-cap" href="credits.html#p-' + esc(ph) + '">' + captionHTML(ph) + "</a></figcaption></figure>" : "";
      return '<article class="dispatch" id="d-' + esc(d.id) + '">' + figure +
        '<div class="dispatch-meta">' +
          '<span class="dtag dtag-' + esc(d.region) + '">' + esc(t("disp.region." + d.region)) + "</span>" +
          (d.upcoming ? '<span class="dtag dtag-next">' + esc(t("disp.upcoming")) + "</span>" : "") +
          (d.topic ? '<span class="dtopic">' + esc(t("disp.topic." + d.topic)) + "</span>" : "") +
          '<time datetime="' + esc(d.date) + '">' + esc(formatDate(d.date, current)) + "</time>" +
        "</div>" +
        '<div class="dispatch-copy">' +
          '<h2 class="dispatch-title" lang="' + T.lang + '">' + esc(T.s) + "</h2>" +
          '<p class="dispatch-summary" lang="' + S.lang + '">' + esc(S.s) + "</p>" +
          (W.s ? '<p class="dispatch-why"><span class="label">' + esc(t("disp.why")) + '</span> <span lang="' + W.lang + '">' + esc(W.s) + "</span></p>" : "") +
          teamLine(d) +
          (srcs ? '<p class="dispatch-src"><span class="label">' + esc(t("disp.sources")) + "</span> " + srcs + "</p>" : "") +
          shareBlock({ kind: "d", id: d.id, title: T.s }) +
        "</div>" +
      "</article>";
    }).join("");
  }

  function initDispatchPage() {
    var bar = $("[data-disp-filter]");
    if (!bar) return;
    bar.addEventListener("click", function (e) {
      var b = e.target.closest ? e.target.closest("[data-disp-region]") : null;
      if (!b) return;
      dFilter = b.getAttribute("data-disp-region");
      renderDispatchPage();
    });
    /* Arriving from the bar: bring the chosen item into view once it exists. */
    var m = /^#(d-[\w-]+)$/.exec(window.location.hash || "");
    if (m) {
      var el = document.getElementById(m[1]);
      if (el) {
        el.classList.add("is-target");
        try { el.scrollIntoView({ block: "start", behavior: "instant" }); } catch (e) { el.scrollIntoView(true); }
      }
    }
    window.addEventListener("hashchange", function () {
      $all(".dispatch.is-target").forEach(function (x) { x.classList.remove("is-target"); });
      var mm = /^#(d-[\w-]+)$/.exec(window.location.hash || "");
      var el2 = mm && document.getElementById(mm[1]);
      if (el2) el2.classList.add("is-target");
    });
  }

  /* ---------- photographs: alt text, captions and credits in the reader's language ---------- */
  var PHOTOS = window.CPM_PHOTOS || {};
  function photoCap(key) { var p = PHOTOS[key]; return p ? (p.cap[current] || p.cap.en) : ""; }
  function photoCredit(key) { var p = PHOTOS[key]; return p ? t("photo.credit", { artist: p.artist, license: p.license }) : ""; }
  function captionHTML(key, mode) {
    var place = '<span class="cap-place">' + esc(photoCap(key)) + "</span>";
    if (mode === "place") return place;
    return place + ' <span class="cap-credit">· ' + esc(photoCredit(key)) + "</span>";
  }
  function renderPhotoText() {
    $all("[data-photo-alt]").forEach(function (el) { el.setAttribute("alt", photoCap(el.getAttribute("data-photo-alt"))); });
    $all("[data-photo-cap]").forEach(function (el) {
      var key = el.getAttribute("data-photo-cap");
      if (!PHOTOS[key]) return;
      el.innerHTML = captionHTML(key, el.getAttribute("data-cap-mode"));
      if (el.tagName !== "A") el.setAttribute("title", photoCap(key) + " · " + photoCredit(key));
    });
  }
  function photoImg(key, sizes, extra) {
    var p = PHOTOS[key];
    if (!p) return "";
    return '<img src="' + esc(p.src) + '" srcset="' + esc(p.sm) + " 800w, " + esc(p.src) + " " + p.w + 'w" sizes="' + esc(sizes) +
      '" width="' + p.w + '" height="' + p.h + '" loading="lazy" decoding="async" alt="' + esc(photoCap(key)) + '"' + (extra || "") + ">";
  }

  function renderCredits() {
    var box = $("[data-credits]");
    if (!box) return;
    box.innerHTML = Object.keys(PHOTOS).map(function (key) {
      var p = PHOTOS[key];
      var lic = p.licenseUrl ? '<a href="' + esc(p.licenseUrl) + '" rel="license noopener" target="_blank">' + esc(p.license) + "</a>" : esc(p.license);
      return '<li class="credit" id="p-' + esc(key) + '">' + photoImg(key, "(max-width: 700px) 100vw, 33vw") +
        '<div class="credit-body"><h2>' + esc(photoCap(key)) + "</h2>" +
        "<p>" + esc(t("photo.credit", { artist: p.artist, license: "" })).replace(/\s·\s*$/, "") + "</p>" +
        "<p>" + esc(t("credits.license")) + ": " + lic + "</p>" +
        "<p>" + esc(t("credits.file")) + ': <a href="' + esc(p.page) + '" target="_blank" rel="noopener">' + esc(p.file) + "</a></p>" +
        "<p><em>" + esc(t("credits.changes")) + "</em></p></div></li>";
    }).join("");
    var m = /^#(p-[\w-]+)$/.exec(window.location.hash || "");
    var el = m && document.getElementById(m[1]);
    if (el && !box.getAttribute("data-scrolled")) {
      box.setAttribute("data-scrolled", "1");
      try { el.scrollIntoView({ block: "start", behavior: "instant" }); } catch (e) { el.scrollIntoView(true); }
    }
  }

  /* ---------- home: featured strip, latest dispatches, people ---------- */
  var REGION_PHOTO = { gl: "goma-kivu", nile: "gerd-space", sea: "golden-triangle", afasia: "au-addis" };

  function renderLeadStrip() {
    var lc = $("[data-lead-letter]");
    var letter = LETTERS[0];
    if (lc) lc.hidden = !letter;
    if (lc && letter) {
      var L = letterText(letter);
      var title = $("[data-lead-letter-title]", lc);
      title.textContent = L.c.title;
      title.setAttribute("lang", L.lang);
      $("[data-lead-letter-cta]", lc).textContent = t("letter.readNo", { n: letter.no });
      lc.setAttribute("data-href", letterHref(letter));
      var thumb = $("[data-lead-cover]", lc);
      if (thumb && letter.cover && letter.cover.src) thumb.src = letter.cover.src;
    }
    var dc = $("[data-lead-dispatch]");
    var d = DISP_ITEMS[0];
    if (dc && d) {
      var T = pick(d.title);
      var tt = $("[data-lead-dispatch-title]", dc);
      tt.textContent = T.s;
      tt.setAttribute("lang", T.lang);
      $("[data-lead-dispatch-meta]", dc).innerHTML =
        '<span class="dtag dtag-' + esc(d.region) + '">' + esc(t("disp.region." + d.region)) + "</span>" +
        '<time datetime="' + esc(d.date) + '">' + esc(formatDate(d.date, current)) + "</time>";
      dc.setAttribute("data-href", "dispatches.html#d-" + d.id);
    }
  }

  function renderHomeDispatches() {
    var box = $("[data-home-dispatches]");
    if (!box || !DISP_ITEMS.length) return;
    box.innerHTML = DISP_ITEMS.slice(0, 5).map(function (d, i) {
      var T = pick(d.title), S = pick(d.summary);
      var photo = d.photo && PHOTOS[d.photo] ? d.photo : REGION_PHOTO[d.region];
      return '<a class="dcard' + (i === 0 ? " dcard-lead" : "") + '" href="dispatches.html#d-' + esc(d.id) + '">' +
        (photo ? '<div class="dcard-media">' + photoImg(photo, "(max-width: 960px) 100vw, 40vw") +
          '<span class="photo-cap">' + captionHTML(photo) + "</span></div>" : "") +
        '<div class="dcard-body"><div class="dcard-meta">' +
          '<span class="dtag dtag-' + esc(d.region) + '">' + esc(t("disp.region." + d.region)) + "</span>" +
          (d.upcoming ? '<span class="dtag dtag-next">' + esc(t("disp.upcoming")) + "</span>" : "") +
          '<time datetime="' + esc(d.date) + '">' + esc(formatDate(d.date, current)) + "</time></div>" +
          '<h3 class="dcard-title" lang="' + T.lang + '">' + esc(T.s) + "</h3>" +
          '<p class="dcard-sum" lang="' + S.lang + '">' + esc(S.s) + "</p>" +
          (d.team && d.team.length ? '<p class="dcard-team">' + esc(t("disp.team")) + ": " + esc(d.team.map(function (id) {
            var m = (window.CPM_TEAM || []).filter(function (x) { return x.id === id; })[0];
            return m ? m.name : "";
          }).filter(Boolean).join(", ")) + "</p>" : "") +
          '<span class="dcard-more">' + esc(t("lead.disp.cta")) + "</span></div></a>";
    }).join("");
  }

  /* ---------- home: the latest column ----------
     Dispatches, letters, briefings and open opportunities, newest first. Every
     LT_MS the top story slides up and out and the next one rises from below.
     It holds still while the pointer or keyboard focus is on it, and starts
     paused for readers who ask for reduced motion. */
  var LT_MS = 4500, LT_MAX = 12, ltPaused = false, ltHeld = false, ltTimer = null, ltMoving = false;
  var LT_ICON = {
    play: '<svg viewBox="0 0 12 12" aria-hidden="true"><path d="M3 1.5 L10.5 6 L3 10.5 Z" fill="currentColor"/></svg>',
    pause: '<svg viewBox="0 0 12 12" aria-hidden="true"><rect x="2.5" y="1.5" width="2.4" height="9" fill="currentColor"/><rect x="7.1" y="1.5" width="2.4" height="9" fill="currentColor"/></svg>'
  };
  function latestItems() {
    var list = [];
    LETTERS.forEach(function (L) {
      var x = letterText(L);
      list.push({ kind: "letter", date: L.date, title: x.c.title, lang: x.lang, href: localHref(letterHref(L)),
        cover: L.cover && L.cover.src ? L.cover.src : "", sub: t("letter.no", { n: L.no }) });
    });
    BRIEFS.forEach(function (b) {
      list.push({ kind: "brief", date: b.publish_on, title: b.title, lang: "en", href: briefHref(b.slug), photo: briefPhoto(b),
        sub: b.author_name || "" });
    });
    DISP_ITEMS.forEach(function (d) {
      var T = pick(d.title);
      list.push({ kind: "dispatch", date: d.date, title: T.s, lang: T.lang, href: localHref("dispatches.html#d-" + d.id),
        photo: d.photo && PHOTOS[d.photo] ? d.photo : REGION_PHOTO[d.region], sub: dispTag(d) });
    });
    list.sort(function (x, y) { return x.date === y.date ? 0 : (x.date < y.date ? 1 : -1); });
    /* open opportunities, closing soonest first, take every fourth place */
    var opps = (OPPS.items || []).filter(function (o) { return !o.ours && oppOpen(o); })
      .sort(function (a, b) { return oppSortKey(a) < oppSortKey(b) ? -1 : 1; }).map(function (o) {
        var T = pick(o.title), w = oppWhen(o);
        return { kind: "opp", date: "", title: T.s, lang: T.lang, href: localHref("opportunities.html#o-" + o.id),
          sub: w.text + (w.left ? " · " + w.left : "") };
      });
    var out = [];
    while (out.length < LT_MAX && (list.length || opps.length)) {
      if (opps.length && (out.length % 4 === 3 || !list.length)) out.push(opps.shift());
      else out.push(list.shift());
    }
    return out;
  }
  function latestThumb(it) {
    // Eager, low priority: the column clips its own overflow, so lazy images would only start loading as they slide in.
    if (it.cover) return '<span class="latest-thumb"><img src="' + esc(it.cover) + '" alt="" loading="eager" fetchpriority="low" decoding="async"></span>';
    if (it.photo && PHOTOS[it.photo]) return '<span class="latest-thumb">' + photoImg(it.photo, "96px").replace(/ alt="[^"]*"/, ' alt=""').replace('loading="lazy"', 'loading="eager" fetchpriority="low"') + "</span>";
    return '<span class="latest-thumb latest-seal"><svg viewBox="0 0 100 100" aria-hidden="true"><use href="#seal-mini"></use></svg></span>';
  }
  function renderLatest() {
    var host = $("[data-latest]"), list = $("[data-latest-list]");
    if (!host || !list) return;
    var items = latestItems();
    if (!items.length) return;
    list.style.transform = "";
    list.classList.remove("is-moving");
    ltMoving = false;
    list.innerHTML = items.map(function (it) {
      return '<li class="latest-item k-' + it.kind + '"><a class="latest-link" href="' + esc(it.href) + '">' + latestThumb(it) +
        '<span class="latest-text"><span class="latest-kind"><span class="ktag ktag-' + (it.kind === "opp" ? "opp" : it.kind) + '">' +
          esc(t(it.kind === "opp" ? "latest.type.opp" : "an.type." + it.kind)) + "</span>" +
          (it.sub ? '<span class="latest-sub">' + esc(it.sub) + "</span>" : "") + "</span>" +
          '<span class="latest-title" lang="' + esc(it.lang) + '">' + esc(it.title) + "</span>" +
          (it.date ? '<time datetime="' + esc(it.date) + '">' + esc(formatDate(it.date, current)) + "</time>" : "") +
        "</span></a></li>";
    }).join("");
    var b = $("[data-latest-toggle]", host);
    if (b) b.hidden = items.length < 2;
    ltSync();
  }
  function ltRunning() { return !ltPaused && !ltHeld && !document.hidden; }
  function ltSync() {
    var host = $("[data-latest]");
    if (!host) return;
    host.classList.toggle("is-paused", ltPaused);
    var b = $("[data-latest-toggle]", host);
    if (b) { b.setAttribute("aria-label", t(ltPaused ? "latest.play" : "latest.pause")); b.innerHTML = ltPaused ? LT_ICON.play : LT_ICON.pause; }
  }
  function ltStep() {
    var list = $("[data-latest-list]");
    if (!list || ltMoving || list.children.length < 2) return;
    var first = list.firstElementChild;
    var gap = parseFloat(window.getComputedStyle(list).rowGap) || 0;
    var h = first.getBoundingClientRect().height + gap;
    ltMoving = true;
    list.classList.add("is-moving");
    list.style.transform = "translateY(" + (-h) + "px)";
    setTimeout(function () {
      list.classList.remove("is-moving");
      list.appendChild(first);
      list.style.transform = "";
      ltMoving = false;
    }, 900);
  }
  function initLatest() {
    var host = $("[data-latest]");
    if (!host) return;
    if (reducedMotion()) ltPaused = true;
    host.addEventListener("click", function (e) {
      var b = e.target.closest ? e.target.closest("[data-latest-toggle]") : null;
      if (b) { ltPaused = !ltPaused; ltSync(); }
    });
    function hold(v) { ltHeld = v; }
    host.addEventListener("mouseenter", function () { hold(true); });
    host.addEventListener("mouseleave", function () { hold(host.contains(document.activeElement)); });
    host.addEventListener("focusin", function () { hold(true); });
    host.addEventListener("focusout", function (e) { if (!host.contains(e.relatedTarget)) hold(false); });
    ltTimer = setInterval(function () { if (ltRunning()) ltStep(); }, LT_MS);
    ltSync();
  }

  function renderPeople() {
    var box = $("[data-people]");
    var team = window.CPM_TEAM || [];
    if (!box || !team.length) return;
    var founders = team.filter(function (m) { return m.group === "founder"; });
    var others = team.filter(function (m) { return m.group !== "founder"; }).sort(byName);
    box.innerHTML = founders.concat(others).map(function (m) { return memberCard(m, { link: true, h: 3, clamp: true }); }).join("");
    syncRows();
  }

  /* ---------- numbers count up once, when they come into view ---------- */
  function initCountUp() {
    var nums = $all("[data-count]");
    if (!nums.length || !("IntersectionObserver" in window) || reducedMotion()) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        io.unobserve(en.target);
        var el = en.target, end = parseInt(el.getAttribute("data-count"), 10), t0 = null;
        el.textContent = "0";
        function step(ts) {
          if (t0 === null) t0 = ts;
          var k = Math.min(1, (ts - t0) / 1400);
          el.textContent = String(Math.round(end * (1 - Math.pow(1 - k, 3))));
          if (k < 1) window.requestAnimationFrame(step);
        }
        window.requestAnimationFrame(step);
      });
    }, { threshold: 0.6 });
    nums.forEach(function (n) { io.observe(n); });
  }

  /* ---------- photo bands drift slowly when they come into view ---------- */
  function initBands() {
    var bands = $all(".photo-band");
    if (!bands.length || !("IntersectionObserver" in window) || reducedMotion()) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in-view"); io.unobserve(en.target); } });
    }, { threshold: 0.25 });
    bands.forEach(function (b) { io.observe(b); });
  }

  /* ---------- header: menu on small screens, shadow once scrolled ---------- */
  function initHeader() {
    var top = $("[data-site-top]");
    if (!top) return;
    var btn = $("[data-menu]", top);
    function setOpen(open) {
      top.classList.toggle("menu-open", open);
      if (btn) btn.setAttribute("aria-expanded", open ? "true" : "false");
    }
    if (btn) btn.addEventListener("click", function () { setOpen(!top.classList.contains("menu-open")); });
    top.addEventListener("click", function (e) { if (e.target.closest && e.target.closest(".nav a")) setOpen(false); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && top.classList.contains("menu-open")) { setOpen(false); if (btn) btn.focus(); }
    });
    window.addEventListener("resize", function () { if (window.innerWidth > 1240) setOpen(false); });
    function onScroll() { top.classList.toggle("scrolled", window.scrollY > 8); }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---------- research themes: choosing a theme fills it in on the form ---------- */
  function themeFromUrl() {
    try { var q = new URLSearchParams(window.location.search).get("theme"); return q === "refugees" ? "health" : q === "trafficking" ? "peace" : q; } catch (e) { return null; }
  }
  function initThemePick() {
    document.addEventListener("click", function (e) {
      var a = e.target.closest ? e.target.closest("[data-pick-theme]") : null;
      var sel = $("#ex-theme");
      if (a && sel) sel.value = a.getAttribute("data-pick-theme");
    });
  }

  /* ---------- opportunities ---------- */
  var OPPS = window.CPM_OPPORTUNITIES || { items: [] };
  var oppFilter = "all";
  function todayISO() {
    var d = new Date();
    return d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2);
  }
  function daysUntil(iso) {
    var a = new Date(todayISO() + "T00:00:00"), b = new Date(iso + "T00:00:00");
    return Math.round((b - a) / 86400000);
  }
  function oppOpen(o) {
    if (o.rolling) return true;
    if (o.deadline) return daysUntil(o.deadline) >= 0;
    if (o.eventEnd || o.eventStart) return daysUntil(o.eventEnd || o.eventStart) >= 0;
    return false;
  }
  function oppSortKey(o) {
    if (o.deadline) return o.deadline;
    if (o.eventStart) return o.eventStart;
    return "9999";
  }
  function oppRegion(o) {
    return ["gl", "nile", "sea"].indexOf(o.region) > -1 ? t("disp.region." + o.region) : t("opps.region." + (o.region || "both"));
  }
  function oppWhen(o) {
    if (o.rolling) return { text: t("opps.rolling"), cls: "rolling" };
    if (o.deadline) {
      var n = daysUntil(o.deadline);
      var left = n === 0 ? t("opps.lastDay") : n === 1 ? t("opps.oneDay") : t("opps.daysLeft", { n: n });
      return { text: t("opps.closes", { date: formatDate(o.deadline, current) }), left: left, cls: n <= 14 ? "soon" : "" };
    }
    var span = formatDate(o.eventStart, current) + (o.eventEnd && o.eventEnd !== o.eventStart ? " – " + formatDate(o.eventEnd, current) : "");
    return { text: t("opps.event", { date: span }), cls: "event" };
  }
  function oppCard(o, compact) {
    var T = pick(o.title), S = pick(o.summary), W = pick(o.who), when = oppWhen(o);
    var ext = /^https?:/.test(o.link);
    return '<article class="opp' + (o.ours ? " opp-ours" : "") + (compact ? " opp-compact" : "") + '" id="o-' + esc(o.id) + '">' +
      '<div class="opp-tags"><span class="opp-type">' + esc(t("opps.type." + o.type)) + "</span>" +
        '<span class="opp-region">' + esc(oppRegion(o)) + "</span>" +
        (o.focus ? '<span class="opp-focus fa-' + esc(o.focus) + '">' + esc(t("theme." + o.focus)) + "</span>" : "") + "</div>" +
      '<h3 class="opp-title" lang="' + T.lang + '">' + esc(T.s) + "</h3>" +
      '<p class="opp-org">' + esc(o.org) + "</p>" +
      (compact ? "" : '<p class="opp-summary" lang="' + S.lang + '">' + esc(S.s) + "</p>" +
        (W.s ? '<p class="opp-who"><span class="label">' + esc(t("opps.who")) + '</span> <span lang="' + W.lang + '">' + esc(W.s) + "</span></p>" : "")) +
      '<div class="opp-foot">' +
        '<p class="opp-when ' + when.cls + '"><span>' + esc(when.text) + "</span>" + (when.left ? '<strong>' + esc(when.left) + "</strong>" : "") + "</p>" +
        '<a class="opp-link" href="' + esc(o.link) + '"' + (ext ? ' target="_blank" rel="noopener"' : "") + ">" +
          esc(t(o.ours ? "opps.ourApply" : "opps.apply")) + "</a>" +
      "</div>" +
      (compact || !o.checked ? "" : '<p class="opp-checked">' + esc(t("opps.checked", { date: formatDate(o.checked, current) })) + "</p>") +
    "</article>";
  }
  function renderOpps() {
    var mine = $("[data-opps-ours]"), list = $("[data-opps]");
    var open = (OPPS.items || []).filter(oppOpen);
    if (mine) mine.innerHTML = open.filter(function (o) { return o.ours; }).map(function (o) { return oppCard(o); }).join("");
    if (list) {
      var others = open.filter(function (o) {
        return !o.ours && (oppFilter === "all" || o.type === oppFilter || (oppFilter === "event" && o.type === "event"));
      }).sort(function (a, b) { return oppSortKey(a) < oppSortKey(b) ? -1 : 1; });
      list.innerHTML = others.length ? others.map(function (o) { return oppCard(o); }).join("") :
        '<p class="opp-empty">' + esc(t("opps.empty")) + "</p>";
    }
    $all("[data-opp-filter]").forEach(function (b) { b.setAttribute("aria-pressed", b.getAttribute("data-opp-filter") === oppFilter ? "true" : "false"); });
    var upd = $("[data-opps-updated]");
    if (upd && OPPS.updated) upd.textContent = t("opps.updated", { date: formatDate(OPPS.updated, current) });
    var home = $("[data-home-opps]");
    if (home) {
      var soon = open.filter(function (o) { return !o.ours; }).sort(function (a, b) { return oppSortKey(a) < oppSortKey(b) ? -1 : 1; }).slice(0, 3);
      home.innerHTML = soon.map(function (o) { return oppCard(o, true); }).join("");
    }
  }
  function initOpps() {
    document.addEventListener("click", function (e) {
      var b = e.target.closest ? e.target.closest("[data-opp-filter]") : null;
      if (b) { oppFilter = b.getAttribute("data-opp-filter"); renderOpps(); }
    });
  }

  /* ---------- briefings: pieces by the experts, approved on the review queue ----------
     Read from the Supabase view "briefings" (supabase/schema.sql), which holds
     only approved pieces whose publish date has arrived. With ?preview, shows
     the sample pieces from the desk preview (expert.html?preview) instead. */
  var BRIEFS = [], briefsState = "idle";
  /* ?preview works only on a local test copy, never on the live site. */
  var BRIEF_PREVIEW = /^(localhost|127\.0\.0\.1|\[::1\]|.+\.localhost)$/.test(window.location.hostname) &&
    /[?&]preview(=|&|$)/.test(window.location.search);
  var PREVIEW_AUTHORS = { "u-expert": "Sample Expert", "u-expert2": "Second Sample Expert", "u-editor": "Sample Editor" };
  function member(id) {
    var team = window.CPM_TEAM || [];
    for (var i = 0; i < team.length; i++) if (team[i].id === id) return team[i];
    return null;
  }
  function bangkokToday() {
    try { return new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Bangkok", year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date()); }
    catch (e) { return todayISO(); }
  }
  /* Sample pieces from the desk preview, under sample names (no real member is shown with invented text). */
  function previewBriefs() {
    var today = bangkokToday(), list = [];
    try { var s = JSON.parse(window.sessionStorage.getItem("cl-desk-preview-v2")); if (s && s.pieces) list = s.pieces; } catch (e) { /* storage blocked */ }
    var out = list.filter(function (p) { return p.status === "approved" && p.publish_on && p.publish_on <= today; }).map(function (p) {
      return { slug: p.slug, title: p.title, summary: p.summary, body: p.body, sources: p.sources, focus: p.focus, photo: p.photo,
        publish_on: p.publish_on, author_name: PREVIEW_AUTHORS[p.author] || "Sample Expert", author_team: null };
    });
    if (!out.length) {
      var y = new Date(today + "T12:00:00Z"); y.setUTCDate(y.getUTCDate() - 1);
      out = [{ slug: "a-sample-published-piece", title: "A sample published piece",
        summary: "Sample text for the preview, shown as a published briefing.",
        body: "This is sample text for the preview.\n\nIn the live desk, an expert's own words appear here.\n\n## A subheading\n\nParagraphs are separated by a blank line.",
        sources: "WHO Disease Outbreak News (23 Oct 2026) https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON622",
        focus: "health", photo: "goma-kivu", publish_on: y.toISOString().slice(0, 10), author_name: "Sample Expert", author_team: null }];
    }
    return out.sort(function (a, b) { return a.publish_on < b.publish_on ? 1 : -1; });
  }
  function loadBriefs() {
    if (briefsState !== "idle") return;
    if (BRIEF_PREVIEW) { BRIEFS = previewBriefs(); briefsState = "done"; return; }
    if (!CFG.supabaseUrl || !CFG.supabaseKey || !window.fetch) { briefsState = "done"; return; }
    briefsState = "loading";
    var headers = { apikey: CFG.supabaseKey, Accept: "application/json" };
    if (!/^sb_/.test(CFG.supabaseKey)) headers.Authorization = "Bearer " + CFG.supabaseKey;
    fetch(CFG.supabaseUrl.replace(/\/+$/, "") + "/rest/v1/briefings?select=slug,title,summary,body,sources,focus,photo,publish_on,author_name,author_team&order=publish_on.desc", { headers: headers })
      .then(function (r) { if (!r.ok) throw new Error("HTTP " + r.status); return r.json(); })
      .then(function (rows) { BRIEFS = Array.isArray(rows) ? rows : []; briefsState = "done"; })
      .catch(function () { BRIEFS = []; briefsState = "error"; })
      .then(function () { renderBriefings(); renderHomeBriefings(); renderLatest(); });
  }
  /* On briefings.html a link only changes the #hash, so the page (and any
     ?preview) stays; from other pages it opens briefings.html. */
  function briefHref(slug) {
    if ($("[data-briefings]")) return slug ? "#b-" + slug : "#";
    var q = [];
    if (current !== DEFAULT) q.push("lang=" + current);
    if (BRIEF_PREVIEW) q.push("preview");
    return "briefings.html" + (q.length ? "?" + q.join("&") : "") + (slug ? "#b-" + slug : "");
  }
  function briefPhoto(b) { return b.photo && PHOTOS[b.photo] ? b.photo : null; }
  function briefFocus(b) { return b.focus && b.focus !== "own" ? t("theme." + b.focus) : ""; }

  function briefCard(b) {
    var m = member(b.author_team), ph = briefPhoto(b), f = briefFocus(b);
    return '<a class="dcard bcard" href="' + esc(briefHref(b.slug)) + '">' +
      (ph ? '<div class="dcard-media">' + photoImg(ph, "(max-width: 960px) 100vw, 33vw") + '<span class="photo-cap">' + captionHTML(ph, "place") + "</span></div>" : "") +
      '<div class="dcard-body"><div class="dcard-meta">' + kindTag("brief") + (f ? '<span class="btag fa-' + esc(b.focus) + '">' + esc(f) + "</span>" : "") +
        '<time datetime="' + esc(b.publish_on) + '">' + esc(formatDate(b.publish_on, current)) + "</time></div>" +
        '<h3 class="dcard-title" lang="en">' + esc(b.title) + "</h3>" +
        (b.summary ? '<p class="dcard-sum" lang="en">' + esc(b.summary) + "</p>" : "") +
        '<p class="bcard-by">' + (m ? '<img src="' + esc(m.photo) + '" width="36" height="36" alt="" loading="lazy">' : "") +
          "<span>" + esc(t("brief.by", { name: b.author_name || (m ? m.name : "") })) + "</span></p>" +
        '<span class="dcard-more">' + esc(t("brief.read")) + "</span>" +
      "</div></a>";
  }

  function briefArticle(b) {
    var m = member(b.author_team), ph = briefPhoto(b), f = briefFocus(b), field = m ? pick(m.field) : null;
    var T = window.CPM_TEXT || { body: function (s) { return "<p>" + esc(s) + "</p>"; }, sources: function (s) { return "<p>" + esc(s) + "</p>"; } };
    var name = b.author_name || (m ? m.name : "");
    return '<article class="brief-article" id="b-' + esc(b.slug) + '">' +
      '<p class="brief-backline"><a class="textlink" href="' + esc(briefHref("")) + '">' + esc(t("brief.back")) + "</a></p>" +
      (ph ? '<figure class="brief-fig">' + photoImg(ph, "(max-width: 860px) 100vw, 820px") +
        '<figcaption><a class="photo-cap" href="credits.html#p-' + esc(ph) + '">' + captionHTML(ph) + "</a></figcaption></figure>" : "") +
      (f ? '<p class="brief-focus">' + esc(f) + "</p>" : "") +
      '<h1 class="brief-title" lang="en">' + esc(b.title) + "</h1>" +
      (b.summary ? '<p class="brief-summary" lang="en">' + esc(b.summary) + "</p>" : "") +
      '<div class="brief-byline">' + (m ? '<img src="' + esc(m.photo) + '" width="56" height="56" alt="">' : "") +
        "<p>" + (m ? '<a href="' + esc(localHref(memberPage(m) + "#m-" + m.id)) + '"><strong>' + esc(name) + "</strong></a>" : "<strong>" + esc(name) + "</strong>") +
          (field && field.s ? '<span lang="' + field.lang + '">' + esc(field.s) + "</span>" : "") +
          '<time datetime="' + esc(b.publish_on) + '">' + esc(formatDate(b.publish_on, current)) + "</time></p></div>" +
      shareBlock({ kind: "b", id: b.slug, title: b.title, by: t("brief.by", { name: name }), fallback: SITE + "/briefings.html#b-" + b.slug }) +
      (current !== "en" ? '<p class="notice">' + esc(t("brief.english")) + "</p>" : "") +
      '<div class="brief-body" lang="en">' + T.body(b.body) + "</div>" +
      (String(b.sources || "").trim() ? '<section class="brief-sources"><h2>' + esc(t("brief.sources")) + "</h2>" + T.sources(b.sources) + "</section>" : "") +
      citeBlock({ author: name, date: b.publish_on, title: b.title, note: "[Briefing]", path: "briefings.html#b-" + b.slug }) +
    "</article>";
  }

  /* Analysis: letters and briefings in one list, newest first (a letter first on the same day). */
  function kindTag(kind) { return '<span class="ktag ktag-' + kind + '">' + esc(t("an.type." + kind)) + "</span>"; }
  function analysisItems() {
    var items = LETTERS.map(function (L) { return { kind: "letter", date: L.date || "", L: L }; });
    BRIEFS.forEach(function (b) { items.push({ kind: "brief", date: b.publish_on || "", b: b }); });
    return items.sort(function (x, y) {
      if (x.date === y.date) return x.kind === y.kind ? 0 : (x.kind === "letter" ? -1 : 1);
      return x.date < y.date ? 1 : -1;
    });
  }
  function letterCard(L) {
    var x = letterText(L), c = x.c, raw = letterHref(L);
    var m = (window.CPM_TEAM || []).filter(function (p) { return p.name === L.author; })[0];
    var alt = L.cover && L.cover.alt ? (L.cover.alt[current] || L.cover.alt.en || "") : "";
    return '<a class="dcard bcard lcard" data-href="' + esc(raw) + '" href="' + esc(localHref(raw)) + '">' +
      (L.cover && L.cover.src ? '<div class="dcard-media"><img src="' + esc(L.cover.src) + '" width="800" height="532" alt="' + esc(alt) + '" loading="lazy" decoding="async">' +
        (coverCredit(L.cover) ? '<span class="photo-cap">' + esc(coverCredit(L.cover)) + "</span>" : "") + "</div>" : "") +
      '<div class="dcard-body"><div class="dcard-meta">' + kindTag("letter") + '<span class="kno">' + esc(t("letter.no", { n: L.no })) + "</span>" +
        '<time datetime="' + esc(L.date) + '">' + esc(formatDate(L.date, current)) + "</time></div>" +
        '<h3 class="dcard-title" lang="' + x.lang + '">' + esc(c.title) + "</h3>" +
        (c.excerpt && c.excerpt.length ? '<p class="dcard-sum" lang="' + x.lang + '">' + esc(c.excerpt.join(" ")) + "</p>" : "") +
        (L.author ? '<p class="bcard-by">' + (m ? '<img src="' + esc(m.photo) + '" width="36" height="36" alt="" loading="lazy">' : "") +
          "<span>" + esc(t("brief.by", { name: L.author })) + "</span></p>" : "") +
        '<span class="dcard-more">' + esc(t("letter.read")) + "</span>" +
      "</div></a>";
  }

  function renderBriefings() {
    var box = $("[data-briefings]");
    if (!box) return;
    loadBriefs();
    var m = /^#b-([\w-]+)$/.exec(window.location.hash || "");
    if (m && briefsState === "loading") { box.innerHTML = '<p class="brief-wait">' + esc(t("brief.loading")) + "</p>"; return; }
    if (m) {
      var b = BRIEFS.filter(function (x) { return x.slug === m[1]; })[0];
      if (b) {
        box.innerHTML = briefArticle(b);
        checkShares();
        setTimeout(function () { document.title = t("title.brief", { title: b.title }); }, 0);
        return;
      }
    }
    var head = m ? '<p class="notice brief-missing">' + esc(t("brief.notFound")) + "</p>" : "";
    var tail = briefsState === "loading" ? '<p class="brief-wait">' + esc(t("brief.loading")) + "</p>" :
      briefsState === "error" ? '<p class="notice">' + esc(t("brief.loadError")) + "</p>" : "";
    var items = analysisItems();
    var empty = !items.length && !tail ? '<div class="brief-empty"><p>' + esc(t("an.empty")) + "</p>" +
      '<a class="textlink" href="' + esc(localHref("dispatches.html")) + '">' + esc(t("disp.all")) + "</a></div>" : "";
    box.innerHTML = head + (items.length ? '<div class="bgrid">' + items.map(function (it) {
      return it.kind === "letter" ? letterCard(it.L) : briefCard(it.b);
    }).join("") + "</div>" : "") + empty + tail;
    setTimeout(function () { document.title = t("title.briefings"); }, 0);
  }

  function renderHomeBriefings() {
    var box = $("[data-home-briefings]"), wrap = $("[data-home-briefings-wrap]");
    if (!box) return;
    loadBriefs();
    var list = BRIEFS.slice(0, 3);
    if (wrap) wrap.hidden = !list.length;
    box.innerHTML = list.map(briefCard).join("");
    syncAnalysisEmpty();
  }
  function syncAnalysisEmpty() {
    var el = $("[data-an-empty]");
    if (el) el.hidden = !!LETTERS.length || !!BRIEFS.length || briefsState === "loading";
  }

  /* ---------- the founder's note: "Why a letter of credence" (founders.html#why) ---------- */
  function renderFounderNote() {
    var box = $("[data-why]"), N = window.CPM_FOUNDER_NOTE;
    if (!box || !N || !N.content || !N.content.en) return;
    var c = N.content[current] || N.content.en, lang = N.content[current] ? current : "en";
    var m = (window.CPM_TEAM || []).filter(function (p) { return p.name === N.author; })[0];
    var alt = m && m.altKey ? t(m.altKey) : t("co.alt", { name: N.author });
    box.setAttribute("lang", lang);
    box.innerHTML =
      '<p class="label why-eyebrow" lang="' + current + '">' + esc(t("why.eyebrow")) + "</p>" +
      '<h2 class="why-title" id="why-h">' + esc(c.title) + "</h2>" +
      (c.lede ? '<p class="why-lede">' + esc(c.lede) + "</p>" : "") +
      (lang !== current ? '<p class="notice" lang="' + current + '">' + esc(t("why.notTranslated", { lang: t("lang.name." + current) })) + "</p>" : "") +
      '<div class="why-body">' + c.body.map(function (b) {
        if (b.ul) return "<ul>" + b.ul.map(function (li) { return "<li>" + esc(li) + "</li>"; }).join("") + "</ul>";
        return "<p>" + esc(b.p) + "</p>";
      }).join("") + "</div>" +
      '<div class="why-sign">' +
        (N.photo ? '<img src="' + esc(N.photo) + '" width="72" height="72" alt="' + esc(alt) + '" loading="lazy">' : "") +
        "<p><strong>" + esc(N.author) + "</strong><span>" + esc(c.role) + "</span><span>" + esc(c.place) + "</span></p>" +
      "</div>";
  }

  function initBriefings() {
    var box = $("[data-briefings]");
    if (!box) return;
    window.addEventListener("hashchange", function () {
      renderBriefings();
      var top = box.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top: Math.max(0, top), behavior: reducedMotion() ? "auto" : "smooth" });
    });
    if (/^#b-/.test(window.location.hash || "")) {
      setTimeout(function () { try { box.scrollIntoView({ block: "start", behavior: "instant" }); } catch (e) { box.scrollIntoView(true); } }, 50);
    }
  }

  /* ---------- country lists under the map, in the reader's language ---------- */
  function renderRegionLists() {
    $all("[data-region-list]").forEach(function (el) {
      var codes = el.getAttribute("data-region-list").split(",");
      el.textContent = sortByName(codes).map(function (o) { return o.n; }).join(" · ");
    });
  }

  /* ---------- co-founder card (shown once a name is set in config.js) ---------- */
  function renderCofounder() {
    var card = $("[data-cofounder]");
    var co = CFG.cofounder || {};
    if (!card) return;
    var name = (co.name || "").trim();
    card.hidden = !name;
    if (card.parentNode) card.parentNode.classList.toggle("solo", !name);
    if (!name) return;
    $("[data-cofounder-name]", card).textContent = name;
    var slot = $("[data-cofounder-photo]", card);
    if (co.photo) {
      slot.innerHTML = '<img src="' + esc(co.photo) + '" width="210" height="263" alt="' + esc(t("co.alt", { name: name })) + '">';
    } else {
      var initials = name.split(/\s+/).filter(Boolean).slice(0, 2).map(function (w) { return w.charAt(0).toUpperCase(); }).join("");
      slot.innerHTML = '<span class="monogram" aria-hidden="true">' + esc(initials) + "</span>";
    }
  }

  /* ---------- subscribe boxes ---------- */
  function initSubscribe() {
    $all("[data-subscribe]").forEach(function (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var input = $("input[type=email]", form);
        var msg = $(".form-msg", form);
        var email = (input.value || "").trim();
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          input.setAttribute("aria-invalid", "true");
          msg.textContent = t("sub.invalid");
          input.focus();
          return;
        }
        input.removeAttribute("aria-invalid");
        if (CFG.substackUrl) {
          window.location.href = CFG.substackUrl.replace(/\/$/, "") + "/subscribe?email=" + encodeURIComponent(email);
        } else {
          msg.textContent = t("sub.soon");
        }
      });
    });
  }

  /* ---------- reveal on scroll (aims and fundamentals) ----------
     Content is fully visible without scripts; the animation is only armed
     when the browser supports it and the reader allows motion. */
  function initReveal() {
    var blocks = $all("[data-reveal]");
    if (!blocks.length || !("IntersectionObserver" in window)) return;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    document.documentElement.classList.add("reveal-armed");
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in-view"); io.unobserve(en.target); }
      });
    }, { threshold: 0.2, rootMargin: "0px 0px -8% 0px" });
    blocks.forEach(function (b) { io.observe(b); });
  }

  /* ---------- map animation ---------- */
  function initMap() {
    var map = $(".map");
    if (!map || !("IntersectionObserver" in window)) return;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { map.classList.add("animate"); io.disconnect(); }
      });
    }, { threshold: 0.4 });
    io.observe(map);
  }

  /* ---------- Exchange of Notes form (also the researcher application on researchers.html) ----------
     The form element can carry data-levels="ug,ma,phd" to limit the roles offered, and
     data-msg-sent / data-msg-not-connected / data-msg-error with its own message keys. */
  var GREAT_LAKES = ["UG", "CD", "RW", "BI", "SS", "KE", "TZ"];
  var NILE_BASIN = ["ET", "SD", "EG"];
  var ASEAN = ["BN", "KH", "ID", "LA", "MY", "MM", "PH", "SG", "TH", "TL", "VN"];
  var THEMES = ["health", "peace", "rivers", "trade", "own"];
  var LEVELS = ["ug", "ma", "phd", "researcher", "practitioner"];
  var FALLBACK_NAMES = {
    UG: "Uganda", CD: "DR Congo", RW: "Rwanda", BI: "Burundi", SS: "South Sudan", KE: "Kenya", TZ: "Tanzania",
    BN: "Brunei", KH: "Cambodia", ID: "Indonesia", LA: "Laos", MY: "Malaysia", MM: "Myanmar", PH: "Philippines",
    SG: "Singapore", TH: "Thailand", TL: "Timor-Leste", VN: "Vietnam",
    ET: "Ethiopia", EG: "Egypt", SD: "Sudan"
  };

  /* Shorter, more familiar names than the browser's defaults ("Congo - Kinshasa", "Myanmar (Burma)") */
  var NAME_OVERRIDES = {
    en: { CD: "DR Congo", MM: "Myanmar" },
    fr: { CD: "RD Congo", MM: "Myanmar" },
    th: { CD: "สาธารณรัฐประชาธิปไตยคองโก", MM: "เมียนมา" },
    sw: { CD: "DR Kongo", MM: "Myanmar" }
  };

  function regionName(code) {
    var o = NAME_OVERRIDES[current];
    if (o && o[code]) return o[code];
    try {
      var dn = new Intl.DisplayNames([LOCALES[current] || current, "en"], { type: "region" });
      return dn.of(code) || FALLBACK_NAMES[code];
    } catch (e) { return FALLBACK_NAMES[code]; }
  }
  function sortByName(codes) {
    return codes.map(function (c) { return { c: c, n: regionName(c) }; })
      .sort(function (a, b) { return a.n.localeCompare(b.n, current); });
  }

  function fillSelects() {
    var country = $("#ex-country");
    if (!country) return;
    var keep = { country: country.value, level: $("#ex-level").value, theme: $("#ex-theme").value };
    country.innerHTML =
      '<option value="">' + esc(t("form.countryPick")) + "</option>" +
      '<optgroup label="' + esc(t("form.groupGL")) + '">' +
        sortByName(GREAT_LAKES).map(function (o) { return '<option value="' + o.c + '">' + esc(o.n) + "</option>"; }).join("") +
      "</optgroup>" +
      '<optgroup label="' + esc(t("form.groupNile")) + '">' +
        sortByName(NILE_BASIN).map(function (o) { return '<option value="' + o.c + '">' + esc(o.n) + "</option>"; }).join("") +
      "</optgroup>" +
      '<optgroup label="' + esc(t("form.groupSEA")) + '">' +
        sortByName(ASEAN).map(function (o) { return '<option value="' + o.c + '">' + esc(o.n) + "</option>"; }).join("") +
      "</optgroup>" +
      '<option value="OTHER">' + esc(t("form.other")) + "</option>";
    var only = ($("#exchange-form").getAttribute("data-levels") || "").split(",").filter(Boolean);
    $("#ex-level").innerHTML = '<option value="">' + esc(t("form.levelPick")) + "</option>" +
      LEVELS.filter(function (k) { return !only.length || only.indexOf(k) > -1; }).map(function (k) { return '<option value="' + k + '">' + esc(t("level." + k)) + "</option>"; }).join("");
    $("#ex-theme").innerHTML = '<option value="">' + esc(t("form.themePick")) + "</option>" +
      THEMES.map(function (k) { return '<option value="' + k + '">' + esc(t("theme." + k)) + "</option>"; }).join("");
    country.value = keep.country; $("#ex-level").value = keep.level; $("#ex-theme").value = keep.theme;
    if (!keep.theme) { var q = themeFromUrl(); if (q && THEMES.indexOf(q) > -1) $("#ex-theme").value = q; }
  }

  function initExchangeForm() {
    var form = $("#exchange-form");
    if (!form) return;
    var status = $("#ex-status");
    function msg(name, def) { return t(form.getAttribute("data-msg-" + name) || def); }
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      status.className = "status";
      status.textContent = "";
      var required = ["#ex-name", "#ex-email", "#ex-university", "#ex-country", "#ex-level", "#ex-theme", "#ex-idea"];
      var firstBad = null;
      required.forEach(function (sel) {
        var el = $(sel);
        var ok = (el.value || "").trim() !== "";
        if (sel === "#ex-email") ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test((el.value || "").trim());
        el.setAttribute("aria-invalid", ok ? "false" : "true");
        if (!ok && !firstBad) firstBad = el;
      });
      var consent = $("#ex-consent");
      if (!consent.checked) { consent.setAttribute("aria-invalid", "true"); if (!firstBad) firstBad = consent; }
      else consent.removeAttribute("aria-invalid");
      if (firstBad) {
        status.className = "status err";
        status.textContent = t("form.required");
        firstBad.focus();
        return;
      }

      if (!CFG.exchangeFormEndpoint) {
        status.className = "status ok";
        status.textContent = msg("not-connected", "form.notConnected");
        return;
      }

      var data = new FormData(form);
      data.append("site_language", current);
      var btn = $("button[type=submit]", form);
      btn.disabled = true;
      btn.textContent = t("form.sending");
      fetch(CFG.exchangeFormEndpoint, { method: "POST", body: data, headers: { Accept: "application/json" } })
        .then(function (r) {
          if (!r.ok) throw new Error("HTTP " + r.status);
          form.reset();
          status.className = "status ok";
          status.textContent = msg("sent", "form.sent");
        })
        .catch(function () {
          status.className = "status err";
          status.textContent = msg("error", "form.error");
        })
        .then(function () {
          btn.disabled = false;
          btn.textContent = t(btn.getAttribute("data-i18n") || "form.submit");
        });
    });
  }

  /* ---------- start ---------- */
  function start() {
    buildSwitchers();
    if ($("[data-hero-bg]")) renderers.push(renderHeroBg);
    if ($("[data-teaser]")) renderers.push(renderTeaser);
    if ($("[data-letter]")) {
      renderers.push(renderLetterPage);
      window.addEventListener("hashchange", renderLetterPage);
    }
    if ($("#exchange-form")) renderers.push(fillSelects);
    if ($("[data-cofounder]")) renderers.push(renderCofounder);
    if ($("[data-region-list]")) renderers.push(renderRegionLists);
    if ($("[data-opps], [data-opps-ours], [data-home-opps]")) renderers.push(renderOpps);
    if ($("[data-team]")) renderers.push(renderTeam);
    if ($("[data-founders]")) renderers.push(renderFounders);
    if ($("[data-why]")) renderers.push(renderFounderNote);
    if ($("[data-photo-alt], [data-photo-cap]")) renderers.push(renderPhotoText);
    if ($("[data-credits]")) renderers.push(renderCredits);
    if ($("[data-lead-letter], [data-lead-dispatch]")) renderers.push(renderLeadStrip);
    if ($("[data-home-dispatches]")) renderers.push(renderHomeDispatches);
    if ($("[data-people]")) renderers.push(renderPeople);
    if ($("[data-dispatch-bar]")) renderers.push(renderDispatchBar);
    if ($("[data-dispatches]")) renderers.push(renderDispatchPage);
    if ($("[data-briefings]")) renderers.push(renderBriefings);
    if ($("[data-home-briefings]")) renderers.push(renderHomeBriefings);
    if ($("[data-latest]")) renderers.push(renderLatest);
    setLang(detectLang(), false);
    initBriefings();
    initCite();
    initShare();
    initLatest();
    initHeader();
    initThemePick();
    initRows();
    initOpps();
    initCountUp();
    initBands();
    initDispatchBar();
    initDispatchPage();
    initSubscribe();
    initMap();
    initReveal();
    initExchangeForm();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
