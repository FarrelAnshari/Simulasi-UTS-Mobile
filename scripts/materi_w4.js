// scripts/materi_w4.js
module.exports = {
  id: 4,
  weekNumber: 4,
  title: "Data Modeling + RESTful API",
  subtitle: "Sprint 03 — From Local App to Connected Mobile App",
  sprint: "Sprint 03 - Integrasi REST API & Pemodelan Data PresidentKu",
  readTime: "25 menit",
  topics: ["Arsitektur Client-Server", "Prinsip RESTful API & HTTP Methods", "Struktur Request & Response", "Format JSON & Parsing", "Data Modeling & DTO Transformation", "Fetch API vs Axios", "Dynamic State Rendering"],
  subtopics: [
    {
      id: "w4-client-server-rest",
      title: "4.1 Arsitektur Client-Server & Prinsip RESTful API",
      analogy: "Arsitektur client-server seperti hubungan pelanggan dan koki restoran melalui pelayan. Anda (Mobile App / Client) duduk di meja melihat daftar menu. Anda memesan makanan lewat pelayan (REST API). Pelayan membawa nota pesanan (HTTP Request) ke dapur koki (Server). Koki memasak makanan lalu pelayan menyajikan hidangan (HTTP Response JSON) ke meja Anda.",
      content: `
<p class="lead">Pada Pekan 2 dan 3, data aplikasi PresidentKu masih bersifat statis (<em>hard-coded</em> di dalam kode JavaScript). Mulai Pekan 4, aplikasi kita bertransformasi menjadi <strong>Connected Mobile App</strong> yang terhubung ke jaringan internet dan pusat data pemerintah secara dinamis.</p>

<h4>Mengapa Aplikasi Mobile Tidak Boleh Menyimpan Semua Data Sendiri?</h4>
<ul class="styled-list">
  <li><strong>Ukuran Memori Terbatas:</strong> Jika seluruh daftar berita, program bantuan, dan data kependudukan disimpan di HP, memori ponsel pengguna akan cepat penuh.</li>
  <li><strong>Konsistensi Real-Time:</strong> Ketika ada pembaruan program prioritas dari presiden, data di HP pengguna harus ter-update seketika tanpa mengharuskan pengguna mendownload ulang aplikasi di Play Store.</li>
  <li><strong>Keamanan Data:</strong> Basis data pusat terlindungi di balik firewall server, bukan tersebar telanjang di ribuan ponsel pengguna.</li>
</ul>

<h4>Komponen Arsitektur Client-Server</h4>
<div class="diagram-container text-center my-4">
  <svg viewBox="0 0 760 110" class="svg-flowchart">
    <rect x="10" y="25" width="130" height="60" rx="8" class="svg-node-blue" />
    <text x="75" y="52" class="svg-text">MOBILE CLIENT</text>
    <text x="75" y="70" class="svg-subtext">(PresidentKu App)</text>
    
    <path d="M 145 45 L 295 45" class="svg-arrow" marker-end="url(#arrow)" />
    <text x="220" y="38" class="svg-label">HTTP Request</text>
    
    <path d="M 295 70 L 145 70" class="svg-arrow-back" marker-end="url(#arrow)" />
    <text x="220" y="88" class="svg-label">JSON Response</text>
    
    <rect x="300" y="25" width="130" height="60" rx="8" class="svg-node-indigo" />
    <text x="365" y="52" class="svg-text">REST API</text>
    <text x="365" y="70" class="svg-subtext">(Penghubung Layanan)</text>
    
    <path d="M 435 55 L 615 55" class="svg-arrow" marker-end="url(#arrow)" />
    
    <rect x="620" y="25" width="130" height="60" rx="8" class="svg-node-purple" />
    <text x="685" y="52" class="svg-text">REST SERVER</text>
    <text x="685" y="70" class="svg-subtext">(Database Provider)</text>
  </svg>
</div>

<h4>Konsep Dasar RESTful API</h4>
<p><strong>REST (Representational State Transfer)</strong> adalah gaya arsitektur standar untuk merancang antarmuka komunikasi berbasis web yang ringan dan terstruktur.</p>
<ul class="styled-list">
  <li><strong>Resource:</strong> Entitas atau data yang disediakan oleh API (misalnya: <code>/programs</code> untuk data program prioritas, <code>/berita</code> untuk warta nasional).</li>
  <li><strong>Endpoint:</strong> URL spesifik tempat resource dapat diakses (misal: <code>https://api.presidentku.id/programs</code>).</li>
  <li><strong>HTTP Method (Kata Kerja Aksi):</strong> Operasi yang ingin dilakukan terhadap resource:</li>
</ul>

<div class="comparison-table-wrapper my-4">
  <table class="table-compare">
    <thead>
      <tr>
        <th>HTTP Method</th>
        <th>Fungsi Operasi</th>
        <th>Contoh di PresidentKu</th>
        <th>Ada Request Body?</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong class="text-success">GET</strong></td>
        <td>Mengambil data dari server</td>
        <td><code>GET /programs</code> (Ambil semua program)</td>
        <td>Tidak (kosong)</td>
      </tr>
      <tr>
        <td><strong class="text-primary">POST</strong></td>
        <td>Membuat atau mengirim data baru</td>
        <td><code>POST /aspirasi</code> (Kirim aspirasi warga)</td>
        <td>Ya (berisi payload JSON)</td>
      </tr>
      <tr>
        <td><strong class="text-warning">PUT / PATCH</strong></td>
        <td>Mengubah data yang sudah ada</td>
        <td><code>PUT /programs/1</code> (Ubah data program id 1)</td>
        <td>Ya (data pembaruan)</td>
      </tr>
      <tr>
        <td><strong class="text-danger">DELETE</strong></td>
        <td>Menghapus data di server</td>
        <td><code>DELETE /aspirasi/5</code> (Hapus aspirasi)</td>
        <td>Biasanya tidak</td>
      </tr>
    </tbody>
  </table>
</div>
      `,
      deepDive: `Perbedaan <code>PUT</code> vs <code>PATCH</code>: PUT menggantikan keseluruhan objek data di server (replace full resource), sedangkan PATCH hanya memperbarui bagian atau field tertentu dari objek tanpa menimpa atribut lainnya.`,
      summary: "Arsitektur client-server memisahkan aplikasi mobile (client) dari penyedia data (server) lewat perantara REST API. Endpoint menunjukkan alamat resource (/programs), sedangkan HTTP Method (GET, POST, PUT, DELETE) menentukan aksi operasinya.",
      pitfalls: "Menggunakan method GET untuk mengirim data sensitif seperti password di query URL.",
      examTips: "Pahami pemetaan 4 HTTP Method utama: GET (ambil), POST (buat baru), PUT/PATCH (ubah), dan DELETE (hapus)."
    },
    {
      id: "w4-request-response-json",
      title: "4.2 Anatomi HTTP Request, Response & Parsing JSON",
      analogy: "HTTP Request seperti surat pos formal. Ada alamat tujuan (URL), ada perangko dan jenis pengiriman (Header), ada tulisan jenis surat (Method), dan ada isi pesan di dalam amplop (Body). Ketika surat sampai, balasan datang beserta stempel status (Status Code 200 OK).",
      content: `
<h4>Anatomi HTTP Request & Response</h4>
<div class="grid-2-col my-4">
  <div class="code-block-wrapper">
    <div class="code-header"><span>Contoh HTTP Request Mentah</span></div>
    <pre><code>GET /programs HTTP/1.1
Host: api.presidentku.id
Accept: application/json
User-Agent: PresidentKu-Mobile/1.0

(Body kosong untuk method GET)</code></pre>
  </div>
  <div class="code-block-wrapper">
    <div class="code-header"><span>Contoh HTTP Response Mentah</span></div>
    <pre><code>HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
Server: Nginx/1.24

[
  {
    "id": 1,
    "name": "Program Beasiswa Indonesia Pintar",
    "description": "Bantuan pendidikan generasi muda"
  }
]</code></pre>
  </div>
</div>

<h4>Format JSON: Bahasa Komunikasi Universal</h4>
<p>Data dari server dikirim dalam format <strong>JSON (JavaScript Object Notation)</strong> berupa teks string terstruktur. Di aplikasi mobile, string JSON ini wajib di-<em>parse</em> menjadi objek/array JavaScript sungguhan agar dapat diolah oleh React Native.</p>

<div class="diagram-container text-center my-4">
  <svg viewBox="0 0 720 80" class="svg-flowchart">
    <rect x="10" y="20" width="120" height="40" rx="6" class="svg-node-indigo" />
    <text x="70" y="45" class="svg-text">1. JSON STRING</text>
    
    <path d="M 135 40 L 175 40" class="svg-arrow" marker-end="url(#arrow)" />
    
    <rect x="180" y="20" width="130" height="40" rx="6" class="svg-node-blue" />
    <text x="245" y="45" class="svg-text">2. PARSE (json())</text>
    
    <path d="M 315 40 L 355 40" class="svg-arrow" marker-end="url(#arrow)" />
    
    <rect x="360" y="20" width="150" height="40" rx="6" class="svg-node-purple" />
    <text x="435" y="45" class="svg-text">3. JS OBJECT / ARRAY</text>
    
    <path d="M 515 40 L 555 40" class="svg-arrow" marker-end="url(#arrow)" />
    
    <rect x="560" y="20" width="145" height="40" rx="6" class="svg-node-emerald" />
    <text x="632" y="45" class="svg-text">4. RENDER KE UI</text>
  </svg>
</div>
      `,
      deepDive: `Dalam JavaScript murni, parsing string manual menggunakan <code>JSON.parse(text)</code>. Namun saat menggunakan fungsi <code>fetch()</code>, kita menggunakan method asinkron <code>const data = await response.json()</code> yang secara otomatis membaca body stream jaringan dan mem-parse-nya ke objek JavaScript.`,
      summary: "HTTP Request memuat URL, method, header, dan body. HTTP Response mengembalikan status code, header, dan body data (umumnya JSON). String JSON wajib di-parse menjadi objek JavaScript sebelum ditampilkan di komponen UI.",
      pitfalls: "Lupa memanggil `await response.json()` pada Fetch API sehingga variabel hanya berisi Promise yang belum terselesaikan.",
      examTips: "Pahami siklus: JSON String dari server &rarr; di-parse dengan `response.json()` &rarr; menjadi JavaScript Object &rarr; di-render ke komponen UI."
    },
    {
      id: "w4-dto-fetch-axios",
      title: "4.3 Data Modeling, DTO Transformation & Fetch vs Axios",
      analogy: "Data server seperti buah kelapa utuh lengkap dengan sabut tebal dan tempurung keras (banyak atribut teknis tak terpakai). DTO (Data Transfer Object) seperti proses mengupas sabut dan memeras santan murninya: hanya bagian yang diperlukan oleh resep masakan Anda yang diambil.",
      content: `
<h4>Mengapa Perlu Data Modeling & DTO?</h4>
<p>Data mentah dari server backend (database) sering kali memuat puluhan kolom internal yang tidak relevan dengan layar smartphone pengguna, misalnya: <code>created_at</code>, <code>updated_at</code>, <code>deleted_at</code>, <code>created_by_ip</code>, dan <code>internal_db_hash</code>.</p>
<p><strong>DTO (Data Transfer Object)</strong> adalah teknik memetakan (<em>mapping</em>) data mentah dari API agar hanya memilih field yang benar-benar dibutuhkan oleh antarmuka aplikasi mobile kita.</p>

<div class="comparison-table-wrapper my-4">
  <table class="table-compare">
    <thead>
      <tr>
        <th>Server Response (JSON Mentah)</th>
        <th>Data Model / DTO di PresidentKu</th>
        <th>Keterangan</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>id: 101</code></td>
        <td><code>id: 101</code> (number)</td>
        <td><span class="badge-success">Dipakai</span> sebagai unique key list</td>
      </tr>
      <tr>
        <td><code>name: "Bantuan Pupuk Subsidi"</code></td>
        <td><code>title: item.name</code> (string)</td>
        <td><span class="badge-success">Dipakai</span> ditransformasikan jadi title</td>
      </tr>
      <tr>
        <td><code>desc_full: "Alokasi tahun 2026..."</code></td>
        <td><code>description: item.desc_full</code></td>
        <td><span class="badge-success">Dipakai</span> untuk deskripsi singkat</td>
      </tr>
      <tr>
        <td><code>img_url: "https://..."</code></td>
        <td><code>image: item.img_url</code> (string)</td>
        <td><span class="badge-success">Dipakai</span> untuk sumber gambar</td>
      </tr>
      <tr>
        <td><code>is_published: true</code></td>
        <td><code>status: "active"</code> (string)</td>
        <td><span class="badge-success">Dipakai</span> normalisasi status</td>
      </tr>
      <tr>
        <td><code>server_timestamp: 1728144000</code></td>
        <td><em>Dibuang (Ignored)</em></td>
        <td><span class="badge-danger">Tidak dipakai</span> menghemat memori</td>
      </tr>
      <tr>
        <td><code>created_at, updated_at</code></td>
        <td><em>Dibuang (Ignored)</em></td>
        <td><span class="badge-danger">Tidak dipakai</span> di antarmuka home</td>
      </tr>
    </tbody>
  </table>
</div>

<h4>Kode Mapping Data dengan JavaScript .map()</h4>
<div class="code-block-wrapper">
  <div class="code-header">
    <span>mapping.js — Transformasi Data Mentah ke DTO</span>
    <button class="btn-copy" onclick="copyCode(this)"><i class="fa-regular fa-copy"></i> Salin</button>
  </div>
  <pre><code class="language-javascript">// Mengubah array server menjadi format DTO PresidentKu
const programsDTO = rawApiData.map((item) => ({
  id: item.id,
  title: item.name,
  description: item.description,
  image: item.image,
  status: item.is_active ? 'active' : 'inactive',
}));</code></pre>
</div>

<h4>Perbandingan: Fetch API vs Axios</h4>
<div class="comparison-table-wrapper my-4">
  <table class="table-compare">
    <thead>
      <tr>
        <th>Aspek Komparasi</th>
        <th>Fetch API (Bawaan)</th>
        <th>Axios (Pustaka Eksternal)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Instalasi</strong></td>
        <td>Bawaan runtime JavaScript (tanpa install)</td>
        <td>Wajib install pustaka (<code>npm install axios</code>)</td>
      </tr>
      <tr>
        <td><strong>JSON Parsing</strong></td>
        <td>Manual via <code>await response.json()</code></td>
        <td>Otomatis diakses di <code>response.data</code></td>
      </tr>
      <tr>
        <td><strong>Error Handling 4xx/5xx</strong></td>
        <td>TIDAK otomatis throw error (harus cek <code>response.ok</code>)</td>
        <td>Otomatis melempar (throw) error ke blok catch</td>
      </tr>
      <tr>
        <td><strong>Request Interceptor</strong></td>
        <td>Harus dibungkus fungsi custom sendiri</td>
        <td>Tersedia fitur bawaan <code>axios.interceptors</code></td>
      </tr>
    </tbody>
  </table>
</div>

<h4>Implementasi Kode: Fetch API vs Axios</h4>
<div class="grid-2-col my-4">
  <div class="code-block-wrapper">
    <div class="code-header"><span>Fetch API (Bawaan)</span></div>
    <pre><code class="language-javascript">async function getProgramsFetch() {
  const response = await fetch(
    'https://api.presidentku.id/programs'
  );
  const data = await response.json();
  console.log('Data:', data);
  return data;
}</code></pre>
  </div>
  <div class="code-block-wrapper">
    <div class="code-header"><span>Axios Library</span></div>
    <pre><code class="language-javascript">import axios from 'axios';

async function getProgramsAxios() {
  const response = await axios.get(
    'https://api.presidentku.id/programs'
  );
  // Otomatis diparse ke .data
  console.log('Data:', response.data);
  return response.data;
}</code></pre>
  </div>
</div>

<h4>Menampilkan Data Dinamis ke Komponen React Native</h4>
<div class="code-block-wrapper">
  <div class="code-header">
    <span>ProgramList.js — Menggunakan useState & useEffect</span>
    <button class="btn-copy" onclick="copyCode(this)"><i class="fa-regular fa-copy"></i> Salin</button>
  </div>
  <pre><code class="language-jsx">import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

export default function ProgramList() {
  // 1. Inisialisasi state untuk menampung data DTO
  const [programs, setPrograms] = useState([]);

  // 2. Mengambil data saat layar pertama kali dibuka
  useEffect(() => {
    async function loadPrograms() {
      try {
        const response = await fetch('https://api.presidentku.id/programs');
        const rawData = await response.json();

        // 3. Mapping data API ke DTO
        const formatted = rawData.map(item => ({
          id: item.id,
          title: item.name,
          description: item.description,
          image: item.image,
          status: item.status,
        }));

        // 4. Simpan ke state komponen
        setPrograms(formatted);
      } catch (err) {
        console.error('Gagal mengambil data:', err);
      }
    }

    loadPrograms();
  }, []); // Array kosong: hanya dijalankan sekali saat mount

  return (
    &lt;FlatList
      data={programs}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) =&gt; (
        &lt;View style={styles.card}&gt;
          &lt;Image source={{ uri: item.image }} style={styles.thumb} /&gt;
          &lt;View style={styles.content}&gt;
            &lt;Text style={styles.title}&gt;{item.title}&lt;/Text&gt;
            &lt;Text style={styles.desc}&gt;{item.description}&lt;/Text&gt;
            &lt;Text style={styles.badge}&gt;{item.status.toUpperCase()}&lt;/Text&gt;
          &lt;/View&gt;
        &lt;/View&gt;
      )}
    /&gt;
  );
}</code></pre>
</div>
      `,
      deepDive: `Mengapa <code>useEffect</code> menggunakan array dependensi kosong <code>[]</code>? Ini menginstruksikan React Native agar pemanggilan API hanya dieksekusi satu kali tepat setelah komponen selesai dipasang di layar (<em>mount</em>). Jika array kosong ini dihilangkan, fungsi pemanggilan API akan terpanggil terus-menerus setiap kali state berubah (<em>infinite re-render loop</em>).`,
      summary: "DTO menyaring dan mentransformasi data mentah API agar sesuai kebutuhan UI. Fetch adalah bawaan JavaScript yang membutuhkan parsing manual (response.json()), sedangkan Axios adalah pustaka yang otomatis mem-parse respons ke response.data. Data disimpan di state useState dan dipanggil via useEffect.",
      pitfalls: "Lupa menyertakan dependency array `[]` pada `useEffect`, menyebabkan ribuan pemanggilan API berulang-ulang yang dapat memblokir server.",
      examTips: "Pahami perbedaan utama Fetch API vs Axios (terutama instalasi, auto-parsing JSON, dan perilaku melempar error status 4xx/5xx)."
    }
  ],
  glossary: [
    { term: "DTO (Data Transfer Object)", def: "Objek penampung data yang membawa data antar proses/jaringan dan hanya memuat atribut yang relevan bagi penerima." },
    { term: "REST", def: "Representational State Transfer; standar arsitektur komunikasi layanan web berbasis protokol HTTP." },
    { term: "FlatList", def: "Komponen React Native berkinerja tinggi untuk merender daftar data yang panjang secara efisien hanya pada item yang tampak di layar (virtualized)." },
    { term: "Mounting", def: "Fase siklus hidup saat komponen React pertama kali dibuat dan dimasukkan ke dalam hierarki antarmuka tampilan." }
  ],
  summaryWeek: "Pekan 4 menuntaskan Sprint 03: pemahaman arsitektur client-server, prinsip RESTful API dan 4 kata kerja HTTP method, anatomi request-response, alur parsing string JSON menjadi objek JavaScript, pemodelan data DTO menggunakan .map(), komparasi komprehensif Fetch vs Axios, serta integrasi pemanggilan data dinamis ke UI dengan useState dan useEffect.",
  sprintChecklist: [
    "Memahami arsitektur client-server mobile dengan RESTful API",
    "Mampu menyebutkan fungsi 4 HTTP method: GET, POST, PUT, DELETE",
    "Endpoint REST API /programs berhasil dipanggil dari aplikasi",
    "Response string JSON berhasil di-parse menjadi objek JavaScript",
    "Model data DTO Program (id, title, description, image, status) berhasil didefinisikan",
    "Data mentah API berhasil ditransformasikan menggunakan metode .map()",
    "Data dinamis berhasil ditampilkan di UI menggantikan data hardcode Pekan 2",
    "Mengetahui perbedaan praktis antara Fetch API dan pustaka Axios",
    "Melakukan commit dan push hasil kerja sprint ke repositori GitHub"
  ],
  checkUnderstanding: [
    {
      question: "Apakah fungsi utama dari pembuatan Data Transfer Object (DTO) pada aplikasi mobile client?",
      options: [
        "Mempercepat kecepatan koneksi internet pengguna",
        "Menyaring dan memetakan hanya atribut yang dibutuhkan UI dari sekian banyak field mentah server",
        "Menggantikan fungsi database di server backend",
        "Menghilangkan kebutuhan akan komponen Text pada React Native",
        "Mengubah kode JavaScript menjadi bahasa Assembly murni"
      ],
      correct: 1,
      explanation: "DTO dibuat untuk menyeleksi field yang benar-benar dipakai antarmuka, menormalisasi nama atribut, serta menghemat alokasi memori di perangkat ponsel."
    },
    {
      question: "Manakah pernyataan yang BENAR mengenai perbedaan antara Fetch API dan Axios?",
      options: [
        "Fetch API memerlukan `npm install`, sedangkan Axios sudah bawaan JavaScript",
        "Axios secara otomatis mem-parse body JSON ke dalam properti `response.data`, sedangkan Fetch memerlukan `await response.json()`",
        "Fetch API otomatis melempar error saat menerima status code 404, sedangkan Axios tidak",
        "Axios tidak dapat digunakan pada platform Android",
        "Fetch API hanya dapat digunakan untuk HTTP method POST"
      ],
      correct: 1,
      explanation: "Axios otomatis mem-parse data JSON ke `response.data`. Sebaliknya, Fetch API membutuhkan eksekusi method asinkron eksplisit `await response.json()`."
    },
    {
      question: "HTTP method manakah yang tepat digunakan untuk mengirimkan aspirasi baru warga negara ke sistem PresidentKu?",
      options: ["GET", "POST", "HEAD", "OPTIONS", "TRACE"],
      correct: 1,
      explanation: "Method POST adalah standar RESTful HTTP untuk membuat atau mengirimkan resource data baru ke server dengan menyertakan payload body."
    },
    {
      question: "Apa fungsi dari array kosong `[]` pada hook `useEffect(() => { ... }, [])` saat memanggil REST API?",
      options: [
        "Mengindikasikan bahwa data yang diambil berbentuk array kosong",
        "Membuat fungsi pemanggilan API hanya dijalankan sekali ketika komponen pertama kali di-mount",
        "Menghapus seluruh state saat data gagal diunduh",
        "Menginstruksikan aplikasi untuk dijalankan tanpa koneksi internet",
        "Memaksa pemanggilan API diulang setiap detik"
      ],
      correct: 1,
      explanation: "Array dependensi kosong `[]` memberi tahu React bahwa efek tersebut tidak bergantung pada state manapun, sehingga hanya dijalankan sekali saat komponen di-mount."
    }
  ]
};
