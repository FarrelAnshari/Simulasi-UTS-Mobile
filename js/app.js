// js/app.js - Logika Terpadu Belajar & Simulasi UTS Pemrograman Mobile
(function () {
  'use strict';

  // ==================== STORAGE SCHEMA & HELPER ====================
  const STORAGE_KEYS = {
    SESSION: 'simulasi_session_v1',
    SETTINGS: 'simulasi_settings_v1',
    PROGRESS: 'simulasi_progress_v1',
    HISTORY: 'simulasi_history_v1',
    STATS: 'simulasi_stats_v1',
    LAST_VISIT: 'simulasi_last_visit_v1'
  };

  function getStorage(key, fallback) {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : fallback;
    } catch (e) {
      console.warn('Gagal membaca storage [' + key + ']:', e);
      return fallback;
    }
  }

  function setStorage(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.warn('Gagal menyimpan storage [' + key + ']:', e);
    }
  }

  // State Global Aplikasi
  const App = {
    materi: window.MATERI_DATA || [],
    bankSoal: window.BANK_SOAL || [],
    bankSoalC: window.BANK_SOAL_C || [],
    settings: getStorage(STORAGE_KEYS.SETTINGS, {
      timerPerQuestion: 45, // Default 45 detik (memperbaiki bug lama 00:30)
      theme: 'dark',
      includeBankLama: false, // Default: MATI
      fontSize: 16
    }),
    progress: getStorage(STORAGE_KEYS.PROGRESS, {
      completedWeeks: [],
      completedSubtopics: [],
      sprintChecklists: {}
    }),
    history: getStorage(STORAGE_KEYS.HISTORY, []),
    stats: getStorage(STORAGE_KEYS.STATS, {}), // { [soalId]: { seen: 0, wrong: 0, correct: 0 } }
    
    // Status Sesi Ujian Aktif
    quizSession: null,
    timerInterval: null,

    // Status UI Materi
    activeWeek: 1,
    activeSubtopicId: null
  };

  // Validasi Ketersediaan Data Saat Inisialisasi
  function validateData() {
    console.log('Materi terpasang:', App.materi.length, 'pekan.');
    console.log('Bank Soal Utama terpasang:', App.bankSoal.length, 'butir.');
    console.log('Bank Soal UTS C terpasang:', App.bankSoalC.length, 'butir.');
    if (!App.materi.length) console.error('Peringatan: MATERI_DATA kosong!');
    if (!App.bankSoal.length) console.error('Peringatan: BANK_SOAL kosong!');
  }

  // ==================== THEME & ACCESSIBILITY ====================
  function applyTheme(theme) {
    App.settings.theme = theme;
    setStorage(STORAGE_KEYS.SETTINGS, App.settings);
    if (theme === 'light') {
      document.body.classList.add('light-theme');
      const icon = document.getElementById('theme-toggle-icon');
      if (icon) icon.className = 'fa-solid fa-moon';
    } else {
      document.body.classList.remove('light-theme');
      const icon = document.getElementById('theme-toggle-icon');
      if (icon) icon.className = 'fa-solid fa-sun';
    }
  }

  function toggleTheme() {
    const nextTheme = App.settings.theme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
  }

  function applyFontSize(size) {
    App.settings.fontSize = size;
    setStorage(STORAGE_KEYS.SETTINGS, App.settings);
    document.documentElement.style.setProperty('--content-font-size', size + 'px');
    const display = document.getElementById('font-size-display');
    if (display) display.innerText = size + 'px';
  }

  // ==================== ROUTING & VIEW NAVIGATION ====================
  function switchView(viewName) {
    // Sembunyikan semua page view
    document.querySelectorAll('.page-view').forEach(el => el.classList.remove('active'));

    // Aktifkan view yang dituju
    const target = document.getElementById('view-' + viewName);
    if (target) {
      target.classList.add('active');
    }

    // Perbarui active state pada navbar desktop dan bottom nav mobile
    document.querySelectorAll('[data-nav-target]').forEach(el => {
      if (el.getAttribute('data-nav-target') === viewName) {
        el.classList.add('active');
      } else {
        el.classList.remove('active');
      }
    });

    // Catat riwayat halaman terakhir
    setStorage(STORAGE_KEYS.LAST_VISIT, viewName);

    // Render ulang konten sesuai view
    if (viewName === 'beranda') {
      renderBeranda();
    } else if (viewName === 'materi') {
      renderMateriTOC();
      renderMateriContent(App.activeWeek);
    } else if (viewName === 'pengaturan') {
      renderSettings();
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ==================== FITUR 1: BERANDA ====================
  function renderBeranda() {
    // 1. Hitung progres materi (%)
    const totalWeeks = App.materi.length || 7;
    const completedWeeksCount = App.progress.completedWeeks.length;
    const materiPercent = Math.round((completedWeeksCount / totalWeeks) * 100);

    const elMateriPercent = document.getElementById('dash-materi-percent');
    if (elMateriPercent) elMateriPercent.innerText = materiPercent + '%';

    const elMateriBar = document.getElementById('dash-materi-bar');
    if (elMateriBar) elMateriBar.style.width = materiPercent + '%';

    // 2. Hitung statistik simulasi
    const historyList = App.history;
    const totalSimulations = historyList.length;
    let bestScore = 0;
    if (historyList.length > 0) {
      bestScore = Math.max(...historyList.map(h => h.score));
    }

    const elSimCount = document.getElementById('dash-sim-count');
    if (elSimCount) elSimCount.innerText = totalSimulations + ' kali';

    const elBestScore = document.getElementById('dash-best-score');
    if (elBestScore) elBestScore.innerText = bestScore;

    // 3. Tombol Lanjutkan Terakhir
    const lastSession = getStorage(STORAGE_KEYS.SESSION, null);
    const resumeContainer = document.getElementById('resume-quiz-banner');
    if (resumeContainer) {
      if (lastSession && !lastSession.isFinished) {
        resumeContainer.style.display = 'block';
        const resumeText = document.getElementById('resume-quiz-text');
        if (resumeText) {
          resumeText.innerText = `Anda memiliki sesi simulasi aktif (Soal ${lastSession.currentIndex + 1} dari ${lastSession.questions.length}).`;
        }
      } else {
        resumeContainer.style.display = 'none';
      }
    }
  }

  // ==================== FITUR 2: MODE MATERI ====================
  function renderMateriTOC(filterKeyword = '') {
    const listContainer = document.getElementById('materi-toc-list');
    if (!listContainer) return;

    listContainer.innerHTML = '';
    const kw = filterKeyword.toLowerCase().trim();

    App.materi.forEach(w => {
      // Cek apakah judul atau subtopik cocok dengan filter pencarian
      const matchWeek = w.title.toLowerCase().includes(kw) || w.subtitle.toLowerCase().includes(kw);
      const matchSub = w.subtopics.some(s => s.title.toLowerCase().includes(kw) || s.content.toLowerCase().includes(kw));

      if (kw && !matchWeek && !matchSub) return;

      const isCompleted = App.progress.completedWeeks.includes(w.weekNumber);
      const isActive = w.weekNumber === App.activeWeek;

      const item = document.createElement('div');
      item.className = `week-nav-item ${isActive ? 'active' : ''}`;
      item.innerHTML = `
        <div style="display: flex; align-items: center; gap: 0.65rem;">
          <span class="week-badge-num">W${w.weekNumber}</span>
          <div>
            <div style="font-size: 0.88rem; font-weight: 600;">${w.title}</div>
            <div style="font-size: 0.72rem; color: var(--text-muted);">${w.sprint}</div>
          </div>
        </div>
        <div>
          ${isCompleted ? '<i class="fa-solid fa-circle-check text-success" title="Selesai dibaca"></i>' : '<i class="fa-regular fa-circle text-muted"></i>'}
        </div>
      `;

      item.onclick = () => {
        App.activeWeek = w.weekNumber;
        renderMateriTOC(filterKeyword);
        renderMateriContent(w.weekNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };

      listContainer.appendChild(item);
    });
  }

  function renderMateriContent(weekNum) {
    const w = App.materi.find(item => item.weekNumber === weekNum);
    if (!w) return;

    const contentArea = document.getElementById('materi-article-render');
    if (!contentArea) return;

    const isCompleted = App.progress.completedWeeks.includes(weekNum);

    let html = `
      <div class="materi-header mb-4">
        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 0.5rem;">
          <span class="hero-tag"><i class="fa-solid fa-code-branch"></i> ${w.sprint}</span>
          <span style="font-size: 0.82rem; color: var(--text-muted);"><i class="fa-regular fa-clock"></i> Estimasi baca: ${w.readTime}</span>
        </div>
        <h2 style="font-size: 1.85rem; font-weight: 800; margin-bottom: 0.4rem;">Week ${w.weekNumber} &mdash; ${w.title}</h2>
        <p style="color: var(--text-secondary); font-size: 1.05rem; margin-bottom: 1.25rem;">${w.subtitle}</p>
        
        <div style="display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap; margin-bottom: 1.5rem;">
          <button id="btn-toggle-complete-week" class="btn-primary" style="padding: 0.6rem 1.1rem; font-size: 0.85rem;">
            <i class="fa-solid ${isCompleted ? 'fa-check-double' : 'fa-check'}"></i> 
            ${isCompleted ? 'Selesai Dibaca (Klik untuk Batal)' : 'Tandai Selesai Pekan Ini'}
          </button>
          
          <button onclick="App.startPracticeWeek(${w.weekNumber})" class="btn-gold" style="padding: 0.6rem 1.1rem; font-size: 0.85rem;">
            <i class="fa-solid fa-pen-to-square"></i> Latihan Soal Week ${w.weekNumber}
          </button>
        </div>
      </div>
    `;

    // Render Sub-topik
    w.subtopics.forEach(sub => {
      html += `
        <section id="${sub.id}" class="materi-subtopic-block my-5">
          <h3 style="font-size: 1.45rem; font-weight: 700; color: var(--text-primary); border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem; margin-bottom: 1rem;">
            ${sub.title}
          </h3>

          <!-- Analogi Sehari-Hari -->
          <div class="box-analogy">
            <i class="fa-solid fa-lightbulb" style="color: var(--accent-gold); margin-right: 0.4rem;"></i>
            <strong>Analogi Sehari-Hari:</strong> ${sub.analogy}
          </div>

          <!-- Isi Konten Lengkap -->
          <div class="subtopic-prose-content">
            ${sub.content}
          </div>

          <!-- Kotak Pendalaman jika ada -->
          ${sub.deepDive ? `
            <div class="callout callout-deepdive">
              <h5><i class="fa-solid fa-graduation-cap"></i> Pendalaman Materi</h5>
              <p class="mb-0">${sub.deepDive}</p>
            </div>
          ` : ''}

          <!-- Penutup Sub-Bab: Intinya, Sering Salah, Muncul di UTS -->
          <div class="subtopic-closure-grid">
            <div class="closure-card closure-intinya">
              <strong style="color: var(--brand-sky); display: block; margin-bottom: 0.35rem;"><i class="fa-solid fa-compass"></i> Intinya</strong>
              <p class="mb-0">${sub.summary}</p>
            </div>
            <div class="closure-card closure-hati-hati">
              <strong style="color: var(--status-danger); display: block; margin-bottom: 0.35rem;"><i class="fa-solid fa-triangle-exclamation"></i> Hati-Hati / Sering Salah</strong>
              <p class="mb-0">${sub.pitfalls}</p>
            </div>
            <div class="closure-card closure-uts">
              <strong style="color: var(--accent-gold); display: block; margin-bottom: 0.35rem;"><i class="fa-solid fa-star"></i> Kemungkinan di UTS</strong>
              <p class="mb-0">${sub.examTips}</p>
            </div>
          </div>
        </section>
      `;
    });

    // Glosarium Pekan Ini
    if (w.glossary && w.glossary.length > 0) {
      html += `
        <div class="my-5 p-4 rounded-xl" style="background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 14px;">
          <h4 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 1rem;"><i class="fa-solid fa-book-bookmark text-indigo"></i> Glosarium Week ${w.weekNumber}</h4>
          <div class="grid-2-col">
            ${w.glossary.map(g => `
              <div style="margin-bottom: 0.75rem;">
                <strong style="color: var(--brand-sky);">${g.term}</strong>
                <p style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.15rem;">${g.def}</p>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    // Ringkasan Pekan & Checklist Sprint
    html += `
      <div class="callout callout-important my-5">
        <h4><i class="fa-solid fa-flag-checkered"></i> Ringkasan Week ${w.weekNumber}</h4>
        <p class="mb-0">${w.summaryWeek}</p>
      </div>

      <div class="my-5 p-4 rounded-xl" style="background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 14px;">
        <h4 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 1rem;"><i class="fa-solid fa-list-check text-emerald"></i> Checklist Sprint Week ${w.weekNumber}</h4>
        <div id="sprint-checklist-box">
          ${w.sprintChecklist.map((item, idx) => {
            const checkKey = `w${w.weekNumber}_chk_${idx}`;
            const isChecked = !!App.progress.sprintChecklists[checkKey];
            return `
              <div class="checklist-item">
                <input type="checkbox" id="${checkKey}" ${isChecked ? 'checked' : ''} onchange="App.toggleSprintCheck('${checkKey}')">
                <label for="${checkKey}" style="cursor: pointer; font-size: 0.9rem;">${item}</label>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;

    // Cek Pemahaman (Mini Kuis)
    if (w.checkUnderstanding && w.checkUnderstanding.length > 0) {
      html += `
        <div class="my-5">
          <h4 style="font-size: 1.35rem; font-weight: 800; margin-bottom: 1.25rem;"><i class="fa-solid fa-circle-question text-amber"></i> Cek Pemahaman Week ${w.weekNumber}</h4>
          <div class="mini-quiz-container">
            ${w.checkUnderstanding.map((q, qIdx) => `
              <div class="quiz-mini-card" id="mini-q-${w.weekNumber}-${qIdx}">
                <p style="font-weight: 700; margin-bottom: 0.75rem;">${qIdx + 1}. ${q.question}</p>
                <div class="mini-options">
                  ${q.options.map((opt, oIdx) => `
                    <button class="mini-option-btn" onclick="App.checkMiniQuiz(${w.weekNumber}, ${qIdx}, ${oIdx})">
                      <span style="font-weight: 700;">${String.fromCharCode(65 + oIdx)}.</span> ${opt}
                    </button>
                  `).join('')}
                </div>
                <div class="mini-feedback mt-3 p-3 rounded-lg" style="display: none; font-size: 0.85rem; border: 1px solid var(--border-color); border-radius: 8px;"></div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    // Tombol Navigasi Sebelumnya / Berikutnya
    html += `
      <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 3rem; padding-top: 1.5rem; border-top: 1px solid var(--border-color); flex-wrap: wrap; gap: 1rem;">
        <button onclick="App.navigateMateriWeek(${weekNum - 1})" class="btn-primary" style="background: var(--bg-secondary); border: 1px solid var(--border-color); color: var(--text-primary); ${weekNum <= 1 ? 'visibility: hidden;' : ''}">
          <i class="fa-solid fa-arrow-left"></i> Week Sebelumnya
        </button>

        <button onclick="App.navigateMateriWeek(${weekNum + 1})" class="btn-primary" style="${weekNum >= 7 ? 'visibility: hidden;' : ''}">
          Week Berikutnya <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    `;

    contentArea.innerHTML = html;

    // Pasang Event Listener Tombol Tandai Selesai
    const btnToggle = document.getElementById('btn-toggle-complete-week');
    if (btnToggle) {
      btnToggle.onclick = () => {
        App.toggleCompleteWeek(weekNum);
      };
    }
  }

  function toggleCompleteWeek(weekNum) {
    const idx = App.progress.completedWeeks.indexOf(weekNum);
    if (idx === -1) {
      App.progress.completedWeeks.push(weekNum);
    } else {
      App.progress.completedWeeks.splice(idx, 1);
    }
    setStorage(STORAGE_KEYS.PROGRESS, App.progress);
    renderMateriTOC();
    renderMateriContent(weekNum);
    renderBeranda();
  }

  function toggleSprintCheck(checkKey) {
    App.progress.sprintChecklists[checkKey] = !App.progress.sprintChecklists[checkKey];
    setStorage(STORAGE_KEYS.PROGRESS, App.progress);
  }

  function checkMiniQuiz(weekNum, qIdx, selectedIdx) {
    const w = App.materi.find(item => item.weekNumber === weekNum);
    if (!w || !w.checkUnderstanding[qIdx]) return;

    const q = w.checkUnderstanding[qIdx];
    const card = document.getElementById(`mini-q-${weekNum}-${qIdx}`);
    if (!card) return;

    const btns = card.querySelectorAll('.mini-option-btn');
    const feedbackBox = card.querySelector('.mini-feedback');

    btns.forEach((btn, idx) => {
      btn.disabled = true;
      btn.style.cursor = 'default';
      if (idx === q.correct) {
        btn.classList.add('correct');
      } else if (idx === selectedIdx) {
        btn.classList.add('wrong');
      }
    });

    if (feedbackBox) {
      feedbackBox.style.display = 'block';
      const isCorrect = selectedIdx === q.correct;
      feedbackBox.style.backgroundColor = isCorrect ? 'var(--status-success-light)' : 'var(--status-danger-light)';
      feedbackBox.style.borderColor = isCorrect ? 'var(--status-success)' : 'var(--status-danger)';
      feedbackBox.innerHTML = `
        <strong style="color: ${isCorrect ? 'var(--status-success)' : 'var(--status-danger)'};">
          ${isCorrect ? 'Benar Sekali!' : 'Kurang Tepat.'}
        </strong>
        <p class="mt-1 mb-0">${q.explanation}</p>
      `;
    }
  }

  // ==================== FITUR 3: MODE SIMULASI UTS ====================
  function startSimulation(mode = 'full_uts', targetWeek = null) {
    // Mode: 'full_uts', 'week_practice', 'wrong_practice', 'relaxed'
    let pool = [];

    if (mode === 'week_practice' && targetWeek) {
      pool = App.bankSoal.filter(q => q.week === targetWeek);
    } else if (mode === 'wrong_practice') {
      // Ambil soal yang pernah salah
      const wrongIds = Object.keys(App.stats).filter(id => App.stats[id].wrong > 0);
      pool = App.bankSoal.filter(q => wrongIds.includes(q.id));
      if (pool.length === 0) {
        alert('Hebat! Belum ada riwayat soal yang pernah Anda jawab salah. Silakan coba Simulasi Penuh.');
        return;
      }
    } else {
      // Full UTS atau Relaxed: ambil seimbang dari Week 1 s/d Week 7
      let candidates = App.bankSoal;
      if (!App.settings.includeBankLama) {
        candidates = candidates.filter(q => q.sumber !== 'lama');
      }

      // Ambil seimbang per week (kira-kira 5-6 soal per week agar total 40)
      const selectedMap = [];
      for (let w = 1; w <= 7; w++) {
        const weekQuestions = candidates.filter(q => q.week === w);
        // Prioritaskan soal yang belum pernah muncul atau sering salah
        weekQuestions.sort((a, b) => {
          const statsA = App.stats[a.id] || { seen: 0, wrong: 0 };
          const statsB = App.stats[b.id] || { seen: 0, wrong: 0 };
          return (statsA.seen - statsB.seen) || (statsB.wrong - statsA.wrong) || (Math.random() - 0.5);
        });
        // Ambil 5 atau 6 soal per week
        const takeCount = (w <= 5) ? 6 : 5; // (6*5) + (5*2) = 30 + 10 = 40 soal
        selectedMap.push(...weekQuestions.slice(0, takeCount));
      }

      // Jika ada slot sisa atau diizinkan bank lama, acak
      if (App.settings.includeBankLama && selectedMap.length < 40) {
        const oldOnes = candidates.filter(q => q.sumber === 'lama').sort(() => Math.random() - 0.5);
        selectedMap.push(...oldOnes.slice(0, 40 - selectedMap.length));
      }

      pool = selectedMap.sort(() => Math.random() - 0.5);
    }

    if (pool.length === 0) {
      alert('Bank soal tidak mencukupi untuk filter ini.');
      return;
    }

    // Bangun Objek Sesi Simulasi
    // Acak urutan opsi untuk setiap soal agar tidak monoton
    const preparedQuestions = pool.map(q => {
      // Buat array mapping opsi: [ { text: opt, originalIndex: idx } ]
      const mappedOptions = q.options.map((opt, idx) => ({ text: opt, originalIndex: idx }));
      mappedOptions.sort(() => Math.random() - 0.5);

      const newCorrectIndex = mappedOptions.findIndex(o => o.originalIndex === q.correct);

      return {
        id: q.id,
        week: q.week,
        topik: q.topik,
        tingkat: q.tingkat,
        tipe: q.tipe,
        pertanyaan: q.pertanyaan,
        options: mappedOptions.map(o => o.text),
        correct: newCorrectIndex,
        pembahasan: q.pembahasan,
        sumber: q.sumber,
        userAnswer: null, // indeks jawaban yang dipilih
        isBookmarked: false
      };
    });

    const isTimerActive = mode === 'full_uts';
    const totalTimeSeconds = isTimerActive ? preparedQuestions.length * App.settings.timerPerQuestion : 0;

    App.quizSession = {
      mode: mode,
      targetWeek: targetWeek,
      questions: preparedQuestions,
      currentIndex: 0,
      timeLeft: totalTimeSeconds,
      isTimerActive: isTimerActive,
      isFinished: false,
      startTime: Date.now()
    };

    setStorage(STORAGE_KEYS.SESSION, App.quizSession);

    // Buka tampilan pengerjaan kuis
    switchView('simulasi');
    showQuizActiveCard();
    renderCurrentQuestion();

    if (isTimerActive) {
      startQuizTimer();
    } else {
      stopQuizTimer();
      const timerDisplay = document.getElementById('quiz-timer-display');
      if (timerDisplay) {
        timerDisplay.innerText = 'Mode Santai';
        timerDisplay.classList.remove('timer-pulse');
      }
    }
  }

  function startSimulationC(mode = 'full_uts') {
    const rawQuestions = window.BANK_SOAL_C || App.bankSoalC || [];
    if (!rawQuestions || rawQuestions.length === 0) {
      alert('Bank Soal UTS Pemrograman Mobile C belum dimuat. Silakan muat ulang halaman.');
      return;
    }

    const selectedQuestions = rawQuestions.map(q => ({
      ...q,
      userAnswer: null,
      userAnswerText: '',
      isBookmarked: false
    }));

    const isTimerActive = mode === 'full_uts';
    const timeLimitSec = 60 * 60; // 60 Menit

    App.quizSession = {
      package: 'UTS Pemrograman Mobile C',
      mode: mode,
      targetWeek: null,
      questions: selectedQuestions,
      currentIndex: 0,
      timeLeft: isTimerActive ? timeLimitSec : 0,
      isTimerActive: isTimerActive,
      isFinished: false,
      startTime: Date.now()
    };

    setStorage(STORAGE_KEYS.SESSION, App.quizSession);

    switchView('simulasi');
    showQuizActiveCard();
    renderCurrentQuestion();

    if (isTimerActive) {
      startQuizTimer();
    } else {
      stopQuizTimer();
      const timerDisplay = document.getElementById('quiz-timer-display');
      if (timerDisplay) {
        timerDisplay.innerText = 'Mode Santai';
        timerDisplay.classList.remove('timer-pulse');
      }
    }
  }

  function saveEssayAnswer() {
    const session = App.quizSession;
    if (!session || session.isFinished) return;

    const q = session.questions[session.currentIndex];
    if (q.tipe !== 'esai') return;

    const inputEl = document.getElementById('quiz-essay-input');
    const textVal = inputEl ? inputEl.value.trim() : '';

    if (!textVal) {
      alert('Silakan tuliskan jawaban penjelasan Anda terlebih dahulu pada kolom yang disediakan.');
      return;
    }

    q.userAnswerText = textVal;
    q.userAnswer = true;

    setStorage(STORAGE_KEYS.SESSION, session);
    renderCurrentQuestion();
  }

  function showQuizActiveCard() {
    document.getElementById('simulasi-menu-card')?.classList.add('hidden');
    document.getElementById('simulasi-result-card')?.classList.add('hidden');
    document.getElementById('simulasi-active-card')?.classList.remove('hidden');
  }

  function showQuizResultCard() {
    document.getElementById('simulasi-menu-card')?.classList.add('hidden');
    document.getElementById('simulasi-active-card')?.classList.add('hidden');
    document.getElementById('simulasi-result-card')?.classList.remove('hidden');
  }

  function renderCurrentQuestion() {
    const session = App.quizSession;
    if (!session || !session.questions[session.currentIndex]) return;

    const q = session.questions[session.currentIndex];
    const totalQ = session.questions.length;
    const curIdx = session.currentIndex;

    // Header Nomor & Topik
    const elNum = document.getElementById('quiz-question-number');
    if (elNum) elNum.innerText = `Soal ${curIdx + 1} dari ${totalQ}`;

    const elTopic = document.getElementById('quiz-topic-tag');
    if (elTopic) {
      if (session.package === 'UTS Pemrograman Mobile C' || q.paket === 'C') {
        const typeLabel = q.tipe === 'esai' ? 'ESAI' : 'PG';
        elTopic.innerText = `Paket C • ${q.topik || 'Pemrograman Mobile'} (${typeLabel})`;
      } else {
        const weekLabel = q.week ? `Week ${q.week}` : 'Native';
        elTopic.innerText = `${weekLabel} • ${q.topik}`;
      }
    }

    // Progress Bar
    const progressPercent = ((curIdx) / totalQ) * 100;
    const elProgress = document.getElementById('quiz-progress-bar');
    if (elProgress) elProgress.style.width = progressPercent + '%';

    // Teks Soal
    const elText = document.getElementById('quiz-question-text');
    if (elText) elText.innerHTML = formatCodeSnippets(q.pertanyaan);

    // Render Opsi Jawaban (atau Textarea jika tipe Esai)
    const optionsContainer = document.getElementById('quiz-options-container');
    const expBox = document.getElementById('quiz-explanation-box');

    if (q.tipe === 'esai') {
      const isSaved = q.userAnswer !== null;
      if (optionsContainer) {
        optionsContainer.innerHTML = `
          <div class="essay-box">
            <label style="display: block; font-weight: 600; margin-bottom: 0.5rem; color: var(--text-primary);">
              <i class="fa-solid fa-pen-fancy text-primary mr-1"></i> Tuliskan Jawaban Esai Anda:
            </label>
            <textarea id="quiz-essay-input" class="essay-textarea" placeholder="Ketik jawaban penjelasan Anda di sini secara lengkap..." ${isSaved ? 'disabled' : ''}>${q.userAnswerText || ''}</textarea>
            ${!isSaved ? `
              <div style="margin-top: 0.75rem; display: flex; justify-content: flex-end;">
                <button class="btn btn-primary btn-sm" onclick="App.saveEssayAnswer()">
                  <i class="fa-solid fa-check mr-1"></i> Simpan & Tampilkan Pembahasan Detail
                </button>
              </div>
            ` : `
              <div style="margin-top: 0.5rem; font-size: 0.85rem; color: var(--status-success); font-weight: 600;">
                <i class="fa-solid fa-circle-check"></i> Jawaban telah tersimpan pada sesi ujian.
              </div>
            `}
          </div>
        `;
      }

      if (expBox) {
        if (isSaved) {
          expBox.classList.add('active');
          expBox.style.backgroundColor = 'var(--bg-card)';
          expBox.style.borderColor = 'var(--accent-gold)';
          expBox.innerHTML = `
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem;">
              <i class="fa-solid fa-lightbulb text-amber"></i>
              <strong style="color: var(--accent-gold);">
                Kunci Jawaban Acuan & Pembahasan Detail
              </strong>
            </div>
            <div class="essay-reference-card">
              <div class="essay-reference-title">
                <i class="fa-solid fa-key text-success mr-1"></i> Kunci Jawaban Acuan:
              </div>
              <div style="font-size: 0.9rem; line-height: 1.5; color: var(--text-primary);">
                ${formatCodeSnippets(q.kunciJawaban || '')}
              </div>
            </div>
            <div style="margin-top: 0.75rem;">
              <strong class="text-xs uppercase text-secondary" style="letter-spacing: 0.05em;">Pembahasan Mendalam:</strong>
              <p class="mb-0 text-sm mt-1" style="color: var(--text-secondary); line-height: 1.6;">${formatCodeSnippets(q.pembahasan)}</p>
            </div>
          `;
        } else {
          expBox.classList.remove('active');
        }
      }
    } else {
      if (optionsContainer) {
        optionsContainer.innerHTML = '';
        const isAnswered = q.userAnswer !== null;

        (q.options || []).forEach((optText, optIdx) => {
          const optBtn = document.createElement('div');
          optBtn.className = 'option-item';
          if (isAnswered) optBtn.classList.add('locked');

          const char = String.fromCharCode(65 + optIdx);

          if (isAnswered) {
            if (optIdx === q.correct) {
              optBtn.classList.add('correct');
            } else if (optIdx === q.userAnswer) {
              optBtn.classList.add('wrong');
            }
          }

          optBtn.innerHTML = `
            <div class="option-badge">${char}</div>
            <div style="flex: 1;">${formatCodeSnippets(optText)}</div>
          `;

          if (!isAnswered) {
            optBtn.onclick = () => selectQuizAnswer(optIdx);
          }

          optionsContainer.appendChild(optBtn);
        });
      }

      if (expBox) {
        if (q.userAnswer !== null) {
          expBox.classList.add('active');
          const isUserCorrect = q.userAnswer === q.correct;
          expBox.style.backgroundColor = isUserCorrect ? 'var(--status-success-light)' : 'var(--status-danger-light)';
          expBox.style.borderColor = isUserCorrect ? 'var(--status-success)' : 'var(--status-danger)';
          expBox.innerHTML = `
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
              <i class="fa-solid ${isUserCorrect ? 'fa-circle-check text-success' : 'fa-circle-xmark text-danger'}"></i>
              <strong style="color: ${isUserCorrect ? 'var(--status-success)' : 'var(--status-danger)'};">
                ${isUserCorrect ? 'Jawaban Anda Tepat!' : 'Jawaban Anda Kurang Tepat!'}
              </strong>
            </div>
            <p class="mb-0 text-sm">${q.pembahasan}</p>
          `;
        } else {
          expBox.classList.remove('active');
        }
      }
    }

    // Tombol Bookmark
    const btnBookmark = document.getElementById('btn-quiz-bookmark');
    if (btnBookmark) {
      btnBookmark.innerHTML = q.isBookmarked ? '<i class="fa-solid fa-bookmark text-amber"></i> Ditandai' : '<i class="fa-regular fa-bookmark"></i> Tandai Ragu';
    }

    // Render Quick Nav Grid (1-40)
    renderQuickNavGrid();

    // Kontrol Tombol Sebelumnya / Berikutnya
    const btnPrev = document.getElementById('btn-quiz-prev');
    if (btnPrev) btnPrev.disabled = curIdx === 0;

    const btnNext = document.getElementById('btn-quiz-next');
    if (btnNext) {
      if (curIdx === totalQ - 1) {
        btnNext.innerHTML = 'Selesaikan Ujian <i class="fa-solid fa-flag-checkered ml-1"></i>';
      } else {
        btnNext.innerHTML = 'Selanjutnya <i class="fa-solid fa-arrow-right ml-1"></i>';
      }
    }
  }

  function formatCodeSnippets(str) {
    if (!str) return '';
    // Format potongan kode inline `kode`
    return str.replace(/`([^`]+)`/g, '<code class="font-mono px-1 py-0.5 rounded bg-slate-800 text-sky-400 text-xs">$1</code>');
  }

  function selectQuizAnswer(optIndex) {
    const session = App.quizSession;
    if (!session || session.isFinished) return;

    const q = session.questions[session.currentIndex];
    if (q.tipe === 'esai') return;
    if (q.userAnswer !== null) return; // Kunci: Soal yang sudah dijawab tidak bisa diubah lagi!

    q.userAnswer = optIndex;

    // Perbarui Statistik Soal Global
    if (!App.stats[q.id]) {
      App.stats[q.id] = { seen: 0, correct: 0, wrong: 0 };
    }
    App.stats[q.id].seen += 1;
    if (optIndex === q.correct) {
      App.stats[q.id].correct += 1;
    } else {
      App.stats[q.id].wrong += 1;
    }
    setStorage(STORAGE_KEYS.STATS, App.stats);
    setStorage(STORAGE_KEYS.SESSION, session);

    renderCurrentQuestion();
  }

  function toggleCurrentBookmark() {
    const session = App.quizSession;
    if (!session) return;
    const q = session.questions[session.currentIndex];
    q.isBookmarked = !q.isBookmarked;
    setStorage(STORAGE_KEYS.SESSION, session);
    renderCurrentQuestion();
  }

  function navigateQuiz(step) {
    const session = App.quizSession;
    if (!session) return;

    const newIdx = session.currentIndex + step;
    if (newIdx >= 0 && newIdx < session.questions.length) {
      session.currentIndex = newIdx;
      setStorage(STORAGE_KEYS.SESSION, session);
      renderCurrentQuestion();
    } else if (newIdx >= session.questions.length) {
      // Konfirmasi Selesai Ujian
      finishQuiz();
    }
  }

  function jumpToQuestion(targetIndex) {
    const session = App.quizSession;
    if (!session) return;
    if (targetIndex >= 0 && targetIndex < session.questions.length) {
      session.currentIndex = targetIndex;
      setStorage(STORAGE_KEYS.SESSION, session);
      renderCurrentQuestion();
    }
  }

  function renderQuickNavGrid() {
    const container = document.getElementById('quiz-quick-nav-grid');
    if (!container || !App.quizSession) return;

    container.innerHTML = '';
    const session = App.quizSession;

    session.questions.forEach((q, idx) => {
      const btn = document.createElement('button');
      btn.className = 'btn-grid-num';
      btn.innerText = idx + 1;

      if (q.userAnswer !== null) btn.classList.add('answered');
      if (q.isBookmarked) btn.classList.add('bookmarked');
      if (idx === session.currentIndex) btn.classList.add('current');

      btn.onclick = () => jumpToQuestion(idx);
      container.appendChild(btn);
    });
  }

  // Timer Management
  function startQuizTimer() {
    stopQuizTimer();
    updateTimerUI();

    App.timerInterval = setInterval(() => {
      if (!App.quizSession || App.quizSession.isFinished) {
        stopQuizTimer();
        return;
      }

      App.quizSession.timeLeft -= 1;
      setStorage(STORAGE_KEYS.SESSION, App.quizSession);
      updateTimerUI();

      if (App.quizSession.timeLeft <= 0) {
        stopQuizTimer();
        alert('Waktu ujian telah habis! Jawaban Anda akan dihitung secara otomatis.');
        finishQuiz();
      }
    }, 1000);
  }

  function stopQuizTimer() {
    if (App.timerInterval) {
      clearInterval(App.timerInterval);
      App.timerInterval = null;
    }
  }

  function updateTimerUI() {
    const session = App.quizSession;
    const timerDisplay = document.getElementById('quiz-timer-display');
    if (!timerDisplay || !session) return;

    const mins = Math.floor(session.timeLeft / 60);
    const secs = session.timeLeft % 60;
    const formatted = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    timerDisplay.innerText = formatted;

    // Efek Berdenyut saat sisa waktu < 60 detik (atau < 10 detik per soal)
    if (session.timeLeft < 60) {
      timerDisplay.classList.add('timer-pulse');
    } else {
      timerDisplay.classList.remove('timer-pulse');
    }
  }

  // ==================== FINISH QUIZ & RESULT ====================
  function finishQuiz() {
    const session = App.quizSession;
    if (!session) return;

    stopQuizTimer();
    session.isFinished = true;

    // Hitung Skor
    let correctCount = 0;
    let pgTotal = 0;
    let essayAnswered = 0;
    let essayTotal = 0;
    const weekScores = { 1: { c: 0, t: 0 }, 2: { c: 0, t: 0 }, 3: { c: 0, t: 0 }, 4: { c: 0, t: 0 }, 5: { c: 0, t: 0 }, 6: { c: 0, t: 0 }, 7: { c: 0, t: 0 }, 0: { c: 0, t: 0 } };

    session.questions.forEach(q => {
      if (q.tipe === 'esai') {
        essayTotal += 1;
        if (q.userAnswer !== null) essayAnswered += 1;
      } else {
        pgTotal += 1;
        const wKey = q.week || 0;
        if (!weekScores[wKey]) weekScores[wKey] = { c: 0, t: 0 };
        weekScores[wKey].t += 1;

        if (q.userAnswer === q.correct) {
          correctCount += 1;
          weekScores[wKey].c += 1;
        }
      }
    });

    const totalQuestions = session.questions.length;
    // Jika ada soal PG, skor dihitung dari PG (atau total jika murni PG)
    const finalScore = pgTotal > 0 ? Math.round((correctCount / pgTotal) * 100) : 100;
    const durationSeconds = Math.round((Date.now() - session.startTime) / 1000);

    // Simpan ke Riwayat (Maks 10)
    const historyItem = {
      id: 'hist_' + Date.now(),
      date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
      mode: session.mode,
      package: session.package || 'Reguler',
      score: finalScore,
      correct: correctCount,
      pgTotal: pgTotal,
      essayAnswered: essayAnswered,
      essayTotal: essayTotal,
      total: totalQuestions,
      duration: durationSeconds,
      weekScores: weekScores
    };

    App.history.unshift(historyItem);
    if (App.history.length > 10) App.history.pop();
    setStorage(STORAGE_KEYS.HISTORY, App.history);

    // Bersihkan sesi aktif
    localStorage.removeItem(STORAGE_KEYS.SESSION);

    // Tampilkan Layar Hasil
    showQuizResultCard();
    renderResultView(historyItem, session);
    renderBeranda();
  }

  function renderResultView(hist, session) {
    const elScore = document.getElementById('result-final-score');
    if (elScore) elScore.innerText = hist.score;

    const elDetail = document.getElementById('result-score-detail');
    if (elDetail) {
      if (hist.package === 'UTS Pemrograman Mobile C') {
        elDetail.innerText = `Menjawab ${hist.correct} benar dari ${hist.pgTotal} PG, serta ${hist.essayAnswered} dari ${hist.essayTotal} Esai terselesaikan (${Math.floor(hist.duration / 60)}m ${hist.duration % 60}s).`;
      } else {
        elDetail.innerText = `Menjawab ${hist.correct} benar dari ${hist.total} butir soal (${Math.floor(hist.duration / 60)}m ${hist.duration % 60}s).`;
      }
    }

    // Pemicu Confetti jika skor >= 80%
    if (hist.score >= 80) {
      triggerConfetti();
    }

    // Render Grafik Batang Capaian per Week
    const chartContainer = document.getElementById('result-week-breakdown');
    if (chartContainer) {
      chartContainer.innerHTML = '';
      for (let w = 1; w <= 7; w++) {
        const item = hist.weekScores[w];
        if (!item || item.t === 0) continue;
        const pct = Math.round((item.c / item.t) * 100);

        const row = document.createElement('div');
        row.style.marginBottom = '0.75rem';
        row.innerHTML = `
          <div style="display: flex; justify-content: space-between; font-size: 0.85rem; font-weight: 600; margin-bottom: 0.25rem;">
            <span>Week ${w}</span>
            <span>${item.c}/${item.t} (${pct}%)</span>
          </div>
          <div style="width: 100%; height: 8px; background: var(--bg-secondary); border-radius: 999px; overflow: hidden;">
            <div style="height: 100%; width: ${pct}%; background: ${pct >= 75 ? 'var(--status-success)' : pct >= 50 ? 'var(--accent-gold)' : 'var(--status-danger)'}; border-radius: 999px;"></div>
          </div>
        `;
        chartContainer.appendChild(row);
      }
    }

    // Render Pembahasan & Evaluasi Soal
    const wrongContainer = document.getElementById('result-wrong-list');
    if (wrongContainer) {
      wrongContainer.innerHTML = '';
      
      const isPaketC = session.package === 'UTS Pemrograman Mobile C';
      // Untuk paket C, tampilkan soal PG yang salah serta seluruh soal Esai agar mahasiswa bisa mereview pembahasan lengkapnya
      const reviewList = session.questions.filter(q => {
        if (q.tipe === 'esai') return true;
        return q.userAnswer !== q.correct;
      });

      if (reviewList.length === 0) {
        wrongContainer.innerHTML = '<div class="p-4 text-center text-success"><i class="fa-solid fa-trophy text-3xl mb-2"></i><br/>Luar Biasa! Seluruh butir soal berhasil Anda jawab dengan sempurna!</div>';
      } else {
        reviewList.forEach((q, idx) => {
          const item = document.createElement('div');
          item.className = 'p-3 rounded-xl mb-3';
          item.style.backgroundColor = 'var(--bg-secondary)';
          item.style.border = '1px solid var(--border-color)';
          
          if (q.tipe === 'esai') {
            const hasAnswered = !!q.userAnswerText;
            item.innerHTML = `
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem;">
                <span class="badge-primary">Soal Esai (No. ${q.nomor || idx + 1})</span>
                <span class="${hasAnswered ? 'text-success' : 'text-danger'}" style="font-size: 0.8rem; font-weight: 600;">
                  ${hasAnswered ? '<i class="fa-solid fa-check"></i> Terjawab' : '<i class="fa-solid fa-xmark"></i> Belum dijawab'}
                </span>
              </div>
              <div style="font-weight: 700; font-size: 0.95rem; margin-bottom: 0.5rem; color: var(--text-primary);">
                ${formatCodeSnippets(q.pertanyaan)}
              </div>
              ${hasAnswered ? `
                <div class="p-2 rounded mb-2 text-xs" style="background: var(--bg-card); color: var(--text-primary); border-left: 3px solid var(--primary-color);">
                  <strong>Jawaban Anda:</strong> ${formatCodeSnippets(q.userAnswerText)}
                </div>
              ` : ''}
              <div class="p-2 rounded mb-2 text-xs" style="background: var(--bg-card); color: var(--text-primary); border-left: 3px solid var(--status-success);">
                <strong>Kunci Jawaban Acuan:</strong> ${formatCodeSnippets(q.kunciJawaban || '')}
              </div>
              <div class="p-2 rounded text-xs" style="background: var(--bg-card); color: var(--text-secondary); border-left: 3px solid var(--accent-gold);">
                <strong>Pembahasan:</strong> ${formatCodeSnippets(q.pembahasan)}
              </div>
            `;
          } else {
            const userChoiceChar = q.userAnswer !== null ? String.fromCharCode(65 + q.userAnswer) : 'Tidak dijawab';
            const correctChar = String.fromCharCode(65 + q.correct);

            item.innerHTML = `
              <div style="font-weight: 700; font-size: 0.95rem; margin-bottom: 0.5rem; color: var(--text-primary);">
                ${idx + 1}. ${formatCodeSnippets(q.pertanyaan)}
              </div>
              <div style="font-size: 0.85rem; margin-bottom: 0.4rem;">
                <span class="badge-danger mr-2">Jawaban Anda: ${userChoiceChar}</span>
                <span class="badge-success">Kunci Benar: ${correctChar}</span>
              </div>
              <div class="p-2 rounded mt-2 text-xs" style="background: var(--bg-card); color: var(--text-secondary); border-left: 3px solid var(--accent-gold);">
                <strong>Pembahasan:</strong> ${q.pembahasan}
              </div>
            `;
          }
          wrongContainer.appendChild(item);
        });
      }
    }
  }

  // Efek Perayaan Confetti (Kembang Api Partikel Halus)
  function triggerConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const colors = ['#2563eb', '#38bdf8', '#f59e0b', '#10b981', '#ec4899', '#ffffff'];

    for (let i = 0; i < 120; i++) {
      particles.push({
        x: canvas.width / 2,
        y: canvas.height / 2,
        vx: (Math.random() - 0.5) * 16,
        vy: (Math.random() - 0.7) * 18,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        vr: Math.random() * 10 - 5,
        opacity: 1
      });
    }

    let frame = 0;
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.35; // gravitasi
        p.rotation += p.vr;
        p.opacity -= 0.008;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, p.opacity);
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
      });

      frame++;
      if (frame < 120) {
        requestAnimationFrame(animate);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }
    requestAnimationFrame(animate);
  }

  // ==================== FITUR 4: PERSISTENSI & DIALOG RESUME ====================
  function checkUnfinishedSession() {
    const session = getStorage(STORAGE_KEYS.SESSION, null);
    if (session && !session.isFinished) {
      const modal = document.getElementById('modal-resume-session');
      if (modal) {
        modal.style.display = 'flex';
        const modalText = document.getElementById('modal-resume-desc');
        if (modalText) {
          modalText.innerText = `Ditemukan sesi simulasi yang belum selesai pada Soal ${session.currentIndex + 1} dari ${session.questions.length}. Apakah Anda ingin melanjutkan?`;
        }
      }
    }
  }

  function resumeQuizSession() {
    const session = getStorage(STORAGE_KEYS.SESSION, null);
    if (session) {
      App.quizSession = session;
      closeResumeModal();
      switchView('simulasi');
      showQuizActiveCard();
      renderCurrentQuestion();
      if (session.isTimerActive) startQuizTimer();
    }
  }

  function discardSessionAndStartNew() {
    localStorage.removeItem(STORAGE_KEYS.SESSION);
    App.quizSession = null;
    closeResumeModal();
    switchView('simulasi');
    document.getElementById('simulasi-menu-card')?.classList.remove('hidden');
    document.getElementById('simulasi-active-card')?.classList.add('hidden');
    document.getElementById('simulasi-result-card')?.classList.add('hidden');
  }

  function closeResumeModal() {
    const modal = document.getElementById('modal-resume-session');
    if (modal) modal.style.display = 'none';
  }

  // ==================== FITUR 5: PENGATURAN & RESET ====================
  function renderSettings() {
    const chkBankLama = document.getElementById('setting-bank-lama');
    if (chkBankLama) chkBankLama.checked = App.settings.includeBankLama;

    const selTimer = document.getElementById('setting-timer-select');
    if (selTimer) selTimer.value = App.settings.timerPerQuestion;

    const selTheme = document.getElementById('setting-theme-select');
    if (selTheme) selTheme.value = App.settings.theme;

    // Render Riwayat di Pengaturan
    const historyListContainer = document.getElementById('settings-history-list');
    if (historyListContainer) {
      historyListContainer.innerHTML = '';
      if (App.history.length === 0) {
        historyListContainer.innerHTML = '<p class="text-sm text-muted">Belum ada riwayat simulasi yang tercatat.</p>';
      } else {
        App.history.forEach(h => {
          const item = document.createElement('div');
          item.className = 'p-3 rounded-lg mb-2 flex items-center justify-between text-sm';
          item.style.backgroundColor = 'var(--bg-secondary)';
          item.style.border = '1px solid var(--border-color)';
          item.innerHTML = `
            <div>
              <strong>Skor ${h.score}</strong> (${h.correct}/${h.total} Benar)
              <div class="text-xs text-muted">${h.date} • Durasi: ${Math.floor(h.duration / 60)}m ${h.duration % 60}s</div>
            </div>
            <div>
              <span class="${h.score >= 80 ? 'badge-success' : h.score >= 60 ? 'badge-warning' : 'badge-danger'}">${h.score >= 80 ? 'A (Sangat Baik)' : h.score >= 60 ? 'B (Cukup)' : 'Perlu Belajar'}</span>
            </div>
          `;
          historyListContainer.appendChild(item);
        });
      }
    }
  }

  function resetAllData() {
    if (confirm('PERINGATAN: Apakah Anda yakin ingin mereset seluruh progres belajar, riwayat kuis, dan statistik soal? Tindakan ini tidak dapat dibatalkan.')) {
      localStorage.clear();
      location.reload();
    }
  }

  // ==================== KEYBOARD ACCESSIBILITY ====================
  function handleKeyboardShortcuts(e) {
    const session = App.quizSession;
    const simulasiActive = document.getElementById('simulasi-active-card');
    if (!session || !simulasiActive || simulasiActive.classList.contains('hidden')) return;

    const key = e.key.toUpperCase();

    // Tombol A, B, C, D, E atau 1, 2, 3, 4, 5
    if (['A', 'B', 'C', 'D', 'E'].includes(key)) {
      const idx = key.charCodeAt(0) - 65;
      selectQuizAnswer(idx);
    } else if (['1', '2', '3', '4', '5'].includes(key)) {
      const idx = parseInt(key, 10) - 1;
      selectQuizAnswer(idx);
    } else if (key === 'ENTER') {
      navigateQuiz(1);
    } else if (key === 'ARROWLEFT') {
      navigateQuiz(-1);
    } else if (key === 'ARROWRIGHT') {
      navigateQuiz(1);
    }
  }

  // ==================== EXPOSE GLOBAL FUNCTIONS ====================
  window.App = {
    init: function () {
      validateData();
      applyTheme(App.settings.theme);
      applyFontSize(App.settings.fontSize);

      // Event listener tombol navigasi
      document.querySelectorAll('[data-nav-target]').forEach(btn => {
        btn.addEventListener('click', () => {
          const target = btn.getAttribute('data-nav-target');
          switchView(target);
        });
      });

      // Search materi listener
      const searchInput = document.getElementById('materi-search-input');
      if (searchInput) {
        searchInput.addEventListener('input', (e) => {
          renderMateriTOC(e.target.value);
        });
      }

      // Keyboard navigation
      window.addEventListener('keydown', handleKeyboardShortcuts);

      // Scroll listener for floating Back-To-Top button
      window.addEventListener('scroll', () => {
        const btnTop = document.getElementById('btn-back-to-top');
        if (btnTop) {
          if (window.scrollY > 400) {
            btnTop.classList.add('show');
          } else {
            btnTop.classList.remove('show');
          }
        }
      });

      // Cek sesi belum selesai
      checkUnfinishedSession();

      // Buka halaman terakhir atau default ke beranda
      const last = getStorage(STORAGE_KEYS.LAST_VISIT, 'beranda');
      switchView(last);
    },
    toggleTheme: toggleTheme,
    adjustFontSize: function (delta) {
      const current = App.settings.fontSize;
      const next = Math.max(13, Math.min(22, current + delta));
      applyFontSize(next);
    },
    navigateMateriWeek: function (weekNum) {
      if (weekNum >= 1 && weekNum <= 7) {
        App.activeWeek = weekNum;
        renderMateriTOC();
        renderMateriContent(weekNum);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
    toggleCompleteWeek: toggleCompleteWeek,
    toggleSprintCheck: toggleSprintCheck,
    checkMiniQuiz: checkMiniQuiz,
    startPracticeWeek: function (weekNum) {
      startSimulation('week_practice', weekNum);
    },
    startSimulation: startSimulation,
    startSimulationC: startSimulationC,
    saveEssayAnswer: saveEssayAnswer,
    selectQuizAnswer: selectQuizAnswer,
    toggleCurrentBookmark: toggleCurrentBookmark,
    navigateQuiz: navigateQuiz,
    jumpToQuestion: jumpToQuestion,
    resumeQuizSession: resumeQuizSession,
    discardSessionAndStartNew: discardSessionAndStartNew,
    closeResumeModal: closeResumeModal,
    updateSetting: function (key, value) {
      App.settings[key] = value;
      setStorage(STORAGE_KEYS.SETTINGS, App.settings);
      if (key === 'theme') applyTheme(value);
    },
    resetAllData: resetAllData,
    scrollToTop: function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Helper fungsi global untuk tombol Salin Kode
  window.copyCode = function (btn) {
    const pre = btn.closest('.code-block-wrapper').querySelector('pre code');
    if (pre) {
      navigator.clipboard.writeText(pre.innerText).then(() => {
        const originalHtml = btn.innerHTML;
        btn.innerHTML = '<i class="fa-solid fa-check text-success"></i> Tersalin!';
        setTimeout(() => { btn.innerHTML = originalHtml; }, 2000);
      });
    }
  };

  // Jalankan saat DOM siap
  document.addEventListener('DOMContentLoaded', window.App.init);
})();

