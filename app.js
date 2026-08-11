// C:\Users\AURORANIK\.gemini\antigravity\scratch\saju-learning-app\app.js

document.addEventListener("DOMContentLoaded", () => {
  // ==========================================================================
  // 1. Application State & Storage
  // ==========================================================================
  const state = {
    currentChapter: "intro", // "intro", "chap1" ... "chap13", "final"
    currentTab: "theory",   // "theory", "summary", "quiz"
    progress: {},           // { chap1: true, chap2: false, ... }
    theme: "dark",          // "dark" | "light"
    quizScores: {},         // { chap1: { score: 1, total: 2 }, ... }
    finalQuiz: {
      active: false,
      answers: Array(25).fill(null), // User selections
      currentIndex: 0
    }
  };

  // Load state from localStorage
  function loadState() {
    const saved = localStorage.getItem("saju_learning_progress");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        state.progress = parsed.progress || {};
        state.quizScores = parsed.quizScores || {};
      } catch (e) {
        console.error("Failed to parse progress state:", e);
      }
    }
    
    // Load theme preference
    const savedTheme = localStorage.getItem("saju_learning_theme") || "dark";
    state.theme = savedTheme;
    document.documentElement.setAttribute("data-theme", savedTheme);
    const themeBtn = document.getElementById("theme-toggle");
    if (themeBtn) {
      themeBtn.innerHTML = savedTheme === "dark" ? "☀️" : "🌙";
    }
  }

  // Save state to localStorage
  function saveState() {
    localStorage.setItem("saju_learning_progress", JSON.stringify({
      progress: state.progress,
      quizScores: state.quizScores
    }));
  }

  // ==========================================================================
  // 2. DOM Elements Selection
  // ==========================================================================
  const DOM = {
    navList: document.getElementById("nav-list"),
    chapterTitle: document.getElementById("chapter-title"),
    chapterSubtitle: document.getElementById("chapter-subtitle"),
    chapterTabs: document.getElementById("chapter-tabs"),
    tabContentTheory: document.getElementById("content-theory"),
    tabContentSummary: document.getElementById("content-summary"),
    tabContentQuiz: document.getElementById("content-quiz"),
    contentFinal: document.getElementById("content-final"),
    theoryRenderer: document.getElementById("theory-renderer"),
    summaryRenderer: document.getElementById("summary-renderer"),
    widgetContainer: document.getElementById("widget-container"),
    widgetBaqua: document.getElementById("widget-baqua"),
    widgetDrawing: document.getElementById("widget-drawing"),
    widgetFiveElements: document.getElementById("widget-five-elements"),
    footer: document.getElementById("content-footer"),
    btnPrevSection: document.getElementById("btn-prev-section"),
    btnNextStep: document.getElementById("btn-next-step"),
    
    // Progress Indicators
    progressPercentage: document.getElementById("progress-percentage"),
    overallProgressBar: document.getElementById("overall-progress-bar"),
    completedChaptersCount: document.getElementById("completed-chapters-count"),
    
    // Drawing widget elements
    paintCanvas: document.getElementById("paint-canvas"),
    canvasBgText: document.getElementById("canvas-bg-text"),
    btnClearCanvas: document.getElementById("btn-clear-canvas"),
    btnShowStrokeGuide: document.getElementById("btn-show-stroke-guide"),
    selectedKanjiTitle: document.getElementById("selected-kanji-title"),
    selectedKanjiStrokeCount: document.getElementById("selected-kanji-stroke-count"),
    strokeStepsList: document.getElementById("stroke-steps-list"),
    chunGhanButtons: document.getElementById("천간-buttons"),
    jiJiButtons: document.getElementById("지지-buttons"),

    // Final evaluator elements
    finalIntroCard: document.getElementById("final-intro-card"),
    btnStartFinal: document.getElementById("btn-start-final"),
    finalPlayArea: document.getElementById("final-play-area"),
    finalQuestionText: document.getElementById("final-question-text"),
    finalOptionsContainer: document.getElementById("final-options-container"),
    finalCurrentIndex: document.getElementById("final-current-index"),
    finalQuizProgress: document.getElementById("final-quiz-progress"),
    btnFinalPrev: document.getElementById("btn-final-prev"),
    btnFinalNext: document.getElementById("btn-final-next"),
    finalResultCard: document.getElementById("final-result-card"),
    resultScore: document.getElementById("result-score"),
    resultAccuracy: document.getElementById("result-accuracy"),
    resultGrade: document.getElementById("result-grade"),
    resultEmoji: document.getElementById("result-emoji"),
    resultMessage: document.getElementById("result-message"),
    btnRetryFinal: document.getElementById("btn-retry-final"),
    btnShowSolutions: document.getElementById("btn-show-solutions"),
    finalSolutionsPanel: document.getElementById("final-solutions-panel"),
    btnCloseSolutions: document.getElementById("btn-close-solutions"),
    solutionsListTarget: document.getElementById("solutions-list-target"),
    baquaDetailBox: document.getElementById("baqua-detail-box"),
    fiveElementsDetailBox: document.getElementById("five-elements-detail-box"),
    btnPrint: document.getElementById("btn-print")
  };

  const navItemsList = Array.from(DOM.navList.querySelectorAll(".nav-item"));

  // ==========================================================================
  // 3. Drawing Canvas Canvas Tracing Engine
  // ==========================================================================
  let isDrawing = false;
  let ctx = DOM.paintCanvas.getContext("2d");

  function initCanvas() {
    ctx.strokeStyle = state.theme === "dark" ? "#00e5ff" : "#0284c7";
    ctx.lineWidth = 6;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    // Mouse Events
    DOM.paintCanvas.addEventListener("mousedown", startDrawing);
    DOM.paintCanvas.addEventListener("mousemove", draw);
    DOM.paintCanvas.addEventListener("mouseup", stopDrawing);
    DOM.paintCanvas.addEventListener("mouseleave", stopDrawing);

    // Touch Events
    DOM.paintCanvas.addEventListener("touchstart", (e) => {
      e.preventDefault();
      const touch = e.touches[0];
      const rect = DOM.paintCanvas.getBoundingClientRect();
      ctx.beginPath();
      ctx.moveTo(touch.clientX - rect.left, touch.clientY - rect.top);
      isDrawing = true;
    });

    DOM.paintCanvas.addEventListener("touchmove", (e) => {
      e.preventDefault();
      if (!isDrawing) return;
      const touch = e.touches[0];
      const rect = DOM.paintCanvas.getBoundingClientRect();
      ctx.lineTo(touch.clientX - rect.left, touch.clientY - rect.top);
      ctx.stroke();
    });

    DOM.paintCanvas.addEventListener("touchend", stopDrawing);
  }

  function startDrawing(e) {
    isDrawing = true;
    const rect = DOM.paintCanvas.getBoundingClientRect();
    ctx.beginPath();
    ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
  }

  function draw(e) {
    if (!isDrawing) return;
    const rect = DOM.paintCanvas.getBoundingClientRect();
    ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
    ctx.stroke();
  }

  function stopDrawing() {
    isDrawing = false;
  }

  function clearCanvas() {
    ctx.clearRect(0, 0, DOM.paintCanvas.width, DOM.paintCanvas.height);
  }

  DOM.btnClearCanvas.addEventListener("click", clearCanvas);

  // ==========================================================================
  // 4. Hanja Stroke Database & UI Loader
  // ==========================================================================
  const hanjaDatabase = {
    // 천간
    "甲": { name: "甲 (갑목·양목)", strokes: 5, steps: ["왼쪽 세로획을 위에서 아래로 곧게 내리긋습니다.", "맨 위 가로획에서 붓을 떼지 않고 우측 세로획으로 꺾어 내립니다 (ㄱ모양).", "중앙 내부 가로획을 왼쪽에서 오른쪽으로 긋습니다.", "아래 가로획을 그어 몸통 네모(口)를 닫아줍니다.", "가운데 중심을 관통해 아래로 길게 내려꽂는 세로획을 가장 마지막에 내리긋습니다."] },
    "乙": { name: "乙 (을목·음목)", strokes: 1, steps: ["왼쪽 위에서 가로로 가다가 떼지 않고 왼쪽 아래 사선으로 부드럽게 꺾은 후, 다시 오른쪽으로 바닥을 굴려 마지막에 위로 갈고리를 삐쳐 올립니다."] },
    "丙": { name: "丙 (병화·양화)", strokes: 5, steps: ["맨 위의 가로지르는 긴 가로획을 왼쪽에서 오른쪽으로 긋습니다.", "왼쪽 세로 변의 짧은 세로획을 내립니다.", "오른쪽 세로 변을 향해 가로지르다 아래로 꺾어 내린 뒤 안쪽으로 짧은 갈고리를 줍니다.", "안쪽 왼쪽에 위치한 삐침을 대각선 왼쪽 아래로 내립니다.", "안쪽 오른쪽에 파임을 대각선 오른쪽 아래로 부드럽게 뻗어줍니다."] },
    "丁": { name: "丁 (정화·음화)", strokes: 2, steps: ["맨 위 가로획을 왼쪽에서 오른쪽으로 길게 긋습니다.", "가로획의 중심에서 세로로 곧게 내리다가 끝에서 왼쪽 위 방향으로 갈고리를 만듭니다."] },
    "戊": { name: "戊 (무토·양토)", strokes: 5, steps: ["왼쪽의 짧은 가로획을 오른쪽 위로 살짝 비스듬히 긋습니다.", "그 아래로 세로획을 내리다가 오른쪽으로 살짝 꺾어 줍니다.", "맨 위에서 시작하여 오른쪽 아래로 크게 휘는 곡선(창 과 모양)을 내린 후 위로 갈고리를 줍니다.", "왼쪽 아래에서 오른쪽 위를 향해 대각선 삐침을 긋습니다.", "오른쪽 위에 점(•)을 찍어 마무리합니다."] },
    "己": { name: "己 (기토·음토)", strokes: 3, steps: ["맨 위 가로획을 긋다 아래로 꺾고 다시 왼쪽으로 짧게 꺾어 들여옵니다 (ㄷ을 엎어놓은 모양).", "중간 가로획을 왼쪽에서 오른쪽으로 긋습니다.", "왼쪽 세로에서 아래로 내리다가 오른쪽으로 꺾어 마지막에 위로 갈고리를 올립니다 (ㄴ모양)."] },
    "庚": { name: "庚 (경금·양금)", strokes: 8, steps: ["맨 위에 점을 찍거나 짧은 가로획을 긋습니다.", "그 아래로 길게 가로획을 긋습니다.", "왼쪽 위에서 대각선 왼쪽 아래로 길게 삐쳐 내립니다 (엄호 广 완성).", "안쪽 윗부분 가로획을 왼쪽에서 오른쪽으로 긋습니다.", "안쪽 왼쪽 세로획을 내립니다.", "안쪽 가로획을 긋다가 오른쪽 세로획으로 꺾어 내립니다.", "내부 중심의 가로획을 긋습니다.", "가장 아래 가로획을 넓게 그어 닫아줍니다."] },
    "辛": { name: "辛 (신금·음금)", strokes: 7, steps: ["맨 위에 점을 찍습니다.", "그 아래로 가로획을 길게 긋습니다.", "왼쪽 위에 짧은 사선 삐침을 내립니다.", "오른쪽 위에 짧은 사선 파임을 내립니다 (설 립 立 완성).", "중간 크기의 가로획을 긋습니다.", "그 아래에 가장 긴 가로획을 긋습니다.", "중심을 관통하는 세로 기둥을 곧고 길게 내리긋습니다 (갈고리 없음)."] },
    "壬": { name: "壬 (임수·양수)", strokes: 3, steps: ["맨 위의 가로획을 왼쪽에서 오른쪽으로 긋습니다. (살짝 삐침 형태로 쓰기도 합니다.)", "중간의 가로획을 조금 더 짧게 긋습니다.", "위의 두 가로획의 중심을 연결해 세로로 긋고, 마지막 바닥의 가장 긴 가로획을 그어 완성합니다."] },
    "癸": { name: "癸 (계수·음수)", strokes: 9, steps: ["왼쪽 위에서 대각선 왼쪽 아래로 삐쳐 내립니다.", "오른쪽 위로 가다가 아래로 꺾어 파해 내립니다 (필발 癶머리 완성).", "왼쪽 아래에 짧은 삐침 점을 씁니다.", "오른쪽 아래에 짧은 대각선 점을 씁니다.", "아래의 첫 가로획을 긋습니다.", "그 아래 조금 더 긴 가로획을 긋습니다.", "가로획 중심에서 왼쪽 아래로 삐쳐 내립니다.", "오른쪽 아래로 부드럽게 파해 줍니다.", "마지막으로 정중앙을 관통하는 수직 세로 기둥을 위에서 아래로 곧게 내리긋습니다."] },
    
    // 지지
    "子": { name: "子 (자수·음수)", strokes: 3, steps: ["위쪽 가로획을 긋다가 꺾어서 대각선 왼쪽 아래로 내립니다.", "중앙을 뚫고 내려와 마지막에 왼쪽 위로 갈고리를 줍니다.", "가로지르는 가로획을 왼쪽에서 오른쪽으로 긋습니다."] },
    "丑": { name: "丑 (축토·음토)", strokes: 4, steps: ["맨 위 가로획을 시작해 오른쪽 아래로 꺾어 내립니다.", "왼쪽 세로 변을 내립니다.", "중앙을 가로지르는 짧은 가로획을 긋습니다.", "맨 아래를 받치는 긴 가로획을 그어 네모를 완성합니다."] },
    "寅": { name: "寅 (인목·양목)", strokes: 11, steps: ["머리 위 점을 찍습니다.", "갓머리 왼쪽 점을 내립니다.", "갓머리 오른쪽 가로 꺾는 획을 그어 갓머리(宀)를 완성합니다.", "중앙 가로 일(一) 획을 긋습니다.", "내부 왼쪽 세로획을 긋습니다.", "내부 오른쪽 가로 꺾는 획을 씁니다.", "내부 가로획을 긋습니다.", "내부 바닥 닫는 가로획을 씁니다.", "아래 긴 가로획을 긋습니다.", "왼쪽 아래로 길게 삐쳐 내립니다.", "오른쪽 아래로 파해 줍니다."] },
    "卯": { name: "卯 (묘목·음목)", strokes: 5, steps: ["왼쪽 위에서 삐쳐 내립니다.", "왼쪽 세로획을 긋습니다.", "왼쪽 아래 가로로 구부러져 올라가는 획을 씁니다.", "오른쪽 위 꺾쇠 세로를 긋고 꺾어 내립니다.", "오른쪽 갈고리 세로 기둥을 내려 꺾어 올립니다."] },
    "辰": { name: "辰 (진토·양토)", strokes: 7, steps: ["맨 위의 가로획을 긋습니다.", "왼쪽 위에서 아래로 길게 삐쳐 내립니다.", "내부 첫 번째 가로획을 긋습니다.", "내부 세로획을 씁니다.", "내부 가로 꺾어 내리는 획을 씁니다.", "내부의 가로지르는 가로획을 씁니다.", "오른쪽 아래로 길게 뻗는 파임 획을 그어 완성합니다."] },
    "巳": { name: "巳 (사화·음화)", strokes: 3, steps: ["왼쪽에서 시작해 위를 거쳐 오른쪽 아래로 꺾어 내리는 몸통 획을 긋습니다.", "몸통 중앙의 가로획을 긋습니다.", "왼쪽 세로 아래에서 시작해 오른쪽으로 꺾어 완성합니다 (ㄴ모양)."] },
    "午": { name: "午 (오화·양화)", strokes: 4, steps: ["왼쪽 위에서 비스듬히 삐쳐 내립니다.", "상단의 가로획을 긋습니다.", "하단의 긴 가로획을 긋습니다.", "중앙을 내려뚫는 세로 기둥을 긋습니다 (갈고리 없음)."] },
    "未": { name: "未 (미토·음토)", strokes: 5, steps: ["위의 짧은 가로획을 긋습니다.", "아래의 긴 가로획을 긋습니다.", "중앙 세로 기둥을 곧게 내립니다.", "왼쪽 삐침 획을 긋습니다.", "오른쪽 파임 획을 긋습니다."] },
    "申": { name: "申 (신금·양금)", strokes: 5, steps: ["밭 전(田) 자 형태의 외곽 왼쪽 세로를 내립니다.", "윗 가로획에서 오른쪽 세로로 꺾어 내립니다.", "가운데 가로획을 긋습니다.", "아래 가로지르는 획으로 닫아줍니다.", "가운데를 길게 뚫고 내려오는 세로 기둥을 가장 마지막에 내리긋습니다."] },
    "酉": { name: "酉 (유금·음금)", strokes: 7, steps: ["맨 위의 가로획을 긋습니다.", "몸통 왼쪽 세로와 오른쪽 꺾어 내리는 외곽 틀을 잡습니다.", "내부의 꺾이는 기운 획을 채웁니다.", "내부 다른 세로획을 씁니다.", "내부 가로획을 씁니다.", "내부 바닥을 닫기 전 가로를 긋습니다.", "가장 아래 가로획으로 닫아 완성합니다."] },
    "戌": { name: "戌 (술토·양토)", strokes: 6, steps: ["상단의 가로획을 긋습니다.", "왼쪽 세로 삐침 획을 긋습니다.", "중앙 내부의 가로획을 긋습니다.", "오른쪽 위에서 아래로 비스듬하게 내리꽂아 위로 갈고리를 주는 큰 획을 씁니다.", "내부 왼쪽 아래에 삐침을 긋습니다.", "오른쪽 상단 외곽에 점(•)을 찍어 마무리합니다."] },
    "亥": { name: "亥 (해수·양수)", strokes: 6, steps: ["머리 위 점을 찍습니다.", "가로지르는 가로획을 씁니다.", "왼쪽 아래로 꺾어져 삐치는 획을 씁니다.", "자형 중앙을 관통하며 둥글게 내려오는 삐침을 씁니다.", "오른쪽 안쪽 점을 찍습니다.", "오른쪽 바깥쪽 점을 찍어 완성합니다."] }
  };

  let activeKanji = "甲";

  function renderKanjiSelectors() {
    DOM.chunGhanButtons.innerHTML = "";
    DOM.jiJiButtons.innerHTML = "";

    const chunGhan = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];
    const jiJi = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];

    chunGhan.forEach(char => {
      const btn = document.createElement("button");
      btn.className = `char-btn ${char === activeKanji ? 'active' : ''}`;
      btn.textContent = char;
      btn.addEventListener("click", () => selectKanji(char));
      DOM.chunGhanButtons.appendChild(btn);
    });

    jiJi.forEach(char => {
      const btn = document.createElement("button");
      btn.className = `char-btn ${char === activeKanji ? 'active' : ''}`;
      btn.textContent = char;
      btn.addEventListener("click", () => selectKanji(char));
      DOM.jiJiButtons.appendChild(btn);
    });
  }

  function selectKanji(char) {
    activeKanji = char;
    clearCanvas();
    DOM.canvasBgText.textContent = char;
    
    // Update active button states
    const btns = DOM.widgetDrawing.querySelectorAll(".char-btn");
    btns.forEach(btn => {
      if (btn.textContent === char) btn.classList.add("active");
      else btn.classList.remove("active");
    });

    // Update details
    const data = hanjaDatabase[char];
    if (data) {
      DOM.selectedKanjiTitle.textContent = data.name;
      DOM.selectedKanjiStrokeCount.textContent = `총 ${data.strokes}획`;
      DOM.strokeStepsList.innerHTML = "";
      data.steps.forEach(step => {
        const li = document.createElement("li");
        li.textContent = step;
        DOM.strokeStepsList.appendChild(li);
      });
    }
  }

  // Animate drawing guide logic (Simulated here via alert or overlay guide)
  DOM.btnShowStrokeGuide.addEventListener("click", () => {
    clearCanvas();
    const steps = hanjaDatabase[activeKanji].steps;
    alert(`[${activeKanji}] 획순 쓰는 법 요약:\n\n` + steps.map((s, idx) => `${idx + 1}. ${s}`).join("\n"));
  });

  // ==========================================================================
  // 5. Interactive SVG Generators (Baqua & Five Elements)
  // ==========================================================================
  
  // A. Post-Heaven Baqua (후천팔괘) Diagram
  function renderBaquaSVG() {
    const target = document.getElementById("baqua-svg-target");
    if (!target) return;

    // Post-Heaven Baqua data mapping
    const sectors = [
      { id: "离", name: "리 (離)", hanja: "離", text: "불 (火)", dir: "정남 (正南)", support: "오 (午)", desc: "여름의 한가운데, 만천하가 밝고 문명이 고도로 발달하는 극양(極陽)의 시기", angle: -90, color: "var(--color-fire-light)" },
      { id: "坤", name: "곤 (坤)", hanja: "坤", text: "땅 (地)", dir: "남서 (南西)", support: "미·신 (未·申)", desc: "늦여름에서 초가을로 접어들어 결실을 맺고 만물을 어머니처럼 품는 터전", angle: -45, color: "var(--color-earth-light)" },
      { id: "兑", name: "태 (兌)", hanja: "兌", text: "연못 (澤)", dir: "정서 (正西)", support: "유 (酉)", desc: "가을의 한가운데, 곡식과 과일의 단단한 수확을 마친 후 기쁨과 평화가 감도는 수렴", angle: 0, color: "var(--color-metal-light)" },
      { id: "乾", name: "건 (乾)", hanja: "乾", text: "하늘 (天)", dir: "북서 (北西)", support: "술·해 (戌·亥)", desc: "늦가을에서 초겨울, 모든 기운을 갈무리하여 창고에 보관하고 정신을 다스림", angle: 45, color: "var(--color-metal-light)" },
      { id: "坎", name: "감 (坎)", hanja: "坎", text: "물 (水)", dir: "정북 (正北)", support: "자 (子)", desc: "겨울의 한가운데, 모든 외형적 성장이 멈춘 칠흑 같은 밤 속에서 새로운 기운을 응축", angle: 90, color: "var(--color-water-light)" },
      { id: "艮", name: "간 (艮)", hanja: "艮", text: "산 (山)", dir: "북동 (北東)", support: "축·인 (丑·寅)", desc: "늦겨울에서 초봄, 하루의 새벽이자 새벽을 밝혀 길을 열어주는 전환점", angle: 135, color: "var(--color-earth-light)" },
      { id: "震", name: "진 (震)", hanja: "震", text: "우레 (雷)", dir: "정동 (正東)", support: "묘 (卯)", desc: "봄의 한가운데, 대지를 뚫고 솟구쳐 나와 번갯불처럼 힘차게 도약하는 봄의 새싹", angle: 180, color: "var(--color-wood-light)" },
      { id: "巽", name: "손 (巽)", hanja: "巽", text: "바람 (風)", dir: "동남 (東南)", support: "진·사 (辰·巳)", desc: "늦봄에서 초여름, 부드러운 바람처럼 사방으로 기운을 펼치고 뻗는 넝쿨", angle: 225, color: "var(--color-wood-light)" }
    ];

    let svgHTML = `
      <svg width="340" height="340" viewBox="0 0 340 340">
        <!-- Background rings -->
        <circle cx="170" cy="170" r="150" fill="none" stroke="var(--border-glass)" stroke-width="2"/>
        <circle cx="170" cy="170" r="100" fill="none" stroke="var(--border-glass)" stroke-width="1"/>
        
        <!-- Yin-Yang center symbol -->
        <g transform="translate(170, 170) rotate(90)" style="cursor:pointer;" id="center-yinyang">
          <path d="M 0,-40 A 40,40 0 0,0 0,40 A 20,20 0 0,0 0,0 A 20,20 0 0,1 0,-40" fill="#000"/>
          <path d="M 0,-40 A 40,40 0 0,1 0,40 A 20,20 0 0,0 0,0 A 20,20 0 0,1 0,-40" fill="#fff"/>
          <circle cx="0" cy="-20" r="6" fill="#fff"/>
          <circle cx="0" cy="20" r="6" fill="#000"/>
          <circle cx="0" cy="0" r="40" fill="none" stroke="var(--border-glow)" stroke-width="2"/>
        </g>
    `;

    sectors.forEach(sec => {
      const rad = (sec.angle * Math.PI) / 180;
      const x = 170 + 120 * Math.cos(rad);
      const y = 170 + 120 * Math.sin(rad);
      
      svgHTML += `
        <g class="baqua-node" data-id="${sec.id}" transform="translate(${x}, ${y})" style="cursor:pointer;">
          <circle cx="0" cy="0" r="26" fill="var(--bg-secondary)" stroke="var(--border-glass)" stroke-width="2" class="node-circle"/>
          <text x="0" y="4" font-size="14" font-weight="700" text-anchor="middle" fill="${sec.color}">${sec.hanja}</text>
          <text x="0" y="-30" font-size="9" text-anchor="middle" fill="var(--text-muted)">${sec.id}</text>
        </g>
      `;
    });

    svgHTML += `</svg>`;
    target.innerHTML = svgHTML;

    // Attach click events
    const nodes = target.querySelectorAll(".baqua-node");
    nodes.forEach(node => {
      node.addEventListener("click", () => {
        // Highlight active node
        nodes.forEach(n => n.querySelector(".node-circle").setAttribute("stroke", "var(--border-glass)"));
        node.querySelector(".node-circle").setAttribute("stroke", "var(--accent-color)");

        const id = node.getAttribute("data-id");
        const sec = sectors.find(s => s.id === id);
        if (sec) {
          DOM.baquaDetailBox.innerHTML = `
            <h4>${sec.name} <span style="font-size:14px;color:var(--text-secondary)">(${sec.hanja})</span></h4>
            <div class="data-row"><span class="data-label">상징 자연</span><span>${sec.id === "离" ? "불 (火)" : sec.id === "坎" ? "물 (水)" : sec.id === "震" ? "우레 (雷)" : sec.id === "巽" ? "바람 (風)" : sec.id === "乾" ? "하늘 (天)" : sec.id === "坤" ? "땅 (地)" : sec.id === "兑" ? "연못 (澤)" : "산 (山)"}</span></div>
            <div class="data-row"><span class="data-label">배정 방위</span><span>${sec.dir}</span></div>
            <div class="data-row"><span class="data-label">결합 지지</span><span style="color: ${sec.color}">${sec.support}</span></div>
            <p style="margin-top:12px; font-size:13px; line-height:1.5;">${sec.desc}</p>
          `;
        }
      });
    });

    // Center Yin-Yang click
    document.getElementById("center-yinyang").addEventListener("click", () => {
      DOM.baquaDetailBox.innerHTML = `
        <h4>태극 및 음양 (太極·陰陽)</h4>
        <p style="font-size:13px; line-height:1.5;">대자연의 우주와 만물이 운행하기 전의 궁극적인 상태를 태극이라 하며, 태극에서 음(검은색)과 양(흰색)의 두 세력이 분화됩니다. 음양은 상반된 성질이지만 끊임없이 순환하고 서로를 매개하여 오행을 낳습니다.</p>
      `;
    });
  }

  // B. Five Elements (오행) Generating/Controlling Diagram
  function renderFiveElementsSVG() {
    const target = document.getElementById("five-elements-svg-target");
    if (!target) return;

    const elements = [
      { id: "wood", name: "木 (목)", color: "var(--color-wood-light)", x: 170, y: 50, desc: "봄의 생명력, 새싹이 땅을 뚫고 힘차게 도약하는 기운으로 솟구치는 상생의 시작입니다." },
      { id: "fire", name: "火 (화)", color: "var(--color-fire-light)", x: 280, y: 130, desc: "여름의 열기, 만물이 사방으로 힘차게 뻗어나가고 번창하여 화려함을 이루는 확장입니다." },
      { id: "earth", name: "土 (토)", color: "var(--color-earth-light)", x: 240, y: 260, desc: "환절기의 조화, 모든 오행을 포용하고 조율하여 중용의 미를 이루게 돕는 대지입니다." },
      { id: "metal", name: "金 (금)", color: "var(--color-metal-light)", x: 100, y: 260, desc: "가을의 결실, 불필요한 것을 엄숙히 잘라내어 열매로 완성해 가는 단단하고 차가운 숙살입니다." },
      { id: "water", name: "水 (수)", color: "var(--color-water-light)", x: 60, y: 130, desc: "겨울의 지혜, 생명의 정수를 가두어 내부에 응축하여 휴식하고 새로운 순환을 배태합니다." }
    ];

    let svgHTML = `
      <svg width="340" height="320" viewBox="0 0 340 320" id="five-elements-svg">
        <defs>
          <marker id="arrow-generating" viewBox="0 0 10 10" refX="25" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#00e5ff" />
          </marker>
          <marker id="arrow-controlling" viewBox="0 0 10 10" refX="25" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#f44336" />
          </marker>
        </defs>

        <!-- Generating (상생) Circle Lines -->
        <path d="M 170,50 Q 240,75 280,130" fill="none" stroke="#00e5ff" stroke-width="2" stroke-dasharray="4,4" marker-end="url(#arrow-generating)" id="line-gen-wood-fire"/>
        <path d="M 280,130 Q 280,210 240,260" fill="none" stroke="#00e5ff" stroke-width="2" stroke-dasharray="4,4" marker-end="url(#arrow-generating)" id="line-gen-fire-earth"/>
        <path d="M 240,260 Q 170,280 100,260" fill="none" stroke="#00e5ff" stroke-width="2" stroke-dasharray="4,4" marker-end="url(#arrow-generating)" id="line-gen-earth-metal"/>
        <path d="M 100,260 Q 60,210 60,130" fill="none" stroke="#00e5ff" stroke-width="2" stroke-dasharray="4,4" marker-end="url(#arrow-generating)" id="line-gen-metal-water"/>
        <path d="M 60,130 Q 100,75 170,50" fill="none" stroke="#00e5ff" stroke-width="2" stroke-dasharray="4,4" marker-end="url(#arrow-generating)" id="line-gen-water-wood"/>

        <!-- Controlling (상극) Star Lines -->
        <line x1="170" y1="50" x2="240" y2="260" stroke="#ff3d00" stroke-width="2" marker-end="url(#arrow-controlling)" id="line-ctrl-wood-earth"/>
        <line x1="240" y1="260" x2="60" y2="130" stroke="#ff3d00" stroke-width="2" marker-end="url(#arrow-controlling)" id="line-ctrl-earth-water"/>
        <line x1="60" y1="130" x2="280" y2="130" stroke="#ff3d00" stroke-width="2" marker-end="url(#arrow-controlling)" id="line-ctrl-water-fire"/>
        <line x1="280" y1="130" x2="100" y2="260" stroke="#ff3d00" stroke-width="2" marker-end="url(#arrow-controlling)" id="line-ctrl-fire-metal"/>
        <line x1="100" y1="260" x2="170" y2="50" stroke="#ff3d00" stroke-width="2" marker-end="url(#arrow-controlling)" id="line-ctrl-metal-wood"/>
    `;

    elements.forEach(el => {
      svgHTML += `
        <g class="el-node" data-id="${el.id}" transform="translate(${el.x}, ${el.y})" style="cursor:pointer;">
          <circle cx="0" cy="0" r="22" fill="var(--bg-secondary)" stroke="var(--border-glass)" stroke-width="2" class="node-circle"/>
          <text x="0" y="4" font-size="12" font-weight="700" text-anchor="middle" fill="${el.color}">${el.name}</text>
        </g>
      `;
    });

    svgHTML += `</svg>`;
    target.innerHTML = svgHTML;

    const nodes = target.querySelectorAll(".el-node");
    nodes.forEach(node => {
      node.addEventListener("click", () => {
        nodes.forEach(n => n.querySelector(".node-circle").setAttribute("stroke", "var(--border-glass)"));
        node.querySelector(".node-circle").setAttribute("stroke", "var(--accent-color)");

        const id = node.getAttribute("data-id");
        const el = elements.find(e => e.id === id);
        
        let relationHTML = "";
        
        if (id === "wood") {
          relationHTML = `
            <div class="relation-group"><strong>🌱 목생화 (상생)</strong><span>목(木)은 불(火)을 태워 활활 일어나게 돕습니다.</span></div>
            <div class="relation-group"><strong>🌳 수생목 (상생)</strong><span>물(水)은 나무를 적셔 성장하고 살아가도록 생명을 줍니다.</span></div>
            <div class="relation-group"><strong>🪵 목극토 (상극)</strong><span>나무 뿌리는 대지(土)를 헤집어 고정하고 영양을 조율합니다.</span></div>
            <div class="relation-group"><strong>🪓 금극목 (상극)</strong><span>쇠붙이(金) 도끼나 가위는 무성한 나무를 다듬고 자릅니다.</span></div>
          `;
        } else if (id === "fire") {
          relationHTML = `
            <div class="relation-group"><strong>🔥 화생토 (상생)</strong><span>불(火)이 타고 남은 재는 다시 흙(土)의 성분이 됩니다.</span></div>
            <div class="relation-group"><strong>🌱 목생화 (상생)</strong><span>나무(木)는 자신을 살라 불꽃을 피워 올립니다.</span></div>
            <div class="relation-group"><strong>🗡️ 화극금 (상극)</strong><span>강한 불(火)은 단단한 원석(金)을 녹여 기물로 단련합니다.</span></div>
            <div class="relation-group"><strong>💧 수극화 (상극)</strong><span>물(水)은 치솟는 불길을 꺼뜨려 차분하게 억제합니다.</span></div>
          `;
        } else if (id === "earth") {
          relationHTML = `
            <div class="relation-group"><strong>⛰️ 토생금 (상생)</strong><span>대지(土) 깊숙한 곳에서 정제된 광물(金)을 형성해 냅니다.</span></div>
            <div class="relation-group"><strong>🔥 화생토 (상생)</strong><span>불(火)이 꺼져 흙으로 환원되어 영양을 축적시킵니다.</span></div>
            <div class="relation-group"><strong>🌊 토극수 (상극)</strong><span>흙(土)은 도도히 흐르는 물(水)을 막아 제방하고 조율합니다.</span></div>
            <div class="relation-group"><strong>🌲 목극토 (상극)</strong><span>나무(木)는 단단한 대지를 파고들어 영양을 빨아들입니다.</span></div>
          `;
        } else if (id === "metal") {
          relationHTML = `
            <div class="relation-group"><strong>💎 금생수 (상생)</strong><span>차가운 돌이나 광물(金) 틈새에서 깨끗한 생명수(水)가 솟아납니다.</span></div>
            <div class="relation-group"><strong>⛰️ 토생금 (상생)</strong><span>대지(土)의 응축력을 받아 비로소 단단한 광석이 완성됩니다.</span></div>
            <div class="relation-group"><strong>🪓 금극목 (상극)</strong><span>쇠(金) 도끼는 나무(木)의 과성장을 억제하고 정리합니다.</span></div>
            <div class="relation-group"><strong>🔥 화극금 (상극)</strong><span>불(火)은 차가운 쇠붙이를 녹여 쓸모 있는 그릇으로 만듭니다.</span></div>
          `;
        } else if (id === "water") {
          relationHTML = `
            <div class="relation-group"><strong>🌊 수생목 (상생)</strong><span>생명수(水)는 메마른 목(木)에 생기를 주고 길러줍니다.</span></div>
            <div class="relation-group"><strong>💎 금생수 (상생)</strong><span>바위틈(金)에서 맑은 옹달샘이 모여 거대한 수량을 형성합니다.</span></div>
            <div class="relation-group"><strong>💧 수극화 (상극)</strong><span>물(水)은 온도의 팽창과 불(火)의 기세를 제어합니다.</span></div>
            <div class="relation-group"><strong>⛰️ 토극수 (상극)</strong><span>흙(土)은 물이 사방으로 흩어지지 않게 가두고 제어합니다.</span></div>
          `;
        }

        if (el) {
          DOM.fiveElementsDetailBox.innerHTML = `
            <h4 style="color:${el.color}">${el.name}의 오행 관계</h4>
            <p style="font-size:13px; line-height:1.4; margin-bottom:16px;">${el.desc}</p>
            ${relationHTML}
          `;
        }
      });
    });
  }

  // ==========================================================================
  // 6. Section Quiz Rendering & Handling
  // ==========================================================================
  function renderSectionQuiz(chapterKey) {
    DOM.tabContentQuiz.innerHTML = "";
    const quizList = sajuQuizData[chapterKey];

    if (!quizList || quizList.length === 0) {
      DOM.tabContentQuiz.innerHTML = `
        <div class="card glass text-center">
          <p>이 단락에는 배정된 퀴즈가 없습니다. 다음 단락으로 이동해 보세요.</p>
        </div>
      `;
      return;
    }

    const quizWrap = document.createElement("div");
    quizWrap.className = "quiz-wrapper-panel";

    const titleEl = document.createElement("h3");
    titleEl.textContent = `✍️ 단락 확인 퀴즈 (총 ${quizList.length}문항)`;
    titleEl.style.marginBottom = "24px";
    quizWrap.appendChild(titleEl);

    // Track state of user answers for this section
    const userAnswers = Array(quizList.length).fill(null);

    quizList.forEach((q, idx) => {
      const qCard = document.createElement("div");
      qCard.className = "quiz-card card glass";
      
      const qNum = document.createElement("h4");
      qNum.textContent = `Q${idx + 1}. ${q.question}`;
      qCard.appendChild(qNum);

      const optionsGrid = document.createElement("div");
      optionsGrid.className = "options-grid";

      q.options.forEach((opt, optIdx) => {
        const btn = document.createElement("button");
        btn.className = "option-button";
        btn.textContent = opt;
        
        btn.addEventListener("click", () => {
          if (userAnswers[idx] !== null) return; // Answered already
          
          userAnswers[idx] = optIdx;
          const isCorrect = optIdx === q.answer;
          
          // Highlight buttons
          Array.from(optionsGrid.children).forEach((child, cIdx) => {
            if (cIdx === q.answer) {
              child.classList.add("correct");
            } else if (cIdx === optIdx && !isCorrect) {
              child.classList.add("wrong");
            }
          });

          // Show explanation card
          const explanationBox = document.createElement("div");
          explanationBox.className = "solution-box";
          explanationBox.innerHTML = `
            <p><strong>${isCorrect ? '✅ 정답입니다!' : '❌ 오답입니다.'}</strong></p>
            <p style="margin-top: 8px; font-size: 13px; color: var(--text-secondary);">${q.explanation}</p>
          `;
          qCard.appendChild(explanationBox);

          // Check if all questions in section completed
          if (userAnswers.every(ans => ans !== null)) {
            // Mark chapter completed
            state.progress[chapterKey] = true;
            
            // Calculate score
            let score = 0;
            userAnswers.forEach((ans, qIdx) => {
              if (ans === quizList[qIdx].answer) score++;
            });
            state.quizScores[chapterKey] = { score, total: quizList.length };
            
            saveState();
            updateProgressDashboard();
            updateNavigationStatus();
          }
        });

        optionsGrid.appendChild(btn);
      });

      qCard.appendChild(optionsGrid);
      quizWrap.appendChild(qCard);
    });

    DOM.tabContentQuiz.appendChild(quizWrap);
  }

  // ==========================================================================
  // 7. Final Quiz Evaluator Engine (25 Questions)
  // ==========================================================================
  function startFinalQuiz() {
    state.finalQuiz.active = true;
    state.finalQuiz.answers = Array(25).fill(null);
    state.finalQuiz.currentIndex = 0;

    DOM.finalIntroCard.classList.add("hidden");
    DOM.finalResultCard.classList.add("hidden");
    DOM.finalSolutionsPanel.classList.add("hidden");
    DOM.finalPlayArea.classList.remove("hidden");

    loadFinalQuestion(0);
  }

  function loadFinalQuestion(index) {
    const quizList = sajuQuizData.final;
    const q = quizList[index];

    DOM.finalCurrentIndex.textContent = index + 1;
    DOM.finalQuestionText.textContent = q.question;
    DOM.finalQuizProgress.style.width = `${((index + 1) / 25) * 100}%`;
    
    // Toggle prev button disable state
    DOM.btnFinalPrev.disabled = index === 0;

    // Render options
    DOM.finalOptionsContainer.innerHTML = "";
    q.options.forEach((opt, optIdx) => {
      const btn = document.createElement("button");
      btn.className = "option-button";
      if (state.finalQuiz.answers[index] === optIdx) {
        btn.classList.add("active");
        btn.style.borderColor = "var(--accent-color)";
      }
      btn.textContent = opt;

      btn.addEventListener("click", () => {
        state.finalQuiz.answers[index] = optIdx;
        // Highlight active option
        Array.from(DOM.finalOptionsContainer.children).forEach((b, idx) => {
          if (idx === optIdx) {
            b.classList.add("active");
            b.style.borderColor = "var(--accent-color)";
          } else {
            b.classList.remove("active");
            b.style.borderColor = "var(--border-glass)";
          }
        });
        
        // Auto advance to next question after small delay for premium feel
        setTimeout(() => {
          advanceFinalQuiz();
        }, 300);
      });

      DOM.finalOptionsContainer.appendChild(btn);
    });
  }

  function advanceFinalQuiz() {
    const idx = state.finalQuiz.currentIndex;
    if (idx < 24) {
      state.finalQuiz.currentIndex++;
      loadFinalQuestion(state.finalQuiz.currentIndex);
    } else {
      // Completed last question, show submit review or finalize
      submitFinalQuiz();
    }
  }

  function prevFinalQuestion() {
    const idx = state.finalQuiz.currentIndex;
    if (idx > 0) {
      state.finalQuiz.currentIndex--;
      loadFinalQuestion(state.finalQuiz.currentIndex);
    }
  }

  DOM.btnFinalPrev.addEventListener("click", prevFinalQuestion);
  DOM.btnFinalNext.addEventListener("click", () => {
    const idx = state.finalQuiz.currentIndex;
    if (state.finalQuiz.answers[idx] === null) {
      alert("문제를 풀고 진행해 주세요!");
      return;
    }
    advanceFinalQuiz();
  });

  function submitFinalQuiz() {
    DOM.finalPlayArea.classList.add("hidden");
    DOM.finalResultCard.classList.remove("hidden");

    const quizList = sajuQuizData.final;
    let score = 0;
    state.finalQuiz.answers.forEach((ans, idx) => {
      if (ans === quizList[idx].answer) score++;
    });

    const accuracy = Math.round((score / 25) * 100);
    DOM.resultScore.textContent = score;
    DOM.resultAccuracy.textContent = `${accuracy}%`;

    let grade = "낙제";
    let emoji = "😢";
    let message = "목표 점수(80점)를 달성하지 못했습니다. 이론을 다시 학습하고 도전해 보세요!";
    
    if (accuracy >= 90) {
      grade = "수 (秀) - 최우수";
      emoji = "👑";
      message = "대단합니다! 사주명리학의 입체적 개념과 고전 해석을 완벽히 마스터하셨습니다.";
      state.progress["final"] = true;
    } else if (accuracy >= 80) {
      grade = "우 (優) - 통과";
      emoji = "🎉";
      message = "축하합니다! 안정적인 점수로 종합 평가를 무사히 통과하셨습니다.";
      state.progress["final"] = true;
    } else if (accuracy >= 60) {
      grade = "미 (美) - 노력 요함";
      emoji = "✍️";
      message = "조금만 더 노력하면 통과할 수 있습니다! 오답 노트를 확인해 보세요.";
    }

    DOM.resultGrade.textContent = grade;
    DOM.resultEmoji.textContent = emoji;
    DOM.resultMessage.textContent = message;

    saveState();
    updateProgressDashboard();
    updateNavigationStatus();
  }

  DOM.btnRetryFinal.addEventListener("click", startFinalQuiz);

  // Show detailed solutions menu
  DOM.btnShowSolutions.addEventListener("click", () => {
    DOM.finalResultCard.classList.add("hidden");
    DOM.finalSolutionsPanel.classList.remove("hidden");

    DOM.solutionsListTarget.innerHTML = "";
    const quizList = sajuQuizData.final;

    quizList.forEach((q, idx) => {
      const userAns = state.finalQuiz.answers[idx];
      const isCorrect = userAns === q.answer;

      const solItem = document.createElement("div");
      solItem.className = "solution-item";

      const h5 = document.createElement("h5");
      h5.textContent = `Q${idx + 1}. ${q.question}`;
      solItem.appendChild(h5);

      const reviewDiv = document.createElement("div");
      reviewDiv.className = "answers-review";

      const correctBadge = document.createElement("span");
      correctBadge.className = "review-badge correct-ans";
      correctBadge.textContent = `정답: ${q.options[q.answer]}`;
      reviewDiv.appendChild(correctBadge);

      if (!isCorrect) {
        const userBadge = document.createElement("span");
        userBadge.className = "review-badge user-ans";
        userBadge.textContent = `내 답변: ${userAns !== null ? q.options[userAns] : '미선택'}`;
        reviewDiv.appendChild(userBadge);
      }

      solItem.appendChild(reviewDiv);

      const exp = document.createElement("p");
      exp.innerHTML = `<strong>풀이 해설:</strong> ${q.explanation}`;
      solItem.appendChild(exp);

      DOM.solutionsListTarget.appendChild(solItem);
    });
  });

  DOM.btnCloseSolutions.addEventListener("click", () => {
    DOM.finalSolutionsPanel.classList.add("hidden");
    DOM.finalResultCard.classList.remove("hidden");
  });

  DOM.btnStartFinal.addEventListener("click", startFinalQuiz);

  // ==========================================================================
  // 8. Navigation & Tab Control Logic
  // ==========================================================================
  const chapterKeys = [
    "intro", "chap1", "chap2", "chap3", "chap4", "chap5",
    "chap6", "chap7", "chap8", "chap9", "chap10", "chap11", "chap12", "chap13"
  ];

  function loadChapter(chapterKey) {
    state.currentChapter = chapterKey;
    clearCanvas();

    // Toggle navigation UI state
    navItemsList.forEach(item => {
      if (item.getAttribute("data-target") === chapterKey) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });

    if (chapterKey === "final") {
      // Load Final Quiz Screen
      DOM.chapterTitle.textContent = "🏆 최종 종합 평가";
      DOM.chapterSubtitle.textContent = "사주 명리학 실력 확인 평가";
      DOM.chapterTabs.classList.add("hidden");
      
      // Hide all standard sub-tabs
      DOM.tabContentTheory.classList.remove("active");
      DOM.tabContentSummary.classList.remove("active");
      DOM.tabContentQuiz.classList.remove("active");
      
      // Show final quiz tab
      DOM.contentFinal.classList.remove("hidden");
      DOM.finalIntroCard.classList.remove("hidden");
      DOM.finalPlayArea.classList.add("hidden");
      DOM.finalResultCard.classList.add("hidden");
      DOM.finalSolutionsPanel.classList.add("hidden");

      // Hide footer
      DOM.footer.classList.add("hidden");
      return;
    }

    // Standard Chapter Loading
    DOM.contentFinal.classList.add("hidden");
    DOM.footer.classList.remove("hidden");

    const data = sajuTheoryData[chapterKey];
    if (data) {
      DOM.chapterTitle.textContent = data.title;
      DOM.chapterSubtitle.textContent = data.subtitle;
      DOM.theoryRenderer.innerHTML = data.content;
      DOM.summaryRenderer.innerHTML = `
        <div class="card glass border-wood">
          <h3>📌 핵심 요약 카드</h3>
          <div class="summary-details" style="font-size: 15px; line-height: 1.7; margin-top: 12px; color: var(--text-primary);">
            ${data.summary}
          </div>
        </div>
      `;
    }

    // Handle Tabs Visibilities (Intro has no tabs/quiz)
    if (chapterKey === "intro") {
      DOM.chapterTabs.classList.add("hidden");
      DOM.tabContentTheory.classList.add("active");
      DOM.tabContentSummary.classList.remove("active");
      DOM.tabContentQuiz.classList.remove("active");
      DOM.btnPrevSection.classList.add("hidden");
    } else {
      DOM.chapterTabs.classList.remove("hidden");
      DOM.btnPrevSection.classList.remove("hidden");
      switchTab(state.currentTab);
    }

    // Load Widgets depending on chapter
    DOM.widgetBaqua.classList.add("hidden");
    DOM.widgetDrawing.classList.add("hidden");
    DOM.widgetFiveElements.classList.add("hidden");

    if (chapterKey === "chap1") {
      DOM.widgetBaqua.classList.remove("hidden");
      renderBaquaSVG();
    } else if (chapterKey === "chap5" || chapterKey === "chap6") {
      DOM.widgetDrawing.classList.remove("hidden");
      renderKanjiSelectors();
      selectKanji(chapterKey === "chap5" ? "甲" : "子");
    } else if (chapterKey === "chap9") {
      DOM.widgetFiveElements.classList.remove("hidden");
      renderFiveElementsSVG();
    }

    // Render Quizzes
    renderSectionQuiz(chapterKey);

    // Update Footer Navigation Button Text
    const currentIdx = chapterKeys.indexOf(chapterKey);
    if (state.currentTab === "quiz" || chapterKey === "intro") {
      DOM.btnNextStep.textContent = currentIdx === chapterKeys.length - 1 ? "최종 평가 치르기 🏆" : "다음 단락으로 ➡️";
    } else {
      DOM.btnNextStep.textContent = "다음 단계로 ➡️";
    }
  }

  function switchTab(tabKey) {
    state.currentTab = tabKey;
    
    // Toggle active tab buttons
    const tabButtons = DOM.chapterTabs.querySelectorAll(".tab-button");
    tabButtons.forEach(btn => {
      if (btn.getAttribute("data-tab") === tabKey) btn.classList.add("active");
      else btn.classList.remove("active");
    });

    // Toggle active contents
    DOM.tabContentTheory.classList.remove("active");
    DOM.tabContentSummary.classList.remove("active");
    DOM.tabContentQuiz.classList.remove("active");

    if (tabKey === "theory") DOM.tabContentTheory.classList.add("active");
    else if (tabKey === "summary") DOM.tabContentSummary.classList.add("active");
    else if (tabKey === "quiz") DOM.tabContentQuiz.classList.add("active");

    // Scroll to top
    document.querySelector(".main-content").scrollTop = 0;

    // Adjust next button text
    if (tabKey === "quiz") {
      const currentIdx = chapterKeys.indexOf(state.currentChapter);
      DOM.btnNextStep.textContent = currentIdx === chapterKeys.length - 1 ? "최종 평가 치르기 🏆" : "다음 단락으로 ➡️";
    } else {
      DOM.btnNextStep.textContent = "다음 단계로 ➡️";
    }
  }

  // Bind Tab Click Handlers
  DOM.chapterTabs.querySelectorAll(".tab-button").forEach(btn => {
    btn.addEventListener("click", () => {
      switchTab(btn.getAttribute("data-tab"));
    });
  });

  // Bind Sidebar nav list click handlers
  navItemsList.forEach(item => {
    item.addEventListener("click", () => {
      const target = item.getAttribute("data-target");
      loadChapter(target);
    });
  });

  // Bind Footer Buttons
  DOM.btnPrevSection.addEventListener("click", () => {
    const currentIdx = chapterKeys.indexOf(state.currentChapter);
    if (currentIdx > 0) {
      loadChapter(chapterKeys[currentIdx - 1]);
      switchTab("theory");
    }
  });

  DOM.btnNextStep.addEventListener("click", () => {
    if (state.currentChapter === "intro") {
      // Intro goes to Chapter 1 theory
      loadChapter("chap1");
      switchTab("theory");
    } else if (state.currentTab === "theory") {
      switchTab("summary");
    } else if (state.currentTab === "summary") {
      switchTab("quiz");
    } else if (state.currentTab === "quiz") {
      // Advance to next chapter
      const currentIdx = chapterKeys.indexOf(state.currentChapter);
      if (currentIdx < chapterKeys.length - 1) {
        loadChapter(chapterKeys[currentIdx + 1]);
        switchTab("theory");
      } else {
        // Go to final evaluation
        loadChapter("final");
      }
    }
  });

  // ==========================================================================
  // 9. Dashboard Progress Calculators
  // ==========================================================================
  function updateProgressDashboard() {
    const totalChapters = 14; // intro, chap1~13
    let completedCount = 0;
    
    chapterKeys.forEach(key => {
      if (state.progress[key]) completedCount++;
    });

    const percentage = Math.round((completedCount / totalChapters) * 100);
    DOM.progressPercentage.textContent = `${percentage}%`;
    DOM.overallProgressBar.style.width = `${percentage}%`;
    DOM.completedChaptersCount.textContent = completedCount;
  }

  function updateNavigationStatus() {
    navItemsList.forEach(item => {
      const key = item.getAttribute("data-target");
      if (state.progress[key]) {
        item.classList.add("completed");
      } else {
        item.classList.remove("completed");
      }
    });
  }

  // ==========================================================================
  // 10. Theme Switching & Initialization
  // ==========================================================================
  const themeBtn = document.getElementById("theme-toggle");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      state.theme = state.theme === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", state.theme);
      themeBtn.innerHTML = state.theme === "dark" ? "☀️" : "🌙";
      localStorage.setItem("saju_learning_theme", state.theme);
      // Synchronize stroke styles on theme toggle
      ctx.strokeStyle = state.theme === "dark" ? "#00e5ff" : "#0284c7";
    });
  }

  // App Initialize
  loadState();
  initCanvas();
  updateProgressDashboard();
  updateNavigationStatus();
  loadChapter("intro"); // Start with introduction

  // Print Action
  if (DOM.btnPrint) {
    DOM.btnPrint.addEventListener("click", () => {
      window.print();
    });
  }
});
