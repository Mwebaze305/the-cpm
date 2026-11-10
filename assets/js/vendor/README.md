# Libraries kept on the site

These two libraries are served from thecredenceletters.com itself instead of a
public CDN, so the team pages (where members' sign-in sessions live) run no
code from another server. The site's content security policy only allows
scripts from this site.

| File | Library | Version | Licence | Used by |
|---|---|---|---|---|
| `supabase-2.118.0.js` | [@supabase/supabase-js](https://www.npmjs.com/package/@supabase/supabase-js) (`dist/umd/supabase.js`) | 2.118.0 | MIT (`LICENSE-supabase-js`) | researchers.html, experts.html |
| `mammoth-1.13.0.min.js` | [mammoth](https://www.npmjs.com/package/mammoth) (`mammoth.browser.min.js`) | 1.13.0 | BSD-2-Clause (`LICENSE-mammoth`) | team pages, to read Word files |

Both files are byte-for-byte the published npm packages:

- supabase-2.118.0.js: `sha384-TcHRA3zBbn+Lexh5n+Oil4guNPOS3rjNDpGRAN46u/s/mB2IZ50ceC6TYDU2yvgK`
- mammoth-1.13.0.min.js: `sha384-8NWE3bZDrmRI4IePMoQaEoLhAQ1MmRMJkdNgnGiHRFanTqsFKr0TmK6aSZvFJ/PO`

To update one: `npm pack <package>@<version>`, copy the same file here under the
new version's name, change the `<script>` tag (or `loadMammoth` in desk.js), and
update this table.
