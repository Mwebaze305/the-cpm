/* Dispatches: the latest developments that bear on the partnership.
   Shown on the team pages (researchers.html and experts.html), where each one
   has its research questions in questions.js. Not shown on the public site.

   updated: the day this list was last reviewed (YYYY-MM-DD)
   Each item:
   - id: short unique slug (used in links, e.g. researchers.html#dispatch/ebola,
     and as the key in questions.js)
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
  updated: "2026-11-14",
  items: [
    {
      id: "ebola",
      date: "2026-11-13",
      region: "gl",
      photo: "goma-kivu",
      team: ["dominick"],
      topic: "health",
      title: {
        en: "Ebola: DR Congo passes 11,000 cases in its largest outbreak on record",
        fr: "Ebola : la RD Congo dépasse 11 000 cas, la plus grande épidémie de son histoire",
        th: "อีโบลา: คองโกมีผู้ป่วยเกิน 11,000 ราย เป็นการระบาดครั้งใหญ่ที่สุดในประวัติศาสตร์ของประเทศ",
        sw: "Ebola: DR Kongo yapita wagonjwa 11,000 katika mlipuko wake mkubwa zaidi kuwahi kutokea"
      },
      summary: {
        en: "Confirmed cases reached 11,114, with 5,433 deaths, in data from DR Congo's national public health institute to 10 November, ECDC reported; eight of DR Congo's 26 provinces are affected, and there is no vaccine or treatment made for the Bundibugyo strain. WHO said on 13 November that 400 to 500 new infections are still found each week, mostly in rural and hard-to-reach areas, while transmission has fallen in former hotspots in Ituri such as Bunia and Mongbwalu. The UN's senior Ebola response coordinator said attacks by ADF fighters in southern Ituri and North Kivu are now killing more people than Ebola; an attack on Cantine-Aloya killed 66 civilians, including three health workers.",
        fr: "Les cas confirmés atteignaient 11 114, avec 5 433 décès, selon les données de l'institut national de santé publique de la RD Congo arrêtées au 10 novembre et citées par l'ECDC ; huit des 26 provinces de la RD Congo sont touchées, et il n'existe ni vaccin ni traitement conçu pour la souche Bundibugyo. L'OMS a indiqué le 13 novembre que 400 à 500 nouvelles infections sont encore détectées chaque semaine, surtout dans des zones rurales et difficiles d'accès, tandis que la transmission a reculé dans d'anciens foyers de l'Ituri comme Bunia et Mongbwalu. Le coordonnateur principal de l'ONU pour la riposte à Ebola a déclaré que les attaques des combattants des ADF dans le sud de l'Ituri et au Nord-Kivu tuent désormais plus de personnes qu'Ebola ; une attaque contre Cantine-Aloya a tué 66 civils, dont trois agents de santé.",
        th: "ผู้ป่วยยืนยันมีจำนวน 11,114 ราย และเสียชีวิต 5,433 ราย ตามข้อมูลของสถาบันสาธารณสุขแห่งชาติคองโกถึงวันที่ 10 พฤศจิกายน ที่ ECDC รายงาน โดย 8 จาก 26 จังหวัดของคองโกได้รับผลกระทบ และยังไม่มีวัคซีนหรือยารักษาที่พัฒนาขึ้นสำหรับสายพันธุ์บุนดิบูเจียวโดยเฉพาะ องค์การอนามัยโลกระบุเมื่อวันที่ 13 พฤศจิกายนว่ายังพบผู้ติดเชื้อใหม่สัปดาห์ละ 400 ถึง 500 ราย ส่วนใหญ่ในพื้นที่ชนบทและพื้นที่เข้าถึงยาก ขณะที่การแพร่เชื้อลดลงในพื้นที่ระบาดเดิมในจังหวัดอีตูรี เช่น บูเนียและมงบวาลู ผู้ประสานงานอาวุโสด้านการรับมืออีโบลาของสหประชาชาติกล่าวว่าการโจมตีของกลุ่มติดอาวุธ ADF ในอีตูรีตอนใต้และคิวูเหนือคร่าชีวิตผู้คนมากกว่าอีโบลาแล้ว โดยการโจมตีที่ Cantine-Aloya ทำให้พลเรือนเสียชีวิต 66 คน รวมถึงบุคลากรสาธารณสุข 3 คน",
        sw: "Wagonjwa waliothibitishwa walifikia 11,114, na vifo 5,433, kwa mujibu wa takwimu za taasisi ya taifa ya afya ya umma ya DR Kongo hadi tarehe 10 Novemba, ECDC iliripoti; majimbo manane kati ya 26 ya DR Kongo yameathirika, na hakuna chanjo wala tiba iliyotengenezwa kwa aina ya Bundibugyo. WHO ilisema tarehe 13 Novemba kwamba maambukizi mapya 400 hadi 500 bado yanagunduliwa kila wiki, hasa vijijini na katika maeneo yasiyofikika kwa urahisi, huku maambukizi yakipungua katika maeneo yaliyokuwa vitovu vya ugonjwa Ituri kama Bunia na Mongbwalu. Mratibu mkuu wa Umoja wa Mataifa wa kukabiliana na Ebola alisema mashambulizi ya wapiganaji wa ADF kusini mwa Ituri na Kivu Kaskazini sasa yanaua watu wengi kuliko Ebola; shambulio dhidi ya Cantine-Aloya liliua raia 66, wakiwemo wahudumu watatu wa afya."
      },
      why: {
        en: "Border health in practice: Kenya, which had nine cases linked to an imported case, including two deaths, has discharged its last patient and begun a 42-day countdown to being declared Ebola-free, WHO said on 11 November. On 3 November Africa CDC asked Saudi Arabia to lift broad travel restrictions on Kenya, saying an imported case is not by itself a failure of health security.",
        fr: "La santé aux frontières en pratique : le Kenya, qui a enregistré neuf cas liés à un cas importé, dont deux décès, a laissé sortir son dernier patient et entamé un compte à rebours de 42 jours avant d'être déclaré exempt d'Ebola, a indiqué l'OMS le 11 novembre. Le 3 novembre, Africa CDC a demandé à l'Arabie saoudite de lever ses restrictions de voyage générales visant le Kenya, estimant qu'un cas importé ne traduit pas à lui seul une défaillance de la sécurité sanitaire.",
        th: "สุขภาพชายแดนในทางปฏิบัติ องค์การอนามัยโลกระบุเมื่อวันที่ 11 พฤศจิกายนว่าเคนยาซึ่งมีผู้ป่วย 9 รายที่เชื่อมโยงกับผู้ป่วยนำเข้า รวมผู้เสียชีวิต 2 ราย ได้ให้ผู้ป่วยรายสุดท้ายออกจากโรงพยาบาลแล้ว และเริ่มนับถอยหลัง 42 วันก่อนประกาศว่าปลอดอีโบลา เมื่อวันที่ 3 พฤศจิกายน Africa CDC ขอให้ซาอุดีอาระเบียยกเลิกมาตรการจำกัดการเดินทางแบบเหมารวมต่อเคนยา โดยระบุว่าการพบผู้ป่วยนำเข้าเพียงอย่างเดียวไม่ได้แสดงถึงความล้มเหลวด้านความมั่นคงทางสุขภาพ",
        sw: "Afya ya mipakani kwa vitendo: Kenya, iliyokuwa na wagonjwa tisa waliohusishwa na mgonjwa aliyeingia kutoka nje, wakiwemo vifo viwili, imemruhusu mgonjwa wake wa mwisho kutoka hospitalini na kuanza hesabu ya siku 42 kuelekea kutangazwa kuwa huru dhidi ya Ebola, WHO ilisema tarehe 11 Novemba. Tarehe 3 Novemba Africa CDC iliiomba Saudi Arabia kuondoa vikwazo vya jumla vya safari dhidi ya Kenya, ikisema mgonjwa mmoja aliyeingia kutoka nje si, peke yake, ishara ya kushindwa kwa usalama wa afya."
      },
      sources: [
        { name: "Al Jazeera (Reuters)", date: "2026-11-11", url: "https://www.aljazeera.com/news/2026/11/11/ebola-cases-in-dr-congo-pass-11000-with-5387-deaths" },
        { name: "WHO Director-General", date: "2026-11-11", url: "https://www.who.int/news-room/speeches/item/who-director-general-s-opening-remarks-at-the-member-state-briefing-on-ebola-outbreak-in-the-democratic-republic-of-the-congo---11-november-2026" },
        { name: "UN News (WHO, UN Ebola response)", date: "2026-11-13", url: "https://news.un.org/en/story/2026/11/1168797" },
        { name: "ECDC", date: "2026-11-12", url: "https://www.ecdc.europa.eu/en/public-health-events/2026-eip-00026/2026-11-12" },
        { name: "Africa CDC", date: "2026-11-03", url: "https://africacdc.org/news-item/africa-cdc-stands-with-kenya-calls-for-lifting-of-unjustified-ebola-travel-restrictions/" }
      ]
    },
    {
      id: "drc-south-kivu",
      date: "2026-11-10",
      region: "gl",
      photo: "bukavu",
      team: ["aaron", "ohn"],
      topic: "peace",
      title: {
        en: "Eastern DR Congo: rebel offensive in South Kivu displaces more than 160,000, local official says",
        fr: "Est de la RD Congo : une offensive rebelle au Sud-Kivu déplace plus de 160 000 personnes, selon un responsable local",
        th: "คองโกตะวันออก: การรุกของกลุ่มกบฏในจังหวัดคิวูใต้ทำให้ผู้คนกว่า 160,000 คนต้องพลัดถิ่น เจ้าหน้าที่ท้องถิ่นระบุ",
        sw: "Mashariki mwa DR Kongo: mashambulizi ya waasi Kivu Kusini yawafurusha zaidi ya watu 160,000, afisa wa eneo asema"
      },
      summary: {
        en: "Fighters of the FRN, the new name of AFC/M23, launched an offensive in South Kivu on the night of 6 to 7 November, crossed Kahuzi-Biega National Park and took several localities on the road from Bukavu towards Walikale, including Bunyakiri, AFP and RFI reported. The administrator of Kalehe territory estimates that more than 160,000 people have been displaced, some towards Hombo and others into the forest, RFI said. AFP said front lines had been relatively stable since DR Congo and Rwanda signed a US-brokered peace deal in December.",
        fr: "Les combattants du FRN, nouveau nom de l'AFC/M23, ont lancé une offensive au Sud-Kivu dans la nuit du 6 au 7 novembre, traversé le parc national de Kahuzi-Biega et pris plusieurs localités sur la route de Bukavu vers Walikale, dont Bunyakiri, selon l'AFP et RFI. L'administrateur du territoire de Kalehe estime que plus de 160 000 personnes ont été déplacées, certaines vers Hombo, d'autres dans la forêt, selon RFI. L'AFP indique que les lignes de front étaient relativement stables depuis la signature en décembre d'un accord de paix entre la RD Congo et le Rwanda, négocié par les États-Unis.",
        th: "นักรบกลุ่ม FRN ซึ่งเป็นชื่อใหม่ของ AFC/M23 เปิดการรุกในจังหวัดคิวูใต้ในคืนวันที่ 6 ต่อเนื่องวันที่ 7 พฤศจิกายน ข้ามอุทยานแห่งชาติคาฮูซี-บีเอกา และยึดหลายพื้นที่บนเส้นทางจากบูคาวูไปยังวาลีกาเล รวมถึงบุนยากีรี ตามรายงานของ AFP และ RFI ผู้บริหารเขตคาเลเฮประเมินว่ามีผู้พลัดถิ่นกว่า 160,000 คน บางส่วนหนีไปยังฮอมโบ และบางส่วนหลบเข้าป่า RFI รายงาน AFP ระบุว่าแนวหน้าค่อนข้างสงบนับตั้งแต่คองโกและรวันดาลงนามข้อตกลงสันติภาพที่สหรัฐฯ เป็นตัวกลางเมื่อเดือนธันวาคม",
        sw: "Wapiganaji wa FRN, jina jipya la AFC/M23, walianzisha mashambulizi Kivu Kusini usiku wa tarehe 6 kuamkia 7 Novemba, wakavuka Hifadhi ya Taifa ya Kahuzi-Biega na kuteka maeneo kadhaa kwenye barabara kutoka Bukavu kuelekea Walikale, ikiwemo Bunyakiri, AFP na RFI ziliripoti. Msimamizi wa eneo la Kalehe anakadiria kwamba zaidi ya watu 160,000 wamekimbia makazi yao, baadhi kuelekea Hombo na wengine msituni, RFI ilisema. AFP ilisema mistari ya mapigano ilikuwa tulivu kiasi tangu DR Kongo na Rwanda zilipotia saini mkataba wa amani uliosimamiwa na Marekani mwezi Desemba."
      },
      why: {
        en: "Conflict that crosses borders: eastern DR Congo is at the centre of peace efforts in the Great Lakes, and new displacement adds to the needs of a region already facing Ebola and hunger.",
        fr: "Un conflit qui franchit les frontières : l'est de la RD Congo est au cœur des efforts de paix dans les Grands Lacs, et les nouveaux déplacements s'ajoutent aux besoins d'une région déjà touchée par Ebola et la faim.",
        th: "ความขัดแย้งที่ข้ามพรมแดน คองโกตะวันออกเป็นศูนย์กลางของความพยายามสร้างสันติภาพในภูมิภาคเกรตเลกส์ และการพลัดถิ่นครั้งใหม่ซ้ำเติมความต้องการของภูมิภาคที่เผชิญทั้งอีโบลาและความหิวโหยอยู่แล้ว",
        sw: "Mgogoro unaovuka mipaka: mashariki mwa DR Kongo ndiko kiini cha juhudi za amani katika Maziwa Makuu, na watu wapya wanaokimbia makazi yao wanaongeza mahitaji ya eneo ambalo tayari linakabiliwa na Ebola na njaa."
      },
      sources: [
        { name: "RFI (via PressAfrik)", date: "2026-11-10", url: "https://pressafrik.com/RDC-offensive-des-combattants-du-FRN-au-Sud-Kivu-plusieurs-localites-tombent-sous-leur-controle_a314369.html" },
        { name: "AFP (via New Vision)", date: "2026-11-09", url: "https://www.newvision.co.ug/category/world/dr-congo-armed-rebellion-advances-in-eastern-NV_243896_112026" }
      ]
    },
    {
      id: "ethiopia-sudan",
      date: "2026-11-05",
      region: "nile",
      photo: "au-addis",
      team: ["aaron"],
      topic: "diplomacy",
      title: {
        en: "Ethiopia and Sudan expel each other's consular staff after a complaint to the UN and AU",
        fr: "L'Éthiopie et le Soudan expulsent mutuellement du personnel consulaire après une plainte à l'ONU et à l'UA",
        th: "เอธิโอเปียและซูดานขับเจ้าหน้าที่กงสุลของอีกฝ่าย หลังมีการร้องเรียนต่อสหประชาชาติและสหภาพแอฟริกา",
        sw: "Ethiopia na Sudan zafukuza maafisa wa ubalozi mdogo wa kila mmoja baada ya malalamiko kwa UN na AU"
      },
      summary: {
        en: "Sudan's government complained to the UN Security Council and the AU Peace and Security Council on 1 November that Ethiopia lets the RSF launch drones from its territory. On 4 November Ethiopia gave six staff of Sudan's consulate in Assosa 48 hours to leave, Reuters reported, and Sudan then closed Ethiopia's consulate in Gedaref. Ethiopia denies backing the RSF and accuses Sudan, Egypt and Eritrea of backing Tigrayan rebels; all deny the claims.",
        fr: "Le gouvernement soudanais s'est plaint le 1er novembre auprès du Conseil de sécurité de l'ONU et du Conseil de paix et de sécurité de l'UA que l'Éthiopie laisse les FSR lancer des drones depuis son territoire. Le 4 novembre, l'Éthiopie a donné 48 heures à six agents du consulat soudanais d'Assosa pour partir, selon Reuters, puis le Soudan a fermé le consulat éthiopien de Gedaref. L'Éthiopie nie soutenir les FSR et accuse le Soudan, l'Égypte et l'Érythrée de soutenir des rebelles tigréens ; tous démentent.",
        th: "รัฐบาลซูดานยื่นเรื่องร้องเรียนต่อคณะมนตรีความมั่นคงแห่งสหประชาชาติและคณะมนตรีสันติภาพและความมั่นคงของสหภาพแอฟริกาเมื่อวันที่ 1 พฤศจิกายนว่าเอธิโอเปียปล่อยให้กองกำลัง RSF ใช้ดินแดนของตนปล่อยโดรน รอยเตอร์รายงานว่าเมื่อวันที่ 4 พฤศจิกายน เอธิโอเปียสั่งให้เจ้าหน้าที่สถานกงสุลซูดานในเมืองอาโซซา 6 คนออกนอกประเทศภายใน 48 ชั่วโมง จากนั้นซูดานปิดสถานกงสุลเอธิโอเปียในเมืองเกดาเรฟ เอธิโอเปียปฏิเสธว่าไม่ได้สนับสนุน RSF และกล่าวหาว่าซูดาน อียิปต์ และเอริเทรียสนับสนุนกลุ่มกบฏทิกเรย์ ซึ่งทุกฝ่ายปฏิเสธ",
        sw: "Serikali ya Sudan ililalamika kwa Baraza la Usalama la UN na Baraza la Amani na Usalama la AU tarehe 1 Novemba kwamba Ethiopia inairuhusu RSF kurusha droni kutoka ardhi yake. Tarehe 4 Novemba Ethiopia iliwapa maafisa sita wa ubalozi mdogo wa Sudan mjini Assosa saa 48 kuondoka, Reuters iliripoti, kisha Sudan ikafunga ubalozi mdogo wa Ethiopia mjini Gedaref. Ethiopia inakanusha kuiunga mkono RSF na inazishutumu Sudan, Misri na Eritrea kuwaunga mkono waasi wa Tigray; wote wanakanusha madai hayo."
      },
      why: {
        en: "Relations between governments in the Nile Basin: the AU Peace and Security Council is now seized of a complaint between two neighbours, while Sudan's war has displaced more than 14 million people, according to UN figures cited by Reuters.",
        fr: "Les relations entre gouvernements dans le bassin du Nil : le Conseil de paix et de sécurité de l'UA est désormais saisi d'une plainte entre deux voisins, alors que la guerre au Soudan a déplacé plus de 14 millions de personnes, selon des chiffres de l'ONU cités par Reuters.",
        th: "ความสัมพันธ์ระหว่างรัฐบาลในลุ่มแม่น้ำไนล์ ขณะนี้คณะมนตรีสันติภาพและความมั่นคงของสหภาพแอฟริการับเรื่องร้องเรียนระหว่างสองประเทศเพื่อนบ้านไว้พิจารณา ขณะที่สงครามในซูดานทำให้ผู้คนพลัดถิ่นกว่า 14 ล้านคน ตามตัวเลขของสหประชาชาติที่รอยเตอร์อ้างถึง",
        sw: "Mahusiano kati ya serikali katika Bonde la Nile: Baraza la Amani na Usalama la AU sasa lina malalamiko kati ya majirani wawili, huku vita vya Sudan vikiwa vimewahamisha zaidi ya watu milioni 14, kwa mujibu wa takwimu za UN zilizonukuliwa na Reuters."
      },
      sources: [
        { name: "Reuters (via 93.3 The Drive)", date: "2026-11-04", url: "https://www.933thedrive.com/2026/11/04/ethiopia-expels-sudanese-diplomats-after-fresh-allegations-of-support-for-rsf/" },
        { name: "The National", date: "2026-11-05", url: "https://www.thenationalnews.com/news/mena/2026/11/05/sudan-and-ethiopia-in-tit-for-tat-expulsions-of-diplomats-as-tensions-rise/" }
      ]
    },
    {
      id: "sudan",
      date: "2026-11-10",
      region: "nile",
      photo: "khartoum-confluence",
      topic: "peace",
      title: {
        en: "Sudan: drones hit up to 15 power stations in October as aid reaches one in ten people in need",
        fr: "Soudan : jusqu'à 15 centrales électriques frappées par des drones en octobre, l'aide n'atteint qu'une personne sur dix",
        th: "ซูดาน: โดรนโจมตีโรงไฟฟ้าถึง 15 แห่งในเดือนตุลาคม ขณะที่ความช่วยเหลือเข้าถึงผู้ต้องการเพียงหนึ่งในสิบ",
        sw: "Sudan: droni zashambulia hadi vituo 15 vya umeme Oktoba huku misaada ikiwafikia mtu mmoja kati ya kumi wanaohitaji"
      },
      summary: {
        en: "UNICEF said on 10 November that up to 15 power stations were hit in October, that drones are travelling up to 1,500 kilometres to their targets, and that two in three child casualties in Sudan this year were killed by armed drones; strikes on power stop water pumps, and cholera is spreading in pockets. UNHCR and IOM said on 6 November that agencies can assist only about one in ten people in need, and the $2.9 billion aid plan for 2026 is 47 per cent funded. UN envoy Pekka Haavisto said on 2 November that talks with the RSF on a transition to civilian rule are planned before Christmas.",
        fr: "L'UNICEF a indiqué le 10 novembre que jusqu'à 15 centrales électriques ont été frappées en octobre, que des drones parcourent jusqu'à 1 500 kilomètres pour atteindre leurs cibles et que deux enfants victimes sur trois au Soudan cette année ont été tués par des drones armés ; les frappes sur l'électricité arrêtent les pompes à eau, et le choléra se propage par foyers. Le HCR et l'OIM ont indiqué le 6 novembre que les agences ne peuvent aider qu'environ une personne sur dix dans le besoin, et le plan d'aide de 2,9 milliards de dollars pour 2026 est financé à 47 %. L'envoyé de l'ONU Pekka Haavisto a indiqué le 2 novembre que des pourparlers avec les FSR sur une transition vers un pouvoir civil sont prévus avant Noël.",
        th: "UNICEF ระบุเมื่อวันที่ 10 พฤศจิกายนว่าโรงไฟฟ้าถูกโจมตีถึง 15 แห่งในเดือนตุลาคม โดรนบินไกลถึง 1,500 กิโลเมตรก่อนถึงเป้าหมาย และในปีนี้เด็กที่บาดเจ็บล้มตายในซูดานสองในสามรายเสียชีวิตจากโดรนติดอาวุธ การโจมตีระบบไฟฟ้าทำให้เครื่องสูบน้ำหยุดทำงาน และอหิวาตกโรคกำลังแพร่ระบาดเป็นจุด ๆ UNHCR และ IOM ระบุเมื่อวันที่ 6 พฤศจิกายนว่าหน่วยงานช่วยเหลือได้เพียงราวหนึ่งในสิบของผู้ที่ต้องการ และแผนความช่วยเหลือปี 2026 มูลค่า 2,900 ล้านดอลลาร์ได้รับเงินทุนร้อยละ 47 นายเปกกา ฮาวิสโต ทูตพิเศษสหประชาชาติ กล่าวเมื่อวันที่ 2 พฤศจิกายนว่ามีแผนเจรจากับกองกำลัง RSF เรื่องการเปลี่ยนผ่านสู่การปกครองโดยพลเรือนก่อนคริสต์มาส",
        sw: "UNICEF ilisema tarehe 10 Novemba kwamba hadi vituo 15 vya umeme vilishambuliwa Oktoba, kwamba droni zinasafiri hadi kilomita 1,500 kufikia malengo yake, na kwamba watoto wawili kati ya watatu waliouawa au kujeruhiwa nchini Sudan mwaka huu waliuawa na droni zenye silaha; mashambulizi kwenye umeme yanasimamisha pampu za maji, na kipindupindu kinaenea katika baadhi ya maeneo. UNHCR na IOM zilisema tarehe 6 Novemba kwamba mashirika yanaweza kumsaidia takriban mtu mmoja tu kati ya kumi wanaohitaji, na mpango wa misaada wa dola bilioni 2.9 wa 2026 umefadhiliwa kwa asilimia 47. Mjumbe wa UN Pekka Haavisto alisema tarehe 2 Novemba kwamba mazungumzo na RSF kuhusu mpito kuelekea utawala wa kiraia yamepangwa kabla ya Krismasi."
      },
      why: {
        en: "The war drives displacement across the Nile Basin: more than 1.4 million refugees and returnees have crossed into South Sudan since the war began in 2023.",
        fr: "La guerre provoque des déplacements dans tout le bassin du Nil : plus de 1,4 million de réfugiés et de rapatriés sont entrés au Soudan du Sud depuis le début de la guerre en 2023.",
        th: "สงครามทำให้เกิดการพลัดถิ่นทั่วลุ่มแม่น้ำไนล์ ผู้ลี้ภัยและผู้เดินทางกลับกว่า 1.4 ล้านคนข้ามเข้าซูดานใต้นับตั้งแต่สงครามปะทุในปี 2023",
        sw: "Vita vinasababisha watu kuhama katika Bonde lote la Nile: zaidi ya wakimbizi na wanaorejea milioni 1.4 wameingia Sudan Kusini tangu vita vilipoanza mwaka 2023."
      },
      sources: [
        { name: "UN News (UNICEF)", date: "2026-11-10", url: "https://news.un.org/en/story/2026/11/1168771" },
        { name: "UN News (UNHCR and IOM)", date: "2026-11-06", url: "https://news.un.org/en/story/2026/11/1168753" },
        { name: "The National", date: "2026-11-02", url: "https://www.thenationalnews.com/news/mena/2026/11/02/talks-with-rsf-on-transition-to-civilian-rule-in-sudan-expected-within-weeks-says-un-envoy/" },
        { name: "Al Jazeera", date: "2026-10-07", url: "https://www.aljazeera.com/news/2026/10/7/south-sudans-aid-crisis-deepens-as-food-stocks-run-low" }
      ]
    },
    {
      id: "sudan-food",
      date: "2026-11-12",
      region: "nile",
      photo: "khartoum-confluence",
      team: ["yidnekachew", "albert"],
      topic: "refugees",
      title: {
        en: "Sudan: WFP now reaches just over 3 million people as funding cuts end food aid for 900,000",
        fr: "Soudan : le PAM n'atteint plus qu'un peu plus de 3 millions de personnes, les coupes budgétaires privant 900 000 personnes d'aide alimentaire",
        th: "ซูดาน: WFP เข้าถึงผู้คนได้เพียงราว 3 ล้านคน หลังการตัดงบทำให้ 900,000 คนไม่ได้รับความช่วยเหลือด้านอาหาร",
        sw: "Sudan: WFP sasa inawafikia watu zaidi kidogo ya milioni 3 huku kupunguzwa kwa fedha kukikatisha msaada wa chakula kwa watu 900,000"
      },
      summary: {
        en: "WFP's new Executive Director, Luke Lindberg, made his first field mission to Sudan, visiting displaced families in Kosti, Tawila and Ad Dabba, UN News reported on 12 November. Funding cuts have forced WFP to scale back from more than 4 million people fed in August, including 880,000 in areas at risk of famine, to just over 3 million; an estimated 900,000 people have lost their food assistance. WFP needs $520 million to feed 5.4 million people through April 2027, and insecurity, blocked roads and flood damage are slowing deliveries.",
        fr: "Le nouveau directeur exécutif du PAM, Luke Lindberg, a effectué sa première mission de terrain au Soudan, auprès de familles déplacées à Kosti, Tawila et Ad Dabba, a rapporté ONU Info le 12 novembre. Les coupes budgétaires ont contraint le PAM à passer de plus de 4 millions de personnes nourries en août, dont 880 000 dans des zones menacées de famine, à un peu plus de 3 millions ; environ 900 000 personnes ont perdu leur aide alimentaire. Le PAM a besoin de 520 millions de dollars pour nourrir 5,4 millions de personnes jusqu'en avril 2027, et l'insécurité, les routes bloquées et les dégâts des inondations ralentissent les livraisons.",
        th: "นายลุค ลินด์เบิร์ก ผู้อำนวยการบริหารคนใหม่ของโครงการอาหารโลก (WFP) เดินทางลงพื้นที่ครั้งแรกในซูดาน เยี่ยมครอบครัวผู้พลัดถิ่นที่โคสตี ตาวิลา และอัดดับบา UN News รายงานเมื่อวันที่ 12 พฤศจิกายน การตัดงบประมาณทำให้ WFP ต้องลดการช่วยเหลือจากกว่า 4 ล้านคนในเดือนสิงหาคม ซึ่งรวม 880,000 คนในพื้นที่เสี่ยงทุพภิกขภัย เหลือราว 3 ล้านคนเศษ และคาดว่ามีผู้คน 900,000 คนไม่ได้รับความช่วยเหลือด้านอาหารอีกต่อไป WFP ต้องการเงิน 520 ล้านดอลลาร์เพื่อเลี้ยงดูผู้คน 5.4 ล้านคนจนถึงเดือนเมษายน 2027 ขณะที่ความไม่ปลอดภัย ถนนที่ถูกปิด และความเสียหายจากน้ำท่วมทำให้การส่งความช่วยเหลือล่าช้า",
        sw: "Mkurugenzi Mtendaji mpya wa WFP, Luke Lindberg, alifanya ziara yake ya kwanza ya kikazi nchini Sudan, akiwatembelea familia zilizokimbia makazi yao huko Kosti, Tawila na Ad Dabba, UN News iliripoti tarehe 12 Novemba. Kupunguzwa kwa fedha kumeilazimisha WFP kupunguza kutoka zaidi ya watu milioni 4 waliolishwa Agosti, wakiwemo 880,000 katika maeneo yaliyo hatarini kukumbwa na baa la njaa, hadi zaidi kidogo ya milioni 3; inakadiriwa watu 900,000 wamepoteza msaada wao wa chakula. WFP inahitaji dola milioni 520 kuwalisha watu milioni 5.4 hadi Aprili 2027, na ukosefu wa usalama, barabara zilizofungwa na uharibifu wa mafuriko vinachelewesha usambazaji."
      },
      why: {
        en: "Hosting as aid shrinks: the families Lindberg met in camps were displaced by the war, and food aid is one of the services they depend on most.",
        fr: "L'accueil quand l'aide diminue : les familles rencontrées par M. Lindberg dans les camps ont été déplacées par la guerre, et l'aide alimentaire est l'un des services dont elles dépendent le plus.",
        th: "การรองรับผู้พลัดถิ่นเมื่อความช่วยเหลือลดลง ครอบครัวที่นายลินด์เบิร์กพบในค่ายต้องพลัดถิ่นเพราะสงคราม และความช่วยเหลือด้านอาหารเป็นบริการหนึ่งที่พวกเขาพึ่งพามากที่สุด",
        sw: "Kuhifadhi wakimbizi msaada unapopungua: familia alizokutana nazo Lindberg kambini zilikimbia makazi yao kwa sababu ya vita, na msaada wa chakula ni mojawapo ya huduma wanazozitegemea zaidi."
      },
      sources: [
        { name: "UN News (WFP)", date: "2026-11-12", url: "https://news.un.org/en/story/2026/11/1168793" }
      ]
    },
    {
      id: "darfur-chad",
      date: "2026-11-12",
      region: "nile",
      photo: "khartoum-confluence",
      team: ["ohn", "albert"],
      topic: "refugees",
      title: {
        en: "North Darfur: thousands more flee villages in Um Baru, most crossing into Chad, IOM says",
        fr: "Nord-Darfour : des milliers de personnes de plus fuient des villages d'Um Baru, la plupart vers le Tchad, selon l'OIM",
        th: "ดาร์ฟูร์เหนือ: ผู้คนอีกหลายพันหนีออกจากหมู่บ้านในอุมบารู ส่วนใหญ่ข้ามไปชาด IOM ระบุ",
        sw: "Darfur Kaskazini: maelfu zaidi wakimbia vijiji vya Um Baru, wengi wakivuka kuingia Chad, IOM yasema"
      },
      summary: {
        en: "IOM estimated that 5,035 people fled three villages in Um Baru locality, North Darfur, on 10 and 11 November, most of them into neighbouring Chad, Anadolu Agency reported on 12 November. On 9 November IOM had reported about 2,510 people fleeing five villages in the same locality, after 1,150 left four villages between 29 and 31 October, Bernama reported. About 8.6 million people are displaced inside Sudan and more than 4.6 million have fled across its borders, according to IOM and UNHCR.",
        fr: "L'OIM estime que 5 035 personnes ont fui trois villages de la localité d'Um Baru, au Nord-Darfour, les 10 et 11 novembre, la plupart vers le Tchad voisin, a rapporté l'agence Anadolu le 12 novembre. Le 9 novembre, l'OIM avait signalé qu'environ 2 510 personnes avaient fui cinq villages de la même localité, après le départ de 1 150 personnes de quatre villages entre le 29 et le 31 octobre, selon Bernama. Environ 8,6 millions de personnes sont déplacées à l'intérieur du Soudan et plus de 4,6 millions ont fui au-delà de ses frontières, selon l'OIM et le HCR.",
        th: "IOM ประเมินว่าผู้คน 5,035 คนหนีออกจากสามหมู่บ้านในท้องที่อุมบารู ดาร์ฟูร์เหนือ เมื่อวันที่ 10 และ 11 พฤศจิกายน ส่วนใหญ่ข้ามไปยังชาดซึ่งเป็นประเทศเพื่อนบ้าน สำนักข่าวอนาโดลูรายงานเมื่อวันที่ 12 พฤศจิกายน ก่อนหน้านั้นเมื่อวันที่ 9 พฤศจิกายน IOM รายงานว่าราว 2,510 คนหนีออกจากห้าหมู่บ้านในท้องที่เดียวกัน หลังจาก 1,150 คนออกจากสี่หมู่บ้านระหว่างวันที่ 29 ถึง 31 ตุลาคม ตามรายงานของเบอร์นามา ตาม IOM และ UNHCR มีผู้พลัดถิ่นภายในซูดานราว 8.6 ล้านคน และอีกกว่า 4.6 ล้านคนหนีข้ามพรมแดน",
        sw: "IOM ilikadiria kwamba watu 5,035 walikimbia vijiji vitatu katika eneo la Um Baru, Darfur Kaskazini, tarehe 10 na 11 Novemba, wengi wao wakiingia nchi jirani ya Chad, shirika la habari la Anadolu liliripoti tarehe 12 Novemba. Tarehe 9 Novemba IOM iliripoti kwamba takriban watu 2,510 walikimbia vijiji vitano katika eneo hilo hilo, baada ya watu 1,150 kuondoka vijiji vinne kati ya tarehe 29 na 31 Oktoba, Bernama iliripoti. Takriban watu milioni 8.6 ni wakimbizi wa ndani nchini Sudan na zaidi ya milioni 4.6 wamekimbia nje ya mipaka yake, kwa mujibu wa IOM na UNHCR."
      },
      why: {
        en: "Border health and displacement: people fleeing Sudan's war across its borders add to the needs of host countries such as Chad, while aid is shrinking.",
        fr: "Santé aux frontières et déplacements : les personnes qui fuient la guerre au Soudan au-delà de ses frontières s'ajoutent aux besoins de pays d'accueil comme le Tchad, alors que l'aide diminue.",
        th: "สุขภาพชายแดนและการพลัดถิ่น ผู้ที่หนีสงครามในซูดานข้ามพรมแดนเพิ่มภาระให้ประเทศที่รองรับอย่างชาด ขณะที่ความช่วยเหลือลดลง",
        sw: "Afya ya mipakani na ukimbizi: watu wanaokimbia vita vya Sudan nje ya mipaka yake wanaongeza mahitaji ya nchi zinazowapokea kama Chad, huku msaada ukipungua."
      },
      sources: [
        { name: "Anadolu Agency (IOM), via A News", date: "2026-11-12", url: "https://anews.com.tr/world/2026/11/12/over-5200-displaced-from-sudans-north-south-darfur-in-3-days-un-agency" },
        { name: "Bernama (IOM, UNHCR)", date: "2026-11-09", url: "https://bernama.com/en/news.php?id=2631879" }
      ]
    },
    {
      id: "ethiopia-north",
      date: "2026-11-04",
      region: "nile",
      photo: "au-addis",
      topic: "refugees",
      title: {
        en: "Northern Ethiopia: families flee again as WHO warns the health system is near collapse",
        fr: "Nord de l'Éthiopie : des familles fuient à nouveau, l'OMS avertit que le système de santé est au bord de l'effondrement",
        th: "ภาคเหนือของเอธิโอเปีย: ครอบครัวต้องหนีอีกครั้ง ขณะที่ WHO เตือนว่าระบบสาธารณสุขใกล้ล่มสลาย",
        sw: "Kaskazini mwa Ethiopia: familia zakimbia tena huku WHO ikionya kuwa mfumo wa afya uko karibu kuporomoka"
      },
      summary: {
        en: "WHO chief Tedros Adhanom Ghebreyesus said on 2 November that attacks in northern Ethiopia had reportedly killed civilians, including children at the Jaari 2 displacement camp in Amhara, and that the region's health system is nearing collapse, with hospitals short of health workers, medicines and equipment. The UN says families who had returned to Tahtay Adiyabo in Tigray have fled again, and thousands of displaced people are in Shire and Debre Birhan, Addis Standard reported on 4 November.",
        fr: "Le directeur général de l'OMS, Tedros Adhanom Ghebreyesus, a déclaré le 2 novembre que des attaques dans le nord de l'Éthiopie auraient tué des civils, dont des enfants dans le camp de déplacés de Jaari 2, en Amhara, et que le système de santé de la région est au bord de l'effondrement, les hôpitaux manquant de personnel, de médicaments et d'équipement. Selon l'ONU, des familles revenues à Tahtay Adiyabo, au Tigré, ont de nouveau fui, et des milliers de déplacés se trouvent à Shire et à Debre Birhan, a rapporté Addis Standard le 4 novembre.",
        th: "นพ.เทดรอส อัดฮานอม เกเบรเยซุส ผู้อำนวยการใหญ่องค์การอนามัยโลก กล่าวเมื่อวันที่ 2 พฤศจิกายนว่า มีรายงานว่าการโจมตีในภาคเหนือของเอธิโอเปียทำให้พลเรือนเสียชีวิต รวมถึงเด็กในค่ายผู้พลัดถิ่นจาอารี 2 ในแคว้นอมฮารา และระบบสาธารณสุขของภูมิภาคใกล้ล่มสลาย โรงพยาบาลขาดแคลนบุคลากร ยา และอุปกรณ์ Addis Standard รายงานเมื่อวันที่ 4 พฤศจิกายนว่า สหประชาชาติระบุว่าครอบครัวที่เพิ่งกลับไปยังตะห์ไตอาดียาโบในแคว้นทิกเรย์ต้องหนีอีกครั้ง และผู้พลัดถิ่นหลายพันคนอยู่ที่เมืองไชร์และเดเบรบีร์ฮาน",
        sw: "Mkuu wa WHO, Tedros Adhanom Ghebreyesus, alisema tarehe 2 Novemba kwamba mashambulizi kaskazini mwa Ethiopia yameripotiwa kuua raia, wakiwemo watoto katika kambi ya wakimbizi wa ndani ya Jaari 2 huko Amhara, na kwamba mfumo wa afya wa eneo hilo uko karibu kuporomoka, hospitali zikikosa wahudumu wa afya, dawa na vifaa. UN inasema familia zilizokuwa zimerejea Tahtay Adiyabo huko Tigray zimekimbia tena, na maelfu ya watu waliohamishwa wako Shire na Debre Birhan, Addis Standard iliripoti tarehe 4 Novemba."
      },
      why: {
        en: "Displacement in the Nile Basin: fighting resumed in Tigray, Amhara and Afar in late September, nearly four years after the 2022 Pretoria Agreement, and insecurity is restricting movement on roads linking Gonder with Debark and Metema, the UN says.",
        fr: "Les déplacements dans le bassin du Nil : les combats ont repris au Tigré, en Amhara et en Afar fin septembre, près de quatre ans après l'accord de Pretoria de 2022, et l'insécurité limite les déplacements sur les routes reliant Gondar à Debark et à Metema, selon l'ONU.",
        th: "การพลัดถิ่นในลุ่มแม่น้ำไนล์ การสู้รบปะทุขึ้นอีกครั้งในแคว้นทิกเรย์ อมฮารา และอาฟาร์เมื่อปลายเดือนกันยายน เกือบสี่ปีหลังข้อตกลงพริทอเรียปี 2022 และสหประชาชาติระบุว่าความไม่ปลอดภัยจำกัดการเดินทางบนถนนที่เชื่อมกอนดาร์กับเดบาร์กและเมเตมา",
        sw: "Watu kuhama katika Bonde la Nile: mapigano yalianza tena Tigray, Amhara na Afar mwishoni mwa Septemba, karibu miaka minne baada ya Mkataba wa Pretoria wa 2022, na ukosefu wa usalama unazuia usafiri kwenye barabara zinazounganisha Gonder na Debark na Metema, kwa mujibu wa UN."
      },
      sources: [
        { name: "AP (via NY1)", date: "2026-11-02", url: "https://ny1.com/nyc/all-boroughs/ap-top-news/2026/11/02/ethiopia-attacks-kill-civilians-as-health-system-nears-collapse-who-chief-says" },
        { name: "Addis Standard (via allAfrica)", date: "2026-11-04", url: "https://allafrica.com/stories/202611040531.html" }
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
        en: "UN peacekeeping chief Jean-Pierre Lacroix told the Security Council on 5 November that drone strikes on 19 October killed at least 30 people and injured about 59 in Abyei, the first attacks of their kind there; clashes on 15 September had killed 124. At the same meeting Sudan objected to South Sudan's plan to include Abyei in its December elections, which a report by the UN Secretary-General says is likely to raise tensions, Radio Tamazuj reported. The two countries' Joint Political and Security Mechanism was due to meet in Khartoum from 8 to 10 November.",
        fr: "Le chef des opérations de paix de l'ONU, Jean-Pierre Lacroix, a déclaré au Conseil de sécurité le 5 novembre que des frappes de drones le 19 octobre avaient tué au moins 30 personnes et blessé environ 59 à Abyei, les premières attaques de ce type dans la zone ; des affrontements le 15 septembre avaient fait 124 morts. Lors de la même séance, le Soudan s'est opposé au projet du Soudan du Sud d'inclure Abyei dans ses élections de décembre, qui selon un rapport du Secrétaire général de l'ONU risque d'accroître les tensions, a rapporté Radio Tamazuj. Le Mécanisme politique et de sécurité conjoint des deux pays devait se réunir à Khartoum du 8 au 10 novembre.",
        th: "นายฌ็อง-ปีแยร์ ลาครัว หัวหน้าฝ่ายปฏิบัติการรักษาสันติภาพของสหประชาชาติ แถลงต่อคณะมนตรีความมั่นคงเมื่อวันที่ 5 พฤศจิกายนว่า การโจมตีด้วยโดรนเมื่อวันที่ 19 ตุลาคมทำให้มีผู้เสียชีวิตอย่างน้อย 30 คนและบาดเจ็บราว 59 คนในอาบเยย์ ซึ่งเป็นการโจมตีลักษณะนี้ครั้งแรกในพื้นที่ ส่วนการปะทะเมื่อวันที่ 15 กันยายนมีผู้เสียชีวิต 124 คน ในการประชุมเดียวกัน ซูดานคัดค้านแผนของซูดานใต้ที่จะรวมอาบเยย์ไว้ในการเลือกตั้งเดือนธันวาคม ซึ่งรายงานของเลขาธิการสหประชาชาติระบุว่ามีแนวโน้มเพิ่มความตึงเครียด ตามรายงานของ Radio Tamazuj ส่วนกลไกร่วมด้านการเมืองและความมั่นคงของทั้งสองประเทศมีกำหนดประชุมที่คาร์ทูมระหว่างวันที่ 8–10 พฤศจิกายน",
        sw: "Mkuu wa operesheni za kulinda amani za UN, Jean-Pierre Lacroix, aliliambia Baraza la Usalama tarehe 5 Novemba kwamba mashambulizi ya droni ya tarehe 19 Oktoba yaliua watu wasiopungua 30 na kujeruhi takriban 59 huko Abyei, mashambulizi ya kwanza ya aina hiyo eneo hilo; mapigano ya tarehe 15 Septemba yaliua watu 124. Katika kikao hicho Sudan ilipinga mpango wa Sudan Kusini wa kujumuisha Abyei katika uchaguzi wake wa Desemba, ambao ripoti ya Katibu Mkuu wa UN inasema huenda ukaongeza mvutano, Radio Tamazuj iliripoti. Utaratibu wa Pamoja wa Kisiasa na Usalama wa nchi hizo mbili ulipangwa kukutana Khartoum tarehe 8 hadi 10 Novemba."
      },
      why: {
        en: "A conflict crossing a border: Abyei's Amiet market is a transit point for more than 49,000 refugees and returnees fleeing Sudan's war, and the Security Council is weighing the future mandate of the UN mission there, UNISFA.",
        fr: "Un conflit qui franchit une frontière : le marché d'Amiet, à Abyei, est un point de transit pour plus de 49 000 réfugiés et rapatriés fuyant la guerre au Soudan, et le Conseil de sécurité examine le futur mandat de la mission de l'ONU sur place, la FISNUA.",
        th: "ความขัดแย้งที่ข้ามพรมแดน ตลาดอาเมียตในอาบเยย์เป็นจุดผ่านของผู้ลี้ภัยและผู้เดินทางกลับกว่า 49,000 คนที่หนีสงครามในซูดาน และคณะมนตรีความมั่นคงกำลังพิจารณาอาณัติในอนาคตของภารกิจสหประชาชาติในพื้นที่ (UNISFA)",
        sw: "Mzozo unaovuka mpaka: soko la Amiet huko Abyei ni kituo cha kupita kwa wakimbizi na wanaorejea zaidi ya 49,000 wanaokimbia vita vya Sudan, na Baraza la Usalama linatafakari mamlaka ya baadaye ya ujumbe wa UN eneo hilo, UNISFA."
      },
      sources: [
        { name: "UN News", date: "2026-11-05", url: "https://news.un.org/en/story/2026/11/1168749" },
        { name: "Radio Tamazuj", date: "2026-11-05", url: "https://www.radiotamazuj.org/en/news/article/sudan-south-sudan-differ-at-un-over-abyei-election-plans" }
      ]
    },
    {
      id: "south-sudan-elections",
      date: "2026-11-10",
      region: "gl",
      photo: "juba",
      team: ["aaron", "ohn"],
      topic: "peace",
      title: {
        en: "South Sudan: six weeks before its first elections, fighting in Upper Nile displaces more than 35,000",
        fr: "Soudan du Sud : à six semaines de ses premières élections, des combats dans le Haut-Nil déplacent plus de 35 000 personnes",
        th: "ซูดานใต้: หกสัปดาห์ก่อนการเลือกตั้งครั้งแรก การสู้รบในรัฐอัปเปอร์ไนล์ทำให้ผู้คนพลัดถิ่นกว่า 35,000 คน",
        sw: "Sudan Kusini: wiki sita kabla ya uchaguzi wake wa kwanza, mapigano Upper Nile yawahamisha zaidi ya watu 35,000"
      },
      summary: {
        en: "The UN Security Council was briefed on 10 November ahead of national elections set for 22 December, which would be South Sudan's first since independence in 2011. Fighting along the Nasir–Ulang corridor in Upper Nile has displaced more than 35,000 people, about 2.5 million people face emergency hunger and 73,300 catastrophe, and at least 39 aid workers and contractors have been killed since January, according to UN figures compiled by Security Council Report. In September the president dissolved the transitional government and removed all vice-presidents.",
        fr: "Le Conseil de sécurité de l'ONU a été informé le 10 novembre avant les élections nationales prévues le 22 décembre, les premières au Soudan du Sud depuis l'indépendance en 2011. Les combats le long du corridor Nasir–Ulang, dans le Haut-Nil, ont déplacé plus de 35 000 personnes, environ 2,5 millions de personnes sont en situation d'urgence alimentaire et 73 300 en situation de catastrophe, et au moins 39 travailleurs humanitaires et sous-traitants ont été tués depuis janvier, selon des chiffres de l'ONU compilés par Security Council Report. En septembre, le président a dissous le gouvernement de transition et démis tous les vice-présidents.",
        th: "คณะมนตรีความมั่นคงแห่งสหประชาชาติรับฟังการบรรยายสรุปเมื่อวันที่ 10 พฤศจิกายน ก่อนการเลือกตั้งระดับชาติที่กำหนดไว้วันที่ 22 ธันวาคม ซึ่งจะเป็นการเลือกตั้งครั้งแรกของซูดานใต้นับตั้งแต่ได้รับเอกราชในปี 2011 การสู้รบตามแนวนาซีร์–อูลังในรัฐอัปเปอร์ไนล์ทำให้ผู้คนพลัดถิ่นกว่า 35,000 คน ประชาชนราว 2.5 ล้านคนเผชิญความหิวโหยระดับฉุกเฉิน และ 73,300 คนอยู่ในระดับหายนะ และเจ้าหน้าที่ด้านมนุษยธรรมและผู้รับเหมาอย่างน้อย 39 คนถูกสังหารตั้งแต่เดือนมกราคม ตามตัวเลขของสหประชาชาติที่ Security Council Report รวบรวมไว้ เมื่อเดือนกันยายน ประธานาธิบดียุบรัฐบาลเฉพาะกาลและปลดรองประธานาธิบดีทุกคน",
        sw: "Baraza la Usalama la UN lilipewa taarifa tarehe 10 Novemba kabla ya uchaguzi wa kitaifa uliopangwa tarehe 22 Desemba, ambao ungekuwa wa kwanza nchini Sudan Kusini tangu uhuru mwaka 2011. Mapigano katika ukanda wa Nasir–Ulang huko Upper Nile yamewahamisha zaidi ya watu 35,000, takriban watu milioni 2.5 wanakabiliwa na njaa ya dharura na 73,300 janga, na wafanyakazi wa misaada na wakandarasi wasiopungua 39 wameuawa tangu Januari, kwa mujibu wa takwimu za UN zilizokusanywa na Security Council Report. Mwezi Septemba rais alivunja serikali ya mpito na kuwaondoa makamu wote wa rais."
      },
      why: {
        en: "A conflict near shared borders: about 39,500 refugees and returnees have crossed into South Sudan from Sudan's war in the latest reporting period, and the UN mission there, UNMISS, is working with a reduced footprint because of the UN's financial crisis.",
        fr: "Un conflit près de frontières partagées : environ 39 500 réfugiés et rapatriés fuyant la guerre au Soudan sont entrés au Soudan du Sud au cours de la dernière période couverte, et la mission de l'ONU sur place, la MINUSS, fonctionne avec une présence réduite en raison de la crise financière de l'ONU.",
        th: "ความขัดแย้งใกล้พรมแดนที่ใช้ร่วมกัน ในรอบการรายงานล่าสุด ผู้ลี้ภัยและผู้เดินทางกลับราว 39,500 คนข้ามจากสงครามในซูดานเข้าสู่ซูดานใต้ และภารกิจสหประชาชาติในพื้นที่ (UNMISS) ต้องทำงานโดยลดขนาดลงเพราะวิกฤตการเงินของสหประชาชาติ",
        sw: "Mzozo karibu na mipaka inayoshirikiwa: takriban wakimbizi na wanaorejea 39,500 wameingia Sudan Kusini wakikimbia vita vya Sudan katika kipindi cha hivi karibuni cha ripoti, na ujumbe wa UN nchini humo, UNMISS, unafanya kazi kwa uwepo mdogo kutokana na mgogoro wa kifedha wa UN."
      },
      sources: [
        { name: "UN News", date: "2026-11-10", url: "https://news.un.org/en/story/2026/11/1168774" },
        { name: "Security Council Report", date: "2026-11-06", url: "https://www.securitycouncilreport.org/whatsinblue/2026/11/south-sudan-briefing-and-consultations-33.php" }
      ]
    },
    {
      id: "scam-compounds",
      date: "2026-11-07",
      region: "afasia",
      photo: "shwe-kokko",
      team: ["aaron"],
      topic: "peace",
      title: {
        en: "Scam compounds: Cambodia reports 23,760 foreigners sent home; many Africans still stranded",
        fr: "Centres d'arnaque : le Cambodge annonce 23 760 étrangers rapatriés, de nombreux Africains restent bloqués",
        th: "แหล่งสแกมเมอร์: กัมพูชาส่งชาวต่างชาติกลับประเทศแล้ว 23,760 คน แต่ชาวแอฟริกันจำนวนมากยังติดค้าง",
        sw: "Vituo vya utapeli: Kambodia yasema imewarudisha wageni 23,760 makwao; Waafrika wengi bado wamekwama"
      },
      summary: {
        en: "Cambodia's anti-scam commission said on 7 November that since July 2025 it has raided 972 scam sites and sent home 23,760 foreigners, Xinhua reported. On 5 November the United States sanctioned four individuals and 41 entities linked to the Cambodia-based Prince Group. AP reports that many former workers are stranded without passports or tickets home, and that Uganda's ambassador to Malaysia has helped more than 1,000 of them, mostly Ugandans.",
        fr: "La commission cambodgienne de lutte contre les arnaques en ligne a indiqué le 7 novembre avoir démantelé 972 sites d'arnaque et rapatrié 23 760 étrangers depuis juillet 2025, selon Xinhua. Le 5 novembre, les États-Unis ont sanctionné quatre personnes et 41 entités liées au Prince Group, basé au Cambodge. Selon l'AP, de nombreux anciens travailleurs sont bloqués sans passeport ni billet de retour, et l'ambassadrice de l'Ouganda en Malaisie en a aidé plus de 1 000, pour la plupart ougandais.",
        th: "คณะกรรมการปราบปรามการหลอกลวงออนไลน์ของกัมพูชาระบุเมื่อวันที่ 7 พฤศจิกายนว่า ตั้งแต่เดือนกรกฎาคม 2025 ได้บุกตรวจแหล่งสแกมเมอร์ 972 แห่ง และส่งชาวต่างชาติกลับประเทศ 23,760 คน ตามรายงานของสำนักข่าวซินหัว เมื่อวันที่ 5 พฤศจิกายน สหรัฐอเมริกาคว่ำบาตรบุคคล 4 รายและนิติบุคคล 41 แห่งที่เชื่อมโยงกับ Prince Group ซึ่งมีฐานในกัมพูชา สำนักข่าว AP รายงานว่าอดีตแรงงานจำนวนมากติดค้างอยู่โดยไม่มีหนังสือเดินทางหรือตั๋วกลับบ้าน และเอกอัครราชทูตยูกันดาประจำมาเลเซียได้ช่วยเหลือแล้วกว่า 1,000 คน ส่วนใหญ่เป็นชาวยูกันดา",
        sw: "Tume ya Kambodia ya kupambana na utapeli mtandaoni ilisema tarehe 7 Novemba kwamba tangu Julai 2025 imevamia maeneo 972 ya utapeli na kuwarudisha makwao wageni 23,760, Xinhua iliripoti. Tarehe 5 Novemba Marekani iliweka vikwazo dhidi ya watu wanne na taasisi 41 zinazohusishwa na Prince Group yenye makao Kambodia. AP inaripoti kuwa wafanyakazi wengi wa zamani wamekwama bila pasipoti wala tiketi za kurudi nyumbani, na balozi wa Uganda nchini Malaysia amewasaidia zaidi ya 1,000, wengi wao Waganda."
      },
      why: {
        en: "Trafficking of East Africans into scam compounds links the two regions: AP reports that workers faced visa fines and immigration interviews before they could leave, and that thousands who could not afford flights got no help from their home countries.",
        fr: "La traite d'Est-Africains vers les centres d'arnaque relie les deux régions : selon l'AP, les travailleurs ont dû payer des amendes de visa et passer des entretiens d'immigration avant de partir, et des milliers de ceux qui ne pouvaient pas payer leur billet n'ont reçu aucune aide de leur pays.",
        th: "การค้ามนุษย์ชาวแอฟริกาตะวันออกเข้าสู่แหล่งสแกมเมอร์เชื่อมโยงสองภูมิภาคเข้าด้วยกัน AP รายงานว่าแรงงานต้องเสียค่าปรับวีซ่าและผ่านการสัมภาษณ์ของตรวจคนเข้าเมืองก่อนออกจากประเทศ และหลายพันคนที่ไม่มีเงินซื้อตั๋วเครื่องบินไม่ได้รับความช่วยเหลือจากประเทศของตน",
        sw: "Usafirishaji haramu wa Waafrika Mashariki kwenda vituo vya utapeli unaunganisha kanda hizi mbili: AP inaripoti kuwa wafanyakazi walilipa faini za viza na kuhojiwa na maafisa wa uhamiaji kabla ya kuondoka, na maelfu wasioweza kumudu tiketi za ndege hawakupata msaada kutoka nchi zao."
      },
      sources: [
        { name: "Xinhua", date: "2026-11-07", url: "https://english.news.cn/20261107/f3d34c505a5a412d96ee7a07d0f61612/c.html" },
        { name: "Capital FM (via allAfrica)", date: "2026-11-06", url: "https://allafrica.com/stories/202611060201.html" },
        { name: "AP", date: "2026-11-04", url: "https://krmg.com/2026/11/04/lured-into-an-online-scam-network-an-african-man-spent-almost-a-year-in-cambodia-trying-to-go-home/" }
      ]
    },
    {
      id: "congo-refugees",
      date: "2026-11-02",
      region: "gl",
      photo: "goma-kivu",
      team: ["aaron", "albert"],
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
      date: "2026-11-10",
      region: "sea",
      photo: "moei-bridge",
      team: ["aaron"],
      topic: "peace",
      title: {
        en: "Thailand puts 10 border provinces on alert as fighting in Myanmar reaches Mae Sot",
        fr: "La Thaïlande met 10 provinces frontalières en alerte, les combats au Myanmar atteignant Mae Sot",
        th: "ไทยสั่ง 10 จังหวัดชายแดนเตรียมพร้อม ขณะที่ผลกระทบจากการสู้รบในเมียนมาถึงแม่สอด",
        sw: "Thailand yaweka majimbo 10 ya mpakani katika tahadhari huku mapigano ya Myanmar yakifika Mae Sot"
      },
      summary: {
        en: "Thailand's Interior Ministry told governors of 10 provinces on the Myanmar border on 9 November to prepare shelters, evacuation plans and temporary safe areas, and to tighten watch on crossing points, after stray bullets and shell fragments from fighting near Phalu village damaged homes in Mae Sot, Thaiger reported. The army has stepped up round-the-clock patrols, including in Mae Sot from 8 November, and the air force scrambled F-16s on 8 November when a suspicious aircraft approached the border in Phop Phra district. Foreign Minister Sihasak Phuangketkeow is due to visit Myanmar on 12 November, before the ASEAN Summit.",
        fr: "Le ministère thaïlandais de l'Intérieur a demandé le 9 novembre aux gouverneurs de 10 provinces frontalières du Myanmar de préparer abris, plans d'évacuation et zones sûres temporaires, et de renforcer la surveillance des points de passage, après que des balles perdues et des éclats d'obus tirés lors de combats près du village de Phalu ont endommagé des maisons à Mae Sot, selon Thaiger. L'armée a renforcé ses patrouilles jour et nuit, notamment à Mae Sot depuis le 8 novembre, et l'armée de l'air a fait décoller des F-16 le 8 novembre à l'approche d'un aéronef suspect près de la frontière, dans le district de Phop Phra. Le ministre des Affaires étrangères, Sihasak Phuangketkeow, doit se rendre au Myanmar le 12 novembre, avant le sommet de l'ASEAN.",
        th: "กระทรวงมหาดไทยสั่งผู้ว่าราชการ 10 จังหวัดตามแนวชายแดนเมียนมาเมื่อวันที่ 9 พฤศจิกายน ให้เตรียมที่พักพิง แผนอพยพ และพื้นที่ปลอดภัยชั่วคราว และเข้มงวดการเฝ้าระวังจุดผ่านแดน หลังกระสุนและสะเก็ดระเบิดจากการสู้รบใกล้หมู่บ้านผาลูสร้างความเสียหายแก่บ้านเรือนในแม่สอด ตามรายงานของ Thaiger กองทัพบกเพิ่มการลาดตระเวนตลอด 24 ชั่วโมง รวมถึงในแม่สอดตั้งแต่วันที่ 8 พฤศจิกายน และกองทัพอากาศส่งเครื่องบิน F-16 ขึ้นบินเมื่อวันที่ 8 พฤศจิกายน เมื่ออากาศยานต้องสงสัยเข้าใกล้ชายแดนในอำเภอพบพระ นายสีหศักดิ์ พวงเกตุแก้ว รัฐมนตรีว่าการกระทรวงการต่างประเทศ มีกำหนดเยือนเมียนมาในวันที่ 12 พฤศจิกายน ก่อนการประชุมสุดยอดอาเซียน",
        sw: "Wizara ya Mambo ya Ndani ya Thailand iliwaagiza magavana wa majimbo 10 yanayopakana na Myanmar tarehe 9 Novemba kuandaa makazi ya muda, mipango ya kuhamisha watu na maeneo salama ya muda, na kuimarisha uangalizi wa vivuko, baada ya risasi zilizopotea na vipande vya makombora kutoka mapigano karibu na kijiji cha Phalu kuharibu nyumba Mae Sot, Thaiger iliripoti. Jeshi limeongeza doria za saa 24, ikiwemo Mae Sot tangu tarehe 8 Novemba, na jeshi la anga lilirusha ndege za F-16 tarehe 8 Novemba ndege ya kutiliwa shaka ilipokaribia mpaka katika wilaya ya Phop Phra. Waziri wa Mambo ya Nje Sihasak Phuangketkeow anatarajiwa kuzuru Myanmar tarehe 12 Novemba, kabla ya Mkutano wa ASEAN."
      },
      why: {
        en: "A conflict crossing a border: Thailand's army calls the fighting an internal Myanmar conflict, and it reaches Mae Sot, one of the main trade posts between Thailand and Myanmar, where trade through unofficial crossings was suspended until 5 November.",
        fr: "Un conflit qui traverse une frontière : l'armée thaïlandaise qualifie les combats de conflit interne au Myanmar, et ils atteignent Mae Sot, l'un des principaux postes commerciaux entre la Thaïlande et le Myanmar, où le commerce par les points de passage non officiels a été suspendu jusqu'au 5 novembre.",
        th: "ความขัดแย้งที่ข้ามพรมแดน กองทัพบกไทยระบุว่าการสู้รบเป็นความขัดแย้งภายในของเมียนมา และส่งผลถึงแม่สอด หนึ่งในจุดการค้าหลักระหว่างไทยกับเมียนมา ซึ่งการค้าผ่านช่องทางไม่เป็นทางการถูกระงับจนถึงวันที่ 5 พฤศจิกายน",
        sw: "Mgogoro unaovuka mpaka: jeshi la Thailand linayaita mapigano hayo mgogoro wa ndani wa Myanmar, na yanafika Mae Sot, mojawapo ya vituo vikuu vya biashara kati ya Thailand na Myanmar, ambako biashara kupitia vivuko visivyo rasmi ilisimamishwa hadi tarehe 5 Novemba."
      },
      sources: [
        { name: "Thaiger", date: "2026-11-10", url: "https://thethaiger.com/news/national/thailand-myanmar-border-provinces-alert" },
        { name: "The Nation Thailand", date: "2026-11-09", url: "https://www.nationthailand.com/news/asean/40073279" },
        { name: "The Nation Thailand", date: "2026-11-08", url: "https://nationthailand.com/news/general/40073262" },
        { name: "Malay Mail", date: "2026-11-04", url: "https://www.malaymail.com/news/world/2026/11/04/thailands-foreign-minister-visits-myanmar-amid-border-clashes-a-coup-ahead-of-asean-summit/241955" },
        { name: "The Nation Thailand", date: "2026-10-30", url: "https://www.nationthailand.com/news/general/40072918" }
      ]
    },
    {
      id: "eac-trade",
      date: "2026-11-03",
      region: "gl",
      photo: "kigali",
      team: ["yidnekachew", "badri"],
      title: {
        en: "EAC says border crossing times have fallen by up to 70 per cent",
        fr: "La CAE indique que les temps de passage aux frontières ont baissé jusqu'à 70 %",
        th: "ประชาคมแอฟริกาตะวันออกระบุว่าเวลาผ่านแดนลดลงถึงร้อยละ 70",
        sw: "EAC yasema muda wa kuvuka mipaka umepungua kwa hadi asilimia 70"
      },
      summary: {
        en: "Opening the 26th EAC trade fair for small businesses in Kigali on 3 November, EAC Deputy Secretary General Annettee Mutaawe Ssemuwemba said border crossing times have fallen by up to 70 per cent, the Single Customs Territory has cut transit times from 18 days to four, and EAC exports to the rest of Africa rose 44 per cent to $7.2 billion, The New Times reported. Rwanda's Prime Minister Justin Nsengiyumva called for removing non-tariff barriers and simplifying customs.",
        fr: "En ouvrant à Kigali, le 3 novembre, la 26e foire commerciale de la CAE pour les petites entreprises, la secrétaire générale adjointe de la CAE, Annettee Mutaawe Ssemuwemba, a indiqué que les temps de passage aux frontières ont baissé jusqu'à 70 %, que le territoire douanier unique a réduit les délais de transit de 18 à quatre jours et que les exportations de la CAE vers le reste de l'Afrique ont augmenté de 44 % pour atteindre 7,2 milliards de dollars, selon The New Times. Le Premier ministre rwandais, Justin Nsengiyumva, a appelé à supprimer les barrières non tarifaires et à simplifier les douanes.",
        th: "ในพิธีเปิดงานแสดงสินค้าครั้งที่ 26 ของประชาคมแอฟริกาตะวันออก (EAC) สำหรับธุรกิจขนาดเล็กที่คิกาลีเมื่อวันที่ 3 พฤศจิกายน นางแอนเน็ตตี มูตาเว เซมูเวมบา รองเลขาธิการ EAC กล่าวว่าเวลาผ่านแดนลดลงถึงร้อยละ 70 เขตศุลกากรเดียวลดเวลาขนส่งผ่านแดนจาก 18 วันเหลือ 4 วัน และการส่งออกของ EAC ไปยังส่วนอื่นของแอฟริกาเพิ่มขึ้นร้อยละ 44 เป็น 7,200 ล้านดอลลาร์ ตามรายงานของ The New Times นายจัสติน เอ็นเซนกียุมวา นายกรัฐมนตรีรวันดา เรียกร้องให้ขจัดอุปสรรคที่มิใช่ภาษีและทำให้พิธีการศุลกากรง่ายขึ้น",
        sw: "Akifungua maonyesho ya 26 ya biashara ya EAC kwa biashara ndogo mjini Kigali tarehe 3 Novemba, Naibu Katibu Mkuu wa EAC Annettee Mutaawe Ssemuwemba alisema muda wa kuvuka mipaka umepungua kwa hadi asilimia 70, Himaya Moja ya Forodha imepunguza muda wa usafirishaji kutoka siku 18 hadi nne, na mauzo ya EAC kwa sehemu nyingine za Afrika yamepanda kwa asilimia 44 hadi dola bilioni 7.2, The New Times iliripoti. Waziri Mkuu wa Rwanda Justin Nsengiyumva alitoa wito wa kuondoa vikwazo visivyo vya kodi na kurahisisha forodha."
      },
      why: {
        en: "Regional integration for small traders: the fair, which ran until 8 November, focused on leather and horticulture, and the East African Kiswahili Commission said language barriers can limit traders' access to customs rules and market information.",
        fr: "L'intégration régionale au service des petits commerçants : la foire, qui s'est tenue jusqu'au 8 novembre, portait sur le cuir et l'horticulture, et la Commission est-africaine du kiswahili a indiqué que les barrières linguistiques peuvent limiter l'accès des commerçants aux règles douanières et aux informations sur les marchés.",
        th: "การรวมกลุ่มระดับภูมิภาคเพื่อผู้ค้ารายย่อย งานแสดงสินค้าซึ่งจัดถึงวันที่ 8 พฤศจิกายนเน้นเครื่องหนังและพืชสวน และคณะกรรมาธิการภาษาสวาฮิลีแห่งแอฟริกาตะวันออกระบุว่าอุปสรรคด้านภาษาอาจจำกัดการเข้าถึงกฎศุลกากรและข้อมูลตลาดของผู้ค้า",
        sw: "Mtangamano wa kikanda kwa wafanyabiashara wadogo: maonyesho hayo, yaliyodumu hadi tarehe 8 Novemba, yalijikita katika ngozi na kilimo cha bustani, na Kamisheni ya Kiswahili ya Afrika Mashariki ilisema vikwazo vya lugha vinaweza kupunguza uwezo wa wafanyabiashara kupata kanuni za forodha na taarifa za masoko."
      },
      sources: [
        { name: "The New Times (via allAfrica)", date: "2026-11-03", url: "https://allafrica.com/stories/202611030712.html" }
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
      id: "border-rivers",
      date: "2026-11-10",
      region: "sea",
      photo: "mae-sai-towns",
      team: ["aaron", "badri"],
      topic: "rivers",
      title: {
        en: "Thailand and Myanmar to meet on arsenic in the Kok and Sai rivers",
        fr: "La Thaïlande et le Myanmar vont se réunir sur l'arsenic dans les rivières Kok et Sai",
        th: "ไทยและเมียนมาเตรียมหารือเรื่องสารหนูในแม่น้ำกกและแม่น้ำสาย",
        sw: "Thailand na Myanmar kukutana kuhusu arseniki katika mito Kok na Sai"
      },
      summary: {
        en: "Arsenic and heavy metals above standard limits have been found in the Kok and Sai rivers, which Thailand shares with Myanmar's Shan State, The Nation reported on 10 November. Thai ministers said the pollution is believed to come from mining in Shan State. A joint Thai–Myanmar working group on water quality in border rivers is to hold its first meeting in late November, and Foreign Minister Sihasak Phuangketkeow is to raise the issue in Nay Pyi Taw on 12 November.",
        fr: "De l'arsenic et des métaux lourds au-delà des normes ont été relevés dans les rivières Kok et Sai, que la Thaïlande partage avec l'État Shan du Myanmar, a rapporté The Nation le 10 novembre. Selon des ministres thaïlandais, cette pollution proviendrait de l'exploitation minière dans l'État Shan. Un groupe de travail conjoint thaïlando-birman sur la qualité de l'eau des rivières frontalières doit tenir sa première réunion fin novembre, et le ministre des Affaires étrangères Sihasak Phuangketkeow doit aborder la question à Nay Pyi Taw le 12 novembre.",
        th: "พบสารหนูและโลหะหนักเกินค่ามาตรฐานในแม่น้ำกกและแม่น้ำสาย ซึ่งไทยใช้ร่วมกับรัฐฉานของเมียนมา The Nation รายงานเมื่อวันที่ 10 พฤศจิกายน รัฐมนตรีของไทยระบุว่าเชื่อว่ามลพิษมาจากการทำเหมืองในรัฐฉาน คณะทำงานร่วมไทย–เมียนมาด้านการจัดการคุณภาพน้ำในแม่น้ำชายแดนจะประชุมครั้งแรกในปลายเดือนพฤศจิกายน และนายสีหศักดิ์ พวงเกตุแก้ว รัฐมนตรีว่าการกระทรวงการต่างประเทศ จะหยิบยกประเด็นนี้ที่กรุงเนปิดอว์ในวันที่ 12 พฤศจิกายน",
        sw: "Arseniki na metali nzito zaidi ya viwango vinavyokubalika zimegunduliwa katika mito Kok na Sai, ambayo Thailand inashiriki na Jimbo la Shan la Myanmar, The Nation iliripoti tarehe 10 Novemba. Mawaziri wa Thailand walisema uchafuzi huo unaaminika kutokana na uchimbaji madini katika Jimbo la Shan. Kikundi kazi cha pamoja cha Thailand na Myanmar kuhusu ubora wa maji katika mito ya mpakani kitafanya mkutano wake wa kwanza mwishoni mwa Novemba, na Waziri wa Mambo ya Nje Sihasak Phuangketkeow atalizungumzia suala hilo Nay Pyi Taw tarehe 12 Novemba."
      },
      why: {
        en: "Shared rivers: pollution that starts on one side of a border reaches people on the other. Thai agencies are testing water, soil and fish, the Pollution Control Department has set up seven monitoring stations this year, and the waterworks authority is checking whether the river water can still be used for tap water, The Nation reports.",
        fr: "Fleuves partagés : une pollution née d'un côté de la frontière atteint les populations de l'autre. Les services thaïlandais analysent l'eau, les sols et les poissons, le Département de contrôle de la pollution a installé sept stations de surveillance cette année, et la régie des eaux vérifie si l'eau de la rivière peut encore servir à l'eau du robinet, rapporte The Nation.",
        th: "แม่น้ำที่ใช้ร่วมกัน มลพิษที่เริ่มต้นฝั่งหนึ่งของพรมแดนส่งผลถึงผู้คนอีกฝั่งหนึ่ง หน่วยงานไทยกำลังตรวจน้ำ ดิน และสัตว์น้ำ กรมควบคุมมลพิษได้ตั้งสถานีตรวจวัดคุณภาพน้ำ 7 แห่งในปีนี้ และการประปาส่วนภูมิภาคกำลังตรวจสอบว่าน้ำในแม่น้ำยังใช้ผลิตน้ำประปาได้หรือไม่ ตามรายงานของ The Nation",
        sw: "Mito inayoshirikiwa: uchafuzi unaoanzia upande mmoja wa mpaka huwafikia watu wa upande mwingine. Taasisi za Thailand zinapima maji, udongo na samaki, Idara ya Kudhibiti Uchafuzi imeweka vituo saba vya ufuatiliaji mwaka huu, na mamlaka ya maji inachunguza kama maji ya mto bado yanaweza kutumika kwa maji ya bomba, The Nation inaripoti."
      },
      sources: [
        { name: "The Nation Thailand", date: "2026-11-10", url: "https://www.nationthailand.com/news/politics/40073332" }
      ]
    },
    {
      id: "asean-summit",
      date: "2026-11-12",
      region: "sea",
      photo: "manila",
      topic: "diplomacy",
      upcoming: true,
      title: {
        en: "Coming up: the 49th ASEAN Summit and related summits in Manila, 14 to 17 November",
        fr: "À venir : le 49e sommet de l'ASEAN et les sommets associés à Manille, du 14 au 17 novembre",
        th: "เร็ว ๆ นี้: การประชุมสุดยอดอาเซียนครั้งที่ 49 และการประชุมที่เกี่ยวข้องที่มะนิลา 14–17 พฤศจิกายน",
        sw: "Inakuja: Mkutano wa 49 wa ASEAN na mikutano inayohusiana Manila, tarehe 14 hadi 17 Novemba"
      },
      summary: {
        en: "ASEAN ministers meet on 14 November, leaders open the summit on 15 November, and partner summits follow on 16 and 17 November, the ASEAN Secretariat and the Philippine foreign ministry said; at least 19 world and global institution leaders will attend. Myanmar will be represented by the director-general of its foreign ministry's ASEAN affairs department; Myanmar's leaders have been kept out of summits since the 2021 military takeover. An ASEAN–US special summit is set for 17 November, when the Philippines hands the chairship to Singapore.",
        fr: "Les ministres de l'ASEAN se réunissent le 14 novembre, les dirigeants ouvrent le sommet le 15 novembre et les sommets avec les partenaires suivent les 16 et 17 novembre, selon le Secrétariat de l'ASEAN et le ministère philippin des Affaires étrangères ; au moins 19 dirigeants de pays et d'institutions internationales seront présents. Le Myanmar sera représenté par le directeur général des affaires de l'ASEAN de son ministère des Affaires étrangères ; les dirigeants du Myanmar sont tenus à l'écart des sommets depuis la prise du pouvoir par l'armée en 2021. Un sommet spécial ASEAN–États-Unis est prévu le 17 novembre, jour où les Philippines transmettent la présidence à Singapour.",
        th: "รัฐมนตรีอาเซียนประชุมกันในวันที่ 14 พฤศจิกายน ผู้นำเปิดการประชุมสุดยอดในวันที่ 15 พฤศจิกายน และการประชุมกับประเทศคู่เจรจาตามมาในวันที่ 16 และ 17 พฤศจิกายน ตามที่สำนักเลขาธิการอาเซียนและกระทรวงการต่างประเทศฟิลิปปินส์ระบุ โดยมีผู้นำประเทศและองค์การระหว่างประเทศอย่างน้อย 19 คนเข้าร่วม เมียนมาจะมีอธิบดีกรมอาเซียนของกระทรวงการต่างประเทศเป็นผู้แทน ทั้งนี้ผู้นำเมียนมาไม่ได้เข้าร่วมการประชุมสุดยอดนับตั้งแต่กองทัพยึดอำนาจในปี 2021 การประชุมสุดยอดสมัยพิเศษอาเซียน–สหรัฐฯ มีกำหนดในวันที่ 17 พฤศจิกายน ซึ่งเป็นวันที่ฟิลิปปินส์ส่งมอบตำแหน่งประธานอาเซียนให้สิงคโปร์",
        sw: "Mawaziri wa ASEAN wanakutana tarehe 14 Novemba, viongozi wanafungua mkutano tarehe 15 Novemba, na mikutano na washirika inafuata tarehe 16 na 17 Novemba, Sekretarieti ya ASEAN na wizara ya mambo ya nje ya Ufilipino zilisema; viongozi wasiopungua 19 wa nchi na taasisi za kimataifa watahudhuria. Myanmar itawakilishwa na mkurugenzi mkuu wa idara ya masuala ya ASEAN katika wizara yake ya mambo ya nje; viongozi wa Myanmar wamezuiwa kuhudhuria mikutano ya viongozi tangu jeshi lilipochukua madaraka mwaka 2021. Mkutano maalum wa ASEAN na Marekani umepangwa tarehe 17 Novemba, siku ambayo Ufilipino inakabidhi uenyekiti kwa Singapore."
      },
      why: {
        en: "Intergovernmental relations in Southeast Asia: we will report what the summit says about Myanmar, the Global South and cooperation with Africa.",
        fr: "Relations intergouvernementales en Asie du Sud-Est : nous rendrons compte de ce que le sommet dira du Myanmar, du Sud global et de la coopération avec l'Afrique.",
        th: "ความสัมพันธ์ระหว่างรัฐบาลในเอเชียตะวันออกเฉียงใต้ เราจะรายงานว่าการประชุมกล่าวถึงเมียนมา โลกใต้ และความร่วมมือกับแอฟริกาอย่างไร",
        sw: "Mahusiano kati ya serikali Kusini-Mashariki mwa Asia: tutaripoti kile mkutano utakachosema kuhusu Myanmar, Kusini mwa Dunia na ushirikiano na Afrika."
      },
      sources: [
        { name: "ASEAN Secretariat", date: "2026-11-11", url: "https://asean.org/secretary-general-of-asean-to-participate-in-the-49th-asean-summit-and-related-summits-in-the-philippines/" },
        { name: "The Star (Bernama-PNA)", date: "2026-11-12", url: "https://www.thestar.com.my/aseanplus/aseanplus-news/2026/11/12/nineteen-world-leaders-confirmed-to-attend-asean-summit-in-manila" },
        { name: "Philstar", date: "2026-11-11", url: "https://www.philstar.com/headlines/2026/11/11/2569423/manila-host-world-leaders-49th-asean-summit" },
        { name: "Malay Mail", date: "2026-11-04", url: "https://www.malaymail.com/news/world/2026/11/04/thailands-foreign-minister-visits-myanmar-amid-border-clashes-a-coup-ahead-of-asean-summit/241955" }
      ]
    }
  ]
};
