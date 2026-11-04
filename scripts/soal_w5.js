// scripts/soal_w5.js - 20 Soal Terverifikasi Week 5 (Secure API: Token-Based Authentication)
module.exports = [
  {
    id: "w5_01",
    week: 5,
    topik: "Prinsip Keamanan API",
    tingkat: "mudah",
    tipe: "konsep",
    pertanyaan: "Konsep utama yang ditekankan pada slide awal pertemuan 5 mengenai keamanan jaringan API adalah...",
    options: [
      "Semua API di internet harus bisa diakses tanpa kata sandi",
      "API yang dapat diakses bukan berarti boleh diakses siapa saja",
      "Aplikasi mobile tidak boleh mengirimkan data keluar perangkat",
      "Keamanan hanya dibutuhkan untuk aplikasi perbankan saja",
      "Token autentikasi hanya boleh dibuat menggunakan Microsoft Word"
    ],
    correct: 1,
    pembahasan: "Slide 1 & 2 secara mencolok menampilkan 'Konsep Utama: API yang dapat diakses bukan berarti boleh diakses siapa saja'. API publik wajib diproteksi dengan mekanisme autentikasi dan kontrol otorisasi.",
    sumber: "slide"
  },
  {
    id: "w5_02",
    week: 5,
    topik: "Pilar Keamanan Jaringan",
    tingkat: "sedang",
    tipe: "konsep",
    pertanyaan: "Lima fokus pembahasan keamanan jaringan API pada slide 'Network Security — Why Does API Need Protection?' terdiri dari...",
    options: [
      "Authentication, Authorization, Secure Communication (HTTPS), Protected Endpoint, dan Token",
      "HTML, CSS, JavaScript, React Native, dan Expo Go",
      "RAM, ROM, CPU, GPU, dan Baterai",
      "Localhost, Wi-Fi, Bluetooth, NFC, dan GPS",
      "Input, Output, Process, Storage, dan Feedback"
    ],
    correct: 0,
    pembahasan: "Slide 2 merinci 5 fokus: 1. Authentication (verifikasi identitas), 2. Authorization (kontrol hak akses), 3. Secure communication (HTTPS), 4. Protected endpoint (endpoint ber-token), dan 5. Token (bukti akses).",
    sumber: "slide"
  },
  {
    id: "w5_03",
    week: 5,
    topik: "Fungsi Access Token",
    tingkat: "mudah",
    tipe: "konsep",
    pertanyaan: "Apakah peran utama dari 'Access Token' yang diterima aplikasi mobile setelah proses login dinyatakan berhasil?",
    options: [
      "Sebagai pengganti kuota internet pengguna",
      "Sebagai kunci/bukti digital bahwa client telah terotentikasi dan berhak mengakses protected resource pada setiap request berikutnya",
      "Untuk mengubah resolusi layar smartphone menjadi HD",
      "Sebagai sertifikat garansi kerusakan hardware smartphone",
      "Untuk mendownload file APK baru dari cloud"
    ],
    correct: 1,
    pembahasan: "Slide 'Access Token — The Key to Protected API' mendefinisikan: 'Access token adalah kunci untuk mengakses API yang dilindungi... digunakan oleh client untuk membuktikan identitas dan hak akses pada setiap request'.",
    sumber: "slide"
  },
  {
    id: "w5_04",
    week: 5,
    topik: "Format Header Otorisasi",
    tingkat: "sedang",
    tipe: "konsep",
    pertanyaan: "Bagaimanakah penulisan header HTTP standar yang benar saat mengirimkan token autentikasi ke protected endpoint API?",
    options: [
      "Token: <access_token>",
      "Authentication: Bearer <access_token>",
      "Authorization: Bearer <access_token>",
      "User-Token: JWT <access_token>",
      "Bearer-Key: <access_token>"
    ],
    correct: 2,
    pembahasan: "Format standar resmi pada slide adalah: `Authorization: Bearer <access_token>`. Nama header-nya adalah 'Authorization' (bukan Authentication) dan skema-nya adalah 'Bearer ' diikuti token.",
    sumber: "slide"
  },
  {
    id: "w5_05",
    week: 5,
    topik: "Sifat Protokol HTTP",
    tingkat: "sedang",
    tipe: "konsep",
    pertanyaan: "Mengapa access token wajib dikirimkan bersama pada SETIAP kali aplikasi mobile memanggil protected endpoint API?",
    options: [
      "Karena memori smartphone otomatis menghapus token setiap 1 detik",
      "Karena protokol HTTP bersifat stateless (server tidak menyimpan konteks sesi client), sehingga server perlu memverifikasi keabsahan setiap permintaan secara independen",
      "Karena jika tidak dikirim, kuota internet pengguna akan berkurang dua kali lipat",
      "Karena library React Native mewajibkan perulangan string",
      "Agar server tahu warna tema yang sedang aktif di HP"
    ],
    correct: 1,
    pembahasan: "Slide menjelaskan pertanyaan 'Mengapa token dikirim bersama request?': Karena server perlu mengetahui apakah request tersebut berasal dari client yang terotentikasi. Sifat stateless HTTP membuat server tidak menyimpan riwayat sesi di memori.",
    sumber: "slide"
  },
  {
    id: "w5_06",
    week: 5,
    topik: "Struktur JSON Web Token",
    tingkat: "sedang",
    tipe: "konsep",
    pertanyaan: "Sebuah JSON Web Token (JWT) terdiri dari tiga bagian yang dipisahkan oleh tanda titik. Ketiga bagian tersebut secara berurutan adalah...",
    options: [
      "Username, Password, dan Expiration",
      "Header, Payload, dan Signature",
      "Request, Response, dan Status",
      "Public Key, Private Key, dan Secret Key",
      "Domain, Path, dan Query"
    ],
    correct: 1,
    pembahasan: "Slide 'JWT — Understanding The Token' secara tegas memperlihatkan struktur: `header.payload.signature` yang dipisahkan oleh tanda titik.",
    sumber: "slide"
  },
  {
    id: "w5_07",
    week: 5,
    topik: "Komponen JWT (Header)",
    tingkat: "sedang",
    tipe: "konsep",
    pertanyaan: "Bagian 'Header' pada sebuah token JWT berisi informasi tentang...",
    options: [
      "Foto profil dan daftar teman pengguna",
      "Tipe token (JWT) dan algoritma kriptografi yang digunakan untuk menandatangani token (misalnya HS256)",
      "Kata sandi asli pengguna dalam bentuk teks biasa",
      "Daftar endpoint API yang pernah dikunjungi",
      "Alamat fisik kantor pengembang aplikasi"
    ],
    correct: 1,
    pembahasan: "Slide mencatat: 'Header: Berisi informasi tipe token (typ: JWT) dan algoritma yang digunakan (misal alg: HS256)'.",
    sumber: "slide"
  },
  {
    id: "w5_08",
    week: 5,
    topik: "Komponen JWT (Payload)",
    tingkat: "sedang",
    tipe: "konsep",
    pertanyaan: "Bagian 'Payload' pada sebuah token JWT berisi klaim data (claims). Manakah contoh data yang wajar berada di dalam payload JWT?",
    options: [
      "sub (User ID), name, role (misal: 'student' atau 'warga'), dan exp (waktu kedaluwarsa token)",
      "Seluruh kode sumber backend server",
      "Kunci rahasia (secret key) milik administrator server",
      "File installer sistem operasi Android",
      "Daftar seluruh database warga negara Indonesia"
    ],
    correct: 0,
    pembahasan: "Slide mencontohkan struktur Payload JWT: `{\"sub\": \"1\", \"name\": \"User\", \"role\": \"student\", \"exp\": 1728144000}`. Berisi data klaim pengguna dan masa kedaluwarsa.",
    sumber: "slide"
  },
  {
    id: "w5_09",
    week: 5,
    topik: "Komponen JWT (Signature)",
    tingkat: "sedang",
    tipe: "konsep",
    pertanyaan: "Apakah fungsi utama dari bagian 'Signature' pada sebuah JSON Web Token (JWT)?",
    options: [
      "Menyimpan gambar tanda tangan basah pengguna",
      "Memverifikasi integritas token dan memastikan bahwa informasi di dalam header maupun payload tidak pernah diubah atau dimanipulasi oleh pihak luar",
      "Mempercantik tampilan string token agar terlihat panjang",
      "Menghubungkan token ke jaringan internet satelit",
      "Mengurangi ukuran memori RAM yang digunakan ponsel"
    ],
    correct: 1,
    pembahasan: "Slide mencatat: 'Signature: Digunakan untuk verifikasi integritas token. Dibuat menggunakan secret key di server untuk memastikan token tidak dimanipulasi.'",
    sumber: "slide"
  },
  {
    id: "w5_10",
    week: 5,
    topik: "Pendalaman Keamanan JWT",
    tingkat: "sulit",
    tipe: "analisis_kasus",
    pertanyaan: "Seorang programmer pemula menyimpan PIN rahasia dan password pengguna di dalam payload JWT karena ia menganggap JWT adalah bentuk enkripsi yang aman. Mengapa tindakan ini SANGAT BERBAHAYA?",
    options: [
      "Karena ukuran token JWT akan menjadi 2 gigabyte",
      "Karena payload JWT HANYA di-encode menggunakan Base64Url (bukan dienkripsi!), sehingga siapapun yang memperoleh string token dapat men-decode dan membaca isinya secara transparan",
      "Karena server backend tidak mendukung karakter angka pada PIN",
      "Karena token JWT otomatis terhapus jika memuat angka rahasia",
      "Karena Google Play Store akan memblokir akun pengembang"
    ],
    correct: 1,
    pembahasan: "Kotak Pendalaman menegaskan: Payload JWT hanya di-encode (Base64Url), bukan dienkripsi. Siapa pun dapat membuka jwt.io dan membaca teks payload secara telanjang. Data rahasia seperti PIN/password dilarang keras diletakkan di payload.",
    sumber: "slide"
  },
  {
    id: "w5_11",
    week: 5,
    topik: "Keamanan Data in Transit",
    tingkat: "sedang",
    tipe: "konsep",
    pertanyaan: "Mengapa pengiriman token autentikasi WAJIB menggunakan protokol HTTPS (bukan HTTP biasa) meskipun token telah disimpan aman di SecureStore?",
    options: [
      "Karena HTTP biasa membuat smartphone kehabisan baterai dalam 5 menit",
      "Pada HTTP biasa, data dikirim sebagai teks polos tanpa enkripsi sehingga berisiko disadap di jaringan publik (Man-in-the-Middle); sedangkan HTTPS mengenkripsi jalur transmisi data menggunakan TLS",
      "Karena protokol HTTP biasa tidak mendukung format JSON",
      "Karena Expo Go menolak menampilkan teks berwarna jika memakai HTTP",
      "Karena HTTPS adalah hak paten eksklusif dari sistem operasi iOS"
    ],
    correct: 1,
    pembahasan: "Slide 'HTTPS — Protect The Data in Transit' menegaskan: 'Token yang aman disimpan tetapi dikirim melalui koneksi yang tidak aman tetap menjadi masalah'. HTTP teks biasa rentan disadap, sedangkan HTTPS menggunakan enkripsi TLS untuk mengamankan data in transit.",
    sumber: "slide"
  },
  {
    id: "w5_12",
    week: 5,
    topik: "Penyimpanan Token Aman",
    tingkat: "mudah",
    tipe: "konsep",
    pertanyaan: "Pada aplikasi PresidentKu di lingkungan React Native + Expo, di manakah access token yang diterima dari respons login WAJIB disimpan?",
    options: [
      "AsyncStorage biasa tanpa enkripsi",
      "Expo SecureStore (menggunakan enkripsi Keystore/Keychain)",
      "Variabel global window di index.html",
      "File log debug di kartu SD",
      "Di dalam tag komentar komponen JSX"
    ],
    correct: 1,
    pembahasan: "Checklist Task 01 dan slide kode menegaskan: Token harus disimpan secara aman menggunakan `SecureStore.setItemAsync('access_token', token)` agar terenkripsi hardware.",
    sumber: "slide"
  },
  {
    id: "w5_13",
    week: 5,
    topik: "Axios Interceptor",
    tingkat: "sedang",
    tipe: "konsep",
    pertanyaan: "Apakah peran penting dari 'Interceptor' (misalnya pada pustaka Axios) dalam pengelolaan token autentikasi pada aplikasi mobile?",
    options: [
      "Memblokir semua koneksi internet yang masuk ke smartphone",
      "Bekerja secara otomatis menambahkan header `Authorization: Bearer <token>` pada setiap request keluar ke API, sehingga pengembang tidak perlu menulis kode header berulang-ulang di setiap API call",
      "Menghapus token autentikasi setiap kali pengguna membuka layar baru",
      "Menggantikan fungsi backend server di cloud",
      "Mengubah bahasa JavaScript menjadi bytecode binary"
    ],
    correct: 1,
    pembahasan: "Slide 'Mekanisme Interceptor' menjelaskan: 'Interceptor bekerja otomatis untuk menambahkan token pada setiap request ke API, sehingga tidak perlu menulis header token di setiap API call.'",
    sumber: "slide"
  },
  {
    id: "w5_14",
    week: 5,
    topik: "Access vs Refresh Token",
    tingkat: "sedang",
    tipe: "konsep",
    pertanyaan: "Manakah pernyataan yang BENAR mengenai perbedaan karakteristik antara Access Token dan Refresh Token?",
    options: [
      "Access Token memiliki masa berlaku sangat panjang (1 tahun), sedangkan Refresh Token hanya 1 detik",
      "Access Token digunakan langsung untuk mengakses protected endpoint dan memiliki masa berlaku singkat; sedangkan Refresh Token digunakan untuk meminta access token baru dan memiliki masa berlaku lebih panjang",
      "Access Token disimpan di server, sedangkan Refresh Token disimpan di buku catatan pengguna",
      "Access Token hanya bekerja pada mode offline, sedangkan Refresh Token butuh online",
      "Tidak ada perbedaan sama sekali antara keduanya"
    ],
    correct: 1,
    pembahasan: "Slide tabel 'Access Token vs Refresh Token' memaparkan: Access Token (akses protected endpoint, masa berlaku expired singkat, dikirim di header); Refresh Token (mendapatkan access token baru, masa berlaku lebih panjang).",
    sumber: "slide"
  },
  {
    id: "w5_15",
    week: 5,
    topik: "Sintaksis Login & Simpan Token",
    tingkat: "sedang",
    tipe: "tebak_output",
    pertanyaan: "Perhatikan cuplikan kode login berikut:\n```javascript\nconst response = await fetch('/login', { method: 'POST', body: JSON.stringify({ email, password }) });\nconst data = await response.json();\nawait SecureStore.setItemAsync('access_token', data.access_token);\n```\nApa yang dilakukan baris terakhir kode di atas?",
    options: [
      "Menghapus token dari server",
      "Menyimpan string access token yang diterima dari response API ke dalam SecureStore terenkripsi",
      "Mencetak password pengguna ke konsol terminal",
      "Mengirimkan email konfirmasi ke admin kampus",
      "Mengunduh pembaruan aplikasi otomatis"
    ],
    correct: 1,
    pembahasan: "Baris tersebut mengambil properti `data.access_token` dari balasan JSON server dan menyimpannya secara asinkron ke media aman SecureStore dengan kunci 'access_token'.",
    sumber: "slide"
  },
  {
    id: "w5_16",
    week: 5,
    topik: "Protected Request Call",
    tingkat: "sedang",
    tipe: "tebak_output",
    pertanyaan: "Perhatikan potongan kode pemanggilan data program pada Sprint 04 berikut:\n```javascript\nconst token = await SecureStore.getItemAsync('access_token');\nconst res = await fetch('https://api.presidentku.id/programs', {\n  headers: {\n    'Authorization': 'Bearer ' + token\n  }\n});\n```\nJika pengguna belum pernah login sehingga variabel `token` bernilai `null`, kode status HTTP apakah yang kemungkinan besar akan dikembalikan oleh server?",
    options: [
      "200 OK",
      "201 Created",
      "401 Unauthorized",
      "404 Not Found",
      "503 Service Unavailable"
    ],
    correct: 2,
    pembahasan: "Sesuai checklist Task 02 dan slide review: request ke protected endpoint yang tidak menyertakan token sah akan langsung ditolak oleh server dengan status HTTP `401 Unauthorized`.",
    sumber: "slide"
  },
  {
    id: "w5_17",
    week: 5,
    topik: "Session Clearing saat Logout",
    tingkat: "sedang",
    tipe: "pilih_solusi",
    pertanyaan: "Dalam Task 03 'Protect The PresidentKu Session', langkah apa yang wajib dieksekusi oleh fungsi logout untuk memastikan sesi pengguna benar-benar berakhir secara aman?",
    options: [
      "Cukup memanggil `router.replace('/login')` saja tanpa menyentuh storage",
      "Memanggil `await SecureStore.deleteItemAsync('access_token')`, mengubah `setIsAuthenticated(false)`, dan mengarahkan navigasi kembali ke layar Login",
      "Mengubah nama akun pengguna menjadi 'Guest'",
      "Menghapus riwayat cache gambar aplikasi",
      "Mematikan modul bluetooth di ponsel"
    ],
    correct: 1,
    pembahasan: "Slide Task 03 merinci alur logout yang benar: 1. Hapus access token dari SecureStore (`deleteItemAsync`), 2. Bersihkan state autentikasi (`setIsAuthenticated(false)`), dan 3. Navigasi kembali ke halaman login.",
    sumber: "slide"
  },
  {
    id: "w5_18",
    week: 5,
    topik: "Public vs Protected API",
    tingkat: "mudah",
    tipe: "konsep",
    pertanyaan: "Apakah perbedaan mendasar antara 'Public API' dengan 'Protected API' pada arsitektur PresidentKu?",
    options: [
      "Public API dibuat dengan bahasa C, Protected API dibuat dengan Java",
      "Public API dapat diakses oleh siapa saja tanpa memerlukan token autentikasi; sedangkan Protected API mewajibkan token valid yang dikirim melalui header otorisasi",
      "Public API berbayar, Protected API gratis untuk umum",
      "Public API hanya bisa dibuka lewat laptop, Protected API hanya lewat HP",
      "Tidak ada perbedaan teknis di antara keduanya"
    ],
    correct: 1,
    pembahasan: "Slide 'Review — From Public API to Protected API' membandingkan: Public API (data dapat diakses tanpa perlu login) vs Protected API (seluruh komunikasi dilindungi token autentikasi dan request tanpa token ditolak).",
    sumber: "slide"
  },
  {
    id: "w5_19",
    week: 5,
    topik: "Pertanyaan Demo Sprint 04",
    tingkat: "sedang",
    tipe: "konsep",
    pertanyaan: "Saat demonstrasi Sprint 04, dosen bertanya: 'Apa yang terjadi jika aplikasi memanggil protected endpoint tanpa mengirimkan token atau dengan token yang sudah kedaluwarsa?'. Jawaban yang paling tepat adalah...",
    options: [
      "Server tetap mengirimkan data tetapi dengan font berukuran kecil",
      "Server menolak permintaan dan mengembalikan respons dengan kode status HTTP 401 Unauthorized, sehingga aplikasi harus mengarahkan pengguna untuk login ulang",
      "Aplikasi mobile otomatis terhapus dari smartphone pengguna",
      "Server akan otomatis mematikan koneksi internet satu kampus",
      "Data program akan dikirimkan ke email orang tua mahasiswa"
    ],
    correct: 1,
    pembahasan: "Pertanyaan demo No. 5 'Apa yang terjadi jika token tidak dikirim?': Server akan menolak akses dengan respons 401 Unauthorized karena client gagal membuktikan hak aksesnya.",
    sumber: "slide"
  },
  {
    id: "w5_20",
    week: 5,
    topik: "Sprint 04 Checklist",
    tingkat: "mudah",
    tipe: "konsep",
    pertanyaan: "Manakah butir checklist penyelesaian Sprint 04 yang membuktikan bahwa fitur keamanan sesi pada PresidentKu telah tuntas dikerjakan?",
    options: [
      "Membeli domain website baru untuk server",
      "Login via API berhasil, access token tersimpan di SecureStore, request dikirim dengan header Bearer, request tanpa token ditolak (401), dan logout menghapus token",
      "Aplikasi bisa mendeteksi goncangan gempa bumi",
      "Membuat 5 halaman statis tanpa styling",
      "Menonaktifkan seluruh aturan keamanan pada backend"
    ],
    correct: 1,
    pembahasan: "Sprint 04 Checklist merinci: Login melalui API, token diterima, simpan aman (SecureStore), header Authorization digunakan, protected endpoint dapat diakses, request tanpa token ditolak, dan logout menghapus token.",
    sumber: "slide"
  }
];

