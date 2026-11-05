// data/soal_c.js - Bank Soal Khusus: Simulasi UTS Pemrograman Mobile C (40 Soal)
window.BANK_SOAL_C = [
  {
    id: "c_01",
    nomor: 1,
    paket: "UTS Pemrograman Mobile C",
    tipe: "pilihan_ganda",
    topik: "Arsitektur Runtime",
    pertanyaan: "Istilah 'Single Threaded Event Loop' dalam eksekusi JavaScript React Native berarti bahwa...",
    options: [
      "Logika aplikasi berjalan pada satu thread eksekusi utama untuk menangani peristiwa secara antrean",
      "Setiap komponen UI berjalan pada thread OS independen yang terpisah satu sama lain",
      "Aplikasi tidak dapat menerima input pengguna lebih dari satu kali dalam satu detik",
      "Seluruh proses pemanggilan API dan rendering dilakukan bersamaan dalam satu siklus CPU"
    ],
    correct: 0,
    kunciJawaban: "A",
    pembahasan: "JavaScript mengusung konsep single-threaded event loop di mana eksekusi kode dan penanganan event diproses secara berurutan dalam satu antrean utama (JS Thread)."
  },
  {
    id: "c_02",
    nomor: 2,
    paket: "UTS Pemrograman Mobile C",
    tipe: "pilihan_ganda",
    topik: "Threading & Rendering",
    pertanyaan: "Thread yang khusus menangani penggambaran elemen antarmuka di layar smartphone disebut...",
    options: [
      "Main Thread / UI Thread",
      "JS Thread",
      "Shadow Thread",
      "Background Worker Thread"
    ],
    correct: 0,
    kunciJawaban: "A",
    pembahasan: "Main Thread atau UI Thread pada platform native (Android/iOS) bertanggung jawab penuh atas rendering komponen visual dan menangani interaksi sentuhan langsung di layar."
  },
  {
    id: "c_03",
    nomor: 3,
    paket: "UTS Pemrograman Mobile C",
    tipe: "pilihan_ganda",
    topik: "Metro Bundler",
    pertanyaan: "Apa peran utama dari Metro Bundler dalam alur pengembangan React Native?",
    options: [
      "Menggabungkan seluruh berkas JavaScript dan aset menjadi satu bundel yang dapat dieksekusi aplikasi",
      "Mengubah kode JavaScript langsung menjadi bahasa C++ sebelum dijalankan",
      "Mengelola izin akses perangkat keras pada sistem operasi Android dan iOS",
      "Melakukan enkripsi file binary sebelum diunggah ke Google Play Store"
    ],
    correct: 0,
    kunciJawaban: "A",
    pembahasan: "Metro Bundler adalah JavaScript bundler bawaan React Native yang menyatukan seluruh berkas kode JS dan aset gambar menjadi satu file bundle agar dapat dijalankan oleh mesin JS di perangkat mobile."
  },
  {
    id: "c_04",
    nomor: 4,
    paket: "UTS Pemrograman Mobile C",
    tipe: "pilihan_ganda",
    topik: "New Architecture",
    pertanyaan: "Fungsi utama dari pustaka 'Codegen' dalam New Architecture React Native adalah...",
    options: [
      "Menjamin kepastian tipe data (type-safety) antara kode JavaScript dan kode C++/Native secara otomatis",
      "Menulis kode aplikasi secara otomatis menggunakan kecerdasan buatan",
      "Mengubah tata letak Flexbox menjadi file gambar bitmap",
      "Melakukan audit kebocoran memori RAM secara real-time"
    ],
    correct: 0,
    kunciJawaban: "A",
    pembahasan: "Pada New Architecture React Native, Codegen berfungsi membuat binding C++ secara otomatis guna menjamin kompatibilitas dan keamanan tipe data (type-safety) antara kode JavaScript dan sisi Native."
  },
  {
    id: "c_05",
    nomor: 5,
    paket: "UTS Pemrograman Mobile C",
    tipe: "pilihan_ganda",
    topik: "React Native vs WebView",
    pertanyaan: "Perbedaan mendasar antara React Native dan kerangka kerja berbasis WebView terletak pada...",
    options: [
      "React Native merender komponen UI native asli, sedangkan WebView merender HTML/CSS di dalam browser internal",
      "React Native hanya dapat dijalankan di platform Android, sedangkan WebView hanya di iOS",
      "React Native memerlukan bahasa Java penuh, sedangkan WebView menggunakan Swift",
      "WebView memiliki performa rendering 60 fps yang lebih konsisten dibandingkan React Native"
    ],
    correct: 0,
    kunciJawaban: "A",
    pembahasan: "React Native menerjemahkan komponen JSX menjadi komponen widget native asli dari platform (misal Android View atau iOS UIView), bukan sekadar menampilkan halaman HTML/CSS di browser internal (WebView)."
  },
  {
    id: "c_06",
    nomor: 6,
    paket: "UTS Pemrograman Mobile C",
    tipe: "pilihan_ganda",
    topik: "Komponen UI",
    pertanyaan: "Komponen bawaan React Native yang digunakan untuk mencegah tampilan tertutup oleh papan ketik (keyboard) layar adalah...",
    options: [
      "KeyboardAvoidingView",
      "ScrollView",
      "Modal",
      "TouchableWithoutFeedback"
    ],
    correct: 0,
    kunciJawaban: "A",
    pembahasan: "KeyboardAvoidingView secara otomatis menyesuaikan tinggi atau posisi komponen di dalamnya saat papan ketik (keyboard) virtual muncul agar form/input tidak tertutup."
  },
  {
    id: "c_07",
    nomor: 7,
    paket: "UTS Pemrograman Mobile C",
    tipe: "pilihan_ganda",
    topik: "Sintaksis JSX",
    pertanyaan: "Sintaksis JSX pada React Native pada dasarnya merupakan ekstensi yang akan ditranspilasi menjadi fungsi...",
    options: [
      "React.createElement()",
      "DOM.renderElement()",
      "NativeUI.build()",
      "HTML.parseJSX()"
    ],
    correct: 0,
    kunciJawaban: "A",
    pembahasan: "JSX adalah pemanis sintaksis (syntactic sugar). Saat proses transpilation oleh Babel, sintaks seperti `<View />` diubah menjadi pemanggilan fungsi standar `React.createElement(View, ...)`."
  },
  {
    id: "c_08",
    nomor: 8,
    paket: "UTS Pemrograman Mobile C",
    tipe: "pilihan_ganda",
    topik: "ScrollView",
    pertanyaan: "Apa fungsi dari properti showsVerticalScrollIndicator={false} pada komponen ScrollView?",
    options: [
      "Menyembunyikan bilah penanda gulir vertikal di samping layar",
      "Menghentikan fungsi pengguliran layar secara permanen",
      "Mengubah arah gulir menjadi horizontal secara otomatis",
      "Menghapus seluruh komponen anak di dalam ScrollView"
    ],
    correct: 0,
    kunciJawaban: "A",
    pembahasan: "Properti `showsVerticalScrollIndicator={false}` digunakan untuk menyembunyikan scrollbar vertikal di sisi kanan layar tanpa menghilangkan kemampuan scroll dari ScrollView tersebut."
  },
  {
    id: "c_09",
    nomor: 9,
    paket: "UTS Pemrograman Mobile C",
    tipe: "pilihan_ganda",
    topik: "FlatList Optimization",
    pertanyaan: "Properti utama pada komponen yang berfungsi mengekstraksi identitas unik dari setiap item data adalah...",
    options: [
      "keyExtractor",
      "renderItem",
      "data",
      "itemKey"
    ],
    correct: 0,
    kunciJawaban: "A",
    pembahasan: "`keyExtractor` pada FlatList/SectionList digunakan untuk menentukan string kunci unik bagi setiap baris data guna mengoptimalkan re-render komponen."
  },
  {
    id: "c_10",
    nomor: 10,
    paket: "UTS Pemrograman Mobile C",
    tipe: "pilihan_ganda",
    topik: "Komponen Bawaan",
    pertanyaan: "Komponen bawaan yang digunakan untuk menampilkan indikator pemuatan melingkar (loading spinner) adalah...",
    options: [
      "ActivityIndicator",
      "ProgressBar",
      "LoadingView",
      "CircularProgress"
    ],
    correct: 0,
    kunciJawaban: "A",
    pembahasan: "`ActivityIndicator` adalah komponen standar bawaan dari React Native yang menampilkan animasi spinner pemuatan melingkar."
  },
  {
    id: "c_11",
    nomor: 11,
    paket: "UTS Pemrograman Mobile C",
    tipe: "pilihan_ganda",
    topik: "Styling React Native",
    pertanyaan: "Modul baku React Native yang digunakan untuk membuat pustaka gaya yang efisien dan aman dari kesalahan sintaksis adalah...",
    options: [
      "StyleSheet.create()",
      "CSS.register()",
      "StyleEngine.compile()",
      "ThemeBuilder.get()"
    ],
    correct: 0,
    kunciJawaban: "A",
    pembahasan: "`StyleSheet.create()` mengabstraksikan objek gaya, memvalidasi properti secara statis, serta mengoptimalkan pengiriman ID gaya melalui bridge."
  },
  {
    id: "c_12",
    nomor: 12,
    paket: "UTS Pemrograman Mobile C",
    tipe: "pilihan_ganda",
    topik: "Dimensi Layar",
    pertanyaan: "Untuk memperoleh lebar dan tinggi layar perangkat seluler secara dinamis, kita dapat memanfaatkan API bawaan...",
    options: [
      "Dimensions.get('window')",
      "Screen.getDimensions()",
      "Display.getResolution()",
      "Device.getBoundaries()"
    ],
    correct: 0,
    kunciJawaban: "A",
    pembahasan: "API `Dimensions.get('window')` atau `Dimensions.get('screen')` disediakan oleh React Native untuk mendapatkan ukuran dimensi piksel layar secara real-time."
  },
  {
    id: "c_13",
    nomor: 13,
    paket: "UTS Pemrograman Mobile C",
    tipe: "pilihan_ganda",
    topik: "Flexbox Layout",
    pertanyaan: "Jika sebuah kontainer induk memiliki flex: 1, apa arti konfigurasi tersebut pada layout React Native?",
    options: [
      "Menginstruksikan komponen untuk mengisi seluruh ruang kosong yang tersedia pada layar induknya",
      "Membatasi lebar komponen maksimum 1 piksel saja",
      "Membuat komponen tersembunyi dari tampilan UI",
      "Mengubah orientasi layar menjadi lanskap secara paksa"
    ],
    correct: 0,
    kunciJawaban: "A",
    pembahasan: "Nilai `flex: 1` memerintahkan komponen untuk meregang dan mengambil seluruh sisa ruang kosong yang tersedia di dalam kontainer induknya."
  },
  {
    id: "c_14",
    nomor: 14,
    paket: "UTS Pemrograman Mobile C",
    tipe: "pilihan_ganda",
    topik: "Margin vs Padding",
    pertanyaan: "Perbedaan utama antara margin dan padding dalam penataan tata letak adalah...",
    options: [
      "Margin mengatur jarak di luar batas komponen, sedangkan padding mengatur jarak di dalam batas komponen",
      "Padding mengatur jarak antar kontainer induk, sedangkan margin mengatur ketebalan garis tepi",
      "Margin hanya berlaku untuk teks, sedangkan padding berlaku untuk seluruh jenis komponen",
      "Tidak ada perbedaan; keduanya merupakan sinonim dalam Flexbox"
    ],
    correct: 0,
    kunciJawaban: "A",
    pembahasan: "Margin memberikan ruang kosong di sebelah luar batas (border) elemen, sedangkan padding memberikan ruang kosong di sebelah dalam antara border dan konten elemen."
  },
  {
    id: "c_15",
    nomor: 15,
    paket: "UTS Pemrograman Mobile C",
    tipe: "pilihan_ganda",
    topik: "React Navigation Hooks",
    pertanyaan: "Bagaimana cara menangani eksekusi efek samping setiap kali sebuah layar mendapatkan fokus kembali?",
    options: [
      "Menggunakan hook useFocusEffect()",
      "Menggunakan hook useEffect() standar tanpa dependensi",
      "Menggunakan fungsi setInterval()",
      "Mengisi atribut onFocus pada komponen View"
    ],
    correct: 0,
    kunciJawaban: "A",
    pembahasan: "`useFocusEffect` dari React Navigation dieksekusi setiap kali layar aktif/menjadi fokus utama navigator, berbeda dengan `useEffect` standar yang hanya berjalan saat awal mount."
  },
  {
    id: "c_16",
    nomor: 16,
    paket: "UTS Pemrograman Mobile C",
    tipe: "pilihan_ganda",
    topik: "Pustaka Navigasi",
    pertanyaan: "Pustaka standar yang paling umum digunakan untuk menangani navigasi pada ekosistem React Native adalah...",
    options: [
      "React Navigation",
      "React Router DOM",
      "Flutter Navigation",
      "Express Router"
    ],
    correct: 0,
    kunciJawaban: "A",
    pembahasan: "React Navigation adalah pustaka navigasi paling populer dan resmi direkomendasikan dalam ekosistem React Native untuk mengelola Stack, Tab, dan Drawer navigator."
  },
  {
    id: "c_17",
    nomor: 17,
    paket: "UTS Pemrograman Mobile C",
    tipe: "pilihan_ganda",
    topik: "Reset Navigasi",
    pertanyaan: "Untuk mereset seluruh riwayat tumpukan navigasi dan mengarahkan pengguna ke layar Login, kita menggunakan fungsi...",
    options: [
      "navigation.reset({ index: 0, routes: [{ name: 'Login' }] })",
      "navigation.clearHistory('Login')",
      "navigation.popToTop('Login')",
      "navigation.removeAll('Login')"
    ],
    correct: 0,
    kunciJawaban: "A",
    pembahasan: "`navigation.reset()` mengganti seluruh status tumpukan navigasi saat ini dengan rute baru yang ditentukan, sehingga pengguna tidak bisa menekan tombol back untuk kembali ke layar sebelumnya."
  },
  {
    id: "c_18",
    nomor: 18,
    paket: "UTS Pemrograman Mobile C",
    tipe: "pilihan_ganda",
    topik: "Stack Navigator Options",
    pertanyaan: "Properti screenOptions={{ headerShown: false }} pada Stack Navigator berfungsi untuk...",
    options: [
      "Menyembunyikan bilah judul (header bar) bawaan dari navigator pada layar",
      "Menghapus seluruh komponen UI di dalam layar",
      "Membuat latar belakang layar menjadi transparan",
      "Mengunci layar agar tidak dapat digeser kembali"
    ],
    correct: 0,
    kunciJawaban: "A",
    pembahasan: "Menyetel `headerShown: false` akan menyembunyikan header navigasi bawaan di bagian atas layar agar pengembang dapat membuat custom header sendiri."
  },
  {
    id: "c_19",
    nomor: 19,
    paket: "UTS Pemrograman Mobile C",
    tipe: "esai",
    topik: "Parameter Passing & Route Type Safety",
    pertanyaan: "[Parameter Passing & Route Type Safety] Buatlah skenario pengiriman data dari Layar Produk ke Layar Detail, dan jelaskan cara membaca data tersebut menggunakan hook useRoute(), pengambilan via useRoute().params, serta penanganan validasi jika parameter undefined!",
    options: null,
    correct: null,
    kunciJawaban: `1. Pengiriman data: navigation.navigate('Detail', { productId: 101, productName: 'Kopi Susu' });
2. Pembacaan & Validasi:
import { useRoute } from '@react-navigation/native';
const DetailScreen = () => {
  const route = useRoute();
  const params = route.params;
  if (!params || !params.productId) {
    return <Text>Data tidak ditemukan</Text>;
  }
  return <Text>{params.productName}</Text>;
}`,
    pembahasan: "Pengiriman parameter menggunakan objek pada parameter kedua navigate(). Pembacaan dilakukan melalui route.params. Validasi kondisi !params krusial dilakukan untuk mencegah runtime error akibat undefined ketika layar diakses tanpa parameter."
  },
  {
    id: "c_20",
    nomor: 20,
    paket: "UTS Pemrograman Mobile C",
    tipe: "esai",
    topik: "Absolute Positioning & Z-Index Layering",
    pertanyaan: "[Absolute Positioning & Z-Index Layering] Bagaimana cara kerja position: 'absolute' pada React Native terhadap kontainer induknya, dan bagaimana zIndex menentukan urutan penumpukan elemen visual?",
    options: null,
    correct: null,
    kunciJawaban: `1. position: 'absolute' mengeluarkan elemen dari alur kalkulasi layout flexbox normal. Posisinya ditentukan relatif terhadap kontainer induknya menggunakan top, bottom, left, atau right.
2. zIndex menentukan urutan penumpukan (stacking order) elemen secara 3D pada sumbu Z. Nilai zIndex lebih tinggi akan menutupi elemen dengan zIndex yang lebih rendah.`,
    pembahasan: "Elemen absolut tidak mempengaruhi posisi elemen sekitarnya. Penggunaan zIndex sangat penting saat menangani elemen seperti overlay, dropdown, atau modal kustom agar berada di lapisan paling atas."
  },
  {
    id: "c_21",
    nomor: 21,
    paket: "UTS Pemrograman Mobile C",
    tipe: "pilihan_ganda",
    topik: "Global State Management",
    pertanyaan: "Pustaka manajemen state global yang berbasis pada konsep store tunggal dan imutabilitas adalah...",
    options: [
      "Redux / Redux Toolkit",
      "Axios",
      "React Navigation",
      "Metro Bundler"
    ],
    correct: 0,
    kunciJawaban: "A",
    pembahasan: "Redux / Redux Toolkit adalah state management library yang menyimpan seluruh state global dalam satu store terpusat secara imutabel."
  },
  {
    id: "c_22",
    nomor: 22,
    paket: "UTS Pemrograman Mobile C",
    tipe: "pilihan_ganda",
    topik: "React State Hook",
    pertanyaan: "Hook bawaan React yang digunakan untuk mengelola state lokal pada komponen fungsional adalah...",
    options: [
      "useState",
      "useFetch",
      "useProps",
      "useNative"
    ],
    correct: 0,
    kunciJawaban: "A",
    pembahasan: "`useState` adalah hook mendasar dalam React untuk mendeklarasikan variabel state lokal dan fungsi pembarunya."
  },
  {
    id: "c_23",
    nomor: 23,
    paket: "UTS Pemrograman Mobile C",
    tipe: "pilihan_ganda",
    topik: "React Lifecycle Hook",
    pertanyaan: "Untuk menjalankan efek samping seperti pemanggilan API saat komponen pertama kali dimuat, digunakan hook...",
    options: [
      "useEffect",
      "useMemo",
      "useCallback",
      "useRef"
    ],
    correct: 0,
    kunciJawaban: "A",
    pembahasan: "`useEffect` dengan array dependensi kosong `[]` akan dieksekusi sekali saat komponen selesai di-mount."
  },
  {
    id: "c_24",
    nomor: 24,
    paket: "UTS Pemrograman Mobile C",
    tipe: "pilihan_ganda",
    topik: "List Rendering",
    pertanyaan: "Komponen daftar yang efisien dan dioptimalkan untuk merender data berjumlah sangat banyak di React Native adalah...",
    options: [
      "FlatList",
      "ScrollView",
      "View",
      "Text"
    ],
    correct: 0,
    kunciJawaban: "A",
    pembahasan: "`FlatList` hanya merender item yang saat ini tampak di layar (lazy rendering), berbeda dengan `ScrollView` yang merender seluruh item sekaligus di memori."
  },
  {
    id: "c_25",
    nomor: 25,
    paket: "UTS Pemrograman Mobile C",
    tipe: "pilihan_ganda",
    topik: "Flexbox Direction",
    pertanyaan: "Properti yang digunakan untuk menyusun elemen secara vertikal atau horizontal dalam Flexbox React Native adalah...",
    options: [
      "flexDirection",
      "alignContent",
      "justifyContent",
      "flexWrap"
    ],
    correct: 0,
    kunciJawaban: "A",
    pembahasan: "`flexDirection` menentukan arah sumbu utama (main-axis), dengan nilai default 'column' (vertikal) pada React Native, atau 'row' (horizontal)."
  },
  {
    id: "c_26",
    nomor: 26,
    paket: "UTS Pemrograman Mobile C",
    tipe: "pilihan_ganda",
    topik: "Flexbox JustifyContent",
    pertanyaan: "Properti Flexbox yang mengatur perataan elemen sepanjang sumbu utama (main axis) adalah...",
    options: [
      "justifyContent",
      "alignItems",
      "alignSelf",
      "flexGrow"
    ],
    correct: 0,
    kunciJawaban: "A",
    pembahasan: "`justifyContent` mengatur alokasi ruang dan perataan item sepanjang main-axis (seperti flex-start, center, space-between)."
  },
  {
    id: "c_27",
    nomor: 27,
    paket: "UTS Pemrograman Mobile C",
    tipe: "pilihan_ganda",
    topik: "Flexbox AlignItems",
    pertanyaan: "Properti Flexbox yang mengatur perataan elemen sepanjang sumbu silang (cross axis) adalah...",
    options: [
      "alignItems",
      "justifyContent",
      "flexDirection",
      "flexBasis"
    ],
    correct: 0,
    kunciJawaban: "A",
    pembahasan: "`alignItems` mengatur perataan item sepanjang cross-axis (tegak lurus terhadap main-axis)."
  },
  {
    id: "c_28",
    nomor: 28,
    paket: "UTS Pemrograman Mobile C",
    tipe: "pilihan_ganda",
    topik: "Feedback Sentuhan",
    pertanyaan: "Komponen React Native yang digunakan untuk mendeteksi sentuhan pengguna dan memberikan efek transparansi saat ditekan adalah...",
    options: [
      "TouchableOpacity",
      "TouchableWithoutFeedback",
      "Button",
      "Pressable"
    ],
    correct: 0,
    kunciJawaban: "A",
    pembahasan: "`TouchableOpacity` menurunkan opasitas (membuat agak transparan) dari komponen anak ketika pengguna menekannya sebagai umpan balik visual."
  },
  {
    id: "c_29",
    nomor: 29,
    paket: "UTS Pemrograman Mobile C",
    tipe: "pilihan_ganda",
    topik: "Pengambilan Data Asinkron",
    pertanyaan: "Fungsi yang digunakan untuk mengambil data dari server secara asinkron menggunakan pustaka JavaScript standar adalah...",
    options: [
      "fetch()",
      "getHTTP()",
      "requestData()",
      "pull()"
    ],
    correct: 0,
    kunciJawaban: "A",
    pembahasan: "`fetch()` adalah Web API standar yang terintegrasi di dalam lingkungan runtime JavaScript untuk melakukan HTTP Request secara asinkron."
  },
  {
    id: "c_30",
    nomor: 30,
    paket: "UTS Pemrograman Mobile C",
    tipe: "esai",
    topik: "Direct Mutation Violation & React Reconciliation",
    pertanyaan: "[Direct Mutation Violation & React Reconciliation] Mengapa instruksi seperti state.user.name = 'Andi' dilarang keras dalam React Native? Jelaskan konsekuensinya terhadap proses shallow comparison pada Virtual DOM!",
    options: null,
    correct: null,
    kunciJawaban: `1. Dilarang karena mengubah/memutasi state secara langsung melanggar prinsip immutability dan tidak memicu siklus re-render React.
2. Konsekuensi pada Shallow Comparison: React membandingkan referensi memori antara state lama dan baru. Jika dimutasi langsung, alamat memori objek tetap sama, sehingga shallow comparison menganggap tidak ada perubahan dan Virtual DOM tidak melakukan re-render pada UI.`,
    pembahasan: "Pembaharuan state harus selalu menggunakan fungsi setter (seperti setUser(...)) dengan memberikan referensi objek baru (misal via spread operator {...user, name: 'Andi'})."
  },
  {
    id: "c_31",
    nomor: 31,
    paket: "UTS Pemrograman Mobile C",
    tipe: "pilihan_ganda",
    topik: "Format Komunikasi Data",
    pertanyaan: "Format pertukaran data yang paling umum digunakan saat melakukan komunikasi API pada aplikasi mobile adalah...",
    options: [
      "JSON",
      "XML",
      "CSV",
      "TXT"
    ],
    correct: 0,
    kunciJawaban: "A",
    pembahasan: "JSON (JavaScript Object Notation) adalah format pertukaran data standar yang ringan, mudah dibaca manusia, dan dapat diurai (parse) secara native oleh JavaScript."
  },
  {
    id: "c_32",
    nomor: 32,
    paket: "UTS Pemrograman Mobile C",
    tipe: "pilihan_ganda",
    topik: "Local Storage",
    pertanyaan: "Penyimpanan data lokal sederhana berbasis pasangan Kunci-Nilai (Key-Value) yang persisten di React Native adalah...",
    options: [
      "AsyncStorage",
      "SQLite",
      "Realm",
      "Redux"
    ],
    correct: 0,
    kunciJawaban: "A",
    pembahasan: "`@react-native-async-storage/async-storage` digunakan untuk menyimpan data berupa pasangan key-value string secara terenkripsi/persisten pada perangkat lokal."
  },
  {
    id: "c_33",
    nomor: 33,
    paket: "UTS Pemrograman Mobile C",
    tipe: "pilihan_ganda",
    topik: "Perizinan Android",
    pertanyaan: "Modul bawaan Android yang digunakan untuk meminta izin akses runtime secara eksplisit dari JavaScript adalah...",
    options: [
      "PermissionsAndroid",
      "AndroidHardwareAccess",
      "RuntimeSecurity",
      "DevicePermissionManager"
    ],
    correct: 0,
    kunciJawaban: "A",
    pembahasan: "`PermissionsAndroid` memberikan akses ke API perizinan runtime Android M (Android 6.0+) langsung dari JavaScript."
  },
  {
    id: "c_34",
    nomor: 34,
    paket: "UTS Pemrograman Mobile C",
    tipe: "pilihan_ganda",
    topik: "Pembaruan Aplikasi",
    pertanyaan: "Fitur untuk memperbarui kode JavaScript aplikasi di perangkat pengguna secara langsung tanpa melewati proses peninjauan toko aplikasi adalah...",
    options: [
      "Over-The-Air (OTA) Update / CodePush",
      "Hot Reloading",
      "Fast Refresh",
      "Direct Build"
    ],
    correct: 0,
    kunciJawaban: "A",
    pembahasan: "Over-The-Air (OTA) Updates seperti Expo Updates atau AppCenter CodePush memungkinkan developer mendistribusikan perbaikan berkas JS/aset langsung ke aplikasi pengguna."
  },
  {
    id: "c_35",
    nomor: 35,
    paket: "UTS Pemrograman Mobile C",
    tipe: "pilihan_ganda",
    topik: "Location Based Service (LBS)",
    pertanyaan: "Persamaan matematis yang digunakan untuk menghitung jarak melengkung antara dua titik koordinat bumi adalah...",
    options: [
      "Formulasi Haversine",
      "Teorema Pythagoras",
      "Transformasi Fourier",
      "Algoritma Dijkstra"
    ],
    correct: 0,
    kunciJawaban: "A",
    pembahasan: "Rumus Haversine menghitung jarak lingkaran besar (great-circle distance) antara dua titik koordinat (latitude & longitude) pada permukaan bola/bumi."
  },
  {
    id: "c_36",
    nomor: 36,
    paket: "UTS Pemrograman Mobile C",
    tipe: "pilihan_ganda",
    topik: "Geolokasi & GPS",
    pertanyaan: "Sistem koordinat standar global yang digunakan oleh sensor GPS pada perangkat mobile adalah...",
    options: [
      "World Geodetic System 1984 (WGS 84)",
      "Universal Transverse Mercator (UTM)",
      "European Terrestrial Reference System 1989",
      "State Plane Coordinate System"
    ],
    correct: 0,
    kunciJawaban: "A",
    pembahasan: "WGS 84 adalah standar referensi spasial global yang dipergunakan oleh jaringan sistem GPS secara internasional."
  },
  {
    id: "c_37",
    nomor: 37,
    paket: "UTS Pemrograman Mobile C",
    tipe: "pilihan_ganda",
    topik: "JavaScript Interface (JSI)",
    pertanyaan: "Arsitektur baru React Native yang menggantikan arsitektur Bridge lama dengan komunikasi langsung berkinerja tinggi adalah...",
    options: [
      "JSI (JavaScript Interface)",
      "WebGL",
      "VirtualDOM Engine",
      "Native Bridge v2"
    ],
    correct: 0,
    kunciJawaban: "A",
    pembahasan: "JSI (JavaScript Interface) memungkinkan JavaScript memegang referensi langsung ke objek C++/Native tanpa harus melakukan serialisasi JSON melalui Bridge."
  },
  {
    id: "c_38",
    nomor: 38,
    paket: "UTS Pemrograman Mobile C",
    tipe: "pilihan_ganda",
    topik: "Fabric UI Renderer",
    pertanyaan: "Renderer baru pada New Architecture React Native yang meningkatkan performa layout dan pencetakan layar adalah...",
    options: [
      "Fabric",
      "TurboModules",
      "Hermes",
      "Yoga"
    ],
    correct: 0,
    kunciJawaban: "A",
    pembahasan: "Fabric adalah sistem rendering UI baru di React Native yang mengeksekusi operasi rendering secara konsisten dan terintegrasi langsung dengan JSI."
  },
  {
    id: "c_39",
    nomor: 39,
    paket: "UTS Pemrograman Mobile C",
    tipe: "pilihan_ganda",
    topik: "Hermes JavaScript Engine",
    pertanyaan: "Mesin JavaScript yang dirancang khusus dan dioptimalkan oleh Meta untuk menjalankan React Native di Android adalah...",
    options: [
      "Hermes",
      "V8",
      "SpiderMonkey",
      "JavaScriptCore"
    ],
    correct: 0,
    kunciJawaban: "A",
    pembahasan: "Hermes adalah JavaScript engine open-source yang dioptimalkan untuk React Native guna meningkatkan waktu start-up aplikasi, mengurangi penggunaan memori, dan ukuran APK."
  },
  {
    id: "c_40",
    nomor: 40,
    paket: "UTS Pemrograman Mobile C",
    tipe: "esai",
    topik: "Pergeseran Peran AI Developer",
    pertanyaan: "[Pergeseran Peran: Developer sebagai System Architect] Jelaskan pergeseran peran insinyur perangkat lunak dari 'Code Typist' menjadi 'System Architect' dalam paradigma AI Vibe Coding!",
    options: null,
    correct: null,
    kunciJawaban: `1. Dari Code Typist: Insinyur tidak lagi menghabiskan waktu utama hanya untuk menulis sintaks/boilerplate/algoritma dasar secara manual karena eksekusi koding dasar telah ditangani otomatis oleh AI.
2. Menjadi System Architect: Peran bergeser ke ranah high-level seperti merancang arsitektur sistem, context/prompt engineering, validasi keamanan, tipe data, serta code review & sistem skalabilitas.`,
    pembahasan: "AI Vibe Coding mengubah fokus developer dari 'bagaimana mengetik kode' menjadi 'bagaimana merancang struktur sistem yang tepat, mengarahkan AI, dan memvalidasi kebenaran arsitektur'."
  }
];
