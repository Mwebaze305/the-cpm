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
  updated: "2026-11-16",
  items: [
    {
      id: "ebola",
      date: "2026-11-15",
      region: "gl",
      photo: "goma-kivu",
      team: ["dominick"],
      topic: "health",
      title: {
        en: "Ebola: six months on, Africa CDC says DR Congo's outbreak is still not under control",
        fr: "Ebola : six mois après, Africa CDC estime que l'épidémie en RD Congo n'est toujours pas maîtrisée",
        th: "อีโบลา: ผ่านไปหกเดือน Africa CDC ระบุว่าการระบาดในคองโกยังควบคุมไม่ได้",
        sw: "Ebola: miezi sita baadaye, Africa CDC yasema mlipuko wa DR Kongo bado haujadhibitiwa"
      },
      summary: {
        en: "Africa CDC's director-general, Jean Kaseya, told Reuters on 15 November that more than 80 per cent of new cases arise outside known contact lists and over 65 per cent of deaths happen in the community; he said only $1.3 billion of the $2.9 billion pledged by donors has been released, Al Jazeera reported. Government data show more than 11,200 cases and 5,500 deaths in eight of DR Congo's 26 provinces. WHO said on 15 November that children are more than a quarter of confirmed cases and a third of deaths, that seven in 10 confirmed children under five have died, and that more than 80 attacks on health care have been recorded; after an attack in Cantine-Aloya, more than 1,000 contacts were lost to follow-up.",
        fr: "Le directeur général d'Africa CDC, Jean Kaseya, a déclaré à Reuters le 15 novembre que plus de 80 % des nouveaux cas apparaissent en dehors des listes de contacts connus et que plus de 65 % des décès surviennent dans la communauté ; il a indiqué que seuls 1,3 milliard de dollars sur les 2,9 milliards promis par les donateurs ont été versés, a rapporté Al Jazeera. Les données officielles font état de plus de 11 200 cas et 5 500 décès dans huit des 26 provinces de la RD Congo. L'OMS a indiqué le 15 novembre que les enfants représentent plus d'un quart des cas confirmés et un tiers des décès, que sept enfants de moins de cinq ans confirmés sur dix sont morts et que plus de 80 attaques contre les soins de santé ont été recensées ; après une attaque à Cantine-Aloya, plus de 1 000 contacts ont été perdus de vue.",
        th: "นายฌอง กาเซยา ผู้อำนวยการใหญ่ Africa CDC กล่าวกับรอยเตอร์เมื่อวันที่ 15 พฤศจิกายนว่า ผู้ป่วยรายใหม่กว่าร้อยละ 80 เกิดขึ้นนอกรายชื่อผู้สัมผัสที่ติดตามอยู่ และผู้เสียชีวิตกว่าร้อยละ 65 เสียชีวิตในชุมชน เขาระบุว่าจากเงิน 2,900 ล้านดอลลาร์ที่ผู้บริจาคให้คำมั่นไว้ มีการเบิกจ่ายจริงเพียง 1,300 ล้านดอลลาร์ Al Jazeera รายงาน ข้อมูลของรัฐบาลแสดงว่ามีผู้ป่วยกว่า 11,200 ราย และเสียชีวิต 5,500 ราย ใน 8 จาก 26 จังหวัดของคองโก องค์การอนามัยโลกระบุเมื่อวันที่ 15 พฤศจิกายนว่าเด็กคิดเป็นกว่าหนึ่งในสี่ของผู้ป่วยยืนยันและหนึ่งในสามของผู้เสียชีวิต เด็กอายุต่ำกว่าห้าขวบที่ติดเชื้อยืนยันเสียชีวิตเจ็ดในสิบราย และมีการโจมตีสถานบริการสาธารณสุขแล้วกว่า 80 ครั้ง หลังการโจมตีที่ Cantine-Aloya ผู้สัมผัสกว่า 1,000 คนขาดการติดตาม",
        sw: "Mkurugenzi mkuu wa Africa CDC, Jean Kaseya, aliiambia Reuters tarehe 15 Novemba kwamba zaidi ya asilimia 80 ya wagonjwa wapya wanatokea nje ya orodha za watu waliotangamana na wagonjwa wanaofuatiliwa, na zaidi ya asilimia 65 ya vifo vinatokea katika jamii; alisema ni dola bilioni 1.3 pekee kati ya bilioni 2.9 zilizoahidiwa na wafadhili ambazo zimetolewa, Al Jazeera iliripoti. Takwimu za serikali zinaonyesha wagonjwa zaidi ya 11,200 na vifo 5,500 katika majimbo manane kati ya 26 ya DR Kongo. WHO ilisema tarehe 15 Novemba kwamba watoto ni zaidi ya robo ya wagonjwa waliothibitishwa na theluthi moja ya vifo, kwamba watoto saba kati ya kumi walio chini ya miaka mitano waliothibitishwa kuwa na Ebola wamefariki, na kwamba zaidi ya mashambulizi 80 dhidi ya huduma za afya yamerekodiwa; baada ya shambulio huko Cantine-Aloya, zaidi ya watu 1,000 waliotangamana na wagonjwa walipotea katika ufuatiliaji."
      },
      why: {
        en: "Border health in practice: WHO says recent imported cases in Kenya and Nigeria show the continuing risk of spread beyond national borders. Kenya, which had nine cases linked to an imported case, including two deaths, has discharged its last patient and begun a 42-day countdown to being declared Ebola-free, WHO said on 11 November.",
        fr: "La santé aux frontières en pratique : selon l'OMS, les récents cas importés au Kenya et au Nigeria montrent que le risque de propagation au-delà des frontières demeure. Le Kenya, qui a enregistré neuf cas liés à un cas importé, dont deux décès, a laissé sortir son dernier patient et entamé un compte à rebours de 42 jours avant d'être déclaré exempt d'Ebola, a indiqué l'OMS le 11 novembre.",
        th: "สุขภาพชายแดนในทางปฏิบัติ องค์การอนามัยโลกระบุว่าผู้ป่วยนำเข้าล่าสุดในเคนยาและไนจีเรียแสดงให้เห็นว่ายังมีความเสี่ยงที่โรคจะแพร่ข้ามพรมแดน เคนยาซึ่งมีผู้ป่วย 9 รายที่เชื่อมโยงกับผู้ป่วยนำเข้า รวมผู้เสียชีวิต 2 ราย ได้ให้ผู้ป่วยรายสุดท้ายออกจากโรงพยาบาลแล้ว และเริ่มนับถอยหลัง 42 วันก่อนประกาศว่าปลอดอีโบลา องค์การอนามัยโลกระบุเมื่อวันที่ 11 พฤศจิกายน",
        sw: "Afya ya mipakani kwa vitendo: WHO inasema wagonjwa walioingia kutoka nje hivi karibuni nchini Kenya na Nigeria wanaonyesha kuwa hatari ya ugonjwa kuenea nje ya mipaka bado ipo. Kenya, iliyokuwa na wagonjwa tisa waliohusishwa na mgonjwa aliyeingia kutoka nje, wakiwemo vifo viwili, imemruhusu mgonjwa wake wa mwisho kutoka hospitalini na kuanza hesabu ya siku 42 kuelekea kutangazwa kuwa huru dhidi ya Ebola, WHO ilisema tarehe 11 Novemba."
      },
      sources: [
        { name: "Al Jazeera (Reuters, Africa CDC)", date: "2026-11-15", url: "https://www.aljazeera.com/news/2026/11/15/africa-cdc-says-ebola-outbreak-in-dr-congo-still-not-under-control" },
        { name: "WHO Regional Office for Africa", date: "2026-11-15", url: "https://www.afro.who.int/countries/democratic-republic-of-congo/news/six-months-accessing-hard-reach-communities-key-halting-ebola-outbreak" },
        { name: "WHO Director-General", date: "2026-11-11", url: "https://www.who.int/news-room/speeches/item/who-director-general-s-opening-remarks-at-the-member-state-briefing-on-ebola-outbreak-in-the-democratic-republic-of-the-congo---11-november-2026" }
      ]
    },
    {
      id: "south-sudan-ebola",
      date: "2026-11-13",
      region: "gl",
      photo: "juba",
      team: ["dominick"],
      topic: "health",
      title: {
        en: "South Sudan: embassies warn of a high Ebola risk; the government says there are no cases",
        fr: "Soudan du Sud : des ambassades alertent sur un risque élevé d'Ebola ; le gouvernement affirme qu'il n'y a aucun cas",
        th: "ซูดานใต้: สถานทูตหลายแห่งเตือนความเสี่ยงอีโบลาสูง ขณะที่รัฐบาลยืนยันว่ายังไม่พบผู้ป่วย",
        sw: "Sudan Kusini: balozi zaonya kuhusu hatari kubwa ya Ebola; serikali yasema hakuna wagonjwa"
      },
      summary: {
        en: "The embassies of Germany, Japan, the Netherlands, Norway, the UK and the US said in a joint statement that South Sudan faces a high risk of an Ebola outbreak, and called for public money for the health sector, including health workers' salaries, and unhindered humanitarian access, Radio Tamazuj reported on 13 November. The foreign ministry replied that no case has been confirmed and asked missions to raise concerns through official channels. WHO says South Sudan has no confirmed case; of 76 suspected alerts by 30 October, 33 tested negative and the rest were ruled out.",
        fr: "Les ambassades d'Allemagne, du Japon, des Pays-Bas, de Norvège, du Royaume-Uni et des États-Unis ont déclaré dans un communiqué commun que le Soudan du Sud court un risque élevé d'épidémie d'Ebola, et ont demandé des fonds publics pour la santé, y compris les salaires des soignants, ainsi qu'un accès humanitaire sans entrave, a rapporté Radio Tamazuj le 13 novembre. Le ministère des Affaires étrangères a répondu qu'aucun cas n'a été confirmé et a demandé aux missions de passer par les canaux officiels. Selon l'OMS, le Soudan du Sud n'a aucun cas confirmé ; sur 76 alertes de cas suspects au 30 octobre, 33 se sont révélées négatives en laboratoire et les autres ont été écartées.",
        th: "สถานทูตเยอรมนี ญี่ปุ่น เนเธอร์แลนด์ นอร์เวย์ สหราชอาณาจักร และสหรัฐอเมริกาออกแถลงการณ์ร่วมว่าซูดานใต้เสี่ยงสูงต่อการระบาดของอีโบลา และเรียกร้องให้ใช้งบประมาณรัฐสำหรับภาคสาธารณสุข รวมถึงเงินเดือนบุคลากรสาธารณสุข และให้เข้าถึงความช่วยเหลือด้านมนุษยธรรมได้โดยไม่มีอุปสรรค Radio Tamazuj รายงานเมื่อวันที่ 13 พฤศจิกายน กระทรวงการต่างประเทศตอบว่ายังไม่มีผู้ป่วยยืนยัน และขอให้คณะผู้แทนทางการทูตแจ้งข้อกังวลผ่านช่องทางทางการ องค์การอนามัยโลกระบุว่าซูดานใต้ยังไม่มีผู้ป่วยยืนยัน จากการแจ้งเตือนผู้ต้องสงสัย 76 รายจนถึงวันที่ 30 ตุลาคม 33 รายผลตรวจเป็นลบ และที่เหลือถูกตัดออกหลังการสอบสวน",
        sw: "Balozi za Ujerumani, Japan, Uholanzi, Norway, Uingereza na Marekani zilisema katika taarifa ya pamoja kuwa Sudan Kusini inakabiliwa na hatari kubwa ya mlipuko wa Ebola, na zikataka fedha za umma kwa sekta ya afya, zikiwemo mishahara ya wahudumu wa afya, na ufikiaji wa misaada ya kibinadamu bila vizuizi, Radio Tamazuj iliripoti tarehe 13 Novemba. Wizara ya mambo ya nje ilijibu kuwa hakuna mgonjwa aliyethibitishwa na ikaziomba balozi kuwasilisha wasiwasi kupitia njia rasmi. WHO inasema Sudan Kusini haina mgonjwa aliyethibitishwa; kati ya tahadhari 76 za wagonjwa wanaoshukiwa hadi tarehe 30 Oktoba, 33 zilipimwa na kukutwa hasi na zilizobaki ziliondolewa baada ya uchunguzi."
      },
      why: {
        en: "Border health at points of entry: WHO put the risk of Ebola reaching South Sudan at 99 per cent in its October assessment, citing porous borders and population movement, as DR Congo's outbreak continues next door.",
        fr: "La santé aux points d'entrée : dans son évaluation d'octobre, l'OMS a estimé à 99 % le risque que l'Ebola atteigne le Soudan du Sud, en raison de frontières poreuses et des mouvements de population, alors que l'épidémie se poursuit en RD Congo voisine.",
        th: "สุขภาพ ณ ช่องทางเข้าออกประเทศ องค์การอนามัยโลกประเมินในเดือนตุลาคมว่าความเสี่ยงที่อีโบลาจะเข้าสู่ซูดานใต้อยู่ที่ร้อยละ 99 เนื่องจากพรมแดนที่ข้ามได้ง่ายและการเคลื่อนย้ายของประชากร ขณะที่การระบาดในคองโกซึ่งเป็นประเทศเพื่อนบ้านยังดำเนินต่อไป",
        sw: "Afya katika vituo vya kuingilia: WHO ilikadiria katika tathmini yake ya Oktoba kuwa hatari ya Ebola kufika Sudan Kusini ni asilimia 99, ikitaja mipaka isiyolindwa vyema na mienendo ya watu, huku mlipuko ukiendelea DR Kongo jirani."
      },
      sources: [
        { name: "Radio Tamazuj (WHO)", date: "2026-11-13", url: "https://radiotamazuj.org/en/news/article/south-sudan-rejects-ebola-concerns-raised-by-diplomatic-missions" }
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
      date: "2026-11-13",
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
        en: "Sudan's government complained to the UN Security Council and the AU Peace and Security Council on 1 November that Ethiopia lets the RSF launch drones from its territory. On 4 November Ethiopia gave six staff of Sudan's consulate in Assosa 48 hours to leave, Reuters reported, and Sudan then closed Ethiopia's consulate in Gedaref. Ethiopia denies backing the RSF and accuses Sudan, Egypt and Eritrea of backing Tigrayan rebels; all deny the claims. On 13 November Sudan's army said its air defences shot down a drone that had crossed from Ethiopia into Blue Nile state, its second such claim this month, Anadolu reported; Ethiopia had not commented.",
        fr: "Le gouvernement soudanais s'est plaint le 1er novembre auprès du Conseil de sécurité de l'ONU et du Conseil de paix et de sécurité de l'UA que l'Éthiopie laisse les FSR lancer des drones depuis son territoire. Le 4 novembre, l'Éthiopie a donné 48 heures à six agents du consulat soudanais d'Assosa pour partir, selon Reuters, puis le Soudan a fermé le consulat éthiopien de Gedaref. L'Éthiopie nie soutenir les FSR et accuse le Soudan, l'Égypte et l'Érythrée de soutenir des rebelles tigréens ; tous démentent. Le 13 novembre, l'armée soudanaise a déclaré que sa défense aérienne avait abattu dans l'État du Nil Bleu un drone venu d'Éthiopie, sa deuxième annonce de ce type ce mois-ci, selon Anadolu ; l'Éthiopie n'avait pas réagi.",
        th: "รัฐบาลซูดานยื่นเรื่องร้องเรียนต่อคณะมนตรีความมั่นคงแห่งสหประชาชาติและคณะมนตรีสันติภาพและความมั่นคงของสหภาพแอฟริกาเมื่อวันที่ 1 พฤศจิกายนว่าเอธิโอเปียปล่อยให้กองกำลัง RSF ใช้ดินแดนของตนปล่อยโดรน รอยเตอร์รายงานว่าเมื่อวันที่ 4 พฤศจิกายน เอธิโอเปียสั่งให้เจ้าหน้าที่สถานกงสุลซูดานในเมืองอาโซซา 6 คนออกนอกประเทศภายใน 48 ชั่วโมง จากนั้นซูดานปิดสถานกงสุลเอธิโอเปียในเมืองเกดาเรฟ เอธิโอเปียปฏิเสธว่าไม่ได้สนับสนุน RSF และกล่าวหาว่าซูดาน อียิปต์ และเอริเทรียสนับสนุนกลุ่มกบฏทิกเรย์ ซึ่งทุกฝ่ายปฏิเสธ เมื่อวันที่ 13 พฤศจิกายน กองทัพซูดานระบุว่าระบบป้องกันภัยทางอากาศยิงโดรนที่ข้ามพรมแดนจากเอธิโอเปียเข้าสู่รัฐบลูไนล์ตก ซึ่งเป็นการกล่าวอ้างลักษณะนี้ครั้งที่สองในเดือนนี้ ตามรายงานของ Anadolu โดยเอธิโอเปียยังไม่ได้แสดงความเห็น",
        sw: "Serikali ya Sudan ililalamika kwa Baraza la Usalama la UN na Baraza la Amani na Usalama la AU tarehe 1 Novemba kwamba Ethiopia inairuhusu RSF kurusha droni kutoka ardhi yake. Tarehe 4 Novemba Ethiopia iliwapa maafisa sita wa ubalozi mdogo wa Sudan mjini Assosa saa 48 kuondoka, Reuters iliripoti, kisha Sudan ikafunga ubalozi mdogo wa Ethiopia mjini Gedaref. Ethiopia inakanusha kuiunga mkono RSF na inazishutumu Sudan, Misri na Eritrea kuwaunga mkono waasi wa Tigray; wote wanakanusha madai hayo. Tarehe 13 Novemba jeshi la Sudan lilisema mfumo wake wa ulinzi wa anga ulidungua droni iliyovuka kutoka Ethiopia kuingia jimbo la Blue Nile, dai lake la pili la aina hiyo mwezi huu, Anadolu iliripoti; Ethiopia ilikuwa haijatoa kauli."
      },
      why: {
        en: "Relations between governments in the Nile Basin: the AU Peace and Security Council is now seized of a complaint between two neighbours, while Sudan's war has displaced more than 14 million people, according to UN figures cited by Reuters.",
        fr: "Les relations entre gouvernements dans le bassin du Nil : le Conseil de paix et de sécurité de l'UA est désormais saisi d'une plainte entre deux voisins, alors que la guerre au Soudan a déplacé plus de 14 millions de personnes, selon des chiffres de l'ONU cités par Reuters.",
        th: "ความสัมพันธ์ระหว่างรัฐบาลในลุ่มแม่น้ำไนล์ ขณะนี้คณะมนตรีสันติภาพและความมั่นคงของสหภาพแอฟริการับเรื่องร้องเรียนระหว่างสองประเทศเพื่อนบ้านไว้พิจารณา ขณะที่สงครามในซูดานทำให้ผู้คนพลัดถิ่นกว่า 14 ล้านคน ตามตัวเลขของสหประชาชาติที่รอยเตอร์อ้างถึง",
        sw: "Mahusiano kati ya serikali katika Bonde la Nile: Baraza la Amani na Usalama la AU sasa lina malalamiko kati ya majirani wawili, huku vita vya Sudan vikiwa vimewahamisha zaidi ya watu milioni 14, kwa mujibu wa takwimu za UN zilizonukuliwa na Reuters."
      },
      sources: [
        { name: "Anadolu Agency (via A News)", date: "2026-11-13", url: "https://www.anews.com.tr/world/2026/11/13/sudanese-army-advances-in-west-kordofan-says-it-downed-drone-from-ethiopia" },
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
      id: "abyei",
      date: "2026-11-14",
      region: "gl",
      photo: "juba",
      team: ["aaron"],
      topic: "peace",
      title: {
        en: "Abyei: UN Security Council renews its peacekeeping mission for a year, with new benchmarks",
        fr: "Abyei : le Conseil de sécurité de l'ONU renouvelle pour un an sa mission de maintien de la paix, avec de nouveaux critères",
        th: "อาบเยย์: คณะมนตรีความมั่นคงแห่งสหประชาชาติต่ออายุภารกิจรักษาสันติภาพอีกหนึ่งปี พร้อมเกณฑ์ชี้วัดใหม่",
        sw: "Abyei: Baraza la Usalama la UN laongeza muda wa ujumbe wake wa kulinda amani kwa mwaka mmoja, na vigezo vipya"
      },
      summary: {
        en: "The Security Council extended the mandate of UNISFA, the UN force in Abyei, until 15 November 2027 by 13 votes to none, with China and Russia abstaining, Radio Tamazuj reported on 14 November. The resolution sets benchmarks: regular talks between Sudan and South Sudan on Abyei's final status, South Sudan's withdrawal of forces from southern Abyei on a set timeline, an end to Sudanese army operations there and the full withdrawal of the RSF. South Sudan's representative said adding benchmarks cannot by itself guarantee progress. On 5 November the UN said drone strikes on 19 October had killed at least 30 people in Abyei, the first attacks of their kind there.",
        fr: "Le Conseil de sécurité a prolongé jusqu'au 15 novembre 2027 le mandat de la FISNUA, la force de l'ONU à Abyei, par 13 voix contre zéro, la Chine et la Russie s'abstenant, a rapporté Radio Tamazuj le 14 novembre. La résolution fixe des critères : des négociations régulières entre le Soudan et le Soudan du Sud sur le statut final d'Abyei, le retrait des forces sud-soudanaises du sud d'Abyei selon un calendrier fixé, la fin des opérations de l'armée soudanaise dans la zone et le retrait complet des FSR. Le représentant du Soudan du Sud a déclaré que l'ajout de critères ne peut à lui seul garantir des progrès. Le 5 novembre, l'ONU avait indiqué que des frappes de drones le 19 octobre avaient tué au moins 30 personnes à Abyei, les premières attaques de ce type dans la zone.",
        th: "คณะมนตรีความมั่นคงขยายอาณัติของ UNISFA กองกำลังสหประชาชาติในอาบเยย์ ไปจนถึงวันที่ 15 พฤศจิกายน 2027 ด้วยคะแนนเสียง 13 ต่อ 0 โดยจีนและรัสเซียงดออกเสียง Radio Tamazuj รายงานเมื่อวันที่ 14 พฤศจิกายน มติดังกล่าวกำหนดเกณฑ์ชี้วัด ได้แก่ การเจรจาอย่างสม่ำเสมอระหว่างซูดานและซูดานใต้เรื่องสถานะสุดท้ายของอาบเยย์ การถอนกำลังของซูดานใต้ออกจากอาบเยย์ตอนใต้ตามกรอบเวลาที่กำหนด การยุติปฏิบัติการทางทหารของกองทัพซูดานในพื้นที่ และการถอนกำลังทั้งหมดของ RSF ผู้แทนซูดานใต้กล่าวว่าการเพิ่มเกณฑ์ชี้วัดเพียงอย่างเดียวไม่อาจรับประกันความคืบหน้าได้ เมื่อวันที่ 5 พฤศจิกายน สหประชาชาติระบุว่าการโจมตีด้วยโดรนเมื่อวันที่ 19 ตุลาคมคร่าชีวิตอย่างน้อย 30 คนในอาบเยย์ ซึ่งเป็นการโจมตีลักษณะนี้ครั้งแรกในพื้นที่",
        sw: "Baraza la Usalama liliongeza muda wa mamlaka ya UNISFA, kikosi cha UN huko Abyei, hadi tarehe 15 Novemba 2027 kwa kura 13 bila kupingwa, China na Urusi zikijizuia kupiga kura, Radio Tamazuj iliripoti tarehe 14 Novemba. Azimio hilo linaweka vigezo: mazungumzo ya mara kwa mara kati ya Sudan na Sudan Kusini kuhusu hadhi ya mwisho ya Abyei, Sudan Kusini kuondoa vikosi vyake kusini mwa Abyei kwa ratiba iliyowekwa, jeshi la Sudan kusitisha operesheni zake huko, na RSF kuondoka kabisa. Mwakilishi wa Sudan Kusini alisema kuongeza vigezo peke yake hakuwezi kuhakikisha maendeleo. Tarehe 5 Novemba UN ilisema mashambulizi ya droni ya tarehe 19 Oktoba yaliua watu wasiopungua 30 huko Abyei, mashambulizi ya kwanza ya aina hiyo katika eneo hilo."
      },
      why: {
        en: "A conflict crossing a border: Abyei's Amiet market is a transit point for more than 49,000 refugees and returnees fleeing Sudan's war, UN News reported, and the resolution also calls for an Abyei police service and faster visas for UN police.",
        fr: "Un conflit qui franchit une frontière : le marché d'Amiet, à Abyei, est un point de transit pour plus de 49 000 réfugiés et rapatriés fuyant la guerre au Soudan, selon ONU Info, et la résolution demande aussi la création d'un service de police à Abyei et des visas plus rapides pour la police de l'ONU.",
        th: "ความขัดแย้งที่ข้ามพรมแดน ตลาดอาเมียตในอาบเยย์เป็นจุดผ่านของผู้ลี้ภัยและผู้เดินทางกลับกว่า 49,000 คนที่หนีสงครามในซูดาน ตามรายงานของ UN News และมติยังเรียกร้องให้จัดตั้งหน่วยตำรวจของอาบเยย์และเร่งออกวีซ่าให้ตำรวจสหประชาชาติ",
        sw: "Mgogoro unaovuka mpaka: soko la Amiet huko Abyei ni kituo cha kupita kwa zaidi ya wakimbizi na wanaorejea 49,000 wanaokimbia vita vya Sudan, UN News iliripoti, na azimio hilo pia linataka kuanzishwa kwa huduma ya polisi ya Abyei na viza za haraka kwa polisi wa UN."
      },
      sources: [
        { name: "Radio Tamazuj", date: "2026-11-14", url: "https://www.radiotamazuj.org/en/news/article/un-extends-abyei-peacekeeping-mandate-to-november-2027" },
        { name: "UN News", date: "2026-11-05", url: "https://news.un.org/en/story/2026/11/1168749" }
      ]
    },
    {
      id: "south-sudan-elections",
      date: "2026-11-14",
      region: "gl",
      photo: "juba",
      team: ["aaron", "ohn"],
      topic: "peace",
      title: {
        en: "South Sudan postpones its first elections to February 2027 as fighting in Upper Nile displaces more than 35,000",
        fr: "Le Soudan du Sud reporte ses premières élections à février 2027, alors que des combats dans le Haut-Nil déplacent plus de 35 000 personnes",
        th: "ซูดานใต้เลื่อนการเลือกตั้งครั้งแรกไปเป็นเดือนกุมภาพันธ์ 2027 ขณะที่การสู้รบในรัฐอัปเปอร์ไนล์ทำให้ผู้คนพลัดถิ่นกว่า 35,000 คน",
        sw: "Sudan Kusini yaahirisha uchaguzi wake wa kwanza hadi Februari 2027 huku mapigano Upper Nile yakiwahamisha zaidi ya watu 35,000"
      },
      summary: {
        en: "South Sudan's election commission said on 14 November that the presidential and parliamentary elections set for 22 December will be held on 11 February 2027; it gave no reason, AFP reported. They would be the first since independence in 2011, and the vote has been postponed at least three times since 2022. Voter registration runs from 14 to 28 November at 3,161 centres. Fighting along the Nasir–Ulang corridor in Upper Nile has displaced more than 35,000 people, and about 2.5 million people face emergency hunger and 73,300 catastrophe, according to UN figures.",
        fr: "La commission électorale du Soudan du Sud a annoncé le 14 novembre que les élections présidentielle et législatives prévues le 22 décembre auront lieu le 11 février 2027 ; elle n'a donné aucune raison, selon l'AFP. Ce seraient les premières depuis l'indépendance en 2011, et le scrutin a été reporté au moins trois fois depuis 2022. L'inscription des électeurs se déroule du 14 au 28 novembre dans 3 161 centres. Les combats le long du corridor Nasir–Ulang, dans le Haut-Nil, ont déplacé plus de 35 000 personnes, et environ 2,5 millions de personnes sont en situation d'urgence alimentaire et 73 300 en situation de catastrophe, selon des chiffres de l'ONU.",
        th: "คณะกรรมการการเลือกตั้งซูดานใต้ประกาศเมื่อวันที่ 14 พฤศจิกายนว่าการเลือกตั้งประธานาธิบดีและสมาชิกรัฐสภาซึ่งกำหนดไว้วันที่ 22 ธันวาคม จะจัดขึ้นในวันที่ 11 กุมภาพันธ์ 2027 โดยไม่ได้ให้เหตุผล ตามรายงานของ AFP นี่จะเป็นการเลือกตั้งครั้งแรกนับตั้งแต่ได้รับเอกราชในปี 2011 และถูกเลื่อนมาแล้วอย่างน้อยสามครั้งนับตั้งแต่ปี 2022 การลงทะเบียนผู้มีสิทธิเลือกตั้งมีขึ้นระหว่างวันที่ 14 ถึง 28 พฤศจิกายน ที่ศูนย์ 3,161 แห่ง การสู้รบตามแนวนาซีร์–อูลังในรัฐอัปเปอร์ไนล์ทำให้ผู้คนพลัดถิ่นกว่า 35,000 คน และประชาชนราว 2.5 ล้านคนเผชิญความหิวโหยระดับฉุกเฉิน และ 73,300 คนอยู่ในระดับหายนะ ตามตัวเลขของสหประชาชาติ",
        sw: "Tume ya uchaguzi ya Sudan Kusini ilisema tarehe 14 Novemba kwamba uchaguzi wa rais na wabunge uliopangwa tarehe 22 Desemba utafanyika tarehe 11 Februari 2027; haikutoa sababu, AFP iliripoti. Ungekuwa uchaguzi wa kwanza tangu uhuru mwaka 2011, na umeahirishwa angalau mara tatu tangu 2022. Uandikishaji wa wapiga kura unaendelea kuanzia tarehe 14 hadi 28 Novemba katika vituo 3,161. Mapigano katika ukanda wa Nasir–Ulang huko Upper Nile yamewahamisha zaidi ya watu 35,000, na takriban watu milioni 2.5 wanakabiliwa na njaa ya dharura na 73,300 janga, kwa mujibu wa takwimu za UN."
      },
      why: {
        en: "A conflict near shared borders: about 39,500 refugees and returnees have crossed into South Sudan from Sudan's war in the latest reporting period, and the UN mission there, UNMISS, is working with a reduced footprint because of the UN's financial crisis.",
        fr: "Un conflit près de frontières partagées : environ 39 500 réfugiés et rapatriés fuyant la guerre au Soudan sont entrés au Soudan du Sud au cours de la dernière période couverte, et la mission de l'ONU sur place, la MINUSS, fonctionne avec une présence réduite en raison de la crise financière de l'ONU.",
        th: "ความขัดแย้งใกล้พรมแดนที่ใช้ร่วมกัน ในรอบการรายงานล่าสุด ผู้ลี้ภัยและผู้เดินทางกลับราว 39,500 คนข้ามจากสงครามในซูดานเข้าสู่ซูดานใต้ และภารกิจสหประชาชาติในพื้นที่ (UNMISS) ต้องทำงานโดยลดขนาดลงเพราะวิกฤตการเงินของสหประชาชาติ",
        sw: "Mzozo karibu na mipaka inayoshirikiwa: takriban wakimbizi na wanaorejea 39,500 wameingia Sudan Kusini wakikimbia vita vya Sudan katika kipindi cha hivi karibuni cha ripoti, na ujumbe wa UN nchini humo, UNMISS, unafanya kazi kwa uwepo mdogo kutokana na mgogoro wa kifedha wa UN."
      },
      sources: [
        { name: "Al Jazeera (AFP)", date: "2026-11-14", url: "https://www.aljazeera.com/news/2026/11/14/south-sudan-postpones-first-ever-national-elections-until-february" },
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
      id: "tak-border",
      date: "2026-11-13",
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
        en: "Thailand's Interior Ministry told governors of 10 provinces on the Myanmar border on 9 November to prepare shelters, evacuation plans and temporary safe areas, and to tighten watch on crossing points, after stray bullets and shell fragments from fighting near Phalu village damaged homes in Mae Sot, Thaiger reported. The army has stepped up round-the-clock patrols, including in Mae Sot from 8 November, and the air force scrambled F-16s on 8 November when a suspicious aircraft approached the border in Phop Phra district. On 12 November Foreign Minister Sihasak Phuangketkeow, visiting Myanmar, urged it to keep its military operations from affecting people on the Thai side; both sides agreed to work more closely against drug trafficking and online scams, The Nation reported.",
        fr: "Le ministère thaïlandais de l'Intérieur a demandé le 9 novembre aux gouverneurs de 10 provinces frontalières du Myanmar de préparer abris, plans d'évacuation et zones sûres temporaires, et de renforcer la surveillance des points de passage, après que des balles perdues et des éclats d'obus tirés lors de combats près du village de Phalu ont endommagé des maisons à Mae Sot, selon Thaiger. L'armée a renforcé ses patrouilles jour et nuit, notamment à Mae Sot depuis le 8 novembre, et l'armée de l'air a fait décoller des F-16 le 8 novembre à l'approche d'un aéronef suspect près de la frontière, dans le district de Phop Phra. Le 12 novembre, en visite au Myanmar, le ministre des Affaires étrangères Sihasak Phuangketkeow lui a demandé d'éviter que ses opérations militaires touchent la population du côté thaïlandais ; les deux pays sont convenus de coopérer davantage contre le trafic de drogue et les arnaques en ligne, selon The Nation.",
        th: "กระทรวงมหาดไทยสั่งผู้ว่าราชการ 10 จังหวัดตามแนวชายแดนเมียนมาเมื่อวันที่ 9 พฤศจิกายน ให้เตรียมที่พักพิง แผนอพยพ และพื้นที่ปลอดภัยชั่วคราว และเข้มงวดการเฝ้าระวังจุดผ่านแดน หลังกระสุนและสะเก็ดระเบิดจากการสู้รบใกล้หมู่บ้านผาลูสร้างความเสียหายแก่บ้านเรือนในแม่สอด ตามรายงานของ Thaiger กองทัพบกเพิ่มการลาดตระเวนตลอด 24 ชั่วโมง รวมถึงในแม่สอดตั้งแต่วันที่ 8 พฤศจิกายน และกองทัพอากาศส่งเครื่องบิน F-16 ขึ้นบินเมื่อวันที่ 8 พฤศจิกายน เมื่ออากาศยานต้องสงสัยเข้าใกล้ชายแดนในอำเภอพบพระ เมื่อวันที่ 12 พฤศจิกายน นายสีหศักดิ์ พวงเกตุแก้ว รัฐมนตรีว่าการกระทรวงการต่างประเทศ ซึ่งเยือนเมียนมา ได้เรียกร้องให้เมียนมาป้องกันไม่ให้ปฏิบัติการทางทหารส่งผลกระทบต่อประชาชนฝั่งไทย และทั้งสองฝ่ายตกลงร่วมมือกันมากขึ้นในการปราบปรามการค้ายาเสพติดและการหลอกลวงออนไลน์ ตามรายงานของ The Nation",
        sw: "Wizara ya Mambo ya Ndani ya Thailand iliwaagiza magavana wa majimbo 10 yanayopakana na Myanmar tarehe 9 Novemba kuandaa makazi ya muda, mipango ya kuhamisha watu na maeneo salama ya muda, na kuimarisha uangalizi wa vivuko, baada ya risasi zilizopotea na vipande vya makombora kutoka mapigano karibu na kijiji cha Phalu kuharibu nyumba Mae Sot, Thaiger iliripoti. Jeshi limeongeza doria za saa 24, ikiwemo Mae Sot tangu tarehe 8 Novemba, na jeshi la anga lilirusha ndege za F-16 tarehe 8 Novemba ndege ya kutiliwa shaka ilipokaribia mpaka katika wilaya ya Phop Phra. Tarehe 12 Novemba Waziri wa Mambo ya Nje Sihasak Phuangketkeow, akiwa ziarani Myanmar, aliitaka kuzuia operesheni zake za kijeshi zisiwaathiri watu wa upande wa Thailand; pande zote mbili zilikubaliana kushirikiana zaidi dhidi ya biashara haramu ya dawa za kulevya na utapeli mtandaoni, The Nation iliripoti."
      },
      why: {
        en: "A conflict crossing a border: Thailand's army calls the fighting an internal Myanmar conflict, and it reaches Mae Sot, one of the main trade posts between Thailand and Myanmar, where trade through unofficial crossings was suspended until 5 November.",
        fr: "Un conflit qui traverse une frontière : l'armée thaïlandaise qualifie les combats de conflit interne au Myanmar, et ils atteignent Mae Sot, l'un des principaux postes commerciaux entre la Thaïlande et le Myanmar, où le commerce par les points de passage non officiels a été suspendu jusqu'au 5 novembre.",
        th: "ความขัดแย้งที่ข้ามพรมแดน กองทัพบกไทยระบุว่าการสู้รบเป็นความขัดแย้งภายในของเมียนมา และส่งผลถึงแม่สอด หนึ่งในจุดการค้าหลักระหว่างไทยกับเมียนมา ซึ่งการค้าผ่านช่องทางไม่เป็นทางการถูกระงับจนถึงวันที่ 5 พฤศจิกายน",
        sw: "Mgogoro unaovuka mpaka: jeshi la Thailand linayaita mapigano hayo mgogoro wa ndani wa Myanmar, na yanafika Mae Sot, mojawapo ya vituo vikuu vya biashara kati ya Thailand na Myanmar, ambako biashara kupitia vivuko visivyo rasmi ilisimamishwa hadi tarehe 5 Novemba."
      },
      sources: [
        { name: "The Nation Thailand", date: "2026-11-13", url: "https://www.nationthailand.com/news/asean/40073452" },
        { name: "Thaiger", date: "2026-11-10", url: "https://thethaiger.com/news/national/thailand-myanmar-border-provinces-alert" },
        { name: "The Nation Thailand", date: "2026-11-09", url: "https://www.nationthailand.com/news/asean/40073279" },
        { name: "The Nation Thailand", date: "2026-11-08", url: "https://nationthailand.com/news/general/40073262" },
        { name: "Malay Mail", date: "2026-11-04", url: "https://www.malaymail.com/news/world/2026/11/04/thailands-foreign-minister-visits-myanmar-amid-border-clashes-a-coup-ahead-of-asean-summit/241955" },
        { name: "The Nation Thailand", date: "2026-10-30", url: "https://www.nationthailand.com/news/general/40072918" }
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
      id: "tonle-sap",
      date: "2026-11-13",
      region: "sea",
      photo: "stranded-boat",
      team: ["yidnekachew"],
      topic: "rivers",
      title: {
        en: "Tonle Sap: Cambodia's great lake runs low as El Niño and upstream changes press on fishing families",
        fr: "Tonlé Sap : le grand lac du Cambodge est au plus bas sous l'effet d'El Niño et des changements en amont, au détriment des familles de pêcheurs",
        th: "โตนเลสาบ: ทะเลสาบใหญ่ของกัมพูชาน้ำลดต่ำ ขณะที่เอลนีโญและการเปลี่ยนแปลงต้นน้ำกดดันครอบครัวชาวประมง",
        sw: "Tonle Sap: ziwa kuu la Kambodia lapungua maji huku El Niño na mabadiliko ya juu ya mto yakiwabana wavuvi"
      },
      summary: {
        en: "In early October the water level at Prek Kdam was nearly 7 metres, more than a metre below average and 1.5 metres lower than a year earlier, AP reported on 13 November. About 1.5 million people live on the Tonle Sap, Southeast Asia's largest lake, which grows about fivefold in the monsoon flood as its level rises and falls with the Mekong's flow. In June the UN Food and Agriculture Organization rated Cambodia at high risk of severe drought during this El Niño, and AP says upstream dams and sand mining are altering the Mekong's flow.",
        fr: "Début octobre, le niveau de l'eau à Prek Kdam était de près de 7 mètres, soit plus d'un mètre sous la moyenne et 1,5 mètre de moins qu'un an plus tôt, a rapporté AP le 13 novembre. Environ 1,5 million de personnes vivent sur le Tonlé Sap, le plus grand lac d'Asie du Sud-Est, qui s'étend environ cinq fois pendant la crue de la mousson, son niveau suivant le débit du Mékong. En juin, l'Organisation des Nations unies pour l'alimentation et l'agriculture a jugé le Cambodge exposé à un risque élevé de sécheresse grave pendant cet épisode El Niño, et AP indique que les barrages en amont et l'extraction de sable modifient le débit du Mékong.",
        th: "เมื่อต้นเดือนตุลาคม ระดับน้ำที่ปรักกดัมอยู่ที่เกือบ 7 เมตร ต่ำกว่าค่าเฉลี่ยกว่า 1 เมตร และต่ำกว่าปีก่อน 1.5 เมตร AP รายงานเมื่อวันที่ 13 พฤศจิกายน ผู้คนราว 1.5 ล้านคนอาศัยอยู่ที่โตนเลสาบ ทะเลสาบที่ใหญ่ที่สุดในเอเชียตะวันออกเฉียงใต้ ซึ่งขยายตัวราวห้าเท่าในช่วงน้ำหลากฤดูมรสุม เพราะระดับน้ำขึ้นลงตามการไหลของแม่น้ำโขง เมื่อเดือนมิถุนายน องค์การอาหารและเกษตรแห่งสหประชาชาติประเมินว่ากัมพูชาเสี่ยงสูงต่อภัยแล้งรุนแรงในช่วงเอลนีโญนี้ และ AP ระบุว่าเขื่อนต้นน้ำและการดูดทรายกำลังเปลี่ยนแปลงการไหลของแม่น้ำโขง",
        sw: "Mwanzoni mwa Oktoba kina cha maji huko Prek Kdam kilikuwa karibu mita 7, zaidi ya mita moja chini ya wastani na mita 1.5 chini ya mwaka uliotangulia, AP iliripoti tarehe 13 Novemba. Takriban watu milioni 1.5 wanaishi kwenye Tonle Sap, ziwa kubwa zaidi Kusini-Mashariki mwa Asia, ambalo hupanuka takriban mara tano wakati wa mafuriko ya monsuni kwa kuwa kina chake hupanda na kushuka kulingana na mtiririko wa Mto Mekong. Mwezi Juni Shirika la Chakula na Kilimo la Umoja wa Mataifa liliiweka Kambodia katika hatari kubwa ya ukame mkali wakati wa El Niño hii, na AP inasema mabwawa ya juu ya mto na uchimbaji wa mchanga vinabadilisha mtiririko wa Mto Mekong."
      },
      why: {
        en: "Shared rivers and food security: the lake rises and falls with the Mekong, and in a very dry year there is “less fish, less food and more fire”, Zeb Hogan of the University of Nevada, Reno, told AP; the Nile Basin's states face similar questions about upstream dams.",
        fr: "Fleuves partagés et sécurité alimentaire : le lac monte et descend avec le Mékong, et lors d'une année très sèche il y a « moins de poissons, moins de nourriture et plus d'incendies », a déclaré à AP Zeb Hogan, de l'Université du Nevada à Reno ; les États du bassin du Nil se posent des questions semblables sur les barrages en amont.",
        th: "แม่น้ำร่วมและความมั่นคงทางอาหาร ทะเลสาบขึ้นลงตามแม่น้ำโขง และในปีที่แล้งจัดจะมี “ปลาน้อยลง อาหารน้อยลง และไฟป่ามากขึ้น” ซีบ โฮแกน จากมหาวิทยาลัยเนวาดา รีโน กล่าวกับ AP ขณะที่ประเทศในลุ่มแม่น้ำไนล์ก็เผชิญคำถามคล้ายกันเรื่องเขื่อนต้นน้ำ",
        sw: "Mito ya pamoja na usalama wa chakula: ziwa hupanda na kushuka pamoja na Mto Mekong, na katika mwaka wenye ukame mkubwa kuna “samaki wachache, chakula kidogo na moto zaidi”, Zeb Hogan wa Chuo Kikuu cha Nevada, Reno, aliiambia AP; nchi za Bonde la Nile zinakabiliwa na maswali kama hayo kuhusu mabwawa ya juu ya mto."
      },
      sources: [
        { name: "AP (via Arab News)", date: "2026-11-13", url: "https://www.arabnews.com/world/a-way-of-life-is-disappearing-on-cambodias-tonle-sap-lake-3011531" }
      ]
    },
    {
      id: "border-rivers",
      date: "2026-11-13",
      region: "sea",
      photo: "mae-sai-towns",
      team: ["aaron", "badri"],
      topic: "rivers",
      title: {
        en: "Thailand and Myanmar agree to convene their border-rivers working group on the Kok and Sai",
        fr: "La Thaïlande et le Myanmar conviennent de réunir leur groupe de travail sur les rivières frontalières Kok et Sai",
        th: "ไทยและเมียนมาตกลงเรียกประชุมคณะทำงานด้านแม่น้ำชายแดนเรื่องแม่น้ำกกและแม่น้ำสาย",
        sw: "Thailand na Myanmar zakubaliana kuitisha kikundi kazi chao cha mito ya mpakani kuhusu mito Kok na Sai"
      },
      summary: {
        en: "Arsenic and heavy metals above standard limits have been found in the Kok and Sai rivers, which Thailand shares with Myanmar's Shan State, The Nation reported on 10 November. Thai ministers said the pollution is believed to come from mining in Shan State. During a visit to Myanmar on 12 November, Foreign Minister Sihasak Phuangketkeow and Myanmar's leaders agreed to convene the joint working group on water quality in boundary and transboundary rivers as soon as possible, and senior officials from both countries will make a joint field visit, The Nation reported on 13 November.",
        fr: "De l'arsenic et des métaux lourds au-delà des normes ont été relevés dans les rivières Kok et Sai, que la Thaïlande partage avec l'État Shan du Myanmar, a rapporté The Nation le 10 novembre. Selon des ministres thaïlandais, cette pollution proviendrait de l'exploitation minière dans l'État Shan. Lors d'une visite au Myanmar le 12 novembre, le ministre des Affaires étrangères Sihasak Phuangketkeow et les dirigeants birmans sont convenus de réunir dès que possible le groupe de travail conjoint sur la qualité de l'eau des rivières frontalières et transfrontalières, et de hauts responsables des deux pays effectueront une visite de terrain conjointe, a rapporté The Nation le 13 novembre.",
        th: "พบสารหนูและโลหะหนักเกินค่ามาตรฐานในแม่น้ำกกและแม่น้ำสาย ซึ่งไทยใช้ร่วมกับรัฐฉานของเมียนมา The Nation รายงานเมื่อวันที่ 10 พฤศจิกายน รัฐมนตรีของไทยระบุว่าเชื่อว่ามลพิษมาจากการทำเหมืองในรัฐฉาน ระหว่างการเยือนเมียนมาเมื่อวันที่ 12 พฤศจิกายน นายสีหศักดิ์ พวงเกตุแก้ว รัฐมนตรีว่าการกระทรวงการต่างประเทศ และผู้นำเมียนมาตกลงให้เรียกประชุมคณะทำงานร่วมด้านการจัดการคุณภาพน้ำในแม่น้ำชายแดนและแม่น้ำข้ามพรมแดนโดยเร็วที่สุด และเจ้าหน้าที่ระดับสูงของทั้งสองประเทศจะลงพื้นที่ร่วมกัน The Nation รายงานเมื่อวันที่ 13 พฤศจิกายน",
        sw: "Arseniki na metali nzito zaidi ya viwango vinavyokubalika zimegunduliwa katika mito Kok na Sai, ambayo Thailand inashiriki na Jimbo la Shan la Myanmar, The Nation iliripoti tarehe 10 Novemba. Mawaziri wa Thailand walisema uchafuzi huo unaaminika kutokana na uchimbaji madini katika Jimbo la Shan. Wakati wa ziara nchini Myanmar tarehe 12 Novemba, Waziri wa Mambo ya Nje Sihasak Phuangketkeow na viongozi wa Myanmar walikubaliana kuitisha haraka iwezekanavyo kikundi kazi cha pamoja kuhusu ubora wa maji katika mito ya mpakani na inayovuka mipaka, na maafisa wakuu wa nchi zote mbili watafanya ziara ya pamoja ya kukagua, The Nation iliripoti tarehe 13 Novemba."
      },
      why: {
        en: "Shared rivers: pollution that starts on one side of a border reaches people on the other. Thai agencies are testing water, soil and fish, the Pollution Control Department has set up seven monitoring stations this year, and the waterworks authority is checking whether the river water can still be used for tap water, The Nation reports.",
        fr: "Fleuves partagés : une pollution née d'un côté de la frontière atteint les populations de l'autre. Les services thaïlandais analysent l'eau, les sols et les poissons, le Département de contrôle de la pollution a installé sept stations de surveillance cette année, et la régie des eaux vérifie si l'eau de la rivière peut encore servir à l'eau du robinet, rapporte The Nation.",
        th: "แม่น้ำที่ใช้ร่วมกัน มลพิษที่เริ่มต้นฝั่งหนึ่งของพรมแดนส่งผลถึงผู้คนอีกฝั่งหนึ่ง หน่วยงานไทยกำลังตรวจน้ำ ดิน และสัตว์น้ำ กรมควบคุมมลพิษได้ตั้งสถานีตรวจวัดคุณภาพน้ำ 7 แห่งในปีนี้ และการประปาส่วนภูมิภาคกำลังตรวจสอบว่าน้ำในแม่น้ำยังใช้ผลิตน้ำประปาได้หรือไม่ ตามรายงานของ The Nation",
        sw: "Mito inayoshirikiwa: uchafuzi unaoanzia upande mmoja wa mpaka huwafikia watu wa upande mwingine. Taasisi za Thailand zinapima maji, udongo na samaki, Idara ya Kudhibiti Uchafuzi imeweka vituo saba vya ufuatiliaji mwaka huu, na mamlaka ya maji inachunguza kama maji ya mto bado yanaweza kutumika kwa maji ya bomba, The Nation inaripoti."
      },
      sources: [
        { name: "The Nation Thailand", date: "2026-11-13", url: "https://www.nationthailand.com/news/asean/40073452" },
        { name: "The Nation Thailand", date: "2026-11-10", url: "https://www.nationthailand.com/news/politics/40073332" }
      ]
    },
    {
      id: "asean-summit",
      date: "2026-11-15",
      region: "sea",
      photo: "manila",
      team: ["aaron"],
      topic: "diplomacy",
      title: {
        en: "ASEAN leaders offer Myanmar a step-by-step path back to full representation, tied to its peace plan",
        fr: "Les dirigeants de l'ASEAN offrent au Myanmar un retour progressif à une pleine représentation, lié à son plan de paix",
        th: "ผู้นำอาเซียนเปิดทางให้เมียนมากลับสู่การมีผู้แทนเต็มรูปแบบทีละขั้น โดยผูกกับแผนสันติภาพ",
        sw: "Viongozi wa ASEAN waipa Myanmar njia ya hatua kwa hatua kurejea kwenye uwakilishi kamili, kwa masharti ya mpango wake wa amani"
      },
      summary: {
        en: "Meeting in Manila on 15 November, ASEAN leaders agreed to pursue “a calibrated engagement with Myanmar through a phased and progress-based approach” and may restore its full political representation if there is sustained and concrete progress on the Five-Point Consensus, The Manila Times reported. Myanmar's president was again barred from the summit, and Myanmar sent a foreign ministry director-general, Philstar reported. ASEAN and China have provisionally agreed about 80 per cent of a code of conduct for the South China Sea, but it will not be finished under the Philippines' chairship, and leaders adopted or noted about 100 outcome documents. Related summits run until 17 November.",
        fr: "Réunis à Manille le 15 novembre, les dirigeants de l'ASEAN ont convenu de mener « un engagement calibré avec le Myanmar selon une approche progressive et fondée sur les progrès » et pourraient lui rendre sa pleine représentation politique en cas de progrès durables et concrets dans l'application du consensus en cinq points, a rapporté The Manila Times. Le président du Myanmar a de nouveau été exclu du sommet, et le Myanmar y a envoyé un directeur général du ministère des Affaires étrangères, selon Philstar. L'ASEAN et la Chine se sont provisoirement entendues sur environ 80 % d'un code de conduite pour la mer de Chine méridionale, mais il ne sera pas achevé sous la présidence philippine, et les dirigeants ont adopté ou pris note d'une centaine de documents. Les sommets associés se poursuivent jusqu'au 17 novembre.",
        th: "ผู้นำอาเซียนซึ่งประชุมกันที่มะนิลาเมื่อวันที่ 15 พฤศจิกายน ตกลงที่จะดำเนิน “การมีส่วนร่วมกับเมียนมาอย่างปรับเทียบ ผ่านแนวทางแบบเป็นขั้นตอนและอิงความคืบหน้า” และอาจคืนการมีผู้แทนทางการเมืองเต็มรูปแบบให้เมียนมา หากมีความคืบหน้าที่ต่อเนื่องและเป็นรูปธรรมในการปฏิบัติตามฉันทามติห้าข้อ The Manila Times รายงาน ประธานาธิบดีเมียนมาถูกห้ามเข้าร่วมการประชุมสุดยอดอีกครั้ง และเมียนมาส่งอธิบดีจากกระทรวงการต่างประเทศเข้าร่วมแทน Philstar รายงาน อาเซียนและจีนตกลงเบื้องต้นได้ราวร้อยละ 80 ของแนวปฏิบัติในทะเลจีนใต้ แต่จะไม่แล้วเสร็จในช่วงที่ฟิลิปปินส์เป็นประธาน และผู้นำรับรองหรือรับทราบเอกสารผลลัพธ์ราว 100 ฉบับ การประชุมสุดยอดที่เกี่ยวข้องดำเนินไปจนถึงวันที่ 17 พฤศจิกายน",
        sw: "Wakikutana Manila tarehe 15 Novemba, viongozi wa ASEAN walikubaliana kufuata “ushirikiano uliopimwa na Myanmar kupitia mtazamo wa hatua kwa hatua unaotegemea maendeleo” na huenda wakairejeshea uwakilishi kamili wa kisiasa iwapo kutakuwa na maendeleo endelevu na ya wazi katika kutekeleza Makubaliano ya Hoja Tano, The Manila Times iliripoti. Rais wa Myanmar alizuiwa tena kuhudhuria mkutano huo, na Myanmar ilituma mkurugenzi mkuu wa wizara ya mambo ya nje, Philstar iliripoti. ASEAN na China zimekubaliana kwa muda takriban asilimia 80 ya kanuni za maadili kwa Bahari ya China Kusini, lakini hazitakamilika chini ya uenyekiti wa Ufilipino, na viongozi walipitisha au kupokea takriban nyaraka 100 za matokeo. Mikutano inayohusiana inaendelea hadi tarehe 17 Novemba."
      },
      why: {
        en: "Intergovernmental relations in Southeast Asia: Thailand, which shares a long border with Myanmar, backs calibrated engagement, and its foreign minister said “we need someone at the table who can speak on behalf of Myanmar”, The Manila Times reported.",
        fr: "Les relations entre gouvernements en Asie du Sud-Est : la Thaïlande, qui partage une longue frontière avec le Myanmar, soutient cet engagement calibré, et son ministre des Affaires étrangères a déclaré qu'il faut « quelqu'un à la table qui puisse parler au nom du Myanmar », a rapporté The Manila Times.",
        th: "ความสัมพันธ์ระหว่างรัฐบาลในเอเชียตะวันออกเฉียงใต้ ไทยซึ่งมีพรมแดนยาวติดกับเมียนมาสนับสนุนการมีส่วนร่วมแบบปรับเทียบ และรัฐมนตรีว่าการกระทรวงการต่างประเทศของไทยกล่าวว่า “เราต้องการใครสักคนบนโต๊ะเจรจาที่สามารถพูดแทนเมียนมาได้” The Manila Times รายงาน",
        sw: "Mahusiano kati ya serikali Kusini-Mashariki mwa Asia: Thailand, inayopakana na Myanmar kwa mpaka mrefu, inaunga mkono ushirikiano uliopimwa, na waziri wake wa mambo ya nje alisema “tunahitaji mtu mezani anayeweza kuzungumza kwa niaba ya Myanmar”, The Manila Times iliripoti."
      },
      sources: [
        { name: "The Manila Times", date: "2026-11-15", url: "https://www.manilatimes.net/2026/11/15/news/asean-seeks-calibrated-engagement-with-myanmar-statement/2470262" },
        { name: "Philstar", date: "2026-11-15", url: "https://www.philstar.com/headlines/2026/11/15/2570333/asean-summit-day-1-south-china-sea-indonesia-haze-myanmar-review" },
        { name: "Bernama", date: "2026-11-14", url: "https://www.bernama.com/en/world/news.php?id=2634477" }
      ]
    }
  ]
};
