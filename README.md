# The Credence Letters

Website for *The Credence Letters*, an independent organisation whose goal is sustainable development in two regions of the Global South: the Great Lakes and Southeast Asia. Its lead programme, Exchange of Notes, connects scholars and practitioners from both regions in research partnership (SDG 17); its dispatches and weekly letters keep both regions informed.

The site is plain HTML, CSS and JavaScript. There is no build step, so it runs on GitHub Pages as it is.

## What is on the site

| Page | What it holds |
|---|---|
| `index.html` | Home: photo hero (the Nile and the Mekong), featured strip, our goal, key numbers, the four focus areas (named in the hero panel and shown as photo tiles), how the partnership works, latest dispatches, the map and region cards, the weekly letters, SDG 17, About (aims and fundamentals, animated), the people, take part |
| `letter.html` | The full letter. `letter.html#credence-1` opens Credence No. 1 |
| `exchange.html` | **Exchange of Notes**, the research partnership for scholars and practitioners in the Great Lakes and Southeast Asia (SDG 17): the four focus areas in detail, and the registration form. `exchange.html?theme=trafficking#register` opens the form with a focus area chosen |
| `team.html` | **Our team**, in two groups: experts (advise and carry out research) and researchers (including junior researchers who work on the ground). All cards are the same size and sit in one horizontal row that swipes on phones and scrolls sideways on laptops, with All / Experts / Researchers buttons; no hierarchy. Data from `assets/js/team.js` |
| `founders.html` | **Founders**, on their own page (members with `group: "founder"` in `assets/js/team.js`) |
| `dispatches.html` | **Dispatches**: sourced updates from the Great Lakes, the Nile Basin and Southeast Asia that bear on the partnership, with a filter by region. The newest items also rotate in the animated bar at the top of every page |
| `opportunities.html` | **Opportunities**: our own calls (Exchange of Notes, junior researchers) and checked outside fellowships, scholarships and events for both regions, with deadlines counting down and a filter by type. Items hide themselves once their deadline or event date has passed. Data in `assets/js/opportunities.js`; the three closing soonest also appear on the home page |
| `credits.html` | **Photo credits**: every photograph with its photographer, licence and link to the original, built from `assets/js/photos.js` |
| `ethics.html` | **Ethics**: five short points. Everyone is welcome to write; ethics comes in where it is needed. Linked from the footer |
| `404.html` | Page-not-found, in all four languages |

### Languages

Every page has a language switcher: **English, Français, ไทย (Thai), Kiswahili**.
The choice is remembered on the reader's device and carried between pages (`?lang=fr`, `?lang=th`, `?lang=sw`).
A letter that has no translation yet shows the English original with a short note.

The French, Thai and Kiswahili text was drafted with AI help. Have a native speaker review each language before wide promotion, especially the Thai.

## Focus areas

The Credence Letters focuses on four problems shared by both regions, in this order: border health and displacement (artemisinin-resistant malaria, mobile populations at points of entry, and refugees hosted for years as aid shrinks; key `health`); trafficking into scam compounds; shared rivers and upstream dams; cross-border trade and regional integration. Their names and texts are the `theme.*`, `theme.q.*`, `focus.tag.*` and `focus.body.*` keys in `assets/js/i18n/`. The same four are the choices on the registration form (`THEMES` in `assets/js/main.js`); old links with `?theme=refugees` or `#focus-refugees` still land on border health and displacement.

## Photographs

Photographs come from Wikimedia Commons under free licences and are credited on `credits.html` and in a caption beside each photo.

- `assets/img/photos/` holds each photo in two sizes (`name.jpg` and `name-sm.jpg`) plus `credits.json` (photographer, licence, link).
- `tools/photos/captions.json` holds the caption in English, French, Thai and Kiswahili. `python3 tools/photos/build.py` turns both into `assets/js/photos.js`.
- To add photos: on the `photo-tools` branch, list Commons search terms or file titles in `tools/photos/request.json` and push. A GitHub workflow (`.github/workflows/photos.yml`) searches or downloads them, resizes them and commits them back to that branch.
- Use only photos with a free licence (CC BY, CC BY-SA, CC0 or public domain), and no photos of public figures.

## Name

The organisation is called **The Credence Letters**, written in full (no short form). The seal reads THE CREDENCE around the top and *Letters* around the bottom, with CL in the centre. The name does not carry any person's name, so it can outlive any one founder.

## Header and footer

The header and footer are the same on every page. They live in `tools/pages.py`; after changing them there, run `python3 tools/pages.py` to update every page.

## Everyday tasks

### Connect Substack
Open `assets/js/config.js` and set `substackUrl`, for example `"https://thecpm.substack.com"`. The subscribe boxes then send readers to your Substack sign-up with their email filled in.

### Receive Exchange of Notes registrations
1. Create a free form at [formspree.io](https://formspree.io) (sign in with your email, choose *New form*).
2. Copy its endpoint, which looks like `https://formspree.io/f/abcdwxyz`.
3. Paste it into `exchangeFormEndpoint` in `assets/js/config.js`.

Until this is set, the form checks the fields and tells students that registration is not connected yet.

### Add an opportunity
Open `assets/js/opportunities.js`, set `updated` to today, and copy an item. Give it an id, type (`fellowship`, `scholarship`, `grant`, `event`, `role` or `partnership`), org, region, a `deadline` (or `rolling: true`, or `eventStart`/`eventEnd`), English title, summary and who-can-apply (French, Thai and Kiswahili when ready), the organiser's link and the date you checked it. Never guess a deadline: check it on the organiser's page. Closed items hide themselves; delete them when convenient.

### Publish dispatches
Open `assets/js/dispatches.js`. Set `updated` to today's date, then add, edit or remove items. Each item needs an `id`, a `date`, a `region` (`gl`, `nile`, `sea` or `afasia`), English `title`, `summary` and `why`, and at least one source with a link. Add `fr`, `th` and `sw` text when it is ready; until then the English shows. Put the most important item first: the bar at the top of every page starts there.

House rules: facts only, every figure attributed to its source, no political side. Each draft is reviewed and approved before it goes live.

The bar rotates every seven seconds, stops while a reader points at it or tabs into it, has a pause button, and does not move at all for readers who have turned off motion in their device settings.

### Publish a new letter
Open `assets/js/letters.js`, copy the Credence No. 1 block, raise `no` to the next number, and fill in the date, sources and the English text. Add `fr`, `th` and `sw` versions when they are ready. The newest letter automatically becomes the home page letter and hero cover.

For a cover photo, put the image in `assets/img/covers/` and set `cover` (free-licence images only, with a credit line, as in the house style).

### Add someone to the team
Put their portrait (about 4:5) in `assets/img/team/`, then copy a block in `assets/js/team.js` and fill in the id, name, photo, role, field and bio, and set `group`: `"expert"`, `"researcher"` (add `junior: true` for a junior researcher) or `"founder"`. Experts and researchers appear on the Team page in alphabetical order; founders on the Founders page. Add French, Thai and Kiswahili text when it is ready; until then the English shows. Once real researchers are listed, the "Researchers wanted" card stays at the end of the row as an invitation.

### Change the founder photo
Replace `assets/img/founder.jpg` (portrait, about 4:5).

### Show a co-founder
Add them to `assets/js/team.js`. Everyone in that file appears in The people on the home page and on the Team page, in the order listed.

### Add another language (for example Kinyarwanda or Luganda)
1. Copy `assets/js/i18n/en.js` to a new file such as `rw.js`, change `.en =` to `.rw =`, and translate the values (keep the keys).
2. Add `<script src="assets/js/i18n/rw.js"></script>` to each HTML page, next to the other language files.
3. Add `"rw"` to `languages` in `assets/js/config.js`.

## Going live on GitHub Pages

1. In the repository on GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, branch `main`, folder `/ (root)`. Save.
2. The site appears at `https://<your-username>.github.io/<repository-name>/` within a few minutes.

### Use thecredenceletters.com
1. The `CNAME` file in this repository already names `thecredenceletters.com`, so GitHub Pages picks the domain up by itself. Once the DNS records below are in place, tick **Enforce HTTPS** under **Settings → Pages** when it is offered.
2. At Namecheap: **Domain List → Manage → Advanced DNS**, remove the default parking records and add:
   - four `A` records for host `@`: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - one `CNAME` record for host `www`, value `<your-username>.github.io`
3. DNS can take up to a day to spread.

## Map

The world map on the home page is a static drawing built from [Natural Earth](https://www.naturalearthdata.com/) country outlines (public domain), with the Nile, the Mekong, Lake Victoria and Lake Tanganyika traced by hand. `tools/make-map.mjs` regenerates it.

## Folder map

```
index.html  letter.html  exchange.html  dispatches.html  team.html  founders.html  opportunities.html  ethics.html  credits.html  404.html
assets/
  css/style.css          all styles (brand colours and fonts at the top)
  img/founder.jpg        founder portrait
  img/favicon.svg        browser-tab icon
  js/config.js           Substack link, form endpoint, languages
  js/i18n/en|fr|th|sw.js interface text for each language
  js/letters.js          the letters and their translations
  js/team.js             team members, roles and bios
  js/dispatches.js       dispatches shown in the top bar and on dispatches.html
  js/photos.js           photographs, captions and credits (generated)
  js/opportunities.js    opportunities and their deadlines
  img/photos/            photographs from Wikimedia Commons, two sizes each
tools/pages.py           shared header and footer
tools/photos/            photo captions and the Commons tool
  img/team/              team portraits
  js/main.js             language switching, letter rendering, forms
```

---

The Credence Letters is an independent publication. It does not speak for any government or institution.
