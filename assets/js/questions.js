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
  updated: "2026-11-26",
  items: {
    "icj-rohingya": {
      dept: "gov", focus: "peace", contested: true,
      questions: [
        "The court ordered Myanmar to pay restitution and compensation, to investigate and, if warranted, prosecute those suspected of involvement, and to enable displaced Rohingya to return. What happens next in the case, and how can the court follow whether its orders are carried out?",
        "What would safe, voluntary return need for Rohingya refugees in camps near Cox's Bazar, and who would have to agree to it?",
        "What has helped people displaced for years return home or settle safely elsewhere, in the Great Lakes or Southeast Asia, and could any of it apply to the Rohingya?"
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
    "sudan-blue-nile": {
      dept: "gov", focus: "peace", contested: true,
      questions: [
        "The UN says more than 100,000 people from surrounding villages have fled into Al-Damazin in recent months, and Bau's commissioner said more than 6,000 families fled Bau. Where are people displaced in Blue Nile now staying, and who is assisting them?",
        "Strikes on 24 November also hit power facilities and a dam in Roseires, according to Emergency Lawyers. What do UN agencies report about the effect of attacks on electricity, water and health services in Blue Nile?",
        "What has helped keep humanitarian corridors open and civilians protected in border regions at war, in the Great Lakes or on the Thai–Myanmar border, and could any of it apply in Blue Nile?"
      ]
    },
    "thai-cambodia-talks": {
      dept: "gov", focus: "peace", contested: true,
      questions: [
        "What is compulsory conciliation under the UN Convention on the Law of the Sea, what can the commission meeting in Kuala Lumpur from 24 to 27 November do, and what happens to its non-binding recommendations?",
        "How has the long closure of Thai–Cambodian land crossings affected cross-border trade and people living near the border?",
        "How have other neighbours settled land or sea boundaries, through direct talks or third parties, in Africa or Southeast Asia, and what made those settlements hold?"
      ]
    },
    "eac-borders": {
      dept: "gov", focus: "trade",
      questions: [
        "Afrobarometer found that the share of people who say crossing borders is difficult rose by 25 points in Kenya and 14 in Uganda since 2017. What does the survey ask, and which groups find crossing hardest?",
        "The EAC approved a common labour-migration regime in 2024. What does it provide, and how far have Kenya, Tanzania and Uganda put it into practice?",
        "What has made borders easier to cross for workers and small traders in one region, such as ASEAN's arrangements or one-stop border posts in East Africa, and could it work in the other?"
      ]
    },
    "sudan-drones": {
      dept: "gov", focus: "peace", contested: true,
      questions: [
        "The UN Human Rights Office verified at least 2,230 civilian deaths in Sudan from January to October, more than 1,630 of them in drone strikes, and says the real toll is likely higher. How does it verify deaths, and what does it say limits its counts?",
        "Drones damaged a UN building in Khartoum on 22 November while UN staff were inside, and OCHA says Sudan's humanitarian appeal is only 51 per cent funded. What protection do humanitarian staff and premises have under international humanitarian law, and what has the UN asked of the parties?",
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
    "kenya-drc-ties": {
      dept: "gov", focus: "peace", contested: true,
      questions: [
        "What does resuming the Joint Grand Commission for Cooperation involve, and what did Kenya and DR Congo cooperate on before Kinshasa recalled its ambassador in December 2023?",
        "The two presidents called for closer work on preventing and controlling Ebola. What could cooperation between Kenya and DR Congo on Ebola, including screening at points of entry, look like?",
        "How have neighbours in Africa or ASEAN restored relations after a dispute with help from a regional mediator, and what made the restored relations last?"
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
    "mekong-cyanide": {
      dept: "gov", focus: "rivers",
      questions: [
        "Lao authorities linked cyanide in the Huai Hin Lai stream to illegal gold ore processing, and Thailand is sampling the Mekong downstream. How do Laos and Thailand test and share water-quality data on tributaries that flow into the Mekong, and what role does the Mekong River Commission play?",
        "Thailand says it will make the issue a main agenda item at the Mekong–Lancang Cooperation leaders' meeting next month. What could governments agree there on mining chemicals and pollution in shared rivers?",
        "What has worked to keep chemicals from small-scale gold mining out of shared rivers, in the Great Lakes or in Southeast Asia, and could it work on the Mekong?"
      ]
    },
    "border-rivers": {
      dept: "gov", focus: "rivers",
      questions: [
        "Thailand and Myanmar agreed in principle on joint sampling at four points on the Kok and two on the Sai in each country, with data exchanged at least twice a year. What would make that plan work, and who would see the results?",
        "Thailand plans to ban exports and transit shipments of mining chemicals to Myanmar and has asked China to help shut mines for at least six months. How would such measures be enforced, and what would they need from each government?",
        "What has worked elsewhere when pollution from mining crosses a border into a shared river, for example on the Mekong or on rivers shared in the Great Lakes, and could it work here?"
      ]
    },
    "asean-summit": {
      dept: "gov", focus: "peace", contested: true,
      questions: [
        "What does a phased, progress-based engagement with Myanmar ask for under the Five-Point Consensus, and who judges progress?",
        "How has the AU handled the return of suspended members, and what could ASEAN and the AU learn from each other?"
      ]
    },
    "nile-water-use": {
      dept: "gov", focus: "rivers", contested: true,
      questions: [
        "Ethiopia's water minister cites the 2015 Declaration of Principles, and Egypt and Sudan's joint statement speaks of their indivisible water security. What does each text say, and where do the three governments' positions overlap?",
        "The minister proposed joint investments in Blue Nile infrastructure. What joint projects already exist among Nile Basin countries, and how are they run?",
        "What has helped countries sharing a river, for example the members of the Mekong River Commission, share data and consult on new dams, and could any of it work on the Nile?"
      ]
    }
  }
};
