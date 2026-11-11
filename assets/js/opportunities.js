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
  updated: "2026-11-12",
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
      id: "daad-busitema",
      type: "scholarship",
      org: "DAAD and Busitema University",
      region: "gl",
      deadline: "2026-11-12",
      link: "https://www2.daad.de/deutschland/stipendium/datenbank/en/21148-scholarship-database/?detail=10000486",
      title: {
        en: "DAAD scholarship: MSc Climate Change and Disaster Management, Busitema University, Uganda",
        fr: "Bourse DAAD : master en changement climatique et gestion des catastrophes, université de Busitema, Ouganda",
        th: "ทุน DAAD: ปริญญาโทสาขาการเปลี่ยนแปลงสภาพภูมิอากาศและการจัดการภัยพิบัติ มหาวิทยาลัยบูซิเทมา ยูกันดา",
        sw: "Ufadhili wa DAAD: Shahada ya Uzamili ya Mabadiliko ya Tabianchi na Usimamizi wa Maafa, Chuo Kikuu cha Busitema, Uganda"
      },
      summary: {
        en: "A DAAD In-Country/In-Region master's scholarship for the 2027 intake, covering course fees and a monthly allowance.",
        fr: "Une bourse de master DAAD In-Country/In-Region pour la rentrée 2027, qui couvre les frais de scolarité et une allocation mensuelle.",
        th: "ทุนปริญญาโท DAAD In-Country/In-Region สำหรับรุ่นเข้าศึกษาปี 2027 ครอบคลุมค่าเล่าเรียนและค่าใช้จ่ายรายเดือน",
        sw: "Ufadhili wa shahada ya uzamili wa DAAD In-Country/In-Region kwa udahili wa 2027, unaogharamia ada na posho ya kila mwezi."
      },
      who: {
        en: "Citizens or permanent residents of sub-Saharan African countries, as set out in the course call.",
        fr: "Citoyens ou résidents permanents des pays d'Afrique subsaharienne, selon les conditions de l'appel.",
        th: "พลเมืองหรือผู้มีถิ่นพำนักถาวรในประเทศแถบแอฟริกาใต้สะฮารา ตามเงื่อนไขของประกาศรับสมัคร",
        sw: "Raia au wakazi wa kudumu wa nchi za Afrika kusini mwa Sahara, kwa mujibu wa tangazo la kozi."
      },
      checked: "2026-11-12"
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
      checked: "2026-11-12"
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
