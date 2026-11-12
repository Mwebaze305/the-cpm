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
  updated: "2026-11-13",
  items: {
    "ebola": {
      dept: "health", focus: "health",
      questions: [
        "More than 1,000 contacts have been lost to follow-up. What stops response teams from reaching them in conflict-hit areas, and what has kept response work going elsewhere under insecurity?",
        "Africa CDC says an imported case is not by itself a failure of health security. What should decide whether a country imposes travel restrictions, and what do the International Health Regulations require?",
        "Kenya has begun a 42-day countdown after nine cases. Which parts of its response, from screening at points of entry to following contacts, could other Great Lakes countries copy?"
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
    "ethiopia-north": {
      dept: "health", focus: "health", contested: true,
      questions: [
        "How can health services keep working for displaced families in Shire and Debre Birhan when hospitals lack staff, medicines and equipment?",
        "What has worked elsewhere, in the Great Lakes or Southeast Asia, to protect health workers and facilities when fighting resumes?"
      ]
    },
    "abyei": {
      dept: "gov", focus: "peace", contested: true,
      questions: [
        "What would a renewed mandate for UNISFA need in order to protect people from drone attacks, and who decides it?",
        "How can the Amiet market stay safe as a transit point for refugees and returnees fleeing Sudan's war?",
        "What has the Joint Political and Security Mechanism achieved since talks resumed in August, and what could it settle next?"
      ]
    },
    "south-sudan-elections": {
      dept: "gov", focus: "peace", contested: true,
      questions: [
        "What do people displaced along the Nasir–Ulang corridor in Upper Nile need first, and who is able to reach them with UNMISS working from a reduced footprint?",
        "What would have to be in place by 22 December for displaced people and returnees from Sudan to be able to vote, and what does the UN say is missing?",
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
    "burundi-refugees": {
      dept: "gov", focus: "health",
      questions: [
        "If WFP's food aid stops in January, what are the options for the 125,000 refugees in Burundi, and what would each cost?",
        "Which livelihood schemes have let refugees earn an income in host countries such as Uganda or Thailand, and could Burundi adopt one?"
      ]
    },
    "congo-refugees": {
      dept: "health", focus: "health",
      questions: [
        "How is Uganda's refugee health response coping with so little of its 2026 funding secured, and which services closed first?",
        "How can borders screen for Ebola without shutting out people fleeing conflict? What do the rules in Uganda and Burundi show?",
        "What has health work with refugees on Thailand's border with Myanmar taught that could help in the Great Lakes?"
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
    "eac-trade": {
      dept: "gov", focus: "trade",
      questions: [
        "What explains the fall in border crossing times, and which non-tariff barriers still hold small traders back?",
        "How can customs rules and market information reach traders who do not read English, and what part could Kiswahili play?"
      ]
    },
    "nile-gerd": {
      dept: "gov", focus: "rivers", contested: true,
      questions: [
        "What would a binding agreement on the dam's operation need to cover, and where do Egypt, Ethiopia and Sudan already agree?",
        "What has the Mekong River Commission's approach to mainstream dams achieved, and could any part of it work on the Nile?"
      ]
    },
    "mekong-lmc": {
      dept: "gov", focus: "rivers",
      questions: [
        "What has Lancang-Mekong cooperation done on water resources so far, for example data on upstream releases, and how does its work relate to the Mekong River Commission?",
        "What would a cross-border disaster early-warning mechanism on the Mekong need to work, and who would run it?",
        "Could a forum that brings the upstream country together with downstream ones, as on the Mekong, help the Nile Basin, and what has the Nile Basin Initiative tried?"
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
    "asean-summit": {
      dept: "gov", focus: "trade",
      questions: [
        "What does the Manila summit say about Myanmar and about cooperation with Africa, and which commitments could be followed up?",
        "Which ASEAN arrangements, such as those on migrant workers or disaster response, could be useful to the EAC?"
      ]
    }
  }
};
