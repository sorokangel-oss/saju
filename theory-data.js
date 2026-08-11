const sajuTheoryData = {
  intro: {
    title: "들어가기",
    subtitle: "명학(命學)의 문을 열며",
    content: `
      <div class="intro-container card glass">
        <p class="lead-text">인생을 살다 보면 마음먹은 대로 일이 풀리지 않을 때가 있습니다. 가장 현명한 길을 찾고 싶거나, 인생의 이정표가 될 따뜻한 코칭을 받고 싶을 때 우리는 자연스럽게 점(占)과 운명에 의존하게 되곤 합니다.</p>
        <p>하지만 운명에 이끌려 다니기보다, 내 삶의 지도와 계절을 직접 읽어낼 수 있다면 어떨까요? 본 학습지는 바로 그 길을 제시하는 명리학의 핵심 이론과 입체적 구조를 스스로 익힐 수 있도록 구성되었습니다.</p>
        <p>혹여 읽으시다가 한 번에 이해되지 않는 부분이 있더라도 조급해하지 마시고, <strong>10회 이상 천천히 반복해 읽어보시길 권합니다.</strong> 또한 유튜브 ‘유천도사 TV’를 함께 시청하시면 복잡한 원리가 한눈에 명쾌하게 정리될 것입니다.</p>
        <p class="closing">이 책이 여러분의 삶에 든든한 길잡이가 되기를 진심으로 기원합니다. 고개 숙여 감사드립니다. 정성껏 준비했습니다. 꾸벅.</p>
      </div>
    `,
    summary: `
      <p><strong>📖 사주명리학 입문 핵심 정리:</strong></p>
      <ul style="margin-top: 8px; margin-left: 20px;">
        <li><strong>학습 목적:</strong> 정해진 운명에 맹목적으로 의존하기보다 자신의 '삶의 지도와 계절'을 스스로 읽고 대처하는 힘을 기르는 것입니다.</li>
        <li><strong>공부 방법:</strong> 처음에는 이해하기 어렵더라도 <strong>최소 10회 이상 반복해서 다독</strong>하고 기초를 튼튼히 하는 것이 중요합니다.</li>
      </ul>
    `
  },
  chap1: {
    title: "Ⅰ. 사주(四柱) 명리학(命理學)",
    subtitle: "명리의 기초 개념과 공간적·시간적 구조",
    content: `
      <div class="theory-section">
        <h3>1. 사주팔자(四柱八字)의 구성</h3>
        <p>사주팔자(四柱八字)의 이론은 <strong>음양오행(陰陽五行)</strong>을 기본 바탕으로 합니다. 목화토금수(木火土金水)인 오행(五行)을 문장 구조에 비유하자면 다음과 같습니다.</p>
        
        <div class="grid grid-2">
          <div class="card glass text-center">
            <h4 class="color-wood">일간 (日干)</h4>
            <p class="badge bg-wood">주어 (Subject)</p>
            <p class="text-muted">사주 분석의 주체이자 '나' 자신을 상징</p>
          </div>
          <div class="card glass text-center">
            <h4 class="color-earth">월령 (月令)</h4>
            <p class="badge bg-earth">목적어 (Object)</p>
            <p class="text-muted">타고난 계절과 환경, 격국(格局)의 결정 요인</p>
          </div>
          <div class="card glass text-center" style="grid-column: span 2;">
            <h4 class="color-fire">대운 (大運) 및 세운 (歲運)</h4>
            <p class="badge bg-fire">동사 (Verb)</p>
            <p class="text-muted">시간의 흐름에 따른 변화와 역동적인 움직임을 주도</p>
          </div>
        </div>

        <p>이처럼 사주팔자란 오행이 <strong>생극제화(生剋制化)</strong>하며 자아내는 역동적인 변화과정을 통해 명리(命理)의 이치를 파악하는 것입니다. 사주팔자의 공간적·시간적 구조는 크게 하늘의 기운을 뜻하는 <strong>천간(天干)</strong> 10자와 땅의 환경을 뜻하는 <strong>지지(地支)</strong> 12자로 구분되며, 이들이 결합하여 60갑자 체계를 형성합니다.</p>

        <div class="example-box">
          <h4>사주 원국 예시</h4>
          <p class="text-muted">갑인생 갑술월 신축일 기축시 (甲寅生 甲戌月 辛丑日 己丑時) 곤명(坤命)</p>
          <table class="table text-center">
            <thead>
              <tr>
                <th>구분</th>
                <th>시주 (時柱)</th>
                <th>일주 (日柱)</th>
                <th>월주 (月柱)</th>
                <th>년주 (年柱)</th>
              </tr>
            </thead>
            <tbody>
              <tr class="text-bold text-xl">
                <td>천간 (天干)</td>
                <td class="color-earth">己 (기토)</td>
                <td class="color-metal">辛 (신금)</td>
                <td class="color-wood">甲 (갑목)</td>
                <td class="color-wood">甲 (갑목)</td>
              </tr>
              <tr class="text-bold text-xl">
                <td>지지 (地支)</td>
                <td class="color-earth">丑 (축토)</td>
                <td class="color-earth">丑 (축토)</td>
                <td class="color-earth">戌 (술토)</td>
                <td class="color-wood">寅 (인목)</td>
              </tr>
              <tr class="text-sm">
                <td>지장간 (支藏干)</td>
                <td>癸 辛 己</td>
                <td>癸 辛 己</td>
                <td>辛 丁 戊</td>
                <td>戊 丙 甲</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>2. 주역 팔괘와 시공간의 변용</h3>
        <p>사주명리학의 천간과 지지는 주역의 팔괘(八卦)인 손·리·곤·태·건·감·간·진(巽·離·坤·兌·乾·坎·艮·震)의 시공간적 변용이라 할 수 있습니다. 하늘과 땅(건·곤)의 무대 위에서 물과 불(감·리)이 순환하고, 바람과 우레(손·진)가 만물을 깨우며, 산과 연못(간·태)이 기운을 수렴하고 멈추게 하는 우주적 거동이 곧 사주팔자 생극제화의 본질입니다.</p>

        <h3>3. 후천팔괘(後天八卦) 방위 및 명리 매칭 도표</h3>
        <div class="table-responsive">
          <table class="table text-left">
            <thead>
              <tr>
                <th>괘</th>
                <th>명칭</th>
                <th>한자</th>
                <th>자연상징</th>
                <th>방위 (8방위)</th>
                <th>결합 지지</th>
                <th>계절 및 시공간적 의미</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>☳</td>
                <td><strong>진</strong></td>
                <td>震</td>
                <td>우레 (雷)</td>
                <td>정동 (正東)</td>
                <td>묘 (卯)</td>
                <td>봄의 한가운데, 만물이 솟구쳐 시작하는 기운</td>
              </tr>
              <tr>
                <td>☴</td>
                <td><strong>손</strong></td>
                <td>巽</td>
                <td>바람 (風)</td>
                <td>동남 (東南)</td>
                <td>진·사 (辰·巳)</td>
                <td>늦봄에서 초여름, 기운이 사방으로 스며들며 번지는 시기</td>
              </tr>
              <tr>
                <td>☲</td>
                <td><strong>리</strong></td>
                <td>離</td>
                <td>불 (火)</td>
                <td>정남 (正南)</td>
                <td>오 (午)</td>
                <td>여름의 한가운데, 문명과 광명이 가장 찬란하게 드러나는 시기</td>
              </tr>
              <tr>
                <td>☷</td>
                <td><strong>곤</strong></td>
                <td>坤</td>
                <td>땅 (地)</td>
                <td>남서 (南西)</td>
                <td>미·신 (未·申)</td>
                <td>늦여름에서 초가을, 만물을 포용하고 결실로 넘겨주는 터전</td>
              </tr>
              <tr>
                <td>☱</td>
                <td><strong>태</strong></td>
                <td>兌</td>
                <td>연못 (澤)</td>
                <td>정서 (正西)</td>
                <td>유 (酉)</td>
                <td>가을의 한가운데, 수확의 기쁨과 수렴하는 기운</td>
              </tr>
              <tr>
                <td>☰</td>
                <td><strong>건</strong></td>
                <td>乾</td>
                <td>하늘 (天)</td>
                <td>북서 (北西)</td>
                <td>술·해 (戌·亥)</td>
                <td>늦가을에서 초겨울, 완성된 기운을 하늘에 저장하고 정리하는 시기</td>
              </tr>
              <tr>
                <td>☵</td>
                <td><strong>감</strong></td>
                <td>坎</td>
                <td>물 (水)</td>
                <td>정북 (正北)</td>
                <td>자 (子)</td>
                <td>겨울의 한가운데, 밤과 어둠 속에서 새로운 생명을 응축하는 지혜</td>
              </tr>
              <tr>
                <td>☶</td>
                <td><strong>간</strong></td>
                <td>艮</td>
                <td>산 (山)</td>
                <td>북동 (北東)</td>
                <td>축·인 (丑·寅)</td>
                <td>늦겨울에서 초봄, 밤새 멈추었다가 새벽을 열어주는 전환점</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="note-box alert alert-info">
          <h5>💡 학술적 참고사항: 동양학의 방위각</h5>
          <p>서양식 지도는 위쪽이 북쪽(N)이지만, 전통 동양 철학의 팔괘도나 명리학의 방위도는 <strong>위쪽이 남쪽(離, 午)</strong>, <strong>아래쪽이 북쪽(坎, 子)</strong>입니다. 이는 해가 가장 높이 뜨는 남쪽을 상단에 배치하는 동양의 관습 때문입니다. 따라서 도표나 그림을 볼 때 남북축과 동서축이 반전되어 있음을 염두에 두어야 합니다.</p>
        </div>

        <h3>4. 명리 분석의 4대 핵심 요소</h3>
        <ul>
          <li><strong>일간(日干)과 월지(月支)의 관계:</strong> 일간은 '나' 자신을, 월지는 태어난 계절과 환경을 의미합니다. 일간이 계절 속에서 힘을 얻고 있는지(득령 여부)를 가장 먼저 살핍니다.</li>
          <li><strong>오행의 조화와 중화(中和):</strong> 사주 원국에 목, 화, 토, 금, 수 오행이 조화롭게 분포해 있는지, 특정 기운이 너무 태과(太過)하거나 고립되지 않고 소통(通關)하는지를 확인합니다.</li>
          <li><strong>용신(用神)과 희신(喜神)의 도출:</strong> 원국의 억부(抑扶), 조후(調候), 통관(通關)을 고려해 균형을 잡아주고 기운을 맑게 만들어 주는 핵심 글자(용신)를 찾습니다.</li>
          <li><strong>대운(大運)과 세운(歲運)의 흐름:</strong> 사주 원국이 자동차라면 운은 도로와 같습니다. 10년 단위의 대운과 매년 찾아오는 세운을 통해 원국의 글자들이 어떻게 반응하며 삶의 변화를 일으키는지 분석합니다.</li>
        </ul>
      </div>
    `,
    summary: `
      <p><strong>📊 명리의 기초 구조 핵심 정리:</strong></p>
      <ul style="margin-top: 8px; margin-left: 20px;">
        <li><strong>사주의 문장 구조:</strong> 일간(日干)은 분석의 주체인 <strong>'주어'</strong>, 월령(月令)은 타고난 환경인 <strong>'목적어'</strong>, 대운/세운은 변화를 주도하는 <strong>'동사'</strong>입니다.</li>
        <li><strong>주역 팔괘의 투영:</strong> 하늘과 땅(건·곤)의 무대에서 물과 불(감·리)이 순환하고, 바람과 우레(손·진)가 활력을 주며, 산과 연못(간·태)이 기운을 수렴합니다.</li>
        <li><strong>동양식 방위각의 특징:</strong> 전통 도표는 해가 가장 높이 뜨는 남쪽을 상단에 두기 때문에 <strong>위쪽이 남쪽(離), 아래쪽이 북쪽(坎)</strong>인 상남하북 구조를 가집니다.</li>
        <li><strong>4대 명리 요소:</strong> 득령(일간-월지 관계), 중화(오행의 조화), 용신/희신의 도출, 대운/세운 흐름 분석입니다.</li>
      </ul>
    `
  },
  chap2: {
    title: "Ⅱ. 천간(天干)",
    subtitle: "하늘의 기운, 십천간의 성질과 오행 분류",
    content: `
      <div class="theory-section">
        <p>하늘의 기운을 뜻하는 <strong>십간(十干, 10간)</strong>은 우주의 기운과 변화의 흐름을 나타내는 열 가지의 기본 기호입니다. 음양오행 사상에 따라 각각 고유한 성질을 지니고 있으며, 하늘의 에너지를 뜻하여 '천간(天干)'이라고도 부릅니다.</p>

        <div class="grid grid-2">
          <div class="card glass border-wood">
            <h3 class="color-wood">木 (목)의 기운: 성장과 시작</h3>
            <p>새싹이 땅을 뚫고 솟아오르는 봄의 생명력을 상징합니다.</p>
            <ul>
              <li><strong>甲 (갑목·양목):</strong> 곧게 뻗어 나가는 거목이나 대나무처럼 당당하고 추진력이 강한 기운. 시작과 우두머리 기질.</li>
              <li><strong>乙 (을목·음목):</strong> 유연하게 휘면서도 끈질기게 생명력을 이어가는 덩굴식물이나 화초의 기운. 적응력과 질긴 생명력.</li>
            </ul>
          </div>

          <div class="card glass border-fire">
            <h3 class="color-fire">火 (화)의 기운: 확산과 열정</h3>
            <p>만물이 무성하게 자라나며 에너지를 사방으로 분산시키는 여름의 기운입니다.</p>
            <ul>
              <li><strong>丙 (병화·양화):</strong> 하늘의 태양처럼 만물을 공평하게 비추는 강렬한 빛과 열정. 명확함과 확산성.</li>
              <li><strong>丁 (정화·음화):</strong> 등대, 모닥불, 촛불처럼 내면을 따뜻하게 밝히는 절제된 불꽃. 헌신성과 정밀한 정신력.</li>
            </ul>
          </div>

          <div class="card glass border-earth" style="grid-column: span 2;">
            <h3 class="color-earth">土 (토)의 기운: 중용과 조화</h3>
            <p>계절과 계절을 연결하고, 만물을 품어주고 중재하는 대지의 기운입니다.</p>
            <div class="grid grid-2" style="padding: 0; border: none; margin: 0;">
              <div>
                <strong>戊 (무토·양토):</strong> 광활한 대지나 높은 산처럼 묵직하고 흔들림이 없는 포용력. 신용과 안정감.
              </div>
              <div>
                <strong>己 (기토·음토):</strong> 영양분이 풍부한 전답(밭)이나 정원의 흙처럼 만물을 기르는 부드러운 대지. 수용성과 치밀함.
              </div>
            </div>
          </div>

          <div class="card glass border-metal">
            <h3 class="color-metal">金 (금)의 기운: 결실과 숙살(肅殺)</h3>
            <p>가을의 기운으로, 불필요한 것을 쳐내고 단단한 결실을 맺으며 수렴하는 힘입니다.</p>
            <ul>
              <li><strong>庚 (경금·양금):</strong> 원석, 무쇠, 거대한 바위처럼 가공되지 않은 단단함과 과단성. 개혁과 의리 상징.</li>
              <li><strong>辛 (신금·음금):</strong> 제련을 마친 보석이나 날카로운 칼날처럼 정교하고 깔끔한 기운. 섬세함과 단호함.</li>
            </ul>
          </div>

          <div class="card glass border-water">
            <h3 class="color-water">水 (수)의 기운: 저장과 지혜</h3>
            <p>모든 생명을 잉태하고 휴식하는 겨울의 기운이며, 아래로 흘러 모이는 깊은 지혜입니다.</p>
            <ul>
              <li><strong>壬 (임수·양수):</strong> 거대한 바다나 강물처럼 무엇이든 담아낼 수 있는 깊고 방대한 에너지. 유연함과 유통의 힘.</li>
              <li><strong>癸 (계수·음수):</strong> 이슬비, 시냇물, 맑은 샘물처럼 만물을 촉촉하게 적시는 생명수. 지혜롭고 사색적 성향.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
    summary: `
      <p><strong>⚡ 10천간(十天干)의 성정 핵심 정리:</strong></p>
      <ul style="margin-top: 8px; margin-left: 20px;">
        <li><strong>木 (봄):</strong> 甲(양목, 거목/대나무, 추진력과 리더십) | 乙(음목, 화초/넝쿨, 부드러움과 질긴 생명력)</li>
        <li><strong>火 (여름):</strong> 丙(양화, 태양, 공평함과 확산의 기운) | 丁(음화, 촛불/용광로, 헌신과 집중된 열기)</li>
        <li><strong>土 (환절기):</strong> 戊(양토, 높은 산, 묵직한 포용력과 신용) | 己(음토, 비옥한 밭, 어머니 같은 수용성과 치밀함)</li>
        <li><strong>金 (가을):</strong> 庚(양금, 원석/무쇠, 과단성과 의리) | 辛(음금, 보석/칼날, 정교함과 단호한 결단)</li>
        <li><strong>水 (겨울):</strong> 壬(양수, 거대한 바다, 깊은 통섭과 유통의 힘) | 癸(음수, 단비/맑은 샘물, 지혜와 치밀한 설계 능력)</li>
      </ul>
    `
  },
  chap3: {
    title: "Ⅲ. 지지(地支)",
    subtitle: "땅의 환경, 12지지의 특성과 체용(體用)의 변화",
    content: `
      <div class="theory-section">
        <p>땅의 흐름과 시간의 변화을 나타내는 <strong>12지지(地支)</strong>는 우주의 순환을 설명하는 구체적인 기호이자 현실적인 시공간의 축입니다. 하늘의 천간이 땅에 내려와 물질화되고 계절의 순환을 이루는 구체적인 형상으로 흔히 '12동물'에 배속됩니다.</p>

        <div class="grid grid-2">
          <div class="card glass border-wood">
            <h4 class="color-wood">春 봄의 기운 (寅·卯·辰)</h4>
            <p class="badge bg-wood">동방 (東方)</p>
            <ul>
              <li><strong>寅 (인목·양목·호랑이):</strong> 초봄의 시작. 땅을 뚫고 솟구치는 파괴력과 독립적 추진력. (음력 1월)</li>
              <li><strong>卯 (묘목·음목·토끼):</strong> 봄의 절정. 사방으로 뻗어 나가는 초목의 생명력과 유연성, 친화력. (음력 2월)</li>
              <li><strong>辰 (진토·양토·용):</strong> 봄에서 여름의 환절기. 변화무쌍하며 만물을 조율하고 확장하는 조절력. (음력 3월)</li>
            </ul>
          </div>

          <div class="card glass border-fire">
            <h4 class="color-fire">夏 여름의 기운 (巳·午·未)</h4>
            <p class="badge bg-fire">남방 (南方)</p>
            <ul>
              <li><strong>巳 (사화·음화·뱀):</strong> 초여름의 시작. 양기가 치솟으며 내면의 폭발적 열정과 활동성 보유. (음력 4월)</li>
              <li><strong>午 (오화·양화·말):</strong> 여름의 절정. 태양처럼 사방을 비추며 양기가 극에 달해 음기로 전환되는 기점. (음력 5월)</li>
              <li><strong>未 (미토·음토·양):</strong> 여름에서 가을의 환절기. 뜨거운 열기를 품은 마른 흙으로 성장을 조절. (음력 6월)</li>
            </ul>
          </div>

          <div class="card glass border-metal">
            <h4 class="color-metal">秋 가을의 기운 (申·酉·戌)</h4>
            <p class="badge bg-metal">서방 (西方)</p>
            <ul>
              <li><strong>申 (신금·양금·원숭이):</strong> 초가을의 시작. 결실을 위해 굳어지는 가공되지 않은 단단한 원석. (음력 7월)</li>
              <li><strong>酉 (유금·음금·닭):</strong> 가을의 절정. 군더더기 없이 정제된 보석이자 칼날. 냉철한 분별력. (음력 8월)</li>
              <li><strong>戌 (술토·양토·개):</strong> 가을에서 겨울의 환절기. 생명력을 땅속에 묻어 보관하는 단단하고 건조한 대지. (음력 9월)</li>
            </ul>
          </div>

          <div class="card glass border-water">
            <h4 class="color-water">冬 겨울의 기운 (亥·子·丑)</h4>
            <p class="badge bg-water">북방 (北方)</p>
            <ul>
              <li><strong>亥 (해수·양수·돼지):</strong> 초겨울의 시작. 외부 활동을 접고 내면으로 깊이 침잠해 생명을 잉태. (음력 10월)</li>
              <li><strong>子 (자수·음수·쥐):</strong> 겨울의 절정. 깊은 어둠속에서 새로운 양의 씨앗이 태동하는 지혜. (음력 11월)</li>
              <li><strong>丑 (축토·음토·소):</strong> 겨울에서 봄의 환절기. 얼어붙은 땅속에서 봄을 준비하며 인내하는 동토. (음력 12월)</li>
            </ul>
          </div>
        </div>

        <div class="note-box alert alert-warning">
          <h5>⚠️ 중요: 명리학적 체용(體用)의 변화</h5>
          <p>지지의 음양 구별에서 <strong>巳(사화), 午(오화), 亥(해수), 子(자수)</strong>는 본질(體)과 실제 쓰임(用)이 달라집니다.</p>
          <ul>
            <li><strong>巳 (사화) & 亥 (해수):</strong> 본질(體)은 음(陰)이나 지장간의 구성상 실제 쓰임(用)은 <strong>양(陽)</strong>으로 발현됩니다.</li>
            <li><strong>午 (오화) & 子 (자수):</strong> 본질(體)은 양(陽)이나 실제 쓰임(用)은 <strong>음(陰)</strong>으로 다루어집니다.</li>
          </ul>
        </div>
      </div>
    `,
    summary: `
      <p><strong>🌍 12지지(地支)의 시공간 배치 핵심 정리:</strong></p>
      <ul style="margin-top: 8px; margin-left: 20px;">
        <li><strong>계절과 방위 분류:</strong> 봄(동방, 寅卯辰) | 여름(남방, 巳午未) | 가을(서방, 申酉戌) | 겨울(북방, 亥子丑)</li>
        <li><strong>체용(體用)의 변화:</strong> 巳·亥는 본질(體)이 음이지만 쓰임(用)은 <strong>양(陽)</strong>이며, 午·子는 본질(體)이 양이지만 쓰임(用)은 <strong>음(陰)</strong>으로 사용되는 명리학적 비결입니다.</li>
      </ul>
    `
  },
  chap4: {
    title: "Ⅳ. 지장간(支藏干)",
    subtitle: "지지가 품은 하늘의 기운, 구성 원리와 사령(司令) 날짜 배분",
    content: `
      <div class="theory-section">
        <p><strong>지장간(支藏干)</strong>은 12개의 지지(地支) 속에 보이지 않게 숨겨져(藏) 활동하고 있는 천간(天干)의 기운을 의미합니다. 지지는 단순히 고정된 공간이 아니라, 시간의 흐름 속에서 천간의 기운이 생성, 발전, 소멸하는 동태적인 변화의 공간입니다. 지장간은 그 변화 과정에 따른 기운의 비중을 정밀하게 나누어 놓은 핵심 개념입니다.</p>

        <h3>1. 지장간의 구성 원리: 여기(餘氣) · 중기(中氣) · 정기(正氣)</h3>
        <p>한 달(약 30일) 동안 지지 안에서 천간의 기운은 보통 세 단계의 흐름으로 변화하며 작용합니다.</p>
        <ul>
          <li><strong>여기 (餘氣, 남은 기운):</strong> 지난달(이전 지지)의 기운이 소멸하지 않고 이월되어 초순까지 남아 작용하는 기운 (약 3~12일 작용).</li>
          <li><strong>중기 (中氣, 가운데 기운):</strong> 지지의 성격에 따라 다가올 계절의 씨앗(생지), 지난 계절의 보관(묘지), 혹은 음양의 전환을 매개하는 완충 기운 (약 3~10일 작용).</li>
          <li><strong>정기 (正氣, 본래 기운):</strong> 해당 지지가 상징하는 계절의 주체이자 본래 성질을 나타내는 가장 강력한 지배 기운. 월령을 주도하는 사령(司令)의 핵심 기준 (약 16~20일 작용).</li>
        </ul>

        <h3>2. 지지 분류별 지장간 사령(司令) 날짜 배치표 (30일 기준)</h3>
        <div class="table-responsive">
          <table class="table text-center">
            <thead>
              <tr>
                <th>구분</th>
                <th>해당 지지</th>
                <th>여기 (餘氣)</th>
                <th>중기 (中氣)</th>
                <th>정기 (正氣)</th>
                <th>비고 및 날짜 배분 특징</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>사생지 (生地)</strong><br><small>계절의 시작</small></td>
                <td>寅, 申, 巳, 亥</td>
                <td><strong>7일</strong><br><small>戊土 (이월)</small></td>
                <td><strong>7일</strong><br><small>미래 계절의 陽干</small></td>
                <td><strong>16일</strong><br><small>당월 계절의 陽干</small></td>
                <td>
                  <div class="text-left text-xs">
                    • 여기 戊土 7일 고정<br>
                    • 미래의 씨앗(중기)과 당월 본기(정기)가 모두 陽干으로 구성되어 역동적임
                  </div>
                </td>
              </tr>
              <tr>
                <td rowspan="2"><strong>사왕지 (旺地)</strong><br><small>계절의 정점</small></td>
                <td>子, 卯, 酉</td>
                <td><strong>10일</strong><br><small>당월의 陰干/양간</small></td>
                <td>-</td>
                <td><strong>20일</strong><br><small>당월 계절의 陰干</small></td>
                <td>
                  <div class="text-left text-xs">
                    • 중기가 없어 잡기가 섞이지 않은 순수한 기운<br>
                    • 여기 10일, 정기 20일 배분
                  </div>
                </td>
              </tr>
              <tr>
                <td>午</td>
                <td><strong>10일</strong><br><small>丙火</small></td>
                <td><strong>10일</strong><br><small>己土</small></td>
                <td><strong>10일</strong><br><small>丁火</small></td>
                <td>
                  <div class="text-left text-xs" style="color: var(--accent-color);">
                    • <strong>[예외]</strong> 陽에서 陰으로 전환되는 반환점으로서 완충역할을 하는 <strong>己土 중기가 10일</strong> 배분되어 10/10/10일 구조를 가짐
                  </div>
                </td>
              </tr>
              <tr>
                <td><strong>사고지 (庫地)</strong><br><small>환절기 / 묘지</small></td>
                <td>辰, 戌, 丑, 未</td>
                <td><strong>9일</strong><br><small>지난 계절의 陰干</small></td>
                <td><strong>3일</strong><br><small>지나온 계절의 수장</small></td>
                <td><strong>18일</strong><br><small>본기인 土 기운</small></td>
                <td>
                  <div class="text-left text-xs">
                    • 여기 9일, 중기(입고) 3일, 정기(본기 土) 18일 구조<br>
                    • 계절 사이를 조율하는 저울대(權衡) 역할
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>3. 12지지 지장간 원문 상세 배치표 (춘하추동 순)</h3>
        <div class="table-responsive">
          <table class="table text-center text-sm">
            <thead>
              <tr class="bg-dark">
                <th>계절</th>
                <th colspan="3">겨울 (冬)</th>
                <th colspan="3">봄 (春)</th>
                <th colspan="3">여름 (夏)</th>
                <th colspan="3">가을 (秋)</th>
              </tr>
              <tr>
                <th>지지</th>
                <th>子</th>
                <th>丑</th>
                <th>寅</th>
                <th>卯</th>
                <th>辰</th>
                <th>巳</th>
                <th>午</th>
                <th>未</th>
                <th>申</th>
                <th>酉</th>
                <th>戌</th>
                <th>亥</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>여기 (餘氣)</strong></td>
                <td class="color-water">壬</td>
                <td class="color-water">癸</td>
                <td class="color-earth">戊</td>
                <td class="color-wood">甲</td>
                <td class="color-wood">乙</td>
                <td class="color-earth">戊</td>
                <td class="color-fire">丙</td>
                <td class="color-fire">丁</td>
                <td class="color-earth">戊</td>
                <td class="color-metal">庚</td>
                <td class="color-metal">辛</td>
                <td class="color-earth">戊</td>
              </tr>
              <tr>
                <td><strong>중기 (中氣)</strong></td>
                <td>-</td>
                <td class="color-metal">辛</td>
                <td class="color-fire">丙</td>
                <td>-</td>
                <td class="color-water">癸</td>
                <td class="color-metal">庚</td>
                <td class="color-earth">己</td>
                <td class="color-wood">乙</td>
                <td class="color-water">壬</td>
                <td>-</td>
                <td class="color-fire">丁</td>
                <td class="color-wood">甲</td>
              </tr>
              <tr>
                <td><strong>정기 (正氣)</strong></td>
                <td class="color-water">癸</td>
                <td class="color-earth">己</td>
                <td class="color-wood">甲</td>
                <td class="color-wood">乙</td>
                <td class="color-earth">戊</td>
                <td class="color-fire">丙</td>
                <td class="color-fire">丁</td>
                <td class="color-earth">己</td>
                <td class="color-metal">庚</td>
                <td class="color-metal">辛</td>
                <td class="color-earth">戊</td>
                <td class="color-water">壬</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `,
    summary: `
      <p><strong>🧩 지장간(支藏干) 구성과 사령 배치 핵심 정리:</strong></p>
      <ul style="margin-top: 8px; margin-left: 20px;">
        <li><strong>3단계 구성원리:</strong> 지난달의 남은 기운인 <strong>여기(餘氣)</strong>, 변화의 매개체인 <strong>중기(中氣)</strong>, 본래 계절의 핵심인 <strong>정기(正氣)</strong>로 분류됩니다.</li>
        <li><strong>지지 유형별 날짜 배분 (30일 기준):</strong>
          <ul style="margin-top: 4px;">
            <li>사생지(寅申巳亥): 여기 7일, 중기 7일, 정기 16일 (양간 중심의 역동적 흐름)</li>
            <li>사왕지(子卯酉): 여기 10일, 정기 20일 (순수한 기운, 단 午火는 여기10, 중기기토9, 정기11로 예외)</li>
            <li>사고지(辰戌丑未): 여기 9일, 중기 3일, 정기 18일 (계절의 기운을 입고하여 보존)</li>
          </ul>
        </li>
      </ul>
    `
  },
  chap5: {
    title: "Ⅴ. 한자 획순. 천간(天干)",
    subtitle: "천간 10자의 정확한 획수, 획순 및 한자 쓰는 법",
    content: `
      <div class="theory-section">
        <p>천간 10자(甲·乙·丙·丁·戊·己·庚·辛·壬·癸)의 서예 및 필사 획순을 상세히 안내합니다. 한자를 쓸 때는 <strong>‘위에서 아래로’</strong>, <strong>‘왼쪽에서 오른쪽으로’</strong>, <strong>‘가로획을 긋고 세로획을 긋는 것’</strong>이 기본 원칙입니다. 자형 한가운데를 관통하는 세로획(예: 甲, 申)은 가장 마지막에 씁니다.</p>
        
        <div class="kanji-guide-list">
          <div class="kanji-card card glass">
            <div class="kanji-header">
              <span class="kanji-char color-wood">甲</span>
              <span class="kanji-info">갑옷 갑 | 총 5획 | 오행: 양목 (陽木)</span>
            </div>
            <div class="kanji-steps">
              <p><strong>핵심 순서:</strong> 좌측 세로 → 위쪽 꺾기 → 내부 가로 → 아래 가로(네모 닫기) → 중앙 관통 세로획</p>
              <ul>
                <li><strong>1획:</strong> 왼쪽 세로획을 위에서 아래로 내리긋습니다.</li>
                <li><strong>2획:</strong> 맨 위 가로획을 긋다가 붓을 떼지 않고 오른쪽 세로획으로 꺾어 내립니다.</li>
                <li><strong>3획:</strong> 가운데 가로획을 왼쪽에서 오른쪽으로 긋습니다.</li>
                <li><strong>4획:</strong> 아래 가로획을 그어 네모(口)를 닫아줍니다.</li>
                <li><strong>5획:</strong> 가운데 중심을 관통하는 세로획을 위에서 아래로 길게 내리긋습니다.</li>
              </ul>
            </div>
          </div>

          <div class="kanji-card card glass">
            <div class="kanji-header">
              <span class="kanji-char color-wood">乙</span>
              <span class="kanji-info">새 을 | 총 1획 | 오행: 음목 (陰木)</span>
            </div>
            <div class="kanji-steps">
              <p><strong>핵심 순서:</strong> 단 1획으로 끊어지지 않게 한 번에 이어 씁니다.</p>
              <ul>
                <li><strong>1획:</strong> 왼쪽 위에서 오른쪽으로 가로를 긋다가, 떼지 않고 왼쪽 아래 사선으로 부드럽게 꺾은 후, 다시 오른쪽으로 둥글게 바닥을 굴려 마지막에 위로 강하게 갈고리를 올립니다.</li>
              </ul>
            </div>
          </div>

          <div class="kanji-card card glass">
            <div class="kanji-header">
              <span class="kanji-char color-fire">丙</span>
              <span class="kanji-info">남녘 병 | 총 5획 | 오행: 양화 (陽火)</span>
            </div>
            <div class="kanji-steps">
              <p><strong>핵심 순서:</strong> 바깥 틀을 먼저 잡고 안쪽을 채우는 기본 원칙을 따릅니다.</p>
              <ul>
                <li><strong>1획:</strong> 맨 위의 긴 가로획을 왼쪽에서 오른쪽으로 긋습니다.</li>
                <li><strong>2획:</strong> 왼쪽 세로 변의 짧은 세로획을 내립니다.</li>
                <li><strong>3획:</strong> 오른쪽 세로 변을 향해 가로로 가다 아래로 꺾어 내린 뒤 안쪽으로 살짝 갈고리를 줍니다.</li>
                <li><strong>4획:</strong> 안쪽 왼쪽에 위치한 빗침을 대각선 왼쪽 아래로 내립니다.</li>
                <li><strong>5획:</strong> 안쪽 오른쪽에 파임을 대각선 오른쪽 아래로 부드럽게 뻗어줍니다.</li>
              </ul>
            </div>
          </div>

          <div class="kanji-card card glass">
            <div class="kanji-header">
              <span class="kanji-char color-fire">丁</span>
              <span class="kanji-info">고무래 정 | 총 2획 | 오행: 음화 (陰火)</span>
            </div>
            <div class="kanji-steps">
              <p><strong>핵심 순서:</strong> 가로획을 먼저 길게 긋고, 세로 갈고리를 내립니다.</p>
              <ul>
                <li><strong>1획:</strong> 맨 위 가로획을 왼쪽에서 오른쪽으로 길게 긋습니다.</li>
                <li><strong>2획:</strong> 가로획의 중심에서 세로획을 아래로 곧게 내리다가 끝에서 왼쪽 위 방향으로 갈고리를 만듭니다.</li>
              </ul>
            </div>
          </div>

          <div class="kanji-card card glass">
            <div class="kanji-header">
              <span class="kanji-char color-earth">戊</span>
              <span class="kanji-info">다섯째 천간 무 | 총 5획 | 오행: 양토 (陽土)</span>
            </div>
            <div class="kanji-steps">
              <p><strong>핵심 순서:</strong> 왼쪽 가로 → 세로 꺾임 → 오른쪽 큰 획 → 안쪽 삐침 → 점 찍기</p>
              <ul>
                <li><strong>1획:</strong> 왼쪽의 짧은 가로획을 오른쪽 위로 살짝 비스듬히 긋습니다.</li>
                <li><strong>2획:</strong> 그 아래로 세로획을 내리다가 오른쪽으로 살짝 꺾어 줍니다.</li>
                <li><strong>3획:</strong> 맨 위에서 시작하여 오른쪽 아래로 크게 호를 그리며 길게 뻗어 내린 후 위로 갈고리를 줍니다.</li>
                <li><strong>4획:</strong> 왼쪽에서 오른쪽 위를 향해 대각선으로 길게 올려 삐칩니다.</li>
                <li><strong>5획:</strong> 오른쪽 위에 점(•)을 찍어 마무리합니다.</li>
              </ul>
            </div>
          </div>

          <div class="kanji-card card glass">
            <div class="kanji-header">
              <span class="kanji-char color-earth">己</span>
              <span class="kanji-info">몸 기 | 총 3획 | 오행: 음토 (陰土)</span>
            </div>
            <div class="kanji-steps">
              <p><strong>핵심 순서:</strong> 위쪽 꺾기 → 중간 가로 → 아래쪽 꺾어 올리기</p>
              <ul>
                <li><strong>1획:</strong> 맨 위 가로획을 긋다 아래로 꺾고 다시 왼쪽으로 짧게 꺾어 들여옵니다 (ㄷ모양).</li>
                <li><strong>2획:</strong> 중간의 가로획을 왼쪽에서 오른쪽으로 짧게 긋습니다.</li>
                <li><strong>3획:</strong> 왼쪽 세로에서 아래로 내리다가 오른쪽으로 꺾은 후, 마지막에 위로 갈고리를 올립니다 (ㄴ모양으로 닫기).</li>
              </ul>
            </div>
          </div>

          <div class="kanji-card card glass">
            <div class="kanji-header">
              <span class="kanji-char color-metal">庚</span>
              <span class="kanji-info">일곱째 천간 경 | 총 8획 | 오행: 양금 (陽金)</span>
            </div>
            <div class="kanji-steps">
              <p><strong>핵심 순서:</strong> 엄호(广) 부수를 먼저 쓰고, 안쪽의 건(彐) 모양을 채워 닫습니다.</p>
              <ul>
                <li><strong>1획:</strong> 맨 위에 점을 찍거나 짧은 가로획을 긋습니다.</li>
                <li><strong>2획:</strong> 그 아래로 길게 중심 가로획을 왼쪽에서 오른쪽으로 긋습니다.</li>
                <li><strong>3획:</strong> 왼쪽 위에서 대각선 왼쪽 아래로 길게 삐쳐 내립니다 (엄호 广 완성).</li>
                <li><strong>4획:</strong> 안쪽에 위치한 가로획을 왼쪽에서 오른쪽으로 긋습니다.</li>
                <li><strong>5획:</strong> 안쪽 왼쪽 세로획을 내립니다.</li>
                <li><strong>6획:</strong> 안쪽 가로획을 긋다가 오른쪽 세로획으로 꺾어 내립니다.</li>
                <li><strong>7획:</strong> 내부의 중심 가로획을 그어 네모를 채웁니다.</li>
                <li><strong>8획:</strong> 가장 아래 가로획을 넓게 그어 닫아줍니다.</li>
              </ul>
            </div>
          </div>

          <div class="kanji-card card glass">
            <div class="kanji-header">
              <span class="kanji-char color-metal">辛</span>
              <span class="kanji-info">매울 신 | 총 7획 | 오행: 음금 (陰金)</span>
            </div>
            <div class="kanji-steps">
              <p><strong>핵심 순서:</strong> 설립(立) 모양을 먼저 쓰고, 아래에 십(十) 자 모양을 결합합니다.</p>
              <ul>
                <li><strong>1획:</strong> 맨 위에 짧은 가로획이나 점을 찍습니다.</li>
                <li><strong>2획:</strong> 그 아래로 길게 가로획을 긋습니다.</li>
                <li><strong>3획:</strong> 왼쪽 위에 짧은 사선 삐침을 내립니다.</li>
                <li><strong>4획:</strong> 오른쪽 위에 짧은 사선 파임을 내립니다 (설 립 立 완성).</li>
                <li><strong>5획:</strong> 중간 크기의 가로획을 왼쪽에서 오른쪽으로 긋습니다.</li>
                <li><strong>6획:</strong> 아래에 가장 긴 가로획을 왼쪽에서 오른쪽으로 긋습니다.</li>
                <li><strong>7획:</strong> 중심을 관통하는 세로획을 위에서 아래로 곧고 길게 내리긋습니다 (갈고리 없음).</li>
              </ul>
            </div>
          </div>

          <div class="kanji-card card glass">
            <div class="kanji-header">
              <span class="kanji-char color-water">壬</span>
              <span class="kanji-info">아홉째 천간 임 | 총 3획 | 오행: 양수 (陽水)</span>
            </div>
            <div class="kanji-steps">
              <p><strong>핵심 순서:</strong> 위의 가로 두 획 → 세로 기둥 → 바닥 긴 가로획</p>
              <ul>
                <li><strong>1획:</strong> 맨 위의 가로획을 왼쪽에서 오른쪽으로 짧게 긋습니다. (살짝 아래로 삐치듯 쓰기도 합니다.)</li>
                <li><strong>2획:</strong> 중간의 가로획을 왼쪽에서 오른쪽으로 더 짧게 긋습니다.</li>
                <li><strong>3획:</strong> 위아래 가로획의 중심을 연결하며 세로로 곧게 내리긋고, 마지막 바닥의 가장 긴 가로획으로 연결하여 닫아줍니다.</li>
              </ul>
            </div>
          </div>

          <div class="kanji-card card glass">
            <div class="kanji-header">
              <span class="kanji-char color-water">癸</span>
              <span class="kanji-info">열째 천간 계 | 총 9획 | 오행: 음수 (陰水)</span>
            </div>
            <div class="kanji-steps">
              <p><strong>핵심 순서:</strong> 필발머리(癶) 부수 순서 작성 → 아래 하늘 천(天) 모양으로 채우기</p>
              <ul>
                <li><strong>1획:</strong> 왼쪽 위에서 대각선 왼쪽 아래로 부드럽게 삐쳐 내립니다.</li>
                <li><strong>2획:</strong> 1획의 시작점 부근에서 오른쪽 위로 가다가 아래로 꺾어 파해 내립니다 (필발 癶머리 뼈대).</li>
                <li><strong>3획:</strong> 왼쪽 아래에 짧은 삐침 점을 찍습니다.</li>
                <li><strong>4획:</strong> 오른쪽 아래에 짧은 대각선 점을 찍습니다.</li>
                <li><strong>5획:</strong> 하단 하늘 천(天) 모양의 첫 가로획을 왼쪽에서 오른쪽으로 긋습니다.</li>
                <li><strong>6획:</strong> 그 아래로 조금 더 긴 가로획을 평행하게 긋습니다.</li>
                <li><strong>7획:</strong> 가로획 중심에서 왼쪽 아래로 삐쳐 내립니다.</li>
                <li><strong>8획:</strong> 중심에서 오른쪽 아래로 부드럽게 파해 줍니다.</li>
                <li><strong>9획:</strong> 마지막으로 글자 정중앙을 관통하는 수직 세로획을 위에서 아래로 곧게 내리긋습니다.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `,
    summary: `
      <p><strong>✍️ 천간 획순 쓰는 법 핵심 정리:</strong></p>
      <ul style="margin-top: 8px; margin-left: 20px;">
        <li><strong>한자 필사 3대 대원칙:</strong> ‘위에서 아래로’, ‘왼쪽에서 오른쪽으로’, ‘가로를 긋고 세로를 긋는 것’이 기본입니다.</li>
        <li><strong>관통하는 세로획(甲, 壬 등):</strong> 글자의 뼈대가 되는 중심축은 좌우 및 내부를 모두 채운 뒤 가장 마지막에 내리긋습니다.</li>
        <li><strong>연습 대상 천간:</strong> 甲(5획), 乙(1획), 丙(5획), 丁(2획), 戊(5획), 己(3획), 庚(8획), 辛(7획), 壬(3획), 癸(9획)</li>
      </ul>
    `
  },
  chap6: {
    title: "Ⅵ. 한자 획순. 지지(地支)",
    subtitle: "지지 12자의 정확한 획수, 획순 및 한자 쓰는 법",
    content: `
      <div class="theory-section">
        <p>12지지(子·丑·寅·卯·辰·巳·午·未·申·酉·戌·亥)의 한자 획순을 상세히 안내합니다. 한자 필순 원칙에 입각하여 정확하게 쓸 때 가장 아름다운 자형이 완성됩니다.</p>
        
        <div class="kanji-guide-list">
          <div class="kanji-card card glass">
            <div class="kanji-header">
              <span class="kanji-char color-water">子</span>
              <span class="kanji-info">아들 자 | 총 3획 | 오행: 음수 (陰水)</span>
            </div>
            <div class="kanji-steps">
              <ul>
                <li><strong>1획:</strong> 위쪽 가로획을 왼쪽에서 오른쪽으로 긋다가 꺾어서 대각선 왼쪽 아래로 내립니다.</li>
                <li><strong>2획:</strong> 중앙을 뚫고 내려와 마지막에 왼쪽 위로 갈고리를 줍니다.</li>
                <li><strong>3획:</strong> 중앙을 가로지르는 가로획을 왼쪽에서 오른쪽으로 그어 완성합니다.</li>
              </ul>
            </div>
          </div>

          <div class="kanji-card card glass">
            <div class="kanji-header">
              <span class="kanji-char color-earth">丑</span>
              <span class="kanji-info">소 축 | 총 4획 | 오행: 음토 (陰토)</span>
            </div>
            <div class="kanji-steps">
              <ul>
                <li><strong>1획:</strong> 맨 위 가로획을 시작해 오른쪽 아래로 꺾어 내립니다.</li>
                <li><strong>2획:</strong> 왼쪽 세로 변을 위에서 아래로 내립니다.</li>
                <li><strong>3획:</strong> 중앙을 가로지르는 짧은 가로획을 긋습니다.</li>
                <li><strong>4획:</strong> 맨 아래를 받치는 긴 가로획을 그어 완성합니다.</li>
              </ul>
            </div>
          </div>

          <div class="kanji-card card glass">
            <div class="kanji-header">
              <span class="kanji-char color-wood">寅</span>
              <span class="kanji-info">동방 인 | 총 11획 | 오행: 양목 (陽木)</span>
            </div>
            <div class="kanji-steps">
              <ul>
                <li><strong>1~3획:</strong> 갓머리(宀) 부수를 순서대로 씁니다 (머리 위 점 → 왼쪽 점 → 오른쪽 꺾음).</li>
                <li><strong>4획:</strong> 중앙에 가로지르는 한 일(一) 획을 긋습니다.</li>
                <li><strong>5~6획:</strong> 안쪽 네모의 왼쪽 세로와 오른쪽 꺾어 내리는 획을 씁니다.</li>
                <li><strong>7~8획:</strong> 안쪽 내부 가로획과 아래 가로획을 씁니다.</li>
                <li><strong>9획:</strong> 아래를 닫아주는 긴 가로획을 긋습니다.</li>
                <li><strong>10획:</strong> 왼쪽 아래로 길게 삐쳐 내립니다.</li>
                <li><strong>11획:</strong> 오른쪽 아래로 부드럽게 파해 완성합니다.</li>
              </ul>
            </div>
          </div>

          <div class="kanji-card card glass">
            <div class="kanji-header">
              <span class="kanji-char color-wood">卯</span>
              <span class="kanji-info">토끼 묘 | 총 5획 | 오행: 음목 (陰木)</span>
            </div>
            <div class="kanji-steps">
              <ul>
                <li><strong>1획:</strong> 왼쪽 위에서 비스듬히 아래로 삐쳐 내립니다.</li>
                <li><strong>2획:</strong> 왼쪽 세로획을 내립니다.</li>
                <li><strong>3획:</strong> 왼쪽 아래에서 둥글게 꺾어 오른쪽 위로 올려 갈고리를 만듭니다.</li>
                <li><strong>4획:</strong> 오른쪽 위 꺾쇠 세로를 긋고 꺾어 내립니다.</li>
                <li><strong>5획:</strong> 오른쪽 세로 갈고리 획을 곧게 내려 꺾어 올립니다.</li>
              </ul>
            </div>
          </div>

          <div class="kanji-card card glass">
            <div class="kanji-header">
              <span class="kanji-char color-earth">辰</span>
              <span class="kanji-info">용 진 | 총 7획 | 오행: 양토 (陽土)</span>
            </div>
            <div class="kanji-steps">
              <ul>
                <li><strong>1획:</strong> 맨 위의 가로획을 긋습니다.</li>
                <li><strong>2획:</strong> 왼쪽 위에서 왼쪽 아래로 길게 삐쳐 내립니다.</li>
                <li><strong>3획:</strong> 내부 첫 번째 가로획을 긋습니다.</li>
                <li><strong>4~5획:</strong> 내부 세로와 가로 꺾는 획을 씁니다.</li>
                <li><strong>6획:</strong> 내부의 가로지르는 획을 긋습니다.</li>
                <li><strong>7획:</strong> 오른쪽 아래를 향해 길게 뻗어나가는 파임 획을 긋습니다.</li>
              </ul>
            </div>
          </div>

          <div class="kanji-card card glass">
            <div class="kanji-header">
              <span class="kanji-char color-fire">巳</span>
              <span class="kanji-info">뱀 사 | 총 3획 | 오행: 음화 (陰火)</span>
            </div>
            <div class="kanji-steps">
              <ul>
                <li><strong>1획:</strong> 왼쪽 세로에서 위를 거쳐 오른쪽 아래로 꺾어 내리는 몸통 획을 긋습니다.</li>
                <li><strong>2획:</strong> 몸통 중앙을 가로지르는 가로획을 긋습니다.</li>
                <li><strong>3획:</strong> 왼쪽 아래에서 오른쪽으로 가다가 위로 꺾어 올려 완성합니다 (ㄴ모양으로 닫기).</li>
              </ul>
            </div>
          </div>

          <div class="kanji-card card glass">
            <div class="kanji-header">
              <span class="kanji-char color-fire">午</span>
              <span class="kanji-info">말 오 | 총 4획 | 오행: 양화 (陽火)</span>
            </div>
            <div class="kanji-steps">
              <ul>
                <li><strong>1획:</strong> 왼쪽 위에서 아래로 비스듬히 삐칩니다.</li>
                <li><strong>2획:</strong> 상단의 가로획을 긋습니다.</li>
                <li><strong>3획:</strong> 하단의 긴 가로획을 긋습니다.</li>
                <li><strong>4획:</strong> 중앙을 위에서 아래로 내려뚫는 세로획을 긋습니다 (삐치지 않고 멈춤).</li>
              </ul>
            </div>
          </div>

          <div class="kanji-card card glass">
            <div class="kanji-header">
              <span class="kanji-char color-earth">未</span>
              <span class="kanji-info">아닐 미 | 총 5획 | 오행: 음토 (陰土)</span>
            </div>
            <div class="kanji-steps">
              <p><strong>⚠️ 주의:</strong> 末(끝 말)은 위 가로획이 아래보다 길지만, 未(아닐 미)는 위가 짧고 아래가 깁니다.</p>
              <ul>
                <li><strong>1획:</strong> 위의 짧은 가로획을 긋습니다.</li>
                <li><strong>2획:</strong> 아래의 긴 가로획을 긋습니다.</li>
                <li><strong>3획:</strong> 중앙의 세로 기둥을 곧게 내리긋습니다 (갈고리 없음).</li>
                <li><strong>4획:</strong> 세로 기둥 중심에서 왼쪽 아래로 삐쳐 내립니다.</li>
                <li><strong>5획:</strong> 오른쪽 아래로 파해 줍니다.</li>
              </ul>
            </div>
          </div>

          <div class="kanji-card card glass">
            <div class="kanji-header">
              <span class="kanji-char color-metal">申</span>
              <span class="kanji-info">원숭이 신 | 총 5획 | 오행: 양금 (陽金)</span>
            </div>
            <div class="kanji-steps">
              <ul>
                <li><strong>1~4획:</strong> 밭 전(田) 자 형태를 획순에 맞게 완성합니다.</li>
                <li><strong>5획:</strong> 자형 정중앙을 관통해 아래로 길게 내려꽂는 세로 기둥을 가장 마지막에 긋습니다.</li>
              </ul>
            </div>
          </div>

          <div class="kanji-card card glass">
            <div class="kanji-header">
              <span class="kanji-char color-metal">酉</span>
              <span class="kanji-info">닭 유 | 총 7획 | 오행: 음금 (陰金)</span>
            </div>
            <div class="kanji-steps">
              <ul>
                <li><strong>1획:</strong> 맨 위의 가로획을 긋습니다.</li>
                <li><strong>2~3획:</strong> 몸통의 왼쪽 세로와 오른쪽 꺾어 내리는 외곽 틀을 잡습니다.</li>
                <li><strong>4~5획:</strong> 내부 안쪽의 가로/세로 꺾이는 기운 획을 채웁니다.</li>
                <li><strong>6획:</strong> 내부 바닥을 닫기 전 가로획을 긋습니다.</li>
                <li><strong>7획:</strong> 맨 아래 바닥 가로획을 넓게 그어 몸통을 닫아줍니다.</li>
              </ul>
            </div>
          </div>

          <div class="kanji-card card glass">
            <div class="kanji-header">
              <span class="kanji-char color-earth">戌</span>
              <span class="kanji-info">개 술 | 총 6획 | 오행: 양토 (陽토)</span>
            </div>
            <div class="kanji-steps">
              <ul>
                <li><strong>1획:</strong> 상단의 가로획을 긋습니다.</li>
                <li><strong>2획:</strong> 왼쪽 세로 삐침 획을 긋습니다.</li>
                <li><strong>3획:</strong> 중앙 내부의 가로획을 긋습니다.</li>
                <li><strong>4획:</strong> 오른쪽 위에서 아래로 비스듬하게 내리꽂아 위로 갈고리를 주는 큰 획(창 과 戈 모양)을 긋습니다.</li>
                <li><strong>5획:</strong> 내부 왼쪽 아래에 삐침을 긋습니다.</li>
                <li><strong>6획:</strong> 오른쪽 상단 외곽에 점(•)을 찍어 마무리합니다.</li>
              </ul>
            </div>
          </div>

          <div class="kanji-card card glass">
            <div class="kanji-header">
              <span class="kanji-char color-water">亥</span>
              <span class="kanji-info">돼지 해 | 총 6획 | 오행: 양수 (陽水)</span>
            </div>
            <div class="kanji-steps">
              <ul>
                <li><strong>1~2획:</strong> 머리 부분의 점과 가로지르는 가로획을 씁니다.</li>
                <li><strong>3획:</strong> 왼쪽 아래로 꺾어져 삐치는 획을 씁니다.</li>
                <li><strong>4획:</strong> 자형 중앙을 관통하며 둥글게 내려오는 삐침을 씁니다.</li>
                <li><strong>5~6획:</strong> 오른쪽 안쪽과 바깥쪽 대각선 방향으로 두 개의 점(파임)을 찍어 완성합니다.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `,
    summary: `
      <p><strong>✍️ 지지 획순 쓰는 법 핵심 정리:</strong></p>
      <ul style="margin-top: 8px; margin-left: 20px;">
        <li><strong>네모(口) 구조를 닫는 바닥 획(巳, 酉, 申 등):</strong> 내부 요소를 모두 채워 넣은 뒤 맨 마지막 바닥 가로획을 그어 닫아줍니다.</li>
        <li><strong>단일 획순의 주의점:</strong> 子(3획), 丑(4획), 寅(11획), 卯(5획), 辰(7획), 巳(3획), 午(4획), 未(5획), 申(5획), 酉(7획), 戌(6획), 亥(6획)의 고유 필순과 획수 가이드라인을 제공합니다.</li>
      </ul>
    `
  },
  chap7: {
    title: "Ⅶ. 천간 설문해자(說文解字)",
    subtitle: "고전 자원 해설서 설문해자에 기록된 10천간의 어원과 구조",
    content: `
      <div class="theory-section">
        <p>허신(許愼)이 편찬한 <strong>설문해자(說文解字)</strong>는 한자의 자형과 본래의 자원(어원)을 밝힌 동양 최고의 문자학 고전입니다. 설문해자에서 천간은 단순한 문자 부호가 아니라, 만물이 탄생하여 성장하고 수렴되어 다시 새로운 씨앗으로 돌아가는 대자연의 순환 과정을 압축적으로 보여주는 철학 체계입니다.</p>

        <div class="kanji-etymology">
          <div class="etymology-box card glass">
            <h4>甲木 (갑목)</h4>
            <blockquote>「甲 : 東方之孟。陽气萌動，从木戴孚甲之象。一曰人頭宐爲甲，甲象人頭。凡甲之屬皆从甲。」</blockquote>
            <p><strong>[직역 및 원문 해석]</strong> 동방의 시작이다. 양기가 싹트고 꿈틀거리기 시작하니, 나무(木)를 따르며 씨앗의 단단한 껍질(孚甲)을 머리에 이고 나오는 형상을 본떴다. 일설에는 사람의 머리(頭)는 마땅히 '甲'이 되어야 하니, 갑의 자형은 사람의 머리를 상징한다고도 한다. 무릇 갑의 부류에 속하는 글자는 모두 갑의 의미를 따른다.</p>
            <p><strong>[구조적 의미]</strong> 봄의 따뜻한 양기가 움직이면서 새싹이 흙이나 씨앗의 단단한 겉껍질(孚甲)을 머리에 이고(戴) 밖으로 밀어 올리는 역동적인 시작을 뜻하며, 인체에서는 가장 높은 부위인 '머리(頭)'에 비유됩니다.</p>
          </div>

          <div class="etymology-box card glass">
            <h4>乙木 (을목)</h4>
            <blockquote>「乙 : 草木冤曲而出，陰气尙强，其出難。从丨中流。方不截，不絕也。凡乙之屬皆从乙。」</blockquote>
            <p><strong>[직역 및 원문 해석]</strong> 초목이 굽어지고(冤曲) 꺾이면서 나오는 모양이다. 겨울의 음기가 아직 강하므로 뚫고 나오는 과정이 험난하다. 뚫을 곤(丨) 자를 따랐으며 기운이 가운데서 흘러나온다. 사방으로 막혀 꺾일지언정(方不截) 완전히 끊어지지 않고(不絕) 이어지는 생명력이다. 무릇 을의 부류는 모두 을의 의미를 따른다.</p>
            <p><strong>[구조적 의미]</strong> 수직으로 곧게 솟구치는 갑목과 달리, 乙은 지표면과 음기의 억압 때문에 몸을 구부리고 비틀며 자라나는 형상입니다. 이는 억압을 이겨내는 외유내강(外柔內剛)의 질긴 생명력의 연원입니다.</p>
          </div>

          <div class="etymology-box card glass">
            <h4>丙火 (병화)</h4>
            <blockquote>「丙 : 位南方，萬物成炳然，陰气初起，陽气將虧。从一、入、冂。一者，陽也。丙承乙，象人肩。凡丙之屬皆从丙。」</blockquote>
            <p><strong>[직역 및 원문 해석]</strong> 남방에 위치하며 만물이 자라나 밝게 빛나는(炳然) 상태이다. 음기가 처음 일어나고 양기는 장차 이지러지려고 한다. 한 일(一), 들 입(入), 멀 경(冂)의 글자를 따랐다. '一'은 하늘의 양기를 의미한다. 병은 을의 뒤를 이으며 사람의 어깨(肩)를 본떴다. 무릇 병의 부류는 모두 병을 따른다.</p>
            <p><strong>[구조적 의미]</strong> 만물이 훤하게 자라나 자기를 완전히 드러낸(炳然) 성장의 정점을 상징합니다. 자형은 사람이 어깨를 활짝 벌린 모양(象人肩)이며, 만물을 덮는 지붕(冂) 아래로 양기(一)가 들어와(入) 가득 차 있는 형상입니다.</p>
          </div>

          <div class="etymology-box card glass">
            <h4>丁火 (정화)</h4>
            <blockquote>「丁 : 夏時萬物皆丁實。象形。丁承丙，象人心。凡丁之屬皆從丁。」</blockquote>
            <p><strong>[직역 및 원문 해석]</strong> 여름철에는 만물이 모두 속이 가득 차고 단단해진다(丁實). 그 모양을 본뜬 상형자이다. 정은 병의 뒤를 이으며 사람의 심장(心) 형상을 본떴다. 무릇 정의 부류는 모두 정의 의미를 따른다.</p>
            <p><strong>[구조적 의미]</strong> 외형적인 성장을 지나 내부적으로 단단한 뼈대와 실속을 갖추는 단계(壯實)를 의미합니다. 오행상 화에 속하는 정은 인체에서 생명을 조율하는 중심인 '심장(心)'을 뜻합니다.</p>
          </div>

          <div class="etymology-box card glass">
            <h4>戊土 (무토)</h4>
            <blockquote>「戊 : 中宮也。象六甲五龍之形。萬物皆茂於戊。凡戊之屬皆從戊。」</blockquote>
            <p><strong>[직역 및 원문 해석]</strong> 중앙의 궁(中宮)이다. 하늘과 땅의 순환(六甲)과 오행의 변화(五龍)가 얽혀 있는 모양을 본떴다. 만물이 戊의 단계에 이르면 모두 무성해진다(茂). 무릇 무의 부류는 모두 무를 따른다.</p>
            <p><strong>[구조적 의미]</strong> 戊는 '무성할 무(茂)'와 통하여 만물이 극도로 팽창하여 빽빽하게 우거진 상태를 나타냅니다. 자형은 무기(戈) 모양에서 유래했으나 음과 양의 거대한 기운이 중앙에서 만나 조화를 부리는 형상으로 풀이합니다.</p>
          </div>

          <div class="etymology-box card glass">
            <h4>己土 (기토)</h4>
            <blockquote>「己 : 中宮也。象萬物辟藏詘形也。己承戊，象人腹。凡己之屬皆從己。」</blockquote>
            <p><strong>[직역 및 원문 해석]</strong> 중앙의 궁(中宮)이다. 만물이 스스로 문을 닫아 안으로 들어앉아 굽히고 있는(詘形) 모양을 본떴다. 기는 무의 뒤를 이으며 사람의 배(腹) 형상을 본떴다. 무릇 기의 부류는 모두 기의 의미를 따른다.</p>
            <p><strong>[구조적 의미]</strong> 외부로 무한 팽창하던 기운(戊)을 내부로 거두어들여(詘) 다음 단계인 금(金)의 결실을 준비하고 내실을 기하는 공간을 상징하며, 인체에서는 만물을 담고 소화하는 '배(腹/脾胃)'에 해당합니다.</p>
          </div>

          <div class="etymology-box card glass">
            <h4>庚金 (경금)</h4>
            <blockquote>「庚 : 位西方。萬物皆肅然有成，故謂之庚。庚承己，象人齊。凡庚之屬皆從庚。」</blockquote>
            <p><strong>[직역 및 원문 해석]</strong> 서방에 위치한다. 만물이 모두 엄숙하게 정돈되며 결실을 이루어(肅然有成) 庚이라고 한다. 경은 기의 뒤를 이으며 사람의 배꼽(齊/臍)을 본떴다. 무릇 경의 부류는 모두 경을 따른다.</p>
            <p><strong>[구조적 의미]</strong> 만물이 겉껍질을 굳히고 단단하게 여물어 숙살지기로 성질을 고치고 변혁(更)하는 단계를 뜻합니다. 자형적으로는 배꼽을 본떴는데, 이는 부모로부터 공급받던 태반과의 줄을 끊고 독립하는 개혁의 순간을 의미합니다.</p>
          </div>

          <div class="etymology-box card glass">
            <h4>辛金 (신금)</h4>
            <blockquote>「辛 : 秋時萬物成孰，金剛味辛，辛痛即泣出。辛承庚，辛解節事。从干从 罪也。凡辛之屬皆從辛。」</blockquote>
            <p><strong>[직역 및 원문 해석]</strong> 가을철에는 만물이 온전히 익어가고 금의 기운이 단단해지니 그 맛은 맵다(辛). 매서운 아픔이 가해지면 즉시 눈물이 나온다. 신은 경의 뒤를 이으며 사물의 마디와 규칙을 분별하여 다스리는(解節事) 것을 뜻한다. 방패 간(干)과 죄인의 모습( )을 따랐다. 은 죄(罪)를 짓고 형벌을 받는 모양이다. 무릇 신의 부류는 모두 신을 따른다.</p>
            <p><strong>[구조적 의미]</strong> 완전히 익어 결실을 보는 과정에서 겪는 매서운 아픔과 단호한 정리, 잘라내는 작용(肅殺)을 의미하며, 규칙과 마디(節)를 세워 깔끔하게 분별하는 성질을 뜻합니다.</p>
          </div>

          <div class="etymology-box card glass">
            <h4>壬水 (임수)</h4>
            <blockquote>「壬 : 位北方。陰極陽生，萬物懷妊。从人承壬。壬承辛，象人懷妊之形。凡壬之屬皆從壬。」</blockquote>
            <p><strong>[직역 및 원문 해석]</strong> 북방에 위치한다. 음이 극에 달해 새로운 양이 탄생하니(陰極陽生) 만물이 생명을 품게 된다(懷妊). 사람(人)이 壬을 받드는 모양을 따랐다. 임은 신의 뒤를 이으며 사람이 생명을 임신하고 있는(懷妊) 형상을 본떴다. 무릇 임의 부류는 모두 임을 따른다.</p>
            <p><strong>[구조적 의미]</strong> 壬은 '아이 밸 임(妊)'과 통하여 겉으로는 생명 활동이 멈춘 겨울이지만 대지 아래 깊은 곳에서는 새로운 생명의 씨앗을 잉태하고 기르는(懷妊) 저장의 상태를 나타냅니다.</p>
          </div>

          <div class="etymology-box card glass">
            <h4>癸水 (계수)</h4>
            <blockquote>「癸 : 冬時水土平，可揆度也。象水从四方流入地중之形。癸承壬，象人족。凡癸之屬皆從癸。」</blockquote>
            <p><strong>[직역 및 원문 해석]</strong> 겨울철에는 물과 흙이 평평해져서(水土平) 가히 사물의 법도를 헤아릴 수 있다(揆度). 물이 사방에서 흘러나와 땅속으로 깊이 스며드는 모양을 본떴다. 계는 임의 뒤를 이으며 사람의 발(足) 형상을 본떴다. 무릇 계의 부류는 모두 계를 따른다.</p>
            <p><strong>[구조적 의미]</strong> 계는 '헤아릴 규(揆)'와 통하여 겨울의 끝자락에서 만물의 기운이 차분히 가라앉아 수평을 이룰 때 자연의 법도와 기준을 설계하는 지혜를 뜻합니다. 자형적으로 발(足)에 비유되어 다음 순환인 甲木(새싹)의 탄생을 밑에서 밀어 올리는 역할을 합니다.</p>
          </div>
        </div>
      </div>
    `,
    summary: `
      <p><strong>📜 설문해자 10천간 어원 핵심 정리:</strong></p>
      <ul style="margin-top: 8px; margin-left: 20px;">
        <li><strong>갑(甲)·을(乙):</strong> 단단한 씨앗 껍질을 이고 나오는 머리(甲)와 지표의 저항 때문에 굽어 나오는 줄기(乙)의 강인한 생명력 표현.</li>
        <li><strong>병(丙)·정(丁):</strong> 어깨(丙)를 벌리듯 사방으로 퍼지는 양기와 심장(丁)처럼 단단해져 실속을 차리는 여름의 무대.</li>
        <li><strong>무(戊)·기(己):</strong> 만물이 무성한 중앙의 궁(戊)과 안으로 구부려(詘) 대지의 태반(己/人腹)에 생명을 잉태하는 조율.</li>
        <li><strong>경(庚)·신(辛):</strong> 배꼽(庚/齊)을 끊어 자립하듯 성질을 고치고(更), 형벌의 매서운 아픔(辛)을 거쳐 알맹이만 남기는 가을의 분별.</li>
        <li><strong>임(壬)·계(癸):</strong> 아이를 배어(壬) 대지 밑에서 씨앗을 기르고, 발(癸/足)로 대지를 지탱해 법도(揆)를 헤아려 다음 순환을 준비함.</li>
      </ul>
    `
  },
  chap8: {
    title: "Ⅷ. 지지 설문해자(說文解字)",
    subtitle: "12지지가 상징하는 대자연의 순환 어원 해설",
    content: `
      <div class="theory-section">
        <p>설문해자에서 12지지는 단순한 동물이 아니라 만물의 탄생(生), 무성해짐(茂), 수렴(收), 저장(藏)에 이르는 음양순환의 실질적인 전개 과정을 문자로 형상화한 것입니다.</p>

        <div class="kanji-etymology">
          <div class="etymology-box card glass">
            <h4>子 (자수)</h4>
            <blockquote>「子 : 十一月，陽氣동，萬物滋，人爲厎。象形。凡子之屬皆从子。」</blockquote>
            <p><strong>[해석]</strong> 음력 11월(동지)은 양기가 움직여 만물이 번식하고 불어나는(滋) 시기이니 사람이 시작(厎)되는 것이다. 머리가 크고 팔다리를 뻗은 어린아이 혹은 씨앗에서 첫 싹이 트는 모양을 본뜬 상형자이다.</p>
          </div>

          <div class="etymology-box card glass">
            <h4>丑 (축토)</h4>
            <blockquote>「丑 : 紐也。十二月，萬物動，用事。象手之形。凡丑之屬皆从丑。」</blockquote>
            <p><strong>[해석]</strong> 묶는 것(紐)이다. 12월에 만물이 움직여 실제 작용을 시작하려 하는 것이다. 손가락을 구부려 물건을 꽉 쥐거나 끈으로 감아쥐듯 양기를 묶어두는 손의 모양을 본떴다.</p>
          </div>

          <div class="etymology-box card glass">
            <h4>寅 (인목)</h4>
            <blockquote>「寅 : 髕也. 正月，陽氣動，去黃泉，欲上出，陰尙强，从宀从(引)从宀/朿。」</blockquote>
            <p><strong>[해석]</strong> 펴는 것(髕/演)이다. 정월(1월)에 양기가 움직여 황천(땅속 깊은 곳)을 떠나 위로 올라오려 하나 음기가 아직 강하다. 집(땅 표면 宀)을 뚫고 가시(싹 朿)가 밖으로 뻗어 나가려 하나 아직 완전히 벗어나지 못한 모양을 본떴다.</p>
          </div>

          <div class="etymology-box card glass">
            <h4>卯 (묘목)</h4>
            <blockquote>「卯 : 冒也。二月，萬物冒地而出。象開門之形。凡卯之屬皆从卯。」</blockquote>
            <p><strong>[해석]</strong> 무릅쓰고 덮어쓰는 것(冒)이다. 2월에는 만물이 땅 표면을 무릅쓰고(뚫고) 솟구쳐 나온다. 닫혀 있던 음의 장벽을 허물고 양의 세계로 문을 활짝 열어젖히는(開門之形) 모양을 본떴다.</p>
          </div>

          <div class="etymology-box card glass">
            <h4>辰 (진토)</h4>
            <blockquote>「辰 : 震也。三月，陽氣動，雷電振，民農時也，物皆생. 从乙、匕，厂聲. 凡辰之屬皆从辰。」</blockquote>
            <p><strong>[해석]</strong> 요동치고 흔드는 것(震/振)이다. 3월에는 양기가 활발히 움직이고 벼락과 전기가 진동하니 백성들이 파종하는 농사철이며 만물이 다 생장한다. 조개껍데기에서 알맹이가 나와 꿈틀거리며 자라나는 모양을 본떴다.</p>
          </div>

          <div class="etymology-box card glass">
            <h4>巳 (사화)</h4>
            <blockquote>「巳 : 巳也。四月，陽氣巳出，陰氣巳藏，萬物見，成文章，故巳爲蛇，象形。」</blockquote>
            <p><strong>[해석]</strong> 일어난 것, 마친 것(巳/起)이다. 4월에는 양기가 이미 다 나왔고(巳出) 음기는 깊이 숨었으니(巳藏) 만물이 온전히 나타나 화려한 문채(文章)를 이룬다. 뱀(蛇)의 모양을 본뜬 상형자이다.</p>
          </div>

          <div class="etymology-box card glass">
            <h4>午 (오화)</h4>
            <blockquote>「午 : 忤也。五月，陰氣午逆陽，冒地而出。象重一二矢之形。凡午之屬皆从午。」</blockquote>
            <p><strong>[해석]</strong> 거스르고 교차하는 것(忤)이다. 5월에는 대지 아래에서 솟아난 일음(一陰)이 위를 지배하던 양기를 거슬러(오역) 지상으로 올라오려 한다. 양의 기운과 음의 기운이 화살처럼 교차하여 상충하는 모양을 본떴다.</p>
          </div>

          <div class="etymology-box card glass">
            <h4>未 (미토)</h4>
            <blockquote>「未 : 未也。六月，滋味也。象木重枝葉之形. 凡未之屬皆从未。」</blockquote>
            <p><strong>[해석]</strong> 맛(味)이다. 6월에는 만물이 완연히 성숙해 열매에 맛이 드는 때이다. 나무(木)의 가지와 잎이 겹겹이 무성하게 자라나 가을의 맛을 준비하는 모양을 본떴다.</p>
          </div>

          <div class="etymology-box card glass">
            <h4>申 (신금)</h4>
            <blockquote>「申 : 神也。七月，陰氣成，體自申束. 从臼自丨，束也。」</blockquote>
            <p><strong>[해석]</strong> 신령함(神)이다. 7월에는 음기가 완성되어 만물의 외형이 펼쳐지는 동시에 스스로 다잡아 묶인다(申束). 사방으로 펼쳐진 형태를 양손(臼)으로 감싸 쥐어 단단하게 통제하는 모양을 본떴다.</p>
          </div>

          <div class="etymology-box card glass">
            <h4>酉 (유금)</h4>
            <blockquote>「酉 : 就也。八月，黍成，可爲釀酒. 象古酒醴之器。凡酉之屬皆从酉。」</blockquote>
            <p><strong>[해석]</strong> 나아가 성취하는 것(就)이다. 8월에는 기장이 완전히 여물어 술을 담글 수 있다. 옛 술 항아리(酒器)의 모양을 본뜬 상형자로 기운을 내부에 가두어 수렴 완성함을 뜻한다.</p>
          </div>

          <div class="etymology-box card glass">
            <h4>戌 (술토)</h4>
            <blockquote>「戌 : 滅也。九月，陽氣微，萬物畢成，陽下入地也。五行土生於戊，盛於戌。」</blockquote>
            <p><strong>[해석]</strong> 소멸하는 것(滅)이다. 9월에는 양기가 극히 미약해지고 만물이 성장을 마감하며, 양기가 땅 아래로 들어간다. 戊土에서 시작한 토의 중화 작용이 戌土에서 왕성해져 양기를 덮어 보존한다.</p>
          </div>

          <div class="etymology-box card glass">
            <h4>亥 (해수)</h4>
            <blockquote>「亥 : 荄也。十月，微陽起，接盛陰. 从二，一人남, 一人女, 从乙, 象荄根連二也。」</blockquote>
            <p><strong>[해석]</strong> 풀뿌리(荄)이다. 10월에는 땅속 깊은 곳에서 미미한 양기가 시작되어(미양기) 하늘의 성한 음기와 접한다. 하늘(二) 아래에서 남성과 여성이 결합하여 생명의 씨앗(荄根)이 뿌리를 내려 잉태되는 모양을 본떴다.</p>
          </div>
        </div>
      </div>
    `,
    summary: `
      <p><strong>📜 설문해자 12지지 어원 핵심 정리:</strong></p>
      <ul style="margin-top: 8px; margin-left: 20px;">
        <li>설문해자에서 12지지는 동물의 성정이 아닌, 만물의 순환 전개 과정을 기호화한 것입니다.</li>
        <li><strong>생장과 수렴의 12단계:</strong> 子(만물의 소생, 滋) → 丑(양기를 손으로 묶음, 紐) → 寅(땅을 뚫고 펴짐, 髕) → 卯(흙을 무릅쓰고 나옴, 冒) → 辰(양기가 진동하여 생장, 震) → 巳(이미 다 나와 완연함, 巳) → 午(음기가 올라와 거스름, 忤) → 未(만물에 맛이 듬, 味) → 申(본체가 펼쳐져 묶임, 申) → 酉(최고조의 완성, 就) → 戌(양기가 꺼져 소멸, 滅) → 亥(뿌리를 내려 잉태함, 荄)</li>
      </ul>
    `
  },
  chap9: {
    title: "Ⅸ. 陰陽五行(음양오행)",
    subtitle: "오행의 상생과 상극, 반생과 반극, 천간합의 조건과 작용",
    content: `
      <div class="theory-section">
        <p>음양오행(陰陽五行)은 명리학을 지탱하는 가장 거대하고 중요한 원리입니다. 오행의 순환은 단순히 기계적인 작동이 아니라, 서로 살려주고(상생), 제어하고(상극), 때로는 지나친 생극에 의해 역효과를 내는(반생/반극) 살아있는 우주의 유기적 에너지 밸런스입니다.</p>

        <h3>1. 오행상생 (五行相生) : 살리고 보듬는 순환</h3>
        <p>상생은 한 기운이 다음 기운을 낳고 기르며 촉진하는 친화적인 관계입니다. 마치 어머니가 자식을 사랑하여 기르는 마음과 같습니다.</p>
        <ul>
          <li><strong>목생화 (木生火):</strong> 나무는 자신을 태워 불꽃을 피워냅니다. (봄이 깊어져 여름을 여는 이치)</li>
          <li><strong>화생토 (火生土):</strong> 불이 활활 타오르고 남은 재는 흙으로 돌아가 대지를 기름지게 합니다.</li>
          <li><strong>토생금 (土生金):</strong> 깊고 단단한 흙 속에서 광물과 보석(金)이 형성되어 나옵니다.</li>
          <li><strong>금생수 (金生水):</strong> 단단한 바위나 암반 틈새에서 맑은 지하수(水)가 솟구쳐 나옵니다.</li>
          <li><strong>수생목 (水生木):</strong> 촉촉한 물은 나무를 적셔 성장하게 만듭니다. (만물 생명의 원천)</li>
        </ul>

        <h3>2. 오행상극 (五行相剋) : 제어하고 다듬는 억제</h3>
        <p>상극은 특정 기운이 너무 비대해져 폭주하지 않도록 적절하게 제어하고 다듬어 균형을 맞춰주는 조율의 관계입니다. 상극이 없다면 우주는 한 방향으로 폭주해 무너지게 됩니다.</p>
        <ul>
          <li><strong>목극토 (木剋土):</strong> 나무 뿌리는 흙을 뚫고 들어가 영양을 흡수하고 흙이 흘러내리지 않게 고정합니다.</li>
          <li><strong>토극수 (土剋水):</strong> 흙은 흘러가는 물을 제방하여 댐을 만들고 물의 흐름을 조절합니다.</li>
          <li><strong>수극화 (水剋火):</strong> 물은 치솟는 불길을 꺼뜨려 과열된 온도를 낮추고 식혀줍니다.</li>
          <li><strong>화극금 (火剋金):</strong> 뜨거운 불은 단단한 쇠(원석)를 녹여 쓸모 있는 도구로 제련합니다.</li>
          <li><strong>금극목 (金剋木):</strong> 날카로운 금속(도끼, 가위)은 무성하게 뻗은 나무의 가지를 치고 다듬어 줍니다.</li>
        </ul>

        <h3>3. 반생(反生)과 반극(反剋)의 변증법</h3>
        <p>적천수 등의 고전에서 임철초는 <strong>중화(중화)</strong>를 강조하며 상생과 상극이 고정된 공식으로만 작동하지 않는다고 경고합니다.</p>
        
        <div class="grid grid-2">
          <div class="card glass">
            <h4>① 모다멸자 (母多滅子): 과다한 생의 해악</h4>
            <p>나를 생해주는 기운이 너무 지나치면 도리어 나를 파괴하게 됩니다.</p>
            <p><strong>예시:</strong> 나무가 자라려면 물이 필요하지만 물이 너무 거대하면 나무가 뿌리째 뽑혀 떠내려갑니다 (水多木浮).</p>
          </div>
          <div class="card glass">
            <h4>② 적수오건 (滴水熬乾): 무모한 극의 해악</h4>
            <p>상대를 극하려 할 때 나의 기운이 너무 미약하고 상대가 너무 강력하면 내가 증발해 버립니다.</p>
            <p><strong>예시:</strong> 물은 불을 끄지만(水剋火), 거대한 용광로 같은 불길에 물 한 방울을 던지면 흔적도 없이 증발해 버립니다 (火多水乾).</p>
          </div>
        </div>

        <h3>4. 천간오합 (天干五合) : 음양의 유정한 결합</h3>
        <p>천간합은 단순한 극(剋) 관계에 있는 양간과 음간이 만나 부부처럼 친화되어 새로운 오행의 성향을 지향하는 결합입니다.</p>
        <div class="table-responsive">
          <table class="table text-left">
            <thead>
              <tr>
                <th>합 (合) 구성</th>
                <th>명칭</th>
                <th>상징적 성정</th>
                <th>설명</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>甲 + 己 → 土</strong></td>
                <td>중정지합 (中正之合)</td>
                <td>분수를 지킴, 마음이 넓음</td>
                <td>강직한 갑목과 순응적인 기토가 만나 중용의 기운을 형성</td>
              </tr>
              <tr>
                <td><strong>乙 + 庚 → 金</strong></td>
                <td>인이지합 (仁義之合)</td>
                <td>어진 마음과 의리의 조화</td>
                <td>부드러운 을목과 결단력 있는 경금이 만나 강유(剛柔) 조화 형성</td>
              </tr>
              <tr>
                <td><strong>丙 + 辛 → 水</strong></td>
                <td>위제지합 (威制之合)</td>
                <td>위엄이 있음, 다소 냉정함</td>
                <td>태양 같은 병화와 예리한 신금이 만나 총명한 기운을 형성</td>
              </tr>
              <tr>
                <td><strong>丁 + 壬 → 木</strong></td>
                <td>음닉지합 (淫匿之合)</td>
                <td>감정이 풍부, 침투력이 강함</td>
                <td>달빛 같은 정화와 바다 같은 임수가 만나 새로운 생명력을 잉태</td>
              </tr>
              <tr>
                <td><strong>戊 + 癸 → 火</strong></td>
                <td>무정지합 (無情之合)</td>
                <td>겉은 화려하나 냉정함</td>
                <td>오래된 무토 대지와 젊은 계수 이슬이 만나 화려한 변화를 도모</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="note-box alert alert-danger">
          <h5>⚠️ 천간합 분석 시 주의점: 합이화(合而化) vs 합이반(合而絆)</h5>
          <ul>
            <li><strong>합이화 (合而化):</strong> 사주 원국의 계절적 배경(월지)이 지지해 주어 천간 두 글자가 실제로 새로운 오행으로 변화(化)에 성공하는 귀격.</li>
            <li><strong>합이반 (合而絆) 또는 기반 (羈絆):</strong> 사주 주변에 방해 요소가 있거나 월지가 돕지 않아, 화(化)하지 못하고 서로 결합하여 본래 지닌 작용력만 상실하고 묶여서 꼼짝 못 하는 상태 (탐합망생, 탐합망극).</li>
          </ul>
        </div>
      </div>
    `,
    summary: `
      <p><strong>🌀 음양오행의 생극 및 천간합 핵심 정리:</strong></p>
      <ul style="margin-top: 8px; margin-left: 20px;">
        <li><strong>상생(생)과 상극(극)의 균형:</strong> 상생은 기르고 돕는 친화적 관계이며, 상극은 넘치지 않도록 조율하고 다듬는 억제 관계입니다.</li>
        <li><strong>반생(反生)과 반극(反剋):</strong> 기운의 세력 균형에 따라 생이 도리어 상대를 해치거나(모다멸자 水多木浮), 극이 도리어 당하는(적수오건 火多水乾) 역설이 발생합니다.</li>
        <li><strong>천간합의 원리:</strong> 음양이 유정하게 짝지어 합화하는 5가지 천간합(중정, 인의, 위제, 음닉, 무정지합)과 기운이 묶여 역할을 잃어버리는 기반(羈絆) 현상을 이해하는 것이 핵심입니다.</li>
      </ul>
    `
  },
  chap10: {
    title: "Ⅹ. 천간 조후론",
    subtitle: "적천수 천간론에 입각한 10천간의 조후와 격국 분석",
    content: `
      <div class="theory-section">
        <p>천간 조후론은 십천간 각각이 대자연에서 가지는 구체적인 물상과 성정을 이해하고, 계절(조후)과의 관계 속에서 어떻게 사주 원국을 조율해야 귀격이 될 수 있는지 파악하는 명리학의 정수입니다.</p>

        <div class="accordion">
          <!-- 甲木 -->
          <div class="card glass">
            <h4 class="color-wood">1. 甲木 (갑목) : 참천(參天)하는 리더</h4>
            <p><strong>[적천수 원문]</strong> 「甲木參天，脫胎要火。貴在慈悲，斷不可少。春不容金，秋不容土。火熾乘龍，水蕩騎虎。地潤天和，植立千古。」</p>
            <p><strong>[해설]</strong> 갑목은 하늘을 찌를 듯 높이 솟구치는 기상이 있으므로 완고한 기운을 탈태(성장)시키려면 화(火)의 식상을 보아 빼어난 기운을 발설해야 합니다(脫胎要火). 귀함은 만물을 살리는 어진 마음(慈悲)에 있습니다. 봄철에는 금의 가지치기(전벌)를 꺼리며, 가을철에는 조열한 토에 뿌리가 상하는 것을 경계합니다. 화가 치성할 때는 습토인 辰토(龍)를 얻어 화기를 설기하고 조후를 맞추어야 하며, 물이 넘쳐 흐를 때는 寅목(虎)에 뿌리를 내려 수기를 흡수하고 중심을 잡아야 합니다.</p>
          </div>

          <!-- 乙木 -->
          <div class="card glass">
            <h4 class="color-wood">2. 乙木 (을목) : 유연하고 끈질긴 생명력</h4>
            <p><strong>[적천수 원문]</strong> 「乙木根荄，晦盲攸利。柔如徧土，跨鳳乘猴。藤蘿繫甲，可春可秋。」</p>
            <p><strong>[해설]</strong> 을목의 부드러운 뿌리는 습하고 어두운 환경(지하지간)에서도 끈질기게 생명력을 이어갑니다. 酉금(鳳)이나 申금(猴) 같은 강한 관성(쇠) 위에 앉아 있더라도 지지에 수기가 조화롭거나 뿌리가 살아있다면 능히 극을 견뎌냅니다. 가장 좋은 것은 겁재인 대들보 <strong>甲木(갑목)을 만나 넝쿨을 감고 올라가는 등라계갑(藤蘿繫甲)</strong>의 형상을 이루는 것입니다. 이 구조가 완성되면 봄이든 가을이든 두려움 없이 자신의 꽃을 피워냅니다.</p>
          </div>

          <!-- 丙火 -->
          <div class="card glass">
            <h4 class="color-fire">3. 丙火 (병화) : 천하를 비추는 광명</h4>
            <p><strong>[적천수 원문]</strong> 「丙火猛烈，欺霜侮雪。能煅庚金，逢辛反怯。土衆成慈，水猖顯節。虎馬犬鄉，甲來成滅。」</p>
            <p><strong>[해설]</strong> 병화는 태양처럼 매서워 눈과 서리(금수)를 두려워하지 않고 제압합니다. 강건한 庚금은 단련할 수 있으나 부드러운 보석인 辛금을 만나면 丙辛合을 하여 도리어 자신의 빛을 잃고 유약해집니다. 토가 많으면 빛이 가려지지만(회광) 성정은 애정 깊고 자애로워지며, 임수 바다가 밀려올 때는 수면에 빛을 반사하여 찬란한 지조와 영광(강휘상영 江輝相映)을 드러냅니다. 다만 지지에 寅午戌 화국을 짜고 천간에 갑목까지 가세해 과열되면 도리어 스스로를 태우는 재앙(焚滅)을 초래합니다.</p>
          </div>

          <!-- 丁火 -->
          <div class="card glass">
            <h4 class="color-fire">4. 丁火 (정화) : 은은하고 집중된 열기</h4>
            <p><strong>[적천수 원문]</strong> 「丁火柔中，內性昭融。抱乙而孝，合壬而忠。旺而不烈，衰而不窮。如有嫡母，可秋可冬。」</p>
            <p><strong>[해설]</strong> 정화는 등불이나 용광로의 불꽃처럼 본성은 온화하나 내면은 치밀하게 집중되어 있습니다. 을목 편인을 품으면 신금의 극으로부터 을목을 지켜 효도하고, 임수 정관을 만나면 다정하게 합(丁壬合)을 해 충성을 다합니다. 세력이 강하더라도 병화처럼 사납게 폭주하지 않고, 약하더라도 은근하게 유지되어 꺼지지 않는 생명력이 있습니다. 사주 원국에 <strong>든든한 정인인 甲木(嫡母)</strong>만 곁에 있다면 가을의 쇠도 녹이고 겨울의 추위도 견뎌내며 쓸모를 발휘합니다.</p>
          </div>

          <!-- 戊土 -->
          <div class="card glass">
            <h4 class="color-earth">5. 戊土 (무토) : 흔들림 없는 고산</h4>
            <p><strong>[적천수 원문]</strong> 「戊土固重，既中且正。靜吸動辟，萬物司命。水潤物生，火燥物病。若在坤艮，怕衝宜靜。」</p>
            <p><strong>[해설]</strong> 무토는 산맥이나 둑처럼 무겁고 단단하여 치우침이 없습니다. 봄과 여름에는 기운을 열어 만물을 자라게 하고(動辟), 가을과 겨울에는 수렴하여 생명을 보존합니다(靜吸). 무토 대지에 생명을 키우려면 수기가 촉촉하게 적셔주어야 만물이 살아나고(水潤物生), 화기만 가득해 바싹 마르면 대지가 황폐해져 생명이 병듭니다. 지지에 인목이나 신금(坤艮 방위)을 깔고 있을 때는 충으로 흔들리는 것을 꺼리며 마땅히 고요함을 유지해야 안전합니다.</p>
          </div>

          <!-- 己土 -->
          <div class="card glass">
            <h4 class="color-earth">6. 己土 (기토) : 생명을 배양하는 습토</h4>
            <p><strong>[적천수 원문]</strong> 「己土卑濕，中正蓄藏。不愁木盛，不畏水狂。火少火晦，金多金光。若要物旺，宜幫宜助。」</p>
            <p><strong>[해설]</strong> 기토는 낮고 습기가 있는 비옥한 밭의 흙이므로 안으로 기운을 수용하고 축적합니다. 흙이 부드러워 나무가 무성하더라도 뿌리를 잘 수용해 주므로 두려워하지 않고(不愁木盛), 물이 넘쳐 흘러도 물을 머금어 흡수할 뿐 둑처럼 터져 무너지지 않습니다(不畏水狂). 화기가 약할 때는 불씨를 흡수해 어둡게 만들지만, 금이 많을 때는 비옥한 흙이 금의 녹을 닦아내 광채를 빛나게 돕습니다. 기토의 영양분으로 만물을 무성하게 키워내려면 천간에서 병화 태양을 보고 지지에 습토(축토, 진토)의 도움을 얻어야 부귀를 이룹니다.</p>
          </div>

          <!-- 庚金 -->
          <div class="card glass">
            <h4 class="color-metal">7. 庚金 (경금) : 과단성 있는 단단한 무쇠</h4>
            <p><strong>[적천수 원문]</strong> 「庚金帶煞，剛健爲最。得水而清，得火而銳。土潤則生，土燥則脆. 能贏甲兄，輸於乙妹。」</p>
            <p><strong>[해설]</strong> 경금은 가을의 숙살지기를 듬뿍 품어 가장 억세고 강건합니다. 壬수 식상을 만나면 날카로운 기운이 씻겨 내려가 총명해지고(得水而清), 丁화 정관을 만나면 단련을 거쳐 예리한 칼이나 도구로 제련됩니다(得火而銳). 습토(진토, 축토)를 만나면 생조를 받아 단단해지지만 조열한 흙(미토, 술토)을 만나면 오히려 푸석해져 부러지기 쉽습니다 (土燥則脆). 강한 갑목(甲兄)은 도끼로 찍어 재물로 삼지만, 부드러운 을목(乙妹)을 만나면 을경합을 하여 마음을 빼앗기고 순종하게 됩니다.</p>
          </div>

          <!-- 辛金 -->
          <div class="card glass">
            <h4 class="color-metal">8. 辛金 (신금) : 도세주옥(淘洗珠玉)의 보석</h4>
            <p><strong>[적천수 원문]</strong> 「辛金軟弱，溫潤而清。畏土之疊，樂水之盈。能扶社稷，能救生靈。丙火溫合，化水有情。」</p>
            <p><strong>[해설]</strong> 신금은 가공을 완벽히 마친 고귀한 보석이나 정밀한 메스입니다. 흙이 너무 겹치는 것을 가장 꺼리는데, 흙 속에 묻혀 광채를 잃기 때문입니다(토다매금 土多埋金). 오직 <strong>임수(壬水)가 가득 흘러 보석의 먼지를 깨끗이 씻어내는 도세주옥(淘洗珠玉)</strong>의 구조를 가장 기뻐합니다. 태양인 병화를 만나면 병신합을 하여 따뜻하게 조화를 이루고 유정한 물(水)의 기운으로 변화하여 원국을 부드럽게 만들어 줍니다.</p>
          </div>

          <!-- 壬水 -->
          <div class="card glass">
            <h4 class="color-water">9. 壬水 (임수) : 요동치는 거대한 바다</h4>
            <p><strong>[적천수 원문]</strong> 「壬水通河，能洩金氣。剛중之德，周流不滯。通根透癸，衝天奔地。化則有情，從則相濟。」</p>
            <p><strong>[해설]</strong> 임수는 강과 바다처럼 거대하게 흘러 쇠의 기운을 받아들이고 막힘없이 흐릅니다. 지지에 뿌리를 강하게 내리고 천간에 계수 겁재까지 투출하면 쓰나미처럼 기세가 거칠어져 하늘을 찌르고 땅을 뒤엎으려 합니다(衝天奔地). 이때는 오직 <strong>무토(戊土) 제방이 있어야 거친 물결을 가두어</strong> 유용한 자원으로 쓸 수 있습니다. 정화를 만나 정임합(丁壬合)을 하면 목의 생기를 낳아 만물을 기르니 유정해집니다.</p>
          </div>

          <!-- 癸水 -->
          <div class="card glass">
            <h4 class="color-water">10. 癸水 (계수) : 대지를 적시는 단비</h4>
            <p><strong>[적천수 원문]</strong> 「癸水至弱，達於天津。得龍而運，功化스神. 不愁火土，不論庚辛。合戊見火，化象唯真。」</p>
            <p><strong>[해설]</strong> 계수는 하늘에서 내리는 빗물이나 옹달샘처럼 지극히 약하고 순수한 기운입니다. 지지에서 辰토(龍)를 만나면 수기를 얻어 승천하는 구름이 되니 조화가 신묘해집니다. 단비이므로 사주에 불과 흙이 치성해도 땅속으로 스며들어 나무를 키우기 때문에 화토를 두려워하지 않고, 마르지 않는 자원이므로 경금 신금의 기계적 생조에 목매지 않습니다. 무토를 만나 戊癸合을 하고 주변에 화기가 뒷받침되면 순수한 불의 기운으로 변형되어 귀격을 이룹니다.</p>
          </div>
        </div>
      </div>
    `,
    summary: `
      <p><strong>🌌 10천간 조후론 핵심 정리:</strong></p>
      <ul style="margin-top: 8px; margin-left: 20px;">
        <li>적천수 천간론의 명문을 토대로 각 천간이 계절과 만나는 조후의 핵심 비결을 분석합니다.</li>
        <li><strong>핵심 성정 및 조후 조율법:</strong>
          <ul style="margin-top: 4px;">
            <li>갑목(탈태요화, 득령 중시) | 을목(등라계갑으로 봄가을의 위기 극복)</li>
            <li>병화(강휘상영, 신금과의 합화수) | 정화(갑목 벽갑인화 중시)</li>
            <li>무토(수윤물생, 산맥의 묵직함) | 기토(습토로서 수용성과 금의 광채 조화)</li>
            <li>경금(정화 제련 및 임수 설기의 중요성) | 신금(임수를 만나는 도세주옥의 귀함, 토다매금 경계)</li>
            <li>임수(무토 제방 중시, 충천분지 제어) | 계수(우로수로서 목 생조에 헌신, 화토를 겁내지 않음)</li>
          </ul>
        </li>
      </ul>
    `
  },
  chap11: {
    title: "Ⅺ. 지지 조후론",
    subtitle: "12지지의 특성, 3대 분류, 육합과 육충의 현실적 작용",
    content: `
      <div class="theory-section">
        <p>지지는 천간의 기운을 현실적인 시간과 공간의 환경으로 구현하는 영역입니다. 지지의 성향과 지지 간의 상호작용(합, 충)을 파악하는 것은 명리 해석의 가장 중요한 뼈대입니다.</p>

        <h3>1. 지지의 3대 분류와 성향</h3>
        <p>12지지는 사주 원국에서 움직이는 역할에 따라 크게 세 가지 그룹으로 나뉩니다.</p>
        <ul>
          <li><strong>사생지 (生地 - 寅, 申, 巳, 亥):</strong> 각 계절을 시작하는 글자들로, 미래 계절의 기운을 준비하므로 역동적이고 기동성이 강합니다. <strong>역마살(驛馬煞)</strong>에 해당하며 기획, 시작, 추진력이 강으나 마무리가 약할 수 있습니다.</li>
          <li><strong>사왕지 (旺地 - 子, 午, 卯, 酉):</strong> 각 계절의 한복판에서 가장 순수하고 강력한 본래 오행의 파워를 자랑합니다. <strong>도화살(桃花煞)</strong>에 해당하며 자신의 매력을 드러내고 순수성을 지키려는 고집과 주체성이 강합니다.</li>
          <li><strong>사고지 / 묘지 (庫地/墓地 - 辰, 戌, 丑, 未):</strong> 계절을 마감하고 다음 계절로 넘어가는 완충 지대이자 기운을 묻어 보관하는 창고입니다. <strong>화개살(華蓋煞)</strong>에 해당하며 포용력과 중재 능력이 뛰어나고 내면에 복잡한 생각과 정신성을 담고 있습니다.</li>
        </ul>

        <h3>2. 육합(六合)의 조화와 특징</h3>
        <p>육합은 지지 12자가 원형으로 배열될 때 대칭을 이루는 글자끼리 마주 보며 자석처럼 끌어당겨 합을 이루는 유정한 관계입니다.</p>
        <div class="table-responsive">
          <table class="table text-left">
            <thead>
              <tr>
                <th>순번</th>
                <th>육합 구성</th>
                <th>합화 오행</th>
                <th>성격 및 임상적 특징</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td><strong>子 + 丑</strong></td>
                <td>土 (또는 水)</td>
                <td>가장 차가운 기운들의 만남. 상황에 따라 얼어붙거나 묶여 정지되는 작용</td>
              </tr>
              <tr>
                <td>2</td>
                <td><strong>寅 + 亥</strong></td>
                <td>木</td>
                <td>생합(生合)이자 파(破). 인해파의 작용도 있어 시작은 좋으나 뒤에 갈등 소지</td>
              </tr>
              <tr>
                <td>3</td>
                <td><strong>卯 + 戌</strong></td>
                <td>火</td>
                <td>풋풋한 봄(卯)과 늦가을 창고(戌)가 만난 조화. 은밀하고 뜨거운 화기 생성</td>
              </tr>
              <tr>
                <td>4</td>
                <td><strong>辰 + 酉</strong></td>
                <td>金</td>
                <td>생합(生合). 습토인 진토가 유금을 생해주어 금 기운을 매우 강력하게 강화</td>
              </tr>
              <tr>
                <td>5</td>
                <td><strong>巳 + 申</strong></td>
                <td>水 (또는 刑)</td>
                <td>사신합이자 사신형. 합을 이루면서도 동시에 깎아내고 조정하는 형(刑)의 작용 교차</td>
              </tr>
              <tr>
                <td>6</td>
                <td><strong>午 + 未</strong></td>
                <td>火 (동기)</td>
                <td>가장 뜨거운 여름 기운끼리의 조화로운 합. 별도로 화하지 않고 화의 세력을 공고히 함</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>3. 육충(六沖)의 충돌과 변화</h3>
        <p>육충은 지지 판에서 서로 정반대 방향(180도)에 대립하는 글자끼리 만나 정면충돌하며 변화를 만들어내는 가장 역동적인 에너지입니다.</p>
        <div class="table-responsive">
          <table class="table text-left">
            <thead>
              <tr>
                <th>순번</th>
                <th>육충 구성</th>
                <th>대립 구조</th>
                <th>성격 및 현실적 특징</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td><strong>子 + 午</strong></td>
                <td>정북(겨울) vs 정남(여름)</td>
                <td>수화교전(水火交戰). 순수한 물과 불의 정면충돌로 심리적 변동, 감정 기복 유발</td>
              </tr>
              <tr>
                <td>2</td>
                <td><strong>丑 + 未</strong></td>
                <td>북동(늦겨울) vs 남서(늦여름)</td>
                <td>붕충(朋沖)이자 묘고충. 축축한 토와 마른 토의 충돌로 지장간이 열려(개고) 재물 변동 발생</td>
              </tr>
              <tr>
                <td>3</td>
                <td><strong>寅 + 申</strong></td>
                <td>동북(초봄) vs 서남(초가을)</td>
                <td>금목상쟁(金木相爭). 시작하는 역마지간의 충돌로 빠른 주거/직업 이동, 교통사고 우려</td>
              </tr>
              <tr>
                <td>4</td>
                <td><strong>卯 + 酉</strong></td>
                <td>정동(한봄) vs 정서(한가을)</td>
                <td>금목상쟁. 왕지끼리의 충돌로 극단적 대립, 자존심 싸움, 뼈/간 건강 악화 소지</td>
              </tr>
              <tr>
                <td>5</td>
                <td><strong>辰 + 戌</strong></td>
                <td>남동(늦봄) vs 북서(늦가을)</td>
                <td>붕충이자 묘고충. 환절기 대지끼리의 충돌로 주거 이전, 직업 변동, 개고 작용 유발</td>
              </tr>
              <tr>
                <td>6</td>
                <td><strong>巳 + 亥</strong></td>
                <td>남석(초여름) vs 북동(초겨울)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>4. 12지지의 개별 특성과 조후 분석</h3>
        
        <div class="accordion">
          <!-- 子 -->
          <div class="card glass">
            <h4 class="color-water">1) 子水 (자수)</h4>
            <p><strong>• 핵심 물리적·자연적 상징:</strong> 절기상 대설(大雪)부터 소한(小寒) 전날까지로 양력 12월에 해당합니다. 하루 중 가장 어두운 자시(23:30 ~ 01:30)에 대응하며, 동물은 번식력이 높은 쥐(鼠)입니다. 맑고 깨끗한 옹달샘, 지하수를 상징하며 인체에서는 신장, 방광, 생식기를 관장합니다.</p>
            <p><strong>• 명리적 핵심 특징:</strong> 겉은 극도로 차가운 어둠이지만 내부에서 1양(一陽)이 시생하는 <strong>일양시생(一陽始生)</strong>의 공간입니다. 지장간에는 임수(10일)와 계수(20일)만 존재하여 기운이 극히 순수합니다. 주역의 지뢰복(地雷復)괘에 해당합니다.</p>
            <p><strong>• 신살 및 성향:</strong> 사왕지로서 <strong>도화살(桃花煞)</strong>에 해당합니다. 뛰어난 정신성과 지혜, 사색을 상징하지만 치우치면 우울감이나 비밀주의로 흐를 수 있습니다.</p>
            <p><strong>• 타 지지와의 관계:</strong> 자축합(子丑합), 신자진 삼합(申子辰 水局), 자오충(子午충), 자묘형(子卯형) 등이 있습니다.</p>
          </div>

          <!-- 丑 -->
          <div class="card glass">
            <h4 class="color-earth">2) 丑土 (축토)</h4>
            <p><strong>• 핵심 물리적·자연적 상징:</strong> 소한(小寒)부터 입춘(立春) 전날까지로 양력 1월에 해당합니다. 꽁꽁 얼어붙은 한겨울의 대지인 축시(01:30 ~ 03:30)에 대응하며, 동물은 우직한 소(牛)입니다. 얼어붙은 땅(동토 凍土), 갯벌, 자갈밭, 혹은 금고/창고의 물상을 가집니다.</p>
            <p><strong>• 명리적 핵심 특징:</strong> **금(金)의 고지(庫地)**로서 결실의 기운을 보관합니다. 지장간은 계수(9일), 신금(3일), 기토(18일)로 구성됩니다. 한겨울을 마무리하고 새봄을 준비하는 매개체 역할을 합니다.</p>
            <p><strong>• 신살 및 성향:</strong> 사고지로서 <strong>화개살(華蓋煞)</strong>에 해당합니다. 성실함과 은근한 끈기가 있으나, 차가운 흙의 기운으로 인해 원진(오축 원진)이나 탕화의 요소를 내포합니다.</p>
            <p><strong>• 타 지지와의 관계:</strong> 자축합(子丑합), 사유축 삼합(巳酉丑 金局), 축미충(丑未충), 축술미 삼형(丑戌未 三刑) 등이 있습니다.</p>
          </div>

          <!-- 寅 -->
          <div class="card glass">
            <h4 class="color-wood">3) 寅木 (인목)</h4>
            <p><strong>• 핵심 물리적·자연적 상징:</strong> 입춘(立春)부터 경칩(驚蟄) 전날까지로 양력 2월에 해당합니다. 어둠이 걷히는 새벽인 인시(03:30 ~ 05:30)에 대응하며, 동물은 호랑이(虎)입니다. 대자연의 큰 나무, 기둥, 새싹을 뜻하며 인체에서는 간, 담낭, 신경계를 뜻합니다.</p>
            <p><strong>• 명리적 핵심 특징:</strong> **목(木)의 생지(生地)**이자 봄의 시작점입니다. 지장간은 무토(7일), 병화(7일), 갑목(16일)로 구성되어 내면에 이미 여름의 뜨거운 병화(태양) 불씨를 품고 있습니다 (삼양개태 三陽開泰).</p>
            <p><strong>• 신살 및 성향:</strong> 사생지로서 <strong>역마살(驛馬煞)</strong>에 해당합니다. 독립심이 강하고 추진력과 기획력이 대단하나, 다소 조급하거나 마무리가 약할 수 있습니다.</p>
            <p><strong>• 타 지지와의 관계:</strong> 인해합(寅亥합), 인오술 삼합(寅오술 火局), 인신충(寅申충), 인사신 삼형(寅巳申 三刑) 등이 있습니다.</p>
          </div>

          <!-- 卯 -->
          <div class="card glass">
            <h4 class="color-wood">4) 卯木 (묘목)</h4>
            <p><strong>• 핵심 물리적·자연적 상징:</strong> 경칩(驚蟄)부터 청명(淸明) 전날까지로 양력 3월에 해당합니다. 아침 해가 솟구치는 묘시(05:30 ~ 07:30)에 대응하며, 동물은 토끼(兔)입니다. 화초, 넝쿨식물, 잔디, 가구, 섬유의 물상을 지니며 인체에서는 간, 손가락, 머리카락, 시력을 상징합니다.</p>
            <p><strong>• 명리적 핵심 특징:</strong> **목(木)의 왕지(旺地)**이자 봄의 한가운데(仲春)입니다. 지장간은 갑목(10일)과 을목(20일)으로 순수한 목의 세력입니다. 해묘미 삼합의 중심축을 담당합니다.</p>
            <p><strong>• 신살 및 성향:</strong> 사왕지로서 <strong>도화살(桃花煞)</strong>에 해당합니다. 유연하고 친화력이 있으며 미적 감각이 발달해 있습니다. 자형 구조상 갈라지는 성정이 있어 현침살(懸針煞)의 예리함도 지닙니다.</p>
            <p><strong>• 타 지지와의 관계:</strong> 묘술합(卯戌합), 해묘미 삼합(亥卯未 木局), 묘유충(卯酉충), 자묘형(자묘형) 등이 있습니다.</p>
          </div>

          <!-- 辰 -->
          <div class="card glass">
            <h4 class="color-earth">5) 辰土 (진토)</h4>
            <p><strong>• 핵심 물리적·자연적 상징:</strong> 청명(淸明)부터 입하(立夏) 전날까지로 양력 4월에 해당합니다. 아침 활동이 시작되는 진시(07:30 ~ 09:30)에 대응하며, 동물은 12지 중 유일한 상상의 동물인 용(龍)입니다. 물기를 머금은 습토, 댐, 저수지, 호수, 갯벌, 광장을 상징하며 위장과 피부를 관장합니다.</p>
            <p><strong>• 명리적 핵심 특징:</strong> **수(水)의 고지(庫地)**로서 봄의 기운을 마감하고 여름으로 넘어가는 징검다리입니다. 지장간은 을목(9일), 계수(3일), 무토(18일)로 구성되어 변화무쌍한 에너지를 갖습니다.</p>
            <p><strong>• 신살 및 성향:</strong> 사고지로서 <strong>화개살(華蓋煞)</strong>에 해당합니다. 庚辰, 壬辰 등 강렬한 <strong>괴강살(魁罡煞) 및 백호살(白虎煞)</strong>을 형성하기 쉬워 비범한 추진력과 돌파력을 보입니다.</p>
            <p><strong>• 타 지지와의 관계:</strong> 진유합(辰酉합), 신자진 삼합(申子辰 水局), 진술충(辰戌충), 진진자형(辰辰自刑) 등이 있습니다.</p>
          </div>

          <!-- 巳 -->
          <div class="card glass">
            <h4 class="color-fire">6) 巳火 (사화)</h4>
            <p><strong>• 핵심 물리적·자연적 상징:</strong> 입하(立夏)부터 망종(芒종) 전날까지로 양력 5월에 해당합니다. 오전의 사시(09:30 ~ 11:30)에 대응하며, 동물은 뱀(蛇)입니다. 태양광, 레이저, 고속도로, 반도체의 물상이며 심장, 소장, 안구, 치아, 얼굴을 관장합니다.</p>
            <p><strong>• 명리적 핵심 특징:</strong> **금(金)의 생지(生地)**이자 여름의 시작입니다. 지장간은 무토(7일), 경금(7일), 병화(16일)로 구성됩니다. 본질(體)은 음(陰)이나 실제 쓰임(用)은 강력한 양화(陽火)로 쓰입니다.</p>
            <p><strong>• 신살 및 성향:</strong> 사생지로서 <strong>역마살(驛馬煞)</strong>에 해당합니다. 독점욕과 집념이 강하고 화려한 표현력을 자랑합니다.</p>
            <p><strong>• 타 지지와의 관계:</strong> 사신합(巳申합), 사유축 삼합(巳酉丑 金局), 사해충(巳亥충), 인사신 삼형(寅巳申 三刑) 등이 있습니다.</p>
          </div>

          <!-- 午 -->
          <div class="card glass">
            <h4 class="color-fire">7) 午火 (오화)</h4>
            <p><strong>• 핵심 물리적·자연적 상징:</strong> 망종(芒種)부터 소서(小暑) 전날까지로 양력 6월에 해당합니다. 한낮인 오시(11:30 ~ 13:30)에 대응하며, 동물은 말(馬)입니다. 정오의 뜨거운 태양빛, 번개, 용광로의 물상이며 심장, 정신, 혈관을 관장합니다.</p>
            <p><strong>• 명리적 핵심 특징:</strong> 겉은 강렬한 양이나 내면에서 1음(一陰)이 시작되는 **일음시생(一陰始生)**의 공간입니다. 지장간은 병화(10일), 기토(9일), 정화(11일)로 구성되어 예외적으로 기토 중기를 포함하는 특수한 삼등분 구조를 가집니다.</p>
            <p><strong>• 신살 및 성향:</strong> 사왕지로서 <strong>도화살(桃花煞)</strong>에 해당합니다. 숨김없이 솔직담백하고 화려함을 추구하지만 욱하는 성정이 있으며 탕화의 살을 지닙니다.</p>
            <p><strong>• 타 지지와의 관계:</strong> 오미합(午未합), 인오술 삼합(寅午戌 火局), 자오충(자오충), 오오자형(오오자형) 등이 있습니다.</p>
          </div>

          <!-- 未 -->
          <div class="card glass">
            <h4 class="color-earth">8) 未土 (미토)</h4>
            <p><strong>• 핵심 물리적·자연적 상징:</strong> 소서(小暑)부터 입추(立秋) 전날까지로 양력 7월에 해당합니다. 미시(13:30 ~ 15:30)에 대응하며, 동물은 무리를 짓는 양(羊)입니다. 뜨거운 열기를 품은 마른 흙(조토 燥土), 가공된 목재의 물상이며 위장과 복부를 관장합니다.</p>
            <p><strong>• 명리적 핵심 특징:</strong> **목(木)의 고지(庫地)**로서 목의 성장을 마감하고 결실인 금(金)으로 기운을 넘겨줍니다. 지장간은 을목(9일), 정화(3일), 기토(18일)로 구성됩니다. 한자 '味(맛 미)'와 어원이 같아 맛을 다스리는 조절자입니다.</p>
            <p><strong>• 신살 및 성향:</strong> 사고지로서 <strong>화개살(華蓋煞)</strong>에 해당합니다. 외유내강형의 성격으로 끈기가 대단하나 조열한 환경으로 인한 답답함을 겪기 쉽습니다.</p>
            <p><strong>• 타 지지와의 관계:</strong> 오미합(午未합), 해묘미 삼합(亥卯未 木局), 축미충(축미충), 축술미 삼형(丑戌未 三刑) 등이 있습니다.</p>
          </div>

          <!-- 申 -->
          <div class="card glass">
            <h4 class="color-metal">9) 申金 (신금)</h4>
            <p><strong>• 핵심 물리적·자연적 상징:</strong> 입추(立秋)부터 백로(白露) 전날까지로 양력 8월에 해당합니다. 신시(15:30 ~ 17:30)에 대응하며, 동물은 영리한 원석을 다루는 원숭이(申)입니다. 가공되지 않은 무쇠, 철도, 군사기지의 물상이며 대장, 폐, 뼈대를 관장합니다.</p>
            <p><strong>• 명리적 핵심 특징:</strong> **수(Water)의 생지(生地)**이자 숙살지기가 시작되는 공간입니다. 지장간은 무토(7일), 임수(7일), 경금(16일)로 구성되어 겨울의 물(壬水)을 미리 잉태합니다. 신자진 삼합의 시작점입니다.</p>
            <p><strong>• 신살 및 성향:</strong> 사생지로서 <strong>역마살(驛馬煞)</strong>에 해당합니다. 재주가 많고 대단히 냉철하며 이성적이지만 차가운 언어로 타인에게 상처를 주기 쉽습니다.</p>
            <p><strong>• 타 지지와의 관계:</strong> 사신합(巳申합), 신자진 삼합(申子辰 水局), 인신충(인신충), 인사신 삼형(寅巳申 三刑) 등이 있습니다.</p>
          </div>

          <!-- 酉 -->
          <div class="card glass">
            <h4 class="color-metal">10) 酉金 (유금)</h4>
            <p><strong>• 핵심 물리적·자연적 상징:</strong> 백로(白露)부터 한로(寒露) 전날까지로 양력 9월에 해당합니다. 유시(17:30 ~ 19:30)에 대응하며, 동물은 닭(鷄)입니다. 제련된 보석, 날카로운 칼날, 술항아리를 뜻하며 인체에서는 폐와 기관지를 관장합니다.</p>
            <p><strong>• 명리적 핵심 특징:</strong> **금(Metal)의 왕지(旺地)**이자 기물이 완성된 격입니다. 지장간은 경금(10일)과 신금(20일)으로 순수한 금의 결정체입니다. 사유축 삼합의 중심축을 담당합니다.</p>
            <p><strong>• 신살 및 성향:</strong> 사왕지로서 <strong>도화살(桃花煞)</strong>에 해당합니다. 극도의 섬세함과 깔끔함, 결벽증적인 성향이 있으며 현침살의 성정 및 예리한 직관(酉眼)을 가집니다.</p>
            <p><strong>• 타 지지와의 관계:</strong> 진유합(辰酉합), 사유축 삼합(巳酉丑 金局), 묘유충(묘유충), 유유자형(유유자형) 등이 있습니다.</p>
          </div>

          <!-- 戌 -->
          <div class="card glass">
            <h4 class="color-earth">11) 戌土 (술토)</h4>
            <p><strong>• 핵심 물리적·자연적 상징:</strong> 한로(寒露)부터 입동(立冬) 전날까지로 양력 10월에 해당합니다. 술시(19:30 ~ 21:30)에 대응하며, 동물은 충직한 개(犬)입니다. 건조하고 마른 흙, 높은 산맥, 성벽, 군사 기지, 극장. 위장, 명치, 피부, 주관절.</p>
            <p><strong>• 명리적 핵심 특징:</strong> **화(Fire)의 고지(庫地)**로서 여름의 뜨거운 불씨를 땅속에 묻어 보존하고 겨울의 혹독한 추위를 막는 보루입니다. 지장간은 신금(9일), 정화(3일), 무토(18일)로 구성됩니다.</p>
            <p><strong>• 신살 및 성향:</strong> 사고지로서 <strong>화개살(華蓋煞)</strong>에 해당합니다. 영성과 지혜가 깊은 **천문성(天文星)**이자 庚戌, 壬戌 등의 괴강/백호살을 형성하여 강한 신념을 나타냅니다.</p>
            <p><strong>• 타 지지와의 관계:</strong> 묘술합(묘술합), 인오술 삼합(寅오술 火局), 진술충(진술충), 축술미 삼형(축술미 삼형) 등이 있습니다.</p>
          </div>

          <!-- 亥 -->
          <div class="card glass">
            <h4 class="color-water">12) 亥水 (해수)</h4>
            <p><strong>• 핵심 물리적·자연적 상징:</strong> 입동(立冬)부터 대설(大雪) 전날까지로 양력 11월에 해당합니다. 해시(21:30 ~ 23:30)에 대응하며, 동물은 풍요를 뜻하는 돼지(豬)입니다. 바다, 호수, 강물, 인터넷망. 신장, 방광, 생식기, 혈액, 도파민.</p>
            <p><strong>• 명리적 핵심 특징:</strong> **목(Wood)의 생지(生地)**로서 다음 봄의 생명(甲木)을 품고 기르는 공간입니다. 지장간은 무토(7일), 갑목(7일), 임수(16일)로 구성되며, 본질(體)은 음이나 쓰임(用)은 양수로 발현됩니다.</p>
            <p><strong>• 신살 및 성향:</strong> 사생지로서 <strong>역마살(驛馬煞)</strong>에 해당합니다. 넓은 포용력과 융합 능력이 돋보이며 천문성의 깊은 통찰력을 보여줍니다.</p>
            <p><strong>• 타 지지와의 관계:</strong> 인해합(인해합), 해묘미 삼합(해묘미 삼합), 사해충(사해충), 해해자형(해해자형) 등이 있습니다.</p>
          </div>
        </div>
      </div>
    `,
    summary: `
      <p><strong>⛰️ 12지지의 특성 및 합·충 핵심 정리:</strong></p>
      <ul style="margin-top: 8px; margin-left: 20px;">
        <li><strong>지지의 3대 분류:</strong> 사생지(寅申巳亥, 역마살) | 사왕지(子午卯酉, 도화살) | 사고지(辰戌丑未, 화개살)</li>
        <li><strong>육합(지합):</strong> 자축(토), 인해(목), 묘술(화), 진유(금), 사신(수), 오미(화)의 6개 대칭 결합 및 형·파 복합 작용.</li>
        <li><strong>육충(지충):</strong> 자오(수화교전), 축미(朋충/개고), 인신(금목상쟁/역마), 묘유(금목상쟁/왕지), 진술(朋충/개고), 사해(수화교전/역마)의 정면충돌 및 주거/직업적 역동적 대변화.</li>
        <li><strong>12지지의 조후적 물상:</strong> 子(동지, 1양시생)부터 亥(입동, 목의 생지)에 이르는 12자의 한의학적, 명리학적 물상과 결합 세부내용 수록.</li>
      </ul>
    `
  },
  chap12: {
    title: "Ⅺ. 천간 지지 지장간 응용법",
    subtitle: "월령(月令) 장의 논리를 통해 보는 격국과 사령의 관계",
    content: `
      <div class="theory-section">
        <p>월령(月令)은 사주 원국의 주춧돌이자 사주 전체의 격국(格局)과 용신을 결정하는 가장 강력한 무대입니다. 고전 적천수 '월령' 장의 가르침을 바탕으로 천간과 지지가 어떻게 유기적으로 호응해야 하는지 분석합니다.</p>

        <h3>1. 월령(月令)과 인원용사(人元用事)</h3>
        <p>월령이란 사주 원국에서 태어난 달의 지지(월지)를 뜻합니다. 지장간의 구성원리에 따라 월령 내에서 날짜별로 실제 사령(당령)하여 실권을 행사하는 천간의 신을 <strong>인원용사(人元用사)</strong> 또는 <strong>사령신(司令神)</strong>이라고 부릅니다.</p>

        <div class="note-box alert alert-success">
          <h5>🔑 천간과 지지의 호응 원칙</h5>
          <ul>
            <li><strong>지지의 기운(지장간)은 천간으로 투출(透出)해야 실권을 행사합니다.</strong> 지지에 아무리 귀중한 보물이 숨어 있어도 천간으로 투출하여 깃발을 내걸지 못하면 드러나지 않은 지하자원에 불과합니다.</li>
            <li><strong>천간에 투출한 천간신(용신)은 지지에 통근(通根, 뿌리)을 두어야 힘이 실립니다.</strong> 지지에 뿌리가 없는 천간은 바람에 날아가는 낙엽처럼 허상에 불과해 제 역할을 수행할 수 없습니다.</li>
          </ul>
        </div>

        <h3>2. 문(門)과 지(地)의 4단계 상응 관계</h3>
        <p>고전 지리서인 「지리원기」의 '문(門)'과 '지(地)' 개념을 차용해 월령 사령신과 천간 투출의 조화를 4단계로 분류합니다. (인월 戊土 사령 기준 예시)</p>
        <div class="table-responsive">
          <table class="table text-left">
            <thead>
              <tr>
                <th>구분</th>
                <th>상태</th>
                <th>설명 및 명리적 실상</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>지쇠문왕<br>(地衰門旺)</strong></td>
                <td>땅은 쇠약한데<br>문은 왕성하다</td>
                <td>실제 사령은 무토(土)가 했는데, 천간에는 수·목(水木)이 투출한 경우. 드러난 문호(천간)의 기세는 봄의 기운으로 왕성하지만 실제 내부 사령과 조화하지 못해 결속력이 떨어짐.</td>
              </tr>
              <tr>
                <td><strong>문왕지쇠<br>(門旺地衰)</strong></td>
                <td>문은 왕성한데<br>땅은 쇠약하다</td>
                <td>천간에는 사령신을 돕는 화·토(火土)가 투출했으나 정작 계절의 본기(인월의 봄 기운)와는 대치되는 상황. 지지가 천간을 받쳐주지 못함.</td>
              </tr>
              <tr>
                <td><strong>문지양왕<br>(門地兩旺)</strong></td>
                <td>문과 땅이<br>함께 왕성하다</td>
                <td><strong>[귀격 貴格]</strong> 월령에서 사령한 기운과 천간의 투출이 완벽히 응하는 형태. (예: 인월 丙火 사령에 사주에 물이 없고 나무와 불이 잘 만나 천간과 지지의 뜻이 일치하여 <strong>엄청난 복</strong>을 누림)</td>
              </tr>
              <tr>
                <td><strong>문지동쇠<br>(門地同衰)</strong></td>
                <td>문과 땅이<br>함께 쇠약하다</td>
                <td><strong>[패격 敗格]</strong> 문과 땅이 서로를 극하고 파괴하는 형태. (예: 무토가 사령했는데 천간에 나무가 투출해 흙을 극하고 지지에는 물이 숨어 흙을 진흙탕으로 만들어 무너지는 형태. 화가 크게 닥침)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>3. 91번 임상 명조 분석</h3>
        <div class="example-box">
          <p class="text-bold text-center">丙 戊 丙 甲 (건명/곤명)<br>辰 寅 寅 戌</p>
          <p class="text-xs text-center text-muted">대운: 丁 戊 己 庚 辛 壬 | 지지: 卯 辰 巳 午 未 申</p>
          <hr>
          <p><strong>[임철초 평주 해설 요약]</strong></p>
          <p>인(寅)월 무토 일간이 입춘 후 15일(갑목 사령 기간)에 태어나 월령의 지배 기운인 <strong>甲木 편관이 천간에 뚜렷이 투출</strong>하여 격국을 형성했습니다. 지지에 두 개의 寅목 칠살이 득세하고 천간의 甲목까지 더해져 일간 戊토는 매우 약하고 칠살은 강력한 '살왕신쇠(煞旺身衰)'의 위험한 형국입니다.</p>
          <p>그러나 이 사주의 묘미는 원국에 금(식상)이 없어 목의 기운을 어설프게 자극하지 않고, <strong>물(수 재성)이 한 방울도 없어 화(인성)를 깨뜨리지 않는 것</strong>에 있습니다. 일간 바로 옆에 붙은 <strong>丙火 편인</strong>이 강성한 甲木 편관의 기운을 흡수하여 일간을 생조하는 <strong>화살생신(化殺生身)</strong>의 아름다운 통로 역할을 완벽히 수행합니다. 이로 인해 과거 시험에 급제하고 높은 지위(부윤)에 올라 부와 명예를 모두 거두는 대귀격이 되었습니다.</p>
        </div>
      </div>
    `,
    summary: `
      <p><strong>🔑 월령 사령과 천간 투출의 조화 핵심 정리:</strong></p>
      <ul style="margin-top: 8px; margin-left: 20px;">
        <li>월령(월령)은 사주 전체의 격국과 기틀을 짜는 가장 중요한 기둥입니다.</li>
        <li><strong>통근(通根)과 투출(透出):</strong> 천간에 떠 있는 용신은 지지에 뿌리(통근)를 가져야 능히 서고, 지장간 속 보물은 천간으로 투출해야 비로소 깃발을 꽂고 행동을 주도할 수 있습니다.</li>
        <li><strong>문지(門地) 상응 4단계:</strong>
          <ul style="margin-top: 4px;">
            <li>문지양왕(門地兩旺): 월령 사령신과 투출이 서로 호응하여 엄청난 귀를 누림 (대귀격).</li>
            <li>문지동쇠(門地同衰): 문과 땅이 극하며 무너져 불측의 화가 터짐 (패격).</li>
            <li>지쇠문왕(地衰門旺) / 문왕지쇠(門旺地衰): 길흉이 반반 섞이는 혼조세.</li>
          </ul>
        </li>
      </ul>
    `
  },
  chap13: {
    title: "Ⅻ. 천간과 지지의 성정 차이",
    subtitle: "은현(隱現)의 이치를 통해 보는 기의 순수함과 복잡함",
    content: `
      <div class="theory-section">
        <p>천간과 지지는 작용하는 기(氣)의 특성이 완전히 다릅니다. 천간과 지지의 성정 차이를 이해하는 고전 적천수의 <strong>은현(隱現, 숨음과 드러남)</strong> 이론을 통해 운명의 성패를 조율하는 역학의 묘미를 분석합니다.</p>

        <h3>1. 천간기전(天干氣專)과 지지기잡(地支氣雜)</h3>
        <ul>
          <li><strong>천간기전 (天干氣專):</strong> 천간은 오직 하나의 오행으로만 기운이 뭉쳐져 있어 <strong>순수하고 전문적</strong>입니다. 기가 단순하게 노출되어 있어 탈취당하기 쉽습니다(易於劫奪).</li>
          <li><strong>지지기잡 (地支氣雜):</strong> 지지는 여러 지장간의 정기가 뒤섞여 있어 <strong>복잡하고 조율하기 어렵습니다</strong>(氣雜難制). 흉한 기운이 지지에 숨어 있으면 뿌리를 뽑기가 매우 험난합니다.</li>
        </ul>

        <h3>2. 길신(吉神)과 흉물(凶物)의 은현 배치법</h3>
        <p>천간과 지지의 기운적 특성에 따라, 명리학에서는 길신과 흉물을 다음과 같이 배치해야 가장 이롭다고 봅니다.</p>

        <div class="grid grid-2">
          <div class="card glass text-center">
            <h4 class="color-wood">길신심장 (吉神深藏)</h4>
            <p class="badge bg-wood">길신은 지지 깊숙이 숨겨라</p>
            <p class="text-muted text-sm">재성이나 관성 같은 귀한 길신은 천간에 훤히 드러나면 비겁이나 식상에 의해 쟁탈(약탈)당하기 쉽습니다. 따라서 지장간 깊은 곳에 자물쇠를 채우듯 감추어 두어야 종신토록 안전하게 복을 누립니다.</p>
          </div>
          <div class="card glass text-center">
            <h4 class="color-fire">흉물명투 (凶物明透)</h4>
            <p class="badge bg-fire">흉물은 천간에 밝게 드러내라</p>
            <p class="text-muted text-sm">나를 극하는 칠살이나 겁재 같은 흉물은 지지 깊숙이 암장되어 있으면 다스리기 어렵고(가적난방 家賊難防), 충이 올 때 내면에서 활개를 칩니다. 흉물은 대낮의 광장처럼 천간에 투출해야 다른 글자가 식상으로 제압하거나 합으로 묶어 길들이기(제화)가 지극히 쉬워집니다.</p>
          </div>
        </div>

        <div class="note-box alert alert-warning">
          <h5>⚠️ 은현론의 변증법적 결론: 왕쇠강약과의 조화</h5>
          <p>길신이 숨고 흉신이 드러나야 좋다는 기본 공식마저도 일간의 왕쇠강약과 뿌리(통근)의 조화 속에서 재해석되어야 합니다.</p>
          <ul>
            <li>길신이 천간에 드러나 있더라도 <strong>월령을 장악하고 든든한 뿌리(통근당령)를 가졌다면</strong> 함부로 약탈당하지 않는 태산이 됩니다 (실강무구 實強無咎).</li>
            <li>흉물이 지지에 숨어 있더라도 <strong>태어난 시절의 기운을 잃고 쇠락한 상태(실시휴수 失時休囚)라면</strong> 뼈대가 썩어 부러진 호랑이와 같아서 세운에서 충동질을 해와도 운명에 아무런 방해를 주지 못합니다 (쇠사무방 衰死無妨).</li>
          </ul>
        </div>

        <h3>3. 결론</h3>
        <p>명리학은 단순히 글자 표면의 상생상극이나 길흉 이름표만 보고 '천간에 재성이 떴으니 부자다' 혹은 '지지에 겁재가 숨었으니 파산이다'라고 경솔하게 단정해서는 안 됩니다. 글자가 놓인 공간적 깊이(천간/지지)와 시절의 역학적 기세(당령/휴수)를 정밀하게 분별하는 <strong>신사명변(愼思明辨)</strong>의 혜안을 가질 때 비로소 운명의 요령을 움켜쥘 수 있습니다.</p>
      </div>
    `,
    summary: `
      <p><strong>🎭 은현론(隱現論)과 기운의 전문성 핵심 정리:</strong></p>
      <ul style="margin-top: 8px; margin-left: 20px;">
        <li><strong>천간과 지지의 기의 특징:</strong> 천간은 기가 뭉쳐서 순수함(천간기전)을 띠고, 지지는 여러 천간이 뒤섞여 복잡함(지지기잡)을 보입니다.</li>
        <li><strong>길신심장(Bag/吉神深藏)의 배치:</strong> 재성, 관성 같은 귀한 길신은 겁재의 약탈을 막기 위해 지지 지장간 깊은 곳에 자물쇠를 채우듯 숨겨져 있어야 보호를 받습니다.</li>
        <li><strong>흉물명투(흉물명투)의 배치:</strong> 나를 억제하는 칠살이나 겁재 같은 흉물은 지지에 숨으면 제어하기 어려우므로(가적난방), 차라리 천간에 투출해야 식상으로 극하거나 합으로 묶어 길들이기 쉽습니다.</li>
        <li><strong>최종 결론:</strong> 사주를 추명할 때는 글자의 단면(길흉 성정)만 보지 않고, <strong>글자가 놓인 위상(드러남과 숨음)과 기세(당령과 휴수)</strong>의 이치를 세밀히 통찰하는 신사명변(愼思明辨)의 태도를 가져야 합니다.</li>
      </ul>
    `
  }
};
