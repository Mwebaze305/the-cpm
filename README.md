# The Credence Letters

Website for *The Credence Letters*, an independent, solutions-based think tank whose goal is sustainable development in three regions of the Global South: the Great Lakes, the Nile Basin and Southeast Asia. Its lead programme, Exchange of Notes, pairs scholars and practitioners from Africa and Southeast Asia in research partnership (SDG 17); its dispatches and weekly letters keep both regions informed.

The site is plain HTML, CSS and JavaScript. There is no build step, so it runs on GitHub Pages as it is.

## What is on the site

| Page | What it holds |
|---|---|
| `index.html` | Home: a plain introduction first: who we are (an independent think tank connecting the Great Lakes, the Nile Basin and Southeast Asia), the solutions line ("We name problems honestly, and we never stop there: every piece we publish ends with a practical solution."), what we do (connect people through Exchange of Notes; research and analyse, with the four focus areas; keep our regions informed), and two buttons (join the partnership, read our analysis). Beside it, a narrow **Latest** column on the right (below the introduction on phones) that moves up one story every 4.5 seconds: the newest dispatches, letters and briefings, with an open opportunity every fourth item, each with a picture, a label (DISPATCH, LETTER, BRIEFING, OPPORTUNITY) and the headline. It pauses while the pointer or keyboard focus is on it, has a pause button, and stays still for readers who ask for reduced motion. Then our goal and key numbers, the focus-area tiles, how the partnership works, the map, SDG 17, About, the people, take part. The Dispatches bar is left off the home page (the Latest column does that job there) |
| `letter.html` | A weekly letter: `letter.html#credence-2` opens Credence No. 2. Old links to `#credence-1` go to the founder's note, which Credence No. 1 became |
| `exchange.html` | **Exchange of Notes**, the research partnership for scholars and practitioners in the Great Lakes, the Nile Basin and Southeast Asia (SDG 17). Its signature, also on the home page: "Two regions, one problem, one solution, written together": each note pairs an author from the Great Lakes or the Nile Basin with one from Southeast Asia, carrying a proven solution from one region to the other. Then the four focus areas in detail, and the registration form (countries grouped Great Lakes, Nile Basin, Southeast Asia). `exchange.html?theme=peace#register` opens the form with a focus area chosen |
| `team.html` | **Our team**, in two groups: experts (advise and carry out research) and researchers (work on the ground). A last card, **Researchers wanted** ("We're looking for colleagues and students to research with us."), opens `researchers.html`. All cards are the same size and sit in one horizontal row that swipes on phones and scrolls sideways on laptops, with All / Experts / Researchers buttons; no hierarchy. The founder, Aaron, is also on this page, as a researcher (card labelled FOUNDER · RESEARCHER). Data from `assets/js/team.js` |
| `researchers.html` | **Researchers wanted**: what researchers do, who can apply (university students, and researchers at any stage, from or based in the Great Lakes, the Nile Basin or Southeast Asia), what to expect (a volunteer role; free; personal capacity; government employees are not asked to write on contested political disputes) and an application form. It uses the same form code as Exchange of Notes, with its own messages and roles (`data-levels`, `data-msg-*` on the form). Linked from the Team page card, Opportunities and the footer |
| `founders.html` | **Founders**, on their own page (members with `group: "founder"` in `assets/js/team.js`; a founder who also works in the team has `team: "researcher"` or `team: "expert"` and appears on the Team page too), followed by the founder's note **Why a letter of credence** (`founders.html#why`, text in `assets/js/founder-note.js`) |
| `dispatches.html` | **Dispatches**: sourced updates from the Great Lakes, the Nile Basin and Southeast Asia that bear on the partnership, with a filter by region. The newest items also rotate in the animated bar at the top of every page except the home page, and appear in the home page's Latest column |
| `briefings.html` | **Analysis** (menu: ANALYSIS): the weekly letters and the briefings in one list, newest first, each labelled LETTER or BRIEFING. Letters open on `letter.html`; briefings are short, sourced pieces by the experts and researchers, published once the editor approves them on the review queue. `briefings.html#b-<slug>` opens one piece. New pieces also appear in the home page's Latest column. Pieces are published in English |
| `expert.html` | **Expert desk**, for the team only: not linked anywhere on the site; share the address (thecredenceletters.com/expert) with team members directly. Each member signs in with their name and password, sees ideas matched to their field, writes or uploads a piece and presses **Publish**. See *Expert desk and Briefings* below |
| `review.html` | **Review queue**, for the editor only: approve a piece for a publish date or send it back with a note |
| `opportunities.html` | **Opportunities**: our own calls (Exchange of Notes, Researchers wanted) and checked outside fellowships, scholarships and events for our three regions, with deadlines counting down and a filter by type. Items hide themselves once their deadline or event date has passed. Data in `assets/js/opportunities.js`; open outside opportunities also appear in the home page's Latest column |
| `credits.html` | **Photo credits**: every photograph with its photographer, licence and link to the original, built from `assets/js/photos.js` |
| `ethics.html` | **Independence and standards** (footer link; the address stays ethics.html so old links work): the solutions line under the title; no institutional positions (each piece carries its authors' conclusions only); funding (none from outside, the team's volunteer time; every funder, amount and purpose will be published here if that changes; no money from unidentifiable sources or with conditions on findings); evidence and review; citing our work; write with us (`ethics.html#write`). Ideas drawn from Chatham House, Brookings, Lowy, ISS Africa, ISEAS/Fulcrum and the Transparify funding-transparency standard |
| `404.html` | Page-not-found, in all four languages |

### Languages

Every page has a language switcher: **English, Français, ไทย (Thai), Kiswahili**.
The choice is remembered on the reader's device and carried between pages (`?lang=fr`, `?lang=th`, `?lang=sw`).
A letter that has no translation yet shows the English original with a short note.

The French, Thai and Kiswahili text was drafted with AI help. Have a native speaker review each language before wide promotion, especially the Thai.

## Focus areas

The Credence Letters focuses on four problems shared by our three regions, in this order: border health and displacement (artemisinin-resistant malaria, mobile populations at points of entry, and refugees hosted for years as aid shrinks; key `health`); intergovernmental relations, peace and conflict (conflict in eastern DR Congo, Sudan, South Sudan and Myanmar; the AU, EAC, IGAD, ICGLR and ASEAN; trafficking into scam compounds in conflict zones; key `peace`); shared rivers and upstream dams; cross-border trade and regional integration. Their names and texts are the `theme.*`, `theme.q.*`, `focus.tag.*` and `focus.body.*` keys in `assets/js/i18n/`. The same four are the choices on the registration form (`THEMES` in `assets/js/main.js`); old links with `?theme=refugees` or `#focus-refugees` land on border health and displacement, and `?theme=trafficking` or `#focus-trafficking` on intergovernmental relations, peace and conflict.

## Photographs

Photographs come from Wikimedia Commons under free licences and are credited on `credits.html` and in a caption beside each photo.

- `assets/img/photos/` holds each photo in two sizes (`name.jpg` and `name-sm.jpg`) plus `credits.json` (photographer, licence, link).
- `tools/photos/captions.json` holds the caption in English, French, Thai and Kiswahili. `python3 tools/photos/build.py` turns both into `assets/js/photos.js`.
- To add photos: on the `photo-tools` branch, list Commons search terms or file titles in `tools/photos/request.json` and push. A GitHub workflow (`.github/workflows/photos.yml`) searches or downloads them, resizes them and commits them back to that branch.
- Use only photos with a free licence (CC BY, CC BY-SA, CC0 or public domain), and no photos of public figures.

## Expert desk and Briefings

Team members have their own accounts at **thecredenceletters.com/expert**. The page is not linked from the site: share the address with team members directly. It is also hidden from search engines.

- **Signing in**: members choose their name from the list and type their password. The first time, they choose **First time here**, pick their name, enter the one-time **setup code** the editor gave them, and create their own password (twice). The code stops working once they have a password. Nobody can enter another member's account without that member's code or password, and readers cannot create accounts (see *Accounts* below).
- **Ideas for you**: cards with a photo, drawn from the week's dispatches and matched to the member's field (`assets/js/ideas.js`). Tap one to read more: what is happening, why it matters, angles, suggested titles, an outline and sources. *Write about this* copies all of it into a new draft as ordinary editable text, so the member can change every word. Members who work for a government are never given contested political disputes.
- **Writing**: type or paste into the box (a blank line between paragraphs, `## ` for a subheading), or upload a Word, PDF, OpenDocument, RTF or text file up to 20 MB. The words of a Word (.docx) or text file are placed in the box for editing; the file stays attached for the editor. Drafts save automatically.
- **The button**: red **PUBLISH** → orange **WAITING APPROVAL** → green **APPROVED** (with the publish date). While a piece waits it is locked; *Withdraw to make changes* turns it back into a draft. An approved piece can be reopened with *Make changes*, which takes it off the schedule (or off the site) until it is approved again.
- **Review queue** (`review.html`, editor only): pieces waiting approval, scheduled, published, sent back and being written. Read the piece as it will look, make light edits, then approve it for today, tomorrow or another day, or send it back with a note. The author sees the result on their desk.
- **Briefings** shows approved pieces from their publish date (Bangkok time), with the author's name, field and photo from `team.js`, and the note that members write in a personal capacity.

The rules live in the database, not only in the pages: members can only see and change their own pieces, only the editor can approve or return one, and the public can read nothing but published briefings. Passwords are handled by Supabase; nobody else can see them.

**Trying it on a test copy**: on your own computer (served at `localhost`), `expert.html?preview`, `review.html?preview` and `briefings.html?preview` run on sample data with sample names (setup code `sample-code`). On the live site `?preview` does nothing.

### Accounts

Accounts, drafts and uploads are kept in [Supabase](https://supabase.com) (free plan), in the project **credence-letters** (Singapore). `supabase/schema.sql` has already been run there, and `assets/js/config.js` holds the project address and its publishable key (both meant to be public; never put the secret or *service_role* key on the site).

**Only the team can have accounts.** The database keeps the team list (`desk.members`: Aaron as editor, Dominick and Yidnekachew as experts, Ohn as a researcher) and refuses any other account, so readers and outsiders cannot sign up even if they find the page. Behind the scenes each member's login is their id from `team.js` followed by `@desk.thecredenceletters.com` (for example `dominick@desk.thecredenceletters.com`). These addresses receive no email; members only ever see their name.

**Add a member's account** (in the Supabase dashboard, project *credence-letters*):
1. **Authentication → Users → Add user → Create new user**.
2. Email: their id + `@desk.thecredenceletters.com`. Password: their one-time setup code. Tick **Auto Confirm User**, so no email is sent.
3. Give them the code privately (in person or by private message) with the address thecredenceletters.com/expert. They choose *First time here*, pick their name, enter the code and create their own password.

Also under **Authentication → Sign In / Providers**, keep **Allow new users to sign up** turned off. The database already refuses anyone not on the team list; this closes the gap before a listed member's account is created.

**Add someone new to the team** (a new researcher, say): add them to `assets/js/team.js` (see *Add someone to the team*) so their name appears in the sign-in list, add them to the team list in Supabase's **SQL Editor**:

```sql
insert into desk.members (team_id, name, role) values ('their-id', 'Their Full Name', 'researcher');
```

then create their account as above.

**Forgotten password**: Supabase cannot set a password from the dashboard. Ask Claude in this project to issue a new setup code for that member; they then choose *First time here* again. Their pieces are kept.

Supabase pauses free projects after about a week with little use. Every visit to the home page or Briefings reads from the project, which counts as use; a paused project can be resumed from the Supabase dashboard.

### Refresh the ideas
`assets/js/ideas.js` is refreshed with the daily dispatches draft. Each idea names the team members it is `for`, a focus area, a photo, the related dispatch, and its sources. The facts in `story` and `why` come from the sources; the angles, titles and outline are only suggestions. Never give a member who works for a government an idea on a contested political dispute.

## Sharing

Every dispatch, letter and briefing has a **Share** button. On phones it opens the phone's own share menu; on laptops it offers WhatsApp, Facebook, X, LinkedIn, Telegram, email and *Copy link*.

The link it shares is the piece's page under `share/` (for example `share/d/ebola.html`, or `share/d/ebola.fr.html` in French). Social sites do not run JavaScript, so each of these small pages carries the piece's own preview tags: title, summary and a card image, `assets/img/share/<kind>-<id>.jpg` (1200 × 630). The card blends the story's cover photo with the author's photo, name and role, the kind of piece and thecredenceletters.com. Dispatches have no author, so their card carries the seal and "The Credence Letters" (team names on dispatches show matching expertise, not authorship). A reader who opens a share link goes straight on to the piece.

`tools/share/build.py` makes these pages and cards (`kind`: `d` dispatch, `l` letter, `b` briefing). The workflow `.github/workflows/share.yml` runs it on GitHub after any change to the dispatches, letters, team or photos, and every three hours to pick up newly published briefings, and commits what changed ("Share cards: update"). Until a briefing's card exists, its Share button shares the briefing's own address. Old share pages are kept, so links already posted keep working. To run it by hand: `pip install pillow` and `python3 tools/share/build.py`. Fonts for the cards are in `tools/share/fonts` (SIL Open Font Licence).

To refresh a card that a social site has cached, paste the link into Facebook's Sharing Debugger or LinkedIn's Post Inspector; the image address changes whenever the card does, so new shares pick it up on their own.

## Colours

The palette is **Partnership Navy**, chosen in November 2026 after a colour study of development and partner institutions (UN agencies, the African Union and AfDB, ASEAN and ADB, funders and think tanks). Navy reads as trust and seriousness and sits comfortably beside those partners without copying any one of them; a muted gold marks the seal and calls to action; cool ivory and white keep pages light. No national flag colours or government styling, and no party colours of either region.

| Token | Hex | Use |
|---|---|---|
| `--navy` | `#19486A` | header, hero, buttons, headings |
| `--navy-deep` | `#0E2C42` | dark panels, footer |
| `--gold` | `#BC9A5E` | seal, labels, primary buttons |
| `--gold-ink` | `#6F552A` | gold text on light backgrounds |
| `--ivory` | `#F5F7F6` | page background |
| `--ink` | `#10293B` | body text |

The four focus areas carry their Sustainable Development Goal colours, as a thin bar or border only (never as a background behind text): border health and displacement `#4C9F38` (SDG 3), intergovernmental relations, peace and conflict `#00689D` (SDG 16), shared rivers `#26BDE2` (SDG 6), cross-border trade `#A21942` (SDG 8). They are the `--fa-*` tokens and the `fa-health`, `fa-peace`, `fa-rivers`, `fa-trade` classes in `assets/css/style.css`. Translucent layers use the RGB tokens (`--navy-rgb`, `--deep-rgb`, `--gold-rgb`, …) as `rgba(var(--navy-rgb), 0.8)`, so a future change of colour is made in one place.

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
Open `assets/js/dispatches.js`. Set `updated` to today's date, then add, edit or remove items. Each item needs an `id`, a `date`, a `region` (`gl`, `nile`, `sea` or `afasia`), English `title`, `summary` and `why`, and at least one source with a link. Add `fr`, `th` and `sw` text when it is ready; until then the English shows. Put the most important item first: the bar at the top of the other pages starts there. The home page's Latest column orders everything by date.

House rules: facts only, every figure attributed to its source, no political side. Each draft is reviewed and approved before it goes live.

The bar rotates every seven seconds, stops while a reader points at it or tabs into it, has a pause button, and does not move at all for readers who have turned off motion in their device settings.

### Publish a new letter
Letters are written in plain, direct prose, with no "Excellency," and no diplomatic closing; they keep the label *Credence No.* and its number. Every letter and every briefing ends with a short section headed **What should be done**: the practical solution (a standard listed under *Evidence and review* on the Independence and standards page). In `letters.js` that is a last `{ h2: "What should be done" }` followed by its paragraphs; on the expert desk, a last `## What should be done`. Credence No. 1 is now the founder's note (see below), so the weekly letters continue from **Credence No. 2**.

Open `assets/js/letters.js`, copy the template in its header into the list, set `no`, and fill in the date, sources and the English text. Add `fr`, `th` and `sw` versions when they are ready. The newest letter automatically appears in the home page's Latest column and in Analysis. Until there is a letter, the home page leaves it out and says the first letters and briefings are on their way.

### The founder's note
*Why a letter of credence* explains the name: an ambassador's letter of credence asks for trust, and trust is what The Credence Letters has to earn from readers, the public and partners. It sits on the Founders page (`founders.html#why`) with the founder's photo and signature. The text is in `assets/js/founder-note.js`: English now; add `fr`, `th` and `sw` versions there when they are ready (until then readers of those languages see the English with a short note).

For a cover photo, put the image in `assets/img/covers/` and set `cover` (free-licence images only, with a credit line, as in the house style).

### Add someone to the team
Put their portrait (about 4:5) in `assets/img/team/`, then copy a block in `assets/js/team.js` and fill in the id, name, photo, role, field and bio, and set `group`: `"expert"`, `"researcher"` or `"founder"`. Experts and researchers appear on the Team page in alphabetical order; founders on the Founders page. To show a founder on the Team page as well, add `team: "researcher"` or `team: "expert"` (Aaron has `team: "researcher"`); founders without it appear on the Founders page only. Add French, Thai and Kiswahili text when it is ready; until then the English shows. Once real researchers are listed, the "Researchers wanted" card stays at the end of the row as an invitation.

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
expert.html  review.html   the expert desk and the editor's review queue (not linked from the site)
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
  js/letters.js          the weekly letters and their translations
  js/founder-note.js     the founder's note, Why a letter of credence (Founders page)
  js/team.js             team members, roles and bios
  js/dispatches.js       dispatches shown in the top bar, the home page's Latest column and on dispatches.html
  (share/ and img/share/ are built by tools/share/build.py: see Sharing)
  js/photos.js           photographs, captions and credits (generated)
  js/opportunities.js    opportunities and their deadlines
  img/photos/            photographs from Wikimedia Commons, two sizes each
tools/pages.py           shared header and footer
tools/photos/            photo captions and the Commons tool
  img/team/              team portraits
  js/main.js             language switching, letter rendering, forms
```

---

The Credence Letters is an independent think tank. It takes no institutional positions and does not speak for any government or institution.
