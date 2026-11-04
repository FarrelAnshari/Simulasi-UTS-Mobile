// scripts/materi_w1.js
module.exports = {
  id: 1,
  weekNumber: 1,
  title: "Course Orientation & Project Kickoff",
  subtitle: "Dari Belajar Mobile Development Menuju Membangun Aplikasi Nyata",
  sprint: "Sprint 00 - Inisiasi Proyek",
  readTime: "15 menit",
  topics: ["Kontrak Kuliah", "4 Pilar Mobile", "CPMK & 12 Sub-CPMK", "Project-Based Learning", "Kolaborasi Tim & GitHub", "Etika & Pemanfaatan AI", "Roadmap 16 Pertemuan"],
  subtopics: [
    {
      id: "w1-kontrak",
      title: "1.1 Kontrak Perkuliahan & Aturan Main",
      analogy: "Membangun aplikasi mobile di industri sama seperti ekspedisi tim profesional. Disiplin, kesiapan peralatan, dan kepatuhan pada kesepakatan kerja adalah fondasi keberhasilan produk sebelum satu baris kode pun ditulis.",
      content: `
<p class="lead">Selamat datang di mata kuliah <strong>Pemrograman Mobile</strong>. Perkuliahan ini dirancang bukan sekadar untuk menghafal sintaksis, melainkan untuk melatih mahasiswa berpikir dan bekerja layaknya tim rekayasa perangkat lunak mobile modern. Untuk menjamin proses belajar berjalan efektif dan adil, disepakati kontrak perkuliahan yang mengikat seluruh peserta.</p>

<h4>Aturan Utama Perkuliahan</h4>
<ul class="styled-list">
  <li><strong>Kehadiran Minimal 80%:</strong> Mahasiswa wajib hadir minimal 80% dari total 16 pertemuan (setara minimal 12 kali pertemuan hadir). Kurang dari 12 kehadiran berakibat otomatis tidak memenuhi syarat kelulusan mata kuliah.</li>
  <li><strong>Kewajiban Mengikuti UTS & UAS:</strong> Ujian Tengah Semester (Pekan 8) dan Ujian Akhir Semester (Pekan 16) bersifat mutlak dan tidak dapat digantikan dengan penugasan lain. UTS menguji pemahaman arsitektur antarmuka, keamanan data lokal, integrasi API, serta sensor (Sprint 01–06).</li>
  <li><strong>Prosedur Izin Maksimal H-1:</strong> Segala bentuk ketidakhadiran harus diinformasikan kepada dosen pengampu maksimal H-1 sebelum jadwal kelas dimulai, disertai bukti otentik (surat dokter resmi, surat tugas institusi). Izin mendadak pada hari H tanpa kondisi kedaruratan terverifikasi dianggap alpa.</li>
  <li><strong>Peralatan Kerja & Tugas Mingguan:</strong> Setiap mahasiswa wajib membawa laptop yang siap pakai dengan lingkungan pengembangan yang sudah dikonfigurasi (Node.js, editor VS Code, simulator atau perangkat fisik dengan aplikasi <em>Expo Go</em>). Pada tiap pertemuan ada penugasan berbasis sprint yang wajib dikerjakan dan didemokan.</li>
</ul>

<div class="callout callout-important">
  <h5><i class="fa-solid fa-triangle-exclamation"></i> Kenapa Kontrak Ini Dibuat Tegas?</h5>
  <p>Dalam rekayasa perangkat lunak mobile, kebiasaan profesional dibentuk dari konsistensi harian. Proyek aplikasi "PresidentKu" yang akan kita kembangkan berjalan secara iteratif per pekan. Sekali mahasiswa tertinggal satu pekan (misalnya absen di materi autentikasi pekan 3), maka pada pekan 5 saat implementasi token API mereka akan mengalami kesulitan struktural yang fatal.</p>
</div>
      `,
      deepDive: `Di lingkungan industri rintisan (startup) maupun korporasi teknologi, konsep kehadiran setara dengan <em>Availability & SLA (Service Level Agreement)</em> tim. Kesiapan laptop dan lingkungan kerja merefleksikan <em>Developer Readiness</em>.`,
      summary: "Kontrak kuliah mewajibkan kehadiran minimal 80% (12 dari 16 pertemuan), keikutsertaan wajib pada UTS dan UAS, pemberitahuan izin maksimal H-1 berdokumen bukti, serta kewajiban membawa laptop dengan tugas aktif tiap pekan.",
      pitfalls: "Mengabaikan absensi dengan anggapan tugas mandiri bisa menggantikan presensi, atau baru melapor sakit/izin setelah kelas selesai.",
      examTips: "Perhatikan angka persentase minimal kehadiran (80% / 12 pertemuan) dan batas waktu izin (maksimal H-1)."
    },
    {
      id: "w1-pilar-cpmk",
      title: "1.2 Empat Pilar Mobile, CPMK & 12 Sub-CPMK",
      analogy: "Membangun aplikasi mobile diibaratkan membangun sebuah mobil sport canggih: Bodi luar yang aerodinamis dan nyaman adalah UI/UX; mesin dan tangki bahan bakar adalah Data & Network; sistem pengereman, airbag, dan sabuk pengaman adalah Security & Performance; sedangkan GPS, sensor radar, dan telepon darurat adalah Device Features.",
      content: `
<p>Aplikasi mobile modern tidak lagi sesederhana menampilkan teks pada layar kecil. Aplikasi harus tangguh menghadapi fluktuasi jaringan, menjaga data pribadi di perangkat pengguna yang rentan hilang, serta memaksimalkan kapabilitas sensor bawaan smartphone.</p>

<h4>Empat Pilar Pemrograman Mobile</h4>
<div class="grid-2-col my-4">
  <div class="card-feature">
    <div class="card-icon text-indigo"><i class="fa-solid fa-palette"></i></div>
    <h5>1. UI / UX</h5>
    <p>Mencakup perancangan antarmuka yang <em>responsive</em> (menyesuaikan ragam ukuran layar HP hingga tablet), <em>accessible</em> (ramah bagi penyandang disabilitas penglihatan dan motorik), serta tata letak modern berbasis komponen yang dapat digunakan ulang.</p>
  </div>
  <div class="card-feature">
    <div class="card-icon text-amber"><i class="fa-solid fa-server"></i></div>
    <h5>2. Data & Network</h5>
    <p>Meliputi pertukaran data secara asinkron dengan server melalui antarmuka REST API, parsing format data pertukaran standar (JSON), serta manajemen penyimpanan data lokal (local cache).</p>
  </div>
  <div class="card-feature">
    <div class="card-icon text-emerald"><i class="fa-solid fa-shield-halved"></i></div>
    <h5>3. Security & Performance</h5>
    <p>Fokus pada autentikasi identitas pengguna, perlindungan data sensitif di perangkat lokal (Secure Storage yang terenkripsi), perlindungan data saat transit (HTTPS/TLS & JWT), serta efisiensi pemakaian memori dan daya baterai.</p>
  </div>
  <div class="card-feature">
    <div class="card-icon text-cyan"><i class="fa-solid fa-microchip"></i></div>
    <h5>4. Device Features</h5>
    <p>Pemanfaatan kemampuan perangkat keras unik ponsel pintar: sensor gerak (akselerometer, giroskop), penentuan lokasi presisi (GPS/LBS), kamera, serta fitur komunikasi teleponi dan notifikasi pesan dorong (push notifications).</p>
  </div>
</div>

<h4>Capaian Pembelajaran Mata Kuliah (CPMK)</h4>
<ul class="styled-list">
  <li><strong>CPMK-1:</strong> Mahasiswa mampu merancang antarmuka pengguna (UI), mengintegrasikan mekanisme keamanan dan perlindungan data, serta mengakses dan merancang REST API dan antarmuka jaringan untuk aplikasi mobile.</li>
  <li><strong>CPMK-2:</strong> Mahasiswa mampu mengembangkan aplikasi mobile yang memanfaatkan fitur perangkat keras berbasis lokasi (LBS/Map), sensor gerak, integrasi telepon dan pesan, serta komputasi proses asinkron (background processing).</li>
</ul>

<h4>Peta 12 Sub-CPMK (Keahlian yang Dibangun)</h4>
<p>Kedua CPMK besar di atas dipecah menjadi 12 kompetensi teknis terukur:</p>
<ol class="styled-numbered">
  <li><strong>UI/UX:</strong> Merancang tampilan dan pengalaman pengguna yang modular dan adaptif.</li>
  <li><strong>Accessibility:</strong> Mengimplementasikan standar inklusivitas (label screen reader, contrast ratio, target sentuh).</li>
  <li><strong>Auth + Secure Storage:</strong> Mengelola siklus autentikasi dan enkripsi data kredensial lokal di hardware Keystore.</li>
  <li><strong>REST API:</strong> Menghubungkan aplikasi ke penyedia layanan data server.</li>
  <li><strong>Network + JWT/OAuth:</strong> Komunikasi jaringan aman berprotokol token stateless.</li>
  <li><strong>Error & Offline:</strong> Menangani fluktuasi sinyal, batas waktu (timeout), serta kondisi nir-koneksi.</li>
  <li><strong>Async:</strong> Mengelola antrean komputasi non-blocking di latar belakang.</li>
  <li><strong>LBS + Map:</strong> Menampilkan titik koordinat dan rute geolokasi perangkat secara interaktif.</li>
  <li><strong>Sensors:</strong> Menangkap dan mengolah data telemetri numerik perangkat keras (akselerometer & giroskop).</li>
  <li><strong>Push + Telephony:</strong> Mengirimkan pesan interaktif dan memicu aksi komunikasi sistemik.</li>
  <li><strong>State + Lifecycle:</strong> Menjaga kestabilan data saat aplikasi diminimalkan atau berpindah layar.</li>
  <li><strong>Performance:</strong> Mencegah memory leaks dan beban rendering berlebih demi kelancaran 60fps.</li>
</ol>
      `,
      deepDive: `Setiap sub-CPMK saling mengunci. Misalnya, Sub-CPMK 09 (Sensors) di pekan 7 membutuhkan pemahaman Sub-CPMK 11 (State & Lifecycle) agar <em>subscription event listener</em> sensor dapat di-cleanup saat komponen unmount untuk menghindari kebocoran baterai.`,
      summary: "Pemrograman mobile bertumpu pada 4 pilar (UI/UX, Data & Network, Security & Performance, Device Features) yang diturunkan menjadi CPMK-1, CPMK-2, dan 12 Sub-CPMK terukur sepanjang semester.",
      pitfalls: "Mengira pemrograman mobile hanya seputar desain tampilan (UI), padahal aspek keamanan data, penanganan kondisi jaringan mati, dan efisiensi sensor memegang porsi bobot yang sama besar.",
      examTips: "Hafalkan 4 pilar utama pemrograman mobile dan perbedaan fokus antara CPMK-1 (UI, Security, API) dan CPMK-2 (Fitur perangkat, sensor, lokasi, async)."
    },
    {
      id: "w1-pbl-team-workflow",
      title: "1.3 Project-Based Learning, Peran Tim & Workflow Sprint",
      analogy: "Belajar memasak dengan cara lama adalah membaca resep bumbu dan menghafal nama wajan. Belajar cara kita adalah membuka restoran sungguhan: ada pesanan tamu lapar, kita memasak bersama tim koki, menyajikan makanan, mencicipi kritik pelanggan, lalu menyempurnakan rasa masakan pada pesanan berikutnya.",
      content: `
<p>Pendekatan pembelajaran yang digunakan adalah <strong>Project-Based Learning (PBL)</strong> berbasis produk berjalan bernama <strong>PresidentKu</strong> — aplikasi mobile layanan publik dan informasi kenegaraan terintegrasi.</p>

<div class="comparison-table-wrapper my-4">
  <table class="table-compare">
    <thead>
      <tr>
        <th>Cara Lama (Tradisional)</th>
        <th>Cara Kita (Project-Based Sprint)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Fokus membaca materi & menghafal kode</td>
        <td>Fokus memecahkan masalah nyata pengguna</td>
      </tr>
      <tr>
        <td>Coding tanpa konteks kasus nyata</td>
        <td>Merancang solusi berbasis arsitektur aplikasi mobile</td>
      </tr>
      <tr>
        <td>Kumpul tugas individu lalu selesai/lupa</td>
        <td>Build &rarr; Test &rarr; Demo &rarr; Improve berkelanjutan</td>
      </tr>
      <tr>
        <td>Satu orang bekerja sendiri terisolasi</td>
        <td>Kolaborasi tim dengan pembagian peran profesional</td>
      </tr>
    </tbody>
  </table>
</div>

<h4>Prinsip: "Mulai dari Masalah Pengguna, Bukan dari Fitur"</h4>
<p>Banyak developer pemula gagal karena membuat fitur yang tidak dibutuhkan. Contoh kasus pada slide: Aplikasi Pelacak Kendaraan (<em>Vehicle Tracker</em>):</p>
<ul class="styled-list">
  <li><strong>Pengguna:</strong> Pemilik armada, orang tua, perusahaan logistik.</li>
  <li><strong>Masalah:</strong> Sulit mengetahui lokasi kendaraan secara real-time; risiko pencurian dan ketidakefisienan rute.</li>
  <li><strong>Solusi:</strong> Sistem pelacakan koordinat GPS real-time dengan riwayat perjalanan dan notifikasi anomali.</li>
  <li><strong>Aplikasi Mobile:</strong> Vehicle Tracker App yang mengintegrasikan LBS Map dan Push Notification.</li>
</ul>

<h4>Struktur Kolaborasi Tim Developer</h4>
<p>Meskipun aplikasi dikerjakan secara berkelompok (3-4 orang), <em>setiap anggota tim wajib memahami keseluruhan arsitektur aplikasi</em> dan mampu mendemokan kodenya secara individu (Technical Defense):</p>
<ul class="styled-list">
  <li><strong>Developer A (Frontend / UI):</strong> Bertanggung jawab atas struktur komponen, styling responsif Flexbox, serta aksesibilitas antarmuka.</li>
  <li><strong>Developer B (Backend / API Integration):</strong> Bertanggung jawab atas komunikasi REST API, penanganan format JSON, dan token autentikasi.</li>
  <li><strong>Developer C (Feature / Device):</strong> Mengelola sensor perangkat (akselerometer, orientasi) dan integrasi fitur bawaan ponsel.</li>
  <li><strong>Developer D (Testing / Deployment):</strong> Menjalankan pengujian skenario ekstrem (offline, timeout, login gagal) dan audit stabilitas.</li>
</ul>

<h4>Workflow Siklus Sprint</h4>
<p>Setiap pekan berjalan sebagai satu siklus sprint teratur:</p>
<div class="diagram-container text-center my-4">
  <svg viewBox="0 0 760 120" class="svg-flowchart">
    <rect x="10" y="35" width="100" height="50" rx="8" class="svg-node-blue" />
    <text x="60" y="65" class="svg-text">1. BACKLOG</text>
    
    <path d="M 110 60 L 135 60" class="svg-arrow" marker-end="url(#arrow)" />
    
    <rect x="140" y="35" width="100" height="50" rx="8" class="svg-node-indigo" />
    <text x="190" y="65" class="svg-text">2. SPRINT</text>
    
    <path d="M 240 60 L 265 60" class="svg-arrow" marker-end="url(#arrow)" />
    
    <rect x="270" y="35" width="95" height="50" rx="8" class="svg-node-purple" />
    <text x="317" y="65" class="svg-text">3. BUILD</text>
    
    <path d="M 365 60 L 390 60" class="svg-arrow" marker-end="url(#arrow)" />
    
    <rect x="395" y="35" width="95" height="50" rx="8" class="svg-node-pink" />
    <text x="442" y="65" class="svg-text">4. TEST</text>
    
    <path d="M 490 60 L 515 60" class="svg-arrow" marker-end="url(#arrow)" />
    
    <rect x="520" y="35" width="95" height="50" rx="8" class="svg-node-amber" />
    <text x="567" y="65" class="svg-text">5. DEMO</text>
    
    <path d="M 615 60 L 640 60" class="svg-arrow" marker-end="url(#arrow)" />
    
    <rect x="645" y="35" width="105" height="50" rx="8" class="svg-node-emerald" />
    <text x="697" y="65" class="svg-text">6. IMPROVE</text>
  </svg>
</div>
<ol class="styled-numbered">
  <li><strong>Backlog:</strong> Mendaftar seluruh kebutuhan fitur pengguna dari Product Canvas.</li>
  <li><strong>Sprint:</strong> Memilih 2-3 target spesifik untuk diselesaikan dalam satu pekan kerja.</li>
  <li><strong>Build:</strong> Menulis kode program dan merangkai antarmuka serta logika.</li>
  <li><strong>Test:</strong> Menguji fungsionalitas di simulator dan perangkat fisik nyata (Expo Go).</li>
  <li><strong>Demo:</strong> Menunjukkan hasil kerja kepada dosen dan kolega tim.</li>
  <li><strong>Improve:</strong> Menerima umpan balik, merefaktor celah kode, dan lanjut ke sprint berikutnya.</li>
</ol>
      `,
      deepDive: `Dalam Scrum modern, proses Build & Test dilakukan berulang kali dalam hitungan jam. Di praktikum ini, setiap demo akhir pekan menuntut mahasiswa menunjukkan aplikasi hidup di layar HP lewat Expo Go, bukan sekadar slide presentasi statis.`,
      summary: "Pendekatan belajar berbasis sprint produk (Backlog, Sprint, Build, Test, Demo, Improve). Tim membagi peran (Frontend, Backend, Device, Testing) tetapi setiap individu bertanggung jawab memahami seluruh arsitektur produk.",
      pitfalls: "Sistem 'tahu beres' di mana hanya satu orang yang mengoding sementara anggota lain hanya membuat laporan. Hal ini akan langsung terbongkar saat sesi random demo dan technical defense.",
      examTips: "Pahami urutan alur sprint (Backlog &rarr; Sprint &rarr; Build &rarr; Test &rarr; Demo &rarr; Improve) dan prinsip utama: selalu mulai dari masalah pengguna, bukan sekadar menumpuk fitur."
    },
    {
      id: "w1-git-ai-evaluation",
      title: "1.4 Git Collaboration, Etika AI & Skema Penilaian",
      analogy: "Menggunakan AI seperti menyewa asisten arsitek jenius. Jika Anda memintanya menggambar denah rumah lalu langsung membangunnya tanpa Anda periksa kekuatan fondasinya, rumah tersebut bisa runtuh saat terjadi gempa kecil.",
      content: `
<h4>Kolaborasi Kode dengan Git & GitHub</h4>
<p>Pengelolaan kode tim wajib menggunakan Git dengan GitHub Repository sebagai pusat kerja sama. Konsep dasar yang wajib dikuasai:</p>
<ul class="styled-list">
  <li><strong>Repository:</strong> Tempat penyimpanan seluruh berkas kode, aset gambar, dan dokumentasi proyek.</li>
  <li><strong>Commit:</strong> Rekam jejak perubahan kode yang disertai pesan deskriptif (misal: <code>git commit -m "feat: tambahkan validasi form login"</code>).</li>
  <li><strong>Branch:</strong> Ruang kerja cabang agar pengerjaan fitur baru tidak merusak stabilitas kode utama (<em>main/master</em>).</li>
  <li><strong>Pull Request (PR):</strong> Pengajuan kode dari branch fitur ke branch utama yang ditinjau dan disetujui oleh anggota tim lain.</li>
</ul>

<h4>Pemanfaatan AI secara Etis & Bertanggung Jawab</h4>
<p>Kecerdasan Artifisial (seperti Claude, ChatGPT, Copilot) diizinkan sebagai asisten pengembangan, namun tidak boleh menggantikan pemahaman mandiri mahasiswa.</p>

<div class="grid-2-col my-4">
  <div class="card-feature border-red">
    <h5 class="text-danger"><i class="fa-solid fa-xmark"></i> Alur Salah (Blind Copy-Paste)</h5>
    <div class="code-flow">Copy &rarr; Paste &rarr; Submit</div>
    <p class="text-muted mt-2">Menyalin kode tanpa memahami maksud sintaksis. Developer tidak tahu jika kode mengandung celah keamanan atau pustaka kadaluarsa.</p>
  </div>
  <div class="card-feature border-green">
    <h5 class="text-success"><i class="fa-solid fa-check"></i> Alur Benar (Ask & Verify)</h5>
    <div class="code-flow">Ask &rarr; Understand &rarr; Test &rarr; Modify &rarr; Commit</div>
    <p class="text-muted mt-2">Gunakan AI untuk mencari ide solusi, pelajari logikanya, jalankan pengujian, sesuaikan dengan PresidentKu, lalu commit mandiri.</p>
  </div>
</div>

<div class="callout callout-warning">
  <h5><i class="fa-solid fa-circle-question"></i> Tiga Checkpoint Wajib Saat Menggunakan AI</h5>
  <ol class="styled-numbered mb-0">
    <li><strong>UNDERSTAND:</strong> Apakah saya memahami setiap baris kode yang dihasilkan AI ini?</li>
    <li><strong>VERIFY:</strong> Apakah kode ini benar, aman, dan tidak membocorkan data rahasia?</li>
    <li><strong>MODIFY:</strong> Mampukah saya memodifikasi struktur kode ini jika alur aplikasinya diubah?</li>
  </ol>
</div>

<h4>Komponen Penilaian Mata Kuliah</h4>
<p>Penilaian tidak hanya ditentukan oleh keindahan aplikasi, melainkan mencakup 3 pilar evaluasi terpadu:</p>
<ul class="styled-list">
  <li><strong>1. Individual Competence:</strong> Penilaian tugas mingguan, <em>Random Demo</em> (dosen memanggil acak anggota tim untuk mendemokan fitur), dan <em>Technical Defense</em> (tanya jawab mendalam alasan pemilihan arsitektur kode).</li>
  <li><strong>2. Team Product Quality:</strong> Kelengkapan fungsionalitas, kualitas antarmuka UI/UX, penerapan keamanan data & token, keberhasilan integrasi REST API, pemanfaatan sensor perangkat, serta kestabilan performa.</li>
  <li><strong>3. Professional Practice:</strong> Disiplin manajemen versi Git (frekuensi dan deskripsi commit), efektivitas kolaborasi tim, kebersihan dokumentasi teknis, serta kepatuhan jadwal sprint.</li>
</ul>

<h4>Peta Jalan (Roadmap) 16 Pertemuan</h4>
<div class="roadmap-grid">
  <div class="roadmap-item"><span>Pekan 1</span><strong>Kickoff</strong> (Orientasi & Definisi Produk)</div>
  <div class="roadmap-item"><span>Pekan 2-3</span><strong>UI/UX + Security</strong> (React Native, Expo, Flexbox, Secure Storage)</div>
  <div class="roadmap-item"><span>Pekan 4-7</span><strong>API + Network</strong> (RESTful API, DTO, JWT Token, Error & Offline, Sensors)</div>
  <div class="roadmap-item highlight"><span>Pekan 8</span><strong>UTS / MVP Evaluation</strong> (Presentasi & Demo Sistem Berjalan)</div>
  <div class="roadmap-item"><span>Pekan 9-11</span><strong>Async + LBS + Sensor</strong> (Geolokasi, Background Task, Map Interaktif)</div>
  <div class="roadmap-item"><span>Pekan 12-15</span><strong>Push + State + Perf</strong> (Push Notification, Global State, Lifecycle, Optimasi)</div>
  <div class="roadmap-item success"><span>Pekan 16</span><strong>Final UAS</strong> (Rilis Produk Akhir & Technical Defense)</div>
</div>
      `,
      deepDive: `Di sesi Technical Defense Pekan 8 (UTS), pertanyaan tipikal dosen bukanlah "Bagaimana cara membuat tombol?", melainkan "Mengapa Anda memilih menyimpan token di SecureStore daripada AsyncStorage?", atau "Apa yang terjadi pada aplikasi saat internet mendadak putus ketika tombol submit ditekan?".`,
      summary: "GitHub digunakan untuk repositori tim (commit, branch, PR). Penggunaan AI wajib melewati 3 checkpoint (Understand, Verify, Modify) dengan alur Ask->Understand->Test->Modify->Commit. Penilaian terdiri atas Individual, Team Product, dan Professional Practice.",
      pitfalls: "Melakukan 'git push -f' tanpa koordinasi, atau mengandalkan jawaban AI secara buta tanpa bisa menjelaskan cara kerja kode saat random demo.",
      examTips: "Ingat 3 Checkpoint AI (Understand, Verify, Modify) dan 3 pilar penilaian (Individual, Team Product, Professional Practice)."
    }
  ],
  glossary: [
    { term: "Expo Go", def: "Aplikasi seluler yang memungkinkan developer menjalankan dan menguji proyek React Native secara instan di HP fisik via scan QR code tanpa perlu kompilasi APK/IPA." },
    { term: "CPMK", def: "Capaian Pembelajaran Mata Kuliah; kompetensi puncak yang harus dicapai mahasiswa setelah menuntaskan perkuliahan." },
    { term: "Backlog", def: "Daftar prioritas seluruh fitur, perbaikan, dan kebutuhan fungsional yang akan dikerjakan tim selama masa proyek." },
    { term: "Technical Defense", def: "Metode evaluasi di mana mahasiswa mempertahankan dan mempertanggungjawabkan keputusan teknis kodenya di hadapan dosen." }
  ],
  summaryWeek: "Pekan 1 menetapkan fondasi profesional: kepatuhan kontrak kuliah (80% kehadiran), pemahaman 4 pilar mobile dan 12 sub-CPMK, adopsi metodologi sprint berbasis masalah pengguna (PresidentKu), penggunaan Git berstandar tim, etika cerdas AI (Understand, Verify, Modify), serta kesiapan menghadapi evaluasi individual dan tim menuju UTS di Pekan 8.",
  sprintChecklist: [
    "Mengetahui aturan kehadiran minimal 80% dan prosedur izin H-1",
    "Memahami 4 pilar mobile: UI/UX, Data & Network, Security & Performance, Device Features",
    "Membentuk tim kerja dengan pembagian peran yang jelas",
    "Menentukan ide masalah dan solusi pengguna untuk proyek PresidentKu",
    "Membuat repositori GitHub proyek dan mengundang seluruh anggota tim",
    "Mengonfigurasi Node.js dan memasang aplikasi Expo Go di smartphone fisik"
  ],
  checkUnderstanding: [
    {
      question: "Berapa batas kehadiran minimal perkuliahan agar mahasiswa memenuhi syarat kelulusan mata kuliah Pemrograman Mobile?",
      options: ["70% (minimal 10 kali hadir)", "75% (minimal 11 kali hadir)", "80% (minimal 12 dari 16 pertemuan)", "85% (minimal 13 kali hadir)", "90% (minimal 14 kali hadir)"],
      correct: 2,
      explanation: "Sesuai kontrak perkuliahan pada slide, kehadiran minimal adalah 80% atau setara 12 dari total 16 pertemuan yang terjadwal."
    },
    {
      question: "Manakah yang BUKAN merupakan salah satu dari Empat Pilar Pemrograman Mobile?",
      options: ["UI / UX", "Data & Network", "Security & Performance", "Monetization & Ads Placement", "Device Features"],
      correct: 3,
      explanation: "Empat pilar mobile mencakup: (1) UI/UX, (2) Data & Network, (3) Security & Performance, dan (4) Device Features. Penempatan iklan/monetisasi bukan pilar inti teknis pada slide."
    },
    {
      question: "Apa alur kerja pemanfaatan AI yang benar dan bertanggung jawab bagi mahasiswa pengembang aplikasi?",
      options: ["Copy -> Paste -> Submit", "Ask -> Understand -> Test -> Modify -> Commit", "Prompt -> Generate -> Deploy", "Ask -> Paste -> Debug -> Submit", "Search -> Copy -> Commit"],
      correct: 1,
      explanation: "Alur etis yang benar adalah bertanya ke AI (Ask), memahami penjelasan dan risikonya (Understand), mencoba kode tersebut (Test), menyesuaikannya dengan kebutuhan aplikasi (Modify), lalu menyimpannya ke repository (Commit)."
    },
    {
      question: "Tiga checkpoint evaluasi diri saat mahasiswa menerima saran potongan kode dari AI adalah...",
      options: ["Speed, Cost, Accuracy", "Understand, Verify, Modify", "Read, Write, Execute", "Clean, Fast, Responsive", "Frontend, Backend, Database"],
      correct: 1,
      explanation: "Slide secara gamblang mencatat tiga checkpoint krusial: (1) UNDERSTAND (paham kodenya?), (2) VERIFY (benar dan amankah?), dan (3) MODIFY (mampukah mengubah dan menyesuaikannya?)."
    }
  ]
};
