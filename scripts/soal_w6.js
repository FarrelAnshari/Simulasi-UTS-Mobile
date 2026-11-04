// scripts/soal_w6.js - 20 Soal Terverifikasi Week 6 (Reliable API: Error Handling & Offline)
module.exports = [
  {
    id: "w6_01",
    week: 6,
    topik: "Keandalan API",
    tingkat: "mudah",
    tipe: "konsep",
    pertanyaan: "Prinsip utama yang ditekankan pada materi Reliable API pertemuan 6 saat menghadapi kegagalan komunikasi jaringan adalah...",
    options: [
      "Setiap kali API gagal, itu pasti karena kesalahan koding mahasiswa",
      "Tidak semua kegagalan API berarti aplikasi salah; jaringan seluler bersifat fluktuatif dan aplikasi harus tangguh menangani kondisi tersebut",
      "Aplikasi mobile harus langsung ditutup paksa jika server tidak merespons",
      "Pengembang harus menyalahkan pengguna yang kehabisan kuota",
      "Aplikasi hanya boleh dijalankan jika terhubung ke kabel LAN fisik"
    ],
    correct: 1,
    pembahasan: "Slide secara gamblang mencatat: 'Tidak semua kegagalan API berarti aplikasi salah'. Kondisi seperti no internet, timeout, atau server maintenance adalah realitas jaringan seluler yang wajib diantisipasi antarmuka.",
    sumber: "slide"
  },
  {
    id: "w6_02",
    week: 6,
    topik: "Penyebab Kegagalan API",
    tingkat: "sedang",
    tipe: "konsep",
    pertanyaan: "Empat skenario kondisi hasil yang dapat terjadi saat aplikasi mobile melakukan panggilan HTTP request ke REST API adalah...",
    options: [
      "Success, HTTP Error (4xx/5xx), Timeout, dan No Internet / Offline",
      "Compiler Error, Syntax Error, Logical Error, dan Runtime Error",
      "Baterai Habis, Layar Retak, HP Terjatuh, dan Speaker Rusak",
      "GET, POST, PUT, dan DELETE",
      "Header, Payload, Signature, dan Base64"
    ],
    correct: 0,
    pembahasan: "Slide 'Kenapa Request Gagal?' membagi ke dalam 4 kondisi: Success (200 OK), HTTP Error (penolakan server 4xx/5xx), Timeout (batas waktu habis), dan No Internet (perangkat offline).",
    sumber: "slide"
  },
  {
    id: "w6_03",
    week: 6,
    topik: "HTTP Status Codes",
    tingkat: "mudah",
    tipe: "konsep",
    pertanyaan: "Kelompok kode status HTTP 2xx (misalnya `200 OK` dan `201 Created`) merepresentasikan kondisi...",
    options: [
      "Permintaan berhasil diproses oleh server dan respons data dikembalikan dengan sukses",
      "Koneksi internet pengguna terputus",
      "Server sedang mengalami kebakaran korsleting",
      "Token autentikasi pengguna salah atau kedaluwarsa",
      "URL endpoint yang diminta tidak terdaftar di server"
    ],
    correct: 0,
    pembahasan: "Status code 2xx (Success) menandakan permintaan client telah berhasil diterima, dipahami, dan diproses oleh server.",
    sumber: "slide"
  },
  {
    id: "w6_04",
    week: 6,
    topik: "HTTP Status Codes (4xx)",
    tingkat: "sedang",
    tipe: "konsep",
    pertanyaan: "Perbedaan mendasar antara kelompok status kode HTTP `4xx` dengan `5xx` adalah...",
    options: [
      "4xx adalah error di browser, 5xx adalah error di smartphone",
      "4xx adalah Client Error (kesalahan pada permintaan yang dikirim aplikasi/pengguna), sedangkan 5xx adalah Server Error (kegagalan pada internal server penyedia layanan)",
      "4xx berarti koneksi cepat, 5xx berarti koneksi lambat",
      "4xx hanya muncul pada metode POST, 5xx pada metode GET",
      "Tidak ada perbedaan makna teknis antara keduanya"
    ],
    correct: 1,
    pembahasan: "4xx (Client Error) menunjukkan kesalahan di sisi pengirim (misal format salah 400, belum login 401, resource nihil 404). 5xx (Server Error) menunjukkan kegagalan internal pada server backend (500, 503).",
    sumber: "slide"
  },
  {
    id: "w6_05",
    week: 6,
    topik: "Analisis Status 401 vs 403",
    tingkat: "sedang",
    tipe: "analisis_kasus",
    pertanyaan: "Seorang warga yang sudah login di PresidentKu mencoba mengakses endpoint penghapusan data program istana dan menerima status HTTP `403 Forbidden`. Mengapa server mengembalikan kode 403 bukan 401?",
    options: [
      "Karena warga tersebut belum memasukkan email dan password",
      "Karena server mengenali identitas token pengguna (sudah login), namun akun warga tersebut TIDAK MEMILIKI HAK AKSES/OTORISASI untuk menghapus program (khusus admin)",
      "Karena koneksi internet warga terputus di tengah jalan",
      "Karena endpoint penghapusan program belum dibuat",
      "Karena waktu kedaluwarsa token telah habis"
    ],
    correct: 1,
    pembahasan: "401 (Unauthorized) berarti masalah otentikasi identitas (belum login atau token expired). 403 (Forbidden) berarti server tahu identitas pengguna, tetapi pengguna tidak punya izin (role/permission) mengakses resource tersebut.",
    sumber: "slide"
  },
  {
    id: "w6_06",
    week: 6,
    topik: "HTTP Status Codes (503)",
    tingkat: "sedang",
    tipe: "konsep",
    pertanyaan: "Ketika server backend pusat data PresidentKu sedang mengalami pemeliharaan rutin (scheduled maintenance) atau lonjakan trafik ekstrem, kode status HTTP yang paling tepat dikembalikan adalah...",
    options: [
      "200 OK",
      "404 Not Found",
      "503 Service Unavailable",
      "400 Bad Request",
      "401 Unauthorized"
    ],
    correct: 2,
    pembahasan: "HTTP status `503 Service Unavailable` mengindikasikan bahwa server untuk sementara tidak dapat menangani permintaan karena pemeliharaan berkala atau beban berlebih.",
    sumber: "slide"
  },
  {
    id: "w6_07",
    week: 6,
    topik: "Lima UI States",
    tingkat: "mudah",
    tipe: "konsep",
    pertanyaan: "Menurut materi Sprint 05, lima status antarmuka pengguna (API UI States) yang wajib diakomodasi oleh aplikasi mobile adalah...",
    options: [
      "Idle, Loading, Success, Error, dan Empty",
      "Red, Yellow, Green, Blue, dan Black",
      "Start, Pause, Resume, Stop, dan Destroy",
      "Input, Output, Process, Memory, dan CPU",
      "Create, Read, Update, Delete, dan Drop"
    ],
    correct: 0,
    pembahasan: "Slide 'API UI States' merinci 5 state antarmuka: 1. Idle (sebelum request), 2. Loading (proses memuat), 3. Success (data ada), 4. Error (terjadi kendala), dan 5. Empty (data kosong).",
    sumber: "slide"
  },
  {
    id: "w6_08",
    week: 6,
    topik: "Empty State",
    tingkat: "sedang",
    tipe: "pilih_solusi",
    pertanyaan: "Warga mencari program dengan kata kunci 'Robotik Luar Angkasa' di aplikasi PresidentKu. Server merespons `200 OK` dengan array kosong `[]`. Antarmuka yang baik harus menampilkan...",
    options: [
      "Layar putih kosong melompong tanpa teks apapun",
      "Pesan error merah berbunyi '500 Server Rusak Parah!'",
      "Tampilan UI State 'EMPTY' berisi ilustrasi ramah dan teks penjelas: 'Tidak ditemukan program yang sesuai dengan kata kunci Anda'",
      "Kotak login ulang secara otomatis",
      "Peringatan bahwa smartphone terkena virus"
    ],
    correct: 2,
    pembahasan: "Kondisi respon 200 OK dengan array kosong adalah kondisi Empty State. Aplikasi tidak boleh menampilkan layar blank, melainkan ilustrasi dan teks penjelas yang menenangkan pengguna.",
    sumber: "slide"
  },
  {
    id: "w6_09",
    week: 6,
    topik: "Penanganan Timeout",
    tingkat: "sedang",
    tipe: "konsep",
    pertanyaan: "Apakah yang dimaksud dengan 'Timeout' dalam pemanggilan REST API dan bagaimana penanganannya yang benar di aplikasi mobile?",
    options: [
      "Waktu bermain game yang dibatasi oleh orang tua",
      "Batas waktu maksimal menunggu respons server (misal 10-30 detik); jika terlampaui, aplikasi membatalkan request, memberi pesan bersahabat, dan menyediakan tombol Coba Lagi agar tidak terlihat membeku (hang)",
      "Waktu jeda saat smartphone sedang mengisi daya baterai",
      "Proses mematikan server setiap malam jam 12",
      "Menghapus token autentikasi setelah 5 detik"
    ],
    correct: 1,
    pembahasan: "Slide 'Timeout' menjelaskan: Batas waktu maksimal menunggu response (misal 10-30 detik). Bagian dari network error, aplikasi tidak boleh terlihat hang, serta wajib menyediakan opsi coba lagi.",
    sumber: "slide"
  },
  {
    id: "w6_10",
    week: 6,
    topik: "Offline Handling",
    tingkat: "sedang",
    tipe: "analisis_kasus",
    pertanyaan: "Seorang warga membuka aplikasi PresidentKu saat berada di dalam terowongan bawah tanah tanpa sinyal seluler sama sekali. Tindakan apa yang paling tepat dilakukan oleh aplikasi?",
    options: [
      "Aplikasi langsung keluar sendiri secara paksa (crash)",
      "Menampilkan antarmuka penanganan offline yang jelas ('Tidak ada koneksi internet. Periksa koneksi Anda dan coba lagi') disertai tombol Coba Lagi",
      "Terus memutar animasi loading berjam-jam tanpa batas waktu",
      "Menghapus seluruh akun warga dari memori",
      "Mengganti isi berita dengan teks acak (lorem ipsum)"
    ],
    correct: 1,
    pembahasan: "Slide 'Offline Handling' menegaskan: Jangan tampilkan layar kosong atau biarkan aplikasi membeku. Sediakan pesan offline yang jelas dan ramah disertai tombol periksa koneksi / retry.",
    sumber: "slide"
  },
  {
    id: "w6_11",
    week: 6,
    topik: "Perilaku Unik Fetch API",
    tingkat: "sulit",
    tipe: "konsep",
    pertanyaan: "Mengapa potongan kode berikut BERBAHAYA dan dapat meloloskan error 404 atau 500 seolah-olah sukses?\n```javascript\ntry {\n  const res = await fetch(url);\n  const data = await res.json();\n  setData(data);\n} catch (err) {\n  setError(err.message);\n}\n```",
    options: [
      "Karena fungsi `fetch` tidak boleh menggunakan keyword `await`",
      "Karena fungsi `fetch()` bawaan JavaScript TIDAK melempar error untuk status HTTP 4xx dan 5xx; blok `catch` tidak akan terpanggil selama ada respons dari server!",
      "Karena variabel `url` harus selalu ditulis dengan huruf kapital",
      "Karena method `setData` hanya bisa menerima string",
      "Karena blok `try-catch` sudah dihapus dari standar ECMAScript"
    ],
    correct: 1,
    pembahasan: "Ini jebakan terbesar Fetch: Fetch hanya reject Promise jika terjadi kegagalan jaringan fatal (kabel putus/DNS down). Jika server membalas 404 atau 500, Promise tetap resolve. Karena itu pengecekan `response.ok` wajib dilakukan!",
    sumber: "slide"
  },
  {
    id: "w6_12",
    week: 6,
    topik: "Pemeriksaan response.ok",
    tingkat: "sedang",
    tipe: "tebak_output",
    pertanyaan: "Bagaimanakah cara yang BENAR untuk menangani status HTTP 4xx/5xx saat menggunakan Fetch API?",
    options: [
      "if (response.ok === false) { throw new Error('Permintaan gagal dengan status ' + response.status); }",
      "catch (response.status === 404) { ... }",
      "fetch(url).ignoreError404()",
      "response.status.autoFix()",
      "Tidak perlu dilakukan apapun karena fetch sudah otomatis aman"
    ],
    correct: 0,
    pembahasan: "Properti boolean `response.ok` bernilai true jika status berada di rentang 200-299. Kita wajib mengecek `if (!response.ok)` dan melempar error manual ke blok catch.",
    sumber: "slide"
  },
  {
    id: "w6_13",
    week: 6,
    topik: "Blok Finally",
    tingkat: "sedang",
    tipe: "konsep",
    pertanyaan: "Dalam struktur `try { ... } catch (error) { ... } finally { ... }` pada pemanggilan API, mengapa `setIsLoading(false)` paling tepat diletakkan di dalam blok `finally`?",
    options: [
      "Agar spinner animasi loading berputar dengan warna merah",
      "Karena blok `finally` dijamin PASTI dieksekusi oleh runtime JavaScript di akhir proses, baik saat request sukses sempurna maupun saat request gagal dan melempar error",
      "Karena kode di dalam `finally` dijalankan di thread CPU terpisah",
      "Untuk menghindari pembayaran lisensi library",
      "Agar koneksi internet otomatis terputus setelah fetch selesai"
    ],
    correct: 1,
    pembahasan: "Blok `finally` menjamin pematian status loading di semua skenario. Meletakkan `setIsLoading(false)` hanya di blok try akan menyebabkan spinner berputar selamanya jika terjadi error.",
    sumber: "slide"
  },
  {
    id: "w6_14",
    week: 6,
    topik: "Tombol Coba Lagi (Retry)",
    tingkat: "mudah",
    tipe: "konsep",
    pertanyaan: "Dalam Task 02 Sprint 05, apa tujuan utama penyediaan 'Retry Button' (Tombol Coba Lagi) pada antarmuka saat terjadi kegagalan API?",
    options: [
      "Membuat pengguna kesal karena harus menekan tombol berulang kali",
      "Memberikan kendali pemulihan mandiri kepada pengguna untuk memicu ulang pemanggilan data tanpa harus menutup paksa atau membuka ulang aplikasi dari awal",
      "Menghapus seluruh memori cache smartphone",
      "Mengganti akun pengguna menjadi admin",
      "Mengubah bahasa sistem operasi smartphone"
    ],
    correct: 1,
    pembahasan: "Tombol coba lagi memberikan pengalaman pengguna yang unggul (UX pemulihan mandiri), sehingga pengguna yang sinyalnya sempat hilang dapat mencoba kembali dengan satu ketukan instan.",
    sumber: "slide"
  },
  {
    id: "w6_15",
    week: 6,
    topik: "Skenario Uji Coba Offline 8 Langkah",
    tingkat: "sedang",
    tipe: "konsep",
    pertanyaan: "Pada Task 03 'Handle Offline', langkah pertama yang harus dilakukan mahasiswa saat mendemokan ketahanan aplikasi PresidentKu di hadapan dosen adalah...",
    options: [
      "Menghapus repositori GitHub proyek",
      "Mematikan koneksi internet smartphone (mengaktifkan Airplane Mode atau mematikan Wi-Fi dan data seluler)",
      "Membongkar baterai smartphone",
      "Mengubah kode sumber menjadi mode rilis",
      "Membuat akun Gmail baru"
    ],
    correct: 1,
    pembahasan: "Langkah 1 dari skenario pengujian 8 langkah pada slide adalah: 'Matikan koneksi internet (Airplane mode / matikan Wi-Fi dan data seluler)'.",
    sumber: "slide"
  },
  {
    id: "w6_16",
    week: 6,
    topik: "Skenario Uji Coba Offline 8 Langkah",
    tingkat: "sedang",
    tipe: "konsep",
    pertanyaan: "Setelah koneksi internet diaktifkan kembali pada langkah ke-6 dalam skenario uji offline, apa yang harus dilakukan penguji pada langkah ke-7?",
    options: [
      "Menutup paksa dan meng-uninstall aplikasi PresidentKu",
      "Menekan tombol 'Coba Lagi' (Retry Button) pada layar aplikasi yang sedang menampilkan pesan offline",
      "Mem-format ulang memori smartphone",
      "Mengirimkan pesan email ke dosen pengampu",
      "Menunggu selama 24 jam tanpa menyentuh layar"
    ],
    correct: 1,
    pembahasan: "Langkah 7 adalah: 'Tekan tombol Coba Lagi / Retry', yang diikuti oleh langkah 8: 'Data program berhasil dimuat dan tampil sempurna di UI'.",
    sumber: "slide"
  },
  {
    id: "w6_17",
    week: 6,
    topik: "Fragile vs Reliable API",
    tingkat: "mudah",
    tipe: "konsep",
    pertanyaan: "Ciri khas yang mencerminkan sebuah aplikasi mobile memiliki karakteristik 'Fragile API' (aplikasi rentan/rapuh) adalah...",
    options: [
      "Memiliki indikator loading, pesan error jelas, dan tombol retry",
      "Layar diam membeku saat request berlangsung, aplikasi langsung crash atau blank saat koneksi terputus, dan tidak memiliki penanganan offline",
      "Data di-cache dengan aman di SecureStore",
      "Menggunakan enkripsi TLS dan HTTPS",
      "Selalu memvalidasi properti response.ok"
    ],
    correct: 1,
    pembahasan: "Slide tabel 'Fragile vs Reliable API' merinci kelemahan Fragile API: tidak ada loading feedback, crash/blank saat no internet, error teknis membingungkan, dan tidak ada opsi retry.",
    sumber: "slide"
  },
  {
    id: "w6_18",
    week: 6,
    topik: "AbortController",
    tingkat: "sulit",
    tipe: "pilih_solusi",
    pertanyaan: "Bagaimanakah cara mengimplementasikan pembatalan request otomatis akibat batas waktu (Timeout) 15 detik pada Fetch API modern?",
    options: [
      "Menggunakan perintah `fetch.killAfter(15000)`",
      "Menggunakan objek `const controller = new AbortController()`, menyertakan `signal: controller.signal` pada opsi fetch, dan memicu `controller.abort()` lewat `setTimeout` setelah 15000 ms",
      "Mematikan daya baterai ponsel setelah 15 detik",
      "Mengubah properti StyleSheet menjadi display: 'none'",
      "Menghapus token autentikasi setelah 15 detik"
    ],
    correct: 1,
    pembahasan: "Standar penanganan timeout di JavaScript Fetch adalah menggunakan `AbortController` yang dihubungkan ke sinyal opsi request dan dibatalkan via timer `setTimeout`.",
    sumber: "slide"
  },
  {
    id: "w6_19",
    week: 6,
    topik: "Pertanyaan Demo Sprint 05",
    tingkat: "sedang",
    tipe: "konsep",
    pertanyaan: "Pada sesi evaluasi Sprint 05, dosen bertanya: 'Mengapa antarmuka aplikasi Anda tidak boleh hanya memiliki satu kondisi yaitu saat data berhasil dimuat?'. Jawaban yang paling tepat adalah...",
    options: [
      "Karena dosen ingin melihat lebih banyak tombol di layar",
      "Karena jaringan mobile tidak selalu stabil; aplikasi harus mengomunikasikan proses (loading), kegagalan (error), ketiadaan data (empty), dan kesiapan aksi (idle) agar pengguna tidak merasa aplikasi rusak atau membeku",
      "Karena React Native mengharuskan minimal 5 file komponen di setiap proyek",
      "Agar kuota internet pengguna cepat habis",
      "Karena aturan dari World Bank mewajibkan 5 status antarmuka"
    ],
    correct: 1,
    pembahasan: "Aplikasi mobile beroperasi di lingkungan jaringan yang dinamis. Lima status antarmuka menjamin transparansi sistem bagi pengguna di segala kondisi sinyal.",
    sumber: "slide"
  },
  {
    id: "w6_20",
    week: 6,
    topik: "Checklist Sprint 05",
    tingkat: "mudah",
    tipe: "konsep",
    pertanyaan: "Manakah butir checklist penyelesaian Sprint 05 yang menunjukkan bahwa fitur keandalan API PresidentKu telah selesai diimplementasikan secara komprehensif?",
    options: [
      "Error handling 2xx/4xx/5xx/network diterapkan, 5 state antarmuka aktif, tombol retry berfungsi, dan skenario offline 8 langkah lulus uji",
      "Menonaktifkan seluruh fitur autentikasi Pekan 5",
      "Mengganti seluruh kode dengan aplikasi web statis",
      "Mengunci aplikasi agar hanya bisa dipakai oleh dosen pengampu",
      "Menghapus komponen FlatList dari halaman program"
    ],
    correct: 0,
    pembahasan: "Sprint 05 Checklist memuat: penanganan ragam error, 5 UI state, pengecekan response.ok, tombol retry, dan keberhasilan uji offline 8 langkah.",
    sumber: "slide"
  }
];

