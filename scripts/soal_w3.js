// scripts/soal_w3.js - 20 Soal Terverifikasi Week 3 (Authentication + Local Data Security)
module.exports = [
  {
    id: "w3_01",
    week: 3,
    topik: "Konsep Autentikasi",
    tingkat: "mudah",
    tipe: "konsep",
    pertanyaan: "Apakah esensi utama dari proses 'Authentication' (Autentikasi) dalam pengembangan aplikasi mobile menurut materi perkuliahan?",
    options: [
      "Mengatur ukuran tata letak tombol agar simetris",
      "Memastikan dan memverifikasi identitas pengguna ('Who are you?') sebelum diizinkan mengakses fitur aplikasi",
      "Mengubah bahasa antarmuka aplikasi dari bahasa Inggris ke Indonesia",
      "Menghitung percepatan gerak smartphone menggunakan sensor akselerometer",
      "Mempercepat proses rendering animasi pada layar sentuh"
    ],
    correct: 1,
    pembahasan: "Slide pertemuan 3 mendefinisikan autentikasi sebagai 'Who are you? Memastikan identitas pengguna sebelum mengakses aplikasi', meliputi pendaftaran, kredensial, dan verifikasi.",
    sumber: "slide"
  },
  {
    id: "w3_02",
    week: 3,
    topik: "Alur Autentikasi",
    tingkat: "sedang",
    tipe: "konsep",
    pertanyaan: "Urutan tahapan alur autentikasi yang benar pada slide 'Alur Authentication' adalah...",
    options: [
      "App -> Validation -> Credential -> Authenticated -> User",
      "User -> Credential -> Validation -> Authenticated -> App",
      "Login -> App -> Credential -> Password -> Register",
      "Validation -> User -> Credential -> App -> Authenticated",
      "Database -> User -> Validation -> Login -> App"
    ],
    correct: 1,
    pembahasan: "Alur autentikasi pada slide: 1. USER (buka aplikasi) -> 2. CREDENTIAL (masukkan email/password) -> 3. VALIDATION (periksa keabsahan/kelengkapan) -> 4. AUTHENTICATED (terverifikasi) -> 5. APP (akses fitur aplikasi).",
    sumber: "slide"
  },
  {
    id: "w3_03",
    week: 3,
    topik: "Validasi Form",
    tingkat: "sedang",
    tipe: "konsep",
    pertanyaan: "Pada fungsi `handleLogin`, mengapa proses VALIDASI INPUT wajib dijalankan SEBELUM proses pengecekan kredensial (autentikasi)?",
    options: [
      "Karena aturan JavaScript melarang penggunaan percabangan if di dalam fungsi async",
      "Memastikan input tidak kosong dan sesuai format, mencegah error/crash, menghemat beban server, serta memberi umpan balik langsung ke pengguna",
      "Agar password otomatis diubah menjadi bintang atau titik hitam",
      "Untuk memperlambat proses login agar pengguna tidak buru-buru",
      "Hanya sebagai formalitas agar kode terlihat lebih panjang"
    ],
    correct: 1,
    pembahasan: "Slide secara gamblang mencatat pertanyaan 'Kenapa ada validation sebelum authentication?': Validation memastikan input tidak kosong dan sesuai format sebelum pengecekan kredensial dilakukan. Ini mencegah error, menghemat lalu lintas jaringan, dan memberikan feedback instan.",
    sumber: "slide"
  },
  {
    id: "w3_04",
    week: 3,
    topik: "Keamanan Password",
    tingkat: "mudah",
    tipe: "konsep",
    pertanyaan: "Properti komponen `<TextInput>` di React Native yang berfungsi menyembunyikan karakter kata sandi (mengubahnya menjadi titik/bintang) demi keamanan pengguna adalah...",
    options: [
      "hideContent={true}",
      "secureTextEntry={true}",
      "passwordHidden=\"yes\"",
      "obscureText={true}",
      "maskInput=\"true\""
    ],
    correct: 1,
    pembahasan: "Properti bawaan React Native untuk menyembunyikan input kata sandi adalah `secureTextEntry={true}`.",
    sumber: "slide"
  },
  {
    id: "w3_05",
    week: 3,
    topik: "Pesan Kesalahan Aman",
    tingkat: "sedang",
    tipe: "pilih_solusi",
    pertanyaan: "Ketika seorang pengguna memasukkan email 'budi@mail.com' dengan password yang salah, pesan error manakah yang PALING AMAN dan direkomendasikan untuk ditampilkan antarmuka PresidentKu?",
    options: [
      "Password salah! Silakan coba lagi untuk akun budi@mail.com",
      "Email ini terdaftar, namun password yang Anda ketik kurang tepat",
      "Email atau password tidak valid",
      "Format hash password pada database server tidak cocok dengan input Anda",
      "Akun ditemukan, sisa percobaan login Anda tinggal 2 kali"
    ],
    correct: 2,
    pembahasan: "Pesan error tidak boleh membocorkan informasi spesifik tentang keberadaan akun (User Enumeration). Menggunakan pesan umum yang netral seperti 'Email atau password tidak valid' mencegah penyerang memvalidasi daftar email korban.",
    sumber: "slide"
  },
  {
    id: "w3_06",
    week: 3,
    topik: "Pendalaman Keamanan",
    tingkat: "sedang",
    tipe: "konsep",
    pertanyaan: "Pada praktikum Sprint 02, pengecekan kredensial dilakukan dengan mencocokkan variabel lokal JavaScript (misal: `if (email === user.email && password === user.password)`). Mengapa metode ini hanya boleh digunakan untuk latihan kelas dan DILARANG untuk aplikasi produksi nyata?",
    options: [
      "Karena aplikasi produksi tidak boleh menggunakan bahasa JavaScript",
      "Karena di aplikasi nyata, basis data akun pengguna tidak boleh disimpan di kode client HP; verifikasi kredensial wajib dilakukan di server backend yang aman",
      "Karena Expo Go tidak dapat membaca variabel if-else",
      "Karena perbandingan string di JavaScript memakan daya baterai 90%",
      "Karena akun pengguna hanya boleh disimpan di buku catatan fisik"
    ],
    correct: 1,
    pembahasan: "Pada kotak Pendalaman materi, ditekankan bahwa pengecekan kredensial di sisi client hanya simulasi pembelajaran. Pada aplikasi rilis nyata, kredensial wajib dikirim melalui REST API terenkripsi HTTPS untuk diverifikasi di server aman.",
    sumber: "slide"
  },
  {
    id: "w3_07",
    week: 3,
    topik: "Klasifikasi Data",
    tingkat: "mudah",
    tipe: "konsep",
    pertanyaan: "Manakah kelompok data berikut yang tergolong sebagai 'Normal Data' (Data Biasa) dan aman disimpan di media penyimpanan lokal biasa (Local Storage / AsyncStorage)?",
    options: [
      "Authentication token, Secret PIN, dan Password akun",
      "Pilihan tema (terang/gelap), preferensi bahasa, dan pengaturan ukuran teks UI",
      "Nomor KTP, Foto dokumen rahasia, dan Token sesi perbankan",
      "Kunci privat enkripsi AES dan Sertifikat digital server",
      "Nomor kartu kredit dan CVV pengguna"
    ],
    correct: 1,
    pembahasan: "Slide 'Where Should Sensitive Data Go?' membagi: Normal Data (Theme preference, Language, UI settings -> Local Storage biasa) vs Sensitive Data (Authentication token, Session information, Secret credential/PIN -> Secure Storage).",
    sumber: "slide"
  },
  {
    id: "w3_08",
    week: 3,
    topik: "Klasifikasi Data",
    tingkat: "mudah",
    tipe: "konsep",
    pertanyaan: "Data manakah yang tergolong 'Sensitive Data' (Data Sensitif) dan WAJIB disimpan di Secure Storage berenkripsi?",
    options: [
      "Riwayat pencarian berita publik",
      "Pilihan bahasa aplikasi (Indonesia / English)",
      "Authentication token, informasi session, dan secret credential/PIN",
      "Warna tombol tema aplikasi",
      "Nama negara dan lambang bendera"
    ],
    correct: 2,
    pembahasan: "Data sensitif mencakup informasi pembuktian hak akses akun: token autentikasi (JWT), status sesi aktif, serta PIN/kredensial rahasia pengguna.",
    sumber: "slide"
  },
  {
    id: "w3_09",
    week: 3,
    topik: "Expo SecureStore",
    tingkat: "sedang",
    tipe: "konsep",
    pertanyaan: "Apa keunggulan utama dari penggunaan pustaka `expo-secure-store` dibandingkan penyimpanan biasa seperti `AsyncStorage`?",
    options: [
      "SecureStore mampu menyimpan video berukuran hingga 4 GB",
      "Data disimpan secara terenkripsi menggunakan modul keamanan perangkat keras sistem operasi (Android Keystore / iOS Keychain)",
      "SecureStore tidak memerlukan instalasi library",
      "SecureStore dapat diakses secara sinkron tanpa keyword async/await",
      "Data di SecureStore otomatis tersinkronisasi ke akun Google Drive pengguna"
    ],
    correct: 1,
    pembahasan: "Slide 'Code Example — Secure Storage' mencantumkan keuntungan SecureStore: data disimpan secara terenkripsi, jauh lebih aman dibanding storage biasa, cocok untuk token/session, dan terintegrasi hardware Keystore/Keychain.",
    sumber: "slide"
  },
  {
    id: "w3_10",
    week: 3,
    topik: "Sintaksis SecureStore",
    tingkat: "sedang",
    tipe: "tebak_output",
    pertanyaan: "Potongan kode berikut dijalankan tepat setelah pengguna berhasil login:\n```javascript\nawait SecureStore.setItemAsync('auth_token', token);\n```\nOperasi apakah yang sedang berlangsung?",
    options: [
      "Membaca data token dari server backend",
      "Menyimpan nilai variabel `token` ke dalam Secure Storage terenkripsi dengan kunci identifikasi 'auth_token'",
      "Menghapus token autentikasi dari memori smartphone",
      "Mengirimkan token ke seluruh kontak WhatsApp pengguna",
      "Mengubah token menjadi format gambar PNG"
    ],
    correct: 1,
    pembahasan: "`setItemAsync(key, value)` adalah fungsi Expo SecureStore untuk menyimpan data secara asinkron ke media penyimpanan terenkripsi.",
    sumber: "slide"
  },
  {
    id: "w3_11",
    week: 3,
    topik: "Sintaksis SecureStore",
    tingkat: "sedang",
    tipe: "tebak_output",
    pertanyaan: "Ketika aplikasi PresidentKu dibuka kembali oleh warga pada keesokan harinya, kode manakah yang dijalankan untuk memeriksa apakah pengguna masih memiliki sesi login aktif?",
    options: [
      "const token = SecureStore.clear();",
      "const token = await SecureStore.getItemAsync('auth_token');",
      "const token = SecureStore.write('auth_token');",
      "const token = localStorage.getItem('password');",
      "const token = await SecureStore.deleteItemAsync('auth_token');"
    ],
    correct: 1,
    pembahasan: "`getItemAsync('auth_token')` digunakan untuk membaca nilai string token terenkripsi yang tersimpan di SecureStore saat inisialisasi aplikasi.",
    sumber: "slide"
  },
  {
    id: "w3_12",
    week: 3,
    topik: "Alur Logout",
    tingkat: "sedang",
    tipe: "pilih_solusi",
    pertanyaan: "Dalam siklus logout yang aman, apa yang harus dilakukan aplikasi terhadap data sesi di perangkat?",
    options: [
      "Menutup aplikasi tanpa menghapus apapun",
      "Memanggil `await SecureStore.deleteItemAsync('auth_token')` dan mengubah authentication state menjadi unauthenticated (false)",
      "Mengganti nilai token menjadi tulisan 'LOGOUT'",
      "Menghapus seluruh file instalasi Expo Go",
      "Mematikan daya smartphone pengguna secara paksa"
    ],
    correct: 1,
    pembahasan: "Sesuai checklist Sprint 02 dan Task 03, proses logout yang aman wajib membersihkan session dengan memanggil `deleteItemAsync` untuk menghapus token sensitif dan mengembalikan state ke kondisi belum login.",
    sumber: "slide"
  },
  {
    id: "w3_13",
    week: 3,
    topik: "Prinsip Validasi Keamanan",
    tingkat: "mudah",
    tipe: "konsep",
    pertanyaan: "Prinsip utama yang diusung pada slide 'Security Validation' pertemuan 3 adalah...",
    options: [
      "Code First, Think Later",
      "Test, Don't Assume",
      "Assume Safe, Skip Test",
      "Never Deploy on Friday",
      "Copy from StackOverflow"
    ],
    correct: 1,
    pembahasan: "Judul besar slide evaluasi keamanan pertemuan 3 adalah: 'SECURITY VALIDATION — TEST, DON'T ASSUME'. Keamanan tidak selesai setelah implementasi, tetapi harus diuji.",
    sumber: "slide"
  },
  {
    id: "w3_14",
    week: 3,
    topik: "Siklus Validasi Keamanan",
    tingkat: "sedang",
    tipe: "konsep",
    pertanyaan: "Urutan tahapan proses validasi keamanan yang terstruktur pada slide adalah...",
    options: [
      "Test -> Deploy -> Forget -> Fix",
      "Implement -> Test -> Find -> Fix -> Retest",
      "Find -> Fix -> Implement -> Test -> Release",
      "Build -> Ship -> Crash -> Cry",
      "Ask AI -> Paste -> Commit -> Push"
    ],
    correct: 1,
    pembahasan: "Siklus 5 langkah pada slide: 1. IMPLEMENT (fitur keamanan) -> 2. TEST (uji dengan berbagai skenario) -> 3. FIND (temukan celah masalah) -> 4. FIX (perbaiki) -> 5. RETEST (uji kembali hingga aman).",
    sumber: "slide"
  },
  {
    id: "w3_15",
    week: 3,
    topik: "Matriks Uji Keamanan",
    tingkat: "sedang",
    tipe: "konsep",
    pertanyaan: "Pada Security Test Matrix, hasil yang diharapkan (expected result) ketika skenario 'Input Kosong' (tombol masuk ditekan tanpa mengisi form) dijalankan adalah...",
    options: [
      "LOGIN_SUCCESS",
      "SESSION_CLEARED",
      "VALIDATION_ERROR (tampilkan pesan validasi, jangan lakukan autentikasi)",
      "PROTECTED",
      "LOGIN_TIMEOUT"
    ],
    correct: 2,
    pembahasan: "Sesuai matriks uji pengujian No. 3: Skenario 'Input kosong' memiliki expected result 'Validation error (tampilkan pesan validasi)'.",
    sumber: "slide"
  },
  {
    id: "w3_16",
    week: 3,
    topik: "Matriks Uji Keamanan",
    tingkat: "sedang",
    tipe: "konsep",
    pertanyaan: "Skenario pengujian No. 5 pada Security Test Matrix berfokus pada pengujian 'Sensitive Data'. Hasil yang diharapkan pada skenario ini adalah...",
    options: [
      "Data password dicetak tebal di log konsol",
      "Data sensitif (token/session) berstatus 'Protected', tersimpan terenkripsi di secure storage dan tidak bocor di local storage biasa",
      "Aplikasi meminta izin GPS dan kamera",
      "Data pengguna dikirim ke grup publik Telegram",
      "Data dienkripsi menggunakan sandi Morse sederhana"
    ],
    correct: 1,
    pembahasan: "Skenario No. 5 'Sensitive data' memiliki hasil yang diharapkan 'Protected (data terenkripsi/tersimpan aman pada secure storage)'.",
    sumber: "slide"
  },
  {
    id: "w3_17",
    week: 3,
    topik: "Autentikasi Biometrik",
    tingkat: "sedang",
    tipe: "konsep",
    pertanyaan: "Pada antarmuka halaman login PresidentKu, terdapat opsi 'Biometric Authentication' (Sidik Jari / Face ID). Bagaimana konsep integrasi biometrik yang aman dalam aplikasi mobile?",
    options: [
      "Foto wajah dan sidik jari mentah diunggah ke database server pusat",
      "Aplikasi memanfaatkan API lokal sistem operasi untuk memverifikasi sidik jari di perangkat; jika sukses, aplikasi membuka token sesi yang tersimpan di SecureStore",
      "Aplikasi mencetak sidik jari pengguna pada kertas dokumen",
      "Biometrik menggantikan kebutuhan akan internet selamanya",
      "Biometrik hanya bisa digunakan jika baterai smartphone di atas 95%"
    ],
    correct: 1,
    pembahasan: "Sensor biometrik diproses sepenuhnya di tingkat hardware lokal smartphone (Secure Enclave). Hasil verifikasi sukses digunakan untuk membuka kunci brankas SecureStore lokal.",
    sumber: "slide"
  },
  {
    id: "w3_18",
    week: 3,
    topik: "Aksesibilitas Form Login",
    tingkat: "sedang",
    tipe: "analisis_kasus",
    pertanyaan: "Dalam Task 03 'Validate The Security', mahasiswa diingatkan bahwa penambahan fitur keamanan tidak boleh mengorbankan aksesibilitas yang telah dibangun pada Pekan 2. Contoh penerapan integrasi yang tepat adalah...",
    options: [
      "Menghapus properti accessibilityLabel pada kolom password agar peretas bingung",
      "Tetap memberikan accessibilityLabel yang jelas pada input email, input password, serta tombol toggle intip password (mata)",
      "Membuat ukuran form login menjadi 10 x 10 dp",
      "Membuat teks error hanya muncul dalam suara tanpa teks di layar",
      "Mengunci fokus kursor hanya pada tombol login"
    ],
    correct: 1,
    pembahasan: "Slide mengingatkan: 'Accessibility testing: Keamanan diterapkan tanpa mengurangi aksesibilitas (label jelas pada input, dapat digunakan dengan screen reader, kontras & ukuran teks tetap sesuai)'.",
    sumber: "slide"
  },
  {
    id: "w3_19",
    week: 3,
    topik: "Pertanyaan Demo Sprint 02",
    tingkat: "sedang",
    tipe: "konsep",
    pertanyaan: "Pada sesi demo Sprint 02, salah satu pertanyaan kunci dosen adalah: 'Apa yang terjadi pada data session pengguna ketika tombol Logout ditekan?'. Jawaban teknis yang paling tepat adalah...",
    options: [
      "Data session dipindahkan ke folder downloads",
      "Token autentikasi dan data session dihapus secara permanen dari SecureStore, dan state aplikasi di-reset ke unauthenticated sehingga pengguna tidak bisa mengakses kembali halaman rahasia tanpa login ulang",
      "Aplikasi mengirim pesan WhatsApp ke dosen pembimbing",
      "Data sesi disimpan selamanya di memori cache ponsel",
      "Tidak terjadi apa-apa karena logout hanya sekadar berpindah halaman"
    ],
    correct: 1,
    pembahasan: "Pertanyaan demo No. 5 'Apa yang terjadi ketika pengguna logout?' menuntut pembuktian bahwa token session benar-benar dihapus dari media penyimpanan aman (session cleared).",
    sumber: "slide"
  },
  {
    id: "w3_20",
    week: 3,
    topik: "Checklist Sprint 02",
    tingkat: "mudah",
    tipe: "konsep",
    pertanyaan: "Manakah butir checklist berikut yang BUKAN merupakan target keberhasilan Sprint 02 pada aplikasi PresidentKu?",
    options: [
      "Halaman Login dan Register dibuat",
      "Tidak menyimpan password sebagai plaintext",
      "Data sensitif tidak disimpan pada storage biasa",
      "Mengintegrasikan sensor akselerometer untuk mendeteksi getaran gempa bumi",
      "Kelima skenario security testing telah diuji dan lulus verifikasi"
    ],
    correct: 3,
    pembahasan: "Integrasi sensor akselerometer adalah materi Sprint 06 di Pekan 7. Target Sprint 02 murni berfokus pada autentikasi, validasi form, secure storage, dan pengujian skenario keamanan.",
    sumber: "slide"
  }
];
