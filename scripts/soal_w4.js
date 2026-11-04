// scripts/soal_w4.js - 20 Soal Terverifikasi Week 4 (Data Modeling + RESTful API)
module.exports = [
  {
    id: "w4_01",
    week: 4,
    topik: "Arsitektur Client-Server",
    tingkat: "mudah",
    tipe: "konsep",
    pertanyaan: "Dalam arsitektur client-server mobile pada aplikasi PresidentKu, apa peran utama dari 'Mobile App' sebagai Client?",
    options: [
      "Menyediakan dan mengelola basis data pusat kenegaraan",
      "Mengirimkan permintaan (request) data ke server dan menampilkan hasilnya (render) pada antarmuka pengguna",
      "Mengatur konfigurasi firewall dan web server Nginx",
      "Menyimpan seluruh data program prioritas secara permanen di memori HP",
      "Menggantikan peran penyedia layanan internet (ISP)"
    ],
    correct: 1,
    pembahasan: "Slide 'Client-Server Architecture' mendefinisikan Mobile App (Client): 'Mengirim permintaan data dan menampilkan hasilnya'. Sedangkan Server bertindak sebagai Data Provider.",
    sumber: "slide"
  },
  {
    id: "w4_02",
    week: 4,
    topik: "RESTful API",
    tingkat: "mudah",
    tipe: "konsep",
    pertanyaan: "Apakah yang dimaksud dengan 'Resource' dalam konsep perancangan RESTful API?",
    options: [
      "Kecepatan sinyal antena menara BTS",
      "Data atau entitas informasi yang disediakan dan dikelola oleh API (contoh: /programs, /berita)",
      "Kabel fiber optik bawah laut penghubung pulau",
      "Sertifikat hak cipta atas logo aplikasi",
      "Bahasa pemrograman yang digunakan oleh compiler"
    ],
    correct: 1,
    pembahasan: "Slide 'RESTful API' mendefinisikan Resource sebagai: 'Data atau entitas yang disediakan oleh API (contoh: /programs, /berita)'.",
    sumber: "slide"
  },
  {
    id: "w4_03",
    week: 4,
    topik: "HTTP Methods",
    tingkat: "mudah",
    tipe: "konsep",
    pertanyaan: "HTTP Method manakah yang digunakan oleh aplikasi mobile untuk MENGAMBIL daftar data program dari server tanpa mengubah apapun di basis data?",
    options: [
      "POST",
      "GET",
      "PUT",
      "DELETE",
      "PATCH"
    ],
    correct: 1,
    pembahasan: "HTTP Method `GET` adalah standar RESTful untuk mengambil/membaca data dari resource server (contoh: `GET /programs`).",
    sumber: "slide"
  },
  {
    id: "w4_04",
    week: 4,
    topik: "HTTP Methods",
    tingkat: "sedang",
    tipe: "konsep",
    pertanyaan: "Ketika warga ingin mengirimkan permohonan aspirasi baru melalui form aplikasi PresidentKu, HTTP method dan endpoint manakah yang paling tepat dipanggil?",
    options: [
      "GET /aspirasi/all",
      "DELETE /aspirasi",
      "POST /aspirasi (disertai body JSON data permohonan)",
      "PUT /programs",
      "OPTIONS /aspirasi"
    ],
    correct: 2,
    pembahasan: "Method `POST` digunakan untuk membuat data baru di server dengan menyertakan payload data di body permintaan.",
    sumber: "slide"
  },
  {
    id: "w4_05",
    week: 4,
    topik: "HTTP Methods",
    tingkat: "sedang",
    tipe: "konsep",
    pertanyaan: "Jika admin ingin memperbarui sebagian informasi atau seluruh data program yang telah ada dengan ID 1, HTTP Method standar yang digunakan adalah...",
    options: [
      "GET atau HEAD",
      "PUT atau PATCH (contoh: PUT /programs/1)",
      "DELETE atau DROP",
      "POST /create/1",
      "CONNECT /programs"
    ],
    correct: 1,
    pembahasan: "Sesuai tabel HTTP Method pada slide: `PUT / PATCH` berfungsi untuk mengubah data (contoh: `PUT /programs/1`).",
    sumber: "slide"
  },
  {
    id: "w4_06",
    week: 4,
    topik: "Struktur HTTP Request",
    tingkat: "sedang",
    tipe: "konsep",
    pertanyaan: "Empat komponen pembentuk struktur HTTP Request yang dikirimkan oleh aplikasi mobile ke server adalah...",
    options: [
      "URL, Method, Header, dan Body",
      "IP Address, MAC Address, Subnet Mask, dan Gateway",
      "HTML, CSS, JavaScript, dan PHP",
      "Table, Row, Column, dan Primary Key",
      "Try, Catch, Finally, dan Throw"
    ],
    correct: 0,
    pembahasan: "Slide 'HTTP Request & Response' merinci struktur HTTP Request: URL (alamat endpoint), Method (GET/POST/dll), Header (informasi tambahan), dan Body (data yang dikirim).",
    sumber: "slide"
  },
  {
    id: "w4_07",
    week: 4,
    topik: "Struktur HTTP Response",
    tingkat: "sedang",
    tipe: "konsep",
    pertanyaan: "Tiga komponen utama yang dikembalikan oleh server dalam sebuah HTTP Response adalah...",
    options: [
      "Status Code, Header, dan Body",
      "Request, Query, dan Param",
      "Username, Password, dan PIN",
      "View, Text, dan Image",
      "Commit, Push, dan Pull"
    ],
    correct: 0,
    pembahasan: "Struktur HTTP Response pada slide terdiri dari: 1. Status code (kode hasil seperti 200, 404, 500), 2. Header (metadata seperti Content-Type), dan 3. Body (data hasil response berupa JSON).",
    sumber: "slide"
  },
  {
    id: "w4_08",
    week: 4,
    topik: "Format JSON",
    tingkat: "mudah",
    tipe: "konsep",
    pertanyaan: "Mengapa format JSON (JavaScript Object Notation) menjadi format standar pertukaran data yang paling banyak digunakan pada RESTful API mobile?",
    options: [
      "Karena JSON adalah bahasa pemrograman yang dapat mengompilasi aplikasi",
      "Karena formatnya berupa teks ringan, mudah dibaca manusia dan mesin, serta secara alami cocok dengan objek JavaScript di React Native",
      "Karena file JSON berukuran tepat 1 kilobyte untuk semua jenis data",
      "Karena JSON tidak memerlukan koneksi internet",
      "Karena hanya JSON yang didukung oleh sistem operasi Android"
    ],
    correct: 1,
    pembahasan: "JSON adalah format pertukaran data universal berbasis teks yang ringkas, mudah dipahami manusia, dan dapat langsung diparsing menjadi objek JavaScript oleh engine runtime.",
    sumber: "slide"
  },
  {
    id: "w4_09",
    week: 4,
    topik: "Alur Pemrosesan JSON",
    tingkat: "sedang",
    tipe: "konsep",
    pertanyaan: "Urutan alur pemrosesan data JSON dari server hingga tampil pada antarmuka mobile PresidentKu adalah...",
    options: [
      "UI -> JSON -> JavaScript Object -> Parse -> Render",
      "JSON dari server -> Parse (response.json()) -> JavaScript Object -> Render ke komponen React Native -> Mobile UI",
      "Render -> Parse -> JSON -> API -> Server",
      "Database -> Mobile UI -> JSON -> Compiler",
      "Fetch -> FlatList -> StyleSheet -> JSON"
    ],
    correct: 1,
    pembahasan: "Slide 'JSON Data - Alur Pemrosesan JSON': 1. JSON dari server -> 2. PARSE (mengubah JSON menjadi objek JS) -> 3. JAVASCRIPT OBJECT (data siap dipakai) -> 4. RENDER (mengolah ke komponen React Native) -> 5. MOBILE UI.",
    sumber: "slide"
  },
  {
    id: "w4_10",
    week: 4,
    topik: "Konsep DTO (Data Transfer Object)",
    tingkat: "sedang",
    tipe: "konsep",
    pertanyaan: "Mengapa aplikasi mobile PresidentKu memerlukan tahap pemodelan data atau DTO (Data Transfer Object) terhadap respons dari server?",
    options: [
      "Agar server backend tidak perlu bekerja sama sekali",
      "Data dari server biasanya lebih lengkap daripada kebutuhan UI; DTO memilih hanya field yang dibutuhkan aplikasi sehingga struktur data konsisten dan hemat memori",
      "Untuk mengubah bahasa pemrograman Java menjadi Swift",
      "Karena jika tidak menggunakan DTO, font aplikasi akan berubah menjadi miring",
      "DTO diwajibkan oleh Google Play Store untuk verifikasi hak cipta"
    ],
    correct: 1,
    pembahasan: "Slide 'Data Modeling / DTO' menjelaskan: 'Data dari server biasanya lebih lengkap dari yang dibutuhkan aplikasi. DTO (Data Transfer Object) hanya berisi field yang dibutuhkan oleh aplikasi.'",
    sumber: "slide"
  },
  {
    id: "w4_11",
    week: 4,
    topik: "Data Modeling PresidentKu",
    tingkat: "sedang",
    tipe: "konsep",
    pertanyaan: "Dalam Task 01 'Model The PresidentKu Data', struktur DTO Program prioritas yang didefinisikan terdiri dari field...",
    options: [
      "id (number), title (string), description (string), image (string), dan status (string active/inactive)",
      "nik (number), nama_lengkap (string), alamat (string), dan saldo (number)",
      "latitude (float), longitude (float), speed (float), dan altitude (float)",
      "username (string), password_hash (string), salt (string), dan role (string)",
      "color (string), border (number), padding (number), dan margin (number)"
    ],
    correct: 0,
    pembahasan: "Slide Task 01 'Output PresidentKu Data Model' merinci 5 field Program: id (number), title (string), description (string), image (string), dan status (string active/inactive).",
    sumber: "slide"
  },
  {
    id: "w4_12",
    week: 4,
    topik: "Transformasi Data",
    tingkat: "sedang",
    tipe: "tebak_output",
    pertanyaan: "Perhatikan cuplikan transformasi DTO berikut:\n```javascript\nconst programs = data.map(item => ({\n  id: item.id,\n  title: item.name,\n  description: item.description\n}));\n```\nJika data mentah dari server memiliki kolom `created_at: '2024-01-01'` dan `updated_at: '2024-01-10'`, apa yang terjadi pada kedua kolom tersebut pada variabel `programs`?",
    options: [
      "Kedua kolom otomatis digabung menjadi satu string baru",
      "Kedua kolom tidak dimasukkan (ignored) ke dalam objek DTO karena tidak dibutuhkan oleh komponen antarmuka",
      "Aplikasi akan mengalami error kompilasi karena ada kolom yang tertinggal",
      "Kedua kolom otomatis disimpan di SecureStore",
      "Kedua kolom diubah menjadi status aktif"
    ],
    correct: 1,
    pembahasan: "Slide 'Code Example — Mapping API Data to UI' menunjukkan bahwa kolom seperti `created_at` dan `updated_at` termasuk dalam kategori 'Field yang Tidak Digunakan dari API', sehingga tidak disertakan pada objek hasil mapping demi efisiensi.",
    sumber: "slide"
  },
  {
    id: "w4_13",
    week: 4,
    topik: "Fetch API vs Axios",
    tingkat: "mudah",
    tipe: "konsep",
    pertanyaan: "Keunggulan utama Fetch API dibandingkan dengan Axios adalah...",
    options: [
      "Fetch API otomatis mengubah status 404 menjadi 200 OK",
      "Fetch API sudah tersedia secara default (bawaan runtime JavaScript) sehingga tidak perlu instalasi pustaka eksternal tambahan",
      "Fetch API hanya membutuhkan waktu download 0 detik di Play Store",
      "Fetch API otomatis membuatkan desain antarmuka aplikasi",
      "Fetch API tidak membutuhkan alamat URL endpoint"
    ],
    correct: 1,
    pembahasan: "Slide mencatat keunggulan Fetch: 'Fetch API sudah tersedia secara default pada React Native, sehingga tidak perlu install library tambahan'.",
    sumber: "slide"
  },
  {
    id: "w4_14",
    week: 4,
    topik: "Fetch API vs Axios",
    tingkat: "sedang",
    tipe: "konsep",
    pertanyaan: "Mengapa banyak pengembang tetap memilih menggunakan pustaka Axios meskipun harus menjalankan `npm install axios`?",
    options: [
      "Karena Axios otomatis mem-parse respons JSON ke dalam properti `response.data` dan menyediakan fitur interceptor serta error handling yang lebih mudah",
      "Karena Axios wajib digunakan jika smartphone menggunakan casing warna hitam",
      "Karena Axios dapat memanggil API tanpa koneksi internet sama sekali",
      "Karena Axios menggantikan seluruh sintaksis bahasa JavaScript",
      "Karena Fetch API sudah dilarang oleh konsorsium W3C"
    ],
    correct: 0,
    pembahasan: "Axios populer karena otomatis mem-parse respons data (`response.data`), memiliki penanganan error yang intuitif, serta mendukung interceptor bawaan untuk penyematan token otorisasi.",
    sumber: "slide"
  },
  {
    id: "w4_15",
    week: 4,
    topik: "Sintaksis Fetch API",
    tingkat: "sedang",
    tipe: "tebak_output",
    pertanyaan: "Perhatikan kode pemanggilan API berikut:\n```javascript\nconst response = await fetch('https://api.presidentku.id/programs');\nconst data = await response.json();\nconsole.log(data);\n```\nApa peran dari baris `const data = await response.json();`?",
    options: [
      "Menghapus data di server secara asinkron",
      "Membaca aliran body respons HTTP dan mem-parsing string teks JSON menjadi objek/array JavaScript yang dapat dimanipulasi",
      "Mengubah data menjadi file format PDF",
      "Menyimpan token autentikasi ke dalam SecureStore",
      "Menutup koneksi WiFi smartphone"
    ],
    correct: 1,
    pembahasan: "`response.json()` adalah method bawaan Fetch Response yang membaca body stream hingga selesai dan mengonversi format teks JSON ke dalam tipe data objek/array JavaScript asli.",
    sumber: "slide"
  },
  {
    id: "w4_16",
    week: 4,
    topik: "Manajemen State UI",
    tingkat: "sedang",
    tipe: "konsep",
    pertanyaan: "Setelah data dari REST API berhasil diambil dan di-mapping ke bentuk DTO, fungsi apa yang digunakan untuk memperbarui antarmuka pengguna di React Native?",
    options: [
      "document.getElementById('list').innerHTML = data;",
      "Memanggil fungsi updater state (misalnya `setPrograms(programs)`) yang dideklarasikan melalui hook `useState`",
      "System.out.println(programs);",
      "Window.reload();",
      "SecureStore.save(programs);"
    ],
    correct: 1,
    pembahasan: "Di React Native, data dinamis disimpan dalam state menggunakan `const [programs, setPrograms] = useState([])`. Saat data API selesai diproses, kita memanggil `setPrograms(programs)` untuk memicu re-render antarmuka.",
    sumber: "slide"
  },
  {
    id: "w4_17",
    week: 4,
    topik: "Evolusi Sprint 03",
    tingkat: "mudah",
    tipe: "konsep",
    pertanyaan: "Apakah perbedaan paling fundamental antara aplikasi PresidentKu pada Pekan 2 dengan hasil akhir Sprint 03 di Pekan 4?",
    options: [
      "Pekan 2 menggunakan warna biru, Pekan 4 menggunakan warna hijau",
      "Pekan 2 menggunakan data statis dummy yang di-hardcode di dalam kode, sedangkan Pekan 4 menggunakan data dinamis real-time yang diambil dari REST API server",
      "Pekan 2 berjalan di Android, Pekan 4 hanya berjalan di komputer desktop",
      "Pekan 2 menggunakan AI, Pekan 4 tidak menggunakan AI sama sekali",
      "Pekan 2 memiliki 50 layar, Pekan 4 hanya memiliki 1 layar"
    ],
    correct: 1,
    pembahasan: "Slide 'Review — From Static to Dynamic' memperlihatkan: Current (Pekan 2 data statis dummy langsung di kode) -> Improved (Pekan 4 data dinamis diambil dari REST API sehingga data selalu mutakhir).",
    sumber: "slide"
  },
  {
    id: "w4_18",
    week: 4,
    topik: "Pertanyaan Demo Sprint 03",
    tingkat: "sedang",
    tipe: "konsep",
    pertanyaan: "Pada sesi demonstrasi Sprint 03, dosen bertanya: 'Mengapa data dari respons API sebaiknya di-mapping ke DTO terlebih dahulu sebelum ditampilkan di UI?'. Jawaban mahasiswa yang paling tepat adalah...",
    options: [
      "Karena jika tidak di-mapping baterai ponsel akan meledak",
      "DTO diperlukan untuk menyeleksi hanya field yang dibutuhkan, menjaga konsistensi struktur data antarmuka, dan mengisolasi UI jika server mengubah nama kolom internalnya",
      "Agar server backend tidak mengenali jenis smartphone yang digunakan",
      "Karena aturan sintaksis React Native melarang rendering properti bernama 'created_at'",
      "Agar aplikasi tidak membutuhkan izin akses internet"
    ],
    correct: 1,
    pembahasan: "Pertanyaan demo No. 6 'Mengapa data model/DTO diperlukan?': DTO diperlukan untuk memilih hanya field yang dibutuhkan, memastikan struktur data sesuai dengan aplikasi, dan memudahkan pengelolaan data di UI.",
    sumber: "slide"
  },
  {
    id: "w4_19",
    week: 4,
    topik: "Integrasi Komponen",
    tingkat: "sedang",
    tipe: "pilih_solusi",
    pertanyaan: "Ketika data program berhasil ditarik dari API, komponen React Native apakah yang paling direkomendasikan pada slide untuk merender daftar program tersebut secara performan dan efisien?",
    options: [
      "<Text> berulang kali secara manual",
      "<FlatList> dengan properti data, keyExtractor, dan renderItem",
      "<ImageBackground> bertumpuk",
      "<TextInput multiline={true}>",
      "HTML Table <table><tr><td>"
    ],
    correct: 1,
    pembahasan: "Untuk merender koleksi daftar dinamis dari API, React Native menyediakan komponen performa tinggi `<FlatList>` yang hanya merender elemen yang tampak di layar (lazy loading).",
    sumber: "slide"
  },
  {
    id: "w4_20",
    week: 4,
    topik: "Checklist Sprint 03",
    tingkat: "mudah",
    tipe: "konsep",
    pertanyaan: "Manakah butir berikut yang menjadi topik lanjutan pada Sprint 04 berikutnya setelah integrasi REST API selesai?",
    options: [
      "Kembali lagi ke perancangan UI awal",
      "Sprint 04 — Secure API: Token-Based Authentication (JWT & Protected Endpoint)",
      "Membuat game balap mobil 3D",
      "Menghapus seluruh dependensi Node.js",
      "Membeli domain .gov untuk server kampus"
    ],
    correct: 1,
    pembahasan: "Pada slide Sprint 03 Completion Checklist, kotak 'Next Sprint' mengarahkan ke: 'Sprint 04 — Secure API: Token-Based Authentication' untuk mengamankan data yang baru saja terhubung.",
    sumber: "slide"
  }
];

