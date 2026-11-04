// scripts/soal_w2.js - 20 Soal Terverifikasi Week 2 (Mobile Interface dengan React Native + Expo Go)
module.exports = [
  {
    id: "w2_01",
    week: 2,
    topik: "Platform Mobile",
    tingkat: "mudah",
    tipe: "konsep",
    pertanyaan: "Dalam pengembangan aplikasi PresidentKu, apa peran utama dari 'Expo Go' bagi tim developer?",
    options: [
      "Menggantikan fungsi server database di cloud",
      "Platform untuk menjalankan, mempratinjau (preview), dan menguji antarmuka langsung pada perangkat smartphone fisik secara instan",
      "Pustaka untuk membuat animasi 3D kompleks",
      "Sistem operasi baru pengganti Android dan iOS",
      "Kompiler untuk mengubah kode Python menjadi kode Swift"
    ],
    correct: 1,
    pembahasan: "Sesuai slide 'React Native + Expo Go', Expo Go adalah platform untuk menjalankan dan menguji aplikasi selama praktikum, mempratinjau di perangkat nyata lewat scan QR code, serta memungkinkan iterasi cepat tanpa build APK lama.",
    sumber: "slide"
  },
  {
    id: "w2_02",
    week: 2,
    topik: "Komponen Inti React Native",
    tingkat: "mudah",
    tipe: "konsep",
    pertanyaan: "Komponen dasar React Native manakah yang berfungsi sebagai kontainer utama penata tata letak (setara dengan elemen `<div>` pada web)?",
    options: [
      "<Text>",
      "<Image>",
      "<View>",
      "<Pressable>",
      "<StyleSheet>"
    ],
    correct: 2,
    pembahasan: "Komponen `<View>` adalah kontainer dasar penampung elemen visual dan penata layout berbasis Flexbox di React Native, setara dengan tag `<div>` di HTML web.",
    sumber: "slide"
  },
  {
    id: "w2_03",
    week: 2,
    topik: "Sintaksis Komponen",
    tingkat: "sedang",
    tipe: "tebak_output",
    pertanyaan: "Perhatikan potongan kode JSX React Native berikut:\n```jsx\n<View style={{ padding: 16 }}>\n  Selamat Datang di PresidentKu\n</View>\n```\nApa yang akan terjadi ketika kode tersebut dijalankan pada simulator atau Expo Go?",
    options: [
      "Teks akan tampil normal di tengah layar dengan latar abu-abu",
      "Aplikasi akan mengalami error/crash karena teks telanjang diletakkan di dalam `<View>` tanpa dibungkus komponen `<Text>`",
      "Teks otomatis dikonversi menjadi tombol yang dapat diklik",
      "Teks hanya akan muncul pada sistem operasi iOS",
      "Teks otomatis disembunyikan sampai pengguna mengaktifkan TalkBack"
    ],
    correct: 1,
    pembahasan: "Di React Native, aturan sintaksis mewajibkan setiap string teks untuk dibungkus di dalam komponen `<Text>`. Meletakkan string telanjang di dalam `<View>` akan memicu error kompilasi/runtime 'Text strings must be rendered within a <Text> component'.",
    sumber: "slide"
  },
  {
    id: "w2_04",
    week: 2,
    topik: "Komponen Interaktif",
    tingkat: "mudah",
    tipe: "konsep",
    pertanyaan: "Komponen modern yang diajarkan pada slide pertemuan 2 untuk menangani interaksi ketukan tombol pengguna dengan deteksi status sentuhan presisi adalah...",
    options: [
      "<Clickable>",
      "<ButtonNative>",
      "<Pressable>",
      "<TouchArea>",
      "<GestureDetector>"
    ],
    correct: 2,
    pembahasan: "Slide komponen dasar mencantumkan `<Pressable>` sebagai komponen modern inti untuk menangani interaksi sentuhan pengguna di React Native.",
    sumber: "slide"
  },
  {
    id: "w2_05",
    week: 2,
    topik: "Flexbox Layout",
    tingkat: "sedang",
    tipe: "konsep",
    pertanyaan: "Apakah perbedaan mendasar antara pengaturan Flexbox pada CSS Web biasa dengan Flexbox pada React Native?",
    options: [
      "Di React Native tidak ada properti justifyContent",
      "Di React Native nilai default `flexDirection` adalah `column` (vertikal), sedangkan di CSS Web adalah `row` (horizontal)",
      "Di React Native satuan ukuran wajib menggunakan persen (%)",
      "Flexbox di React Native hanya bekerja di sistem operasi iOS",
      "React Native tidak mendukung perataan elemen ke tengah (center)"
    ],
    correct: 1,
    pembahasan: "Secara default, kontainer Flexbox pada React Native menyusun anak-anaknya secara vertikal ke bawah (`flexDirection: 'column'`), berbeda dengan browser web yang default-nya mendatar ke samping (`flexDirection: 'row'`).",
    sumber: "slide"
  },
  {
    id: "w2_06",
    week: 2,
    topik: "Struktur Halaman Mobile",
    tingkat: "sedang",
    tipe: "konsep",
    pertanyaan: "Berdasarkan Task 01 'Build The Mobile UI', sebuah halaman utama aplikasi mobile minimal harus memiliki 6 elemen struktural, yaitu...",
    options: [
      "Header, Judul, Informasi utama, Image/visual, Button/action, dan Content section",
      "Logo, Animasi video, Form registrasi, Chatbot, Keranjang belanja, dan Footer copyright",
      "Splash screen, Peta lokasi, Akselerometer, Kamera, GPS, dan Setting",
      "API client, DTO, Database SQLite, Token JWT, Push notification, dan Biometrik",
      "Navbar atas, Sidebar kiri, Konten tengah, Sidebar kanan, dan Footer bawah"
    ],
    correct: 0,
    pembahasan: "Slide Task 01 menyebutkan minimal 6 elemen: 1. Header, 2. Judul, 3. Informasi utama, 4. Image/visual, 5. Button/action, dan 6. Content section (disertai bottom navigation).",
    sumber: "slide"
  },
  {
    id: "w2_07",
    week: 2,
    topik: "Responsive UI",
    tingkat: "sedang",
    tipe: "konsep",
    pertanyaan: "Dalam Task 02 'Make The UI Responsive', variasi kategori layar perangkat apa sajakah yang wajib diuji untuk memastikan tata letak PresidentKu adaptif?",
    options: [
      "Smartwatch, Smart TV, dan Proyektor bioskop",
      "Layar Kecil (~4 inci), Layar Normal (~6 inci), dan Layar Lebar (~8 inci / Tablet)",
      "Layar resolusi 4K, 8K, dan 16K Ultra HD",
      "Hanya smartphone iPhone generasi terbaru",
      "Layar monokrom kalkulator dan e-ink reader"
    ],
    correct: 1,
    pembahasan: "Slide Task 02 secara eksplisit merinci 3 kategori ukuran perangkat: Layar Kecil (Small Screen &asymp; 4 inch), Layar Normal (Normal Screen &asymp; 6 inch), dan Layar Lebar (Large Screen &asymp; 8 inch / Tablet), serta orientasi portrait dan landscape.",
    sumber: "slide"
  },
  {
    id: "w2_08",
    week: 2,
    topik: "Checklist Responsivitas",
    tingkat: "sedang",
    tipe: "pilih_solusi",
    pertanyaan: "Ketika menguji aplikasi PresidentKu pada smartphone berlayar 4 inci, teks tombol Call to Action terpotong separuh dan kartu program meluber ke kanan keluar layar. Checklist responsivitas manakah yang dilanggar?",
    options: [
      "Tombol tidak boleh memiliki border radius",
      "Tidak ada komponen yang keluar layar dan teks tidak boleh terpotong",
      "Aplikasi harus selalu dijalankan dalam mode landscape",
      "Semua ukuran teks wajib bernilai statis 24px",
      "Ukuran kartu harus menggunakan satuan cm"
    ],
    correct: 1,
    pembahasan: "Checklist Task 02 menegaskan: 'Tidak ada komponen keluar layar', 'Text tidak terpotong', 'Button tetap dapat digunakan', dan 'Spacing tetap nyaman'.",
    sumber: "slide"
  },
  {
    id: "w2_09",
    week: 2,
    topik: "Aksesibilitas Mobile",
    tingkat: "mudah",
    tipe: "konsep",
    pertanyaan: "Berapakah ukuran target sentuh fisik minimum (minimum touch target) yang direkomendasikan agar tombol nyaman disentuh oleh jari pengguna?",
    options: [
      "10 x 10 dp",
      "24 x 24 dp",
      "44 x 44 dp",
      "80 x 80 dp",
      "120 x 120 dp"
    ],
    correct: 2,
    pembahasan: "Standar industri mobile dan slide 'Inclusive Design & Accessibility' menetapkan 'Minimum Touch Target: Ukuran elemen yang nyaman untuk disentuh (minimal 44 x 44 dp)'.",
    sumber: "slide"
  },
  {
    id: "w2_10",
    week: 2,
    topik: "Aksesibilitas Mobile",
    tingkat: "sedang",
    tipe: "analisis_kasus",
    pertanyaan: "Sebuah tombol aksi penting di aplikasi PresidentKu hanya menggunakan ikon panah tanpa teks penjelas. Agar pengguna tunanetra yang memakai Screen Reader dapat memahami tujuan tombol tersebut, atribut React Native apa yang WAJIB ditambahkan?",
    options: [
      "id=\"tombol-panah\"",
      "accessibilityLabel=\"Lihat Program Prioritas\"",
      "titleTooltip=\"Klik Disini\"",
      "altText=\"Panah\"",
      "screenReaderValue=\"1\""
    ],
    correct: 1,
    pembahasan: "Properti `accessibilityLabel` memberikan label teks deskriptif yang akan dibacakan oleh pembaca layar (TalkBack/VoiceOver) saat elemen tersebut difokuskan pengguna disabilitas netra.",
    sumber: "slide"
  },
  {
    id: "w2_11",
    week: 2,
    topik: "Aksesibilitas Mobile",
    tingkat: "sedang",
    tipe: "konsep",
    pertanyaan: "Perhatikan cuplikan properti aksesibilitas berikut pada sebuah tombol di React Native:\n```jsx\naccessible={true}\naccessibilityRole=\"button\"\naccessibilityHint=\"Membuka halaman program prioritas\"\n```\nApa peran spesifik dari properti `accessibilityRole=\"button\"`?",
    options: [
      "Mengubah warna tombol menjadi abu-abu secara otomatis",
      "Memberitahu teknologi screen reader bahwa elemen ini berperilaku sebagai tombol interaktif yang dapat diketuk",
      "Mengunci tombol agar tidak dapat ditekan pengguna biasa",
      "Menyimpan data tombol ke basis data lokal",
      "Membuat ukuran tombol menjadi tepat 44 dp"
    ],
    correct: 1,
    pembahasan: "Properti `accessibilityRole` menjelaskan peran komponen (misal 'button', 'header', 'link') kepada screen reader sehingga pengguna memahami karakteristik interaksi elemen tersebut.",
    sumber: "slide"
  },
  {
    id: "w2_12",
    week: 2,
    topik: "Inclusive Design",
    tingkat: "mudah",
    tipe: "konsep",
    pertanyaan: "Salah satu prinsip inklusivitas adalah 'Informasi tidak hanya disampaikan melalui warna'. Manakah contoh penerapan yang BENAR dari prinsip ini pada status permohonan warga?",
    options: [
      "Hanya menampilkan titik merah jika ditolak dan titik hijau jika disetujui",
      "Menggunakan titik warna hijau atau merah, namun disertai teks jelas bertuliskan 'Disetujui' atau 'Ditolak' beserta ikon representatif",
      "Mengubah seluruh latar belakang layar menjadi merah pekat",
      "Menghapus semua warna dan membuat aplikasi menjadi hitam putih saja",
      "Menyembunyikan informasi status jika permohonan ditolak"
    ],
    correct: 1,
    pembahasan: "Pengguna dengan buta warna tidak dapat membedakan merah dan hijau. Karena itu, informasi status wajib disertai teks penjelas eksplisit dan/atau ikon bentuk, tidak boleh hanya bergantung pada warna visual semata.",
    sumber: "slide"
  },
  {
    id: "w2_13",
    week: 2,
    topik: "Contrast Ratio",
    tingkat: "mudah",
    tipe: "konsep",
    pertanyaan: "Dalam aspek aksesibilitas 'Contrast Ratio', praktik manakah yang dianggap BURUK dan harus dihindari?",
    options: [
      "Menggunakan teks berwarna hitam pekat di atas latar belakang putih bersih",
      "Menggunakan teks berwarna abu-abu sangat muda di atas latar belakang putih terang",
      "Menggunakan teks putih tebal di atas tombol biru tua",
      "Memastikan rasio kontras warna minimal 4.5:1 untuk teks normal",
      "Menggunakan kombinasi warna kuning gelap dengan teks hitam tebal"
    ],
    correct: 1,
    pembahasan: "Teks abu-abu muda di atas latar putih memiliki rasio kontras sangat rendah, membuat tulisan nyaris tidak terbaca oleh lansia atau pengguna di bawah terik matahari.",
    sumber: "slide"
  },
  {
    id: "w2_14",
    week: 2,
    topik: "Struktur Prompt AI",
    tingkat: "sedang",
    tipe: "konsep",
    pertanyaan: "Pada slide 'Cara Menulis Prompt yang Baik', lima komponen pembentuk struktur prompt yang sistematis dan efektif terdiri dari...",
    options: [
      "Peran (Role), Tujuan (Goal), Konteks (Context), Spesifikasi (Requirements), dan Output (Format)",
      "Header, Body, Footer, Script, dan Database",
      "Model, Token, Temperature, TopP, dan StopSequence",
      "Input, Algoritma, Percabangan, Perulangan, dan Output",
      "Masalah, Hipotesis, Eksperimen, Hasil, dan Kesimpulan"
    ],
    correct: 0,
    pembahasan: "Struktur 5 poin pada slide: 1. Peran (Role), 2. Tujuan (Goal), 3. Konteks (Context), 4. Spesifikasi (Requirements), dan 5. Output (Format).",
    sumber: "slide"
  },
  {
    id: "w2_15",
    week: 2,
    topik: "Evaluasi Prompt AI",
    tingkat: "sedang",
    tipe: "analisis_kasus",
    pertanyaan: "Bandingkan dua contoh prompt berikut:\nPrompt X: 'Buat aplikasi mobile tentang presiden.'\nPrompt Y: 'Kamu adalah expert React Native. Buat halaman home untuk aplikasi PresidentKu menggunakan React Native dan Expo. Halaman ini menampilkan gambar presiden, judul, deskripsi singkat, dan 3 menu: Biografi, Program, Berita. Gunakan layout responsif dan StyleSheet. Berikan kode lengkap dalam satu file App.js.'\nBerdasarkan materi pertemuan 2, mengapa Prompt Y jauh lebih unggul?",
    options: [
      "Karena Prompt Y ditulis dalam bahasa Inggris campuran",
      "Karena Prompt Y memenuhi formula lengkap: memiliki Role, Goal, Context, Requirements spesifik, dan format Output yang jelas sehingga hasilnya minim revisi",
      "Karena Prompt Y lebih pendek dan tidak membebani server AI",
      "Karena Prompt Y menjamin aplikasi otomatis bebas dari semua bug",
      "Karena Prompt Y tidak memerlukan instalasi Expo Go"
    ],
    correct: 1,
    pembahasan: "Slide membandingkan kedua contoh ini secara langsung: Prompt X terlalu umum dan menghasilkan kode yang perlu banyak revisi, sedangkan Prompt Y memiliki kejelasan peran, tujuan, spesifikasi teknis, dan batasan output yang rapi.",
    sumber: "slide"
  },
  {
    id: "w2_16",
    week: 2,
    topik: "Tahapan Demo Sprint",
    tingkat: "sedang",
    tipe: "konsep",
    pertanyaan: "Empat tahapan terstruktur yang harus dijalankan mahasiswa saat sesi 'Demo — Show Your Mobile Interface' pada akhir sprint adalah...",
    options: [
      "Download, Unzip, Rename, dan Delete",
      "RUN (jalankan Expo Go) -> SHOW (tampilkan interface) -> TEST (uji ragam perangkat) -> EXPLAIN (jelaskan keputusan desain)",
      "Commit, Push, Merge, dan Release",
      "Compile, Debug, Profiling, dan Benchmark",
      "Presentasi Canva, Baca Laporan, Pembagian Tugas, dan Doa"
    ],
    correct: 1,
    pembahasan: "Slide Demo merinci 4 tahap alur: 1. RUN (jalankan melalui Expo Go), 2. SHOW (tampilkan interface PresidentKu), 3. TEST (uji pada perangkat berbeda), 4. EXPLAIN (jelaskan keputusan desain Anda).",
    sumber: "slide"
  },
  {
    id: "w2_17",
    week: 2,
    topik: "Pertanyaan Demo",
    tingkat: "sedang",
    tipe: "konsep",
    pertanyaan: "Saat sesi demo Sprint 01, dosen bertanya: 'Mengapa Anda memilih tombol berukuran tinggi 48dp dan memberikan properti accessibilityLabel pada ikon berita?'. Pertanyaan ini menguji penguasaan mahasiswa terhadap fokus demo...",
    options: [
      "Menghafal seluruh baris pustaka React Native",
      "Menjelaskan alasan desain, kenyamanan sentuh, dan penerapan aksesibilitas inklusif",
      "Menunjukkan kecepatan mengetik kode di depan kelas",
      "Membuktikan bahwa aplikasi dibuat tanpa asisten AI",
      "Mengukur berapa banyak kuota internet yang dihabiskan tim"
    ],
    correct: 1,
    pembahasan: "Fokus demo bukan sekadar memamerkan kode, melainkan 'Jelaskan alasan desain dan keputusan yang diambil', khususnya mengenai aksesibilitas dan adaptabilitas antarmuka.",
    sumber: "slide"
  },
  {
    id: "w2_18",
    week: 2,
    topik: "StyleSheet React Native",
    tingkat: "mudah",
    tipe: "konsep",
    pertanyaan: "Apa keuntungan teknis menggunakan `StyleSheet.create({ ... })` dibandingkan menulis objek JavaScript inline secara langsung pada atribut `style={{ ... }}`?",
    options: [
      "StyleSheet otomatis mengubah warna menjadi pelangi",
      "StyleSheet memvalidasi nama properti gaya saat runtime dan mengoptimalkan performa dengan merujuk ID style terindeks daripada membuat objek baru di setiap re-render",
      "StyleSheet wajib digunakan agar aplikasi bisa di-build ke bahasa C#",
      "StyleSheet menghapus kebutuhan akan komponen View",
      "Tidak ada perbedaan keuntungan teknis sama sekali"
    ],
    correct: 1,
    pembahasan: "`StyleSheet.create` memberikan validasi tipe properti yang ketat dan memastikan referensi gaya di-cache dengan ID tetap, mencegah pembentukan objek style baru di memori pada setiap siklus rendering.",
    sumber: "slide"
  },
  {
    id: "w2_19",
    week: 2,
    topik: "Orientation Testing",
    tingkat: "sedang",
    tipe: "pilih_solusi",
    pertanyaan: "Ketika smartphone diputar dari posisi Portrait ke Landscape, bagian bawah halaman beranda terpotong dan tombol aksi menghilang dari pandangan karena layar menjadi pendek secara vertikal. Solusi arsitektur layout apa yang paling tepat diterapkan?",
    options: [
      "Mengunci aplikasi agar hanya bisa dibuka pada mode portrait saja di file manifest",
      "Membungkus kontainer konten dengan komponen `<ScrollView>` agar pengguna dapat menggulir halaman ke bawah",
      "Memperkecil ukuran font menjadi 4px agar semua teks muat",
      "Menghapus tombol aksi tersebut dari halaman",
      "Mengganti framework React Native menjadi HTML murni"
    ],
    correct: 1,
    pembahasan: "Komponen `<ScrollView>` memungkinkan konten yang melebihi dimensi tinggi layar fisik (seperti pada orientasi horizontal/landscape) tetap dapat digulir dan diakses dengan nyaman.",
    sumber: "slide"
  },
  {
    id: "w2_20",
    week: 2,
    topik: "Checklist Sprint 01",
    tingkat: "mudah",
    tipe: "konsep",
    pertanyaan: "Item penutup yang wajib dicentang pada 'Sprint 01 Completion Checklist' sebelum tim melangkah ke Sprint 02 (Authentication & Local Data Security) adalah...",
    options: [
      "Membayar biaya hosting server backend",
      "Melakukan Commit, Push ke repositori Git, dan menyatakan kesiapan (Ready for next sprint)",
      "Menghapus seluruh file Expo Go dari smartphone",
      "Membuat 100 akun media sosial untuk promosi aplikasi",
      "Menginstal simulator iOS di laptop berbasis Linux"
    ],
    correct: 1,
    pembahasan: "Checklist Sprint 01 ditutup dengan butir: 'Commit', 'Push', dan 'Ready for next sprint' menuju penambahan fitur keamanan dan autentikasi.",
    sumber: "slide"
  }
];
