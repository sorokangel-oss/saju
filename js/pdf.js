// A4 학습지 PDF 생성 (html2pdf.js) + 브라우저 인쇄 대체 경로
(function () {
  const LIB = "https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js";
  // A4 여백(mm): 위·왼·아래·오른
  const M = { t: 17, l: 13, b: 15, r: 13 };
  const INNER_W_MM = 210 - M.l - M.r, INNER_H_MM = 297 - M.t - M.b;
  const PX = 96 / 25.4;
  const INNER_W = Math.floor(INNER_W_MM * PX), INNER_H = Math.floor(INNER_H_MM * PX);
  const CHUNK_MAX = INNER_H * 4; // 캔버스 한도를 넘지 않도록 약 4쪽씩 나눠 렌더링

  let libPromise = null;
  const loadLib = () => libPromise || (libPromise = new Promise((res, rej) => {
    if (window.html2pdf) return res();
    const s = document.createElement("script"); s.src = LIB; s.onload = res;
    s.onerror = () => { libPromise = null; rej(new Error("PDF 라이브러리를 불러오지 못했어요")); };
    document.head.appendChild(s);
  }));

  const qText = (q) => q.type === "ox" ? ["O", "X"] : q.options;
  const circled = ["①", "②", "③", "④"];
  const today = () => { const d = new Date(); return `${d.getFullYear()}. ${d.getMonth() + 1}. ${d.getDate()}.`; };
  const unitLabel = (l) => (l.num === "0" ? "" : l.num + ". ") + l.title;

  // ─────────── content → sections of blocks ───────────
  function toBlocks(html, { flatten = [], wrap = "" } = {}) {
    const box = document.createElement("div"); box.innerHTML = html;
    const out = [];
    const walk = (parent) => {
      [...parent.children].forEach(el => {
        if (flatten.some(c => el.classList.contains(c))) return walk(el);
        out.push(el.outerHTML);
      });
    };
    walk(box);
    // 제목은 다음 블록과 붙여서 페이지 끝에 홀로 남지 않게
    const merged = [];
    for (let i = 0; i < out.length; i++) {
      if (/^<h[34]/.test(out[i]) && i + 1 < out.length) { merged.push(out[i] + out[i + 1]); i++; }
      else merged.push(out[i]);
    }
    return wrap ? merged.map(b => `<div class="${wrap}">${b}</div>`) : merged;
  }

  function staticize(html) {
    const box = document.createElement("div"); box.innerHTML = html;
    box.querySelectorAll(".widget-slot").forEach(s => {
      const w = s.dataset.widget;
      const st = (w === "draw-stems" || w === "draw-branches") ? "" : window.Widgets.staticHTML(w);
      s.outerHTML = st ? `<div class="static-widget">${st}</div>` : "";
    });
    return box.innerHTML;
  }

  function cover(l) {
    return `<div class="pdf-cover"><div class="pc-emoji">${l.emoji}</div><div><small>유천도사 사주 학습지 · 기초편 · ${l.stage}단계</small>
      <h1>${unitLabel(l)} <span class="pc-hz">${l.hanja}</span></h1><p>${l.tagline}</p></div>
      <div class="pdf-namebox">학습일: ______ . ____ . ____<br>이름: ____________________<br>복습: ☐1 ☐2 ☐3 ☐4 ☐5 ☐10</div></div>`;
  }

  function lessonSections(l, o, S) {
    const secs = [];
    const first = [cover(l)];
    if (o.easy) {
      first.push(`<div class="pdf-goals"><b>🎯 오늘의 학습 목표</b><ul>${l.goals.map(g => `<li>${g}</li>`).join("")}</ul></div>`);
      first.push(`<h2>💡 쉽게 이해하기</h2>`);
      first.push(...toBlocks(staticize(l.easy)));
      first.push(`<div class="tip-box"><div>🍯</div><div><h4>암기 꿀팁</h4><p>${l.tip}</p></div></div>`);
    }
    secs.push(first);
    if (o.deep) {
      const t = window.sajuTheoryData[l.id];
      secs.push([`<h2>📚 자세히 읽기 — ${t.subtitle}</h2>`, ...toBlocks(t.content, { flatten: ["theory-section", "accordion", "kanji-guide-list", "kanji-etymology"], wrap: "theory-wrap" })]);
    }
    if (o.keys) {
      const memo = (S.memo[l.id] || "").trim();
      secs.push([`<h2>📌 핵심 정리</h2>`, `<ol class="pdf-keys">${l.keypoints.map(k => `<li>${k}</li>`).join("")}</ol>`,
        `<div class="tip-box"><div>🍯</div><div><h4>암기 꿀팁</h4><p>${l.tip}</p></div></div>`,
        `<h3>📝 나의 메모</h3><div class="pdf-memo">${memo ? memo.replace(/[&<>]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c])).replace(/\n/g, "<br>") : "배운 내용을 내 말로 정리해 보세요."}</div>`]);
    }
    if (o.write && (l.widget === "draw-stems" || l.widget === "draw-branches")) {
      const sheet = document.createElement("div"); sheet.innerHTML = window.Widgets.staticHTML(l.widget);
      const rows = [...sheet.querySelectorAll(".write-row")].map(r => r.outerHTML);
      secs.push([`<h2>✍️ 따라 쓰기 연습</h2>`, `<p>진한 글자를 보고, 흐린 글자를 따라 쓴 뒤 빈칸에 혼자 써 보세요. 획순은 앞의 설명을 참고해요.</p>`, ...rows]);
    }
    if (o.quiz) {
      secs.push([`<h2>✏️ 확인 문제</h2>`, `<p style="color:#555">맞힌 개수: ______ / ${l.quiz.length} &nbsp;(${Math.ceil(l.quiz.length * .6)}개 이상이면 통과!)</p>`,
        ...l.quiz.map((q, i) => `<div class="pdf-q"><span class="ansbox">답:</span><span class="qn">${i + 1}. ${q.type === "ox" ? "[OX] " : ""}${q.q}</span>
          <div class="qo ${q.type === "ox" ? "ox" : ""}">${qText(q).map((t, k) => `<span>${q.type === "ox" ? (k ? "X (아니다)" : "O (맞다)") : circled[k] + " " + t}</span>`).join("")}</div></div>`)]);
    }
    if (o.answers) {
      secs.push([`<h2>✅ 정답과 해설</h2>`, `<div class="pdf-answers">${l.quiz.map((q, i) => `<div class="pa"><b>${i + 1}. 정답 ${q.type === "ox" ? ["O", "X"][q.answer] : circled[q.answer] + " " + q.options[q.answer]}</b><br>${q.explain}</div>`).join("")}</div>`]);
    }
    return secs;
  }

  // ─────────── measure & pack ───────────
  async function pack(sections) {
    const stage = document.createElement("div");
    stage.style.cssText = `position:absolute;left:-10000px;top:0;width:${INNER_W - 12}px;visibility:hidden`;
    document.body.appendChild(stage);
    const chunks = [];
    for (const blocks of sections) {
      stage.innerHTML = `<div class="pdf-doc">${blocks.map(b => `<div class="pdf-block">${b}</div>`).join("")}</div>`;
      await new Promise(r => setTimeout(r, 0));
      const els = [...stage.querySelectorAll(".pdf-block")];
      let cur = [], h = 0;
      els.forEach((el, i) => {
        const bh = el.getBoundingClientRect().height + 8;
        if (bh < INNER_H * .55) el.classList.add("pdf-avoid");
        if (cur.length && h + bh > CHUNK_MAX) { chunks.push(cur); cur = []; h = 0; }
        cur.push(el.outerHTML); h += bh;
      });
      if (cur.length) chunks.push(cur);
    }
    stage.remove();
    return chunks.map(c => { const d = document.createElement("div"); d.className = "pdf-doc"; d.style.width = (INNER_W - 12) + "px"; d.innerHTML = c.join(""); return d; });
  }

  function headerImage(right) {
    const W = 1400, H = 56, c = document.createElement("canvas"); c.width = W; c.height = H;
    const x = c.getContext("2d");
    x.fillStyle = "#fff"; x.fillRect(0, 0, W, H);
    x.font = '500 24px "Noto Sans KR", "Malgun Gothic", sans-serif'; x.fillStyle = "#c2410c"; x.textBaseline = "middle";
    x.fillText("🧙 유천도사 사주 학습지 · 기초편", 0, H / 2 - 4);
    x.fillStyle = "#777"; x.textAlign = "right"; x.fillText(right, W, H / 2 - 4);
    x.fillStyle = "#d9d2c5"; x.fillRect(0, H - 3, W, 2);
    return { data: c.toDataURL("image/png"), ratio: H / W };
  }

  async function render(sections, filename, headerRight) {
    window.App.busy(true);
    try {
      await loadLib();
      if (document.fonts) {
        await Promise.all([
          document.fonts.load('400 16px "Noto Sans KR"', "가나다"), document.fonts.load('700 16px "Noto Sans KR"', "가나다"),
          document.fonts.load('700 24px "Noto Serif KR"', "甲乙丙丁子丑寅卯")
        ]).catch(() => { });
        await document.fonts.ready;
      }
      const chunks = await pack(sections);
      const sy = window.scrollY; window.scrollTo(0, 0);
      const opt = {
        margin: [M.t, M.l, M.b, M.r], filename,
        image: { type: "jpeg", quality: 0.92 },
        html2canvas: { scale: 2, useCORS: true, scrollX: 0, scrollY: 0, backgroundColor: "#ffffff", logging: false },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait", compress: true },
        pagebreak: { mode: ["css", "legacy"], avoid: [".pdf-avoid", "tr", ".pdf-q", ".pa", ".write-row", ".pdf-cover", ".cert"] }
      };
      let worker = window.html2pdf().set(opt).from(chunks[0]).toPdf();
      for (const c of chunks.slice(1)) {
        worker = worker.get("pdf").then(pdf => { pdf.addPage(); }).from(c).toContainer().toCanvas().toPdf();
      }
      const hd = headerImage(headerRight);
      await worker.get("pdf").then(pdf => {
        const n = pdf.internal.getNumberOfPages();
        for (let i = 1; i <= n; i++) {
          pdf.setPage(i);
          pdf.addImage(hd.data, "PNG", M.l, 7, INNER_W_MM, INNER_W_MM * hd.ratio);
          pdf.setFontSize(8.5); pdf.setTextColor(150);
          pdf.text(`- ${i} / ${n} -`, 105, 289, { align: "center" });
        }
      });
      await worker.save();
      window.scrollTo(0, sy);
      window.App.toast("📄 PDF를 내려받았어요!");
    } catch (e) {
      console.error(e);
      window.App.toast("PDF를 만들지 못했어요. '인쇄하기 → PDF로 저장'을 이용해 주세요.", 4200);
    } finally {
      window.App.busy(false);
    }
  }

  // 브라우저 인쇄(→ PDF로 저장) 대체 경로
  function printSections(sections) {
    let root = document.getElementById("print-root");
    if (!root) { root = document.createElement("div"); root.id = "print-root"; document.body.appendChild(root); }
    root.innerHTML = sections.map((blocks, i) => `<div class="pdf-doc ${i ? "pdf-break" : ""}">${blocks.join("")}</div>`).join("");
    setTimeout(() => { window.print(); }, 300);
  }

  // ─────────── documents ───────────
  function summarySections(S) {
    const L = window.LESSONS;
    const secs = [[`<div class="pdf-cover"><div class="pc-emoji">📑</div><div><small>유천도사 사주 학습지 · 기초편</small><h1>전체 핵심 요약 노트</h1><p>14개 단락의 꼭 기억할 내용만 모았어요. 시험 전, 자기 전에 한 번씩!</p></div>
      <div class="pdf-namebox">출력일: ${today()}<br>이름: ____________________</div></div>`]];
    window.STAGES.forEach((st, si) => {
      const blocks = si === 0 ? secs[0] : [];
      blocks.push(`<h2>${st.emoji} ${st.id}단계 · ${st.name}</h2>`);
      L.filter(l => l.stage === st.id).forEach(l => {
        const u = S.units[l.id];
        blocks.push(`<div><h3>${l.emoji} ${unitLabel(l)} <span style="font-weight:400;color:#777;font-size:10pt">${l.hanja} · ${u && u.passed ? `퀴즈 ${u.best}/${l.quiz.length} ✓` : "☐ 학습 전"}</span></h3>
          <ol class="pdf-keys">${l.keypoints.map(k => `<li>${k}</li>`).join("")}</ol>
          <p style="margin-top:6px;font-size:9.5pt">🍯 ${l.tip}</p></div>`);
      });
      if (si > 0) secs.push(blocks);
    });
    return secs;
  }

  function finalSections(R, perUnit, pass, G) {
    const L = window.LESSONS, d = R.date || new Date();
    const ds = `${d.getFullYear()}년 ${d.getMonth() + 1}월 ${d.getDate()}일`;
    const first = [];
    if (pass) {
      first.push(`<div class="cert"><div style="font-size:30pt">🏆</div><div class="cert-title">수 료 증</div>
        <p>성명: ______________________</p>
        <p>위 사람은 <b>유천도사 사주 학습지 · 기초편</b> 전 과정을 학습하고<br>최종 종합 평가에서 아래와 같이 우수한 성적을 거두었기에 이 증서를 드립니다.</p>
        <div class="cert-score">${R.score}점</div><p>${window.FINAL_BANK.length}문항 중 ${R.correct}문항 정답 · ${G.g.replace(/\s*\S+$/, "")}</p>
        <p style="margin-top:14pt">${ds}</p><div class="cert-seal">유천<br>도사</div></div>`);
    } else {
      first.push(`<div class="pdf-cover"><div class="pc-emoji">📊</div><div><small>유천도사 사주 학습지 · 기초편</small><h1>최종 종합 평가 결과</h1><p>${ds} · ${R.score}점 (${R.correct}/${window.FINAL_BANK.length}) · ${G.g}</p></div></div>`);
    }
    first.push(`<h2>📊 단락별 정답률</h2><table><tr><th>단락</th><th>정답</th><th>정답률</th><th>복습 필요</th></tr>${L.filter(l => perUnit[l.id]).map(l => {
      const p = perUnit[l.id], r = Math.round(p.ok / p.n * 100);
      return `<tr><td>${l.emoji} ${unitLabel(l)}</td><td style="text-align:center">${p.ok} / ${p.n}</td><td style="text-align:center">${r}%</td><td style="text-align:center">${r < 100 ? "☐" : "—"}</td></tr>`;
    }).join("")}</table>`);
    const secs = [first];
    const wrong = R.items.filter(x => !x.ok);
    if (wrong.length) {
      secs.push([`<h2>📝 오답 노트 (${wrong.length}문제)</h2>`, ...wrong.map((x, i) => `<div class="pdf-q"><span class="qn">${i + 1}. ${x.q.q}</span>
        <div class="qo">${x.q.options.map((t, k) => `<span>${circled[k]} ${t}${k === x.q.answer ? " ✅" : k === x.pick ? " ✗" : ""}</span>`).join("")}</div>
        <p style="margin:4pt 0 0 14pt;font-size:9.5pt;color:#444">💬 ${x.q.explain} <i>(${(L.find(l => l.id === x.q.unit) || {}).title} 복습)</i></p></div>`)]);
    }
    return secs;
  }

  window.PDF = {
    lesson(l, o, S) {
      const name = `사주러닝_기초편_${l.num === "0" ? "00" : l.num}_${l.title.replace(/\s+/g, "")}.pdf`;
      render(lessonSections(l, o, S), name, unitLabel(l));
    },
    print(l, o, S) { printSections(lessonSections(l, o, S)); },
    summary(S) { render(summarySections(S), "사주러닝_기초편_핵심요약노트.pdf", "전체 핵심 요약 노트"); },
    final(R, perUnit, pass, G) { render(finalSections(R, perUnit, pass, G), `사주러닝_기초편_종합평가_${R.score}점.pdf`, "최종 종합 평가 결과"); }
  };
})();
