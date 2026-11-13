/* Opportunities for scholars and practitioners in the Great Lakes, the Nile Basin and Southeast Asia:
   fellowships, scholarships, conferences and roles. Shown on opportunities.html
   and on the home page. Items whose deadline has passed hide themselves.

   updated: the day this list was last reviewed (YYYY-MM-DD)
   Each item:
   - id: short unique slug
   - type: fellowship | scholarship | grant | event | role | partnership
   - ours: true for The Credence Letters' own calls
   - org: who runs it (name, not translated)
   - region: gl | nile | sea | africa | both (all three of our regions) | global (who it is for, or where it happens)
   - focus: health | peace | rivers | trade (optional)
   - deadline: YYYY-MM-DD, or rolling: true, or eventStart / eventEnd for events
   - title, summary, who: per language; only "en" is required
   - link: the organiser's page; checked: the day the details were checked
   Rules: list only calls whose details were checked on the organiser's page or
   a reliable listing; never guess a deadline. */
window.CPM_OPPORTUNITIES = {
  updated: "2026-11-14",
  items: [
    {
      id: "exchange-of-notes",
      type: "partnership",
      ours: true,
      org: "The Credence Letters",
      region: "both",
      rolling: true,
      link: "exchange.html#register",
      title: {
        en: "Exchange of Notes: present your note",
        fr: "Échange de notes : présentez votre note",
        th: "การแลกเปลี่ยนหนังสือ: ยื่นหนังสือของคุณ",
        sw: "Kubadilishana Hati: wasilisha hati yako"
      },
      summary: {
        en: "Be paired with a scholar or practitioner in another region and write a short policy note together on one of our four focus areas. Free.",
        fr: "Soyez jumelé avec un chercheur ou un praticien d'une autre région et rédigez ensemble une courte note de politique sur l'un de nos quatre axes de travail. Gratuit.",
        th: "รับการจับคู่กับนักวิชาการหรือผู้ปฏิบัติงานในอีกภูมิภาคหนึ่ง และเขียนบันทึกเชิงนโยบายสั้น ๆ ร่วมกันในหนึ่งในสี่ประเด็นหลักของเรา ไม่มีค่าใช้จ่าย",
        sw: "Unganishwa na msomi au mtaalamu wa kanda nyingine na mwandike pamoja hati fupi ya sera kuhusu mojawapo ya maeneo yetu manne ya kipaumbele. Bure."
      },
      who: {
        en: "Students from final-year undergraduate to PhD, researchers and practitioners in the Great Lakes, the Nile Basin or Southeast Asia.",
        fr: "Étudiants de la dernière année de licence au doctorat, chercheurs et praticiens des Grands Lacs, du bassin du Nil ou d'Asie du Sud-Est.",
        th: "นักศึกษาตั้งแต่ปริญญาตรีปีสุดท้ายถึงปริญญาเอก นักวิจัย และผู้ปฏิบัติงานในภูมิภาคเกรตเลกส์ ลุ่มแม่น้ำไนล์ หรือเอเชียตะวันออกเฉียงใต้",
        sw: "Wanafunzi kuanzia mwaka wa mwisho wa shahada ya kwanza hadi uzamivu, watafiti na wataalamu wa Maziwa Makuu, Bonde la Nile au Kusini-Mashariki mwa Asia."
      },
      checked: "2026-11-02"
    },
    {
      id: "researchers",
      type: "role",
      ours: true,
      org: "The Credence Letters",
      region: "both",
      rolling: true,
      link: "researchers-wanted.html",
      title: {
        en: "Researchers wanted",
        fr: "Nous recrutons des chercheurs",
        th: "รับสมัครนักวิจัย",
        sw: "Tunatafuta watafiti"
      },
      summary: {
        en: "We're looking for colleagues and students to research with us.",
        fr: "Nous cherchons des collègues et des étudiants pour faire de la recherche avec nous.",
        th: "เรากำลังมองหาเพื่อนร่วมงานและนักศึกษามาร่วมทำวิจัยกับเรา",
        sw: "Tunatafuta wenzetu na wanafunzi wa kutafiti pamoja nasi."
      },
      who: {
        en: "Students and researchers in the Great Lakes, the Nile Basin or Southeast Asia.",
        fr: "Étudiants et chercheurs des Grands Lacs, du bassin du Nil ou d'Asie du Sud-Est.",
        th: "นักศึกษาและนักวิจัยในภูมิภาคเกรตเลกส์ ลุ่มแม่น้ำไนล์ หรือเอเชียตะวันออกเฉียงใต้",
        sw: "Wanafunzi na watafiti wa Maziwa Makuu, Bonde la Nile au Kusini-Mashariki mwa Asia."
      },
      checked: "2026-11-02"
    },
    {
      id: "oborot-2026",
      type: "event",
      org: "Mae Fah Luang University and The Hong Kong Polytechnic University",
      region: "sea",
      eventStart: "2026-12-11",
      eventEnd: "2026-12-13",
      link: "https://www.polyu.edu.hk/shtm/news-and-events/events/2026/12/4th_oborot/",
      title: {
        en: "4th One Belt • One Road • One Tourism International Conference, Chiang Rai",
        fr: "4e conférence internationale One Belt • One Road • One Tourism, Chiang Rai",
        th: "การประชุมนานาชาติ One Belt • One Road • One Tourism ครั้งที่ 4 เชียงราย",
        sw: "Mkutano wa 4 wa Kimataifa wa One Belt • One Road • One Tourism, Chiang Rai"
      },
      summary: {
        en: "An international tourism conference in Chiang Rai, hosted by Mae Fah Luang University and the School of Hotel and Tourism Management at The Hong Kong Polytechnic University.",
        fr: "Une conférence internationale sur le tourisme à Chiang Rai, organisée par l'université Mae Fah Luang et l'école d'hôtellerie et de tourisme de l'université polytechnique de Hong Kong.",
        th: "การประชุมนานาชาติด้านการท่องเที่ยวที่เชียงราย จัดโดยมหาวิทยาลัยแม่ฟ้าหลวงและคณะการโรงแรมและการท่องเที่ยว มหาวิทยาลัยโปลีเทคนิคฮ่องกง",
        sw: "Mkutano wa kimataifa wa utalii huko Chiang Rai, unaoandaliwa na Chuo Kikuu cha Mae Fah Luang na Shule ya Usimamizi wa Hoteli na Utalii ya Chuo Kikuu cha Polytechnic cha Hong Kong."
      },
      who: {
        en: "Researchers, students and practitioners in tourism and regional development. See the organisers' page for registration.",
        fr: "Chercheurs, étudiants et praticiens du tourisme et du développement régional. Voir la page des organisateurs pour l'inscription.",
        th: "นักวิจัย นักศึกษา และผู้ปฏิบัติงานด้านการท่องเที่ยวและการพัฒนาภูมิภาค ดูรายละเอียดการลงทะเบียนในหน้าของผู้จัด",
        sw: "Watafiti, wanafunzi na wataalamu wa utalii na maendeleo ya kikanda. Angalia ukurasa wa waandaaji kwa usajili."
      },
      checked: "2026-11-13"
    },
    {
      id: "gitoc-mnet-2027",
      type: "grant",
      org: "Global Initiative Against Transnational Organized Crime (MNET-CTC)",
      region: "sea",
      deadline: "2026-12-07",
      link: "https://globalinitiative.net/announcements/calling-innovative-proposals-to-combat-organized-crime-in-the-mekong/",
      title: {
        en: "MNET-CTC Collaboration Grants: civil society projects against organised crime in the Mekong",
        fr: "Subventions de collaboration MNET-CTC : projets de la société civile contre la criminalité organisée dans le Mékong",
        th: "ทุนความร่วมมือ MNET-CTC: โครงการภาคประชาสังคมเพื่อต่อต้านอาชญากรรมข้ามชาติในลุ่มน้ำโขง",
        sw: "Ruzuku za Ushirikiano za MNET-CTC: miradi ya asasi za kiraia dhidi ya uhalifu wa kupangwa katika eneo la Mekong"
      },
      summary: {
        en: "Grants, mostly of AUD 30,000 to 65,000, for projects on illegal drugs, financial crime or child sexual exploitation, run from February 2027 to February 2028. Pre-applications are due by 7 December 2026 (23:59 CET); cross-border projects are prioritised.",
        fr: "Des subventions, le plus souvent de 30 000 à 65 000 dollars australiens, pour des projets sur les drogues illicites, la criminalité financière ou l'exploitation sexuelle des enfants, menés de février 2027 à février 2028. Pré-candidatures jusqu'au 7 décembre 2026 (23 h 59 CET) ; les projets transfrontaliers sont prioritaires.",
        th: "ทุนส่วนใหญ่ 30,000–65,000 ดอลลาร์ออสเตรเลีย สำหรับโครงการด้านยาเสพติด อาชญากรรมทางการเงิน หรือการแสวงประโยชน์ทางเพศจากเด็ก ดำเนินการระหว่างกุมภาพันธ์ 2027 ถึงกุมภาพันธ์ 2028 ส่งใบสมัครเบื้องต้นภายในวันที่ 7 ธันวาคม 2026 (23:59 น. เวลายุโรปกลาง) โดยให้ความสำคัญกับโครงการข้ามพรมแดน",
        sw: "Ruzuku, nyingi kati ya dola za Australia 30,000 na 65,000, kwa miradi kuhusu dawa za kulevya haramu, uhalifu wa kifedha au unyonyaji wa kingono wa watoto, itakayotekelezwa kuanzia Februari 2027 hadi Februari 2028. Maombi ya awali yanatakiwa kufikia tarehe 7 Desemba 2026 (saa 23:59 CET); miradi ya kuvuka mipaka inapewa kipaumbele."
      },
      who: {
        en: "Civil society organisations in Cambodia, Laos, Myanmar, Thailand or Vietnam; joint applications from two or three organisations are welcome, each with a letter of support.",
        fr: "Organisations de la société civile au Cambodge, au Laos, au Myanmar, en Thaïlande ou au Vietnam ; les candidatures conjointes de deux ou trois organisations sont bienvenues, chacune avec une lettre de soutien.",
        th: "องค์กรภาคประชาสังคมในกัมพูชา ลาว เมียนมา ไทย หรือเวียดนาม ยินดีรับใบสมัครร่วมจากสองหรือสามองค์กร โดยแต่ละองค์กรต้องมีหนังสือสนับสนุน",
        sw: "Asasi za kiraia nchini Kambodia, Laos, Myanmar, Thailand au Vietnam; maombi ya pamoja kutoka asasi mbili au tatu yanakaribishwa, kila moja ikiwa na barua ya kuunga mkono."
      },
      checked: "2026-11-14"
    },
    {
      id: "noha-2027",
      type: "scholarship",
      org: "NOHA+ Erasmus Mundus consortium",
      region: "global",
      focus: "health",
      deadline: "2026-12-15",
      link: "https://apply.nohanet.org/",
      title: {
        en: "Erasmus Mundus scholarships: NOHA+ Master's in International Humanitarian Action, 2027–2029",
        fr: "Bourses Erasmus Mundus : master NOHA+ en action humanitaire internationale, 2027–2029",
        th: "ทุน Erasmus Mundus: หลักสูตรปริญญาโท NOHA+ ด้านปฏิบัติการด้านมนุษยธรรมระหว่างประเทศ 2027–2029",
        sw: "Ufadhili wa Erasmus Mundus: Shahada ya Uzamili ya NOHA+ katika Hatua za Kibinadamu za Kimataifa, 2027–2029"
      },
      summary: {
        en: "A two-year joint master's at European universities on humanitarian action, with Erasmus Mundus scholarships for the 2027–2029 cohort.",
        fr: "Un master conjoint de deux ans dans des universités européennes sur l'action humanitaire, avec des bourses Erasmus Mundus pour la promotion 2027–2029.",
        th: "หลักสูตรปริญญาโทร่วมสองปีในมหาวิทยาลัยยุโรปด้านปฏิบัติการด้านมนุษยธรรม พร้อมทุน Erasmus Mundus สำหรับรุ่น 2027–2029",
        sw: "Shahada ya uzamili ya pamoja ya miaka miwili katika vyuo vikuu vya Ulaya kuhusu hatua za kibinadamu, na ufadhili wa Erasmus Mundus kwa kundi la 2027–2029."
      },
      who: {
        en: "Applicants from any country with a bachelor's degree in a relevant field, completed by 15 December 2026, and the required language level.",
        fr: "Candidats de tous pays titulaires d'une licence dans un domaine pertinent, obtenue au plus tard le 15 décembre 2026, et du niveau de langue requis.",
        th: "ผู้สมัครจากทุกประเทศที่สำเร็จปริญญาตรีในสาขาที่เกี่ยวข้องภายในวันที่ 15 ธันวาคม 2026 และมีระดับภาษาตามที่กำหนด",
        sw: "Waombaji kutoka nchi yoyote wenye shahada ya kwanza katika fani husika, iliyokamilika kufikia 15 Desemba 2026, na kiwango cha lugha kinachohitajika."
      },
      checked: "2026-11-12"
    },
    {
      id: "emmir-2027",
      type: "scholarship",
      org: "EMMIR Erasmus Mundus consortium (University of Oldenburg)",
      region: "global",
      focus: "health",
      deadline: "2026-12-20",
      link: "https://www.emmir.org/applications",
      title: {
        en: "Erasmus Mundus scholarships: European Master in Migration and Intercultural Relations (EMMIR), 2027–2029",
        fr: "Bourses Erasmus Mundus : master européen Migrations et relations interculturelles (EMMIR), 2027–2029",
        th: "ทุน Erasmus Mundus: หลักสูตรปริญญาโทยุโรปด้านการย้ายถิ่นและความสัมพันธ์ระหว่างวัฒนธรรม (EMMIR) 2027–2029",
        sw: "Ufadhili wa Erasmus Mundus: Shahada ya Uzamili ya Ulaya ya Uhamaji na Mahusiano ya Kitamaduni (EMMIR), 2027–2029"
      },
      summary: {
        en: "A two-year joint master's in migration studies run by a consortium of eight universities in Europe, Africa and Asia, starting in Oldenburg, Germany, in September 2027. Erasmus Mundus scholars receive €1,400 a month for 24 months, with health insurance and university fees covered; non-fee-paying places are also offered.",
        fr: "Un master conjoint de deux ans en études migratoires, porté par un consortium de huit universités d'Europe, d'Afrique et d'Asie, qui débute à Oldenburg (Allemagne) en septembre 2027. Les boursiers Erasmus Mundus reçoivent 1 400 € par mois pendant 24 mois, avec assurance maladie et frais universitaires pris en charge ; des places sans frais de participation sont aussi proposées.",
        th: "หลักสูตรปริญญาโทร่วมสองปีด้านการศึกษาการย้ายถิ่น ดำเนินการโดยกลุ่มมหาวิทยาลัย 8 แห่งในยุโรป แอฟริกา และเอเชีย เริ่มที่เมืองโอลเดนบูร์ก ประเทศเยอรมนี ในเดือนกันยายน 2027 ผู้ได้รับทุน Erasmus Mundus ได้รับเงินเดือนละ 1,400 ยูโรเป็นเวลา 24 เดือน พร้อมประกันสุขภาพและค่าธรรมเนียมมหาวิทยาลัย และยังมีที่นั่งแบบไม่เสียค่าเล่าเรียนด้วย",
        sw: "Shahada ya uzamili ya pamoja ya miaka miwili kuhusu masomo ya uhamaji, inayoendeshwa na muungano wa vyuo vikuu vinane vya Ulaya, Afrika na Asia, ikianzia Oldenburg, Ujerumani, Septemba 2027. Wanaopata ufadhili wa Erasmus Mundus hupokea €1,400 kwa mwezi kwa miezi 24, pamoja na bima ya afya na ada za chuo; nafasi zisizo na ada ya masomo pia zinatolewa."
      },
      who: {
        en: "Graduates with a first degree in a field relevant to migration studies (for example social sciences, law, economics or development studies), completed by 20 December 2026, and proof of English. Full entry requirements are on the EMMIR site.",
        fr: "Diplômés d'un premier cycle dans un domaine lié aux études migratoires (par exemple sciences sociales, droit, économie ou études du développement), obtenu au plus tard le 20 décembre 2026, avec une preuve de niveau d'anglais. Les conditions complètes figurent sur le site d'EMMIR.",
        th: "ผู้สำเร็จปริญญาตรีในสาขาที่เกี่ยวข้องกับการศึกษาการย้ายถิ่น (เช่น สังคมศาสตร์ นิติศาสตร์ เศรษฐศาสตร์ หรือการศึกษาการพัฒนา) ภายในวันที่ 20 ธันวาคม 2026 และมีหลักฐานความสามารถภาษาอังกฤษ ดูคุณสมบัติทั้งหมดได้ที่เว็บไซต์ EMMIR",
        sw: "Wahitimu wenye shahada ya kwanza katika fani inayohusiana na masomo ya uhamaji (kwa mfano sayansi ya jamii, sheria, uchumi au masomo ya maendeleo), iliyokamilika kufikia 20 Desemba 2026, na uthibitisho wa Kiingereza. Masharti kamili yako kwenye tovuti ya EMMIR."
      },
      checked: "2026-11-12"
    },
    {
      id: "gms-forum-2027",
      type: "event",
      org: "Paragon International University",
      region: "sea",
      focus: "trade",
      deadline: "2027-01-15",
      link: "https://www.paragoniu.edu.kh/call-for-papers-2nd-international-conference/",
      title: {
        en: "Call for papers: Greater Mekong Subregion Forum on Mekong–EU cooperation, Phnom Penh",
        fr: "Appel à communications : Forum de la sous-région du Grand Mékong sur la coopération Mékong–UE, Phnom Penh",
        th: "เปิดรับบทความ: เวทีอนุภูมิภาคลุ่มแม่น้ำโขงว่าด้วยความร่วมมือแม่โขง–สหภาพยุโรป พนมเปญ",
        sw: "Mwito wa makala: Jukwaa la Kanda Ndogo ya Mekong Kubwa kuhusu ushirikiano wa Mekong na EU, Phnom Penh"
      },
      summary: {
        en: "A conference on connectivity, trade and sustainable development, including Mekong River governance, water security and ASEAN, at Paragon International University on 12 and 13 May 2027. Abstracts are due by 15 January 2027. No registration fee.",
        fr: "Une conférence sur la connectivité, le commerce et le développement durable, y compris la gouvernance du Mékong, la sécurité de l'eau et l'ASEAN, à l'université internationale Paragon les 12 et 13 mai 2027. Résumés attendus au plus tard le 15 janvier 2027. Pas de frais d'inscription.",
        th: "การประชุมว่าด้วยความเชื่อมโยง การค้า และการพัฒนาที่ยั่งยืน รวมถึงธรรมาภิบาลแม่น้ำโขง ความมั่นคงทางน้ำ และอาเซียน ที่มหาวิทยาลัยนานาชาติพารากอน วันที่ 12 และ 13 พฤษภาคม 2027 ส่งบทคัดย่อภายในวันที่ 15 มกราคม 2027 ไม่มีค่าลงทะเบียน",
        sw: "Mkutano kuhusu muunganiko, biashara na maendeleo endelevu, ukiwemo usimamizi wa Mto Mekong, usalama wa maji na ASEAN, katika Chuo Kikuu cha Kimataifa cha Paragon tarehe 12 na 13 Mei 2027. Muhtasari uwasilishwe kufikia tarehe 15 Januari 2027. Hakuna ada ya usajili."
      },
      who: {
        en: "Researchers and practitioners working on the Mekong region, ASEAN or EU–Mekong relations. Participants pay their own travel and accommodation.",
        fr: "Chercheurs et praticiens travaillant sur la région du Mékong, l'ASEAN ou les relations UE–Mékong. Les participants prennent en charge leur voyage et leur hébergement.",
        th: "นักวิจัยและผู้ปฏิบัติงานด้านภูมิภาคแม่น้ำโขง อาเซียน หรือความสัมพันธ์สหภาพยุโรป–แม่โขง ผู้เข้าร่วมออกค่าเดินทางและที่พักเอง",
        sw: "Watafiti na wataalamu wanaoshughulikia kanda ya Mekong, ASEAN au uhusiano wa EU na Mekong. Washiriki hulipia usafiri na malazi yao wenyewe."
      },
      checked: "2026-11-14"
    },
    {
      id: "ssrc-apdd-2027",
      type: "fellowship",
      org: "Social Science Research Council (SSRC)",
      region: "africa",
      focus: "peace",
      deadline: "2027-01-15",
      link: "https://www.ssrc.org/programs/african-peacebuilding-and-developmental-dynamics-apdd/individual-research-fellowships/",
      title: {
        en: "APDD Individual Research Fellowships 2027: peacebuilding and development in Africa",
        fr: "Bourses de recherche individuelles APDD 2027 : consolidation de la paix et développement en Afrique",
        th: "ทุนวิจัยรายบุคคล APDD 2027: การสร้างสันติภาพและการพัฒนาในแอฟริกา",
        sw: "Ufadhili wa Utafiti wa Mtu Binafsi wa APDD 2027: ujenzi wa amani na maendeleo barani Afrika"
      },
      summary: {
        en: "Fellowships for field research and writing on conflict, peacebuilding and development in Africa, with workshops and mentoring by senior scholars.",
        fr: "Des bourses pour la recherche de terrain et la rédaction sur les conflits, la consolidation de la paix et le développement en Afrique, avec ateliers et mentorat par des chercheurs confirmés.",
        th: "ทุนสำหรับการวิจัยภาคสนามและการเขียนงานด้านความขัดแย้ง การสร้างสันติภาพ และการพัฒนาในแอฟริกา พร้อมการประชุมเชิงปฏิบัติการและการให้คำปรึกษาจากนักวิชาการอาวุโส",
        sw: "Ufadhili kwa utafiti wa nyanjani na uandishi kuhusu migogoro, ujenzi wa amani na maendeleo barani Afrika, pamoja na warsha na ushauri kutoka kwa wasomi waandamizi."
      },
      who: {
        en: "African citizens living in Africa: academics with a PhD (since January 2016) at an African university or research organisation, or policy analysts and practitioners with a master's and five years of peacebuilding work.",
        fr: "Citoyens africains vivant en Afrique : universitaires titulaires d'un doctorat (depuis janvier 2016) dans une université ou un centre de recherche africain, ou analystes et praticiens titulaires d'un master avec cinq ans d'expérience en consolidation de la paix.",
        th: "พลเมืองแอฟริกันที่อาศัยอยู่ในแอฟริกา ได้แก่ นักวิชาการที่จบปริญญาเอก (ตั้งแต่มกราคม 2016) และสังกัดมหาวิทยาลัยหรือองค์กรวิจัยในแอฟริกา หรือนักวิเคราะห์นโยบายและผู้ปฏิบัติงานที่มีปริญญาโทและประสบการณ์ด้านการสร้างสันติภาพห้าปี",
        sw: "Raia wa Afrika wanaoishi Afrika: wanataaluma wenye shahada ya uzamivu (tangu Januari 2016) katika chuo kikuu au taasisi ya utafiti ya Afrika, au wachambuzi wa sera na wataalamu wenye shahada ya uzamili na uzoefu wa miaka mitano katika ujenzi wa amani."
      },
      checked: "2026-11-02"
    }
  ]
};
