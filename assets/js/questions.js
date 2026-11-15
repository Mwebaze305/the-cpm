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
  updated: "2026-11-16",
  items: {
    "ebola": {
      dept: "health", focus: "health",
      questions: [
        "Africa CDC says more than 80 per cent of new cases arise outside known contact lists. What stops response teams from finding contacts in conflict-hit areas, and what has kept contact tracing going elsewhere under insecurity?",
        "WHO says seven in 10 confirmed children under five have died and two-thirds of confirmed deaths happen in the community. What would help families bring sick children to care sooner?",
        "Kenya has begun a 42-day countdown after nine cases. Which parts of its response, from screening at points of entry to following contacts, could other Great Lakes countries copy, and what has worked at Thailand's border posts?"
      ]
    },
    "south-sudan-ebola": {
      dept: "health", focus: "health",
      questions: [
        "WHO put the risk of Ebola reaching South Sudan at 99 per cent in October. Which points of entry on the border with DR Congo matter most, and how are suspected cases checked there?",
        "Of 76 suspected alerts by 30 October, 33 tested negative and the rest were ruled out. What does this show about South Sudan's ability to detect and test cases, and what still limits it?",
        "How have Kenya and Uganda kept Ebola from spreading after imported cases, and what has worked on Thailand's borders for screening mobile populations that could help South Sudan?"
      ]
    },
    "darfur-chad": {
      dept: "gov", focus: "health", contested: true,
      questions: [
        "Where do people fleeing Um Baru cross into Chad, and what assistance meets them on arrival?",
        "How are host communities in eastern Chad coping with new arrivals as aid falls?",
        "What has helped host communities elsewhere, such as Uganda's settlement approach or the camps on the Thai–Myanmar border, that could help in eastern Chad?"
      ]
    },
    "drc-south-kivu": {
      dept: "gov", focus: "peace", contested: true,
      questions: [
        "Where have the more than 160,000 people displaced in Kalehe territory gone, and who is assisting them?",
        "What can the AU, the EAC and other mediators do when fighting resumes after a peace deal has been signed, and what has helped ceasefires hold elsewhere, in the Great Lakes or Southeast Asia?"
      ]
    },
    "ethiopia-sudan": {
      dept: "gov", focus: "peace", contested: true,
      questions: [
        "What can the AU Peace and Security Council do with a complaint between two member states, and how has it handled similar complaints before?",
        "How do consular expulsions affect the people who rely on those consulates: refugees, traders and families crossing between Assosa and Gedaref?",
        "Which channels between the two governments remain open, and what would keep them working?"
      ]
    },
    "sudan": {
      dept: "gov", focus: "peace", contested: true,
      questions: [
        "With agencies reaching about one in ten people in need, which ways of delivering aid have reached people despite attacks on power and fuel, and could they be scaled up?",
        "What would protecting power, fuel and water sites from attack require, in international humanitarian law and in practice?",
        "What role can neighbouring states, IGAD and the AU play in the talks planned before Christmas?"
      ]
    },
    "sudan-food": {
      dept: "gov", focus: "health",
      questions: [
        "With WFP's reach falling from more than 4 million people to just over 3 million, how are cuts decided, and who loses food aid first?",
        "Which ways of feeding displaced families have stretched shrinking budgets elsewhere, such as cash transfers or buying food locally in Uganda's settlements or the camps on the Thai–Myanmar border, and could they work in Sudan?"
      ]
    },
    "abyei": {
      dept: "gov", focus: "peace", contested: true,
      questions: [
        "The renewed UNISFA mandate sets benchmarks for Sudan, South Sudan and the RSF. What does each benchmark require, and how will progress be measured?",
        "How can the Amiet market stay safe as a transit point for refugees and returnees fleeing Sudan's war?",
        "What has helped joint police or border arrangements work in other disputed areas, in Africa or Southeast Asia, that could help an Abyei police service?"
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
    "scam-compounds": {
      dept: "gov", focus: "peace",
      questions: [
        "Who pays to bring rescued East Africans home from Southeast Asia, and what have embassies and governments in each region done so far?",
        "How are rescued workers screened as victims of trafficking rather than offenders, and what difference does that make to their way home?",
        "What could a standing channel between the EAC and ASEAN states do that one-off rescues cannot?"
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
    "nile-gerd": {
      dept: "gov", focus: "rivers", contested: true,
      questions: [
        "What would a binding agreement on the dam's operation need to cover, and where do Egypt, Ethiopia and Sudan already agree?",
        "What has the Mekong River Commission's approach to mainstream dams achieved, and could any part of it work on the Nile?"
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
