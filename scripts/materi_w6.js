// scripts/materi_w6.js
module.exports = {
  id: 6,
  weekNumber: 6,
  title: "Reliable API: Error Handling & Offline",
  subtitle: "Sprint 05 — Membangun Aplikasi Tangguh: Penanganan Error, Timeout, dan Kondisi Nir-Koneksi",
  sprint: "Sprint 05 - Keandalan API & Penanganan Offline PresidentKu",
  readTime: "22 menit",
  topics: ["Kenapa Request Gagal", "Kode Status HTTP 2xx, 4xx, 5xx", "5 UI States (Idle, Loading, Success, Error, Empty)", "Perilaku Unik Fetch API (response.ok)", "Timeout & Offline Handling", "Skenario Uji Coba Offline 8 Langkah", "Fragile vs Reliable API"],
  subtopics: [
    {
      id: "w6-why-fail-status-codes",
      title: "6.1 Mengapa Request Gagal & Kode Status HTTP",
      analogy: "Menelpon call center layanan masyarakat: Terkadang telepon langsung diangkat ramah (200 OK); terkadang nomor yang Anda hubungi salah (404 Not Found); terkadang Anda belum memasukkan kode PIN rahasia (401 Unauthorized); terkadang mesin operator di kantor pusat terbakar korsleting (500 Internal Server Error); dan terkadang sinyal HP Anda hilang di pelosok desa sehingga panggilan sama sekali tidak tersambung (Network Error).",
      content: `
<p class="lead">Di dunia nyata, jaringan seluler tidak pernah sempurna. Smartphone pengguna berpindah menara BTS, masuk ke terowongan kereta, kehabisan kuota, atau server pemerintah sedang mengalami lonjakan beban. Karena itu, moto Sprint 05 adalah: <strong>"Tidak semua kegagalan API berarti aplikasi salah"</strong>.</p>

<h4>Empat Kategori Utama Kegagalan Panggilan API</h4>
<ol class="styled-numbered">
  <li><strong>HTTP Error (4xx & 5xx):</strong> Permintaan sampai ke server, namun server menolak atau gagal memenuhi permintaan tersebut dan mengembalikan status penolakan.</li>
  <li><strong>Timeout (Batas Waktu Habis):</strong> Permintaan dikirim, tetapi server tidak merespons dalam batas waktu wajar (misalnya dalam 10-30 detik). Aplikasi tidak boleh dibiarkan membeku (hang).</li>
  <li><strong>No Internet / Offline:</strong> Perangkat pengguna tidak memiliki konektivitas aktif (mode pesawat aktif, data seluler habis, atau WiFi tidak ada akses internet).</li>
  <li><strong>Malformed Data:</strong> Server merespons 200 OK tetapi data JSON yang dikirimkan rusak atau strukturnya berubah total di luar ekspektasi DTO.</li>
</ol>

<h4>Katalog Kode Status HTTP yang Wajib Dikuasai</h4>
<div class="comparison-table-wrapper my-4">
  <table class="table-compare">
    <thead>
      <tr>
        <th>Kelompok Status</th>
        <th>Status Code & Pesan</th>
        <th>Arti & Konteks di PresidentKu</th>
        <th>Tindakan di Aplikasi Mobile</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong class="text-success">2xx — SUCCESS</strong></td>
        <td><code>200 OK</code><br/><code>201 Created</code></td>
        <td>Permintaan berhasil diproses. Server mengembalikan data atau konfirmasi penyimpanan.</td>
        <td>Tampilkan data di antarmuka (UI State: Success).</td>
      </tr>
      <tr>
        <td rowspan="4"><strong class="text-warning">4xx — CLIENT ERROR</strong><br/><small class="text-muted">(Kesalahan dari sisi aplikasi/pengguna)</small></td>
        <td><code>400 Bad Request</code></td>
        <td>Format data yang dikirim client salah (misal: JSON tidak lengkap atau format email keliru).</td>
        <td>Tampilkan pesan validasi agar pengguna memperbaiki isian form.</td>
      </tr>
      <tr>
        <td><code>401 Unauthorized</code></td>
        <td>Token autentikasi tidak ada, salah, atau masa berlakunya telah kedaluwarsa.</td>
        <td>Arahkan pengguna kembali ke halaman Login untuk otentikasi ulang.</td>
      </tr>
      <tr>
        <td><code>403 Forbidden</code></td>
        <td>Token valid, tetapi akun pengguna tidak memiliki izin (role) mengakses fitur ini.</td>
        <td>Tampilkan peringatan "Akses Ditolak: Fitur khusus admin pemerintah".</td>
      </tr>
      <tr>
        <td><code>404 Not Found</code></td>
        <td>Endpoint URL atau ID data yang dicari tidak ditemukan di server.</td>
        <td>Tampilkan status "Data program tidak ditemukan".</td>
      </tr>
      <tr>
        <td rowspan="2"><strong class="text-danger">5xx — SERVER ERROR</strong><br/><small class="text-muted">(Kesalahan internal di sisi server)</small></td>
        <td><code>500 Internal Server Error</code></td>
        <td>Terjadi crash atau kesalahan fatal pada skrip dan basis data di server pusat.</td>
        <td>Beri pesan: "Layanan sedang mengalami gangguan teknis. Coba beberapa saat lagi."</td>
      </tr>
      <tr>
        <td><code>503 Service Unavailable</code></td>
        <td>Server kelebihan beban (overload) atau sedang dalam jadwal pemeliharaan (maintenance).</td>
        <td>Tampilkan antarmuka pemeliharaan sistem dengan tombol Coba Lagi.</td>
      </tr>
    </tbody>
  </table>
</div>
      `,
      deepDive: `Perbedaan mendasar antara <code>401</code> dan <code>403</code>: 401 adalah masalah identitas ("Siapa kamu? Saya tidak mengenal tokenmu"), sedangkan 403 adalah masalah kewenangan hak akses ("Saya tahu kamu adalah warga Farrel, tapi warga biasa dilarang menghapus pengumuman istana!").`,
      summary: "Kegagalan API bisa berasal dari HTTP error (4xx/5xx), batas waktu (timeout), atau ketiadaan koneksi (offline). Status 2xx berarti sukses, 4xx kesalahan client/input, dan 5xx kegagalan server internal.",
      pitfalls: "Memperlakukan semua error sebagai satu pesan generik 'Error Terjadi' tanpa membedakan apakah masalahnya adalah token habis (401), internet mati, atau server down (500).",
      examTips: "Pahami perbedaan arti status code 401 (Unauthorized) vs 403 (Forbidden), serta 404 (Not Found) vs 500 (Internal Server Error)."
    },
    {
      id: "w6-api-ui-states",
      title: "6.2 Lima State Antarmuka API (API UI States)",
      analogy: "Menunggu pesanan online di aplikasi: Sebelum memesan, keranjang kosong (Idle); saat kurir mencari makanan, layar menampilkan animasi roda berputar (Loading); saat makanan tiba, foto makanan dan rincian struk muncul (Success); jika resto tutup, muncul pesan merah bersahabat (Error); jika menu yang dicari habis, muncul gambar piring kosong bersih (Empty).",
      content: `
<h4>Prinsip: "UI Tidak Boleh Hanya Punya Kondisi 'Data Ada'"</h4>
<p>Aplikasi yang buruk mengasumsikan data selalu langsung tersedia dalam 0.001 detik. Ketika jaringan lambat, pengguna disuguhi layar putih membeku tanpa kejelasan apakah aplikasi masih hidup atau sudah crash.</p>
<p>Antarmuka aplikasi profesional wajib memiliki <strong>5 status antarmuka (API UI States)</strong>:</p>

<div class="grid-2-col my-4">
  <div class="card-feature">
    <h5>1. IDLE (Status Awal)</h5>
    <p>Kondisi saat pengguna baru membuka layar dan pemanggilan API belum dipicu (misal: sebelum tombol "Cari Berita" diketik).</p>
  </div>
  <div class="card-feature">
    <h5>2. LOADING (Sedang Memuat)</h5>
    <p>Permintaan jaringan sedang berlangsung. Tampilkan komponen <code>&lt;ActivityIndicator size="large" /&gt;</code> atau placeholder <em>skeleton screen</em> agar pengguna tahu proses sedang berjalan.</p>
  </div>
  <div class="card-feature">
    <h5>3. SUCCESS (Berhasil)</h5>
    <p>Data berhasil diterima dan dipetakan ke DTO. Tampilkan daftar kartu informasi menggunakan <code>&lt;FlatList&gt;</code>.</p>
  </div>
  <div class="card-feature">
    <h5>4. ERROR (Terjadi Masalah)</h5>
    <p>Panggilan gagal karena kuota habis, timeout, atau server error. Tampilkan pesan kesalahan dalam bahasa manusia yang ramah disertai <strong>Tombol Coba Lagi (Retry Button)</strong>.</p>
  </div>
</div>

<div class="card-feature my-3 border-amber">
  <h5>5. EMPTY (Data Kosong)</h5>
  <p class="mb-0">Panggilan berhasil (200 OK), namun server mengembalikan array kosong (<code>data.length === 0</code>). Tampilkan ilustrasi atau teks penjelas: <em>"Belum ada program prioritas untuk kategori ini."</em> Jangan biarkan layar kosong melompong!</p>
</div>
      `,
      deepDive: `Penggunaan <strong>Skeleton Screen</strong> (animasi kotak abu-abu berkedip menyerupai tata letak kartu) terbukti secara psikologis membuat pengguna merasa aplikasi berjalan 30% lebih cepat dibandingkan sekadar menampilkan spinner berputar biasa.`,
      summary: "Setiap permintaan API memiliki 5 kemungkinan UI State: Idle, Loading, Success, Error, dan Empty. Menampilkan umpan balik visual yang transparan menjaga kenyamanan pengguna.",
      pitfalls: "Lupa mematikan indikator loading saat terjadi error di blok catch, sehingga animasi spinner berputar selamanya tanpa henti.",
      examTips: "Hafalkan 5 UI State siklus API: Idle, Loading, Success, Error, dan Empty."
    },
    {
      id: "w6-fetch-catch-code",
      title: "6.3 Implementasi Kode: Mengapa response.ok Wajib Dicek pada Fetch?",
      analogy: "Fungsi Fetch seperti kurir pengantar surat biasa. Selama kurir berhasil mengetuk pintu rumah server dan menerima surat balasan (meskipun surat itu bertuliskan '404 Rumah Ini Tidak Ditemukan'), bagi kurir tugasnya SUKSES terkirim. Kurir baru menganggap gagal (melempar error) jika sepedanya tertabrak pohon di jalan sehingga sama sekali tidak sampai ke rumah server (Network Failure).",
      content: `
<h4>Jebakan Terbesar Fetch API di Ujian & Praktikum!</h4>
<div class="callout callout-important">
  <h5><i class="fa-solid fa-skull-crossbones"></i> Hati-Hati: Fetch TIDAK Melempar Error untuk Status 4xx dan 5xx!</h5>
  <p>Banyak developer mengira jika server mengembalikan <code>404 Not Found</code> atau <code>500 Server Error</code>, fungsi <code>fetch()</code> akan otomatis melompat ke blok <code>catch</code>. <strong>INI KELIRU BESAR!</strong></p>
  <p>Bagi Fetch API, selama koneksi HTTP terjadi dan ada respons dari server (berapapun kodenya), Promise dinyatakan <strong>Resolved</strong>. Blok <code>catch</code> HANYA akan terpanggil jika terjadi kegagalan jaringan fatal (misal: kabel internet terputus, DNS gagal, atau timeout).</p>
  <p class="font-semibold text-danger mb-0">&rarr; Solusinya: Kita WAJIB memeriksa nilai boolean properti <code>response.ok</code> secara manual!</p>
</div>

<h4>Kode Lengkap Reliable API Call dengan Try / Catch / Finally</h4>
<div class="code-block-wrapper">
  <div class="code-header">
    <span>ReliableProgramsScreen.js — Penanganan Lengkap 5 State & Error</span>
    <button class="btn-copy" onclick="copyCode(this)"><i class="fa-regular fa-copy"></i> Salin</button>
  </div>
  <pre><code class="language-jsx">import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, Pressable, StyleSheet } from 'react-native';

export default function ReliableProgramsScreen() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const fetchPrograms = async () => {
    // 1. Masuk ke UI State: LOADING
    setIsLoading(true);
    setErrorMessage(null);

    // Menyiapkan pembatas waktu (Timeout 10 detik)
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    try {
      const response = await fetch('https://api.presidentku.id/programs', {
        signal: controller.signal,
      });

      // Bersihkan timer timeout jika respon datang tepat waktu
      clearTimeout(timeoutId);

      // 2. CEK APAKAH HTTP STATUS CODE 200-299
      if (!response.ok) {
        if (response.status === 401) {
          throw new Error('Sesi Anda berakhir. Silakan login kembali.');
        } else if (response.status === 404) {
          throw new Error('Layanan program tidak ditemukan di server (404).');
        } else if (response.status >= 500) {
          throw new Error('Pusat data sedang mengalami gangguan (500).');
        } else {
          throw new Error('Permintaan gagal dengan status ' + response.status);
        }
      }

      const jsonResult = await response.json();
      setData(jsonResult); // UI State: SUCCESS
    } catch (error) {
      // 3. Masuk ke UI State: ERROR
      if (error.name === 'AbortError') {
        setErrorMessage('Batas waktu koneksi habis (Timeout). Koneksi Anda lambat.');
      } else {
        setErrorMessage(error.message || 'Gagal memuat data jaringan.');
      }
    } finally {
      // 4. Matikan indikator loading di semua kondisi
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPrograms();
  }, []);

  // RENDERING SESUAI 5 UI STATES:

  // Status A: Sedang Loading
  if (isLoading) {
    return (
      &lt;View style={styles.centerContainer}&gt;
        &lt;ActivityIndicator size="large" color="#2563eb" /&gt;
        &lt;Text style={styles.stateText}&gt;Mengambil data program prioritas...&lt;/Text&gt;
      &lt;/View&gt;
    );
  }

  // Status B: Terjadi Kesalahan (Error)
  if (errorMessage) {
    return (
      &lt;View style={styles.centerContainer}&gt;
        &lt;Text style={styles.errorIcon}&gt;⚠️&lt;/Text&gt;
        &lt;Text style={styles.errorTitle}&gt;Oops, Terjadi Kendala&lt;/Text&gt;
        &lt;Text style={styles.errorDesc}&gt;{errorMessage}&lt;/Text&gt;
        
        {/* Tombol Coba Lagi (Retry Button) */}
        &lt;Pressable style={styles.retryButton} onPress={fetchPrograms}&gt;
          &lt;Text style={styles.retryText}&gt;Coba Lagi&lt;/Text&gt;
        &lt;/Pressable&gt;
      &lt;/View&gt;
    );
  }

  // Status C: Data Kosong (Empty)
  if (data.length === 0) {
    return (
      &lt;View style={styles.centerContainer}&gt;
        &lt;Text style={styles.emptyIcon}&gt;📋&lt;/Text&gt;
        &lt;Text style={styles.stateText}&gt;Belum ada program prioritas aktif.&lt;/Text&gt;
      &lt;/View&gt;
    );
  }

  // Status D: Sukses Menampilkan Data
  return (
    &lt;FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) =&gt; (
        &lt;View style={styles.itemCard}&gt;
          &lt;Text style={styles.itemTitle}&gt;{item.title}&lt;/Text&gt;
          &lt;Text style={styles.itemDesc}&gt;{item.description}&lt;/Text&gt;
        &lt;/View&gt;
      )}
    /&gt;
  );
}</code></pre>
</div>
      `,
      deepDive: `Perhatikan pemakaian <code>finally { setIsLoading(false); }</code>. Blok <code>finally</code> adalah jaminan pasti bahwa spinner loading akan selalu dimatikan, baik saat proses fetch sukses sempurna maupun saat melempar error di tengah jalan.`,
      summary: "Fetch API tidak melempar error untuk status 4xx/5xx, sehingga properti response.ok wajib dicek manual dengan if (!response.ok) throw new Error(...). Blok finally menjamin loading state dimatikan. Tombol retry memungkinkan request ulang.",
      pitfalls: "Tidak mengecek `response.ok` pada fetch, sehingga saat server membalas pesan HTML error 500, aplikasi mencoba menjalankan `response.json()` dan memicu syntax error JSON yang membingungkan.",
      examTips: "Ingat prinsip: `response.ok` bernilai true HANYA jika status code berada dalam rentang 200 hingga 299. Selalu cek `response.ok` sebelum mem-parse JSON."
    },
    {
      id: "w6-offline-8steps",
      title: "6.4 Skenario Pengujian Offline 8 Langkah & Review Keandalan",
      analogy: "Menguji sekoci darurat kapal laut: Kapal tidak boleh dianggap andal hanya karena berlayar mulus di laut tenang. Tim penguji sengaja mematikan mesin utama, membunyikan sirine darurat, menurunkan sekoci, mendayungnya, lalu menghidupkan kembali mesin untuk memastikan semua protokol darurat bekerja.",
      content: `
<h4>Skenario Pengujian Offline 8 Langkah (Task 03)</h4>
<p>Untuk membuktikan aplikasi PresidentKu tahan banting dan berpredikat <strong>Reliable API</strong>, mahasiswa wajib mendemokan 8 langkah uji offline berikut di hadapan dosen pengampu:</p>

<div class="timeline-steps my-4">
  <div class="step-card">
    <div class="step-num">1</div>
    <div class="step-content">
      <strong>Matikan Koneksi Internet</strong>
      <p class="text-xs text-muted">Aktifkan <em>Airplane Mode</em> (Mode Pesawat) atau matikan WiFi dan data seluler pada smartphone pengujian.</p>
    </div>
  </div>
  <div class="step-card">
    <div class="step-num">2</div>
    <div class="step-content">
      <strong>Buka Halaman Program</strong>
      <p class="text-xs text-muted">Arahkan navigasi ke layar yang memerlukan pemanggilan data jaringan REST API.</p>
    </div>
  </div>
  <div class="step-card">
    <div class="step-num">3</div>
    <div class="step-content">
      <strong>Amati Tampilan Antarmuka</strong>
      <p class="text-xs text-muted">Pastikan aplikasi TIDAK crash atau menampilkan layar putih kosong (blank screen).</p>
    </div>
  </div>
  <div class="step-card">
    <div class="step-num">4</div>
    <div class="step-content">
      <strong>Verifikasi Pesan Offline</strong>
      <p class="text-xs text-muted">Pastikan muncul pesan yang jelas: <em>"Tidak ada koneksi internet. Periksa koneksi Anda dan coba lagi."</em></p>
    </div>
  </div>
  <div class="step-card">
    <div class="step-num">5</div>
    <div class="step-content">
      <strong>Periksa Keberadaan Tombol Coba Lagi</strong>
      <p class="text-xs text-muted">Pastikan ada elemen tombol aksi (Retry Button) yang mudah dilihat dan dijangkau jari.</p>
    </div>
  </div>
  <div class="step-card">
    <div class="step-num">6</div>
    <div class="step-content">
      <strong>Nyalakan Kembali Koneksi Internet</strong>
      <p class="text-xs text-muted">Nonaktifkan Airplane Mode, pastikan sinyal 4G/WiFi ponsel kembali tersambung aktif.</p>
    </div>
  </div>
  <div class="step-card">
    <div class="step-num">7</div>
    <div class="step-content">
      <strong>Tekan Tombol "Coba Lagi" (Retry)</strong>
      <p class="text-xs text-muted">Pengguna mengetuk tombol coba lagi tanpa harus me-restart atau menutup paksa aplikasi.</p>
    </div>
  </div>
  <div class="step-card">
    <div class="step-num">8</div>
    <div class="step-content">
      <strong>Data Muncul Sempurna</strong>
      <p class="text-xs text-muted">Indikator loading berputar sejenak, lalu data program prioritas tampil normal di antarmuka.</p>
    </div>
  </div>
</div>

<h4>Perbandingan: Fragile API vs Reliable API</h4>
<div class="comparison-table-wrapper my-4">
  <table class="table-compare">
    <thead>
      <tr>
        <th>Karakteristik Antarmuka</th>
        <th>Fragile API (Aplikasi Rentan)</th>
        <th>Reliable API (Aplikasi Tangguh)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Saat Request Berjalan</strong></td>
        <td>Layar diam membeku tanpa indikator</td>
        <td>Muncul spinner / skeleton loading transparan</td>
      </tr>
      <tr>
        <td><strong>Saat Internet Mati</strong></td>
        <td>Aplikasi crash tertutup sendiri atau blank</td>
        <td>Muncul pesan offline ramah dan terarah</td>
      </tr>
      <tr>
        <td><strong>Penanganan Error 500</strong></td>
        <td>Teks error merah teknis berantakan</td>
        <td>Pesan sopan bahwa sistem sedang pemeliharaan</td>
      </tr>
      <tr>
        <td><strong>Opsi Pemulihan</strong></td>
        <td>Pengguna harus menutup paksa aplikasi</td>
        <td>Cukup sentuh satu tombol "Coba Lagi" (Retry)</td>
      </tr>
      <tr>
        <td><strong>Kondisi Data Nol</strong></td>
        <td>Layar putih kosong membingungkan</td>
        <td>Ilustrasi bersahabat "Belum ada program"</td>
      </tr>
    </tbody>
  </table>
</div>
      `,
      deepDive: `Untuk mendeteksi status internet sebelum menembak request, Anda juga dapat mengintegrasikan pustaka <code>@react-native-community/netinfo</code>. Pustaka ini memantau perubahan status online/offline perangkat secara live berbasis event listener OS.`,
      summary: "Uji coba offline 8 langkah membuktikan keandalan aplikasi di bawah kondisi nir-koneksi. Reliable API menangani kelima UI state dengan mulus dan menyediakan tombol coba lagi mandiri.",
      pitfalls: "Membiarkan aplikasi me-restart paksa saat offline atau tidak menyediakan mekanisme retry sehingga pengguna terjebak di layar error.",
      examTips: "Pahami urutan alur skenario uji coba offline 8 langkah dan kontras perbedaan antara Fragile API vs Reliable API."
    }
  ],
  glossary: [
    { term: "Timeout", def: "Batas waktu maksimal toleransi bagi aplikasi untuk menunggu balasan paket data dari server sebelum membatalkan permintaan." },
    { term: "AbortController", def: "Objek kontroler standar JavaScript yang memungkinkan pengembang membatalkan permintaan fetch jaringan secara terprogram." },
    { term: "response.ok", def: "Properti boolean bawaan Fetch Response yang bernilai true hanya jika kode status HTTP berada di rentang 200 hingga 299." },
    { term: "Retry Mechanism", def: "Pola desain antarmuka yang memungkinkan pengguna memicu ulang proses pemanggilan API tanpa harus meninggalkan halaman." }
  ],
  summaryWeek: "Pekan 6 menuntaskan Sprint 05: pemahaman ragam kegagalan komunikasi (HTTP 4xx/5xx, timeout, no internet), pendalaman kode status HTTP, penerapan 5 UI States (Idle, Loading, Success, Error, Empty), penguasaan perilaku Fetch API yang mewajibkan pengecekan `response.ok`, implementasi tombol Coba Lagi, dan demonstrasi skenario uji coba offline 8 langkah.",
  sprintChecklist: [
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
  checkUnderstanding: [
    {
      question: "Bagaimanakah perilaku fungsi `fetch()` bawaan JavaScript ketika server merespons dengan kode status `404 Not Found` atau `500 Internal Server Error`?",
      options: [
        "Fetch otomatis melempar exception dan langsung melompat ke blok catch",
        "Fetch tetap mengembalikan Promise yang Resolved (sukses diterima), sehingga blok catch TIDAK terpanggil kecuali response.ok diperiksa manual",
        "Fetch otomatis mengulang permintaan sebanyak 3 kali",
        "Aplikasi mobile langsung crash dan tertutup paksa oleh sistem operasi",
        "Fetch otomatis mengubah status code menjadi 200 OK"
      ],
      correct: 1,
      explanation: "Ini adalah karakteristik unik Fetch: selama ada respons balik dari server (meski 404 atau 500), Promise tetap resolved. Pengembang wajib memeriksa nilai boolean `response.ok` secara eksplisit."
    },
    {
      question: "Apakah arti dari nilai properti `response.ok === true` pada objek respons Fetch?",
      options: [
        "Koneksi internet pengguna memiliki kecepatan di atas 10 Mbps",
        "Status code HTTP berada pada rentang keberhasilan 200 sampai 299",
        "Data JSON telah berhasil disimpan di SQLite lokal",
        "Pengguna memiliki izin admin tertinggi",
        "Aplikasi sedang berjalan pada mode rilis (production)"
      ],
      correct: 1,
      explanation: "`response.ok` bernilai true hanya jika status kode HTTP berada di rentang 200-299. Jika status 400, 401, 404, atau 500, maka `response.ok` bernilai false."
    },
    {
      question: "Mengapa pemanggilan `setIsLoading(false)` paling tepat diletakkan di dalam blok `finally`?",
      options: [
        "Agar spinner berputar lebih cepat",
        "Karena blok `finally` dijamin selalu dieksekusi, baik saat pemanggilan API sukses maupun saat terjadi kegagalan/error",
        "Agar memori RAM smartphone tidak terpakai sama sekali",
        "Karena aturan sintaksis JavaScript mewajibkan `finally` memiliki setter state",
        "Untuk mencegah pengguna menekan tombol kembali"
      ],
      correct: 1,
      explanation: "Blok `finally` selalu dijalankan setelah blok `try` atau `catch` selesai. Meletakkan pematian loading di sana mencegah bug 'spinner berputar selamanya' saat error terjadi."
    },
    {
      question: "Manakah kondisi antarmuka yang tepat untuk status 'EMPTY STATE' pada aplikasi PresidentKu?",
      options: [
        "Layar putih kosong melompong saat internet mati",
        "Tampilan animasi spinner berputar terus-menerus tanpa batas waktu",
        "Tampilan grafis ramah dan teks penjelas saat pemanggilan API sukses namun server mengembalikan daftar program berjumlah nol (data kosong)",
        "Kotak dialog peringatan bahwa sistem operasi ponsel tidak kompatibel",
        "Layar merah peringatan token otentikasi kedaluwarsa"
      ],
      correct: 2,
      explanation: "Empty state terjadi saat request berhasil (200 OK) tetapi tidak ada konten data yang cocok (array length 0). UI wajib memberikan feedback jelas seperti 'Belum ada program'."
    }
  ]
};
