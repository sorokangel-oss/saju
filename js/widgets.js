// 인터랙티브 위젯 + PDF용 정적 버전
(function () {
  const EL = { "甲": "wood", "乙": "wood", "丙": "fire", "丁": "fire", "戊": "earth", "己": "earth", "庚": "metal", "辛": "metal", "壬": "water", "癸": "water",
    "寅": "wood", "卯": "wood", "巳": "fire", "午": "fire", "辰": "earth", "戌": "earth", "丑": "earth", "未": "earth", "申": "metal", "酉": "metal", "亥": "water", "子": "water" };
  const EL_KO = { wood: "木 나무", fire: "火 불", earth: "土 흙", metal: "金 쇠", water: "水 물" };

  const STEMS = [
    { c: "甲", r: "갑", yy: "양목", em: "🌳", d: "곧게 뻗은 거목·대나무. 추진력, 시작과 우두머리" },
    { c: "乙", r: "을", yy: "음목", em: "🌿", d: "휘어도 꺾이지 않는 화초·넝쿨. 적응력, 부드러운 생명력" },
    { c: "丙", r: "병", yy: "양화", em: "☀️", d: "하늘의 태양. 만물을 공평하게 비추는 확산의 힘" },
    { c: "丁", r: "정", yy: "음화", em: "🕯️", d: "등대·모닥불·촛불. 헌신성, 정밀한 정신력" },
    { c: "戊", r: "무", yy: "양토", em: "⛰️", d: "광활한 대지·높은 산. 신용과 안정감" },
    { c: "己", r: "기", yy: "음토", em: "🌾", d: "비옥한 밭·정원 흙. 어머니 같은 수용성과 치밀함" },
    { c: "庚", r: "경", yy: "양금", em: "🪨", d: "원석·무쇠·바위. 과단성, 개혁과 의리" },
    { c: "辛", r: "신", yy: "음금", em: "💎", d: "보석·칼날. 섬세함과 단호한 결단력" },
    { c: "壬", r: "임", yy: "양수", em: "🌊", d: "거대한 바다·강물. 유연한 생각과 유통의 힘" },
    { c: "癸", r: "계", yy: "음수", em: "🌧️", d: "이슬비·샘물. 지혜롭고 사색적, 침투력" }
  ];

  const BRANCHES = {
    "子": { r: "자", an: "🐭 쥐", m: "음력 11월", s: "겨울의 절정", t: "23:30~01:30", yy: "음수", d: "한겨울 깊은 어둠 속에서 새로운 양의 씨앗이 태동하는 지혜의 원천" },
    "丑": { r: "축", an: "🐮 소", m: "음력 12월", s: "겨울→봄 환절기", t: "01:30~03:30", yy: "음토", d: "얼어붙은 땅속에서 봄의 싹을 위해 묵묵히 인내하는 동토(凍土)" },
    "寅": { r: "인", an: "🐯 호랑이", m: "음력 1월", s: "초봄의 시작", t: "03:30~05:30", yy: "양목", d: "땅을 뚫고 솟구치는 강력한 힘과 독립적인 추진력" },
    "卯": { r: "묘", an: "🐰 토끼", m: "음력 2월", s: "봄의 절정", t: "05:30~07:30", yy: "음목", d: "사방으로 뻗는 초목의 생명력, 유연함과 친화력" },
    "辰": { r: "진", an: "🐲 용", m: "음력 3월", s: "봄→여름 환절기", t: "07:30~09:30", yy: "양토", d: "변화무쌍하며 만물을 조율하고 확장하는 힘" },
    "巳": { r: "사", an: "🐍 뱀", m: "음력 4월", s: "초여름의 시작", t: "09:30~11:30", yy: "양화", d: "양기가 치솟으며 폭발적인 열정과 활동성을 품음" },
    "午": { r: "오", an: "🐴 말", m: "음력 5월", s: "여름의 절정", t: "11:30~13:30", yy: "음화", d: "가장 밝은 태양. 극에 달한 양기가 음기로 바뀌는 기점" },
    "未": { r: "미", an: "🐑 양", m: "음력 6월", s: "여름→가을 환절기", t: "13:30~15:30", yy: "음토", d: "열기를 품은 마른 흙. 성장을 멈추고 결실을 준비" },
    "申": { r: "신", an: "🐵 원숭이", m: "음력 7월", s: "초가을의 시작", t: "15:30~17:30", yy: "양금", d: "결실을 위해 단단해지기 시작하는 원석의 기운" },
    "酉": { r: "유", an: "🐔 닭", m: "음력 8월", s: "가을의 절정", t: "17:30~19:30", yy: "음금", d: "정제된 보석·칼날. 완성된 결실과 냉철한 분별력" },
    "戌": { r: "술", an: "🐶 개", m: "음력 9월", s: "가을→겨울 환절기", t: "19:30~21:30", yy: "양토", d: "생명력을 땅속에 묻어 보관하는 건조하고 단단한 대지" },
    "亥": { r: "해", an: "🐷 돼지", m: "음력 10월", s: "초겨울의 시작", t: "21:30~23:30", yy: "양수", d: "내면으로 침잠하며 생명의 씨앗을 잉태하는 기운" }
  };
  // 남쪽(午)이 위, 동쪽(卯)이 왼쪽인 동양식 배치 — 시계 방향
  const WHEEL = ["午", "未", "申", "酉", "戌", "亥", "子", "丑", "寅", "卯", "辰", "巳"];

  const HIDDEN = {
    "子": [["壬", 10], null, ["癸", 20]], "丑": [["癸", 9], ["辛", 3], ["己", 18]], "寅": [["戊", 7], ["丙", 7], ["甲", 16]],
    "卯": [["甲", 10], null, ["乙", 20]], "辰": [["乙", 9], ["癸", 3], ["戊", 18]], "巳": [["戊", 7], ["庚", 7], ["丙", 16]],
    "午": [["丙", 10], ["己", 10], ["丁", 10]], "未": [["丁", 9], ["乙", 3], ["己", 18]], "申": [["戊", 7], ["壬", 7], ["庚", 16]],
    "酉": [["庚", 10], null, ["辛", 20]], "戌": [["辛", 9], ["丁", 3], ["戊", 18]], "亥": [["戊", 7], ["甲", 7], ["壬", 16]]
  };
  const BR_ORDER = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];
  const BR_TYPE = { "寅": "생지", "申": "생지", "巳": "생지", "亥": "생지", "子": "왕지", "卯": "왕지", "午": "왕지", "酉": "왕지", "辰": "고지", "戌": "고지", "丑": "고지", "未": "고지" };

  const BAGUA = [
    { k: "손", h: "巽", n: "바람(風)", dir: "동남", br: "辰·巳", d: "늦봄에서 초여름, 기운이 사방으로 스며들며 번지는 시기" },
    { k: "리", h: "離", n: "불(火)", dir: "정남", br: "午", d: "여름의 한가운데, 문명과 광명이 가장 찬란하게 드러나는 시기" },
    { k: "곤", h: "坤", n: "땅(地)", dir: "남서", br: "未·申", d: "늦여름에서 초가을, 만물을 포용하고 결실로 넘겨주는 터전" },
    { k: "진", h: "震", n: "우레(雷)", dir: "정동", br: "卯", d: "봄의 한가운데, 만물이 솟구쳐 시작하는 기운" },
    null,
    { k: "태", h: "兌", n: "연못(澤)", dir: "정서", br: "酉", d: "가을의 한가운데, 수확의 기쁨과 수렴하는 기운" },
    { k: "간", h: "艮", n: "산(山)", dir: "북동", br: "丑·寅", d: "늦겨울에서 초봄, 밤새 멈추었다가 새벽을 열어주는 전환점" },
    { k: "감", h: "坎", n: "물(水)", dir: "정북", br: "子", d: "겨울의 한가운데, 어둠 속에서 새로운 생명을 응축하는 지혜" },
    { k: "건", h: "乾", n: "하늘(天)", dir: "북서", br: "戌·亥", d: "늦가을에서 초겨울, 완성된 기운을 저장하고 정리하는 시기" }
  ];

  const PILLARS = [
    { col: "시주(時)", top: "己", bot: "丑", hid: "癸 辛 己" },
    { col: "일주(日)", top: "辛", bot: "丑", hid: "癸 辛 己" },
    { col: "월주(月)", top: "甲", bot: "戌", hid: "辛 丁 戊" },
    { col: "년주(年)", top: "甲", bot: "寅", hid: "戊 丙 甲" }
  ];
  const PILLAR_INFO = {
    "0t": "<b>시간(時干) 己</b> — 태어난 시각의 하늘 기운. 己土는 비옥한 밭 흙이에요.",
    "0b": "<b>시지(時支) 丑</b> — 태어난 시각(01:30~03:30)의 땅 기운. 겨울→봄 환절기의 흙이에요.",
    "1t": "<b>일간(日干) 辛</b> — ⭐ 이 사주의 주인공 '나'예요! 辛金은 반짝이는 보석. 문장의 '주어'에 해당해요.",
    "1b": "<b>일지(日支) 丑</b> — 내가 앉아 있는 자리. 나와 가장 가까운 환경이에요.",
    "2t": "<b>월간(月干) 甲</b> — 태어난 달의 하늘 기운. 甲木은 곧게 뻗은 큰 나무예요.",
    "2b": "<b>월지(月支) 戌 = 월령</b> — 태어난 계절(늦가을, 음력 9월). 사주 전체의 환경을 정하는 '목적어'예요.",
    "3t": "<b>연간(年干) 甲</b> — 태어난 해의 하늘 기운. 갑인년생!",
    "3b": "<b>연지(年支) 寅</b> — 태어난 해의 땅 기운이자 '띠'. 寅은 호랑이띠예요 🐯"
  };

  const CYCLE = ["木", "火", "土", "金", "水"];
  const CYCLE_EL = { "木": "wood", "火": "fire", "土": "earth", "金": "metal", "水": "water" };
  const HAP = [["子", "丑", "土"], ["寅", "亥", "木"], ["卯", "戌", "火"], ["辰", "酉", "金"], ["巳", "申", "水"], ["午", "未", "火"]];
  const CHUNG = [["子", "午"], ["丑", "未"], ["寅", "申"], ["卯", "酉"], ["辰", "戌"], ["巳", "亥"]];

  const cssVar = (n) => getComputedStyle(document.documentElement).getPropertyValue(n).trim();
  const h = (html) => { const t = document.createElement("template"); t.innerHTML = html.trim(); return t.content.firstElementChild; };

  // ─────────── interactive builders ───────────
  const builders = {
    pillars(slot) {
      const w = h(`<div class="widget"><div class="widget-title">🏠 사주 원국 예시 — 甲寅年 甲戌月 辛丑日 己丑時 (곤명)</div>
        <div class="pillars">
          <div></div>${PILLARS.map(p => `<div class="ph">${p.col}</div>`).join("")}
          <div class="rowlabel">천간<br>(위층)</div>${PILLARS.map((p, i) => `<button class="pillar-cell c-${EL[p.top]} ${i === 1 ? "me" : ""}" data-k="${i}t">${p.top}</button>`).join("")}
          <div class="rowlabel">지지<br>(아래층)</div>${PILLARS.map((p, i) => `<button class="pillar-cell c-${EL[p.bot]}" data-k="${i}b">${p.bot}</button>`).join("")}
          <div class="rowlabel">지장간</div>${PILLARS.map(p => `<div class="ph hz">${p.hid}</div>`).join("")}
        </div>
        <div class="widget-detail"><span class="hint">👆 글자를 눌러 보세요. 주황 테두리가 '나(일간)'예요.</span></div></div>`);
      w.querySelectorAll(".pillar-cell").forEach(b => b.addEventListener("click", () => {
        w.querySelectorAll(".pillar-cell").forEach(x => x.classList.remove("sel")); b.classList.add("sel");
        w.querySelector(".widget-detail").innerHTML = PILLAR_INFO[b.dataset.k];
      }));
      slot.replaceWith(w);
    },
    bagua(slot) {
      const w = h(`<div class="widget"><div class="widget-title">🧭 후천팔괘 방위도 (위쪽이 남쪽!)</div>
        <div class="compass-label">▲ 남(南)</div>
        <div class="bagua">${BAGUA.map((g, i) => g ? `<button data-i="${i}"><b>${g.h}</b>${g.k} · ${g.n}<small>${g.dir} · ${g.br}</small></button>` : `<button class="center" data-i="c">☯️</button>`).join("")}</div>
        <div class="compass-label">▼ 북(北) &nbsp;·&nbsp; 왼쪽이 동(東), 오른쪽이 서(西)</div>
        <div class="widget-detail"><span class="hint">👆 괘를 눌러 계절과 의미를 확인해요.</span></div></div>`);
      w.querySelectorAll(".bagua button").forEach(b => b.addEventListener("click", () => {
        w.querySelectorAll(".bagua button").forEach(x => x.classList.remove("sel")); b.classList.add("sel");
        const g = BAGUA[b.dataset.i];
        w.querySelector(".widget-detail").innerHTML = g ? `<b>${g.h} ${g.k}괘 · ${g.n}</b> — ${g.dir}, 지지 ${g.br}<br>${g.d}` :
          "<b>☯️ 중앙</b> — 하늘과 땅(건·곤)의 무대 위에서 물과 불(감·리)이 순환하고, 바람과 우레(손·진)가 만물을 깨우며, 산과 연못(간·태)이 기운을 거두어요.";
      }));
      slot.replaceWith(w);
    },
    stems(slot) {
      const w = h(`<div class="widget"><div class="widget-title">🃏 천간 카드 뒤집기 <small style="font-weight:400;color:var(--ink-3)">(눌러서 뒤집어요)</small></div>
        <div class="flip-grid">${STEMS.map(s => `<button class="flip" aria-label="${s.c} ${s.r}"><div class="flip-inner">
          <div class="flip-face c-${EL[s.c]}"><span class="hz">${s.c}</span><small>${s.r} · ${s.yy}</small></div>
          <div class="flip-face flip-back c-${EL[s.c]}"><span class="em">${s.em}</span>${s.d}</div></div></button>`).join("")}</div>
        <div class="draw-tools"><button class="btn btn-sm btn-soft" data-a="all">모두 뒤집기</button><button class="btn btn-sm" data-a="reset">처음으로</button></div></div>`);
      w.querySelectorAll(".flip").forEach(f => f.addEventListener("click", () => f.classList.toggle("on")));
      w.querySelector('[data-a="all"]').onclick = () => w.querySelectorAll(".flip").forEach(f => f.classList.add("on"));
      w.querySelector('[data-a="reset"]').onclick = () => w.querySelectorAll(".flip").forEach(f => f.classList.remove("on"));
      slot.replaceWith(w);
    },
    branches(slot) {
      const w = h(`<div class="widget"><div class="widget-title">🎡 12지지 원판 (위=남쪽 午, 아래=북쪽 子)</div>
        <div class="wheel-wrap"><div class="wheel">${wheelNodes()}<div class="wheel-center">글자를<br>눌러 보세요</div></div>
        <div class="widget-detail"><span class="hint">👆 원판의 글자를 누르면 띠·계절·시간을 알려 드려요.</span></div></div></div>`);
      w.querySelectorAll(".wheel-node").forEach(b => b.addEventListener("click", () => {
        w.querySelectorAll(".wheel-node").forEach(x => x.classList.remove("sel")); b.classList.add("sel");
        const c = b.dataset.c, d = BRANCHES[c];
        w.querySelector(".wheel-center").innerHTML = `<div><span class="hz" style="font-size:2.2rem;font-weight:700;color:var(--ink)">${c}</span><br>${d.an}</div>`;
        w.querySelector(".widget-detail").innerHTML = `<b>${c} (${d.r}) · ${d.yy} · ${d.an}</b><br>📅 ${d.m} · ${d.s}<br>⏰ ${d.t}<br>💬 ${d.d}`;
      }));
      slot.replaceWith(w);
    },
    hidden(slot) {
      const w = h(`<div class="widget"><div class="widget-title">🔍 12지지 지장간 (30일 막대)</div>
        <div class="hb-legend"><span>연한색 = 여기(남은 기운)</span><span>중간색 = 중기</span><span>진한색 = 정기(주인)</span></div>
        <div class="hidden-bars">${BR_ORDER.map(c => `<button class="hb-row" data-c="${c}"><span class="hz">${c}</span><div class="hb-bar">${
          HIDDEN[c].map((x, i) => x ? `<div class="hb-seg bg-${EL[x[0]]} ${["yeo", "jung", ""][i]}" style="flex:${x[1]}">${x[0]}</div>` : "").join("")}</div></button>`).join("")}</div>
        <div class="widget-detail"><span class="hint">👆 막대를 누르면 날짜 배분을 자세히 볼 수 있어요.</span></div></div>`);
      w.querySelectorAll(".hb-row").forEach(b => b.addEventListener("click", () => {
        w.querySelectorAll(".hb-row").forEach(x => x.classList.remove("sel")); b.classList.add("sel");
        const c = b.dataset.c, x = HIDDEN[c], t = BR_TYPE[c];
        const part = (v, name) => v ? `${name} <b class="hz">${v[0]}</b> ${v[1]}일` : `${name} 없음`;
        w.querySelector(".widget-detail").innerHTML = `<b><span class="hz">${c}</span> — ${t}</b><br>🧳 ${part(x[0], "여기")} &nbsp; 🌱 ${part(x[1], "중기")} &nbsp; 👑 ${part(x[2], "정기")}` +
          (c === "午" ? "<br>💡 왕지인데 己土 중기가 있는 예외! (양→음 전환점)" : "");
      }));
      slot.replaceWith(w);
    },
    cycle(slot) {
      const w = h(`<div class="widget"><div class="widget-title">🔄 오행 순환도</div>
        <div style="text-align:center"><div class="seg-toggle"><button class="on" data-m="sang">상생 (살림)</button><button data-m="geuk">상극 (다듬음)</button></div></div>
        <div class="cycle-host"></div>
        <div class="widget-detail"><span class="hint">👆 오행을 눌러 관계를 확인해요.</span></div></div>`);
      let mode = "sang", sel = null;
      const draw = () => { w.querySelector(".cycle-host").innerHTML = cycleSVG(mode, sel); bind(); };
      const bind = () => w.querySelectorAll(".cycle-svg .node").forEach(n => n.addEventListener("click", () => {
        sel = n.dataset.e; draw();
        const i = CYCLE.indexOf(sel), g = (k) => CYCLE[(i + k + 5) % 5];
        w.querySelector(".widget-detail").innerHTML = `<b>${sel}</b> 기준 — 🤱 나를 낳아 줌: <b>${g(-1)}</b> · 내가 낳아 줌: <b>${g(1)}</b><br>✂️ 내가 다듬음(극): <b>${g(2)}</b> · 나를 다듬음: <b>${g(-2)}</b>`;
      }));
      w.querySelectorAll(".seg-toggle button").forEach(b => b.addEventListener("click", () => {
        w.querySelectorAll(".seg-toggle button").forEach(x => x.classList.remove("on")); b.classList.add("on"); mode = b.dataset.m; draw();
      }));
      draw();
      slot.replaceWith(w);
    },
    hapchung(slot) {
      const w = h(`<div class="widget"><div class="widget-title">🧲 합·충 연결선 보기</div>
        <div style="text-align:center"><div class="seg-toggle"><button class="on" data-m="hap">육합</button><button data-m="chung">육충</button></div></div>
        <div class="wheel-wrap"><div class="wheel"><svg viewBox="0 0 100 100"></svg>${wheelNodes()}<div class="wheel-center" style="inset:32%">合 · 沖</div></div>
        <div class="widget-detail"><span class="hint">👆 글자를 누르면 짝꿍을 찾아 줘요.</span></div></div></div>`);
      let mode = "hap", sel = null;
      const pos = (c) => { const i = WHEEL.indexOf(c), a = (i * 30 - 90) * Math.PI / 180; return [50 + 40 * Math.cos(a), 50 + 40 * Math.sin(a)]; };
      const draw = () => {
        const pairs = mode === "hap" ? HAP : CHUNG;
        const col = mode === "hap" ? cssVar("--ok") : cssVar("--bad");
        w.querySelector("svg").innerHTML = pairs.map(p => {
          const [x1, y1] = pos(p[0]), [x2, y2] = pos(p[1]);
          const on = sel && (p[0] === sel || p[1] === sel);
          return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${col}" stroke-width="${on ? 1.6 : .7}" stroke-opacity="${sel && !on ? .2 : .9}" ${mode === "chung" ? 'stroke-dasharray="2 1.5"' : ""}/>`;
        }).join("");
      };
      w.querySelectorAll(".wheel-node").forEach(b => b.addEventListener("click", () => {
        sel = b.dataset.c; w.querySelectorAll(".wheel-node").forEach(x => x.classList.toggle("sel", x === b)); draw();
        const hp = HAP.find(p => p.includes(sel)), cp = CHUNG.find(p => p.includes(sel));
        const o = (p) => p[0] === sel ? p[1] : p[0];
        w.querySelector(".widget-detail").innerHTML = `<b class="hz" style="font-size:1.3rem">${sel}</b> ${BRANCHES[sel].an}<br>🧲 육합: <b class="hz">${sel}+${o(hp)}</b> → ${hp[2]}<br>💥 육충: <b class="hz">${sel}↔${o(cp)}</b> (정반대편)`;
      }));
      w.querySelectorAll(".seg-toggle button").forEach(b => b.addEventListener("click", () => {
        w.querySelectorAll(".seg-toggle button").forEach(x => x.classList.remove("on")); b.classList.add("on"); mode = b.dataset.m; draw();
      }));
      slot.replaceWith(w); draw();
    },
    "draw-stems"(slot) { drawWidget(slot, ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"]); },
    "draw-branches"(slot) { drawWidget(slot, BR_ORDER); }
  };

  function wheelNodes() {
    return WHEEL.map((c, i) => {
      const a = (i * 30 - 90) * Math.PI / 180, x = 50 + 40 * Math.cos(a), y = 50 + 40 * Math.sin(a);
      return `<button class="wheel-node c-${EL[c]}" data-c="${c}" style="left:${x}%;top:${y}%"><span class="hz">${c}</span><small>${BRANCHES[c].an.split(" ")[0]}</small></button>`;
    }).join("");
  }

  function cycleSVG(mode, sel) {
    const pts = CYCLE.map((e, i) => { const a = (i * 72 - 90) * Math.PI / 180; return [150 + 105 * Math.cos(a), 150 + 105 * Math.sin(a)]; });
    const step = mode === "sang" ? 1 : 2;
    const col = mode === "sang" ? cssVar("--ok") : cssVar("--bad");
    let lines = "";
    CYCLE.forEach((e, i) => {
      const j = (i + step) % 5, [x1, y1] = pts[i], [x2, y2] = pts[j];
      const dx = x2 - x1, dy = y2 - y1, L = Math.hypot(dx, dy), ux = dx / L, uy = dy / L, r = 34;
      const on = sel && (e === sel);
      lines += `<line x1="${x1 + ux * r}" y1="${y1 + uy * r}" x2="${x2 - ux * (r + 4)}" y2="${y2 - uy * (r + 4)}" stroke="${col}" stroke-width="${on ? 5 : 3}" stroke-opacity="${sel && !on ? .25 : 1}" marker-end="url(#ah-${mode})" ${mode === "geuk" ? 'stroke-dasharray="7 5"' : ""}/>`;
    });
    const nodes = CYCLE.map((e, i) => {
      const [x, y] = pts[i], c = cssVar("--" + CYCLE_EL[e]);
      return `<g class="node" data-e="${e}"><circle cx="${x}" cy="${y}" r="32" fill="${c}" stroke="${sel === e ? cssVar("--ink") : "none"}" stroke-width="3"/><text x="${x}" y="${y + 10}" text-anchor="middle" font-size="28" fill="${cssVar("--surface")}">${e}</text></g>`;
    }).join("");
    return `<svg class="cycle-svg" viewBox="0 0 300 300" role="img" aria-label="오행 ${mode === "sang" ? "상생" : "상극"} 순환도"><defs><marker id="ah-${mode}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="${col}"/></marker></defs>${lines}${nodes}</svg>`;
  }

  function drawWidget(slot, chars) {
    const w = h(`<div class="widget"><div class="widget-title">🖍️ 따라 쓰기 연습장</div>
      <div class="char-picker">${chars.map(c => `<button data-c="${c}" style="position:relative">${c}</button>`).join("")}</div>
      <div class="draw-wrap"><div><div class="canvas-box"><div class="guide"></div><canvas width="520" height="520" style="width:260px;height:260px"></canvas></div>
        <div class="draw-tools"><button class="btn btn-sm" data-a="clear">🧽 지우기</button><button class="btn btn-sm btn-soft" data-a="guide">👻 흐린 글자 끄기</button><button class="btn btn-sm btn-primary" data-a="done">✅ 다 썼어요</button></div></div>
        <div><div class="draw-head"><b class="hz"></b><span></span></div><ol class="stroke-steps"></ol>
        <p class="small-note" style="margin-top:10px">💡 한 획을 그을 때마다 다음 순서가 진하게 표시돼요. 흐린 글자 위를 따라 써 보세요!</p></div></div></div>`);
    const cv = w.querySelector("canvas"), ctx = cv.getContext("2d");
    let cur = chars[0], drawing = false, strokes = 0, guideOn = true;
    const setChar = (c) => {
      cur = c; strokes = 0; ctx.clearRect(0, 0, cv.width, cv.height);
      const d = window.HANJA[c];
      w.querySelectorAll(".char-picker button").forEach(b => b.classList.toggle("sel", b.dataset.c === c));
      w.querySelector(".guide").textContent = c;
      w.querySelector(".draw-head b").textContent = d.name;
      w.querySelector(".draw-head span").textContent = `총 ${d.strokes}획`;
      w.querySelector(".stroke-steps").innerHTML = d.steps.map((s, i) => `<li class="${i === 0 ? "on" : ""}">${s}</li>`).join("");
    };
    const mark = () => w.querySelectorAll(".stroke-steps li").forEach((li, i) => li.classList.toggle("on", i <= strokes));
    const pt = (e) => { const r = cv.getBoundingClientRect(), p = e.touches ? e.touches[0] : e; return [(p.clientX - r.left) * cv.width / r.width, (p.clientY - r.top) * cv.height / r.height]; };
    const start = (e) => { e.preventDefault(); drawing = true; const [x, y] = pt(e); ctx.beginPath(); ctx.moveTo(x, y);
      ctx.strokeStyle = cssVar("--ink"); ctx.lineWidth = 22; ctx.lineCap = "round"; ctx.lineJoin = "round"; };
    const move = (e) => { if (!drawing) return; e.preventDefault(); const [x, y] = pt(e); ctx.lineTo(x, y); ctx.stroke(); };
    const end = () => { if (!drawing) return; drawing = false; strokes++; mark(); };
    cv.addEventListener("pointerdown", start); cv.addEventListener("pointermove", move);
    window.addEventListener("pointerup", end); cv.addEventListener("pointerleave", end);
    w.querySelectorAll(".char-picker button").forEach(b => b.addEventListener("click", () => setChar(b.dataset.c)));
    w.querySelector('[data-a="clear"]').onclick = () => setChar(cur);
    w.querySelector('[data-a="guide"]').onclick = (e) => { guideOn = !guideOn; w.querySelector(".guide").style.display = guideOn ? "" : "none"; e.target.textContent = guideOn ? "👻 흐린 글자 끄기" : "👻 흐린 글자 켜기"; };
    w.querySelector('[data-a="done"]').onclick = () => {
      const d = window.HANJA[cur];
      const msg = strokes === d.strokes ? `🎉 정확해요! ${cur}는 ${d.strokes}획이에요.` : `${cur}는 ${d.strokes}획이에요. 방금 ${strokes}획으로 썼어요. 순서를 보며 다시 도전! 💪`;
      window.App && window.App.toast(msg);
      if (strokes === d.strokes) { window.App && window.App.markDrawn(cur); w.querySelector(`.char-picker [data-c="${cur}"]`).style.boxShadow = "inset 0 -3px 0 var(--ok)"; }
    };
    slot.replaceWith(w); setChar(cur);
  }

  // ─────────── static versions for PDF ───────────
  const statics = {
    pillars() {
      return `<table class="static-widget"><tr><th></th>${PILLARS.map(p => `<th>${p.col}</th>`).join("")}</tr>
        <tr><th>천간</th>${PILLARS.map((p, i) => `<td class="hzc">${p.top}${i === 1 ? "<br><small style='font-size:8pt'>일간(나)</small>" : ""}</td>`).join("")}</tr>
        <tr><th>지지</th>${PILLARS.map((p, i) => `<td class="hzc">${p.bot}${i === 2 ? "<br><small style='font-size:8pt'>월령</small>" : ""}</td>`).join("")}</tr>
        <tr><th>지장간</th>${PILLARS.map(p => `<td style="text-align:center">${p.hid}</td>`).join("")}</tr></table>`;
    },
    bagua() {
      const cell = (g) => g ? `<td style="text-align:center"><b style="font-size:14pt">${g.h}</b> ${g.k}<br>${g.n}<br><small>${g.dir} · ${g.br}</small></td>` : `<td class="hzc">☯</td>`;
      return `<p style="text-align:center;margin:0">▲ 남(南)</p><table class="static-widget" style="width:70%;margin:0 auto">${[0, 3, 6].map(r => `<tr>${[0, 1, 2].map(c => cell(BAGUA[r + c])).join("")}</tr>`).join("")}</table><p style="text-align:center">▼ 북(北) · 왼쪽 동(東) · 오른쪽 서(西)</p>`;
    },
    stems() {
      return `<table class="static-widget"><tr><th>천간</th><th>음양오행</th><th>물상과 성정</th></tr>${STEMS.map(s => `<tr><td class="hzc">${s.c} <small style="font-size:9pt">${s.r}</small></td><td>${s.yy}</td><td>${s.em} ${s.d}</td></tr>`).join("")}</table>`;
    },
    branches() {
      return `<table class="static-widget"><tr><th>지지</th><th>띠</th><th>음양오행</th><th>월·계절</th><th>시간</th></tr>${BR_ORDER.map(c => { const d = BRANCHES[c]; return `<tr><td class="hzc">${c} <small style="font-size:9pt">${d.r}</small></td><td>${d.an}</td><td>${d.yy}</td><td>${d.m} · ${d.s}</td><td>${d.t}</td></tr>`; }).join("")}</table>`;
    },
    hidden() {
      const cell = (x) => x ? `${x[0]} <small>${x[1]}일</small>` : "—";
      return `<table class="static-widget"><tr><th>지지</th><th>분류</th><th>여기</th><th>중기</th><th>정기</th></tr>${BR_ORDER.map(c => `<tr><td class="hzc">${c}</td><td>${BR_TYPE[c]}</td>${HIDDEN[c].map(x => `<td style="text-align:center">${cell(x)}</td>`).join("")}</tr>`).join("")}</table>`;
    },
    cycle() { return ""; },
    hapchung() { return ""; },
    "draw-stems"() { return writeSheet(["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"]); },
    "draw-branches"() { return writeSheet(BR_ORDER); }
  };
  function writeSheet(chars) {
    return `<div class="static-widget"><p><b>✍️ 따라 쓰기</b> — 진한 글자를 보고, 흐린 글자를 따라 쓴 뒤 빈칸에 혼자 써 보세요.</p>${chars.map(c => {
      const d = window.HANJA[c];
      return `<div class="write-row"><div class="wr-label"><b>${d.name.split(" (")[0]} ${d.name.match(/\((.*)\)/)[1]}</b>${d.strokes}획</div><div class="write-cell">${c}</div>${'<div class="write-cell ghost">' + c + "</div>"}${'<div class="write-cell ghost">' + c + "</div>"}<div class="write-cell empty">${c}</div><div class="write-cell empty">${c}</div><div class="write-cell empty">${c}</div><div class="write-cell empty">${c}</div><div class="write-cell empty">${c}</div></div>`;
    }).join("")}</div>`;
  }

  window.Widgets = {
    mount(root) { root.querySelectorAll(".widget-slot").forEach(s => builders[s.dataset.widget] && builders[s.dataset.widget](s)); },
    staticHTML(name) { return statics[name] ? statics[name]() : ""; },
    EL, EL_KO
  };
})();
