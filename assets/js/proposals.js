/* Proposals for the team pages (/researchers and /experts): calls from
   opportunities.js that the team could answer, worked out as proposal ideas,
   with two suggested team members for each, and briefing ideas the team can
   write whether or not we apply. The editor confirms (or changes) the two
   people on the team pages; only then can those two open the proposal's shared
   draft, which is private to them and the editor (supabase/schema.sql,
   section 11). Refreshed with the daily update.

   updated: the day the list was last reviewed (YYYY-MM-DD)
   Each proposal:
   - id: the opportunity's id in opportunities.js (one proposal per call)
   - apply: "organisation" (The Credence Letters applies, often with partners),
     "paper" (team members write under The Credence Letters' name) or
     "personal" (one member applies for themselves; a second reads the drafts)
   - dept: "health" or "gov" (the department whose tab shows it)
   - focus: health | peace | rivers | trade (optional)
   - contested: true when it touches a contested political dispute (pieces
     written from it are reviewed by the editor)
   - deadline: the organiser's deadline (YYYY-MM-DD), from opportunities.js
   - due: our own date for a finished draft, about a week earlier
   - title: what we would propose, in a line
   - ask: what the call asks for; fit: who may apply and what it would take
   - ideas: [{ title, problem, solution }], two or three ways to answer the call
   - pair: [{ id, role }], two team ids from team.js, matched by field and
     department. Never a member who works for a government (currently
     Dominick, Yidnekachew and Badri) on a contested political dispute.
   - why: why these two
   - outline: headings for the shared draft (it starts with them)
   - briefs: [{ title, angle, contested }], briefing ideas anyone can take up;
     each opens a normal draft ending in "What should be done"
   - link: the organiser's page; checked: the day the details were checked
   Rules: facts only from the organiser's page; never guess a deadline. Ideas,
   outlines and briefs are suggestions the team edits. Proposals whose
   deadline has passed hide themselves. English only. */
window.CPM_DESK_PROPOSALS = {
  updated: "2026-11-15",
  items: [
    {
      id: "gitoc-mnet-2027",
      apply: "organisation",
      dept: "gov",
      focus: "peace",
      contested: true,
      deadline: "2026-12-07",
      due: "2026-11-30",
      title: "A joint project against fake job offers that lead jobseekers into scam compounds",
      ask: "A pre-application questionnaire for a joint project by two or three civil society organisations against illegal drugs, financial crime or child sexual exploitation in the Mekong, sent to mnet-ctc-resilience@globalinitiative.net by 7 December 2026 (23:59 CET). If invited, a full proposal and an activity-based budget follow. Most grants are AUD 30,000 to 65,000, for 15 February 2027 to 15 February 2028.",
      fit: "Applicants are civil society organisations in Cambodia, Laos, Myanmar, Thailand or Vietnam, applying as a group of two or three. The lead organisation submits and each partner sends a letter of support; the questionnaire asks for past work against organised crime in the Mekong. Our way in is as the research partner of an organisation based there that agrees to lead. Ask GI-TOC first whether a partner not registered in the five countries can join.",
      ideas: [
        {
          title: "Check the job before the ticket",
          problem: "Jobseekers are drawn to the Mekong by fake job offers and end up held in scam compounds, where they are made to defraud others.",
          solution: "A simple way to check a job offer before travelling (a checklist and a contact who answers questions), built and shared with migrant and diaspora communities and the partner organisation's own networks."
        },
        {
          title: "A referral map for survivors",
          problem: "When foreign survivors are released at a border, it is often unclear who receives them, where they stay and how they get home.",
          solution: "A short, checked guide to who does what (embassies, national agencies and NGOs), kept up to date with the partner organisation, so that no survivor waits without help."
        },
        {
          title: "Learn from both regions",
          problem: "Countries that send workers and countries that receive them rarely compare what has worked against deceptive recruitment.",
          solution: "A short evidence review of pre-departure checks and warnings that have worked in East Africa or Southeast Asia, with a plan to test the best one in the partner's community."
        }
      ],
      pair: [
        { id: "aaron", role: "Leads the writing and finds the lead partner" },
        { id: "ohn", role: "Co-writes the project idea" }
      ],
      why: "Aaron works on international relations and policy, including links between Africa and Thailand; Ohn on security and conflict resolution.",
      outline: [
        "The harm in the community, in plain words",
        "What we will do, where and with whom",
        "Each partner's role (the lead organisation first)",
        "Past work against organised crime in the Mekong",
        "What will change in twelve months, and how we will know",
        "Budget in outline"
      ],
      briefs: [
        { title: "Check the job before the ticket: how jobseekers can test an offer", angle: "What checks before departure have worked for jobseekers in East Africa or Southeast Asia, who should run them, and what should recruiters, embassies and families do?", contested: true },
        { title: "After the rescue: who helps foreign survivors get home?", angle: "Map who receives survivors released at a border and where the gaps are; ask what has worked for survivors elsewhere.", contested: true }
      ],
      link: "https://globalinitiative.net/announcements/calling-innovative-proposals-to-combat-organized-crime-in-the-mekong/",
      checked: "2026-11-15"
    },
    {
      id: "gms-forum-2027",
      apply: "paper",
      dept: "gov",
      focus: "trade",
      deadline: "2027-01-15",
      due: "2027-01-08",
      title: "A paper on what migrant workers need from the Mekong's economic corridors",
      ask: "An abstract on one of the conference's nine subthemes, through the organisers' online form, by 15 January 2027. Acceptance is announced on 20 January, full papers are due on 30 April, and the conference is at Paragon International University in Phnom Penh on 12 and 13 May 2027.",
      fit: "The call sets no conditions on who may submit. There is no registration fee; authors pay their own travel and accommodation (meals are provided). Palgrave Macmillan may publish an edited book from the papers, subject to its review. The call sets no abstract length: about 300 words is usual.",
      ideas: [
        {
          title: "Corridors that carry workers too",
          problem: "Economic corridors are planned for goods and investment; the workers who cross them are an afterthought (subtheme 3: connectivity and economic corridors).",
          solution: "Ask what migrant workers along one corridor need (documents, health care, support when things go wrong) and propose who should provide it."
        },
        {
          title: "Paperwork that crosses borders",
          problem: "Migrant workers face slow, paper-based procedures on both sides of a border (subtheme 9: digital economy and inclusive development).",
          solution: "Look at which public services for cross-border workers could move online, and what it would take to make them work for people with little access to the internet."
        },
        {
          title: "Lessons from East Africa's border posts",
          problem: "Mekong crossings and East African crossings face similar delays, but their experiences are rarely compared (subtheme 3).",
          solution: "Compare one Mekong crossing with a one-stop border post in East Africa, such as Busia or Malaba, and propose one practical step for the Mekong."
        }
      ],
      pair: [
        { id: "albert", role: "Writes the paper" },
        { id: "badri", role: "Co-writes the paper" }
      ],
      why: "Both are completing the MA in International Development at Mae Fah Luang University in Chiang Rai. Albert researches support for Myanmar migrant workers there; Badri brings fifteen years in Nepal's civil service.",
      outline: [
        "Title",
        "The question, and why it matters for the Mekong",
        "Where and how it is studied (data and method)",
        "What we expect to find",
        "What should be done: the policy step the paper proposes"
      ],
      briefs: [
        { title: "Corridors for trucks, not for workers?", angle: "What do migrant workers on the Mekong's cross-border corridors need, and what could East Africa's one-stop border posts teach the Mekong?" }
      ],
      link: "https://www.paragoniu.edu.kh/call-for-papers-2nd-international-conference/",
      checked: "2026-11-15"
    },
    {
      id: "noha-2027",
      apply: "personal",
      dept: "health",
      focus: "health",
      deadline: "2026-12-15",
      due: "2026-12-08",
      title: "An application for the NOHA+ master's in International Humanitarian Action",
      ask: "An online application with all documents by 15 December 2026 (23:59 GMT) to be considered for an Erasmus Mundus scholarship for the 2027–2029 cohort.",
      fit: "For the scholarship, a bachelor's degree in a field relevant to humanitarian action must be finished by 15 December 2026, and people who already had an Erasmus Mundus scholarship cannot get another. The master's is two years, full time, at universities in Europe. Check the document list and language rules on the application portal.",
      ideas: [
        {
          title: "From the border to the field",
          problem: "Humanitarian programmes need people who understand how disease and displacement cross borders.",
          solution: "Build the motivation statement around work on the health of migrants and mobile populations at points of entry, and what the degree would add to it."
        }
      ],
      pair: [
        { id: "dominick", role: "Applies" },
        { id: "albert", role: "Reads the drafts" }
      ],
      why: "Dominick's work is the health of migrants and mobile populations at borders. Albert's research is humanitarian and community support for migrant workers.",
      outline: [
        "Motivation statement: why humanitarian action, and why now",
        "Experience: border health and work with mobile populations",
        "What you will bring to the cohort, and take home",
        "Choice of universities, and the language each needs",
        "Documents to gather (check the portal's list)"
      ],
      briefs: [
        { title: "When aid shrinks, who keeps border health running?", angle: "What has kept health screening and care going for mobile populations at points of entry when funding fell, in East Africa or the Mekong, and what could the other region copy?" }
      ],
      link: "https://apply.nohanet.org/",
      checked: "2026-11-15"
    },
    {
      id: "emmir-2027",
      apply: "personal",
      dept: "gov",
      deadline: "2026-12-20",
      due: "2026-12-13",
      title: "An application for EMMIR, the European Master in Migration and Intercultural Relations",
      ask: "An online application with all documents by 20 December 2026 (23:59 CET) to be considered for an Erasmus Mundus scholarship for 2027–2029.",
      fit: "Graduates with a first degree in a field relevant to migration studies, finished by 20 December 2026, with proof of English. Scholars receive €1,400 a month for 24 months; the programme starts in Oldenburg, Germany, in September 2027. Check the full entry requirements on the EMMIR site.",
      ideas: [
        {
          title: "Support that reaches migrant workers",
          problem: "Migrant workers often get help from community groups rather than from official channels.",
          solution: "Build the statement of purpose on research into how Myanmar migrant workers in Chiang Rai receive humanitarian and community support, and the question to study next."
        }
      ],
      pair: [
        { id: "albert", role: "Applies" },
        { id: "ohn", role: "Reads the drafts" }
      ],
      why: "Albert's master's research is on Myanmar migrant workers in Chiang Rai. Ohn's research compares displaced and non-displaced households in Sudan.",
      outline: [
        "Statement of purpose: the migration question you want to study",
        "Your research so far",
        "Methods you have used, and want to learn",
        "After EMMIR: how the degree serves migrants and the region",
        "Documents to gather (check the portal's list)"
      ],
      briefs: [
        { title: "Help that reaches migrant workers: what community groups do that agencies don't", angle: "What do community groups in Chiang Rai do for migrant workers, and what could work for refugees hosted for years in Uganda?" }
      ],
      link: "https://www.emmir.org/applications",
      checked: "2026-11-12"
    }
  ]
};
