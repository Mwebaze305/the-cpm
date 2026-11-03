/* Ideas for the expert desk (expert.html). Each expert sees the ideas whose
   "for" list includes their id from team.js; "Show all ideas" shows the rest.
   Refreshed with the daily dispatches draft and published with it once approved.

   updated: the day the list was last reviewed (YYYY-MM-DD)
   Each idea:
   - id: short unique slug; date: date of the newest source (YYYY-MM-DD)
   - for: team ids whose field matches (never tie a member who works for a
     government to a contested political dispute)
   - focus: health | peace | rivers | trade (optional)
   - photo: a key from photos.js showing the place; dispatch: related dispatch id (optional)
   - title, story (what is happening), why (why it matters)
   - angles: ways in; titles: suggested titles; outline: a possible structure
   - sources: [{ name, date, url }], at least one, checked on the source page
   Facts in story and why come from the sources; angles, titles and outline are
   suggestions only. Everything is copied into the expert's draft as editable
   text when they start writing. English only: the desk is in English. */
window.CPM_IDEAS = {
  updated: "2026-11-04",
  items: [
    {
      id: "points-of-entry",
      date: "2026-11-03",
      for: ["dominick"],
      focus: "health",
      photo: "goma-kivu",
      dispatch: "ebola",
      title: "Screening at the border, not closing it",
      story: "DR Congo's national biomedical research institute (INRB) counted 10,414 confirmed Ebola cases and 5,372 deaths as of 30 October, and says the jump in deaths reflects a retrospective data adjustment in Ituri. Kenya has recorded nine cases and two deaths, all linked to its first case, a man who travelled from DR Congo through Uganda; 135 contacts were identified. On 3 November Kenya discharged five recovered patients and released 46 contacts after 21 days of quarantine, with no new infections in the previous two weeks; the outbreak there can be declared over only 42 days after the last patient recovers. There is currently no vaccine or treatment for the Bundibugyo virus, and a trial using ring vaccination of close contacts has begun in Bunia.",
      why: "WHO advises cross-border surveillance and screening at points of entry rather than travel bans, and Kenya had screened more than 700,000 travellers by 22 October. This is border health in practice, at scale.",
      angles: [
        "What a point of entry needs to work during an outbreak: trained staff, shared data with the neighbouring country, and a clear referral path for a sick traveller.",
        "Who screening misses: people who cross away from official posts, and what community surveillance can add.",
        "Compare a Great Lakes crossing with a Thai–Myanmar crossing such as Mae Sai or Mae Sot: what could each region's teams learn from the other?"
      ],
      titles: [
        "Screening Without Shutting the Gate",
        "700,000 Travellers and One Question: Who Was Missed?",
        "What a Border Post Learns in an Outbreak"
      ],
      outline: [
        "What is happening: the outbreak and the response at the borders",
        "What screening at points of entry can and cannot catch",
        "A comparison with a crossing on the Thai–Myanmar border",
        "Two or three practical steps for border health teams"
      ],
      sources: [
        { name: "AP", date: "2026-11-03", url: "https://www.clickondetroit.com/health/2026/11/03/kenya-releases-5-ebola-patients-after-negative-tests-as-2-remain-hospitalized/" },
        { name: "Africanews (INRB figures)", date: "2026-11-02", url: "https://www.africanews.com/2026/11/02/ebola-fatality-rate-in-dr-congo-tops-50-as-death-toll-reaches-5372/" },
        { name: "UN News", date: "2026-10-28", url: "https://news.un.org/en/story/2026/10/1168689" },
        { name: "WHO Disease Outbreak News", date: "2026-10-23", url: "https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON622" }
      ]
    },
    {
      id: "two-outbreaks",
      date: "2026-10-14",
      for: ["dominick"],
      focus: "health",
      photo: "bukavu",
      dispatch: "cholera",
      title: "Cholera and Ebola at the same time",
      story: "WHO counts more than 51,000 suspected cholera cases and 1,487 deaths in DR Congo this year. North Kivu, South Kivu and Haut-Katanga account for nearly 60 per cent of cases, and insecurity is slowing the response.",
      why: "Safe water and sanitation decide outcomes, and DR Congo and the Republic of Congo are developing a joint cross-border vaccination plan, a form of cooperation the partnership studies.",
      angles: [
        "Running two outbreak responses at once with the same health workers, laboratories and supplies.",
        "What a joint cross-border vaccination plan has to settle: who vaccinates whom, where, and with which records.",
        "Water and sanitation in displacement sites as the first line of outbreak prevention."
      ],
      titles: [
        "Two Outbreaks, One Set of Hands",
        "Where Water Decides Who Survives",
        "Vaccinating Across a River"
      ],
      outline: [
        "What is happening in eastern DR Congo",
        "Why two outbreaks strain the same people and supplies",
        "What joint cross-border vaccination planning involves",
        "What host and displaced communities need first"
      ],
      sources: [
        { name: "UN News", date: "2026-10-14", url: "https://news.un.org/en/story/2026/10/1168595" }
      ]
    },
    {
      id: "health-beyond-the-camp",
      date: "2026-10-19",
      for: ["dominick"],
      focus: "health",
      photo: "mae-la",
      dispatch: "thailand-refugee-work",
      title: "Refugees at work: does health care follow them out of the camp?",
      story: "Since October 2025, refugees from Thailand's nine border camps, home to more than 100,000 people, may work in 43 of the country's 76 provinces. About 6,800 joined the labour market in the first year; rights groups report missing contracts and wage deductions.",
      why: "When refugees move from a camp to workplaces across a country, they become a mobile population. Surveillance, vaccination records and access to care have to move with them, the same question Uganda faces with its own right-to-work policy.",
      angles: [
        "How a health system keeps track of people who leave a camp for work in another province.",
        "What employers, clinics and camp health services each need to do.",
        "What Uganda's settlements and Thailand's camps could learn from each other on care for mobile refugees."
      ],
      titles: [
        "Out of the Camp, Off the Health Map?",
        "The Clinic Stayed Behind",
        "Work Permits and Health Records: Two Halves of One Policy"
      ],
      outline: [
        "What changed in Thailand, and how many people it affects",
        "What happens to health care when refugees move for work",
        "A comparison with refugee settlements in Uganda",
        "Practical steps for health services and employers"
      ],
      sources: [
        { name: "Deutsche Welle (via UA.NEWS)", date: "2026-10-19", url: "https://ua.news/en/world/tayiland-povidomiv-pro-pratsevlashtuvannia-6800-bizhentsiv-iz-mianmi-deutsche-welle" }
      ]
    },
    {
      id: "refugee-health-at-the-border",
      date: "2026-11-02",
      for: ["dominick"],
      focus: "health",
      photo: "goma-kivu",
      dispatch: "congo-refugees",
      title: "Refugee health care when the money runs short and Ebola is next door",
      story: "UNHCR counted 1.25 million Congolese refugees and asylum seekers in June 2026, about 80 per cent of them in neighbouring countries; Uganda hosts 53 per cent. In January, the International Rescue Committee warned that Uganda's refugee health response had secured only 6 per cent of its 2026 funding, forcing cuts to health services for more than one million refugees. Uganda has also tightened cross-border movement over Ebola.",
      why: "Border health and displacement meet here: the same crossings receive refugees and must screen for Ebola, while the health services refugees rely on are short of funds.",
      angles: [
        "What a reception point needs to screen new arrivals for Ebola and still give them access to care and protection.",
        "Which refugee health services matter most to keep when funding falls, and who decides.",
        "What Thailand's border health teams, who serve refugees from Myanmar, could share with teams on Uganda's border."
      ],
      titles: [
        "Six Per Cent: Refugee Health Care on a Fraction of Its Budget",
        "Screening for Ebola at a Refugee Reception Point",
        "Who Treats the Newcomer When the Clinic Has Shrunk?"
      ],
      outline: [
        "What is happening: arrivals, hosting and funding",
        "Ebola screening at crossings that also receive refugees",
        "Keeping essential care going with less money",
        "Lessons that could travel between Uganda and Thailand"
      ],
      sources: [
        { name: "ISS Today (via Premium Times)", date: "2026-11-02", url: "https://www.premiumtimesng.com/news/headlines/922102-analysis-congolese-refugees-caught-between-war-and-closing-doors.html" }
      ]
    },
    {
      id: "hunger-in-the-east",
      date: "2026-10-30",
      for: ["yidnekachew"],
      focus: "health",
      photo: "bukavu",
      dispatch: "drc-hunger",
      title: "30 million at risk: reading DR Congo's hunger numbers",
      story: "An alert from the UN-backed IPC says about 28.8 million people in DR Congo, 23 per cent of those analysed, face crisis-level hunger or worse (IPC Phase 3 or above) through December 2026, and more than 3.6 million are in emergency (Phase 4). From January to June 2027 it projects 30.3 million in Phase 3 or above, including 4.2 million in Phase 4. North Kivu, South Kivu and Ituri account for 10.4 million, and Djugu, Fizi, Shabunda and Walungu are in Phase 4.",
      why: "This is food security and welfare in a border region hit by conflict, displacement and the Ebola outbreak, and the alert notes that humanitarian assistance is declining. Hunger in the east also bears on the refugees and displaced people the partnership studies.",
      angles: [
        "What the IPC phases mean in household terms, and why the share of people analysed matters as much as the total.",
        "How conflict, disease and prices combine to push households from Phase 3 into Phase 4.",
        "What planners can do when needs grow while assistance falls: targeting, social protection and local markets."
      ],
      titles: [
        "From 28.8 to 30.3 Million: What Lies Behind the Rise",
        "When Conflict, Ebola and Prices Meet at the Dinner Table",
        "Four Territories in Emergency: A Planner's Reading of the IPC"
      ],
      outline: [
        "What the IPC alert says",
        "Why the east is hardest hit",
        "What the phases mean for households",
        "Choices for planners as assistance declines"
      ],
      sources: [
        { name: "UN News (IPC alert)", date: "2026-10-30", url: "https://news.un.org/en/story/2026/10/1168708" }
      ]
    },
    {
      id: "trade-on-the-moei",
      date: "2026-11-03",
      for: ["aaron"],
      focus: "peace",
      photo: "moei-bridge",
      dispatch: "tak-border",
      title: "When a neighbour's war closes the back door: Thailand's seven-day trade suspension at Mae Sot",
      story: "On 29 October, ammunition from clashes near Myawaddy in Karen State, between Myanmar government troops, ethnic armed groups and other resistance forces, crossed into Thailand and injured a resident of Mae Sot. The commander of Thailand's Naresuan Force ordered the Mae Sot Customs House to suspend imports and exports through unofficial crossings from 30 October to 5 November; authorised crossings are not closed. On 31 October, two bombs dropped by Myanmar military aircraft across the Salween River damaged a health centre, a meeting hall and a church in Mae Sam Laep, Mae Hong Son, with no one hurt. On 2 November, Thailand's armed forces chief summoned Myanmar's military attaché and urged caution along the border, and Prime Minister Anutin Charnvirakul said the army would protect Thai sovereignty; a local official in Mae Sam Laep said the airstrikes were disrupting trade and asked for a safe zone on the Thai side.",
      why: "It shows how a government responds when a neighbour's conflict reaches its territory: Thai authorities say the suspension aims to stop supplies reaching any party to the fighting, while official trade continues through Mae Sot, one of the main posts between the two countries.",
      angles: [
        "What tools a state has when a neighbour's war spills over, short of closing the border: patrols, trade measures, diplomatic messages.",
        "How the line between official and unofficial crossings shapes border economies and the people who live from them.",
        "How the Great Lakes, where conflict in eastern DR Congo also reaches neighbours, compares with the Thai–Myanmar border."
      ],
      titles: [
        "Seven Days at the Moei: Trade, War and a Closed Back Door",
        "Stray Fire, Open Gates: How Thailand Answers a Neighbour's War",
        "The Unofficial Crossing and the Official Line"
      ],
      outline: [
        "What happened on the border, 29 to 31 October",
        "What the suspension covers and what stays open",
        "The tools a government has when conflict crosses its border",
        "A comparison with the Great Lakes"
      ],
      sources: [
        { name: "DVB", date: "2026-11-03", url: "https://english.dvb.no/thailand-warns-myanmar-military-attache-to-exercise-caution-over-border-airstrikes/" },
        { name: "The Nation Thailand", date: "2026-10-30", url: "https://www.nationthailand.com/news/general/40072918" },
        { name: "Thaiger", date: "2026-11-01", url: "https://thethaiger.com/news/national/myanmar-bombs-near-thai-border-village-damage-health-centre" }
      ]
    },
    {
      id: "shrinking-stocks",
      date: "2026-10-07",
      for: ["yidnekachew"],
      focus: "health",
      photo: "juba",
      dispatch: "south-sudan",
      title: "When aid stocks run low, who goes without?",
      story: "WFP stocks at its Malakal hub in South Sudan have fallen from 10,000 tonnes a year ago to under 300 tonnes. 7.8 million people, more than half the population, face acute food shortages, while about 3,000 refugees and returnees arrive from Sudan each week.",
      why: "Host communities and new arrivals depend on the same shrinking aid. How it is shared is a question of welfare, targeting and planning, central to hosting refugees as aid shrinks.",
      angles: [
        "How aid is targeted when there is not enough for everyone, and who decides.",
        "The welfare of host households next to new arrivals: what the numbers can show.",
        "Policy options for governments and agencies planning for a smaller aid budget."
      ],
      titles: [
        "300 Tonnes Left: Sharing a Shrinking Store",
        "Feeding Hosts and New Arrivals From One Warehouse",
        "The Arithmetic of a Hungry Border"
      ],
      outline: [
        "The numbers: stocks, need and new arrivals",
        "How aid is targeted when there is not enough",
        "Host communities and new arrivals side by side",
        "Policy options as aid shrinks"
      ],
      sources: [
        { name: "Al Jazeera", date: "2026-10-07", url: "https://www.aljazeera.com/news/2026/10/7/south-sudans-aid-crisis-deepens-as-food-stocks-run-low" }
      ]
    },
    {
      id: "salt-and-shrimp",
      date: "2026-10-10",
      for: ["yidnekachew"],
      focus: "rivers",
      photo: "mekong-delta",
      dispatch: "mekong-delta",
      title: "From rice to shrimp: the household economics of saltwater",
      story: "With upstream dams trapping sediment and seas rising, farmers in Vietnam's Mekong Delta are rotating rice with shrimp. Sediment reaching the delta fell from about 143 million tonnes two decades ago to an estimated 32 million, according to a 2021 study cited by UN News.",
      why: "How farming households adapt their incomes when a river changes is a development economics question that applies to farmers downstream on the Nile as well.",
      angles: [
        "What switching from rice to a rice–shrimp rotation means for a household's income, risk and food security.",
        "Which households can afford to adapt, and which are left behind.",
        "What planners in river basins in Africa could learn from the delta's experience."
      ],
      titles: [
        "When the River Turns Salty, the Ledger Changes",
        "Rice, Shrimp and the Price of Adapting",
        "Downstream Households Keep the Accounts"
      ],
      outline: [
        "What is changing in the Mekong Delta",
        "What adapting costs a farming household, and what it earns",
        "Who can adapt and who cannot",
        "Lessons for farming communities on other shared rivers"
      ],
      sources: [
        { name: "UN News", date: "2026-10-10", url: "https://news.un.org/en/story/2026/10/1168545" }
      ]
    },
    {
      id: "camp-to-work",
      date: "2026-10-19",
      for: ["yidnekachew", "aaron"],
      focus: "health",
      photo: "mae-la",
      dispatch: "thailand-refugee-work",
      title: "A year of refugee work permits in Thailand",
      story: "Since October 2025, refugees from Thailand's nine border camps, home to more than 100,000 people, may work in 43 of the country's 76 provinces. About 6,800 joined the labour market in the first year; rights groups report missing contracts and wage deductions.",
      why: "A direct comparison with Uganda's right-to-work policy for refugees: what a work permit changes for refugees' incomes and for the local economy, and what it takes to make it work in practice.",
      angles: [
        "Why about 6,800 of more than 100,000 people took up work in the first year: what stands in the way.",
        "What Uganda's experience of refugees working suggests for Thailand, and the other way round.",
        "How to measure whether the policy improves refugees' welfare and the host economy."
      ],
      titles: [
        "From Camp to Payroll",
        "6,800 Workers and the Ones Still Waiting",
        "Work Permits Are the Start, Not the End"
      ],
      outline: [
        "What Thailand's policy allows, and the first-year numbers",
        "What is holding people back",
        "What Uganda's experience suggests",
        "What to measure in the second year"
      ],
      sources: [
        { name: "Deutsche Welle (via UA.NEWS)", date: "2026-10-19", url: "https://ua.news/en/world/tayiland-povidomiv-pro-pratsevlashtuvannia-6800-bizhentsiv-iz-mianmi-deutsche-welle" }
      ]
    },
    {
      id: "two-tables",
      date: "2026-10-16",
      for: ["aaron"],
      focus: "peace",
      photo: "kinshasa",
      dispatch: "drc-politics",
      title: "Two mediation tracks for one war in eastern DR Congo",
      story: "On 12 October, former president Joseph Kabila publicly allied with the M23–AFC movement and announced a political front, the FRN. Fighting continues in North and South Kivu, with drones increasingly used in populated areas, while mediators press on with the Doha framework and the Washington Accords.",
      why: "A military conflict is also becoming a political contest, which raises the stakes for research on mediation, governance and accountability in the region.",
      angles: [
        "How the Doha framework and the Washington Accords relate to each other, and who sits at each table.",
        "Where the region's own bodies (the EAC, the ICGLR and the AU) fit in.",
        "What accountability looks like when a conflict turns into a political contest."
      ],
      titles: [
        "Two Tables, One War: Doha and Washington on Eastern Congo",
        "Doha, Washington and the Kivus",
        "A Peace Process With Two Addresses"
      ],
      outline: [
        "What changed on 12 October",
        "The two mediation tracks",
        "Where regional bodies fit",
        "What research on accountability can add"
      ],
      sources: [
        { name: "ACLED", date: "2026-10-16", url: "https://acleddata.com/expert-comment/former-drc-president-forms-rebel-alliance-m23-what-does-mean-peace-congo" },
        { name: "Security Council Report", date: "2026-10-12", url: "https://www.securitycouncilreport.org/whatsinblue/2026/10/great-lakes-region-briefing-and-consultations-11.php" }
      ]
    },
    {
      id: "thailand-africa-push",
      date: "2026-10-14",
      for: ["aaron"],
      focus: "peace",
      photo: "au-addis",
      dispatch: "thailand-africa",
      title: "Thailand widens its Africa push",
      story: "Egypt's foreign minister visited Bangkok from 11 October, the first such visit in 30 years. Thailand plans to reopen its embassy in Addis Ababa, and TICA signed an agriculture and fisheries agreement for Nigeria with Kasetsart University on 25 September.",
      why: "New channels between Thailand and Africa open room for partnerships between universities and practitioners, the work of Exchange of Notes.",
      angles: [
        "What each side seeks from the new visits and agreements.",
        "What an embassy in Addis Ababa, the seat of the African Union, could change for Thailand–AU relations.",
        "Where universities and practitioners in both regions fit."
      ],
      titles: [
        "Back to Addis Ababa: Why Thailand Is Reopening Its Embassy",
        "Thirty Years Between Visits",
        "Bangkok Looks West, to Addis"
      ],
      outline: [
        "The visits and agreements since September",
        "What each side gains",
        "Where universities and practitioners fit",
        "What to ask before the next agreement is signed"
      ],
      sources: [
        { name: "Ecofin Agency", date: "2026-10-14", url: "https://www.ecofinagency.com/news/1410-59729-thailand-expands-trade-and-diplomatic-push-across-africa-to-diversify-export-markets" }
      ]
    },
    {
      id: "asean-manila",
      date: "2026-09-22",
      for: ["aaron"],
      focus: "peace",
      photo: "manila",
      dispatch: "asean-summit",
      title: "Before the ASEAN Summit in Manila, 16 to 18 November",
      story: "ASEAN leaders and partners meet at the Philippine International Convention Center in Pasay City, Metro Manila, under the Philippines' 2026 chairmanship.",
      why: "A chance to prepare a briefing on what to watch: what the summit says about the Global South, its partners, and cooperation with Africa.",
      angles: [
        "What to watch for in the statements: Global South language, partnerships, Myanmar.",
        "What ASEAN's way of working (consensus, non-interference) means for its links with the AU.",
        "A question African diplomats could put to ASEAN partners."
      ],
      titles: [
        "What ASEAN Says When Africa Is Not in the Room",
        "Three Days in Pasay",
        "A Reader's Guide to the Manila Summit"
      ],
      outline: [
        "What the summit is and who attends",
        "What to watch for",
        "Why it matters for Africa–ASEAN links",
        "A question for African diplomats"
      ],
      sources: [
        { name: "PhilSTAR L!fe", date: "2026-09-22", url: "https://philstarlife.com/news-and-views/968280-palace-announces-nov-16-to-18-as-special-non-working-days-asean-summit" }
      ]
    },
    {
      id: "upstream-downstream",
      date: "2026-11-03",
      for: ["aaron"],
      focus: "rivers",
      photo: "gerd-space",
      dispatch: "nile-gerd",
      title: "Upstream dams, downstream costs: the Nile and the Mekong",
      story: "On 2 November in Cairo, after the third round of their \"2+2\" talks of foreign and irrigation ministers, Egypt and Sudan said Ethiopia's operation of its Blue Nile dam without a binding agreement threatens their water security, reaffirmed their rights under the 1959 Nile Waters Agreement (55.5 billion cubic metres a year for Egypt, 18.5 billion for Sudan), backed the Nile Basin Initiative and said the dispute concerns only the three Eastern Nile countries. Ethiopia was not a party to the 1959 agreement and regards it as null and void; it inaugurated the dam, with about 5,150 megawatts of capacity, in September 2025. On the Mekong, sediment reaching Vietnam's delta fell from about 143 million tonnes two decades ago to an estimated 32 million, according to a 2021 study cited by UN News.",
      why: "The same question, who bears the costs of upstream dams, sits at the heart of both rivers, and each basin has institutions (the Nile Basin Initiative, the Mekong River Commission) the other can learn from.",
      angles: [
        "What the Mekong River Commission's experience offers the Nile, and its limits.",
        "Binding agreements versus cooperation without one: what each basin shows.",
        "How to write about a contested river fairly, giving each country's case in its own terms."
      ],
      titles: [
        "Cairo, Khartoum and a Dam Upstream",
        "Two Rivers, One Upstream Question",
        "What the Mekong Can Tell the Nile"
      ],
      outline: [
        "What Cairo and Khartoum said, and what Addis Ababa says",
        "What has happened downstream on the Mekong",
        "What the two basins' institutions have and have not done",
        "Lessons for cooperation on shared rivers"
      ],
      sources: [
        { name: "Daily News Egypt", date: "2026-11-02", url: "https://dailynewsegypt.com/2026/11/02/egypt-sudan-reject-unilateral-ethiopian-dam-management-reaffirm-1959-nile-water-rights/" },
        { name: "Addis Standard (via allAfrica)", date: "2026-11-03", url: "https://allafrica.com/stories/202611030630.html" },
        { name: "UN News", date: "2026-10-10", url: "https://news.un.org/en/story/2026/10/1168545" }
      ]
    }
  ]
};
