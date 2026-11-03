/* The weekly letters. Newest letter = highest "no"; it becomes the home page's
   letter and appears in Top stories and Analysis. While the list is empty, the
   home page simply leaves the letter out.

   Letters are written in plain, direct prose: no "Excellency," and no
   diplomatic closing. Each one is labelled "Credence No. X". (Why the name:
   see the founder's note in assets/js/founder-note.js, shown on founders.html.)

   Credence No. 1 is now the founder's note, so the weekly letters continue from
   No. 2 (old links to letter.html#credence-1 open the note on founders.html).

   To add a letter, copy the template below into the list, set "no" (the next
   number), and fill in:
   - date: publication date, YYYY-MM-DD
   - author: full name, as in assets/js/team.js
   - cover: null, or { src: "assets/img/covers/credence-2.jpg",
                        credit: "Photo: Name, CC BY-SA 4.0, via Wikimedia Commons" (or one per language),
                        alt: { en: "...", fr: "...", th: "...", sw: "..." } }
   - sources: APA references (HTML allowed for italics and links)
   - content: one entry per language. Only "en" is required; any language left out
     shows the English original with a note to the reader.
     title, place ("Chiang Rai, Thailand"), excerpt (two short sentences for the
     home page), body. Body items: { h2: "Heading" }, { p: "Paragraph (HTML allowed)" },
     { ol: ["item", "item"] }
   The signature (author and place) and the disclaimer are added automatically.

   Template:
    {
      no: 2,
      date: "2026-11-05",
      author: "Aaron Mwesigwa Mwebaze",
      cover: null,
      sources: [
        'Author, A. (2026, November 1). <em>Title of the page</em>. Publisher. <a href="https://..." target="_blank" rel="noopener">https://...</a>'
      ],
      content: {
        en: {
          title: "A vivid, specific title",
          place: "Chiang Rai, Thailand",
          excerpt: ["First short sentence.", "Second short sentence."],
          body: [
            { p: "Opening paragraph." },
            { h2: "A subheading" },
            { p: "Paragraph with a citation (Author, 2026)." }
          ]
        }
      }
    }
*/
window.CPM_LETTERS = [];
