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
  updated: "2026-11-09",
  items: [
    {
      id: "scam-way-home",
      date: "2026-11-06",
      for: ["aaron"],
      focus: "peace",
      photo: "shwe-kokko",
      dispatch: "scam-compounds",
      title: "Rescued, then stranded: the way home from the scam compounds",
      story: "The United States announced sanctions on 5 November on four individuals and 41 entities linked to the Cambodia-based Prince Group, building on measures from October 2025 and June 2026; the US Embassy in Nairobi said hundreds of Kenyans were rescued from scam centres in Southeast Asia in 2026. AP reports that after Cambodia's crackdown, which ramped up in January, tens of thousands of former workers ended up in Phnom Penh; many had their passports seized by employers, faced fines for staying without proper visas and had to be interviewed by immigration officials before leaving. Uganda's ambassador to Malaysia has helped more than 1,000 former workers, mostly Ugandans, and AP reports that thousands who could not afford flights got no help from their home countries.",
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
        "Practical steps for cooperation between the two regions"
      ],
      sources: [
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
      story: "UN peacekeeping chief Jean-Pierre Lacroix told the Security Council on 5 November that drone strikes on 19 October killed at least 30 people and injured about 59 in Abyei, the first attacks of their kind there, and that threats are increasingly shaped by regional conflicts. Clashes around Amiet Common Market on 15 September left 124 dead. Sudan and South Sudan resumed formal talks in August through their Joint Political and Security Mechanism, the first since January 2023, with the next meeting in Khartoum from 8 to 10 November. Recorded security incidents fell by about 32 per cent compared with the same period last year, and the Council is weighing the future mandate of UNISFA.",
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
        "What could reduce the risk of more attacks"
      ],
      sources: [
        { name: "UN News", date: "2026-11-05", url: "https://news.un.org/en/story/2026/11/1168749" }
      ]
    },
    {
      id: "consulates-and-complaints",
      date: "2026-11-05",
      for: ["aaron"],
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
        "What to watch next"
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
        "Two or three practical steps for border health teams"
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
        "What neighbouring countries' border teams can do"
      ],
      sources: [
        { name: "UN News (OCHA)", date: "2026-11-06", url: "https://news.un.org/en/story/2026/11/1168757" },
        { name: "WHO Disease Outbreak News", date: "2026-11-06", url: "https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON625" }
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
      id: "half-rations",
      date: "2026-11-03",
      for: ["yidnekachew"],
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
        "What would make the difference"
      ],
      sources: [
        { name: "WFP", date: "2026-11-03", url: "https://www.wfp.org/news/125000-refugees-burundi-risk-losing-food-assistance-without-urgent-funding" }
      ]
    },
    {
      id: "no-stop-border",
      date: "2026-10-28",
      for: ["yidnekachew"],
      focus: "trade",
      photo: "lake-victoria",
      dispatch: "busia-no-stop",
      title: "From one-stop to no-stop: what a faster Busia border would mean for small traders",
      story: "At a Kenya–Uganda cross-border policy dialogue in Busia, traders and officials called for a no-stop system at the Busia One Stop Border Post: inspections at the point of origin, digitised clearance and an end to duplicated work by the two countries' agencies. Uganda's agriculture ministry inspector in charge at Busia said about 80 per cent of consignments are now inspected at the border, and proposed joint inspections at source with Kenya's plant health agency, KEPHIS. A Kenyan trader asked for a single digital documentation platform.",
      why: "The chair of the Busia Women Cross-Border Cooperatives said women make up about 80 per cent of small-scale cross-border traders and are the most affected by non-tariff barriers; customs procedures have been simplified for small traders, but standards inspections still need many documents and tests, adding cost and delay. Border delays are a direct cost to household incomes on both sides.",
      angles: [
        "Who gains from a no-stop border: large transporters, small traders, or both? How would you measure it?",
        "The cost of a day's delay for a woman trading grain or vegetables across Busia.",
        "What Mae Sot, on the Thai–Myanmar border, could share with Busia about small cross-border trade."
      ],
      titles: [
        "Eighty Per Cent Stopped: Small Traders and the Busia Border",
        "The Border That Never Stops: A Proposal for Busia",
        "Women, Grain and Paperwork at Busia"
      ],
      outline: [
        "What is proposed: from one-stop to no-stop",
        "Who crosses at Busia, and what delays cost them",
        "Standards inspections and small traders",
        "A comparison with Mae Sot",
        "Practical steps"
      ],
      sources: [
        { name: "Talk Africa", date: "2026-10-28", url: "https://www.talkafrica.co.ke/kenya-uganda-traders-push-for-no-stop-border-at-busia-to-cut-delays/" }
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
      for: ["yidnekachew"],
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
