/* =======================================================================
   ARAH TANPA PETA — aka & awa
   Novel interaktif 8 bab. Vanilla JS, nol dependency.

   BAGIAN 0  = KONFIG + NASKAH  (edit di sini kalau mau ganti kata-kata)
   BAGIAN 1  = util
   BAGIAN 2  = preloader, kursor, kelopak
   BAGIAN 3  = sampul + sulur + buka buku
   BAGIAN 4  = karakter vektor
   BAGIAN 5  = mesin dialog
   BAGIAN 6  = bab 01..08
   BAGIAN 7  = navigasi, keyboard, swipe
   ======================================================================= */

/* ============================ BAGIAN 0 ============================ */

const CFG = {
  aka: 'aka',
  awa: 'awa',
  penName: 'cawaaa',
  lagu: 'lagu/Conan Gray - Memories (Lyrics).mp3',
  volume: 0.42
};

const DIR = { aka: 'assets/aka/', awa: 'assets/awa/', duo: 'assets/' };

/* ---- FOTO: {file, siapa, tgl, caption} ---- */
const PHOTOS = [
  { f: DIR.duo + 'foto berdua.jpeg', who: 'kita', date: 'entah tanggal berapa',
    cap: 'kita. di cermin, karena nggak ada yang mau motoin.' },
  { f: DIR.awa + 'WhatsApp Image 2026-10-01 at 09.14.22.jpeg', who: 'awa', date: '01 Okt',
    cap: 'pagi pertama setelah malam dimsum.' },
  { f: DIR.awa + 'WhatsApp Image 2026-10-01 at 12.28.16.jpeg', who: 'awa', date: '01 Okt',
    cap: 'kamu kirim ini pas aku lagi nggak fokus sama apa pun.' },
  { f: DIR.awa + 'WhatsApp Image 2026-10-01 at 22.27.58.jpeg', who: 'awa', date: '01 Okt',
    cap: 'versi kamu yang nggak semua orang lihat.' },
  { f: DIR.awa + 'WhatsApp Image 2026-10-02 at 12.41.04.jpeg', who: 'awa', date: '02 Okt',
    cap: 'hari dengan jumlah foto paling banyak.' },
  { f: DIR.awa + 'WhatsApp Image 2026-10-02 at 12.43.05.jpeg', who: 'awa', date: '02 Okt',
    cap: 'dua menit setelah yang tadi. iya, aku ngitung.' },
  { f: DIR.awa + 'WhatsApp Image 2026-10-02 at 12.44.53.jpeg', who: 'awa', date: '02 Okt',
    cap: 'kacamata kamu selalu sedikit miring, dan itu lucu.' },
  { f: DIR.awa + 'WhatsApp Image 2026-10-02 at 13.05.59.jpeg', who: 'awa', date: '02 Okt',
    cap: 'ekspresi "apa sih" favoritku.' },
  { f: DIR.awa + 'WhatsApp Image 2026-10-09 at 13.48.08.jpeg', who: 'awa', date: '09 Okt',
    cap: 'hari biasa, yang jadi nggak biasa karena ada kamu.' },
  { f: DIR.awa + 'WhatsApp Image 2026-10-13 at 09.10.31.jpeg', who: 'awa', date: '13 Okt',
    cap: 'pagi-pagi udah rapi, aku masih bingung mau bales apa.' },
  { f: DIR.awa + 'WhatsApp Video 2026-10-13 at 11.50.00.mp4', who: 'awa', date: '13 Okt', video: true,
    cap: 'lima belas detik yang aku puter berkali-kali.' },
  { f: DIR.awa + 'WhatsApp Image 2026-10-13 at 15.03.12.jpeg', who: 'awa', date: '13 Okt',
    cap: 'cara kamu natap kamera, mirip cara kamu natap aku pas ngobrol.' },
  { f: DIR.awa + 'WhatsApp Image 2026-10-21 at 21.44.19.jpeg', who: 'awa', date: '21 Okt',
    cap: 'malam, dan kamu masih sempat kirim kabar.' },
  { f: DIR.awa + 'WhatsApp Image 2026-10-22 at 12.25.38.jpeg', who: 'awa', date: '22 Okt',
    cap: 'bintang-bintang di baju kamu. kebetulan yang pas.' },
  { f: DIR.awa + 'WhatsApp Image 2026-10-22 at 18.16.38.jpeg', who: 'awa', date: '22 Okt',
    cap: 'langit senja kalah sama orang yang di depannya.' },
  { f: DIR.aka + 'WhatsApp Image 2026-09-30 at 21.02.12.jpeg', who: 'aka', date: '30 Sep',
    cap: 'ini aku. yang kebanyakan mikir, dikit ngomong.' },
  { f: DIR.aka + 'WhatsApp Image 2026-10-23 at 20.21.17.jpeg', who: 'aka', date: '23 Okt',
    cap: 'rame-rame, tapi kepala aku tetep ke satu orang.' }
];

/* ---- PUISI: semua karya cawaaa, ditulis ulang apa adanya ---- */
const POEMS = [
  {
    id: 'dimsum',
    title: 'Seporsi Dimsum, Secerca Pertemuan',
    date: '01 Oktober 2026',
    epi: 'Bukan soal dimsumnya, tapi soal siapa yang duduk di sampingku malam itu.',
    body: [
      'Jikalau malam ini kutelusuri jalan, tiada pernah kusangka akan berjumpa insan yang namanya pun tak pernah singgah di benakku sebelumnya. Mendadak, tanpa rencana, angin dingin menyapa wajahku lebih dulu sebelum pikiran sempat menampik, sedang jalanan kian lengang, hanya lampu-lampu yang setia menyala, melahirkan bayang panjang di atas aspal yang masih basah bekas hujan sendu.',
      'Kami menepi di sebuah resto dimsum, memesan beberapa porsi yang uapnya mengepul di antara kami. Ia duduk di sampingku, bukan di seberang, hingga jarak yang lazimnya canggung itu tiba-tiba terasa seolah memang semestinya begitu. Tiada basa-basi yang mengawali, pertanyaan demi pertanyaan justru langsung mengalir di antara kami, satu dari bibirnya, disusul satu dariku, bergantian, seperti dua orang yang sama-sama penasaran namun juga sama-sama ingin dikenal.',
      'Lantas pertanyaan itu membawa kami jauh ke masa lampau, kenangan yang barangkali telah lama tak ia tuturkan kepada siapa pun jua. Aku menyimak sambil sesekali balas bertanya, menimpali, tertawa pada bagian yang jenaka, dan mendapati kehangatan dari cara seseorang insan menjawab tanpa berjaga-jaga, seolah ia percaya aku layak mengetahuinya, pada pertemuan yang bahkan tak pernah dirancang sebelumnya.',
      'Kami bertukar kisah tentang banyak hal yang telah lampau, dan anehnya, justru di situlah kurasa tengah mengenal seseorang yang sesungguhnya, dan mungkin juga, tengah dikenal olehnya. Tiada yang ditutupi, tiada jawaban yang dijaga jaraknya. Dimsum di meja kian menyusut tanpa benar-benar kami sadari, sebab perhatian kami telah lama berpindah dari piring ke suara masing-masing.',
      'Hingga malam kian larut, dan waktu yang semula terasa longgar kini mendesak kami untuk beranjak. Enggan rasanya menyudahi, namun malam telah terlampau jauh berjalan, dan pulang menjadi satu-satunya hal yang mesti dipatuhi. Sebelum benar-benar pergi, kami masih berdiri sejenak di tempat yang sama tempat kami berjumpa, ada jeda yang canggung namun tak ingin disudahi, seolah keduanya sama-sama menunggu siapa yang lebih dulu melangkah menjauh.'
    ],
    end: 'Kelak, bila kuingat malam ini, semoga ia bukan sekadar kebetulan yang luruh begitu saja.',
    note: 'puisi pertama kamu, dan objeknya kita. aku baca ini berkali-kali cuma buat mastiin aku nggak salah ngerti.'
  },
  {
    id: 'barisan',
    title: 'Barisan Kata yang Tak Ku Mengerti',
    date: '05 Oktober 2026',
    epi: 'Tak semua kebersamaan perlu diisi suara.',
    body: [
      'Bawalah segala kesungguhanmu kemari, pada seseorang yang diam-diam menyaksikannya, tanpa perlu kamu tahu, tanpa perlu kamu jelaskan mengapa setiap kalimat terasa begitu berat untuk disusun.',
      'Di sampingmu, aku dibebaskan dari keharusan untuk mengerti. Aku boleh hanya duduk, boleh hanya menatap, atau sekadar menunggu dalam diam, tanpa pernah benar-benar paham barisan kata yang kau susun satu demi satu.',
      'Aku tidak perlu mengerti setiap katamu, sebab yang kutangkap bukan maknanya, melainkan kesungguhan di balik tiap jeda yang kau buat.',
      'Maka, ketika jemarimu berhenti sejenak mencari kata yang tepat, aku akan tetap di sini. Tak akan kuburu kau untuk lekas menemukannya, sebab bagiku, menyaksikanmu berjuang pun sudah terasa seperti sebuah keberuntungan tersendiri.',
      'Biarkan aku mengagumimu sedikit lebih lama, dalam diam yang barangkali tak pernah kau sadari, sebab kesungguhanmu hari ini, entah bagaimana, berhasil membuatku terpaku.'
    ],
    end: 'Barisan kata itu mungkin tak pernah kumengerti, tapi menyaksikannya lahir satu per satu pun sudah cukup bagiku.',
    note: 'aku ngetik-hapus-ngetik tiap malam. ternyata yang kamu liat bukan hasilnya, tapi usahanya. itu namparnya pelan tapi dalem.'
  },
  {
    id: 'baikbaik',
    title: 'Aku Baik-Baik Saja',
    date: '05 Oktober 2026',
    epi: 'In Indonesia, we say "Aku baik-baik saja." But, in Sastra Indonesia…',
    body: [
      'aku telah lama menyembunyikan retak ini,\ndi balik senyum yang kulatih tiap pagi,\nseolah luka hanya boleh ditunjukkan\npada mereka yang sanggup menanggungnya,\npadahal yang kubutuhkan hanyalah seseorang\nyang sudi melihatku tanpa topeng.',
      'bukan aku ingin dikasihani,\nhanya ingin sejenak berhenti berpura-pura,\nsebab jiwa yang terus-menerus kuat\npun bisa lelah menyangga dirinya sendiri,\nsebagaimana dahan yang terus menahan hujan,\nsuatu hari akan merunduk jua.',
      'mereka bilang, bersyukurlah, masih ada yang lebih berat,\ndan aku mengangguk, membenarkan,\ntapi membandingkan luka tak pernah membuatnya reda,\nsebab rapuh tak mengenal hierarki,\nia datang dan singgah\ntanpa peduli siapa yang paling pantas merasakannya.',
      'hingga aku belajar,\nrapuh bukan berarti kalah,\nia hanya tanda bahwa aku masih punya rasa,\nmasih mampu tersentuh,\nmasih hidup dalam artian yang paling jujur.',
      'maka biarlah jiwa ini sesekali retak,\ntak perlu selalu tampak utuh di hadapan dunia,\nsebab yang pecah pun, jika dirawat dengan sabar,\nbisa tumbuh menjadi bentuk baru,\nyang barangkali, jauh lebih indah\ndari yang semula.'
    ],
    end: '',
    note: 'kalau suatu hari kamu capek jadi yang paling kuat, aku nggak bakal nyuruh kamu senyum. aku cuma bakal duduk di situ.'
  },
  {
    id: 'berusaha',
    title: 'Aku Harus Berusaha Lebih Keras Lagi',
    date: 'Oktober 2026',
    epi: 'In Indonesia, we say "Aku harus berusaha lebih keras lagi." But, in Sastra Indonesia…',
    body: [
      'lantas mohon serupa apa lagi yang mesti kupinta,\nsehabis sekian lama kutengadahkan telapak,\nkutitipkan harap pada tiap malam yang hampa,\nberharap sesuatu akan beranjak berubah,\nberharap diriku cukup untuk disebut layak,\nsedang gema yang kembali\nhanyalah sunyi yang kian menjelma.',
      'sudah berapa banyak doa kusemayamkan dalam diam,\nsudah berapa kali kubongkar diriku sendiri,\nmencari retak yang kukira menjadi sebab,\nnamun jawabnya tetap serupa,\nhanya kebisuan yang menyahut,\nseolah semesta pun ragu\nmenjatuhkan vonisnya padaku.',
      'aku jemu bertanya-tanya,\napakah aku memang tak cukup sempurna,\nataukah waktu belum sudi tiba,\nsebab keduanya sama-sama menyayat,\nsama-sama menggugat\narti dari segala ikhtiar yang kutempuh sejauh ini.',
      'lantas, pantaskah aku?\npantaskah raga ini diperlakukan lembut,\npantaskah jiwa ini dicinta\ntanpa mesti membuktikan diri berkali lipat,\npantaskah aku berharap\ntanpa bersiap pias di ujung jalan?',
      'barangkali tanya ini\ntak pernah sungguh membutuhkan jawaban dari luar,\nsebab yang sesungguhnya kucari\nbukanlah pengesahan dari semesta,\nmelainkan keberanian dari dalam diriku sendiri,\nuntuk akhirnya percaya,\nbahwa aku memang pantas,\ntanpa perlu siapa pun mengatakannya lebih dahulu.'
    ],
    end: '',
    note: 'kamu nggak perlu ngebuktiin apa-apa ke aku. kamu udah pantes dari sebelum aku tau nama kamu.'
  },
  {
    id: 'berarti',
    title: 'Berarti',
    date: 'Oktober 2026',
    epi: 'Waktu adalah bentuk kasih yang paling jujur.',
    body: [
      'Hari ini kutempuh langkah demi langkah menuju seseorang yang tengah limbung, bukan sebab aku punya segala jawaban, hanya sebab aku punya waktu, dan waktu, kutahu benar, adalah bentuk kasih yang paling jujur.',
      'Ia berkata, tanpamu mungkin aku telah tumbang, dan kalimat itu singgah di dadaku, bukan sebagai beban, melainkan sebagai cahaya, sebab ternyata kehadiran yang kukira sederhana bisa menjelma sandaran bagi seseorang yang nyaris kehilangan pijakan.',
      'Aku tak pernah menyangka, bahwa sekadar ada, sekadar mendengar, bisa berarti sebesar itu bagi orang lain, hingga aku bertanya pada diriku sendiri, berapa banyak lagi jiwa di luar sana yang hanya butuh satu orang yang mau bertahan di sampingnya.',
      'Maka hari ini kusimpan rasa ini baik-baik, bukan sebagai kebanggaan, melainkan sebagai pengingat, bahwa menjadi berarti bagi seseorang adalah keberuntungan yang tak semua orang sempat merasakannya.'
    ],
    end: 'Hari ini, aku belajar bahwa menjaga seseorang tetap berdiri, adalah salah satu cara paling tulus untuk merayakan arti dari hidup itu sendiri.',
    note: 'ini bagian kamu yang paling jarang orang lihat: kamu keras di luar, tapi kamu nganterin diri kamu sendiri ke orang yang lagi limbung.'
  },
  {
    id: 'katanya',
    title: 'Katanya',
    date: 'Oktober 2026',
    epi: '',
    body: [
      'katanya, di ruang kosong itu\nmenangis tidak apa-apa\nlalu setelah air mata mengering\napa yang tersisa untuk dijalani?\nhidup di atas ambang?\natau hidup di atas keterpurukan?',
      'haha, lelucon itu lagi\nhati sudah terlalu pedih\ntawa pun tersangkut di kerongkongan',
      'ruang kosong yang mana, katamu?\nhati yang lengang?\natau bilik tempat tangis dititipkan?',
      'JIWAKU!\nJIWAKU TERPERANGKAP DI RUANG KOSONG ITU\ndi sana dinding hanyalah gema\nsetiap isakku pulang\nsebagai tamu yang tak pernah kuundang',
      'lalu mana tenang yang dijanjikan\nyang katanya menunggu di ujung sunyi?',
      'omong kosong\nlagi-lagi omong kosong',
      'aku tak mau lagi.'
    ],
    end: '',
    note: 'puisi yang paling bikin aku diem lama. aku nggak bisa benerin ruang kosong itu. tapi aku bisa nggak nambahin gemanya.'
  },
  {
    id: 'kesekian',
    title: 'Kesekian Kalinya',
    date: 'Oktober 2026',
    epi: 'Bajingan, untuk kesekian kalinya kau merasa paling tahu segalanya.',
    body: [
      'Kau bicara seolah seluruh ruangan hanyalah lantai untuk langkahmu, seolah setiap telinga wajib memungut apa pun yang jatuh dari lidahmu. Kuharap semuanya akan mereda seperti api yang kehabisan sekam, namun ternyata amarahku sendirilah yang menolak padam. Ia merambat dari dada, menjalar ke rahang, lalu bersarang di sudut mataku yang tak lagi pandai berdusta.',
      'Di ruang yang riuh itu, raut wajahku terbuka seperti buku yang lupa dikunci. Semua orang membaca, tak seorang pun bertanya. Kini aku berdiri di persimpangan yang sunyi, berbenah diri, menata ulang serpihan yang kau hancurkan, atau membiarkan semuanya larut bersama malam, hanyut, tenggelam, hingga kata "kesekian" tak lagi punya hitungan.'
    ],
    end: 'Haruskah aku yang berbenah, sementara kau tak pernah?',
    note: 'aku nggak tau ini buat siapa. yang aku tau: aku nggak mau jadi orang yang bikin kamu nulis puisi kayak gini.'
  },
  {
    id: 'lalusiapa',
    title: 'Lalu Siapa?',
    date: 'Oktober 2026',
    epi: '',
    body: [
      'aku merasa sepi\njiwaku perahu tanpa jangkar\nterombang-ambing\ndi laut yang tak bertepi\nhidup berjalan\ntanpa alamat yang dituju',
      'aku di sini\nsendiri',
      'lalu siapa?\nsiapa diriku?\nmanusia yang penuh permohonan\nyang mengetuk langit\ntapi tak pernah dibukakan?\natau manusia yang penuh luka\nyang lama-lama menyebut perih\nsebagai namanya sendiri?'
    ],
    end: '',
    note: 'perahu tanpa jangkar. mungkin aku juga. makanya judul web ini bukan "peta", tapi "arah".'
  }
];

/* ---- BAB 02: hal-hal yang aka suka ---- */
const NOTES = [
  { t: 'CARA KAMU BICARA', s: 'buka',
    b: 'nada kamu datar, tapi nggak pernah kosong. aku bisa dengerin kamu cerita hal paling random satu jam penuh, dan nggak sekali pun kepikiran buat motong.' },
  { t: 'CARA KAMU NULIS', s: 'buka',
    b: 'kamu nulis kayak orang yang nggak buru-buru. tiap kata kamu pilih pelan-pelan. aku baca ulang berkali-kali, bukan karena nggak paham — tapi karena nggak mau cepat selesai.' },
  { t: 'CARA KAMU MIKIR', s: 'buka',
    b: 'kamu selalu nemu sudut yang orang lain lewatin. kadang aku kalah ngomong bukan karena salah, tapi karena cara mikir kamu lebih jujur dari punyaku.' },
  { t: 'GESTUR TANGAN KAMU', s: 'buka',
    b: 'tangan kamu ikut ngomong. kalau lagi semangat, jarimu ngetuk-ngetuk meja. aku pernah lupa isi obrolannya, tapi sampai sekarang nggak lupa ketukannya.' },
  { t: 'TATAPAN TAJAM ITU', s: 'buka',
    b: 'pas ngobrol berdua, kamu natap mataku dan nggak ngalihin sedikit pun. baru di situ aku ngerti rasanya beneran didengerin sama satu orang.' },
  { t: 'KETAWA KAMU', s: 'buka',
    b: 'jarang keluar. makanya tiap kali keluar, rasanya kayak dikasih sesuatu yang nggak semua orang dikasih.' },
  { t: 'DIAM KAMU', s: 'buka',
    b: 'waktu kamu nggak ngomong apa-apa pun, aku masih betah. ternyata ada orang yang diamnya nggak bikin aku pengin pergi.' },
  { t: 'SISANYA', s: 'buka',
    b: 'sisanya nggak muat di kertas sekecil ini. intinya satu: yang aku suka bukan cuma versi terbaik kamu — yang lagi capek dan nggak mau ngomong pun masuk hitungan.' }
];

/* ---- BAB 05: isi kepala aka ---- */
const MIND = [
  { w: 'kamu marah apa capek?', a: 'dua-duanya butuh respons beda, dan aku sering salah nebak.' },
  { w: 'tadi aku salah ngomong?', a: 'aku ulang obrolan kita di kepala, cari kalimat yang kira-kira nyenggol.' },
  { w: 'chatku cuma dibaca', a: 'aku tau kamu lagi sibuk. tapi kepalaku nggak selalu mau percaya itu.' },
  { w: 'aku kebanyakan nanya?', a: 'aku nanya karena aku nggak mau nebak. nebak itu yang bikin kita berantem.' },
  { w: 'kalau aku diam, aman nggak?', a: 'ternyata nggak. diamku kamu baca sebagai jarak.' },
  { w: 'aku cukup nggak buat kamu?', a: 'pertanyaan ini yang paling sering muter jam 1 pagi.' },
  { w: 'jangan overthinking', a: 'gampang diomongin. susah dijalanin.' },
  { w: 'besok tanya langsung', a: 'ini yang bener. dan ini yang paling jarang aku lakuin.' },
  { w: 'kamu butuh ruang', a: 'ruang bukan berarti pergi. itu baru aku ngerti belakangan.' },
  { w: 'aku tetep di sini', a: 'ini satu-satunya kalimat yang nggak pernah berubah.' },
  { w: 'jangan pergi pas susah', a: 'janji yang aku bikin ke diri sendiri, bukan ke kamu.' },
  { w: 'kamu nggak sejahat itu', a: 'badmood kamu nggak pernah aku anggap identitas kamu.' }
];

/* ---- NASKAH DIALOG ---- */
const SCRIPTS = {
  bab1: [
    { who: 'narator', mood: 'malam', t: 'Jalanan udah lengang, aspalnya masih basah bekas hujan. Yang masih nyala tinggal satu resto dimsum di ujung jalan.' },
    { who: 'awa', t: 'Masuk, yuk. Aku kedinginan.', pose: 'sharp' },
    { who: 'aka', t: 'Kirain kamu bakal bilang "udah malem, pulang aja".' },
    { who: 'awa', t: 'Aku nggak suka pulang kalau obrolannya belum kelar.' },
    { who: 'narator', t: 'Dia duduk di sampingku. Bukan di seberang.' },
    { who: 'aka', t: 'Kenapa nggak duduk di seberang?' },
    { who: 'awa', t: 'Biar nggak usah ngomong keras-keras. Kenapa, keberatan?', pose: 'sharp' },
    { who: 'aka', t: 'Nggak. Cuma kayaknya bakal aku inget lama.' },
    { who: 'awa', t: 'Kamu nyimpen hal sekecil itu?' },
    { who: 'aka', t: 'Kadang. Yang kecil biasanya yang paling awet.' },
    { who: 'awa', t: 'Oke. Gantian nanya, ya. Aku duluan: kamu paling takut sama apa?' },
    { who: 'aka', t: 'Ditinggal pas lagi nanggung. Kamu?' },
    { who: 'awa', t: 'Dibaca orang, tapi nggak ada satu pun yang nanya.' },
    { who: 'aka', t: 'Berarti kalau aku nanya terus, nggak apa-apa?' },
    { who: 'awa', t: 'Asal bukan basa-basi.' },
    { q: 'Giliran aku yang nanya. Aku tanya apa?', opts: [
      { t: 'hal yang paling lama kamu simpen sendiri',
        say: 'Ada nggak, hal yang paling lama kamu simpen sendiri?',
        r: 'Kamu diam sebentar — terus cerita, panjang, sampai uap dimsumnya habis. Aku nggak motong sekali pun.', good: true },
      { t: 'kenapa kamu nulis puisi',
        say: 'Kenapa, sih, kamu nulis puisi?',
        r: '"Soalnya nggak semua hal muat diomongin," katamu. Habis itu kamu ketawa kecil, kayak nyesel udah jujur.' },
      { t: 'mau nambah pesen apa lagi',
        say: 'Mau nambah pesen apa lagi?',
        r: 'Kamu ngakak. "Itu pertanyaan paling nggak penting malam ini." Tapi kamu jawab juga: dua porsi lagi.' }
    ]},
    { who: 'aka', t: 'Aneh, ya. Kita baru ketemu, tapi nggak ada satu jawaban pun yang kamu jaga jaraknya.' },
    { who: 'awa', t: 'Capek kalau harus milih-milih dulu mau jujur yang mana.' },
    { who: 'narator', t: 'Piringnya kosong duluan sebelum pertanyaannya habis.' },
    { who: 'awa', t: 'Ini udah jam berapa, sih?' },
    { who: 'aka', t: 'Jangan dilihat jamnya.' },
    { who: 'awa', t: 'Telat. Udah terlanjur kelihatan.' },
    { who: 'narator', t: 'Kita berdiri di tempat yang sama, sama-sama nunggu siapa yang melangkah menjauh duluan.' },
    { who: 'awa', t: 'Aku pulang, ya.' },
    { who: 'aka', t: 'Hati-hati. Kabarin kalau udah nyampe.' },
    { who: 'awa', t: 'Malam ini aku tulis.' },
    { who: 'aka', t: 'Tulis aja. Aku baca semuanya.' }
  ],

  bab3: [
    { who: 'narator', mood: 'malam', t: 'Jam satu pagi. Di layar cuma ada tulisan "mengetik…" — muncul, hilang, muncul lagi.' },
    { who: 'awa', t: 'Dari tadi "mengetik" terus. Isinya apa, sih?' },
    { who: 'aka', t: 'Lagi nyusun. Bentar.', pose: 'think' },
    { who: 'awa', t: 'Nyusun apa? Laporan?' },
    { who: 'aka', t: 'Kalimat. Biar nggak kedengeran berlebihan.' },
    { who: 'awa', t: 'Jadi kamu ngedit diri sendiri sebelum aku sempat baca.' },
    { who: 'aka', t: 'Kalau salah ngomong, nggak bisa ditarik lagi.' },
    { who: 'awa', t: 'Yang nggak bisa ditarik itu justru yang nggak jadi dikirim.', pose: 'sharp' },
    { q: 'Akhirnya aku kirim yang mana?', opts: [
      { t: 'yang aman', say: 'gapapa kok, santai.',
        r: 'Kamu bales "oke". Terus kita tidur dengan pertanyaan yang sama.', bad: true },
      { t: 'yang jujur', say: 'aku masih kepikiran obrolan tadi.',
        r: 'Kamu bales panjang. Ternyata kamu juga belum tidur.', good: true },
      { t: 'nggak jadi kirim apa-apa',
        r: 'Layarnya mati. Besoknya kita sama-sama pura-pura nggak ada yang ngegantung.', bad: true }
    ]},
    { who: 'awa', t: 'Aku nggak lagi ngitung kecepatan kamu nyusun kata, kok.' },
    { who: 'aka', t: 'Berarti dari tadi kamu nungguin?' },
    { who: 'awa', t: 'Aku malah nulis. Soal orang yang kelamaan nyusun kalimat.' },
    { who: 'aka', t: 'Isinya apa?' },
    { who: 'awa', t: 'Baca sendiri aja.' }
  ],

  bab4: [
    { who: 'narator', mood: 'badai', t: 'Ada hari di mana badmood kamu sampe ke semua orang. Termasuk aku.' },
    { who: 'awa', t: 'Gapapa.', pose: 'cold' },
    { who: 'aka', t: 'Yang "gapapa" beneran, atau yang "gapapa" versi kamu?' },
    { who: 'awa', t: 'Emang bedanya apa?', pose: 'cold' },
    { who: 'aka', t: 'Yang satu bisa aku tinggal tidur. Yang satu nggak.' },
    { who: 'awa', t: 'Ya udah, lagi males ngomong aja.', pose: 'cold' },
    { who: 'aka', t: 'Oke. Aku diam dulu kalau gitu.', pose: 'think' },
    { who: 'awa', t: 'Diamnya kamu bikin aku mikir macem-macem.', pose: 'cold' },
    { who: 'aka', t: 'Kalau aku ngomong, kamu bisa makin panas. Jadi aku selalu salah di dua-duanya.' },
    { who: 'narator', t: 'Jadi kita berantem bukan soal masalahnya. Tapi soal cara nyampeinnya.' },
    { who: 'aka', t: 'Aku nggak benci kamu. Aku benci cara kita berantem.' },
    { who: 'awa', t: 'Aku juga capek. Cuma aku nggak tau cara ngomongnya tanpa kedengeran nyalahin.', pose: 'sharp' }
  ],

  bab4b: [
    { who: 'aka', mood: 'pagi', t: 'Ternyata nggak ada yang menang. Yang ada cuma dua orang yang sama-sama pengen dimengerti.' },
    { who: 'awa', t: 'Kalau aku lagi kayak gitu, jangan ikut panas. Tungguin aja.' },
    { who: 'aka', t: 'Oke. Tapi kalau aku nunggu kelamaan, bilang. Aku nggak sejago itu nebak.' },
    { who: 'awa', t: 'Deal.' }
  ]
};

/* ---- BAB 08: kalimat penutup ---- */
const FINALE = [
  'Kita nggak pernah punya peta. Nggak ada yang ngasih rute, nggak ada yang bilang belok di mana.',
  'Tapi dari malam dimsum itu sampai sekarang, arah aku selalu balik ke satu orang yang sama.',
  'Aku nggak janji kita nggak bakal berantem lagi. Aku cuma janji nggak bakal pergi pas lagi susah ngomong.'
];

/* ============================ BAGIAN 1 — UTIL ============================ */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const el = (tag, cls, html) => { const n = document.createElement(tag); if (cls) n.className = cls; if (html != null) n.innerHTML = html; return n; };
const wait = ms => new Promise(r => setTimeout(r, ms));
const rand = (a, b) => a + Math.random() * (b - a);
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const url = p => encodeURI(p);
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let toastEl = null, toastT = null;
function toast(msg) {
  if (!toastEl) { toastEl = el('div'); toastEl.id = 'toast'; document.body.appendChild(toastEl); }
  toastEl.textContent = msg;
  toastEl.classList.add('is-on');
  clearTimeout(toastT);
  toastT = setTimeout(() => toastEl.classList.remove('is-on'), 2600);
}

/* bunyi kecil pakai WebAudio, biar nggak butuh file tambahan */
let actx = null;
function blip(freq = 620, dur = 0.035, vol = 0.03, type = 'square') {
  if (!State.sfx) return;
  try {
    actx = actx || new (window.AudioContext || window.webkitAudioContext)();
    const o = actx.createOscillator(), g = actx.createGain();
    o.type = type; o.frequency.value = freq;
    g.gain.value = vol;
    o.connect(g); g.connect(actx.destination);
    o.start();
    g.gain.exponentialRampToValueAtTime(0.0001, actx.currentTime + dur);
    o.stop(actx.currentTime + dur + 0.02);
  } catch (e) { /* diem aja */ }
}

const State = {
  chapter: 0,          // 0 = sampul, 1..8 = bab
  opened: false,
  locked: false,       // true = dialog bab ini belum kelar
  done: [],            // bab yang syaratnya udah dipenuhi
  unlockedUpTo: 1,     // bab terjauh yang boleh dibuka
  vinesLeft: 0,
  sfx: true,
  music: true,
  busy: false,
  notesOpened: 0,
  poemIdx: 0
};

/* ============================ BAGIAN 2 — KELOPAK, KURSOR, PRELOADER ============================ */

/* --- partikel: debu kertas yang kalem + semburan kelopak pas ada momen --- */
const petals = (() => {
  const cv = $('#petals'); const ctx = cv.getContext('2d');
  let w = 0, h = 0, items = [], raf = null, ambient = true;
  const FLOWER = ['#FF3D8F', '#FFC2DD', '#FF8FC0', '#FFE27A'];

  function size() { w = cv.width = innerWidth * devicePixelRatio; h = cv.height = innerHeight * devicePixelRatio; }

  function dust() {
    return {
      kind: 'dust',
      x: rand(0, innerWidth) * devicePixelRatio, y: rand(0, innerHeight) * devicePixelRatio,
      vx: rand(-.12, .12), vy: rand(-.18, -.04), r: rand(1.1, 2.6) * devicePixelRatio,
      a: 0, va: 0, life: 1, decay: rand(.0006, .0016), c: 'rgba(20,14,18,.5)'
    };
  }
  function flower(x, y) {
    const z = rand(.6, 1.3);
    return {
      kind: 'flower', x: x * devicePixelRatio, y: y * devicePixelRatio,
      vx: rand(-2.2, 2.2) * z, vy: rand(-5, -1.4) * z,
      r: rand(5, 10) * z * devicePixelRatio, a: rand(0, 6.28), va: rand(-.1, .1),
      life: 1, decay: rand(.007, .013), c: FLOWER[(Math.random() * FLOWER.length) | 0]
    };
  }
  function burst(x, y, n = 14) {
    const cap = reduceMotion ? 4 : n;
    for (let i = 0; i < cap; i++) items.push(flower(x, y));
    loop();
  }
  function loop() {
    if (raf) return;
    const step = () => {
      ctx.clearRect(0, 0, w, h);
      if (ambient && !reduceMotion) {
        const dusts = items.filter(p => p.kind === 'dust').length;
        if (dusts < 9 && Math.random() < .05) items.push(dust());
      }
      items = items.filter(p => p.life > .02 && p.y < h + 90 && p.y > -120);
      for (const p of items) {
        if (p.kind === 'flower') { p.vy += .09; p.vx *= .992; }
        else { p.vx += rand(-.01, .01); p.vy += rand(-.006, .004); }
        p.x += p.vx; p.y += p.vy; p.a += p.va; p.life -= p.decay;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.globalAlpha = clamp(p.life, 0, 1) * (p.kind === 'dust' ? .4 : .95);
        if (p.kind === 'dust') {
          ctx.fillStyle = p.c;
          ctx.beginPath(); ctx.arc(0, 0, p.r, 0, 6.2832); ctx.fill();
        } else {
          ctx.rotate(p.a);
          ctx.fillStyle = p.c; ctx.strokeStyle = 'rgba(20,14,18,.8)';
          ctx.lineWidth = 1.6 * devicePixelRatio;
          ctx.beginPath(); ctx.ellipse(0, 0, p.r, p.r * .6, 0, 0, 6.2832);
          ctx.fill(); ctx.stroke();
        }
        ctx.restore();
      }
      if (!items.length && !ambient) { raf = null; return; }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
  }
  addEventListener('resize', size);
  size();
  return { burst, start: () => { ambient = true; loop(); }, calm: v => { ambient = v; } };
})();

/* --- kursor custom --- */
(() => {
  const c = $('#cursor');
  if (!c) return;
  let x = 0, y = 0, tx = 0, ty = 0;
  addEventListener('pointermove', e => { tx = e.clientX; ty = e.clientY; }, { passive: true });
  addEventListener('pointerdown', () => c.classList.add('is-down'));
  addEventListener('pointerup', () => c.classList.remove('is-down'));
  addEventListener('pointerover', e => {
    const hot = e.target.closest('button, a, .note, .polaroid, .vine, .chip, .arc-item, .dial, .sphere');
    c.classList.toggle('is-hot', !!hot);
  });
  (function tick() { x += (tx - x) * 0.28; y += (ty - y) * 0.28; c.style.transform = `translate(${x}px,${y}px)`; requestAnimationFrame(tick); })();
})();

/* --- preloader: preload gambar sambil nunjukin progress --- */
(() => {
  const bar = $('#plBar'), status = $('#plStatus'), btn = $('#startBtn');
  const list = PHOTOS.filter(p => !p.video).map(p => p.f);
  let done = 0;
  const texts = ['MENYUSUN HALAMAN…', 'MENJAHIT SULUR…', 'MENYALAKAN LAMPU JALAN…', 'MENATA PUISI…', 'MEMANASKAN DIMSUM…'];
  let ti = 0;
  const rot = setInterval(() => { status.textContent = texts[ti++ % texts.length]; }, 900);

  const bump = () => {
    done++;
    bar.style.width = Math.round((done / list.length) * 100) + '%';
    if (done >= list.length) {
      clearInterval(rot);
      status.textContent = 'SIAP DIBACA.';
      btn.hidden = false;
    }
  };
  if (!list.length) bump();
  list.forEach(src => { const i = new Image(); i.onload = i.onerror = bump; i.src = url(src); });

  btn.addEventListener('click', () => {
    $('#preloader').classList.add('is-gone');
    document.body.classList.remove('is-loading');
    $('#hud').hidden = false; $('#rail').hidden = false; $('#stage').hidden = false;
    petals.start();
    startMusic();
    buildRail();
    buildVines();
    setTimeout(() => $('#book').classList.add('is-carved'), 400);
    blip(880, .06, .05);
  });
})();

/* --- musik --- */
const bgm = $('#bgm');
function startMusic() {
  bgm.volume = 0;
  const p = bgm.play();
  if (p && p.catch) p.catch(() => { State.music = false; $('#musicBtn').classList.add('is-off'); });
  let v = 0;
  const fade = setInterval(() => { v = Math.min(CFG.volume, v + 0.02); bgm.volume = v; if (v >= CFG.volume) clearInterval(fade); }, 120);
}
$('#musicBtn').addEventListener('click', () => {
  State.music = !State.music;
  $('#musicBtn').classList.toggle('is-off', !State.music);
  if (State.music) { bgm.play(); $('#musicLabel').textContent = 'LAGU'; }
  else { bgm.pause(); $('#musicLabel').textContent = 'SENYAP'; }
});

/* ============================ BAGIAN 3 — SULUR & SAMPUL ============================ */

function vinePath(i, total) {
  // ujung sulur disebar rapi dalam kisi berjitter biar nggak numpuk di tengah
  const cols = 3;
  const rows = Math.max(1, Math.ceil(total / cols));
  const col = i % cols, row = Math.floor(i / cols);
  const ex = clamp(120 + col * 180 + rand(-34, 34), 90, 505);
  const ey = clamp(150 + row * (520 / Math.max(1, rows - 1 || 1)) + rand(-38, 38), 110, 700);

  // pangkal sulur dari pinggir terdekat, gantian kiri-kanan-atas-bawah
  const side = i % 4;
  const sx = side === 0 ? -20 : side === 1 ? 620 : clamp(ex + rand(-160, 160), 20, 580);
  const sy = side === 0 ? clamp(ey + rand(-140, 140), 20, 800)
           : side === 1 ? clamp(ey + rand(-140, 140), 20, 800)
           : side === 2 ? -20 : 840;

  const c1x = sx + (ex - sx) * 0.35 + rand(-110, 110);
  const c1y = sy + (ey - sy) * 0.3 + rand(-120, 120);
  const c2x = sx + (ex - sx) * 0.7 + rand(-110, 110);
  const c2y = sy + (ey - sy) * 0.72 + rand(-120, 120);
  return { d: `M${sx.toFixed(0)},${sy.toFixed(0)} C${c1x.toFixed(0)},${c1y.toFixed(0)} ${c2x.toFixed(0)},${c2y.toFixed(0)} ${ex.toFixed(0)},${ey.toFixed(0)}`, ex, ey };
}

function buildVines() {
  const svg = $('#vines');
  svg.innerHTML = '';
  const N = innerWidth < 640 ? 5 : 7;
  State.vinesLeft = N;
  for (let i = 0; i < N; i++) {
    const v = vinePath(i, N);
    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    g.setAttribute('class', 'vine');
    g.dataset.i = i;
    let inner = `<path class="hit" d="${v.d}" /><path d="${v.d}" />`;
    // daun di sepanjang sulur
    const temp = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    temp.setAttribute('d', v.d);
    temp.setAttribute('visibility', 'hidden');
    svg.appendChild(temp);
    let len = 400;
    try { len = temp.getTotalLength(); } catch (e) { len = 400; }
    const leaves = 4 + ((i * 3) % 3);
    for (let k = 1; k <= leaves; k++) {
      let pt = { x: v.ex, y: v.ey };
      try { pt = temp.getPointAtLength((len / (leaves + 1)) * k); } catch (e) {}
      const rot = (k % 2 ? 1 : -1) * (28 + k * 9);
      inner += `<ellipse class="leaf" cx="${pt.x.toFixed(0)}" cy="${pt.y.toFixed(0)}" rx="17" ry="9" transform="rotate(${rot} ${pt.x.toFixed(0)} ${pt.y.toFixed(0)})" />`;
    }
    // bunga di ujung
    inner += `<g transform="translate(${v.ex.toFixed(0)},${v.ey.toFixed(0)})">`;
    for (let p = 0; p < 5; p++) {
      inner += `<ellipse class="bud" cx="0" cy="-15" rx="9" ry="15" transform="rotate(${p * 72})" />`;
    }
    inner += `<circle class="bud-core" r="7" /><circle class="hit-bud" r="30" /></g>`;
    temp.remove();
    g.innerHTML = `<g class="sway" style="animation-delay:${(i * 0.42).toFixed(2)}s">${inner}</g>`;
    svg.appendChild(g);
    g._flower = { x: v.ex, y: v.ey };
    g._stem = g.querySelector('path');
  }
  // --- deteksi sentuhan: pakai jarak ke geometri sulur, bukan hit-test DOM ---
  // (sampul ada di lapisan 3D, hit-test SVG di dalamnya nggak bisa diandelin)
  const cover = $('#cover');
  const hitTest = e => {
    const vines = $$('#vines .vine:not(.is-cut)');
    if (!vines.length) return null;
    const m = svg.getScreenCTM();
    if (!m) return null;
    const pt = svg.createSVGPoint();
    const toClient = (x, y) => { pt.x = x; pt.y = y; return pt.matrixTransform(m); };
    let best = null, bestD = Infinity;
    for (const v of vines) {
      const flower = v._flower;
      const stem = v._stem;
      if (flower) {
        const c = toClient(flower.x, flower.y);
        const d = Math.hypot(e.clientX - c.x, e.clientY - c.y);
        if (d < bestD) { bestD = d; best = { v, d, lim: 42 }; }
      }
      if (stem) {
        const L = stem.getTotalLength();
        for (let k = 0; k <= 16; k++) {
          const p = stem.getPointAtLength(L * k / 16);
          const c = toClient(p.x, p.y);
          const d = Math.hypot(e.clientX - c.x, e.clientY - c.y);
          if (d < bestD) { bestD = d; best = { v, d, lim: 26 }; }
        }
      }
    }
    return best && best.d <= best.lim ? best.v : null;
  };

  const tryCut = e => {
    const v = hitTest(e);
    if (v) onVineHit(e, v);
    return !!v;
  };
  cover.addEventListener('pointerdown', tryCut);
  cover.addEventListener('pointermove', e => { if (e.buttons === 1 || e.pressure > 0) tryCut(e); });

  // sampulnya selalu bisa dibuka — sulur cuma buat seru-seruan
  const openBtn = $('#openNow');
  if (openBtn && !openBtn._wired) {
    openBtn._wired = true;
    openBtn.addEventListener('click', ev => { ev.stopPropagation(); openBook(); });
  }
  if (cover && !cover._wired) {
    cover._wired = true;
    cover.style.cursor = 'pointer';
    cover.addEventListener('click', e => {
      if (Date.now() - lastVineCutAt < 400) return;   // barusan nyibak, jangan langsung buka
      openBook();
    });
  }
}

let lastVineCutAt = 0;

function onVineHit(e, forced) {
  const g = forced || (e.target.closest && e.target.closest('.vine'));
  if (!g || g.classList.contains('is-cut')) return;
  lastVineCutAt = Date.now();
  g.classList.add('is-cut');
  petals.burst(e.clientX, e.clientY, 11);
  blip(rand(500, 900), .05, .04);
  State.vinesLeft--;
  const hint = $('#coverHint');
  const small = $('#hintSmall');
  if (State.vinesLeft <= 0) {
    const head = hint.querySelector('b');
    if (head) head.textContent = 'BERSIH. BUKUNYA BEBAS';
    if (small) small.textContent = 'kebuka sendiri sebentar lagi…';
    setTimeout(() => { if (!State.opened) openBook(); }, 700);
  } else if (small) {
    small.textContent = `sisa ${State.vinesLeft} sulur — atau langsung buka aja`;
  }
}

async function openBook() {
  if (State.opened) return;
  State.opened = true;
  $('#coverHint').classList.add('is-gone');
  const book = $('#book');
  book.style.transform = '';
  book.classList.remove('state-closed');
  book.classList.add('state-open');
  petals.burst(innerWidth / 2, innerHeight / 2, 22);
  blip(330, .12, .05, 'triangle');
  await wait(reduceMotion ? 60 : 850);
  $('#pageNav').hidden = false;
  goChapter(1);
}

function closeBook() {
  const book = $('#book');
  book.style.transform = '';
  book.classList.add('state-closed');
  book.classList.remove('state-open');
  State.opened = false;
  State.chapter = 0;
  $('#pageNav').hidden = true;
  updateHud();
  // sulurnya tumbuh lagi, tapi kali ini mekar
  buildVines();
  $$('#vines .vine').forEach((v, i) => { v.style.opacity = 0; setTimeout(() => { v.style.opacity = 1; }, 120 * i); });
  const hint = $('#coverHint');
  hint.classList.remove('is-gone');
  const hb = hint.querySelector('b'), hs = $('#hintSmall');
  if (hb) hb.textContent = 'SAMPAI SINI DULU';
  if (hs) hs.textContent = 'bukunya masih bisa dibuka lagi kapan aja';
}

/* ============================ BAGIAN 4 — KARAKTER VEKTOR ============================ */

function charAwa() {
  return `
  <svg viewBox="0 0 200 300" class="fig fig-awa" aria-label="awa" filter="url(#boil)">
    <g class="breathe">
      <!-- lengan kiri (turun) -->
      <path d="M58,206 C42,226 40,252 48,268" fill="none" stroke="#140E12" stroke-width="24" stroke-linecap="round"/>
      <path d="M58,206 C42,226 40,252 48,268" fill="none" stroke="#2B2430" stroke-width="17" stroke-linecap="round"/>
      <circle cx="48" cy="272" r="11" fill="#FFE3CF" stroke="#140E12" stroke-width="3.2"/>
      <!-- badan -->
      <path d="M26,300 L30,232 Q36,198 74,188 L126,188 Q164,198 170,232 L174,300 Z" fill="#2B2430" stroke="#140E12" stroke-width="4"/>
      <!-- kerudung -->
      <path d="M100,32 C150,32 168,74 168,118 C168,148 160,168 152,186 C150,216 138,230 100,234 C62,230 50,216 48,186 C40,168 32,148 32,118 C32,74 50,32 100,32 Z"
            fill="#FFC2DD" stroke="#140E12" stroke-width="4"/>
      <!-- muka -->
      <ellipse cx="100" cy="118" rx="34" ry="40" fill="#FFE3CF" stroke="#140E12" stroke-width="3.4"/>
      <path d="M68,94 C78,70 122,70 132,94" fill="none" stroke="#FF8FC0" stroke-width="7" stroke-linecap="round"/>
      <!-- pipi -->
      <ellipse cx="76" cy="132" rx="8" ry="4.6" fill="#FF8FC0" opacity=".7"/>
      <ellipse cx="124" cy="132" rx="8" ry="4.6" fill="#FF8FC0" opacity=".7"/>
      <!-- alis -->
      <path class="brow" d="M76,101 q9,-5 17,-1" fill="none" stroke="#140E12" stroke-width="3.4" stroke-linecap="round"/>
      <path class="brow" d="M107,100 q9,-4 17,1" fill="none" stroke="#140E12" stroke-width="3.4" stroke-linecap="round"/>
      <!-- mata -->
      <g class="blink">
        <ellipse cx="86" cy="117" rx="6" ry="7" fill="#fff" stroke="#140E12" stroke-width="2.4"/>
        <circle class="pupil" cx="87" cy="118" r="3.4" fill="#140E12"/>
        <ellipse cx="114" cy="117" rx="6" ry="7" fill="#fff" stroke="#140E12" stroke-width="2.4"/>
        <circle class="pupil" cx="115" cy="118" r="3.4" fill="#140E12"/>
      </g>
      <!-- kacamata bulat -->
      <g class="glasses" fill="none" stroke="#140E12" stroke-width="3">
        <circle cx="86" cy="117" r="12.5"/>
        <circle cx="114" cy="117" r="12.5"/>
        <path d="M98.5,116 h3"/>
        <path d="M73.5,113 l-7,-4"/>
        <path d="M126.5,113 l7,-4"/>
      </g>
      <path d="M100,124 q3,6 -2,8" fill="none" stroke="#140E12" stroke-width="2.2" stroke-linecap="round"/>
      <path class="mouth" d="M91,144 q9,8 18,0" fill="none" stroke="#140E12" stroke-width="3.4" stroke-linecap="round"/>
      <!-- lengan kanan: gestur pas ngomong -->
      <g class="hand-wave" style="transform-origin:140px 198px">
        <path d="M144,206 C170,204 182,190 180,174" fill="none" stroke="#140E12" stroke-width="24" stroke-linecap="round"/>
        <path d="M144,206 C170,204 182,190 180,174" fill="none" stroke="#2B2430" stroke-width="17" stroke-linecap="round"/>
        <circle cx="180" cy="168" r="11.5" fill="#FFE3CF" stroke="#140E12" stroke-width="3.2"/>
      </g>
    </g>
  </svg>`;
}

function charAka() {
  return `
  <svg viewBox="0 0 200 300" class="fig fig-aka" aria-label="aka" filter="url(#boil)">
    <g class="breathe">
      <!-- lengan kiri (turun) -->
      <path d="M58,208 C42,228 40,254 48,270" fill="none" stroke="#140E12" stroke-width="24" stroke-linecap="round"/>
      <path d="M58,208 C42,228 40,254 48,270" fill="none" stroke="#3A4232" stroke-width="17" stroke-linecap="round"/>
      <circle cx="48" cy="274" r="11" fill="#F6CBA6" stroke="#140E12" stroke-width="3.2"/>
      <!-- badan -->
      <path d="M28,300 L32,222 Q38,190 74,180 L126,180 Q162,190 168,222 L172,300 Z" fill="#3A4232" stroke="#140E12" stroke-width="4"/>
      <path d="M78,181 L100,206 L122,181 L114,176 L100,194 L86,176 Z" fill="#2A3126" stroke="#140E12" stroke-width="3"/>
      <rect x="46" y="224" width="24" height="28" rx="3" fill="#2A3126" stroke="#140E12" stroke-width="3"/>
      <!-- leher + muka -->
      <rect x="89" y="152" width="22" height="26" fill="#F6CBA6" stroke="#140E12" stroke-width="3"/>
      <ellipse cx="100" cy="116" rx="35" ry="40" fill="#F6CBA6" stroke="#140E12" stroke-width="3.4"/>
      <!-- rambut -->
      <path d="M64,100 C60,58 88,38 112,44 C142,52 144,80 142,102 C132,86 120,78 100,80 C84,82 72,88 64,100 Z"
            fill="#191318" stroke="#140E12" stroke-width="3.4"/>
      <path d="M116,47 c11,7 15,18 13,28" fill="none" stroke="#453A44" stroke-width="3" stroke-linecap="round"/>
      <!-- alis -->
      <path class="brow" d="M77,99 q9,-4 17,0" fill="none" stroke="#140E12" stroke-width="3.4" stroke-linecap="round"/>
      <path class="brow" d="M106,99 q9,-4 17,0" fill="none" stroke="#140E12" stroke-width="3.4" stroke-linecap="round"/>
      <!-- mata -->
      <g class="blink slow">
        <ellipse cx="86" cy="115" rx="5.8" ry="6.8" fill="#fff" stroke="#140E12" stroke-width="2.4"/>
        <circle class="pupil" cx="87" cy="116" r="3.2" fill="#140E12"/>
        <ellipse cx="114" cy="115" rx="5.8" ry="6.8" fill="#fff" stroke="#140E12" stroke-width="2.4"/>
        <circle class="pupil" cx="115" cy="116" r="3.2" fill="#140E12"/>
      </g>
      <!-- kacamata kotak -->
      <g class="glasses" fill="none" stroke="#140E12" stroke-width="3">
        <rect x="72" y="104" width="27" height="22" rx="6"/>
        <rect x="101" y="104" width="27" height="22" rx="6"/>
        <path d="M99,112 h2"/>
        <path d="M72,110 l-7,-4"/>
        <path d="M128,110 l7,-4"/>
      </g>
      <path d="M100,122 q3,6 -2,8" fill="none" stroke="#140E12" stroke-width="2.2" stroke-linecap="round"/>
      <path class="mouth" d="M90,142 q10,5 20,0" fill="none" stroke="#140E12" stroke-width="3.4" stroke-linecap="round"/>
      <!-- lengan kanan: garuk kepala, khas orang bingung -->
      <g class="hand-aka" style="transform-origin:142px 196px">
        <path d="M144,200 C172,192 180,158 158,136" fill="none" stroke="#140E12" stroke-width="24" stroke-linecap="round"/>
        <path d="M144,200 C172,192 180,158 158,136" fill="none" stroke="#3A4232" stroke-width="17" stroke-linecap="round"/>
        <circle cx="154" cy="130" r="11.5" fill="#F6CBA6" stroke="#140E12" stroke-width="3.2"/>
      </g>
    </g>
  </svg>`;
}


/* ============================ BAGIAN 4b — YANG BIKIN HIDUP ============================ */

/* 1. garis vektor yang "mendidih" pelan, ala animasi gambar tangan */
(() => {
  if (reduceMotion) return;
  const turb = () => document.getElementById('boilTurb');
  let i = 0;
  setInterval(() => {
    const t = turb(); if (!t || document.hidden) return;
    i = (i + 1) % 3;
    t.setAttribute('seed', [2, 7, 13][i]);
  }, 140);
})();

/* 2. mata karakter ngikutin kursor + kedip acak */
const eyes = (() => {
  let px = innerWidth / 2, py = innerHeight / 2;
  addEventListener('pointermove', e => { px = e.clientX; py = e.clientY; }, { passive: true });
  function frame() {
    $$('.fig').forEach(fig => {
      const r = fig.getBoundingClientRect();
      if (!r.width) return;
      const cx = r.left + r.width / 2, cy = r.top + r.height * 0.38;
      const dx = clamp((px - cx) / 220, -1, 1), dy = clamp((py - cy) / 220, -1, 1);
      $$('.pupil', fig).forEach(p => { p.style.transform = `translate(${(dx * 2.4).toFixed(2)}px, ${(dy * 1.9).toFixed(2)}px)`; });
    });
    requestAnimationFrame(frame);
  }
  if (!reduceMotion) requestAnimationFrame(frame);
  // kedip acak biar nggak kelihatan robot
  setInterval(() => {
    const all = $$('.fig .blink');
    if (!all.length) return;
    const g = all[(Math.random() * all.length) | 0];
    g.classList.add('is-wink');
    setTimeout(() => g.classList.remove('is-wink'), 180);
  }, 2200);
  return {};
})();

/* 3. parallax di dalam panel komik: latar, lantai, karakter gerak beda-beda */
(() => {
  if (reduceMotion) return;
  addEventListener('pointermove', e => {
    const st = $('.vnStage'); if (!st) return;
    const r = st.getBoundingClientRect();
    const nx = clamp((e.clientX - (r.left + r.width / 2)) / (r.width || 1), -1, 1);
    const ny = clamp((e.clientY - (r.top + r.height / 2)) / (r.height || 1), -1, 1);
    st.style.setProperty('--px', nx.toFixed(3));
    st.style.setProperty('--py', ny.toFixed(3));
  }, { passive: true });
})();

/* 4. isi halaman masuk bergiliran, bukan muncul sekaligus */
function staggerIn(root) {
  if (reduceMotion || !root) return;
  const kids = Array.from(root.children).slice(0, 10);
  kids.forEach((k, i) => {
    k.style.animation = 'none';
    k.style.opacity = '0';
    k.style.transform = 'translateY(12px)';
    requestAnimationFrame(() => {
      k.style.transition = `opacity .5s var(--ease) ${i * 70}ms, transform .5s var(--ease) ${i * 70}ms`;
      k.style.opacity = ''; k.style.transform = '';
    });
  });
}

/* ---- gembok bab: nggak boleh lanjut sebelum dialognya kelar ---- */
function lockChapter(n) {
  State.locked = !State.done.includes(n);
  updateLockUI();
}
function unlockChapter(n, pesan) {
  if (!State.done.includes(n)) State.done.push(n);
  State.unlockedUpTo = Math.max(State.unlockedUpTo, Math.min(n + 1, CHAPTERS.length));
  State.locked = false;
  updateLockUI();
  if (pesan) toast(pesan);
  const nx = $('#nextBtn');
  if (nx) { nx.classList.remove('is-locked'); nx.classList.add('is-ready'); setTimeout(() => nx.classList.remove('is-ready'), 1400); }
}
function updateLockUI() {
  const ln = $('#lockNote');
  if (ln) {
    ln.classList.toggle('is-open', !State.locked);
    ln.textContent = State.locked ? '🔒 LANJUT KEBUKA KALAU OBROLANNYA KELAR' : '✓ BOLEH LANJUT KE BAB BERIKUTNYA';
  }
  const nx = $('#nextBtn');
  if (nx) {
    const blocked = State.locked || State.chapter >= CHAPTERS.length;
    nx.disabled = blocked;
    nx.classList.toggle('is-locked', State.locked);
  }
  $$('#rail .rail-item').forEach((r, i) => r.classList.toggle('is-locked', i + 1 > State.unlockedUpTo));
  $$('#navDots .nav-dot').forEach((d, i) => d.classList.toggle('is-locked', i + 1 > State.unlockedUpTo));
}
function tolakLanjut() {
  toast(State.chapter === 4 && !State.done.includes(4)
    ? 'tarik napasnya dulu, baru boleh lanjut'
    : 'selesaiin dulu obrolannya ya');
  const nx = $('#nextBtn');
  if (nx) { nx.classList.remove('is-shake'); void nx.offsetWidth; nx.classList.add('is-shake'); }
  const st = $('.vnStage');
  if (st) { st.classList.remove('is-shake'); void st.offsetWidth; st.classList.add('is-shake'); }
}

/* ============================ BAGIAN 5 — PANEL KOMIK & DIALOG ============================ */

/* panggung = satu panel komik: karakter + balon kata + kotak narasi */
function stageHTML(mood = '', opts = {}) {
  return `
  <div class="comic">
    <div class="vnStage" data-mood="${mood}">
      <div class="halftone"></div>
      <div class="vn-sun"></div>
      <div class="vn-floor"></div>
      <div class="speed" aria-hidden="true"><i></i><i></i><i></i><i></i></div>
      <div class="caption" hidden></div>
      <div class="sfx" hidden></div>
      <div class="vn-chars">
        <div class="vn-char is-aka" data-who="aka">${charAka()}</div>
        <div class="vn-char is-awa" data-who="awa">${charAwa()}</div>
      </div>
      <div class="bubble b-aka" hidden><div class="bub-in"></div></div>
      <div class="bubble b-awa" hidden><div class="bub-in"></div></div>
      <div class="panel-next" hidden>KLIK / SPASI &#9656;</div>
      ${opts.think ? `<div class="vn-think" hidden><i>…</i><i>…</i><i>…</i></div>` : ''}
    </div>
  </div>`;
}

/* halaman kanan: naskah yang numpuk, biar nggak ada kalimat yang ilang */
function scriptHTML(intro = '') {
  return `
  <div class="script">
    ${intro ? `<p class="lead script-intro">${intro}</p>` : ''}
    <ol class="script-lines" id="scriptLines"></ol>
    <div class="vn-choices" id="vnChoices"></div>
    <div class="script-extra" id="scriptExtra"></div>
    <div class="lock-note" id="lockNote">🔒 LANJUT KEBUKA KALAU OBROLANNYA KELAR</div>
  </div>`;
}

let activeDialog = null;
let lastSwipeAt = 0;

function runDialog(script, { onDone } = {}) {
  const stage = $('.vnStage');
  const lines = $('#scriptLines');
  const choiceEl = $('#vnChoices');
  const extra = $('#scriptExtra');
  const caption = $('.caption', stage);
  const sfx = $('.sfx', stage);
  const nextTag = $('.panel-next', stage);
  if (!stage || !lines) return;

  const bubbles = { aka: $('.b-aka', stage), awa: $('.b-awa', stage) };
  const chars = { aka: $('.vn-char[data-who="aka"]', stage), awa: $('.vn-char[data-who="awa"]', stage) };
  let i = 0, typing = false, timer = null, finished = false, finishType = null;

  function dimAll(who) {
    Object.entries(chars).forEach(([k, n]) => {
      if (!n) return;
      n.classList.toggle('is-active', k === who);
      n.classList.toggle('is-dim', who !== 'narator' && k !== who);
      n.classList.toggle('is-talking', k === who);
    });
  }

  function ghostOthers(who) {
    Object.entries(bubbles).forEach(([k, b]) => {
      if (!b) return;
      if (k === who) return;
      if (!b.hidden) b.classList.add('is-ghost');
    });
    if (who !== 'narator' && !caption.hidden) caption.classList.add('is-ghost');
  }

  function typeInto(node, str, after) {
    typing = true;
    node.innerHTML = '';
    const caret = el('span', 'caret');
    node.appendChild(caret);
    let k = 0;
    const speed = reduceMotion ? 0 : 19;
    const done = () => { typing = false; caret.remove(); node.textContent = str; nextTag.hidden = false; after && after(); };
    const tick = () => {
      if (k >= str.length) return done();
      const ch = str[k++];
      caret.insertAdjacentText('beforebegin', ch);
      if (k % 3 === 0) blip(rand(520, 660), .012, .01);
      timer = setTimeout(tick, /[.,!?]/.test(ch) ? speed * 8 : speed);
    };
    finishType = () => { clearTimeout(timer); k = str.length; done(); };
    if (speed === 0) done(); else tick();
  }

  function logLine(who, text) {
    const li = el('li', 'sl sl-' + who);
    li.innerHTML = `<b>${who === 'narator' ? 'NARASI' : who.toUpperCase()}</b><span>${esc(text)}</span>`;
    lines.appendChild(li);
    requestAnimationFrame(() => li.classList.add('is-in'));
    const body = lines.closest('.pg-body');
    if (body) {
      const liBottom = li.offsetTop + li.offsetHeight;
      const seen = body.scrollTop + body.clientHeight;
      if (liBottom > seen - 8) {
        body.scrollTo({ top: liBottom - body.clientHeight + 26, behavior: reduceMotion ? 'auto' : 'smooth' });
      }
    }
  }

  function popSfx(txt) {
    if (!txt) { sfx.hidden = true; return; }
    sfx.textContent = txt;
    sfx.hidden = false;
    sfx.classList.remove('is-pop'); void sfx.offsetWidth; sfx.classList.add('is-pop');
  }

  function step() {
    choiceEl.innerHTML = '';
    nextTag.hidden = true;
    const node = script[i];
    if (!node) {
      finished = true;
      activeDialog = null;
      Object.values(bubbles).forEach(b => b && b.classList.add('is-ghost'));
      onDone && onDone(extra);
      return;
    }
    if (node.mood) { stage.dataset.mood = node.mood; popSfx(node.sfx || moodSfx(node.mood)); }
    else if (node.sfx) popSfx(node.sfx);

    if (node.q) {
      caption.hidden = false;
      caption.classList.remove('is-ghost');
      ghostOthers('narator');
      typeInto(caption, node.q, () => { nextTag.hidden = true; });
      logLine('narator', node.q);
      node.opts.forEach(o => {
        const b = el('button', 'vn-choice', `<i></i>${esc(o.t)}`);
        b.addEventListener('click', ev => {
          ev.stopPropagation();
          $$('.vn-choice', choiceEl).forEach(x => x.disabled = true);
          b.classList.add('is-picked');
          blip(720, .06, .04);
          if (o.say) { logLine('aka', o.say); showBubble('aka', o.say); }
          logLine('narator', o.r);
          caption.hidden = false;
          caption.classList.remove('is-ghost');
          caption.textContent = o.r;
          if (o.good) petals.burst(innerWidth / 2, innerHeight / 2, 16);
          i++;
          nextTag.hidden = false;
        });
        choiceEl.appendChild(b);
      });
      return;
    }

    const who = node.who || 'narator';
    dimAll(who);
    ghostOthers(who);
    if (who === 'narator') {
      Object.values(bubbles).forEach(b => b && b.classList.add('is-ghost'));
      caption.hidden = false;
      caption.classList.remove('is-ghost');
      typeInto(caption, node.t);
    } else {
      caption.classList.add('is-ghost');
      showBubble(who, node.t, node.pose);
    }
    logLine(who, node.t);
    i++;
  }

  function showBubble(who, text, pose) {
    const b = bubbles[who]; if (!b) return;
    const inner = $('.bub-in', b);
    b.hidden = false;
    b.classList.remove('is-ghost', 'is-pop');
    void b.offsetWidth;
    b.classList.add('is-pop');
    b.dataset.pose = pose || '';
    typeInto(inner, text);
  }

  function moodSfx(m) {
    return m === 'badai' ? 'KRESEK…' : m === 'malam' ? 'HENING' : m === 'pagi' ? 'LEGA…' : '';
  }

  function advance() {
    if (finished) return;
    if (typing) { finishType && finishType(); return; }
    if ($('.vn-choice:not([disabled])', choiceEl)) { toast('pilih dulu salah satunya'); return; }
    step();
  }

  activeDialog = { advance };
  [stage, lines.closest('.script')].forEach(n => n && n.addEventListener('click', e => {
    if (e.target.closest('button, a')) return;
    if (Date.now() - lastSwipeAt < 500) return;   // barusan swipe, jangan dianggap klik
    advance();
  }));
  step();
}

/* ============================ BAGIAN 6 — BAB ============================ */


/* coretan ala binder: digambar pas halaman kebuka */
const DOODLE = {
  underline: 'M4,22 C50,6 120,34 206,10',
  underline2: 'M6,14 C60,30 130,2 208,20',
  circle: 'M106,10 C40,8 10,34 16,56 C24,82 92,92 134,74 C170,58 168,20 120,12 C92,8 54,14 34,30',
  arrow: 'M6,8 C44,16 72,40 86,74 M86,74 L70,58 M86,74 L92,52',
  star: 'M30,4 L36,24 L58,26 L40,40 L46,60 L30,48 L14,60 L20,40 L2,26 L24,24 Z',
  spiral: 'M44,30 C44,16 26,14 20,26 C12,42 34,54 50,46 C72,34 62,6 36,6 C14,6 2,26 8,46',
  cross: 'M8,8 L72,64 M72,8 L8,64',
  wave: 'M4,16 q16,-14 32,0 t32,0 t32,0 t32,0'
};
function doodle(kind, style, opt = {}) {
  const d = DOODLE[kind] || DOODLE.star;
  const vb = opt.vb || '0 0 220 90';
  const cls = 'scribble' + (opt.ink ? ' ink' : '');
  return `<svg class="${cls}" style="${style}" viewBox="${vb}" aria-hidden="true">
    <path d="${d}" style="--len:${opt.len || 420};animation-delay:${opt.delay || '.35s'}"/></svg>`;
}

function pgShell(num, kicker, body, foot, deco) {
  return `<div class="pg">
    ${deco ? `<div class="pg-deco" aria-hidden="true">${deco}</div>` : ''}
    <div class="pg-head"><span class="pg-num">${num}</span><span class="pg-kicker">${kicker}</span></div>
    <div class="pg-body">${body}</div>
    <div class="pg-foot">${foot || `<span>ARAH TANPA PETA</span><span class="sig">aka &amp; awa</span>`}</div>
  </div>`;
}

function poemHTML(p, { full = true, limit = 0, note = true } = {}) {
  const paras = (limit ? p.body.slice(0, limit) : p.body).map((t, i) =>
    `<p class="ln" style="animation-delay:${0.12 * i + 0.1}s">${esc(t).replace(/\n/g, '<br>')}</p>`).join('');
  return `
  <div class="poem">
    <div class="poem-head">
      <div>
        <div class="poem-title">${esc(p.title)}
          <svg class="title-underline" viewBox="0 0 220 18" aria-hidden="true"><path d="M4,12 C56,2 140,20 216,6"/></svg>
        </div>
        <div class="poem-by">— ${CFG.penName} · ${esc(p.date)}</div>
      </div>
      <span class="tag pink">PUISI ASLI</span>
    </div>
    ${p.epi ? `<p class="lead poem-quote ln">“${esc(p.epi)}”</p>` : ''}
    <div class="poem-lines">${paras}</div>
    ${full && p.end ? `<p class="lead poem-quote ln" style="animation-delay:.9s">${esc(p.end)}</p>` : ''}
    ${note && p.note ? `<div class="poem-note"><b>CATATAN PINGGIR — AKA</b>${esc(p.note)}</div>` : ''}
  </div>`;
}

const poemById = id => POEMS.find(p => p.id === id);

/* ---------- BAB 01 ---------- */
const bab1 = {
  num: '01', key: 'PERTEMUAN', gate: true,
  decoR: () => doodle('arrow', 'left:3%;bottom:8%;width:72px;height:74px', { vb: '0 0 100 90', len: 260, delay: '.8s', ink: true }),
  left: () => stageHTML('malam'),
  right: () => scriptHTML('Semuanya berangkat dari malam yang <em>tak direncanakan</em>.'),
  init() {
    runDialog(SCRIPTS.bab1, {
      onDone(extra) {
        unlockChapter(1, 'bab 02 kebuka');
        const b = el('button', 'btn-brut cream', 'BACA PUISI MALAM ITU');
        b.addEventListener('click', () => {
          extra.innerHTML = poemHTML(poemById('dimsum'), { limit: 2 });
          extra.insertAdjacentHTML('beforeend',
            `<p class="hand" style="margin-top:10px">versi utuhnya ada di <b>bab 07 — arsip</b>.</p>`);
          petals.burst(innerWidth * .72, innerHeight * .45, 18);
        });
        extra.appendChild(b);
      }
    });
  }
};

/* ---------- BAB 02 ---------- */
const bab2 = {
  num: '02', key: 'YANG AKU SUKA',
  decoL: () => doodle('star', 'right:7%;bottom:12%;width:50px;height:52px', { vb: '0 0 60 64', len: 260, ink: true })
    + doodle('spiral', 'left:4%;bottom:7%;width:74px;height:60px', { vb: '0 0 76 60', len: 230, delay: '.9s' }),
  decoR: () => doodle('wave', 'right:5%;bottom:4%;width:150px;height:30px', { vb: '0 0 160 32', len: 300, delay: '.6s' }),
  left: () => `
    <p class="lead">Ada delapan hal yang aku catat diam-diam, dan <em>nggak pernah aku bacain</em> langsung ke kamu.</p>
    <p class="body-txt">Bukan gombalan — aku nggak pinter gombal. Ini cuma hasil merhatiin satu orang kelewat lama,
    sampai hal-hal kecilnya pun ikut keinget. Klik satu-satu, isinya ada di baliknya.</p>
    <svg class="scribble" style="left:6%;top:142px;width:180px;height:40px" viewBox="0 0 180 40">
      <path d="M4,26 C44,6 96,36 176,12" style="--len:260"/>
    </svg>
    <p class="hand" style="margin-top:48px">“aku tidak perlu mengerti setiap katamu, sebab yang kutangkap bukan maknanya,
    melainkan kesungguhan di balik tiap jeda yang kau buat.”<br>— kalimat kamu ini yang bikin aku berani nulis daftarnya.</p>
    <div class="note-count" id="noteCount">0 / ${NOTES.length} KEBUKA</div>`,
  right: () => `<div class="noteGrid">${NOTES.map((n, i) => `
      <button class="note" data-i="${i}">
        <span class="note-pin"></span>
        <span class="note-face note-front">${esc(n.t)}<small>${esc(n.s)}</small></span>
        <span class="note-face note-back"><span>${esc(n.b)}</span></span>
      </button>`).join('')}</div>`,
  init() {
    const counter = $('#noteCount');
    let n = 0;
    fitNotes();
    $$('.note').forEach(b => b.addEventListener('click', () => {
      const first = !b.classList.contains('is-flipped');
      b.classList.toggle('is-flipped');
      if (first) {
        n++;
        counter.textContent = `${n} / ${NOTES.length} KEBUKA`;
        const r = b.getBoundingClientRect();
        petals.burst(r.left + r.width / 2, r.top + r.height / 2, 6);
        blip(640 + n * 24, .05, .035);
        if (n === NOTES.length) {
          counter.textContent = 'DELAPAN-DELAPANNYA BENERAN. NGGAK ADA YANG DILEBIHIN.';
          counter.style.background = 'var(--pink)';
          counter.style.color = '#fff';
          petals.burst(innerWidth / 2, innerHeight / 2, 26);
          // kertas kesembilan: yang sengaja disimpen paling belakang
          const grid = $('.noteGrid');
          if (grid && !$('.note-last', grid)) {
            const last = el('div', 'note-last reveal-up');
            last.innerHTML = `<b>KERTAS KE-9 — YANG SENGAJA AKU SIMPEN PALING BELAKANG</b>
              delapan kertas tadi aku tulis bukan buat ngerayu. aku cuma pengin kamu tau ada orang yang
              merhatiin kamu sedetail itu, dan nggak minta apa-apa selain kamu baca sampai habis.`;
            grid.appendChild(last);
            setTimeout(() => last.scrollIntoView({ block: 'nearest', behavior: reduceMotion ? 'auto' : 'smooth' }), 300);
          }
        }
      }
    }));
  }
};

/* teks kertas tempel dikecilin otomatis kalau kepanjangan, biar nggak pernah kepotong */
function fitNotes() {
  $$('.note-back').forEach(back => {
    const inner = back.firstElementChild;
    if (!inner) return;
    let size = 17;
    inner.style.fontSize = size + 'px';
    let guard = 0;
    while (guard++ < 24) {
      const muat = inner.getBoundingClientRect().height <= back.clientHeight - 18
                && inner.getBoundingClientRect().width <= back.clientWidth - 2;
      if (muat || size <= 11) break;
      size -= 0.5;
      inner.style.fontSize = size + 'px';
    }
  });
}
addEventListener('resize', () => { if (State.chapter === 2) setTimeout(fitNotes, 260); });

/* ---------- BAB 03 ---------- */
const bab3 = {
  num: '03', key: 'BARISAN KATA', gate: true,
  left: () => stageHTML('malam', { think: true }),
  right: () => scriptHTML('Masalahnya bukan aku kehabisan kata. Masalahnya aku <em>kelamaan nyusun</em>.'),
  init() {
    const think = $('.vn-think');
    if (think) think.hidden = false;
    runDialog(SCRIPTS.bab3, {
      onDone(extra) {
        unlockChapter(3, 'bab 04 kebuka');
        extra.insertAdjacentHTML('beforeend', poemHTML(poemById('barisan'), { limit: 3 }));
        petals.burst(innerWidth * .72, innerHeight * .5, 16);
      }
    });
  }
};

/* ---------- BAB 04 ---------- */
const bab4 = {
  num: '04', key: 'BADAI', gate: true,
  left: () => stageHTML('badai'),
  right: () => `
    ${scriptHTML('Kita jarang berselisih soal <em>masalahnya</em>. Kita berselisih soal <em>cara nyampeinnya</em>.')}
    <div class="storm" style="margin-top:16px">
      <div class="storm-box" id="stormBox">
        <h4>RUANG YANG RIUH</h4>
        <div class="storm-words">
          ${['TERSERAH', 'GAPAPA KOK', 'NANTI AJA', 'CAPEK', 'BODO AMAT', 'JANGAN DIBAHAS', 'AKU SALAH LAGI?', 'DIAM AJA']
            .map((w, i) => `<span class="sw" style="left:${i % 2 ? 52 : 5}%;top:${6 + Math.floor(i / 2) * 23}%;--r:${(i % 3 - 1) * 5}deg;animation-delay:${i * .3}s">${w}</span>`).join('')}
        </div>
        <svg class="knot" id="knot" viewBox="0 0 300 150" aria-hidden="true">
          <path class="thread-a" id="threadA" d="M10,80 C70,10 90,150 150,75 C210,5 230,145 290,70"/>
          <path class="thread-b" id="threadB" d="M10,60 C70,140 90,0 150,75 C210,150 230,10 290,95"/>
        </svg>
      </div>
      <div class="breathe-wrap" data-nodrag>
        <button class="breathe-btn" id="breatheBtn">TAHAN<br>NAPAS</button>
        <div style="flex:1;min-width:150px">
          <div class="breathe-meter"><div id="breatheBar"></div></div>
          <p class="hand" style="margin-top:8px" id="breatheTxt">tahan tombolnya sampai penuh. jangan dilepas di tengah.</p>
        </div>
      </div>
    </div>`,
  init() {
    runDialog(SCRIPTS.bab4, { onDone() { toast('tahan tombol NAPAS sampai penuh'); } });

    const btn = $('#breatheBtn'), bar = $('#breatheBar'), box = $('#stormBox'), txt = $('#breatheTxt');
    let hold = 0, holding = false, calm = false, tick = null;
    const NEED = reduceMotion ? 40 : 100;

    function loop() {
      if (calm) { stop(); return; }
      hold = holding ? Math.min(NEED, hold + 1) : Math.max(0, hold - 1.6);
      bar.style.width = (hold / NEED * 100) + '%';
      if (hold >= NEED) { stop(); finish(); return; }
      if (hold <= 0 && !holding) stop();
    }
    const stop = () => { clearInterval(tick); tick = null; };
    const kick = () => { if (!tick) tick = setInterval(loop, 16); };

    function finish() {
      calm = true;
      btn.classList.remove('is-holding');
      box.classList.add('is-calm');
      const st = $('.vnStage'); if (st) { st.dataset.mood = 'pagi'; }
      $('#threadA').setAttribute('d', 'M10,80 C90,78 120,74 150,74 C190,74 240,72 290,70');
      $('#threadB').setAttribute('d', 'M10,92 C90,90 120,88 150,86 C190,84 240,84 290,82');
      txt.textContent = 'ributnya reda. nggak ada yang menang, dan justru itu bagusnya.';
      petals.burst(innerWidth * .4, innerHeight * .5, 24);
      blip(420, .3, .05, 'sine');
      runDialog(SCRIPTS.bab4b, {
        onDone(extra) {
          unlockChapter(4, 'bab 05 kebuka');
          extra.insertAdjacentHTML('beforeend', `
            <div class="poem-note" style="margin-top:14px">
              <b>DARI PUISI “KESEKIAN KALINYA” — ${CFG.penName}</b>
              “Haruskah aku yang berbenah, sementara kau tak pernah?”
            </div>
            <p class="hand" style="margin-top:10px">aku nggak mau jadi orang yang bikin kamu nulis puisi kayak gitu.</p>`);
        }
      });
    }
    btn.addEventListener('pointerdown', e => { e.preventDefault(); e.stopPropagation(); if (calm) return; holding = true; btn.classList.add('is-holding'); kick(); });
    ['pointerup', 'pointerleave', 'pointercancel'].forEach(ev => btn.addEventListener(ev, () => { holding = false; btn.classList.remove('is-holding'); kick(); }));
  }
};

/* ---------- BAB 05 ---------- */
const bab5 = {
  num: '05', key: 'ISI KEPALA AKA', sub: 'OVERTHINKING · 1 PAGI',
  decoR: () => doodle('spiral', 'right:6%;bottom:6%;width:78px;height:62px', { vb: '0 0 76 60', len: 230, delay: '.7s', ink: true }),
  left: () => `
    <div class="mindWrap" data-nodrag>
      <div class="sphere" id="sphere"><div class="sphere-in" id="sphereIn"></div></div>
      <div class="mind-read" id="mindRead"><b>PUTER BOLANYA, KLIK SATU PIKIRAN</b>Isi kepala aku jam 1 pagi. Nggak semuanya masuk akal, tapi semuanya beneran lewat.</div>
    </div>`,
  right: () => `
    <p class="lead">Kamu bilang aku kebanyakan mikir. <em>Bener.</em> Ini isinya.</p>
    <p class="body-txt">Bedanya cuma satu: dulu semua ini aku simpen sendiri. Sekarang aku tulis, biar kamu tau diamku
    bukan karena cuek.</p>
    <div class="safe" style="margin-top:14px" data-nodrag>
      <div class="dial" id="dial"><div class="dial-in" id="dialNum">0</div></div>
      <div class="safe-txt">
        <h4>BRANKAS KEPERCAYAAN</h4>
        <p id="safeTxt">Puter tiga kali — ditarik atau diklik aja juga bisa. Pelan nggak apa-apa, emang nggak ada yang cepat soal percaya.</p>
        <div class="lock-pips" id="pips"><i></i><i></i><i></i></div>
      </div>
    </div>`,
  init() {
    /* --- bola kata 3D --- */
    const host = $('#sphereIn'), wrap = $('#sphere'), read = $('#mindRead');
    const R = Math.min(122, (wrap.clientWidth || 300) / 2 - 34);
    const items = MIND.map((m, i) => {
      const k = i + 0.5, phi = Math.acos(1 - 2 * k / MIND.length), th = Math.PI * (1 + Math.sqrt(5)) * k;
      const chip = el('button', 'chip', esc(m.w));
      chip.dataset.i = i;
      chip._p = { x: R * Math.cos(th) * Math.sin(phi), y: R * Math.cos(phi), z: R * Math.sin(th) * Math.sin(phi) };
      host.appendChild(chip);
      return chip;
    });
    let rx = -12, ry = 0, vx = 0, vy = 0.18, drag = false, lx = 0, ly = 0;

    function paint() {
      host.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
      items.forEach(c => {
        const p = c._p;
        // kedalaman kasar buat skala + opasitas
        const rad = Math.PI / 180;
        const cy2 = Math.cos(ry * rad), sy2 = Math.sin(ry * rad);
        const z = p.x * sy2 + p.z * cy2;
        const d = (z + R) / (2 * R);
        c.style.transform = `translate(-50%,-50%) translate3d(${p.x}px,${p.y}px,${p.z}px) rotateY(${-ry}deg) rotateX(${-rx}deg) scale(${0.72 + d * 0.5})`;
        c.style.opacity = (0.42 + d * 0.58).toFixed(2);
        c.style.zIndex = Math.round(d * 100);
      });
    }
    function loop() {
      if (!document.body.contains(wrap)) return;
      if (!drag) { ry += vy; rx += vx; vx *= 0.96; vy += (0.18 - vy) * 0.02; }
      rx = clamp(rx, -60, 60);
      paint();
      requestAnimationFrame(loop);
    }
    const sphMove = e => {
      if (!drag) return;
      const dx = e.clientX - lx, dy = e.clientY - ly;
      ry += dx * 0.4; rx -= dy * 0.3; vy = dx * 0.08; vx = -dy * 0.05;
      lx = e.clientX; ly = e.clientY; paint();
    };
    const sphUp = () => {
      drag = false; wrap.classList.remove('is-drag');
      window.removeEventListener('pointermove', sphMove);
    };
    wrap.addEventListener('pointerdown', e => {
      drag = true; wrap.classList.add('is-drag'); lx = e.clientX; ly = e.clientY;
      window.addEventListener('pointermove', sphMove);
      window.addEventListener('pointerup', sphUp, { once: true });
      window.addEventListener('pointercancel', sphUp, { once: true });
    });
    items.forEach(c => c.addEventListener('click', () => {
      const m = MIND[+c.dataset.i];
      items.forEach(x => x.classList.remove('is-hot'));
      c.classList.add('is-hot');
      read.innerHTML = `<b>“${esc(m.w)}”</b>${esc(m.a)}`;
      blip(560, .05, .035);
    }));
    paint(); loop();

    /* --- brankas kepercayaan --- */
    // nggak pakai setPointerCapture: di dalam lapisan 3D sering nggak jalan.
    // listener-nya ditempel ke window selama ditarik, plus bisa diklik aja 3x.
    const dial = $('#dial'), num = $('#dialNum'), pips = $$('#pips i'), stxt = $('#safeTxt');
    let ang = 0, last = null, turns = 0, dragging = false, opened = false, moved = 0;

    const center = () => { const r = dial.getBoundingClientRect(); return { x: r.left + r.width / 2, y: r.top + r.height / 2 }; };
    const render = () => {
      dial.style.transform = `rotate(${ang}deg)`;
      num.style.transform = `rotate(${-ang}deg)`;
      const t = Math.min(3, Math.floor(Math.abs(ang) / 330));
      num.textContent = t;
      if (t > turns) {
        turns = t;
        pips[t - 1] && pips[t - 1].classList.add('on');
        blip(400 + t * 120, .07, .04);
        if (t >= 3) openSafe();
      }
    };

    const onMove = e => {
      if (!dragging || opened) return;
      const c = center();
      const a = Math.atan2(e.clientY - c.y, e.clientX - c.x) * 180 / Math.PI;
      if (last != null) {
        let d = a - last;
        if (d > 180) d -= 360; if (d < -180) d += 360;
        ang += d; moved += Math.abs(d);
        render();
      }
      last = a;
    };
    const onUp = e => {
      window.removeEventListener('pointermove', onMove);
      dragging = false; last = null;
      if (!opened && moved < 8) {            // cuma diklik, bukan diputer: langsung satu putaran sepertiga
        dial.style.transition = 'transform .6s var(--ease)';
        ang += 360;                          // satu klik = satu putaran penuh
        render();
      }
    };

    dial.addEventListener('pointerdown', e => {
      if (opened) return;
      e.preventDefault(); e.stopPropagation();
      dragging = true; last = null; moved = 0;
      dial.style.transition = 'none';
      window.addEventListener('pointermove', onMove);
      window.addEventListener('pointerup', onUp, { once: true });
      window.addEventListener('pointercancel', onUp, { once: true });
    });

    function openSafe() {
      if (opened) return;
      opened = true;
      stxt.innerHTML = 'Kebuka. Dan isinya cuma satu kalimat:<br><b style="font-family:var(--ff-display);font-size:12px;letter-spacing:.1em">AKU NGGAK MINTA KUNCI. AKU CUMA NUNGGU SAMPAI KAMU MAU BUKA SENDIRI.</b>';
      const r = dial.getBoundingClientRect();
      petals.burst(r.left + r.width / 2, r.top + r.height / 2, 20);
      const p = el('div', 'poem-note');
      p.innerHTML = `<b>DARI PUISI “AKU BAIK-BAIK SAJA” — ${CFG.penName}</b>“padahal yang kubutuhkan hanyalah seseorang yang sudi melihatku tanpa topeng.”`;
      $('.safe').insertAdjacentElement('afterend', p);
    }
  }
};

/* ---------- BAB 06 ---------- */
const bab6 = {
  num: '06', key: 'KENANGAN', sub: 'ARSIP FOTO · SEP–OKT',
  left: () => {
    const duo = PHOTOS[0];
    return `
    <p class="lead">Bukti kalau ini <em>beneran kejadian</em>, bukan cuma di kepalaku.</p>
    <figure class="polaroid" style="--rot:-2deg;max-width:230px;margin:14px auto 0" data-i="0">
      <span class="tape"></span>
      <div class="ph"><img src="${url(duo.f)}" alt="kita" loading="lazy"></div>
      <figcaption>${esc(duo.cap)}</figcaption>
    </figure>
    <p class="hand" style="margin-top:16px">klik fotonya buat diperbesar. yang ada tanda ▶ itu video.</p>`;
  },
  right: () => `<div class="wall">${PHOTOS.slice(1).map((p, i) => `
      <figure class="polaroid" style="--rot:${((i % 5) - 2) * 1.6}deg" data-i="${i + 1}">
        ${i % 3 === 0 ? '<span class="tape"></span>' : ''}
        <div class="ph">
          ${p.video
            ? `<video src="${url(p.f)}" muted playsinline preload="metadata"></video><span class="play">&#9654;</span>`
            : `<img src="${url(p.f)}" alt="${esc(p.date)}" loading="lazy">`}
        </div>
        <figcaption>${esc(p.date)}</figcaption>
      </figure>`).join('')}</div>`,
  init() {
    $$('.polaroid').forEach(f => f.addEventListener('click', () => openLightbox(+f.dataset.i)));
  }
};

/* ---------- BAB 07 ---------- */
const bab7 = {
  num: '07', key: 'ARSIP CAWAAA', sub: 'KUMPULAN PUISI ASLI',
  decoL: () => doodle('underline2', 'left:7%;bottom:13%;width:180px;height:28px', { vb: '0 0 214 26', len: 260, delay: '.7s' }),
  left: () => `
    <p class="lead">Semua yang kamu tulis, aku simpen di sini. <em>Lengkap.</em></p>
    <p class="body-txt">Delapan karya. Aku nggak ngedit satu kata pun — cuma nambahin catatan pinggir di bawahnya,
    kayak orang yang nggak bisa nahan diri buat nulis di buku orang.</p>
    <div class="arc-list" style="margin-top:14px" id="arcList">
      ${POEMS.map((p, i) => `<button class="arc-item${i === 0 ? ' is-on' : ''}" data-i="${i}">${esc(p.title)}</button>`).join('')}
    </div>
    <p class="hand" style="margin-top:16px">“menyaksikannya lahir satu per satu pun sudah cukup bagiku.”</p>`,
  right: () => `<div id="arcReader">${poemHTML(POEMS[State.poemIdx] || POEMS[0])}</div>`,
  init() {
    const reader = $('#arcReader');
    $$('#arcList .arc-item').forEach(b => b.addEventListener('click', () => {
      $$('#arcList .arc-item').forEach(x => x.classList.remove('is-on'));
      b.classList.add('is-on');
      State.poemIdx = +b.dataset.i;
      reader.innerHTML = poemHTML(POEMS[State.poemIdx]);
      const body = reader.closest('.pg-body'); if (body) body.scrollTop = 0;
      blip(600, .05, .03);
    }));
  }
};

/* ---------- BAB 08 ---------- */
const bab8 = {
  num: '08', key: 'ARAH TANPA PETA', sub: 'PENUTUP',
  decoR: () => doodle('star', 'right:7%;bottom:14%;width:46px;height:48px', { vb: '0 0 60 64', len: 260 })
    + doodle('underline', 'left:6%;bottom:7%;width:170px;height:26px', { vb: '0 0 214 26', len: 260, delay: '1s', ink: true }),
  left: () => `
    <p class="lead">Nggak ada peta. Jadi <em>gambar sendiri</em> jalannya.</p>
    <div class="mapWrap" data-nodrag>
      <canvas id="mapCanvas"></canvas>
      <div class="map-grid"></div>
      <div class="map-pin start">A</div>
      <div class="map-pin end">S</div>
      <div class="map-hint" id="mapHint">tarik dari A ke S</div>
    </div>`,
  right: () => `
    <div id="finaleTxt">
      <p class="body-txt">Gambar dulu jalannya di peta itu — dari <b>A</b> ke <b>S</b>. Sisanya nyusul sendiri.</p>
      <div class="poem-note" style="margin-top:14px">
        <b>DARI PUISI “LALU SIAPA?” — ${CFG.penName}</b>
        “jiwaku perahu tanpa jangkar… hidup berjalan tanpa alamat yang dituju.”
      </div>
      <p class="hand" style="margin-top:12px">kita emang nggak punya alamat. tapi kita punya arah.</p>
    </div>`,
  init() {
    const cv = $('#mapCanvas'), hint = $('#mapHint'), out = $('#finaleTxt');
    const ctx = cv.getContext('2d');
    let w, h, drawing = false, pts = [], done = false;
    function size() {
      if (!document.body.contains(cv)) return;
      const r = cv.getBoundingClientRect();
      w = cv.width = r.width * devicePixelRatio; h = cv.height = r.height * devicePixelRatio;
      redraw();
    }
    function redraw() {
      ctx.clearRect(0, 0, w, h);
      if (pts.length < 2) return;
      ctx.lineCap = ctx.lineJoin = 'round';
      ctx.strokeStyle = '#140E12'; ctx.lineWidth = 11 * devicePixelRatio;
      stroke(); ctx.strokeStyle = '#FF3D8F'; ctx.lineWidth = 6 * devicePixelRatio; stroke();
      function stroke() {
        ctx.beginPath(); ctx.moveTo(pts[0].x, pts[0].y);
        for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i].x, pts[i].y);
        ctx.stroke();
      }
    }
    const pos = e => { const r = cv.getBoundingClientRect(); return { x: (e.clientX - r.left) * devicePixelRatio, y: (e.clientY - r.top) * devicePixelRatio }; };
    // gambar petanya pakai listener window biar nggak putus pas jari/kursor keluar kanvas
    const draw = e => {
      if (!drawing || done) return;
      const p = pos(e);
      const lastPt = pts[pts.length - 1];
      if (!lastPt || Math.hypot(p.x - lastPt.x, p.y - lastPt.y) > 4) { pts.push(p); redraw(); }
      if (p.x > w * 0.82 && p.y < h * 0.34 && pts.length > 20) finish();
    };
    const stopDraw = () => {
      drawing = false;
      removeEventListener('pointermove', draw);
    };
    cv.addEventListener('pointerdown', e => {
      if (done) return;
      e.preventDefault();
      drawing = true;
      pts.push(pos(e));
      addEventListener('pointermove', draw);
      addEventListener('pointerup', stopDraw, { once: true });
      addEventListener('pointercancel', stopDraw, { once: true });
    });
    addEventListener('resize', size, { passive: true });
    setTimeout(size, 60);

    function finish() {
      done = true;
      hint.textContent = 'jalannya kebentuk.';
      petals.burst(innerWidth * .3, innerHeight * .45, 30);
      blip(520, .2, .05, 'sine');
      out.innerHTML = '';
      FINALE.forEach((t, i) => {
        const p = el('p', 'lead reveal-up', esc(t));
        p.style.animationDelay = (0.25 * i) + 's';
        p.style.marginBottom = '12px';
        out.appendChild(p);
      });
      const card = el('div', 'endCard reveal-up');
      card.style.animationDelay = (0.25 * FINALE.length) + 's';
      card.innerHTML = `<h3>ARAH TANPA PETA</h3>
        <p>dua orang, nol peta, satu arah.<br>makasih udah jadi orang yang aku tuju.</p>
        <div class="sign">AKA &nbsp;&times;&nbsp; AWA &nbsp;·&nbsp; PUISI OLEH ${CFG.penName.toUpperCase()}</div>`;
      out.appendChild(card);
      const btn = el('button', 'btn-brut ghost', 'TUTUP BUKUNYA');
      btn.style.marginTop = '14px';
      btn.addEventListener('click', closeBook);
      out.appendChild(btn);
    }
  }
};

/* ============================ BAGIAN 7 — ROUTER & NAVIGASI ============================ */

const CHAPTERS = [bab1, bab2, bab3, bab4, bab5, bab6, bab7, bab8];
CHAPTERS[0].sub = 'MALAM DIMSUM · 01 OKT';
CHAPTERS[1].sub = 'DELAPAN KERTAS TEMPEL';
CHAPTERS[2].sub = 'JAM 1 PAGI';
CHAPTERS[3].sub = 'SOAL CARA, BUKAN SOAL MASALAH';

const isSingle = () => innerWidth < 900;

function renderChapter(n) {
  const c = CHAPTERS[n - 1];
  const book = $('#book'), L = $('#pageL'), R = $('#pageR');
  book.classList.toggle('is-single', isSingle());
  if (isSingle()) {
    L.innerHTML = '';
    R.innerHTML = pgShell(c.num, c.key, c.left() + '<div style="height:18px"></div>' + c.right(),
      `<span>${esc(c.sub || '')}</span><span class="sig">aka &amp; awa</span>`, c.decoR && c.decoR());
  } else {
    L.innerHTML = pgShell(c.num, c.key, c.left(), `<span>BAB ${c.num}</span><span class="sig">${esc(CFG.penName)}</span>`,
      c.decoL && c.decoL());
    R.innerHTML = pgShell('&nbsp;', c.sub || c.key, c.right(),
      `<span>ARAH TANPA PETA</span><span class="sig">aka &amp; awa</span>`, c.decoR && c.decoR());
  }
  staggerIn($('#pageL .pg-body'));
  staggerIn($('#pageR .pg-body'));
  c.init && c.init();
  updateHud();
}

async function goChapter(n, dir = 1) {
  n = clamp(n, 1, CHAPTERS.length);
  if (State.busy || n === State.chapter) return;
  // nggak boleh maju sebelum bab ini kelar
  if (n > State.chapter && State.chapter !== 0 && (State.locked || n > State.unlockedUpTo)) { tolakLanjut(); return; }
  State.busy = true;
  if (!reduceMotion && State.chapter !== 0) {
    const wipe = $('#wipe');
    wipe.querySelector('b').textContent = String(n).padStart(2, '0');
    wipe.classList.remove('is-on'); void wipe.offsetWidth; wipe.classList.add('is-on');
    setTimeout(() => wipe.classList.remove('is-on'), 760);
  }
  const flip = $('#flipper');
  if (!reduceMotion && State.chapter !== 0 && !isSingle()) {
    flip.classList.remove('is-flipping', 'is-flipping-back');
    void flip.offsetWidth;
    flip.classList.add(dir > 0 ? 'is-flipping' : 'is-flipping-back');
    blip(260, .06, .035, 'triangle');
    await wait(340);
  }
  State.chapter = n;
  State.unlockedUpTo = Math.max(State.unlockedUpTo, n);
  try { history.replaceState(null, '', '#bab' + n); } catch (e) {}
  const c = CHAPTERS[n - 1];
  if (c.gate) lockChapter(n); else { State.locked = false; unlockChapter(n); }
  renderChapter(n);
  await wait(reduceMotion ? 0 : 380);
  flip.classList.remove('is-flipping', 'is-flipping-back');
  State.busy = false;
}

function updateHud() {
  $('#chapNum').textContent = String(State.chapter).padStart(2, '0');
  $('#hudBar').style.width = (State.chapter / CHAPTERS.length * 100) + '%';
  $$('#rail .rail-item').forEach((r, i) => r.classList.toggle('is-active', i + 1 === State.chapter));
  $$('#navDots .nav-dot').forEach((d, i) => d.classList.toggle('is-on', i + 1 === State.chapter));
  $('#prevBtn').disabled = State.chapter <= 1;
  $('#nextBtn').disabled = State.chapter >= CHAPTERS.length || State.locked;
  updateLockUI();
}

function buildRail() {
  const rail = $('#rail'), dots = $('#navDots');
  rail.innerHTML = ''; dots.innerHTML = '';
  CHAPTERS.forEach((c, i) => {
    const b = el('button', 'rail-item', `<b>${c.num}</b><span>${esc(c.key)}</span>`);
    b.addEventListener('click', () => goChapter(i + 1, i + 1 > State.chapter ? 1 : -1));
    rail.appendChild(b);
    const d = el('button', 'nav-dot');
    d.title = `Bab ${c.num} — ${c.key}`;
    d.addEventListener('click', () => goChapter(i + 1, i + 1 > State.chapter ? 1 : -1));
    dots.appendChild(d);
  });
}

/* tombol + keyboard + swipe */
$('#nextBtn').addEventListener('click', () => goChapter(State.chapter + 1, 1));
$('#prevBtn').addEventListener('click', () => goChapter(State.chapter - 1, -1));
$('#homeBtn').addEventListener('click', () => { if (State.opened) closeBook(); });
$('#helpBtn').addEventListener('click', () => { $('#help').hidden = false; });
$('#helpClose').addEventListener('click', () => { $('#help').hidden = true; });
$('#help').addEventListener('click', e => { if (e.target.id === 'help') $('#help').hidden = true; });

addEventListener('keydown', e => {
  if (e.key === 'Escape') { $('#help').hidden = true; closeLightbox(); return; }
  if (!State.opened) { if (e.key === 'Enter' || e.key === ' ') { if (State.vinesLeft <= 0) openBook(); } return; }
  if (e.key === 'ArrowRight') goChapter(State.chapter + 1, 1);
  if (e.key === 'ArrowLeft') goChapter(State.chapter - 1, -1);
  if (e.key === ' ') {
    if (activeDialog) { e.preventDefault(); activeDialog.advance(); }
  }
  if (e.key.toLowerCase() === 'm') $('#musicBtn').click();
  if (e.key.toLowerCase() === 's') { State.sfx = !State.sfx; toast(State.sfx ? 'bunyi ketikan: nyala' : 'bunyi ketikan: mati'); }
  if (e.key.toLowerCase() === 'h') $('#help').hidden = !$('#help').hidden;
});

(() => {
  const el0 = $('#stage'); let sx = 0, sy = 0, t0 = 0, valid = false;
  el0.addEventListener('pointerdown', e => {
    valid = !e.target.closest('[data-nodrag], button, .polaroid, .note, .bubble, .caption');
    sx = e.clientX; sy = e.clientY; t0 = Date.now();
  });
  el0.addEventListener('pointerup', e => {
    if (!valid || !State.opened) return;
    const dx = e.clientX - sx, dy = e.clientY - sy;
    if (Math.abs(dx) > 80 && Math.abs(dx) > Math.abs(dy) * 1.8 && Date.now() - t0 < 900) {
      lastSwipeAt = Date.now();
      goChapter(State.chapter + (dx < 0 ? 1 : -1), dx < 0 ? 1 : -1);
    }
  });
})();

/* lightbox */
function openLightbox(i) {
  const p = PHOTOS[i]; if (!p) return;
  const lb = $('#lightbox'), media = $('#lbMedia');
  media.innerHTML = p.video
    ? `<video src="${url(p.f)}" controls autoplay playsinline style="max-height:66vh"></video>`
    : `<img src="${url(p.f)}" alt="${esc(p.date)}">`;
  $('#lbCap').innerHTML = `<b>${esc(p.date)}</b> — ${esc(p.cap)}`;
  lb.hidden = false;
  if (p.video) { bgm.volume = 0.08; }
}
function closeLightbox() {
  const lb = $('#lightbox'); if (lb.hidden) return;
  $('#lbMedia').innerHTML = '';
  lb.hidden = true;
  if (State.music) bgm.volume = CFG.volume;
}
$('#lbClose').addEventListener('click', closeLightbox);
$('#lightbox').addEventListener('click', e => { if (e.target.id === 'lightbox') closeLightbox(); });

/* re-render pas layar ganti mode */
let rsT = null, lastSingle = isSingle();
addEventListener('resize', () => {
  clearTimeout(rsT);
  rsT = setTimeout(() => {
    if (isSingle() !== lastSingle && State.chapter) {
      lastSingle = isSingle();
      renderChapter(State.chapter);
    }
  }, 220);
});

/* parallax halus: bukunya cuma condong dikit, digerakin pelan (bukan ngejar kursor 1:1,
   soalnya itu bikin isi halaman goyang di bawah kursor) */
(() => {
  const book = $('#book');
  let tx = 0, ty = 0, cx = 0, cy = 0, run = false;
  addEventListener('pointermove', e => {
    if (!State.opened || reduceMotion) return;
    // pas kursor masuk ke area buku, miringnya dinolin — biar isi halaman diem
    // dan tombol nggak gerak-gerak pas mau diklik
    const r = book.getBoundingClientRect();
    const di = e.clientX > r.left - 18 && e.clientX < r.right + 18 &&
               e.clientY > r.top - 18 && e.clientY < r.bottom + 18;
    if (di) { tx = 0; ty = 0; }
    else {
      tx = clamp((e.clientX / innerWidth - 0.5) * 2, -1, 1);
      ty = clamp((e.clientY / innerHeight - 0.5) * 2, -1, 1);
    }
    if (!run) { run = true; requestAnimationFrame(step); }
  }, { passive: true });
  function step() {
    cx += (tx - cx) * 0.045;
    cy += (ty - cy) * 0.045;
    book.style.transform = `rotateX(${(3 - cy * 1.6).toFixed(2)}deg) rotateY(${(cx * 2).toFixed(2)}deg)`;
    if (Math.abs(tx - cx) > 0.002 || Math.abs(ty - cy) > 0.002) requestAnimationFrame(step);
    else run = false;
  }
})();

/* ---- tautan langsung: index.html#bab5 buka bab 5 tanpa lewat sampul ---- */
function applyHash() {
  if (/^#sampul$/i.test(location.hash || '')) {   // langsung ke sampul, lewatin layar muat
    const b = $('#startBtn');
    if (b && !b.hidden) b.click();
    else setTimeout(() => { const b2 = $('#startBtn'); b2 && b2.click(); }, 900);
    return true;
  }
  const m = (location.hash || '').match(/^#bab(\d+)$/i);
  if (!m) return false;
  const n = clamp(parseInt(m[1], 10), 1, CHAPTERS.length);
  const pre = $('#preloader');
  pre.classList.add('is-gone');
  document.body.classList.remove('is-loading');
  $('#hud').hidden = false; $('#rail').hidden = false; $('#stage').hidden = false; $('#pageNav').hidden = false;
  buildRail();
  buildVines();
  $('#coverHint').classList.add('is-gone');
  State.opened = true;
  const book = $('#book');
  book.classList.remove('state-closed'); book.classList.add('state-open', 'is-carved');
  const cov = $('#cover'); cov.style.transition = 'none'; cov.style.opacity = '0'; cov.style.pointerEvents = 'none';
  petals.start();
  State.chapter = 0;
  State.unlockedUpTo = n;
  goChapter(n);
  return true;
}
addEventListener('load', () => { setTimeout(applyHash, 60); });
addEventListener('hashchange', () => { const m = (location.hash||'').match(/^#bab(\d+)$/i); if (m && State.opened) goChapter(clamp(+m[1],1,CHAPTERS.length), 1); });
