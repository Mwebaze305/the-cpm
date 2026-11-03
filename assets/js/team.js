/* The team, in display order. To add a member, copy a block and fill in:
   - name, photo (assets/img/team/..., portrait about 4:5)
   - role: short label in capitals, per language
   - bio: two or three sentences, per language (only "en" is required;
     a missing language shows the English text)
   - bioKey instead of bio: reuse a sentence already in the language files
   - id: short name used in links (team.html#m-id) and in dispatches.js
   - field: a few words on their expertise, per language (shown on dispatches)
   - group: "founder" (Founders page), "expert" or "researcher" (Team page)
   - junior: true for junior researchers (optional) */
window.CPM_TEAM = [
  {
    id: "aaron",
    group: "founder",
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
  }
];
