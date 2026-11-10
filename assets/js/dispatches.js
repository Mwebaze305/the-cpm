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
  updated: "2026-11-10",
  items: [
    {
      id: "ebola",
      date: "2026-11-06",
      region: "gl",
      photo: "goma-kivu",
      team: ["dominick"],
      topic: "health",
      title: {
        en: "Ebola: DR Congo passes 10,700 cases as an attack in Beni halts response work",
        fr: "Ebola : la RD Congo dépasse 10 700 cas, une attaque à Beni interrompt la riposte",
        th: "อีโบลา: คองโกมีผู้ป่วยเกิน 10,700 ราย ขณะที่การโจมตีในเบนีทำให้งานรับมือต้องหยุดชะงัก",
        sw: "Ebola: DR Kongo yapita wagonjwa 10,700 huku shambulio Beni likisimamisha kazi ya kukabiliana"
      },
      summary: {
        en: "ECDC counted 10,741 confirmed cases and 5,230 deaths in eight provinces of DR Congo by 4 November, and two more vaccine candidates are to join the Tumaini trial in Bunia. In Beni territory, North Kivu, an overnight attack killed at least 30 civilians and destroyed a health centre, OCHA said on 6 November; contacts of Ebola patients fled an observation centre and response teams suspended operations.",
        fr: "L'ECDC recensait 10 741 cas confirmés et 5 230 décès dans huit provinces de la RD Congo au 4 novembre, et deux nouveaux candidats vaccins doivent rejoindre l'essai Tumaini à Bunia. Dans le territoire de Beni, au Nord-Kivu, une attaque nocturne a tué au moins 30 civils et détruit un centre de santé, selon l'OCHA le 6 novembre ; des contacts de malades d'Ebola ont fui un centre d'observation et les équipes de riposte ont suspendu leurs activités.",
        th: "ศูนย์ป้องกันและควบคุมโรคแห่งยุโรป (ECDC) นับผู้ป่วยยืนยันได้ 10,741 ราย และเสียชีวิต 5,230 รายใน 8 จังหวัดของคองโก ณ วันที่ 4 พฤศจิกายน และจะมีวัคซีนที่อยู่ระหว่างพัฒนาอีก 2 ชนิดเข้าร่วมการทดลอง Tumaini ที่เมืองบูเนีย ในเขตเบนี จังหวัดคิวูเหนือ การโจมตีในเวลากลางคืนทำให้พลเรือนเสียชีวิตอย่างน้อย 30 คน และศูนย์สุขภาพถูกทำลาย ตามรายงานของ OCHA เมื่อวันที่ 6 พฤศจิกายน ผู้สัมผัสผู้ป่วยอีโบลาหนีออกจากศูนย์เฝ้าสังเกตอาการ และทีมรับมือต้องระงับการปฏิบัติงาน",
        sw: "ECDC ilihesabu wagonjwa 10,741 waliothibitishwa na vifo 5,230 katika majimbo manane ya DR Kongo kufikia tarehe 4 Novemba, na chanjo mbili zaidi za majaribio zitajiunga na jaribio la Tumaini huko Bunia. Katika eneo la Beni, Kivu Kaskazini, shambulio la usiku liliua raia wasiopungua 30 na kuharibu kituo cha afya, OCHA ilisema tarehe 6 Novemba; watu waliokutana na wagonjwa wa Ebola walikimbia kituo cha uangalizi na timu za kukabiliana zilisimamisha kazi."
      },
      why: {
        en: "Border health in practice: on 3 November Africa CDC asked Saudi Arabia to lift broad travel restrictions on Kenya, saying an imported case is not by itself a failure of health security. Kenya has had no new case since 19 October and had screened 760,415 travellers at points of entry by 5 November, WHO says.",
        fr: "La santé aux frontières en pratique : le 3 novembre, Africa CDC a demandé à l'Arabie saoudite de lever ses restrictions de voyage générales visant le Kenya, estimant qu'un cas importé ne traduit pas à lui seul une défaillance de la sécurité sanitaire. Le Kenya n'a enregistré aucun nouveau cas depuis le 19 octobre et avait contrôlé 760 415 voyageurs aux points d'entrée au 5 novembre, selon l'OMS.",
        th: "สุขภาพชายแดนในทางปฏิบัติ เมื่อวันที่ 3 พฤศจิกายน ศูนย์ควบคุมและป้องกันโรคแอฟริกา (Africa CDC) ขอให้ซาอุดีอาระเบียยกเลิกมาตรการจำกัดการเดินทางแบบเหมารวมต่อเคนยา โดยระบุว่าการพบผู้ป่วยนำเข้าเพียงอย่างเดียวไม่ได้แสดงถึงความล้มเหลวด้านความมั่นคงทางสุขภาพ องค์การอนามัยโลกระบุว่าเคนยาไม่มีผู้ป่วยรายใหม่ตั้งแต่วันที่ 19 ตุลาคม และคัดกรองผู้เดินทาง ณ ช่องทางเข้าออกประเทศแล้ว 760,415 คน ณ วันที่ 5 พฤศจิกายน",
        sw: "Afya ya mipakani kwa vitendo: tarehe 3 Novemba Africa CDC iliiomba Saudi Arabia kuondoa vikwazo vya jumla vya safari dhidi ya Kenya, ikisema mgonjwa mmoja aliyeingia kutoka nje si, peke yake, ishara ya kushindwa kwa usalama wa afya. Kenya haijapata mgonjwa mpya tangu tarehe 19 Oktoba na ilikuwa imewachunguza wasafiri 760,415 katika vituo vya kuingilia kufikia tarehe 5 Novemba, kwa mujibu wa WHO."
      },
      sources: [
        { name: "ECDC", date: "2026-11-06", url: "https://www.ecdc.europa.eu/en/epipulse_event/2121" },
        { name: "Africa CDC", date: "2026-11-03", url: "https://africacdc.org/news-item/africa-cdc-stands-with-kenya-calls-for-lifting-of-unjustified-ebola-travel-restrictions/" },
        { name: "WHO Disease Outbreak News", date: "2026-11-06", url: "https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON625" },
        { name: "UN News (OCHA)", date: "2026-11-06", url: "https://news.un.org/en/story/2026/11/1168757" },
        { name: "UN News", date: "2026-11-05", url: "https://news.un.org/en/story/2026/11/1168742" }
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
      id: "burundi-refugees",
      date: "2026-11-03",
      region: "gl",
      photo: "bukavu",
      team: ["yidnekachew"],
      topic: "refugees",
      title: {
        en: "Burundi: food aid for 125,000 refugees could stop in January",
        fr: "Burundi : l'aide alimentaire de 125 000 réfugiés pourrait s'arrêter en janvier",
        th: "บุรุนดี: ความช่วยเหลือด้านอาหารสำหรับผู้ลี้ภัย 125,000 คนอาจหยุดลงในเดือนมกราคม",
        sw: "Burundi: msaada wa chakula kwa wakimbizi 125,000 huenda ukasimama Januari"
      },
      summary: {
        en: "WFP said on 3 November that assistance for nearly 125,000 refugees in Burundi, most of them from DR Congo, could stop in January 2027 without new funding. Rations already cover only 45 per cent of minimum food needs; WFP needs $40 million to keep aid going and restore full rations until September 2027.",
        fr: "Le PAM a indiqué le 3 novembre que l'aide destinée à près de 125 000 réfugiés au Burundi, pour la plupart venus de RD Congo, pourrait s'arrêter en janvier 2027 faute de nouveaux financements. Les rations ne couvrent déjà que 45 % des besoins alimentaires minimaux ; le PAM a besoin de 40 millions de dollars pour maintenir l'aide et rétablir des rations complètes jusqu'en septembre 2027.",
        th: "โครงการอาหารโลก (WFP) ระบุเมื่อวันที่ 3 พฤศจิกายนว่าความช่วยเหลือสำหรับผู้ลี้ภัยเกือบ 125,000 คนในบุรุนดี ซึ่งส่วนใหญ่มาจากคองโก อาจหยุดลงในเดือนมกราคม 2027 หากไม่มีเงินทุนใหม่ ปัจจุบันอาหารที่แจกครอบคลุมความต้องการขั้นต่ำเพียงร้อยละ 45 และ WFP ต้องการเงิน 40 ล้านดอลลาร์เพื่อให้ความช่วยเหลือดำเนินต่อและกลับมาแจกอาหารเต็มส่วนจนถึงเดือนกันยายน 2027",
        sw: "WFP ilisema tarehe 3 Novemba kwamba msaada kwa karibu wakimbizi 125,000 nchini Burundi, wengi wao kutoka DR Kongo, huenda ukasimama Januari 2027 bila ufadhili mpya. Mgao tayari unakidhi asilimia 45 tu ya mahitaji ya chini ya chakula; WFP inahitaji dola milioni 40 kuendeleza msaada na kurejesha mgao kamili hadi Septemba 2027."
      },
      why: {
        en: "Hosting as aid shrinks: WFP says insecurity keeps many refugees from going home and few can earn an income, so it is working with Burundi's government and UNHCR to widen their access to livelihoods.",
        fr: "Accueillir quand l'aide recule : selon le PAM, l'insécurité empêche de nombreux réfugiés de rentrer et peu peuvent gagner un revenu, il travaille donc avec le gouvernement burundais et le HCR pour élargir leur accès aux moyens de subsistance.",
        th: "การรองรับผู้ลี้ภัยเมื่อความช่วยเหลือหดตัว WFP ระบุว่าความไม่ปลอดภัยทำให้ผู้ลี้ภัยจำนวนมากกลับบ้านไม่ได้ และมีเพียงไม่กี่คนที่หารายได้ได้ จึงร่วมมือกับรัฐบาลบุรุนดีและ UNHCR เพื่อขยายโอกาสในการประกอบอาชีพ",
        sw: "Kuhifadhi wakimbizi msaada ukipungua: WFP inasema ukosefu wa usalama unawazuia wakimbizi wengi kurudi nyumbani na wachache wanaweza kupata kipato, hivyo inafanya kazi na serikali ya Burundi na UNHCR kupanua fursa zao za kujipatia riziki."
      },
      sources: [
        { name: "WFP", date: "2026-11-03", url: "https://www.wfp.org/news/125000-refugees-burundi-risk-losing-food-assistance-without-urgent-funding" }
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
      date: "2026-11-09",
      region: "sea",
      photo: "moei-bridge",
      team: ["aaron"],
      topic: "peace",
      title: {
        en: "Thailand steps up border patrols as its foreign minister prepares to visit Myanmar",
        fr: "La Thaïlande renforce ses patrouilles frontalières avant une visite de son ministre des Affaires étrangères au Myanmar",
        th: "ไทยเพิ่มการลาดตระเวนชายแดน ขณะที่รัฐมนตรีว่าการกระทรวงการต่างประเทศเตรียมเยือนเมียนมา",
        sw: "Thailand yaongeza doria mpakani huku waziri wake wa mambo ya nje akijiandaa kuzuru Myanmar"
      },
      summary: {
        en: "Thailand's army said on 9 November it has stepped up round-the-clock patrols on the Myanmar border, including in Mae Sot district from 8 November, after stray rounds from fighting near Myawaddy injured a Mae Sot resident on 29 October. On 2 November, Thailand's armed forces chief summoned Myanmar's military attaché. Foreign Minister Sihasak Phuangketkeow is due to visit Myanmar on 12 November, before the ASEAN Summit, and has called for de-escalation by all parties.",
        fr: "L'armée thaïlandaise a indiqué le 9 novembre avoir renforcé ses patrouilles jour et nuit à la frontière birmane, notamment dans le district de Mae Sot depuis le 8 novembre, après que des balles perdues tirées lors de combats près de Myawaddy ont blessé une habitante de Mae Sot le 29 octobre. Le 2 novembre, le chef des forces armées thaïlandaises a convoqué l'attaché militaire birman. Le ministre des Affaires étrangères, Sihasak Phuangketkeow, doit se rendre au Myanmar le 12 novembre, avant le sommet de l'ASEAN, et a appelé toutes les parties à la désescalade.",
        th: "กองทัพบกไทยระบุเมื่อวันที่ 9 พฤศจิกายนว่าได้เพิ่มการลาดตระเวนตลอด 24 ชั่วโมงตามแนวชายแดนเมียนมา รวมถึงในอำเภอแม่สอดตั้งแต่วันที่ 8 พฤศจิกายน หลังกระสุนจากการสู้รบใกล้เมียวดีทำให้ชาวแม่สอดบาดเจ็บเมื่อวันที่ 29 ตุลาคม วันที่ 2 พฤศจิกายน ผู้บัญชาการทหารสูงสุดของไทยเรียกผู้ช่วยทูตฝ่ายทหารเมียนมาเข้าพบ นายสีหศักดิ์ พวงเกตุแก้ว รัฐมนตรีว่าการกระทรวงการต่างประเทศ มีกำหนดเยือนเมียนมาในวันที่ 12 พฤศจิกายน ก่อนการประชุมสุดยอดอาเซียน และเรียกร้องให้ทุกฝ่ายลดความรุนแรง",
        sw: "Jeshi la Thailand lilisema tarehe 9 Novemba kwamba limeongeza doria za saa 24 kwenye mpaka wa Myanmar, ikiwemo wilaya ya Mae Sot tangu tarehe 8 Novemba, baada ya risasi zilizopotea kutoka mapigano karibu na Myawaddy kumjeruhi mkazi wa Mae Sot tarehe 29 Oktoba. Tarehe 2 Novemba, mkuu wa majeshi ya Thailand alimwita mwambata wa kijeshi wa Myanmar. Waziri wa Mambo ya Nje Sihasak Phuangketkeow anatarajiwa kuzuru Myanmar tarehe 12 Novemba, kabla ya Mkutano wa ASEAN, na ametoa wito kwa pande zote kupunguza mapigano."
      },
      why: {
        en: "A conflict crossing a border: Thailand's army calls the fighting an internal Myanmar conflict, and it reaches Mae Sot, one of the main trade posts between Thailand and Myanmar, where trade through unofficial crossings was suspended until 5 November.",
        fr: "Un conflit qui traverse une frontière : l'armée thaïlandaise qualifie les combats de conflit interne au Myanmar, et ils atteignent Mae Sot, l'un des principaux postes commerciaux entre la Thaïlande et le Myanmar, où le commerce par les points de passage non officiels a été suspendu jusqu'au 5 novembre.",
        th: "ความขัดแย้งที่ข้ามพรมแดน กองทัพบกไทยระบุว่าการสู้รบเป็นความขัดแย้งภายในของเมียนมา และส่งผลถึงแม่สอด หนึ่งในจุดการค้าหลักระหว่างไทยกับเมียนมา ซึ่งการค้าผ่านช่องทางไม่เป็นทางการถูกระงับจนถึงวันที่ 5 พฤศจิกายน",
        sw: "Mgogoro unaovuka mpaka: jeshi la Thailand linayaita mapigano hayo mgogoro wa ndani wa Myanmar, na yanafika Mae Sot, mojawapo ya vituo vikuu vya biashara kati ya Thailand na Myanmar, ambako biashara kupitia vivuko visivyo rasmi ilisimamishwa hadi tarehe 5 Novemba."
      },
      sources: [
        { name: "The Nation Thailand", date: "2026-11-09", url: "https://www.nationthailand.com/news/asean/40073279" },
        { name: "Malay Mail", date: "2026-11-04", url: "https://www.malaymail.com/news/world/2026/11/04/thailands-foreign-minister-visits-myanmar-amid-border-clashes-a-coup-ahead-of-asean-summit/241955" },
        { name: "DVB", date: "2026-11-03", url: "https://english.dvb.no/thailand-warns-myanmar-military-attache-to-exercise-caution-over-border-airstrikes/" },
        { name: "The Nation Thailand", date: "2026-10-30", url: "https://www.nationthailand.com/news/general/40072918" }
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
      id: "busia-no-stop",
      date: "2026-10-28",
      region: "gl",
      photo: "lake-victoria",
      team: ["yidnekachew"],
      title: {
        en: "Kenya and Uganda traders seek a \"no-stop\" border at Busia",
        fr: "Des commerçants du Kenya et de l'Ouganda veulent une frontière « sans arrêt » à Busia",
        th: "ผู้ค้าเคนยาและยูกันดาเสนอด่านพรมแดนแบบ \"ไม่ต้องหยุด\" ที่บูเซีย",
        sw: "Wafanyabiashara wa Kenya na Uganda wataka mpaka \"usio na kusimama\" Busia"
      },
      summary: {
        en: "At a Kenya–Uganda cross-border policy dialogue in Busia, traders and officials proposed moving from the one-stop border post to a no-stop system: inspections at the point of origin, digital clearance and an end to duplicate checks by the two countries' agencies. A Ugandan agriculture inspector said about 80 per cent of consignments are now inspected at the border.",
        fr: "Lors d'un dialogue politique transfrontalier Kenya–Ouganda à Busia, des commerçants et des responsables ont proposé de passer du poste frontière à arrêt unique à un système sans arrêt : inspections au point d'origine, dédouanement numérique et fin des contrôles en double par les agences des deux pays. Une inspectrice ougandaise de l'agriculture a indiqué qu'environ 80 % des cargaisons sont aujourd'hui inspectées à la frontière.",
        th: "ในการหารือเชิงนโยบายข้ามพรมแดนเคนยา–ยูกันดาที่บูเซีย ผู้ค้าและเจ้าหน้าที่เสนอให้เปลี่ยนจากด่านพรมแดนจุดเดียว (one-stop border post) เป็นระบบที่ไม่ต้องหยุด ได้แก่ การตรวจสินค้าที่ต้นทาง การผ่านพิธีการแบบดิจิทัล และยุติการตรวจซ้ำซ้อนของหน่วยงานทั้งสองประเทศ เจ้าหน้าที่ตรวจสินค้าเกษตรของยูกันดาระบุว่าปัจจุบันสินค้าราวร้อยละ 80 ถูกตรวจที่ชายแดน",
        sw: "Katika mazungumzo ya sera ya mipakani kati ya Kenya na Uganda mjini Busia, wafanyabiashara na maafisa walipendekeza kuhama kutoka kituo cha pamoja cha mpakani hadi mfumo usio na kusimama: ukaguzi mahali bidhaa zinapotoka, uondoaji wa kidijitali na kukomesha ukaguzi unaorudiwa na mashirika ya nchi hizo mbili. Mkaguzi wa kilimo wa Uganda alisema takriban asilimia 80 ya mizigo kwa sasa inakaguliwa mpakani."
      },
      why: {
        en: "Cross-border trade at one of East Africa's busiest posts: the chair of the Busia Women Cross-Border Cooperatives said women make up about 80 per cent of small-scale cross-border traders and are the most affected by non-tariff barriers.",
        fr: "Le commerce transfrontalier à l'un des postes les plus fréquentés d'Afrique de l'Est : la présidente des coopératives transfrontalières des femmes de Busia a indiqué que les femmes représentent environ 80 % des petits commerçants transfrontaliers et sont les plus touchées par les barrières non tarifaires.",
        th: "การค้าข้ามพรมแดน ณ ด่านที่คึกคักที่สุดแห่งหนึ่งของแอฟริกาตะวันออก ประธานสหกรณ์ผู้ค้าข้ามพรมแดนสตรีบูเซียระบุว่าผู้หญิงคิดเป็นราวร้อยละ 80 ของผู้ค้ารายย่อยข้ามพรมแดน และได้รับผลกระทบจากอุปสรรคที่มิใช่ภาษีมากที่สุด",
        sw: "Biashara ya mipakani katika mojawapo ya vituo vyenye shughuli nyingi zaidi Afrika Mashariki: mwenyekiti wa Vyama vya Ushirika vya Wanawake Wafanyabiashara wa Mipakani Busia alisema wanawake ni takriban asilimia 80 ya wafanyabiashara wadogo wa mipakani na ndio wanaoathirika zaidi na vikwazo visivyo vya kodi."
      },
      sources: [
        { name: "Talk Africa", date: "2026-10-28", url: "https://www.talkafrica.co.ke/kenya-uganda-traders-push-for-no-stop-border-at-busia-to-cut-delays/" }
      ]
    },
    {
      id: "eac-trade",
      date: "2026-11-03",
      region: "gl",
      photo: "kigali",
      team: ["yidnekachew"],
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
      id: "asean-summit",
      date: "2026-11-04",
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
        en: "ASEAN leaders and partners meet at the Philippine International Convention Center in Pasay City, Metro Manila, under the Philippines' 2026 chairmanship. Myanmar is expected to send a senior civil servant rather than a top leader, Malay Mail reported on 4 November.",
        fr: "Les dirigeants de l'ASEAN et leurs partenaires se réunissent au Philippine International Convention Center, à Pasay, dans le Grand Manille, sous la présidence philippine de 2026. Le Myanmar devrait envoyer un haut fonctionnaire plutôt qu'un dirigeant de premier rang, a rapporté Malay Mail le 4 novembre.",
        th: "ผู้นำอาเซียนและประเทศคู่เจรจาประชุมกันที่ศูนย์การประชุมนานาชาติฟิลิปปินส์ เมืองปาไซ เขตมหานครมะนิลา ภายใต้การเป็นประธานอาเซียนของฟิลิปปินส์ในปี 2026 Malay Mail รายงานเมื่อวันที่ 4 พฤศจิกายนว่าเมียนมาคาดว่าจะส่งข้าราชการระดับสูงแทนผู้นำระดับสูงสุด",
        sw: "Viongozi wa ASEAN na washirika wao wanakutana katika Philippine International Convention Center, Pasay, Metro Manila, chini ya uenyekiti wa Ufilipino wa mwaka 2026. Myanmar inatarajiwa kutuma mtumishi mwandamizi wa serikali badala ya kiongozi wa juu, Malay Mail iliripoti tarehe 4 Novemba."
      },
      why: {
        en: "We will report what the summit says about the Global South and cooperation with Africa.",
        fr: "Nous rendrons compte de ce que le sommet dira du Sud global et de la coopération avec l'Afrique.",
        th: "เราจะรายงานว่าการประชุมกล่าวถึงโลกใต้และความร่วมมือกับแอฟริกาอย่างไร",
        sw: "Tutaripoti kile mkutano utakachosema kuhusu Kusini mwa Dunia na ushirikiano na Afrika."
      },
      sources: [
        { name: "Malay Mail", date: "2026-11-04", url: "https://www.malaymail.com/news/world/2026/11/04/thailands-foreign-minister-visits-myanmar-amid-border-clashes-a-coup-ahead-of-asean-summit/241955" },
        { name: "PhilSTAR L!fe", date: "2026-09-22", url: "https://philstarlife.com/news-and-views/968280-palace-announces-nov-16-to-18-as-special-non-working-days-asean-summit" }
      ]
    }
  ]
};
