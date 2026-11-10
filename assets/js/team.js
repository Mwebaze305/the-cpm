/* The team, in display order. To add a member, copy a block and fill in:
   - name, photo (assets/img/team/..., portrait about 4:5)
   - role: short label in capitals, per language
   - bio: two or three sentences, per language (only "en" is required;
     a missing language shows the English text)
   - bioKey instead of bio: reuse a sentence already in the language files
   - id: short name used in links (team.html#m-id) and in dispatches.js
   - field: a few words on their expertise, per language (shown on dispatches)
   - group: "founder" (Founders page), "expert" or "researcher" (Team page)
   - team: for a founder who also works in the team, "expert" or "researcher":
     the card then appears on the Team page too, in that group. A founder
     without it appears on the Founders page only. */
window.CPM_TEAM = [
  {
    id: "aaron",
    group: "founder",
    team: "researcher",
    name: "Aaron Mwesigwa Mwebaze",
    field: { en: "international relations and policy research", fr: "relations internationales et recherche sur les politiques publiques", th: "ความสัมพันธ์ระหว่างประเทศและการวิจัยนโยบาย", sw: "mahusiano ya kimataifa na utafiti wa sera" },
    photo: "assets/img/founder.jpg",
    altKey: "writer.alt",
    role: {
      en: "INTERNATIONAL RELATIONS AND POLICY RESEARCHER · UGANDA",
      fr: "CHERCHEUR EN RELATIONS INTERNATIONALES ET POLITIQUES PUBLIQUES · OUGANDA",
      th: "นักวิจัยด้านความสัมพันธ์ระหว่างประเทศและนโยบาย · ยูกันดา",
      sw: "MTAFITI WA MAHUSIANO YA KIMATAIFA NA SERA · UGANDA"
    },
    bioKey: "writer.bio"
  },
  {
    id: "dominick",
    group: "expert",
    name: "Dominick Damian Msalila",
    field: { en: "border health, disease surveillance and outbreak preparedness", fr: "santé aux frontières, surveillance des maladies et préparation aux épidémies", th: "สุขภาพชายแดน การเฝ้าระวังโรค และการเตรียมพร้อมรับมือการระบาด", sw: "afya ya mipakani, ufuatiliaji wa magonjwa na maandalizi ya kukabili milipuko" },
    photo: "assets/img/team/dominick-msalila.jpg",
    role: {
      en: "PUBLIC HEALTH EXPERT · TANZANIA",
      fr: "EXPERT EN SANTÉ PUBLIQUE · TANZANIE",
      th: "ผู้เชี่ยวชาญด้านสาธารณสุข · แทนซาเนีย",
      sw: "MTAALAMU WA AFYA YA JAMII · TANZANIA"
    },
    bio: {
      en: "Expert at Tanzania's Ministry of Health with more than seven years' experience in public health, disease prevention and border health management. His work focuses on the health of migrants and mobile populations, disease surveillance, outbreak preparedness and cross-border coordination at points of entry. He holds an MSc in Public Health in Border Health Management from Mae Fah Luang University, Thailand.",
      fr: "Expert au ministère de la Santé de Tanzanie, il compte plus de sept ans d'expérience en santé publique, en prévention des maladies et en gestion sanitaire aux frontières. Ses travaux portent sur la santé des migrants et des populations mobiles, la surveillance des maladies, la préparation aux épidémies et la coordination transfrontalière aux points d'entrée. Il est titulaire d'un master en santé publique, spécialité gestion sanitaire aux frontières, de l'université Mae Fah Luang, en Thaïlande.",
      th: "ผู้เชี่ยวชาญประจำกระทรวงสาธารณสุขแทนซาเนีย มีประสบการณ์กว่าเจ็ดปีด้านสาธารณสุข การป้องกันโรค และการจัดการสุขภาพชายแดน งานของเขามุ่งเน้นสุขภาพของผู้ย้ายถิ่นและประชากรเคลื่อนย้าย การเฝ้าระวังโรค การเตรียมพร้อมรับมือการระบาด และการประสานงานข้ามพรมแดน ณ ช่องทางเข้าออกประเทศ สำเร็จการศึกษาปริญญาโทสาธารณสุขศาสตร์ สาขาการจัดการสุขภาพชายแดน จากมหาวิทยาลัยแม่ฟ้าหลวง ประเทศไทย",
      sw: "Mtaalamu katika Wizara ya Afya ya Tanzania, mwenye uzoefu wa zaidi ya miaka saba katika afya ya jamii, kinga ya magonjwa na usimamizi wa afya mipakani. Kazi yake inalenga afya ya wahamiaji na watu wanaohama, ufuatiliaji wa magonjwa, maandalizi ya kukabili milipuko na uratibu wa mipakani katika vituo vya kuingilia. Ana shahada ya uzamili ya Afya ya Jamii katika Usimamizi wa Afya Mipakani kutoka Chuo Kikuu cha Mae Fah Luang, Thailand."
    }
  },
  {
    id: "yidnekachew",
    group: "expert",
    name: "Yidnekachew Addis",
    field: { en: "development economics, poverty and welfare", fr: "économie du développement, pauvreté et bien-être", th: "เศรษฐศาสตร์การพัฒนา ความยากจน และสวัสดิการ", sw: "uchumi wa maendeleo, umaskini na ustawi" },
    photo: "assets/img/team/yidnekachew-addis.jpg",
    role: {
      en: "DEVELOPMENT ECONOMICS EXPERT · ETHIOPIA",
      fr: "EXPERT EN ÉCONOMIE DU DÉVELOPPEMENT · ÉTHIOPIE",
      th: "ผู้เชี่ยวชาญด้านเศรษฐศาสตร์การพัฒนา · เอธิโอเปีย",
      sw: "MTAALAMU WA UCHUMI WA MAENDELEO · ETHIOPIA"
    },
    bio: {
      en: "Economist and development planner with Ethiopia's Ministry of Planning and Development. He has worked on macroeconomic analysis and forecasting, poverty and welfare assessment, and monitoring and evaluation, including support for Ethiopia's Ten-Year Development Plan. His interests are economic transformation, poverty reduction and evidence-based policy. He holds an MA in Development Economics from Debre Markos University.",
      fr: "Économiste et planificateur du développement au ministère de la Planification et du Développement d'Éthiopie. Il a travaillé sur l'analyse et la prévision macroéconomiques, l'évaluation de la pauvreté et du bien-être, ainsi que le suivi-évaluation, notamment en appui au Plan de développement décennal de l'Éthiopie. Ses centres d'intérêt sont la transformation économique, la réduction de la pauvreté et les politiques fondées sur des données probantes. Il est titulaire d'un master en économie du développement de l'université de Debre Markos.",
      th: "นักเศรษฐศาสตร์และนักวางแผนการพัฒนาประจำกระทรวงการวางแผนและการพัฒนาของเอธิโอเปีย มีประสบการณ์ด้านการวิเคราะห์และพยากรณ์เศรษฐกิจมหภาค การประเมินความยากจนและสวัสดิการ ตลอดจนการติดตามและประเมินผล รวมถึงการสนับสนุนแผนพัฒนาสิบปีของเอธิโอเปีย ความสนใจหลักของเขาคือการปรับเปลี่ยนโครงสร้างเศรษฐกิจ การลดความยากจน และนโยบายที่อิงหลักฐาน สำเร็จการศึกษาปริญญาโทเศรษฐศาสตร์การพัฒนาจากมหาวิทยาลัยเดเบรมาร์โกส",
      sw: "Mchumi na mpangaji wa maendeleo katika Wizara ya Mipango na Maendeleo ya Ethiopia. Amefanya kazi katika uchambuzi na utabiri wa uchumi mkuu, tathmini ya umaskini na ustawi, pamoja na ufuatiliaji na tathmini, ikiwemo kusaidia Mpango wa Maendeleo wa Miaka Kumi wa Ethiopia. Maeneo anayoyapenda ni mageuzi ya kiuchumi, kupunguza umaskini na sera zinazotegemea ushahidi. Ana shahada ya uzamili ya Uchumi wa Maendeleo kutoka Chuo Kikuu cha Debre Markos."
    }
  },
  {
    id: "ohn",
    group: "researcher",
    name: "Bongsavijaya (Ohn) Onkchareon",
    field: { en: "international relations, security and conflict resolution", fr: "relations internationales, sécurité et résolution des conflits", th: "ความสัมพันธ์ระหว่างประเทศ ความมั่นคง และการแก้ไขความขัดแย้ง", sw: "mahusiano ya kimataifa, usalama na utatuzi wa migogoro" },
    photo: "assets/img/team/ohn-onkchareon.jpg",
    role: {
      en: "INTERNATIONAL RELATIONS AND SECURITY RESEARCHER · SOUTH KOREA",
      fr: "CHERCHEUR EN RELATIONS INTERNATIONALES ET SÉCURITÉ · CORÉE DU SUD",
      th: "นักวิจัยด้านความสัมพันธ์ระหว่างประเทศและความมั่นคง · เกาหลีใต้",
      sw: "MTAFITI WA MAHUSIANO YA KIMATAIFA NA USALAMA · KOREA KUSINI"
    },
    bio: {
      en: "International relations and security researcher based in Seoul, studying at Yonsei University's Underwood International College. His research covers conflict resolution, regional security architecture and power dynamics across the Asia-Pacific and Eurasia; he is currently comparing the livelihoods of displaced and non-displaced households in Sudan since 2023. He is a researcher with the Underwood International Development Academia and has represented Yonsei University in national and international Model United Nations delegations.",
      fr: "Chercheur en relations internationales et en sécurité basé à Séoul, il étudie à l'Underwood International College de l'université Yonsei. Ses recherches portent sur la résolution des conflits, l'architecture de sécurité régionale et les rapports de force en Asie-Pacifique et en Eurasie ; il compare actuellement les moyens de subsistance des ménages déplacés et non déplacés au Soudan depuis 2023. Il est chercheur à l'Underwood International Development Academia et a représenté l'université Yonsei dans des délégations de simulations des Nations unies, nationales et internationales.",
      th: "นักวิจัยด้านความสัมพันธ์ระหว่างประเทศและความมั่นคง ประจำกรุงโซล กำลังศึกษาที่วิทยาลัยนานาชาติอันเดอร์วูด มหาวิทยาลัยยอนเซ งานวิจัยของเขาครอบคลุมการแก้ไขความขัดแย้ง โครงสร้างความมั่นคงระดับภูมิภาค และพลวัตเชิงอำนาจในเอเชีย-แปซิฟิกและยูเรเชีย ปัจจุบันเขากำลังเปรียบเทียบการดำรงชีพของครัวเรือนที่พลัดถิ่นและไม่พลัดถิ่นในซูดานนับตั้งแต่ปี 2023 เขาเป็นนักวิจัยของ Underwood International Development Academia และเคยเป็นตัวแทนมหาวิทยาลัยยอนเซในคณะผู้แทนการประชุมสหประชาชาติจำลองทั้งระดับประเทศและระดับนานาชาติ",
      sw: "Mtafiti wa mahusiano ya kimataifa na usalama anayeishi Seoul, akisoma katika Chuo cha Kimataifa cha Underwood cha Chuo Kikuu cha Yonsei. Utafiti wake unahusu utatuzi wa migogoro, mfumo wa usalama wa kikanda na mizani ya nguvu katika Asia-Pasifiki na Eurasia; kwa sasa analinganisha maisha ya kaya zilizohamishwa na zisizohamishwa nchini Sudan tangu 2023. Ni mtafiti katika Underwood International Development Academia na amewakilisha Chuo Kikuu cha Yonsei katika ujumbe wa kitaifa na kimataifa wa Mfano wa Umoja wa Mataifa."
    }
  },
  {
    id: "albert",
    group: "researcher",
    name: "Albert (Kyi Thwin Ko Ko) Dominic",
    field: { en: "migration and development, migrant workers and humanitarian support", fr: "migrations et développement, travailleurs migrants et aide humanitaire", th: "การย้ายถิ่นและการพัฒนา แรงงานข้ามชาติ และความช่วยเหลือด้านมนุษยธรรม", sw: "uhamiaji na maendeleo, wafanyakazi wahamiaji na msaada wa kibinadamu" },
    photo: "assets/img/team/albert-dominic.jpg",
    role: {
      en: "MIGRATION AND DEVELOPMENT RESEARCHER · MYANMAR",
      fr: "CHERCHEUR EN MIGRATIONS ET DÉVELOPPEMENT · MYANMAR",
      th: "นักวิจัยด้านการย้ายถิ่นและการพัฒนา · เมียนมา",
      sw: "MTAFITI WA UHAMIAJI NA MAENDELEO · MYANMAR"
    },
    bio: {
      en: "Myanmar researcher and educator based in Bangkok and Chiang Rai, Thailand, completing an MA in International Development at Mae Fah Luang University. His master's research looks at how migrant workers from Myanmar in Chiang Rai receive humanitarian and community support. He holds a BA (Hons) from Oxford Brookes University, completed through Strategy First University, has taught English to young learners for more than four years, and is Vice-President of For The Future Myanmar (FTFMM), a youth nonprofit built around the Sustainable Development Goals.",
      fr: "Chercheur et enseignant originaire du Myanmar, basé à Bangkok et à Chiang Rai, en Thaïlande, il termine un master en développement international à l'université Mae Fah Luang. Son mémoire étudie comment les travailleurs migrants venus du Myanmar à Chiang Rai reçoivent une aide humanitaire et communautaire. Titulaire d'une licence (BA Hons) de l'université Oxford Brookes, obtenue à la Strategy First University, il enseigne l'anglais aux jeunes apprenants depuis plus de quatre ans et est vice-président de For The Future Myanmar (FTFMM), une association de jeunes fondée sur les objectifs de développement durable.",
      th: "นักวิจัยและนักการศึกษาชาวเมียนมา ประจำกรุงเทพฯ และเชียงราย ประเทศไทย กำลังศึกษาปริญญาโทสาขาการพัฒนาระหว่างประเทศที่มหาวิทยาลัยแม่ฟ้าหลวง งานวิจัยระดับปริญญาโทของเขาศึกษาว่าแรงงานข้ามชาติจากเมียนมาในเชียงรายได้รับความช่วยเหลือด้านมนุษยธรรมและการสนับสนุนจากชุมชนอย่างไร เขาสำเร็จการศึกษาปริญญาตรีเกียรตินิยม (BA Hons) จากมหาวิทยาลัยออกซฟอร์ดบรุกส์ ผ่านมหาวิทยาลัยสแตรทิจีเฟิร์สต์ มีประสบการณ์สอนภาษาอังกฤษให้ผู้เรียนวัยเยาว์มากกว่าสี่ปี และเป็นรองประธานของ For The Future Myanmar (FTFMM) องค์กรเยาวชนไม่แสวงหากำไรที่ทำงานตามเป้าหมายการพัฒนาที่ยั่งยืน",
      sw: "Mtafiti na mwalimu kutoka Myanmar anayeishi Bangkok na Chiang Rai, Thailand, akimalizia shahada ya uzamili katika Maendeleo ya Kimataifa katika Chuo Kikuu cha Mae Fah Luang. Utafiti wake wa uzamili unachunguza jinsi wafanyakazi wahamiaji kutoka Myanmar walioko Chiang Rai wanavyopata msaada wa kibinadamu na wa jamii. Ana shahada ya kwanza (BA Hons) kutoka Chuo Kikuu cha Oxford Brookes, aliyoipata kupitia Chuo Kikuu cha Strategy First, amefundisha Kiingereza kwa wanafunzi wadogo kwa zaidi ya miaka minne, na ni Makamu wa Rais wa For The Future Myanmar (FTFMM), shirika la vijana lisilo la faida linalojengwa juu ya Malengo ya Maendeleo Endelevu."
    }
  }
];
