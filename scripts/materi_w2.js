// scripts/materi_w2.js
module.exports = {
  id: 2,
  weekNumber: 2,
  title: "Mobile Interface dengan React Native + Expo Go",
  subtitle: "Sprint 01 — Dari Product Idea Menjadi Interface Mobile yang Responsif & Inklusif",
  sprint: "Sprint 01 - Mobile Interface PresidentKu",
  readTime: "20 menit",
  topics: ["React Native & Expo Go", "Komponen Inti & Reusability", "Flexbox Layout", "Responsive UI Multi-Device", "Inclusive Design & Accessibility", "Prompt AI Engineering"],
  subtopics: [
    {
      id: "w2-platform-components",
      title: "2.1 Mengenal Platform React Native & Expo Go",
      analogy: "Jika React Native adalah bahasa internasional yang dimengerti oleh mandor bangunan di iOS dan Android, maka Expo Go adalah kacamata ajaib yang membuat cetak biru rumah Anda langsung terlihat nyata dalam sekejap tanpa perlu menunggu semen cor mengering berhari-hari.",
      content: `
<p class="lead">Pada pertemuan kedua, kita mentransformasikan ide aplikasi <strong>PresidentKu</strong> menjadi antarmuka mobile interaktif. Untuk membangunnya secara efisien, kita menggunakan kombinasi <strong>React Native</strong> dan ekosistem <strong>Expo Go</strong>.</p>

<h4>Apa Itu React Native?</h4>
<p>React Native adalah framework rekayasa antarmuka mobile berbasis JavaScript dan React yang memungkinkan developer membangun aplikasi untuk platform Android dan iOS secara simultan dengan satu basis kode (<em>single codebase</em>). Yang membedakan React Native dari teknologi web view hibrida adalah kemampuannya merender <strong>komponen native sungguhan</strong> di balik layar, sehingga performa animasi dan sentuhannya mendekati aplikasi native murni.</p>

<h4>Mengapa Expo Go Menjadi Game Changer?</h4>
<p>Secara tradisional, mengembangkan aplikasi mobile menuntut pemasangan Android Studio (GB-an), Android SDK, emulator berat, dan konfigurasi Gradle yang rumit. <strong>Expo Go</strong> menyederhanakan alur tersebut:</p>
<ul class="styled-list">
  <li><strong>Instan di Perangkat Nyata:</strong> Cukup buka aplikasi Expo Go di smartphone fisik, lalu pindai kode QR yang muncul di terminal bundler (Metro).</li>
  <li><strong>Fast Refresh:</strong> Setiap kali kode di editor Anda simpan (Ctrl+S), perubahan visual langsung ter-update di layar HP dalam waktu kurang dari satu detik tanpa kehilangan state aplikasi.</li>
  <li><strong>Tanpa Menunggu Kompilasi Native:</strong> Kita tidak perlu melakukan build berkas APK/IPA yang memakan waktu di tahap eksplorasi desain awal.</li>
</ul>

<h4>Komponen Dasar Pembangun UI</h4>
<p>Di React Native, elemen HTML standar seperti <code>&lt;div&gt;</code>, <code>&lt;span&gt;</code>, dan <code>&lt;button&gt;</code> TIDAK didukung. Kita wajib menggunakan komponen native yang disediakan oleh React Native:</p>
<div class="grid-2-col my-4">
  <div class="card-feature">
    <h5><code>&lt;View&gt;</code></h5>
    <p>Komponen kontainer paling mendasar yang setara dengan <code>&lt;div&gt;</code>. Digunakan untuk membungkus elemen, mengatur padding, margin, dan tata letak berbasis Flexbox.</p>
  </div>
  <div class="card-feature">
    <h5><code>&lt;Text&gt;</code></h5>
    <p>Komponen untuk menampilkan teks. Di React Native, <em>setiap teks wajib dibungkus dalam tag Text</em>. Teks yang diletakkan langsung di dalam View akan menyebabkan error kompilasi.</p>
  </div>
  <div class="card-feature">
    <h5><code>&lt;Image&gt;</code></h5>
    <p>Komponen untuk merender gambar lokal (via <code>require('./assets/logo.png')</code>) maupun gambar jaringan online (via properti <code>source={{ uri: 'https://...' }}</code>).</p>
  </div>
  <div class="card-feature">
    <h5><code>&lt;Pressable&gt;</code></h5>
    <p>Komponen interaktif modern pengganti <em>TouchableOpacity</em> untuk menangani ketukan jari (<code>onPress</code>, <code>onLongPress</code>) dengan kontrol status sentuhan yang presisi.</p>
  </div>
</div>

<h4>Penataan Gaya dengan StyleSheet</h4>
<p>Alih-alih berkas CSS eksternal, styling di React Native ditulis menggunakan sintaksis JavaScript Object melalui <code>StyleSheet.create()</code>. Manfaatnya adalah validasi nama properti secara otomatis saat runtime dan optimasi alokasi memori ID style.</p>

<div class="code-block-wrapper">
  <div class="code-header">
    <span>App.js — Contoh Halaman Utama PresidentKu</span>
    <button class="btn-copy" onclick="copyCode(this)"><i class="fa-regular fa-copy"></i> Salin</button>
  </div>
  <pre><code class="language-jsx">import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    &lt;View style={styles.container}&gt;
      {/* Header Halaman */}
      &lt;View style={styles.header}&gt;
        &lt;Text style={styles.appTitle}&gt;PRESIDENTKU&lt;/Text&gt;
      &lt;/View&gt;

      {/* Hero Visual Card */}
      &lt;View style={styles.heroCard}&gt;
        &lt;Image 
          source={{ uri: 'https://placehold.co/600x300/1e293b/white?text=Istana+Merdeka' }} 
          style={styles.heroImage} 
        /&gt;
        &lt;Text style={styles.heroTitle}&gt;Bersama Membangun Indonesia&lt;/Text&gt;
        &lt;Text style={styles.heroDesc}&gt;
          Informasi, partisipasi, dan program strategis untuk masa depan yang lebih baik.
        &lt;/Text&gt;
        
        {/* Tombol Aksi Utama */}
        &lt;Pressable 
          style={({ pressed }) =&gt; [
            styles.primaryButton,
            pressed && styles.buttonPressed
          ]}
          onPress={() => alert('Membuka Program...')}
        &gt;
          &lt;Text style={styles.buttonText}&gt;Lihat Program &rarr;&lt;/Text&gt;
        &lt;/Pressable&gt;
      &lt;/View&gt;
    &lt;/View&gt;
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
    paddingTop: 48,
    paddingHorizontal: 16,
  },
  header: {
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  appTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#0f172a',
    letterSpacing: 1.2,
  },
  heroCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3, // Khusus bayangan Android
  },
  heroImage: {
    width: '100%',
    height: 180,
    borderRadius: 12,
    marginBottom: 16,
  },
  heroTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: 8,
  },
  heroDesc: {
    fontSize: 14,
    color: '#64748b',
    lineHeight: 20,
    marginBottom: 20,
  },
  primaryButton: {
    backgroundColor: '#eab308', // Kuning emas PresidentKu
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonPressed: {
    opacity: 0.8,
  },
  buttonText: {
    color: '#0f172a',
    fontWeight: '700',
    fontSize: 15,
  },
});</code></pre>
</div>
      `,
      deepDive: `Perhatikan properti <code>elevation</code> pada style kartu. Di React Native, properti bayangan CSS seperti <code>shadowColor</code>, <code>shadowOffset</code>, dan <code>shadowRadius</code> hanya bekerja di platform iOS. Untuk memunculkan bayangan nyata di platform Android, kita wajib menyertakan properti <code>elevation: 3</code> yang memanfaatkan rendering elevasi Material Design.`,
      summary: "React Native merender komponen native asli melalui sintaksis JSX. Komponen esensialnya adalah View, Text, Image, Pressable, dan StyleSheet. Teks wajib dibungkus Text, dan Expo Go memfasilitasi pengetesan cepat via QR code.",
      pitfalls: "Menulis teks telanjang di dalam View tanpa tag Text (akan crash di Android/iOS), atau mencoba memakai elemen HTML web biasa seperti <div> atau <button>.",
      examTips: "Pahami bahwa default arah susunan Flexbox di React Native adalah vertikal (column), bukan horizontal seperti di browser web."
    },
    {
      id: "w2-layout-responsive",
      title: "2.2 Layouting Flexbox & Desain Responsif Multi-Device",
      analogy: "Flexbox seperti partisi laci pakaian elastis. Ketika Anda meletakkan celana dan baju, partisi tersebut bisa meregang atau menyusut secara otomatis bergantung pada seberapa lebar laci lemari yang Anda buka.",
      content: `
<h4>Struktur Halaman Minimal Mobile</h4>
<p>Berdasarkan slide Task 01, setiap antarmuka halaman utama minimal wajib memiliki 6 elemen struktural:</p>
<ol class="styled-numbered">
  <li><strong>Header:</strong> Memuat identitas aplikasi ("PRESIDENTKU") dan ikon navigasi/pencarian.</li>
  <li><strong>Judul Halaman:</strong> Penanda konteks topik utama yang sedang dilihat pengguna.</li>
  <li><strong>Informasi Utama:</strong> Ringkasan deskripsi atau pengantar layanan.</li>
  <li><strong>Image / Visual:</strong> Representasi grafis atau fotografi penunjang daya tarik.</li>
  <li><strong>Button / Action:</strong> Tombol aksi utama (Call to Action / CTA) yang mengarahkan alur pengguna.</li>
  <li><strong>Content Section / Navigation:</strong> Bagian daftar fitur prioritas dan bilah navigasi bawah (bottom navigation).</li>
</ol>

<h4>Perbedaan Krusial Flexbox: Web vs React Native</h4>
<div class="comparison-table-wrapper my-4">
  <table class="table-compare">
    <thead>
      <tr>
        <th>Fitur Flexbox</th>
        <th>Web Browser (CSS)</th>
        <th>React Native</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Default flexDirection</strong></td>
        <td><code>row</code> (horizontal ke samping)</td>
        <td><code>column</code> (vertikal ke bawah)</td>
      </tr>
      <tr>
        <td><strong>Default flexShrink</strong></td>
        <td><code>1</code> (otomatis mengecil)</td>
        <td><code>0</code> (tidak mengecil secara default)</td>
      </tr>
      <tr>
        <td><strong>Satuan Ukuran</strong></td>
        <td>px, em, rem, %</td>
        <td>Angka unit tanpa satuan (density-independent pixels)</td>
      </tr>
    </tbody>
  </table>
</div>

<h4>Mengapa UI Harus Responsif & Adaptif?</h4>
<p>Dunia perangkat mobile sangat heterogen. Pengguna aplikasi PresidentKu bisa mengakses dari berbagai dimensi:</p>
<ul class="styled-list">
  <li><strong>Layar Kecil (&asymp; 4 inci):</strong> Smartphone kompak (misal iPhone SE atau Android lama). Ruang vertikal sangat terbatas.</li>
  <li><strong>Layar Normal (&asymp; 6 inci):</strong> Mayoritas smartphone modern pengguna harian.</li>
  <li><strong>Layar Lebar (&asymp; 8 inci / Tablet):</strong> Ruang horizontal melimpah, tata letak kartu bisa ditampilkan dalam 2-3 kolom.</li>
  <li><strong>Orientasi Layar:</strong> Perpindahan dinamis antara mode <em>Portrait</em> (tegak) dan <em>Landscape</em> (membentang).</li>
</ul>

<div class="callout callout-important">
  <h5><i class="fa-solid fa-clipboard-check"></i> Checklist Uji Responsivitas (Task 02)</h5>
  <ul class="styled-list mb-0">
    <li>&check; Tidak ada komponen yang meluber keluar dari batas layar (<em>no overflow cut-off</em>).</li>
    <li>&check; Teks tidak boleh terpotong atau saling menumpuk.</li>
    <li>&check; Tombol aksi tetap berada dalam jangkauan dan mudah ditekan.</li>
    <li>&check; Jarak spasi (padding & margin) tetap proporsional dan nyaman dipandang.</li>
    <li>&check; Hierarki informasi tetap jelas dan mudah dipahami.</li>
  </ul>
</div>
      `,
      deepDive: `Untuk menangani layar kecil tanpa memotong konten, selalu bungkus kontainer halaman dengan komponen <code>&lt;ScrollView&gt;</code> alih-alih <code>&lt;View&gt;</code> statis, khususnya jika halaman memuat form isian yang bisa terdorong ke atas oleh kemunculan keyboard virtual.`,
      summary: "Struktur halaman minimal memuat header, judul, info, visual, CTA, dan konten/navigasi. Flexbox di React Native memiliki default flexDirection: column. UI wajib diuji di layar 4\", 6\", 8\" tablet, serta mode portrait dan landscape.",
      pitfalls: "Mengatur lebar komponen dengan nilai piksel kaku (misal `width: 380`), yang akan menyebabkan elemen meluber keluar layar pada smartphone kecil berdimensi 320-360px.",
      examTips: "Ingat baik-baik bahwa di React Native, `flexDirection` secara default bernilai `column` (bukan `row`)."
    },
    {
      id: "w2-accessibility",
      title: "2.3 Inclusive Design & Accessibility (Ramah Disabilitas)",
      analogy: "Membangun aplikasi tanpa fitur aksesibilitas seperti membangun gedung pelayanan publik megah yang pintunya hanya bisa diakses lewat tangga curam tanpa jalur kursi roda. Semua orang berhak menikmati layanan negara yang setara.",
      content: `
<p>Sebagai aplikasi layanan kenegaraan dan publik, <strong>PresidentKu</strong> dirancang untuk semua kalangan warga negara, termasuk lansia, pengguna dengan gangguan penglihatan, serta keterbatasan motorik halus. Inilah esensi dari <strong>Inclusive Design</strong>.</p>

<h4>Empat Pilar Aksesibilitas Mobile</h4>
<ol class="styled-numbered">
  <li><strong>Readable (Keterbacaan Teks):</strong> Tipografi jelas, ukuran font memadai, serta jarak antar baris (lineHeight) yang lega.</li>
  <li><strong>Touchable (Kenyamanan Target Sentuh):</strong> Elemen interaktif harus memiliki ukuran fisik minimal <strong>44 &times; 44 dp (points)</strong> agar jari tangan orang dewasa tidak salah memencet tombol lain di sebelahnya.</li>
  <li><strong>Contrast Ratio (Kontras Warna Memadai):</strong> Rasio kontras antara warna teks dan warna latar belakang wajib memenuhi standar WCAG (minimal 4.5:1 untuk teks normal). Hindari teks abu-abu muda di atas latar putih!</li>
  <li><strong>Tidak Bergantung Warna Saja:</strong> Indikator status jangan hanya mengandalkan lingkaran warna merah/hijau. Selalu sertakan teks penjelas (misal: tulisan "Aktif" atau "Nonaktif") atau ikon representatif untuk membantu pengguna buta warna.</li>
</ol>

<h4>Properti Aksesibilitas di React Native</h4>
<p>React Native menyediakan properti bawaan untuk berkomunikasi secara mulus dengan teknologi pembaca layar (<em>Screen Reader</em> seperti Google TalkBack di Android dan Apple VoiceOver di iOS):</p>

<div class="code-block-wrapper">
  <div class="code-header">
    <span>Contoh Penerapan Accessibility Props</span>
    <button class="btn-copy" onclick="copyCode(this)"><i class="fa-regular fa-copy"></i> Salin</button>
  </div>
  <pre><code class="language-jsx">&lt;Pressable
  accessible={true}
  accessibilityLabel="Buka halaman Program Prioritas Pemerintah"
  accessibilityRole="button"
  accessibilityHint="Menampilkan daftar program strategis beasiswa dan infrastruktur"
  style={styles.primaryButton}
  onPress={handleOpenProgram}
&gt;
  &lt;Text style={styles.buttonText}&gt;Lihat Program &rarr;&lt;/Text&gt;
&lt;/Pressable&gt;</code></pre>
</div>

<h4>Bedah Properti Accessibility</h4>
<ul class="styled-list">
  <li><code>accessible={true}</code>: Menginstruksikan screen reader untuk memperlakukan elemen ini beserta anak-anaknya sebagai satu kesatuan objek interaktif tunggal (tidak dibaca terpisah-pisah per kata).</li>
  <li><code>accessibilityLabel</code>: Teks deskriptif yang disuarakan oleh pembaca layar. Menggantikan pembacaan simbol panah "&rarr;" yang sering kali dibaca mesin secara rancu.</li>
  <li><code>accessibilityRole</code>: Menjelaskan jenis elemen kepada pengguna tunanetra (contoh nilai: <code>"button"</code>, <code>"header"</code>, <code>"link"</code>, <code>"image"</code>). Pengguna langsung tahu bahwa elemen ini dapat diketuk.</li>
  <li><code>accessibilityHint</code>: Panduan aksi tambahan yang menjelaskan apa dampak atau konsekuensi dari mengaktifkan elemen tersebut.</li>
</ul>
      `,
      deepDive: `Gunakan properti <code>hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}</code> pada tombol kecil. Properti ini memperluas area sensitivitas sentuhan tanpa mengubah dimensi visual komponen di layar, sangat membantu memenuhi target sentuh 44x44 dp.`,
      summary: "Inclusive design memastikan aplikasi dapat digunakan semua orang. Empat pilar: Readable, Touchable (min 44x44 dp), Contrast memadai, dan info tidak hanya warna. Properti React Native: accessible, accessibilityLabel, accessibilityRole, accessibilityHint.",
      pitfalls: "Membuat tombol ikon (misal ikon pencarian atau tutup modal) tanpa teks dan lupa memberikan properti `accessibilityLabel`. Akibatnya, screen reader hanya berbunyi 'Unlabeled button'.",
      examTips: "Kuasai fungsi keempat atribut aksesibilitas: accessible, accessibilityLabel, accessibilityRole, dan accessibilityHint."
    },
    {
      id: "w2-ai-prompting",
      title: "2.4 Cara Menulis Prompt AI Coding yang Efektif",
      analogy: "Memberi instruksi ke AI seperti memesan jas ke penjahit. Jika Anda hanya bilang 'Buatkan saya baju bagus', hasilnya belum tentu pas di badan. Jika Anda berikan ukuran lingkar dada, pilihan bahan katun wol, model jas dua kancing, warna navy blue, dan tenggat waktu 3 hari, jas yang jadi akan sempurna.",
      content: `
<p>Dalam alur sprint modern, kita memanfaatkan AI untuk mengakselerasi penulisan antarmuka. Agar hasil kode yang dihasilkan AI presisi dan tidak memerlukan refaktor berulang kali, gunakan struktur prompt 5 elemen:</p>

<h4>Formula 5 Elemen Prompting Handal</h4>
<ol class="styled-numbered">
  <li><strong>1. Peran (Role):</strong> Tentukan persona keahlian AI (misal: <em>"Kamu adalah senior mobile engineer React Native..."</em>).</li>
  <li><strong>2. Tujuan (Goal):</strong> Jelaskan produk atau fitur spesifik yang ingin dicapai.</li>
  <li><strong>3. Konteks (Context):</strong> Berikan latar belakang aplikasi (aplikasi PresidentKu, target audiens masyarakat umum).</li>
  <li><strong>4. Spesifikasi (Requirements):</strong> Rincikan batasan teknologi, komponen yang boleh dipakai, tata letak, dan standar aksesibilitas.</li>
  <li><strong>5. Bentuk Keluaran (Output Format):</strong> Tentukan format hasil akhir (misal: <em>"Berikan satu berkas App.js lengkap tanpa pustaka eksternal yang tidak perlu"</em>).</li>
</ol>

<div class="grid-2-col my-4">
  <div class="card-feature border-red">
    <h5 class="text-danger"><i class="fa-solid fa-circle-xmark"></i> Contoh Prompt Kurang Baik</h5>
    <div class="code-flow bg-light p-2">"Buat aplikasi mobile tentang presiden."</div>
    <p class="text-muted mt-2 text-sm">Hasilnya sangat umum, styling seadanya, komponen tidak modular, dan rawan crash.</p>
  </div>
  <div class="card-feature border-green">
    <h5 class="text-success"><i class="fa-solid fa-circle-check"></i> Contoh Prompt Sangat Baik</h5>
    <div class="code-flow bg-light p-2 text-sm">"Kamu adalah expert React Native. Buat halaman home untuk aplikasi PresidentKu menggunakan React Native dan Expo. Halaman ini menampilkan gambar presiden, judul, deskripsi singkat, dan 3 menu utama: Biografi, Program, dan Berita. Gunakan komponen modern, layout responsif, dan StyleSheet yang bersih. Berikan kode lengkap dalam satu file App.js."</div>
    <p class="text-muted mt-2 text-sm">Hasil kode langsung terstruktur rapi, siap dijalankan di Expo Go, dan minim error.</p>
  </div>
</div>
      `,
      deepDive: `Ingat: AI adalah asisten, keputusan akhir tetap di tangan developer. Selalu lakukan verifikasi mandiri sebelum melakukan <code>git commit</code>.`,
      summary: "Struktur prompt efektif memuat: Role, Goal, Context, Requirements, dan Output. Prompt yang spesifik menghemat waktu revisi dan menghasilkan kode antarmuka yang siap jalan.",
      pitfalls: "Memberikan instruksi yang terlalu ambigu sehingga kode yang dihasilkan menggunakan dependensi yang tidak terpasang di proyek Expo.",
      examTips: "Hafalkan 5 struktur prompt AI yang baik: Role, Goal, Context, Requirements, Output."
    }
  ],
  glossary: [
    { term: "Flexbox", def: "Model tata letak CSS satu dimensi yang mengatur distribusi ruang dan perataan antar elemen di dalam kontainer." },
    { term: "Density-Independent Pixel (dp)", def: "Unit pengukuran fisik abstrak yang memungkinkan antarmuka tampil dalam ukuran fisik yang setara pada layar dengan kepadatan piksel berbeda." },
    { term: "Touch Target", def: "Area fisik layar yang dapat merespons sentuhan jari; ukuran standar minimum yang direkomendasikan adalah 44x44 dp." },
    { term: "Screen Reader", def: "Perangkat lunak bantu aksesibilitas yang mengubah teks dan antarmuka visual menjadi suara bicara atau output braille untuk pengguna tunanetra." }
  ],
  summaryWeek: "Pekan 2 menuntaskan Sprint 01: pemahaman platform React Native dan ekosistem Expo Go, penguasaan komponen inti (View, Text, Image, Pressable, StyleSheet), tata letak Flexbox (default column), prinsip responsivitas multi-layar, penerapan standar aksesibilitas inklusif, serta teknik prompt engineering berbasis 5 elemen terstruktur.",
  sprintChecklist: [
    "Project React Native berhasil dibuat dan berjalan di Expo Go",
    "Komponen dasar View, Text, Image, dan Pressable diterapkan dengan tepat",
    "Layout halaman minimal terbangun dengan Flexbox yang rapi",
    "Antarmuka diuji pada variasi layar kecil (~4\"), normal (~6\"), dan lebar (~8\" tablet)",
    "Antarmuka diuji pada rotasi portrait dan landscape tanpa elemen terpotong",
    "Aksesibilitas diterapkan: label jelas, role button, dan target sentuh >= 44dp",
    "Rasio kontras warna memenuhi standar keterbacaan",
    "Melakukan commit perubahan ke repositori Git dengan pesan yang deskriptif"
  ],
  checkUnderstanding: [
    {
      question: "Apakah nilai default dari properti `flexDirection` pada React Native?",
      options: ["row (mendatar ke kanan)", "column (menurun ke bawah)", "row-reverse", "column-reverse", "wrap"],
      correct: 1,
      explanation: "Di React Native, default arah penataan Flexbox adalah 'column' (vertikal), berbeda dengan CSS Web biasa yang bernilai default 'row'."
    },
    {
      question: "Apa konsekuensi jika developer meletakkan teks string langsung di dalam komponen `<View>` tanpa membungkusnya dengan `<Text>`?",
      options: ["Teks otomatis diubah menjadi tombol", "Teks ditampilkan dengan gaya default browser", "Aplikasi akan memicu runtime error / crash", "Teks otomatis disembunyikan oleh sistem", "Teks otomatis di-align ke tengah"],
      correct: 2,
      explanation: "Di React Native, setiap string teks wajib berada di dalam komponen `<Text>`. Menaruh teks langsung di dalam `<View>` akan memicu error kompilasi/runtime."
    },
    {
      question: "Berapa ukuran target sentuh (touch target) minimum yang direkomendasikan agar elemen interaktif mudah ditekan jari pengguna?",
      options: ["20 x 20 dp", "32 x 32 dp", "44 x 44 dp", "64 x 64 dp", "100 x 100 dp"],
      correct: 2,
      explanation: "Standar aksesibilitas mobile internasional (Apple HIG & Android Material Guidelines) menetapkan target sentuh minimal 44 x 44 dp (atau 48 x 48 dp pada Material)."
    },
    {
      question: "Manakah struktur formula penulisan prompt AI coding yang diajarkan pada materi perkuliahan?",
      options: ["Input, Process, Output, Storage, Control", "Role, Goal, Context, Requirements, Output", "Idea, Design, Code, Test, Deploy", "Subject, Predicate, Object, Adverb, Modifier", "Prompt, Model, Temperature, Token, Response"],
      correct: 1,
      explanation: "Struktur prompt teruji pada materi perkuliahan adalah 5 elemen: Peran (Role), Tujuan (Goal), Konteks (Context), Spesifikasi/Batasan (Requirements), dan Bentuk Keluaran (Output)."
    }
  ]
};
