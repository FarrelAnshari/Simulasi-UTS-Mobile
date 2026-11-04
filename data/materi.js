window.MATERI_DATA = [
  {
    "id": 1,
    "weekNumber": 1,
    "title": "Course Orientation & Project Kickoff",
    "subtitle": "Dari Belajar Mobile Development Menuju Membangun Aplikasi Nyata",
    "sprint": "Sprint 00 - Inisiasi Proyek",
    "readTime": "15 menit",
    "topics": [
      "Kontrak Kuliah",
      "4 Pilar Mobile",
      "CPMK & 12 Sub-CPMK",
      "Project-Based Learning",
      "Kolaborasi Tim & GitHub",
      "Etika & Pemanfaatan AI",
      "Roadmap 16 Pertemuan"
    ],
    "subtopics": [
      {
        "id": "w1-kontrak",
        "title": "1.1 Kontrak Perkuliahan & Aturan Main",
        "analogy": "Membangun aplikasi mobile di industri sama seperti ekspedisi tim profesional. Disiplin, kesiapan peralatan, dan kepatuhan pada kesepakatan kerja adalah fondasi keberhasilan produk sebelum satu baris kode pun ditulis.",
        "content": "\n<p class=\"lead\">Selamat datang di mata kuliah <strong>Pemrograman Mobile</strong>. Perkuliahan ini dirancang bukan sekadar untuk menghafal sintaksis, melainkan untuk melatih mahasiswa berpikir dan bekerja layaknya tim rekayasa perangkat lunak mobile modern. Untuk menjamin proses belajar berjalan efektif dan adil, disepakati kontrak perkuliahan yang mengikat seluruh peserta.</p>\n\n<h4>Aturan Utama Perkuliahan</h4>\n<ul class=\"styled-list\">\n  <li><strong>Kehadiran Minimal 80%:</strong> Mahasiswa wajib hadir minimal 80% dari total 16 pertemuan (setara minimal 12 kali pertemuan hadir). Kurang dari 12 kehadiran berakibat otomatis tidak memenuhi syarat kelulusan mata kuliah.</li>\n  <li><strong>Kewajiban Mengikuti UTS & UAS:</strong> Ujian Tengah Semester (Pekan 8) dan Ujian Akhir Semester (Pekan 16) bersifat mutlak dan tidak dapat digantikan dengan penugasan lain. UTS menguji pemahaman arsitektur antarmuka, keamanan data lokal, integrasi API, serta sensor (Sprint 01–06).</li>\n  <li><strong>Prosedur Izin Maksimal H-1:</strong> Segala bentuk ketidakhadiran harus diinformasikan kepada dosen pengampu maksimal H-1 sebelum jadwal kelas dimulai, disertai bukti otentik (surat dokter resmi, surat tugas institusi). Izin mendadak pada hari H tanpa kondisi kedaruratan terverifikasi dianggap alpa.</li>\n  <li><strong>Peralatan Kerja & Tugas Mingguan:</strong> Setiap mahasiswa wajib membawa laptop yang siap pakai dengan lingkungan pengembangan yang sudah dikonfigurasi (Node.js, editor VS Code, simulator atau perangkat fisik dengan aplikasi <em>Expo Go</em>). Pada tiap pertemuan ada penugasan berbasis sprint yang wajib dikerjakan dan didemokan.</li>\n</ul>\n\n<div class=\"callout callout-important\">\n  <h5><i class=\"fa-solid fa-triangle-exclamation\"></i> Kenapa Kontrak Ini Dibuat Tegas?</h5>\n  <p>Dalam rekayasa perangkat lunak mobile, kebiasaan profesional dibentuk dari konsistensi harian. Proyek aplikasi \"PresidentKu\" yang akan kita kembangkan berjalan secara iteratif per pekan. Sekali mahasiswa tertinggal satu pekan (misalnya absen di materi autentikasi pekan 3), maka pada pekan 5 saat implementasi token API mereka akan mengalami kesulitan struktural yang fatal.</p>\n</div>\n      ",
        "deepDive": "Di lingkungan industri rintisan (startup) maupun korporasi teknologi, konsep kehadiran setara dengan <em>Availability & SLA (Service Level Agreement)</em> tim. Kesiapan laptop dan lingkungan kerja merefleksikan <em>Developer Readiness</em>.",
        "summary": "Kontrak kuliah mewajibkan kehadiran minimal 80% (12 dari 16 pertemuan), keikutsertaan wajib pada UTS dan UAS, pemberitahuan izin maksimal H-1 berdokumen bukti, serta kewajiban membawa laptop dengan tugas aktif tiap pekan.",
        "pitfalls": "Mengabaikan absensi dengan anggapan tugas mandiri bisa menggantikan presensi, atau baru melapor sakit/izin setelah kelas selesai.",
        "examTips": "Perhatikan angka persentase minimal kehadiran (80% / 12 pertemuan) dan batas waktu izin (maksimal H-1)."
      },
      {
        "id": "w1-pilar-cpmk",
        "title": "1.2 Empat Pilar Mobile, CPMK & 12 Sub-CPMK",
        "analogy": "Membangun aplikasi mobile diibaratkan membangun sebuah mobil sport canggih: Bodi luar yang aerodinamis dan nyaman adalah UI/UX; mesin dan tangki bahan bakar adalah Data & Network; sistem pengereman, airbag, dan sabuk pengaman adalah Security & Performance; sedangkan GPS, sensor radar, dan telepon darurat adalah Device Features.",
        "content": "\n<p>Aplikasi mobile modern tidak lagi sesederhana menampilkan teks pada layar kecil. Aplikasi harus tangguh menghadapi fluktuasi jaringan, menjaga data pribadi di perangkat pengguna yang rentan hilang, serta memaksimalkan kapabilitas sensor bawaan smartphone.</p>\n\n<h4>Empat Pilar Pemrograman Mobile</h4>\n<div class=\"grid-2-col my-4\">\n  <div class=\"card-feature\">\n    <div class=\"card-icon text-indigo\"><i class=\"fa-solid fa-palette\"></i></div>\n    <h5>1. UI / UX</h5>\n    <p>Mencakup perancangan antarmuka yang <em>responsive</em> (menyesuaikan ragam ukuran layar HP hingga tablet), <em>accessible</em> (ramah bagi penyandang disabilitas penglihatan dan motorik), serta tata letak modern berbasis komponen yang dapat digunakan ulang.</p>\n  </div>\n  <div class=\"card-feature\">\n    <div class=\"card-icon text-amber\"><i class=\"fa-solid fa-server\"></i></div>\n    <h5>2. Data & Network</h5>\n    <p>Meliputi pertukaran data secara asinkron dengan server melalui antarmuka REST API, parsing format data pertukaran standar (JSON), serta manajemen penyimpanan data lokal (local cache).</p>\n  </div>\n  <div class=\"card-feature\">\n    <div class=\"card-icon text-emerald\"><i class=\"fa-solid fa-shield-halved\"></i></div>\n    <h5>3. Security & Performance</h5>\n    <p>Fokus pada autentikasi identitas pengguna, perlindungan data sensitif di perangkat lokal (Secure Storage yang terenkripsi), perlindungan data saat transit (HTTPS/TLS & JWT), serta efisiensi pemakaian memori dan daya baterai.</p>\n  </div>\n  <div class=\"card-feature\">\n    <div class=\"card-icon text-cyan\"><i class=\"fa-solid fa-microchip\"></i></div>\n    <h5>4. Device Features</h5>\n    <p>Pemanfaatan kemampuan perangkat keras unik ponsel pintar: sensor gerak (akselerometer, giroskop), penentuan lokasi presisi (GPS/LBS), kamera, serta fitur komunikasi teleponi dan notifikasi pesan dorong (push notifications).</p>\n  </div>\n</div>\n\n<h4>Capaian Pembelajaran Mata Kuliah (CPMK)</h4>\n<ul class=\"styled-list\">\n  <li><strong>CPMK-1:</strong> Mahasiswa mampu merancang antarmuka pengguna (UI), mengintegrasikan mekanisme keamanan dan perlindungan data, serta mengakses dan merancang REST API dan antarmuka jaringan untuk aplikasi mobile.</li>\n  <li><strong>CPMK-2:</strong> Mahasiswa mampu mengembangkan aplikasi mobile yang memanfaatkan fitur perangkat keras berbasis lokasi (LBS/Map), sensor gerak, integrasi telepon dan pesan, serta komputasi proses asinkron (background processing).</li>\n</ul>\n\n<h4>Peta 12 Sub-CPMK (Keahlian yang Dibangun)</h4>\n<p>Kedua CPMK besar di atas dipecah menjadi 12 kompetensi teknis terukur:</p>\n<ol class=\"styled-numbered\">\n  <li><strong>UI/UX:</strong> Merancang tampilan dan pengalaman pengguna yang modular dan adaptif.</li>\n  <li><strong>Accessibility:</strong> Mengimplementasikan standar inklusivitas (label screen reader, contrast ratio, target sentuh).</li>\n  <li><strong>Auth + Secure Storage:</strong> Mengelola siklus autentikasi dan enkripsi data kredensial lokal di hardware Keystore.</li>\n  <li><strong>REST API:</strong> Menghubungkan aplikasi ke penyedia layanan data server.</li>\n  <li><strong>Network + JWT/OAuth:</strong> Komunikasi jaringan aman berprotokol token stateless.</li>\n  <li><strong>Error & Offline:</strong> Menangani fluktuasi sinyal, batas waktu (timeout), serta kondisi nir-koneksi.</li>\n  <li><strong>Async:</strong> Mengelola antrean komputasi non-blocking di latar belakang.</li>\n  <li><strong>LBS + Map:</strong> Menampilkan titik koordinat dan rute geolokasi perangkat secara interaktif.</li>\n  <li><strong>Sensors:</strong> Menangkap dan mengolah data telemetri numerik perangkat keras (akselerometer & giroskop).</li>\n  <li><strong>Push + Telephony:</strong> Mengirimkan pesan interaktif dan memicu aksi komunikasi sistemik.</li>\n  <li><strong>State + Lifecycle:</strong> Menjaga kestabilan data saat aplikasi diminimalkan atau berpindah layar.</li>\n  <li><strong>Performance:</strong> Mencegah memory leaks dan beban rendering berlebih demi kelancaran 60fps.</li>\n</ol>\n      ",
        "deepDive": "Setiap sub-CPMK saling mengunci. Misalnya, Sub-CPMK 09 (Sensors) di pekan 7 membutuhkan pemahaman Sub-CPMK 11 (State & Lifecycle) agar <em>subscription event listener</em> sensor dapat di-cleanup saat komponen unmount untuk menghindari kebocoran baterai.",
        "summary": "Pemrograman mobile bertumpu pada 4 pilar (UI/UX, Data & Network, Security & Performance, Device Features) yang diturunkan menjadi CPMK-1, CPMK-2, dan 12 Sub-CPMK terukur sepanjang semester.",
        "pitfalls": "Mengira pemrograman mobile hanya seputar desain tampilan (UI), padahal aspek keamanan data, penanganan kondisi jaringan mati, dan efisiensi sensor memegang porsi bobot yang sama besar.",
        "examTips": "Hafalkan 4 pilar utama pemrograman mobile dan perbedaan fokus antara CPMK-1 (UI, Security, API) dan CPMK-2 (Fitur perangkat, sensor, lokasi, async)."
      },
      {
        "id": "w1-pbl-team-workflow",
        "title": "1.3 Project-Based Learning, Peran Tim & Workflow Sprint",
        "analogy": "Belajar memasak dengan cara lama adalah membaca resep bumbu dan menghafal nama wajan. Belajar cara kita adalah membuka restoran sungguhan: ada pesanan tamu lapar, kita memasak bersama tim koki, menyajikan makanan, mencicipi kritik pelanggan, lalu menyempurnakan rasa masakan pada pesanan berikutnya.",
        "content": "\n<p>Pendekatan pembelajaran yang digunakan adalah <strong>Project-Based Learning (PBL)</strong> berbasis produk berjalan bernama <strong>PresidentKu</strong> — aplikasi mobile layanan publik dan informasi kenegaraan terintegrasi.</p>\n\n<div class=\"comparison-table-wrapper my-4\">\n  <table class=\"table-compare\">\n    <thead>\n      <tr>\n        <th>Cara Lama (Tradisional)</th>\n        <th>Cara Kita (Project-Based Sprint)</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>Fokus membaca materi & menghafal kode</td>\n        <td>Fokus memecahkan masalah nyata pengguna</td>\n      </tr>\n      <tr>\n        <td>Coding tanpa konteks kasus nyata</td>\n        <td>Merancang solusi berbasis arsitektur aplikasi mobile</td>\n      </tr>\n      <tr>\n        <td>Kumpul tugas individu lalu selesai/lupa</td>\n        <td>Build &rarr; Test &rarr; Demo &rarr; Improve berkelanjutan</td>\n      </tr>\n      <tr>\n        <td>Satu orang bekerja sendiri terisolasi</td>\n        <td>Kolaborasi tim dengan pembagian peran profesional</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\n<h4>Prinsip: \"Mulai dari Masalah Pengguna, Bukan dari Fitur\"</h4>\n<p>Banyak developer pemula gagal karena membuat fitur yang tidak dibutuhkan. Contoh kasus pada slide: Aplikasi Pelacak Kendaraan (<em>Vehicle Tracker</em>):</p>\n<ul class=\"styled-list\">\n  <li><strong>Pengguna:</strong> Pemilik armada, orang tua, perusahaan logistik.</li>\n  <li><strong>Masalah:</strong> Sulit mengetahui lokasi kendaraan secara real-time; risiko pencurian dan ketidakefisienan rute.</li>\n  <li><strong>Solusi:</strong> Sistem pelacakan koordinat GPS real-time dengan riwayat perjalanan dan notifikasi anomali.</li>\n  <li><strong>Aplikasi Mobile:</strong> Vehicle Tracker App yang mengintegrasikan LBS Map dan Push Notification.</li>\n</ul>\n\n<h4>Struktur Kolaborasi Tim Developer</h4>\n<p>Meskipun aplikasi dikerjakan secara berkelompok (3-4 orang), <em>setiap anggota tim wajib memahami keseluruhan arsitektur aplikasi</em> dan mampu mendemokan kodenya secara individu (Technical Defense):</p>\n<ul class=\"styled-list\">\n  <li><strong>Developer A (Frontend / UI):</strong> Bertanggung jawab atas struktur komponen, styling responsif Flexbox, serta aksesibilitas antarmuka.</li>\n  <li><strong>Developer B (Backend / API Integration):</strong> Bertanggung jawab atas komunikasi REST API, penanganan format JSON, dan token autentikasi.</li>\n  <li><strong>Developer C (Feature / Device):</strong> Mengelola sensor perangkat (akselerometer, orientasi) dan integrasi fitur bawaan ponsel.</li>\n  <li><strong>Developer D (Testing / Deployment):</strong> Menjalankan pengujian skenario ekstrem (offline, timeout, login gagal) dan audit stabilitas.</li>\n</ul>\n\n<h4>Workflow Siklus Sprint</h4>\n<p>Setiap pekan berjalan sebagai satu siklus sprint teratur:</p>\n<div class=\"diagram-container text-center my-4\">\n  <svg viewBox=\"0 0 760 120\" class=\"svg-flowchart\">\n    <rect x=\"10\" y=\"35\" width=\"100\" height=\"50\" rx=\"8\" class=\"svg-node-blue\" />\n    <text x=\"60\" y=\"65\" class=\"svg-text\">1. BACKLOG</text>\n    \n    <path d=\"M 110 60 L 135 60\" class=\"svg-arrow\" marker-end=\"url(#arrow)\" />\n    \n    <rect x=\"140\" y=\"35\" width=\"100\" height=\"50\" rx=\"8\" class=\"svg-node-indigo\" />\n    <text x=\"190\" y=\"65\" class=\"svg-text\">2. SPRINT</text>\n    \n    <path d=\"M 240 60 L 265 60\" class=\"svg-arrow\" marker-end=\"url(#arrow)\" />\n    \n    <rect x=\"270\" y=\"35\" width=\"95\" height=\"50\" rx=\"8\" class=\"svg-node-purple\" />\n    <text x=\"317\" y=\"65\" class=\"svg-text\">3. BUILD</text>\n    \n    <path d=\"M 365 60 L 390 60\" class=\"svg-arrow\" marker-end=\"url(#arrow)\" />\n    \n    <rect x=\"395\" y=\"35\" width=\"95\" height=\"50\" rx=\"8\" class=\"svg-node-pink\" />\n    <text x=\"442\" y=\"65\" class=\"svg-text\">4. TEST</text>\n    \n    <path d=\"M 490 60 L 515 60\" class=\"svg-arrow\" marker-end=\"url(#arrow)\" />\n    \n    <rect x=\"520\" y=\"35\" width=\"95\" height=\"50\" rx=\"8\" class=\"svg-node-amber\" />\n    <text x=\"567\" y=\"65\" class=\"svg-text\">5. DEMO</text>\n    \n    <path d=\"M 615 60 L 640 60\" class=\"svg-arrow\" marker-end=\"url(#arrow)\" />\n    \n    <rect x=\"645\" y=\"35\" width=\"105\" height=\"50\" rx=\"8\" class=\"svg-node-emerald\" />\n    <text x=\"697\" y=\"65\" class=\"svg-text\">6. IMPROVE</text>\n  </svg>\n</div>\n<ol class=\"styled-numbered\">\n  <li><strong>Backlog:</strong> Mendaftar seluruh kebutuhan fitur pengguna dari Product Canvas.</li>\n  <li><strong>Sprint:</strong> Memilih 2-3 target spesifik untuk diselesaikan dalam satu pekan kerja.</li>\n  <li><strong>Build:</strong> Menulis kode program dan merangkai antarmuka serta logika.</li>\n  <li><strong>Test:</strong> Menguji fungsionalitas di simulator dan perangkat fisik nyata (Expo Go).</li>\n  <li><strong>Demo:</strong> Menunjukkan hasil kerja kepada dosen dan kolega tim.</li>\n  <li><strong>Improve:</strong> Menerima umpan balik, merefaktor celah kode, dan lanjut ke sprint berikutnya.</li>\n</ol>\n      ",
        "deepDive": "Dalam Scrum modern, proses Build & Test dilakukan berulang kali dalam hitungan jam. Di praktikum ini, setiap demo akhir pekan menuntut mahasiswa menunjukkan aplikasi hidup di layar HP lewat Expo Go, bukan sekadar slide presentasi statis.",
        "summary": "Pendekatan belajar berbasis sprint produk (Backlog, Sprint, Build, Test, Demo, Improve). Tim membagi peran (Frontend, Backend, Device, Testing) tetapi setiap individu bertanggung jawab memahami seluruh arsitektur produk.",
        "pitfalls": "Sistem 'tahu beres' di mana hanya satu orang yang mengoding sementara anggota lain hanya membuat laporan. Hal ini akan langsung terbongkar saat sesi random demo dan technical defense.",
        "examTips": "Pahami urutan alur sprint (Backlog &rarr; Sprint &rarr; Build &rarr; Test &rarr; Demo &rarr; Improve) dan prinsip utama: selalu mulai dari masalah pengguna, bukan sekadar menumpuk fitur."
      },
      {
        "id": "w1-git-ai-evaluation",
        "title": "1.4 Git Collaboration, Etika AI & Skema Penilaian",
        "analogy": "Menggunakan AI seperti menyewa asisten arsitek jenius. Jika Anda memintanya menggambar denah rumah lalu langsung membangunnya tanpa Anda periksa kekuatan fondasinya, rumah tersebut bisa runtuh saat terjadi gempa kecil.",
        "content": "\n<h4>Kolaborasi Kode dengan Git & GitHub</h4>\n<p>Pengelolaan kode tim wajib menggunakan Git dengan GitHub Repository sebagai pusat kerja sama. Konsep dasar yang wajib dikuasai:</p>\n<ul class=\"styled-list\">\n  <li><strong>Repository:</strong> Tempat penyimpanan seluruh berkas kode, aset gambar, dan dokumentasi proyek.</li>\n  <li><strong>Commit:</strong> Rekam jejak perubahan kode yang disertai pesan deskriptif (misal: <code>git commit -m \"feat: tambahkan validasi form login\"</code>).</li>\n  <li><strong>Branch:</strong> Ruang kerja cabang agar pengerjaan fitur baru tidak merusak stabilitas kode utama (<em>main/master</em>).</li>\n  <li><strong>Pull Request (PR):</strong> Pengajuan kode dari branch fitur ke branch utama yang ditinjau dan disetujui oleh anggota tim lain.</li>\n</ul>\n\n<h4>Pemanfaatan AI secara Etis & Bertanggung Jawab</h4>\n<p>Kecerdasan Artifisial (seperti Claude, ChatGPT, Copilot) diizinkan sebagai asisten pengembangan, namun tidak boleh menggantikan pemahaman mandiri mahasiswa.</p>\n\n<div class=\"grid-2-col my-4\">\n  <div class=\"card-feature border-red\">\n    <h5 class=\"text-danger\"><i class=\"fa-solid fa-xmark\"></i> Alur Salah (Blind Copy-Paste)</h5>\n    <div class=\"code-flow\">Copy &rarr; Paste &rarr; Submit</div>\n    <p class=\"text-muted mt-2\">Menyalin kode tanpa memahami maksud sintaksis. Developer tidak tahu jika kode mengandung celah keamanan atau pustaka kadaluarsa.</p>\n  </div>\n  <div class=\"card-feature border-green\">\n    <h5 class=\"text-success\"><i class=\"fa-solid fa-check\"></i> Alur Benar (Ask & Verify)</h5>\n    <div class=\"code-flow\">Ask &rarr; Understand &rarr; Test &rarr; Modify &rarr; Commit</div>\n    <p class=\"text-muted mt-2\">Gunakan AI untuk mencari ide solusi, pelajari logikanya, jalankan pengujian, sesuaikan dengan PresidentKu, lalu commit mandiri.</p>\n  </div>\n</div>\n\n<div class=\"callout callout-warning\">\n  <h5><i class=\"fa-solid fa-circle-question\"></i> Tiga Checkpoint Wajib Saat Menggunakan AI</h5>\n  <ol class=\"styled-numbered mb-0\">\n    <li><strong>UNDERSTAND:</strong> Apakah saya memahami setiap baris kode yang dihasilkan AI ini?</li>\n    <li><strong>VERIFY:</strong> Apakah kode ini benar, aman, dan tidak membocorkan data rahasia?</li>\n    <li><strong>MODIFY:</strong> Mampukah saya memodifikasi struktur kode ini jika alur aplikasinya diubah?</li>\n  </ol>\n</div>\n\n<h4>Komponen Penilaian Mata Kuliah</h4>\n<p>Penilaian tidak hanya ditentukan oleh keindahan aplikasi, melainkan mencakup 3 pilar evaluasi terpadu:</p>\n<ul class=\"styled-list\">\n  <li><strong>1. Individual Competence:</strong> Penilaian tugas mingguan, <em>Random Demo</em> (dosen memanggil acak anggota tim untuk mendemokan fitur), dan <em>Technical Defense</em> (tanya jawab mendalam alasan pemilihan arsitektur kode).</li>\n  <li><strong>2. Team Product Quality:</strong> Kelengkapan fungsionalitas, kualitas antarmuka UI/UX, penerapan keamanan data & token, keberhasilan integrasi REST API, pemanfaatan sensor perangkat, serta kestabilan performa.</li>\n  <li><strong>3. Professional Practice:</strong> Disiplin manajemen versi Git (frekuensi dan deskripsi commit), efektivitas kolaborasi tim, kebersihan dokumentasi teknis, serta kepatuhan jadwal sprint.</li>\n</ul>\n\n<h4>Peta Jalan (Roadmap) 16 Pertemuan</h4>\n<div class=\"roadmap-grid\">\n  <div class=\"roadmap-item\"><span>Pekan 1</span><strong>Kickoff</strong> (Orientasi & Definisi Produk)</div>\n  <div class=\"roadmap-item\"><span>Pekan 2-3</span><strong>UI/UX + Security</strong> (React Native, Expo, Flexbox, Secure Storage)</div>\n  <div class=\"roadmap-item\"><span>Pekan 4-7</span><strong>API + Network</strong> (RESTful API, DTO, JWT Token, Error & Offline, Sensors)</div>\n  <div class=\"roadmap-item highlight\"><span>Pekan 8</span><strong>UTS / MVP Evaluation</strong> (Presentasi & Demo Sistem Berjalan)</div>\n  <div class=\"roadmap-item\"><span>Pekan 9-11</span><strong>Async + LBS + Sensor</strong> (Geolokasi, Background Task, Map Interaktif)</div>\n  <div class=\"roadmap-item\"><span>Pekan 12-15</span><strong>Push + State + Perf</strong> (Push Notification, Global State, Lifecycle, Optimasi)</div>\n  <div class=\"roadmap-item success\"><span>Pekan 16</span><strong>Final UAS</strong> (Rilis Produk Akhir & Technical Defense)</div>\n</div>\n      ",
        "deepDive": "Di sesi Technical Defense Pekan 8 (UTS), pertanyaan tipikal dosen bukanlah \"Bagaimana cara membuat tombol?\", melainkan \"Mengapa Anda memilih menyimpan token di SecureStore daripada AsyncStorage?\", atau \"Apa yang terjadi pada aplikasi saat internet mendadak putus ketika tombol submit ditekan?\".",
        "summary": "GitHub digunakan untuk repositori tim (commit, branch, PR). Penggunaan AI wajib melewati 3 checkpoint (Understand, Verify, Modify) dengan alur Ask->Understand->Test->Modify->Commit. Penilaian terdiri atas Individual, Team Product, dan Professional Practice.",
        "pitfalls": "Melakukan 'git push -f' tanpa koordinasi, atau mengandalkan jawaban AI secara buta tanpa bisa menjelaskan cara kerja kode saat random demo.",
        "examTips": "Ingat 3 Checkpoint AI (Understand, Verify, Modify) dan 3 pilar penilaian (Individual, Team Product, Professional Practice)."
      }
    ],
    "glossary": [
      {
        "term": "Expo Go",
        "def": "Aplikasi seluler yang memungkinkan developer menjalankan dan menguji proyek React Native secara instan di HP fisik via scan QR code tanpa perlu kompilasi APK/IPA."
      },
      {
        "term": "CPMK",
        "def": "Capaian Pembelajaran Mata Kuliah; kompetensi puncak yang harus dicapai mahasiswa setelah menuntaskan perkuliahan."
      },
      {
        "term": "Backlog",
        "def": "Daftar prioritas seluruh fitur, perbaikan, dan kebutuhan fungsional yang akan dikerjakan tim selama masa proyek."
      },
      {
        "term": "Technical Defense",
        "def": "Metode evaluasi di mana mahasiswa mempertahankan dan mempertanggungjawabkan keputusan teknis kodenya di hadapan dosen."
      }
    ],
    "summaryWeek": "Pekan 1 menetapkan fondasi profesional: kepatuhan kontrak kuliah (80% kehadiran), pemahaman 4 pilar mobile dan 12 sub-CPMK, adopsi metodologi sprint berbasis masalah pengguna (PresidentKu), penggunaan Git berstandar tim, etika cerdas AI (Understand, Verify, Modify), serta kesiapan menghadapi evaluasi individual dan tim menuju UTS di Pekan 8.",
    "sprintChecklist": [
      "Mengetahui aturan kehadiran minimal 80% dan prosedur izin H-1",
      "Memahami 4 pilar mobile: UI/UX, Data & Network, Security & Performance, Device Features",
      "Membentuk tim kerja dengan pembagian peran yang jelas",
      "Menentukan ide masalah dan solusi pengguna untuk proyek PresidentKu",
      "Membuat repositori GitHub proyek dan mengundang seluruh anggota tim",
      "Mengonfigurasi Node.js dan memasang aplikasi Expo Go di smartphone fisik"
    ],
    "checkUnderstanding": [
      {
        "question": "Berapa batas kehadiran minimal perkuliahan agar mahasiswa memenuhi syarat kelulusan mata kuliah Pemrograman Mobile?",
        "options": [
          "70% (minimal 10 kali hadir)",
          "75% (minimal 11 kali hadir)",
          "80% (minimal 12 dari 16 pertemuan)",
          "85% (minimal 13 kali hadir)",
          "90% (minimal 14 kali hadir)"
        ],
        "correct": 2,
        "explanation": "Sesuai kontrak perkuliahan pada slide, kehadiran minimal adalah 80% atau setara 12 dari total 16 pertemuan yang terjadwal."
      },
      {
        "question": "Manakah yang BUKAN merupakan salah satu dari Empat Pilar Pemrograman Mobile?",
        "options": [
          "UI / UX",
          "Data & Network",
          "Security & Performance",
          "Monetization & Ads Placement",
          "Device Features"
        ],
        "correct": 3,
        "explanation": "Empat pilar mobile mencakup: (1) UI/UX, (2) Data & Network, (3) Security & Performance, dan (4) Device Features. Penempatan iklan/monetisasi bukan pilar inti teknis pada slide."
      },
      {
        "question": "Apa alur kerja pemanfaatan AI yang benar dan bertanggung jawab bagi mahasiswa pengembang aplikasi?",
        "options": [
          "Copy -> Paste -> Submit",
          "Ask -> Understand -> Test -> Modify -> Commit",
          "Prompt -> Generate -> Deploy",
          "Ask -> Paste -> Debug -> Submit",
          "Search -> Copy -> Commit"
        ],
        "correct": 1,
        "explanation": "Alur etis yang benar adalah bertanya ke AI (Ask), memahami penjelasan dan risikonya (Understand), mencoba kode tersebut (Test), menyesuaikannya dengan kebutuhan aplikasi (Modify), lalu menyimpannya ke repository (Commit)."
      },
      {
        "question": "Tiga checkpoint evaluasi diri saat mahasiswa menerima saran potongan kode dari AI adalah...",
        "options": [
          "Speed, Cost, Accuracy",
          "Understand, Verify, Modify",
          "Read, Write, Execute",
          "Clean, Fast, Responsive",
          "Frontend, Backend, Database"
        ],
        "correct": 1,
        "explanation": "Slide secara gamblang mencatat tiga checkpoint krusial: (1) UNDERSTAND (paham kodenya?), (2) VERIFY (benar dan amankah?), dan (3) MODIFY (mampukah mengubah dan menyesuaikannya?)."
      }
    ]
  },
  {
    "id": 2,
    "weekNumber": 2,
    "title": "Mobile Interface dengan React Native + Expo Go",
    "subtitle": "Sprint 01 — Dari Product Idea Menjadi Interface Mobile yang Responsif & Inklusif",
    "sprint": "Sprint 01 - Mobile Interface PresidentKu",
    "readTime": "20 menit",
    "topics": [
      "React Native & Expo Go",
      "Komponen Inti & Reusability",
      "Flexbox Layout",
      "Responsive UI Multi-Device",
      "Inclusive Design & Accessibility",
      "Prompt AI Engineering"
    ],
    "subtopics": [
      {
        "id": "w2-platform-components",
        "title": "2.1 Mengenal Platform React Native & Expo Go",
        "analogy": "Jika React Native adalah bahasa internasional yang dimengerti oleh mandor bangunan di iOS dan Android, maka Expo Go adalah kacamata ajaib yang membuat cetak biru rumah Anda langsung terlihat nyata dalam sekejap tanpa perlu menunggu semen cor mengering berhari-hari.",
        "content": "\n<p class=\"lead\">Pada pertemuan kedua, kita mentransformasikan ide aplikasi <strong>PresidentKu</strong> menjadi antarmuka mobile interaktif. Untuk membangunnya secara efisien, kita menggunakan kombinasi <strong>React Native</strong> dan ekosistem <strong>Expo Go</strong>.</p>\n\n<h4>Apa Itu React Native?</h4>\n<p>React Native adalah framework rekayasa antarmuka mobile berbasis JavaScript dan React yang memungkinkan developer membangun aplikasi untuk platform Android dan iOS secara simultan dengan satu basis kode (<em>single codebase</em>). Yang membedakan React Native dari teknologi web view hibrida adalah kemampuannya merender <strong>komponen native sungguhan</strong> di balik layar, sehingga performa animasi dan sentuhannya mendekati aplikasi native murni.</p>\n\n<h4>Mengapa Expo Go Menjadi Game Changer?</h4>\n<p>Secara tradisional, mengembangkan aplikasi mobile menuntut pemasangan Android Studio (GB-an), Android SDK, emulator berat, dan konfigurasi Gradle yang rumit. <strong>Expo Go</strong> menyederhanakan alur tersebut:</p>\n<ul class=\"styled-list\">\n  <li><strong>Instan di Perangkat Nyata:</strong> Cukup buka aplikasi Expo Go di smartphone fisik, lalu pindai kode QR yang muncul di terminal bundler (Metro).</li>\n  <li><strong>Fast Refresh:</strong> Setiap kali kode di editor Anda simpan (Ctrl+S), perubahan visual langsung ter-update di layar HP dalam waktu kurang dari satu detik tanpa kehilangan state aplikasi.</li>\n  <li><strong>Tanpa Menunggu Kompilasi Native:</strong> Kita tidak perlu melakukan build berkas APK/IPA yang memakan waktu di tahap eksplorasi desain awal.</li>\n</ul>\n\n<h4>Komponen Dasar Pembangun UI</h4>\n<p>Di React Native, elemen HTML standar seperti <code>&lt;div&gt;</code>, <code>&lt;span&gt;</code>, dan <code>&lt;button&gt;</code> TIDAK didukung. Kita wajib menggunakan komponen native yang disediakan oleh React Native:</p>\n<div class=\"grid-2-col my-4\">\n  <div class=\"card-feature\">\n    <h5><code>&lt;View&gt;</code></h5>\n    <p>Komponen kontainer paling mendasar yang setara dengan <code>&lt;div&gt;</code>. Digunakan untuk membungkus elemen, mengatur padding, margin, dan tata letak berbasis Flexbox.</p>\n  </div>\n  <div class=\"card-feature\">\n    <h5><code>&lt;Text&gt;</code></h5>\n    <p>Komponen untuk menampilkan teks. Di React Native, <em>setiap teks wajib dibungkus dalam tag Text</em>. Teks yang diletakkan langsung di dalam View akan menyebabkan error kompilasi.</p>\n  </div>\n  <div class=\"card-feature\">\n    <h5><code>&lt;Image&gt;</code></h5>\n    <p>Komponen untuk merender gambar lokal (via <code>require('./assets/logo.png')</code>) maupun gambar jaringan online (via properti <code>source={{ uri: 'https://...' }}</code>).</p>\n  </div>\n  <div class=\"card-feature\">\n    <h5><code>&lt;Pressable&gt;</code></h5>\n    <p>Komponen interaktif modern pengganti <em>TouchableOpacity</em> untuk menangani ketukan jari (<code>onPress</code>, <code>onLongPress</code>) dengan kontrol status sentuhan yang presisi.</p>\n  </div>\n</div>\n\n<h4>Penataan Gaya dengan StyleSheet</h4>\n<p>Alih-alih berkas CSS eksternal, styling di React Native ditulis menggunakan sintaksis JavaScript Object melalui <code>StyleSheet.create()</code>. Manfaatnya adalah validasi nama properti secara otomatis saat runtime dan optimasi alokasi memori ID style.</p>\n\n<div class=\"code-block-wrapper\">\n  <div class=\"code-header\">\n    <span>App.js — Contoh Halaman Utama PresidentKu</span>\n    <button class=\"btn-copy\" onclick=\"copyCode(this)\"><i class=\"fa-regular fa-copy\"></i> Salin</button>\n  </div>\n  <pre><code class=\"language-jsx\">import React from 'react';\nimport { View, Text, Image, Pressable, StyleSheet } from 'react-native';\n\nexport default function HomeScreen() {\n  return (\n    &lt;View style={styles.container}&gt;\n      {/* Header Halaman */}\n      &lt;View style={styles.header}&gt;\n        &lt;Text style={styles.appTitle}&gt;PRESIDENTKU&lt;/Text&gt;\n      &lt;/View&gt;\n\n      {/* Hero Visual Card */}\n      &lt;View style={styles.heroCard}&gt;\n        &lt;Image \n          source={{ uri: 'https://placehold.co/600x300/1e293b/white?text=Istana+Merdeka' }} \n          style={styles.heroImage} \n        /&gt;\n        &lt;Text style={styles.heroTitle}&gt;Bersama Membangun Indonesia&lt;/Text&gt;\n        &lt;Text style={styles.heroDesc}&gt;\n          Informasi, partisipasi, dan program strategis untuk masa depan yang lebih baik.\n        &lt;/Text&gt;\n        \n        {/* Tombol Aksi Utama */}\n        &lt;Pressable \n          style={({ pressed }) =&gt; [\n            styles.primaryButton,\n            pressed && styles.buttonPressed\n          ]}\n          onPress={() => alert('Membuka Program...')}\n        &gt;\n          &lt;Text style={styles.buttonText}&gt;Lihat Program &rarr;&lt;/Text&gt;\n        &lt;/Pressable&gt;\n      &lt;/View&gt;\n    &lt;/View&gt;\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    backgroundColor: '#f8fafc',\n    paddingTop: 48,\n    paddingHorizontal: 16,\n  },\n  header: {\n    paddingBottom: 16,\n    borderBottomWidth: 1,\n    borderBottomColor: '#e2e8f0',\n  },\n  appTitle: {\n    fontSize: 20,\n    fontWeight: '800',\n    color: '#0f172a',\n    letterSpacing: 1.2,\n  },\n  heroCard: {\n    backgroundColor: '#ffffff',\n    borderRadius: 16,\n    padding: 16,\n    marginTop: 20,\n    shadowColor: '#000',\n    shadowOffset: { width: 0, height: 4 },\n    shadowOpacity: 0.08,\n    shadowRadius: 12,\n    elevation: 3, // Khusus bayangan Android\n  },\n  heroImage: {\n    width: '100%',\n    height: 180,\n    borderRadius: 12,\n    marginBottom: 16,\n  },\n  heroTitle: {\n    fontSize: 22,\n    fontWeight: '700',\n    color: '#1e293b',\n    marginBottom: 8,\n  },\n  heroDesc: {\n    fontSize: 14,\n    color: '#64748b',\n    lineHeight: 20,\n    marginBottom: 20,\n  },\n  primaryButton: {\n    backgroundColor: '#eab308', // Kuning emas PresidentKu\n    paddingVertical: 14,\n    paddingHorizontal: 20,\n    borderRadius: 10,\n    alignItems: 'center',\n  },\n  buttonPressed: {\n    opacity: 0.8,\n  },\n  buttonText: {\n    color: '#0f172a',\n    fontWeight: '700',\n    fontSize: 15,\n  },\n});</code></pre>\n</div>\n      ",
        "deepDive": "Perhatikan properti <code>elevation</code> pada style kartu. Di React Native, properti bayangan CSS seperti <code>shadowColor</code>, <code>shadowOffset</code>, dan <code>shadowRadius</code> hanya bekerja di platform iOS. Untuk memunculkan bayangan nyata di platform Android, kita wajib menyertakan properti <code>elevation: 3</code> yang memanfaatkan rendering elevasi Material Design.",
        "summary": "React Native merender komponen native asli melalui sintaksis JSX. Komponen esensialnya adalah View, Text, Image, Pressable, dan StyleSheet. Teks wajib dibungkus Text, dan Expo Go memfasilitasi pengetesan cepat via QR code.",
        "pitfalls": "Menulis teks telanjang di dalam View tanpa tag Text (akan crash di Android/iOS), atau mencoba memakai elemen HTML web biasa seperti <div> atau <button>.",
        "examTips": "Pahami bahwa default arah susunan Flexbox di React Native adalah vertikal (column), bukan horizontal seperti di browser web."
      },
      {
        "id": "w2-layout-responsive",
        "title": "2.2 Layouting Flexbox & Desain Responsif Multi-Device",
        "analogy": "Flexbox seperti partisi laci pakaian elastis. Ketika Anda meletakkan celana dan baju, partisi tersebut bisa meregang atau menyusut secara otomatis bergantung pada seberapa lebar laci lemari yang Anda buka.",
        "content": "\n<h4>Struktur Halaman Minimal Mobile</h4>\n<p>Berdasarkan slide Task 01, setiap antarmuka halaman utama minimal wajib memiliki 6 elemen struktural:</p>\n<ol class=\"styled-numbered\">\n  <li><strong>Header:</strong> Memuat identitas aplikasi (\"PRESIDENTKU\") dan ikon navigasi/pencarian.</li>\n  <li><strong>Judul Halaman:</strong> Penanda konteks topik utama yang sedang dilihat pengguna.</li>\n  <li><strong>Informasi Utama:</strong> Ringkasan deskripsi atau pengantar layanan.</li>\n  <li><strong>Image / Visual:</strong> Representasi grafis atau fotografi penunjang daya tarik.</li>\n  <li><strong>Button / Action:</strong> Tombol aksi utama (Call to Action / CTA) yang mengarahkan alur pengguna.</li>\n  <li><strong>Content Section / Navigation:</strong> Bagian daftar fitur prioritas dan bilah navigasi bawah (bottom navigation).</li>\n</ol>\n\n<h4>Perbedaan Krusial Flexbox: Web vs React Native</h4>\n<div class=\"comparison-table-wrapper my-4\">\n  <table class=\"table-compare\">\n    <thead>\n      <tr>\n        <th>Fitur Flexbox</th>\n        <th>Web Browser (CSS)</th>\n        <th>React Native</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Default flexDirection</strong></td>\n        <td><code>row</code> (horizontal ke samping)</td>\n        <td><code>column</code> (vertikal ke bawah)</td>\n      </tr>\n      <tr>\n        <td><strong>Default flexShrink</strong></td>\n        <td><code>1</code> (otomatis mengecil)</td>\n        <td><code>0</code> (tidak mengecil secara default)</td>\n      </tr>\n      <tr>\n        <td><strong>Satuan Ukuran</strong></td>\n        <td>px, em, rem, %</td>\n        <td>Angka unit tanpa satuan (density-independent pixels)</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\n<h4>Mengapa UI Harus Responsif & Adaptif?</h4>\n<p>Dunia perangkat mobile sangat heterogen. Pengguna aplikasi PresidentKu bisa mengakses dari berbagai dimensi:</p>\n<ul class=\"styled-list\">\n  <li><strong>Layar Kecil (&asymp; 4 inci):</strong> Smartphone kompak (misal iPhone SE atau Android lama). Ruang vertikal sangat terbatas.</li>\n  <li><strong>Layar Normal (&asymp; 6 inci):</strong> Mayoritas smartphone modern pengguna harian.</li>\n  <li><strong>Layar Lebar (&asymp; 8 inci / Tablet):</strong> Ruang horizontal melimpah, tata letak kartu bisa ditampilkan dalam 2-3 kolom.</li>\n  <li><strong>Orientasi Layar:</strong> Perpindahan dinamis antara mode <em>Portrait</em> (tegak) dan <em>Landscape</em> (membentang).</li>\n</ul>\n\n<div class=\"callout callout-important\">\n  <h5><i class=\"fa-solid fa-clipboard-check\"></i> Checklist Uji Responsivitas (Task 02)</h5>\n  <ul class=\"styled-list mb-0\">\n    <li>&check; Tidak ada komponen yang meluber keluar dari batas layar (<em>no overflow cut-off</em>).</li>\n    <li>&check; Teks tidak boleh terpotong atau saling menumpuk.</li>\n    <li>&check; Tombol aksi tetap berada dalam jangkauan dan mudah ditekan.</li>\n    <li>&check; Jarak spasi (padding & margin) tetap proporsional dan nyaman dipandang.</li>\n    <li>&check; Hierarki informasi tetap jelas dan mudah dipahami.</li>\n  </ul>\n</div>\n      ",
        "deepDive": "Untuk menangani layar kecil tanpa memotong konten, selalu bungkus kontainer halaman dengan komponen <code>&lt;ScrollView&gt;</code> alih-alih <code>&lt;View&gt;</code> statis, khususnya jika halaman memuat form isian yang bisa terdorong ke atas oleh kemunculan keyboard virtual.",
        "summary": "Struktur halaman minimal memuat header, judul, info, visual, CTA, dan konten/navigasi. Flexbox di React Native memiliki default flexDirection: column. UI wajib diuji di layar 4\", 6\", 8\" tablet, serta mode portrait dan landscape.",
        "pitfalls": "Mengatur lebar komponen dengan nilai piksel kaku (misal `width: 380`), yang akan menyebabkan elemen meluber keluar layar pada smartphone kecil berdimensi 320-360px.",
        "examTips": "Ingat baik-baik bahwa di React Native, `flexDirection` secara default bernilai `column` (bukan `row`)."
      },
      {
        "id": "w2-accessibility",
        "title": "2.3 Inclusive Design & Accessibility (Ramah Disabilitas)",
        "analogy": "Membangun aplikasi tanpa fitur aksesibilitas seperti membangun gedung pelayanan publik megah yang pintunya hanya bisa diakses lewat tangga curam tanpa jalur kursi roda. Semua orang berhak menikmati layanan negara yang setara.",
        "content": "\n<p>Sebagai aplikasi layanan kenegaraan dan publik, <strong>PresidentKu</strong> dirancang untuk semua kalangan warga negara, termasuk lansia, pengguna dengan gangguan penglihatan, serta keterbatasan motorik halus. Inilah esensi dari <strong>Inclusive Design</strong>.</p>\n\n<h4>Empat Pilar Aksesibilitas Mobile</h4>\n<ol class=\"styled-numbered\">\n  <li><strong>Readable (Keterbacaan Teks):</strong> Tipografi jelas, ukuran font memadai, serta jarak antar baris (lineHeight) yang lega.</li>\n  <li><strong>Touchable (Kenyamanan Target Sentuh):</strong> Elemen interaktif harus memiliki ukuran fisik minimal <strong>44 &times; 44 dp (points)</strong> agar jari tangan orang dewasa tidak salah memencet tombol lain di sebelahnya.</li>\n  <li><strong>Contrast Ratio (Kontras Warna Memadai):</strong> Rasio kontras antara warna teks dan warna latar belakang wajib memenuhi standar WCAG (minimal 4.5:1 untuk teks normal). Hindari teks abu-abu muda di atas latar putih!</li>\n  <li><strong>Tidak Bergantung Warna Saja:</strong> Indikator status jangan hanya mengandalkan lingkaran warna merah/hijau. Selalu sertakan teks penjelas (misal: tulisan \"Aktif\" atau \"Nonaktif\") atau ikon representatif untuk membantu pengguna buta warna.</li>\n</ol>\n\n<h4>Properti Aksesibilitas di React Native</h4>\n<p>React Native menyediakan properti bawaan untuk berkomunikasi secara mulus dengan teknologi pembaca layar (<em>Screen Reader</em> seperti Google TalkBack di Android dan Apple VoiceOver di iOS):</p>\n\n<div class=\"code-block-wrapper\">\n  <div class=\"code-header\">\n    <span>Contoh Penerapan Accessibility Props</span>\n    <button class=\"btn-copy\" onclick=\"copyCode(this)\"><i class=\"fa-regular fa-copy\"></i> Salin</button>\n  </div>\n  <pre><code class=\"language-jsx\">&lt;Pressable\n  accessible={true}\n  accessibilityLabel=\"Buka halaman Program Prioritas Pemerintah\"\n  accessibilityRole=\"button\"\n  accessibilityHint=\"Menampilkan daftar program strategis beasiswa dan infrastruktur\"\n  style={styles.primaryButton}\n  onPress={handleOpenProgram}\n&gt;\n  &lt;Text style={styles.buttonText}&gt;Lihat Program &rarr;&lt;/Text&gt;\n&lt;/Pressable&gt;</code></pre>\n</div>\n\n<h4>Bedah Properti Accessibility</h4>\n<ul class=\"styled-list\">\n  <li><code>accessible={true}</code>: Menginstruksikan screen reader untuk memperlakukan elemen ini beserta anak-anaknya sebagai satu kesatuan objek interaktif tunggal (tidak dibaca terpisah-pisah per kata).</li>\n  <li><code>accessibilityLabel</code>: Teks deskriptif yang disuarakan oleh pembaca layar. Menggantikan pembacaan simbol panah \"&rarr;\" yang sering kali dibaca mesin secara rancu.</li>\n  <li><code>accessibilityRole</code>: Menjelaskan jenis elemen kepada pengguna tunanetra (contoh nilai: <code>\"button\"</code>, <code>\"header\"</code>, <code>\"link\"</code>, <code>\"image\"</code>). Pengguna langsung tahu bahwa elemen ini dapat diketuk.</li>\n  <li><code>accessibilityHint</code>: Panduan aksi tambahan yang menjelaskan apa dampak atau konsekuensi dari mengaktifkan elemen tersebut.</li>\n</ul>\n      ",
        "deepDive": "Gunakan properti <code>hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}</code> pada tombol kecil. Properti ini memperluas area sensitivitas sentuhan tanpa mengubah dimensi visual komponen di layar, sangat membantu memenuhi target sentuh 44x44 dp.",
        "summary": "Inclusive design memastikan aplikasi dapat digunakan semua orang. Empat pilar: Readable, Touchable (min 44x44 dp), Contrast memadai, dan info tidak hanya warna. Properti React Native: accessible, accessibilityLabel, accessibilityRole, accessibilityHint.",
        "pitfalls": "Membuat tombol ikon (misal ikon pencarian atau tutup modal) tanpa teks dan lupa memberikan properti `accessibilityLabel`. Akibatnya, screen reader hanya berbunyi 'Unlabeled button'.",
        "examTips": "Kuasai fungsi keempat atribut aksesibilitas: accessible, accessibilityLabel, accessibilityRole, dan accessibilityHint."
      },
      {
        "id": "w2-ai-prompting",
        "title": "2.4 Cara Menulis Prompt AI Coding yang Efektif",
        "analogy": "Memberi instruksi ke AI seperti memesan jas ke penjahit. Jika Anda hanya bilang 'Buatkan saya baju bagus', hasilnya belum tentu pas di badan. Jika Anda berikan ukuran lingkar dada, pilihan bahan katun wol, model jas dua kancing, warna navy blue, dan tenggat waktu 3 hari, jas yang jadi akan sempurna.",
        "content": "\n<p>Dalam alur sprint modern, kita memanfaatkan AI untuk mengakselerasi penulisan antarmuka. Agar hasil kode yang dihasilkan AI presisi dan tidak memerlukan refaktor berulang kali, gunakan struktur prompt 5 elemen:</p>\n\n<h4>Formula 5 Elemen Prompting Handal</h4>\n<ol class=\"styled-numbered\">\n  <li><strong>1. Peran (Role):</strong> Tentukan persona keahlian AI (misal: <em>\"Kamu adalah senior mobile engineer React Native...\"</em>).</li>\n  <li><strong>2. Tujuan (Goal):</strong> Jelaskan produk atau fitur spesifik yang ingin dicapai.</li>\n  <li><strong>3. Konteks (Context):</strong> Berikan latar belakang aplikasi (aplikasi PresidentKu, target audiens masyarakat umum).</li>\n  <li><strong>4. Spesifikasi (Requirements):</strong> Rincikan batasan teknologi, komponen yang boleh dipakai, tata letak, dan standar aksesibilitas.</li>\n  <li><strong>5. Bentuk Keluaran (Output Format):</strong> Tentukan format hasil akhir (misal: <em>\"Berikan satu berkas App.js lengkap tanpa pustaka eksternal yang tidak perlu\"</em>).</li>\n</ol>\n\n<div class=\"grid-2-col my-4\">\n  <div class=\"card-feature border-red\">\n    <h5 class=\"text-danger\"><i class=\"fa-solid fa-circle-xmark\"></i> Contoh Prompt Kurang Baik</h5>\n    <div class=\"code-flow bg-light p-2\">\"Buat aplikasi mobile tentang presiden.\"</div>\n    <p class=\"text-muted mt-2 text-sm\">Hasilnya sangat umum, styling seadanya, komponen tidak modular, dan rawan crash.</p>\n  </div>\n  <div class=\"card-feature border-green\">\n    <h5 class=\"text-success\"><i class=\"fa-solid fa-circle-check\"></i> Contoh Prompt Sangat Baik</h5>\n    <div class=\"code-flow bg-light p-2 text-sm\">\"Kamu adalah expert React Native. Buat halaman home untuk aplikasi PresidentKu menggunakan React Native dan Expo. Halaman ini menampilkan gambar presiden, judul, deskripsi singkat, dan 3 menu utama: Biografi, Program, dan Berita. Gunakan komponen modern, layout responsif, dan StyleSheet yang bersih. Berikan kode lengkap dalam satu file App.js.\"</div>\n    <p class=\"text-muted mt-2 text-sm\">Hasil kode langsung terstruktur rapi, siap dijalankan di Expo Go, dan minim error.</p>\n  </div>\n</div>\n      ",
        "deepDive": "Ingat: AI adalah asisten, keputusan akhir tetap di tangan developer. Selalu lakukan verifikasi mandiri sebelum melakukan <code>git commit</code>.",
        "summary": "Struktur prompt efektif memuat: Role, Goal, Context, Requirements, dan Output. Prompt yang spesifik menghemat waktu revisi dan menghasilkan kode antarmuka yang siap jalan.",
        "pitfalls": "Memberikan instruksi yang terlalu ambigu sehingga kode yang dihasilkan menggunakan dependensi yang tidak terpasang di proyek Expo.",
        "examTips": "Hafalkan 5 struktur prompt AI yang baik: Role, Goal, Context, Requirements, Output."
      }
    ],
    "glossary": [
      {
        "term": "Flexbox",
        "def": "Model tata letak CSS satu dimensi yang mengatur distribusi ruang dan perataan antar elemen di dalam kontainer."
      },
      {
        "term": "Density-Independent Pixel (dp)",
        "def": "Unit pengukuran fisik abstrak yang memungkinkan antarmuka tampil dalam ukuran fisik yang setara pada layar dengan kepadatan piksel berbeda."
      },
      {
        "term": "Touch Target",
        "def": "Area fisik layar yang dapat merespons sentuhan jari; ukuran standar minimum yang direkomendasikan adalah 44x44 dp."
      },
      {
        "term": "Screen Reader",
        "def": "Perangkat lunak bantu aksesibilitas yang mengubah teks dan antarmuka visual menjadi suara bicara atau output braille untuk pengguna tunanetra."
      }
    ],
    "summaryWeek": "Pekan 2 menuntaskan Sprint 01: pemahaman platform React Native dan ekosistem Expo Go, penguasaan komponen inti (View, Text, Image, Pressable, StyleSheet), tata letak Flexbox (default column), prinsip responsivitas multi-layar, penerapan standar aksesibilitas inklusif, serta teknik prompt engineering berbasis 5 elemen terstruktur.",
    "sprintChecklist": [
      "Project React Native berhasil dibuat dan berjalan di Expo Go",
      "Komponen dasar View, Text, Image, dan Pressable diterapkan dengan tepat",
      "Layout halaman minimal terbangun dengan Flexbox yang rapi",
      "Antarmuka diuji pada variasi layar kecil (~4\"), normal (~6\"), dan lebar (~8\" tablet)",
      "Antarmuka diuji pada rotasi portrait dan landscape tanpa elemen terpotong",
      "Aksesibilitas diterapkan: label jelas, role button, dan target sentuh >= 44dp",
      "Rasio kontras warna memenuhi standar keterbacaan",
      "Melakukan commit perubahan ke repositori Git dengan pesan yang deskriptif"
    ],
    "checkUnderstanding": [
      {
        "question": "Apakah nilai default dari properti `flexDirection` pada React Native?",
        "options": [
          "row (mendatar ke kanan)",
          "column (menurun ke bawah)",
          "row-reverse",
          "column-reverse",
          "wrap"
        ],
        "correct": 1,
        "explanation": "Di React Native, default arah penataan Flexbox adalah 'column' (vertikal), berbeda dengan CSS Web biasa yang bernilai default 'row'."
      },
      {
        "question": "Apa konsekuensi jika developer meletakkan teks string langsung di dalam komponen `<View>` tanpa membungkusnya dengan `<Text>`?",
        "options": [
          "Teks otomatis diubah menjadi tombol",
          "Teks ditampilkan dengan gaya default browser",
          "Aplikasi akan memicu runtime error / crash",
          "Teks otomatis disembunyikan oleh sistem",
          "Teks otomatis di-align ke tengah"
        ],
        "correct": 2,
        "explanation": "Di React Native, setiap string teks wajib berada di dalam komponen `<Text>`. Menaruh teks langsung di dalam `<View>` akan memicu error kompilasi/runtime."
      },
      {
        "question": "Berapa ukuran target sentuh (touch target) minimum yang direkomendasikan agar elemen interaktif mudah ditekan jari pengguna?",
        "options": [
          "20 x 20 dp",
          "32 x 32 dp",
          "44 x 44 dp",
          "64 x 64 dp",
          "100 x 100 dp"
        ],
        "correct": 2,
        "explanation": "Standar aksesibilitas mobile internasional (Apple HIG & Android Material Guidelines) menetapkan target sentuh minimal 44 x 44 dp (atau 48 x 48 dp pada Material)."
      },
      {
        "question": "Manakah struktur formula penulisan prompt AI coding yang diajarkan pada materi perkuliahan?",
        "options": [
          "Input, Process, Output, Storage, Control",
          "Role, Goal, Context, Requirements, Output",
          "Idea, Design, Code, Test, Deploy",
          "Subject, Predicate, Object, Adverb, Modifier",
          "Prompt, Model, Temperature, Token, Response"
        ],
        "correct": 1,
        "explanation": "Struktur prompt teruji pada materi perkuliahan adalah 5 elemen: Peran (Role), Tujuan (Goal), Konteks (Context), Spesifikasi/Batasan (Requirements), dan Bentuk Keluaran (Output)."
      }
    ]
  },
  {
    "id": 3,
    "weekNumber": 3,
    "title": "Authentication + Local Data Security",
    "subtitle": "Sprint 02 — Dari Mobile Interface Menjadi Aplikasi yang Aman & Terotentikasi",
    "sprint": "Sprint 02 - Keamanan Data Lokal & Autentikasi PresidentKu",
    "readTime": "22 menit",
    "topics": [
      "Autentikasi Pengguna & Kredensial",
      "Validasi Form vs Autentikasi",
      "Data Biasa vs Data Sensitif",
      "Expo SecureStore Terenkripsi",
      "Matriks Pengujian Keamanan 5 Skenario",
      "Autentikasi Biometrik"
    ],
    "subtopics": [
      {
        "id": "w3-auth-flow",
        "title": "3.1 Konsep Autentikasi & Alur Form Login",
        "analogy": "Autentikasi seperti pos pemeriksaan keamanan di gerbang istana. Petugas menanyakan kartu identitas (kredensial) Anda. Petugas memeriksa dulu apakah Anda membawa KTP (validasi input). Jika Anda tidak membawa KTP sama sekali, Anda langsung disuruh melengkapi berkas tanpa perlu mencocokkan wajah Anda ke buku daftar tamu penting istana.",
        "content": "\n<p class=\"lead\">Di Pekan 2, kita berhasil membuat antarmuka halaman beranda PresidentKu yang cantik. Namun, antarmuka yang baik belum cukup jika tidak aman. Di Sprint 02 ini, moto kita adalah: <strong>\"Dari UI yang baik &rarr; Menjadi UI yang aman\"</strong>.</p>\n\n<h4>Apa Itu Autentikasi (\"Who Are You?\")</h4>\n<p>Autentikasi adalah proses sistem memverifikasi kebenaran identitas pengguna yang ingin mengakses aplikasi. Konsep utamanya terdiri dari:</p>\n<ul class=\"styled-list\">\n  <li><strong>User:</strong> Entitas pengguna yang membuka aplikasi di smartphone.</li>\n  <li><strong>Register:</strong> Alur pendaftaran akun baru dengan mengisi data profil (nama lengkap, email, password/PIN).</li>\n  <li><strong>Login:</strong> Proses masuk ke aplikasi menggunakan identitas yang telah terdaftar sebelumnya.</li>\n  <li><strong>Credential (Kredensial):</strong> Informasi rahasia pembuktian diri, seperti kombinasi <em>email/username</em> dan <em>password/PIN</em>.</li>\n  <li><strong>Authentication State:</strong> Status keterbukaan akses pengguna di dalam aplikasi (misal: boolean <code>isAuthenticated = false</code> jika belum login, dan <code>true</code> jika sudah login).</li>\n</ul>\n\n<h4>Alur Komprehensif Autentikasi</h4>\n<div class=\"diagram-container text-center my-4\">\n  <svg viewBox=\"0 0 760 110\" class=\"svg-flowchart\">\n    <rect x=\"10\" y=\"30\" width=\"105\" height=\"50\" rx=\"8\" class=\"svg-node-blue\" />\n    <text x=\"62\" y=\"60\" class=\"svg-text\">1. USER</text>\n    \n    <path d=\"M 115 55 L 145 55\" class=\"svg-arrow\" marker-end=\"url(#arrow)\" />\n    \n    <rect x=\"150\" y=\"30\" width=\"125\" height=\"50\" rx=\"8\" class=\"svg-node-indigo\" />\n    <text x=\"212\" y=\"60\" class=\"svg-text\">2. CREDENTIAL</text>\n    \n    <path d=\"M 275 55 L 305 55\" class=\"svg-arrow\" marker-end=\"url(#arrow)\" />\n    \n    <rect x=\"310\" y=\"30\" width=\"130\" height=\"50\" rx=\"8\" class=\"svg-node-amber\" />\n    <text x=\"375\" y=\"60\" class=\"svg-text\">3. VALIDATION</text>\n    \n    <path d=\"M 440 55 L 470 55\" class=\"svg-arrow\" marker-end=\"url(#arrow)\" />\n    \n    <rect x=\"475\" y=\"30\" width=\"140\" height=\"50\" rx=\"8\" class=\"svg-node-purple\" />\n    <text x=\"545\" y=\"60\" class=\"svg-text\">4. AUTHENTICATED</text>\n    \n    <path d=\"M 615 55 L 645 55\" class=\"svg-arrow\" marker-end=\"url(#arrow)\" />\n    \n    <rect x=\"650\" y=\"30\" width=\"100\" height=\"50\" rx=\"8\" class=\"svg-node-emerald\" />\n    <text x=\"700\" y=\"60\" class=\"svg-text\">5. HOME APP</text>\n  </svg>\n</div>\n\n<h4>Kenapa Ada Validasi Sebelum Autentikasi?</h4>\n<p>Banyak developer pemula langsung mencocokkan kredensial tanpa memeriksa kelengkapan isian. <strong>Validasi input wajib dilakukan sebelum autentikasi</strong> karena 3 alasan krusial:</p>\n<ol class=\"styled-numbered\">\n  <li><strong>Mencegah Error Runtime:</strong> Menghindari pengiriman nilai <code>undefined</code> atau string kosong ke fungsi pencocokan data atau API server.</li>\n  <li><strong>Meningkatkan Efisiensi & Kecepatan:</strong> Jika input kosong, aplikasi langsung memberi tahu pengguna seketika di sisi client tanpa perlu membuang kuota data dan waktu untuk request jaringan ke server.</li>\n  <li><strong>Umpan Balik (Feedback) yang Ramah Pengguna:</strong> Pengguna langsung paham kolom mana yang lupa diisi (misal: \"Email dan password wajib diisi\").</li>\n</ol>\n\n<div class=\"code-block-wrapper\">\n  <div class=\"code-header\">\n    <span>LoginScreen.js — Implementasi Logika handleLogin Lengkap</span>\n    <button class=\"btn-copy\" onclick=\"copyCode(this)\"><i class=\"fa-regular fa-copy\"></i> Salin</button>\n  </div>\n  <pre><code class=\"language-jsx\">import React, { useState } from 'react';\nimport { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';\n\nexport default function LoginScreen({ onLoginSuccess }) {\n  const [email, setEmail] = useState('');\n  const [password, setPassword] = useState('');\n  const [showPassword, setShowPassword] = useState(false);\n  const [errorMessage, setErrorMessage] = useState('');\n\n  // Contoh data kredensial terdaftar (untuk latihan Sprint 02)\n  const registeredUser = {\n    email: 'warga@presidentku.id',\n    password: 'Password123!',\n  };\n\n  const handleLogin = () => {\n    // 1. VALIDASI INPUT TERLEBIH DAHULU\n    if (!email.trim() || !password.trim()) {\n      setErrorMessage('Email dan password wajib diisi');\n      return; // Berhenti seketika, jangan lanjutkan autentikasi\n    }\n\n    // 2. PENGECEKAN KREDENSIAL (AUTHENTICATION)\n    if (email === registeredUser.email && password === registeredUser.password) {\n      setErrorMessage('');\n      onLoginSuccess(true); // Status: Authenticated -> Masuk ke Beranda\n    } else {\n      // Pesan error aman: Jangan spesifikkan apakah email atau password yang salah!\n      setErrorMessage('Email atau password tidak valid');\n    }\n  };\n\n  return (\n    &lt;View style={styles.formContainer}&gt;\n      &lt;Text style={styles.label}&gt;Email Warga&lt;/Text&gt;\n      &lt;TextInput\n        style={styles.input}\n        placeholder=\"nama@email.com\"\n        value={email}\n        onChangeText={setEmail}\n        autoCapitalize=\"none\"\n        keyboardType=\"email-address\"\n        accessible={true}\n        accessibilityLabel=\"Kolom isian alamat email\"\n      /&gt;\n\n      &lt;Text style={styles.label}&gt;Password Akun&lt;/Text&gt;\n      &lt;View style={styles.passwordWrapper}&gt;\n        &lt;TextInput\n          style={styles.inputFlex}\n          placeholder=\"Masukkan password\"\n          value={password}\n          onChangeText={setPassword}\n          secureTextEntry={!showPassword} // Menyembunyikan password\n          accessible={true}\n          accessibilityLabel=\"Kolom isian kata sandi\"\n        /&gt;\n        &lt;Pressable \n          onPress={() => setShowPassword(!showPassword)}\n          style={styles.eyeButton}\n          accessibilityLabel=\"Tombol lihat atau sembunyikan kata sandi\"\n        &gt;\n          &lt;Text&gt;{showPassword ? '👁️' : '🔒'}&lt;/Text&gt;\n        &lt;/Pressable&gt;\n      &lt;/View&gt;\n\n      {/* Tampilan Pesan Error yang Jelas */}\n      {errorMessage ? (\n        &lt;Text style={styles.errorText}&gt;{errorMessage}&lt;/Text&gt;\n      ) : null}\n\n      &lt;Pressable \n        style={styles.submitButton}\n        onPress={handleLogin}\n        accessibilityRole=\"button\"\n        accessibilityLabel=\"Tombol Masuk ke Aplikasi PresidentKu\"\n      &gt;\n        &lt;Text style={styles.submitText}&gt;Masuk ke Akun&lt;/Text&gt;\n      &lt;/Pressable&gt;\n    &lt;/View&gt;\n  );\n}</code></pre>\n</div>\n\n<div class=\"callout callout-deepdive\">\n  <h5><i class=\"fa-solid fa-graduation-cap\"></i> Pendalaman: Pemeriksaan Kredensial di Client vs Server</h5>\n  <p>Pemeriksaan kredensial langsung di kode JavaScript (seperti <code>registeredUser</code> di atas) <strong>hanya digunakan untuk keperluan latihan praktikum mandiri Sprint 02</strong>. Di aplikasi nyata skala produksi, kode client tidak boleh menyimpan daftar password pengguna! Verifikasi kredensial wajib dilakukan oleh <em>Backend Server</em> yang aman melalui panggilan REST API terenkripsi HTTPS (yang akan kita pelajari di Pekan 4 dan 5).</p>\n</div>\n      ",
        "deepDive": "Perhatikan pemilihan kata pada pesan error. Pesan seperti \"Email tidak terdaftar\" atau \"Password salah untuk email ini\" adalah celah keamanan <em>User Enumeration</em>. Penyerang bisa memanfaatkan respons ini untuk menebak daftar email warga yang terdaftar. Gunakan selalu pesan netral: \"Email atau password tidak valid\".",
        "summary": "Autentikasi memverifikasi identitas pengguna. Selalu lakukan validasi input sebelum pengecekan kredensial. Password wajib dilindungi properti secureTextEntry, dan pesan error dilarang membocorkan data sensitif.",
        "pitfalls": "Langsung mengecek kredensial tanpa validasi form kosong, menampilkan password secara terbuka dalam teks biasa (plaintext), atau menampilkan pesan error yang memberitahu peretas bahwa email korban valid.",
        "examTips": "Pahami urutan alur autentikasi dan alasan mendasar kenapa validasi form harus dijalankan sebelum autentikasi kredensial."
      },
      {
        "id": "w3-secure-storage",
        "title": "3.2 Manajemen Data: Normal Storage vs Secure Storage",
        "analogy": "Menyimpan preferensi tema gelap di AsyncStorage seperti menaruh stiker warna di pintu kulkas Anda: siapa saja yang lewat boleh melihatnya. Menyimpan token autentikasi di SecureStore seperti menyimpan sertifikat rumah dan kunci brankas di dalam kotak besi berpengunci kombinasi digital di kamar utama.",
        "content": "\n<p>Dalam aplikasi mobile, setiap data memiliki derajat risiko yang berbeda. Kesalahan fatal pengembang pemula adalah menyimpan seluruh informasi pengguna ke tempat penyimpanan yang sama.</p>\n\n<div class=\"comparison-table-wrapper my-4\">\n  <table class=\"table-compare\">\n    <thead>\n      <tr>\n        <th>Kategori Data</th>\n        <th>Contoh di PresidentKu</th>\n        <th>Tempat Penyimpanan Tepat</th>\n        <th>Tingkat Keamanan</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Normal Data (Data Biasa)</strong></td>\n        <td>Preferensi tema (gelap/terang), pilihan bahasa (ID/EN), ukuran teks, status onboarding</td>\n        <td><strong>Local Storage Biasa</strong><br/>(misal: <em>AsyncStorage</em>)</td>\n        <td>Teks polos (plaintext). Aman untuk data estetika yang tidak membahayakan privasi.</td>\n      </tr>\n      <tr>\n        <td><strong>Sensitive Data (Data Sensitif)</strong></td>\n        <td>Authentication token (JWT), Session ID, Kredensial rahasia, PIN enkripsi warga</td>\n        <td><strong>Secure Storage Terenkripsi</strong><br/>(Expo SecureStore / Keystore)</td>\n        <td>Terenkripsi secara hardware di sistem operasi (iOS Keychain / Android Keystore).</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\n<h4>Mengapa AsyncStorage Berbahaya untuk Token & Password?</h4>\n<p>Di Android, berkas AsyncStorage disimpan dalam format XML atau SQLite tanpa enkripsi di direktori aplikasi. Pada perangkat Android yang telah di-<em>root</em> atau melalui backup debug adb, penyerang dapat menyalin berkas tersebut dan membaca token login Anda secara transparan. Jika token dicuri, penyerang dapat mengambil alih akun pengguna seutuhnya.</p>\n\n<h4>Implementasi Expo SecureStore</h4>\n<p>Library <code>expo-secure-store</code> memanfaatkan modul keamanan bawaan perangkat keras sistem operasi:</p>\n<ul class=\"styled-list\">\n  <li>Di <strong>Android</strong>: Data dienkripsi menggunakan AES-256 dan kunci enkripsinya disimpan di <em>Android Keystore</em>.</li>\n  <li>Di <strong>iOS</strong>: Data disimpan aman di dalam <em>Keychain Services</em> berstandar keamanan Apple.</li>\n</ul>\n\n<div class=\"code-block-wrapper\">\n  <div class=\"code-header\">\n    <span>Contoh Operasi CRUD Expo SecureStore</span>\n    <button class=\"btn-copy\" onclick=\"copyCode(this)\"><i class=\"fa-regular fa-copy\"></i> Salin</button>\n  </div>\n  <pre><code class=\"language-javascript\">import * as SecureStore from 'expo-secure-store';\n\n// 1. MENYIMPAN DATA SENSITIF (setItemAsync)\n// Dijalankan saat pengguna berhasil login\nexport async function saveAuthToken(token) {\n  try {\n    await SecureStore.setItemAsync('auth_token', token);\n    console.log('Token autentikasi berhasil disimpan aman!');\n  } catch (error) {\n    console.error('Gagal menyimpan token ke SecureStore:', error);\n  }\n}\n\n// 2. MEMBACA DATA SENSITIF (getItemAsync)\n// Dijalankan saat aplikasi baru dibuka untuk cek status session\nexport async function getAuthToken() {\n  try {\n    const token = await SecureStore.getItemAsync('auth_token');\n    return token; // Mengembalikan string token atau null jika belum login\n  } catch (error) {\n    console.error('Gagal membaca token:', error);\n    return null;\n  }\n}\n\n// 3. MENGHAPUS DATA SENSITIF SAAT LOGOUT (deleteItemAsync)\n// Dijalankan saat pengguna menekan tombol \"Keluar Akun\"\nexport async function clearAuthSession() {\n  try {\n    await SecureStore.deleteItemAsync('auth_token');\n    console.log('Session berhasil dihapus, logout aman!');\n  } catch (error) {\n    console.error('Gagal menghapus token session:', error);\n  }\n}</code></pre>\n</div>\n      ",
        "deepDive": "Expo SecureStore memiliki batasan ukuran data: nilai yang disimpan maksimal 2048 bytes (2 KB). Ini sangat ideal untuk token JWT, access token, dan kata sandi sementara, namun <em>tidak dirancang</em> untuk menyimpan basis data lokal yang besar. Jika membutuhkan basis data terenkripsi besar, gunakan SQLCipher.",
        "summary": "Data biasa (tema, bahasa) disimpan di Local Storage biasa. Data sensitif (token, session, PIN) WAJIB disimpan di Secure Storage (Expo SecureStore) yang terenkripsi hardware. Operasi utamanya: setItemAsync, getItemAsync, deleteItemAsync.",
        "pitfalls": "Menyimpan authentication token di AsyncStorage demi kemudahan koding, atau lupa memanggil `deleteItemAsync` saat pengguna menekan tombol Logout.",
        "examTips": "Ketahui pemetaan data: tema/bahasa -> Local Storage biasa; auth token/PIN -> SecureStore. Hafalkan 3 fungsi Expo SecureStore: setItemAsync, getItemAsync, dan deleteItemAsync."
      },
      {
        "id": "w3-security-validation",
        "title": "3.3 Security Validation & Matriks Pengujian 5 Skenario",
        "analogy": "Keamanan seperti sistem rem mobil. Anda tidak boleh berasumsi rem mobil Anda berfungsi hanya karena pedalnya bisa diinjak. Anda wajib mengujinya di jalan menanjak, jalan licin, dan saat pengereman mendadak. 'Test, Don't Assume!'.",
        "content": "\n<h4>Prinsip: \"Test, Don't Assume!\"</h4>\n<p>Keamanan perangkat lunak mobile tidak pernah selesai hanya dengan menulis baris implementasi. Kita wajib membuktikan keandalannya melalui pengujian skenario terstruktur.</p>\n\n<div class=\"diagram-container text-center my-4\">\n  <svg viewBox=\"0 0 650 80\" class=\"svg-flowchart\">\n    <rect x=\"10\" y=\"20\" width=\"105\" height=\"40\" rx=\"6\" class=\"svg-node-blue\" />\n    <text x=\"62\" y=\"45\" class=\"svg-text\">IMPLEMENT</text>\n    \n    <path d=\"M 115 40 L 145 40\" class=\"svg-arrow\" marker-end=\"url(#arrow)\" />\n    \n    <rect x=\"150\" y=\"20\" width=\"80\" height=\"40\" rx=\"6\" class=\"svg-node-indigo\" />\n    <text x=\"190\" y=\"45\" class=\"svg-text\">TEST</text>\n    \n    <path d=\"M 230 40 L 260 40\" class=\"svg-arrow\" marker-end=\"url(#arrow)\" />\n    \n    <rect x=\"265\" y=\"20\" width=\"80\" height=\"40\" rx=\"6\" class=\"svg-node-pink\" />\n    <text x=\"305\" y=\"45\" class=\"svg-text\">FIND</text>\n    \n    <path d=\"M 345 40 L 375 40\" class=\"svg-arrow\" marker-end=\"url(#arrow)\" />\n    \n    <rect x=\"380\" y=\"20\" width=\"75\" height=\"40\" rx=\"6\" class=\"svg-node-amber\" />\n    <text x=\"417\" y=\"45\" class=\"svg-text\">FIX</text>\n    \n    <path d=\"M 455 40 L 485 40\" class=\"svg-arrow\" marker-end=\"url(#arrow)\" />\n    \n    <rect x=\"490\" y=\"20\" width=\"95\" height=\"40\" rx=\"6\" class=\"svg-node-emerald\" />\n    <text x=\"537\" y=\"45\" class=\"svg-text\">RETEST</text>\n  </svg>\n</div>\n\n<h4>Matriks 5 Skenario Uji Keamanan (Security Test Matrix)</h4>\n<div class=\"comparison-table-wrapper my-4\">\n  <table class=\"table-compare\">\n    <thead>\n      <tr>\n        <th>No</th>\n        <th>Skenario Pengujian</th>\n        <th>Langkah Singkat Pengujian</th>\n        <th>Hasil yang Diharapkan (Expected)</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1</strong></td>\n        <td><strong>Credential Benar</strong></td>\n        <td>Login dengan email dan password yang valid.</td>\n        <td><span class=\"badge-success\">Login Berhasil</span> &rarr; Pengguna masuk ke halaman beranda.</td>\n      </tr>\n      <tr>\n        <td><strong>2</strong></td>\n        <td><strong>Credential Salah</strong></td>\n        <td>Login dengan password acak/salah.</td>\n        <td><span class=\"badge-danger\">Login Ditolak</span> &rarr; Tampilkan pesan error aman tanpa membocorkan info.</td>\n      </tr>\n      <tr>\n        <td><strong>3</strong></td>\n        <td><strong>Input Kosong</strong></td>\n        <td>Tekan tombol masuk tanpa mengisi email/password.</td>\n        <td><span class=\"badge-warning\">Validation Error</span> &rarr; Muncul pesan validasi seketika, proses auth ditahan.</td>\n      </tr>\n      <tr>\n        <td><strong>4</strong></td>\n        <td><strong>Logout</strong></td>\n        <td>Pengguna menekan tombol Logout di profil.</td>\n        <td><span class=\"badge-info\">Session Cleared</span> &rarr; Token dihapus dari SecureStore, kembali ke login.</td>\n      </tr>\n      <tr>\n        <td><strong>5</strong></td>\n        <td><strong>Sensitive Data</strong></td>\n        <td>Cek penyimpanan lokal saat session aktif.</td>\n        <td><span class=\"badge-success\">Protected</span> &rarr; Token tersimpan di SecureStore, bukan di storage biasa.</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\n<div class=\"code-block-wrapper\">\n  <div class=\"code-header\">\n    <span>testCases.js — Struktur Kasus Uji Otomasi Sederhana</span>\n    <button class=\"btn-copy\" onclick=\"copyCode(this)\"><i class=\"fa-regular fa-copy\"></i> Salin</button>\n  </div>\n  <pre><code class=\"language-javascript\">export const testCases = [\n  {\n    name: \"Valid credential\",\n    action: \"Login dengan akun benar\",\n    expected: \"LOGIN_SUCCESS\",\n  },\n  {\n    name: \"Wrong credential\",\n    action: \"Login dengan password salah\",\n    expected: \"LOGIN_FAILED\",\n  },\n  {\n    name: \"Empty input\",\n    action: \"Login saat field kosong\",\n    expected: \"VALIDATION_ERROR\",\n  },\n  {\n    name: \"Logout\",\n    action: \"Tekan tombol logout\",\n    expected: \"SESSION_CLEARED\",\n  },\n  {\n    name: \"Sensitive data\",\n    action: \"Periksa media penyimpanan token\",\n    expected: \"PROTECTED\",\n  },\n];</code></pre>\n</div>\n\n<div class=\"callout callout-deepdive\">\n  <h5><i class=\"fa-solid fa-fingerprint\"></i> Pendalaman: Autentikasi Biometrik (Fingerprint & Face ID)</h5>\n  <p>Pada slide antarmuka login PresidentKu, terdapat opsi login menggunakan sidik jari (Biometrik) dan Face ID. Dalam ekosistem Expo, fitur ini diintegrasikan melalui pustaka <code>expo-local-authentication</code>. Pustaka ini memanggil sensor biometrik bawaan sistem operasi melalui alur:</p>\n  <ol class=\"styled-numbered mb-0\">\n    <li><code>hasHardwareAsync()</code>: Memeriksa apakah perangkat fisik ponsel memiliki sensor biometrik.</li>\n    <li><code>isEnrolledAsync()</code>: Memastikan pengguna sudah merekam sidik jari/wajah di pengaturan HP.</li>\n    <li><code>authenticateAsync()</code>: Menampilkan dialog pemindaian sidik jari native bawaan OS. Jika pemindaian berhasil, aplikasi mengambil token dari SecureStore dan membuka sesi aplikasi.</li>\n  </ol>\n</div>\n      ",
        "deepDive": "Perhatikan bahwa autentikasi biometrik tidak menggantikan token sesi. Biometrik hanyalah \"kunci pintu gerbang lokal\" untuk membuka brankas SecureStore tanpa perlu mengetik ulang kata sandi yang panjang setiap kali membuka aplikasi.",
        "summary": "Keamanan wajib divalidasi lewat siklus: Implement -> Test -> Find -> Fix -> Retest. Lima skenario utama: kredensial benar, salah, input kosong, logout, dan perlindungan data sensitif. Biometrik bertindak sebagai gerbang lokal menuju SecureStore.",
        "pitfalls": "Hanya menguji skenario sukses (happy path) dan tidak pernah menguji saat pengguna memasukkan input kosong atau mematikan izin.",
        "examTips": "Hafalkan 5 skenario dalam Security Test Matrix (Credential benar, Credential salah, Input kosong, Logout, Sensitive data terproteksi)."
      }
    ],
    "glossary": [
      {
        "term": "Credential",
        "def": "Informasi rahasia bukti kepemilikan akun, biasanya berupa pasangan username/email dan password/PIN."
      },
      {
        "term": "SecureStore",
        "def": "Modul penyimpanan data terenkripsi di Expo yang terintegrasi dengan Keystore Android dan Keychain iOS."
      },
      {
        "term": "User Enumeration",
        "def": "Celah keamanan di mana sistem memberi tahu penyerang apakah suatu email/username sudah terdaftar di basis data."
      },
      {
        "term": "Biometric Auth",
        "def": "Mekanisme pembuktian identitas menggunakan karakteristik fisik unik (sidik jari atau pemindaian wajah)."
      }
    ],
    "summaryWeek": "Pekan 3 menyelesaikan Sprint 02: implementasi alur login/register, prinsip validasi input sebelum autentikasi, penyembunyian password via secureTextEntry, pemisahan data biasa (AsyncStorage) dan sensitif (Expo SecureStore), pembuktian keamanan melalui Matriks 5 Skenario Uji, serta pengenalan autentikasi biometrik terproteksi.",
    "sprintChecklist": [
      "Project React Native berjalan di Expo Go tanpa error",
      "Halaman Login dan Register berhasil dibuat",
      "Validasi input kosong diterapkan sebelum pengecekan kredensial",
      "Password/PIN dilindungi dengan secureTextEntry (tidak teks polos)",
      "Pesan error tidak membocorkan informasi sensitif pengguna",
      "Data sensitif (token autentikasi) disimpan menggunakan Expo SecureStore",
      "Fitur Logout berhasil menghapus session dari SecureStore (deleteItemAsync)",
      "Kelima skenario Security Test Matrix telah diuji dan lolos verifikasi",
      "Standar aksesibilitas dari Pekan 2 tetap dipertahankan pada form login"
    ],
    "checkUnderstanding": [
      {
        "question": "Mengapa validasi form input harus dilakukan SEBELUM proses pengecekan autentikasi kredensial?",
        "options": [
          "Agar tampilan antarmuka memiliki warna yang lebih menarik",
          "Mencegah error pengiriman data kosong, menghemat sumber daya, dan memberi umpan balik instan ke pengguna",
          "Karena library React Native mewajibkan validasi sebelum fungsi return",
          "Agar data password otomatis dienkripsi oleh compiler Babel",
          "Untuk memenuhi syarat kompilasi berkas AndroidManifest.xml"
        ],
        "correct": 1,
        "explanation": "Validasi sebelum autentikasi mencegah pengiriman nilai kosong ke server/fungsi, menghemat kuota jaringan dan waktu komputasi, serta memberikan pesan yang jelas kepada pengguna kolom mana yang belum diisi."
      },
      {
        "question": "Di manakah tempat yang tepat dan aman untuk menyimpan authentication token (JWT) pada aplikasi React Native?",
        "options": [
          "AsyncStorage dalam format JSON biasa",
          "Global variable di berkas App.js",
          "Expo SecureStore (terenkripsi hardware Keystore/Keychain)",
          "Teks file lokal berformat .txt di folder assets",
          "Cookie biasa tanpa atribut httpOnly"
        ],
        "correct": 2,
        "explanation": "Authentication token adalah data sensitif tingkat tinggi. Wajib disimpan di tempat terenkripsi seperti Expo SecureStore yang terhubung dengan hardware Keystore (Android) atau Keychain (iOS)."
      },
      {
        "question": "Fungsi Expo SecureStore manakah yang wajib dipanggil saat pengguna menekan tombol Logout?",
        "options": [
          "SecureStore.clearAll()",
          "SecureStore.deleteItemAsync('auth_token')",
          "SecureStore.setItemAsync('auth_token', '')",
          "SecureStore.removeItem('auth_token')",
          "SecureStore.destroySession()"
        ],
        "correct": 1,
        "explanation": "Untuk menghapus kunci data sensitif secara aman dari SecureStore pada Expo, gunakan method asinkron `SecureStore.deleteItemAsync(key)`."
      },
      {
        "question": "Apa tujuan utama dari prinsip keamanan 'Test, Don't Assume' dalam pengembangan aplikasi mobile?",
        "options": [
          "Mengurangi jumlah commit di repositori GitHub",
          "Memastikan mekanisme keamanan benar-benar terbukti bekerja melalui skenario nyata, bukan sekadar asumsi kode telah ditulis",
          "Menghilangkan kebutuhan akan backend server",
          "Membuat ukuran aplikasi menjadi jauh lebih kecil",
          "Mempercepat proses download aplikasi di Google Play Store"
        ],
        "correct": 1,
        "explanation": "'Test, Don't Assume' menekankan bahwa fitur keamanan harus diuji dengan skenario ekstrem (input kosong, credential salah, data storage inspection) untuk membuktikan sistem tahan jebol."
      }
    ]
  },
  {
    "id": 4,
    "weekNumber": 4,
    "title": "Data Modeling + RESTful API",
    "subtitle": "Sprint 03 — From Local App to Connected Mobile App",
    "sprint": "Sprint 03 - Integrasi REST API & Pemodelan Data PresidentKu",
    "readTime": "25 menit",
    "topics": [
      "Arsitektur Client-Server",
      "Prinsip RESTful API & HTTP Methods",
      "Struktur Request & Response",
      "Format JSON & Parsing",
      "Data Modeling & DTO Transformation",
      "Fetch API vs Axios",
      "Dynamic State Rendering"
    ],
    "subtopics": [
      {
        "id": "w4-client-server-rest",
        "title": "4.1 Arsitektur Client-Server & Prinsip RESTful API",
        "analogy": "Arsitektur client-server seperti hubungan pelanggan dan koki restoran melalui pelayan. Anda (Mobile App / Client) duduk di meja melihat daftar menu. Anda memesan makanan lewat pelayan (REST API). Pelayan membawa nota pesanan (HTTP Request) ke dapur koki (Server). Koki memasak makanan lalu pelayan menyajikan hidangan (HTTP Response JSON) ke meja Anda.",
        "content": "\n<p class=\"lead\">Pada Pekan 2 dan 3, data aplikasi PresidentKu masih bersifat statis (<em>hard-coded</em> di dalam kode JavaScript). Mulai Pekan 4, aplikasi kita bertransformasi menjadi <strong>Connected Mobile App</strong> yang terhubung ke jaringan internet dan pusat data pemerintah secara dinamis.</p>\n\n<h4>Mengapa Aplikasi Mobile Tidak Boleh Menyimpan Semua Data Sendiri?</h4>\n<ul class=\"styled-list\">\n  <li><strong>Ukuran Memori Terbatas:</strong> Jika seluruh daftar berita, program bantuan, dan data kependudukan disimpan di HP, memori ponsel pengguna akan cepat penuh.</li>\n  <li><strong>Konsistensi Real-Time:</strong> Ketika ada pembaruan program prioritas dari presiden, data di HP pengguna harus ter-update seketika tanpa mengharuskan pengguna mendownload ulang aplikasi di Play Store.</li>\n  <li><strong>Keamanan Data:</strong> Basis data pusat terlindungi di balik firewall server, bukan tersebar telanjang di ribuan ponsel pengguna.</li>\n</ul>\n\n<h4>Komponen Arsitektur Client-Server</h4>\n<div class=\"diagram-container text-center my-4\">\n  <svg viewBox=\"0 0 760 110\" class=\"svg-flowchart\">\n    <rect x=\"10\" y=\"25\" width=\"130\" height=\"60\" rx=\"8\" class=\"svg-node-blue\" />\n    <text x=\"75\" y=\"52\" class=\"svg-text\">MOBILE CLIENT</text>\n    <text x=\"75\" y=\"70\" class=\"svg-subtext\">(PresidentKu App)</text>\n    \n    <path d=\"M 145 45 L 295 45\" class=\"svg-arrow\" marker-end=\"url(#arrow)\" />\n    <text x=\"220\" y=\"38\" class=\"svg-label\">HTTP Request</text>\n    \n    <path d=\"M 295 70 L 145 70\" class=\"svg-arrow-back\" marker-end=\"url(#arrow)\" />\n    <text x=\"220\" y=\"88\" class=\"svg-label\">JSON Response</text>\n    \n    <rect x=\"300\" y=\"25\" width=\"130\" height=\"60\" rx=\"8\" class=\"svg-node-indigo\" />\n    <text x=\"365\" y=\"52\" class=\"svg-text\">REST API</text>\n    <text x=\"365\" y=\"70\" class=\"svg-subtext\">(Penghubung Layanan)</text>\n    \n    <path d=\"M 435 55 L 615 55\" class=\"svg-arrow\" marker-end=\"url(#arrow)\" />\n    \n    <rect x=\"620\" y=\"25\" width=\"130\" height=\"60\" rx=\"8\" class=\"svg-node-purple\" />\n    <text x=\"685\" y=\"52\" class=\"svg-text\">REST SERVER</text>\n    <text x=\"685\" y=\"70\" class=\"svg-subtext\">(Database Provider)</text>\n  </svg>\n</div>\n\n<h4>Konsep Dasar RESTful API</h4>\n<p><strong>REST (Representational State Transfer)</strong> adalah gaya arsitektur standar untuk merancang antarmuka komunikasi berbasis web yang ringan dan terstruktur.</p>\n<ul class=\"styled-list\">\n  <li><strong>Resource:</strong> Entitas atau data yang disediakan oleh API (misalnya: <code>/programs</code> untuk data program prioritas, <code>/berita</code> untuk warta nasional).</li>\n  <li><strong>Endpoint:</strong> URL spesifik tempat resource dapat diakses (misal: <code>https://api.presidentku.id/programs</code>).</li>\n  <li><strong>HTTP Method (Kata Kerja Aksi):</strong> Operasi yang ingin dilakukan terhadap resource:</li>\n</ul>\n\n<div class=\"comparison-table-wrapper my-4\">\n  <table class=\"table-compare\">\n    <thead>\n      <tr>\n        <th>HTTP Method</th>\n        <th>Fungsi Operasi</th>\n        <th>Contoh di PresidentKu</th>\n        <th>Ada Request Body?</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong class=\"text-success\">GET</strong></td>\n        <td>Mengambil data dari server</td>\n        <td><code>GET /programs</code> (Ambil semua program)</td>\n        <td>Tidak (kosong)</td>\n      </tr>\n      <tr>\n        <td><strong class=\"text-primary\">POST</strong></td>\n        <td>Membuat atau mengirim data baru</td>\n        <td><code>POST /aspirasi</code> (Kirim aspirasi warga)</td>\n        <td>Ya (berisi payload JSON)</td>\n      </tr>\n      <tr>\n        <td><strong class=\"text-warning\">PUT / PATCH</strong></td>\n        <td>Mengubah data yang sudah ada</td>\n        <td><code>PUT /programs/1</code> (Ubah data program id 1)</td>\n        <td>Ya (data pembaruan)</td>\n      </tr>\n      <tr>\n        <td><strong class=\"text-danger\">DELETE</strong></td>\n        <td>Menghapus data di server</td>\n        <td><code>DELETE /aspirasi/5</code> (Hapus aspirasi)</td>\n        <td>Biasanya tidak</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n      ",
        "deepDive": "Perbedaan <code>PUT</code> vs <code>PATCH</code>: PUT menggantikan keseluruhan objek data di server (replace full resource), sedangkan PATCH hanya memperbarui bagian atau field tertentu dari objek tanpa menimpa atribut lainnya.",
        "summary": "Arsitektur client-server memisahkan aplikasi mobile (client) dari penyedia data (server) lewat perantara REST API. Endpoint menunjukkan alamat resource (/programs), sedangkan HTTP Method (GET, POST, PUT, DELETE) menentukan aksi operasinya.",
        "pitfalls": "Menggunakan method GET untuk mengirim data sensitif seperti password di query URL.",
        "examTips": "Pahami pemetaan 4 HTTP Method utama: GET (ambil), POST (buat baru), PUT/PATCH (ubah), dan DELETE (hapus)."
      },
      {
        "id": "w4-request-response-json",
        "title": "4.2 Anatomi HTTP Request, Response & Parsing JSON",
        "analogy": "HTTP Request seperti surat pos formal. Ada alamat tujuan (URL), ada perangko dan jenis pengiriman (Header), ada tulisan jenis surat (Method), dan ada isi pesan di dalam amplop (Body). Ketika surat sampai, balasan datang beserta stempel status (Status Code 200 OK).",
        "content": "\n<h4>Anatomi HTTP Request & Response</h4>\n<div class=\"grid-2-col my-4\">\n  <div class=\"code-block-wrapper\">\n    <div class=\"code-header\"><span>Contoh HTTP Request Mentah</span></div>\n    <pre><code>GET /programs HTTP/1.1\nHost: api.presidentku.id\nAccept: application/json\nUser-Agent: PresidentKu-Mobile/1.0\n\n(Body kosong untuk method GET)</code></pre>\n  </div>\n  <div class=\"code-block-wrapper\">\n    <div class=\"code-header\"><span>Contoh HTTP Response Mentah</span></div>\n    <pre><code>HTTP/1.1 200 OK\nContent-Type: application/json; charset=utf-8\nServer: Nginx/1.24\n\n[\n  {\n    \"id\": 1,\n    \"name\": \"Program Beasiswa Indonesia Pintar\",\n    \"description\": \"Bantuan pendidikan generasi muda\"\n  }\n]</code></pre>\n  </div>\n</div>\n\n<h4>Format JSON: Bahasa Komunikasi Universal</h4>\n<p>Data dari server dikirim dalam format <strong>JSON (JavaScript Object Notation)</strong> berupa teks string terstruktur. Di aplikasi mobile, string JSON ini wajib di-<em>parse</em> menjadi objek/array JavaScript sungguhan agar dapat diolah oleh React Native.</p>\n\n<div class=\"diagram-container text-center my-4\">\n  <svg viewBox=\"0 0 720 80\" class=\"svg-flowchart\">\n    <rect x=\"10\" y=\"20\" width=\"120\" height=\"40\" rx=\"6\" class=\"svg-node-indigo\" />\n    <text x=\"70\" y=\"45\" class=\"svg-text\">1. JSON STRING</text>\n    \n    <path d=\"M 135 40 L 175 40\" class=\"svg-arrow\" marker-end=\"url(#arrow)\" />\n    \n    <rect x=\"180\" y=\"20\" width=\"130\" height=\"40\" rx=\"6\" class=\"svg-node-blue\" />\n    <text x=\"245\" y=\"45\" class=\"svg-text\">2. PARSE (json())</text>\n    \n    <path d=\"M 315 40 L 355 40\" class=\"svg-arrow\" marker-end=\"url(#arrow)\" />\n    \n    <rect x=\"360\" y=\"20\" width=\"150\" height=\"40\" rx=\"6\" class=\"svg-node-purple\" />\n    <text x=\"435\" y=\"45\" class=\"svg-text\">3. JS OBJECT / ARRAY</text>\n    \n    <path d=\"M 515 40 L 555 40\" class=\"svg-arrow\" marker-end=\"url(#arrow)\" />\n    \n    <rect x=\"560\" y=\"20\" width=\"145\" height=\"40\" rx=\"6\" class=\"svg-node-emerald\" />\n    <text x=\"632\" y=\"45\" class=\"svg-text\">4. RENDER KE UI</text>\n  </svg>\n</div>\n      ",
        "deepDive": "Dalam JavaScript murni, parsing string manual menggunakan <code>JSON.parse(text)</code>. Namun saat menggunakan fungsi <code>fetch()</code>, kita menggunakan method asinkron <code>const data = await response.json()</code> yang secara otomatis membaca body stream jaringan dan mem-parse-nya ke objek JavaScript.",
        "summary": "HTTP Request memuat URL, method, header, dan body. HTTP Response mengembalikan status code, header, dan body data (umumnya JSON). String JSON wajib di-parse menjadi objek JavaScript sebelum ditampilkan di komponen UI.",
        "pitfalls": "Lupa memanggil `await response.json()` pada Fetch API sehingga variabel hanya berisi Promise yang belum terselesaikan.",
        "examTips": "Pahami siklus: JSON String dari server &rarr; di-parse dengan `response.json()` &rarr; menjadi JavaScript Object &rarr; di-render ke komponen UI."
      },
      {
        "id": "w4-dto-fetch-axios",
        "title": "4.3 Data Modeling, DTO Transformation & Fetch vs Axios",
        "analogy": "Data server seperti buah kelapa utuh lengkap dengan sabut tebal dan tempurung keras (banyak atribut teknis tak terpakai). DTO (Data Transfer Object) seperti proses mengupas sabut dan memeras santan murninya: hanya bagian yang diperlukan oleh resep masakan Anda yang diambil.",
        "content": "\n<h4>Mengapa Perlu Data Modeling & DTO?</h4>\n<p>Data mentah dari server backend (database) sering kali memuat puluhan kolom internal yang tidak relevan dengan layar smartphone pengguna, misalnya: <code>created_at</code>, <code>updated_at</code>, <code>deleted_at</code>, <code>created_by_ip</code>, dan <code>internal_db_hash</code>.</p>\n<p><strong>DTO (Data Transfer Object)</strong> adalah teknik memetakan (<em>mapping</em>) data mentah dari API agar hanya memilih field yang benar-benar dibutuhkan oleh antarmuka aplikasi mobile kita.</p>\n\n<div class=\"comparison-table-wrapper my-4\">\n  <table class=\"table-compare\">\n    <thead>\n      <tr>\n        <th>Server Response (JSON Mentah)</th>\n        <th>Data Model / DTO di PresidentKu</th>\n        <th>Keterangan</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><code>id: 101</code></td>\n        <td><code>id: 101</code> (number)</td>\n        <td><span class=\"badge-success\">Dipakai</span> sebagai unique key list</td>\n      </tr>\n      <tr>\n        <td><code>name: \"Bantuan Pupuk Subsidi\"</code></td>\n        <td><code>title: item.name</code> (string)</td>\n        <td><span class=\"badge-success\">Dipakai</span> ditransformasikan jadi title</td>\n      </tr>\n      <tr>\n        <td><code>desc_full: \"Alokasi tahun 2026...\"</code></td>\n        <td><code>description: item.desc_full</code></td>\n        <td><span class=\"badge-success\">Dipakai</span> untuk deskripsi singkat</td>\n      </tr>\n      <tr>\n        <td><code>img_url: \"https://...\"</code></td>\n        <td><code>image: item.img_url</code> (string)</td>\n        <td><span class=\"badge-success\">Dipakai</span> untuk sumber gambar</td>\n      </tr>\n      <tr>\n        <td><code>is_published: true</code></td>\n        <td><code>status: \"active\"</code> (string)</td>\n        <td><span class=\"badge-success\">Dipakai</span> normalisasi status</td>\n      </tr>\n      <tr>\n        <td><code>server_timestamp: 1728144000</code></td>\n        <td><em>Dibuang (Ignored)</em></td>\n        <td><span class=\"badge-danger\">Tidak dipakai</span> menghemat memori</td>\n      </tr>\n      <tr>\n        <td><code>created_at, updated_at</code></td>\n        <td><em>Dibuang (Ignored)</em></td>\n        <td><span class=\"badge-danger\">Tidak dipakai</span> di antarmuka home</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\n<h4>Kode Mapping Data dengan JavaScript .map()</h4>\n<div class=\"code-block-wrapper\">\n  <div class=\"code-header\">\n    <span>mapping.js — Transformasi Data Mentah ke DTO</span>\n    <button class=\"btn-copy\" onclick=\"copyCode(this)\"><i class=\"fa-regular fa-copy\"></i> Salin</button>\n  </div>\n  <pre><code class=\"language-javascript\">// Mengubah array server menjadi format DTO PresidentKu\nconst programsDTO = rawApiData.map((item) => ({\n  id: item.id,\n  title: item.name,\n  description: item.description,\n  image: item.image,\n  status: item.is_active ? 'active' : 'inactive',\n}));</code></pre>\n</div>\n\n<h4>Perbandingan: Fetch API vs Axios</h4>\n<div class=\"comparison-table-wrapper my-4\">\n  <table class=\"table-compare\">\n    <thead>\n      <tr>\n        <th>Aspek Komparasi</th>\n        <th>Fetch API (Bawaan)</th>\n        <th>Axios (Pustaka Eksternal)</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Instalasi</strong></td>\n        <td>Bawaan runtime JavaScript (tanpa install)</td>\n        <td>Wajib install pustaka (<code>npm install axios</code>)</td>\n      </tr>\n      <tr>\n        <td><strong>JSON Parsing</strong></td>\n        <td>Manual via <code>await response.json()</code></td>\n        <td>Otomatis diakses di <code>response.data</code></td>\n      </tr>\n      <tr>\n        <td><strong>Error Handling 4xx/5xx</strong></td>\n        <td>TIDAK otomatis throw error (harus cek <code>response.ok</code>)</td>\n        <td>Otomatis melempar (throw) error ke blok catch</td>\n      </tr>\n      <tr>\n        <td><strong>Request Interceptor</strong></td>\n        <td>Harus dibungkus fungsi custom sendiri</td>\n        <td>Tersedia fitur bawaan <code>axios.interceptors</code></td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\n<h4>Implementasi Kode: Fetch API vs Axios</h4>\n<div class=\"grid-2-col my-4\">\n  <div class=\"code-block-wrapper\">\n    <div class=\"code-header\"><span>Fetch API (Bawaan)</span></div>\n    <pre><code class=\"language-javascript\">async function getProgramsFetch() {\n  const response = await fetch(\n    'https://api.presidentku.id/programs'\n  );\n  const data = await response.json();\n  console.log('Data:', data);\n  return data;\n}</code></pre>\n  </div>\n  <div class=\"code-block-wrapper\">\n    <div class=\"code-header\"><span>Axios Library</span></div>\n    <pre><code class=\"language-javascript\">import axios from 'axios';\n\nasync function getProgramsAxios() {\n  const response = await axios.get(\n    'https://api.presidentku.id/programs'\n  );\n  // Otomatis diparse ke .data\n  console.log('Data:', response.data);\n  return response.data;\n}</code></pre>\n  </div>\n</div>\n\n<h4>Menampilkan Data Dinamis ke Komponen React Native</h4>\n<div class=\"code-block-wrapper\">\n  <div class=\"code-header\">\n    <span>ProgramList.js — Menggunakan useState & useEffect</span>\n    <button class=\"btn-copy\" onclick=\"copyCode(this)\"><i class=\"fa-regular fa-copy\"></i> Salin</button>\n  </div>\n  <pre><code class=\"language-jsx\">import React, { useState, useEffect } from 'react';\nimport { View, Text, FlatList, Image, StyleSheet } from 'react-native';\n\nexport default function ProgramList() {\n  // 1. Inisialisasi state untuk menampung data DTO\n  const [programs, setPrograms] = useState([]);\n\n  // 2. Mengambil data saat layar pertama kali dibuka\n  useEffect(() => {\n    async function loadPrograms() {\n      try {\n        const response = await fetch('https://api.presidentku.id/programs');\n        const rawData = await response.json();\n\n        // 3. Mapping data API ke DTO\n        const formatted = rawData.map(item => ({\n          id: item.id,\n          title: item.name,\n          description: item.description,\n          image: item.image,\n          status: item.status,\n        }));\n\n        // 4. Simpan ke state komponen\n        setPrograms(formatted);\n      } catch (err) {\n        console.error('Gagal mengambil data:', err);\n      }\n    }\n\n    loadPrograms();\n  }, []); // Array kosong: hanya dijalankan sekali saat mount\n\n  return (\n    &lt;FlatList\n      data={programs}\n      keyExtractor={(item) => item.id.toString()}\n      renderItem={({ item }) =&gt; (\n        &lt;View style={styles.card}&gt;\n          &lt;Image source={{ uri: item.image }} style={styles.thumb} /&gt;\n          &lt;View style={styles.content}&gt;\n            &lt;Text style={styles.title}&gt;{item.title}&lt;/Text&gt;\n            &lt;Text style={styles.desc}&gt;{item.description}&lt;/Text&gt;\n            &lt;Text style={styles.badge}&gt;{item.status.toUpperCase()}&lt;/Text&gt;\n          &lt;/View&gt;\n        &lt;/View&gt;\n      )}\n    /&gt;\n  );\n}</code></pre>\n</div>\n      ",
        "deepDive": "Mengapa <code>useEffect</code> menggunakan array dependensi kosong <code>[]</code>? Ini menginstruksikan React Native agar pemanggilan API hanya dieksekusi satu kali tepat setelah komponen selesai dipasang di layar (<em>mount</em>). Jika array kosong ini dihilangkan, fungsi pemanggilan API akan terpanggil terus-menerus setiap kali state berubah (<em>infinite re-render loop</em>).",
        "summary": "DTO menyaring dan mentransformasi data mentah API agar sesuai kebutuhan UI. Fetch adalah bawaan JavaScript yang membutuhkan parsing manual (response.json()), sedangkan Axios adalah pustaka yang otomatis mem-parse respons ke response.data. Data disimpan di state useState dan dipanggil via useEffect.",
        "pitfalls": "Lupa menyertakan dependency array `[]` pada `useEffect`, menyebabkan ribuan pemanggilan API berulang-ulang yang dapat memblokir server.",
        "examTips": "Pahami perbedaan utama Fetch API vs Axios (terutama instalasi, auto-parsing JSON, dan perilaku melempar error status 4xx/5xx)."
      }
    ],
    "glossary": [
      {
        "term": "DTO (Data Transfer Object)",
        "def": "Objek penampung data yang membawa data antar proses/jaringan dan hanya memuat atribut yang relevan bagi penerima."
      },
      {
        "term": "REST",
        "def": "Representational State Transfer; standar arsitektur komunikasi layanan web berbasis protokol HTTP."
      },
      {
        "term": "FlatList",
        "def": "Komponen React Native berkinerja tinggi untuk merender daftar data yang panjang secara efisien hanya pada item yang tampak di layar (virtualized)."
      },
      {
        "term": "Mounting",
        "def": "Fase siklus hidup saat komponen React pertama kali dibuat dan dimasukkan ke dalam hierarki antarmuka tampilan."
      }
    ],
    "summaryWeek": "Pekan 4 menuntaskan Sprint 03: pemahaman arsitektur client-server, prinsip RESTful API dan 4 kata kerja HTTP method, anatomi request-response, alur parsing string JSON menjadi objek JavaScript, pemodelan data DTO menggunakan .map(), komparasi komprehensif Fetch vs Axios, serta integrasi pemanggilan data dinamis ke UI dengan useState dan useEffect.",
    "sprintChecklist": [
      "Memahami arsitektur client-server mobile dengan RESTful API",
      "Mampu menyebutkan fungsi 4 HTTP method: GET, POST, PUT, DELETE",
      "Endpoint REST API /programs berhasil dipanggil dari aplikasi",
      "Response string JSON berhasil di-parse menjadi objek JavaScript",
      "Model data DTO Program (id, title, description, image, status) berhasil didefinisikan",
      "Data mentah API berhasil ditransformasikan menggunakan metode .map()",
      "Data dinamis berhasil ditampilkan di UI menggantikan data hardcode Pekan 2",
      "Mengetahui perbedaan praktis antara Fetch API dan pustaka Axios",
      "Melakukan commit dan push hasil kerja sprint ke repositori GitHub"
    ],
    "checkUnderstanding": [
      {
        "question": "Apakah fungsi utama dari pembuatan Data Transfer Object (DTO) pada aplikasi mobile client?",
        "options": [
          "Mempercepat kecepatan koneksi internet pengguna",
          "Menyaring dan memetakan hanya atribut yang dibutuhkan UI dari sekian banyak field mentah server",
          "Menggantikan fungsi database di server backend",
          "Menghilangkan kebutuhan akan komponen Text pada React Native",
          "Mengubah kode JavaScript menjadi bahasa Assembly murni"
        ],
        "correct": 1,
        "explanation": "DTO dibuat untuk menyeleksi field yang benar-benar dipakai antarmuka, menormalisasi nama atribut, serta menghemat alokasi memori di perangkat ponsel."
      },
      {
        "question": "Manakah pernyataan yang BENAR mengenai perbedaan antara Fetch API dan Axios?",
        "options": [
          "Fetch API memerlukan `npm install`, sedangkan Axios sudah bawaan JavaScript",
          "Axios secara otomatis mem-parse body JSON ke dalam properti `response.data`, sedangkan Fetch memerlukan `await response.json()`",
          "Fetch API otomatis melempar error saat menerima status code 404, sedangkan Axios tidak",
          "Axios tidak dapat digunakan pada platform Android",
          "Fetch API hanya dapat digunakan untuk HTTP method POST"
        ],
        "correct": 1,
        "explanation": "Axios otomatis mem-parse data JSON ke `response.data`. Sebaliknya, Fetch API membutuhkan eksekusi method asinkron eksplisit `await response.json()`."
      },
      {
        "question": "HTTP method manakah yang tepat digunakan untuk mengirimkan aspirasi baru warga negara ke sistem PresidentKu?",
        "options": [
          "GET",
          "POST",
          "HEAD",
          "OPTIONS",
          "TRACE"
        ],
        "correct": 1,
        "explanation": "Method POST adalah standar RESTful HTTP untuk membuat atau mengirimkan resource data baru ke server dengan menyertakan payload body."
      },
      {
        "question": "Apa fungsi dari array kosong `[]` pada hook `useEffect(() => { ... }, [])` saat memanggil REST API?",
        "options": [
          "Mengindikasikan bahwa data yang diambil berbentuk array kosong",
          "Membuat fungsi pemanggilan API hanya dijalankan sekali ketika komponen pertama kali di-mount",
          "Menghapus seluruh state saat data gagal diunduh",
          "Menginstruksikan aplikasi untuk dijalankan tanpa koneksi internet",
          "Memaksa pemanggilan API diulang setiap detik"
        ],
        "correct": 1,
        "explanation": "Array dependensi kosong `[]` memberi tahu React bahwa efek tersebut tidak bergantung pada state manapun, sehingga hanya dijalankan sekali saat komponen di-mount."
      }
    ]
  },
  {
    "id": 5,
    "weekNumber": 5,
    "title": "Secure API: Token-Based Authentication",
    "subtitle": "Sprint 04 — From API to Secure API: Mengamankan Komunikasi Mobile dengan Token",
    "sprint": "Sprint 04 - Integrasi Token-Based Authentication PresidentKu",
    "readTime": "24 menit",
    "topics": [
      "Kenapa API Butuh Proteksi",
      "Alur Token-Based Authentication",
      "Access Token & Bearer Authorization Header",
      "Bedah Struktur JWT (Header, Payload, Signature)",
      "HTTPS & Keamanan Data in Transit",
      "Axios Interceptor & Token Management",
      "Access Token vs Refresh Token"
    ],
    "subtopics": [
      {
        "id": "w5-why-protect-flow",
        "title": "5.1 Mengapa API Butuh Proteksi & Alur Autentikasi Berbasis Token",
        "analogy": "Membeli tiket konser festival musik: Anda mengantre di loket tiket dan menunjukkan KTP serta uang (Login). Petugas loket memberi Anda gelang barcode khusus (Access Token). Setelah memakai gelang itu, Anda tidak perlu lagi menunjukkan KTP setiap kali ingin masuk ke area panggung, toilet, atau stan makanan; Anda cukup menunjukkan gelang Anda kepada petugas keamanan di tiap pintu masuk (Protected Endpoint).",
        "content": "\n<p class=\"lead\">Pada Pekan 4, kita berhasil mengambil data program publik melalui REST API. Namun, dalam aplikasi pemerintahan seperti <strong>PresidentKu</strong>, data tertentu seperti profil kependudukan, pengajuan bansos, dan riwayat aspirasi bersifat rahasia dan berpembatasan akses.</p>\n\n<h4>Prinsip Pokok Keamanan Jaringan</h4>\n<div class=\"callout callout-important text-center\">\n  <h4 class=\"mb-0 text-primary\">\"API yang dapat diakses BUKAN BERARTI boleh diakses siapa saja.\"</h4>\n</div>\n\n<h4>Lima Pilar Fokus Pengamanan API</h4>\n<ol class=\"styled-numbered\">\n  <li><strong>Authentication:</strong> Memverifikasi identitas pengguna yang membuat permintaan (misal: login dengan email dan password untuk membuktikan kepemilikan akun).</li>\n  <li><strong>Authorization:</strong> Menentukan hak akses pengguna terhadap resource tertentu berdasarkan peran/izin (misal: Warga biasa hanya bisa melihat program, sedangkan Admin Pemerintah bisa menambah data program baru).</li>\n  <li><strong>Secure Communication (HTTPS/TLS):</strong> Mengenkripsi jalur komunikasi transmisi data agar tidak dapat disadap di jaringan publik.</li>\n  <li><strong>Protected Endpoint:</strong> Titik akhir URL API yang secara ketat menuntut tiket bukti otorisasi sebelum mengembalikan data (menolak request tanpa token).</li>\n  <li><strong>Token:</strong> Tiket digital ringkas bertanda tangan kriptografis yang dikirimkan pada setiap panggilan request.</li>\n</ol>\n\n<h4>Alur Komunikasi Token-Based Authentication</h4>\n<div class=\"diagram-container text-center my-4\">\n  <svg viewBox=\"0 0 760 140\" class=\"svg-flowchart\">\n    <rect x=\"10\" y=\"40\" width=\"130\" height=\"60\" rx=\"8\" class=\"svg-node-blue\" />\n    <text x=\"75\" y=\"65\" class=\"svg-text\">MOBILE APP</text>\n    <text x=\"75\" y=\"85\" class=\"svg-subtext\">(PresidentKu)</text>\n    \n    <path d=\"M 145 55 L 345 55\" class=\"svg-arrow\" marker-end=\"url(#arrow)\" />\n    <text x=\"245\" y=\"47\" class=\"svg-label\">1. POST /login (email+pwd)</text>\n    \n    <path d=\"M 345 85 L 145 85\" class=\"svg-arrow-back\" marker-end=\"url(#arrow)\" />\n    <text x=\"245\" y=\"103\" class=\"svg-label\">2. Return Token (JWT)</text>\n    \n    <rect x=\"350\" y=\"40\" width=\"130\" height=\"60\" rx=\"8\" class=\"svg-node-indigo\" />\n    <text x=\"415\" y=\"65\" class=\"svg-text\">AUTH SERVER</text>\n    <text x=\"415\" y=\"85\" class=\"svg-subtext\">(Validasi Kredensial)</text>\n    \n    <path d=\"M 145 115 L 605 115\" class=\"svg-arrow\" marker-end=\"url(#arrow)\" />\n    <text x=\"375\" y=\"132\" class=\"svg-label\">3. Request + Header: Authorization: Bearer &lt;token&gt;</text>\n    \n    <rect x=\"610\" y=\"40\" width=\"140\" height=\"90\" rx=\"8\" class=\"svg-node-purple\" />\n    <text x=\"680\" y=\"70\" class=\"svg-text\">PROTECTED API</text>\n    <text x=\"680\" y=\"90\" class=\"svg-subtext\">(/profile, /bansos)</text>\n    <text x=\"680\" y=\"110\" class=\"svg-subtext\">4. Cek Token Valid &rarr; OK</text>\n  </svg>\n</div>\n\n<p>Mengapa token harus dikirimkan bersama SETIAP request berikutnya? Karena protokol <strong>HTTP bersifat stateless</strong> (tidak memiliki ingatan). Server tidak mengingat bahwa dua detik yang lalu HP Anda baru saja berhasil login. Setiap request berdiri sendiri dan wajib membawa tiket pembuktian identitas yang sah.</p>\n      ",
        "deepDive": "Di era web lama, otentikasi menggunakan session berbasis cookie di sisi server (<em>stateful</em>). Metode ini membebani memori server ketika jutaan pengguna mobile aktif bersamaan. Pendekatan token (stateless) memindahkan beban penyimpanan session ke client: server hanya perlu memvalidasi tanda tangan kriptografi token yang datang.",
        "summary": "API publik wajib diamankan dengan autentikasi berbasis token. Protokol HTTP yang stateless mewajibkan mobile app menyertakan token autentikasi pada setiap panggilan request ke endpoint yang dilindungi.",
        "pitfalls": "Mengirimkan email dan password berulang kali pada setiap pemanggilan API alih-alih menggunakan token hasil login.",
        "examTips": "Pahami konsep stateless HTTP dan mengapa token wajib disertakan pada setiap request ke protected endpoint."
      },
      {
        "id": "w5-jwt-structure-https",
        "title": "5.2 Bedah Anatomi JWT & Enkripsi Jalur HTTPS/TLS",
        "analogy": "JWT seperti paspor digital resmi: Ada stempel jenis paspor (Header), ada foto dan biodata pemegang paspor (Payload), dan ada cap tanda tangan hologram basah kementerian luar negeri yang mustahil dipalsukan (Signature).",
        "content": "\n<h4>Apa Itu JSON Web Token (JWT)?</h4>\n<p><strong>JWT (JSON Web Token)</strong> adalah standar industri terbuka (RFC 7519) untuk merepresentasikan klaim identitas antara dua pihak secara aman dan ringkas. Struktur sebuah string JWT terdiri dari tiga bagian yang dipisahkan oleh tanda titik (<code>.</code>):</p>\n<div class=\"callout callout-info text-center font-mono\">\n  <strong>header.payload.signature</strong><br/>\n  <span class=\"text-xs text-muted\">eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwibmFtZSI6IlVzZXIiLCJyb2xlIjoic3R1ZGVudCIsImV4cCI6MTcyODE0NDAwMH0.H30e2...X9fQ</span>\n</div>\n\n<div class=\"grid-3-col my-4\">\n  <div class=\"card-feature\">\n    <div class=\"badge-indigo mb-2\">1. HEADER</div>\n    <pre><code class=\"language-json\">{\n  \"alg\": \"HS256\",\n  \"typ\": \"JWT\"\n}</code></pre>\n    <p class=\"text-xs text-muted mt-2\">Menyatakan algoritma kriptografi yang digunakan (misal HMAC SHA256) dan tipe token.</p>\n  </div>\n  <div class=\"card-feature\">\n    <div class=\"badge-amber mb-2\">2. PAYLOAD (Claims)</div>\n    <pre><code class=\"language-json\">{\n  \"sub\": \"101\",\n  \"name\": \"Farrel\",\n  \"role\": \"warga\",\n  \"exp\": 1728144000\n}</code></pre>\n    <p class=\"text-xs text-muted mt-2\">Berisi klaim data pengguna: ID subjek (sub), nama, hak akses (role), serta waktu kedaluwarsa (exp).</p>\n  </div>\n  <div class=\"card-feature\">\n    <div class=\"badge-emerald mb-2\">3. SIGNATURE</div>\n    <pre><code class=\"language-text\">HMACSHA256(\n  base64UrlEncode(header) + \".\" +\n  base64UrlEncode(payload),\n  server_secret_key\n)</code></pre>\n    <p class=\"text-xs text-muted mt-2\">Verifikasi integritas. Dibuat menggunakan secret key di server untuk menjamin payload tidak diubah penyerang.</p>\n  </div>\n</div>\n\n<div class=\"callout callout-deepdive\">\n  <h5><i class=\"fa-solid fa-triangle-exclamation\"></i> Pendalaman Kritis: JWT Di-Encode, BUKAN Di-Enkripsi!</h5>\n  <p>Banyak developer keliru mengira payload JWT terenkripsi aman. Faktanya, payload JWT hanya diubah formatnya menggunakan <strong>Base64Url Encoding</strong> (agar dapat dikirim sebagai string teks pada header HTTP). Siapapun yang memperoleh token JWT dapat membuka situs <em>jwt.io</em> dan membaca seluruh isinya dalam sekejap!</p>\n  <p class=\"mb-0 text-danger font-semibold\">&rarr; JANGAN PERNAH menyimpan informasi rahasia tingkat tinggi seperti kata sandi mentah (plaintext password), PIN rekening, atau nomor kartu kredit di dalam payload JWT!</p>\n</div>\n\n<h4>Mengapa Enkripsi Jalur HTTPS/TLS Mutlak Diperlukan?</h4>\n<p>Token Anda mungkin tersimpan sangat rapi di SecureStore terenkripsi (Pekan 3). Namun, jika aplikasi Anda mengirimkan token tersebut ke server melalui protokol HTTP biasa (tanpa \"S\"), paket data meluncur di udara dalam bentuk teks polos (<em>plaintext in transit</em>).</p>\n<ul class=\"styled-list\">\n  <li><strong>HTTP (Tidak Aman):</strong> Data rentan disadap oleh pihak ketiga di jaringan WiFi publik (<em>Man-in-the-Middle Attack / Packet Sniffing</em>). Penyerang dapat mencuri token Anda dan menduplikasi hak akses akun secara ilegal.</li>\n  <li><strong>HTTPS (Aman):</strong> Menggunakan enkripsi <strong>TLS (Transport Layer Security)</strong> dan sertifikat digital server. Seluruh percakapan request dan header token diacak secara matematis sehingga hanya server sah yang dapat membaca isinya.</li>\n</ul>\n      ",
        "deepDive": "Periksa selalu URL endpoint backend Anda. Pastikan diawali dengan skema <code>https://</code>. Pada konfigurasi Android modern (Android 9+), sistem operasi bahkan secara default memblokir semua lalu lintas data teks polos (<em>cleartext HTTP traffic</em>) demi keselamatan pengguna.",
        "summary": "JWT terdiri atas 3 bagian: Header (algoritma), Payload (klaim & masa berlaku exp), dan Signature (penjamin integritas dari secret key server). Payload hanya di-encode Base64Url (bukan dienkripsi). Transmisi token wajib melalui HTTPS/TLS agar tidak disadap saat in transit.",
        "pitfalls": "Menaruh password pengguna di dalam payload JWT karena mengira JWT adalah enkripsi, atau melakukan panggilan API sensitif menggunakan protokol `http://` bukan `https://`.",
        "examTips": "Hafalkan tiga komponen pembentuk struktur JWT (Header, Payload, Signature) dan fungsi klaim `exp` (waktu kedaluwarsa token)."
      },
      {
        "id": "w5-token-code-interceptor",
        "title": "5.3 Implementasi Kode: Login, Secure Storage & Axios Interceptor",
        "analogy": "Interceptor seperti asisten pribadi yang memeriksa amplop surat Anda setiap kali Anda hendak mengirimkannya ke pos kantor: ia secara otomatis menempelkan perangko resmi dan tanda pengenal diplomatik Anda di amplop tanpa perlu Anda ingatkan setiap kali.",
        "content": "\n<h4>Format Standar Header Otorisasi</h4>\n<p>Untuk mengakses protected endpoint, token dikirimkan melalui header HTTP dengan skema <strong>Bearer Token</strong>:</p>\n<div class=\"code-flow bg-dark text-white p-2 font-mono text-sm\">\n  Authorization: Bearer &lt;access_token_jwt_disini&gt;\n</div>\n\n<h4>1. Kode Lengkap: Login & Simpan Token ke SecureStore</h4>\n<div class=\"code-block-wrapper\">\n  <div class=\"code-header\">\n    <span>authService.js — Login API Request & Secure Storage</span>\n    <button class=\"btn-copy\" onclick=\"copyCode(this)\"><i class=\"fa-regular fa-copy\"></i> Salin</button>\n  </div>\n  <pre><code class=\"language-javascript\">import * as SecureStore from 'expo-secure-store';\n\nexport async function loginUser(email, password) {\n  try {\n    // 1. Mengirim permintaan POST login ke API Server\n    const response = await fetch('https://api.presidentku.id/login', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json',\n      },\n      body: JSON.stringify({\n        email: email,\n        password: password,\n      }),\n    });\n\n    const data = await response.json();\n\n    if (response.ok) {\n      // 2. Simpan access token ke SecureStore (terenkripsi hardware)\n      await SecureStore.setItemAsync('access_token', data.access_token);\n      console.log('Login berhasil & token aman tersimpan!');\n      return { success: true, user: data.user };\n    } else {\n      return { success: false, message: data.message || 'Login gagal' };\n    }\n  } catch (error) {\n    console.error('Network Error:', error);\n    return { success: false, message: 'Tidak dapat terhubung ke server' };\n  }\n}</code></pre>\n</div>\n\n<h4>2. Kode Lengkap: Memanggil Protected API dengan Token</h4>\n<div class=\"code-block-wrapper\">\n  <div class=\"code-header\">\n    <span>programService.js — Protected Endpoint Call</span>\n    <button class=\"btn-copy\" onclick=\"copyCode(this)\"><i class=\"fa-regular fa-copy\"></i> Salin</button>\n  </div>\n  <pre><code class=\"language-javascript\">import * as SecureStore from 'expo-secure-store';\n\nexport async function getProtectedPrograms() {\n  try {\n    // 1. Ambil access token dari penyimpanan aman\n    const token = await SecureStore.getItemAsync('access_token');\n\n    // 2. Sertakan token pada header 'Authorization: Bearer <token>'\n    const response = await fetch('https://api.presidentku.id/programs', {\n      method: 'GET',\n      headers: {\n        'Content-Type': 'application/json',\n        'Authorization': 'Bearer ' + token, // Header Otorisasi Bearer\n      },\n    });\n\n    if (response.status === 401) {\n      throw new Error('UNAUTHORIZED: Token kedaluwarsa atau tidak valid!');\n    }\n\n    const data = await response.json();\n    return data;\n  } catch (error) {\n    console.error('Protected API Error:', error);\n    throw error;\n  }\n}</code></pre>\n</div>\n\n<h4>Mekanisme Interceptor (Otomasi Penempelan Token)</h4>\n<p>Jika aplikasi memiliki 50 endpoint API, menulis manual <code>headers: { Authorization: Bearer ... }</code> pada setiap panggilan kode akan sangat melelahkan dan rentan lupa. Dengan pustaka <strong>Axios</strong>, kita dapat memanfaatkan fitur <strong>Request Interceptor</strong>:</p>\n\n<div class=\"code-block-wrapper\">\n  <div class=\"code-header\">\n    <span>apiClient.js — Konsep Axios Interceptor</span>\n    <button class=\"btn-copy\" onclick=\"copyCode(this)\"><i class=\"fa-regular fa-copy\"></i> Salin</button>\n  </div>\n  <pre><code class=\"language-javascript\">import axios from 'axios';\nimport * as SecureStore from 'expo-secure-store';\n\nconst apiClient = axios.create({\n  baseURL: 'https://api.presidentku.id',\n});\n\n// Interceptor bertindak di tengah jalan sebelum request ditembakkan ke jaringan\napiClient.interceptors.request.use(async (config) => {\n  const token = await SecureStore.getItemAsync('access_token');\n  if (token) {\n    config.headers.Authorization = 'Bearer ' + token;\n  }\n  return config;\n}, (error) => {\n  return Promise.reject(error);\n});\n\nexport default apiClient;</code></pre>\n</div>\n\n<h4>Access Token vs Refresh Token</h4>\n<div class=\"comparison-table-wrapper my-4\">\n  <table class=\"table-compare\">\n    <thead>\n      <tr>\n        <th>Karakteristik</th>\n        <th>Access Token</th>\n        <th>Refresh Token</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Fungsi Utama</strong></td>\n        <td>Membuka dan mengakses protected resource data</td>\n        <td>Meminta access token baru saat access token lama kedaluwarsa</td>\n      </tr>\n      <tr>\n        <td><strong>Masa Berlaku (Expiry)</strong></td>\n        <td>Singkat (misal: 15 menit &ndash; 1 jam)</td>\n        <td>Panjang (misal: 7 hari &ndash; 30 hari)</td>\n      </tr>\n      <tr>\n        <td><strong>Tujuan Keamanan</strong></td>\n        <td>Membatasi jendela waktu jika token dicuri peretas</td>\n        <td>Mempertahankan kenyamanan pengguna agar tidak login berulang</td>\n      </tr>\n      <tr>\n        <td><strong>Penyimpanan</strong></td>\n        <td>Secure Storage (Expo SecureStore)</td>\n        <td>Secure Storage (Expo SecureStore)</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n      ",
        "deepDive": "Jika Access Token masa berlakunya dibuat 1 tahun, penyerang yang berhasil mencuri token tersebut akan leluasa mengakses akun korban selama 1 tahun penuh. Dengan membatasi umur Access Token menjadi 15 menit, risiko kebobolan diminimalkan drastis. Refresh token bertindak di latar belakang untuk memperbarui access token secara senyap (<em>silent refresh</em>).",
        "summary": "Protected API mewajibkan header 'Authorization: Bearer <token>'. Token disimpan di SecureStore dan disematkan di request secara otomatis via Axios Interceptor. Access token berumur singkat untuk keamanan, sedangkan Refresh token berumur panjang untuk perpanjangan sesi.",
        "pitfalls": "Lupa spasi antara kata 'Bearer' dan string token (misal: `Bearer${token}` tanpa spasi), yang mengakibatkan server menolak request dengan status 401 Unauthorized.",
        "examTips": "Perhatikan format penulisan header: `Authorization: Bearer <token>`. Pahami juga perbedaan masa berlaku dan fungsi antara Access Token vs Refresh Token."
      }
    ],
    "glossary": [
      {
        "term": "Bearer Token",
        "def": "Skema autentikasi HTTP di mana siapa pun yang membawa (bears) token tersebut berhak mengakses resource yang dilindungi."
      },
      {
        "term": "Stateless",
        "def": "Karakteristik protokol komunikasi di mana server tidak menyimpan status (state) atau konteks sesi client di memori lokalnya."
      },
      {
        "term": "Interceptor",
        "def": "Middleware fungsi pada pustaka HTTP (seperti Axios) yang mencegat permintaan atau tanggapan sebelum diproses lebih lanjut."
      },
      {
        "term": "Status 401 Unauthorized",
        "def": "Kode status HTTP yang menandakan permintaan ditolak karena kredensial otorisasi tidak ada atau tidak valid."
      }
    ],
    "summaryWeek": "Pekan 5 menuntaskan Sprint 04: pemahaman proteksi REST API, alur token-based authentication, pengiriman token via header 'Authorization: Bearer <token>', pembedahan struktur 3 bagian JWT (Header, Payload ber-Base64Url, Signature terverifikasi), kewajiban enkripsi transit HTTPS/TLS, pemanfaatan Axios Interceptor, strategi pemisahan Access Token vs Refresh Token, serta proteksi sesi login/logout di PresidentKu.",
    "sprintChecklist": [
      "Memahami konsep dasar token-based authentication dan stateless HTTP",
      "Berhasil login melalui endpoint API POST /login",
      "Menerima string access token (JWT) dari response server",
      "Menyimpan access token ke Expo SecureStore secara aman",
      "Mengirimkan request ke protected endpoint dengan header Authorization: Bearer <token>",
      "Mampu membaca respon data terlindungi yang dikembalikan server",
      "Menguji bahwa request tanpa token ditolak dengan status HTTP 401 Unauthorized",
      "Mengimplementasikan fungsi logout yang menghapus token dari SecureStore (deleteItemAsync)",
      "Memahami bahwa payload JWT tidak dienkripsi melainkan hanya di-encode Base64Url",
      "Melakukan commit dan push sprint 04 ke GitHub repository"
    ],
    "checkUnderstanding": [
      {
        "question": "Apakah nama skema dan nama header HTTP standar yang digunakan untuk mengirimkan JWT access token ke protected endpoint?",
        "options": [
          "Header `Authentication: Token <token>`",
          "Header `Authorization: Bearer <token>`",
          "Header `Token-Access: JWT <token>`",
          "Header `Security: Key <token>`",
          "Header `User-Identity: Bearer <token>`"
        ],
        "correct": 1,
        "explanation": "Standar resmi RFC 6750 menetapkan nama header adalah `Authorization` dengan skema pembawa `Bearer <token>` (dipisahkan spasi tunggal)."
      },
      {
        "question": "Terdiri dari tiga bagian apakah sebuah struktur string JSON Web Token (JWT)?",
        "options": [
          "User, Password, dan Token",
          "Header, Payload, dan Signature",
          "URL, Method, dan Body",
          "Request, Response, dan Status",
          "Public Key, Private Key, dan Hash"
        ],
        "correct": 1,
        "explanation": "Struktur JWT terdiri dari tiga bagian yang dipisahkan tanda titik: Header (tipe & algoritma), Payload (klaim data), dan Signature (tanda tangan integritas)."
      },
      {
        "question": "Mengapa menyimpan data sensitif seperti password pengguna di dalam payload JWT sangat dilarang?",
        "options": [
          "Karena payload JWT hanya di-encode dengan Base64Url, BUKAN dienkripsi, sehingga siapapun dapat melihat isinya",
          "Karena server otomatis menghapus password saat token divalidasi",
          "Karena ukuran JWT akan melebihi kapasitas memori RAM smartphone",
          "Karena Expo Go tidak mendukung string berhuruf besar",
          "Karena password akan otomatis terkirim ke Google Play Store"
        ],
        "correct": 0,
        "explanation": "Base64Url hanyalah representasi encoding biner ke teks, bukan enkripsi. Setiap orang yang mencegat atau memegang token dapat mendecode isi payload secara instan."
      },
      {
        "question": "Apa tujuan utama dari membedakan antara Access Token (umur pendek) dan Refresh Token (umur panjang)?",
        "options": [
          "Agar server memiliki pekerjaan komputasi dua kali lebih banyak",
          "Membatasi jendela waktu penyalahgunaan jika Access Token dicuri, sembari tetap menjaga kenyamanan sesi pengguna tanpa harus login ulang",
          "Menghindari penggunaan HTTPS pada aplikasi mobile",
          "Agar ukuran aplikasi di smartphone menjadi lebih kecil",
          "Memaksa pengguna memasukkan kata sandi setiap 10 detik"
        ],
        "correct": 1,
        "explanation": "Access token dibuat berumur singkat (misal 15 menit) untuk memitigasi dampak jika token tersadap. Refresh token berumur panjang dipakai untuk meminta access token baru secara senyap tanpa mengganggu UX."
      }
    ]
  },
  {
    "id": 6,
    "weekNumber": 6,
    "title": "Reliable API: Error Handling & Offline",
    "subtitle": "Sprint 05 — Membangun Aplikasi Tangguh: Penanganan Error, Timeout, dan Kondisi Nir-Koneksi",
    "sprint": "Sprint 05 - Keandalan API & Penanganan Offline PresidentKu",
    "readTime": "22 menit",
    "topics": [
      "Kenapa Request Gagal",
      "Kode Status HTTP 2xx, 4xx, 5xx",
      "5 UI States (Idle, Loading, Success, Error, Empty)",
      "Perilaku Unik Fetch API (response.ok)",
      "Timeout & Offline Handling",
      "Skenario Uji Coba Offline 8 Langkah",
      "Fragile vs Reliable API"
    ],
    "subtopics": [
      {
        "id": "w6-why-fail-status-codes",
        "title": "6.1 Mengapa Request Gagal & Kode Status HTTP",
        "analogy": "Menelpon call center layanan masyarakat: Terkadang telepon langsung diangkat ramah (200 OK); terkadang nomor yang Anda hubungi salah (404 Not Found); terkadang Anda belum memasukkan kode PIN rahasia (401 Unauthorized); terkadang mesin operator di kantor pusat terbakar korsleting (500 Internal Server Error); dan terkadang sinyal HP Anda hilang di pelosok desa sehingga panggilan sama sekali tidak tersambung (Network Error).",
        "content": "\n<p class=\"lead\">Di dunia nyata, jaringan seluler tidak pernah sempurna. Smartphone pengguna berpindah menara BTS, masuk ke terowongan kereta, kehabisan kuota, atau server pemerintah sedang mengalami lonjakan beban. Karena itu, moto Sprint 05 adalah: <strong>\"Tidak semua kegagalan API berarti aplikasi salah\"</strong>.</p>\n\n<h4>Empat Kategori Utama Kegagalan Panggilan API</h4>\n<ol class=\"styled-numbered\">\n  <li><strong>HTTP Error (4xx & 5xx):</strong> Permintaan sampai ke server, namun server menolak atau gagal memenuhi permintaan tersebut dan mengembalikan status penolakan.</li>\n  <li><strong>Timeout (Batas Waktu Habis):</strong> Permintaan dikirim, tetapi server tidak merespons dalam batas waktu wajar (misalnya dalam 10-30 detik). Aplikasi tidak boleh dibiarkan membeku (hang).</li>\n  <li><strong>No Internet / Offline:</strong> Perangkat pengguna tidak memiliki konektivitas aktif (mode pesawat aktif, data seluler habis, atau WiFi tidak ada akses internet).</li>\n  <li><strong>Malformed Data:</strong> Server merespons 200 OK tetapi data JSON yang dikirimkan rusak atau strukturnya berubah total di luar ekspektasi DTO.</li>\n</ol>\n\n<h4>Katalog Kode Status HTTP yang Wajib Dikuasai</h4>\n<div class=\"comparison-table-wrapper my-4\">\n  <table class=\"table-compare\">\n    <thead>\n      <tr>\n        <th>Kelompok Status</th>\n        <th>Status Code & Pesan</th>\n        <th>Arti & Konteks di PresidentKu</th>\n        <th>Tindakan di Aplikasi Mobile</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong class=\"text-success\">2xx — SUCCESS</strong></td>\n        <td><code>200 OK</code><br/><code>201 Created</code></td>\n        <td>Permintaan berhasil diproses. Server mengembalikan data atau konfirmasi penyimpanan.</td>\n        <td>Tampilkan data di antarmuka (UI State: Success).</td>\n      </tr>\n      <tr>\n        <td rowspan=\"4\"><strong class=\"text-warning\">4xx — CLIENT ERROR</strong><br/><small class=\"text-muted\">(Kesalahan dari sisi aplikasi/pengguna)</small></td>\n        <td><code>400 Bad Request</code></td>\n        <td>Format data yang dikirim client salah (misal: JSON tidak lengkap atau format email keliru).</td>\n        <td>Tampilkan pesan validasi agar pengguna memperbaiki isian form.</td>\n      </tr>\n      <tr>\n        <td><code>401 Unauthorized</code></td>\n        <td>Token autentikasi tidak ada, salah, atau masa berlakunya telah kedaluwarsa.</td>\n        <td>Arahkan pengguna kembali ke halaman Login untuk otentikasi ulang.</td>\n      </tr>\n      <tr>\n        <td><code>403 Forbidden</code></td>\n        <td>Token valid, tetapi akun pengguna tidak memiliki izin (role) mengakses fitur ini.</td>\n        <td>Tampilkan peringatan \"Akses Ditolak: Fitur khusus admin pemerintah\".</td>\n      </tr>\n      <tr>\n        <td><code>404 Not Found</code></td>\n        <td>Endpoint URL atau ID data yang dicari tidak ditemukan di server.</td>\n        <td>Tampilkan status \"Data program tidak ditemukan\".</td>\n      </tr>\n      <tr>\n        <td rowspan=\"2\"><strong class=\"text-danger\">5xx — SERVER ERROR</strong><br/><small class=\"text-muted\">(Kesalahan internal di sisi server)</small></td>\n        <td><code>500 Internal Server Error</code></td>\n        <td>Terjadi crash atau kesalahan fatal pada skrip dan basis data di server pusat.</td>\n        <td>Beri pesan: \"Layanan sedang mengalami gangguan teknis. Coba beberapa saat lagi.\"</td>\n      </tr>\n      <tr>\n        <td><code>503 Service Unavailable</code></td>\n        <td>Server kelebihan beban (overload) atau sedang dalam jadwal pemeliharaan (maintenance).</td>\n        <td>Tampilkan antarmuka pemeliharaan sistem dengan tombol Coba Lagi.</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n      ",
        "deepDive": "Perbedaan mendasar antara <code>401</code> dan <code>403</code>: 401 adalah masalah identitas (\"Siapa kamu? Saya tidak mengenal tokenmu\"), sedangkan 403 adalah masalah kewenangan hak akses (\"Saya tahu kamu adalah warga Farrel, tapi warga biasa dilarang menghapus pengumuman istana!\").",
        "summary": "Kegagalan API bisa berasal dari HTTP error (4xx/5xx), batas waktu (timeout), atau ketiadaan koneksi (offline). Status 2xx berarti sukses, 4xx kesalahan client/input, dan 5xx kegagalan server internal.",
        "pitfalls": "Memperlakukan semua error sebagai satu pesan generik 'Error Terjadi' tanpa membedakan apakah masalahnya adalah token habis (401), internet mati, atau server down (500).",
        "examTips": "Pahami perbedaan arti status code 401 (Unauthorized) vs 403 (Forbidden), serta 404 (Not Found) vs 500 (Internal Server Error)."
      },
      {
        "id": "w6-api-ui-states",
        "title": "6.2 Lima State Antarmuka API (API UI States)",
        "analogy": "Menunggu pesanan online di aplikasi: Sebelum memesan, keranjang kosong (Idle); saat kurir mencari makanan, layar menampilkan animasi roda berputar (Loading); saat makanan tiba, foto makanan dan rincian struk muncul (Success); jika resto tutup, muncul pesan merah bersahabat (Error); jika menu yang dicari habis, muncul gambar piring kosong bersih (Empty).",
        "content": "\n<h4>Prinsip: \"UI Tidak Boleh Hanya Punya Kondisi 'Data Ada'\"</h4>\n<p>Aplikasi yang buruk mengasumsikan data selalu langsung tersedia dalam 0.001 detik. Ketika jaringan lambat, pengguna disuguhi layar putih membeku tanpa kejelasan apakah aplikasi masih hidup atau sudah crash.</p>\n<p>Antarmuka aplikasi profesional wajib memiliki <strong>5 status antarmuka (API UI States)</strong>:</p>\n\n<div class=\"grid-2-col my-4\">\n  <div class=\"card-feature\">\n    <h5>1. IDLE (Status Awal)</h5>\n    <p>Kondisi saat pengguna baru membuka layar dan pemanggilan API belum dipicu (misal: sebelum tombol \"Cari Berita\" diketik).</p>\n  </div>\n  <div class=\"card-feature\">\n    <h5>2. LOADING (Sedang Memuat)</h5>\n    <p>Permintaan jaringan sedang berlangsung. Tampilkan komponen <code>&lt;ActivityIndicator size=\"large\" /&gt;</code> atau placeholder <em>skeleton screen</em> agar pengguna tahu proses sedang berjalan.</p>\n  </div>\n  <div class=\"card-feature\">\n    <h5>3. SUCCESS (Berhasil)</h5>\n    <p>Data berhasil diterima dan dipetakan ke DTO. Tampilkan daftar kartu informasi menggunakan <code>&lt;FlatList&gt;</code>.</p>\n  </div>\n  <div class=\"card-feature\">\n    <h5>4. ERROR (Terjadi Masalah)</h5>\n    <p>Panggilan gagal karena kuota habis, timeout, atau server error. Tampilkan pesan kesalahan dalam bahasa manusia yang ramah disertai <strong>Tombol Coba Lagi (Retry Button)</strong>.</p>\n  </div>\n</div>\n\n<div class=\"card-feature my-3 border-amber\">\n  <h5>5. EMPTY (Data Kosong)</h5>\n  <p class=\"mb-0\">Panggilan berhasil (200 OK), namun server mengembalikan array kosong (<code>data.length === 0</code>). Tampilkan ilustrasi atau teks penjelas: <em>\"Belum ada program prioritas untuk kategori ini.\"</em> Jangan biarkan layar kosong melompong!</p>\n</div>\n      ",
        "deepDive": "Penggunaan <strong>Skeleton Screen</strong> (animasi kotak abu-abu berkedip menyerupai tata letak kartu) terbukti secara psikologis membuat pengguna merasa aplikasi berjalan 30% lebih cepat dibandingkan sekadar menampilkan spinner berputar biasa.",
        "summary": "Setiap permintaan API memiliki 5 kemungkinan UI State: Idle, Loading, Success, Error, dan Empty. Menampilkan umpan balik visual yang transparan menjaga kenyamanan pengguna.",
        "pitfalls": "Lupa mematikan indikator loading saat terjadi error di blok catch, sehingga animasi spinner berputar selamanya tanpa henti.",
        "examTips": "Hafalkan 5 UI State siklus API: Idle, Loading, Success, Error, dan Empty."
      },
      {
        "id": "w6-fetch-catch-code",
        "title": "6.3 Implementasi Kode: Mengapa response.ok Wajib Dicek pada Fetch?",
        "analogy": "Fungsi Fetch seperti kurir pengantar surat biasa. Selama kurir berhasil mengetuk pintu rumah server dan menerima surat balasan (meskipun surat itu bertuliskan '404 Rumah Ini Tidak Ditemukan'), bagi kurir tugasnya SUKSES terkirim. Kurir baru menganggap gagal (melempar error) jika sepedanya tertabrak pohon di jalan sehingga sama sekali tidak sampai ke rumah server (Network Failure).",
        "content": "\n<h4>Jebakan Terbesar Fetch API di Ujian & Praktikum!</h4>\n<div class=\"callout callout-important\">\n  <h5><i class=\"fa-solid fa-skull-crossbones\"></i> Hati-Hati: Fetch TIDAK Melempar Error untuk Status 4xx dan 5xx!</h5>\n  <p>Banyak developer mengira jika server mengembalikan <code>404 Not Found</code> atau <code>500 Server Error</code>, fungsi <code>fetch()</code> akan otomatis melompat ke blok <code>catch</code>. <strong>INI KELIRU BESAR!</strong></p>\n  <p>Bagi Fetch API, selama koneksi HTTP terjadi dan ada respons dari server (berapapun kodenya), Promise dinyatakan <strong>Resolved</strong>. Blok <code>catch</code> HANYA akan terpanggil jika terjadi kegagalan jaringan fatal (misal: kabel internet terputus, DNS gagal, atau timeout).</p>\n  <p class=\"font-semibold text-danger mb-0\">&rarr; Solusinya: Kita WAJIB memeriksa nilai boolean properti <code>response.ok</code> secara manual!</p>\n</div>\n\n<h4>Kode Lengkap Reliable API Call dengan Try / Catch / Finally</h4>\n<div class=\"code-block-wrapper\">\n  <div class=\"code-header\">\n    <span>ReliableProgramsScreen.js — Penanganan Lengkap 5 State & Error</span>\n    <button class=\"btn-copy\" onclick=\"copyCode(this)\"><i class=\"fa-regular fa-copy\"></i> Salin</button>\n  </div>\n  <pre><code class=\"language-jsx\">import React, { useState, useEffect } from 'react';\nimport { View, Text, FlatList, ActivityIndicator, Pressable, StyleSheet } from 'react-native';\n\nexport default function ReliableProgramsScreen() {\n  const [data, setData] = useState([]);\n  const [isLoading, setIsLoading] = useState(false);\n  const [errorMessage, setErrorMessage] = useState(null);\n\n  const fetchPrograms = async () => {\n    // 1. Masuk ke UI State: LOADING\n    setIsLoading(true);\n    setErrorMessage(null);\n\n    // Menyiapkan pembatas waktu (Timeout 10 detik)\n    const controller = new AbortController();\n    const timeoutId = setTimeout(() => controller.abort(), 10000);\n\n    try {\n      const response = await fetch('https://api.presidentku.id/programs', {\n        signal: controller.signal,\n      });\n\n      // Bersihkan timer timeout jika respon datang tepat waktu\n      clearTimeout(timeoutId);\n\n      // 2. CEK APAKAH HTTP STATUS CODE 200-299\n      if (!response.ok) {\n        if (response.status === 401) {\n          throw new Error('Sesi Anda berakhir. Silakan login kembali.');\n        } else if (response.status === 404) {\n          throw new Error('Layanan program tidak ditemukan di server (404).');\n        } else if (response.status >= 500) {\n          throw new Error('Pusat data sedang mengalami gangguan (500).');\n        } else {\n          throw new Error('Permintaan gagal dengan status ' + response.status);\n        }\n      }\n\n      const jsonResult = await response.json();\n      setData(jsonResult); // UI State: SUCCESS\n    } catch (error) {\n      // 3. Masuk ke UI State: ERROR\n      if (error.name === 'AbortError') {\n        setErrorMessage('Batas waktu koneksi habis (Timeout). Koneksi Anda lambat.');\n      } else {\n        setErrorMessage(error.message || 'Gagal memuat data jaringan.');\n      }\n    } finally {\n      // 4. Matikan indikator loading di semua kondisi\n      setIsLoading(false);\n    }\n  };\n\n  useEffect(() => {\n    fetchPrograms();\n  }, []);\n\n  // RENDERING SESUAI 5 UI STATES:\n\n  // Status A: Sedang Loading\n  if (isLoading) {\n    return (\n      &lt;View style={styles.centerContainer}&gt;\n        &lt;ActivityIndicator size=\"large\" color=\"#2563eb\" /&gt;\n        &lt;Text style={styles.stateText}&gt;Mengambil data program prioritas...&lt;/Text&gt;\n      &lt;/View&gt;\n    );\n  }\n\n  // Status B: Terjadi Kesalahan (Error)\n  if (errorMessage) {\n    return (\n      &lt;View style={styles.centerContainer}&gt;\n        &lt;Text style={styles.errorIcon}&gt;⚠️&lt;/Text&gt;\n        &lt;Text style={styles.errorTitle}&gt;Oops, Terjadi Kendala&lt;/Text&gt;\n        &lt;Text style={styles.errorDesc}&gt;{errorMessage}&lt;/Text&gt;\n        \n        {/* Tombol Coba Lagi (Retry Button) */}\n        &lt;Pressable style={styles.retryButton} onPress={fetchPrograms}&gt;\n          &lt;Text style={styles.retryText}&gt;Coba Lagi&lt;/Text&gt;\n        &lt;/Pressable&gt;\n      &lt;/View&gt;\n    );\n  }\n\n  // Status C: Data Kosong (Empty)\n  if (data.length === 0) {\n    return (\n      &lt;View style={styles.centerContainer}&gt;\n        &lt;Text style={styles.emptyIcon}&gt;📋&lt;/Text&gt;\n        &lt;Text style={styles.stateText}&gt;Belum ada program prioritas aktif.&lt;/Text&gt;\n      &lt;/View&gt;\n    );\n  }\n\n  // Status D: Sukses Menampilkan Data\n  return (\n    &lt;FlatList\n      data={data}\n      keyExtractor={(item) => item.id.toString()}\n      renderItem={({ item }) =&gt; (\n        &lt;View style={styles.itemCard}&gt;\n          &lt;Text style={styles.itemTitle}&gt;{item.title}&lt;/Text&gt;\n          &lt;Text style={styles.itemDesc}&gt;{item.description}&lt;/Text&gt;\n        &lt;/View&gt;\n      )}\n    /&gt;\n  );\n}</code></pre>\n</div>\n      ",
        "deepDive": "Perhatikan pemakaian <code>finally { setIsLoading(false); }</code>. Blok <code>finally</code> adalah jaminan pasti bahwa spinner loading akan selalu dimatikan, baik saat proses fetch sukses sempurna maupun saat melempar error di tengah jalan.",
        "summary": "Fetch API tidak melempar error untuk status 4xx/5xx, sehingga properti response.ok wajib dicek manual dengan if (!response.ok) throw new Error(...). Blok finally menjamin loading state dimatikan. Tombol retry memungkinkan request ulang.",
        "pitfalls": "Tidak mengecek `response.ok` pada fetch, sehingga saat server membalas pesan HTML error 500, aplikasi mencoba menjalankan `response.json()` dan memicu syntax error JSON yang membingungkan.",
        "examTips": "Ingat prinsip: `response.ok` bernilai true HANYA jika status code berada dalam rentang 200 hingga 299. Selalu cek `response.ok` sebelum mem-parse JSON."
      },
      {
        "id": "w6-offline-8steps",
        "title": "6.4 Skenario Pengujian Offline 8 Langkah & Review Keandalan",
        "analogy": "Menguji sekoci darurat kapal laut: Kapal tidak boleh dianggap andal hanya karena berlayar mulus di laut tenang. Tim penguji sengaja mematikan mesin utama, membunyikan sirine darurat, menurunkan sekoci, mendayungnya, lalu menghidupkan kembali mesin untuk memastikan semua protokol darurat bekerja.",
        "content": "\n<h4>Skenario Pengujian Offline 8 Langkah (Task 03)</h4>\n<p>Untuk membuktikan aplikasi PresidentKu tahan banting dan berpredikat <strong>Reliable API</strong>, mahasiswa wajib mendemokan 8 langkah uji offline berikut di hadapan dosen pengampu:</p>\n\n<div class=\"timeline-steps my-4\">\n  <div class=\"step-card\">\n    <div class=\"step-num\">1</div>\n    <div class=\"step-content\">\n      <strong>Matikan Koneksi Internet</strong>\n      <p class=\"text-xs text-muted\">Aktifkan <em>Airplane Mode</em> (Mode Pesawat) atau matikan WiFi dan data seluler pada smartphone pengujian.</p>\n    </div>\n  </div>\n  <div class=\"step-card\">\n    <div class=\"step-num\">2</div>\n    <div class=\"step-content\">\n      <strong>Buka Halaman Program</strong>\n      <p class=\"text-xs text-muted\">Arahkan navigasi ke layar yang memerlukan pemanggilan data jaringan REST API.</p>\n    </div>\n  </div>\n  <div class=\"step-card\">\n    <div class=\"step-num\">3</div>\n    <div class=\"step-content\">\n      <strong>Amati Tampilan Antarmuka</strong>\n      <p class=\"text-xs text-muted\">Pastikan aplikasi TIDAK crash atau menampilkan layar putih kosong (blank screen).</p>\n    </div>\n  </div>\n  <div class=\"step-card\">\n    <div class=\"step-num\">4</div>\n    <div class=\"step-content\">\n      <strong>Verifikasi Pesan Offline</strong>\n      <p class=\"text-xs text-muted\">Pastikan muncul pesan yang jelas: <em>\"Tidak ada koneksi internet. Periksa koneksi Anda dan coba lagi.\"</em></p>\n    </div>\n  </div>\n  <div class=\"step-card\">\n    <div class=\"step-num\">5</div>\n    <div class=\"step-content\">\n      <strong>Periksa Keberadaan Tombol Coba Lagi</strong>\n      <p class=\"text-xs text-muted\">Pastikan ada elemen tombol aksi (Retry Button) yang mudah dilihat dan dijangkau jari.</p>\n    </div>\n  </div>\n  <div class=\"step-card\">\n    <div class=\"step-num\">6</div>\n    <div class=\"step-content\">\n      <strong>Nyalakan Kembali Koneksi Internet</strong>\n      <p class=\"text-xs text-muted\">Nonaktifkan Airplane Mode, pastikan sinyal 4G/WiFi ponsel kembali tersambung aktif.</p>\n    </div>\n  </div>\n  <div class=\"step-card\">\n    <div class=\"step-num\">7</div>\n    <div class=\"step-content\">\n      <strong>Tekan Tombol \"Coba Lagi\" (Retry)</strong>\n      <p class=\"text-xs text-muted\">Pengguna mengetuk tombol coba lagi tanpa harus me-restart atau menutup paksa aplikasi.</p>\n    </div>\n  </div>\n  <div class=\"step-card\">\n    <div class=\"step-num\">8</div>\n    <div class=\"step-content\">\n      <strong>Data Muncul Sempurna</strong>\n      <p class=\"text-xs text-muted\">Indikator loading berputar sejenak, lalu data program prioritas tampil normal di antarmuka.</p>\n    </div>\n  </div>\n</div>\n\n<h4>Perbandingan: Fragile API vs Reliable API</h4>\n<div class=\"comparison-table-wrapper my-4\">\n  <table class=\"table-compare\">\n    <thead>\n      <tr>\n        <th>Karakteristik Antarmuka</th>\n        <th>Fragile API (Aplikasi Rentan)</th>\n        <th>Reliable API (Aplikasi Tangguh)</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Saat Request Berjalan</strong></td>\n        <td>Layar diam membeku tanpa indikator</td>\n        <td>Muncul spinner / skeleton loading transparan</td>\n      </tr>\n      <tr>\n        <td><strong>Saat Internet Mati</strong></td>\n        <td>Aplikasi crash tertutup sendiri atau blank</td>\n        <td>Muncul pesan offline ramah dan terarah</td>\n      </tr>\n      <tr>\n        <td><strong>Penanganan Error 500</strong></td>\n        <td>Teks error merah teknis berantakan</td>\n        <td>Pesan sopan bahwa sistem sedang pemeliharaan</td>\n      </tr>\n      <tr>\n        <td><strong>Opsi Pemulihan</strong></td>\n        <td>Pengguna harus menutup paksa aplikasi</td>\n        <td>Cukup sentuh satu tombol \"Coba Lagi\" (Retry)</td>\n      </tr>\n      <tr>\n        <td><strong>Kondisi Data Nol</strong></td>\n        <td>Layar putih kosong membingungkan</td>\n        <td>Ilustrasi bersahabat \"Belum ada program\"</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n      ",
        "deepDive": "Untuk mendeteksi status internet sebelum menembak request, Anda juga dapat mengintegrasikan pustaka <code>@react-native-community/netinfo</code>. Pustaka ini memantau perubahan status online/offline perangkat secara live berbasis event listener OS.",
        "summary": "Uji coba offline 8 langkah membuktikan keandalan aplikasi di bawah kondisi nir-koneksi. Reliable API menangani kelima UI state dengan mulus dan menyediakan tombol coba lagi mandiri.",
        "pitfalls": "Membiarkan aplikasi me-restart paksa saat offline atau tidak menyediakan mekanisme retry sehingga pengguna terjebak di layar error.",
        "examTips": "Pahami urutan alur skenario uji coba offline 8 langkah dan kontras perbedaan antara Fragile API vs Reliable API."
      }
    ],
    "glossary": [
      {
        "term": "Timeout",
        "def": "Batas waktu maksimal toleransi bagi aplikasi untuk menunggu balasan paket data dari server sebelum membatalkan permintaan."
      },
      {
        "term": "AbortController",
        "def": "Objek kontroler standar JavaScript yang memungkinkan pengembang membatalkan permintaan fetch jaringan secara terprogram."
      },
      {
        "term": "response.ok",
        "def": "Properti boolean bawaan Fetch Response yang bernilai true hanya jika kode status HTTP berada di rentang 200 hingga 299."
      },
      {
        "term": "Retry Mechanism",
        "def": "Pola desain antarmuka yang memungkinkan pengguna memicu ulang proses pemanggilan API tanpa harus meninggalkan halaman."
      }
    ],
    "summaryWeek": "Pekan 6 menuntaskan Sprint 05: pemahaman ragam kegagalan komunikasi (HTTP 4xx/5xx, timeout, no internet), pendalaman kode status HTTP, penerapan 5 UI States (Idle, Loading, Success, Error, Empty), penguasaan perilaku Fetch API yang mewajibkan pengecekan `response.ok`, implementasi tombol Coba Lagi, dan demonstrasi skenario uji coba offline 8 langkah.",
    "sprintChecklist": [
      "Memahami 4 kelompok kegagalan: HTTP error, timeout, offline, dan data rusak",
      "Mampu membedakan status code 200, 400, 401, 403, 404, 500, dan 503",
      "Mengimplementasikan 5 UI State lengkap: Idle, Loading, Success, Error, Empty",
      "Memeriksa properti response.ok sebelum membaca body json()",
      "Membungkus pemanggilan API dengan try / catch / finally",
      "Memastikan indikator loading selalu dimatikan pada blok finally",
      "Menambahkan tombol 'Coba Lagi' (Retry) pada antarmuka penanganan error",
      "Menguji aplikasi dengan skenario offline 8 langkah menggunakan Mode Pesawat",
      "Melakukan commit dan push sprint 05 ke repositori GitHub"
    ],
    "checkUnderstanding": [
      {
        "question": "Bagaimanakah perilaku fungsi `fetch()` bawaan JavaScript ketika server merespons dengan kode status `404 Not Found` atau `500 Internal Server Error`?",
        "options": [
          "Fetch otomatis melempar exception dan langsung melompat ke blok catch",
          "Fetch tetap mengembalikan Promise yang Resolved (sukses diterima), sehingga blok catch TIDAK terpanggil kecuali response.ok diperiksa manual",
          "Fetch otomatis mengulang permintaan sebanyak 3 kali",
          "Aplikasi mobile langsung crash dan tertutup paksa oleh sistem operasi",
          "Fetch otomatis mengubah status code menjadi 200 OK"
        ],
        "correct": 1,
        "explanation": "Ini adalah karakteristik unik Fetch: selama ada respons balik dari server (meski 404 atau 500), Promise tetap resolved. Pengembang wajib memeriksa nilai boolean `response.ok` secara eksplisit."
      },
      {
        "question": "Apakah arti dari nilai properti `response.ok === true` pada objek respons Fetch?",
        "options": [
          "Koneksi internet pengguna memiliki kecepatan di atas 10 Mbps",
          "Status code HTTP berada pada rentang keberhasilan 200 sampai 299",
          "Data JSON telah berhasil disimpan di SQLite lokal",
          "Pengguna memiliki izin admin tertinggi",
          "Aplikasi sedang berjalan pada mode rilis (production)"
        ],
        "correct": 1,
        "explanation": "`response.ok` bernilai true hanya jika status kode HTTP berada di rentang 200-299. Jika status 400, 401, 404, atau 500, maka `response.ok` bernilai false."
      },
      {
        "question": "Mengapa pemanggilan `setIsLoading(false)` paling tepat diletakkan di dalam blok `finally`?",
        "options": [
          "Agar spinner berputar lebih cepat",
          "Karena blok `finally` dijamin selalu dieksekusi, baik saat pemanggilan API sukses maupun saat terjadi kegagalan/error",
          "Agar memori RAM smartphone tidak terpakai sama sekali",
          "Karena aturan sintaksis JavaScript mewajibkan `finally` memiliki setter state",
          "Untuk mencegah pengguna menekan tombol kembali"
        ],
        "correct": 1,
        "explanation": "Blok `finally` selalu dijalankan setelah blok `try` atau `catch` selesai. Meletakkan pematian loading di sana mencegah bug 'spinner berputar selamanya' saat error terjadi."
      },
      {
        "question": "Manakah kondisi antarmuka yang tepat untuk status 'EMPTY STATE' pada aplikasi PresidentKu?",
        "options": [
          "Layar putih kosong melompong saat internet mati",
          "Tampilan animasi spinner berputar terus-menerus tanpa batas waktu",
          "Tampilan grafis ramah dan teks penjelas saat pemanggilan API sukses namun server mengembalikan daftar program berjumlah nol (data kosong)",
          "Kotak dialog peringatan bahwa sistem operasi ponsel tidak kompatibel",
          "Layar merah peringatan token otentikasi kedaluwarsa"
        ],
        "correct": 2,
        "explanation": "Empty state terjadi saat request berhasil (200 OK) tetapi tidak ada konten data yang cocok (array length 0). UI wajib memberikan feedback jelas seperti 'Belum ada program'."
      }
    ]
  },
  {
    "id": 7,
    "weekNumber": 7,
    "title": "Device Sensor",
    "subtitle": "Sprint 06 — Dari Data Server ke Data Sensor Fisik Perangkat Secara Real-Time",
    "sprint": "Sprint 06 - Integrasi Sensor Akselerometer & Shake Detection PresidentKu",
    "readTime": "25 menit",
    "topics": [
      "Transisi Data API ke Data Sensor",
      "Jenis Sensor Fisik (Akselerometer, Giroskop, Magnetometer)",
      "Lapisan Akses Hardware & Runtime Permission",
      "Implementasi expo-sensors & Subscription Cleanup",
      "Kalkulasi Magnitude & Deteksi Goncangan (Shake Detection)",
      "Kotak Verifikasi Satuan (g vs m/s²)"
    ],
    "subtopics": [
      {
        "id": "w7-sensor-fundamentals",
        "title": "7.1 Mengenal Sensor Perangkat & Lapisan Akses Hardware",
        "analogy": "Jika REST API seperti menerima koran berita dari luar kota (data datang saat diminta lewat kurir), maka sensor ponsel adalah indra peraba dan telinga langsung pada tubuh smartphone: ia merasakan getaran, kemiringan, dan orientasi gravitasi secara seketika ratusan kali per detik.",
        "content": "\n<p class=\"lead\">Hingga Pekan 6, seluruh data aplikasi PresidentKu bersumber dari server jarak jauh melalui REST API. Pada Pekan 7 (Sprint 06), kita melangkah ke <strong>Pilar Keempat: Device Features</strong> dengan mengakses sensor fisik yang tertanam langsung di dalam sirkuit smartphone pengguna.</p>\n\n<h4>Perbandingan: Data Server (API) vs Data Sensor</h4>\n<div class=\"comparison-table-wrapper my-4\">\n  <table class=\"table-compare\">\n    <thead>\n      <tr>\n        <th>Karakteristik</th>\n        <th>Data Server (REST API)</th>\n        <th>Data Sensor (Hardware)</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Asal Data</strong></td>\n        <td>Database server jarak jauh di cloud</td>\n        <td>Komponen fisik silikon mikro (MEMS) di dalam HP</td>\n      </tr>\n      <tr>\n        <td><strong>Sifat Pembaruan</strong></td>\n        <td>Statik atau sesuai jadwal request (On-demand)</td>\n        <td>Streaming numerik real-time kontinu (Continuous)</td>\n      </tr>\n      <tr>\n        <td><strong>Ketergantungan</strong></td>\n        <td>Sangat bergantung pada koneksi internet</td>\n        <td>Bekerja 100% lokal tanpa memerlukan internet</td>\n      </tr>\n      <tr>\n        <td><strong>Format Data</strong></td>\n        <td>JSON terstruktur (string, boolean, array)</td>\n        <td>Vektor numerik desimal tinggi (x, y, z koordinat)</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\n<h4>Jenis-Jenis Sensor Utama pada Smartphone Modern</h4>\n<div class=\"grid-2-col my-4\">\n  <div class=\"card-feature\">\n    <h5>1. Accelerometer (Akselerometer)</h5>\n    <p>Mengukur laju perubahan kecepatan (percepatan/akselerasi) fisik pada 3 sumbu ruang: Sumbu X (kiri/kanan), Sumbu Y (atas/bawah), dan Sumbu Z (depan/belakang tegak lurus layar). Digunakan untuk mendeteksi goncangan (shake), langkah kaki (pedometer), dan orientasi layar.</p>\n  </div>\n  <div class=\"card-feature\">\n    <h5>2. Gyroscope (Giroskop)</h5>\n    <p>Mengukur kecepatan sudut rotasi perputaran ponsel pada sumbu <em>Roll, Pitch, dan Yaw</em> (satuan rad/s atau derajat/detik). Esensial untuk kontrol game kemudi, bidikan kamera, navigasi presisi, dan aplikasi Augmented Reality (AR/VR).</p>\n  </div>\n  <div class=\"card-feature\">\n    <h5>3. Magnetometer (Kompas Digital)</h5>\n    <p>Mengukur kekuatan dan arah medan magnet bumi di sekitar ponsel. Digunakan bersama GPS untuk menentukan arah hadap mata angin utara-selatan di aplikasi peta.</p>\n  </div>\n  <div class=\"card-feature\">\n    <h5>4. Sensor Tambahan (Lainnya)</h5>\n    <p>Sensor Cahaya Lingkungan (Ambient Light), Sensor Jarak Dekat (Proximity Sensor di speaker telinga), Barometer (tekanan udara untuk ketinggian elevasi), dan Kamera.</p>\n  </div>\n</div>\n\n<h4>Arsitektur Lapisan Akses Sensor (Hardware Abstraction Layer)</h4>\n<p>Aplikasi mobile tidak dapat menyentuh sirkuit sensor silikon secara langsung karena alasan stabilitas sistem operasi dan isolasi keamanan (sandboxing). Panggilan sensor melewati 4 lapisan:</p>\n\n<div class=\"diagram-container text-center my-4\">\n  <svg viewBox=\"0 0 760 90\" class=\"svg-flowchart\">\n    <rect x=\"10\" y=\"20\" width=\"130\" height=\"50\" rx=\"8\" class=\"svg-node-blue\" />\n    <text x=\"75\" y=\"45\" class=\"svg-text\">1. MOBILE APP</text>\n    <text x=\"75\" y=\"60\" class=\"svg-subtext\">(PresidentKu UI)</text>\n    \n    <path d=\"M 145 45 L 185 45\" class=\"svg-arrow\" marker-end=\"url(#arrow)\" />\n    \n    <rect x=\"190\" y=\"20\" width=\"145\" height=\"50\" rx=\"8\" class=\"svg-node-indigo\" />\n    <text x=\"262\" y=\"45\" class=\"svg-text\">2. SENSOR API</text>\n    <text x=\"262\" y=\"60\" class=\"svg-subtext\">(expo-sensors)</text>\n    \n    <path d=\"M 340 45 L 380 45\" class=\"svg-arrow\" marker-end=\"url(#arrow)\" />\n    \n    <rect x=\"385\" y=\"20\" width=\"165\" height=\"50\" rx=\"8\" class=\"svg-node-purple\" />\n    <text x=\"467\" y=\"45\" class=\"svg-text\">3. OPERATING SYSTEM</text>\n    <text x=\"467\" y=\"60\" class=\"svg-subtext\">(Permission & Drivers)</text>\n    \n    <path d=\"M 555 45 L 595 45\" class=\"svg-arrow\" marker-end=\"url(#arrow)\" />\n    \n    <rect x=\"600\" y=\"20\" width=\"150\" height=\"50\" rx=\"8\" class=\"svg-node-emerald\" />\n    <text x=\"675\" y=\"45\" class=\"svg-text\">4. DEVICE SENSOR</text>\n    <text x=\"675\" y=\"60\" class=\"svg-subtext\">(Chip Hardware MEMS)</text>\n  </svg>\n</div>\n\n<h4>Device Capability: \"Tidak Semua Smartphone Punya Semua Sensor\"</h4>\n<p>Sebelum mengaktifkan pembacaan sensor, aplikasi yang profesional wajib melakukan pengecekan ketersediaan hardware (<em>Device Capability Check</em>) menggunakan method <code>isAvailableAsync()</code>. Misalnya, banyak smartphone kelas bawah tidak dilengkapi chip giroskop fisik (hanya mengandalkan virtual sensor).</p>\n      ",
        "deepDive": "Sensor modern di smartphone diproduksi menggunakan teknologi <strong>MEMS (Micro-Electro-Mechanical Systems)</strong>. Di dalam chip silikon mikroskopis tersebut terdapat massa mikro pegas silikon yang bergeser saat ponsel digerakkan, menghasilkan perubahan kapasitansi listrik yang dikonversi menjadi data angka biner oleh ADC (Analog-to-Digital Converter).",
        "summary": "Data sensor bersifat lokal, kontinu, dan real-time. Akselerometer mengukur percepatan 3 sumbu, giroskop mengukur rotasi sudut, dan magnetometer mengukur arah medan magnet. Akses melewati lapisan App -> Sensor API -> OS -> Hardware chip.",
        "pitfalls": "Langsung memasang listener sensor tanpa memeriksa apakah perangkat ponsel pengguna memiliki sensor tersebut, yang dapat memicu crash diam-diam (silent failure).",
        "examTips": "Pahami perbedaan fungsi akselerometer (percepatan gerak/gravitasi) vs giroskop (rotasi sudut roll/pitch/yaw)."
      },
      {
        "id": "w7-permissions",
        "title": "7.2 Runtime Permission & Kebijakan Privasi Pengguna",
        "analogy": "Meminta izin runtime seperti mengetuk pintu rumah seseorang sebelum masuk ke ruang tidur: Anda menyapa ramah, menjelaskan keperluan Anda ('Boleh saya meminjam senter di kamar?'), menunggu tuan rumah berkata 'Boleh' (Allow), dan jika tuan rumah menolak (Deny), Anda tidak boleh mendobrak pintu paksa melainkan mencari lilin di ruang tamu.",
        "content": "\n<h4>Evolusi Perizinan: Install-Time vs Runtime Permission</h4>\n<p>Pada versi Android lama, izin diminta sekaligus saat pengguna mendownload aplikasi di Play Store (<em>Install-Time</em>). Sejak Android 6.0+ dan iOS, industri beralih total ke <strong>Runtime Permission</strong>: izin diminta secara kontekstual tepat saat fitur bersangkutan hendak digunakan oleh pengguna di layar.</p>\n\n<div class=\"diagram-container text-center my-4\">\n  <svg viewBox=\"0 0 740 100\" class=\"svg-flowchart\">\n    <rect x=\"10\" y=\"30\" width=\"120\" height=\"50\" rx=\"8\" class=\"svg-node-blue\" />\n    <text x=\"70\" y=\"55\" class=\"svg-text\">1. USER ACTION</text>\n    <text x=\"70\" y=\"70\" class=\"svg-subtext\">(Pemicu Fitur)</text>\n    \n    <path d=\"M 135 55 L 185 55\" class=\"svg-arrow\" marker-end=\"url(#arrow)\" />\n    \n    <rect x=\"190\" y=\"30\" width=\"130\" height=\"50\" rx=\"8\" class=\"svg-node-indigo\" />\n    <text x=\"255\" y=\"55\" class=\"svg-text\">2. CEK STATUS</text>\n    <text x=\"255\" y=\"70\" class=\"svg-subtext\">(Granted / Undetermined)</text>\n    \n    <path d=\"M 325 55 L 375 55\" class=\"svg-arrow\" marker-end=\"url(#arrow)\" />\n    \n    <rect x=\"380\" y=\"30\" width=\"140\" height=\"50\" rx=\"8\" class=\"svg-node-purple\" />\n    <text x=\"450\" y=\"55\" class=\"svg-text\">3. REQUEST DIALOG</text>\n    <text x=\"450\" y=\"70\" class=\"svg-subtext\">(Native Pop-up OS)</text>\n    \n    <path d=\"M 525 40 L 595 25\" class=\"svg-arrow\" marker-end=\"url(#arrow)\" />\n    <text x=\"555\" y=\"25\" class=\"svg-label\">Allow</text>\n    \n    <rect x=\"600\" y=\"5\" width=\"130\" height=\"40\" rx=\"6\" class=\"svg-node-emerald\" />\n    <text x=\"665\" y=\"30\" class=\"svg-text\">4A. AKSES SENSOR</text>\n    \n    <path d=\"M 525 70 L 595 85\" class=\"svg-arrow\" marker-end=\"url(#arrow)\" />\n    <text x=\"555\" y=\"90\" class=\"svg-label\">Deny</text>\n    \n    <rect x=\"600\" y=\"65\" width=\"130\" height=\"40\" rx=\"6\" class=\"svg-node-pink\" />\n    <text x=\"665\" y=\"90\" class=\"svg-text\">4B. FALLBACK UI</text>\n  </svg>\n</div>\n\n<h4>5 Praktik Terbaik (Best Practices) Penanganan Izin Sensor</h4>\n<ol class=\"styled-numbered\">\n  <li><strong>Jelaskan Alasan (Provide Clear Rationale):</strong> Beri tahu pengguna MENGAPA aplikasi butuh izin tersebut sebelum memunculkan popup OS (misal: \"PresidentKu butuh izin sensor gerak untuk fitur darurat guncangan\").</li>\n  <li><strong>Minta Tepat Waktu (Just-In-Time Request):</strong> Jangan meminta izin kamera atau lokasi di saat pertama kali aplikasi dibuka saat pengguna baru melihat logo pembuka! Minta hanya saat tombol \"Buka Kamera KTP\" disentuh.</li>\n  <li><strong>Tangani Penolakan dengan Anggun (Graceful Degradation):</strong> Jika pengguna menolak izin (Deny), jangan biarkan aplikasi crash. Sediakan tombol manual sebagai alternatif (misal: tombol ketuk darurat jika sensor goncangan ditolak).</li>\n  <li><strong>Sediakan Pintasan ke Pengaturan (Link to Settings):</strong> Jika izin ditolak permanen, sediakan tombol yang langsung membuka layar <code>Linking.openSettings()</code>.</li>\n  <li><strong>Jaga Privasi & Hanya untuk Tujuan Fitur:</strong> Dilarang merekam atau mengirimkan data sensor telemetri pengguna ke server tanpa transparansi dan persetujuan tertulis.</li>\n</ol>\n      ",
        "deepDive": "Perlu dicatat bahwa untuk sensor gerak standar (seperti Akselerometer dasar), banyak versi sistem operasi Android tidak menuntut izin popup runtime khusus karena dianggap berisiko rendah privasi. Namun pada iOS dan Android level API tinggi, sensor aktivitas fisik (<em>ACTIVITY_RECOGNITION</em>) dan sensor biometrik tetap mewajibkan deklarasi izin ketat.",
        "summary": "Izin runtime ditanyakan secara kontekstual di aplikasi (Just-in-Time). Developer wajib menjelaskan alasan izin, menangani penolakan pengguna secara aman, dan menyediakan alternatif antarmuka jika akses ditolak.",
        "pitfalls": "Meminta seluruh izin perangkat (kamera, lokasi, mikrofon, sensor) sekaligus di halaman selamat datang sebelum pengguna melihat fungsi aplikasi.",
        "examTips": "Pahami perbedaan install-time permission vs runtime permission serta alur penanganan permission: request -> allow/deny."
      },
      {
        "id": "w7-code-shake-detection",
        "title": "7.3 Implementasi expo-sensors, Magnitude & Shake Detection",
        "analogy": "Mendeteksi gempa bumi: Jarum seismograf terus berayun kecil mengikuti angin (noise wajar). Namun jika terjadi getaran hebat yang melompat melebihi batas garis merah (threshold), sirine tanda bahaya gedung otomatis meraung keras (trigger aksi darurat).",
        "content": "\n<h4>Pustaka expo-sensors</h4>\n<p>Dalam proyek React Native Expo, seluruh sensor diakses melalui modul terpadu <code>expo-sensors</code>. Komponen yang akan kita gunakan untuk fitur darurat PresidentKu adalah <code>Accelerometer</code>.</p>\n\n<h4>Alur Pemrosesan Data Sensor Mentah</h4>\n<div class=\"code-flow my-3\">\n  Raw Sensor Data &rarr; Noise Filtering &rarr; Data Transformation &rarr; Event Triggering\n</div>\n\n<h4>Rumus Perhitungan Magnitude (Total Percepatan Vektor)</h4>\n<p>Akselerometer menghasilkan nilai percepatan terpisah pada tiga sumbu ($x, y, z$). Untuk mengetahui seberapa kuat ponsel digoncangkan tanpa memedulikan arah orientasinya, kita menghitung <strong>Magnitude Vektor Euclidian</strong>:</p>\n<div class=\"callout callout-info text-center font-mono\">\n  <strong>Magnitude = &radic;(x&sup2; + y&sup2; + z&sup2;)</strong><br/>\n  <span class=\"text-sm\">const magnitude = Math.sqrt(x * x + y * y + z * z);</span>\n</div>\n<p>Nilai magnitude ini kemudian kita bandingkan dengan nilai <strong>Threshold (Ambang Batas)</strong> yang telah ditentukan. Jika magnitude melampaui threshold, kita picu getaran haptik menggunakan <code>Vibration.vibrate()</code>.</p>\n\n<div class=\"code-block-wrapper\">\n  <div class=\"code-header\">\n    <span>SensorScreen.js — Implementasi Lengkap Accelerometer & Shake Detection</span>\n    <button class=\"btn-copy\" onclick=\"copyCode(this)\"><i class=\"fa-regular fa-copy\"></i> Salin</button>\n  </div>\n  <pre><code class=\"language-jsx\">import React, { useState, useEffect } from 'react';\nimport { View, Text, Vibration, StyleSheet, Pressable } from 'react-native';\nimport { Accelerometer } from 'expo-sensors';\n\nexport default function SensorScreen() {\n  // 1. State penampung koordinat raw data akselerometer\n  const [sensorData, setSensorData] = useState({ x: 0, y: 0, z: 0 });\n  const [shakeStatus, setShakeStatus] = useState('Tenang');\n\n  // Ambang batas goncangan (Threshold)\n  // Catatan: Nilai 1.8g jika satuan g (Expo), atau ~18 m/s² jika SI\n  const SHAKE_THRESHOLD = 1.8;\n\n  useEffect(() => {\n    // 2. Mengatur interval pembaruan sensor (100 milidetik = 10 kali per detik)\n    Accelerometer.setUpdateInterval(100);\n\n    // 3. Memasang listener subscription untuk menerima streaming data\n    const subscription = Accelerometer.addListener((data) => {\n      setSensorData(data);\n\n      // 4. Menghitung total magnitude getaran 3 sumbu\n      const magnitude = Math.sqrt(\n        data.x * data.x + data.y * data.y + data.z * data.z\n      );\n\n      // 5. Cek apakah goncangan melampaui ambang batas\n      if (magnitude > SHAKE_THRESHOLD) {\n        setShakeStatus('Goyang Terdeteksi!');\n        // Memicu getaran fisik smartphone selama 500 ms\n        Vibration.vibrate(500);\n\n        // Reset status kembali tenang setelah 1.5 detik\n        setTimeout(() => {\n          setShakeStatus('Tenang');\n        }, 1500);\n      }\n    });\n\n    // 6. CLEANUP FUNCTION KRUSIAL: Mencegah Memory Leak & Baterai Boros!\n    return () => {\n      subscription.remove();\n      console.log('Listener sensor berhasil dilepas saat unmount.');\n    };\n  }, []); // Array dependensi kosong: pasang sekali saat mount\n\n  return (\n    &lt;View style={styles.container}&gt;\n      &lt;Text style={styles.header}&gt;Pantauan Sensor Gerak PresidentKu&lt;/Text&gt;\n      \n      {/* Tampilan Koordinat 3 Sumbu */}\n      &lt;View style={styles.dataCard}&gt;\n        &lt;Text style={styles.axisText}&gt;Sumbu X : {sensorData.x.toFixed(2)}&lt;/Text&gt;\n        &lt;Text style={styles.axisText}&gt;Sumbu Y : {sensorData.y.toFixed(2)}&lt;/Text&gt;\n        &lt;Text style={styles.axisText}&gt;Sumbu Z : {sensorData.z.toFixed(2)}&lt;/Text&gt;\n      &lt;/View&gt;\n\n      {/* Indikator Status Goncangan */}\n      &lt;View style={[\n        styles.statusBox, \n        shakeStatus === 'Goyang Terdeteksi!' ? styles.statusAlert : styles.statusNormal\n      ]}&gt;\n        &lt;Text style={styles.statusTitle}&gt;Status Deteksi:&lt;/Text&gt;\n        &lt;Text style={styles.statusValue}&gt;{shakeStatus}&lt;/Text&gt;\n      &lt;/View&gt;\n    &lt;/View&gt;\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: { flex: 1, padding: 20, backgroundColor: '#f8fafc', justifyContent: 'center' },\n  header: { fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },\n  dataCard: { backgroundColor: '#ffffff', padding: 16, borderRadius: 12, elevation: 2, marginBottom: 20 },\n  axisText: { fontSize: 16, fontFamily: 'monospace', marginVertical: 4 },\n  statusBox: { padding: 20, borderRadius: 12, alignItems: 'center' },\n  statusNormal: { backgroundColor: '#e2e8f0' },\n  statusAlert: { backgroundColor: '#fca5a5' }, // Merah muda saat darurat\n  statusTitle: { fontSize: 14, color: '#475569' },\n  statusValue: { fontSize: 20, fontWeight: 'bold', marginTop: 4 },\n});</code></pre>\n</div>\n\n<h4>Mengapa Cleanup <code>subscription.remove()</code> Sangat Krusial?</h4>\n<p>Di dalam fungsi return pada <code>useEffect</code>, kita memanggil <code>subscription.remove()</code>. Jika baris ini diabaikan:</p>\n<ul class=\"styled-list\">\n  <li><strong>Memory Leak (Kebocoran Memori):</strong> Listener sensor akan terus hidup di latar belakang sistem operasi meskipun pengguna telah berpindah ke halaman lain.</li>\n  <li><strong>Baterai Cepat Terkuras:</strong> Chip mikroprosesor MEMS dipaksa terus mengirim data 10 kali per detik tanpa henti, menyebabkan smartphone menjadi panas dan baterai cepat drop.</li>\n  <li><strong>Aplikasi Menjadi Lambat (Lag):</strong> Terjadi penumpukan pemanggilan callback berulang di thread JavaScript.</li>\n</ul>\n      ",
        "deepDive": "Fungsi <code>toFixed(2)</code> digunakan untuk membatasi tampilan desimal angka sensor menjadi hanya 2 digit di belakang koma (misal: <code>0.98</code> bukan <code>0.981245678234</code>). Tanpa toFixed, re-render komponen akan sangat berat karena nilai desimal panjang berubah liar tiap milidetik.",
        "summary": "Accelerometer diakses lewat expo-sensors dengan setUpdateInterval dan addListener. Total percepatan dihitung dengan rumus magnitude Math.sqrt(x² + y² + z²). Jika magnitude melebihi ambang batas (threshold), getaran dipicu via Vibration.vibrate(). Wajib melakukan cleanup subscription.remove() di return useEffect.",
        "pitfalls": "Lupa memanggil `subscription.remove()` pada fase unmount useEffect, menyebabkan sensor terus aktif di latar belakang dan menghabiskan baterai pengguna.",
        "examTips": "Kuasai rumus magnitude Euclidian dan pahami fungsi krusial cleanup `subscription.remove()` untuk mencegah memory leak dan baterai boros."
      },
      {
        "id": "w7-verification-box",
        "title": "7.4 Kotak Verifikasi Akademik: Satuan Sensor & Komparasi Ekosistem",
        "analogy": "Konversi mata uang: Satu Dolar Amerika setara dengan sekitar Rp 15.500,-. Nilai fisiknya sama, namun angka yang tertulis di kertas berbeda bergantung pada satuan moneter yang disepakati oleh sistem.",
        "content": "\n<div class=\"callout callout-warning\">\n  <h4><i class=\"fa-solid fa-triangle-exclamation\"></i> KOTAK PERINGATAN VERIFIKASI (Penting untuk UTS!)</h4>\n  \n  <p><strong>1. Verifikasi Satuan Percepatan (g vs m/s&sup2;):</strong></p>\n  <ul class=\"styled-list\">\n    <li>Pada beberapa lembar slide perkuliahan, angka percepatan gravitasi bumi dicantumkan sebagai <strong>9.81 m/s&sup2;</strong> (satuan standar internasional SI).</li>\n    <li>Namun, berdasarkan <em>dokumentasi resmi Expo Sensors (React Native)</em>, method <code>Accelerometer</code> mengembalikan nilai percepatan yang telah dinormalisasi dalam <strong>satuan gravitasi bumi (unit g)</strong>.</li>\n    <li><strong>Hubungan Matematis Keduanya:</strong><br/>\n      <code>1 g &asymp; 9.81 m/s&sup2;</code>\n    </li>\n    <li><strong>Implikasi Praktis saat Menentukan Threshold:</strong>\n      <ul>\n        <li>Jika perangkat Anda menggunakan satuan <strong>g</strong> (Expo Go standar): Saat HP diletakkan diam tegak di atas meja, nilai magnitude berada di sekitar <strong>1.0 g</strong>. Maka ambang batas deteksi goncangan (shake threshold) wajar diatur di kisaran <strong>1.5 g s/d 2.0 g</strong>.</li>\n        <li>Jika perangkat Anda menggunakan satuan <strong>m/s&sup2;</strong>: Saat HP diam di meja, nilainya berada di sekitar <strong>9.81 m/s&sup2;</strong>. Maka ambang batas goncangan diatur di kisaran <strong>15 s/d 20 m/s&sup2;</strong>.</li>\n      </ul>\n    </li>\n    <li><em>Rekomendasi bagi Mahasiswa:</em> Selalu periksa nilai pembacaan sensor saat posisi diam di perangkat uji Anda dan rujuk dokumentasi resmi <code>docs.expo.dev/versions/latest/sdk/accelerometer/</code>.</li>\n  </ul>\n\n  <hr class=\"my-3\"/>\n\n  <p><strong>2. Catatan Ekosistem Slide (React Native vs Flutter):</strong></p>\n  <p class=\"mb-0\">Beberapa lembar slide referensi universitas mungkin menyinggung paket sensor Flutter (seperti pustaka <code>sensors_plus</code>). Perlu ditegaskan bahwa <strong>proyek aplikasi PresidentKu dan modul praktikum kita menggunakan React Native dengan pustaka <code>expo-sensors</code></strong>. Meskipun nama pustakanya berbeda, gagasan arsitektur intinya 100% identik: data diakses lewat listener 3 sumbu (X, Y, Z), memerlukan penanganan siklus hidup (lifecycle cleanup), dan dihitung menggunakan rumus magnitude yang sama.</p>\n</div>\n      ",
        "deepDive": "Perhatikan bahwa sumbu Z pada akselerometer membaca tarikan gravitasi bumi ke arah inti bumi. Ketika ponsel diletakkan telentang menghadap langit di atas meja datar, sumbu X &asymp; 0, Y &asymp; 0, dan Z &asymp; 1 g (atau 9.81 m/s²). Jika ponsel dijatuhkan bebas (free fall), seluruh sumbu x, y, z akan mendekati 0.",
        "summary": "Satuan akselerometer di Expo Sensors adalah g (1 g = 9.81 m/s²). Di meja diam, magnitude = 1 g (atau 9.81 m/s²). Ambang batas goncangan disesuaikan dengan satuan yang digunakan. Konsep React Native (expo-sensors) dan Flutter (sensors_plus) memiliki prinsip kerja arsitektural yang sama.",
        "pitfalls": "Memasang threshold goncangan sebesar 1.8 m/s² pada sistem yang membaca dalam satuan m/s², menyebabkan goncangan terdeteksi terus-menerus padahal ponsel sedang diam di meja (karena nilai gravitasi bumi 9.81 m/s² sudah melampaui 1.8).",
        "examTips": "Kuasai konversi satuan 1 g = 9.81 m/s² dan nilai pembacaan akselerometer saat ponsel dalam kondisi diam di meja."
      }
    ],
    "glossary": [
      {
        "term": "Accelerometer",
        "def": "Sensor hardware yang mendeteksi percepatan linier dan tarikan gravitasi bumi pada sumbu tiga dimensi X, Y, dan Z."
      },
      {
        "term": "Magnitude",
        "def": "Besaran skalar total percepatan getaran tanpa memedulikan arah vektor, dihitung dengan akar kuadrat jumlah kuadrat koordinat."
      },
      {
        "term": "Threshold",
        "def": "Nilai ambang batas numerik yang harus dilampaui agar sebuah kondisi atau aksi (misal alarm goncangan) dapat dipicu."
      },
      {
        "term": "Subscription Cleanup",
        "def": "Proses pelepasan listener sistem operasi saat komponen React ditutup untuk menghentikan pemborosan memori dan daya baterai."
      }
    ],
    "summaryWeek": "Pekan 7 menuntaskan Sprint 06: transisi dari REST API ke data sensor fisik perangkat, pemahaman fungsi akselerometer dan giroskop, lapisan akses hardware abstraction dan perizinan runtime, implementasi listener dengan expo-sensors, rumus magnitude Euclidian untuk shake detection, getaran haptik Vibration.vibrate(), kewajiban subscription cleanup, serta klarifikasi kritis perbedaan satuan g vs 9.81 m/s².",
    "sprintChecklist": [
      "Memahami perbedaan karakteristik data REST API vs data sensor hardware",
      "Mampu menjelaskan fungsi 3 sumbu koordinat akselerometer (X, Y, Z)",
      "Memahami lapisan akses: Mobile App -> Sensor API -> OS -> Device Hardware",
      "Menerapkan runtime permission dan menangani penolakan pengguna secara baik",
      "Memasang listener Accelerometer.addListener dengan interval setUpdateInterval(100)",
      "Menghitung magnitude goncangan dengan Math.sqrt(x*x + y*y + z*z)",
      "Mengaktifkan getaran haptik Vibration.vibrate() saat threshold terlampaui",
      "Melakukan cleanup listener subscription.remove() di fase unmount useEffect",
      "Memahami kotak verifikasi akademik satuan g vs 9.81 m/s²",
      "Melakukan commit dan push sprint 06 ke repositori GitHub"
    ],
    "checkUnderstanding": [
      {
        "question": "Apakah rumus matematis yang tepat untuk menghitung total magnitude percepatan dari koordinat sensor akselerometer 3 sumbu (x, y, z)?",
        "options": [
          "Magnitude = (x + y + z) / 3",
          "Magnitude = Math.sqrt(x*x + y*y + z*z)",
          "Magnitude = x * y * z",
          "Magnitude = Math.max(x, y, z)",
          "Magnitude = Math.pow(x, 2) + Math.pow(y, 2)"
        ],
        "correct": 1,
        "explanation": "Magnitude vektor percepatan 3 dimensi dihitung menggunakan teorema Pythagoras 3D: akar kuadrat dari jumlah kuadrat x, y, dan z (Math.sqrt(x*x + y*y + z*z))."
      },
      {
        "question": "Berapakah nilai perkiraan pembacaan magnitude akselerometer pada aplikasi Expo Sensors saat smartphone diletakkan diam telentang di atas meja datar?",
        "options": [
          "Tepat 0 g",
          "Sekitar 1.0 g (atau setara ~9.81 m/s²)",
          "Sekitar 100 g",
          "Minus 5.0 g",
          "Nilai tidak terdefinisi (NaN)"
        ],
        "correct": 1,
        "explanation": "Meskipun ponsel diam, akselerometer mendeteksi percepatan gravitasi bumi sebesar 1 g (atau 9.81 m/s² dalam satuan SI) yang bekerja ke arah bawah pada sumbu Z."
      },
      {
        "question": "Mengapa pemanggilan method `subscription.remove()` di dalam fungsi pengembalian (cleanup) `useEffect` sangat penting pada penggunaan sensor?",
        "options": [
          "Untuk menghapus seluruh riwayat commit di repositori Git",
          "Mencegah kebocoran memori (memory leak) dan pengurasan daya baterai yang parah saat layar tidak lagi ditampilkan",
          "Agar sensor ponsel dapat dijual kembali dengan harga tinggi",
          "Karena sistem operasi akan otomatis mematikan layar HP jika tidak ada cleanup",
          "Untuk mengubah satuan m/s² menjadi unit g secara otomatis"
        ],
        "correct": 1,
        "explanation": "Listener sensor yang tidak dilepas akan terus berjalan di latar belakang OS, menyedot daya komputasi CPU dan baterai secara masif serta memicu kebocoran memori."
      },
      {
        "question": "Bagaimanakah hubungan antara satuan percepatan 'g' pada pustaka Expo Sensors dengan satuan internasional 'm/s²'?",
        "options": [
          "1 g setara dengan 1 m/s²",
          "1 g setara dengan sekitar 9.81 m/s²",
          "1 g setara dengan 100 m/s²",
          "1 g adalah turunan dari satuan kecepatan km/jam",
          "Keduanya tidak memiliki korelasi fisik sama sekali"
        ],
        "correct": 1,
        "explanation": "1 unit g didefinisikan sebagai percepatan gravitasi standar bumi di permukaan laut, yaitu setara dengan sekitar 9.80665 m/s² (dibulatkan 9.81 m/s²)."
      }
    ]
  }
];