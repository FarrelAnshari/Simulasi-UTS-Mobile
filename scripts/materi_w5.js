// scripts/materi_w5.js
module.exports = {
  id: 5,
  weekNumber: 5,
  title: "Secure API: Token-Based Authentication",
  subtitle: "Sprint 04 — From API to Secure API: Mengamankan Komunikasi Mobile dengan Token",
  sprint: "Sprint 04 - Integrasi Token-Based Authentication PresidentKu",
  readTime: "24 menit",
  topics: ["Kenapa API Butuh Proteksi", "Alur Token-Based Authentication", "Access Token & Bearer Authorization Header", "Bedah Struktur JWT (Header, Payload, Signature)", "HTTPS & Keamanan Data in Transit", "Axios Interceptor & Token Management", "Access Token vs Refresh Token"],
  subtopics: [
    {
      id: "w5-why-protect-flow",
      title: "5.1 Mengapa API Butuh Proteksi & Alur Autentikasi Berbasis Token",
      analogy: "Membeli tiket konser festival musik: Anda mengantre di loket tiket dan menunjukkan KTP serta uang (Login). Petugas loket memberi Anda gelang barcode khusus (Access Token). Setelah memakai gelang itu, Anda tidak perlu lagi menunjukkan KTP setiap kali ingin masuk ke area panggung, toilet, atau stan makanan; Anda cukup menunjukkan gelang Anda kepada petugas keamanan di tiap pintu masuk (Protected Endpoint).",
      content: `
<p class="lead">Pada Pekan 4, kita berhasil mengambil data program publik melalui REST API. Namun, dalam aplikasi pemerintahan seperti <strong>PresidentKu</strong>, data tertentu seperti profil kependudukan, pengajuan bansos, dan riwayat aspirasi bersifat rahasia dan berpembatasan akses.</p>

<h4>Prinsip Pokok Keamanan Jaringan</h4>
<div class="callout callout-important text-center">
  <h4 class="mb-0 text-primary">"API yang dapat diakses BUKAN BERARTI boleh diakses siapa saja."</h4>
</div>

<h4>Lima Pilar Fokus Pengamanan API</h4>
<ol class="styled-numbered">
  <li><strong>Authentication:</strong> Memverifikasi identitas pengguna yang membuat permintaan (misal: login dengan email dan password untuk membuktikan kepemilikan akun).</li>
  <li><strong>Authorization:</strong> Menentukan hak akses pengguna terhadap resource tertentu berdasarkan peran/izin (misal: Warga biasa hanya bisa melihat program, sedangkan Admin Pemerintah bisa menambah data program baru).</li>
  <li><strong>Secure Communication (HTTPS/TLS):</strong> Mengenkripsi jalur komunikasi transmisi data agar tidak dapat disadap di jaringan publik.</li>
  <li><strong>Protected Endpoint:</strong> Titik akhir URL API yang secara ketat menuntut tiket bukti otorisasi sebelum mengembalikan data (menolak request tanpa token).</li>
  <li><strong>Token:</strong> Tiket digital ringkas bertanda tangan kriptografis yang dikirimkan pada setiap panggilan request.</li>
</ol>

<h4>Alur Komunikasi Token-Based Authentication</h4>
<div class="diagram-container text-center my-4">
  <svg viewBox="0 0 760 140" class="svg-flowchart">
    <rect x="10" y="40" width="130" height="60" rx="8" class="svg-node-blue" />
    <text x="75" y="65" class="svg-text">MOBILE APP</text>
    <text x="75" y="85" class="svg-subtext">(PresidentKu)</text>
    
    <path d="M 145 55 L 345 55" class="svg-arrow" marker-end="url(#arrow)" />
    <text x="245" y="47" class="svg-label">1. POST /login (email+pwd)</text>
    
    <path d="M 345 85 L 145 85" class="svg-arrow-back" marker-end="url(#arrow)" />
    <text x="245" y="103" class="svg-label">2. Return Token (JWT)</text>
    
    <rect x="350" y="40" width="130" height="60" rx="8" class="svg-node-indigo" />
    <text x="415" y="65" class="svg-text">AUTH SERVER</text>
    <text x="415" y="85" class="svg-subtext">(Validasi Kredensial)</text>
    
    <path d="M 145 115 L 605 115" class="svg-arrow" marker-end="url(#arrow)" />
    <text x="375" y="132" class="svg-label">3. Request + Header: Authorization: Bearer &lt;token&gt;</text>
    
    <rect x="610" y="40" width="140" height="90" rx="8" class="svg-node-purple" />
    <text x="680" y="70" class="svg-text">PROTECTED API</text>
    <text x="680" y="90" class="svg-subtext">(/profile, /bansos)</text>
    <text x="680" y="110" class="svg-subtext">4. Cek Token Valid &rarr; OK</text>
  </svg>
</div>

<p>Mengapa token harus dikirimkan bersama SETIAP request berikutnya? Karena protokol <strong>HTTP bersifat stateless</strong> (tidak memiliki ingatan). Server tidak mengingat bahwa dua detik yang lalu HP Anda baru saja berhasil login. Setiap request berdiri sendiri dan wajib membawa tiket pembuktian identitas yang sah.</p>
      `,
      deepDive: `Di era web lama, otentikasi menggunakan session berbasis cookie di sisi server (<em>stateful</em>). Metode ini membebani memori server ketika jutaan pengguna mobile aktif bersamaan. Pendekatan token (stateless) memindahkan beban penyimpanan session ke client: server hanya perlu memvalidasi tanda tangan kriptografi token yang datang.`,
      summary: "API publik wajib diamankan dengan autentikasi berbasis token. Protokol HTTP yang stateless mewajibkan mobile app menyertakan token autentikasi pada setiap panggilan request ke endpoint yang dilindungi.",
      pitfalls: "Mengirimkan email dan password berulang kali pada setiap pemanggilan API alih-alih menggunakan token hasil login.",
      examTips: "Pahami konsep stateless HTTP dan mengapa token wajib disertakan pada setiap request ke protected endpoint."
    },
    {
      id: "w5-jwt-structure-https",
      title: "5.2 Bedah Anatomi JWT & Enkripsi Jalur HTTPS/TLS",
      analogy: "JWT seperti paspor digital resmi: Ada stempel jenis paspor (Header), ada foto dan biodata pemegang paspor (Payload), dan ada cap tanda tangan hologram basah kementerian luar negeri yang mustahil dipalsukan (Signature).",
      content: `
<h4>Apa Itu JSON Web Token (JWT)?</h4>
<p><strong>JWT (JSON Web Token)</strong> adalah standar industri terbuka (RFC 7519) untuk merepresentasikan klaim identitas antara dua pihak secara aman dan ringkas. Struktur sebuah string JWT terdiri dari tiga bagian yang dipisahkan oleh tanda titik (<code>.</code>):</p>
<div class="callout callout-info text-center font-mono">
  <strong>header.payload.signature</strong><br/>
  <span class="text-xs text-muted">eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwibmFtZSI6IlVzZXIiLCJyb2xlIjoic3R1ZGVudCIsImV4cCI6MTcyODE0NDAwMH0.H30e2...X9fQ</span>
</div>

<div class="grid-3-col my-4">
  <div class="card-feature">
    <div class="badge-indigo mb-2">1. HEADER</div>
    <pre><code class="language-json">{
  "alg": "HS256",
  "typ": "JWT"
}</code></pre>
    <p class="text-xs text-muted mt-2">Menyatakan algoritma kriptografi yang digunakan (misal HMAC SHA256) dan tipe token.</p>
  </div>
  <div class="card-feature">
    <div class="badge-amber mb-2">2. PAYLOAD (Claims)</div>
    <pre><code class="language-json">{
  "sub": "101",
  "name": "Farrel",
  "role": "warga",
  "exp": 1728144000
}</code></pre>
    <p class="text-xs text-muted mt-2">Berisi klaim data pengguna: ID subjek (sub), nama, hak akses (role), serta waktu kedaluwarsa (exp).</p>
  </div>
  <div class="card-feature">
    <div class="badge-emerald mb-2">3. SIGNATURE</div>
    <pre><code class="language-text">HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  server_secret_key
)</code></pre>
    <p class="text-xs text-muted mt-2">Verifikasi integritas. Dibuat menggunakan secret key di server untuk menjamin payload tidak diubah penyerang.</p>
  </div>
</div>

<div class="callout callout-deepdive">
  <h5><i class="fa-solid fa-triangle-exclamation"></i> Pendalaman Kritis: JWT Di-Encode, BUKAN Di-Enkripsi!</h5>
  <p>Banyak developer keliru mengira payload JWT terenkripsi aman. Faktanya, payload JWT hanya diubah formatnya menggunakan <strong>Base64Url Encoding</strong> (agar dapat dikirim sebagai string teks pada header HTTP). Siapapun yang memperoleh token JWT dapat membuka situs <em>jwt.io</em> dan membaca seluruh isinya dalam sekejap!</p>
  <p class="mb-0 text-danger font-semibold">&rarr; JANGAN PERNAH menyimpan informasi rahasia tingkat tinggi seperti kata sandi mentah (plaintext password), PIN rekening, atau nomor kartu kredit di dalam payload JWT!</p>
</div>

<h4>Mengapa Enkripsi Jalur HTTPS/TLS Mutlak Diperlukan?</h4>
<p>Token Anda mungkin tersimpan sangat rapi di SecureStore terenkripsi (Pekan 3). Namun, jika aplikasi Anda mengirimkan token tersebut ke server melalui protokol HTTP biasa (tanpa "S"), paket data meluncur di udara dalam bentuk teks polos (<em>plaintext in transit</em>).</p>
<ul class="styled-list">
  <li><strong>HTTP (Tidak Aman):</strong> Data rentan disadap oleh pihak ketiga di jaringan WiFi publik (<em>Man-in-the-Middle Attack / Packet Sniffing</em>). Penyerang dapat mencuri token Anda dan menduplikasi hak akses akun secara ilegal.</li>
  <li><strong>HTTPS (Aman):</strong> Menggunakan enkripsi <strong>TLS (Transport Layer Security)</strong> dan sertifikat digital server. Seluruh percakapan request dan header token diacak secara matematis sehingga hanya server sah yang dapat membaca isinya.</li>
</ul>
      `,
      deepDive: `Periksa selalu URL endpoint backend Anda. Pastikan diawali dengan skema <code>https://</code>. Pada konfigurasi Android modern (Android 9+), sistem operasi bahkan secara default memblokir semua lalu lintas data teks polos (<em>cleartext HTTP traffic</em>) demi keselamatan pengguna.`,
      summary: "JWT terdiri atas 3 bagian: Header (algoritma), Payload (klaim & masa berlaku exp), dan Signature (penjamin integritas dari secret key server). Payload hanya di-encode Base64Url (bukan dienkripsi). Transmisi token wajib melalui HTTPS/TLS agar tidak disadap saat in transit.",
      pitfalls: "Menaruh password pengguna di dalam payload JWT karena mengira JWT adalah enkripsi, atau melakukan panggilan API sensitif menggunakan protokol `http://` bukan `https://`.",
      examTips: "Hafalkan tiga komponen pembentuk struktur JWT (Header, Payload, Signature) dan fungsi klaim `exp` (waktu kedaluwarsa token)."
    },
    {
      id: "w5-token-code-interceptor",
      title: "5.3 Implementasi Kode: Login, Secure Storage & Axios Interceptor",
      analogy: "Interceptor seperti asisten pribadi yang memeriksa amplop surat Anda setiap kali Anda hendak mengirimkannya ke pos kantor: ia secara otomatis menempelkan perangko resmi dan tanda pengenal diplomatik Anda di amplop tanpa perlu Anda ingatkan setiap kali.",
      content: `
<h4>Format Standar Header Otorisasi</h4>
<p>Untuk mengakses protected endpoint, token dikirimkan melalui header HTTP dengan skema <strong>Bearer Token</strong>:</p>
<div class="code-flow bg-dark text-white p-2 font-mono text-sm">
  Authorization: Bearer &lt;access_token_jwt_disini&gt;
</div>

<h4>1. Kode Lengkap: Login & Simpan Token ke SecureStore</h4>
<div class="code-block-wrapper">
  <div class="code-header">
    <span>authService.js — Login API Request & Secure Storage</span>
    <button class="btn-copy" onclick="copyCode(this)"><i class="fa-regular fa-copy"></i> Salin</button>
  </div>
  <pre><code class="language-javascript">import * as SecureStore from 'expo-secure-store';

export async function loginUser(email, password) {
  try {
    // 1. Mengirim permintaan POST login ke API Server
    const response = await fetch('https://api.presidentku.id/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      // 2. Simpan access token ke SecureStore (terenkripsi hardware)
      await SecureStore.setItemAsync('access_token', data.access_token);
      console.log('Login berhasil & token aman tersimpan!');
      return { success: true, user: data.user };
    } else {
      return { success: false, message: data.message || 'Login gagal' };
    }
  } catch (error) {
    console.error('Network Error:', error);
    return { success: false, message: 'Tidak dapat terhubung ke server' };
  }
}</code></pre>
</div>

<h4>2. Kode Lengkap: Memanggil Protected API dengan Token</h4>
<div class="code-block-wrapper">
  <div class="code-header">
    <span>programService.js — Protected Endpoint Call</span>
    <button class="btn-copy" onclick="copyCode(this)"><i class="fa-regular fa-copy"></i> Salin</button>
  </div>
  <pre><code class="language-javascript">import * as SecureStore from 'expo-secure-store';

export async function getProtectedPrograms() {
  try {
    // 1. Ambil access token dari penyimpanan aman
    const token = await SecureStore.getItemAsync('access_token');

    // 2. Sertakan token pada header 'Authorization: Bearer <token>'
    const response = await fetch('https://api.presidentku.id/programs', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token, // Header Otorisasi Bearer
      },
    });

    if (response.status === 401) {
      throw new Error('UNAUTHORIZED: Token kedaluwarsa atau tidak valid!');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Protected API Error:', error);
    throw error;
  }
}</code></pre>
</div>

<h4>Mekanisme Interceptor (Otomasi Penempelan Token)</h4>
<p>Jika aplikasi memiliki 50 endpoint API, menulis manual <code>headers: { Authorization: Bearer ... }</code> pada setiap panggilan kode akan sangat melelahkan dan rentan lupa. Dengan pustaka <strong>Axios</strong>, kita dapat memanfaatkan fitur <strong>Request Interceptor</strong>:</p>

<div class="code-block-wrapper">
  <div class="code-header">
    <span>apiClient.js — Konsep Axios Interceptor</span>
    <button class="btn-copy" onclick="copyCode(this)"><i class="fa-regular fa-copy"></i> Salin</button>
  </div>
  <pre><code class="language-javascript">import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

const apiClient = axios.create({
  baseURL: 'https://api.presidentku.id',
});

// Interceptor bertindak di tengah jalan sebelum request ditembakkan ke jaringan
apiClient.interceptors.request.use(async (config) => {
  const token = await SecureStore.getItemAsync('access_token');
  if (token) {
    config.headers.Authorization = 'Bearer ' + token;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default apiClient;</code></pre>
</div>

<h4>Access Token vs Refresh Token</h4>
<div class="comparison-table-wrapper my-4">
  <table class="table-compare">
    <thead>
      <tr>
        <th>Karakteristik</th>
        <th>Access Token</th>
        <th>Refresh Token</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Fungsi Utama</strong></td>
        <td>Membuka dan mengakses protected resource data</td>
        <td>Meminta access token baru saat access token lama kedaluwarsa</td>
      </tr>
      <tr>
        <td><strong>Masa Berlaku (Expiry)</strong></td>
        <td>Singkat (misal: 15 menit &ndash; 1 jam)</td>
        <td>Panjang (misal: 7 hari &ndash; 30 hari)</td>
      </tr>
      <tr>
        <td><strong>Tujuan Keamanan</strong></td>
        <td>Membatasi jendela waktu jika token dicuri peretas</td>
        <td>Mempertahankan kenyamanan pengguna agar tidak login berulang</td>
      </tr>
      <tr>
        <td><strong>Penyimpanan</strong></td>
        <td>Secure Storage (Expo SecureStore)</td>
        <td>Secure Storage (Expo SecureStore)</td>
      </tr>
    </tbody>
  </table>
</div>
      `,
      deepDive: `Jika Access Token masa berlakunya dibuat 1 tahun, penyerang yang berhasil mencuri token tersebut akan leluasa mengakses akun korban selama 1 tahun penuh. Dengan membatasi umur Access Token menjadi 15 menit, risiko kebobolan diminimalkan drastis. Refresh token bertindak di latar belakang untuk memperbarui access token secara senyap (<em>silent refresh</em>).`,
      summary: "Protected API mewajibkan header 'Authorization: Bearer <token>'. Token disimpan di SecureStore dan disematkan di request secara otomatis via Axios Interceptor. Access token berumur singkat untuk keamanan, sedangkan Refresh token berumur panjang untuk perpanjangan sesi.",
      pitfalls: "Lupa spasi antara kata 'Bearer' dan string token (misal: `Bearer${token}` tanpa spasi), yang mengakibatkan server menolak request dengan status 401 Unauthorized.",
      examTips: "Perhatikan format penulisan header: `Authorization: Bearer <token>`. Pahami juga perbedaan masa berlaku dan fungsi antara Access Token vs Refresh Token."
    }
  ],
  glossary: [
    { term: "Bearer Token", def: "Skema autentikasi HTTP di mana siapa pun yang membawa (bears) token tersebut berhak mengakses resource yang dilindungi." },
    { term: "Stateless", def: "Karakteristik protokol komunikasi di mana server tidak menyimpan status (state) atau konteks sesi client di memori lokalnya." },
    { term: "Interceptor", def: "Middleware fungsi pada pustaka HTTP (seperti Axios) yang mencegat permintaan atau tanggapan sebelum diproses lebih lanjut." },
    { term: "Status 401 Unauthorized", def: "Kode status HTTP yang menandakan permintaan ditolak karena kredensial otorisasi tidak ada atau tidak valid." }
  ],
  summaryWeek: "Pekan 5 menuntaskan Sprint 04: pemahaman proteksi REST API, alur token-based authentication, pengiriman token via header 'Authorization: Bearer <token>', pembedahan struktur 3 bagian JWT (Header, Payload ber-Base64Url, Signature terverifikasi), kewajiban enkripsi transit HTTPS/TLS, pemanfaatan Axios Interceptor, strategi pemisahan Access Token vs Refresh Token, serta proteksi sesi login/logout di PresidentKu.",
  sprintChecklist: [
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
  checkUnderstanding: [
    {
      question: "Apakah nama skema dan nama header HTTP standar yang digunakan untuk mengirimkan JWT access token ke protected endpoint?",
      options: [
        "Header `Authentication: Token <token>`",
        "Header `Authorization: Bearer <token>`",
        "Header `Token-Access: JWT <token>`",
        "Header `Security: Key <token>`",
        "Header `User-Identity: Bearer <token>`"
      ],
      correct: 1,
      explanation: "Standar resmi RFC 6750 menetapkan nama header adalah `Authorization` dengan skema pembawa `Bearer <token>` (dipisahkan spasi tunggal)."
    },
    {
      question: "Terdiri dari tiga bagian apakah sebuah struktur string JSON Web Token (JWT)?",
      options: [
        "User, Password, dan Token",
        "Header, Payload, dan Signature",
        "URL, Method, dan Body",
        "Request, Response, dan Status",
        "Public Key, Private Key, dan Hash"
      ],
      correct: 1,
      explanation: "Struktur JWT terdiri dari tiga bagian yang dipisahkan tanda titik: Header (tipe & algoritma), Payload (klaim data), dan Signature (tanda tangan integritas)."
    },
    {
      question: "Mengapa menyimpan data sensitif seperti password pengguna di dalam payload JWT sangat dilarang?",
      options: [
        "Karena payload JWT hanya di-encode dengan Base64Url, BUKAN dienkripsi, sehingga siapapun dapat melihat isinya",
        "Karena server otomatis menghapus password saat token divalidasi",
        "Karena ukuran JWT akan melebihi kapasitas memori RAM smartphone",
        "Karena Expo Go tidak mendukung string berhuruf besar",
        "Karena password akan otomatis terkirim ke Google Play Store"
      ],
      correct: 0,
      explanation: "Base64Url hanyalah representasi encoding biner ke teks, bukan enkripsi. Setiap orang yang mencegat atau memegang token dapat mendecode isi payload secara instan."
    },
    {
      question: "Apa tujuan utama dari membedakan antara Access Token (umur pendek) dan Refresh Token (umur panjang)?",
      options: [
        "Agar server memiliki pekerjaan komputasi dua kali lebih banyak",
        "Membatasi jendela waktu penyalahgunaan jika Access Token dicuri, sembari tetap menjaga kenyamanan sesi pengguna tanpa harus login ulang",
        "Menghindari penggunaan HTTPS pada aplikasi mobile",
        "Agar ukuran aplikasi di smartphone menjadi lebih kecil",
        "Memaksa pengguna memasukkan kata sandi setiap 10 detik"
      ],
      correct: 1,
      explanation: "Access token dibuat berumur singkat (misal 15 menit) untuk memitigasi dampak jika token tersadap. Refresh token berumur panjang dipakai untuk meminta access token baru secara senyap tanpa mengganggu UX."
    }
  ]
};
