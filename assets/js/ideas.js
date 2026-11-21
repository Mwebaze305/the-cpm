/* Ideas for some dispatches, used on the team pages (researchers.html and
   experts.html): when someone takes up a dispatch, its idea's outline goes
   into the new draft and its titles are offered as suggestions. ("for" names
   the team members whose field matches; it is no longer used on the pages.)
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
  updated: "2026-11-22",
  items: [
    {
      id: "icj-rohingya-return",
      date: "2026-11-19",
      for: ["aaron", "ohn"],
      focus: "peace",
      photo: "mae-la",
      dispatch: "icj-rohingya",
      title: "After the verdict: what the World Court's genocide ruling asks of Myanmar",
      story: "On 19 November the International Court of Justice ruled, by nine votes to six, that Myanmar committed genocide against the Rohingya in its 2017 military crackdown, NPR reported; it is the first time the court has held a state responsible for genocide. The court ordered Myanmar to pay restitution and compensation, with the amount to be set in future proceedings, to investigate and, if warranted, prosecute those suspected of involvement, and to enable displaced Rohingya to return; NPR notes that the Arakan Army controls most of Rakhine and that the judgment does not order Myanmar to grant citizenship. The crackdown drove about 700,000 people to flee to Bangladesh, NPR reported. The Gambia, which brought the case in 2019 with the support of the Organisation of Islamic Cooperation, called on Myanmar to comply fully and without delay; UN Secretary-General António Guterres called the ruling a powerful recognition of the victims; Myanmar's National Unity Government said it would consider the findings and orders, Al Jazeera and Reuters reported. Myanmar's military-backed government had not responded when NPR published.",
      why: "A court ruling between states meets a displacement that has lasted for years: how governments, ASEAN and the UN respond to the orders on compensation, accountability and return is a question of intergovernmental relations, peace and conflict.",
      angles: [
        "What the orders mean in practice: compensation, investigations and return, and what the next stage of the case will decide.",
        "Return to where? What the court's order to enable return means when, as NPR reports, the Arakan Army controls most of Rakhine.",
        "What has helped people displaced for years go home safely after a conflict, in the Great Lakes or Southeast Asia, and could it guide plans for the Rohingya?"
      ],
      titles: [
        "Nine Votes to Six: The Rohingya Verdict and What Comes Next",
        "A Ruling in The Hague, a Camp in Cox's Bazar",
        "Compensation, Courts and the Long Road Back to Rakhine"
      ],
      outline: [
        "What the court decided",
        "What it ordered Myanmar to do",
        "The obstacles to return",
        "What has worked elsewhere",
        "What should be done"
      ],
      sources: [
        { name: "NPR (via OPB)", date: "2026-11-19", url: "https://www.opb.org/article/2026/11/19/top-u-n-court-rules-myanmar-committed-genocide-against-rohingya/" },
        { name: "Al Jazeera (Reuters)", date: "2026-11-19", url: "https://www.aljazeera.com/news/2026/11/19/world-reacts-to-icj-finding-myanmar-guilty-of-genocide-against-rohingya" }
      ]
    },
    {
      id: "borders-hard-to-cross",
      date: "2026-11-20",
      for: ["albert", "badri", "yidnekachew"],
      focus: "trade",
      photo: "kampala-lake",
      dispatch: "eac-borders",
      title: "Open in principle, hard in practice: what East Africans say about their borders",
      story: "Afrobarometer surveys carried out in 2024 in Kenya, Tanzania and Uganda, published on 20 November, found that 79 per cent of Ugandans, 70 per cent of Kenyans and 53 per cent of Tanzanians support free movement across borders in the region. Yet 65 per cent of Ugandans, 63 per cent of Kenyans and 47 per cent of Tanzanians said crossing borders is difficult or very difficult, up 25 percentage points in Kenya and 14 in Uganda since 2017. About 28 per cent across the three countries had considered emigrating at least a little, from 9 per cent in Tanzania to 42 per cent in Uganda. The EAC approved a common labour-migration regime in 2024.",
      why: "It links migration, public policy and economic prospects: the gap between support for free movement and the experience of crossing borders is a question for EAC integration, labour migration and the people who live from cross-border work and trade.",
      angles: [
        "Why crossing borders feels harder now than in 2017, and for whom.",
        "What the EAC's 2024 labour-migration regime promises, and how far member states have put it into practice.",
        "What has made borders easier to cross for workers and small traders in ASEAN or at East Africa's one-stop border posts, and what could carry over."
      ],
      titles: [
        "Seventy-Nine Per Cent Say Yes, Sixty-Five Per Cent Say Hard",
        "The Border We Want and the Border We Cross",
        "Free Movement on Paper, Queues at the Gate"
      ],
      outline: [
        "What the surveys found",
        "The gap between support and experience",
        "The EAC's labour-migration regime",
        "Lessons from ASEAN and one-stop border posts",
        "What should be done"
      ],
      sources: [
        { name: "Afrobarometer (via allAfrica)", date: "2026-11-20", url: "https://allafrica.com/stories/202611200424.html" }
      ]
    },
    {
      id: "busia-simple-papers",
      date: "2026-11-17",
      for: ["yidnekachew", "badri"],
      focus: "trade",
      photo: "mombasa-port",
      dispatch: "busia-str",
      title: "Simpler papers for small traders: the Simplified Trade Regime at Busia",
      story: "COMESA, the EAC and SADC began a two-day workshop on 16 November at the Busia One Stop Border Post between Kenya and Uganda on the Tripartite Simplified Trade Regime, which offers small traders a Simplified Certificate of Origin and a Simplified Customs Declaration, SADC reported. Government representatives, border agencies, trade information desk officers, cross-border traders' associations, joint border committees and small-scale traders covered eligibility, product lists, consignment thresholds, rules of origin and customs procedures, and discussed standard operating procedures for trade information desks. The project is funded by the Alliance for a Green Revolution in Africa (AGRA) and supports the regime along the Northern and Nacala trade corridors. SADC says the Tripartite region has 29 member states and more than 800 million people, that trade within it remains below its potential, and that the initiative places particular emphasis on women and young people, who account for a significant share of small-scale cross-border traders.",
      why: "Small traders are where regional integration meets household income: simpler customs rules can lower the cost of trading across a border, and how they are run is a question for development economics and for public administration at the border.",
      angles: [
        "From rules to practice: how a small trader at Busia uses the simplified certificate and declaration, and where the process still slows down.",
        "Who runs it: the role of trade information desks, joint border committees and traders' associations, and how they are funded.",
        "What has made simplified trade rules work for small traders at other borders, in East Africa or at Southeast Asian crossings such as Mae Sot, and could Busia adopt it?"
      ],
      titles: [
        "One Page Instead of Ten: Simpler Customs for Busia's Small Traders",
        "Below Its Potential: What Small Traders Need From the Tripartite Region",
        "The Desk at the Border: Trade Information Officers and Small Traders"
      ],
      outline: [
        "What the Simplified Trade Regime offers",
        "Who trades small at Busia",
        "Where the rules meet practice",
        "Lessons from other borders",
        "What should be done"
      ],
      sources: [
        { name: "SADC (via allAfrica)", date: "2026-11-17", url: "https://allafrica.com/stories/202611170226.html" }
      ]
    },
    {
      id: "ebola-vaccine-trials",
      date: "2026-11-19",
      for: ["pavious", "dominick"],
      focus: "health",
      photo: "goma-kivu",
      dispatch: "ebola",
      title: "A vaccine for the right strain: Bundibugyo trials in Bunia",
      story: "Two candidate vaccines made for the Bundibugyo virus, Oxford's ChAdOx1 and Moderna's mRNA-1469, are due to start phase 2 trials on 26 or 27 November in Bunia, Ituri, AFP reported on 18 November, citing WHO. Both completed earlier, smaller phase 1 trials. They join the Tumaini trial, which began on 23 October with Ervebo, a vaccine approved for a different Ebola strain; Tumaini uses ring vaccination of high-risk contacts, has enrolled more than 140 people so far at one site in Bunia and is expected to expand. On 18 November WHO's Director-General said the outbreak remains a public health emergency of international concern, with more than 11,300 cases and 5,500 deaths.",
      why: "Testing vaccines in the middle of an outbreak depends on laboratory work, cold chains and finding contacts quickly, which joins biomedical science to border health and outbreak preparedness.",
      angles: [
        "How ring vaccination works, and what it needs on the ground: contact lists, consent, cold storage and follow-up.",
        "What phase 2 trials measure, and what has to be shown before a vaccine can move to a larger phase 3 trial.",
        "What have earlier Ebola vaccine trials in Africa learned about running trials in insecure areas, and what could the teams in Ituri use now?"
      ],
      titles: [
        "Two Vaccines, One Strain, One Town: The Bunia Trials",
        "Ring by Ring: Testing Bundibugyo Vaccines in Ituri",
        "The Right Vaccine for the Right Virus"
      ],
      outline: [
        "What is being tested, and where",
        "How a ring vaccination trial works",
        "What could slow it down",
        "What should be done"
      ],
      sources: [
        { name: "AFP (via Arab News)", date: "2026-11-18", url: "https://www.arabnews.com/world/strain-specific-ebola-jab-trials-to-start-in-dr-congo-next-week-who-3012781" },
        { name: "Anadolu Agency (via A News)", date: "2026-11-18", url: "https://www.anews.com.tr/africa/2026/11/18/who-says-ebola-outbreak-in-dr-congo-remains-public-health-emergency-of-international-concern" }
      ]
    },
    {
      id: "blue-nile-front",
      date: "2026-11-21",
      for: ["ohn", "aaron"],
      focus: "peace",
      photo: "khartoum-confluence",
      dispatch: "sudan-blue-nile",
      title: "A new front on two borders: displacement in Sudan's Blue Nile",
      story: "On 21 November the Tasis alliance of the RSF and the SPLM-N said it had captured Bau locality in southeastern Blue Nile state, about 70 km southwest of Ed Damazin, Asharq Al-Awsat reported; the army had not commented, and Bau's commissioner said the RSF had entered the locality but not taken all of it. He said more than 6,000 families had fled Bau and nearby areas towards the south of Damazin, according to preliminary figures. On 12 November a Sudanese rights group said more than 3,000 families had fled Damazin and surrounding areas after drone attacks and clashes, most of them to Sennar state, Darfur24 reported. IOM estimated that 99,277 people were displaced in Blue Nile between 11 January and 23 August 2026, 47 per cent of them children, Radio Dabanga reported.",
      why: "Blue Nile state borders Ethiopia and South Sudan, so the fighting bears on cross-border displacement and on relations between neighbouring governments in the Nile Basin, which sit at the centre of international relations, security and conflict resolution.",
      angles: [
        "Where people displaced from Blue Nile go, inside Sudan and across its borders, and who assists them.",
        "What local groups' calls for safe corridors would require of the warring parties and of neighbouring states.",
        "What has kept humanitarian corridors open in border regions at war elsewhere, in the Great Lakes or on the Thai–Myanmar border, and what could apply in Blue Nile."
      ],
      titles: [
        "Seventy Kilometres from Damazin",
        "Blue Nile: The War Reaches Sudan's Southeastern Edge",
        "Six Thousand Families on the Road South"
      ],
      outline: [
        "What happened in Bau and Damazin",
        "Who has fled, and where to",
        "Why a border state matters for the region",
        "Lessons from other border regions at war",
        "What should be done"
      ],
      sources: [
        { name: "Asharq Al-Awsat", date: "2026-11-21", url: "https://english.aawsat.com/arab-world/5343858-sudans-tasis-alliance-seizes-blue-nile%E2%80%99s-strategic-bau-district" },
        { name: "Darfur24", date: "2026-11-12", url: "https://darfur24.com/en/2026/11/12/3000-families-displaced-by-fighting-in-blue-nile/" },
        { name: "Radio Dabanga (IOM)", date: "2026-10-28", url: "https://www.dabangasudan.org/en/all-news/article/sudan-war-intense-fighting-in-blue-nile-drives-fresh-displacement" }
      ]
    },
    {
      id: "drones-and-civilians-sudan",
      date: "2026-11-17",
      for: ["ohn"],
      focus: "peace",
      photo: "khartoum-confluence",
      dispatch: "sudan-drones",
      title: "Markets, fuel and clinics: what drone strikes cost civilians in Sudan",
      story: "The UN Human Rights Office said on 17 November that at least 2,230 civilians were killed in Sudan between January and October 2026, more than 1,630 of them in drone strikes, and that the real toll is likely considerably higher, Radio Dabanga reported. More than 1,390 were killed in the first six months, over 80 per cent of them in drone strikes, and a further 840 in the following four months. Kordofan accounted for more than two-thirds of verified deaths and Darfur for most of the rest; White Nile state recorded at least 41. In the first half of the year the office recorded at least 39 drone strikes on markets, 20 on civilian vehicles, 17 on fuel tankers and depots and 16 on health facilities. The High Commissioner, Volker Türk, said the violations may amount to war crimes.",
      why: "How a change in the way a war is fought affects civilians, displacement and the services they rely on is a question of security and conflict resolution, and it bears on the peace and conflict focus area in the Nile Basin.",
      angles: [
        "What the UN figures show about where and against what civilian sites drone strikes have fallen this year.",
        "How strikes on markets, fuel and clinics affect families who have already fled once, using UN agency reporting.",
        "What has helped protect civilian sites such as markets and clinics in other conflicts, in the Great Lakes or Southeast Asia, that could apply in Sudan?"
      ],
      titles: [
        "Thirty-Nine Markets: Sudan's War From the Air",
        "When the Strikes Hit the Clinic",
        "Counting the Dead Above Kordofan"
      ],
      outline: [
        "What the UN report found",
        "Where the strikes fell and what they hit",
        "What it means for displaced families and host communities",
        "Lessons on protecting civilian sites",
        "What should be done"
      ],
      sources: [
        { name: "Radio Dabanga (UN Human Rights Office)", date: "2026-11-17", url: "https://www.dabangasudan.org/en/all-news/article/un-2230-civilian-deaths-in-sudan-in-10-months-most-from-drone-strikes" }
      ]
    },
    {
      id: "ebola-labs",
      date: "2026-11-17",
      for: ["pavious", "dominick"],
      focus: "health",
      photo: "goma-kivu",
      dispatch: "ebola",
      title: "From two laboratories to more than two dozen: testing in DR Congo's Ebola response",
      story: "On 17 November WHO's Director-General said DR Congo's Ebola outbreak had more than doubled in three months, to over 11,000 cases and 5,400 deaths in 67 health zones in eight provinces, with 400 to 500 new cases still reported each week and most deaths occurring outside treatment centres, UN News reported. The number of laboratories able to test for the virus has risen from two to more than two dozen, and two candidate vaccines for the Bundibugyo virus are to join an ongoing trial in the coming weeks. Africa CDC's director-general told Reuters on 15 November that more than 80 per cent of new cases arise outside known contact lists, Al Jazeera reported.",
      why: "Laboratory capacity decides how fast suspected cases are confirmed and contacts are followed, which links biomedical science to outbreak control and to border health at points of entry.",
      angles: [
        "What it takes to move from two testing laboratories to more than two dozen: staff, supplies, sample transport.",
        "How faster testing could help find cases that now arise outside known contact lists.",
        "What has worked to bring testing closer to patients in remote or insecure areas, for example in the Greater Mekong or elsewhere in Africa, that could help DR Congo?"
      ],
      titles: [
        "Two Labs to Two Dozen",
        "The Sample Has to Travel: Testing for Ebola in Eastern DR Congo",
        "Before the Vaccine, the Test"
      ],
      outline: [
        "What WHO and Africa CDC report",
        "How testing works in the response",
        "Where testing still falls short",
        "What has worked elsewhere",
        "What should be done"
      ],
      sources: [
        { name: "UN News (WHO)", date: "2026-11-17", url: "https://news.un.org/en/story/2026/11/1168827" },
        { name: "Al Jazeera (Reuters, Africa CDC)", date: "2026-11-15", url: "https://www.aljazeera.com/news/2026/11/15/africa-cdc-says-ebola-outbreak-in-dr-congo-still-not-under-control" }
      ]
    },
    {
      id: "child-labour-refugees-ethiopia",
      date: "2026-11-16",
      for: ["pavious"],
      focus: "health",
      photo: "au-addis",
      dispatch: "ethiopia-refugee-children",
      title: "In the fields and the mines: the health of refugee children at work in Ethiopia",
      story: "A study by UNHCR and Oxford University, reported by UN News on 16 November, finds that children are 52 per cent of Ethiopia's 1.1 million refugees and that 31,000 children are separated from their parents or guardians. In 2025 UNHCR's Ethiopia operation was less than one-third funded and only 18 per cent of planned child protection needs were covered. Funding shortfalls affected 57 primary schools serving some 110,000 refugee children, and field observations point to more child labour, including in farming and informal mining.",
      why: "Work in farming and informal mining exposes children to health risks, which makes child labour in refugee settings a question of occupational health and disease prevention as well as of protection and hosting as aid shrinks.",
      angles: [
        "What health risks children face in farming and informal mining, using what health and labour agencies have published.",
        "How school funding gaps and child labour are linked in refugee households, and what the field observations show.",
        "What has kept refugee children out of hazardous work elsewhere, for example in Uganda's settlements or on the Thai–Myanmar border, that could work in Ethiopia?"
      ],
      titles: [
        "Too Young for the Mine",
        "When the School Closes, the Work Begins",
        "The Health Cost of Aid Cuts for Refugee Children"
      ],
      outline: [
        "What the UNHCR study found",
        "The work children are doing and its health risks",
        "Why aid cuts push children into work",
        "What should be done"
      ],
      sources: [
        { name: "UN News (UNHCR)", date: "2026-11-16", url: "https://news.un.org/en/story/2026/11/1168811" }
      ]
    },
    {
      id: "refugee-children-ethiopia",
      date: "2026-11-16",
      for: ["albert", "yidnekachew"],
      focus: "health",
      photo: "au-addis",
      dispatch: "ethiopia-refugee-children",
      title: "Fewer hands to find a family: refugee children in Ethiopia as aid falls",
      story: "A study by UNHCR and Oxford University, reported by UN News on 16 November, finds that children are 52 per cent of Ethiopia's 1.1 million refugees, who come mostly from South Sudan, Somalia, Eritrea and Sudan, and that 31,000 children are separated from their parents or guardians. In 2025 UNHCR's Ethiopia operation was less than one-third funded and only 18 per cent of planned child protection needs were covered. Children supported with family tracing and reunification fell from 4,071 in 2024 to 1,887 in 2025, and alternative care for unaccompanied children fell by around half. Funding shortfalls affected 57 primary schools serving some 110,000 refugee children, and field observations point to more child labour, including in farming and informal mining.",
      why: "How refugee households cope when protection, schooling and care shrink is a question of humanitarian support and of welfare, and it sits at the heart of the border health and displacement focus area: hosting people for years as aid falls.",
      angles: [
        "What happens to separated children when family tracing support halves: who looks after them, and for how long.",
        "How school funding gaps and child labour are linked in refugee households, and what the field observations show.",
        "What has kept refugee children in school and out of work elsewhere, for example in Uganda's settlements or on the Thai–Myanmar border, that could work in Ethiopia?"
      ],
      titles: [
        "31,000 Children Waiting to Be Found",
        "From Classroom to Mine: What Aid Cuts Mean for Refugee Children in Ethiopia",
        "Half the Tracing, Half the Care"
      ],
      outline: [
        "What the study found",
        "Separated children and the care gap",
        "Schools, work and household budgets",
        "What has worked elsewhere",
        "What should be done"
      ],
      sources: [
        { name: "UN News (UNHCR)", date: "2026-11-16", url: "https://news.un.org/en/story/2026/11/1168811" }
      ]
    },
    {
      id: "return-hub-rwanda",
      date: "2026-11-17",
      for: ["albert"],
      focus: "peace",
      photo: "kigali",
      dispatch: "rwanda-return-hub",
      title: "A second chance or a transfer of responsibility? Europe's return hub in Rwanda",
      story: "Austria, Denmark, Germany, Greece and the Netherlands announced plans on 16 November, at a migration conference in Vienna, for a return hub in Rwanda for people whose asylum claims have been rejected in Europe, AP reported. Austria's chancellor said the first centre would be set up next year; Denmark's immigration minister said a full agreement is expected within the next few months. No numbers were given and no agreement has been signed. Rwanda's interior minister, Vincent Biruta, said arrivals would be offered voluntary return home, integration in Rwanda or relocation to a country where they have a right to live, with UNHCR involved and an independent monitoring mechanism. European lawmakers voted in June to allow such centres outside the EU; a 2022 UK–Rwanda deal was ruled unlawful by the UK Supreme Court and scrapped in 2024. UNHCR supports return hubs only if they meet human rights standards, and rights groups oppose the plan. On 17 November the UN human rights chief, Volker Türk, raised concerns about the human rights risks of the proposal; his office has not seen its text, UN News reported.",
      why: "The plan is an agreement between governments about people on the move, so it bears on international relations and on migration and humanitarian support, and on how Great Lakes states deal with partners outside the region.",
      angles: [
        "What the agreement would need to say about monitoring, UNHCR's role and the three options offered, for it to work as described.",
        "How the plan compares with the UK–Rwanda deal, using what officials and the courts have said.",
        "What has worked when countries in Africa or Southeast Asia agreed with partners abroad on returns or resettlement, and which safeguards made the difference?"
      ],
      titles: [
        "Three Options and a Monitor: Reading Europe's Rwanda Plan",
        "After the UK Deal, a European One",
        "Rejected in Europe, Received in Kigali"
      ],
      outline: [
        "What was announced in Vienna",
        "What Rwanda says it will offer",
        "What is still undecided",
        "Lessons from other return and resettlement agreements",
        "What should be done"
      ],
      sources: [
        { name: "UN News (OHCHR)", date: "2026-11-17", url: "https://news.un.org/en/story/2026/11/1168827" },
        { name: "AP (via Yahoo News)", date: "2026-11-16", url: "https://www.yahoo.com/news/world/articles/austrian-leader-says-5-european-152226068.html" }
      ]
    },
    {
      id: "kivu-offensive",
      date: "2026-11-10",
      for: ["ohn"],
      focus: "peace",
      photo: "bukavu",
      dispatch: "drc-south-kivu",
      title: "After the deal, a new front: South Kivu's road to Walikale",
      story: "Fighters of the FRN, the new name of AFC/M23, launched an offensive in South Kivu on the night of 6 to 7 November, crossed Kahuzi-Biega National Park and took several localities on National Route 3 from Bukavu towards Walikale, including Bunyakiri, Bitale, Bulambika and Kambali, AFP and RFI reported. OCHA said on 11 November that more than 323,000 people, about 54,000 households, fled their homes in Kalehe and Kabare territories after clashes from 6 to 9 November, and that no aid had yet reached them; the administrator of Kalehe territory had earlier put the number above 160,000. AFP said front lines had been relatively stable since DR Congo and Rwanda signed a US-brokered peace deal in December; Walikale is a strategic road junction and one of the army's main bases in North Kivu.",
      why: "The offensive tests whether signed agreements can hold on the ground, which is at the heart of intergovernmental relations, peace and conflict in the Great Lakes, and it adds new displacement to a region already facing Ebola and hunger.",
      angles: [
        "What the peace deal and the ceasefire monitoring arrangements provide for when fighting resumes, and who is responsible for acting.",
        "The people on the road: where those displaced from Kalehe and Kabare territories go, and what host communities and agencies can offer them.",
        "What has helped ceasefires hold elsewhere, for example in Southeast Asia's border conflicts, that the Great Lakes could adapt?"
      ],
      titles: [
        "A Signed Deal and a New Front on the Road to Walikale",
        "323,000 on the Move in Kalehe and Kabare",
        "When a Ceasefire Stays on Paper"
      ],
      outline: [
        "What happened in South Kivu",
        "What the agreements say about fighting like this",
        "The displaced: needs and who meets them",
        "What should be done"
      ],
      sources: [
        { name: "Actualité.cd (OCHA)", date: "2026-11-12", url: "https://actualite.cd/2026/11/12/rdc-la-suite-dintenses-combats-au-sud-kivu-plus-de-323-000-deplaces-enregistres-en" },
        { name: "RFI (via PressAfrik)", date: "2026-11-10", url: "https://pressafrik.com/RDC-offensive-des-combattants-du-FRN-au-Sud-Kivu-plusieurs-localites-tombent-sous-leur-controle_a314369.html" },
        { name: "AFP (via New Vision)", date: "2026-11-09", url: "https://www.newvision.co.ug/category/world/dr-congo-armed-rebellion-advances-in-eastern-NV_243896_112026" }
      ]
    },
    {
      id: "children-near-conflict",
      date: "2026-11-19",
      for: ["ohn", "albert"],
      focus: "peace",
      photo: "bukavu",
      dispatch: "children-conflict",
      title: "260 million children within 50 km of war: what the new count means for Africa",
      story: "A Save the Children report released on 19 November, with research by the Peace Research Institute Oslo, says about 260 million children in Africa, two in five, lived within 50 km of armed conflict in 2025, nearly 20 percent more than in 2024, RFI reported. Africa accounted for 44 percent of such children worldwide. Verified cases of sexual violence against children rose from 358 to 592 in DR Congo and from 74 to 193 in Sudan between 2024 and 2025, and verified incidents of aid being blocked rose from 509 in 2015 to 8,322 in 2025.",
      why: "Children near conflict are among those most often displaced across borders, so the count bears on security and conflict resolution, on humanitarian and community support, and on how governments in the region cooperate to protect them as aid shrinks.",
      angles: [
        "What living within 50 km of conflict means for a child's schooling, health and safety, and how the count is made.",
        "Why verified incidents of blocked aid have risen so sharply, and what regional bodies such as the AU, EAC or IGAD can do about access.",
        "What has protected children in conflict and displacement elsewhere, for example in Southeast Asia's border camps, that could work in eastern DR Congo or Sudan?"
      ],
      titles: [
        "Two in Five: Africa's Children Within Reach of War",
        "Fifty Kilometres From the Fighting",
        "When Aid Is Blocked, Children Pay First"
      ],
      outline: [
        "What the report counts",
        "Where the risks are rising: DR Congo and Sudan",
        "Why blocked aid matters",
        "What has worked elsewhere",
        "What should be done"
      ],
      sources: [
        { name: "RFI (via allAfrica, Save the Children)", date: "2026-11-19", url: "https://allafrica.com/stories/202611200104.html" }
      ]
    },
    {
      id: "ebola-money",
      date: "2026-11-15",
      for: ["yidnekachew", "badri", "dominick"],
      focus: "health",
      photo: "goma-kivu",
      dispatch: "ebola",
      title: "Pledged but not paid: money, payroll and the Ebola response",
      story: "Africa CDC's director-general, Jean Kaseya, told Reuters on 15 November that only $1.3 billion of the $2.9 billion pledged by donors for the Ebola response has been released, and that DR Congo is digitising the payroll of health workers who have gone months without pay, Al Jazeera reported. He called coordination between donors and DR Congo “a collective failure”. WHO said on 15 November that delays in paying frontline health workers and responders create tension and slow the response, and that fast, flexible funding must be sustained through 2027. Government data show more than 11,200 cases and 5,500 deaths in eight of DR Congo's 26 provinces.",
      why: "How money reaches the front line, and how health workers are paid, decides whether an outbreak response can keep going. It is a question of public finance and administration as much as of public health.",
      angles: [
        "Where pledged money goes before it reaches a health worker, and why releases lag behind pledges.",
        "What digitising a payroll can and cannot fix when health workers have gone unpaid for months.",
        "What has worked to pay health workers on time in past outbreaks, in Africa or in Southeast Asia, that could help now?"
      ],
      titles: [
        "$1.3 Billion of $2.9 Billion: The Gap Between Pledges and the Front Line",
        "Unpaid in an Outbreak: Why Payroll Matters for Ebola",
        "Paying the People Who Stop Ebola"
      ],
      outline: [
        "What has been pledged and what has been released",
        "Why late pay slows a response",
        "What has worked elsewhere to pay health workers on time",
        "What should be done"
      ],
      sources: [
        { name: "Al Jazeera (Reuters, Africa CDC)", date: "2026-11-15", url: "https://www.aljazeera.com/news/2026/11/15/africa-cdc-says-ebola-outbreak-in-dr-congo-still-not-under-control" },
        { name: "WHO Regional Office for Africa", date: "2026-11-15", url: "https://www.afro.who.int/countries/democratic-republic-of-congo/news/six-months-accessing-hard-reach-communities-key-halting-ebola-outbreak" }
      ]
    },
    {
      id: "points-of-entry",
      date: "2026-11-15",
      for: ["dominick"],
      focus: "health",
      photo: "goma-kivu",
      dispatch: "ebola",
      title: "Screening at the border, not closing it",
      story: "More than 11,200 Ebola cases and 5,500 deaths had been reported in DR Congo by 15 November, according to government data reported by Al Jazeera and Reuters; eight of the country's 26 provinces are affected. Kenya recorded nine cases linked to an imported case, including two deaths; WHO said on 11 November that Kenya has discharged its last patient and begun a 42-day countdown to being declared Ebola-free. Nigeria has one imported case, and Uganda's outbreak has been controlled since August. There is no approved vaccine or treatment for the Bundibugyo virus; the Tumaini ring-vaccination trial began in Bunia on 23 October.",
      why: "WHO advises against restricting travel to or trade with affected countries and recommends cross-border surveillance and monitoring at points of entry; Kenya had screened 760,415 travellers at points of entry by 5 November. On 3 November Africa CDC asked Saudi Arabia to lift broad travel restrictions on Kenya, saying an imported case does not by itself show a failure of national health security and that such restrictions can undermine outbreak reporting. This is border health in practice, at scale.",
      angles: [
        "What a point of entry needs to work during an outbreak: trained staff, shared data with the neighbouring country, and a clear referral path for a sick traveller.",
        "Who screening misses: people who cross away from official posts, and what community surveillance can add.",
        "Compare a Great Lakes crossing with a Thai–Myanmar crossing such as Mae Sai or Mae Sot: what could each region's teams learn from the other?",
        "Screening or shutting out: what happens to a country's willingness to report a case when others answer with travel bans?"
      ],
      titles: [
        "Screening Without Shutting the Gate",
        "760,000 Travellers and One Question: Who Was Missed?",
        "What a Border Post Learns in an Outbreak"
      ],
      outline: [
        "What is happening: the outbreak and the response at the borders",
        "What screening at points of entry can and cannot catch",
        "A comparison with a crossing on the Thai–Myanmar border",
        "What should be done"
      ],
      sources: [
        { name: "WHO Director-General", date: "2026-11-11", url: "https://www.who.int/news-room/speeches/item/who-director-general-s-opening-remarks-at-the-member-state-briefing-on-ebola-outbreak-in-the-democratic-republic-of-the-congo---11-november-2026" },
        { name: "Al Jazeera (Reuters, Africa CDC)", date: "2026-11-15", url: "https://www.aljazeera.com/news/2026/11/15/africa-cdc-says-ebola-outbreak-in-dr-congo-still-not-under-control" },
        { name: "ECDC", date: "2026-11-06", url: "https://www.ecdc.europa.eu/en/epipulse_event/2121" },
        { name: "Africa CDC", date: "2026-11-03", url: "https://africacdc.org/news-item/africa-cdc-stands-with-kenya-calls-for-lifting-of-unjustified-ebola-travel-restrictions/" },
        { name: "WHO Disease Outbreak News", date: "2026-11-06", url: "https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON625" }
      ]
    },
    {
      id: "outbreak-under-fire",
      date: "2026-11-11",
      for: ["dominick"],
      focus: "health",
      photo: "goma-kivu",
      dispatch: "ebola",
      title: "An outbreak response under fire in Beni",
      story: "An overnight attack in Beni territory, North Kivu, killed at least 30 civilians, burned homes and destroyed a health centre, where several patients were killed, OCHA said on 6 November. People who had been in contact with Ebola patients reportedly fled an observation centre, and response teams suspended operations. WHO reports that daily follow-up of contacts averaged 86 per cent over 14 days, below the 95 per cent target, and North Kivu has 2,593 confirmed cases and 1,422 deaths. On 11 November WHO's Director-General said more than 1,000 contacts had been lost to follow-up and three confirmed cases were unaccounted for, and that an attack on Cantine-Aloya had killed 66 civilians, including three health workers, and that three health facilities were looted and burned.",
      why: "Contact tracing and observation are the core of containing Ebola, and insecurity interrupts both. The UN praised frontline health workers, most of them Congolese, who continue to work amid the fighting.",
      angles: [
        "What happens to contact follow-up when contacts flee an observation centre, and how teams can find them again.",
        "How outbreak teams in conflict zones keep working: community health workers, local leaders and safe access.",
        "What border health teams in neighbouring countries should watch for when a response is interrupted near the border."
      ],
      titles: [
        "When the Contacts Run: Ebola Tracing in a War Zone",
        "86 Per Cent Is Not Enough: Following Ebola Contacts in North Kivu",
        "A Health Centre Burned in Beni, and What It Costs the Response"
      ],
      outline: [
        "What happened in Beni and what it interrupted",
        "Why contact follow-up matters, in numbers",
        "Working through insecurity: what has helped elsewhere",
        "What should be done"
      ],
      sources: [
        { name: "WHO Director-General", date: "2026-11-11", url: "https://www.who.int/news-room/speeches/item/who-director-general-s-opening-remarks-at-the-member-state-briefing-on-ebola-outbreak-in-the-democratic-republic-of-the-congo---11-november-2026" },
        { name: "UN News (OCHA)", date: "2026-11-06", url: "https://news.un.org/en/story/2026/11/1168757" },
        { name: "WHO Disease Outbreak News", date: "2026-11-06", url: "https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON625" }
      ]
    },
    {
      id: "sea-boundary-talks",
      date: "2026-11-21",
      for: ["aaron"],
      focus: "peace",
      photo: "bangkok-river",
      dispatch: "thai-cambodia-talks",
      title: "Talk directly or go to conciliation: Thailand, Cambodia and their sea boundary",
      story: "Thai Prime Minister Anutin Charnvirakul said on 21 November that he had told Cambodian Prime Minister Hun Manet that Thailand would stop all other bilateral negotiations if Cambodia continued compulsory conciliation over their maritime boundary, The Nation reported. Cambodia began the proceedings under the UN Convention on the Law of the Sea on 2 June; the commission's recommendations are not binding, and it is due to meet both delegations in Kuala Lumpur from 24 to 27 November. In September Cambodia's foreign minister, Prak Sokhonn, told the commission Cambodia wanted a treaty on a single maritime boundary and was also willing to reach an interim agreement to develop and share resources jointly. Anutin said the two countries should negotiate directly, that reopening border checkpoints had not yet been discussed, and that joint mine clearance should continue. On 31 October he said the land crossings would stay closed until Thailand's concerns, including online scam operations, are addressed, Thaiger reported.",
      why: "It shows the choice governments face between direct negotiation and procedures under international conventions, a core question of intergovernmental relations and policy, between two ASEAN members.",
      angles: [
        "What compulsory conciliation under the Law of the Sea is, and what it can and cannot decide.",
        "How a long land-border closure affects trade and people living near the border.",
        "How neighbours in Africa or Southeast Asia have settled boundary disputes, directly or with third parties, and what made those settlements last."
      ],
      titles: [
        "Four Days in Kuala Lumpur: A Sea Boundary and a Closed Border",
        "Direct Talks or Conciliation? Thailand and Cambodia Choose Their Path",
        "When the Word Is 'Compulsory'"
      ],
      outline: [
        "What the two governments said",
        "How conciliation under the Law of the Sea works",
        "The closed land border and those who live along it",
        "How other neighbours settled their boundaries",
        "What should be done"
      ],
      sources: [
        { name: "The Nation Thailand", date: "2026-11-21", url: "https://www.nationthailand.com/news/general/40073765" },
        { name: "Thaiger", date: "2026-11-01", url: "https://thethaiger.com/news/national/thailand-cambodia-border-stay-shut-demands-met" }
      ]
    },
    {
      id: "trade-on-the-moei",
      date: "2026-11-13",
      for: ["aaron"],
      focus: "peace",
      photo: "moei-bridge",
      dispatch: "tak-border",
      title: "When a neighbour's war closes the back door: Thailand's seven-day trade suspension at Mae Sot",
      story: "On 29 October, ammunition from clashes near Myawaddy in Karen State, between Myanmar government troops, ethnic armed groups and other resistance forces, crossed into Thailand and injured a resident of Mae Sot. The commander of Thailand's Naresuan Force ordered the Mae Sot Customs House to suspend imports and exports through unofficial crossings from 30 October to 5 November; authorised crossings are not closed. On 31 October, two bombs dropped by Myanmar military aircraft across the Salween River damaged a health centre, a meeting hall and a church in Mae Sam Laep, Mae Hong Son, with no one hurt. On 2 November, Thailand's armed forces chief summoned Myanmar's military attaché and urged caution along the border, and Prime Minister Anutin Charnvirakul said the army would protect Thai sovereignty; a local official in Mae Sam Laep said the airstrikes were disrupting trade and asked for a safe zone on the Thai side. Thailand's army said on 9 November it had stepped up round-the-clock patrols, including in Mae Sot district, and on the same day Thailand's Interior Ministry told governors of 10 border provinces to prepare shelters, evacuation plans and temporary safe areas after stray bullets and shell fragments from fighting near Phalu village damaged homes in Mae Sot, Thaiger reported. On 12 November Foreign Minister Sihasak Phuangketkeow, visiting Myanmar, urged it to keep its military operations from affecting people on the Thai side, and both sides agreed to work more closely against drug trafficking and online scams, The Nation reported.",
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
        "A comparison with the Great Lakes",
        "What should be done"
      ],
      sources: [
        { name: "The Nation Thailand", date: "2026-11-13", url: "https://www.nationthailand.com/news/asean/40073452" },
        { name: "Thaiger", date: "2026-11-10", url: "https://thethaiger.com/news/national/thailand-myanmar-border-provinces-alert" },
        { name: "The Nation Thailand", date: "2026-11-10", url: "https://www.nationthailand.com/news/asean/40073279" },
        { name: "Malay Mail", date: "2026-11-04", url: "https://www.malaymail.com/news/world/2026/11/04/thailands-foreign-minister-visits-myanmar-amid-border-clashes-a-coup-ahead-of-asean-summit/241955" },
        { name: "DVB", date: "2026-11-03", url: "https://english.dvb.no/thailand-warns-myanmar-military-attache-to-exercise-caution-over-border-airstrikes/" },
        { name: "The Nation Thailand", date: "2026-10-30", url: "https://www.nationthailand.com/news/general/40072918" },
        { name: "Thaiger", date: "2026-11-01", url: "https://thethaiger.com/news/national/myanmar-bombs-near-thai-border-village-damage-health-centre" }
      ]
    },
    {
      id: "asean-manila",
      date: "2026-11-15",
      for: ["aaron"],
      focus: "peace",
      photo: "manila",
      dispatch: "asean-summit",
      title: "Step by step: ASEAN's conditional offer to Myanmar",
      story: "Meeting in Manila on 15 November, ASEAN leaders agreed to pursue “a calibrated engagement with Myanmar through a phased and progress-based approach” and may restore its full political representation if there is sustained and concrete progress on the Five-Point Consensus, The Manila Times reported. Thailand, which shares a long border with Myanmar, backs this approach; its foreign minister said “we need someone at the table who can speak on behalf of Myanmar”. Myanmar's president was again barred from the summit, and Myanmar sent a foreign ministry director-general, Philstar reported. Myanmar has been excluded from high-level meetings since the 2021 coup. Related summits, including the East Asia Summit, run until 17 November.",
      why: "How a regional body deals with a member in conflict is at the centre of the peace and conflict focus area, and the AU, IGAD and the EAC face similar choices about suspension, engagement and mediation.",
      angles: [
        "What the Five-Point Consensus asks for, and what “phased and progress-based” could mean in practice.",
        "Who judges progress, and what neighbouring countries such as Thailand want from engagement.",
        "How has the AU handled the return of suspended members, and what could ASEAN and the AU learn from each other?"
      ],
      titles: [
        "A Seat Earned Step by Step: ASEAN and Myanmar",
        "Five Points, Five Years and a Phased Offer",
        "Suspend or Engage: What ASEAN and the AU Can Learn From Each Other"
      ],
      outline: [
        "What the leaders agreed in Manila",
        "The Five-Point Consensus and how progress would be judged",
        "A comparison with the AU",
        "What should be done"
      ],
      sources: [
        { name: "The Manila Times", date: "2026-11-15", url: "https://www.manilatimes.net/2026/11/15/news/asean-seeks-calibrated-engagement-with-myanmar-statement/2470262" },
        { name: "Philstar", date: "2026-11-15", url: "https://www.philstar.com/headlines/2026/11/15/2570333/asean-summit-day-1-south-china-sea-indonesia-haze-myanmar-review" }
      ]
    },
    {
      id: "south-sudan-vote",
      date: "2026-11-14",
      for: ["ohn"],
      focus: "peace",
      photo: "juba",
      dispatch: "south-sudan-elections",
      title: "Postponed again: South Sudan's first vote moves to February 2027",
      story: "South Sudan's election commission said on 14 November that the presidential and parliamentary elections set for 22 December will be held on 11 February 2027, without giving a reason, AFP reported via Al Jazeera. They would be the first since independence in 2011; the vote has been postponed at least three times since 2022. Voter registration runs from 14 to 28 November at 3,161 centres with more than 22,000 staff, and the campaign is set for 27 December to 9 February. About 90 per cent of the 15 million inhabitants lack state-recognised identification, according to the World Bank, as cited by AFP. Fighting along the Nasir–Ulang corridor in Upper Nile has displaced more than 35,000 people, and about 2.5 million people face emergency hunger and 73,300 catastrophe, according to UN figures.",
      why: "Elections in a country with fighting at home and a war next door in Sudan bring together the peace and conflict and displacement focus areas: who can register and vote, and what regional bodies can do in the extra weeks, are questions the Great Lakes and Southeast Asia have both faced.",
      angles: [
        "Who can register between 14 and 28 November, and who may be left out: displaced people in Upper Nile, returnees from Sudan, people without identity documents.",
        "What the AU, IGAD and the UN can do with the extra time before 11 February.",
        "What has helped elections held during conflict elsewhere, in Africa or in Southeast Asia, and what could be used in South Sudan?"
      ],
      titles: [
        "Eleven More Weeks: What South Sudan Can Do Before February",
        "Registering to Vote Without an ID Card",
        "A First Election, Postponed Once More"
      ],
      outline: [
        "What happened: the new date and the registration period",
        "Who can take part, and who may be left out",
        "What the UN, the AU and IGAD can do before 11 February",
        "What should be done"
      ],
      sources: [
        { name: "Al Jazeera (AFP)", date: "2026-11-14", url: "https://www.aljazeera.com/news/2026/11/14/south-sudan-postpones-first-ever-national-elections-until-february" },
        { name: "UN News", date: "2026-11-10", url: "https://news.un.org/en/story/2026/11/1168774" }
      ]
    },
    {
      id: "rivers-across-the-line",
      date: "2026-11-16",
      for: ["badri"],
      focus: "rivers",
      photo: "mae-sai-towns",
      dispatch: "border-rivers",
      title: "Arsenic across the line: governing pollution in the Kok and Sai rivers",
      story: "Arsenic and heavy metals above standard limits have been found in the Kok and Sai rivers, which Thailand shares with Myanmar's Shan State, The Nation reported on 10 November. Foreign Minister Sihasak Phuangketkeow called the pollution quite severe, citing the latest report of the Ministry of Natural Resources and Environment, and Thai ministers said it is believed to come from mining in Shan State. A joint working group on water quality management in boundary and transboundary rivers is to finalise its terms of reference, with representatives from Myanmar and Shan State. During Sihasak's visit to Myanmar on 12 November, both sides agreed to convene the working group as soon as possible, and senior officials from both countries will make a joint field visit, The Nation reported on 13 November. In Mae Sai, the Provincial Waterworks Authority cut supply for 14 villages to 60 per cent on 5 November because of very high turbidity and arsenic in the raw water; supply was back to about 80 per cent by 9 November, The Nation reported. On 16 November The Thaiger reported that Thailand will raise the mines' pollution with China in talks from 16 to 18 November.",
      why: "Pollution in a shared river is a public administration problem on both sides of a border. In Thailand, the Department of Fisheries, the Land Development Department, the Pollution Control Department, which has set up seven monitoring stations this year, the Provincial Waterworks Authority and the public health ministry each handle a part, The Nation reports.",
      angles: [
        "What the working group's terms of reference would need to cover to work: joint sampling, shared data, timelines, and who reports to whom.",
        "How several Thai agencies divide the work of testing water, soil and fish and telling residents what is safe, and where the gaps are.",
        "What has worked elsewhere when mining pollution crosses a border into a shared river, in the Mekong or the Great Lakes, and could it work on the Kok and Sai?"
      ],
      titles: [
        "Arsenic Across the Line",
        "Seven Stations and a Working Group: Can Thailand and Myanmar Clean the Kok?",
        "Who Answers for a River Polluted Upstream?"
      ],
      outline: [
        "What has been found in the Kok and Sai",
        "Who does what on the Thai side",
        "What the joint working group could agree",
        "Lessons from other shared rivers",
        "What should be done"
      ],
      sources: [
        { name: "The Thaiger", date: "2026-11-16", url: "https://thethaiger.com/news/northern-thailand/myanmar-mine-pollution-thailand-to-raise-issue-with-china" },
        { name: "The Nation Thailand", date: "2026-11-13", url: "https://www.nationthailand.com/news/asean/40073452" },
        { name: "The Nation Thailand", date: "2026-11-10", url: "https://www.nationthailand.com/news/politics/40073332" },
        { name: "The Nation Thailand", date: "2026-11-09", url: "https://www.nationthailand.com/news/general/40073283" }
      ]
    }
  ]
};
