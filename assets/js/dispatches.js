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
  updated: "2026-11-21",
  items: [
    {
      id: "ebola",
      date: "2026-11-18",
      region: "gl",
      photo: "goma-kivu",
      team: ["dominick", "pavious"],
      topic: "health",
      title: {
        en: "Ebola: WHO keeps DR Congo's outbreak a global health emergency as Bundibugyo vaccine trials near",
        fr: "Ebola : l'OMS maintient l'urgence sanitaire mondiale pour l'épidémie en RD Congo, à l'approche d'essais de vaccins contre le Bundibugyo",
        th: "อีโบลา: องค์การอนามัยโลกคงสถานะภาวะฉุกเฉินด้านสาธารณสุขระหว่างประเทศของการระบาดในคองโก ขณะที่การทดลองวัคซีนสายพันธุ์บุนดิบูเกียวใกล้เริ่ม",
        sw: "Ebola: WHO yaendelea kuutambua mlipuko wa DR Kongo kama dharura ya afya ya kimataifa huku majaribio ya chanjo za Bundibugyo yakikaribia"
      },
      summary: {
        en: "On 18 November WHO's Director-General, Tedros Adhanom Ghebreyesus, said DR Congo's Ebola outbreak remains a public health emergency of international concern, after WHO's Emergency Committee met for the third time; he reported more than 11,300 cases and 5,500 deaths, with 400 to 500 new cases each week, Anadolu reported. WHO says two-thirds of confirmed deaths occur outside treatment centres, and children are more than a quarter of confirmed cases and a third of deaths. Two candidate vaccines made for the Bundibugyo virus, Oxford's ChAdOx1 and Moderna's mRNA-1469, are due to start phase 2 trials on 26 or 27 November in Bunia, Ituri, AFP reported; the trial began on 23 October with Ervebo, a vaccine approved for a different Ebola strain. On 15 November Africa CDC's Jean Kaseya said only $1.3 billion of the $2.9 billion pledged by donors has been released, Al Jazeera reported.",
        fr: "Le 18 novembre, le directeur général de l'OMS, Tedros Adhanom Ghebreyesus, a déclaré que l'épidémie d'Ebola en RD Congo reste une urgence de santé publique de portée internationale, après la troisième réunion du Comité d'urgence de l'OMS ; il a fait état de plus de 11 300 cas et 5 500 décès, avec 400 à 500 nouveaux cas chaque semaine, a rapporté Anadolu. Selon l'OMS, deux tiers des décès confirmés surviennent hors des centres de traitement, et les enfants représentent plus d'un quart des cas confirmés et un tiers des décès. Deux vaccins candidats conçus contre le virus Bundibugyo, le ChAdOx1 d'Oxford et le mRNA-1469 de Moderna, doivent entrer en essai de phase 2 le 26 ou le 27 novembre à Bunia, en Ituri, a rapporté l'AFP ; l'essai a commencé le 23 octobre avec l'Ervebo, un vaccin homologué contre une autre souche d'Ebola. Le 15 novembre, Jean Kaseya, d'Africa CDC, a indiqué que seuls 1,3 milliard de dollars sur les 2,9 milliards promis par les donateurs ont été versés, a rapporté Al Jazeera.",
        th: "เมื่อวันที่ 18 พฤศจิกายน ดร.เทดรอส อัดฮานอม กีบรีเยซุส ผู้อำนวยการใหญ่องค์การอนามัยโลก กล่าวว่าการระบาดของอีโบลาในคองโกยังคงเป็นภาวะฉุกเฉินด้านสาธารณสุขระหว่างประเทศ หลังคณะกรรมการภาวะฉุกเฉินขององค์การอนามัยโลกประชุมเป็นครั้งที่สาม โดยมีผู้ป่วยกว่า 11,300 ราย เสียชีวิตกว่า 5,500 ราย และมีผู้ป่วยรายใหม่ 400 ถึง 500 รายต่อสัปดาห์ สำนักข่าวอนาโดลูรายงาน องค์การอนามัยโลกระบุว่าสองในสามของผู้เสียชีวิตที่ยืนยันแล้วเสียชีวิตนอกศูนย์รักษา และเด็กคิดเป็นกว่าหนึ่งในสี่ของผู้ป่วยยืนยันและหนึ่งในสามของผู้เสียชีวิต วัคซีนทดลองสองชนิดที่พัฒนาสำหรับไวรัสบุนดิบูเกียวโดยเฉพาะ ได้แก่ ChAdOx1 ของมหาวิทยาลัยออกซ์ฟอร์ด และ mRNA-1469 ของโมเดอร์นา มีกำหนดเริ่มการทดลองระยะที่ 2 ในวันที่ 26 หรือ 27 พฤศจิกายน ที่เมืองบูเนีย จังหวัดอิตูรี AFP รายงาน การทดลองนี้เริ่มเมื่อวันที่ 23 ตุลาคมด้วยวัคซีน Ervebo ซึ่งได้รับอนุมัติสำหรับอีโบลาสายพันธุ์อื่น เมื่อวันที่ 15 พฤศจิกายน นายฌอง กาเซยา แห่ง Africa CDC กล่าวว่าจากเงิน 2,900 ล้านดอลลาร์ที่ผู้บริจาคให้คำมั่นไว้ มีการเบิกจ่ายจริงเพียง 1,300 ล้านดอลลาร์ Al Jazeera รายงาน",
        sw: "Tarehe 18 Novemba mkurugenzi mkuu wa WHO, Tedros Adhanom Ghebreyesus, alisema mlipuko wa Ebola nchini DR Kongo bado ni dharura ya afya ya umma inayohusu dunia, baada ya Kamati ya Dharura ya WHO kukutana kwa mara ya tatu; aliripoti wagonjwa zaidi ya 11,300 na vifo 5,500, huku wagonjwa wapya 400 hadi 500 wakiripotiwa kila wiki, Anadolu iliripoti. WHO inasema theluthi mbili ya vifo vilivyothibitishwa hutokea nje ya vituo vya matibabu, na watoto ni zaidi ya robo ya wagonjwa waliothibitishwa na theluthi moja ya vifo. Chanjo mbili za majaribio zilizotengenezwa mahsusi kwa virusi vya Bundibugyo, ChAdOx1 ya Oxford na mRNA-1469 ya Moderna, zinatarajiwa kuanza majaribio ya awamu ya pili tarehe 26 au 27 Novemba mjini Bunia, Ituri, AFP iliripoti; majaribio hayo yalianza tarehe 23 Oktoba kwa chanjo ya Ervebo, iliyoidhinishwa kwa aina nyingine ya Ebola. Tarehe 15 Novemba Jean Kaseya wa Africa CDC alisema ni dola bilioni 1.3 pekee kati ya bilioni 2.9 zilizoahidiwa na wafadhili ambazo zimetolewa, Al Jazeera iliripoti."
      },
      why: {
        en: "Border health in practice: WHO says recent imported cases in Kenya and Nigeria show the continuing risk of spread beyond national borders. Kenya, which had nine cases linked to an imported case, including two deaths, has discharged its last patient and begun a 42-day countdown to being declared Ebola-free, WHO said on 11 November. On 17 November WHO's Director-General, Tedros Adhanom Ghebreyesus, said: \"The risk beyond the DRC's borders is not theoretical.\"",
        fr: "La santé aux frontières en pratique : selon l'OMS, les récents cas importés au Kenya et au Nigeria montrent que le risque de propagation au-delà des frontières demeure. Le Kenya, qui a enregistré neuf cas liés à un cas importé, dont deux décès, a laissé sortir son dernier patient et entamé un compte à rebours de 42 jours avant d'être déclaré exempt d'Ebola, a indiqué l'OMS le 11 novembre. Le 17 novembre, le directeur général de l'OMS, Tedros Adhanom Ghebreyesus, a déclaré : « Le risque au-delà des frontières de la RDC n'est pas théorique. »",
        th: "สุขภาพชายแดนในทางปฏิบัติ องค์การอนามัยโลกระบุว่าผู้ป่วยนำเข้าล่าสุดในเคนยาและไนจีเรียแสดงให้เห็นว่ายังมีความเสี่ยงที่โรคจะแพร่ข้ามพรมแดน เคนยาซึ่งมีผู้ป่วย 9 รายที่เชื่อมโยงกับผู้ป่วยนำเข้า รวมผู้เสียชีวิต 2 ราย ได้ให้ผู้ป่วยรายสุดท้ายออกจากโรงพยาบาลแล้ว และเริ่มนับถอยหลัง 42 วันก่อนประกาศว่าปลอดอีโบลา องค์การอนามัยโลกระบุเมื่อวันที่ 11 พฤศจิกายน เมื่อวันที่ 17 พฤศจิกายน ดร.เทดรอส อัดฮานอม กีบรีเยซุส ผู้อำนวยการใหญ่องค์การอนามัยโลก กล่าวว่า \"ความเสี่ยงนอกพรมแดนคองโกไม่ใช่เรื่องทางทฤษฎี\"",
        sw: "Afya ya mipakani kwa vitendo: WHO inasema wagonjwa walioingia kutoka nje hivi karibuni nchini Kenya na Nigeria wanaonyesha kuwa hatari ya ugonjwa kuenea nje ya mipaka bado ipo. Kenya, iliyokuwa na wagonjwa tisa waliohusishwa na mgonjwa aliyeingia kutoka nje, wakiwemo vifo viwili, imemruhusu mgonjwa wake wa mwisho kutoka hospitalini na kuanza hesabu ya siku 42 kuelekea kutangazwa kuwa huru dhidi ya Ebola, WHO ilisema tarehe 11 Novemba. Tarehe 17 Novemba mkurugenzi mkuu wa WHO, Tedros Adhanom Ghebreyesus, alisema: \"Hatari nje ya mipaka ya DRC si ya kinadharia.\""
      },
      sources: [
        { name: "Anadolu Agency (via A News)", date: "2026-11-18", url: "https://www.anews.com.tr/africa/2026/11/18/who-says-ebola-outbreak-in-dr-congo-remains-public-health-emergency-of-international-concern" },
        { name: "AFP (via Arab News)", date: "2026-11-18", url: "https://www.arabnews.com/world/strain-specific-ebola-jab-trials-to-start-in-dr-congo-next-week-who-3012781" },
        { name: "WHO Director-General", date: "2026-11-17", url: "https://www.who.int/news-room/speeches/item/who-director-general-s-opening-remarks-at-the-third-ihr-emergency-committee-meeting-on-bundibugyo-virus-disease-epidemic-in-the-democratic-republic-of-the-congo---17-november-2026" },
        { name: "UN News (WHO)", date: "2026-11-17", url: "https://news.un.org/en/story/2026/11/1168827" },
        { name: "Al Jazeera (Reuters, Africa CDC)", date: "2026-11-15", url: "https://www.aljazeera.com/news/2026/11/15/africa-cdc-says-ebola-outbreak-in-dr-congo-still-not-under-control" },
        { name: "WHO Regional Office for Africa", date: "2026-11-15", url: "https://www.afro.who.int/countries/democratic-republic-of-congo/news/six-months-accessing-hard-reach-communities-key-halting-ebola-outbreak" },
        { name: "WHO Director-General", date: "2026-11-11", url: "https://www.who.int/news-room/speeches/item/who-director-general-s-opening-remarks-at-the-member-state-briefing-on-ebola-outbreak-in-the-democratic-republic-of-the-congo---11-november-2026" }
      ]
    },
    {
      id: "icj-rohingya",
      date: "2026-11-19",
      region: "sea",
      photo: "mae-la",
      team: ["aaron", "ohn"],
      topic: "peace",
      title: {
        en: "World Court finds Myanmar responsible for genocide against the Rohingya",
        fr: "La Cour internationale de justice déclare le Myanmar responsable de génocide contre les Rohingyas",
        th: "ศาลโลกตัดสินว่าเมียนมาต้องรับผิดชอบต่อการฆ่าล้างเผ่าพันธุ์ชาวโรฮีนจา",
        sw: "Mahakama ya Dunia yaamua Myanmar inawajibika kwa mauaji ya kimbari dhidi ya Warohingya"
      },
      summary: {
        en: "On 19 November the International Court of Justice ruled, by nine votes to six, that Myanmar committed genocide against the Rohingya in its 2017 military crackdown, NPR reported; it is the first time the court has held a state responsible for genocide. The court ordered Myanmar to pay restitution and compensation, the amount to be set later, to investigate and, if warranted, prosecute those suspected of involvement, and to enable displaced Rohingya to return. The crackdown drove about 700,000 people to flee to Bangladesh, NPR reported. The Gambia, which brought the case in 2019, called on Myanmar to comply fully and without delay, and UN Secretary-General António Guterres called the ruling a powerful recognition of the victims, Al Jazeera and Reuters reported. Myanmar's military-backed government had not responded when NPR published its report.",
        fr: "Le 19 novembre, la Cour internationale de justice a jugé, par neuf voix contre six, que le Myanmar a commis un génocide contre les Rohingyas lors de la répression militaire de 2017, a rapporté NPR ; c'est la première fois que la Cour tient un État pour responsable de génocide. La Cour a ordonné au Myanmar de verser restitution et indemnisation, dont le montant sera fixé ultérieurement, d'enquêter sur les personnes soupçonnées d'implication et, si cela se justifie, de les poursuivre, et de permettre le retour des Rohingyas déplacés. La répression a poussé environ 700 000 personnes à fuir vers le Bangladesh, a rapporté NPR. La Gambie, qui a saisi la Cour en 2019, a appelé le Myanmar à s'y conformer pleinement et sans délai, et le secrétaire général de l'ONU, António Guterres, a qualifié l'arrêt de puissante reconnaissance des victimes, ont rapporté Al Jazeera et Reuters. Le gouvernement soutenu par l'armée du Myanmar n'avait pas réagi au moment de la publication de NPR.",
        th: "เมื่อวันที่ 19 พฤศจิกายน ศาลยุติธรรมระหว่างประเทศตัดสินด้วยคะแนนเสียง 9 ต่อ 6 ว่าเมียนมากระทำการฆ่าล้างเผ่าพันธุ์ชาวโรฮีนจาในการปราบปรามทางทหารเมื่อปี 2017 NPR รายงาน นับเป็นครั้งแรกที่ศาลวินิจฉัยให้รัฐหนึ่งต้องรับผิดชอบต่อการฆ่าล้างเผ่าพันธุ์ ศาลสั่งให้เมียนมาชดใช้และชดเชยความเสียหาย โดยจะกำหนดจำนวนภายหลัง ให้สอบสวนและดำเนินคดีผู้ที่ต้องสงสัยว่าเกี่ยวข้องหากมีเหตุอันควร และให้ชาวโรฮีนจาที่พลัดถิ่นสามารถเดินทางกลับได้ การปราบปรามดังกล่าวทำให้ผู้คนราว 700,000 คนหนีไปบังกลาเทศ NPR รายงาน แกมเบียซึ่งยื่นฟ้องคดีนี้ในปี 2019 เรียกร้องให้เมียนมาปฏิบัติตามอย่างเต็มที่และไม่ชักช้า และนายอันโตนิโอ กูเตอร์เรส เลขาธิการสหประชาชาติ กล่าวว่าคำตัดสินนี้เป็นการยอมรับผู้เสียหายอย่างทรงพลัง Al Jazeera และรอยเตอร์รายงาน รัฐบาลเมียนมาที่ได้รับการสนับสนุนจากกองทัพยังไม่ได้ตอบสนองในขณะที่ NPR เผยแพร่รายงาน",
        sw: "Tarehe 19 Novemba Mahakama ya Kimataifa ya Haki iliamua, kwa kura tisa dhidi ya sita, kwamba Myanmar ilitenda mauaji ya kimbari dhidi ya Warohingya katika msako wa kijeshi wa mwaka 2017, NPR iliripoti; ni mara ya kwanza mahakama hiyo kuiwajibisha nchi kwa mauaji ya kimbari. Mahakama iliiamuru Myanmar kulipa fidia, kiasi kitakachoamuliwa baadaye, kuchunguza na, inapostahili, kuwashtaki wanaoshukiwa kuhusika, na kuwawezesha Warohingya waliokimbia makazi yao kurejea. Msako huo uliwafanya watu takriban 700,000 kukimbilia Bangladesh, NPR iliripoti. Gambia, iliyofungua kesi hiyo mwaka 2019, iliitaka Myanmar kutekeleza uamuzi huo kikamilifu na bila kuchelewa, na Katibu Mkuu wa UN, António Guterres, aliuita uamuzi huo utambuzi wenye nguvu kwa waathiriwa, Al Jazeera na Reuters ziliripoti. Serikali ya Myanmar inayoungwa mkono na jeshi ilikuwa haijajibu wakati NPR ilipochapisha ripoti yake."
      },
      why: {
        en: "Displacement that outlasts a crisis: many Rohingya have lived for years in camps near Cox's Bazar, in what NPR calls the world's largest refugee settlement, and the order to enable their return bears on how Myanmar's neighbours and ASEAN approach its crisis.",
        fr: "Un déplacement qui dure au-delà de la crise : de nombreux Rohingyas vivent depuis des années dans des camps près de Cox's Bazar, ce que NPR décrit comme le plus grand site de réfugiés au monde, et l'ordre de permettre leur retour pèse sur la manière dont les voisins du Myanmar et l'ASEAN abordent sa crise.",
        th: "การพลัดถิ่นที่ยืดเยื้อเกินกว่าวิกฤต ชาวโรฮีนจาจำนวนมากอาศัยอยู่ในค่ายใกล้ค็อกซ์บาซาร์มาหลายปี ซึ่ง NPR เรียกว่าเป็นนิคมผู้ลี้ภัยที่ใหญ่ที่สุดในโลก และคำสั่งให้พวกเขากลับได้ส่งผลต่อแนวทางที่ประเทศเพื่อนบ้านของเมียนมาและอาเซียนใช้รับมือวิกฤตของเมียนมา",
        sw: "Ukimbizi unaodumu kuliko mgogoro wenyewe: Warohingya wengi wameishi kwa miaka mingi katika kambi karibu na Cox's Bazar, ambazo NPR inaziita makazi makubwa zaidi ya wakimbizi duniani, na amri ya kuwawezesha kurejea inahusu jinsi majirani wa Myanmar na ASEAN wanavyoushughulikia mgogoro wake."
      },
      sources: [
        { name: "NPR (via OPB)", date: "2026-11-19", url: "https://www.opb.org/article/2026/11/19/top-u-n-court-rules-myanmar-committed-genocide-against-rohingya/" },
        { name: "Al Jazeera (Reuters)", date: "2026-11-19", url: "https://www.aljazeera.com/news/2026/11/19/world-reacts-to-icj-finding-myanmar-guilty-of-genocide-against-rohingya" }
      ]
    },
    {
      id: "sudan-drones",
      date: "2026-11-17",
      region: "nile",
      photo: "khartoum-confluence",
      team: ["ohn", "aaron"],
      topic: "peace",
      title: {
        en: "Sudan: drones caused most of the 2,230 civilian deaths the UN verified from January to October",
        fr: "Soudan : les drones ont causé la plupart des 2 230 morts civiles vérifiées par l'ONU de janvier à octobre",
        th: "ซูดาน: โดรนเป็นสาเหตุการเสียชีวิตส่วนใหญ่ของพลเรือน 2,230 คนที่สหประชาชาติยืนยันระหว่างเดือนมกราคมถึงตุลาคม",
        sw: "Sudan: droni zilisababisha vifo vingi kati ya vifo 2,230 vya raia vilivyothibitishwa na UN kuanzia Januari hadi Oktoba"
      },
      summary: {
        en: "The UN Human Rights Office said on 17 November that at least 2,230 civilians were killed in Sudan between January and October 2026, more than 1,630 of them in drone strikes, and that the real toll is likely considerably higher, Radio Dabanga reported. Kordofan accounted for more than two-thirds of verified deaths and Darfur for most of the rest. In the first half of the year the office recorded at least 39 drone strikes on markets, 20 on civilian vehicles, 17 on fuel tankers and depots and 16 on health facilities. The High Commissioner, Volker Türk, said the violations may amount to war crimes.",
        fr: "Le Haut-Commissariat de l'ONU aux droits de l'homme a indiqué le 17 novembre qu'au moins 2 230 civils ont été tués au Soudan entre janvier et octobre 2026, dont plus de 1 630 dans des frappes de drones, et que le bilan réel est probablement bien plus élevé, a rapporté Radio Dabanga. Le Kordofan représente plus des deux tiers des décès vérifiés et le Darfour l'essentiel du reste. Au premier semestre, le bureau a recensé au moins 39 frappes de drones sur des marchés, 20 sur des véhicules civils, 17 sur des camions-citernes et dépôts de carburant et 16 sur des établissements de santé. Le Haut-Commissaire, Volker Türk, a déclaré que ces violations pourraient constituer des crimes de guerre.",
        th: "สำนักงานข้าหลวงใหญ่สิทธิมนุษยชนแห่งสหประชาชาติระบุเมื่อวันที่ 17 พฤศจิกายนว่า มีพลเรือนเสียชีวิตในซูดานอย่างน้อย 2,230 คนระหว่างเดือนมกราคมถึงตุลาคม 2026 ในจำนวนนี้กว่า 1,630 คนเสียชีวิตจากการโจมตีด้วยโดรน และยอดจริงน่าจะสูงกว่านี้มาก Radio Dabanga รายงาน ภูมิภาคคอร์โดฟานคิดเป็นกว่าสองในสามของผู้เสียชีวิตที่ได้รับการยืนยัน และดาร์ฟูร์คิดเป็นส่วนใหญ่ของที่เหลือ ในครึ่งแรกของปี สำนักงานบันทึกการโจมตีด้วยโดรนต่อตลาดอย่างน้อย 39 ครั้ง ต่อยานพาหนะพลเรือน 20 ครั้ง ต่อรถบรรทุกน้ำมันและคลังน้ำมัน 17 ครั้ง และต่อสถานพยาบาล 16 ครั้ง นายโฟล์คเกอร์ เทิร์ก ข้าหลวงใหญ่ฯ กล่าวว่าการละเมิดเหล่านี้อาจเข้าข่ายอาชญากรรมสงคราม",
        sw: "Ofisi ya Haki za Binadamu ya UN ilisema tarehe 17 Novemba kwamba raia wasiopungua 2,230 waliuawa nchini Sudan kati ya Januari na Oktoba 2026, zaidi ya 1,630 kati yao katika mashambulizi ya droni, na kwamba idadi halisi huenda ni kubwa zaidi, Radio Dabanga iliripoti. Kordofan ilichangia zaidi ya theluthi mbili ya vifo vilivyothibitishwa na Darfur sehemu kubwa ya vilivyobaki. Katika nusu ya kwanza ya mwaka ofisi hiyo ilirekodi mashambulizi ya droni yasiyopungua 39 dhidi ya masoko, 20 dhidi ya magari ya raia, 17 dhidi ya malori na maghala ya mafuta na 16 dhidi ya vituo vya afya. Kamishna Mkuu, Volker Türk, alisema ukiukaji huo unaweza kufikia kiwango cha uhalifu wa kivita."
      },
      why: {
        en: "Conflict and the services people depend on: strikes on markets, fuel and health facilities hit displaced families and host communities alike, in a war that has displaced more than 14 million people, according to UN figures cited by Reuters.",
        fr: "Le conflit et les services dont la population dépend : les frappes sur les marchés, le carburant et les établissements de santé touchent autant les familles déplacées que les communautés d'accueil, dans une guerre qui a déplacé plus de 14 millions de personnes, selon des chiffres de l'ONU cités par Reuters.",
        th: "ความขัดแย้งกับบริการที่ผู้คนพึ่งพา การโจมตีตลาด เชื้อเพลิง และสถานพยาบาล ส่งผลทั้งต่อครอบครัวผู้พลัดถิ่นและชุมชนที่รองรับ ในสงครามที่ทำให้ผู้คนพลัดถิ่นกว่า 14 ล้านคน ตามตัวเลขของสหประชาชาติที่รอยเตอร์อ้างถึง",
        sw: "Mgogoro na huduma ambazo watu wanazitegemea: mashambulizi dhidi ya masoko, mafuta na vituo vya afya yanaathiri familia zilizokimbia makazi na jamii zinazowapokea, katika vita vilivyowahamisha zaidi ya watu milioni 14, kwa mujibu wa takwimu za UN zilizonukuliwa na Reuters."
      },
      sources: [
        { name: "Radio Dabanga (UN Human Rights Office)", date: "2026-11-17", url: "https://www.dabangasudan.org/en/all-news/article/un-2230-civilian-deaths-in-sudan-in-10-months-most-from-drone-strikes" },
        { name: "UN Geneva press briefing", date: "2026-11-17", url: "https://transcripts.un.org/en/briefing/geneva/2026-11-17.txt" },
        { name: "Reuters (via 93.3 The Drive)", date: "2026-11-04", url: "https://www.933thedrive.com/2026/11/04/ethiopia-expels-sudanese-diplomats-after-fresh-allegations-of-support-for-rsf/" }
      ]
    },
    {
      id: "ethiopia-refugee-children",
      date: "2026-11-16",
      region: "nile",
      photo: "au-addis",
      team: ["albert", "yidnekachew"],
      topic: "refugees",
      title: {
        en: "Ethiopia: aid cuts leave refugee children more exposed to trafficking and child labour, UNHCR study finds",
        fr: "Éthiopie : les coupes dans l'aide exposent davantage les enfants réfugiés à la traite et au travail des enfants, selon une étude du HCR",
        th: "เอธิโอเปีย: การตัดงบความช่วยเหลือทำให้เด็กผู้ลี้ภัยเสี่ยงต่อการค้ามนุษย์และการใช้แรงงานเด็กมากขึ้น ผลศึกษาของ UNHCR ระบุ",
        sw: "Ethiopia: kupunguzwa kwa misaada kunawaweka watoto wakimbizi katika hatari zaidi ya usafirishaji haramu na ajira kwa watoto, utafiti wa UNHCR wabaini"
      },
      summary: {
        en: "A study by UNHCR and Oxford University, reported by UN News on 16 November, finds that children are 52 per cent of Ethiopia's 1.1 million refugees, who come mostly from South Sudan, Somalia, Eritrea and Sudan, and that 31,000 children are separated from their parents or guardians. In 2025 UNHCR's Ethiopia operation was less than one-third funded and only 18 per cent of planned child protection needs were covered; children helped with family tracing and reunification fell from 4,071 in 2024 to 1,887 in 2025. Funding shortfalls affected 57 primary schools serving some 110,000 refugee children, and field observations point to more child labour, including in farming and informal mining.",
        fr: "Une étude du HCR et de l'Université d'Oxford, rapportée par ONU Info le 16 novembre, montre que les enfants représentent 52 % des 1,1 million de réfugiés en Éthiopie, venus surtout du Soudan du Sud, de Somalie, d'Érythrée et du Soudan, et que 31 000 enfants sont séparés de leurs parents ou tuteurs. En 2025, l'opération du HCR en Éthiopie était financée à moins d'un tiers et seuls 18 % des besoins prévus en protection de l'enfance étaient couverts ; le nombre d'enfants aidés pour la recherche et la réunification familiales est passé de 4 071 en 2024 à 1 887 en 2025. Le manque de fonds a touché 57 écoles primaires accueillant quelque 110 000 enfants réfugiés, et les observations de terrain signalent davantage de travail des enfants, notamment dans l'agriculture et l'exploitation minière informelle.",
        th: "ผลศึกษาของ UNHCR และมหาวิทยาลัยออกซฟอร์ด ซึ่ง UN News รายงานเมื่อวันที่ 16 พฤศจิกายน พบว่าเด็กคิดเป็นร้อยละ 52 ของผู้ลี้ภัย 1.1 ล้านคนในเอธิโอเปีย ซึ่งส่วนใหญ่มาจากซูดานใต้ โซมาเลีย เอริเทรีย และซูดาน และมีเด็ก 31,000 คนที่พลัดพรากจากพ่อแม่หรือผู้ปกครอง ในปี 2025 ปฏิบัติการของ UNHCR ในเอธิโอเปียได้รับเงินทุนไม่ถึงหนึ่งในสาม และครอบคลุมความต้องการด้านการคุ้มครองเด็กตามแผนได้เพียงร้อยละ 18 จำนวนเด็กที่ได้รับความช่วยเหลือในการติดตามครอบครัวและการกลับไปอยู่กับครอบครัวลดลงจาก 4,071 คนในปี 2024 เหลือ 1,887 คนในปี 2025 การขาดเงินทุนกระทบโรงเรียนประถม 57 แห่งที่รองรับเด็กผู้ลี้ภัยราว 110,000 คน และการสังเกตการณ์ภาคสนามชี้ว่ามีการใช้แรงงานเด็กเพิ่มขึ้น รวมถึงในภาคเกษตรและการทำเหมืองนอกระบบ",
        sw: "Utafiti wa UNHCR na Chuo Kikuu cha Oxford, ulioripotiwa na UN News tarehe 16 Novemba, unabaini kuwa watoto ni asilimia 52 ya wakimbizi milioni 1.1 nchini Ethiopia, ambao wengi wanatoka Sudan Kusini, Somalia, Eritrea na Sudan, na kwamba watoto 31,000 wametengana na wazazi au walezi wao. Mwaka 2025 operesheni ya UNHCR nchini Ethiopia ilifadhiliwa chini ya theluthi moja na ni asilimia 18 tu ya mahitaji yaliyopangwa ya ulinzi wa watoto yaliyoshughulikiwa; idadi ya watoto waliosaidiwa kutafuta na kuunganishwa na familia zao ilishuka kutoka 4,071 mwaka 2024 hadi 1,887 mwaka 2025. Upungufu wa fedha uliathiri shule 57 za msingi zinazohudumia takriban watoto wakimbizi 110,000, na uchunguzi wa nyanjani unaonyesha ongezeko la ajira kwa watoto, ikiwemo katika kilimo na uchimbaji madini usio rasmi."
      },
      why: {
        en: "Hosting as aid shrinks: Ethiopia hosts more than one million refugees, many of them from South Sudan and Sudan, and UNHCR says its child protection programmes worldwide were only 25 per cent funded as of July 2026.",
        fr: "L'accueil quand l'aide diminue : l'Éthiopie accueille plus d'un million de réfugiés, dont beaucoup viennent du Soudan du Sud et du Soudan, et le HCR indique que ses programmes de protection de l'enfance dans le monde n'étaient financés qu'à 25 % en juillet 2026.",
        th: "การรองรับผู้ลี้ภัยเมื่อความช่วยเหลือลดลง เอธิโอเปียรองรับผู้ลี้ภัยกว่าหนึ่งล้านคน ซึ่งจำนวนมากมาจากซูดานใต้และซูดาน และ UNHCR ระบุว่าโครงการคุ้มครองเด็กทั่วโลกของตนได้รับเงินทุนเพียงร้อยละ 25 ณ เดือนกรกฎาคม 2026",
        sw: "Kuhifadhi wakimbizi msaada unapopungua: Ethiopia inahifadhi zaidi ya wakimbizi milioni moja, wengi wao kutoka Sudan Kusini na Sudan, na UNHCR inasema programu zake za ulinzi wa watoto duniani kote zilifadhiliwa kwa asilimia 25 tu kufikia Julai 2026."
      },
      sources: [
        { name: "UN News (UNHCR)", date: "2026-11-16", url: "https://news.un.org/en/story/2026/11/1168811" }
      ]
    },
    {
      id: "drc-south-kivu",
      date: "2026-11-18",
      region: "gl",
      photo: "bukavu",
      team: ["aaron", "ohn"],
      topic: "peace",
      title: {
        en: "Eastern DR Congo: rebel offensive in South Kivu displaces more than 323,000 people, OCHA says",
        fr: "Est de la RD Congo : une offensive rebelle au Sud-Kivu déplace plus de 323 000 personnes, selon l'OCHA",
        th: "คองโกตะวันออก: การรุกของกลุ่มกบฏในจังหวัดคิวูใต้ทำให้ผู้คนกว่า 323,000 คนต้องพลัดถิ่น OCHA ระบุ",
        sw: "Mashariki mwa DR Kongo: mashambulizi ya waasi Kivu Kusini yawafurusha zaidi ya watu 323,000, OCHA yasema"
      },
      summary: {
        en: "Fighters of the FRN, the new name of AFC/M23, launched an offensive in South Kivu on the night of 6 to 7 November, crossed Kahuzi-Biega National Park and took several localities on the road from Bukavu towards Walikale, including Bunyakiri, AFP and RFI reported. OCHA said on 11 November that more than 323,000 people, about 54,000 households, fled their homes in Kalehe and Kabare territories after clashes between the FRN and the army from 6 to 9 November, that at least five civilians were killed in Bunyakiri, and that no aid had yet reached the newly displaced, Actualité.cd reported; the administrator of Kalehe territory had earlier put the number above 160,000, RFI said. AFP said front lines had been relatively stable since DR Congo and Rwanda signed a US-brokered peace deal in December.",
        fr: "Les combattants du FRN, nouveau nom de l'AFC/M23, ont lancé une offensive au Sud-Kivu dans la nuit du 6 au 7 novembre, traversé le parc national de Kahuzi-Biega et pris plusieurs localités sur la route de Bukavu vers Walikale, dont Bunyakiri, selon l'AFP et RFI. L'OCHA a indiqué le 11 novembre que plus de 323 000 personnes, soit environ 54 000 ménages, ont fui leurs foyers dans les territoires de Kalehe et de Kabare après des affrontements entre le FRN et l'armée du 6 au 9 novembre, qu'au moins cinq civils ont été tués à Bunyakiri et qu'aucune aide n'avait encore atteint les nouveaux déplacés, a rapporté Actualité.cd ; l'administrateur du territoire de Kalehe avait auparavant avancé le chiffre de plus de 160 000, selon RFI. L'AFP indique que les lignes de front étaient relativement stables depuis la signature en décembre d'un accord de paix entre la RD Congo et le Rwanda, négocié par les États-Unis.",
        th: "นักรบกลุ่ม FRN ซึ่งเป็นชื่อใหม่ของ AFC/M23 เปิดการรุกในจังหวัดคิวูใต้ในคืนวันที่ 6 ต่อเนื่องวันที่ 7 พฤศจิกายน ข้ามอุทยานแห่งชาติคาฮูซี-บีเอกา และยึดหลายพื้นที่บนเส้นทางจากบูคาวูไปยังวาลีกาเล รวมถึงบุนยากีรี ตามรายงานของ AFP และ RFI OCHA ระบุเมื่อวันที่ 11 พฤศจิกายนว่า ผู้คนกว่า 323,000 คน หรือราว 54,000 ครัวเรือน หนีออกจากบ้านในเขตคาเลเฮและคาบาเร หลังการปะทะระหว่าง FRN กับกองทัพระหว่างวันที่ 6 ถึง 9 พฤศจิกายน พลเรือนอย่างน้อย 5 คนถูกสังหารที่บุนยากีรี และยังไม่มีความช่วยเหลือไปถึงผู้พลัดถิ่นกลุ่มใหม่ Actualité.cd รายงาน ก่อนหน้านี้ผู้บริหารเขตคาเลเฮประเมินตัวเลขไว้ที่กว่า 160,000 คน RFI รายงาน AFP ระบุว่าแนวหน้าค่อนข้างสงบนับตั้งแต่คองโกและรวันดาลงนามข้อตกลงสันติภาพที่สหรัฐฯ เป็นตัวกลางเมื่อเดือนธันวาคม",
        sw: "Wapiganaji wa FRN, jina jipya la AFC/M23, walianzisha mashambulizi Kivu Kusini usiku wa tarehe 6 kuamkia 7 Novemba, wakavuka Hifadhi ya Taifa ya Kahuzi-Biega na kuteka maeneo kadhaa kwenye barabara kutoka Bukavu kuelekea Walikale, ikiwemo Bunyakiri, AFP na RFI ziliripoti. OCHA ilisema tarehe 11 Novemba kwamba zaidi ya watu 323,000, takriban kaya 54,000, walikimbia makazi yao katika maeneo ya Kalehe na Kabare baada ya mapigano kati ya FRN na jeshi kuanzia tarehe 6 hadi 9 Novemba, kwamba raia wasiopungua watano waliuawa Bunyakiri, na kwamba bado hakuna msaada uliokuwa umewafikia wakimbizi wapya wa ndani, Actualité.cd iliripoti; awali msimamizi wa eneo la Kalehe alikadiria idadi hiyo kuwa zaidi ya 160,000, RFI ilisema. AFP ilisema mistari ya mapigano ilikuwa tulivu kiasi tangu DR Kongo na Rwanda zilipotia saini mkataba wa amani uliosimamiwa na Marekani mwezi Desemba."
      },
      why: {
        en: "Conflict that crosses borders: on 18 November Al Jazeera reported that the Congolese army says it halted the advance at Bulambika and is preparing a counteroffensive, and that an AU Peace and Security Council communiqué of 26 October found implementation of the Washington and Doha peace processes still limited. New displacement adds to the needs of a region already facing Ebola and hunger.",
        fr: "Un conflit qui franchit les frontières : le 18 novembre, Al Jazeera a rapporté que l'armée congolaise dit avoir stoppé l'avancée à Bulambika et préparer une contre-offensive, et qu'un communiqué du Conseil de paix et de sécurité de l'UA du 26 octobre jugeait encore limitée la mise en œuvre des processus de paix de Washington et de Doha. Les nouveaux déplacements s'ajoutent aux besoins d'une région déjà touchée par Ebola et la faim.",
        th: "ความขัดแย้งที่ข้ามพรมแดน เมื่อวันที่ 18 พฤศจิกายน Al Jazeera รายงานว่ากองทัพคองโกระบุว่าได้หยุดการรุกคืบที่บูลัมบิกาแล้วและกำลังเตรียมการตอบโต้ และแถลงการณ์ของคณะมนตรีสันติภาพและความมั่นคงแห่งสหภาพแอฟริกาเมื่อวันที่ 26 ตุลาคมระบุว่าการปฏิบัติตามกระบวนการสันติภาพวอชิงตันและโดฮายังมีจำกัด การพลัดถิ่นครั้งใหม่ซ้ำเติมความต้องการของภูมิภาคที่เผชิญทั้งอีโบลาและความหิวโหยอยู่แล้ว",
        sw: "Mgogoro unaovuka mipaka: tarehe 18 Novemba Al Jazeera iliripoti kwamba jeshi la Kongo linasema limesimamisha kusonga mbele kwa wapiganaji huko Bulambika na linajiandaa kwa mashambulizi ya kujibu, na kwamba taarifa ya Baraza la Amani na Usalama la AU ya tarehe 26 Oktoba ilisema utekelezaji wa michakato ya amani ya Washington na Doha bado ni mdogo. Watu wapya wanaokimbia makazi yao wanaongeza mahitaji ya eneo ambalo tayari linakabiliwa na Ebola na njaa."
      },
      sources: [
        { name: "Al Jazeera", date: "2026-11-18", url: "https://www.aljazeera.com/news/2026/11/18/dr-congos-rival-peace-efforts-fail-to-halt-violence-in-the-east" },
        { name: "Actualité.cd (OCHA)", date: "2026-11-12", url: "https://actualite.cd/2026/11/12/rdc-la-suite-dintenses-combats-au-sud-kivu-plus-de-323-000-deplaces-enregistres-en" },
        { name: "RFI (via PressAfrik)", date: "2026-11-10", url: "https://pressafrik.com/RDC-offensive-des-combattants-du-FRN-au-Sud-Kivu-plusieurs-localites-tombent-sous-leur-controle_a314369.html" },
        { name: "AFP (via New Vision)", date: "2026-11-09", url: "https://www.newvision.co.ug/category/world/dr-congo-armed-rebellion-advances-in-eastern-NV_243896_112026" }
      ]
    },
    {
      id: "children-conflict",
      date: "2026-11-19",
      region: "gl",
      photo: "bukavu",
      team: ["ohn", "albert"],
      topic: "peace",
      title: {
        en: "Two in five African children lived near armed conflict in 2025, Save the Children says",
        fr: "Deux enfants africains sur cinq vivaient près d'un conflit armé en 2025, selon Save the Children",
        th: "เด็กในแอฟริกาสองในห้าคนอาศัยอยู่ใกล้พื้นที่ความขัดแย้งทางอาวุธในปี 2025 องค์กรเซฟเดอะชิลเดรนระบุ",
        sw: "Watoto wawili kati ya watano barani Afrika waliishi karibu na vita mwaka 2025, Save the Children yasema"
      },
      summary: {
        en: "About 260 million children in Africa, two in five, lived within 50 km of armed conflict in 2025, nearly 20 percent more than in 2024, according to a Save the Children report released on 19 November with research by the Peace Research Institute Oslo, RFI reported. Africa accounted for 44 percent of such children worldwide. The report says verified cases of sexual violence against children rose from 358 to 592 in DR Congo and from 74 to 193 in Sudan between 2024 and 2025, and that around 86 percent of verified cases were in African conflict zones.",
        fr: "Environ 260 millions d'enfants en Afrique, soit deux sur cinq, vivaient à moins de 50 km d'un conflit armé en 2025, près de 20 % de plus qu'en 2024, selon un rapport de Save the Children publié le 19 novembre à partir de recherches de l'Institut de recherche sur la paix d'Oslo, a rapporté RFI. L'Afrique comptait 44 % de ces enfants dans le monde. Selon le rapport, les cas vérifiés de violences sexuelles contre des enfants sont passés de 358 à 592 en RD Congo et de 74 à 193 au Soudan entre 2024 et 2025, et environ 86 % des cas vérifiés concernaient des zones de conflit africaines.",
        th: "รายงานขององค์กรเซฟเดอะชิลเดรนที่เผยแพร่เมื่อวันที่ 19 พฤศจิกายน โดยใช้งานวิจัยของสถาบันวิจัยสันติภาพออสโล ระบุว่าในปี 2025 เด็กในแอฟริการาว 260 ล้านคน หรือสองในห้าคน อาศัยอยู่ภายในระยะ 50 กิโลเมตรจากพื้นที่ความขัดแย้งทางอาวุธ เพิ่มขึ้นเกือบร้อยละ 20 จากปี 2024 สำนักข่าว RFI รายงาน แอฟริกาคิดเป็นร้อยละ 44 ของเด็กกลุ่มนี้ทั่วโลก รายงานระบุว่าระหว่างปี 2024 ถึง 2025 กรณีความรุนแรงทางเพศต่อเด็กที่ได้รับการยืนยันเพิ่มจาก 358 เป็น 592 กรณีในคองโก และจาก 74 เป็น 193 กรณีในซูดาน และราวร้อยละ 86 ของกรณีที่ยืนยันแล้วเกิดในพื้นที่ความขัดแย้งในแอฟริกา",
        sw: "Takriban watoto milioni 260 barani Afrika, yaani wawili kati ya watano, waliishi ndani ya kilomita 50 kutoka eneo la vita mwaka 2025, karibu asilimia 20 zaidi kuliko mwaka 2024, kwa mujibu wa ripoti ya Save the Children iliyotolewa tarehe 19 Novemba kwa utafiti wa Taasisi ya Utafiti wa Amani ya Oslo, RFI iliripoti. Afrika ilikuwa na asilimia 44 ya watoto hao duniani. Ripoti inasema matukio yaliyothibitishwa ya ukatili wa kingono dhidi ya watoto yaliongezeka kutoka 358 hadi 592 nchini DR Kongo na kutoka 74 hadi 193 nchini Sudan kati ya 2024 na 2025, na kwamba takriban asilimia 86 ya matukio yaliyothibitishwa yalikuwa katika maeneo ya vita barani Afrika."
      },
      why: {
        en: "Children near conflict are among those most often displaced, within their country and across borders. The report counts verified incidents of aid being blocked rising from 509 in 2015 to 8,322 in 2025, which bears on protection and hosting as aid shrinks.",
        fr: "Les enfants proches des conflits sont parmi les plus souvent déplacés, dans leur pays comme au-delà des frontières. Le rapport recense des incidents vérifiés d'entrave à l'aide passés de 509 en 2015 à 8 322 en 2025, ce qui pèse sur la protection et l'accueil alors que l'aide diminue.",
        th: "เด็กที่อยู่ใกล้พื้นที่ความขัดแย้งเป็นกลุ่มที่ต้องพลัดถิ่นบ่อยที่สุดกลุ่มหนึ่ง ทั้งภายในประเทศและข้ามพรมแดน รายงานนับเหตุการณ์ที่ความช่วยเหลือถูกขัดขวางซึ่งได้รับการยืนยันว่าเพิ่มจาก 509 ครั้งในปี 2015 เป็น 8,322 ครั้งในปี 2025 ซึ่งเกี่ยวข้องกับการคุ้มครองและการรองรับผู้ลี้ภัยในขณะที่ความช่วยเหลือลดลง",
        sw: "Watoto walio karibu na vita ni miongoni mwa wanaokimbia makazi yao mara nyingi zaidi, ndani ya nchi zao na kuvuka mipaka. Ripoti inahesabu matukio yaliyothibitishwa ya misaada kuzuiwa yakiongezeka kutoka 509 mwaka 2015 hadi 8,322 mwaka 2025, jambo linalohusu ulinzi na uhifadhi wa wakimbizi wakati misaada inapungua."
      },
      sources: [
        { name: "RFI (via allAfrica, Save the Children)", date: "2026-11-19", url: "https://allafrica.com/stories/202611200104.html" }
      ]
    },
    {
      id: "eac-el-nino",
      date: "2026-11-09",
      region: "gl",
      photo: "lake-victoria",
      team: ["yidnekachew", "dominick"],
      title: {
        en: "East Africa: EAC ministers adopt a regional El Niño plan as forecasters expect it to last into 2027",
        fr: "Afrique de l'Est : les ministres de l'EAC adoptent un plan régional contre El Niño, attendu jusqu'en 2027",
        th: "แอฟริกาตะวันออก: รัฐมนตรีประชาคมแอฟริกาตะวันออกรับรองแผนรับมือเอลนีโญระดับภูมิภาค ขณะที่นักพยากรณ์คาดว่าจะลากยาวถึงปี 2027",
        sw: "Afrika Mashariki: mawaziri wa EAC wapitisha mpango wa kikanda wa El Niño huku wataalamu wakitarajia uendelee hadi 2027"
      },
      summary: {
        en: "On 6 November ministers of the East African Community adopted a regional El Niño Emergency Preparedness and Response Plan at an extraordinary meeting chaired by Uganda's Rebecca Alitwala Kadaga, chair of the EAC Council of Ministers, the EAC said. The IGAD Climate Prediction and Applications Centre (ICPAC) told the meeting that El Niño is firmly established, with \"a near 100% probability\" that it will last through February 2027, and that above-normal October–December rains are likely. The plan covers early warning, health, infrastructure and tourism, agriculture and food security, and climate mobility and displacement. Ministers asked the EAC Secretariat to prepare the implementation plan by 30 November.",
        fr: "Le 6 novembre, les ministres de la Communauté d'Afrique de l'Est ont adopté un plan régional de préparation et de réponse d'urgence à El Niño, lors d'une réunion extraordinaire présidée par l'Ougandaise Rebecca Alitwala Kadaga, présidente du Conseil des ministres de l'EAC, a indiqué l'EAC. Le Centre de prévisions et d'applications climatiques de l'IGAD (ICPAC) a déclaré que El Niño est bien installé, avec une probabilité « proche de 100 % » qu'il dure jusqu'en février 2027, et que des pluies supérieures à la normale sont probables d'octobre à décembre. Le plan couvre l'alerte précoce, la santé, les infrastructures et le tourisme, l'agriculture et la sécurité alimentaire, ainsi que la mobilité climatique et les déplacements. Les ministres ont demandé au Secrétariat de l'EAC de préparer le plan de mise en œuvre d'ici le 30 novembre.",
        th: "เมื่อวันที่ 6 พฤศจิกายน รัฐมนตรีของประชาคมแอฟริกาตะวันออก (EAC) รับรองแผนเตรียมความพร้อมและรับมือภาวะฉุกเฉินจากเอลนีโญระดับภูมิภาค ในการประชุมวิสามัญซึ่งมีนางรีเบกกา อาลิตวาลา คาดากา จากยูกันดา ประธานคณะมนตรีรัฐมนตรีของ EAC เป็นประธาน EAC ระบุ ศูนย์พยากรณ์และประยุกต์ใช้ข้อมูลภูมิอากาศของ IGAD (ICPAC) แจ้งที่ประชุมว่าเอลนีโญก่อตัวอย่างชัดเจนแล้ว โดยมี \"ความเป็นไปได้เกือบร้อยละ 100\" ที่จะดำเนินต่อไปจนถึงเดือนกุมภาพันธ์ 2027 และมีแนวโน้มว่าฝนช่วงตุลาคมถึงธันวาคมจะตกมากกว่าปกติ แผนนี้ครอบคลุมการเตือนภัยล่วงหน้า สาธารณสุข โครงสร้างพื้นฐานและการท่องเที่ยว เกษตรและความมั่นคงทางอาหาร รวมถึงการย้ายถิ่นจากสภาพภูมิอากาศและการพลัดถิ่น รัฐมนตรีขอให้สำนักเลขาธิการ EAC จัดทำแผนปฏิบัติการให้เสร็จภายในวันที่ 30 พฤศจิกายน",
        sw: "Tarehe 6 Novemba mawaziri wa Jumuiya ya Afrika Mashariki walipitisha Mpango wa Kikanda wa Kujiandaa na Kukabiliana na Dharura ya El Niño katika mkutano maalum ulioongozwa na Rebecca Alitwala Kadaga wa Uganda, mwenyekiti wa Baraza la Mawaziri la EAC, EAC ilisema. Kituo cha IGAD cha Utabiri na Matumizi ya Taarifa za Hali ya Hewa (ICPAC) kiliuambia mkutano kwamba El Niño imeshajiimarisha, na kuna \"uwezekano wa karibu asilimia 100\" kwamba itaendelea hadi Februari 2027, na kwamba mvua za juu ya wastani zinatarajiwa kati ya Oktoba na Desemba. Mpango unahusu tahadhari za mapema, afya, miundombinu na utalii, kilimo na usalama wa chakula, pamoja na uhamaji unaosababishwa na tabianchi na watu kukimbia makazi yao. Mawaziri waliiagiza Sekretarieti ya EAC kuandaa mpango wa utekelezaji kufikia tarehe 30 Novemba."
      },
      why: {
        en: "Floods move people and spread disease across borders. Tanzania's Daily News reported that the 2023/2024 season caused losses of more than 2 billion US dollars and displaced more than 1.5 million people in the region, and the meeting stressed disease surveillance for cholera and malaria linked to flooding.",
        fr: "Les inondations déplacent des populations et propagent des maladies au-delà des frontières. Le Daily News tanzanien a rapporté que la saison 2023/2024 a causé plus de 2 milliards de dollars de pertes et déplacé plus de 1,5 million de personnes dans la région, et la réunion a insisté sur la surveillance du choléra et du paludisme liés aux inondations.",
        th: "น้ำท่วมทำให้ผู้คนต้องย้ายถิ่นและทำให้โรคแพร่ข้ามพรมแดน หนังสือพิมพ์ Daily News ของแทนซาเนียรายงานว่าฤดูกาลปี 2023/2024 ก่อความเสียหายกว่า 2,000 ล้านดอลลาร์สหรัฐ และทำให้ผู้คนกว่า 1.5 ล้านคนในภูมิภาคต้องพลัดถิ่น ที่ประชุมจึงเน้นการเฝ้าระวังอหิวาตกโรคและมาลาเรียที่เกี่ยวข้องกับน้ำท่วม",
        sw: "Mafuriko huwahamisha watu na kusambaza magonjwa kuvuka mipaka. Gazeti la Daily News la Tanzania liliripoti kuwa msimu wa 2023/2024 ulisababisha hasara ya zaidi ya dola bilioni 2 za Marekani na kuwahamisha zaidi ya watu milioni 1.5 katika kanda, na mkutano ulisisitiza ufuatiliaji wa kipindupindu na malaria yanayohusiana na mafuriko."
      },
      sources: [
        { name: "East African Community (via APO)", date: "2026-11-09", url: "https://africa.com/apo/east-african-community-eac-ministers-adopt-regional-el-nino-emergency-preparedness-and-response-plan" },
        { name: "Daily News (Tanzania)", date: "2026-11-08", url: "https://dailynews.co.tz/?p=169370" },
        { name: "Daily News (Tanzania)", date: "2026-11-06", url: "https://dailynews.co.tz/?p=169206" }
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
      id: "rwanda-return-hub",
      date: "2026-11-17",
      region: "gl",
      photo: "kigali",
      team: ["aaron", "albert"],
      topic: "diplomacy",
      title: {
        en: "Five European countries plan a centre in Rwanda for rejected asylum-seekers, starting next year",
        fr: "Cinq pays européens prévoient un centre au Rwanda pour les demandeurs d'asile déboutés, dès l'an prochain",
        th: "ห้าประเทศยุโรปวางแผนตั้งศูนย์ในรวันดาสำหรับผู้ขอลี้ภัยที่ถูกปฏิเสธ เริ่มปีหน้า",
        sw: "Nchi tano za Ulaya zapanga kituo nchini Rwanda kwa waomba hifadhi waliokataliwa, kuanzia mwaka ujao"
      },
      summary: {
        en: "Austria, Denmark, Germany, Greece and the Netherlands announced plans on 16 November, at a migration conference in Vienna, for a \"return hub\" in Rwanda for people whose asylum claims have been rejected in Europe, AP reported. Austria's chancellor said the first centre would be set up next year, and Denmark's immigration minister said a full agreement with Rwanda is expected within the next few months; no numbers were given and no agreement has been signed. Rwanda's interior minister, Vincent Biruta, said arrivals would be offered voluntary return home, integration in Rwanda or relocation to a country where they have a right to live, with UNHCR involved and an independent monitoring mechanism. On 17 November the UN human rights chief, Volker Türk, raised concerns about the human rights risks of the proposal; his office has not seen its text, UN News reported.",
        fr: "L'Autriche, le Danemark, l'Allemagne, la Grèce et les Pays-Bas ont annoncé le 16 novembre, lors d'une conférence sur les migrations à Vienne, des projets de « centre de retour » au Rwanda pour les personnes dont la demande d'asile a été rejetée en Europe, a rapporté l'AP. Le chancelier autrichien a indiqué que le premier centre serait créé l'an prochain, et le ministre danois de l'Immigration qu'un accord complet avec le Rwanda est attendu dans les prochains mois ; aucun chiffre n'a été donné et aucun accord n'a été signé. Le ministre rwandais de l'Intérieur, Vincent Biruta, a déclaré que les personnes accueillies se verraient proposer un retour volontaire chez elles, une intégration au Rwanda ou une réinstallation dans un pays où elles ont le droit de vivre, avec la participation du HCR et un mécanisme de suivi indépendant. Le 17 novembre, le Haut-Commissaire de l'ONU aux droits de l'homme, Volker Türk, s'est inquiété des risques du projet pour les droits humains ; son bureau n'en a pas vu le texte, a rapporté ONU Info.",
        th: "ออสเตรีย เดนมาร์ก เยอรมนี กรีซ และเนเธอร์แลนด์ ประกาศแผนเมื่อวันที่ 16 พฤศจิกายนในการประชุมด้านการย้ายถิ่นที่กรุงเวียนนา ว่าจะตั้ง \"ศูนย์ส่งกลับ\" ในรวันดาสำหรับผู้ที่คำขอลี้ภัยถูกปฏิเสธในยุโรป AP รายงาน นายกรัฐมนตรีออสเตรียกล่าวว่าศูนย์แห่งแรกจะจัดตั้งในปีหน้า และรัฐมนตรีตรวจคนเข้าเมืองของเดนมาร์กกล่าวว่าคาดว่าจะบรรลุข้อตกลงฉบับสมบูรณ์กับรวันดาภายในไม่กี่เดือนข้างหน้า ยังไม่มีการระบุจำนวนคน และยังไม่มีการลงนามข้อตกลง นายวินเซนต์ บิรูตา รัฐมนตรีมหาดไทยรวันดา กล่าวว่าผู้ที่เดินทางมาจะได้รับทางเลือกให้กลับบ้านโดยสมัครใจ ตั้งถิ่นฐานในรวันดา หรือย้ายไปประเทศที่ตนมีสิทธิ์พำนักอาศัย โดย UNHCR จะมีส่วนร่วมและจะมีกลไกติดตามตรวจสอบที่เป็นอิสระ เมื่อวันที่ 17 พฤศจิกายน นายโฟล์คเกอร์ เทิร์ก ข้าหลวงใหญ่สิทธิมนุษยชนแห่งสหประชาชาติ แสดงความกังวลต่อความเสี่ยงด้านสิทธิมนุษยชนของข้อเสนอนี้ โดยสำนักงานของเขายังไม่เห็นตัวบทของข้อเสนอ UN News รายงาน",
        sw: "Austria, Denmark, Ujerumani, Ugiriki na Uholanzi zilitangaza mipango tarehe 16 Novemba, katika mkutano kuhusu uhamiaji mjini Vienna, ya \"kituo cha kurejesha\" nchini Rwanda kwa watu ambao maombi yao ya hifadhi yamekataliwa barani Ulaya, AP iliripoti. Kansela wa Austria alisema kituo cha kwanza kitaanzishwa mwaka ujao, na waziri wa uhamiaji wa Denmark alisema makubaliano kamili na Rwanda yanatarajiwa ndani ya miezi michache ijayo; hakuna idadi iliyotolewa na hakuna makubaliano yaliyotiwa saini. Waziri wa mambo ya ndani wa Rwanda, Vincent Biruta, alisema watakaofika watapewa nafasi ya kurudi nyumbani kwa hiari, kujumuika nchini Rwanda au kuhamia nchi ambayo wana haki ya kuishi, huku UNHCR ikihusika na kukiwa na utaratibu huru wa ufuatiliaji. Tarehe 17 Novemba mkuu wa haki za binadamu wa UN, Volker Türk, alieleza wasiwasi kuhusu hatari za pendekezo hilo kwa haki za binadamu; ofisi yake haijaona maandishi yake, UN News iliripoti."
      },
      why: {
        en: "Migration and relations between governments: European lawmakers voted in June to let member states set up such centres outside the EU. A 2022 UK–Rwanda deal was ruled unlawful by the UK Supreme Court and scrapped in 2024. UNHCR says it supports return hubs only if they meet human rights standards, and rights groups oppose the plan, AP reported.",
        fr: "Migrations et relations entre gouvernements : en juin, les députés européens ont autorisé les États membres à créer de tels centres hors de l'UE. Un accord de 2022 entre le Royaume-Uni et le Rwanda avait été jugé illégal par la Cour suprême britannique et abandonné en 2024. Le HCR indique ne soutenir les centres de retour que s'ils respectent les normes des droits humains, et des organisations de défense des droits s'opposent au projet, a rapporté l'AP.",
        th: "การย้ายถิ่นและความสัมพันธ์ระหว่างรัฐบาล เมื่อเดือนมิถุนายน สมาชิกรัฐสภายุโรปลงมติให้ประเทศสมาชิกตั้งศูนย์ลักษณะนี้นอกสหภาพยุโรปได้ ข้อตกลงระหว่างสหราชอาณาจักรกับรวันดาเมื่อปี 2022 ถูกศาลฎีกาสหราชอาณาจักรตัดสินว่าไม่ชอบด้วยกฎหมาย และถูกยกเลิกในปี 2024 UNHCR ระบุว่าจะสนับสนุนศูนย์ส่งกลับก็ต่อเมื่อเป็นไปตามมาตรฐานสิทธิมนุษยชน และกลุ่มสิทธิมนุษยชนคัดค้านแผนนี้ AP รายงาน",
        sw: "Uhamiaji na mahusiano kati ya serikali: mwezi Juni wabunge wa Ulaya walipiga kura kuruhusu nchi wanachama kuanzisha vituo kama hivyo nje ya Umoja wa Ulaya. Makubaliano ya mwaka 2022 kati ya Uingereza na Rwanda yalitangazwa kuwa kinyume cha sheria na Mahakama Kuu ya Uingereza na yakafutwa mwaka 2024. UNHCR inasema inaunga mkono vituo vya kurejesha tu ikiwa vinazingatia viwango vya haki za binadamu, na makundi ya haki za binadamu yanapinga mpango huo, AP iliripoti."
      },
      sources: [
        { name: "UN News (OHCHR)", date: "2026-11-17", url: "https://news.un.org/en/story/2026/11/1168827" },
        { name: "AP (via Yahoo News)", date: "2026-11-16", url: "https://www.yahoo.com/news/world/articles/austrian-leader-says-5-european-152226068.html" }
      ]
    },
    {
      id: "busia-str",
      date: "2026-11-17",
      region: "gl",
      photo: "mombasa-port",
      team: ["yidnekachew", "badri"],
      title: {
        en: "Busia: COMESA, EAC and SADC train border officials and small traders on simplified trade rules",
        fr: "Busia : le COMESA, la CAE et la SADC forment agents frontaliers et petits commerçants aux règles commerciales simplifiées",
        th: "บูเซีย: COMESA, EAC และ SADC อบรมเจ้าหน้าที่ชายแดนและผู้ค้ารายย่อยเรื่องระเบียบการค้าแบบง่าย",
        sw: "Busia: COMESA, EAC na SADC zawapa mafunzo maafisa wa mpakani na wafanyabiashara wadogo kuhusu taratibu rahisi za biashara"
      },
      summary: {
        en: "COMESA, the EAC and SADC began a two-day workshop on 16 November at the Busia One Stop Border Post between Kenya and Uganda on the Tripartite Simplified Trade Regime, which gives small traders simpler customs papers: a Simplified Certificate of Origin and a Simplified Customs Declaration, SADC reported. Border agencies, trade information desk officers, cross-border traders' associations, joint border committees and small-scale traders worked through eligibility, consignment thresholds, rules of origin and customs procedures. The project, funded by the Alliance for a Green Revolution in Africa (AGRA), supports the regime along the Northern and Nacala trade corridors.",
        fr: "Le COMESA, la CAE et la SADC ont ouvert le 16 novembre un atelier de deux jours au poste frontière à arrêt unique de Busia, entre le Kenya et l'Ouganda, sur le régime commercial simplifié tripartite, qui offre aux petits commerçants des documents douaniers simplifiés : un certificat d'origine simplifié et une déclaration en douane simplifiée, a rapporté la SADC. Agences frontalières, agents des bureaux d'information commerciale, associations de commerçants transfrontaliers, comités frontaliers conjoints et petits commerçants ont travaillé sur l'éligibilité, les seuils des envois, les règles d'origine et les procédures douanières. Le projet, financé par l'Alliance pour une révolution verte en Afrique (AGRA), soutient ce régime le long des corridors commerciaux Nord et de Nacala.",
        th: "COMESA, EAC และ SADC เริ่มการประชุมเชิงปฏิบัติการสองวันเมื่อวันที่ 16 พฤศจิกายน ที่ด่านพรมแดนแบบจุดเดียวบูเซียระหว่างเคนยากับยูกันดา ว่าด้วยระบอบการค้าแบบง่ายของสามกลุ่มภูมิภาค ซึ่งให้ผู้ค้ารายย่อยใช้เอกสารศุลกากรที่ง่ายขึ้น ได้แก่ หนังสือรับรองถิ่นกำเนิดแบบง่ายและใบขนสินค้าแบบง่าย SADC รายงาน หน่วยงานชายแดน เจ้าหน้าที่โต๊ะข้อมูลการค้า สมาคมผู้ค้าข้ามพรมแดน คณะกรรมการชายแดนร่วม และผู้ค้ารายย่อย ร่วมกันศึกษาเรื่องคุณสมบัติ เพดานมูลค่าสินค้า กฎถิ่นกำเนิด และขั้นตอนศุลกากร โครงการนี้ได้รับทุนจากพันธมิตรเพื่อการปฏิวัติเขียวในแอฟริกา (AGRA) เพื่อสนับสนุนระบอบนี้ตามแนวระเบียงการค้าเหนือและนาคาลา",
        sw: "COMESA, EAC na SADC zilianza warsha ya siku mbili tarehe 16 Novemba katika Kituo cha Pamoja cha Mpakani cha Busia kati ya Kenya na Uganda kuhusu Utaratibu Rahisi wa Biashara wa Pande Tatu, unaowapa wafanyabiashara wadogo nyaraka rahisi za forodha: Cheti Rahisi cha Asili na Tamko Rahisi la Forodha, SADC iliripoti. Mashirika ya mpakani, maafisa wa madawati ya taarifa za biashara, vyama vya wafanyabiashara wa mipakani, kamati za pamoja za mpakani na wafanyabiashara wadogo walijifunza kuhusu vigezo vya kustahili, viwango vya juu vya mizigo, kanuni za asili ya bidhaa na taratibu za forodha. Mradi huo, unaofadhiliwa na Muungano wa Mapinduzi ya Kijani Afrika (AGRA), unaunga mkono utaratibu huo katika ushoroba wa biashara wa Kaskazini na wa Nacala."
      },
      why: {
        en: "Cross-border trade and regional integration: SADC says the initiative places particular emphasis on women and young people, who make up a significant share of small-scale cross-border traders, and that trade within the 29-member Tripartite region remains below its potential.",
        fr: "Commerce transfrontalier et intégration régionale : selon la SADC, l'initiative met un accent particulier sur les femmes et les jeunes, qui représentent une part importante des petits commerçants transfrontaliers, et le commerce au sein de la région tripartite de 29 membres reste en deçà de son potentiel.",
        th: "การค้าข้ามพรมแดนและการรวมกลุ่มภูมิภาค SADC ระบุว่าโครงการนี้ให้ความสำคัญเป็นพิเศษกับผู้หญิงและคนหนุ่มสาว ซึ่งเป็นสัดส่วนสำคัญของผู้ค้าข้ามพรมแดนรายย่อย และการค้าภายในภูมิภาคไตรภาคีที่มีสมาชิก 29 ประเทศยังต่ำกว่าศักยภาพ",
        sw: "Biashara ya mipakani na mtangamano wa kikanda: SADC inasema mpango huo unatilia mkazo maalum wanawake na vijana, ambao ni sehemu kubwa ya wafanyabiashara wadogo wa mipakani, na kwamba biashara ndani ya kanda ya Pande Tatu yenye wanachama 29 bado iko chini ya uwezo wake."
      },
      sources: [
        { name: "SADC (via allAfrica)", date: "2026-11-17", url: "https://allafrica.com/stories/202611170226.html" }
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
      date: "2026-11-16",
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
        en: "Arsenic and heavy metals above standard limits have been found in the Kok and Sai rivers, which Thailand shares with Myanmar's Shan State, The Nation reported on 10 November. Thai ministers said the pollution is believed to come from mining in Shan State. During a visit to Myanmar on 12 November, Foreign Minister Sihasak Phuangketkeow and Myanmar's leaders agreed to convene the joint working group on water quality in boundary and transboundary rivers as soon as possible, and senior officials from both countries will make a joint field visit, The Nation reported on 13 November. On 16 November The Thaiger reported that Thailand will raise pollution from the Shan State mines with China in talks from 16 to 18 November, after Deputy Interior Minister Jeset Thaiset inspected the mining area across from Chiang Rai on 14 November. In Mae Sai, the Provincial Waterworks Authority cut supply for 14 villages to 60 per cent on 5 November because of very high turbidity and arsenic in the raw water; supply was back to about 80 per cent by 9 November, The Nation reported.",
        fr: "De l'arsenic et des métaux lourds au-delà des normes ont été relevés dans les rivières Kok et Sai, que la Thaïlande partage avec l'État Shan du Myanmar, a rapporté The Nation le 10 novembre. Selon des ministres thaïlandais, cette pollution proviendrait de l'exploitation minière dans l'État Shan. Lors d'une visite au Myanmar le 12 novembre, le ministre des Affaires étrangères Sihasak Phuangketkeow et les dirigeants birmans sont convenus de réunir dès que possible le groupe de travail conjoint sur la qualité de l'eau des rivières frontalières et transfrontalières, et de hauts responsables des deux pays effectueront une visite de terrain conjointe, a rapporté The Nation le 13 novembre. Le 16 novembre, The Thaiger a rapporté que la Thaïlande soulèvera la question de la pollution des mines de l'État Shan avec la Chine lors de discussions du 16 au 18 novembre, après l'inspection le 14 novembre de la zone minière située en face de Chiang Rai par le vice-ministre de l'Intérieur Jeset Thaiset. À Mae Sai, la régie provinciale des eaux a réduit à 60 % l'approvisionnement de 14 villages le 5 novembre en raison d'une turbidité très élevée et d'arsenic dans l'eau brute ; l'approvisionnement était revenu à environ 80 % le 9 novembre, a rapporté The Nation.",
        th: "พบสารหนูและโลหะหนักเกินค่ามาตรฐานในแม่น้ำกกและแม่น้ำสาย ซึ่งไทยใช้ร่วมกับรัฐฉานของเมียนมา The Nation รายงานเมื่อวันที่ 10 พฤศจิกายน รัฐมนตรีของไทยระบุว่าเชื่อว่ามลพิษมาจากการทำเหมืองในรัฐฉาน ระหว่างการเยือนเมียนมาเมื่อวันที่ 12 พฤศจิกายน นายสีหศักดิ์ พวงเกตุแก้ว รัฐมนตรีว่าการกระทรวงการต่างประเทศ และผู้นำเมียนมาตกลงให้เรียกประชุมคณะทำงานร่วมด้านการจัดการคุณภาพน้ำในแม่น้ำชายแดนและแม่น้ำข้ามพรมแดนโดยเร็วที่สุด และเจ้าหน้าที่ระดับสูงของทั้งสองประเทศจะลงพื้นที่ร่วมกัน The Nation รายงานเมื่อวันที่ 13 พฤศจิกายน เมื่อวันที่ 16 พฤศจิกายน The Thaiger รายงานว่าไทยจะหยิบยกปัญหามลพิษจากเหมืองในรัฐฉานขึ้นหารือกับจีนในการเจรจาระหว่างวันที่ 16 ถึง 18 พฤศจิกายน หลังจากนายเจษฎ์ ไทยเศรษฐ์ รัฐมนตรีช่วยว่าการกระทรวงมหาดไทย ลงตรวจพื้นที่เหมืองฝั่งตรงข้ามจังหวัดเชียงรายเมื่อวันที่ 14 พฤศจิกายน ที่อำเภอแม่สาย การประปาส่วนภูมิภาคลดการจ่ายน้ำให้ 14 หมู่บ้านเหลือร้อยละ 60 เมื่อวันที่ 5 พฤศจิกายน เนื่องจากน้ำดิบมีความขุ่นสูงมากและมีสารหนู และการจ่ายน้ำกลับมาอยู่ที่ราวร้อยละ 80 เมื่อวันที่ 9 พฤศจิกายน The Nation รายงาน",
        sw: "Arseniki na metali nzito zaidi ya viwango vinavyokubalika zimegunduliwa katika mito Kok na Sai, ambayo Thailand inashiriki na Jimbo la Shan la Myanmar, The Nation iliripoti tarehe 10 Novemba. Mawaziri wa Thailand walisema uchafuzi huo unaaminika kutokana na uchimbaji madini katika Jimbo la Shan. Wakati wa ziara nchini Myanmar tarehe 12 Novemba, Waziri wa Mambo ya Nje Sihasak Phuangketkeow na viongozi wa Myanmar walikubaliana kuitisha haraka iwezekanavyo kikundi kazi cha pamoja kuhusu ubora wa maji katika mito ya mpakani na inayovuka mipaka, na maafisa wakuu wa nchi zote mbili watafanya ziara ya pamoja ya kukagua, The Nation iliripoti tarehe 13 Novemba. Tarehe 16 Novemba The Thaiger iliripoti kwamba Thailand itaibua suala la uchafuzi kutoka migodi ya Jimbo la Shan na China katika mazungumzo ya tarehe 16 hadi 18 Novemba, baada ya Naibu Waziri wa Mambo ya Ndani Jeset Thaiset kukagua eneo la migodi lililo ng'ambo ya Chiang Rai tarehe 14 Novemba. Huko Mae Sai, Mamlaka ya Maji ya Mkoa ilipunguza usambazaji wa maji kwa vijiji 14 hadi asilimia 60 tarehe 5 Novemba kwa sababu ya tope jingi sana na arseniki katika maji ghafi; usambazaji ulirejea karibu asilimia 80 kufikia tarehe 9 Novemba, The Nation iliripoti."
      },
      why: {
        en: "Shared rivers: pollution that starts on one side of a border reaches people on the other. Thai agencies are testing water, soil and fish, the Pollution Control Department has set up seven monitoring stations this year, and the waterworks authority is checking whether the river water can still be used for tap water, The Nation reports.",
        fr: "Fleuves partagés : une pollution née d'un côté de la frontière atteint les populations de l'autre. Les services thaïlandais analysent l'eau, les sols et les poissons, le Département de contrôle de la pollution a installé sept stations de surveillance cette année, et la régie des eaux vérifie si l'eau de la rivière peut encore servir à l'eau du robinet, rapporte The Nation.",
        th: "แม่น้ำที่ใช้ร่วมกัน มลพิษที่เริ่มต้นฝั่งหนึ่งของพรมแดนส่งผลถึงผู้คนอีกฝั่งหนึ่ง หน่วยงานไทยกำลังตรวจน้ำ ดิน และสัตว์น้ำ กรมควบคุมมลพิษได้ตั้งสถานีตรวจวัดคุณภาพน้ำ 7 แห่งในปีนี้ และการประปาส่วนภูมิภาคกำลังตรวจสอบว่าน้ำในแม่น้ำยังใช้ผลิตน้ำประปาได้หรือไม่ ตามรายงานของ The Nation",
        sw: "Mito inayoshirikiwa: uchafuzi unaoanzia upande mmoja wa mpaka huwafikia watu wa upande mwingine. Taasisi za Thailand zinapima maji, udongo na samaki, Idara ya Kudhibiti Uchafuzi imeweka vituo saba vya ufuatiliaji mwaka huu, na mamlaka ya maji inachunguza kama maji ya mto bado yanaweza kutumika kwa maji ya bomba, The Nation inaripoti."
      },
      sources: [
        { name: "The Thaiger", date: "2026-11-16", url: "https://thethaiger.com/news/northern-thailand/myanmar-mine-pollution-thailand-to-raise-issue-with-china" },
        { name: "The Nation Thailand", date: "2026-11-13", url: "https://www.nationthailand.com/news/asean/40073452" },
        { name: "The Nation Thailand", date: "2026-11-10", url: "https://www.nationthailand.com/news/politics/40073332" },
        { name: "The Nation Thailand", date: "2026-11-09", url: "https://www.nationthailand.com/news/general/40073283" }
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
