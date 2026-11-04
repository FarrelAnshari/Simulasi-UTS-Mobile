// scripts/materi_w3.js
module.exports = {
  id: 3,
  weekNumber: 3,
  title: "Authentication + Local Data Security",
  subtitle: "Sprint 02 — Dari Mobile Interface Menjadi Aplikasi yang Aman & Terotentikasi",
  sprint: "Sprint 02 - Keamanan Data Lokal & Autentikasi PresidentKu",
  readTime: "22 menit",
  topics: ["Autentikasi Pengguna & Kredensial", "Validasi Form vs Autentikasi", "Data Biasa vs Data Sensitif", "Expo SecureStore Terenkripsi", "Matriks Pengujian Keamanan 5 Skenario", "Autentikasi Biometrik"],
  subtopics: [
    {
      id: "w3-auth-flow",
      title: "3.1 Konsep Autentikasi & Alur Form Login",
      analogy: "Autentikasi seperti pos pemeriksaan keamanan di gerbang istana. Petugas menanyakan kartu identitas (kredensial) Anda. Petugas memeriksa dulu apakah Anda membawa KTP (validasi input). Jika Anda tidak membawa KTP sama sekali, Anda langsung disuruh melengkapi berkas tanpa perlu mencocokkan wajah Anda ke buku daftar tamu penting istana.",
      content: `
<p class="lead">Di Pekan 2, kita berhasil membuat antarmuka halaman beranda PresidentKu yang cantik. Namun, antarmuka yang baik belum cukup jika tidak aman. Di Sprint 02 ini, moto kita adalah: <strong>"Dari UI yang baik &rarr; Menjadi UI yang aman"</strong>.</p>

<h4>Apa Itu Autentikasi ("Who Are You?")</h4>
<p>Autentikasi adalah proses sistem memverifikasi kebenaran identitas pengguna yang ingin mengakses aplikasi. Konsep utamanya terdiri dari:</p>
<ul class="styled-list">
  <li><strong>User:</strong> Entitas pengguna yang membuka aplikasi di smartphone.</li>
  <li><strong>Register:</strong> Alur pendaftaran akun baru dengan mengisi data profil (nama lengkap, email, password/PIN).</li>
  <li><strong>Login:</strong> Proses masuk ke aplikasi menggunakan identitas yang telah terdaftar sebelumnya.</li>
  <li><strong>Credential (Kredensial):</strong> Informasi rahasia pembuktian diri, seperti kombinasi <em>email/username</em> dan <em>password/PIN</em>.</li>
  <li><strong>Authentication State:</strong> Status keterbukaan akses pengguna di dalam aplikasi (misal: boolean <code>isAuthenticated = false</code> jika belum login, dan <code>true</code> jika sudah login).</li>
</ul>

<h4>Alur Komprehensif Autentikasi</h4>
<div class="diagram-container text-center my-4">
  <svg viewBox="0 0 760 110" class="svg-flowchart">
    <rect x="10" y="30" width="105" height="50" rx="8" class="svg-node-blue" />
    <text x="62" y="60" class="svg-text">1. USER</text>
    
    <path d="M 115 55 L 145 55" class="svg-arrow" marker-end="url(#arrow)" />
    
    <rect x="150" y="30" width="125" height="50" rx="8" class="svg-node-indigo" />
    <text x="212" y="60" class="svg-text">2. CREDENTIAL</text>
    
    <path d="M 275 55 L 305 55" class="svg-arrow" marker-end="url(#arrow)" />
    
    <rect x="310" y="30" width="130" height="50" rx="8" class="svg-node-amber" />
    <text x="375" y="60" class="svg-text">3. VALIDATION</text>
    
    <path d="M 440 55 L 470 55" class="svg-arrow" marker-end="url(#arrow)" />
    
    <rect x="475" y="30" width="140" height="50" rx="8" class="svg-node-purple" />
    <text x="545" y="60" class="svg-text">4. AUTHENTICATED</text>
    
    <path d="M 615 55 L 645 55" class="svg-arrow" marker-end="url(#arrow)" />
    
    <rect x="650" y="30" width="100" height="50" rx="8" class="svg-node-emerald" />
    <text x="700" y="60" class="svg-text">5. HOME APP</text>
  </svg>
</div>

<h4>Kenapa Ada Validasi Sebelum Autentikasi?</h4>
<p>Banyak developer pemula langsung mencocokkan kredensial tanpa memeriksa kelengkapan isian. <strong>Validasi input wajib dilakukan sebelum autentikasi</strong> karena 3 alasan krusial:</p>
<ol class="styled-numbered">
  <li><strong>Mencegah Error Runtime:</strong> Menghindari pengiriman nilai <code>undefined</code> atau string kosong ke fungsi pencocokan data atau API server.</li>
  <li><strong>Meningkatkan Efisiensi & Kecepatan:</strong> Jika input kosong, aplikasi langsung memberi tahu pengguna seketika di sisi client tanpa perlu membuang kuota data dan waktu untuk request jaringan ke server.</li>
  <li><strong>Umpan Balik (Feedback) yang Ramah Pengguna:</strong> Pengguna langsung paham kolom mana yang lupa diisi (misal: "Email dan password wajib diisi").</li>
</ol>

<div class="code-block-wrapper">
  <div class="code-header">
    <span>LoginScreen.js — Implementasi Logika handleLogin Lengkap</span>
    <button class="btn-copy" onclick="copyCode(this)"><i class="fa-regular fa-copy"></i> Salin</button>
  </div>
  <pre><code class="language-jsx">import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';

export default function LoginScreen({ onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Contoh data kredensial terdaftar (untuk latihan Sprint 02)
  const registeredUser = {
    email: 'warga@presidentku.id',
    password: 'Password123!',
  };

  const handleLogin = () => {
    // 1. VALIDASI INPUT TERLEBIH DAHULU
    if (!email.trim() || !password.trim()) {
      setErrorMessage('Email dan password wajib diisi');
      return; // Berhenti seketika, jangan lanjutkan autentikasi
    }

    // 2. PENGECEKAN KREDENSIAL (AUTHENTICATION)
    if (email === registeredUser.email && password === registeredUser.password) {
      setErrorMessage('');
      onLoginSuccess(true); // Status: Authenticated -> Masuk ke Beranda
    } else {
      // Pesan error aman: Jangan spesifikkan apakah email atau password yang salah!
      setErrorMessage('Email atau password tidak valid');
    }
  };

  return (
    &lt;View style={styles.formContainer}&gt;
      &lt;Text style={styles.label}&gt;Email Warga&lt;/Text&gt;
      &lt;TextInput
        style={styles.input}
        placeholder="nama@email.com"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        accessible={true}
        accessibilityLabel="Kolom isian alamat email"
      /&gt;

      &lt;Text style={styles.label}&gt;Password Akun&lt;/Text&gt;
      &lt;View style={styles.passwordWrapper}&gt;
        &lt;TextInput
          style={styles.inputFlex}
          placeholder="Masukkan password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword} // Menyembunyikan password
          accessible={true}
          accessibilityLabel="Kolom isian kata sandi"
        /&gt;
        &lt;Pressable 
          onPress={() => setShowPassword(!showPassword)}
          style={styles.eyeButton}
          accessibilityLabel="Tombol lihat atau sembunyikan kata sandi"
        &gt;
          &lt;Text&gt;{showPassword ? '👁️' : '🔒'}&lt;/Text&gt;
        &lt;/Pressable&gt;
      &lt;/View&gt;

      {/* Tampilan Pesan Error yang Jelas */}
      {errorMessage ? (
        &lt;Text style={styles.errorText}&gt;{errorMessage}&lt;/Text&gt;
      ) : null}

      &lt;Pressable 
        style={styles.submitButton}
        onPress={handleLogin}
        accessibilityRole="button"
        accessibilityLabel="Tombol Masuk ke Aplikasi PresidentKu"
      &gt;
        &lt;Text style={styles.submitText}&gt;Masuk ke Akun&lt;/Text&gt;
      &lt;/Pressable&gt;
    &lt;/View&gt;
  );
}</code></pre>
</div>

<div class="callout callout-deepdive">
  <h5><i class="fa-solid fa-graduation-cap"></i> Pendalaman: Pemeriksaan Kredensial di Client vs Server</h5>
  <p>Pemeriksaan kredensial langsung di kode JavaScript (seperti <code>registeredUser</code> di atas) <strong>hanya digunakan untuk keperluan latihan praktikum mandiri Sprint 02</strong>. Di aplikasi nyata skala produksi, kode client tidak boleh menyimpan daftar password pengguna! Verifikasi kredensial wajib dilakukan oleh <em>Backend Server</em> yang aman melalui panggilan REST API terenkripsi HTTPS (yang akan kita pelajari di Pekan 4 dan 5).</p>
</div>
      `,
      deepDive: `Perhatikan pemilihan kata pada pesan error. Pesan seperti "Email tidak terdaftar" atau "Password salah untuk email ini" adalah celah keamanan <em>User Enumeration</em>. Penyerang bisa memanfaatkan respons ini untuk menebak daftar email warga yang terdaftar. Gunakan selalu pesan netral: "Email atau password tidak valid".`,
      summary: "Autentikasi memverifikasi identitas pengguna. Selalu lakukan validasi input sebelum pengecekan kredensial. Password wajib dilindungi properti secureTextEntry, dan pesan error dilarang membocorkan data sensitif.",
      pitfalls: "Langsung mengecek kredensial tanpa validasi form kosong, menampilkan password secara terbuka dalam teks biasa (plaintext), atau menampilkan pesan error yang memberitahu peretas bahwa email korban valid.",
      examTips: "Pahami urutan alur autentikasi dan alasan mendasar kenapa validasi form harus dijalankan sebelum autentikasi kredensial."
    },
    {
      id: "w3-secure-storage",
      title: "3.2 Manajemen Data: Normal Storage vs Secure Storage",
      analogy: "Menyimpan preferensi tema gelap di AsyncStorage seperti menaruh stiker warna di pintu kulkas Anda: siapa saja yang lewat boleh melihatnya. Menyimpan token autentikasi di SecureStore seperti menyimpan sertifikat rumah dan kunci brankas di dalam kotak besi berpengunci kombinasi digital di kamar utama.",
      content: `
<p>Dalam aplikasi mobile, setiap data memiliki derajat risiko yang berbeda. Kesalahan fatal pengembang pemula adalah menyimpan seluruh informasi pengguna ke tempat penyimpanan yang sama.</p>

<div class="comparison-table-wrapper my-4">
  <table class="table-compare">
    <thead>
      <tr>
        <th>Kategori Data</th>
        <th>Contoh di PresidentKu</th>
        <th>Tempat Penyimpanan Tepat</th>
        <th>Tingkat Keamanan</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Normal Data (Data Biasa)</strong></td>
        <td>Preferensi tema (gelap/terang), pilihan bahasa (ID/EN), ukuran teks, status onboarding</td>
        <td><strong>Local Storage Biasa</strong><br/>(misal: <em>AsyncStorage</em>)</td>
        <td>Teks polos (plaintext). Aman untuk data estetika yang tidak membahayakan privasi.</td>
      </tr>
      <tr>
        <td><strong>Sensitive Data (Data Sensitif)</strong></td>
        <td>Authentication token (JWT), Session ID, Kredensial rahasia, PIN enkripsi warga</td>
        <td><strong>Secure Storage Terenkripsi</strong><br/>(Expo SecureStore / Keystore)</td>
        <td>Terenkripsi secara hardware di sistem operasi (iOS Keychain / Android Keystore).</td>
      </tr>
    </tbody>
  </table>
</div>

<h4>Mengapa AsyncStorage Berbahaya untuk Token & Password?</h4>
<p>Di Android, berkas AsyncStorage disimpan dalam format XML atau SQLite tanpa enkripsi di direktori aplikasi. Pada perangkat Android yang telah di-<em>root</em> atau melalui backup debug adb, penyerang dapat menyalin berkas tersebut dan membaca token login Anda secara transparan. Jika token dicuri, penyerang dapat mengambil alih akun pengguna seutuhnya.</p>

<h4>Implementasi Expo SecureStore</h4>
<p>Library <code>expo-secure-store</code> memanfaatkan modul keamanan bawaan perangkat keras sistem operasi:</p>
<ul class="styled-list">
  <li>Di <strong>Android</strong>: Data dienkripsi menggunakan AES-256 dan kunci enkripsinya disimpan di <em>Android Keystore</em>.</li>
  <li>Di <strong>iOS</strong>: Data disimpan aman di dalam <em>Keychain Services</em> berstandar keamanan Apple.</li>
</ul>

<div class="code-block-wrapper">
  <div class="code-header">
    <span>Contoh Operasi CRUD Expo SecureStore</span>
    <button class="btn-copy" onclick="copyCode(this)"><i class="fa-regular fa-copy"></i> Salin</button>
  </div>
  <pre><code class="language-javascript">import * as SecureStore from 'expo-secure-store';

// 1. MENYIMPAN DATA SENSITIF (setItemAsync)
// Dijalankan saat pengguna berhasil login
export async function saveAuthToken(token) {
  try {
    await SecureStore.setItemAsync('auth_token', token);
    console.log('Token autentikasi berhasil disimpan aman!');
  } catch (error) {
    console.error('Gagal menyimpan token ke SecureStore:', error);
  }
}

// 2. MEMBACA DATA SENSITIF (getItemAsync)
// Dijalankan saat aplikasi baru dibuka untuk cek status session
export async function getAuthToken() {
  try {
    const token = await SecureStore.getItemAsync('auth_token');
    return token; // Mengembalikan string token atau null jika belum login
  } catch (error) {
    console.error('Gagal membaca token:', error);
    return null;
  }
}

// 3. MENGHAPUS DATA SENSITIF SAAT LOGOUT (deleteItemAsync)
// Dijalankan saat pengguna menekan tombol "Keluar Akun"
export async function clearAuthSession() {
  try {
    await SecureStore.deleteItemAsync('auth_token');
    console.log('Session berhasil dihapus, logout aman!');
  } catch (error) {
    console.error('Gagal menghapus token session:', error);
  }
}</code></pre>
</div>
      `,
      deepDive: `Expo SecureStore memiliki batasan ukuran data: nilai yang disimpan maksimal 2048 bytes (2 KB). Ini sangat ideal untuk token JWT, access token, dan kata sandi sementara, namun <em>tidak dirancang</em> untuk menyimpan basis data lokal yang besar. Jika membutuhkan basis data terenkripsi besar, gunakan SQLCipher.`,
      summary: "Data biasa (tema, bahasa) disimpan di Local Storage biasa. Data sensitif (token, session, PIN) WAJIB disimpan di Secure Storage (Expo SecureStore) yang terenkripsi hardware. Operasi utamanya: setItemAsync, getItemAsync, deleteItemAsync.",
      pitfalls: "Menyimpan authentication token di AsyncStorage demi kemudahan koding, atau lupa memanggil `deleteItemAsync` saat pengguna menekan tombol Logout.",
      examTips: "Ketahui pemetaan data: tema/bahasa -> Local Storage biasa; auth token/PIN -> SecureStore. Hafalkan 3 fungsi Expo SecureStore: setItemAsync, getItemAsync, dan deleteItemAsync."
    },
    {
      id: "w3-security-validation",
      title: "3.3 Security Validation & Matriks Pengujian 5 Skenario",
      analogy: "Keamanan seperti sistem rem mobil. Anda tidak boleh berasumsi rem mobil Anda berfungsi hanya karena pedalnya bisa diinjak. Anda wajib mengujinya di jalan menanjak, jalan licin, dan saat pengereman mendadak. 'Test, Don't Assume!'.",
      content: `
<h4>Prinsip: "Test, Don't Assume!"</h4>
<p>Keamanan perangkat lunak mobile tidak pernah selesai hanya dengan menulis baris implementasi. Kita wajib membuktikan keandalannya melalui pengujian skenario terstruktur.</p>

<div class="diagram-container text-center my-4">
  <svg viewBox="0 0 650 80" class="svg-flowchart">
    <rect x="10" y="20" width="105" height="40" rx="6" class="svg-node-blue" />
    <text x="62" y="45" class="svg-text">IMPLEMENT</text>
    
    <path d="M 115 40 L 145 40" class="svg-arrow" marker-end="url(#arrow)" />
    
    <rect x="150" y="20" width="80" height="40" rx="6" class="svg-node-indigo" />
    <text x="190" y="45" class="svg-text">TEST</text>
    
    <path d="M 230 40 L 260 40" class="svg-arrow" marker-end="url(#arrow)" />
    
    <rect x="265" y="20" width="80" height="40" rx="6" class="svg-node-pink" />
    <text x="305" y="45" class="svg-text">FIND</text>
    
    <path d="M 345 40 L 375 40" class="svg-arrow" marker-end="url(#arrow)" />
    
    <rect x="380" y="20" width="75" height="40" rx="6" class="svg-node-amber" />
    <text x="417" y="45" class="svg-text">FIX</text>
    
    <path d="M 455 40 L 485 40" class="svg-arrow" marker-end="url(#arrow)" />
    
    <rect x="490" y="20" width="95" height="40" rx="6" class="svg-node-emerald" />
    <text x="537" y="45" class="svg-text">RETEST</text>
  </svg>
</div>

<h4>Matriks 5 Skenario Uji Keamanan (Security Test Matrix)</h4>
<div class="comparison-table-wrapper my-4">
  <table class="table-compare">
    <thead>
      <tr>
        <th>No</th>
        <th>Skenario Pengujian</th>
        <th>Langkah Singkat Pengujian</th>
        <th>Hasil yang Diharapkan (Expected)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>1</strong></td>
        <td><strong>Credential Benar</strong></td>
        <td>Login dengan email dan password yang valid.</td>
        <td><span class="badge-success">Login Berhasil</span> &rarr; Pengguna masuk ke halaman beranda.</td>
      </tr>
      <tr>
        <td><strong>2</strong></td>
        <td><strong>Credential Salah</strong></td>
        <td>Login dengan password acak/salah.</td>
        <td><span class="badge-danger">Login Ditolak</span> &rarr; Tampilkan pesan error aman tanpa membocorkan info.</td>
      </tr>
      <tr>
        <td><strong>3</strong></td>
        <td><strong>Input Kosong</strong></td>
        <td>Tekan tombol masuk tanpa mengisi email/password.</td>
        <td><span class="badge-warning">Validation Error</span> &rarr; Muncul pesan validasi seketika, proses auth ditahan.</td>
      </tr>
      <tr>
        <td><strong>4</strong></td>
        <td><strong>Logout</strong></td>
        <td>Pengguna menekan tombol Logout di profil.</td>
        <td><span class="badge-info">Session Cleared</span> &rarr; Token dihapus dari SecureStore, kembali ke login.</td>
      </tr>
      <tr>
        <td><strong>5</strong></td>
        <td><strong>Sensitive Data</strong></td>
        <td>Cek penyimpanan lokal saat session aktif.</td>
        <td><span class="badge-success">Protected</span> &rarr; Token tersimpan di SecureStore, bukan di storage biasa.</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="code-block-wrapper">
  <div class="code-header">
    <span>testCases.js — Struktur Kasus Uji Otomasi Sederhana</span>
    <button class="btn-copy" onclick="copyCode(this)"><i class="fa-regular fa-copy"></i> Salin</button>
  </div>
  <pre><code class="language-javascript">export const testCases = [
  {
    name: "Valid credential",
    action: "Login dengan akun benar",
    expected: "LOGIN_SUCCESS",
  },
  {
    name: "Wrong credential",
    action: "Login dengan password salah",
    expected: "LOGIN_FAILED",
  },
  {
    name: "Empty input",
    action: "Login saat field kosong",
    expected: "VALIDATION_ERROR",
  },
  {
    name: "Logout",
    action: "Tekan tombol logout",
    expected: "SESSION_CLEARED",
  },
  {
    name: "Sensitive data",
    action: "Periksa media penyimpanan token",
    expected: "PROTECTED",
  },
];</code></pre>
</div>

<div class="callout callout-deepdive">
  <h5><i class="fa-solid fa-fingerprint"></i> Pendalaman: Autentikasi Biometrik (Fingerprint & Face ID)</h5>
  <p>Pada slide antarmuka login PresidentKu, terdapat opsi login menggunakan sidik jari (Biometrik) dan Face ID. Dalam ekosistem Expo, fitur ini diintegrasikan melalui pustaka <code>expo-local-authentication</code>. Pustaka ini memanggil sensor biometrik bawaan sistem operasi melalui alur:</p>
  <ol class="styled-numbered mb-0">
    <li><code>hasHardwareAsync()</code>: Memeriksa apakah perangkat fisik ponsel memiliki sensor biometrik.</li>
    <li><code>isEnrolledAsync()</code>: Memastikan pengguna sudah merekam sidik jari/wajah di pengaturan HP.</li>
    <li><code>authenticateAsync()</code>: Menampilkan dialog pemindaian sidik jari native bawaan OS. Jika pemindaian berhasil, aplikasi mengambil token dari SecureStore dan membuka sesi aplikasi.</li>
  </ol>
</div>
      `,
      deepDive: `Perhatikan bahwa autentikasi biometrik tidak menggantikan token sesi. Biometrik hanyalah "kunci pintu gerbang lokal" untuk membuka brankas SecureStore tanpa perlu mengetik ulang kata sandi yang panjang setiap kali membuka aplikasi.`,
      summary: "Keamanan wajib divalidasi lewat siklus: Implement -> Test -> Find -> Fix -> Retest. Lima skenario utama: kredensial benar, salah, input kosong, logout, dan perlindungan data sensitif. Biometrik bertindak sebagai gerbang lokal menuju SecureStore.",
      pitfalls: "Hanya menguji skenario sukses (happy path) dan tidak pernah menguji saat pengguna memasukkan input kosong atau mematikan izin.",
      examTips: "Hafalkan 5 skenario dalam Security Test Matrix (Credential benar, Credential salah, Input kosong, Logout, Sensitive data terproteksi)."
    }
  ],
  glossary: [
    { term: "Credential", def: "Informasi rahasia bukti kepemilikan akun, biasanya berupa pasangan username/email dan password/PIN." },
    { term: "SecureStore", def: "Modul penyimpanan data terenkripsi di Expo yang terintegrasi dengan Keystore Android dan Keychain iOS." },
    { term: "User Enumeration", def: "Celah keamanan di mana sistem memberi tahu penyerang apakah suatu email/username sudah terdaftar di basis data." },
    { term: "Biometric Auth", def: "Mekanisme pembuktian identitas menggunakan karakteristik fisik unik (sidik jari atau pemindaian wajah)." }
  ],
  summaryWeek: "Pekan 3 menyelesaikan Sprint 02: implementasi alur login/register, prinsip validasi input sebelum autentikasi, penyembunyian password via secureTextEntry, pemisahan data biasa (AsyncStorage) dan sensitif (Expo SecureStore), pembuktian keamanan melalui Matriks 5 Skenario Uji, serta pengenalan autentikasi biometrik terproteksi.",
  sprintChecklist: [
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
  checkUnderstanding: [
    {
      question: "Mengapa validasi form input harus dilakukan SEBELUM proses pengecekan autentikasi kredensial?",
      options: [
        "Agar tampilan antarmuka memiliki warna yang lebih menarik",
        "Mencegah error pengiriman data kosong, menghemat sumber daya, dan memberi umpan balik instan ke pengguna",
        "Karena library React Native mewajibkan validasi sebelum fungsi return",
        "Agar data password otomatis dienkripsi oleh compiler Babel",
        "Untuk memenuhi syarat kompilasi berkas AndroidManifest.xml"
      ],
      correct: 1,
      explanation: "Validasi sebelum autentikasi mencegah pengiriman nilai kosong ke server/fungsi, menghemat kuota jaringan dan waktu komputasi, serta memberikan pesan yang jelas kepada pengguna kolom mana yang belum diisi."
    },
    {
      question: "Di manakah tempat yang tepat dan aman untuk menyimpan authentication token (JWT) pada aplikasi React Native?",
      options: [
        "AsyncStorage dalam format JSON biasa",
        "Global variable di berkas App.js",
        "Expo SecureStore (terenkripsi hardware Keystore/Keychain)",
        "Teks file lokal berformat .txt di folder assets",
        "Cookie biasa tanpa atribut httpOnly"
      ],
      correct: 2,
      explanation: "Authentication token adalah data sensitif tingkat tinggi. Wajib disimpan di tempat terenkripsi seperti Expo SecureStore yang terhubung dengan hardware Keystore (Android) atau Keychain (iOS)."
    },
    {
      question: "Fungsi Expo SecureStore manakah yang wajib dipanggil saat pengguna menekan tombol Logout?",
      options: ["SecureStore.clearAll()", "SecureStore.deleteItemAsync('auth_token')", "SecureStore.setItemAsync('auth_token', '')", "SecureStore.removeItem('auth_token')", "SecureStore.destroySession()"],
      correct: 1,
      explanation: "Untuk menghapus kunci data sensitif secara aman dari SecureStore pada Expo, gunakan method asinkron `SecureStore.deleteItemAsync(key)`."
    },
    {
      question: "Apa tujuan utama dari prinsip keamanan 'Test, Don't Assume' dalam pengembangan aplikasi mobile?",
      options: [
        "Mengurangi jumlah commit di repositori GitHub",
        "Memastikan mekanisme keamanan benar-benar terbukti bekerja melalui skenario nyata, bukan sekadar asumsi kode telah ditulis",
        "Menghilangkan kebutuhan akan backend server",
        "Membuat ukuran aplikasi menjadi jauh lebih kecil",
        "Mempercepat proses download aplikasi di Google Play Store"
      ],
      correct: 1,
      explanation: "'Test, Don't Assume' menekankan bahwa fitur keamanan harus diuji dengan skenario ekstrem (input kosong, credential salah, data storage inspection) untuk membuktikan sistem tahan jebol."
    }
  ]
};
