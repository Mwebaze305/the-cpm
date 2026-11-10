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
  updated: "2026-11-10",
  items: {
    "ebola": {
      dept: "health", focus: "health",
      questions: [
        "What stops Ebola response teams from reaching contacts in Beni and other conflict-hit areas, and what has kept response work going elsewhere under insecurity?",
        "Africa CDC says an imported case is not by itself a failure of health security. What should decide whether a country imposes travel restrictions, and what do the International Health Regulations require?",
        "Kenya screened more than 760,000 travellers at its points of entry. What did screening find and cost, and which parts could other Great Lakes borders copy?"
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
        "What can Thailand and ASEAN do to keep civilians on the Thai side safe from cross-border fire, and what have they done before?",
        "How have Great Lakes states dealt with spillover from a neighbour's war, and what could Thailand learn from it?"
      ]
    },
    "drc-hunger": {
      dept: "gov", focus: "health",
      questions: [
        "Why is acute hunger concentrated in North Kivu, South Kivu and Ituri, and how much of it do conflict, Ebola and climate shocks each explain?",
        "Which responses have reduced acute hunger in conflict zones as aid falls, such as cash transfers or buying food locally, and what would they cost in eastern DR Congo?"
      ]
    },
    "busia-no-stop": {
      dept: "gov", focus: "trade",
      questions: [
        "What would a no-stop border at Busia require: which checks would move to the point of origin, and what digital systems are needed?",
        "How would women small traders, who make up most small-scale cross-border traders at Busia, gain or lose from the change?",
        "What can Busia learn from border posts in Southeast Asia, such as the ASEAN Single Window?"
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
    "thailand-refugee-work": {
      dept: "gov", focus: "health",
      questions: [
        "What has Thailand's work-permit scheme achieved in its first year, and why have only about 6,800 of more than 100,000 camp residents joined the labour market?",
        "How does it compare with Uganda's right-to-work policy for refugees, and what could each country learn from the other?",
        "How can contracts and fair wages be enforced for refugee workers?"
      ]
    },
    "mekong-delta": {
      dept: "gov", focus: "rivers",
      questions: [
        "How are farming families in the Mekong Delta paying for the switch to rotating rice with shrimp, and who is left out?",
        "What could farmers downstream on the Nile learn from the Delta's adaptation to less sediment and more salt?"
      ]
    },
    "asean-summit": {
      dept: "gov", focus: "trade",
      questions: [
        "What does the Manila summit say about cooperation with Africa, and which commitments could be followed up?",
        "Which ASEAN arrangements, such as those on migrant workers or disaster response, could be useful to the EAC?"
      ]
    }
  }
};
