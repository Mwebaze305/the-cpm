"""Shared page parts for The Credence Letters website.

The site has no build step: every page is plain HTML. This script only keeps
the repeated parts (header, footer, photo markup) identical across pages.
Run it after changing the header or footer here:  python3 tools/pages.py
"""
import json, os, re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PHOTO_DIR = "assets/img/photos"
CREDITS = json.load(open(os.path.join(ROOT, PHOTO_DIR, "credits.json")))
CAPS = json.load(open(os.path.join(ROOT, "tools/photos/captions.json")))

PAGES = ["index.html", "exchange.html", "dispatches.html", "briefings.html", "letter.html", "team.html", "founders.html", "opportunities.html", "ethics.html", "credits.html"]
CURRENT = {"exchange.html": "exchange.html", "dispatches.html": "dispatches.html", "briefings.html": "briefings.html", "team.html": "team.html", "founders.html": "team.html", "opportunities.html": "opportunities.html"}

NAV = [
    ("exchange.html", "nav.exchange", "EXCHANGE OF NOTES"),
    ("dispatches.html", "nav.dispatches", "DISPATCHES"),
    ("briefings.html", "nav.briefings", "BRIEFINGS"),
    ("opportunities.html", "nav.opps", "OPPORTUNITIES"),
    ("index.html#letter", "nav.thisweek", "THE LETTERS"),
    ("index.html#about", "nav.about", "ABOUT"),
    ("team.html", "nav.team", "TEAM"),
]


def header(page):
    links = []
    for href, key, text in NAV:
        cur = ' aria-current="page"' if CURRENT.get(page) == href else ""
        links.append(f'      <a href="{href}" data-i18n="{key}"{cur}>{text}</a>')
    return (
        '<div data-dispatch-bar></div>\n'
        '<header class="site-top" data-site-top>\n'
        '  <div class="wrap site-header">\n'
        '    <a class="brand" href="index.html" aria-label="The Credence Letters, home">\n'
        '      <svg viewBox="0 0 100 100" aria-hidden="true"><use href="#seal-mini"></use></svg>\n'
        '      <span class="brand-word"><span class="bw-1">THE CREDENCE</span><span class="bw-2">Letters</span></span>\n'
        '    </a>\n'
        '    <nav class="nav" id="site-nav" aria-label="Main" data-i18n-attr="aria-label:nav.label">\n'
        + "\n".join(links) + "\n"
        '    </nav>\n'
        '    <div class="lang-switch" data-lang-switch aria-label="Language"></div>\n'
        '    <button class="menu-btn" type="button" aria-expanded="false" aria-controls="site-nav" data-menu '
        'aria-label="Menu" data-i18n-attr="aria-label:nav.menu"><span class="menu-icon" aria-hidden="true"></span>'
        '<span class="menu-word" aria-hidden="true" data-i18n="nav.menu">MENU</span></button>\n'
        '  </div>\n'
        '</header>'
    )


FOOTER = """<footer class="site-footer">
  <div class="wrap footer-grid">
    <div class="footer-brand">
      <a class="brand" href="index.html" aria-label="The Credence Letters, home">
        <svg viewBox="0 0 100 100" aria-hidden="true"><use href="#seal-mini"></use></svg>
        <span class="brand-word"><span class="bw-1">THE CREDENCE</span><span class="bw-2">Letters</span></span>
      </a>
      <p data-i18n="footer.about">An independent organisation working for sustainable development in the Great Lakes and Southeast Asia, through research partnership, sourced dispatches and weekly letters.</p>
    </div>
    <div class="footer-col">
      <h2 class="label" data-i18n="footer.h.programmes">PROGRAMMES</h2>
      <ul>
        <li><a href="exchange.html" data-i18n="footer.exchange">Exchange of Notes</a></li>
        <li><a href="dispatches.html" data-i18n="footer.dispatches">Dispatches</a></li>
        <li><a href="briefings.html" data-i18n="footer.briefings">Briefings</a></li>
        <li><a href="index.html#letter" data-i18n="footer.letters">Letters</a></li>
        <li><a href="index.html#research" data-i18n="footer.research">Research themes</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h2 class="label" data-i18n="footer.h.org">THE ORGANISATION</h2>
      <ul>
        <li><a href="index.html#about" data-i18n="footer.aboutLink">About</a></li>
        <li><a href="founders.html" data-i18n="footer.founders">Founders</a></li>
        <li><a href="team.html" data-i18n="footer.team">Team</a></li>
        <li><a href="index.html#map" data-i18n="footer.map">The map</a></li>
        <li><a href="credits.html" data-i18n="footer.credits">Photo credits</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h2 class="label" data-i18n="footer.h.take">TAKE PART</h2>
      <ul>
        <li><a href="exchange.html#register" data-i18n="footer.join">Join the partnership</a></li>
        <li><a href="opportunities.html" data-i18n="footer.opps">Opportunities</a></li>
        <li><a href="index.html#take" data-i18n="footer.subscribe">Subscribe to the letters</a></li>
        <li><a href="ethics.html" data-i18n="footer.write">Write with us</a></li>
      </ul>
    </div>
  </div>
  <div class="wrap footer-row">
    <p>© 2026 The Credence Letters</p>
    <p class="footer-right"><span data-i18n="footer.independent">An independent publication.</span> <span class="footer-dash" aria-hidden="true">—</span> <a href="ethics.html" data-i18n="footer.ethics">Ethics</a></p>
  </div>
</footer>"""


def img(key, sizes="100vw", cls="", eager=False, alt=True, pos=None):
    """An <img> for a photo in assets/img/photos, with a small and a large size."""
    m = CREDITS[key]
    w, h = m["saved"]
    a = f' alt="{CAPS[key][0]}" data-photo-alt="{key}"' if alt else ' alt=""'
    c = f' class="{cls}"' if cls else ""
    load = ' fetchpriority="high"' if eager else ' loading="lazy"'
    style = f' style="object-position:{pos}"' if pos else ""
    return (f'<img{c} src="{PHOTO_DIR}/{key}.jpg" srcset="{PHOTO_DIR}/{key}-sm.jpg 800w, {PHOTO_DIR}/{key}.jpg {w}w" '
            f'sizes="{sizes}" width="{w}" height="{h}"{a}{load} decoding="async"{style}>')


def cap(key, cls="photo-cap"):
    """A caption that links to the photo's credit; filled in each language by main.js."""
    return (f'<a class="{cls}" href="credits.html#p-{key}" data-photo-cap="{key}">'
            f'{CAPS[key][0]} · Photo: {CREDITS_ARTIST(key)} · {CREDITS[key]["license"]}</a>')


def CREDITS_ARTIST(key):
    js = open(os.path.join(ROOT, "assets/js/photos.js"), encoding="utf-8").read()
    data = json.loads(js[js.index("{"): js.rindex("}") + 1])
    return data[key]["artist"]


def apply_chrome(page):
    path = os.path.join(ROOT, page)
    s = open(path, encoding="utf-8").read()
    s = re.sub(r'<div data-dispatch-bar></div>\s*<header class="(?:band-navy|site-top)".*?</header>', lambda m: header(page), s, count=1, flags=re.S)
    s = re.sub(r'<footer class="site-footer">.*?</footer>', lambda m: FOOTER, s, count=1, flags=re.S)
    open(path, "w", encoding="utf-8").write(s)


if __name__ == "__main__":
    for p in PAGES:
        if os.path.exists(os.path.join(ROOT, p)):
            apply_chrome(p)
            print("chrome:", p)
