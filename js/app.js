// 사주러닝 기초편 — 앱 본체 (라우팅 · 진도 · 퀴즈 · 종합평가)
(function () {
  const LESSONS = window.LESSONS, STAGES = window.STAGES, THEORY = window.sajuTheoryData;
  const STEPS = [
    { key: "easy", label: "쉽게 이해하기", icon: "💡" },
    { key: "deep", label: "자세히 읽기", icon: "📚" },
    { key: "keys", label: "핵심 정리", icon: "📌" },
    { key: "quiz", label: "단락 퀴즈", icon: "✏️" }
  ];
  const LEVELS = [
    { min: 0, name: "새싹 도령", emoji: "🌱" },
    { min: 120, name: "견습 도사", emoji: "📜" },
    { min: 300, name: "수련 도사", emoji: "🔥" },
    { min: 520, name: "명리 도사", emoji: "🧙" },
    { min: 800, name: "명리 고수", emoji: "🏆" }
  ];
  const FINAL_PASS = 80;
  const $ = (s, r = document) => r.querySelector(s);
  const esc = (s) => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const byId = (id) => LESSONS.find(l => l.id === id);
  const passMark = (l) => Math.ceil(l.quiz.length * 0.6);

  // ─────────── state ───────────
  const KEY = "saju_basic_v1";
  let S = { units: {}, final: { best: null, last: null }, memo: {}, drawn: {}, lastUnit: null };
  try { const raw = localStorage.getItem(KEY); if (raw) S = Object.assign(S, JSON.parse(raw)); } catch (e) { }
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { } };
  const U = (id) => (S.units[id] = S.units[id] || { seen: [], best: 0, passed: false });

  const xp = () => {
    let t = 0;
    LESSONS.forEach(l => { const u = S.units[l.id]; if (!u) return; t += u.best * 10 + (u.passed ? 30 : 0) + u.seen.length * 2; });
    if (S.final.best != null) t += Math.round(S.final.best * 3);
    return t;
  };
  const level = (x) => { let i = 0; LEVELS.forEach((L, k) => { if (x >= L.min) i = k; }); return { i, ...LEVELS[i], next: LEVELS[i + 1] }; };
  const doneCount = () => LESSONS.filter(l => S.units[l.id] && S.units[l.id].passed).length;
  const nextUnit = () => LESSONS.find(l => !(S.units[l.id] && S.units[l.id].passed));

  // ─────────── chrome ───────────
  function renderTop() {
    const x = xp(), L = level(x);
    const pct = L.next ? Math.round((x - L.min) / (L.next.min - L.min) * 100) : 100;
    $("#level-pill").innerHTML = `<span class="lv-emoji">${L.emoji}</span><b>${L.name}</b><span class="xp-track"><span class="xp-fill" style="width:${pct}%"></span></span><span>${x} XP</span>`;
    $("#level-pill").title = L.next ? `다음 등급 '${L.next.name}'까지 ${L.next.min - x} XP` : "최고 등급 달성!";
  }
  function toast(msg, ms = 2600) {
    const t = document.createElement("div"); t.className = "toast"; t.textContent = msg; document.body.appendChild(t);
    setTimeout(() => t.remove(), ms);
  }
  function confetti(n = 36) {
    const em = ["🎉", "✨", "🌸", "⭐", "🍀", "🎊"];
    for (let i = 0; i < n; i++) {
      const c = document.createElement("div"); c.className = "confetti"; c.textContent = em[i % em.length];
      c.style.left = Math.random() * 100 + "vw"; c.style.animationDuration = 1.8 + Math.random() * 1.8 + "s"; c.style.animationDelay = Math.random() * .5 + "s";
      document.body.appendChild(c); setTimeout(() => c.remove(), 4200);
    }
  }
  function modal(html) {
    const back = document.createElement("div"); back.className = "modal-back";
    back.innerHTML = `<div class="modal" role="dialog" aria-modal="true">${html}</div>`;
    back.addEventListener("click", (e) => { if (e.target === back) back.remove(); });
    document.body.appendChild(back); return back;
  }

  // ─────────── theme ───────────
  function applyTheme(t) {
    if (t) document.documentElement.setAttribute("data-theme", t); else document.documentElement.removeAttribute("data-theme");
    const dark = t ? t === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
    $("#theme-btn").textContent = dark ? "☀️" : "🌙";
  }
  let theme = null; try { theme = localStorage.getItem("saju_basic_theme"); } catch (e) { }
  applyTheme(theme);
  $("#theme-btn").addEventListener("click", () => {
    const dark = document.documentElement.getAttribute("data-theme") ? document.documentElement.getAttribute("data-theme") === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
    theme = dark ? "light" : "dark"; applyTheme(theme);
    try { localStorage.setItem("saju_basic_theme", theme); } catch (e) { }
    route();
  });

  // ─────────── router ───────────
  const view = $("#view");
  function go(hash) { if (location.hash === hash) route(); else location.hash = hash; }
  function route() {
    const parts = location.hash.replace(/^#\/?/, "").split("/");
    window.scrollTo(0, 0);
    if (parts[0] === "lesson" && byId(parts[1])) renderLesson(parts[1], Math.min(3, Math.max(0, parseInt(parts[2] || "0", 10) || 0)));
    else if (parts[0] === "final") renderFinal();
    else renderHome();
    renderTop();
  }
  window.addEventListener("hashchange", route);

  // ─────────── home ───────────
  function renderHome() {
    const done = doneCount(), total = LESSONS.length, pct = Math.round(done / total * 100);
    const nu = nextUnit(), x = xp(), L = level(x);
    const quizTotal = LESSONS.reduce((a, l) => a + (S.units[l.id] ? S.units[l.id].best : 0), 0);
    const quizMax = LESSONS.reduce((a, l) => a + l.quiz.length, 0);
    const r = 54, C = 2 * Math.PI * r;
    view.innerHTML = `
      <section class="view">
        <div class="hero">
          <div>
            <h1>${done === 0 ? "사주, 오늘부터 쉽게 시작해요 🌱" : done === total ? "기초편을 모두 마쳤어요! 🎉" : `${L.emoji} ${L.name}님, 잘하고 있어요!`}</h1>
            <p>${done === 0 ? "한자가 낯설어도 괜찮아요. 비유와 그림으로 이해하고, 퀴즈로 확인하며 22글자와 친해져요." : done === total ? "이제 최종 종합 평가로 실력을 확인해 보세요." : `지금까지 ${done}개 단락을 마쳤어요. 다음은 <b>${nu.title}</b> 차례예요.`}</p>
            <div class="hero-actions">
              ${nu ? `<button class="btn btn-primary" data-go="#/lesson/${(S.lastUnit && !(S.units[S.lastUnit] || {}).passed) ? S.lastUnit : nu.id}">${done === 0 ? "▶ 첫 단락 시작하기" : "▶ 이어서 학습하기"}</button>` : ""}
              <button class="btn ${nu ? "" : "btn-primary"}" data-go="#/final">🏆 최종 종합 평가</button>
            </div>
          </div>
          <div class="ring" aria-label="진도율 ${pct}%">
            <svg viewBox="0 0 120 120"><circle cx="60" cy="60" r="${r}" fill="none" stroke="var(--bg-2)" stroke-width="10"/>
              <circle cx="60" cy="60" r="${r}" fill="none" stroke="var(--accent)" stroke-width="10" stroke-linecap="round" stroke-dasharray="${C}" stroke-dashoffset="${C * (1 - pct / 100)}" style="transition:stroke-dashoffset 1s"/></svg>
            <div class="ring-label"><div><b>${pct}%</b><small>${done}/${total} 단락</small></div></div>
          </div>
          <div class="hero-hanja">命</div>
        </div>

        <div class="stats-row">
          <div class="stat"><small>등급</small><b>${L.emoji} ${L.name}</b></div>
          <div class="stat"><small>경험치</small><b>${x} XP</b></div>
          <div class="stat"><small>퀴즈 정답</small><b>${quizTotal} / ${quizMax}</b></div>
          <div class="stat"><small>종합 평가 최고점</small><b>${S.final.best != null ? S.final.best + "점" : "—"}</b></div>
        </div>

        ${STAGES.map(st => {
          const ls = LESSONS.filter(l => l.stage === st.id);
          const d = ls.filter(l => S.units[l.id] && S.units[l.id].passed).length;
          return `<div class="stage">
            <div class="stage-head"><div class="stage-badge">${st.emoji}</div><div><h2>${st.id}단계 · ${st.name}</h2><p>${st.desc}</p></div><div class="stage-progress">${d} / ${ls.length} 완료</div></div>
            <div class="unit-grid">${ls.map(l => {
              const u = S.units[l.id] || {}; const isNext = nu && nu.id === l.id;
              return `<button class="unit-card ${u.passed ? "done" : ""} ${isNext ? "next" : ""}" data-go="#/lesson/${l.id}">
                <div class="unit-emoji">${u.passed ? "🏅" : l.emoji}</div>
                <div class="unit-info"><small>${l.num === "0" ? "시작" : l.num} · 약 ${l.minutes}분</small><b>${l.title}</b><span>${l.tagline}</span></div>
                <span class="unit-stamp">${u.passed ? `✓ ${u.best}/${l.quiz.length}` : isNext ? "NEXT" : ""}</span></button>`;
            }).join("")}</div></div>`;
        }).join("")}

        <div class="final-banner">
          <div class="fb-emoji">🏆</div>
          <div><h2>최종 종합 평가 · 30문항</h2><p>전 단락을 아우르는 4지선다 30문제. ${FINAL_PASS}점 이상이면 수료증을 받을 수 있어요!</p></div>
          <button class="btn btn-primary" data-go="#/final">도전하기</button>
        </div>

        <div class="extra-row">
          <button class="card-box extra-card" id="dl-summary"><div class="big">📑</div><div><b>전체 핵심 요약 노트 (A4 PDF)</b><span>14개 단락의 핵심 정리를 한 권으로 내려받아요.</span></div></button>
          <button class="card-box extra-card" id="reset-progress"><div class="big">🔄</div><div><b>학습 기록 초기화</b><span>진도·퀴즈 점수·메모를 모두 지우고 처음부터 시작해요.</span></div></button>
        </div>
      </section>`;
    view.querySelectorAll("[data-go]").forEach(b => b.addEventListener("click", () => go(b.dataset.go)));
    $("#dl-summary").addEventListener("click", () => window.PDF.summary(S));
    $("#reset-progress").addEventListener("click", () => {
      const m = modal(`<h3>학습 기록을 초기화할까요?</h3><p class="sub">진도, 퀴즈 점수, 종합 평가 기록, 메모가 모두 지워지고 되돌릴 수 없어요.</p>
        <div class="modal-actions"><button class="btn" data-x>취소</button><button class="btn btn-primary" data-ok>초기화</button></div>`);
      m.querySelector("[data-x]").onclick = () => m.remove();
      m.querySelector("[data-ok]").onclick = () => { S = { units: {}, final: { best: null, last: null }, memo: {}, drawn: {}, lastUnit: null }; save(); m.remove(); toast("학습 기록을 초기화했어요."); route(); };
    });
  }

  // ─────────── lesson ───────────
  function renderLesson(id, step) {
    const l = byId(id), idx = LESSONS.indexOf(l), u = U(id);
    if (!u.seen.includes(step)) { u.seen.push(step); }
    S.lastUnit = id; save();
    view.innerHTML = `
      <section class="view">
        <div class="lesson-head">
          <div class="lesson-emoji">${l.emoji}</div>
          <div class="lesson-title"><small>${STAGES[l.stage - 1].emoji} ${l.stage}단계 · ${l.num === "0" ? "시작" : l.num}</small>
            <h1>${l.title}<span class="hz">${l.hanja}</span></h1><p>${l.tagline} · 약 ${l.minutes}분</p></div>
          <div class="lesson-head-actions">
            <button class="btn btn-sm" data-go="#/">🏠 홈</button>
            <button class="btn btn-sm btn-indigo" id="dl-pdf">📄 A4 PDF</button>
          </div>
        </div>
        <nav class="stepper" aria-label="학습 단계">${STEPS.map((s, i) => `<button class="step-btn ${i === step ? "active" : ""} ${u.seen.includes(i) ? "seen" : ""}" data-go="#/lesson/${id}/${i}"><span class="num">${u.seen.includes(i) && i !== step ? "✓" : i + 1}</span>${s.label}</button>`).join("")}</nav>
        <div class="panel" id="panel"></div>
        <div class="lesson-nav" id="lesson-nav"></div>
      </section>`;
    view.querySelectorAll("[data-go]").forEach(b => b.addEventListener("click", () => go(b.dataset.go)));
    $("#dl-pdf").addEventListener("click", () => pdfDialog(l));
    const panel = $("#panel");
    const key = STEPS[step].key;
    if (key === "easy") {
      panel.innerHTML = `<div class="goals"><h4>오늘의 학습 목표</h4><ul>${l.goals.map(g => `<li>${g}</li>`).join("")}</ul></div>${l.easy}
        <div class="tip-box"><div class="tip-icon">🍯</div><div><h4>암기 꿀팁</h4><p>${l.tip}</p></div></div>`;
      window.Widgets.mount(panel);
    } else if (key === "deep") {
      const t = THEORY[id];
      panel.innerHTML = `<div class="deep-intro">📚 학습지 본문을 정리한 상세 내용이에요. 처음엔 어려울 수 있으니 <b>훑어보기만</b> 해도 괜찮아요. 반복해서 읽을수록 보이는 게 많아져요!</div>
        <h3 style="margin-top:0">${t.subtitle}</h3><div class="theory-wrap">${t.content}</div>`;
    } else if (key === "keys") {
      panel.innerHTML = `<h3 style="margin-top:0">📌 꼭 기억할 핵심</h3><ol class="keypoints">${l.keypoints.map(k => `<li><span>${k}</span></li>`).join("")}</ol>
        <div class="tip-box"><div class="tip-icon">🍯</div><div><h4>암기 꿀팁</h4><p>${l.tip}</p></div></div>
        <div class="memo-note"><label for="memo">📝 나만의 메모 <small style="font-weight:400;color:var(--ink-3)">(자동 저장 · PDF에도 들어가요)</small></label><textarea id="memo" placeholder="이해한 내용을 내 말로 적어 보세요. 직접 쓰면 훨씬 오래 기억돼요!">${esc(S.memo[id] || "")}</textarea></div>`;
      $("#memo").addEventListener("input", (e) => { S.memo[id] = e.target.value; save(); });
    } else {
      renderQuiz(panel, l);
    }
    // bottom nav
    const nav = $("#lesson-nav");
    const prev = step > 0 ? `#/lesson/${id}/${step - 1}` : idx > 0 ? `#/lesson/${LESSONS[idx - 1].id}/0` : null;
    const next = step < 3 ? `#/lesson/${id}/${step + 1}` : idx < LESSONS.length - 1 ? `#/lesson/${LESSONS[idx + 1].id}/0` : "#/final";
    const nextLabel = step < 3 ? `다음: ${STEPS[step + 1].label} →` : idx < LESSONS.length - 1 ? `다음 단락: ${LESSONS[idx + 1].title} →` : "🏆 최종 종합 평가 →";
    nav.innerHTML = `${prev ? `<button class="btn" data-go="${prev}">← 이전</button>` : "<span></span>"}<button class="btn btn-primary" data-go="${next}">${nextLabel}</button>`;
    if (key === "quiz") nav.style.display = "none";
    nav.querySelectorAll("[data-go]").forEach(b => b.addEventListener("click", () => go(b.dataset.go)));
  }

  // ─────────── unit quiz (one at a time, instant feedback) ───────────
  function renderQuiz(panel, l) {
    let i = 0; const picks = [];
    const draw = () => {
      const q = l.quiz[i];
      const opts = q.type === "ox" ? ["O", "X"] : q.options;
      panel.innerHTML = `
        <div class="quiz-top"><div class="quiz-dots">${l.quiz.map((_, k) => `<i class="${k < picks.length ? (picks[k] === l.quiz[k].answer ? "ok" : "no") : k === i ? "cur" : ""}"></i>`).join("")}</div><span class="quiz-count">${i + 1} / ${l.quiz.length}</span></div>
        <span class="q-type">${q.type === "ox" ? "OX 퀴즈" : "4지선다"}</span>
        <div class="q-text">Q${i + 1}. ${q.q}</div>
        <div class="opts ${q.type === "ox" ? "ox" : ""}">${opts.map((o, k) => q.type === "ox"
          ? `<button class="opt" data-k="${k}">${o === "O" ? "⭕" : "❌"}<small>${o === "O" ? "맞아요" : "아니에요"}</small></button>`
          : `<button class="opt" data-k="${k}"><span class="ok-num">${k + 1}</span><span>${o}</span></button>`).join("")}</div>
        <div id="fb"></div>`;
      panel.querySelectorAll(".opt").forEach(b => b.addEventListener("click", () => answer(+b.dataset.k)));
    };
    const answer = (k) => {
      const q = l.quiz[i], ok = k === q.answer; picks.push(k);
      panel.querySelectorAll(".opt").forEach((b, n) => { b.disabled = true; if (n === q.answer) b.classList.add("correct"); else if (n === k) b.classList.add("wrong"); });
      panel.querySelector(".quiz-dots").children[i].className = ok ? "ok" : "no";
      $("#fb").innerHTML = `<div class="feedback ${ok ? "ok" : "no"}"><div class="fb-icon">${ok ? "🎉" : "🤔"}</div><div><b>${ok ? ["정답이에요!", "훌륭해요!", "딩동댕!"][i % 3] : "아쉬워요! 정답을 확인해 볼까요?"}</b>${q.explain}</div></div>
        <div class="quiz-actions"><button class="btn btn-primary" id="qnext">${i < l.quiz.length - 1 ? "다음 문제 →" : "결과 보기 🏁"}</button></div>`;
      $("#qnext").addEventListener("click", () => { i++; if (i < l.quiz.length) draw(); else result(); });
      $("#qnext").focus({ preventScroll: true });
    };
    const result = () => {
      const correct = picks.filter((p, k) => p === l.quiz[k].answer).length, n = l.quiz.length;
      const pass = correct >= passMark(l), u = U(l.id);
      const before = xp(); const wasPassed = u.passed;
      u.best = Math.max(u.best, correct); if (pass) u.passed = true; save();
      const gain = xp() - before;
      const idx = LESSONS.indexOf(l), nx = LESSONS[idx + 1];
      panel.innerHTML = `<div class="quiz-result">
        <div class="stamp ${pass ? "" : "fail"}"><div><span>${pass ? "合格" : "再挑戰"}</span>${pass ? "참 잘했어요" : "다시 도전"}</div></div>
        <h2>${n}문제 중 ${correct}문제 정답!</h2>
        <p>${correct === n ? "만점이에요! 이 단락은 완벽하게 이해했어요 💯" : pass ? `통과 기준(${passMark(l)}문제)을 넘었어요. 틀린 문제만 한 번 더 살펴봐요.` : `${passMark(l)}문제 이상 맞히면 도장을 받을 수 있어요. '쉽게 이해하기'를 한 번 더 보고 도전해요!`}</p>
        ${gain > 0 ? `<div class="xp-gain">+${gain} XP</div>` : ""}
        <div class="review-list">${l.quiz.map((q, k) => {
          const ok = picks[k] === q.answer, ans = q.type === "ox" ? ["O", "X"][q.answer] : q.options[q.answer];
          return `<div class="review-item ${ok ? "ok" : "no"}"><div class="rq">${ok ? "✅" : "❌"} Q${k + 1}. ${q.q}</div><div class="ra">정답: <b>${ans}</b> — ${q.explain}</div></div>`;
        }).join("")}</div>
        <div class="result-actions">
          <button class="btn" id="q-retry">🔁 다시 풀기</button>
          ${pass ? "" : `<button class="btn btn-soft" data-go="#/lesson/${l.id}/0">💡 쉽게 이해하기 복습</button>`}
          <button class="btn ${pass ? "btn-primary" : ""}" data-go="${nx ? `#/lesson/${nx.id}/0` : "#/final"}">${nx ? `다음 단락: ${nx.title} →` : "🏆 최종 종합 평가 →"}</button>
        </div></div>`;
      $("#q-retry").addEventListener("click", () => { i = 0; picks.length = 0; draw(); });
      panel.querySelectorAll("[data-go]").forEach(b => b.addEventListener("click", () => go(b.dataset.go)));
      renderTop();
      if (pass && !wasPassed) { confetti(); toast(`🏅 '${l.title}' 도장 획득!`); }
      else if (correct === n) confetti(20);
    };
    draw();
  }

  // ─────────── PDF dialog ───────────
  function pdfDialog(l) {
    const isDraw = l.widget === "draw-stems" || l.widget === "draw-branches";
    const m = modal(`<h3>📄 A4 학습지 PDF 만들기</h3><p class="sub"><b>${l.num === "0" ? "" : l.num + ". "}${l.title}</b> 단락을 인쇄용 A4 학습지로 내려받아요. 넣을 내용을 골라 주세요.</p>
      <div class="check-list">
        <label><input type="checkbox" name="easy" checked><span>💡 쉽게 이해하기<small>비유·그림 설명과 학습 목표</small></span></label>
        <label><input type="checkbox" name="deep" checked><span>📚 자세히 읽기<small>학습지 본문 상세 내용 (분량이 많을 수 있어요)</small></span></label>
        <label><input type="checkbox" name="keys" checked><span>📌 핵심 정리 + 메모 칸</span></label>
        ${isDraw ? `<label><input type="checkbox" name="write" checked><span>✍️ 따라 쓰기 칸<small>한자를 직접 써 볼 수 있는 연습장</small></span></label>` : ""}
        <label><input type="checkbox" name="quiz" checked><span>✏️ 확인 문제<small>단락 퀴즈를 시험지 형태로</small></span></label>
        <label><input type="checkbox" name="answers" checked><span>✅ 정답과 해설<small>마지막 페이지에 따로 정리</small></span></label>
      </div>
      <div class="modal-actions"><button class="btn" data-print>🖨️ 인쇄하기</button><button class="btn btn-primary" data-dl>⬇️ PDF 다운로드</button></div>`);
    const opts = () => { const o = {}; m.querySelectorAll("input").forEach(i => o[i.name] = i.checked); return o; };
    m.querySelector("[data-dl]").onclick = () => { const o = opts(); m.remove(); window.PDF.lesson(l, o, S); };
    m.querySelector("[data-print]").onclick = () => { const o = opts(); m.remove(); window.PDF.print(l, o, S); };
  }

  // ─────────── final exam ───────────
  let F = null; // { order:[bankIdx], opt:[[perm]], answers:[], i }
  const shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  function renderFinal() {
    const B = window.FINAL_BANK;
    if (!F) {
      const done = doneCount();
      view.innerHTML = `<section class="view"><div class="panel final-intro">
        <div class="big">🏆</div><h1>최종 종합 평가</h1>
        <p style="color:var(--ink-2)">기초편 전체를 아우르는 실력 점검이에요. 긴장하지 말고 배운 대로 풀어 보세요!</p>
        <div class="rule-list">
          <div>📝 <span><b>${B.length}문항</b> · 4지선다 · 문항당 ${Math.round(100 / B.length * 10) / 10}점</span></div>
          <div>🔀 <span>문제와 보기 순서는 매번 섞여요</span></div>
          <div>↔️ <span>제출 전까지 이전 문제로 돌아가 답을 바꿀 수 있어요</span></div>
          <div>🎓 <span><b>${FINAL_PASS}점 이상</b>이면 수료증 PDF를 받을 수 있어요</span></div>
          <div>📊 <span>제출하면 단락별 정답률과 오답 해설을 보여 드려요</span></div>
        </div>
        ${done < LESSONS.length ? `<p class="small-note">💡 아직 ${LESSONS.length - done}개 단락의 퀴즈를 통과하지 않았어요. 먼저 공부해도 좋고, 실력 점검 삼아 바로 도전해도 좋아요!</p>` : ""}
        ${S.final.best != null ? `<p>지난 최고 점수: <b>${S.final.best}점</b></p>` : ""}
        <div class="result-actions"><button class="btn" data-go="#/">🏠 홈으로</button><button class="btn btn-primary" id="f-start">시작하기 →</button></div>
      </div></section>`;
      view.querySelectorAll("[data-go]").forEach(b => b.addEventListener("click", () => go(b.dataset.go)));
      $("#f-start").addEventListener("click", () => {
        F = { order: shuffle(B.map((_, k) => k)), answers: Array(B.length).fill(null), i: 0 };
        F.opt = F.order.map(k => shuffle(B[k].options.map((_, n) => n)));
        drawFinalQ();
      });
      return;
    }
    if (F.result) drawFinalResult(); else drawFinalQ();
  }
  function drawFinalQ() {
    const B = window.FINAL_BANK, n = B.length, q = B[F.order[F.i]], perm = F.opt[F.i];
    const answered = F.answers.filter(a => a != null).length;
    view.innerHTML = `<section class="view"><div class="panel">
      <div class="final-progress"><div style="width:${answered / n * 100}%"></div></div>
      <div class="final-meta"><span>문제 ${F.i + 1} / ${n}</span><span>답한 문제 ${answered} / ${n}</span></div>
      <div class="q-text">Q${F.i + 1}. ${q.q}</div>
      <div class="opts">${perm.map((orig, k) => `<button class="opt ${F.answers[F.i] === orig ? "picked" : ""}" data-o="${orig}"><span class="ok-num">${k + 1}</span><span>${q.options[orig]}</span></button>`).join("")}</div>
      <div class="lesson-nav"><button class="btn" id="f-prev" ${F.i === 0 ? "disabled" : ""}>← 이전</button>
        ${F.i < n - 1 ? `<button class="btn btn-primary" id="f-next">다음 →</button>` : `<button class="btn btn-primary" id="f-submit">제출하기 ✅</button>`}</div>
      <div class="jump-grid" aria-label="문항 바로가기">${F.order.map((_, k) => `<button class="${F.answers[k] != null ? "ans" : ""} ${k === F.i ? "cur" : ""}" data-j="${k}">${k + 1}</button>`).join("")}</div>
      <div style="text-align:center;margin-top:14px"><button class="btn btn-sm" id="f-quit">평가 그만두기</button></div>
    </div></section>`;
    view.querySelectorAll(".opt").forEach(b => b.addEventListener("click", () => {
      F.answers[F.i] = +b.dataset.o;
      if (F.i < n - 1) setTimeout(() => { F.i++; drawFinalQ(); }, 260); else drawFinalQ();
      view.querySelectorAll(".opt").forEach(x => x.classList.toggle("picked", x === b));
    }));
    $("#f-prev").addEventListener("click", () => { F.i--; drawFinalQ(); });
    const nx = $("#f-next"); if (nx) nx.addEventListener("click", () => { F.i++; drawFinalQ(); });
    const sb = $("#f-submit"); if (sb) sb.addEventListener("click", submitFinal);
    view.querySelectorAll("[data-j]").forEach(b => b.addEventListener("click", () => { F.i = +b.dataset.j; drawFinalQ(); }));
    $("#f-quit").addEventListener("click", () => {
      const m = modal(`<h3>평가를 그만둘까요?</h3><p class="sub">지금까지 고른 답은 저장되지 않아요.</p><div class="modal-actions"><button class="btn" data-x>계속 풀기</button><button class="btn btn-primary" data-ok>그만두기</button></div>`);
      m.querySelector("[data-x]").onclick = () => m.remove();
      m.querySelector("[data-ok]").onclick = () => { m.remove(); F = null; go("#/"); };
    });
  }
  function submitFinal() {
    const left = F.answers.filter(a => a == null).length;
    const doSubmit = () => {
      const B = window.FINAL_BANK;
      const items = F.order.map((k, pos) => ({ q: B[k], pick: F.answers[pos], ok: F.answers[pos] === B[k].answer }));
      const correct = items.filter(x => x.ok).length;
      const score = Math.round(correct / B.length * 100);
      const before = xp();
      S.final.best = Math.max(S.final.best || 0, score);
      S.final.last = { score, correct, date: new Date().toISOString() }; save();
      F.result = { items, correct, score, gain: xp() - before, date: new Date() };
      drawFinalResult();
    };
    if (left) {
      const m = modal(`<h3>아직 ${left}문제가 남았어요</h3><p class="sub">답하지 않은 문제는 오답으로 처리돼요. 그래도 제출할까요?</p><div class="modal-actions"><button class="btn" data-x>돌아가기</button><button class="btn btn-primary" data-ok>제출하기</button></div>`);
      m.querySelector("[data-x]").onclick = () => { m.remove(); F.i = F.answers.findIndex(a => a == null); drawFinalQ(); };
      m.querySelector("[data-ok]").onclick = () => { m.remove(); doSubmit(); };
    } else doSubmit();
  }
  function gradeOf(s) {
    if (s >= 95) return { g: "명리 고수 🏆", m: "거의 완벽해요! 기초가 아주 탄탄합니다." };
    if (s >= FINAL_PASS) return { g: "수료 합격 🎓", m: "축하해요! 기초편을 훌륭하게 마쳤어요." };
    if (s >= 60) return { g: "조금만 더! 💪", m: "기본기는 갖췄어요. 약한 단락만 복습하면 금방 합격이에요." };
    return { g: "복습이 필요해요 📚", m: "괜찮아요! 단락별 '쉽게 이해하기'부터 다시 차근차근 봐요." };
  }
  function drawFinalResult() {
    const R = F.result, G = gradeOf(R.score), pass = R.score >= FINAL_PASS;
    const perUnit = {};
    R.items.forEach(x => { const p = perUnit[x.q.unit] = perUnit[x.q.unit] || { ok: 0, n: 0 }; p.n++; if (x.ok) p.ok++; });
    const wrong = R.items.filter(x => !x.ok);
    view.innerHTML = `<section class="view"><div class="panel quiz-result">
      <div class="stamp ${pass ? "" : "fail"}"><div><span>${pass ? "修了" : "復習"}</span>${pass ? "수료 합격" : "다시 도전"}</div></div>
      <div class="score-big">${R.score}<small>점</small></div>
      <div class="grade-chip">${G.g}</div>
      <p>${B_len()}문제 중 <b>${R.correct}문제</b> 정답 · ${G.m}</p>
      ${R.gain > 0 ? `<div class="xp-gain">+${R.gain} XP</div>` : ""}
      <h3 style="text-align:left">📊 단락별 정답률</h3>
      <div class="unit-bars">${LESSONS.filter(l => perUnit[l.id]).map(l => {
        const p = perUnit[l.id], r = Math.round(p.ok / p.n * 100);
        return `<div class="unit-bar"><span>${l.emoji} ${l.title}</span><div class="track"><div class="fill ${r >= 80 ? "" : r >= 50 ? "mid" : "low"}" style="width:${Math.max(r, 4)}%"></div></div><span>${p.ok}/${p.n}</span></div>`;
      }).join("")}</div>
      ${wrong.length ? `<h3 style="text-align:left">📝 오답 노트 (${wrong.length}문제)</h3>
      <div class="review-list">${wrong.map(x => `<div class="review-item no"><div class="rq">❌ ${x.q.q}</div>
        <div class="ra">내 답: ${x.pick == null ? "(미응답)" : x.q.options[x.pick]} · 정답: <b>${x.q.options[x.q.answer]}</b><br>${x.q.explain}
        <br><button class="btn btn-sm btn-soft" style="margin-top:6px" data-go="#/lesson/${x.q.unit}/0">${byId(x.q.unit).emoji} ${byId(x.q.unit).title} 복습하기</button></div></div>`).join("")}</div>` : `<p>🎉 오답이 하나도 없어요!</p>`}
      <div class="result-actions">
        <button class="btn btn-indigo" id="f-pdf">📄 ${pass ? "수료증 + 결과" : "결과·오답노트"} PDF</button>
        <button class="btn" id="f-retry">🔁 다시 도전</button>
        <button class="btn btn-primary" data-go="#/">🏠 홈으로</button>
      </div></div></section>`;
    view.querySelectorAll("[data-go]").forEach(b => b.addEventListener("click", () => { F = null; go(b.dataset.go); }));
    $("#f-retry").addEventListener("click", () => { F = null; renderFinal(); });
    $("#f-pdf").addEventListener("click", () => window.PDF.final(R, perUnit, pass, G));
    renderTop();
    if (pass) confetti(50);
  }
  const B_len = () => window.FINAL_BANK.length;

  // public helpers for widgets/pdf
  window.App = {
    toast,
    markDrawn(c) { S.drawn[c] = true; save(); },
    busy(on, msg) {
      let b = document.getElementById("busy");
      if (on) { if (!b) { b = document.createElement("div"); b.id = "busy"; b.className = "busy"; document.body.appendChild(b); } b.innerHTML = `<div><div class="spin"></div><b>${msg || "PDF를 만드는 중이에요…"}</b><p style="color:var(--ink-3);font-size:.9rem">분량에 따라 10~30초 정도 걸려요.</p></div>`; }
      else if (b) b.remove();
    },
    LESSONS, STAGES
  };

  $("#brand").addEventListener("click", () => go("#/"));
  route();
})();
