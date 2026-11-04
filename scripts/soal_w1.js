// scripts/soal_w1.js - 20 Soal Terverifikasi Week 1 (Course Orientation & Project Kickoff)
module.exports = [
  {
    id: "w1_01",
    week: 1,
    topik: "Kontrak Perkuliahan",
    tingkat: "mudah",
    tipe: "konsep",
    pertanyaan: "Berdasarkan kontrak perkuliahan Pemrograman Mobile, berapa persentase batas minimal kehadiran mahasiswa untuk dapat dinyatakan lulus mata kuliah?",
    options: [
      "70% kehadiran (minimal 10 pertemuan)",
      "75% kehadiran (minimal 11 pertemuan)",
      "80% kehadiran (minimal 12 dari 16 pertemuan)",
      "85% kehadiran (minimal 13 pertemuan)",
      "90% kehadiran (minimal 14 pertemuan)"
    ],
    correct: 2,
    pembahasan: "Sesuai slide Kontrak Kuliah, batas kehadiran minimal kelulusan adalah 80% dari total 16 pertemuan, atau setara dengan minimal 12 kali kehadiran.",
    sumber: "slide"
  },
  {
    id: "w1_02",
    week: 1,
    topik: "Kontrak Perkuliahan",
    tingkat: "mudah",
    tipe: "konsep",
    pertanyaan: "Kapan batas waktu maksimal seorang mahasiswa menyampaikan konfirmasi dan bukti ketidakhadiran kepada dosen jika berhalangan hadir di kelas?",
    options: [
      "Maksimal 1 jam setelah kelas selesai",
      "Pada saat kelas sedang berlangsung",
      "Maksimal H-1 sebelum perkuliahan dimulai",
      "Pada saat perkuliahan pekan berikutnya",
      "Bebas kapan saja sebelum UTS berlangsung"
    ],
    correct: 2,
    pembahasan: "Slide Kontrak Kuliah poin 3 secara tegas menyatakan: 'Wajib memberikan informasi maksimal H-1 sebelum kelas dimulai jika tidak hadir disertai dengan bukti.'",
    sumber: "slide"
  },
  {
    id: "w1_03",
    week: 1,
    topik: "Empat Pilar Mobile",
    tingkat: "mudah",
    tipe: "konsep",
    pertanyaan: "Manakah yang merupakan empat pilar utama dalam pengembangan aplikasi mobile modern menurut materi orientasi perkuliahan?",
    options: [
      "UI/UX, Data & Network, Security & Performance, serta Device Features",
      "Frontend, Backend, Database Administrator, dan DevOps",
      "Design, Coding, Testing, dan Monetization",
      "React Native, Expo Go, Node.js, dan Firebase",
      "Android Studio, Xcode, Flutter, dan Kotlin"
    ],
    correct: 0,
    pembahasan: "Slide 'Apa Itu Pemrograman Mobile?' merinci 4 pilar utama: UI/UX (tampilan & pengalaman), Data & Network (pertukaran & pengelolaan data), Security & Performance (aplikasi aman & responsif), dan Device Features (pemanfaatan kemampuan perangkat).",
    sumber: "slide"
  },
  {
    id: "w1_04",
    week: 1,
    topik: "Capaian Pembelajaran (CPMK)",
    tingkat: "sedang",
    tipe: "konsep",
    pertanyaan: "Kompetensi utama yang dinilai pada CPMK-1 dalam mata kuliah Pemrograman Mobile berfokus pada kemampuan mahasiswa dalam hal...",
    options: [
      "Membuat animasi 3D dan game mobile berbasis virtual reality",
      "Merancang UI yang baik, mengintegrasikan keamanan, serta mengakses dan merancang REST API dan antarmuka jaringan",
      "Mengembangkan aplikasi berbasis sensor gerak, telepon, dan peta lokasi saja",
      "Melakukan monetisasi iklan dan optimasi SEO toko aplikasi",
      "Membangun perangkat keras micro-controller dan sensor IoT"
    ],
    correct: 1,
    pembahasan: "CPMK-1 berfokus pada: 'Mahasiswa mampu merancang UI, mengintegrasikan keamanan, serta mengakses dan merancang API dan antarmuka jaringan untuk aplikasi mobile'. Sementara fitur sensor dan lokasi berada di CPMK-2.",
    sumber: "slide"
  },
  {
    id: "w1_05",
    week: 1,
    topik: "Capaian Pembelajaran (CPMK)",
    tingkat: "sedang",
    tipe: "konsep",
    pertanyaan: "Sub-CPMK 09, 10, dan 08 yang mencakup Sensor, Push + Telephony, dan LBS (Location Based Service) berada di bawah payung capaian...",
    options: [
      "CPMK-1",
      "CPMK-2",
      "CPMK-3 Khusus Startup",
      "Sertifikasi Google Associate Android Developer",
      "Akreditasi Internasional ABET"
    ],
    correct: 1,
    pembahasan: "CPMK-2 menyatakan: 'Mahasiswa mampu mengembangkan aplikasi mobile berbasis lokasi, sensor, telepon, pesan, dan komputasi asinkron'.",
    sumber: "slide"
  },
  {
    id: "w1_06",
    week: 1,
    topik: "Project-Based Learning",
    tingkat: "mudah",
    tipe: "konsep",
    pertanyaan: "Prinsip utama yang membedakan 'Cara Kita' (Project-Based Learning) dengan 'Cara Lama' dalam perkuliahan pemrograman mobile adalah...",
    options: [
      "Cara lama menggunakan ujian tulis, cara kita tidak menggunakan ujian sama sekali",
      "Cara kita berfokus menghafal seluruh sintaksis bahasa JavaScript",
      "Cara kita dimulai dari memahami masalah nyata pengguna menuju solusi aplikasi, bukan sekadar menghafal kode",
      "Cara kita melarang penggunaan library pihak ketiga",
      "Cara lama mewajibkan laptop, cara kita hanya menggunakan smartphone"
    ],
    correct: 2,
    pembahasan: "Slide 'Bukan Sekadar Belajar Coding' menegaskan perbedaan: Cara Lama (Materi -> Coding -> Tugas -> Selesai) vs Cara Kita (Masalah -> Aplikasi -> Skill -> Build -> Test -> Demo -> Improve). Kita belajar untuk memecahkan masalah nyata.",
    sumber: "slide"
  },
  {
    id: "w1_07",
    week: 1,
    topik: "Prinsip Desain Produk",
    tingkat: "sedang",
    tipe: "analisis_kasus",
    pertanyaan: "Dalam perancangan produk aplikasi mobile, prinsip penting apa yang ditekankan pada contoh studi kasus Vehicle Tracker?",
    options: [
      "Mulai dari teknologi tercanggih yang sedang populer",
      "Jangan mulai dari fitur, mulailah dari masalah pengguna",
      "Buat fitur sebanyak mungkin di versi pertama",
      "Tiru aplikasi kompetitor secara persis tanpa modifikasi",
      "Prioritaskan antarmuka dark mode sebelum logika navigasi"
    ],
    correct: 1,
    pembahasan: "Slide 'Dari Masalah Menjadi Aplikasi' memuat pesan penting bergaris bawah: 'Jangan mulai dari fitur. Mulai dari masalah pengguna.'",
    sumber: "slide"
  },
  {
    id: "w1_08",
    week: 1,
    topik: "Peran Tim Developer",
    tingkat: "sedang",
    tipe: "konsep",
    pertanyaan: "Dalam sebuah tim pengembang aplikasi mobile, anggota tim yang bertugas merancang tampilan visual, tata letak antarmuka, dan kenyamanan interaksi pengguna memegang peran sebagai...",
    options: [
      "Developer B (Backend / API)",
      "Developer C (Feature / Device)",
      "Developer D (Testing / Deployment)",
      "Developer A (Frontend / UI)",
      "Database Administrator"
    ],
    correct: 3,
    pembahasan: "Slide 'Kita Bekerja sebagai Tim Developer' membagi peran: Developer A (Frontend/UI: implementasi antarmuka dan pengalaman pengguna), Developer B (Backend/API), Developer C (Feature/Device), dan Developer D (Testing/Deployment).",
    sumber: "slide"
  },
  {
    id: "w1_09",
    week: 1,
    topik: "Tanggung Jawab Tim",
    tingkat: "mudah",
    tipe: "konsep",
    pertanyaan: "Meskipun peran dalam tim developer dibagi menjadi Frontend, Backend, Device, dan Testing, aturan mutlak apa yang ditekankan dalam perkuliahan terkait penguasaan proyek?",
    options: [
      "Hanya ketua tim yang berhak berbicara saat demonstrasi aplikasi",
      "Semua anggota tim harus memahami keseluruhan aplikasi dan mampu menjelaskan kontribusinya secara individu",
      "Anggota yang bertugas testing tidak perlu melihat baris kode sama sekali",
      "Backend developer tidak boleh menginstal Expo Go di smartphone pribadinya",
      "Jika ada bug di UI, anggota lain tidak diperkenankan membantu"
    ],
    correct: 1,
    pembahasan: "Slide secara eksplisit mencatat: 'Role boleh berbeda, tetapi semua anggota harus memahami aplikasi dan mampu menjelaskan kontribusinya.' Ini dievaluasi melalui Technical Defense dan Random Demo.",
    sumber: "slide"
  },
  {
    id: "w1_10",
    week: 1,
    topik: "Workflow Pengembangan",
    tingkat: "sedang",
    tipe: "konsep",
    pertanyaan: "Urutan siklus sprint pengembangan yang benar pada slide 'Workflow Pengembangan' dari awal hingga iterasi berulang adalah...",
    options: [
      "Build -> Test -> Backlog -> Demo -> Sprint -> Improve",
      "Backlog -> Sprint -> Build -> Test -> Demo -> Improve",
      "Sprint -> Demo -> Backlog -> Build -> Test -> Improve",
      "Idea -> Deploy -> Test -> Coding -> Maintenance",
      "Plan -> Code -> Release -> Forget"
    ],
    correct: 1,
    pembahasan: "Siklus iteratif 6 tahap pada slide: 1. BACKLOG (daftar fitur) -> 2. SPRINT (target terpilih) -> 3. BUILD (tulis kode) -> 4. TEST (uji kualitas) -> 5. DEMO (tunjukkan hasil) -> 6. IMPROVE (perbaiki & kembangkan lagi).",
    sumber: "slide"
  },
  {
    id: "w1_11",
    week: 1,
    topik: "Kolaborasi GitHub",
    tingkat: "mudah",
    tipe: "konsep",
    pertanyaan: "Konsep dasar Git yang berfungsi sebagai 'area kerja terpisah untuk mengerjakan fitur atau perbaikan tertentu tanpa mengganggu kode utama' disebut...",
    options: [
      "Repository",
      "Commit",
      "Branch",
      "Pull Request",
      "Fork"
    ],
    correct: 2,
    pembahasan: "Slide 'GitHub = Tempat Kerja Tim' mendefinisikan Branch sebagai: 'Area kerja: Tempat bekerja pada fitur atau perbaikan tertentu tanpa mengganggu kode utama.'",
    sumber: "slide"
  },
  {
    id: "w1_12",
    week: 1,
    topik: "Kolaborasi GitHub",
    tingkat: "sedang",
    tipe: "konsep",
    pertanyaan: "Ketika seorang developer telah menyelesaikan fitur baru di branch miliknya dan ingin meminta anggota tim lain untuk meninjau serta menggabungkannya ke kode utama, proses ini dilakukan melalui...",
    options: [
      "Git Push Force",
      "Pull Request (PR)",
      "Git Clone",
      "Git Stash Drop",
      "Rebase Interaktif"
    ],
    correct: 1,
    pembahasan: "Pull Request adalah mekanisme formal di GitHub untuk meminta tim lain meninjau (review) dan menggabungkan (merge) perubahan ke kode utama.",
    sumber: "slide"
  },
  {
    id: "w1_13",
    week: 1,
    topik: "Etika Penggunaan AI",
    tingkat: "sedang",
    tipe: "konsep",
    pertanyaan: "Tiga checkpoint evaluasi penting yang wajib dilakukan mahasiswa saat memanfaatkan AI sebagai asisten coding adalah...",
    options: [
      "Ask, Copy, Paste",
      "Understand, Verify, Modify",
      "Prompt, Run, Submit",
      "Search, Select, Commit",
      "Compile, Build, Deploy"
    ],
    correct: 1,
    pembahasan: "Slide 'Tiga Checkpoint Penting' mencantumkan: 1. UNDERSTAND (apakah saya memahami kode ini?), 2. VERIFY (apakah kode ini benar dan aman?), dan 3. MODIFY (apakah saya mampu menyesuaikannya?).",
    sumber: "slide"
  },
  {
    id: "w1_14",
    week: 1,
    topik: "Etika Penggunaan AI",
    tingkat: "mudah",
    tipe: "konsep",
    pertanyaan: "Manakah diagram alur yang mencerminkan pemanfaatan AI yang BIJAK dan BENAR dalam perkuliahan Pemrograman Mobile?",
    options: [
      "Copy -> Paste -> Submit",
      "Ask -> Understand -> Test -> Modify -> Commit",
      "Ask -> Copy -> Commit -> Submit",
      "Prompt -> Generate -> Deploy -> Pray",
      "Search -> Paste -> Test -> Submit"
    ],
    correct: 1,
    pembahasan: "Slide 'Cara Menggunakan AI dengan Bijak' membandingkan: Cara yang Salah (Copy -> Paste -> Submit) vs Cara yang Benar (Ask -> Understand -> Test -> Modify -> Commit).",
    sumber: "slide"
  },
  {
    id: "w1_15",
    week: 1,
    topik: "Skema Penilaian",
    tingkat: "sedang",
    tipe: "konsep",
    pertanyaan: "Tiga pilar komponen yang dinilai dalam perkuliahan Pemrograman Mobile mencakup...",
    options: [
      "Kehadiran Dosen, Fasilitas Lab, dan Akreditasi Kampus",
      "Individual, Team Product, dan Professional Practice",
      "Desain Figma, Jumlah Baris Kode, dan Followers LinkedIn",
      "Kecepatan Mengetik, Spesifikasi Laptop, dan Nilai Matematika",
      "Ujian Tulis Teori, Ujian Hafalan Sintaksis, dan Makalah Cetak"
    ],
    correct: 1,
    pembahasan: "Slide 'Yang Dinilai Bukan Hanya Aplikasi' membagi penilaian menjadi 3 ranah: 1. Individual (weekly task, random demo, technical defense), 2. Team Product (kualitas aplikasi, fungsionalitas, keamanan, performa), dan 3. Professional Practice (Git, kolaborasi, dokumentasi, disiplin sprint).",
    sumber: "slide"
  },
  {
    id: "w1_16",
    week: 1,
    topik: "Skema Penilaian",
    tingkat: "sedang",
    tipe: "konsep",
    pertanyaan: "Dalam penilaian aspek 'Individual', metode di mana dosen menunjuk mahasiswa secara acak untuk mendemonstrasikan fitur dan mempertanggungjawabkan kodenya disebut...",
    options: [
      "Live Coding Hackathon",
      "Random Demo dan Technical Defense",
      "Code Golf Competition",
      "Peer Review Anonymous",
      "Presentasi Tugas Akhir Terbuka"
    ],
    correct: 1,
    pembahasan: "Komponen Individual terdiri dari: Weekly task, Random demo (demonstrasi acak oleh anggota tim), dan Technical defense (menjelaskan dan mempertahankan keputusan solusi teknis).",
    sumber: "slide"
  },
  {
    id: "w1_17",
    week: 1,
    topik: "Roadmap Perkuliahan",
    tingkat: "mudah",
    tipe: "konsep",
    pertanyaan: "Pada roadmap 16 pertemuan, di pekan keberapakah evaluasi UTS (Minimum Viable Product / MVP Presentation) dijadwalkan?",
    options: [
      "Pertemuan 4",
      "Pertemuan 6",
      "Pertemuan 8",
      "Pertemuan 10",
      "Pertemuan 12"
    ],
    correct: 2,
    pembahasan: "Berdasarkan slide 'Perjalanan 16 Pertemuan', Pertemuan 8 adalah jadwal MVP / UTS (evaluasi produk berjalan dari materi pekan 1-7).",
    sumber: "slide"
  },
  {
    id: "w1_18",
    week: 1,
    topik: "Roadmap Perkuliahan",
    tingkat: "sedang",
    tipe: "konsep",
    pertanyaan: "Materi tentang integrasi REST API, HTTP & networking, parsing JSON, dan error handling dipelajari secara intensif pada blok pekan ke...",
    options: [
      "Pertemuan 1",
      "Pertemuan 2-3",
      "Pertemuan 4-7",
      "Pertemuan 9-11",
      "Pertemuan 12-15"
    ],
    correct: 2,
    pembahasan: "Roadmap membagi: Pekan 1 (Kickoff), Pekan 2-3 (UI/UX + Security dasar), Pekan 4-7 (API + Network, DTO, Token JWT, Error & Offline, Sensors), Pekan 8 (UTS/MVP).",
    sumber: "slide"
  },
  {
    id: "w1_19",
    week: 1,
    topik: "Mission Kickoff",
    tingkat: "mudah",
    tipe: "analisis_kasus",
    pertanyaan: "Pada hari pertama orientasi perkuliahan (Pekan 1), luaran (output) utama yang harus dihasilkan oleh kelompok mahasiswa adalah...",
    options: [
      "Aplikasi APK final yang siap diunggah ke Google Play Store",
      "Product Canvas (rangkuman ide, masalah, pengguna, solusi) dan Repositori GitHub tim",
      "Basis data PostgreSQL yang ter-hosting di server cloud",
      "Dokumen skripsi bab 1 sampai bab 5 lengkap",
      "Sertifikat magang industri"
    ],
    correct: 1,
    pembahasan: "Slide 'Today's Mission' menegaskan: 'Hari ini belum coding. Fokus pada diskusi, analisis, dan perancangan.' Outputnya adalah: 1. Product Canvas dan 2. GitHub Repository tim.",
    sumber: "slide"
  },
  {
    id: "w1_20",
    week: 1,
    topik: "Filosofi Perkuliahan",
    tingkat: "sedang",
    tipe: "pilih_solusi",
    pertanyaan: "Seorang mahasiswa menyalin (copy) seluruh kode dari ChatGPT lalu mengumpulkannya tanpa mengerti apa arti fungsi `useEffect` di dalamnya. Saat Random Demo, ia tidak bisa menjawab pertanyaan dosen. Sesuai materi orientasi, kesalahan utama mahasiswa ini adalah...",
    options: [
      "Menggunakan model AI gratisan alih-alih AI berbayar",
      "Melanggar checkpoint 'Understand, Verify, Modify' dan mengadopsi alur salah 'Copy -> Paste -> Submit'",
      "Tidak menggunakan bahasa pemrograman C++ murni",
      "Lupa mengganti tema editor VS Code menjadi gelap",
      "Tidak menyertakan screenshot prompt di laporan Word"
    ],
    correct: 1,
    pembahasan: "Mahasiswa tersebut melanggar alur bijak AI. Ia melakukan blind copy-paste tanpa memahami kode (Understand), tidak mengujinya mandiri (Verify), dan tidak mampu memodifikasinya (Modify). Pemahaman tetap harus datang dari developer.",
    sumber: "slide"
  }
];
