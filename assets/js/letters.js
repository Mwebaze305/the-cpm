/* The letters. Newest letter = highest "no"; it becomes the home page's letter and hero cover.

   To add a letter, copy the block below, raise "no", and fill in:
   - date: publication date, YYYY-MM-DD
   - cover: null, or { src: "assets/img/covers/credence-2.jpg",
                        credit: "Photo: Name, CC BY-SA 4.0, via Wikimedia Commons",
                        alt: { en: "...", fr: "...", th: "...", sw: "..." } }
   - sources: APA references (HTML allowed for italics and links)
   - content: one entry per language. Only "en" is required; any language left out
     shows the English original with a note to the reader.
     Body items: { h2: "Heading" }, { p: "Paragraph (HTML allowed)" }, { ol: ["item", "item"] }
   The salutation ("Excellency,"), the closing formula and the disclaimer are added
   automatically in each language. */

(function () {
  var PRD = "https://thailand.prd.go.th/en/content/category/detail/id/49/iid/536939";
  var ECHO = "https://reliefweb.int/report/uganda/uganda-refugee-population-milestone-dg-echo-unhcr-echo-daily-flash-16-april-2026";
  var citePRD = '(<a href="' + PRD + '" target="_blank" rel="noopener">Government Public Relations Department, 2026</a>)';
  var citeECHO = '(<a href="' + ECHO + '" target="_blank" rel="noopener">ECHO &amp; UNHCR, 2026</a>)';

  window.CPM_LETTERS = [
    {
      no: 1,
      date: "2026-10-30",
      author: "Aaron Mwesigwa Mwebaze",
      cover: null,
      sources: [
        'European Civil Protection and Humanitarian Aid Operations (ECHO) &amp; UNHCR. (2026, April 16). <i>Uganda – Refugee population milestone</i>. ReliefWeb. <a href="' + ECHO + '" target="_blank" rel="noopener">' + ECHO + '</a>',
        'Government Public Relations Department, Thailand. (2026). <i>Relaunching the Thailand–Africa Initiative in Ethiopia</i>. <a href="' + PRD + '" target="_blank" rel="noopener">' + PRD + '</a>'
      ],
      content: {
        en: {
          title: "Why a letter of credence",
          place: "Chiang Rai, Thailand",
          excerpt: [
            "The Great Lakes and Southeast Asia share more than they admit.",
            "Yet they mostly learn about each other through third parties."
          ],
          body: [
            { p: "When an ambassador arrives in a new capital, the first act is to present a letter of credence to the head of state. The letter does not argue a case. It asks for trust: the bearer speaks in good faith and deserves to be heard." },
            { p: "The Credence par Mwesigwa is an independent publication built on that principle. Its aim is partnership between the Great Lakes and Southeast Asia, two Global South regions working toward sustainable development, so that scholars and practitioners can exchange ideas, research shared problems and push for better policy in their communities." },
            { p: "The word does double work. Credence is the trust a reader gives a writer; in diplomacy, it is also the paper that turns a stranger into a representative. Each week The CPM will present one letter, and each must earn your trust on its own merits." },
            { h2: "Two regions that rarely speak directly" },
            { p: "The Great Lakes and Southeast Asia share more than they admit. Both live along rivers shared by many states and host people displaced by their neighbours' wars. Both stand between larger powers competing for their loyalty." },
            { p: "Yet they mostly learn about each other through third parties: Western media, Chinese loans, the occasional trade fair. That is starting to change from the Thai side. On 28 August 2026, Deputy Prime Minister and Foreign Minister Sihasak Phuangketkeow relaunched the Thailand–Africa Initiative in Addis Ababa, built on political, economic, development and global strategic cooperation " + citePRD + "." },
            { p: "Africa has its own reasons to look east. Uganda now hosts more than two million refugees, the largest number in Africa " + citeECHO + ". As aid shrinks, refugees and host communities compete for land, water and work. Thailand has managed displacement on its Myanmar border for decades, and both its lessons and its failures deserve study." },
            { h2: "What these letters will do" },
            { p: "Every week, one letter on one development. The letters will move between two subjects: security and governance in the Great Lakes, and how Africa and Southeast Asia deal with each other in trade, migration and diplomacy." },
            { p: "Each letter will do three things:" },
            { ol: [
              "Explain what happened, in plain words.",
              "Say why it matters for policy, and for whom.",
              "Offer an African reading, which international coverage too often leaves out."
            ] },
            { p: "These letters are written from Chiang Rai, near the Golden Triangle, where Thailand, Laos and Myanmar meet on the Mekong, and, as the publication grows, from the Great Lakes. Wherever they are written, they keep the same address: the space between the Nile and the Mekong." }
          ]
        },

        fr: {
          title: "Pourquoi une lettre de créance",
          place: "Chiang Rai, Thaïlande",
          excerpt: [
            "Les Grands Lacs et l'Asie du Sud-Est ont plus en commun qu'ils ne l'admettent.",
            "Pourtant, ils se connaissent surtout par l'intermédiaire de tiers."
          ],
          body: [
            { p: "Lorsqu'un ambassadeur arrive dans une nouvelle capitale, son premier acte est de remettre ses lettres de créance au chef de l'État. La lettre ne plaide aucune cause. Elle demande la confiance : son porteur parle de bonne foi et mérite d'être entendu." },
            { p: "The Credence par Mwesigwa est une publication indépendante fondée sur ce principe. Son objectif est un partenariat entre les Grands Lacs et l'Asie du Sud-Est, deux régions du Sud global engagées pour le développement durable, afin que chercheurs et praticiens échangent leurs idées, étudient des problèmes communs et œuvrent pour de meilleures politiques dans leurs communautés." },
            { p: "Le mot remplit une double fonction. La créance est la confiance qu'un lecteur accorde à un auteur ; en diplomatie, c'est aussi le document qui fait d'un inconnu un représentant. Chaque semaine, The CPM présentera une lettre, et chacune devra gagner votre confiance par ses propres mérites." },
            { h2: "Deux régions qui se parlent rarement directement" },
            { p: "Les Grands Lacs et l'Asie du Sud-Est ont plus en commun qu'ils ne l'admettent. Tous deux vivent le long de fleuves partagés par de nombreux États et accueillent des personnes déplacées par les guerres de leurs voisins. Tous deux se tiennent entre de grandes puissances qui se disputent leur allégeance." },
            { p: "Pourtant, ils se connaissent surtout par l'intermédiaire de tiers : les médias occidentaux, les prêts chinois, quelque foire commerciale occasionnelle. Cela commence à changer du côté thaïlandais. Le 28 août 2026, le vice-Premier ministre et ministre des Affaires étrangères Sihasak Phuangketkeow a relancé à Addis-Abeba l'Initiative Thaïlande–Afrique, fondée sur la coopération politique, économique, de développement et stratégique mondiale " + citePRD + "." },
            { p: "L'Afrique a ses propres raisons de regarder vers l'est. L'Ouganda accueille désormais plus de deux millions de réfugiés, le nombre le plus élevé d'Afrique " + citeECHO + ". À mesure que l'aide diminue, réfugiés et communautés d'accueil se disputent la terre, l'eau et le travail. La Thaïlande gère depuis des décennies les déplacements de population à sa frontière avec le Myanmar ; ses leçons comme ses échecs méritent d'être étudiés." },
            { h2: "Ce que feront ces lettres" },
            { p: "Chaque semaine, une lettre sur un seul événement. Les lettres alterneront entre deux sujets : la sécurité et la gouvernance dans les Grands Lacs, et la manière dont l'Afrique et l'Asie du Sud-Est traitent l'une avec l'autre en matière de commerce, de migration et de diplomatie." },
            { p: "Chaque lettre fera trois choses :" },
            { ol: [
              "Expliquer ce qui s'est passé, en termes simples.",
              "Dire pourquoi cela compte pour les politiques publiques, et pour qui.",
              "Proposer une lecture africaine, que la couverture internationale omet trop souvent."
            ] },
            { p: "Ces lettres sont écrites depuis Chiang Rai, près du Triangle d'or, où la Thaïlande, le Laos et le Myanmar se rejoignent sur le Mékong, et, à mesure que la publication grandit, depuis les Grands Lacs. Où qu'elles soient écrites, elles gardent la même adresse : l'espace entre le Nil et le Mékong." }
          ]
        },

        th: {
          title: "ทำไมต้องเป็นสาส์นตราตั้ง",
          place: "เชียงราย ประเทศไทย",
          excerpt: [
            "ภูมิภาคเกรตเลกส์และเอเชียตะวันออกเฉียงใต้มีสิ่งที่เหมือนกันมากกว่าที่ยอมรับ",
            "แต่ส่วนใหญ่ทั้งสองภูมิภาครู้จักกันผ่านบุคคลที่สาม"
          ],
          body: [
            { p: "เมื่อเอกอัครราชทูตเดินทางถึงเมืองหลวงแห่งใหม่ สิ่งแรกที่ต้องทำคือการยื่นสาส์นตราตั้งต่อประมุขแห่งรัฐ สาส์นนั้นไม่ได้โต้แย้งเพื่อพิสูจน์สิ่งใด หากแต่ขอความไว้วางใจ ว่าผู้ถือสาส์นพูดด้วยความสุจริตใจและควรค่าแก่การรับฟัง" },
            { p: "The Credence par Mwesigwa เป็นสื่อสิ่งพิมพ์อิสระที่ยึดหลักการนี้ เป้าหมายคือหุ้นส่วนระหว่างภูมิภาคเกรตเลกส์และเอเชียตะวันออกเฉียงใต้ สองภูมิภาคในโลกใต้ที่มุ่งสู่การพัฒนาที่ยั่งยืน เพื่อให้นักวิชาการและผู้ปฏิบัติงานได้แลกเปลี่ยนความคิด ร่วมกันศึกษาปัญหาที่มีร่วมกัน และผลักดันนโยบายที่ดีขึ้นในชุมชนของตน" },
            { p: "คำว่า credence ทำหน้าที่สองอย่าง ในด้านหนึ่งคือความเชื่อถือที่ผู้อ่านมอบให้ผู้เขียน ในทางการทูต ยังหมายถึงเอกสารที่เปลี่ยนคนแปลกหน้าให้กลายเป็นผู้แทน ทุกสัปดาห์ The CPM จะยื่นจดหมายหนึ่งฉบับ และแต่ละฉบับต้องได้รับความไว้วางใจจากท่านด้วยคุณค่าของตนเอง" },
            { h2: "สองภูมิภาคที่แทบไม่เคยพูดคุยกันโดยตรง" },
            { p: "ภูมิภาคเกรตเลกส์ของแอฟริกาและเอเชียตะวันออกเฉียงใต้มีสิ่งที่เหมือนกันมากกว่าที่ยอมรับ ทั้งสองภูมิภาคตั้งอยู่ริมแม่น้ำที่หลายรัฐใช้ร่วมกัน และให้ที่พักพิงแก่ผู้คนที่พลัดถิ่นจากสงครามของเพื่อนบ้าน ทั้งสองยืนอยู่ท่ามกลางมหาอำนาจที่แข่งขันกันเพื่อชิงความภักดี" },
            { p: "แต่ส่วนใหญ่ทั้งสองภูมิภาครู้จักกันผ่านบุคคลที่สาม ไม่ว่าจะเป็นสื่อตะวันตก เงินกู้จากจีน หรืองานแสดงสินค้าที่จัดขึ้นเป็นครั้งคราว สิ่งนี้เริ่มเปลี่ยนไปจากฝั่งไทย เมื่อวันที่ 28 สิงหาคม 2569 นายสีหศักดิ์ พวงเกตุแก้ว รองนายกรัฐมนตรีและรัฐมนตรีว่าการกระทรวงการต่างประเทศ ได้ฟื้นฟูข้อริเริ่มไทย–แอฟริกา (Thailand–Africa Initiative) ขึ้นใหม่ที่กรุงแอดดิสอาบาบา โดยตั้งอยู่บนความร่วมมือด้านการเมือง เศรษฐกิจ การพัฒนา และยุทธศาสตร์ระดับโลก " + citePRD },
            { p: "แอฟริกาเองก็มีเหตุผลที่จะมองมาทางตะวันออก ปัจจุบันยูกันดาให้ที่พักพิงแก่ผู้ลี้ภัยมากกว่าสองล้านคน ซึ่งมากที่สุดในทวีปแอฟริกา " + citeECHO + " เมื่อความช่วยเหลือลดลง ผู้ลี้ภัยและชุมชนเจ้าบ้านต้องแข่งขันกันเพื่อที่ดิน น้ำ และงาน ประเทศไทยจัดการปัญหาการพลัดถิ่นบริเวณชายแดนเมียนมามานานหลายทศวรรษ ทั้งบทเรียนและความล้มเหลวของไทยล้วนควรค่าแก่การศึกษา" },
            { h2: "จดหมายเหล่านี้จะทำอะไร" },
            { p: "ทุกสัปดาห์ จดหมายหนึ่งฉบับว่าด้วยเหตุการณ์หนึ่งเรื่อง จดหมายจะสลับกันระหว่างสองหัวข้อ ได้แก่ ความมั่นคงและธรรมาภิบาลในภูมิภาคเกรตเลกส์ และวิธีที่แอฟริกากับเอเชียตะวันออกเฉียงใต้มีปฏิสัมพันธ์กันในด้านการค้า การย้ายถิ่น และการทูต" },
            { p: "จดหมายแต่ละฉบับจะทำสามสิ่ง:" },
            { ol: [
              "อธิบายว่าเกิดอะไรขึ้นด้วยภาษาที่เข้าใจง่าย",
              "บอกว่าเหตุใดเรื่องนั้นจึงสำคัญต่อนโยบาย และสำคัญต่อใคร",
              "เสนอมุมมองแบบแอฟริกัน ซึ่งการรายงานข่าวระดับนานาชาติมักละเลย"
            ] },
            { p: "จดหมายเหล่านี้เขียนจากเชียงราย ใกล้สามเหลี่ยมทองคำ ที่ซึ่งไทย ลาว และเมียนมาบรรจบกันบนแม่น้ำโขง และเมื่อสื่อสิ่งพิมพ์นี้เติบโตขึ้น ก็จะเขียนจากภูมิภาคเกรตเลกส์ด้วย ไม่ว่าจะเขียนจากที่ใด จดหมายเหล่านี้ยังคงใช้ที่อยู่เดิม นั่นคือพื้นที่ระหว่างแม่น้ำไนล์และแม่น้ำโขง" }
          ]
        },

        sw: {
          title: "Kwa nini hati ya utambulisho",
          place: "Chiang Rai, Thailand",
          excerpt: [
            "Maziwa Makuu na Asia ya Kusini-Mashariki zinashiriki mengi kuliko zinavyokiri.",
            "Hata hivyo, mara nyingi zinajifunza kuhusu kila mmoja kupitia watu wa tatu."
          ],
          body: [
            { p: "Balozi anapowasili katika mji mkuu mpya, jambo la kwanza analofanya ni kuwasilisha hati ya utambulisho kwa mkuu wa nchi. Hati hiyo haitetei hoja. Inaomba imani: kwamba mbebaji wake anazungumza kwa nia njema na anastahili kusikilizwa." },
            { p: "The Credence par Mwesigwa ni chapisho huru lililojengwa juu ya kanuni hiyo. Lengo lake ni ushirikiano kati ya Maziwa Makuu na Asia ya Kusini-Mashariki, kanda mbili za Kusini mwa Dunia zinazojitahidi kufikia maendeleo endelevu, ili wasomi na wataalamu wabadilishane mawazo, watafiti changamoto zinazofanana na kusukuma sera bora katika jamii zao." },
            { p: "Neno hili lina kazi mbili. <i>Credence</i> ni imani ambayo msomaji humpa mwandishi; katika diplomasia, pia ni hati inayomgeuza mgeni kuwa mwakilishi. Kila wiki The CPM itawasilisha barua moja, na kila moja lazima ipate imani yako kwa ubora wake yenyewe." },
            { h2: "Kanda mbili ambazo mara chache huzungumza moja kwa moja" },
            { p: "Maziwa Makuu na Asia ya Kusini-Mashariki zinashiriki mengi kuliko zinavyokiri. Zote mbili zinaishi kando ya mito inayoshirikiwa na nchi nyingi, na zinahifadhi watu waliokimbia vita vya majirani zao. Zote mbili zimesimama kati ya mataifa makubwa yanayoshindania uaminifu wao." },
            { p: "Hata hivyo, mara nyingi zinajifunza kuhusu kila mmoja kupitia watu wa tatu: vyombo vya habari vya Magharibi, mikopo ya China, na maonyesho ya biashara ya hapa na pale. Hali hiyo inaanza kubadilika upande wa Thailand. Tarehe 28 Agosti 2026, Naibu Waziri Mkuu na Waziri wa Mambo ya Nje Sihasak Phuangketkeow alizindua upya Mpango wa Thailand–Afrika huko Addis Ababa, uliojengwa juu ya ushirikiano wa kisiasa, kiuchumi, wa maendeleo na wa kimkakati wa kimataifa " + citePRD + "." },
            { p: "Afrika ina sababu zake za kutazama mashariki. Uganda sasa inahifadhi wakimbizi zaidi ya milioni mbili, idadi kubwa zaidi barani Afrika " + citeECHO + ". Misaada inapopungua, wakimbizi na jamii zinazowapokea hushindania ardhi, maji na kazi. Thailand imeshughulikia suala la watu waliohamishwa katika mpaka wake na Myanmar kwa miongo kadhaa, na mafunzo yake pamoja na makosa yake yanastahili kuchunguzwa." },
            { h2: "Barua hizi zitafanya nini" },
            { p: "Kila wiki, barua moja kuhusu tukio moja. Barua zitapishana kati ya mada mbili: usalama na utawala katika Maziwa Makuu, na jinsi Afrika na Asia ya Kusini-Mashariki zinavyohusiana katika biashara, uhamiaji na diplomasia." },
            { p: "Kila barua itafanya mambo matatu:" },
            { ol: [
              "Kueleza kilichotokea kwa maneno rahisi.",
              "Kusema kwa nini ni muhimu kwa sera, na kwa nani.",
              "Kutoa mtazamo wa Kiafrika, ambao habari za kimataifa mara nyingi huuacha."
            ] },
            { p: "Barua hizi zinaandikwa kutoka Chiang Rai, karibu na Pembetatu ya Dhahabu, ambapo Thailand, Laos na Myanmar zinakutana kwenye Mto Mekong, na, kadiri chapisho hili linavyokua, kutoka Maziwa Makuu. Popote zinapoandikwa, zinabaki na anwani ileile: nafasi kati ya Mto Nile na Mto Mekong." }
          ]
        }
      }
    }
  ];
})();
