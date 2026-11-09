"""Share pages and preview cards for The Credence Letters.

When someone shares a dispatch, letter or briefing on WhatsApp, Facebook, X,
LinkedIn or Telegram, those sites read the shared page's preview tags (they do
not run JavaScript). So every piece gets:

  share/<kind>/<id>.html          a tiny page with the preview tags (English)
  share/<kind>/<id>.<lang>.html   the same in French, Thai and Kiswahili
                                  (dispatches and letters)
  assets/img/share/<kind>-<id>.jpg  the preview card, 1200 x 630: the story's
                                  cover photo blended with the author (photo,
                                  name, role) and the site's name

kind: d = dispatch, l = letter, b = briefing. A reader who opens a share link
is sent straight on to the piece itself.

Dispatches have no author: their card carries The Credence Letters' seal (team
names on dispatches show matching expertise, not authorship).

Run:  python3 tools/share/build.py        (needs Pillow: pip install pillow)
The GitHub workflow .github/workflows/share.yml runs it after every change to
the dispatches or letters and every three hours (for newly published
briefings), and commits whatever changed. Old share pages are never deleted,
so links people have already posted keep working.
"""
import hashlib, html, io, json, os, subprocess, sys, urllib.request

from PIL import Image, ImageDraw, ImageFilter, ImageFont, ImageOps

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
FONTS = os.path.join(ROOT, "tools", "share", "fonts")
OUT_PAGES = os.path.join(ROOT, "share")
OUT_IMG = os.path.join(ROOT, "assets", "img", "share")
LANGS = ["en", "fr", "th", "sw"]
LOCALE = {"en": "en_GB", "fr": "fr_FR", "th": "th_TH", "sw": "sw_TZ"}
KIND_LABEL = {"d": "DISPATCH", "l": "LETTER", "b": "BRIEFING"}
READ_ON = {
    "en": "Read it on The Credence Letters →",
    "fr": "Lire sur The Credence Letters →",
    "th": "อ่านต่อที่ The Credence Letters →",
    "sw": "Soma kwenye The Credence Letters →",
}
BY = {"en": "By {name}", "fr": "Par {name}", "th": "โดย {name}", "sw": "Na {name}"}
MONTHS = ["January", "February", "March", "April", "May", "June", "July",
          "August", "September", "October", "November", "December"]

# Partnership Navy
NAVY_DEEP = (14, 44, 66)
GOLD = (188, 154, 94)
IVORY = (245, 247, 246)
W, H = 1200, 630


def load_data():
    """Read the site's data files (plain JavaScript) through node."""
    script = (
        "global.window={};"
        "for (const f of ['config','photos','team','dispatches','letters']) {"
        "  try { require(process.argv[1] + '/assets/js/' + f + '.js'); } catch (e) {} }"
        "const w = window;"
        "process.stdout.write(JSON.stringify({config: w.CPM_CONFIG || {}, photos: w.CPM_PHOTOS || {},"
        " team: w.CPM_TEAM || [], dispatches: w.CPM_DISPATCHES || {}, letters: w.CPM_LETTERS || []}));"
    )
    out = subprocess.check_output(["node", "-e", script, ROOT])
    return json.loads(out)


def fetch_briefings(cfg):
    url, key = (cfg.get("supabaseUrl") or "").rstrip("/"), cfg.get("supabaseKey") or ""
    if not url or not key:
        return []
    req = urllib.request.Request(
        url + "/rest/v1/briefings?select=slug,title,summary,photo,publish_on,author_name,author_team&order=publish_on.desc",
        headers={"apikey": key, "Accept": "application/json", **({} if key.startswith("sb_") else {"Authorization": "Bearer " + key})})
    try:
        with urllib.request.urlopen(req, timeout=20) as r:
            rows = json.load(r)
        return rows if isinstance(rows, list) else []
    except Exception as e:  # keep what is already there
        print("briefings: could not load (" + str(e) + "); existing briefing cards are kept", file=sys.stderr)
        return None


def pick(obj, lang):
    if isinstance(obj, dict):
        return obj.get(lang) or obj.get("en") or ""
    return obj or ""


def font(name, size, axes=None):
    f = ImageFont.truetype(os.path.join(FONTS, name), size)
    if axes:
        f.set_variation_by_axes(axes)
    return f


def nice_date(iso):
    try:
        y, m, d = iso[:10].split("-")
        return "%d %s %s" % (int(d), MONTHS[int(m) - 1], y)
    except Exception:
        return ""


def cover_crop(img, w, h):
    return ImageOps.fit(img.convert("RGB"), (w, h), method=Image.LANCZOS, centering=(0.5, 0.45))


def draw_seal(canvas, x, y, d):
    """The round CL seal: gold ring, italic CL."""
    dr = ImageDraw.Draw(canvas)
    dr.ellipse([x, y, x + d, y + d], fill=NAVY_DEEP + (255,), outline=GOLD, width=max(2, d // 28))
    f = font("CormorantGaramond-Italic-wght.ttf", int(d * 0.46), [600])
    dr.text((x + d / 2, y + d / 2 + d * 0.02), "CL", font=f, fill=IVORY, anchor="mm")


def circle_photo(path, d):
    im = ImageOps.fit(Image.open(path).convert("RGB"), (d, d), method=Image.LANCZOS, centering=(0.5, 0.3))
    mask = Image.new("L", (d * 4, d * 4), 0)
    ImageDraw.Draw(mask).ellipse([0, 0, d * 4 - 1, d * 4 - 1], fill=255)
    im.putalpha(mask.resize((d, d), Image.LANCZOS))
    return im


def fit_text(dr, text, fnt_name, size, axes, max_w, min_size=18):
    while size > min_size:
        f = font(fnt_name, size, axes)
        if dr.textlength(text, font=f) <= max_w:
            return f
        size -= 2
    return font(fnt_name, min_size, axes)


def make_card(cover_path, kind, author, role, author_photo):
    base = cover_crop(Image.open(cover_path), W, H) if cover_path and os.path.exists(cover_path) else Image.new("RGB", (W, H), NAVY_DEEP)
    base = base.filter(ImageFilter.GaussianBlur(0.6))
    card = base.convert("RGBA")
    # navy shade: light at the top, deep at the bottom where the author sits
    shade = Image.new("RGBA", (W, H))
    sd = ImageDraw.Draw(shade)
    for yy in range(H):
        t = yy / (H - 1)
        top = max(0.0, 1 - t / 0.28) * 0.38                       # behind the name at the top
        bottom = max(0.0, (t - 0.38) / 0.62) ** 1.2 * 0.64          # behind the author at the bottom
        a = int(255 * (0.26 + top + bottom))
        sd.line([(0, yy), (W, yy)], fill=NAVY_DEEP + (min(a, 238),))
    card = Image.alpha_composite(card, shade)
    dr = ImageDraw.Draw(card)

    # top left: seal and name of the organisation (a dispatch carries the seal at the bottom instead)
    if author_photo:
        draw_seal(card, 56, 48, 72)
        dr.text((146, 58), "THE CREDENCE", font=font("Cinzel-wght.ttf", 24, [600]), fill=IVORY)
        dr.text((146, 84), "Letters", font=font("CormorantGaramond-Italic-wght.ttf", 34, [600]), fill=GOLD)
    # top right: what kind of piece this is
    lab = KIND_LABEL[kind]
    lf = font("Cinzel-wght.ttf", 20, [700])
    tw = dr.textlength(lab, font=lf)
    bx2, by1 = W - 56, 62
    bx1 = bx2 - tw - 40
    dr.rectangle([bx1, by1, bx2, by1 + 42], outline=GOLD, width=2, fill=NAVY_DEEP + (200,))
    dr.text(((bx1 + bx2) / 2, by1 + 21), lab, font=lf, fill=GOLD, anchor="mm")

    # bottom: the author (photo or seal), name and role
    d = 132
    px, py = 56, H - 56 - d
    if author_photo and os.path.exists(author_photo):
        ring = Image.new("RGBA", (d + 12, d + 12))
        ImageDraw.Draw(ring).ellipse([0, 0, d + 11, d + 11], fill=GOLD)
        card.alpha_composite(ring, (px - 6, py - 6))
        card.alpha_composite(circle_photo(author_photo, d), (px, py))
    else:
        draw_seal(card, px, py, d)
    tx = px + d + 34
    max_w = W - tx - 56
    nf = fit_text(dr, author, "SourceSerif4-opsz-wght.ttf", 50, [600, 48], max_w, 30)
    dr.text((tx, py + 18), author, font=nf, fill=IVORY)
    if role:
        rf = fit_text(dr, role, "Cinzel-wght.ttf", 20, [600], max_w, 14)
        dr.text((tx, py + 86), role, font=rf, fill=GOLD)
    sf = font("SourceSerif4-opsz-wght.ttf", 22, [400, 20])
    dr.line([(tx, py + 124), (tx + 64, py + 124)], fill=GOLD, width=2)
    dr.text((tx + 80, py + 124), "thecredenceletters.com", font=sf, fill=(220, 228, 233), anchor="lm")
    out = io.BytesIO()
    card.convert("RGB").save(out, "JPEG", quality=84, optimize=True, progressive=True)
    return out.getvalue()


def write_if_changed(path, data):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    if isinstance(data, str):
        data = data.encode("utf-8")
    if os.path.exists(path) and open(path, "rb").read() == data:
        return False
    open(path, "wb").write(data)
    return True


PAGE = """<!doctype html>
<html lang="{lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title} · The Credence Letters</title>
<meta name="description" content="{desc}">
<meta name="robots" content="noindex, follow">
<meta property="og:type" content="article">
<meta property="og:site_name" content="The Credence Letters">
<meta property="og:title" content="{title}">
<meta property="og:description" content="{desc}">
<meta property="og:url" content="{url}">
<meta property="og:image" content="{img}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="{alt}">
<meta property="og:locale" content="{locale}">
{article}<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{title}">
<meta name="twitter:description" content="{desc}">
<meta name="twitter:image" content="{img}">
<meta name="twitter:image:alt" content="{alt}">
<link rel="icon" href="/assets/img/favicon.svg" type="image/svg+xml">
<style>body{{margin:0;min-height:100vh;display:grid;place-items:center;background:#0E2C42;color:#F5F7F6;font:18px/1.6 Georgia,serif}}main{{max-width:36rem;padding:32px 20px}}p.k{{color:#BC9A5E;letter-spacing:.2em;font-size:13px}}a{{color:#BC9A5E}}h1{{font-weight:600;line-height:1.25}}</style>
<script>location.replace({dest_js});</script>
</head>
<body>
<main>
<p class="k">THE CREDENCE LETTERS · {kind_label}</p>
<h1>{title}</h1>
<p>{by}</p>
<p><a href="{dest}">{read_on}</a></p>
</main>
</body>
</html>
"""


def page(lang, kind, title, desc, url, img, alt, dest, by, date, author):
    e = lambda s: html.escape(s or "", quote=True)
    article = ""
    if date:
        article += '<meta property="article:published_time" content="%s">\n' % e(date)
    if author:
        article += '<meta property="article:author" content="%s">\n' % e(author)
    return PAGE.format(lang=lang, title=e(title), desc=e(desc), url=e(url), img=e(img), alt=e(alt),
                       locale=LOCALE[lang], article=article, dest=e(dest), dest_js=json.dumps(dest),
                       kind_label=KIND_LABEL[kind], by=e(by), read_on=e(READ_ON[lang]))


def main():
    data = load_data()
    site = (data["config"].get("siteUrl") or "https://thecredenceletters.com").rstrip("/")
    photos, team = data["photos"], data["team"]
    by_id = {m["id"]: m for m in team}
    by_name = {m["name"]: m for m in team}

    def photo_path(key):
        p = photos.get(key or "")
        return os.path.join(ROOT, p["src"]) if p else None

    def member_bits(m):
        if not m:
            return None, None
        return (os.path.join(ROOT, m["photo"]) if m.get("photo") else None), pick(m.get("role"), "en")

    pieces = []  # (kind, id, langs, per-lang {title, desc}, dest per lang, cover, author, role, author_photo, date)
    disp = data["dispatches"]
    for d in disp.get("items", []):
        ph = d.get("photo") if d.get("photo") in photos else None
        pieces.append(dict(kind="d", id=d["id"], langs=LANGS, date=d.get("date", ""),
                           text={l: (pick(d.get("title"), l), pick(d.get("summary"), l)) for l in LANGS},
                           dest=lambda l, d=d: "/dispatches.html" + ("" if l == "en" else "?lang=" + l) + "#d-" + d["id"],
                           cover=photo_path(ph), author="The Credence Letters",
                           role="DISPATCH · " + nice_date(d.get("date", "")).upper(), author_photo=None, byline=None))
    for L in data["letters"]:
        m = by_name.get(L.get("author"))
        aph, role = member_bits(m)
        cov = (L.get("cover") or {}).get("src")
        content = L.get("content", {})
        text = {}
        for l in LANGS:
            c = content.get(l) or content.get("en") or {}
            ex = c.get("excerpt") or []
            text[l] = (c.get("title", ""), " ".join(ex) if isinstance(ex, list) else ex)
        pieces.append(dict(kind="l", id=str(L["no"]), langs=LANGS, date=L.get("date", ""), text=text,
                           dest=lambda l, L=L: "/letter.html" + ("" if l == "en" else "?lang=" + l) + "#credence-" + str(L["no"]),
                           cover=os.path.join(ROOT, cov) if cov else photo_path("nile-jinja"),
                           author=L.get("author", "The Credence Letters"), role=role, author_photo=aph, byline=L.get("author")))
    briefs = fetch_briefings(data["config"])
    for b in briefs or []:
        m = by_id.get(b.get("author_team"))
        aph, role = member_bits(m)
        name = b.get("author_name") or (m or {}).get("name") or "The Credence Letters"
        pieces.append(dict(kind="b", id=b["slug"], langs=["en"], date=b.get("publish_on", ""),
                           text={"en": (b.get("title", ""), b.get("summary", ""))},
                           dest=lambda l, b=b: "/briefings.html#b-" + b["slug"],
                           cover=photo_path(b.get("photo")) or photo_path("mekong-dusk"),
                           author=name, role=role, author_photo=aph, byline=name))

    changed = 0
    for p in pieces:
        img_bytes = make_card(p["cover"], p["kind"], p["author"], p["role"], p["author_photo"])
        img_rel = "assets/img/share/%s-%s.jpg" % (p["kind"], p["id"])
        changed += write_if_changed(os.path.join(ROOT, img_rel), img_bytes)
        img_url = "%s/%s?v=%s" % (site, img_rel, hashlib.sha1(img_bytes).hexdigest()[:8])
        for l in p["langs"]:
            title, desc = p["text"][l]
            if not title:
                continue
            name = "%s/%s%s.html" % (p["kind"], p["id"], "" if l == "en" else "." + l)
            by = BY[l].format(name=p["byline"]) if p["byline"] else "The Credence Letters"
            if p["byline"] and desc:
                desc = by + " · " + desc
            alt = ("%s by %s · The Credence Letters" % (KIND_LABEL[p["kind"]].capitalize(), p["byline"]) if p["byline"]
                   else "%s · The Credence Letters" % KIND_LABEL[p["kind"]].capitalize())
            html_text = page(l, p["kind"], title, desc, "%s/share/%s" % (site, name), img_url, alt,
                             p["dest"](l), by, p["date"], p["byline"])
            changed += write_if_changed(os.path.join(OUT_PAGES, name), html_text)
    print("share: %d pieces, %d files changed" % (len(pieces), changed))


if __name__ == "__main__":
    main()
