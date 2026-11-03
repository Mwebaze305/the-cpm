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
  updated: "2026-11-03",
  items: [
    {
      id: "ebola",
      date: "2026-10-30",
      region: "gl",
      photo: "goma-kivu",
      team: ["dominick"],
      topic: "health",
      title: {
        en: "Ebola outbreak in DR Congo passes 10,000 confirmed cases",
        fr: "L'épidémie d'Ebola en RD Congo dépasse 10 000 cas confirmés",
        th: "การระบาดของอีโบลาในสาธารณรัฐประชาธิปไตยคองโกมีผู้ป่วยยืนยันเกิน 10,000 ราย",
        sw: "Mlipuko wa Ebola DR Kongo wapita wagonjwa 10,000 waliothibitishwa"
      },
      summary: {
        en: "The Bundibugyo-strain outbreak declared in Ituri in May has reached 10,274 confirmed cases and 4,992 deaths across eight provinces, according to ECDC (data to 28 October). Kenya has recorded nine cases and two deaths, and a vaccine trial using ring vaccination of close contacts has begun in Bunia.",
        fr: "L'épidémie de souche Bundibugyo déclarée en Ituri en mai atteint 10 274 cas confirmés et 4 992 décès dans huit provinces, selon l'ECDC (données au 28 octobre). Le Kenya a enregistré neuf cas et deux décès, et un essai vaccinal par vaccination en anneau des contacts proches a commencé à Bunia.",
        th: "การระบาดของเชื้อสายพันธุ์บุนดิบูเกียวที่ประกาศในจังหวัดอิตูรีเมื่อเดือนพฤษภาคม มีผู้ป่วยยืนยัน 10,274 ราย และเสียชีวิต 4,992 รายใน 8 จังหวัด ตามข้อมูลของ ECDC (ข้อมูลถึงวันที่ 28 ตุลาคม) เคนยามีผู้ป่วย 9 ราย เสียชีวิต 2 ราย และการทดลองวัคซีนแบบฉีดเป็นวงรอบให้ผู้สัมผัสใกล้ชิดได้เริ่มขึ้นที่เมืองบูเนีย",
        sw: "Mlipuko wa aina ya Bundibugyo uliotangazwa Ituri mwezi Mei umefikia wagonjwa 10,274 waliothibitishwa na vifo 4,992 katika majimbo manane, kwa mujibu wa ECDC (takwimu hadi tarehe 28 Oktoba). Kenya imerekodi wagonjwa tisa na vifo viwili, na majaribio ya chanjo kwa njia ya kuwachanja watu waliokaribiana na wagonjwa yameanza Bunia."
      },
      why: {
        en: "Border health in practice: WHO advises cross-border surveillance and screening at points of entry rather than travel bans, and Kenya had screened more than 700,000 travellers by 22 October.",
        fr: "La santé aux frontières en pratique : l'OMS recommande la surveillance transfrontalière et le dépistage aux points d'entrée plutôt que des restrictions de voyage, et le Kenya avait contrôlé plus de 700 000 voyageurs au 22 octobre.",
        th: "สุขภาพชายแดนในทางปฏิบัติ องค์การอนามัยโลกแนะนำการเฝ้าระวังข้ามพรมแดนและการคัดกรอง ณ ช่องทางเข้าออกประเทศแทนการจำกัดการเดินทาง และเคนยาคัดกรองผู้เดินทางไปแล้วกว่า 700,000 คน ณ วันที่ 22 ตุลาคม",
        sw: "Afya ya mipakani kwa vitendo: WHO inashauri ufuatiliaji wa mipakani na uchunguzi katika vituo vya kuingilia badala ya kuzuia safari, na Kenya ilikuwa imewachunguza wasafiri zaidi ya 700,000 kufikia tarehe 22 Oktoba."
      },
      sources: [
        { name: "ECDC", date: "2026-10-30", url: "https://www.ecdc.europa.eu/en/public-health-events/2026-EIP-00026" },
        { name: "UN News", date: "2026-10-28", url: "https://news.un.org/en/story/2026/10/1168689" },
        { name: "WHO Disease Outbreak News", date: "2026-10-23", url: "https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON622" }
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
      date: "2026-11-01",
      region: "sea",
      photo: "moei-bridge",
      team: ["aaron"],
      topic: "peace",
      title: {
        en: "Myanmar's fighting reaches the Thai side; Thailand halts unofficial border trade at Mae Sot",
        fr: "Les combats au Myanmar débordent côté thaïlandais ; la Thaïlande suspend le commerce informel à Mae Sot",
        th: "การสู้รบในเมียนมาลุกลามถึงฝั่งไทย ไทยระงับการค้าผ่านช่องทางไม่เป็นทางการที่แม่สอด",
        sw: "Mapigano ya Myanmar yafika upande wa Thailand; Thailand yasimamisha biashara isiyo rasmi Mae Sot"
      },
      summary: {
        en: "Ammunition from clashes near Myawaddy injured a resident of Mae Sot on 29 October, and Thailand suspended trade through unofficial crossings in Tak from 30 October to 5 November; official crossings stay open. On 31 October, two bombs dropped by Myanmar military aircraft across the Salween River damaged a health centre, a hall and a church in Mae Hong Son, with no one hurt.",
        fr: "Des munitions tirées lors d'affrontements près de Myawaddy ont blessé un habitant de Mae Sot le 29 octobre, et la Thaïlande a suspendu le commerce par les points de passage non officiels de Tak du 30 octobre au 5 novembre ; les postes officiels restent ouverts. Le 31 octobre, deux bombes larguées par l'aviation militaire birmane de l'autre côté de la Salouen ont endommagé un centre de santé, une salle et une église à Mae Hong Son, sans faire de blessés.",
        th: "กระสุนจากการปะทะใกล้เมียวดีทำให้ชาวแม่สอดบาดเจ็บหนึ่งรายเมื่อวันที่ 29 ตุลาคม และไทยระงับการค้าผ่านช่องทางที่ไม่เป็นทางการในจังหวัดตากตั้งแต่ 30 ตุลาคมถึง 5 พฤศจิกายน โดยด่านทางการยังเปิดอยู่ วันที่ 31 ตุลาคม ระเบิดสองลูกที่อากาศยานทหารเมียนมาทิ้งฝั่งตรงข้ามแม่น้ำสาละวิน ทำให้สถานีอนามัย ห้องประชุม และโบสถ์ในแม่ฮ่องสอนเสียหาย ไม่มีผู้บาดเจ็บ",
        sw: "Risasi kutoka mapigano karibu na Myawaddy zilimjeruhi mkazi wa Mae Sot tarehe 29 Oktoba, na Thailand ilisimamisha biashara kupitia vivuko visivyo rasmi vya Tak kuanzia 30 Oktoba hadi 5 Novemba; vivuko rasmi vinabaki wazi. Tarehe 31 Oktoba, mabomu mawili yaliyodondoshwa na ndege za kijeshi za Myanmar ng'ambo ya Mto Salween yaliharibu kituo cha afya, ukumbi na kanisa huko Mae Hong Son, bila mtu kujeruhiwa."
      },
      why: {
        en: "A conflict crossing a border: Thai authorities say the suspension aims to stop supplies reaching any party to the fighting, and it touches Mae Sot, one of the main trade posts between Thailand and Myanmar.",
        fr: "Un conflit qui traverse une frontière : selon les autorités thaïlandaises, la suspension vise à empêcher que des approvisionnements atteignent l'une des parties au conflit, et elle touche Mae Sot, l'un des principaux postes commerciaux entre la Thaïlande et le Myanmar.",
        th: "ความขัดแย้งที่ข้ามพรมแดน ทางการไทยระบุว่าการระงับนี้มุ่งป้องกันไม่ให้สิ่งของไปถึงฝ่ายใดในการสู้รบ และส่งผลต่อแม่สอด หนึ่งในจุดการค้าหลักระหว่างไทยกับเมียนมา",
        sw: "Mgogoro unaovuka mpaka: mamlaka za Thailand zinasema usimamishaji unalenga kuzuia bidhaa kufika kwa upande wowote wa mapigano, na unagusa Mae Sot, mojawapo ya vituo vikuu vya biashara kati ya Thailand na Myanmar."
      },
      sources: [
        { name: "The Nation Thailand", date: "2026-10-30", url: "https://www.nationthailand.com/news/general/40072918" },
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
      id: "sudan",
      date: "2026-10-28",
      region: "nile",
      photo: "khartoum-confluence",
      topic: "peace",
      title: {
        en: "Sudan: ceasefire talks resume in Geneva as hunger deepens",
        fr: "Soudan : reprise des pourparlers de cessez-le-feu à Genève, la faim s'aggrave",
        th: "ซูดาน: การเจรจาหยุดยิงกลับมาที่เจนีวา ขณะที่วิกฤตความหิวโหยรุนแรงขึ้น",
        sw: "Sudan: mazungumzo ya kusitisha mapigano yaanza tena Geneva huku njaa ikizidi"
      },
      summary: {
        en: "Nearly two dozen countries met in Geneva on 21 October to coordinate a path to a ceasefire. Almost 34 million people need aid, and an alert from the UN-backed IPC says drought and war are pushing Darfur and Kordofan towards famine. UN investigators say October saw the most drone attacks on civilians since the war began.",
        fr: "Près de deux douzaines de pays se sont réunis à Genève le 21 octobre pour coordonner une voie vers un cessez-le-feu. Près de 34 millions de personnes ont besoin d'aide, et une alerte de l'IPC, soutenu par l'ONU, indique que la sécheresse et la guerre poussent le Darfour et le Kordofan vers la famine. Selon les enquêteurs de l'ONU, octobre a connu le plus grand nombre d'attaques de drones contre des civils depuis le début de la guerre.",
        th: "ประเทศต่าง ๆ เกือบ 24 ประเทศประชุมกันที่เจนีวาเมื่อวันที่ 21 ตุลาคม เพื่อประสานแนวทางสู่การหยุดยิง ผู้คนเกือบ 34 ล้านคนต้องการความช่วยเหลือ และการแจ้งเตือนของ IPC ซึ่งสหประชาชาติสนับสนุน ระบุว่าภัยแล้งและสงครามกำลังผลักดาร์ฟูร์และคอร์โดฟานเข้าสู่ภาวะทุพภิกขภัย คณะผู้สอบสวนของสหประชาชาติระบุว่าเดือนตุลาคมมีการโจมตีด้วยโดรนต่อพลเรือนมากที่สุดนับตั้งแต่สงครามเริ่ม",
        sw: "Karibu nchi 24 zilikutana Geneva tarehe 21 Oktoba kuratibu njia ya kusitisha mapigano. Karibu watu milioni 34 wanahitaji msaada, na tahadhari ya IPC inayoungwa mkono na UN inasema ukame na vita vinasukuma Darfur na Kordofan kuelekea baa la njaa. Wachunguzi wa UN wanasema Oktoba ilishuhudia mashambulizi mengi zaidi ya droni dhidi ya raia tangu vita vianze."
      },
      why: {
        en: "The war drives displacement across the Nile Basin: more than 1.4 million refugees and returnees have crossed into South Sudan since the war began in 2023.",
        fr: "La guerre provoque des déplacements dans tout le bassin du Nil : plus de 1,4 million de réfugiés et de rapatriés sont entrés au Soudan du Sud depuis le début de la guerre en 2023.",
        th: "สงครามทำให้เกิดการพลัดถิ่นทั่วลุ่มแม่น้ำไนล์ ผู้ลี้ภัยและผู้เดินทางกลับกว่า 1.4 ล้านคนข้ามเข้าซูดานใต้นับตั้งแต่สงครามปะทุในปี 2023",
        sw: "Vita vinasababisha watu kuhama katika Bonde lote la Nile: zaidi ya wakimbizi na wanaorejea milioni 1.4 wameingia Sudan Kusini tangu vita vilipoanza mwaka 2023."
      },
      sources: [
        { name: "UN News (Fact-Finding Mission)", date: "2026-10-28", url: "https://news.un.org/en/story/2026/10/1168696" },
        { name: "UN News", date: "2026-10-21", url: "https://news.un.org/en/story/2026/10/1168638" },
        { name: "UN News (IPC alert)", date: "2026-10-12", url: "https://news.un.org/en/story/2026/10/1168577" },
        { name: "Al Jazeera", date: "2026-10-07", url: "https://www.aljazeera.com/news/2026/10/7/south-sudans-aid-crisis-deepens-as-food-stocks-run-low" }
      ]
    },
    {
      id: "south-sudan",
      date: "2026-10-07",
      region: "gl",
      photo: "juba",
      team: ["yidnekachew"],
      topic: "refugees",
      title: {
        en: "South Sudan's food stocks run low",
        fr: "Les stocks alimentaires du Soudan du Sud s'épuisent",
        th: "คลังอาหารของซูดานใต้ใกล้หมด",
        sw: "Akiba ya chakula ya Sudan Kusini yapungua"
      },
      summary: {
        en: "WFP stocks at its Malakal hub have fallen from 10,000 tonnes a year ago to under 300 tonnes. 7.8 million people, more than half the population, face acute food shortages, while about 3,000 refugees and returnees arrive from Sudan each week.",
        fr: "Les stocks du PAM à Malakal sont passés de 10 000 tonnes il y a un an à moins de 300 tonnes. 7,8 millions de personnes, plus de la moitié de la population, font face à une grave pénurie alimentaire, tandis qu'environ 3 000 réfugiés et rapatriés arrivent du Soudan chaque semaine.",
        th: "คลังของโครงการอาหารโลก (WFP) ที่ศูนย์มาลากัลลดลงจาก 10,000 ตันเมื่อปีที่แล้วเหลือไม่ถึง 300 ตัน ประชาชน 7.8 ล้านคน หรือกว่าครึ่งของประชากร เผชิญภาวะขาดแคลนอาหารเฉียบพลัน ขณะที่ผู้ลี้ภัยและผู้เดินทางกลับราว 3,000 คนเดินทางมาจากซูดานทุกสัปดาห์",
        sw: "Akiba ya WFP katika kituo cha Malakal imeshuka kutoka tani 10,000 mwaka mmoja uliopita hadi chini ya tani 300. Watu milioni 7.8, zaidi ya nusu ya wakazi, wanakabiliwa na uhaba mkubwa wa chakula, huku wakimbizi na wanaorejea wapatao 3,000 wakiwasili kutoka Sudan kila wiki."
      },
      why: {
        en: "Host communities and new arrivals depend on the same shrinking aid, a core question for refugee policy research.",
        fr: "Communautés d'accueil et nouveaux arrivants dépendent de la même aide en recul, une question centrale pour la recherche sur les politiques d'asile.",
        th: "ชุมชนเจ้าบ้านและผู้มาใหม่พึ่งพาความช่วยเหลือก้อนเดียวกันที่หดตัวลง ซึ่งเป็นคำถามหลักของงานวิจัยด้านนโยบายผู้ลี้ภัย",
        sw: "Jamii zinazowapokea na wanaowasili wanategemea msaada uleule unaopungua, swali la msingi katika utafiti wa sera za wakimbizi."
      },
      sources: [
        { name: "Al Jazeera", date: "2026-10-07", url: "https://www.aljazeera.com/news/2026/10/7/south-sudans-aid-crisis-deepens-as-food-stocks-run-low" }
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
      id: "myanmar",
      date: "2026-10-16",
      region: "sea",
      photo: "mae-sai-towns",
      topic: "peace",
      title: {
        en: "Myanmar's military-led government courts its neighbours",
        fr: "Le gouvernement dirigé par l'armée au Myanmar courtise ses voisins",
        th: "รัฐบาลที่นำโดยทหารของเมียนมาเร่งสานสัมพันธ์กับประเทศเพื่อนบ้าน",
        sw: "Serikali inayoongozwa na jeshi Myanmar yawatafuta majirani zake"
      },
      summary: {
        en: "Min Aung Hlaing, president since April after an election that barred major opposition parties, has now been hosted by five ASEAN states, most recently Malaysia. The war, in its fifth year, has displaced at least 3.5 million people, according to monitoring groups.",
        fr: "Min Aung Hlaing, président depuis avril à l'issue d'une élection dont les principaux partis d'opposition étaient exclus, a désormais été reçu par cinq États de l'ASEAN, dernièrement la Malaisie. La guerre, dans sa cinquième année, a déplacé au moins 3,5 millions de personnes selon des groupes de surveillance.",
        th: "มิน อ่อง หล่าย ซึ่งดำรงตำแหน่งประธานาธิบดีตั้งแต่เดือนเมษายน หลังการเลือกตั้งที่พรรคฝ่ายค้านหลักถูกกีดกัน ได้รับการต้อนรับจากรัฐสมาชิกอาเซียนแล้ว 5 ประเทศ ล่าสุดคือมาเลเซีย สงครามซึ่งดำเนินมาเป็นปีที่ห้าทำให้มีผู้พลัดถิ่นอย่างน้อย 3.5 ล้านคน ตามข้อมูลของกลุ่มติดตามสถานการณ์",
        sw: "Min Aung Hlaing, rais tangu Aprili baada ya uchaguzi uliozuia vyama vikuu vya upinzani, sasa amekaribishwa na nchi tano za ASEAN, karibuni zaidi Malaysia. Vita, katika mwaka wake wa tano, vimewafanya angalau watu milioni 3.5 kuhama, kwa mujibu wa makundi ya ufuatiliaji."
      },
      why: {
        en: "Fighting near the Thai border shapes refugee movement and cross-border health in northern Thailand.",
        fr: "Les combats près de la frontière thaïlandaise influent sur les mouvements de réfugiés et la santé transfrontalière dans le nord de la Thaïlande.",
        th: "การสู้รบใกล้ชายแดนไทยส่งผลต่อการเคลื่อนย้ายของผู้ลี้ภัยและสุขภาพข้ามพรมแดนในภาคเหนือของไทย",
        sw: "Mapigano karibu na mpaka wa Thailand yanaathiri uhamaji wa wakimbizi na afya ya mipakani kaskazini mwa Thailand."
      },
      sources: [
        { name: "Al Jazeera", date: "2026-10-16", url: "https://www.aljazeera.com/news/2026/10/16/as-war-rages-myanmars-coup-leader-turned-president-wins-back-neighbours" }
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
      id: "nile-gerd",
      date: "2026-09-21",
      region: "nile",
      photo: "gerd-space",
      topic: "rivers",
      title: {
        en: "Egypt sets out its water case on Ethiopia's Nile dam",
        fr: "L'Égypte expose ses arguments sur l'eau face au barrage éthiopien du Nil",
        th: "อียิปต์แจกแจงเหตุผลด้านน้ำต่อเขื่อนไนล์ของเอธิโอเปีย",
        sw: "Misri yaeleza hoja zake za maji kuhusu bwawa la Ethiopia kwenye Nile"
      },
      summary: {
        en: "Egypt's water minister said supply is about 472 cubic metres per person a year, below the threshold for absolute scarcity, and that more than 98 per cent of Egypt's renewable water comes from beyond its borders. Egypt wants a binding agreement on operating the dam; Ethiopia presents it as a sovereign power project.",
        fr: "Le ministre égyptien de l'Eau a indiqué que l'approvisionnement est d'environ 472 mètres cubes par personne et par an, sous le seuil de pénurie absolue, et que plus de 98 % de l'eau renouvelable de l'Égypte vient de l'extérieur de ses frontières. L'Égypte demande un accord contraignant sur l'exploitation du barrage ; l'Éthiopie le présente comme un projet énergétique souverain.",
        th: "รัฐมนตรีทรัพยากรน้ำของอียิปต์กล่าวว่าปริมาณน้ำอยู่ที่ราว 472 ลูกบาศก์เมตรต่อคนต่อปี ต่ำกว่าเกณฑ์ขาดแคลนน้ำขั้นวิกฤต และน้ำหมุนเวียนของอียิปต์กว่าร้อยละ 98 มาจากนอกพรมแดน อียิปต์ต้องการข้อตกลงที่มีผลผูกพันว่าด้วยการเดินเขื่อน ส่วนเอธิโอเปียระบุว่าเขื่อนเป็นโครงการพลังงานตามอธิปไตยของตน",
        sw: "Waziri wa maji wa Misri alisema upatikanaji ni takriban mita za ujazo 472 kwa mtu kwa mwaka, chini ya kiwango cha uhaba mkubwa, na kwamba zaidi ya asilimia 98 ya maji mbadala ya Misri yanatoka nje ya mipaka yake. Misri inataka makubaliano ya lazima kuhusu uendeshaji wa bwawa; Ethiopia inalieleza kama mradi wa nishati wa kitaifa."
      },
      why: {
        en: "Water security on a shared river links the Nile and the Mekong, and both regions' scholars.",
        fr: "La sécurité de l'eau sur un fleuve partagé relie le Nil et le Mékong, et les chercheurs des deux régions.",
        th: "ความมั่นคงทางน้ำบนแม่น้ำที่ใช้ร่วมกันเชื่อมแม่น้ำไนล์กับแม่น้ำโขง และนักวิชาการของทั้งสองภูมิภาคเข้าด้วยกัน",
        sw: "Usalama wa maji kwenye mto unaoshirikiwa unaunganisha Nile na Mekong, na wasomi wa kanda zote mbili."
      },
      sources: [
        { name: "The National", date: "2026-09-21", url: "https://www.thenationalnews.com/news/mena/2026/09/21/egypt-ethiopia-nile-dam-latest/" }
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
