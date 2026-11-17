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
  updated: "2026-11-18",
  items: [
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
      for: ["ohn", "albert"],
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
      story: "Fighters of the FRN, the new name of AFC/M23, launched an offensive in South Kivu on the night of 6 to 7 November, crossed Kahuzi-Biega National Park and took several localities on National Route 3 from Bukavu towards Walikale, including Bunyakiri, Bitale, Bulambika and Kambali, AFP and RFI reported. The administrator of Kalehe territory estimates that more than 160,000 people have been displaced, some towards Hombo and others into the forest. AFP said front lines had been relatively stable since DR Congo and Rwanda signed a US-brokered peace deal in December; Walikale is a strategic road junction and one of the army's main bases in North Kivu.",
      why: "The offensive tests whether signed agreements can hold on the ground, which is at the heart of intergovernmental relations, peace and conflict in the Great Lakes, and it adds new displacement to a region already facing Ebola and hunger.",
      angles: [
        "What the peace deal and the ceasefire monitoring arrangements provide for when fighting resumes, and who is responsible for acting.",
        "The people on the road: where those displaced from Kalehe territory go, and what host communities and agencies can offer them.",
        "What has helped ceasefires hold elsewhere, for example in Southeast Asia's border conflicts, that the Great Lakes could adapt?"
      ],
      titles: [
        "A Signed Deal and a New Front on the Road to Walikale",
        "160,000 on the Move in Kalehe",
        "When a Ceasefire Stays on Paper"
      ],
      outline: [
        "What happened in South Kivu",
        "What the agreements say about fighting like this",
        "The displaced: needs and who meets them",
        "What should be done"
      ],
      sources: [
        { name: "RFI (via PressAfrik)", date: "2026-11-10", url: "https://pressafrik.com/RDC-offensive-des-combattants-du-FRN-au-Sud-Kivu-plusieurs-localites-tombent-sous-leur-controle_a314369.html" },
        { name: "AFP (via New Vision)", date: "2026-11-09", url: "https://www.newvision.co.ug/category/world/dr-congo-armed-rebellion-advances-in-eastern-NV_243896_112026" }
      ]
    },
    {
      id: "food-aid-cuts",
      date: "2026-11-12",
      for: ["yidnekachew", "albert", "badri"],
      focus: "health",
      photo: "khartoum-confluence",
      dispatch: "sudan-food",
      title: "900,000 fewer: who loses food aid when the budget shrinks in Sudan",
      story: "WFP's new Executive Director, Luke Lindberg, visited displaced families in Goz El Salam camp in Kosti, Daba Nayra camp in Tawila, North Darfur, and Ad Dabba in Northern State on his first field mission, UN News reported on 12 November. In August WFP fed more than 4 million people, including 880,000 in areas at risk of famine; funding cuts have forced it to scale back to just over 3 million, and an estimated 900,000 vulnerable people have lost their food assistance. WFP needs $520 million to provide food and nutrition to 5.4 million people through April 2027; insecurity, blocked roads and flood damage are hampering deliveries.",
      why: "Food security and welfare for displaced people depend on aid budgets that are shrinking. How cuts are made, and what replaces them, is a question of development economics, of humanitarian support and of public administration, and it bears on hosting as aid shrinks across all three regions.",
      angles: [
        "How agencies decide who keeps food aid when budgets fall, and what that means for the people cut off.",
        "What 900,000 people do after losing food aid: coping, moving or borrowing, and what that costs later.",
        "What has made food budgets go further elsewhere, such as cash transfers in Uganda's settlements or support for refugee work on the Thai–Myanmar border, that could work in Sudan?"
      ],
      titles: [
        "900,000 Fewer: Sudan's Food Aid After the Cuts",
        "From 4 Million to 3: Who Was Left Out?",
        "Feeding the Displaced on a Shrinking Budget"
      ],
      outline: [
        "What has changed in Sudan's food aid",
        "Who loses out, and how the cuts are decided",
        "What has worked elsewhere",
        "What should be done"
      ],
      sources: [
        { name: "UN News (WFP)", date: "2026-11-12", url: "https://news.un.org/en/story/2026/11/1168793" }
      ]
    },
    {
      id: "scam-way-home",
      date: "2026-11-07",
      for: ["aaron"],
      focus: "peace",
      photo: "shwe-kokko",
      dispatch: "scam-compounds",
      title: "Rescued, then stranded: the way home from the scam compounds",
      story: "Cambodia's anti-scam commission said on 7 November that since July 2025 it has raided 972 scam sites, sent home 23,760 foreigners and indicted 5,032 suspects, Xinhua reported. The United States announced sanctions on 5 November on four individuals and 41 entities linked to the Cambodia-based Prince Group, building on measures from October 2025 and June 2026; the US Embassy in Nairobi said hundreds of Kenyans were rescued from scam centres in Southeast Asia in 2026. AP reports that after Cambodia's crackdown, which ramped up in January, tens of thousands of former workers ended up in Phnom Penh; many had their passports seized by employers, faced fines for staying without proper visas and had to be interviewed by immigration officials before leaving. Uganda's ambassador to Malaysia has helped more than 1,000 former workers, mostly Ugandans, and AP reports that thousands who could not afford flights got no help from their home countries.",
      why: "Trafficking of East Africans into scam compounds is part of the peace and conflict focus area, and getting victims home depends on how governments in both regions work together: on screening for trafficking, on documents and on the cost of return.",
      angles: [
        "Who pays for the flight home, and what African governments and embassies in Southeast Asia have done so far.",
        "Victim or offender: how the screening of trapped workers for trafficking indicators shapes what happens to them.",
        "What a regional channel between the EAC and ASEAN states could do that bilateral rescues cannot."
      ],
      titles: [
        "Rescued, Then Stranded in Phnom Penh",
        "The Ticket Home Nobody Pays For",
        "After the Raid: East Africans Between Two Regions' Borders"
      ],
      outline: [
        "What is happening: sanctions, the crackdown and the stranded workers",
        "The obstacles to getting home: passports, fines, interviews and tickets",
        "What governments in East Africa and Southeast Asia each control",
        "What should be done"
      ],
      sources: [
        { name: "Xinhua", date: "2026-11-07", url: "https://english.news.cn/20261107/f3d34c505a5a412d96ee7a07d0f61612/c.html" },
        { name: "Capital FM (via allAfrica)", date: "2026-11-06", url: "https://allafrica.com/stories/202611060201.html" },
        { name: "AP", date: "2026-11-04", url: "https://krmg.com/2026/11/04/lured-into-an-online-scam-network-an-african-man-spent-almost-a-year-in-cambodia-trying-to-go-home/" }
      ]
    },
    {
      id: "abyei-drones",
      date: "2026-11-14",
      for: ["aaron"],
      focus: "peace",
      photo: "juba",
      dispatch: "abyei",
      title: "A year more for Abyei's peacekeepers, and a list of conditions",
      story: "The Security Council extended the mandate of UNISFA, the UN force in Abyei, until 15 November 2027 by 13 votes to none, with China and Russia abstaining, Radio Tamazuj reported on 14 November. The resolution sets benchmarks: regular talks between Sudan and South Sudan on Abyei's final status, South Sudan's withdrawal of forces from southern Abyei on a set timeline, an end to Sudanese army operations there and the full withdrawal of the RSF. It calls for faster creation of an Abyei police service and faster visas for UN police, and expects a first formed police unit to deploy within six months. South Sudan's representative said adding benchmarks cannot by itself guarantee progress. On 5 November UN peacekeeping chief Jean-Pierre Lacroix told the Council that drone strikes on 19 October killed at least 30 people in Abyei, the first attacks of their kind there.",
      why: "Abyei shows how a war in one country reaches a disputed border area between two governments: Amiet is a transit point for more than 49,000 refugees and returnees fleeing Sudan's war, and the renewed mandate ties the UN mission's future to steps both governments must take.",
      angles: [
        "What each benchmark asks of Sudan, South Sudan and the RSF, and how anyone will know whether it has been met.",
        "How a market that serves refugees, returnees and traders becomes a flashpoint, and what keeps it open.",
        "What has made joint police or border arrangements work in other disputed areas, in Africa or Southeast Asia, that could help an Abyei police service?"
      ],
      titles: [
        "Conditions for Staying: The UN's New Year in Abyei",
        "Benchmarks Are Not Peace: Reading the Abyei Resolution",
        "Thirty Dead, Thirteen Votes and One Market"
      ],
      outline: [
        "What the Security Council decided, and why it matters",
        "The benchmarks and who must meet them",
        "Refugees, returnees and trade at Amiet",
        "What has worked in other disputed areas",
        "What should be done"
      ],
      sources: [
        { name: "Radio Tamazuj", date: "2026-11-14", url: "https://www.radiotamazuj.org/en/news/article/un-extends-abyei-peacekeeping-mandate-to-november-2027" },
        { name: "UN News", date: "2026-11-05", url: "https://news.un.org/en/story/2026/11/1168749" }
      ]
    },
    {
      id: "consulates-and-complaints",
      date: "2026-11-13",
      for: ["ohn"],
      focus: "peace",
      photo: "au-addis",
      dispatch: "ethiopia-sudan",
      title: "Two neighbours, two councils: Ethiopia, Sudan and the AU Peace and Security Council",
      story: "On 1 November Sudan's government complained to the UN Security Council and the African Union's Peace and Security Council that Ethiopia lets the RSF use its territory to launch suicide drones against civilian infrastructure in Sudan. On 4 November Ethiopia ordered six staff of Sudan's consulate in the border town of Assosa to leave within 48 hours, Reuters reported, and Sudan then closed Ethiopia's consulate in Gedaref. Ethiopia denies backing the RSF and accuses Sudan, Egypt and Eritrea of backing Tigrayan rebels who launched an offensive in September; all three deny it. A day before, Ethiopia closed its embassy in Eritrea and Eritrea cut diplomatic ties, and in October Ethiopia and Egypt each expelled a diplomat, The National reports. On 13 November Sudan's army said it shot down a drone that had crossed from Ethiopia into Blue Nile state, its second such claim this month, Anadolu reported; Ethiopia had not commented.",
      why: "A dispute between two member states is now before the AU's own peace and security body as well as the UN, at a time when Sudan's war has displaced more than 14 million people (UN figures cited by Reuters). It is a live case of how governments in the Nile Basin deal with one another through regional institutions.",
      angles: [
        "What the AU Peace and Security Council can and cannot do when one member state complains about another: procedure, precedent and limits.",
        "Consulates in border towns such as Assosa and Gedaref: what is lost for people who cross the border when they close?",
        "How ASEAN has handled complaints between member states, and whether its practice of non-interference offers a contrast or a lesson."
      ],
      titles: [
        "Assosa and Gedaref: When Consulates Close on a Border",
        "A Complaint in Addis Ababa: The AU Council and a Quarrel Between Neighbours",
        "Six Diplomats, Forty-Eight Hours, One Long War"
      ],
      outline: [
        "What happened: the complaint and the expulsions",
        "The regional machinery: the AU Peace and Security Council and IGAD",
        "What closed consulates mean for people at the border",
        "A comparison with ASEAN",
        "What should be done"
      ],
      sources: [
        { name: "Anadolu Agency (via A News)", date: "2026-11-13", url: "https://www.anews.com.tr/world/2026/11/13/sudanese-army-advances-in-west-kordofan-says-it-downed-drone-from-ethiopia" },
        { name: "Reuters (via 93.3 The Drive)", date: "2026-11-04", url: "https://www.933thedrive.com/2026/11/04/ethiopia-expels-sudanese-diplomats-after-fresh-allegations-of-support-for-rsf/" },
        { name: "The National", date: "2026-11-05", url: "https://www.thenationalnews.com/news/mena/2026/11/05/sudan-and-ethiopia-in-tit-for-tat-expulsions-of-diplomats-as-tensions-rise/" }
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
      id: "ebola-risk-south-sudan",
      date: "2026-11-13",
      for: ["dominick", "pavious"],
      focus: "health",
      photo: "juba",
      dispatch: "south-sudan-ebola",
      title: "Ready before the first case: Ebola preparedness in South Sudan",
      story: "The embassies of Germany, Japan, the Netherlands, Norway, the UK and the US said in a joint statement that South Sudan faces a high risk of an Ebola outbreak, and called for public revenue to fund the health sector, including health workers' salaries, and for unhindered humanitarian access, Radio Tamazuj reported on 13 November. South Sudan's foreign ministry said no case has been confirmed and asked missions to raise concerns through official channels. WHO says South Sudan has recorded no confirmed case: of 76 suspected alerts by 30 October, 33 tested negative in the laboratory and the rest were ruled out after investigation. WHO's October assessment put the risk of Ebola being imported into South Sudan at 99 per cent, citing porous borders and population movement, while DR Congo's Bundibugyo outbreak continues.",
      why: "Preparing a country with long, porous borders for an outbreak next door is border health and surveillance at points of entry, and it depends on paid health workers and on alerts being tested quickly.",
      angles: [
        "What 76 alerts and 33 negative tests show about South Sudan's surveillance: how alerts are raised, investigated and tested.",
        "What a point of entry on the border with DR Congo needs to be ready: staff, isolation space, transport for samples.",
        "What has worked in Uganda and Kenya after imported cases, and on Thailand's borders for screening mobile populations, that could help South Sudan prepare?"
      ],
      titles: [
        "Seventy-Six Alerts, No Cases: South Sudan Waits and Watches",
        "Ready Before the First Case",
        "A 99 Per Cent Risk Next Door"
      ],
      outline: [
        "What is happening: the warning, the reply and the WHO figures",
        "How South Sudan detects and tests suspected cases",
        "What neighbours have learned from imported cases",
        "What should be done"
      ],
      sources: [
        { name: "Radio Tamazuj (WHO)", date: "2026-11-13", url: "https://radiotamazuj.org/en/news/article/south-sudan-rejects-ebola-concerns-raised-by-diplomatic-missions" }
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
        "Lessons for cooperation on shared rivers",
        "What should be done"
      ],
      sources: [
        { name: "Daily News Egypt", date: "2026-11-02", url: "https://dailynewsegypt.com/2026/11/02/egypt-sudan-reject-unilateral-ethiopian-dam-management-reaffirm-1959-nile-water-rights/" },
        { name: "Addis Standard (via allAfrica)", date: "2026-11-03", url: "https://allafrica.com/stories/202611030630.html" },
        { name: "UN News", date: "2026-10-10", url: "https://news.un.org/en/story/2026/10/1168545" }
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
      id: "lake-runs-low",
      date: "2026-11-13",
      for: ["yidnekachew"],
      focus: "rivers",
      photo: "stranded-boat",
      dispatch: "tonle-sap",
      title: "When the great lake runs low: fishing families on the Tonle Sap",
      story: "In early October the water level at Prek Kdam was nearly 7 metres, more than a metre below average and 1.5 metres lower than a year earlier, AP reported on 13 November. About 1.5 million people live on the Tonle Sap, Southeast Asia's largest lake, which grows about fivefold in the monsoon flood as its level rises and falls with the Mekong's flow. In June the UN Food and Agriculture Organization rated Cambodia at high risk of severe drought during this El Niño, with about 314,000 acres of farmland that could be affected. AP says upstream dams and sand mining are altering the Mekong's flow; Brian Eyler of the Stimson Center told AP that most fishing families also farm to supplement their income.",
      why: "Livelihoods that depend on a shared river are a question of poverty and welfare as much as of water: in a very dry year there is “less fish, less food and more fire”, Zeb Hogan of the University of Nevada, Reno, told AP.",
      angles: [
        "What a low year costs a fishing household, and which public or community support reaches it.",
        "How changes upstream, from dams to sand mining, show up in the income of families downstream.",
        "What has helped fishing communities around Lake Victoria or on the Nile when catches fall, and could it help on the Tonle Sap?"
      ],
      titles: [
        "A Metre Below Average: The Tonle Sap in a Dry Year",
        "Less Fish, Less Food: Counting the Cost of a Low Lake",
        "From Lake Victoria to the Tonle Sap: Protecting Fishing Families"
      ],
      outline: [
        "What is happening to the lake",
        "Who depends on it, and how a dry year reaches their income",
        "What has worked for fishing communities elsewhere",
        "What should be done"
      ],
      sources: [
        { name: "AP (via Arab News)", date: "2026-11-13", url: "https://www.arabnews.com/world/a-way-of-life-is-disappearing-on-cambodias-tonle-sap-lake-3011531" }
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
