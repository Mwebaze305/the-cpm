/* The Credence par Mwesigwa — language switching and page behaviour.
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

  /* Keep the chosen language when moving between pages. */
  function updateLinks() {
    $all("a[href]").forEach(function (a) {
      if (!a.hasAttribute("data-href")) a.setAttribute("data-href", a.getAttribute("href"));
      var raw = a.getAttribute("data-href");
      if (!/^[\w-]+\.html/.test(raw)) return;
      var hash = raw.indexOf("#") > -1 ? raw.slice(raw.indexOf("#")) : "";
      var path = raw.split("#")[0].split("?")[0];
      a.setAttribute("href", path + (current === DEFAULT ? "" : "?lang=" + current) + hash);
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

  function renderCover() {
    var el = $("[data-cover]");
    var letter = LETTERS[0];
    if (!el || !letter) return;
    var L = letterText(letter);
    el.setAttribute("data-href", letterHref(letter));
    el.setAttribute("href", letterHref(letter));
    var foot = '<span class="cover-foot"><span class="label cover-cta">' + esc(t("letter.read")) + "</span>" +
      (letter.cover && letter.cover.credit ? '<span class="cover-credit">' + esc(letter.cover.credit) + "</span>" : "") + "</span>";
    if (letter.cover && letter.cover.src) {
      var alt = (letter.cover.alt && (letter.cover.alt[current] || letter.cover.alt.en)) || "";
      el.innerHTML = '<img src="' + esc(letter.cover.src) + '" alt="' + esc(alt) + '">' + foot;
    } else {
      el.innerHTML =
        '<span class="cover-plain">' +
          '<svg class="cover-seal" viewBox="0 0 400 400" aria-hidden="true"><use href="#seal-mark"></use></svg>' +
          '<span class="label" style="color:var(--gold)">' + esc(t("letter.no", { n: letter.no })) + "</span>" +
          '<span class="cover-title" lang="' + L.lang + '">' + esc(L.c.title) + "</span>" +
          '<span class="cover-meta">' + esc(L.c.place) + " · " + esc(formatDate(letter.date, current)) + "</span>" +
        "</span>" + foot;
    }
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
        (letter.cover.credit ? "<figcaption>" + esc(letter.cover.credit) + "</figcaption>" : "") + "</figure>";
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
  var THEMES = ["refugees", "rivers", "trade", "governance", "peace", "diplomacy", "own"];
  var LEVELS = ["ug", "ma", "phd", "early"];
  var FALLBACK_NAMES = {
    UG: "Uganda", CD: "DR Congo", RW: "Rwanda", BI: "Burundi", SS: "South Sudan", KE: "Kenya", TZ: "Tanzania",
    BN: "Brunei", KH: "Cambodia", ID: "Indonesia", LA: "Laos", MY: "Malaysia", MM: "Myanmar", PH: "Philippines",
    SG: "Singapore", TH: "Thailand", TL: "Timor-Leste", VN: "Vietnam"
  };

  function regionName(code) {
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
    if ($("[data-cover]")) renderers.push(renderCover);
    if ($("[data-teaser]")) renderers.push(renderTeaser);
    if ($("[data-letter]")) {
      renderers.push(renderLetterPage);
      window.addEventListener("hashchange", renderLetterPage);
    }
    if ($("#exchange-form")) renderers.push(fillSelects);
    setLang(detectLang(), false);
    initSubscribe();
    initMap();
    initExchangeForm();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
