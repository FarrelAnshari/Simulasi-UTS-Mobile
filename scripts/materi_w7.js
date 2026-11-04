// scripts/materi_w7.js
module.exports = {
  id: 7,
  weekNumber: 7,
  title: "Device Sensor",
  subtitle: "Sprint 06 — Dari Data Server ke Data Sensor Fisik Perangkat Secara Real-Time",
  sprint: "Sprint 06 - Integrasi Sensor Akselerometer & Shake Detection PresidentKu",
  readTime: "25 menit",
  topics: ["Transisi Data API ke Data Sensor", "Jenis Sensor Fisik (Akselerometer, Giroskop, Magnetometer)", "Lapisan Akses Hardware & Runtime Permission", "Implementasi expo-sensors & Subscription Cleanup", "Kalkulasi Magnitude & Deteksi Goncangan (Shake Detection)", "Kotak Verifikasi Satuan (g vs m/s²)"],
  subtopics: [
    {
      id: "w7-sensor-fundamentals",
      title: "7.1 Mengenal Sensor Perangkat & Lapisan Akses Hardware",
      analogy: "Jika REST API seperti menerima koran berita dari luar kota (data datang saat diminta lewat kurir), maka sensor ponsel adalah indra peraba dan telinga langsung pada tubuh smartphone: ia merasakan getaran, kemiringan, dan orientasi gravitasi secara seketika ratusan kali per detik.",
      content: `
<p class="lead">Hingga Pekan 6, seluruh data aplikasi PresidentKu bersumber dari server jarak jauh melalui REST API. Pada Pekan 7 (Sprint 06), kita melangkah ke <strong>Pilar Keempat: Device Features</strong> dengan mengakses sensor fisik yang tertanam langsung di dalam sirkuit smartphone pengguna.</p>

<h4>Perbandingan: Data Server (API) vs Data Sensor</h4>
<div class="comparison-table-wrapper my-4">
  <table class="table-compare">
    <thead>
      <tr>
        <th>Karakteristik</th>
        <th>Data Server (REST API)</th>
        <th>Data Sensor (Hardware)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Asal Data</strong></td>
        <td>Database server jarak jauh di cloud</td>
        <td>Komponen fisik silikon mikro (MEMS) di dalam HP</td>
      </tr>
      <tr>
        <td><strong>Sifat Pembaruan</strong></td>
        <td>Statik atau sesuai jadwal request (On-demand)</td>
        <td>Streaming numerik real-time kontinu (Continuous)</td>
      </tr>
      <tr>
        <td><strong>Ketergantungan</strong></td>
        <td>Sangat bergantung pada koneksi internet</td>
        <td>Bekerja 100% lokal tanpa memerlukan internet</td>
      </tr>
      <tr>
        <td><strong>Format Data</strong></td>
        <td>JSON terstruktur (string, boolean, array)</td>
        <td>Vektor numerik desimal tinggi (x, y, z koordinat)</td>
      </tr>
    </tbody>
  </table>
</div>

<h4>Jenis-Jenis Sensor Utama pada Smartphone Modern</h4>
<div class="grid-2-col my-4">
  <div class="card-feature">
    <h5>1. Accelerometer (Akselerometer)</h5>
    <p>Mengukur laju perubahan kecepatan (percepatan/akselerasi) fisik pada 3 sumbu ruang: Sumbu X (kiri/kanan), Sumbu Y (atas/bawah), dan Sumbu Z (depan/belakang tegak lurus layar). Digunakan untuk mendeteksi goncangan (shake), langkah kaki (pedometer), dan orientasi layar.</p>
  </div>
  <div class="card-feature">
    <h5>2. Gyroscope (Giroskop)</h5>
    <p>Mengukur kecepatan sudut rotasi perputaran ponsel pada sumbu <em>Roll, Pitch, dan Yaw</em> (satuan rad/s atau derajat/detik). Esensial untuk kontrol game kemudi, bidikan kamera, navigasi presisi, dan aplikasi Augmented Reality (AR/VR).</p>
  </div>
  <div class="card-feature">
    <h5>3. Magnetometer (Kompas Digital)</h5>
    <p>Mengukur kekuatan dan arah medan magnet bumi di sekitar ponsel. Digunakan bersama GPS untuk menentukan arah hadap mata angin utara-selatan di aplikasi peta.</p>
  </div>
  <div class="card-feature">
    <h5>4. Sensor Tambahan (Lainnya)</h5>
    <p>Sensor Cahaya Lingkungan (Ambient Light), Sensor Jarak Dekat (Proximity Sensor di speaker telinga), Barometer (tekanan udara untuk ketinggian elevasi), dan Kamera.</p>
  </div>
</div>

<h4>Arsitektur Lapisan Akses Sensor (Hardware Abstraction Layer)</h4>
<p>Aplikasi mobile tidak dapat menyentuh sirkuit sensor silikon secara langsung karena alasan stabilitas sistem operasi dan isolasi keamanan (sandboxing). Panggilan sensor melewati 4 lapisan:</p>

<div class="diagram-container text-center my-4">
  <svg viewBox="0 0 760 90" class="svg-flowchart">
    <rect x="10" y="20" width="130" height="50" rx="8" class="svg-node-blue" />
    <text x="75" y="45" class="svg-text">1. MOBILE APP</text>
    <text x="75" y="60" class="svg-subtext">(PresidentKu UI)</text>
    
    <path d="M 145 45 L 185 45" class="svg-arrow" marker-end="url(#arrow)" />
    
    <rect x="190" y="20" width="145" height="50" rx="8" class="svg-node-indigo" />
    <text x="262" y="45" class="svg-text">2. SENSOR API</text>
    <text x="262" y="60" class="svg-subtext">(expo-sensors)</text>
    
    <path d="M 340 45 L 380 45" class="svg-arrow" marker-end="url(#arrow)" />
    
    <rect x="385" y="20" width="165" height="50" rx="8" class="svg-node-purple" />
    <text x="467" y="45" class="svg-text">3. OPERATING SYSTEM</text>
    <text x="467" y="60" class="svg-subtext">(Permission & Drivers)</text>
    
    <path d="M 555 45 L 595 45" class="svg-arrow" marker-end="url(#arrow)" />
    
    <rect x="600" y="20" width="150" height="50" rx="8" class="svg-node-emerald" />
    <text x="675" y="45" class="svg-text">4. DEVICE SENSOR</text>
    <text x="675" y="60" class="svg-subtext">(Chip Hardware MEMS)</text>
  </svg>
</div>

<h4>Device Capability: "Tidak Semua Smartphone Punya Semua Sensor"</h4>
<p>Sebelum mengaktifkan pembacaan sensor, aplikasi yang profesional wajib melakukan pengecekan ketersediaan hardware (<em>Device Capability Check</em>) menggunakan method <code>isAvailableAsync()</code>. Misalnya, banyak smartphone kelas bawah tidak dilengkapi chip giroskop fisik (hanya mengandalkan virtual sensor).</p>
      `,
      deepDive: `Sensor modern di smartphone diproduksi menggunakan teknologi <strong>MEMS (Micro-Electro-Mechanical Systems)</strong>. Di dalam chip silikon mikroskopis tersebut terdapat massa mikro pegas silikon yang bergeser saat ponsel digerakkan, menghasilkan perubahan kapasitansi listrik yang dikonversi menjadi data angka biner oleh ADC (Analog-to-Digital Converter).`,
      summary: "Data sensor bersifat lokal, kontinu, dan real-time. Akselerometer mengukur percepatan 3 sumbu, giroskop mengukur rotasi sudut, dan magnetometer mengukur arah medan magnet. Akses melewati lapisan App -> Sensor API -> OS -> Hardware chip.",
      pitfalls: "Langsung memasang listener sensor tanpa memeriksa apakah perangkat ponsel pengguna memiliki sensor tersebut, yang dapat memicu crash diam-diam (silent failure).",
      examTips: "Pahami perbedaan fungsi akselerometer (percepatan gerak/gravitasi) vs giroskop (rotasi sudut roll/pitch/yaw)."
    },
    {
      id: "w7-permissions",
      title: "7.2 Runtime Permission & Kebijakan Privasi Pengguna",
      analogy: "Meminta izin runtime seperti mengetuk pintu rumah seseorang sebelum masuk ke ruang tidur: Anda menyapa ramah, menjelaskan keperluan Anda ('Boleh saya meminjam senter di kamar?'), menunggu tuan rumah berkata 'Boleh' (Allow), dan jika tuan rumah menolak (Deny), Anda tidak boleh mendobrak pintu paksa melainkan mencari lilin di ruang tamu.",
      content: `
<h4>Evolusi Perizinan: Install-Time vs Runtime Permission</h4>
<p>Pada versi Android lama, izin diminta sekaligus saat pengguna mendownload aplikasi di Play Store (<em>Install-Time</em>). Sejak Android 6.0+ dan iOS, industri beralih total ke <strong>Runtime Permission</strong>: izin diminta secara kontekstual tepat saat fitur bersangkutan hendak digunakan oleh pengguna di layar.</p>

<div class="diagram-container text-center my-4">
  <svg viewBox="0 0 740 100" class="svg-flowchart">
    <rect x="10" y="30" width="120" height="50" rx="8" class="svg-node-blue" />
    <text x="70" y="55" class="svg-text">1. USER ACTION</text>
    <text x="70" y="70" class="svg-subtext">(Pemicu Fitur)</text>
    
    <path d="M 135 55 L 185 55" class="svg-arrow" marker-end="url(#arrow)" />
    
    <rect x="190" y="30" width="130" height="50" rx="8" class="svg-node-indigo" />
    <text x="255" y="55" class="svg-text">2. CEK STATUS</text>
    <text x="255" y="70" class="svg-subtext">(Granted / Undetermined)</text>
    
    <path d="M 325 55 L 375 55" class="svg-arrow" marker-end="url(#arrow)" />
    
    <rect x="380" y="30" width="140" height="50" rx="8" class="svg-node-purple" />
    <text x="450" y="55" class="svg-text">3. REQUEST DIALOG</text>
    <text x="450" y="70" class="svg-subtext">(Native Pop-up OS)</text>
    
    <path d="M 525 40 L 595 25" class="svg-arrow" marker-end="url(#arrow)" />
    <text x="555" y="25" class="svg-label">Allow</text>
    
    <rect x="600" y="5" width="130" height="40" rx="6" class="svg-node-emerald" />
    <text x="665" y="30" class="svg-text">4A. AKSES SENSOR</text>
    
    <path d="M 525 70 L 595 85" class="svg-arrow" marker-end="url(#arrow)" />
    <text x="555" y="90" class="svg-label">Deny</text>
    
    <rect x="600" y="65" width="130" height="40" rx="6" class="svg-node-pink" />
    <text x="665" y="90" class="svg-text">4B. FALLBACK UI</text>
  </svg>
</div>

<h4>5 Praktik Terbaik (Best Practices) Penanganan Izin Sensor</h4>
<ol class="styled-numbered">
  <li><strong>Jelaskan Alasan (Provide Clear Rationale):</strong> Beri tahu pengguna MENGAPA aplikasi butuh izin tersebut sebelum memunculkan popup OS (misal: "PresidentKu butuh izin sensor gerak untuk fitur darurat guncangan").</li>
  <li><strong>Minta Tepat Waktu (Just-In-Time Request):</strong> Jangan meminta izin kamera atau lokasi di saat pertama kali aplikasi dibuka saat pengguna baru melihat logo pembuka! Minta hanya saat tombol "Buka Kamera KTP" disentuh.</li>
  <li><strong>Tangani Penolakan dengan Anggun (Graceful Degradation):</strong> Jika pengguna menolak izin (Deny), jangan biarkan aplikasi crash. Sediakan tombol manual sebagai alternatif (misal: tombol ketuk darurat jika sensor goncangan ditolak).</li>
  <li><strong>Sediakan Pintasan ke Pengaturan (Link to Settings):</strong> Jika izin ditolak permanen, sediakan tombol yang langsung membuka layar <code>Linking.openSettings()</code>.</li>
  <li><strong>Jaga Privasi & Hanya untuk Tujuan Fitur:</strong> Dilarang merekam atau mengirimkan data sensor telemetri pengguna ke server tanpa transparansi dan persetujuan tertulis.</li>
</ol>
      `,
      deepDive: `Perlu dicatat bahwa untuk sensor gerak standar (seperti Akselerometer dasar), banyak versi sistem operasi Android tidak menuntut izin popup runtime khusus karena dianggap berisiko rendah privasi. Namun pada iOS dan Android level API tinggi, sensor aktivitas fisik (<em>ACTIVITY_RECOGNITION</em>) dan sensor biometrik tetap mewajibkan deklarasi izin ketat.`,
      summary: "Izin runtime ditanyakan secara kontekstual di aplikasi (Just-in-Time). Developer wajib menjelaskan alasan izin, menangani penolakan pengguna secara aman, dan menyediakan alternatif antarmuka jika akses ditolak.",
      pitfalls: "Meminta seluruh izin perangkat (kamera, lokasi, mikrofon, sensor) sekaligus di halaman selamat datang sebelum pengguna melihat fungsi aplikasi.",
      examTips: "Pahami perbedaan install-time permission vs runtime permission serta alur penanganan permission: request -> allow/deny."
    },
    {
      id: "w7-code-shake-detection",
      title: "7.3 Implementasi expo-sensors, Magnitude & Shake Detection",
      analogy: "Mendeteksi gempa bumi: Jarum seismograf terus berayun kecil mengikuti angin (noise wajar). Namun jika terjadi getaran hebat yang melompat melebihi batas garis merah (threshold), sirine tanda bahaya gedung otomatis meraung keras (trigger aksi darurat).",
      content: `
<h4>Pustaka expo-sensors</h4>
<p>Dalam proyek React Native Expo, seluruh sensor diakses melalui modul terpadu <code>expo-sensors</code>. Komponen yang akan kita gunakan untuk fitur darurat PresidentKu adalah <code>Accelerometer</code>.</p>

<h4>Alur Pemrosesan Data Sensor Mentah</h4>
<div class="code-flow my-3">
  Raw Sensor Data &rarr; Noise Filtering &rarr; Data Transformation &rarr; Event Triggering
</div>

<h4>Rumus Perhitungan Magnitude (Total Percepatan Vektor)</h4>
<p>Akselerometer menghasilkan nilai percepatan terpisah pada tiga sumbu ($x, y, z$). Untuk mengetahui seberapa kuat ponsel digoncangkan tanpa memedulikan arah orientasinya, kita menghitung <strong>Magnitude Vektor Euclidian</strong>:</p>
<div class="callout callout-info text-center font-mono">
  <strong>Magnitude = &radic;(x&sup2; + y&sup2; + z&sup2;)</strong><br/>
  <span class="text-sm">const magnitude = Math.sqrt(x * x + y * y + z * z);</span>
</div>
<p>Nilai magnitude ini kemudian kita bandingkan dengan nilai <strong>Threshold (Ambang Batas)</strong> yang telah ditentukan. Jika magnitude melampaui threshold, kita picu getaran haptik menggunakan <code>Vibration.vibrate()</code>.</p>

<div class="code-block-wrapper">
  <div class="code-header">
    <span>SensorScreen.js — Implementasi Lengkap Accelerometer & Shake Detection</span>
    <button class="btn-copy" onclick="copyCode(this)"><i class="fa-regular fa-copy"></i> Salin</button>
  </div>
  <pre><code class="language-jsx">import React, { useState, useEffect } from 'react';
import { View, Text, Vibration, StyleSheet, Pressable } from 'react-native';
import { Accelerometer } from 'expo-sensors';

export default function SensorScreen() {
  // 1. State penampung koordinat raw data akselerometer
  const [sensorData, setSensorData] = useState({ x: 0, y: 0, z: 0 });
  const [shakeStatus, setShakeStatus] = useState('Tenang');

  // Ambang batas goncangan (Threshold)
  // Catatan: Nilai 1.8g jika satuan g (Expo), atau ~18 m/s² jika SI
  const SHAKE_THRESHOLD = 1.8;

  useEffect(() => {
    // 2. Mengatur interval pembaruan sensor (100 milidetik = 10 kali per detik)
    Accelerometer.setUpdateInterval(100);

    // 3. Memasang listener subscription untuk menerima streaming data
    const subscription = Accelerometer.addListener((data) => {
      setSensorData(data);

      // 4. Menghitung total magnitude getaran 3 sumbu
      const magnitude = Math.sqrt(
        data.x * data.x + data.y * data.y + data.z * data.z
      );

      // 5. Cek apakah goncangan melampaui ambang batas
      if (magnitude > SHAKE_THRESHOLD) {
        setShakeStatus('Goyang Terdeteksi!');
        // Memicu getaran fisik smartphone selama 500 ms
        Vibration.vibrate(500);

        // Reset status kembali tenang setelah 1.5 detik
        setTimeout(() => {
          setShakeStatus('Tenang');
        }, 1500);
      }
    });

    // 6. CLEANUP FUNCTION KRUSIAL: Mencegah Memory Leak & Baterai Boros!
    return () => {
      subscription.remove();
      console.log('Listener sensor berhasil dilepas saat unmount.');
    };
  }, []); // Array dependensi kosong: pasang sekali saat mount

  return (
    &lt;View style={styles.container}&gt;
      &lt;Text style={styles.header}&gt;Pantauan Sensor Gerak PresidentKu&lt;/Text&gt;
      
      {/* Tampilan Koordinat 3 Sumbu */}
      &lt;View style={styles.dataCard}&gt;
        &lt;Text style={styles.axisText}&gt;Sumbu X : {sensorData.x.toFixed(2)}&lt;/Text&gt;
        &lt;Text style={styles.axisText}&gt;Sumbu Y : {sensorData.y.toFixed(2)}&lt;/Text&gt;
        &lt;Text style={styles.axisText}&gt;Sumbu Z : {sensorData.z.toFixed(2)}&lt;/Text&gt;
      &lt;/View&gt;

      {/* Indikator Status Goncangan */}
      &lt;View style={[
        styles.statusBox, 
        shakeStatus === 'Goyang Terdeteksi!' ? styles.statusAlert : styles.statusNormal
      ]}&gt;
        &lt;Text style={styles.statusTitle}&gt;Status Deteksi:&lt;/Text&gt;
        &lt;Text style={styles.statusValue}&gt;{shakeStatus}&lt;/Text&gt;
      &lt;/View&gt;
    &lt;/View&gt;
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f8fafc', justifyContent: 'center' },
  header: { fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  dataCard: { backgroundColor: '#ffffff', padding: 16, borderRadius: 12, elevation: 2, marginBottom: 20 },
  axisText: { fontSize: 16, fontFamily: 'monospace', marginVertical: 4 },
  statusBox: { padding: 20, borderRadius: 12, alignItems: 'center' },
  statusNormal: { backgroundColor: '#e2e8f0' },
  statusAlert: { backgroundColor: '#fca5a5' }, // Merah muda saat darurat
  statusTitle: { fontSize: 14, color: '#475569' },
  statusValue: { fontSize: 20, fontWeight: 'bold', marginTop: 4 },
});</code></pre>
</div>

<h4>Mengapa Cleanup <code>subscription.remove()</code> Sangat Krusial?</h4>
<p>Di dalam fungsi return pada <code>useEffect</code>, kita memanggil <code>subscription.remove()</code>. Jika baris ini diabaikan:</p>
<ul class="styled-list">
  <li><strong>Memory Leak (Kebocoran Memori):</strong> Listener sensor akan terus hidup di latar belakang sistem operasi meskipun pengguna telah berpindah ke halaman lain.</li>
  <li><strong>Baterai Cepat Terkuras:</strong> Chip mikroprosesor MEMS dipaksa terus mengirim data 10 kali per detik tanpa henti, menyebabkan smartphone menjadi panas dan baterai cepat drop.</li>
  <li><strong>Aplikasi Menjadi Lambat (Lag):</strong> Terjadi penumpukan pemanggilan callback berulang di thread JavaScript.</li>
</ul>
      `,
      deepDive: `Fungsi <code>toFixed(2)</code> digunakan untuk membatasi tampilan desimal angka sensor menjadi hanya 2 digit di belakang koma (misal: <code>0.98</code> bukan <code>0.981245678234</code>). Tanpa toFixed, re-render komponen akan sangat berat karena nilai desimal panjang berubah liar tiap milidetik.`,
      summary: "Accelerometer diakses lewat expo-sensors dengan setUpdateInterval dan addListener. Total percepatan dihitung dengan rumus magnitude Math.sqrt(x² + y² + z²). Jika magnitude melebihi ambang batas (threshold), getaran dipicu via Vibration.vibrate(). Wajib melakukan cleanup subscription.remove() di return useEffect.",
      pitfalls: "Lupa memanggil `subscription.remove()` pada fase unmount useEffect, menyebabkan sensor terus aktif di latar belakang dan menghabiskan baterai pengguna.",
      examTips: "Kuasai rumus magnitude Euclidian dan pahami fungsi krusial cleanup `subscription.remove()` untuk mencegah memory leak dan baterai boros."
    },
    {
      id: "w7-verification-box",
      title: "7.4 Kotak Verifikasi Akademik: Satuan Sensor & Komparasi Ekosistem",
      analogy: "Konversi mata uang: Satu Dolar Amerika setara dengan sekitar Rp 15.500,-. Nilai fisiknya sama, namun angka yang tertulis di kertas berbeda bergantung pada satuan moneter yang disepakati oleh sistem.",
      content: `
<div class="callout callout-warning">
  <h4><i class="fa-solid fa-triangle-exclamation"></i> KOTAK PERINGATAN VERIFIKASI (Penting untuk UTS!)</h4>
  
  <p><strong>1. Verifikasi Satuan Percepatan (g vs m/s&sup2;):</strong></p>
  <ul class="styled-list">
    <li>Pada beberapa lembar slide perkuliahan, angka percepatan gravitasi bumi dicantumkan sebagai <strong>9.81 m/s&sup2;</strong> (satuan standar internasional SI).</li>
    <li>Namun, berdasarkan <em>dokumentasi resmi Expo Sensors (React Native)</em>, method <code>Accelerometer</code> mengembalikan nilai percepatan yang telah dinormalisasi dalam <strong>satuan gravitasi bumi (unit g)</strong>.</li>
    <li><strong>Hubungan Matematis Keduanya:</strong><br/>
      <code>1 g &asymp; 9.81 m/s&sup2;</code>
    </li>
    <li><strong>Implikasi Praktis saat Menentukan Threshold:</strong>
      <ul>
        <li>Jika perangkat Anda menggunakan satuan <strong>g</strong> (Expo Go standar): Saat HP diletakkan diam tegak di atas meja, nilai magnitude berada di sekitar <strong>1.0 g</strong>. Maka ambang batas deteksi goncangan (shake threshold) wajar diatur di kisaran <strong>1.5 g s/d 2.0 g</strong>.</li>
        <li>Jika perangkat Anda menggunakan satuan <strong>m/s&sup2;</strong>: Saat HP diam di meja, nilainya berada di sekitar <strong>9.81 m/s&sup2;</strong>. Maka ambang batas goncangan diatur di kisaran <strong>15 s/d 20 m/s&sup2;</strong>.</li>
      </ul>
    </li>
    <li><em>Rekomendasi bagi Mahasiswa:</em> Selalu periksa nilai pembacaan sensor saat posisi diam di perangkat uji Anda dan rujuk dokumentasi resmi <code>docs.expo.dev/versions/latest/sdk/accelerometer/</code>.</li>
  </ul>

  <hr class="my-3"/>

  <p><strong>2. Catatan Ekosistem Slide (React Native vs Flutter):</strong></p>
  <p class="mb-0">Beberapa lembar slide referensi universitas mungkin menyinggung paket sensor Flutter (seperti pustaka <code>sensors_plus</code>). Perlu ditegaskan bahwa <strong>proyek aplikasi PresidentKu dan modul praktikum kita menggunakan React Native dengan pustaka <code>expo-sensors</code></strong>. Meskipun nama pustakanya berbeda, gagasan arsitektur intinya 100% identik: data diakses lewat listener 3 sumbu (X, Y, Z), memerlukan penanganan siklus hidup (lifecycle cleanup), dan dihitung menggunakan rumus magnitude yang sama.</p>
</div>
      `,
      deepDive: `Perhatikan bahwa sumbu Z pada akselerometer membaca tarikan gravitasi bumi ke arah inti bumi. Ketika ponsel diletakkan telentang menghadap langit di atas meja datar, sumbu X &asymp; 0, Y &asymp; 0, dan Z &asymp; 1 g (atau 9.81 m/s²). Jika ponsel dijatuhkan bebas (free fall), seluruh sumbu x, y, z akan mendekati 0.`,
      summary: "Satuan akselerometer di Expo Sensors adalah g (1 g = 9.81 m/s²). Di meja diam, magnitude = 1 g (atau 9.81 m/s²). Ambang batas goncangan disesuaikan dengan satuan yang digunakan. Konsep React Native (expo-sensors) dan Flutter (sensors_plus) memiliki prinsip kerja arsitektural yang sama.",
      pitfalls: "Memasang threshold goncangan sebesar 1.8 m/s² pada sistem yang membaca dalam satuan m/s², menyebabkan goncangan terdeteksi terus-menerus padahal ponsel sedang diam di meja (karena nilai gravitasi bumi 9.81 m/s² sudah melampaui 1.8).",
      examTips: "Kuasai konversi satuan 1 g = 9.81 m/s² dan nilai pembacaan akselerometer saat ponsel dalam kondisi diam di meja."
    }
  ],
  glossary: [
    { term: "Accelerometer", def: "Sensor hardware yang mendeteksi percepatan linier dan tarikan gravitasi bumi pada sumbu tiga dimensi X, Y, dan Z." },
    { term: "Magnitude", def: "Besaran skalar total percepatan getaran tanpa memedulikan arah vektor, dihitung dengan akar kuadrat jumlah kuadrat koordinat." },
    { term: "Threshold", def: "Nilai ambang batas numerik yang harus dilampaui agar sebuah kondisi atau aksi (misal alarm goncangan) dapat dipicu." },
    { term: "Subscription Cleanup", def: "Proses pelepasan listener sistem operasi saat komponen React ditutup untuk menghentikan pemborosan memori dan daya baterai." }
  ],
  summaryWeek: "Pekan 7 menuntaskan Sprint 06: transisi dari REST API ke data sensor fisik perangkat, pemahaman fungsi akselerometer dan giroskop, lapisan akses hardware abstraction dan perizinan runtime, implementasi listener dengan expo-sensors, rumus magnitude Euclidian untuk shake detection, getaran haptik Vibration.vibrate(), kewajiban subscription cleanup, serta klarifikasi kritis perbedaan satuan g vs 9.81 m/s².",
  sprintChecklist: [
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
  checkUnderstanding: [
    {
      question: "Apakah rumus matematis yang tepat untuk menghitung total magnitude percepatan dari koordinat sensor akselerometer 3 sumbu (x, y, z)?",
      options: [
        "Magnitude = (x + y + z) / 3",
        "Magnitude = Math.sqrt(x*x + y*y + z*z)",
        "Magnitude = x * y * z",
        "Magnitude = Math.max(x, y, z)",
        "Magnitude = Math.pow(x, 2) + Math.pow(y, 2)"
      ],
      correct: 1,
      explanation: "Magnitude vektor percepatan 3 dimensi dihitung menggunakan teorema Pythagoras 3D: akar kuadrat dari jumlah kuadrat x, y, dan z (Math.sqrt(x*x + y*y + z*z))."
    },
    {
      question: "Berapakah nilai perkiraan pembacaan magnitude akselerometer pada aplikasi Expo Sensors saat smartphone diletakkan diam telentang di atas meja datar?",
      options: [
        "Tepat 0 g",
        "Sekitar 1.0 g (atau setara ~9.81 m/s²)",
        "Sekitar 100 g",
        "Minus 5.0 g",
        "Nilai tidak terdefinisi (NaN)"
      ],
      correct: 1,
      explanation: "Meskipun ponsel diam, akselerometer mendeteksi percepatan gravitasi bumi sebesar 1 g (atau 9.81 m/s² dalam satuan SI) yang bekerja ke arah bawah pada sumbu Z."
    },
    {
      question: "Mengapa pemanggilan method `subscription.remove()` di dalam fungsi pengembalian (cleanup) `useEffect` sangat penting pada penggunaan sensor?",
      options: [
        "Untuk menghapus seluruh riwayat commit di repositori Git",
        "Mencegah kebocoran memori (memory leak) dan pengurasan daya baterai yang parah saat layar tidak lagi ditampilkan",
        "Agar sensor ponsel dapat dijual kembali dengan harga tinggi",
        "Karena sistem operasi akan otomatis mematikan layar HP jika tidak ada cleanup",
        "Untuk mengubah satuan m/s² menjadi unit g secara otomatis"
      ],
      correct: 1,
      explanation: "Listener sensor yang tidak dilepas akan terus berjalan di latar belakang OS, menyedot daya komputasi CPU dan baterai secara masif serta memicu kebocoran memori."
    },
    {
      question: "Bagaimanakah hubungan antara satuan percepatan 'g' pada pustaka Expo Sensors dengan satuan internasional 'm/s²'?",
      options: [
        "1 g setara dengan 1 m/s²",
        "1 g setara dengan sekitar 9.81 m/s²",
        "1 g setara dengan 100 m/s²",
        "1 g adalah turunan dari satuan kecepatan km/jam",
        "Keduanya tidak memiliki korelasi fisik sama sekali"
      ],
      correct: 1,
      explanation: "1 unit g didefinisikan sebagai percepatan gravitasi standar bumi di permukaan laut, yaitu setara dengan sekitar 9.80665 m/s² (dibulatkan 9.81 m/s²)."
    }
  ]
};
