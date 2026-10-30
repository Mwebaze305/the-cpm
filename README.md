# The Credence par Mwesigwa (The CPM)

Website for *The Credence par Mwesigwa*: weekly letters on security and governance in the Great Lakes and on Africa–Southeast Asia relations, by Aaron Mwesigwa Mwebaze.

The site is plain HTML, CSS and JavaScript. There is no build step, so it runs on GitHub Pages as it is.

## What is on the site

| Page | What it holds |
|---|---|
| `index.html` | Home: hero with this week's cover, capitals band, this week's letter, the Nile–Mekong map, Exchange of Notes, Founder, subscribe |
| `letter.html` | The full letter. `letter.html#credence-1` opens Credence No. 1 |
| `exchange.html` | **Exchange of Notes**, the student research partnership (SDG 17), with the registration form |
| `404.html` | Page-not-found, in all four languages |

### Languages

Every page has a language switcher: **English, Français, ไทย (Thai), Kiswahili**.
The choice is remembered on the reader's device and carried between pages (`?lang=fr`, `?lang=th`, `?lang=sw`).
A letter that has no translation yet shows the English original with a short note.

The French, Thai and Kiswahili text was drafted with AI help. Have a native speaker review each language before wide promotion, especially the Thai.

## Everyday tasks

### Connect Substack
Open `assets/js/config.js` and set `substackUrl`, for example `"https://thecpm.substack.com"`. The subscribe boxes then send readers to your Substack sign-up with their email filled in.

### Receive Exchange of Notes registrations
1. Create a free form at [formspree.io](https://formspree.io) (sign in with your email, choose *New form*).
2. Copy its endpoint, which looks like `https://formspree.io/f/abcdwxyz`.
3. Paste it into `exchangeFormEndpoint` in `assets/js/config.js`.

Until this is set, the form checks the fields and tells students that registration is not connected yet.

### Publish a new letter
Open `assets/js/letters.js`, copy the Credence No. 1 block, raise `no` to the next number, and fill in the date, sources and the English text. Add `fr`, `th` and `sw` versions when they are ready. The newest letter automatically becomes the home page letter and hero cover.

For a cover photo, put the image in `assets/img/covers/` and set `cover` (free-licence images only, with a credit line, as in the house style).

### Change the founder photo
Replace `assets/img/founder.jpg` (portrait, about 4:5).

### Add another language (for example Kinyarwanda or Luganda)
1. Copy `assets/js/i18n/en.js` to a new file such as `rw.js`, change `.en =` to `.rw =`, and translate the values (keep the keys).
2. Add `<script src="assets/js/i18n/rw.js"></script>` to each HTML page, next to the other language files.
3. Add `"rw"` to `languages` in `assets/js/config.js`.

## Going live on GitHub Pages

1. In the repository on GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, branch `main`, folder `/ (root)`. Save.
2. The site appears at `https://<your-username>.github.io/<repository-name>/` within a few minutes.

### Use thecredenceletters.com
1. In GitHub: **Settings → Pages → Custom domain**, enter `thecredenceletters.com`, save, then tick **Enforce HTTPS** once it is offered.
2. At Namecheap: **Domain List → Manage → Advanced DNS**, remove the default parking records and add:
   - four `A` records for host `@`: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - one `CNAME` record for host `www`, value `<your-username>.github.io`
3. DNS can take up to a day to spread.

## Folder map

```
index.html  letter.html  exchange.html  404.html
assets/
  css/style.css          all styles (brand colours and fonts at the top)
  img/founder.jpg        founder portrait
  img/favicon.svg        browser-tab icon
  js/config.js           Substack link, form endpoint, languages
  js/i18n/en|fr|th|sw.js interface text for each language
  js/letters.js          the letters and their translations
  js/main.js             language switching, letter rendering, forms
```

---

The Credence par Mwesigwa is an independent publication. It does not speak for any government or institution.
