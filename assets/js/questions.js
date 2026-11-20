/* Research questions for the team pages (/researchers and /experts).
   Each dispatch in dispatches.js gets an entry here, under its id:
   - dept: "health" (Public health) or "gov" (Governance and development)
   - focus: health | peace | rivers | trade (the focus area a piece on it belongs to)
   - contested: true when it touches a contested political dispute. Pieces on
     it are then reviewed by the editor, never by an expert, because our experts
     include government employees, who are not tied to contested disputes.
   - questions: two or three questions a researcher can work on. Each should be
     answerable from sources, and at least one should look for what has worked
     in one region and could work in another, since every piece ends with
     "What should be done".
   A dispatch without an entry still shows on the team pages, with its
   department taken from its topic and a note that questions are on the way.
   English only: the team pages are in English. */
window.CPM_DESK_QUESTIONS = {
  updated: "2026-11-21",
  items: {
    "icj-rohingya": {
      dept: "gov", focus: "peace", contested: true,
      questions: [
        "The court ordered Myanmar to pay restitution and compensation, to investigate and, if warranted, prosecute those suspected of involvement, and to enable displaced Rohingya to return. What happens next in the case, and how can the court follow whether its orders are carried out?",
        "What would safe, voluntary return need for Rohingya refugees in camps near Cox's Bazar, and who would have to agree to it?",
        "What has helped people displaced for years return home or settle safely elsewhere, in the Great Lakes or Southeast Asia, and could any of it apply to the Rohingya?"
      ]
    },
    "children-conflict": {
      dept: "gov", focus: "peace", contested: true,
      questions: [
        "The report counts children living within 50 km of armed conflict. How is that figure made, and what does it show for the Great Lakes and the Nile Basin compared with 2024?",
        "Verified incidents of aid being blocked rose from 509 in 2015 to 8,322 in 2025. Which kinds of obstruction are counted, and what have the AU, EAC or IGAD done about humanitarian access?",
        "What has protected children living near conflict or in long-term displacement in one region, such as education in Thailand's border camps or Uganda's settlements, and could it work in eastern DR Congo or Sudan?"
      ]
    },
    "eac-el-nino": {
      dept: "gov", focus: "trade",
      questions: [
        "The EAC plan covers early warning, health, infrastructure and tourism, agriculture and food security, and climate mobility and displacement. What does each partner state commit to, and how will the regional plan be funded?",
        "The meeting stressed surveillance for cholera and malaria linked to flooding. How will partner states share outbreak and flood warnings across borders?",
        "What has worked for flood early warning or anticipatory action in the Mekong countries, and could the EAC adapt it?"
      ]
    },
    "busia-str": {
      dept: "gov", focus: "trade",
      questions: [
        "The Tripartite Simplified Trade Regime gives small traders a Simplified Certificate of Origin and a Simplified Customs Declaration. How many traders at Busia use them, and what stops others from doing so?",
        "SADC says the initiative puts particular emphasis on women and young people. What do trade information desks and cross-border traders' associations at Busia offer them?",
        "What has made simplified trade rules work for small traders at other borders, in East Africa or at Southeast Asian crossings such as Mae Sot, and could Busia adopt it?"
      ]
    },
    "sudan-drones": {
      dept: "gov", focus: "peace", contested: true,
      questions: [
        "The UN Human Rights Office verified at least 2,230 civilian deaths in Sudan from January to October, more than 1,630 of them in drone strikes, and says the real toll is likely higher. How does it verify deaths, and what does it say limits its counts?",
        "In the first half of the year the office recorded drone strikes on markets, civilian vehicles, fuel depots and health facilities. How have these strikes affected access to food, fuel and health care in Kordofan and Darfur, according to UN agencies?",
        "What has helped protect markets, clinics and other civilian sites during conflicts elsewhere, for example in eastern DR Congo or along the Thai–Myanmar border, and could any of it apply in Sudan?"
      ]
    },
    "ethiopia-refugee-children": {
      dept: "gov", focus: "health",
      questions: [
        "UNHCR says 31,000 refugee children in Ethiopia are separated from their parents or guardians, and family tracing support fell by more than half from 2024 to 2025. Who now provides tracing and alternative care, and where are the biggest gaps?",
        "Funding shortfalls affected 57 primary schools serving some 110,000 refugee children. How are these schools funded, and what happens to the children when classes shrink or stop?",
        "What has kept refugee children in school and out of work as aid falls elsewhere, for example in Uganda's settlements or the camps on the Thai–Myanmar border, and could it work in Ethiopia?"
      ]
    },
    "rwanda-return-hub": {
      dept: "gov", focus: "peace", contested: true,
      questions: [
        "What would the agreement between the five European countries and Rwanda need to set out on UNHCR's role, independent monitoring and the three options offered to arrivals?",
        "How do the officials who announced the plan say it differs from the 2022 UK–Rwanda deal that the UK Supreme Court ruled unlawful?",
        "What has worked when countries in Africa or Southeast Asia agreed with partners abroad on the return or resettlement of migrants, and which safeguards made the difference?"
      ]
    },
    "ebola": {
      dept: "health", focus: "health",
      questions: [
        "Africa CDC says more than 80 per cent of new cases arise outside known contact lists. What stops response teams from finding contacts in conflict-hit areas, and what has kept contact tracing going elsewhere under insecurity?",
        "WHO says seven in 10 confirmed children under five have died and two-thirds of confirmed deaths happen in the community. What would help families bring sick children to care sooner?",
        "Kenya has begun a 42-day countdown after nine cases. Which parts of its response, from screening at points of entry to following contacts, could other Great Lakes countries copy, and what has worked at Thailand's border posts?"
      ]
    },
    "drc-south-kivu": {
      dept: "gov", focus: "peace", contested: true,
      questions: [
        "OCHA says more than 323,000 people fled in Kalehe and Kabare territories and no aid had reached them by 11 November. What blocks humanitarian access on the roads around Bunyakiri and Hombo, and who negotiates it?",
        "What can the AU, the EAC and other mediators do when fighting resumes after a peace deal has been signed, and what has helped ceasefires hold elsewhere, in the Great Lakes or Southeast Asia?"
      ]
    },
    "sudan-food": {
      dept: "gov", focus: "health",
      questions: [
        "With WFP's reach falling from more than 4 million people to just over 3 million, how are cuts decided, and who loses food aid first?",
        "Which ways of feeding displaced families have stretched shrinking budgets elsewhere, such as cash transfers or buying food locally in Uganda's settlements or the camps on the Thai–Myanmar border, and could they work in Sudan?"
      ]
    },
    "south-sudan-elections": {
      dept: "gov", focus: "peace", contested: true,
      questions: [
        "Voter registration runs from 14 to 28 November at 3,161 centres. How can people displaced along the Nasir–Ulang corridor in Upper Nile, and returnees from Sudan, register to vote?",
        "With the elections moved to 11 February 2027, what does the UN say must be in place before polling day, and which of these can be done in the extra time?",
        "How have the AU, IGAD or ASEAN supported elections held during conflict elsewhere, and what from that experience could help South Sudan?"
      ]
    },
    "tak-border": {
      dept: "gov", focus: "peace", contested: true,
      questions: [
        "How has the suspension of trade through unofficial crossings in Tak affected traders and families in Mae Sot?",
        "Thailand's 10 border provinces have been told to prepare shelters, evacuation plans and temporary safe areas. What do these plans include, and how have they worked when fighting spilled over before?",
        "How have Great Lakes states dealt with spillover from a neighbour's war, and what could Thailand learn from it?"
      ]
    },
    "border-rivers": {
      dept: "gov", focus: "rivers",
      questions: [
        "What will the Thai–Myanmar working group on water quality in border rivers need to agree in its terms of reference, for example joint sampling and shared data, to act on pollution in the Kok and Sai?",
        "How are Thai agencies telling residents along the Kok and Sai whether the water, soil and fish are safe, and who is responsible for each part?",
        "What has worked elsewhere when pollution from mining crosses a border into a shared river, for example on the Mekong or on rivers shared in the Great Lakes, and could it work here?"
      ]
    },
    "tonle-sap": {
      dept: "gov", focus: "rivers",
      questions: [
        "AP reports that the water level at Prek Kdam was more than a metre below average in early October. What data on the lake's flood pulse is published, by whom, and does it reach fishing communities?",
        "About 1.5 million people live on the Tonle Sap. What support exists for fishing households in a dry year, and who provides it?",
        "What has helped fishing communities around Lake Victoria or on the Nile when catches fall, and could it help families on the Tonle Sap?"
      ]
    },
    "asean-summit": {
      dept: "gov", focus: "peace", contested: true,
      questions: [
        "What does a phased, progress-based engagement with Myanmar ask for under the Five-Point Consensus, and who judges progress?",
        "How has the AU handled the return of suspended members, and what could ASEAN and the AU learn from each other?"
      ]
    }
  }
};
