# The Credence Letters

Website for *The Credence Letters*, an independent, solutions-based think tank whose goal is sustainable development in three regions of the Global South: the Great Lakes, the Nile Basin and Southeast Asia. Its lead programme, Exchange of Notes, pairs scholars and practitioners from Africa and Southeast Asia in research partnership (SDG 17); its weekly letters and briefings carry the team's analysis. Daily dispatches feed the team's research on two private team pages.

The site is plain HTML, CSS and JavaScript. There is no build step, so it runs on GitHub Pages as it is.

## What is on the site

| Page | What it holds |
|---|---|
| `index.html` | Home: a plain introduction first: who we are (an independent think tank connecting the Great Lakes, the Nile Basin and Southeast Asia), the solutions line ("We name problems honestly, and we never stop there: every piece we publish ends with a practical solution."), what we do (connect people through Exchange of Notes; research and analyse, with the four focus areas; keep our regions informed: open opportunities), and two buttons (join the partnership, read our analysis). Beside it, a narrow **Latest** column on the right (below the introduction on phones) that moves up one story every 4.5 seconds: the newest letters and briefings, with an open opportunity every fourth item, each with a picture, a label (LETTER, BRIEFING, OPPORTUNITY) and the headline. It pauses while the pointer or keyboard focus is on it, has a pause button, and stays still for readers who ask for reduced motion. Then our goal and key numbers, the focus-area tiles, how the partnership works, the map, SDG 17, About, the people, take part. |
| `letter.html` | A weekly letter: `letter.html#credence-2` opens Credence No. 2. Old links to `#credence-1` go to the founder's note, which Credence No. 1 became |
| `exchange.html` | **Exchange of Notes**, the research partnership for scholars and practitioners in the Great Lakes, the Nile Basin and Southeast Asia (SDG 17). Its signature, also on the home page: "Two regions, one problem, one solution, written together": each note pairs an author from the Great Lakes or the Nile Basin with one from Southeast Asia, carrying a proven solution from one region to the other. Then the four focus areas in detail, and the registration form (countries grouped Great Lakes, Nile Basin, Southeast Asia). `exchange.html?theme=peace#register` opens the form with a focus area chosen |
| `team.html` | **Our team**, in two groups: experts (advise and carry out research) and researchers (work on the ground). A last card, **Researchers wanted** ("We're looking for colleagues and students to research with us."), opens `researchers-wanted.html`. All cards are the same size and sit in one horizontal row that swipes on phones and scrolls sideways on laptops, with All / Experts / Researchers buttons; no hierarchy. The founder, Aaron, is also on this page, as a researcher (card labelled FOUNDER · RESEARCHER). Data from `assets/js/team.js` |
| `researchers-wanted.html` | **Researchers wanted** (public; it was `researchers.html` until 10 Nov 2026, when that address became the private researchers page): what researchers do, who can apply (university students, and researchers at any stage, from or based in the Great Lakes, the Nile Basin or Southeast Asia), what to expect (a volunteer role; free; personal capacity; government employees are not asked to write on contested political disputes) and an application form. It uses the same form code as Exchange of Notes, with its own messages and roles (`data-levels`, `data-msg-*` on the form). Linked from the Team page card, Opportunities and the footer |
| `founders.html` | **Founders**, on their own page (members with `group: "founder"` in `assets/js/team.js`; a founder who also works in the team has `team: "researcher"` or `team: "expert"` and appears on the Team page too), followed by the founder's note **Why a letter of credence** (`founders.html#why`, text in `assets/js/founder-note.js`) |
| `dispatches.html` | Forwards old links to Analysis. Dispatches left the public site on 10 Nov 2026: they now live on the team pages (see *Team pages*) |
| `briefings.html` | **Analysis** (menu: ANALYSIS): the weekly letters and the briefings in one list, newest first, each labelled LETTER or BRIEFING. Letters open on `letter.html`; briefings are short, sourced pieces by the experts and researchers, published once an expert or the editor approves them on the experts page. `briefings.html#b-<slug>` opens one piece. New pieces also appear in the home page's Latest column. Pieces are published in English |
| `researchers.html` | **Researchers**, a private team page (thecredenceletters.com/researchers). See *Team pages* below |
| `experts.html` | **Experts**, a private team page (thecredenceletters.com/experts). See *Team pages* below. `expert.html` and `review.html` (the old expert desk and review queue) forward here |
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

## Team pages and Briefings

Two private pages for the team: **thecredenceletters.com/researchers** and **thecredenceletters.com/experts**. Neither is linked from the site or listed by search engines; share the addresses with team members directly. Anyone else who finds them sees only a sign-in and a link to *Researchers wanted*.

- **Signing in** has three steps: *Expert* or *Researcher*; then the member's name from that list; then their password. Experts and the editor are on the experts list; researchers, the founder and the experts (who may also write as researchers) are on the researchers list. The first time, members choose *First time here, or have a new setup code?*, enter the one-time **setup code** the editor gave them and create their own password. Choosing the other role takes them to the other page.
- **Two-step sign-in**: experts and the editor must add an authenticator app (Google Authenticator, Microsoft Authenticator, 2FAS) the first time they open the experts page, because their approval publishes a piece; the database accepts reviews only from a session that gave the code. Researchers can turn it on from *Two-step sign-in* in the top bar.
- **Departments**: **Public health** (`health`) and **Governance and development** (`gov`: international relations, peace and conflict, economics and development, trade, shared rivers). Each expert belongs to one (`dept` in `team.js` and in `desk.members`). Researchers choose a department tab, and each piece belongs to one.
- **Dispatches** (researchers page): the current dispatches from `assets/js/dispatches.js`, by department, each with two or three **questions to research** from `assets/js/questions.js`, a link to read more (summary, why it matters, sources) and the guidelines. The button shows **FREE** in green or **TAKEN UP** in red with who has it. Tapping *Free* takes it up (one person per dispatch) and opens a draft with a suggested outline ending in *What should be done* and the dispatch's sources, all editable. The member can give it back; an expert of that department, or the editor, can free one that has stalled. Dispatches marked `contested` in `questions.js` (they touch a contested political dispute) are reviewed by the editor, never by an expert, because our experts include government employees.
- **Guidelines** (`assets/js/guidelines.js`): the standards every piece follows, on its own page and linked from every dispatch and from the writing page. Replace them with the full guidelines once the team agrees them.
- **The writing page** (both pages): title, summary, text (type or paste; `## ` for a subheading), **upload a document** (Word, PDF, OpenDocument, RTF or text, up to 20 MB; the words of a Word or text file go into the box), **upload a cover picture** (JPG, PNG or WebP, up to 10 MB, with its credit), sources, department and focus area. It saves as you type and has a **Save** button. **Submit** (red) sends it for review; it turns orange (*Waiting review*), then green when published. A piece *sent back* shows the reviewer's corrections and questions; the writer answers in a box that is sent with the piece when they submit again. The page says who will review it.
- **Who reviews what**: a researcher's piece goes to the experts of its department; an expert's piece, and any piece on a contested dispute, goes to the editor; the editor can review any piece; nobody reviews their own.
- **Experts page**: *Awaiting review* (with a count in the top bar), *Hot topics* (dispatches taken up in the department, by whom and how far along), *Free topics*, *Your writing* and *Published*. Opening a piece shows it as it will look, quick checks (words, sources, *What should be done*, cover credit), the uploaded document, and, when a corrected piece comes back, **what changed** since it was sent back, word by word. The reviewer writes corrections and questions and presses **Send back**, or **Approve and publish** (today or tomorrow). A published piece can be taken down again.
- **Briefings**: approved pieces appear on the Analysis page from their publish date (Bangkok time), with the writer's name, field and photo from `team.js`, their cover picture if they uploaded one, and the note that members write in a personal capacity.

The rules live in the database, not only in the pages (`supabase/schema.sql`): members see their own pieces, pieces sent to them for review and published ones, never another member's unsent draft; only a reviewer can approve or send back, and they cannot change the writer's words; comments are visible only to the writer and the reviewers; the public can read nothing but published briefings. Every approval, send-back, change of publish date and deletion is recorded in `desk.piece_log`; see *Security* below.

**After merging changes to the team pages**, run `supabase/schema.sql` in the Supabase SQL Editor (or ask Claude in this project to apply it). It is safe to run again and keeps everything already there. Until it has run, the team pages say they are being updated.

**Trying it on a test copy**: on your own computer (served at `localhost`), `researchers.html?preview`, `experts.html?preview` and `briefings.html?preview` run on sample people and sample data (any password; setup code `sample-code`; two-step code `123456`). On the live site `?preview` does nothing.

### Accounts

Accounts, drafts and uploads are kept in [Supabase](https://supabase.com) (free plan), in the project **credence-letters** (Singapore). `supabase/schema.sql` has already been run there, and `assets/js/config.js` holds the project address and its publishable key (both meant to be public; never put the secret or *service_role* key on the site).

**Only the team can have accounts.** The database keeps the team list (`desk.members`: Aaron as editor, Dominick (Public health) and Yidnekachew (Governance and development) as experts, Ohn, Albert and Badri as researchers) and refuses any other account, so readers and outsiders cannot sign up even if they find the page. Behind the scenes each member's login is their id from `team.js` followed by `@desk.thecredenceletters.com` (for example `dominick@desk.thecredenceletters.com`). These addresses receive no email; members only ever see their name.

**Add a member's account** (in the Supabase dashboard, project *credence-letters*):
1. **Authentication → Users → Add user → Create new user**.
2. Email: their id + `@desk.thecredenceletters.com`. Password: their one-time setup code. Tick **Auto Confirm User**, so no email is sent.
3. Give them the code privately (in person or by private message) with the address: thecredenceletters.com/researchers for a researcher, thecredenceletters.com/experts for an expert. They choose their role and name, then *First time here*, enter the code and create their own password.

Also under **Authentication → Sign In / Providers**, keep **Allow new users to sign up** turned off. The database already refuses anyone not on the team list; this closes the gap before a listed member's account is created.

**Add someone new to the team** (a new researcher, say): add them to `assets/js/team.js` (see *Add someone to the team*) so their name appears in the sign-in list, add them to the team list in Supabase's **SQL Editor**:

```sql
insert into desk.members (team_id, name, role, dept) values ('their-id', 'Their Full Name', 'researcher', null);
-- an expert: role 'expert' and dept 'health' or 'gov' (also set dept in team.js)
```

then create their account as above.

**Forgotten password**: Supabase cannot set a password from the dashboard. Ask Claude in this project to issue a new setup code for that member; they then choose *First time here* again. Their pieces are kept.

**Lost phone** (two-step sign-in): in the Supabase dashboard, **Authentication → Users**, open the member and remove their authenticator factor (or ask Claude in this project to do it). They sign in with their password and, for experts and the editor, add the app again. Confirm the request with the member by phone or in person first: someone pretending to have lost a phone is a common way into accounts.

Supabase pauses free projects after about a week with little use. Every visit to the home page or Briefings reads from the project, which counts as use; a paused project can be resumed from the Supabase dashboard.

### Security

- **What the site runs**: every page carries a content security policy (the `Content-Security-Policy` meta tag near the top of each `.html` file). Pages may run scripts only from this site, fetch only from Supabase and Formspree, and load fonts from Google Fonts. If you add a new outside service (an embed, analytics, another form), add its address to that tag on every page, or the browser will block it.
- **Libraries**: supabase-js and the Word reader (mammoth) are kept in `assets/js/vendor/` rather than loaded from a CDN, so nothing from another server runs where members are signed in. See `assets/js/vendor/README.md` to update them.
- **Frames**: the team pages refuse to open inside another site's frame.
- **Cover pictures** are in the public storage bucket `covers` (anyone with a picture's link can see it, so a published piece can show it); documents stay in the private `drafts` bucket, which only the writer, their reviewers and the editor can open.
- **Record of changes**: in the SQL Editor, `select at, op, from_status, to_status, publish_on, actor_team, aal, piece_title from desk.piece_log order by at desc limit 50;` shows the latest approvals and edits. A line with an account that should not have done it, or `aal1` on an approval, means something is wrong: sign every member out (Authentication → Users → the member → *Sign out user*), reset their password and two-step sign-in, and check the published briefings.
- **Accounts outside the site** (GitHub, Namecheap, Supabase, Substack, Formspree, email) are covered in the team's security checklist; turn on two-step sign-in for each.

### Refresh the questions and ideas
With the daily dispatches draft, `assets/js/questions.js` gets an entry for each new dispatch: its department (`health` or `gov`), focus area, `contested: true` if it touches a contested political dispute, and two or three questions a researcher can work on (at least one asking what has worked in one region and could work in another). `assets/js/ideas.js` adds suggested titles and an outline for some dispatches; the writing page offers them as editable suggestions. The facts come from the sources; questions, titles and outline are only suggestions.

## Sharing

Every letter and briefing has a **Share** button. On phones it opens the phone's own share menu; on laptops it offers WhatsApp, Facebook, X, LinkedIn, Telegram, email and *Copy link*.

The link it shares is the piece's page under `share/` (for example `share/l/2.html`, or `share/l/2.fr.html` in French). Social sites do not run JavaScript, so each of these small pages carries the piece's own preview tags: title, summary and a card image, `assets/img/share/<kind>-<id>.jpg` (1200 × 630). The card blends the story's cover photo with the author's photo, name and role, the kind of piece and thecredenceletters.com. A briefing whose writer uploaded a cover picture uses it on the card. (Dispatches had cards too until they left the public site; their old share pages still forward readers.) A reader who opens a share link goes straight on to the piece.

`tools/share/build.py` makes these pages and cards (`kind`: `l` letter, `b` briefing). The workflow `.github/workflows/share.yml` runs it on GitHub after any change to the letters, team or photos, and every three hours to pick up newly published briefings, and commits what changed ("Share cards: update"). Until a briefing's card exists, its Share button shares the briefing's own address. Old share pages are kept, so links already posted keep working. To run it by hand: `pip install pillow` and `python3 tools/share/build.py`. Fonts for the cards are in `tools/share/fonts` (SIL Open Font Licence).

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
Dispatches are for the team: they appear on the researchers and experts pages, not on the public site. Open `assets/js/dispatches.js`, set `updated` to today's date, then add, edit or remove items. Each item needs an `id`, a `date`, a `region` (`gl`, `nile`, `sea` or `afasia`), English `title`, `summary` and `why`, and at least one source with a link. Then give it an entry in `assets/js/questions.js` (see *Refresh the questions and ideas*). House rules: facts only, every figure attributed to its source, no political side. Each draft is reviewed and approved before it goes live.

A dispatch that leaves the list keeps its take-up and any pieces started from it.

### Publish a new letter
Letters are written in plain, direct prose, with no "Excellency," and no diplomatic closing; they keep the label *Credence No.* and its number. Every letter and every briefing ends with a short section headed **What should be done**: the practical solution (a standard listed under *Evidence and review* on the Independence and standards page). In `letters.js` that is a last `{ h2: "What should be done" }` followed by its paragraphs; on the team pages' writing page, a last `## What should be done`. Credence No. 1 is now the founder's note (see below), so the weekly letters continue from **Credence No. 2**.

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
index.html  letter.html  exchange.html  briefings.html  team.html  founders.html  opportunities.html  ethics.html  credits.html  researchers-wanted.html  404.html
researchers.html  experts.html   the private team pages (not linked from the site)
dispatches.html  expert.html  review.html   forward old links
supabase/schema.sql       accounts, departments, pieces, review rules, comments, take-ups, uploads, two-step sign-in and the record of changes
assets/
  css/style.css          all styles (brand colours and fonts at the top)
  img/founder.jpg        founder portrait
  img/favicon.svg        browser-tab icon
  css/desk.css           styles for the team pages
  js/config.js           Substack link, form endpoint, Supabase settings, languages
  js/ideas.js            suggested titles and outlines for some dispatches (team pages)
  js/questions.js        each dispatch's department and research questions (team pages)
  js/guidelines.js       the writing guidelines (team pages)
  js/desk.js             team pages: sign-in, two-step sign-in, the connection to Supabase (shared by researchers.html and experts.html)
  js/team-desk.js        the team pages themselves: dispatches, take-ups, writing, review
  js/vendor/             supabase-js and the Word reader, kept on the site (see its README)
  js/textformat.js       turns a piece's plain text into the published page
  js/i18n/en|fr|th|sw.js interface text for each language
  js/letters.js          the weekly letters and their translations
  js/founder-note.js     the founder's note, Why a letter of credence (Founders page)
  js/team.js             team members, roles and bios
  js/dispatches.js       dispatches, shown on the team pages
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
