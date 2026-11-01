function App() {
  const timelines = [
    {
      period: '19.12 ~ 23.11',
      title: `이커머스 전문 IT기업 <b class="text-blue-500">UZEN</b> 입사`,
      items: [
        '온라인 쇼핑몰 <b>ZEROGRAM</b> 구축부터 운영',
        '사내 라이브러리 <b>@g1cloud </b>제작 참여',
        '로우코드 에디터 <b>페이지빌더</b> 구축',
        '온라인 쇼핑몰 <b>바이린</b> 구축부터 운영',
      ],
    },
    {
      period: '23.11 ~ 24.07',
      title: `SK계열 미디어렙사 대기업 <b class="text-blue-500">인크로스</b> 입사`,
      items: [
        '쇼핑몰 <b>T deal</b> 개발',
        '광고주 리포트 <b>Nboard</b> 개발',
        'SK그룹 광고 집행 관리 PoC 개발',
      ],
    },
    {
      period: '24.08 ~ 재직중',
      title: `스타트업 <b class="text-blue-500">크리에이블</b> 입사`,
      items: [
        '수익창출 플랫폼 <b>짤스튜디오</b> 유지보수',
        'TTS 서비스 <b>AI Studio</b> 구축',
        '광고플랫폼 <b>Connect Studio</b> 구축',
        '<b>MCN 전용 짤스튜디오</b> 구축',
        '앱테크 서비스 <b>고고고</b> 구축',
        '음원유통서비스 <b>SoundArchive</b> 구축',
        '커뮤니티 서비스 <b>Asked</b> 리빌딩',
      ],
    },
  ]

  const aboutContent = `처음 코딩을 시작하게된건, 군대에 있을 때였습니다. 취침시간에 자기계발을 할 수 있는 "연등"이라는 시간이 있었습니다. 이 시간을 활용해서 남은 1년6개월 정도 되는 시간을 좀 더 영양있게 보내려고 목표를 세운 후, 유튜브를 검색해가며, HTML, CSS, JS, Java JSP&Servlet, NodeJS를 독학했습니다.

복학을 하니, 웹퍼블리싱이라는 수업이 생겼었습니다. 그간 독학했던것들이 도움이 되어 좋은 성적과, 좋은 기회로 간단한 사이트를 만드는 2건의 외주를 받게 되었고, 이를 계기로 이쪽으로 계속 일을 해야겠다고 생각했습니다. 결국 졸업 전, 취직이 되어 첫 회사인 UZEN에 프론트엔드로 입사하게 되었습니다.

이커머스 전문 기업이었던, UZEN에서는 샘플 이커머스 프로젝트를 Vue2로 프론트를 만들고, Spring Boot으로 프론트 서버를 구현했습니다. 백엔드팀에서 만든 API서버와 연동하며, Spring Boot으로 Open Graph 대응이나, API를 캐싱하는 작업을 했습니다. 프론트에서는 주로, 이벤트, 상품목록/상세, 검색, 마이페이지 등 주문/결제를 제외한 거의 모든 페이지를 담당했습니다. 후에 샘플코드를 기반으로, Zerogram과 Bylynn 프론트 구축부터 운영에 참여했습니다.

이벤트 페이지 대응을 모두 하드코딩 하기에는 무리라는 판단이 있어서 '페이지빌더'라는 로우코드 툴을 만들어서, 운영사가 직접 이벤트페이지를 만들 수 있게 했습니다.

다른 회사는 어떻게 일하는지 궁금하기도 하면서 나이 30전에 도전을 하고자 인크로스라는 회사로 이직을 하게 되었습니다. T deal이라는 쇼핑몰을 운영하면서, NCP 연계로 상품 관리, 각종 이벤트 대응 배너/UI, 숙박 플랫폼 API 연동 하는 업무를 맡았으며, 부가적으로 광고주들이 광고리포트를 쉽게 볼 수 있는 Nboard라는 어드민 프로젝트에 새로 기능을 추가하거나, 디자인을 수정하는 업무를 했습니다.

아무래도 큰 프로젝트이고, 잘되는 프로젝트이다 보니, 많은 레거시와 낮은 버전의 라이브러리 및 개선에 보수적인 분위기를 체감하고, 더욱 제가 능동적으로 일 할 수 있는 스타트업인 크리에이블로 이직했습니다.

음원협업으로, 사용자들에게 돈을 지급하는 서비스인 짤스튜디오의 유지보수와 각종 이벤트를 대응했습니다. 짤 스튜디오 내 크리에이터들을 위한 AI TTS 서비스인 AI Studio, 광고모집 서비스인 Connect Studio 서비스를 추가 했으며, MCN(인플루언서 전문 기획사)를 위한 정산 프로젝트를 따로 구축하기도 했습니다. 사업이 축소가 되면서, 인프라 운영비가 불필요하게 나가고 있어서, 인프라 개선 및 Rust Axum으로 백엔드 API 서버를 구축했습니다.

앱 내 쿠팡구매를 하면 리워드를 적립해주는 고고고 서비스를 만들며, Flutter 웹뷰로 앱을 만들기도 했습니다.

기존 운영중인 익명 서비스 Asked의 기술 및 인프라 환경 마이그레이션 작업을 했습니다. Nuxt2로 만들어 졌고, EC2로 배포를 하고 있는 환경에서 Nuxt4로 만들고 Cloudflare pages로 배포하게끔 했습니다. 이 과정에서, 실제 배포를 할때, 로그인이 끊기면 절대 안된다는 제약이 있어서, Cloudflare의 load balancer를 사용해서, 트래픽을 구 웹에서, 신 웹으로 1:9 5:5 10:0 배분해가며 배포를 진행했습니다.

Claude와 Codex를 일을 하는데 적극적으로 사용하고 있습니다. AI를 위한 지침 작성, 코드리뷰, 부족한 기획 도출, 커뮤니케이션 자동화, 새로운 기술 스택과 더 좋은 인프라 환경 세팅. 예전에는 하지 못했던 일들을 이제는 무리없이 진행할 수 있게 되었습니다. 이제는 제 업무범위를 프론트엔드로 제한짓지 않고, 여러 방면으로 나아갈 수 있도록 노력하고 있습니다.`

  const technologyColors: Record<string, string> = {
    Vue2: 'bg-green-100 text-green-700',
    Vue3: 'bg-green-100 text-green-700',
    Nuxt3: 'bg-green-100 text-green-700',
    Nuxt4: 'bg-green-100 text-green-700',
    'Nuxt3/4': 'bg-green-100 text-green-700',
    'Spring Boot': 'bg-green-100 text-green-700',
    Android: 'bg-green-100 text-green-700',
    Scss: 'bg-pink-100 text-pink-700',
    Tailwindcss: 'bg-blue-100 text-blue-700',
    Go: 'bg-blue-100 text-blue-700',
    Flutter: 'bg-blue-100 text-blue-700',
    Swift: 'bg-blue-100 text-blue-700',
    SvelteKit: 'bg-red-100 text-red-700',
    Phaser: 'bg-gray-100 text-gray-700',
  }

  const projects = [
    {
      name: 'G1 Front',
      url: '',
      summary: '보일러 플레이트',
      period: '2019.12 ~ 2023.11',
      features: [
        "이커머스 프로젝트의 코드 베이스이자 솔루션 샘플 페이지로 활용",
        "홈페이지·상품상세·검색·기획전·룩북·AS안내·브랜드스토리·마이페이지 내 적립금·예치금·관심상품·재입고알림·배송지목록 조회",
        "i18n 적용, 구글 스프레드시트로 언어 동기화",
        "Jest를 사용한 컴포넌트 단위 테스트",
        "Spring Boot 으로 프론트 서버 구성 및 Redis로 Api 캐싱",
        "@g1cloud/vue-ui 사내 공통 라이브러리 참여",
      ],
      technologies: ['Vue2', 'Vue3', 'Spring Boot', 'Scss'],
    },
    {
      name: 'ZEROGRAM',
      url: 'https://www.zerogram.co.kr/',
      period: '2021.04 ~ 2023.11',
      summary: '이커머스',
      features: [
        "홈페이지·상품상세·검색·기획전·룩북·AS안내·브랜드스토리·마이페이지 내 적립금·예치금·관심상품·재입고알림·배송지목록 조회",
        "i18n 적용, 구글 스프레드시트로 언어 동기화",
        "Spring Boot 으로 프론트 서버 구성 및 Redis로 Api 캐싱",
      ],
      technologies: ['Vue2', 'Spring Boot', 'Scss'],
    },
    {
      name: '페이지 빌더',
      url: 'https://www.youtube.com/watch?v=KrTqciPRges',
      period: '2021.11 ~ 2023.11',
      summary: '로우코드 웹 에디터',
      features: [
        "이벤트 페이지 대응을 위한 웹 에디터",
        "@g1cloud/page-builder-viewer 제작",
        "@g1cloud/page-builder-vue-renderer 제작",
      ],
      technologies: ['Vue2', 'Spring Boot', 'Scss'],
    },
    {
      name: 'ByLynn',
      url: 'http://bylynn.shop/',
      period: '2023.01 ~ 2023.11',
      summary: '이커머스',
      features: [
        "홈페이지·상품목록·상품상세·검색·기획전·룩북·어바웃·관심상품·재입고알림 페이지 담당",
        "Spring Boot 으로 프론트 서버 구성 및 Redis로 Api 캐싱",
        "PurgeCSS를 적용해 사용하지 않는 CSS를 제거하고 스타일 파일 크기 최적화",
        "SpringBoot에서 컨트롤러에서 url에 맵핑된 각각의 html을 응답하던 기존의 MPA방식에서, 하나의 컨트롤러와 하나의 html을 응답하는 SPA 방식으로 전환 경험",
        "라이브러리 교체로, 초기 로드속도를 3초 이상에서 1초 이내로 개선",
        "콘텐츠 로딩 중 스켈레톤 UI를 적용해 레이아웃 이동을 줄이고 CLS 0.001 달성",
        "Vitest를 사용하여, 컴포넌트 단위테스트 경험",
        "Project Leader",
      ],
      technologies: ['Vue3', 'Spring Boot', 'Scss'],
    },
    {
      name: 'T Deal 커머스',
      url: 'https://tdeal.kr/',
      period: '2023.11 - 2024.07',
      summary: '이커머스',
      features: [
        "숙박 상품의 날짜·인원 선택부터 객실 검색, 가예약, 주문·취소까지 프론트엔드 화면과 API를 연동",
        "주문서의 결제수단 UI를 개선하고 휴대폰 결제 및 환불계좌 검증 기능을 개발",
        "상품 옵션 상세보기 팝업을 구현하고 구매 제한, 품절, 뒤로가기 등 예외 상황을 처리",
        "래플 이벤트와 프로모션 화면을 개발하고 GA 이벤트 태깅을 적용",
        "관리자에서 파트너 페널티 제외 관리 화면과 목록·엑셀 다운로드 기능을 개발",
        "버그 리포팅을 위한 Sentry 연동",
        "Hackle 연동으로 기능 A/B테스트",
      ],
      technologies: ['Vue2', 'Scss'],
    },
    {
      name: 'Nboard 광고 리포트 관리',
      url: '',
      period: '2023.11 - 2024.07',
      summary: '광고주 어드민',
      features: [
        "Apache Superset 대시보드와 게스트 토큰 발급 API를 연동해 UA 캠페인 데이터 조회 화면을 구현",
        "UA 캠페인 XLSX 파일 업로드와 유형별 파일 확장자 검증 기능을 개발",
        "브랜딩 캠페인 매체의 검색·등록·삭제 및 중복 확인 기능을 구현",
        "리포트 검증에 사용하는 매체 목록을 API 기반으로 전환해 화면에서 관리할 수 있도록 개선",
      ],
      technologies: ['Vue2', 'Scss', 'Apache Superset', 'MySQL'],
    },
    {
      name: 'SK그룹 광고 집행 관리 PoC',
      url: '',
      period: '2024.06 - 2024.06',
      summary: '광고주 어드민',
      features: [
        "광고 집행 정보의 목록·상세·등록·수정·삭제 화면과 API 연동을 구현.",
        "광고주, 매체, 게재면, 광고비, 게재일 등을 입력하는 폼에 필수값 검증과 소재 파일 업로드를 적용.",
      ],
      technologies: ['Vue3', 'Scss'],
    },
    {
      name: '짤스튜디오',
      url: 'https://zzal.studio/',
      period: '2024.08 ~',
      summary: '수익창출 플랫폼',
      features: [
        "YouTube·다음 채널별 실적 대시보드와 빠른 정산·출금 화면을 개발",
        "AI 보이스 기반 TTS 편집 도구에서 스크립트 편집, 보이스 설정, 프로젝트 관리 및 API 연동 기능을 개발",
        "카카오 숏폼 크리에이터의 인증, 채널 조회 및 신청 흐름을 연동",
        "크리에이터 광고 캠페인 참여 기능 및 프로모션 랜딩 페이지 페이지 개발",
        "대형 라이브러리 청크 분리, SSR 환경의 hydration 불일치 및 초기 렌더링 오류를 개선",
        "EC2 배포 환경에서, Cloudflare Pages로 운영 배포 환경 개선 및 비용 최적화",
        "Rust Axum을 사용한 API 개발 참여",
      ],
      technologies: ['Nuxt3', 'Nuxt4', 'Rust'],
    },
    {
      name: 'MCN 전용 짤스튜디오',
      url: 'https://zzal.studio/',
      period: '2024.08 ~ 2025.10',
      summary: '수익창출 플랫폼',
      features: [
        "프로젝트 셋팅부터 운영 배포까지 담당",
        "짤스튜디오 API 연동으로, 인증·정산·채널인증·채널관리·멤버관리 기능 개발",
        "디자인 토큰 적용",
      ],
      technologies: ['Nuxt3', 'Tailwindcss'],
    },
    {
      name: '고고고',
      url: 'http://getstar.kr/',
      period: '2025.06 ~ 2026.09',
      summary: '리워드 적립 서비스',
      features: [
        "프로젝트 셋팅부터 운영 배포까지 담당",
        "Flutter 웹뷰 브리지를 통해 딥링크, 외부 링크, 공유받은 상품 URL 및 앱 내 화면 이동을 연동",
        "소셜 로그인과 토큰 갱신, 탭 간 인증 정보 동기화 등 웹·앱의 로그인 유지 개발",
        "스탬프 적립, 룰렛, 쿠폰함과 핫딜 커뮤니티 개발",
        "쿠폰 목록에 가상 스크롤과 캐시·스크롤 복원 적용",
        "GitHub Actions 기반 자동 버전 관리와 사용자 행동 이벤트 로깅 구성",
      ],
      technologies: ['Nuxt4', 'SCSS'],
    },
    {
      name: '사운드아카이브',
      url: 'https://sound-archive.cloud/',
      period: '2026.05 ~ 2026.08',
      summary: '음원 서비스',
      features: [
        "프로젝트 셋팅부터 운영 배포까지 담당",
        "구글 OAuth 연동 및 인증 흐름 구현",
        "음원 재생 UI·채널인증·구독결제 개발",
        "GitHub Actions 기반 자동 버전 관리와 사용자 행동 이벤트 로깅 구성",
      ],
      technologies: ['Nuxt4', 'Tailwindcss'],
    },
    {
      name: 'Asked',
      url: 'https://asked.kr/',
      period: '2026.05 -',
      summary: '익명 소통 커뮤니티',
      features: [
        "기존 Nuxt2 프로젝트를 Nuxt4로 새로 만들고, 로드 밸런싱으로 트래픽 점진적 배포",
        "EC2로의 배포를 Cloudflare Pages로 옮기고, 배포과정 및 운영비용 최적화(10분의 1)",
        "웹소켓을 사용한 채팅서비스 화면 개발",
        "가상스크롤을 적용으로, 프론트 기능 개선 및 핸드폰 발열 개선",
        "브릿지 통신으로 앱과 상호작용",
      ],
      technologies: ['Nuxt4', 'Tailwindcss', 'Go'],
    },
  ]

  const sideProjects = [
    {
      name: 'Markup Manager',
      url: 'https://zabefofoon.github.io/mm-embedded/',
      summary: '로우코드 웹 툴',
      features: [
        "iframe 으로 사용되도록 message 내장",
      ],
      technologies: ['Vue3', 'Tailwindcss'],
    },
    {
      name: 'Memoku',
      url: 'http://memoku-next.vercel.app/',
      summary: '할일관리 앱',
      features: [
        "구글 스프레드 시트에 데이터 저장",
      ],
      technologies: ['NextJS', 'Tailwindcss', 'Google API'],
    },
    {
      name: '비트조인 랜덤 디펜스',
      url: 'https://play.google.com/store/apps/details?id=com.bitejoin.defense&pcampaignid=web_share',
      summary: '게임',
      features: [
        "PWA 오프라인 모드",
        "PhaserJS 2D 엔진 사용",
        "플레이스토어 출시",
      ],
      technologies: ['Nuxt3', 'Phaser', 'Tailwindcss', 'Flutter'],
    },
    {
      name: 'Just Pixel Studio',
      url: 'https://justpixelstudio.com/',
      summary: '도트 그림판',
      features: [
        "이미지 편집 기능",
        "연속된 이미지 재생 기능",
      ],
      technologies: ['Nuxt4', 'Tailwindcss', 'Supabase', 'Flutter'],
    },
    {
      name: 'Alarmoku',
      url: 'https://alarmoku.com/landing',
      summary: '알람 앱',
      features: [
        "PWA 오프라인 모드",
        "지역별 오늘의 날씨 기능",
        "플레이스토어 출시",
      ],
      technologies: ['SvelteKit', 'Tailwindcss', 'NestJS', 'Flutter'],
    },
    {
      name: 'Urlala',
      url: 'https://urlala.dev/ko',
      summary: '북마크 관리',
      features: [
        "크롬 확장프로그램 연동",
        "플레이스토어 출시",
        "앱스토어 출시",
      ],
      technologies: ['SvelteKit', 'Tailwindcss', 'Supabase', 'Flutter'],
    },
    {
      name: '다꾸다꾸',
      url: 'https://dakkudakku.com/ko',
      summary: '커뮤니티',
      features: [
        "이미지 편집기능",
        "소켓을 사용한 채팅기능",
        "플레이스토어 출시",
        "앱스토어 출시",
      ],
      technologies: [
        'SvelteKit',
        'Tailwindcss',
        'Supabase',
        'Android',
        'Swift',
      ],
    },
  ]

  return (
    <>
      {/* <header>header</header> */}
      <main className="bg-linear-to-br from-blue-100 to-blue-300 text-gray-900">
        {/* 상단 영역 */}
        <section className="scroll-opacity -mb-10 flex flex-col items-center justify-center pb-10">
          <div className="flex items-center gap-5 py-30">
            <figure className="flex flex-col items-center gap-2">
              <img
                className="border-border aspect-square size-32 rounded-full border border-gray-200"
                src="/resources/images/profile.webp"
                alt="내 프로필"
              />
              <figcaption className="text-sm text-gray-600">
                1995.05.03, INFJ
              </figcaption>
            </figure>
            <div>
              <h1 className="text-2xl leading-[140%] whitespace-pre-wrap">
                {`정상우`}
              </h1>
              <p className="text-[15px] opacity-70">
                서비스 구축부터 운영·인프라 개선까지
              </p>
              <p className="mt-3 text-sm leading-[140%] font-semibold whitespace-pre-wrap text-blue-500">
                #프론트엔드 #7년차
              </p>
            </div>
          </div>
        </section>
        {/* 상단 영역 */}
        <div className="relative z-1 mx-auto flex max-w-[1920px] flex-col items-center gap-20 rounded-t-4xl bg-white p-10">
          {/* 타임라인 */}
          <section className="relative w-full">
            <h2 className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 rotate-270 text-3xl font-bold text-gray-200">
              TIMELINE
            </h2>
            <div className="flex items-center justify-center">
              <div className="relative m-5 flex flex-col gap-8">
                <div className="absolute left-0.75 h-full border-l-2 border-dotted border-gray-500"></div>
                <ol className="flex list-none flex-col gap-8 p-0">
                {timelines.map((timeline, index) => (
                  <li key={index} className="relative flex items-start gap-2">
                    {index === 0 && (
                      <div className="absolute left-0.5 h-3 w-1 bg-white dark:bg-black"></div>
                    )}
                    <div className="relative size-2 translate-y-2 rounded-full bg-blue-500"></div>
                    <div>
                      <p className="mb-1 text-[15px] font-bold">
                        <span className="text-[13px] font-light text-gray-500">
                          {timeline.period}
                        </span>
                      </p>
                      <div className="flex flex-col gap-1">
                        <h3
                          className="text-[16px] font-bold"
                          dangerouslySetInnerHTML={{ __html: timeline.title }}
                        ></h3>
                        {timeline.items.map((item, index) => (
                          <p key={index} className="text-[15px]">
                            ·{' '}
                            <span
                              dangerouslySetInnerHTML={{ __html: item }}
                            ></span>
                          </p>
                        ))}
                      </div>
                    </div>
                    {index === timelines.length - 1 && (
                      <img
                        src="/resources/images/running.gif"
                        alt=""
                        className="absolute -bottom-2 -left-4.5 size-9"
                      />
                    )}
                  </li>
                ))}
                </ol>
              </div>
            </div>
          </section>
          {/* 타임라인 */}

          {/* 소개 */}
          <section className="relative w-full border-t border-dashed border-gray-200 py-20">
            <h2 className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 rotate-270 text-3xl font-bold text-gray-200">
              ABOUT
            </h2>
            <div className="mx-auto flex max-w-200 flex-col">
              <h3 className="text-lg font-semibold">
                7년차 프론트엔드 정상우입니다.
              </h3>
              <div
                className="mt-2 items-center justify-center text-left leading-relaxed text-pretty break-keep whitespace-pre-wrap"
                dangerouslySetInnerHTML={{ __html: aboutContent }}
              ></div>
            </div>
          </section>
          {/* 소개 */}

          {/* 프로젝트 */}
          <section className="relative w-full border-t border-dashed border-gray-200 py-20">
            <h2 className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 rotate-270 text-3xl font-bold text-gray-200">
              PROJECTS
            </h2>
            <div className="mx-auto grid max-w-200 grid-cols-[repeat(auto-fit,minmax(800px,1fr))] flex-col gap-4">
              {projects.map((project) => (
                <article
                  key={project.name}
                  className="relative flex overflow-hidden rounded-2xl border border-gray-200"
                >
                  <img alt="" className="aspect-square w-full max-w-50" />
                  <div className="px-4 py-2">
                    <div className="mt-1 text-[11px] text-gray-500">
                      <span className="text-xs text-gray-500">
                        {project.summary}
                      </span>
                      ·<span>{project.period}</span>
                    </div>
                    <h3>{project.name}</h3>

                    <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-pretty break-keep text-gray-800">
                      {project.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                    <ul className="mt-4 flex list-none flex-wrap gap-1.5 p-0 text-xs">
                      {project.technologies.map((technology) => (
                        <li
                          key={technology}
                          className={`rounded-full px-1.5 py-0.5 ${technologyColors[technology] ?? 'bg-gray-100 text-gray-700'}`}
                        >
                          {technology}
                        </li>
                      ))}
                    </ul>
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.name} 상세 보기 (새 창)`}
                        className="mt-3 inline-block text-sm font-medium text-blue-600 hover:underline"
                      >
                        상세 보기 →
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>
          {/* 프로젝트 */}

          {/* 개인 프로젝트 */}
          <section className="relative w-full border-t border-dashed border-gray-200 py-20">
            <h2 className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 rotate-270 text-3xl font-bold text-gray-200">
              PERSONAL
            </h2>
            <div className="mx-auto grid max-w-200 grid-cols-[repeat(auto-fit,minmax(200px,1fr))] flex-col gap-4">
              {sideProjects.map((project) => (
                <a
                  key={project.name}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.name} 상세 보기 (새 창)`}
                  className="relative flex flex-col overflow-hidden rounded-2xl border border-gray-200"
                >
                  <img alt="" className="aspect-square w-full" />
                  <div className="px-4 py-2">
                    <div className="mt-1 text-[11px] text-gray-500">
                      <span className="text-xs text-gray-500">
                        {project.summary}
                      </span>
                    </div>
                    <h3>{project.name}</h3>

                    <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-pretty break-keep text-gray-800">
                      {project.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                    <ul className="mt-4 flex list-none flex-wrap gap-1.5 p-0 text-xs">
                      {project.technologies.map((technology) => (
                        <li
                          key={technology}
                          className={`rounded-full px-1.5 py-0.5 ${technologyColors[technology] ?? 'bg-gray-100 text-gray-700'}`}
                        >
                          {technology}
                        </li>
                      ))}
                    </ul>
                  </div>
                </a>
              ))}
            </div>
          </section>
          {/* 개인 프로젝트 */}
        </div>
      </main>
      <footer>footer</footer>
    </>
  )
}

export default App
