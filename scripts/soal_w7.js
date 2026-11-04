// scripts/soal_w7.js - 20 Soal Terverifikasi Week 7 (Device Sensor & Shake Detection)
module.exports = [
  {
    id: "w7_01",
    week: 7,
    topik: "Transisi Data Sensor",
    tingkat: "mudah",
    tipe: "konsep",
    pertanyaan: "Apakah perbedaan paling mendasar antara data yang diperoleh dari REST API (Pekan 4-6) dengan data yang diperoleh dari Device Sensor (Pekan 7)?",
    options: [
      "Data REST API bersumber dari perangkat keras ponsel, sedangkan data sensor bersumber dari cloud",
      "Data REST API bersifat on-demand dan sangat bergantung pada jaringan internet; sedangkan data sensor bersumber dari chip mikroelektromekanis (MEMS) di dalam perangkat, bersifat streaming numerik real-time, dan bekerja tanpa internet",
      "Data sensor hanya berbentuk teks string nama orang",
      "Data REST API tidak pernah mengalami error",
      "Data sensor hanya bisa diakses pada jam 12 siang"
    ],
    correct: 1,
    pembahasan: "Slide pendahuluan Pekan 7 membedakan: REST API mengambil data server via internet secara berkala; sedangkan Sensor membaca sinyal fisik hardware secara real-time dan lokal di perangkat.",
    sumber: "slide"
  },
  {
    id: "w7_02",
    week: 7,
    topik: "Sensor Akselerometer",
    tingkat: "mudah",
    tipe: "konsep",
    pertanyaan: "Sensor perangkat keras pada smartphone yang berfungsi mengukur laju perubahan percepatan (akselerasi) dan tarikan gaya gravitasi pada tiga sumbu fisik (X, Y, Z) adalah...",
    options: [
      "Barometer",
      "Accelerometer (Akselerometer)",
      "Proximity Sensor",
      "Ambient Light Sensor",
      "Fingerprint Scanner"
    ],
    correct: 1,
    pembahasan: "Akselerometer adalah sensor gerak yang mengukur percepatan fisik perangkat pada sumbu X (horizontal), Y (vertikal), dan Z (tegak lurus layar).",
    sumber: "slide"
  },
  {
    id: "w7_03",
    week: 7,
    topik: "Sensor Giroskop",
    tingkat: "sedang",
    tipe: "konsep",
    pertanyaan: "Apakah perbedaan fungsi teknis utama antara sensor Akselerometer dengan sensor Giroskop (Gyroscope)?",
    options: [
      "Akselerometer mengukur warna layar, sedangkan Giroskop mengukur volume suara",
      "Akselerometer mengukur percepatan linier/gerakan translasi, sedangkan Giroskop mengukur laju kecepatan sudut rotasi perputaran ponsel (Roll, Pitch, Yaw)",
      "Akselerometer hanya ada di iPhone, sedangkan Giroskop hanya ada di Android",
      "Giroskop membutuhkan internet 5G untuk berfungsi",
      "Akselerometer mengukur tekanan udara, Giroskop mengukur suhu baterai"
    ],
    correct: 1,
    pembahasan: "Akselerometer mengukur percepatan linier pada 3 sumbu, sedangkan Giroskop mengukur kecepatan rotasi sudut (rotational velocity) pada sumbu putar roll, pitch, dan yaw.",
    sumber: "slide"
  },
  {
    id: "w7_04",
    week: 7,
    topik: "Sensor Magnetometer",
    tingkat: "mudah",
    tipe: "konsep",
    pertanyaan: "Sensor hardware yang mendeteksi arah dan intensitas medan magnet bumi sehingga sering dimanfaatkan untuk aplikasi kompas digital dan orientasi arah mata angin pada peta adalah...",
    options: [
      "Magnetometer",
      "Akselerometer",
      "Pedometer",
      "Hygrometer",
      "Altimeter"
    ],
    correct: 0,
    pembahasan: "Magnetometer mendeteksi medan magnet bumi di sekitar ponsel, menjadi fondasi utama penentuan arah utara-selatan kompas digital.",
    sumber: "slide"
  },
  {
    id: "w7_05",
    week: 7,
    topik: "Lapisan Akses Sensor",
    tingkat: "sedang",
    tipe: "konsep",
    pertanyaan: "Aplikasi mobile tidak dapat menyentuh sirkuit sensor silikon secara langsung. Urutan lapisan akses arsitektur sensor dari antarmuka aplikasi hingga perangkat keras fisik adalah...",
    options: [
      "Mobile App -> Operating System -> Sensor API -> Device Sensor",
      "Mobile App -> Sensor API / Library (expo-sensors) -> Operating System (Security & Drivers) -> Device Sensor (Hardware MEMS)",
      "Device Sensor -> Mobile App -> Operating System -> Sensor API",
      "Operating System -> Mobile App -> Device Sensor -> Sensor API",
      "Sensor API -> Device Sensor -> Mobile App -> Compiler"
    ],
    correct: 1,
    pembahasan: "Slide 'Sensor API dan Lapisan Akses' memperlihatkan hierarki: 1. Mobile App -> 2. Sensor API/Library (expo-sensors) -> 3. Operating System (Permission, Hardware Abstraction) -> 4. Device Sensor -> Sensor Data.",
    sumber: "slide"
  },
  {
    id: "w7_06",
    week: 7,
    topik: "Device Capability Check",
    tingkat: "sedang",
    tipe: "konsep",
    pertanyaan: "Mengapa aplikasi yang profesional wajib melakukan pengecekan kapabilitas perangkat (`isAvailableAsync()`) sebelum mencoba memasang listener sensor?",
    options: [
      "Agar memori RAM ponsel otomatis digandakan",
      "Karena tidak semua perangkat smartphone memiliki seluruh jenis sensor fisik (misalnya smartphone kelas bawah sering kali tidak memiliki chip giroskop fisik asli)",
      "Untuk memastikan smartphone pengguna bermerek Apple",
      "Karena aturan dari kementerian komunikasi melarang penggunaan sensor tanpa kuota",
      "Agar layar ponsel tidak berubah menjadi hitam"
    ],
    correct: 1,
    pembahasan: "Keanekaragaman hardware ponsel (fragmentasi) membuat tidak semua HP memiliki sensor lengkap. Pengecekan kapabilitas mencegah error runtime saat sensor tidak tersedia.",
    sumber: "slide"
  },
  {
    id: "w7_07",
    week: 7,
    topik: "Runtime Permission",
    tingkat: "sedang",
    tipe: "konsep",
    pertanyaan: "Apakah perbedaan antara sistem izin lama 'Install-Time Permission' dengan sistem izin modern 'Runtime Permission' pada sistem operasi mobile?",
    options: [
      "Install-time gratis, runtime berbayar",
      "Install-time meminta semua izin sekaligus saat download aplikasi di app store; sedangkan Runtime permission meminta izin secara kontekstual tepat saat fitur bersangkutan hendak digunakan oleh pengguna di layar (Just-in-Time)",
      "Runtime permission hanya berlaku untuk aplikasi berbasis web",
      "Install-time hanya berlaku untuk sistem operasi Linux",
      "Tidak ada perbedaan sama sekali di antara keduanya"
    ],
    correct: 1,
    pembahasan: "Runtime permission memberikan transparansi privasi yang jauh lebih baik karena izin diminta saat pengguna membutuhkan fitur (Just-in-Time), bukan diminta borongan di awal.",
    sumber: "slide"
  },
  {
    id: "w7_08",
    week: 7,
    topik: "Penanganan Penolakan Izin",
    tingkat: "sedang",
    tipe: "pilih_solusi",
    pertanyaan: "Ketika pengguna memilih 'Deny' (Tolak) saat aplikasi meminta izin sensor atau kamera, praktik penanganan (best practice) apa yang paling tepat dilakukan?",
    options: [
      "Menutup paksa (force close) aplikasi seketika sebagai hukuman",
      "Terus memunculkan popup permintaan izin 100 kali tanpa henti",
      "Menerapkan graceful degradation: jelaskan dengan sopan fungsi fitur yang terpengaruh, sediakan tombol alternatif manual, dan berikan opsi pintasan menuju pengaturan aplikasi jika pengguna ingin mengaktifkannya",
      "Menghapus seluruh akun pengguna dari basis data",
      "Mengganti sistem operasi ponsel menjadi versi lama"
    ],
    correct: 2,
    pembahasan: "Best practice UX mobile: Jangan crash saat izin ditolak. Sediakan fallback antarmuka yang ramah dan opsi membuka pengaturan (`Linking.openSettings()`).",
    sumber: "slide"
  },
  {
    id: "w7_09",
    week: 7,
    topik: "Sintaksis Update Interval",
    tingkat: "sedang",
    tipe: "tebak_output",
    pertanyaan: "Perhatikan baris kode pada modul `expo-sensors` berikut:\n```javascript\nAccelerometer.setUpdateInterval(100);\n```\nApakah makna dari angka parameter `100` pada fungsi tersebut?",
    options: [
      "Sensor hanya akan membaca 100 data lalu mati selamanya",
      "Frekuensi pembaruan data sensor diatur setiap 100 milidetik (setara 10 kali pembaruan per detik)",
      "Kecepatan sensor diatur menjadi 100 kilometer per jam",
      "Ambang batas getaran diatur menjadi 100 unit gravitasi",
      "Aplikasi akan menunggu selama 100 detik sebelum meminta izin"
    ],
    correct: 1,
    pembahasan: "`setUpdateInterval(ms)` menerima satuan milidetik. Nilai 100 ms berarti sensor mengirimkan data pembaruan koordinat setiap 0.1 detik (10 Hz).",
    sumber: "slide"
  },
  {
    id: "w7_10",
    week: 7,
    topik: "Rumus Magnitude",
    tingkat: "mudah",
    tipe: "konsep",
    pertanyaan: "Untuk mendeteksi apakah ponsel sedang mengalami goncangan kuat tanpa memedulikan arah kemiringan fisiknya, rumus total magnitude yang digunakan pada Task 3 adalah...",
    options: [
      "Magnitude = x + y + z",
      "Magnitude = Math.sqrt(x*x + y*y + z*z)",
      "Magnitude = Math.abs(x - y - z)",
      "Magnitude = (x * y) / z",
      "Magnitude = Math.max(x, y, z)"
    ],
    correct: 1,
    pembahasan: "Magnitude total percepatan 3D dihitung menggunakan rumus akar kuadrat jumlah kuadrat koordinat: `Math.sqrt(x*x + y*y + z*z)`.",
    sumber: "slide"
  },
  {
    id: "w7_11",
    week: 7,
    topik: "Logika Shake Detection",
    tingkat: "sedang",
    tipe: "tebak_output",
    pertanyaan: "Perhatikan logika deteksi goncangan berikut:\n```javascript\nconst magnitude = Math.sqrt(x*x + y*y + z*z);\nif (magnitude > THRESHOLD) {\n  setShakeStatus('Goyang Terdeteksi!');\n  Vibration.vibrate(500);\n}\n```\nApa peran dari variabel `THRESHOLD` pada potongan kode di atas?",
    options: [
      "Menentukan jenis lagu nada dering yang diputar",
      "Nilai ambang batas toleransi getaran; jika magnitude percepatan melebihi nilai ambang ini, sistem menyimpulkan ponsel sedang digoncang dan memicu aksi darurat",
      "Menentukan durasi pemadaman layar HP",
      "Mengatur ukuran font judul halaman",
      "Menghitung jumlah langkah kaki pengguna"
    ],
    correct: 1,
    pembahasan: "Threshold (ambang batas) adalah nilai pembatas getaran normal vs goncangan ekstrem. Getaran yang melampaui threshold akan memicu getaran haptik dan perubahan status UI.",
    sumber: "slide"
  },
  {
    id: "w7_12",
    week: 7,
    topik: "Efek Haptik Getaran",
    tingkat: "mudah",
    tipe: "konsep",
    pertanyaan: "Fungsi bawaan React Native yang digunakan pada Task 3 untuk memberikan umpan balik getaran fisik pada smartphone saat goncangan terdeteksi adalah...",
    options: [
      "Sound.play()",
      "Vibration.vibrate(500)",
      "Device.shake()",
      "Screen.flash()",
      "Sensor.buzz()"
    ],
    correct: 1,
    pembahasan: "Pustaka `Vibration` dari React Native menyediakan method `Vibration.vibrate(durationMs)` untuk menggetarkan motor haptik ponsel.",
    sumber: "slide"
  },
  {
    id: "w7_13",
    week: 7,
    topik: "Subscription Cleanup",
    tingkat: "sulit",
    tipe: "konsep",
    pertanyaan: "Perhatikan implementasi hook `useEffect` untuk sensor akselerometer berikut:\n```javascript\nuseEffect(() => {\n  const sub = Accelerometer.addListener(data => { ... });\n  return () => sub.remove();\n}, []);\n```\nApa yang akan terjadi jika baris pembersihan `return () => sub.remove();` DIHILANGKAN oleh developer?",
    options: [
      "Aplikasi otomatis berubah menjadi format landscape",
      "Terjadi kebocoran memori (memory leak) dan pengurasan daya baterai yang parah karena listener sensor terus berjalan di latar belakang sistem operasi meskipun komponen layar telah ditutup",
      "Sensor akselerometer fisik di dalam ponsel akan terbakar dan rusak permanen",
      "Aplikasi tidak akan bisa di-commit ke repositori Git",
      "Teks koordinat otomatis terhapus dari memori"
    ],
    correct: 1,
    pembahasan: "Subscription cleanup adalah keharusan mutlak dalam pengelolaan sensor. Tanpa `subscription.remove()`, event listener di thread OS akan terus berjalan, menguras CPU, menghabiskan baterai pengguna, dan menyebabkan memory leak.",
    sumber: "slide"
  },
  {
    id: "w7_14",
    week: 7,
    topik: "Optimasi Tampilan Sensor",
    tingkat: "mudah",
    tipe: "konsep",
    pertanyaan: "Mengapa nilai koordinat mentah sensor (seperti 0.9812458392) umumnya ditampilkan ke antarmuka menggunakan fungsi `.toFixed(2)`?",
    options: [
      "Agar nilai otomatis dikalikan 100",
      "Membatasi tampilan menjadi 2 digit desimal di belakang koma (misal: 0.98) agar angka terbaca rapi dan tidak membebani perenderan teks di layar",
      "Mengubah bilangan positif menjadi bilangan negatif",
      "Menghilangkan angka nol pada tampilan",
      "Memenuhi aturan resmi font Inter"
    ],
    correct: 1,
    pembahasan: "Sensor menghasilkan float desimal sangat panjang. Menggunakan `.toFixed(2)` membulatkan tampilan menjadi 2 digit desimal yang rapi dan nyaman dibaca manusia.",
    sumber: "slide"
  },
  {
    id: "w7_15",
    week: 7,
    topik: "Kotak Verifikasi Satuan",
    tingkat: "sulit",
    tipe: "analisis_kasus",
    pertanyaan: "Dalam 'Kotak Peringatan Verifikasi' materi Week 7, apa perbedaan penting yang harus diperhatikan antara angka pada lembar slide dengan dokumentasi resmi `expo-sensors`?",
    options: [
      "Slide menggunakan satuan Fahrenheit, sedangkan Expo menggunakan Celsius",
      "Slide mencantumkan percepatan gravitasi bumi 9.81 m/s² (satuan SI), sedangkan dokumentasi resmi Expo Sensors mengembalikan data percepatan dalam unit 'g' (di mana kondisi diam bernilai sekitar 1.0 g)",
      "Expo Sensors hanya mengembalikan bilangan bulat 0 dan 1",
      "Slide melarang penggunaan smartphone berbasis Android",
      "Dokumentasi resmi Expo menyatakan sensor hanya bekerja di luar angkasa"
    ],
    correct: 1,
    pembahasan: "Kotak verifikasi mencatat: Lembar slide menyebutkan 9.81 m/s², namun pustaka `expo-sensors` mengembalikan data dalam satuan g (gravitasi standar, di mana 1 g &asymp; 9.81 m/s²). Nilai threshold harus disesuaikan dengan satuan yang dipakai.",
    sumber: "slide"
  },
  {
    id: "w7_16",
    week: 7,
    topik: "Perhitungan Threshold Sesuai Satuan",
    tingkat: "sulit",
    tipe: "pilih_solusi",
    pertanyaan: "Jika sebuah smartphone diletakkan diam di atas meja datar dan terbaca magnitude akselerasi bernilai sekitar 9.81 m/s², mengapa memasang ambang batas goncangan `threshold = 1.8` merupakan KESALAHAN FATAL?",
    options: [
      "Karena angka 1.8 adalah angka sial",
      "Karena dalam kondisi diam di meja, ponsel sudah memiliki percepatan gravitasi bumi 9.81 m/s² yang jauh melampaui 1.8, sehingga goncangan akan terus-menerus terdeteksi aktif tanpa pernah berhenti!",
      "Karena threshold harus berupa bilangan ganjil",
      "Karena fungsi Math.sqrt tidak menerima nilai di bawah 2.0",
      "Karena Vibration.vibrate akan mengalami crash"
    ],
    correct: 1,
    pembahasan: "Jika sistem membaca dalam satuan m/s², posisi diam di meja adalah 9.81 m/s². Memasang threshold 1.8 (yang sebenarnya adalah threshold untuk satuan g) akan membuat kondisi `magnitude > threshold` bernilai TRUE secara permanen!",
    sumber: "slide"
  },
  {
    id: "w7_17",
    week: 7,
    topik: "Nilai Sensor Posisi Diam",
    tingkat: "sedang",
    tipe: "konsep",
    pertanyaan: "Ketika smartphone diletakkan telentang menghadap langit secara mendatar di atas meja datar, perkiraan nilai koordinat akselerometer (x, y, z) dalam satuan 'g' adalah...",
    options: [
      "x ≈ 0, y ≈ 0, dan z ≈ 1.0 g (karena tarikan gravitasi bumi bekerja tegak lurus pada sumbu Z)",
      "x ≈ 10, y ≈ 10, dan z ≈ 10 g",
      "x ≈ -1.0, y ≈ -1.0, dan z ≈ 0 g",
      "Semua sumbu bernilai tepat 0 g",
      "Semua sumbu bernilai tidak terdefinisi (NaN)"
    ],
    correct: 0,
    pembahasan: "Saat telentang di meja datar: tidak ada kemiringan samping (x &asymp; 0), tidak ada kemiringan atas-bawah (y &asymp; 0), dan sensor mendeteksi tarikan gravitasi bumi sebesar 1 g tegak lurus layar (z &asymp; 1.0 g).",
    sumber: "slide"
  },
  {
    id: "w7_18",
    week: 7,
    topik: "Catatan Ekosistem Slide",
    tingkat: "sedang",
    tipe: "konsep",
    pertanyaan: "Beberapa lembar slide referensi universitas menyebut contoh paket sensor Flutter (seperti `sensors_plus`). Bagaimana relasi materi tersebut dengan praktikum proyek PresidentKu?",
    options: [
      "Mahasiswa wajib memprogram ulang seluruh proyek PresidentKu menjadi aplikasi Flutter",
      "Proyek PresidentKu menggunakan React Native dengan `expo-sensors`, namun prinsip arsitektur dasarnya (koordinat 3 sumbu, threshold goncangan, subscription lifecycle) adalah identik",
      "Flutter dan React Native dibuat oleh perusahaan yang sama",
      "Materi Flutter tersebut harus diabaikan dan dianggap salah cetak",
      "Flutter hanya boleh digunakan jika tidak ada laptop"
    ],
    correct: 1,
    pembahasan: "Slide verifikasi menegaskan bahwa proyek perkuliahan kita memakai React Native + `expo-sensors`. Contoh pustaka Flutter `sensors_plus` di beberapa slide memiliki prinsip arsitektural yang sama persis.",
    sumber: "slide"
  },
  {
    id: "w7_19",
    week: 7,
    topik: "Alur Pengolahan Raw Data",
    tingkat: "sedang",
    tipe: "konsep",
    pertanyaan: "Data mentah (raw data) yang keluar dari sensor mikroprosesor ponsel sering kali mengalami gangguan getaran halus (noise). Alur pengolahan data sensor yang benar adalah...",
    options: [
      "Raw Data -> Filtering (kurangi noise) -> Transform (hitung magnitude) -> Data Siap Pakai di UI",
      "Raw Data -> Upload Cloud -> Compile -> UI",
      "UI -> Transform -> Filter -> Raw Data",
      "Raw Data -> Delete -> Restart -> UI",
      "Noise -> Raw Data -> State -> Render"
    ],
    correct: 0,
    pembahasan: "Slide 'Sensor Data' menjelaskan alur: Raw Data -> Filtering (kurangi noise) -> Transform (hitung magnitude/arah) -> Data Siap Pakai di antarmuka pengguna.",
    sumber: "slide"
  },
  {
    id: "w7_20",
    week: 7,
    topik: "Sprint 06 Checklist",
    tingkat: "mudah",
    tipe: "konsep",
    pertanyaan: "Setelah Sprint 06 selesai di Pekan 7, tahapan milestone besar apa yang menanti mahasiswa di Pekan 8 sesuai roadmap perkuliahan?",
    options: [
      "Liburan semester genap",
      "Evaluasi UTS / Minimum Viable Product (MVP) Presentation & Technical Defense",
      "Ujian Akhir Semester (UAS) Kelulusan",
      "Pelepasan wisuda sarjana",
      "Pembubaran kelompok dan penutupan mata kuliah"
    ],
    correct: 1,
    pembahasan: "Sesuai roadmap 16 pertemuan, Pekan 8 adalah momen evaluasi UTS / MVP Presentation yang menguji penguasaan materi menyeluruh dari Pekan 1 hingga 7.",
    sumber: "slide"
  }
];

