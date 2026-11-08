/* Dispatches: the latest developments that bear on the partnership.
   Shown in the animated bar at the top of every page and on dispatches.html.

   updated: the day this list was last reviewed (YYYY-MM-DD)
   Each item:
   - id: short unique slug (used in links, e.g. dispatches.html#d-ebola)
   - date: date of the newest source (YYYY-MM-DD)
   - region: gl (Great Lakes) | nile | sea (Southeast Asia) | afasia (Africa–Asia)
   - topic: health | refugees | rivers | peace | diplomacy (optional)
   - upcoming: true for events still to come (optional)
   - title, summary, why: per language; only "en" is required
   - sources: [{ name, date, url }]  at least one, always
   - photo: a key from assets/js/photos.js showing the place (optional)
   - team: ids from assets/js/team.js whose field matches the topic (optional).
     Name a member only where their expertise clearly fits, and never tie a
     member who works for a government to a contested political dispute.
   Rules: facts only, every figure attributed to its source, no opinion. */
window.CPM_DISPATCHES = {
  updated: "2026-11-08",
  items: [
    {
      id: "ebola",
      date: "2026-11-06",
      region: "gl",
      photo: "goma-kivu",
      team: ["dominick"],
      topic: "health",
      title: {
        en: "Ebola: DR Congo passes 10,600 cases as an attack in Beni halts response work",
        fr: "Ebola : la RD Congo dépasse 10 600 cas, une attaque à Beni interrompt la riposte",
        th: "อีโบลา: คองโกมีผู้ป่วยเกิน 10,600 ราย ขณะที่การโจมตีในเบนีทำให้งานรับมือต้องหยุดชะงัก",
        sw: "Ebola: DR Kongo yapita wagonjwa 10,600 huku shambulio Beni likisimamisha kazi ya kukabiliana"
      },
      summary: {
        en: "WHO counted 10,668 confirmed cases and 5,198 deaths in DR Congo by 3 November, across 67 health zones in eight provinces, and two more vaccine candidates are to join the Tumaini trial in Bunia. In Beni territory, North Kivu, an overnight attack killed at least 30 civilians and destroyed a health centre, OCHA said on 6 November; contacts of Ebola patients fled an observation centre and response teams suspended operations. Kenya has had no new case since 19 October.",
        fr: "L'OMS recensait 10 668 cas confirmés et 5 198 décès en RD Congo au 3 novembre, dans 67 zones de santé de huit provinces, et deux nouveaux candidats vaccins doivent rejoindre l'essai Tumaini à Bunia. Dans le territoire de Beni, au Nord-Kivu, une attaque nocturne a tué au moins 30 civils et détruit un centre de santé, selon l'OCHA le 6 novembre ; des contacts de malades d'Ebola ont fui un centre d'observation et les équipes de riposte ont suspendu leurs activités. Le Kenya n'a enregistré aucun nouveau cas depuis le 19 octobre.",
        th: "องค์การอนามัยโลกนับผู้ป่วยยืนยันในคองโกได้ 10,668 ราย และเสียชีวิต 5,198 ราย ณ วันที่ 3 พฤศจิกายน ใน 67 เขตสุขภาพของ 8 จังหวัด และจะมีวัคซีนที่อยู่ระหว่างพัฒนาอีก 2 ชนิดเข้าร่วมการทดลอง Tumaini ที่เมืองบูเนีย ในเขตเบนี จังหวัดคิวูเหนือ การโจมตีในเวลากลางคืนทำให้พลเรือนเสียชีวิตอย่างน้อย 30 คน และศูนย์สุขภาพถูกทำลาย ตามรายงานของ OCHA เมื่อวันที่ 6 พฤศจิกายน ผู้สัมผัสผู้ป่วยอีโบลาหนีออกจากศูนย์เฝ้าสังเกตอาการ และทีมรับมือต้องระงับการปฏิบัติงาน ส่วนเคนยาไม่มีผู้ป่วยรายใหม่ตั้งแต่วันที่ 19 ตุลาคม",
        sw: "WHO ilihesabu wagonjwa 10,668 waliothibitishwa na vifo 5,198 DR Kongo kufikia tarehe 3 Novemba, katika kanda za afya 67 za majimbo manane, na chanjo mbili zaidi za majaribio zitajiunga na jaribio la Tumaini huko Bunia. Katika eneo la Beni, Kivu Kaskazini, shambulio la usiku liliua raia wasiopungua 30 na kuharibu kituo cha afya, OCHA ilisema tarehe 6 Novemba; watu waliokutana na wagonjwa wa Ebola walikimbia kituo cha uangalizi na timu za kukabiliana zilisimamisha kazi. Kenya haijapata mgonjwa mpya tangu tarehe 19 Oktoba."
      },
      why: {
        en: "Border health in practice: WHO advises against travel or trade restrictions and recommends cross-border surveillance instead, and Kenya had screened 760,415 travellers at points of entry by 5 November.",
        fr: "La santé aux frontières en pratique : l'OMS déconseille toute restriction des voyages ou du commerce et recommande plutôt la surveillance transfrontalière, et le Kenya avait contrôlé 760 415 voyageurs aux points d'entrée au 5 novembre.",
        th: "สุขภาพชายแดนในทางปฏิบัติ องค์การอนามัยโลกไม่แนะนำให้จำกัดการเดินทางหรือการค้า แต่แนะนำการเฝ้าระวังข้ามพรมแดนแทน และเคนยาคัดกรองผู้เดินทาง ณ ช่องทางเข้าออกประเทศแล้ว 760,415 คน ณ วันที่ 5 พฤศจิกายน",
        sw: "Afya ya mipakani kwa vitendo: WHO inashauri kutoweka vikwazo vya safari au biashara na badala yake kufanya ufuatiliaji wa mipakani, na Kenya ilikuwa imewachunguza wasafiri 760,415 katika vituo vya kuingilia kufikia tarehe 5 Novemba."
      },
      sources: [
        { name: "WHO Disease Outbreak News", date: "2026-11-06", url: "https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON625" },
        { name: "UN News (OCHA)", date: "2026-11-06", url: "https://news.un.org/en/story/2026/11/1168757" },
        { name: "UN News", date: "2026-11-05", url: "https://news.un.org/en/story/2026/11/1168742" }
      ]
    },
    {
      id: "sudan",
      date: "2026-11-06",
      region: "nile",
      photo: "khartoum-confluence",
      topic: "peace",
      title: {
        en: "Sudan: drone strikes hit power and fuel as aid reaches one in ten people in need",
        fr: "Soudan : des frappes de drones visent l'électricité et le carburant, l'aide n'atteint qu'une personne sur dix",
        th: "ซูดาน: โดรนโจมตีโรงไฟฟ้าและแหล่งเชื้อเพลิง ขณะที่ความช่วยเหลือเข้าถึงผู้ต้องการเพียงหนึ่งในสิบ",
        sw: "Sudan: droni zashambulia umeme na mafuta huku misaada ikiwafikia mtu mmoja kati ya kumi wanaohitaji"
      },
      summary: {
        en: "UN humanitarian coordinator Denise Brown said on 3 November that energy and fuel sources \"appear to be systematically targeted\", and that dialysis stopped for 25 people at a hospital near Khartoum after strikes cut its power. UNHCR and IOM said on 6 November that agencies can assist only about one in ten people in need, and the $2.9 billion aid plan for 2026 is 47 per cent funded. UN envoy Pekka Haavisto said on 2 November that talks with the RSF on a transition to civilian rule are planned before Christmas.",
        fr: "La coordonnatrice humanitaire de l'ONU, Denise Brown, a déclaré le 3 novembre que les sources d'énergie et de carburant « semblent systématiquement ciblées », et que la dialyse s'est arrêtée pour 25 personnes dans un hôpital près de Khartoum après des frappes qui l'ont privé d'électricité. Le HCR et l'OIM ont indiqué le 6 novembre que les agences ne peuvent aider qu'environ une personne sur dix dans le besoin, et le plan d'aide de 2,9 milliards de dollars pour 2026 est financé à 47 %. L'envoyé de l'ONU Pekka Haavisto a indiqué le 2 novembre que des pourparlers avec les FSR sur une transition vers un pouvoir civil sont prévus avant Noël.",
        th: "นางเดนิส บราวน์ ผู้ประสานงานด้านมนุษยธรรมของสหประชาชาติ กล่าวเมื่อวันที่ 3 พฤศจิกายนว่าแหล่งพลังงานและเชื้อเพลิง \"ดูเหมือนถูกโจมตีอย่างเป็นระบบ\" และโรงพยาบาลแห่งหนึ่งใกล้กรุงคาร์ทูมต้องหยุดการฟอกไตของผู้ป่วย 25 คนหลังไฟฟ้าดับจากการโจมตี UNHCR และ IOM ระบุเมื่อวันที่ 6 พฤศจิกายนว่าหน่วยงานช่วยเหลือได้เพียงราวหนึ่งในสิบของผู้ที่ต้องการ และแผนความช่วยเหลือปี 2026 มูลค่า 2,900 ล้านดอลลาร์ได้รับเงินทุนร้อยละ 47 นายเปกกา ฮาวิสโต ทูตพิเศษสหประชาชาติ กล่าวเมื่อวันที่ 2 พฤศจิกายนว่ามีแผนเจรจากับกองกำลัง RSF เรื่องการเปลี่ยนผ่านสู่การปกครองโดยพลเรือนก่อนคริสต์มาส",
        sw: "Mratibu wa misaada ya kibinadamu wa UN, Denise Brown, alisema tarehe 3 Novemba kwamba vyanzo vya nishati na mafuta \"vinaonekana kulengwa kwa utaratibu\", na kwamba huduma ya kusafisha damu ilisimama kwa watu 25 katika hospitali karibu na Khartoum baada ya mashambulizi kukata umeme. UNHCR na IOM zilisema tarehe 6 Novemba kwamba mashirika yanaweza kumsaidia takriban mtu mmoja tu kati ya kumi wanaohitaji, na mpango wa misaada wa dola bilioni 2.9 wa 2026 umefadhiliwa kwa asilimia 47. Mjumbe wa UN Pekka Haavisto alisema tarehe 2 Novemba kwamba mazungumzo na RSF kuhusu mpito kuelekea utawala wa kiraia yamepangwa kabla ya Krismasi."
      },
      why: {
        en: "The war drives displacement across the Nile Basin: more than 1.4 million refugees and returnees have crossed into South Sudan since the war began in 2023.",
        fr: "La guerre provoque des déplacements dans tout le bassin du Nil : plus de 1,4 million de réfugiés et de rapatriés sont entrés au Soudan du Sud depuis le début de la guerre en 2023.",
        th: "สงครามทำให้เกิดการพลัดถิ่นทั่วลุ่มแม่น้ำไนล์ ผู้ลี้ภัยและผู้เดินทางกลับกว่า 1.4 ล้านคนข้ามเข้าซูดานใต้นับตั้งแต่สงครามปะทุในปี 2023",
        sw: "Vita vinasababisha watu kuhama katika Bonde lote la Nile: zaidi ya wakimbizi na wanaorejea milioni 1.4 wameingia Sudan Kusini tangu vita vilipoanza mwaka 2023."
      },
      sources: [
        { name: "UN News (UNHCR and IOM)", date: "2026-11-06", url: "https://news.un.org/en/story/2026/11/1168753" },
        { name: "UN News", date: "2026-11-03", url: "https://news.un.org/en/story/2026/11/1168731" },
        { name: "The National", date: "2026-11-02", url: "https://www.thenationalnews.com/news/mena/2026/11/02/talks-with-rsf-on-transition-to-civilian-rule-in-sudan-expected-within-weeks-says-un-envoy/" },
        { name: "Al Jazeera", date: "2026-10-07", url: "https://www.aljazeera.com/news/2026/10/7/south-sudans-aid-crisis-deepens-as-food-stocks-run-low" }
      ]
    },
    {
      id: "abyei",
      date: "2026-11-05",
      region: "gl",
      photo: "juba",
      team: ["aaron"],
      topic: "peace",
      title: {
        en: "Abyei: first drone strikes kill at least 30 in the area claimed by Sudan and South Sudan",
        fr: "Abyei : de premières frappes de drones tuent au moins 30 personnes dans la zone revendiquée par le Soudan et le Soudan du Sud",
        th: "อาบเยย์: การโจมตีด้วยโดรนครั้งแรกคร่าชีวิตอย่างน้อย 30 คนในพื้นที่ที่ซูดานและซูดานใต้อ้างสิทธิ์",
        sw: "Abyei: mashambulizi ya kwanza ya droni yaua watu wasiopungua 30 katika eneo linalodaiwa na Sudan na Sudan Kusini"
      },
      summary: {
        en: "UN peacekeeping chief Jean-Pierre Lacroix told the Security Council on 5 November that drone strikes on 19 October killed at least 30 people and injured about 59 in Abyei, the first attacks of their kind there; clashes on 15 September had killed 124. Sudan and South Sudan resumed formal talks in August through their Joint Political and Security Mechanism, which meets next in Khartoum from 8 to 10 November.",
        fr: "Le chef des opérations de paix de l'ONU, Jean-Pierre Lacroix, a déclaré au Conseil de sécurité le 5 novembre que des frappes de drones le 19 octobre avaient tué au moins 30 personnes et blessé environ 59 à Abyei, les premières attaques de ce type dans la zone ; des affrontements le 15 septembre avaient fait 124 morts. Le Soudan et le Soudan du Sud ont repris en août des pourparlers formels au sein de leur Mécanisme politique et de sécurité conjoint, qui se réunit à Khartoum du 8 au 10 novembre.",
        th: "นายฌ็อง-ปีแยร์ ลาครัว หัวหน้าฝ่ายปฏิบัติการรักษาสันติภาพของสหประชาชาติ แถลงต่อคณะมนตรีความมั่นคงเมื่อวันที่ 5 พฤศจิกายนว่า การโจมตีด้วยโดรนเมื่อวันที่ 19 ตุลาคมทำให้มีผู้เสียชีวิตอย่างน้อย 30 คนและบาดเจ็บราว 59 คนในอาบเยย์ ซึ่งเป็นการโจมตีลักษณะนี้ครั้งแรกในพื้นที่ ส่วนการปะทะเมื่อวันที่ 15 กันยายนมีผู้เสียชีวิต 124 คน ซูดานและซูดานใต้กลับมาเจรจาอย่างเป็นทางการในเดือนสิงหาคมผ่านกลไกร่วมด้านการเมืองและความมั่นคง ซึ่งจะประชุมครั้งต่อไปที่คาร์ทูมระหว่างวันที่ 8–10 พฤศจิกายน",
        sw: "Mkuu wa operesheni za kulinda amani za UN, Jean-Pierre Lacroix, aliliambia Baraza la Usalama tarehe 5 Novemba kwamba mashambulizi ya droni ya tarehe 19 Oktoba yaliua watu wasiopungua 30 na kujeruhi takriban 59 huko Abyei, mashambulizi ya kwanza ya aina hiyo eneo hilo; mapigano ya tarehe 15 Septemba yaliua watu 124. Sudan na Sudan Kusini zilianza tena mazungumzo rasmi mwezi Agosti kupitia Utaratibu wao wa Pamoja wa Kisiasa na Usalama, utakaokutana Khartoum tarehe 8 hadi 10 Novemba."
      },
      why: {
        en: "A conflict crossing a border: Abyei's Amiet market is a transit point for more than 49,000 refugees and returnees fleeing Sudan's war, and the Security Council is weighing the future mandate of the UN mission there, UNISFA.",
        fr: "Un conflit qui franchit une frontière : le marché d'Amiet, à Abyei, est un point de transit pour plus de 49 000 réfugiés et rapatriés fuyant la guerre au Soudan, et le Conseil de sécurité examine le futur mandat de la mission de l'ONU sur place, la FISNUA.",
        th: "ความขัดแย้งที่ข้ามพรมแดน ตลาดอาเมียตในอาบเยย์เป็นจุดผ่านของผู้ลี้ภัยและผู้เดินทางกลับกว่า 49,000 คนที่หนีสงครามในซูดาน และคณะมนตรีความมั่นคงกำลังพิจารณาอาณัติในอนาคตของภารกิจสหประชาชาติในพื้นที่ (UNISFA)",
        sw: "Mzozo unaovuka mpaka: soko la Amiet huko Abyei ni kituo cha kupita kwa wakimbizi na wanaorejea zaidi ya 49,000 wanaokimbia vita vya Sudan, na Baraza la Usalama linatafakari mamlaka ya baadaye ya ujumbe wa UN eneo hilo, UNISFA."
      },
      sources: [
        { name: "UN News", date: "2026-11-05", url: "https://news.un.org/en/story/2026/11/1168749" }
      ]
    },
    {
      id: "scam-compounds",
      date: "2026-11-06",
      region: "afasia",
      photo: "shwe-kokko",
      team: ["aaron"],
      topic: "peace",
      title: {
        en: "Scam compounds: US sanctions a Cambodian network as Africans struggle to get home",
        fr: "Centres d'arnaque : les États-Unis sanctionnent un réseau cambodgien, des Africains peinent à rentrer",
        th: "แหล่งสแกมเมอร์: สหรัฐฯ คว่ำบาตรเครือข่ายในกัมพูชา ขณะที่ชาวแอฟริกันยังกลับบ้านได้ยาก",
        sw: "Vituo vya utapeli: Marekani yaweka vikwazo kwa mtandao wa Kambodia huku Waafrika wakihangaika kurudi nyumbani"
      },
      summary: {
        en: "The United States announced sanctions on 5 November on four individuals and 41 entities linked to the Cambodia-based Prince Group, and the US Embassy in Nairobi said hundreds of Kenyans were rescued from scam centres in Southeast Asia in 2026. AP reports that after Cambodia's crackdown many former workers are stranded without passports or tickets home, and that Uganda's ambassador to Malaysia has helped more than 1,000 of them, mostly Ugandans.",
        fr: "Les États-Unis ont annoncé le 5 novembre des sanctions visant quatre personnes et 41 entités liées au Prince Group, basé au Cambodge, et l'ambassade américaine à Nairobi a indiqué que des centaines de Kényans avaient été secourus de centres d'arnaque en Asie du Sud-Est en 2026. Selon l'AP, après la répression menée au Cambodge, de nombreux anciens travailleurs sont bloqués sans passeport ni billet de retour, et l'ambassadrice de l'Ouganda en Malaisie en a aidé plus de 1 000, pour la plupart ougandais.",
        th: "สหรัฐอเมริกาประกาศคว่ำบาตรบุคคล 4 รายและนิติบุคคล 41 แห่งที่เชื่อมโยงกับ Prince Group ซึ่งมีฐานในกัมพูชาเมื่อวันที่ 5 พฤศจิกายน และสถานทูตสหรัฐฯ ในไนโรบีระบุว่าชาวเคนยาหลายร้อยคนได้รับการช่วยเหลือออกจากแหล่งสแกมเมอร์ในเอเชียตะวันออกเฉียงใต้ในปี 2026 สำนักข่าว AP รายงานว่าหลังการปราบปรามในกัมพูชา อดีตแรงงานจำนวนมากติดค้างอยู่โดยไม่มีหนังสือเดินทางหรือตั๋วกลับบ้าน และเอกอัครราชทูตยูกันดาประจำมาเลเซียได้ช่วยเหลือแล้วกว่า 1,000 คน ส่วนใหญ่เป็นชาวยูกันดา",
        sw: "Marekani ilitangaza vikwazo tarehe 5 Novemba dhidi ya watu wanne na taasisi 41 zinazohusishwa na Prince Group yenye makao Kambodia, na Ubalozi wa Marekani Nairobi ulisema mamia ya Wakenya waliokolewa kutoka vituo vya utapeli Kusini-Mashariki mwa Asia mwaka 2026. AP inaripoti kuwa baada ya msako wa Kambodia, wafanyakazi wengi wa zamani wamekwama bila pasipoti wala tiketi za kurudi nyumbani, na balozi wa Uganda nchini Malaysia amewasaidia zaidi ya 1,000, wengi wao Waganda."
      },
      why: {
        en: "Trafficking of East Africans into scam compounds links the two regions: AP reports that workers faced visa fines and immigration interviews before they could leave, and that thousands who could not afford flights got no help from their home countries.",
        fr: "La traite d'Est-Africains vers les centres d'arnaque relie les deux régions : selon l'AP, les travailleurs ont dû payer des amendes de visa et passer des entretiens d'immigration avant de partir, et des milliers de ceux qui ne pouvaient pas payer leur billet n'ont reçu aucune aide de leur pays.",
        th: "การค้ามนุษย์ชาวแอฟริกาตะวันออกเข้าสู่แหล่งสแกมเมอร์เชื่อมโยงสองภูมิภาคเข้าด้วยกัน AP รายงานว่าแรงงานต้องเสียค่าปรับวีซ่าและผ่านการสัมภาษณ์ของตรวจคนเข้าเมืองก่อนออกจากประเทศ และหลายพันคนที่ไม่มีเงินซื้อตั๋วเครื่องบินไม่ได้รับความช่วยเหลือจากประเทศของตน",
        sw: "Usafirishaji haramu wa Waafrika Mashariki kwenda vituo vya utapeli unaunganisha kanda hizi mbili: AP inaripoti kuwa wafanyakazi walilipa faini za viza na kuhojiwa na maafisa wa uhamiaji kabla ya kuondoka, na maelfu wasioweza kumudu tiketi za ndege hawakupata msaada kutoka nchi zao."
      },
      sources: [
        { name: "Capital FM (via allAfrica)", date: "2026-11-06", url: "https://allafrica.com/stories/202611060201.html" },
        { name: "AP", date: "2026-11-04", url: "https://krmg.com/2026/11/04/lured-into-an-online-scam-network-an-african-man-spent-almost-a-year-in-cambodia-trying-to-go-home/" }
      ]
    },
    {
      id: "congo-refugees",
      date: "2026-11-02",
      region: "gl",
      photo: "goma-kivu",
      team: ["aaron"],
      topic: "refugees",
      title: {
        en: "Congolese refugees: 1.25 million abroad as aid falls and borders tighten",
        fr: "Réfugiés congolais : 1,25 million à l'étranger, l'aide recule et les frontières se ferment",
        th: "ผู้ลี้ภัยชาวคองโก 1.25 ล้านคนอยู่นอกประเทศ ขณะที่ความช่วยเหลือลดลงและพรมแดนเข้มงวดขึ้น",
        sw: "Wakimbizi wa Kongo: milioni 1.25 nje ya nchi huku misaada ikipungua na mipaka ikibanwa"
      },
      summary: {
        en: "UNHCR counted 1.25 million Congolese refugees and asylum seekers in June, about 80 per cent of them in neighbouring countries, and Uganda hosts 53 per cent. In January, Uganda's refugee health response had secured 6 per cent of its 2026 funding, according to the International Rescue Committee.",
        fr: "Le HCR recensait en juin 1,25 million de réfugiés et demandeurs d'asile congolais, dont environ 80 % dans les pays voisins, et l'Ouganda en accueille 53 %. En janvier, la riposte sanitaire pour les réfugiés en Ouganda n'avait obtenu que 6 % de son financement pour 2026, selon l'International Rescue Committee.",
        th: "UNHCR นับผู้ลี้ภัยและผู้ขอลี้ภัยชาวคองโกได้ 1.25 ล้านคนในเดือนมิถุนายน ราวร้อยละ 80 อยู่ในประเทศเพื่อนบ้าน และยูกันดารองรับไว้ร้อยละ 53 ข้อมูลของ International Rescue Committee ระบุว่า ณ เดือนมกราคม งานด้านสุขภาพสำหรับผู้ลี้ภัยในยูกันดาได้รับงบประมาณเพียงร้อยละ 6 ของความต้องการปี 2026",
        sw: "UNHCR ilihesabu wakimbizi na waomba hifadhi milioni 1.25 kutoka Kongo mwezi Juni, takriban asilimia 80 wakiwa katika nchi jirani, na Uganda inahifadhi asilimia 53. Kufikia Januari, huduma za afya kwa wakimbizi nchini Uganda zilikuwa zimepata asilimia 6 tu ya fedha zinazohitajika kwa 2026, kwa mujibu wa International Rescue Committee."
      },
      why: {
        en: "Hosting as aid shrinks, at borders that are also managing Ebola: an ISS analysis notes that Uganda has tightened cross-border movement over Ebola, and that Burundi said in October it would not admit people coming from M23-held areas.",
        fr: "Accueillir avec moins d'aide, à des frontières qui gèrent aussi Ebola : une analyse de l'ISS relève que l'Ouganda a restreint les mouvements transfrontaliers à cause d'Ebola, et que le Burundi a annoncé en octobre qu'il n'admettrait pas les personnes venant des zones tenues par le M23.",
        th: "การรองรับผู้ลี้ภัยท่ามกลางความช่วยเหลือที่ลดลง ณ พรมแดนที่ต้องรับมืออีโบลาไปพร้อมกัน บทวิเคราะห์ของ ISS ระบุว่ายูกันดาเข้มงวดการเดินทางข้ามพรมแดนเพราะอีโบลา และบุรุนดีประกาศเมื่อเดือนตุลาคมว่าจะไม่รับผู้ที่มาจากพื้นที่ที่ M23 ควบคุม",
        sw: "Kuhifadhi wakimbizi huku misaada ikipungua, katika mipaka inayokabiliana pia na Ebola: uchambuzi wa ISS unaeleza kuwa Uganda imebana usafiri wa mipakani kwa sababu ya Ebola, na Burundi ilisema mwezi Oktoba kuwa haitapokea watu wanaotoka maeneo yanayoshikiliwa na M23."
      },
      sources: [
        { name: "ISS Today (via Premium Times)", date: "2026-11-02", url: "https://www.premiumtimesng.com/news/headlines/922102-analysis-congolese-refugees-caught-between-war-and-closing-doors.html" }
      ]
    },
    {
      id: "tak-border",
      date: "2026-11-03",
      region: "sea",
      photo: "moei-bridge",
      team: ["aaron"],
      topic: "peace",
      title: {
        en: "Thailand summons Myanmar's military attaché as fighting spills across the border",
        fr: "La Thaïlande convoque l'attaché militaire birman alors que les combats débordent la frontière",
        th: "ไทยเรียกผู้ช่วยทูตทหารเมียนมาพบ ขณะที่การสู้รบลุกลามข้ามพรมแดน",
        sw: "Thailand yamwita mwambata wa kijeshi wa Myanmar huku mapigano yakivuka mpaka"
      },
      summary: {
        en: "On 2 November, Thailand's armed forces chief summoned Myanmar's military attaché and urged caution along the border, and Prime Minister Anutin Charnvirakul said the army would protect Thai sovereignty. Ammunition from clashes near Myawaddy injured a Mae Sot resident on 29 October, and on 31 October bombs dropped across the Salween damaged buildings in Mae Hong Son, with no one hurt. Trade through unofficial crossings in Tak was suspended until 5 November.",
        fr: "Le 2 novembre, le chef des forces armées thaïlandaises a convoqué l'attaché militaire birman et appelé à la prudence le long de la frontière, et le Premier ministre Anutin Charnvirakul a déclaré que l'armée protégerait la souveraineté thaïlandaise. Des munitions tirées lors d'affrontements près de Myawaddy ont blessé une habitante de Mae Sot le 29 octobre, et le 31 octobre des bombes larguées de l'autre côté de la Salouen ont endommagé des bâtiments à Mae Hong Son, sans faire de blessés. Le commerce par les points de passage non officiels de Tak a été suspendu jusqu'au 5 novembre.",
        th: "วันที่ 2 พฤศจิกายน ผู้บัญชาการทหารสูงสุดของไทยเรียกผู้ช่วยทูตฝ่ายทหารเมียนมาเข้าพบและขอให้ระมัดระวังการปฏิบัติการตามแนวชายแดน และนายกรัฐมนตรีอนุทิน ชาญวีรกูล กล่าวว่ากองทัพจะปกป้องอธิปไตยของไทย กระสุนจากการปะทะใกล้เมียวดีทำให้ชาวแม่สอดบาดเจ็บเมื่อวันที่ 29 ตุลาคม และวันที่ 31 ตุลาคม ระเบิดที่ทิ้งฝั่งตรงข้ามแม่น้ำสาละวินทำให้อาคารในแม่ฮ่องสอนเสียหาย ไม่มีผู้บาดเจ็บ การค้าผ่านช่องทางไม่เป็นทางการในจังหวัดตากถูกระงับจนถึงวันที่ 5 พฤศจิกายน",
        sw: "Tarehe 2 Novemba, mkuu wa majeshi ya Thailand alimwita mwambata wa kijeshi wa Myanmar na kumtaka kuwa mwangalifu mpakani, na Waziri Mkuu Anutin Charnvirakul alisema jeshi litalinda mamlaka ya Thailand. Risasi kutoka mapigano karibu na Myawaddy zilimjeruhi mkazi wa Mae Sot tarehe 29 Oktoba, na tarehe 31 Oktoba mabomu yaliyodondoshwa ng'ambo ya Mto Salween yaliharibu majengo huko Mae Hong Son, bila mtu kujeruhiwa. Biashara kupitia vivuko visivyo rasmi vya Tak ilisimamishwa hadi tarehe 5 Novemba."
      },
      why: {
        en: "A conflict crossing a border: Thai authorities say the suspension aims to stop supplies reaching any party to the fighting, and it touches Mae Sot, one of the main trade posts between Thailand and Myanmar.",
        fr: "Un conflit qui traverse une frontière : selon les autorités thaïlandaises, la suspension vise à empêcher que des approvisionnements atteignent l'une des parties au conflit, et elle touche Mae Sot, l'un des principaux postes commerciaux entre la Thaïlande et le Myanmar.",
        th: "ความขัดแย้งที่ข้ามพรมแดน ทางการไทยระบุว่าการระงับนี้มุ่งป้องกันไม่ให้สิ่งของไปถึงฝ่ายใดในการสู้รบ และส่งผลต่อแม่สอด หนึ่งในจุดการค้าหลักระหว่างไทยกับเมียนมา",
        sw: "Mgogoro unaovuka mpaka: mamlaka za Thailand zinasema usimamishaji unalenga kuzuia bidhaa kufika kwa upande wowote wa mapigano, na unagusa Mae Sot, mojawapo ya vituo vikuu vya biashara kati ya Thailand na Myanmar."
      },
      sources: [
        { name: "The Nation Thailand", date: "2026-10-30", url: "https://www.nationthailand.com/news/general/40072918" },
        { name: "DVB", date: "2026-11-03", url: "https://english.dvb.no/thailand-warns-myanmar-military-attache-to-exercise-caution-over-border-airstrikes/" },
        { name: "Thaiger", date: "2026-11-01", url: "https://thethaiger.com/news/national/myanmar-bombs-near-thai-border-village-damage-health-centre" }
      ]
    },
    {
      id: "drc-hunger",
      date: "2026-10-30",
      region: "gl",
      photo: "bukavu",
      team: ["yidnekachew"],
      topic: "refugees",
      title: {
        en: "DR Congo: 28.8 million face acute hunger, rising to 30.3 million in early 2027",
        fr: "RD Congo : 28,8 millions de personnes en insécurité alimentaire aiguë, 30,3 millions attendues début 2027",
        th: "คองโก: ผู้คน 28.8 ล้านคนเผชิญความหิวโหยเฉียบพลัน คาดเพิ่มเป็น 30.3 ล้านคนต้นปี 2027",
        sw: "DR Kongo: watu milioni 28.8 wakabiliwa na njaa kali, idadi kufikia milioni 30.3 mapema 2027"
      },
      summary: {
        en: "An alert from the UN-backed IPC says about 28.8 million people, 23 per cent of those analysed, face crisis-level hunger or worse through December, and projects 30.3 million from January to June 2027, including 4.2 million in emergency. North Kivu, South Kivu and Ituri account for 10.4 million.",
        fr: "Une alerte de l'IPC, soutenu par l'ONU, indique qu'environ 28,8 millions de personnes, soit 23 % de la population analysée, sont en situation de crise alimentaire ou pire jusqu'en décembre, et prévoit 30,3 millions de janvier à juin 2027, dont 4,2 millions en urgence. Le Nord-Kivu, le Sud-Kivu et l'Ituri en comptent 10,4 millions.",
        th: "การแจ้งเตือนของ IPC ซึ่งสหประชาชาติสนับสนุน ระบุว่าผู้คนราว 28.8 ล้านคน หรือร้อยละ 23 ของประชากรที่วิเคราะห์ เผชิญภาวะวิกฤตด้านอาหารหรือรุนแรงกว่าจนถึงเดือนธันวาคม และคาดว่าจะเพิ่มเป็น 30.3 ล้านคนช่วงมกราคมถึงมิถุนายน 2027 ในจำนวนนี้ 4.2 ล้านคนอยู่ในภาวะฉุกเฉิน จังหวัดคิวูเหนือ คิวูใต้ และอิตูรีมีรวมกัน 10.4 ล้านคน",
        sw: "Tahadhari ya IPC inayoungwa mkono na UN inasema takriban watu milioni 28.8, asilimia 23 ya waliochambuliwa, wanakabiliwa na njaa ya kiwango cha mgogoro au zaidi hadi Desemba, na inakadiria milioni 30.3 kuanzia Januari hadi Juni 2027, wakiwemo milioni 4.2 katika hali ya dharura. Kivu Kaskazini, Kivu Kusini na Ituri zina milioni 10.4."
      },
      why: {
        en: "Food security in a conflict-hit border region: conflict, the Ebola outbreak and climate shocks deepen hunger in the east, and the alert notes that humanitarian assistance is declining.",
        fr: "La sécurité alimentaire dans une région frontalière touchée par le conflit : le conflit, l'épidémie d'Ebola et les chocs climatiques aggravent la faim dans l'est, et l'alerte note que l'aide humanitaire diminue.",
        th: "ความมั่นคงทางอาหารในภูมิภาคชายแดนที่ได้รับผลกระทบจากความขัดแย้ง ความขัดแย้ง การระบาดของอีโบลา และภัยจากสภาพภูมิอากาศทำให้ความหิวโหยทางภาคตะวันออกรุนแรงขึ้น และการแจ้งเตือนระบุว่าความช่วยเหลือด้านมนุษยธรรมกำลังลดลง",
        sw: "Usalama wa chakula katika kanda ya mpakani iliyoathiriwa na vita: vita, mlipuko wa Ebola na majanga ya tabianchi vinazidisha njaa mashariki, na tahadhari inaeleza kuwa misaada ya kibinadamu inapungua."
      },
      sources: [
        { name: "UN News (IPC alert)", date: "2026-10-30", url: "https://news.un.org/en/story/2026/10/1168708" }
      ]
    },
    {
      id: "nile-gerd",
      date: "2026-11-03",
      region: "nile",
      photo: "gerd-space",
      team: ["aaron"],
      topic: "rivers",
      title: {
        en: "Egypt and Sudan reject unilateral operation of Ethiopia's Nile dam",
        fr: "L'Égypte et le Soudan rejettent l'exploitation unilatérale du barrage éthiopien sur le Nil",
        th: "อียิปต์และซูดานคัดค้านการเดินเขื่อนไนล์ของเอธิโอเปียฝ่ายเดียว",
        sw: "Misri na Sudan zakataa uendeshaji wa upande mmoja wa bwawa la Ethiopia kwenye Nile"
      },
      summary: {
        en: "After the third round of their \"2+2\" talks of foreign and irrigation ministers in Cairo on 2 November, Egypt and Sudan said operating the dam without a binding agreement threatens their water security, reaffirmed their rights under the 1959 Nile Waters Agreement and urged Ethiopia to return to negotiations. Ethiopia was not a party to the 1959 agreement, which it regards as null and void; it inaugurated the dam in September 2025.",
        fr: "À l'issue du troisième cycle de leur mécanisme « 2+2 » réunissant les ministres des Affaires étrangères et de l'Irrigation au Caire le 2 novembre, l'Égypte et le Soudan ont déclaré que l'exploitation du barrage sans accord contraignant menace leur sécurité hydrique, ont réaffirmé leurs droits au titre de l'accord de 1959 sur les eaux du Nil et ont appelé l'Éthiopie à revenir aux négociations. L'Éthiopie n'était pas partie à l'accord de 1959, qu'elle considère comme nul ; elle a inauguré le barrage en septembre 2025.",
        th: "หลังการหารือรอบที่สามของกลไก \"2+2\" ระหว่างรัฐมนตรีต่างประเทศและรัฐมนตรีด้านชลประทานที่กรุงไคโรเมื่อวันที่ 2 พฤศจิกายน อียิปต์และซูดานระบุว่าการเดินเขื่อนโดยไม่มีข้อตกลงที่มีผลผูกพันคุกคามความมั่นคงทางน้ำของตน ยืนยันสิทธิตามความตกลงน้ำไนล์ปี 1959 และเรียกร้องให้เอธิโอเปียกลับสู่การเจรจา เอธิโอเปียไม่ได้เป็นภาคีของความตกลงปี 1959 และถือว่าความตกลงนั้นเป็นโมฆะ โดยได้เปิดเขื่อนอย่างเป็นทางการเมื่อเดือนกันยายน 2025",
        sw: "Baada ya duru ya tatu ya utaratibu wao wa \"2+2\" wa mawaziri wa mambo ya nje na wa umwagiliaji mjini Cairo tarehe 2 Novemba, Misri na Sudan zilisema kuendesha bwawa bila makubaliano ya lazima kunatishia usalama wao wa maji, zilithibitisha haki zao chini ya Mkataba wa Maji ya Nile wa 1959 na kuitaka Ethiopia kurudi kwenye mazungumzo. Ethiopia haikuwa mshiriki wa mkataba wa 1959, ambao inauona kuwa batili; ilizindua bwawa hilo Septemba 2025."
      },
      why: {
        en: "Relations between governments on a shared river: the statement backs the Nile Basin Initiative but says the dam dispute concerns only the three Eastern Nile countries, a question the Mekong's states also face over mainstream dams.",
        fr: "Les relations entre gouvernements sur un fleuve partagé : la déclaration soutient l'Initiative du bassin du Nil mais estime que le différend sur le barrage ne concerne que les trois pays du Nil oriental, une question que se posent aussi les États du Mékong face aux barrages sur le cours principal.",
        th: "ความสัมพันธ์ระหว่างรัฐบาลบนแม่น้ำที่ใช้ร่วมกัน แถลงการณ์สนับสนุนข้อริเริ่มลุ่มน้ำไนล์ แต่ระบุว่าข้อพิพาทเรื่องเขื่อนเกี่ยวข้องเฉพาะสามประเทศในลุ่มไนล์ตะวันออก ซึ่งเป็นคำถามที่ประเทศลุ่มน้ำโขงก็เผชิญในเรื่องเขื่อนบนลำน้ำสายหลัก",
        sw: "Mahusiano kati ya serikali kwenye mto unaoshirikiwa: taarifa inaunga mkono Mpango wa Bonde la Nile lakini inasema mzozo wa bwawa unazihusu nchi tatu za Nile ya Mashariki pekee, swali ambalo nchi za Mekong pia zinakabiliana nalo kuhusu mabwawa ya mto mkuu."
      },
      sources: [
        { name: "Daily News Egypt", date: "2026-11-02", url: "https://dailynewsegypt.com/2026/11/02/egypt-sudan-reject-unilateral-ethiopian-dam-management-reaffirm-1959-nile-water-rights/" },
        { name: "Addis Standard (via allAfrica)", date: "2026-11-03", url: "https://allafrica.com/stories/202611030630.html" }
      ]
    },
    {
      id: "cholera",
      date: "2026-10-14",
      region: "gl",
      photo: "bukavu",
      team: ["dominick"],
      topic: "health",
      title: {
        en: "Cholera spreads in eastern DR Congo alongside Ebola",
        fr: "Le choléra progresse dans l'est de la RD Congo en parallèle d'Ebola",
        th: "อหิวาตกโรคแพร่ระบาดในภาคตะวันออกของคองโกควบคู่กับอีโบลา",
        sw: "Kipindupindu chaenea mashariki mwa DR Kongo sambamba na Ebola"
      },
      summary: {
        en: "WHO counts more than 51,000 suspected cholera cases and 1,487 deaths in DR Congo this year. North Kivu, South Kivu and Haut-Katanga account for nearly 60 per cent of cases, and insecurity is slowing the response.",
        fr: "L'OMS recense plus de 51 000 cas suspects de choléra et 1 487 décès en RD Congo cette année. Le Nord-Kivu, le Sud-Kivu et le Haut-Katanga concentrent près de 60 % des cas, et l'insécurité ralentit la riposte.",
        th: "องค์การอนามัยโลกนับผู้ป่วยต้องสงสัยอหิวาตกโรคได้กว่า 51,000 ราย และเสียชีวิต 1,487 รายในคองโกปีนี้ จังหวัดคิวูเหนือ คิวูใต้ และโอต์-กาตองกา มีผู้ป่วยรวมกันเกือบร้อยละ 60 และความไม่สงบทำให้การรับมือล่าช้า",
        sw: "WHO imehesabu zaidi ya wagonjwa 51,000 wanaoshukiwa kuwa na kipindupindu na vifo 1,487 DR Kongo mwaka huu. Kivu Kaskazini, Kivu Kusini na Haut-Katanga zina karibu asilimia 60 ya wagonjwa, na ukosefu wa usalama unachelewesha juhudi za kukabiliana."
      },
      why: {
        en: "Safe water and sanitation decide outcomes, and DR Congo and the Republic of Congo are developing a joint cross-border vaccination plan.",
        fr: "L'eau potable et l'assainissement sont déterminants, et la RD Congo et la République du Congo élaborent un plan commun de vaccination transfrontalière.",
        th: "น้ำสะอาดและสุขาภิบาลเป็นตัวชี้ขาด และคองโกกับสาธารณรัฐคองโกกำลังจัดทำแผนการฉีดวัคซีนข้ามพรมแดนร่วมกัน",
        sw: "Maji safi na usafi wa mazingira huamua matokeo, na DR Kongo na Jamhuri ya Kongo zinaandaa mpango wa pamoja wa chanjo wa mipakani."
      },
      sources: [
        { name: "UN News", date: "2026-10-14", url: "https://news.un.org/en/story/2026/10/1168595" }
      ]
    },
    {
      id: "drc-politics",
      date: "2026-10-16",
      region: "gl",
      photo: "kinshasa",
      team: ["aaron"],
      topic: "peace",
      title: {
        en: "Kabila allies with M23 as Doha and Washington talks continue",
        fr: "Kabila s'allie au M23 alors que les pourparlers de Doha et de Washington se poursuivent",
        th: "กาบิลาเป็นพันธมิตรกับกลุ่ม M23 ขณะที่การเจรจาที่โดฮาและวอชิงตันยังดำเนินต่อ",
        sw: "Kabila aungana na M23 huku mazungumzo ya Doha na Washington yakiendelea"
      },
      summary: {
        en: "On 12 October, former president Joseph Kabila publicly allied with the M23–AFC movement and announced a political front, the FRN. Fighting continues in North and South Kivu, with drones increasingly used in populated areas, while mediators press on with the Doha framework and the Washington Accords.",
        fr: "Le 12 octobre, l'ancien président Joseph Kabila s'est publiquement allié au mouvement M23–AFC et a annoncé un front politique, le FRN. Les combats se poursuivent au Nord et au Sud-Kivu, avec un recours croissant aux drones dans des zones peuplées, tandis que les médiateurs font avancer le cadre de Doha et les accords de Washington.",
        th: "เมื่อวันที่ 12 ตุลาคม อดีตประธานาธิบดีโจเซฟ กาบิลา ประกาศเป็นพันธมิตรกับขบวนการ M23–AFC อย่างเปิดเผย และตั้งแนวร่วมทางการเมือง FRN การสู้รบยังคงดำเนินอยู่ในคิวูเหนือและคิวูใต้ โดยมีการใช้โดรนในพื้นที่ชุมชนเพิ่มขึ้น ขณะที่ผู้ไกล่เกลี่ยเดินหน้ากรอบโดฮาและข้อตกลงวอชิงตัน",
        sw: "Tarehe 12 Oktoba, rais wa zamani Joseph Kabila aliungana hadharani na vuguvugu la M23–AFC na kutangaza muungano wa kisiasa, FRN. Mapigano yanaendelea Kivu Kaskazini na Kusini, huku ndege zisizo na rubani zikitumika zaidi katika maeneo yenye watu, huku wapatanishi wakiendeleza mfumo wa Doha na Makubaliano ya Washington."
      },
      why: {
        en: "A military conflict is also becoming a political contest, which raises the stakes for research on governance and accountability in the region.",
        fr: "Un conflit militaire devient aussi une lutte politique, ce qui renforce l'enjeu des recherches sur la gouvernance et la redevabilité dans la région.",
        th: "ความขัดแย้งทางทหารกำลังกลายเป็นการแข่งขันทางการเมืองด้วย ทำให้งานวิจัยด้านธรรมาภิบาลและความรับผิดชอบในภูมิภาคยิ่งมีความสำคัญ",
        sw: "Mzozo wa kijeshi unageuka pia kuwa mashindano ya kisiasa, jambo linaloongeza umuhimu wa utafiti kuhusu utawala na uwajibikaji katika kanda."
      },
      sources: [
        { name: "ACLED", date: "2026-10-16", url: "https://acleddata.com/expert-comment/former-drc-president-forms-rebel-alliance-m23-what-does-mean-peace-congo" },
        { name: "Security Council Report", date: "2026-10-12", url: "https://www.securitycouncilreport.org/whatsinblue/2026/10/great-lakes-region-briefing-and-consultations-11.php" }
      ]
    },
    {
      id: "thailand-refugee-work",
      date: "2026-10-19",
      region: "sea",
      photo: "mae-la",
      team: ["aaron"],
      topic: "refugees",
      title: {
        en: "Thailand: a year of work permits for refugees from Myanmar",
        fr: "Thaïlande : un an de permis de travail pour les réfugiés du Myanmar",
        th: "ไทย: ครบหนึ่งปีของใบอนุญาตทำงานสำหรับผู้ลี้ภัยจากเมียนมา",
        sw: "Thailand: mwaka mmoja wa vibali vya kazi kwa wakimbizi kutoka Myanmar"
      },
      summary: {
        en: "Since October 2025, refugees from Thailand's nine border camps, home to more than 100,000 people, may work in 43 of the country's 76 provinces. About 6,800 joined the labour market in the first year; rights groups report missing contracts and wage deductions.",
        fr: "Depuis octobre 2025, les réfugiés des neuf camps frontaliers de Thaïlande, qui abritent plus de 100 000 personnes, peuvent travailler dans 43 des 76 provinces du pays. Environ 6 800 sont entrés sur le marché du travail la première année ; des organisations de défense des droits signalent des contrats manquants et des retenues sur salaire.",
        th: "ตั้งแต่เดือนตุลาคม 2025 ผู้ลี้ภัยจากค่ายพักพิงชายแดน 9 แห่งของไทย ซึ่งมีผู้อาศัยกว่า 100,000 คน สามารถทำงานได้ใน 43 จาก 76 จังหวัด ในปีแรกมีผู้เข้าสู่ตลาดแรงงานราว 6,800 คน องค์กรสิทธิมนุษยชนรายงานปัญหาการไม่มีสัญญาจ้างและการหักค่าจ้าง",
        sw: "Tangu Oktoba 2025, wakimbizi kutoka kambi tisa za mpakani za Thailand, zenye watu zaidi ya 100,000, wanaweza kufanya kazi katika majimbo 43 kati ya 76. Takriban 6,800 waliingia katika soko la ajira mwaka wa kwanza; mashirika ya haki yanaripoti kukosekana kwa mikataba na makato ya mishahara."
      },
      why: {
        en: "A direct comparison with Uganda's right-to-work policy for refugees, and a ready-made question for Exchange of Notes.",
        fr: "Une comparaison directe avec la politique ougandaise du droit au travail des réfugiés, et une question toute trouvée pour Échange de notes.",
        th: "เปรียบเทียบได้โดยตรงกับนโยบายสิทธิในการทำงานของผู้ลี้ภัยในยูกันดา และเป็นคำถามวิจัยที่พร้อมสำหรับการแลกเปลี่ยนหนังสือ",
        sw: "Ulinganisho wa moja kwa moja na sera ya Uganda ya haki ya wakimbizi kufanya kazi, na swali tayari kwa Kubadilishana Hati."
      },
      sources: [
        { name: "Deutsche Welle (via UA.NEWS)", date: "2026-10-19", url: "https://ua.news/en/world/tayiland-povidomiv-pro-pratsevlashtuvannia-6800-bizhentsiv-iz-mianmi-deutsche-welle" }
      ]
    },
    {
      id: "mekong-delta",
      date: "2026-10-10",
      region: "sea",
      photo: "mekong-delta",
      topic: "rivers",
      title: {
        en: "Mekong Delta farmers adapt to saltwater",
        fr: "Les agriculteurs du delta du Mékong s'adaptent à l'eau salée",
        th: "เกษตรกรในสามเหลี่ยมปากแม่น้ำโขงปรับตัวรับน้ำเค็ม",
        sw: "Wakulima wa Delta ya Mekong wajizoesha maji ya chumvi"
      },
      summary: {
        en: "With upstream dams trapping sediment and seas rising, farmers in Vietnam's delta are rotating rice with shrimp. Sediment reaching the delta fell from about 143 million tonnes two decades ago to an estimated 32 million, according to a 2021 study cited by UN News.",
        fr: "Avec des barrages en amont qui retiennent les sédiments et la montée des mers, les agriculteurs du delta vietnamien alternent riz et crevettes. Les sédiments atteignant le delta sont passés d'environ 143 millions de tonnes il y a vingt ans à environ 32 millions, selon une étude de 2021 citée par ONU Info.",
        th: "เมื่อเขื่อนต้นน้ำกักตะกอนและระดับน้ำทะเลสูงขึ้น เกษตรกรในสามเหลี่ยมปากแม่น้ำของเวียดนามจึงปลูกข้าวสลับกับเลี้ยงกุ้ง ตะกอนที่ไหลถึงสามเหลี่ยมปากแม่น้ำลดลงจากราว 143 ล้านตันเมื่อสองทศวรรษก่อน เหลือประมาณ 32 ล้านตัน ตามการศึกษาปี 2021 ที่ UN News อ้างถึง",
        sw: "Mabwawa ya juu yakizuia mchanga na bahari zikipanda, wakulima katika delta ya Vietnam wanapokezana kilimo cha mpunga na ufugaji wa kamba. Mchanga unaofika deltani umeshuka kutoka takriban tani milioni 143 miongo miwili iliyopita hadi takriban milioni 32, kwa mujibu wa utafiti wa 2021 uliotajwa na UN News."
      },
      why: {
        en: "Upstream dams and downstream costs: the same question sits at the heart of the Nile dispute.",
        fr: "Barrages en amont, coûts en aval : la même question est au cœur du différend sur le Nil.",
        th: "เขื่อนต้นน้ำกับผลกระทบปลายน้ำ คือคำถามเดียวกับที่เป็นหัวใจของข้อพิพาทแม่น้ำไนล์",
        sw: "Mabwawa ya juu na gharama za chini ya mto: swali hilohilo ndilo kiini cha mzozo wa Nile."
      },
      sources: [
        { name: "UN News", date: "2026-10-10", url: "https://news.un.org/en/story/2026/10/1168545" }
      ]
    },
    {
      id: "thailand-africa",
      date: "2026-10-14",
      region: "afasia",
      photo: "au-addis",
      team: ["aaron"],
      topic: "diplomacy",
      title: {
        en: "Thailand widens its Africa push",
        fr: "La Thaïlande élargit son ouverture vers l'Afrique",
        th: "ไทยขยายความสัมพันธ์กับแอฟริกา",
        sw: "Thailand yapanua uhusiano wake na Afrika"
      },
      summary: {
        en: "Egypt's foreign minister visited Bangkok from 11 October, the first such visit in 30 years. Thailand plans to reopen its embassy in Addis Ababa, and TICA signed an agriculture and fisheries agreement for Nigeria with Kasetsart University on 25 September.",
        fr: "Le ministre égyptien des Affaires étrangères s'est rendu à Bangkok à partir du 11 octobre, une première en 30 ans. La Thaïlande prévoit de rouvrir son ambassade à Addis-Abeba, et la TICA a signé le 25 septembre avec l'université Kasetsart un accord sur l'agriculture et la pêche au Nigeria.",
        th: "รัฐมนตรีว่าการกระทรวงการต่างประเทศอียิปต์เยือนกรุงเทพฯ ตั้งแต่วันที่ 11 ตุลาคม เป็นครั้งแรกในรอบ 30 ปี ไทยมีแผนเปิดสถานเอกอัครราชทูตที่แอดดิสอาบาบาอีกครั้ง และ TICA ลงนามความร่วมมือด้านเกษตรและประมงในไนจีเรียกับมหาวิทยาลัยเกษตรศาสตร์เมื่อวันที่ 25 กันยายน",
        sw: "Waziri wa mambo ya nje wa Misri alitembelea Bangkok kuanzia tarehe 11 Oktoba, ziara ya kwanza ya aina hiyo katika miaka 30. Thailand inapanga kufungua tena ubalozi wake Addis Ababa, na TICA ilitia saini makubaliano ya kilimo na uvuvi kwa Nigeria na Chuo Kikuu cha Kasetsart tarehe 25 Septemba."
      },
      why: {
        en: "New channels between Thailand and Africa open room for partnerships between universities and practitioners.",
        fr: "De nouveaux canaux entre la Thaïlande et l'Afrique ouvrent la voie à des partenariats entre universités et praticiens.",
        th: "ช่องทางใหม่ระหว่างไทยกับแอฟริกาเปิดโอกาสให้เกิดหุ้นส่วนระหว่างมหาวิทยาลัยและผู้ปฏิบัติงาน",
        sw: "Njia mpya kati ya Thailand na Afrika zinafungua nafasi ya ushirikiano kati ya vyuo vikuu na wataalamu."
      },
      sources: [
        { name: "Ecofin Agency", date: "2026-10-14", url: "https://www.ecofinagency.com/news/1410-59729-thailand-expands-trade-and-diplomatic-push-across-africa-to-diversify-export-markets" }
      ]
    },
    {
      id: "asean-summit",
      date: "2026-09-22",
      region: "sea",
      photo: "manila",
      topic: "diplomacy",
      upcoming: true,
      title: {
        en: "Coming up: the 49th ASEAN Summit in Manila, 16 to 18 November",
        fr: "À venir : le 49e sommet de l'ASEAN à Manille, du 16 au 18 novembre",
        th: "เร็ว ๆ นี้: การประชุมสุดยอดอาเซียนครั้งที่ 49 ที่มะนิลา 16–18 พฤศจิกายน",
        sw: "Inakuja: Mkutano wa 49 wa ASEAN Manila, tarehe 16 hadi 18 Novemba"
      },
      summary: {
        en: "ASEAN leaders and partners meet at the Philippine International Convention Center in Pasay City, Metro Manila, under the Philippines' 2026 chairmanship.",
        fr: "Les dirigeants de l'ASEAN et leurs partenaires se réunissent au Philippine International Convention Center, à Pasay, dans le Grand Manille, sous la présidence philippine de 2026.",
        th: "ผู้นำอาเซียนและประเทศคู่เจรจาประชุมกันที่ศูนย์การประชุมนานาชาติฟิลิปปินส์ เมืองปาไซ เขตมหานครมะนิลา ภายใต้การเป็นประธานอาเซียนของฟิลิปปินส์ในปี 2026",
        sw: "Viongozi wa ASEAN na washirika wao wanakutana katika Philippine International Convention Center, Pasay, Metro Manila, chini ya uenyekiti wa Ufilipino wa mwaka 2026."
      },
      why: {
        en: "We will report what the summit says about the Global South and cooperation with Africa.",
        fr: "Nous rendrons compte de ce que le sommet dira du Sud global et de la coopération avec l'Afrique.",
        th: "เราจะรายงานว่าการประชุมกล่าวถึงโลกใต้และความร่วมมือกับแอฟริกาอย่างไร",
        sw: "Tutaripoti kile mkutano utakachosema kuhusu Kusini mwa Dunia na ushirikiano na Afrika."
      },
      sources: [
        { name: "PhilSTAR L!fe", date: "2026-09-22", url: "https://philstarlife.com/news-and-views/968280-palace-announces-nov-16-to-18-as-special-non-working-days-asean-summit" }
      ]
    }
  ]
};
