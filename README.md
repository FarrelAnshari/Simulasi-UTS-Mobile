# 📱 UTS Mobile - Platform Belajar & Simulasi Ujian

Platform edukasi interaktif dan simulasi UTS mandiri untuk mahasiswa Informatika pada mata kuliah **Pemrograman Mobile** (Tech Stack: *React Native & Expo Go*).

## ✨ Fitur Utama

- **Mode Materi Lengkap (Week 1 – 7):**
  - **Week 1:** Course Orientation & Project Kickoff (Kontrak kuliah, 4 pilar mobile, CPMK/Sub-CPMK, workflow sprint, Git, etika AI).
  - **Week 2:** Mobile Interface dengan React Native + Expo Go (Sprint 01: Core components, Flexbox, responsive ~4", ~6", ~8", inclusive accessibility, AI prompt structure).
  - **Week 3:** Authentication + Local Data Security (Sprint 02: Alur login/register, validasi form, secureTextEntry, Expo SecureStore terenkripsi hardware, matriks uji 5 skenario).
  - **Week 4:** Data Modeling + RESTful API (Sprint 03: Arsitektur client-server, REST endpoint & HTTP methods, JSON parsing, DTO transformation, Fetch vs Axios).
  - **Week 5:** Secure API: Token-Based Authentication (Sprint 04: Proteksi API, Bearer token, struktur JWT, HTTPS/TLS data in transit, token storage & Axios interceptor, Access vs Refresh token).
  - **Week 6:** Reliable API: Error Handling & Offline (Sprint 05: HTTP status code 2xx/4xx/5xx, 5 UI states: idle/loading/success/error/empty, timeout, skenario uji offline 8 langkah, properti `response.ok`).
  - **Week 7:** Device Sensor (Sprint 06: Akselerometer X/Y/Z, giroskop, lapisan akses sensor OS, runtime permission, expo-sensors & cleanup listener, rumus magnitude Euclidian untuk deteksi goncangan).
- **Mode Simulasi UTS (Bank 180 Soal PG A–E):**
  - 140 butir soal baru (seimbang 20 soal per week).
  - 40 butir soal bank lama (Android Native) dengan toggle di Pengaturan.
  - Timer 45 detik/soal dengan indikator berdenyut saat waktu kritis.
  - Pengacakan urutan opsi A–E tanpa merusak kunci jawaban.
  - Review hasil ujian, rincian skor per week, daftar salah, serta pembahasan lengkap.
- **Persistensi State Penuh (localStorage):**
  - Refresh tidak me-reset ujian; tersedia dialog lanjutkan sesi aktif.
  - Soal yang telah dijawab terkunci aman.
- **Desain Modern & Aksesibilitas:**
  - Tema gelap (Dark Navy) & tema terang (Light Clean).
  - Bottom navigation bar untuk mobile dan navbar atas untuk desktop.
  - Kontras tinggi, minimum touch target 44px, dan keyboard shortcut (A–E / 1–5 dan Enter).

## 🚀 Menjalankan Aplikasi

Aplikasi ini berbasis client-side murni tanpa build step:
1. Clone repositori:
   ```bash
   git clone https://github.com/FarrelAnshari/Simulasi-UTS-Mobile.git
   ```
2. Buka berkas `index.html` langsung di browser favorit Anda (Chrome, Edge, Firefox, atau Safari).

