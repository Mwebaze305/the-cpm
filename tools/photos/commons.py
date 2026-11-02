"""Find and fetch free-licence photos from Wikimedia Commons.

Runs on GitHub's servers (see .github/workflows/photos.yml), driven by
tools/photos/request.json:
  {"search": [{"q": "Source of the Nile Jinja", "n": 8}, ...],
   "get":    [{"title": "File:....jpg", "out": "nile-jinja", "width": 1920}, ...]}
search -> tools/photos/candidates/<slug>-<i>.jpg (640px) + candidates.json
get    -> assets/img/photos/<out>.jpg (+ <out>-sm.jpg, 800px) + credits.json
"""
import json, os, re, sys, time, html, io, urllib.parse, urllib.request
from PIL import Image

UA = "TheCPM-site-builder/1.0 (https://thecredenceletters.com)"
API = "https://commons.wikimedia.org/w/api.php"
ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

def get(url, tries=4):
    for i in range(tries):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": UA})
            with urllib.request.urlopen(req, timeout=60) as r:
                return r.read()
        except Exception as e:
            print("retry", i, url[:120], e); time.sleep(3 * (i + 1))
    raise RuntimeError("failed " + url)

def api(params):
    params = dict(params, format="json", formatversion="2")
    return json.loads(get(API + "?" + urllib.parse.urlencode(params)))

def clean(s):
    s = re.sub(r"<[^>]+>", "", s or "")
    return html.unescape(re.sub(r"\s+", " ", s)).strip()

def meta(page):
    ii = page["imageinfo"][0]
    em = ii.get("extmetadata", {})
    v = lambda k: clean(em.get(k, {}).get("value", ""))
    return {
        "title": page["title"], "page": ii.get("descriptionurl"),
        "artist": v("Artist"), "credit": v("Credit"), "license": v("LicenseShortName"),
        "licenseUrl": v("LicenseUrl"), "desc": v("ImageDescription")[:300],
        "date": v("DateTimeOriginal")[:20], "w": ii.get("width"), "h": ii.get("height"),
        "thumb": ii.get("thumburl"),
    }

def save_jpeg(data, path, width):
    im = Image.open(io.BytesIO(data)).convert("RGB")
    if im.width > width:
        im = im.resize((width, round(im.height * width / im.width)), Image.LANCZOS)
    os.makedirs(os.path.dirname(path), exist_ok=True)
    im.save(path, "JPEG", quality=80, optimize=True, progressive=True)
    return im.size

def do_search(items):
    out_dir = os.path.join(ROOT, "tools/photos/candidates")
    os.makedirs(out_dir, exist_ok=True)
    index = []
    for it in items:
        slug = re.sub(r"[^a-z0-9]+", "-", it["q"].lower()).strip("-")[:40]
        res = api({"action": "query", "generator": "search", "gsrsearch": it["q"] + " filetype:bitmap",
                   "gsrnamespace": 6, "gsrlimit": it.get("n", 8), "prop": "imageinfo",
                   "iiprop": "url|extmetadata|size", "iiurlwidth": 640})
        pages = sorted(res.get("query", {}).get("pages", []), key=lambda p: p.get("index", 0))
        for i, p in enumerate(pages):
            if "imageinfo" not in p: continue
            m = meta(p)
            if (m["w"] or 0) < 1200: continue
            fn = f"{slug}-{i}.jpg"
            try:
                save_jpeg(get(m["thumb"]), os.path.join(out_dir, fn), 640)
            except Exception as e:
                print("skip", m["title"], e); continue
            m.update(file=fn, query=it["q"]); index.append(m)
            time.sleep(0.5)
    json.dump(index, open(os.path.join(out_dir, "candidates.json"), "w"), ensure_ascii=False, indent=1)
    print("candidates", len(index))

def do_get(items):
    credits_path = os.path.join(ROOT, "assets/img/photos/credits.json")
    credits = json.load(open(credits_path)) if os.path.exists(credits_path) else {}
    for it in items:
        res = api({"action": "query", "titles": it["title"], "prop": "imageinfo",
                   "iiprop": "url|extmetadata|size", "iiurlwidth": it.get("width", 1920)})
        p = res["query"]["pages"][0]
        m = meta(p)
        data = get(m["thumb"])
        base = os.path.join(ROOT, "assets/img/photos", it["out"])
        size = save_jpeg(data, base + ".jpg", it.get("width", 1920))
        save_jpeg(data, base + "-sm.jpg", 800)
        m.update(out=it["out"], saved=size); m.pop("thumb", None)
        credits[it["out"]] = m
        print("got", it["out"], size, m["license"], m["artist"][:60])
        time.sleep(0.5)
    json.dump(credits, open(credits_path, "w"), ensure_ascii=False, indent=1)

if __name__ == "__main__":
    req = json.load(open(os.path.join(ROOT, "tools/photos/request.json")))
    if req.get("search"): do_search(req["search"])
    if req.get("get"): do_get(req["get"])
