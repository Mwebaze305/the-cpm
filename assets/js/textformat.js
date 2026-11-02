/* The Credence Letters — turns an expert's plain text into safe HTML.
   Used by the Briefings page and by the review queue's preview, so both show
   a piece the same way. Paragraphs are separated by a blank line; a line that
   starts with "## " is a subheading; lines that start with "- " form a list. */
(function () {
  "use strict";

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  var HEAD = /^#{2,3}\s+/, ITEM = /^\s*[-•]\s+/;

  function body(text) {
    var blocks = String(text || "").replace(/\r\n?/g, "\n").split(/\n\s*\n/);
    return blocks.map(function (b) {
      b = b.replace(/^\n+|\s+$/g, "");
      if (!b) return "";
      var lines = b.split("\n");
      if (lines.every(function (l) { return ITEM.test(l); })) {
        return "<ul>" + lines.map(function (l) { return "<li>" + esc(l.replace(ITEM, "")) + "</li>"; }).join("") + "</ul>";
      }
      var out = "", para = [];
      function close() { if (para.length) { out += "<p>" + para.map(esc).join("<br>") + "</p>"; para = []; } }
      lines.forEach(function (l) {
        if (HEAD.test(l)) { close(); out += "<h2>" + esc(l.replace(HEAD, "")) + "</h2>"; }
        else para.push(l);
      });
      close();
      return out;
    }).join("");
  }

  function linkify(line) {
    return esc(line).replace(/https?:\/\/[^\s<>"']+/g, function (u) {
      var clean = u.replace(/[.,;)]+$/, ""), tail = u.slice(clean.length);
      return '<a href="' + clean + '" target="_blank" rel="noopener">' + clean + "</a>" + tail;
    });
  }

  function sources(text) {
    var lines = String(text || "").split(/\n+/).map(function (l) { return l.trim(); }).filter(Boolean);
    return lines.length ? "<ul>" + lines.map(function (l) { return "<li>" + linkify(l) + "</li>"; }).join("") + "</ul>" : "";
  }

  window.CPM_TEXT = { body: body, sources: sources, esc: esc };
})();
