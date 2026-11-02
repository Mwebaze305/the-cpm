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

  /* ---------- letters ---------- */
  function findLetter(no) {
    for (var i = 0; i < LETTERS.length; i++) if (LETTERS[i].no === no) return LETTERS[i];
    return LETTERS[0];
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
    if (!box || !letter) return;
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
      '<p class="paper-salute">' + esc(t("letter.salutation", null, L.lang)) + "</p>" +
      L.c.excerpt.map(function (s) { return '<p class="body">' + esc(s) + "</p>"; }).join("") +
      '<p class="paper-sign">' + esc(letter.author) + "</p>";
  }

  function renderLetterPage() {
    var root = $("[data-letter]");
    if (!root || !LETTERS.length) return;
    var m = /credence-(\d+)/.exec(window.location.hash || "");
    var letter = findLetter(m ? parseInt(m[1], 10) : LETTERS[0].no);
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
      notice + cover +
      '<div class="letter-body">' +
        '<p class="paper-salute">' + esc(t("letter.salutation", null, lang)) + "</p>" +
        body +
        '<p class="closing">' + esc(t("letter.closing", null, lang)) + "</p>" +
        '<p class="signature"><strong>' + esc(letter.author) + "</strong><br>" + esc(L.c.place) + "</p>" +
        '<p class="disclaimer">' + esc(t("letter.disclaimer", null, lang)) + "</p>" +
      "</div>" +
      '<section class="sources" aria-labelledby="sources-h"><h2 id="sources-h">' + esc(t("letter.sources")) + "</h2><ul>" +
        letter.sources.map(function (s) { return "<li>" + s + "</li>"; }).join("") +
      "</ul></section>";

    document.title = t("title.letter", { title: L.c.title });
  }

  /* ---------- people: founders, experts and researchers ----------
     Cards are all the same size and sit in one horizontal row that scrolls
     sideways on every screen, so the team never reads as a hierarchy. */
  var teamFilter = "all";
  function memberPage(m) { return m.group === "founder" ? "founders.html" : "team.html"; }
  function groupLabel(m) {
    if (m.group === "founder") return t("writer.eyebrow");
    if (m.group === "researcher") return t(m.junior ? "team.group.junior" : "team.group.researcher");
    return t("team.group.expert");
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
        '<p class="mcard-group">' + esc(groupLabel(m)) + "</p>" +
        '<h' + (opts.h || 2) + ' class="mcard-name">' + esc(m.name) + "</h" + (opts.h || 2) + ">" +
        '<p class="label mcard-role">' + esc(role) + "</p>" +
        '<p class="mcard-bio' + (opts.clamp ? " clamp" : "") + '" lang="' + bioLang + '">' + esc(bio) + "</p>" +
      "</div></" + tag + ">";
  }
  function byName(a, b) { return a.name.localeCompare(b.name); }

  function renderTeam() {
    var box = $("[data-team]");
    var team = (window.CPM_TEAM || []).filter(function (m) { return m.group === "expert" || m.group === "researcher"; }).sort(byName);
    if (!box) return;
    var shown = team.filter(function (m) {
      return teamFilter === "all" || (teamFilter === "experts" ? m.group === "expert" : m.group === "researcher");
    });
    var wanted = teamFilter === "experts" ? "" :
      '<a class="mcard mcard-wanted" href="exchange.html#register">' +
        '<div class="mcard-body"><p class="mcard-group">' + esc(t("team.group.junior")) + "</p>" +
        '<h2 class="mcard-name">' + esc(t("team.wanted.title")) + "</h2>" +
        '<p class="mcard-bio">' + esc(t("team.wanted.text")) + "</p>" +
        '<span class="mcard-cta">' + esc(t("team.wanted.cta")) + "</span></div></a>";
    box.innerHTML = shown.map(function (m) { return memberCard(m); }).join("") + wanted;
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
    try { return new URLSearchParams(window.location.search).get("theme"); } catch (e) { return null; }
  }
  function initThemePick() {
    document.addEventListener("click", function (e) {
      var a = e.target.closest ? e.target.closest("[data-pick-theme]") : null;
      var sel = $("#ex-theme");
      if (a && sel) sel.value = a.getAttribute("data-pick-theme");
    });
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

  /* ---------- Exchange of Notes form ---------- */
  var GREAT_LAKES = ["UG", "CD", "RW", "BI", "SS", "KE", "TZ"];
  var ASEAN = ["BN", "KH", "ID", "LA", "MY", "MM", "PH", "SG", "TH", "TL", "VN"];
  var THEMES = ["health", "refugees", "trafficking", "rivers", "trade", "own"];
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
      '<optgroup label="' + esc(t("form.groupSEA")) + '">' +
        sortByName(ASEAN).map(function (o) { return '<option value="' + o.c + '">' + esc(o.n) + "</option>"; }).join("") +
      "</optgroup>" +
      '<option value="OTHER">' + esc(t("form.other")) + "</option>";
    $("#ex-level").innerHTML = '<option value="">' + esc(t("form.levelPick")) + "</option>" +
      LEVELS.map(function (k) { return '<option value="' + k + '">' + esc(t("level." + k)) + "</option>"; }).join("");
    $("#ex-theme").innerHTML = '<option value="">' + esc(t("form.themePick")) + "</option>" +
      THEMES.map(function (k) { return '<option value="' + k + '">' + esc(t("theme." + k)) + "</option>"; }).join("");
    country.value = keep.country; $("#ex-level").value = keep.level; $("#ex-theme").value = keep.theme;
    if (!keep.theme) { var q = themeFromUrl(); if (q && THEMES.indexOf(q) > -1) $("#ex-theme").value = q; }
  }

  function initExchangeForm() {
    var form = $("#exchange-form");
    if (!form) return;
    var status = $("#ex-status");
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
        status.textContent = t("form.notConnected");
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
          status.textContent = t("form.sent");
        })
        .catch(function () {
          status.className = "status err";
          status.textContent = t("form.error");
        })
        .then(function () {
          btn.disabled = false;
          btn.textContent = t("form.submit");
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
    if ($("[data-team]")) renderers.push(renderTeam);
    if ($("[data-founders]")) renderers.push(renderFounders);
    if ($("[data-photo-alt], [data-photo-cap]")) renderers.push(renderPhotoText);
    if ($("[data-credits]")) renderers.push(renderCredits);
    if ($("[data-lead-letter], [data-lead-dispatch]")) renderers.push(renderLeadStrip);
    if ($("[data-home-dispatches]")) renderers.push(renderHomeDispatches);
    if ($("[data-people]")) renderers.push(renderPeople);
    if ($("[data-dispatch-bar]")) renderers.push(renderDispatchBar);
    if ($("[data-dispatches]")) renderers.push(renderDispatchPage);
    setLang(detectLang(), false);
    initHeader();
    initThemePick();
    initRows();
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
