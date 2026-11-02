# The Credence Letters

Website for *The Credence Letters*, an independent organisation whose goal is sustainable development in two regions of the Global South: the Great Lakes and Southeast Asia. Its lead programme, Exchange of Notes, connects scholars and practitioners from both regions in research partnership (SDG 17); its dispatches and weekly letters keep both regions informed.

The site is plain HTML, CSS and JavaScript. There is no build step, so it runs on GitHub Pages as it is.

## What is on the site

| Page | What it holds |
|---|---|
| `index.html` | Home: photo hero (the Nile and the Mekong), featured strip, our goal, key numbers, the four focus areas (named in the hero panel and shown as photo tiles), how the partnership works, latest dispatches, the map and region cards, the weekly letters, SDG 17, About (aims and fundamentals, animated), the people, take part |
| `letter.html` | The full letter. `letter.html#credence-1` opens Credence No. 1 |
| `exchange.html` | **Exchange of Notes**, the research partnership for scholars and practitioners in the Great Lakes and Southeast Asia (SDG 17): the four focus areas in detail, and the registration form. `exchange.html?theme=peace#register` opens the form with a focus area chosen |
| `team.html` | **Our team**, in two groups: experts (advise and carry out research) and researchers (including junior researchers who work on the ground). All cards are the same size and sit in one horizontal row that swipes on phones and scrolls sideways on laptops, with All / Experts / Researchers buttons; no hierarchy. Data from `assets/js/team.js` |
| `founders.html` | **Founders**, on their own page (members with `group: "founder"` in `assets/js/team.js`) |
| `dispatches.html` | **Dispatches**: sourced updates from the Great Lakes, the Nile Basin and Southeast Asia that bear on the partnership, with a filter by region. The newest items also rotate in the animated bar at the top of every page |
| `briefings.html` | **Briefings**: short, sourced pieces by the experts and researchers, published once the editor approves them on the review queue. `briefings.html#b-<slug>` opens one piece. The three newest also appear on the home page (the section stays hidden until there is one). Pieces are published in English |
| `expert.html` | **Expert desk** (not in the menu; linked as *Expert sign-in* in the footer): each expert signs in, sees ideas matched to their field, writes or uploads a piece and presses **Publish**. See *Expert desk and Briefings* below |
| `review.html` | **Review queue**, for the editor only: approve a piece for a publish date or send it back with a note |
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

The Credence Letters focuses on four problems shared by both regions, in this order: border health and displacement (artemisinin-resistant malaria, mobile populations at points of entry, and refugees hosted for years as aid shrinks; key `health`); intergovernmental relations, peace and conflict (conflict in eastern DR Congo, Sudan, South Sudan and Myanmar; the AU, EAC, IGAD, ICGLR and ASEAN; trafficking into scam compounds in conflict zones; key `peace`); shared rivers and upstream dams; cross-border trade and regional integration. Their names and texts are the `theme.*`, `theme.q.*`, `focus.tag.*` and `focus.body.*` keys in `assets/js/i18n/`. The same four are the choices on the registration form (`THEMES` in `assets/js/main.js`); old links with `?theme=refugees` or `#focus-refugees` land on border health and displacement, and `?theme=trafficking` or `#focus-trafficking` on intergovernmental relations, peace and conflict.

## Photographs

Photographs come from Wikimedia Commons under free licences and are credited on `credits.html` and in a caption beside each photo.

- `assets/img/photos/` holds each photo in two sizes (`name.jpg` and `name-sm.jpg`) plus `credits.json` (photographer, licence, link).
- `tools/photos/captions.json` holds the caption in English, French, Thai and Kiswahili. `python3 tools/photos/build.py` turns both into `assets/js/photos.js`.
- To add photos: on the `photo-tools` branch, list Commons search terms or file titles in `tools/photos/request.json` and push. A GitHub workflow (`.github/workflows/photos.yml`) searches or downloads them, resizes them and commits them back to that branch.
- Use only photos with a free licence (CC BY, CC BY-SA, CC0 or public domain), and no photos of public figures.

## Expert desk and Briefings

Experts and researchers have their own accounts at **thecredenceletters.com/expert**.

- **Ideas for you**: cards with a photo, drawn from the week's dispatches and matched to the member's field (`assets/js/ideas.js`). Tap one to read more: what is happening, why it matters, angles, suggested titles, an outline and sources. *Write about this* copies all of it into a new draft as ordinary editable text, so the expert can change every word. Members who work for a government are never given contested political disputes.
- **Writing**: type or paste into the box (a blank line between paragraphs, `## ` for a subheading), or upload a Word, PDF, OpenDocument, RTF or text file up to 20 MB. The words of a Word (.docx) or text file are placed in the box for editing; the file stays attached for the editor. Drafts save automatically.
- **The button**: red **PUBLISH** → orange **WAITING APPROVAL** → green **APPROVED** (with the publish date). While a piece waits it is locked; *Withdraw to make changes* turns it back into a draft. An approved piece can be reopened with *Make changes*, which takes it off the schedule (or off the site) until it is approved again.
- **Review queue** (`review.html`, editor only): pieces waiting approval, scheduled, published, sent back and being written. Read the piece as it will look, make light edits, then approve it for today, tomorrow or another day, or send it back with a note. The author sees the result on their desk.
- **Briefings** shows approved pieces from their publish date (Bangkok time), with the author's name, field and photo from `team.js`, and the note that members write in a personal capacity.

The rules live in the database, not only in the pages: experts can only see and change their own pieces, only the editor can approve or return one, and the public can read nothing but published briefings. Passwords are handled by Supabase; nobody else can see them.

**Try it before setting anything up**: open `expert.html?preview` (an expert's desk), `review.html?preview` (the editor's queue) and `briefings.html?preview`. Any email and password will do; sample data stays in that browser tab.

### Set up the accounts (once)

Accounts, drafts and uploads are kept in [Supabase](https://supabase.com) (free plan).

1. Create a Supabase account and a new project (a region near both regions, such as Singapore).
2. In the project's **SQL Editor**, paste all of `supabase/schema.sql` and run it.
3. Under **Authentication**: turn off new sign-ups (accounts are by invitation only); set the **Site URL** to `https://thecredenceletters.com/expert.html`; add `https://thecredenceletters.com/expert.html` and `https://thecredenceletters.com/review.html` to the **Redirect URLs**.
4. Under **Authentication → Users**, invite each expert by email, and yourself. Each person gets an email, clicks the link and chooses their own password on the desk.
5. In the SQL Editor, link each account to its team member and make yourself the editor (put in the real email addresses):

   ```sql
   update public.profiles p set name = 'Dominick Damian Msalila', team_id = 'dominick'
     from auth.users u where u.id = p.id and u.email = 'DOMINICK_EMAIL';
   update public.profiles p set name = 'Yidnekachew Addis', team_id = 'yidnekachew'
     from auth.users u where u.id = p.id and u.email = 'YIDNEKACHEW_EMAIL';
   update public.profiles p set name = 'Aaron Mwesigwa Mwebaze', team_id = 'aaron', role = 'editor'
     from auth.users u where u.id = p.id and u.email = 'YOUR_EMAIL';
   ```

6. From the project's API settings, copy the **Project URL** and the **publishable key** (or the legacy *anon* key) into `supabaseUrl` and `supabaseKey` in `assets/js/config.js`. Both are meant to be public. Never use the secret or *service_role* key on the site.

Supabase pauses free projects after about a week with little use. Every visit to the home page or Briefings reads from the project, which counts as use; a paused project can be resumed from the Supabase dashboard.

### Add an expert or researcher later
Add them to `assets/js/team.js` (see *Add someone to the team*), invite their email in Supabase, then run the `update public.profiles …` line above with their name, team id and email. Use `role = 'researcher'` for researchers.

### Refresh the ideas
`assets/js/ideas.js` is refreshed with the daily dispatches draft. Each idea names the team members it is `for`, a focus area, a photo, the related dispatch, and its sources. The facts in `story` and `why` come from the sources; the angles, titles and outline are only suggestions. Never give a member who works for a government an idea on a contested political dispute.

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
index.html  letter.html  exchange.html  dispatches.html  briefings.html  team.html  founders.html  opportunities.html  ethics.html  credits.html  404.html
expert.html  review.html   the expert desk and the editor's review queue (not in the menu)
supabase/schema.sql       accounts, pieces, approval rules and uploads (run once in Supabase)
assets/
  css/style.css          all styles (brand colours and fonts at the top)
  img/founder.jpg        founder portrait
  img/favicon.svg        browser-tab icon
  css/desk.css           styles for the expert desk and review queue
  js/config.js           Substack link, form endpoint, Supabase settings, languages
  js/ideas.js            ideas shown on the expert desk
  js/desk.js             expert desk: sign-in, saving, uploads (shared by expert.html and review.html)
  js/expert.js           the expert desk page
  js/review.js           the review queue page
  js/textformat.js       turns a piece's plain text into the published page
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
