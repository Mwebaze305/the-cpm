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
  updated: "2026-11-11",
  items: [
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
      date: "2026-11-05",
      for: ["aaron"],
      focus: "peace",
      photo: "juba",
      dispatch: "abyei",
      title: "Drones over Abyei: a disputed area and a war next door",
      story: "UN peacekeeping chief Jean-Pierre Lacroix told the Security Council on 5 November that drone strikes on 19 October killed at least 30 people and injured about 59 in Abyei, the first attacks of their kind there, and that threats are increasingly shaped by regional conflicts. Clashes around Amiet Common Market on 15 September left 124 dead. Sudan and South Sudan resumed formal talks in August through their Joint Political and Security Mechanism, the first since January 2023, with a meeting due in Khartoum from 8 to 10 November. At the Security Council on 5 November, Sudan objected to South Sudan's plan to include Abyei in its December elections, which a report by the UN Secretary-General says is likely to significantly increase political tensions; South Sudan said the question should be considered alongside Abyei's unresolved final status. Recorded security incidents fell by about 32 per cent compared with the same period last year, and the Council is weighing the future mandate of UNISFA.",
      why: "Abyei shows how a war in one country reaches a disputed border area between two governments: Amiet is a transit point for more than 49,000 refugees and returnees fleeing Sudan's war, and the UN special envoy urged both governments to uphold the area's demilitarised status.",
      angles: [
        "What the Joint Political and Security Mechanism can and cannot decide, and what to watch at the Khartoum meeting.",
        "How a market that serves refugees, returnees and traders becomes a flashpoint, and what keeps it open.",
        "Fewer incidents but deadlier ones: reading the UN's mixed picture of security in Abyei."
      ],
      titles: [
        "Drones Over Amiet Market",
        "Abyei Between Two Governments and One War",
        "Thirty Dead and a Meeting in Khartoum"
      ],
      outline: [
        "What happened in Abyei in September and October",
        "The two governments' talks and the UN mission's mandate",
        "Refugees, returnees and trade at Amiet",
        "What should be done"
      ],
      sources: [
        { name: "UN News", date: "2026-11-05", url: "https://news.un.org/en/story/2026/11/1168749" },
        { name: "Radio Tamazuj", date: "2026-11-05", url: "https://www.radiotamazuj.org/en/news/article/sudan-south-sudan-differ-at-un-over-abyei-election-plans" }
      ]
    },
    {
      id: "consulates-and-complaints",
      date: "2026-11-05",
      for: ["ohn"],
      focus: "peace",
      photo: "au-addis",
      dispatch: "ethiopia-sudan",
      title: "Two neighbours, two councils: Ethiopia, Sudan and the AU Peace and Security Council",
      story: "On 1 November Sudan's government complained to the UN Security Council and the African Union's Peace and Security Council that Ethiopia lets the RSF use its territory to launch suicide drones against civilian infrastructure in Sudan. On 4 November Ethiopia ordered six staff of Sudan's consulate in the border town of Assosa to leave within 48 hours, Reuters reported, and Sudan then closed Ethiopia's consulate in Gedaref. Ethiopia denies backing the RSF and accuses Sudan, Egypt and Eritrea of backing Tigrayan rebels who launched an offensive in September; all three deny it. A day before, Ethiopia closed its embassy in Eritrea and Eritrea cut diplomatic ties, and in October Ethiopia and Egypt each expelled a diplomat, The National reports.",
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
        { name: "Reuters (via 93.3 The Drive)", date: "2026-11-04", url: "https://www.933thedrive.com/2026/11/04/ethiopia-expels-sudanese-diplomats-after-fresh-allegations-of-support-for-rsf/" },
        { name: "The National", date: "2026-11-05", url: "https://www.thenationalnews.com/news/mena/2026/11/05/sudan-and-ethiopia-in-tit-for-tat-expulsions-of-diplomats-as-tensions-rise/" }
      ]
    },
    {
      id: "points-of-entry",
      date: "2026-11-06",
      for: ["dominick"],
      focus: "health",
      photo: "goma-kivu",
      dispatch: "ebola",
      title: "Screening at the border, not closing it",
      story: "ECDC counted 10,741 confirmed Ebola cases and 5,230 deaths in eight provinces of DR Congo by 4 November. Kenya has recorded nine confirmed cases and two deaths, with no new case since 19 October; 52 of its 135 contacts remain under monitoring, with follow-up expected to end on 11 November. Nigeria has one imported case, and Uganda's outbreak has been controlled since August. There is no approved vaccine or treatment for the Bundibugyo virus; the Tumaini ring-vaccination trial began in Bunia on 23 October.",
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
        { name: "ECDC", date: "2026-11-06", url: "https://www.ecdc.europa.eu/en/epipulse_event/2121" },
        { name: "Africa CDC", date: "2026-11-03", url: "https://africacdc.org/news-item/africa-cdc-stands-with-kenya-calls-for-lifting-of-unjustified-ebola-travel-restrictions/" },
        { name: "WHO Disease Outbreak News", date: "2026-11-06", url: "https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON625" }
      ]
    },
    {
      id: "outbreak-under-fire",
      date: "2026-11-06",
      for: ["dominick"],
      focus: "health",
      photo: "goma-kivu",
      dispatch: "ebola",
      title: "An outbreak response under fire in Beni",
      story: "An overnight attack in Beni territory, North Kivu, killed at least 30 civilians, burned homes and destroyed a health centre, where several patients were killed, OCHA said on 6 November. People who had been in contact with Ebola patients reportedly fled an observation centre, and response teams suspended operations. WHO reports that daily follow-up of contacts averaged 86 per cent over 14 days, below the 95 per cent target, and North Kivu has 2,593 confirmed cases and 1,422 deaths.",
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
        { name: "UN News (OCHA)", date: "2026-11-06", url: "https://news.un.org/en/story/2026/11/1168757" },
        { name: "WHO Disease Outbreak News", date: "2026-11-06", url: "https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON625" }
      ]
    },
    {
      id: "health-beyond-the-camp",
      date: "2026-10-19",
      for: ["dominick", "albert"],
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
        "What should be done"
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
        "Lessons that could travel between Uganda and Thailand",
        "What should be done"
      ],
      sources: [
        { name: "ISS Today (via Premium Times)", date: "2026-11-02", url: "https://www.premiumtimesng.com/news/headlines/922102-analysis-congolese-refugees-caught-between-war-and-closing-doors.html" }
      ]
    },
    {
      id: "hunger-in-the-east",
      date: "2026-10-30",
      for: ["yidnekachew", "badri"],
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
        "Choices for planners as assistance declines",
        "What should be done"
      ],
      sources: [
        { name: "UN News (IPC alert)", date: "2026-10-30", url: "https://news.un.org/en/story/2026/10/1168708" }
      ]
    },
    {
      id: "half-rations",
      date: "2026-11-03",
      for: ["yidnekachew", "albert"],
      focus: "health",
      photo: "bukavu",
      dispatch: "burundi-refugees",
      title: "Living on 45 per cent: refugee rations in Burundi",
      story: "WFP said on 3 November that food assistance for nearly 125,000 refugees in Burundi, most of whom fled conflict in DR Congo, could stop in January 2027 without new funding. Contributions from the United States and Belgium prevented a break expected in October and keep aid running to the end of 2026. Support now covers 45 per cent of minimum food needs. WFP needs $40 million to avoid a break and raise support to 100 per cent of minimum needs until September 2027, and $1 million for school meals for 16,000 children from refugee and host communities.",
      why: "WFP's acting country director says most refugees in Burundi rely on WFP as their main source of food, that insecurity keeps many from returning, and that limited livelihoods make it hard to earn an income. WFP is working with the government and UNHCR on livelihoods, social protection and local economic participation: a welfare question about what replaces aid as it shrinks.",
      angles: [
        "What a 45 per cent ration means for a household: what is cut first, and who in the family bears it?",
        "Livelihoods instead of rations: what would refugees in Burundi need (land, the right to work, markets) to earn their own food?",
        "Compare Burundi with Uganda's settlement model and Thailand's new work permits for refugees from Myanmar."
      ],
      titles: [
        "Forty-Five Per Cent: Feeding 125,000 Refugees on Half a Ration",
        "January Without Food Aid? Burundi's Refugees and the Funding Gap",
        "From Rations to Livelihoods in Burundi's Camps"
      ],
      outline: [
        "What is happening: the funding gap and the January deadline",
        "What reduced rations mean for households",
        "Livelihoods, social protection and host communities",
        "Lessons from Uganda and Thailand",
        "What should be done"
      ],
      sources: [
        { name: "WFP", date: "2026-11-03", url: "https://www.wfp.org/news/125000-refugees-burundi-risk-losing-food-assistance-without-urgent-funding" }
      ]
    },
    {
      id: "trade-on-the-moei",
      date: "2026-11-10",
      for: ["aaron"],
      focus: "peace",
      photo: "moei-bridge",
      dispatch: "tak-border",
      title: "When a neighbour's war closes the back door: Thailand's seven-day trade suspension at Mae Sot",
      story: "On 29 October, ammunition from clashes near Myawaddy in Karen State, between Myanmar government troops, ethnic armed groups and other resistance forces, crossed into Thailand and injured a resident of Mae Sot. The commander of Thailand's Naresuan Force ordered the Mae Sot Customs House to suspend imports and exports through unofficial crossings from 30 October to 5 November; authorised crossings are not closed. On 31 October, two bombs dropped by Myanmar military aircraft across the Salween River damaged a health centre, a meeting hall and a church in Mae Sam Laep, Mae Hong Son, with no one hurt. On 2 November, Thailand's armed forces chief summoned Myanmar's military attaché and urged caution along the border, and Prime Minister Anutin Charnvirakul said the army would protect Thai sovereignty; a local official in Mae Sam Laep said the airstrikes were disrupting trade and asked for a safe zone on the Thai side. Thailand's army said on 9 November it had stepped up round-the-clock patrols, including in Mae Sot district, and on the same day Thailand's Interior Ministry told governors of 10 border provinces to prepare shelters, evacuation plans and temporary safe areas after stray bullets and shell fragments from fighting near Phalu village damaged homes in Mae Sot, Thaiger reported. Foreign Minister Sihasak Phuangketkeow is due to visit Myanmar on 12 November.",
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
        { name: "Thaiger", date: "2026-11-10", url: "https://thethaiger.com/news/national/thailand-myanmar-border-provinces-alert" },
        { name: "The Nation Thailand", date: "2026-11-10", url: "https://www.nationthailand.com/news/asean/40073279" },
        { name: "Malay Mail", date: "2026-11-04", url: "https://www.malaymail.com/news/world/2026/11/04/thailands-foreign-minister-visits-myanmar-amid-border-clashes-a-coup-ahead-of-asean-summit/241955" },
        { name: "DVB", date: "2026-11-03", url: "https://english.dvb.no/thailand-warns-myanmar-military-attache-to-exercise-caution-over-border-airstrikes/" },
        { name: "The Nation Thailand", date: "2026-10-30", url: "https://www.nationthailand.com/news/general/40072918" },
        { name: "Thaiger", date: "2026-11-01", url: "https://thethaiger.com/news/national/myanmar-bombs-near-thai-border-village-damage-health-centre" }
      ]
    },
    {
      id: "camp-to-work",
      date: "2026-10-19",
      for: ["yidnekachew", "albert", "badri"],
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
        "What to measure in the second year",
        "What should be done"
      ],
      sources: [
        { name: "Deutsche Welle (via UA.NEWS)", date: "2026-10-19", url: "https://ua.news/en/world/tayiland-povidomiv-pro-pratsevlashtuvannia-6800-bizhentsiv-iz-mianmi-deutsche-welle" }
      ]
    },
    {
      id: "asean-manila",
      date: "2026-09-22",
      for: ["ohn"],
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
        "A question for African diplomats",
        "What should be done"
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
      id: "sudan-one-in-ten",
      date: "2026-11-10",
      for: ["ohn"],
      focus: "peace",
      photo: "khartoum-confluence",
      dispatch: "sudan",
      title: "One in ten: Sudan's displaced when aid reaches so few",
      story: "UNICEF said on 10 November that up to 15 power stations were hit in October, that drones are travelling up to 1,500 kilometres to their targets and that two in three child casualties in Sudan this year were killed by armed drones; strikes on power stop water pumps and water treatment, and cholera is spreading in pockets. UNHCR and IOM said on 6 November that agencies can assist only about one in ten people in need, and the $2.9 billion aid plan for 2026 is 47 per cent funded. UN envoy Pekka Haavisto said on 2 November that talks with the RSF on a transition to civilian rule are planned before Christmas. More than 1.4 million refugees and returnees have crossed into South Sudan since the war began in 2023.",
      why: "The war is the largest driver of displacement in the Nile Basin, and the gap between need and aid shapes how displaced and non-displaced households live; it also shows how attacks on power and fuel spread the conflict's costs beyond the front lines.",
      angles: [
        "How the livelihoods of displaced and non-displaced households differ when only one in ten people in need can be reached.",
        "What attacks on power and fuel mean for health care, water and work, beyond the immediate damage.",
        "What has helped displaced households keep an income elsewhere, for example refugee work permits in Uganda or Thailand, and whether it could work for Sudanese in neighbouring countries."
      ],
      titles: [
        "Nine Out of Ten Left Waiting",
        "When the Power Goes, So Do the Water Pumps",
        "Sudan's Displaced and the Arithmetic of Aid"
      ],
      outline: [
        "What is happening: strikes on energy and an aid plan half funded",
        "Who is reached and who is not",
        "Displaced and host households: what the numbers suggest",
        "What should be done"
      ],
      sources: [
        { name: "UN News (UNHCR and IOM)", date: "2026-11-10", url: "https://news.un.org/en/story/2026/11/1168753" },
        { name: "UN News (UNICEF)", date: "2026-11-10", url: "https://news.un.org/en/story/2026/11/1168771" },
        { name: "The National", date: "2026-11-02", url: "https://www.thenationalnews.com/news/mena/2026/11/02/talks-with-rsf-on-transition-to-civilian-rule-in-sudan-expected-within-weeks-says-un-envoy/" },
        { name: "Al Jazeera", date: "2026-10-07", url: "https://www.aljazeera.com/news/2026/10/7/south-sudans-aid-crisis-deepens-as-food-stocks-run-low" }
      ]
    },
    {
      id: "fled-again",
      date: "2026-11-04",
      for: ["ohn"],
      focus: "health",
      photo: "au-addis",
      dispatch: "ethiopia-north",
      title: "Displaced twice: northern Ethiopia's returnees on the move again",
      story: "WHO Director-General Tedros Adhanom Ghebreyesus said on 2 November that attacks in northern Ethiopia had reportedly killed civilians, including children at the Jaari 2 displacement camp in Amhara and people trying to get food in Rama, Tigray, and that the region's health system is nearing collapse: hospitals lack health workers, medicines and equipment, and ambulance services are severely limited. Addis Standard reported on 4 November that, according to the UN, families who had returned to Tahtay Adiyabo in north-western Tigray have fled again, thousands of displaced people are in Shire and Debre Birhan, and insecurity is restricting movement on roads linking Gonder with Debark and Metema. Fighting resumed in Tigray, Amhara and Afar in late September 2026, nearly four years after the November 2022 Pretoria Agreement.",
      why: "Renewed conflict in Ethiopia adds a second crisis of displacement in the Nile Basin next to Sudan's war, and shows how a peace agreement's gains in returns and recovery can be reversed when fighting resumes.",
      angles: [
        "What happens to families who returned home under the Pretoria Agreement and must now flee again.",
        "How insecurity on roads affects health care and aid for displaced people in Amhara and Tigray.",
        "What has protected returnees and health services elsewhere when a peace deal frays, for example in Myanmar's border areas or eastern DR Congo, and what could apply in northern Ethiopia."
      ],
      titles: [
        "Home for a Season, Then Gone Again",
        "The Second Flight from Tahtay Adiyabo",
        "Pretoria's Returnees on the Road Once More"
      ],
      outline: [
        "What is happening: renewed fighting and a health system under strain",
        "Who has fled, and where they are",
        "Why returns are fragile when fighting resumes",
        "What should be done"
      ],
      sources: [
        { name: "AP (via NY1)", date: "2026-11-02", url: "https://ny1.com/nyc/all-boroughs/ap-top-news/2026/11/02/ethiopia-attacks-kill-civilians-as-health-system-nears-collapse-who-chief-says" },
        { name: "Addis Standard (via allAfrica)", date: "2026-11-04", url: "https://allafrica.com/stories/202611040531.html" }
      ]
    },
    {
      id: "faster-borders",
      date: "2026-11-03",
      for: ["yidnekachew", "badri"],
      focus: "trade",
      photo: "kigali",
      dispatch: "eac-trade",
      title: "Faster borders, bigger markets: are small traders feeling the EAC's gains?",
      story: "At the opening of the 26th EAC trade fair for micro, small and medium enterprises in Kigali on 3 November, EAC Deputy Secretary General Annettee Mutaawe Ssemuwemba said border crossing times have fallen by up to 70 per cent, the Single Customs Territory has cut transit times from 18 days to four, and EAC exports to the rest of Africa rose 44 per cent to $7.2 billion, The New Times reported. Rwanda's Prime Minister Justin Nsengiyumva called for eliminating non-tariff barriers, simplifying customs, improving transport and logistics and expanding trade finance, and cited the EAC payment system and the Pan-African Payment and Settlement System. The East African Kiswahili Commission said language barriers can limit traders' access to customs rules and market information. The fair, on leather and horticulture value chains, ran until 8 November.",
      why: "Cross-border trade is one of the four focus areas, and whether faster borders reach small traders and their households is a question of welfare and poverty reduction as much as of trade statistics.",
      angles: [
        "Who benefits from shorter transit times: large freight operators, or the small traders who cross at posts such as Busia and Malaba.",
        "What the leather and horticulture value chains could mean for jobs and incomes in the region.",
        "What has worked in ASEAN to help small traders use regional agreements, for example at Mae Sot, and whether it could work in the EAC."
      ],
      titles: [
        "From 18 Days to Four: Who Gains from Faster Transit",
        "The Small Trader's Share of a Bigger Market",
        "Customs Rules in a Language You Can Read"
      ],
      outline: [
        "What the EAC reported in Kigali",
        "What faster borders mean for households and small firms",
        "The barriers that remain: non-tariff barriers, finance and language",
        "What should be done"
      ],
      sources: [
        { name: "The New Times (via allAfrica)", date: "2026-11-03", url: "https://allafrica.com/stories/202611030712.html" }
      ]
    },
    {
      id: "south-sudan-vote",
      date: "2026-11-10",
      for: ["ohn"],
      focus: "peace",
      photo: "juba",
      dispatch: "south-sudan-elections",
      title: "South Sudan's first vote: elections in six weeks, fighting and hunger now",
      story: "The UN Security Council was briefed on 10 November ahead of national elections set for 22 December, which would be South Sudan's first since independence in 2011. In September the president dissolved the transitional government, removed all vice-presidents and dissolved national and state legislatures. Fighting along the Nasir–Ulang corridor in Upper Nile has displaced more than 35,000 people. About 2.5 million people face emergency hunger (IPC Phase 4) and 73,300 catastrophe (Phase 5); at least 39 aid workers and contractors have been killed since January; and about 39,500 refugees and returnees have crossed from Sudan, according to UN figures compiled by Security Council Report. UNMISS is working with a reduced footprint because of the UN's financial crisis; the AU's High Representative for the Horn of Africa was among the briefers.",
      why: "Elections in a country at war at home and next to a war in Sudan bring together the peace and conflict and displacement focus areas: how displaced people, returnees and refugees take part, and what regional bodies can do, are questions the Great Lakes and Southeast Asia have both faced.",
      angles: [
        "Who can vote on 22 December, and where: displaced people in Upper Nile, returnees from Sudan and refugees abroad.",
        "What the AU, IGAD and the UN mission can each do in six weeks, with UNMISS working from a reduced footprint.",
        "What has helped elections held during conflict elsewhere, in Africa or in Southeast Asia, and what could be used in South Sudan."
      ],
      titles: [
        "Six Weeks to South Sudan's First Vote",
        "Ballots in Upper Nile: Voting While 35,000 Flee",
        "A First Election Between Two Wars"
      ],
      outline: [
        "What is happening: the election date, the fighting and the hunger",
        "Who can take part, and who may be left out",
        "What the UN, the AU and IGAD can do before 22 December",
        "What should be done"
      ],
      sources: [
        { name: "UN News", date: "2026-11-10", url: "https://news.un.org/en/story/2026/11/1168774" },
        { name: "Security Council Report", date: "2026-11-06", url: "https://www.securitycouncilreport.org/whatsinblue/2026/11/south-sudan-briefing-and-consultations-33.php" }
      ]
    },
    {
      id: "upstream-at-the-table",
      date: "2026-11-04",
      for: ["aaron"],
      focus: "rivers",
      photo: "golden-triangle",
      dispatch: "mekong-lmc",
      title: "Upstream at the table: what Lancang-Mekong cooperation offers on water",
      story: "At the 11th Lancang-Mekong Cooperation foreign ministers' meeting in Beijing on 4 November, co-chaired by China's Wang Yi and Thailand's Sihasak Phuangketkeow, the six members, China, Myanmar, Laos, Thailand, Cambodia and Vietnam, agreed to deepen cooperation on water resources and the environment, to combat cross-border crime and to strengthen disaster governance, Xinhua reported via CGTN. China proposed a cross-border disaster early-warning mechanism, and members agreed to prepare the fifth leaders' meeting. The framework was set up in 2016; the Lancang becomes the Mekong after it leaves China.",
      why: "Shared rivers depend on whether upstream and downstream countries talk in the same forum. The Mekong has a framework that includes the upstream country; on the Nile, Egypt and Sudan said on 2 November that the dam dispute concerns only the three Eastern Nile countries.",
      angles: [
        "What 'deeper cooperation on water resources' could mean in practice: data on releases, early warning, joint studies.",
        "How a cross-border disaster early-warning mechanism would work on the Mekong, and who would run it.",
        "Whether a forum that seats the upstream country with downstream ones, as on the Mekong, could help on the Nile, and what the Nile Basin Initiative has already tried."
      ],
      titles: [
        "Upstream at the Table: The Mekong's Other Forum",
        "Early Warning on a Shared River",
        "From the Lancang to the Nile: Seating the Upstream State"
      ],
      outline: [
        "What the six ministers agreed in Beijing",
        "What an early-warning mechanism would need",
        "What the Nile could take from the Mekong",
        "What should be done"
      ],
      sources: [
        { name: "CGTN (Xinhua)", date: "2026-11-04", url: "https://news.cgtn.com/news/2026-11-04/Wang-Yi-calls-for-new-golden-decade-of-Lancang-Mekong-cooperation-1RNTnpFOUco/p.html" },
        { name: "Daily News Egypt", date: "2026-11-02", url: "https://dailynewsegypt.com/2026/11/02/egypt-sudan-reject-unilateral-ethiopian-dam-management-reaffirm-1959-nile-water-rights/" }
      ]
    }
  ]
};
