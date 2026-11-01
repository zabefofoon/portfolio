type Project = {
  name: string
  url: string
  thumbnail?: string
  thumbnail_width?: string
  pointColor?: string
  summary: string
  period: string
  features: string[]
  technologies: string[]
}

function App() {
  const education = [
    {
      period: '2011.02 ~ 2014.02',
      title: `서울 인문계 광양고등학교 졸업`,
      items: [],
    },
    {
      period: '2014.02 ~ 2020.02',
      title: `4년제 국립 한경대 시각디자인과 졸업`,
      items: [],
    },
    {
      period: '2015.08 ~ 2017.05',
      title: `육군 수도방위사령부 공병 복무`,
      items: [],
    },
  ]

  const timelines = [
    {
      period: '2019.12 ~ 2023.11',
      title: `이커머스 전문 IT기업 <b class="text-blue-500">UZEN</b> 입사`,
      items: [
        '온라인 쇼핑몰 <b>ZEROGRAM</b> 구축부터 운영',
        '사내 라이브러리 <b>@g1cloud </b>제작 참여',
        '로우코드 에디터 <b>페이지빌더</b> 구축',
        '온라인 쇼핑몰 <b>바이린</b> 구축부터 운영',
      ],
    },
    {
      period: '2023.11 ~ 2024.07',
      title: `SK계열 미디어렙사 대기업 <b class="text-blue-500">인크로스</b> 입사`,
      items: [
        '쇼핑몰 <b>T deal</b> 개발',
        '광고주 리포트 <b>Nboard</b> 개발',
        'SK그룹 광고 집행 관리 PoC 개발',
      ],
    },
    {
      period: '2024.08 ~ 재직중',
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

  const aboutContent = `이커머스부터 크리에이터 플랫폼, 쇼핑 리워드와 커뮤니티까지 다양한 서비스를 구축·운영·출시해 왔습니다. 화면과 기능을 구현하는 데서 나아가, 서비스가 성장하면서 생기는 구조·성능·사용성 문제를 해결하는 데 관심이 많습니다.

기획이나 디자인에서 개선할 부분을 발견하면 간단한 화면을 만들어 먼저 제안하는 편입니다. 서로 다른 관점을 이해하고 의견을 나누며, 더 나은 방향을 함께 찾아가는 과정을 중요하게 생각합니다.

개인에게 주어진 업무를 완수하는 데서 나아가, 팀이 더 원활하게 일할 수 있는 방법도 함께 고민합니다. Claude와 Codex를 활용해 새로운 기술을 익히고, 프론트엔드를 중심으로 백엔드와 앱 등 필요한 영역까지 경험을 넓혀가고 있습니다.`

  const technologyColors: Record<string, string> = {
    Vue: 'bg-green-100 text-green-700',
    Nuxt: 'bg-green-100 text-green-700',
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

  const projects: Project[] = [
    {
      name: 'G1 Front',
      url: '',
      thumbnail: '/resources/images/g1_logo.webp',
      pointColor: '#2C3787',
      summary: '보일러 플레이트',
      period: '2019.12 ~ 2023.11',
      features: [
        '이커머스 프로젝트의 코드 베이스이자 솔루션 샘플 페이지로 활용',
        '홈페이지·상품상세·검색·기획전·룩북·AS안내·브랜드스토리·마이페이지 내 적립금·예치금·관심상품·재입고알림·배송지목록 조회',
        'i18n 적용, 구글 스프레드시트로 언어 동기화',
        'Jest를 사용한 컴포넌트 단위 테스트',
        'Spring Boot 으로 프론트 서버 구성 및 Redis로 Api 캐싱',
        '@g1cloud/vue-ui 사내 공통 라이브러리 참여',
      ],
      technologies: ['Vue2', 'Vue3', 'Spring Boot', 'Scss'],
    },
    {
      name: 'ZEROGRAM',
      url: 'https://www.zerogram.co.kr/',
      thumbnail: '/resources/images/zerogram_logo.webp',
      thumbnail_width: '80px',
      period: '2021.04 ~ 2023.11',
      summary: '이커머스',
      features: [
        '홈페이지·상품상세·검색·기획전·룩북·AS안내·브랜드스토리·마이페이지 내 적립금·예치금·관심상품·재입고알림·배송지목록 조회',
        'i18n 적용, 구글 스프레드시트로 언어 동기화',
        'Spring Boot 으로 프론트 서버 구성 및 Redis로 Api 캐싱',
      ],
      technologies: ['Vue2', 'Spring Boot', 'Scss'],
    },
    {
      name: '페이지 빌더',
      url: 'https://www.youtube.com/watch?v=KrTqciPRges',
      thumbnail: '/resources/images/g1_logo.webp',
      pointColor: '#2C3787',
      period: '2021.11 ~ 2023.11',
      summary: '로우코드 웹 에디터',
      features: [
        '이벤트 페이지 대응을 위한 웹 에디터',
        '@g1cloud/page-builder-viewer 제작',
        '@g1cloud/page-builder-vue-renderer 제작',
      ],
      technologies: ['Vue2', 'Spring Boot', 'Scss'],
    },
    {
      name: 'ByLynn',
      url: 'http://bylynn.shop/',
      thumbnail: '/resources/images/bylynn_logo.webp',
      period: '2023.01 ~ 2023.11',
      summary: '이커머스',
      features: [
        '홈페이지·상품목록·상품상세·검색·기획전·룩북·어바웃·관심상품·재입고알림 페이지 담당',
        'Spring Boot 으로 프론트 서버 구성 및 Redis로 Api 캐싱',
        'PurgeCSS를 적용해 사용하지 않는 CSS를 제거하고 스타일 파일 크기 최적화',
        'SpringBoot에서 컨트롤러에서 url에 맵핑된 각각의 html을 응답하던 기존의 MPA방식에서, 하나의 컨트롤러와 하나의 html을 응답하는 SPA 방식으로 전환 경험',
        '라이브러리 교체로, 초기 로드속도를 3초 이상에서 1초 이내로 개선',
        '콘텐츠 로딩 중 스켈레톤 UI를 적용해 레이아웃 이동을 줄이고 CLS 0.001 달성',
        'Vitest를 사용하여, 컴포넌트 단위테스트 경험',
        'Project Leader',
      ],
      technologies: ['Vue3', 'Spring Boot', 'Scss'],
    },
    {
      name: 'T Deal 커머스',
      url: 'https://tdeal.kr/',
      thumbnail: '/resources/images/tdeal_logo.webp',
      thumbnail_width: '80px',
      period: '2023.11 - 2024.07',
      summary: '이커머스',
      features: [
        '숙박 상품의 날짜·인원 선택부터 객실 검색, 가예약, 주문·취소까지 프론트엔드 화면과 API를 연동',
        '주문서의 결제수단 UI를 개선하고 휴대폰 결제 및 환불계좌 검증 기능을 개발',
        '상품 옵션 상세보기 팝업을 구현하고 구매 제한, 품절, 뒤로가기 등 예외 상황을 처리',
        '래플 이벤트와 프로모션 화면을 개발하고 GA 이벤트 태깅을 적용',
        '관리자에서 파트너 페널티 제외 관리 화면과 목록·엑셀 다운로드 기능을 개발',
        '버그 리포팅을 위한 Sentry 연동',
        'Hackle 연동으로 기능 A/B테스트',
      ],
      technologies: ['Vue2', 'Scss'],
    },
    {
      name: 'Nboard 광고 리포트 관리',
      url: '',
      thumbnail: '/resources/images/incross_logo.webp',
      period: '2023.11 - 2024.07',
      summary: '광고주 어드민',
      features: [
        'Apache Superset 대시보드와 게스트 토큰 발급 API를 연동해 UA 캠페인 데이터 조회 화면을 구현',
        'UA 캠페인 XLSX 파일 업로드와 유형별 파일 확장자 검증 기능을 개발',
        '브랜딩 캠페인 매체의 검색·등록·삭제 및 중복 확인 기능을 구현',
        '리포트 검증에 사용하는 매체 목록을 API 기반으로 전환해 화면에서 관리할 수 있도록 개선',
      ],
      technologies: ['Vue2', 'Scss', 'Apache Superset', 'MySQL'],
    },
    {
      name: 'SK그룹 광고 집행 관리 PoC',
      url: '',
      thumbnail: '/resources/images/incross_logo.webp',
      period: '2024.06 - 2024.06',
      summary: '광고주 어드민',
      features: [
        '광고 집행 정보의 목록·상세·등록·수정·삭제 화면과 API 연동을 구현.',
        '광고주, 매체, 게재면, 광고비, 게재일 등을 입력하는 폼에 필수값 검증과 소재 파일 업로드를 적용.',
      ],
      technologies: ['Vue3', 'Scss'],
    },
    {
      name: '짤스튜디오',
      url: 'https://zzal.studio/',
      thumbnail: '/resources/images/zzal_logo.webp',
      period: '2024.08 ~',
      summary: '수익창출 플랫폼',
      features: [
        'YouTube·다음 채널별 실적 대시보드와 빠른 정산·출금 화면을 개발',
        'AI 보이스 기반 TTS 편집 도구에서 스크립트 편집, 보이스 설정, 프로젝트 관리 및 API 연동 기능을 개발',
        '카카오 숏폼 크리에이터의 인증, 채널 조회 및 신청 흐름을 연동',
        '크리에이터 광고 캠페인 참여 기능 및 프로모션 랜딩 페이지 페이지 개발',
        '대형 라이브러리 청크 분리, SSR 환경의 hydration 불일치 및 초기 렌더링 오류를 개선',
        'EC2 배포 환경에서, Cloudflare Pages로 운영 배포 환경 개선 및 비용 최적화',
        'Rust Axum을 사용한 API 개발 참여',
      ],
      technologies: ['Nuxt3', 'Nuxt4', 'Rust'],
    },
    {
      name: 'MCN 전용 짤스튜디오',
      url: 'https://zzal.studio/',
      thumbnail: '/resources/images/zzal_logo.webp',
      period: '2024.08 ~ 2025.10',
      summary: '수익창출 플랫폼',
      features: [
        '프로젝트 셋팅부터 운영 배포까지 담당',
        '짤스튜디오 API 연동으로, 인증·정산·채널인증·채널관리·멤버관리 기능 개발',
        '디자인 토큰 적용',
      ],
      technologies: ['Nuxt3', 'Tailwindcss'],
    },
    {
      name: '고고고',
      url: 'http://getstar.kr/',
      thumbnail: '/resources/images/gogogo_logo.webp',
      thumbnail_width: '80px',
      period: '2025.06 ~ 2026.09',
      summary: '리워드 적립 서비스',
      features: [
        '프로젝트 셋팅부터 운영 배포까지 담당',
        'Flutter 웹뷰 브리지를 통해 딥링크, 외부 링크, 공유받은 상품 URL 및 앱 내 화면 이동을 연동',
        '소셜 로그인과 토큰 갱신, 탭 간 인증 정보 동기화 등 웹·앱의 로그인 유지 개발',
        '스탬프 적립, 룰렛, 쿠폰함과 핫딜 커뮤니티 개발',
        '쿠폰 목록에 가상 스크롤과 캐시·스크롤 복원 적용',
        'GitHub Actions 기반 자동 버전 관리와 사용자 행동 이벤트 로깅 구성',
      ],
      technologies: ['Nuxt4', 'SCSS'],
    },
    {
      name: '사운드아카이브',
      url: 'https://sound-archive.cloud/',
      thumbnail: '/resources/images/sound_archive.webp',
      thumbnail_width: '80px',
      period: '2026.05 ~ 2026.08',
      summary: '음원 서비스',
      features: [
        '프로젝트 셋팅부터 운영 배포까지 담당',
        '구글 OAuth 연동 및 인증 흐름 구현',
        '음원 재생 UI·채널인증·구독결제 개발',
        'GitHub Actions 기반 자동 버전 관리와 사용자 행동 이벤트 로깅 구성',
      ],
      technologies: ['Nuxt4', 'Tailwindcss'],
    },
    {
      name: 'Asked',
      url: 'https://asked.kr/',
      thumbnail: '/resources/images/asked_logo.webp',
      thumbnail_width: '80px',
      period: '2026.05 -',
      summary: '익명 소통 커뮤니티',
      features: [
        '기존 Nuxt2 프로젝트를 Nuxt4로 새로 만들고, 로드 밸런싱으로 트래픽 점진적 배포',
        'EC2로의 배포를 Cloudflare Pages로 옮기고, 배포과정 및 운영비용 최적화(10분의 1)',
        '웹소켓을 사용한 채팅서비스 화면 개발',
        '가상스크롤을 적용으로, 프론트 기능 개선 및 핸드폰 발열 개선',
        '브릿지 통신으로 앱과 상호작용',
      ],
      technologies: ['Nuxt4', 'Tailwindcss', 'Go'],
    },
  ]

  const sideProjects = [
    {
      name: 'Markup Manager',
      url: 'https://zabefofoon.github.io/mm-embedded/',
      thumbnail: '/resources/images/mm_logo.webp',
      pointColor: '#000000',
      summary: '로우코드 웹 툴',
      features: ['iframe 으로 사용되도록 message 내장'],
      technologies: ['Vue3', 'Tailwindcss'],
    },
    {
      name: 'Memoku',
      url: 'http://memoku-next.vercel.app/',
      thumbnail: '/resources/images/memoku_logo.webp',
      pointColor: '#0D182A',
      summary: '할일관리 앱',
      features: ['구글 스프레드 시트에 데이터 저장'],
      technologies: ['NextJS', 'Tailwindcss', 'Google API'],
    },
    {
      name: '비트조인 랜덤 디펜스',
      url: 'https://play.google.com/store/apps/details?id=com.bitejoin.defense&pcampaignid=web_share',
      thumbnail: '/resources/images/bitejoin_logo.webp',
      pointColor: 'var(--color-orange-500)',
      summary: '게임',
      features: [
        'PWA 오프라인 모드',
        'PhaserJS 2D 엔진 사용',
        '플레이스토어 출시',
      ],
      technologies: ['Nuxt3', 'Phaser', 'Tailwindcss', 'Flutter'],
    },
    {
      name: 'Just Pixel Studio',
      url: 'https://justpixelstudio.com/',
      thumbnail: '/resources/images/justpixelstudio_logo.webp',
      summary: '도트 그림판',
      features: ['이미지 편집 기능', '연속된 이미지 재생 기능'],
      technologies: ['Nuxt4', 'Tailwindcss', 'Supabase', 'Flutter'],
    },
    {
      name: 'Alarmoku',
      url: 'https://alarmoku.com/landing',
      thumbnail: '/resources/images/alarmoku_logo.webp',
      pointColor: '#3091D2',
      summary: '알람 앱',
      features: [
        'PWA 오프라인 모드',
        '지역별 오늘의 날씨 기능',
        '플레이스토어 출시',
      ],
      technologies: ['SvelteKit', 'Tailwindcss', 'NestJS', 'Flutter'],
    },
    {
      name: 'Urlala',
      url: 'https://urlala.dev/ko',
      thumbnail: '/resources/images/urlala_logo.webp',
      summary: '북마크 관리',
      pointColor: '#CFEAFC',
      features: [
        '크롬 확장프로그램 연동',
        '플레이스토어 출시',
        '앱스토어 출시',
      ],
      technologies: ['SvelteKit', 'Tailwindcss', 'Supabase', 'Flutter'],
    },
    {
      name: '다꾸다꾸',
      url: 'https://dakkudakku.com/ko',
      thumbnail: '/resources/images/dakkudakku_logo.webp',
      pointColor: '#fdfcf8',
      summary: '커뮤니티',
      features: [
        '이미지 편집기능',
        '소켓을 사용한 채팅기능',
        '플레이스토어 출시',
        '앱스토어 출시',
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

  const technologyCounts = new Map<string, { name: string; count: number }>()
  const excludedTechnologies = new Set([
    'supabase',
    'apache superset',
    'google api',
    'phaser',
  ])
  for (const project of [...projects, ...sideProjects]) {
    const projectTechnologies = new Map<string, string>()
    for (const item of project.technologies) {
      const key = item.toLowerCase()
      if (excludedTechnologies.has(key)) continue
      const name = /^vue[23]$/.test(key)
        ? 'Vue'
        : /^nuxt[34](\/4)?$/.test(key)
          ? 'Nuxt'
          : item
      projectTechnologies.set(name.toLowerCase(), name)
    }
    for (const [key, name] of projectTechnologies) {
      const existing = technologyCounts.get(key)
      technologyCounts.set(key, {
        name: existing?.name ?? name,
        count: (existing?.count ?? 0) + 1,
      })
    }
  }
  const technologies = [...technologyCounts.values()].sort(
    (a, b) => b.count - a.count || a.name.localeCompare(b.name),
  )

  return (
    <>
      {/* <header>header</header> */}
      <main className="bg-linear-to-br from-blue-50 to-blue-300 text-gray-900">
        {/* 상단 영역 */}
        <section className="scroll-opacity mx-auto -mb-10 flex max-w-200 flex-col items-center justify-center pb-10">
          <div className="flex w-full items-start gap-5 py-60">
            <figure className="flex shrink-0 flex-col items-center gap-2">
              <img
                className="border-border aspect-square size-32 rounded-full border border-gray-200"
                src="/resources/images/profile.webp"
                alt="내 프로필"
              />
              <figcaption className="text-sm text-gray-600">
                1995.05.03, INFJ
              </figcaption>
            </figure>
            <div className="w-full">
              <h1 className="text-2xl leading-[140%] whitespace-pre-wrap">
                {`정상우`}
              </h1>
              <p className="mt-1 text-sm leading-[140%] font-semibold whitespace-pre-wrap text-blue-500">
                #프론트엔드 #7년차
              </p>
              <div className="mt-5 w-full">
                <h3 className="text-[15px] font-semibold">
                  프로젝트 세팅부터, 배포 및 출시까지
                </h3>
                <div
                  className="mt-2 items-center justify-center text-left text-[15px] leading-relaxed text-pretty break-keep whitespace-pre-wrap"
                  dangerouslySetInnerHTML={{ __html: aboutContent }}
                ></div>
              </div>
            </div>
          </div>
        </section>
        {/* 상단 영역 */}
        <div className="relative z-1 mx-auto flex max-w-[1920px] flex-col items-center rounded-t-4xl bg-white p-10">
          {/* 타임라인 */}
          <section className="relative w-full py-20">
            <h2 className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 rotate-270 text-3xl font-bold text-gray-200">
              TIMELINE
            </h2>
            <div className="flex items-start justify-center">
              <div className="flex items-center justify-center">
                <div className="relative m-5 flex flex-col gap-8">
                  <div className="absolute left-0.75 h-full border-l-2 border-dotted border-gray-500"></div>
                  <ol className="flex list-none flex-col gap-8 p-0">
                    {education.map((timeline, index) => (
                      <li
                        key={index}
                        className="relative flex items-start gap-2"
                      >
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
                              dangerouslySetInnerHTML={{
                                __html: timeline.title,
                              }}
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
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative m-5 flex flex-col gap-8">
                  <div className="absolute left-0.75 h-full border-l-2 border-dotted border-gray-500"></div>
                  <ol className="flex list-none flex-col gap-8 p-0">
                    {timelines.map((timeline, index) => (
                      <li
                        key={index}
                        className="relative flex items-start gap-2"
                      >
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
                              dangerouslySetInnerHTML={{
                                __html: timeline.title,
                              }}
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
            </div>
          </section>
          {/* 타임라인 */}

          {/* 프로젝트 */}
          <section className="relative w-full border-t border-dashed border-gray-200 py-20">
            <h2 className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 rotate-270 text-3xl font-bold text-gray-200">
              PROJECTS
            </h2>
            <div className="mx-auto flex max-w-240 flex-col gap-4">
              <ul
                aria-label="프로젝트 기술별 사용 건수"
                className="mb-4 flex list-none flex-wrap gap-2 p-0 text-sm"
              >
                {technologies.map(({ name, count }) => (
                  <li
                    key={name}
                    className={`rounded-full px-3 py-1 ${technologyColors[name] ?? 'bg-gray-100 text-gray-700'}`}
                  >
                    {name} ({count}건)
                  </li>
                ))}
              </ul>
              {projects.map((project) => (
                <article
                  key={project.name}
                  className="relative flex overflow-hidden rounded-2xl border border-gray-200"
                >
                  <div
                    className="flex w-full max-w-50 items-center justify-center px-5"
                    style={{
                      background: project.pointColor || 'var(--color-gray-50)',
                    }}
                  >
                    {project.thumbnail && (
                      <img
                        src={project.thumbnail}
                        alt={project.name}
                        className="h-auto"
                        style={{ width: project.thumbnail_width ?? '100%' }}
                      />
                    )}
                  </div>
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
            <div className="mx-auto grid max-w-240 grid-cols-[repeat(auto-fit,minmax(180px,1fr))] flex-col gap-4">
              {sideProjects.map((project) => (
                <a
                  key={project.name}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.name} 상세 보기 (새 창)`}
                  className="relative flex flex-col overflow-hidden rounded-2xl border border-gray-200"
                >
                  <div
                    className="flex aspect-square w-full items-center justify-center p-10"
                    style={{
                      background: project.pointColor || 'var(--color-gray-100)',
                    }}
                  >
                    <img
                      src={project.thumbnail}
                      alt=""
                      className="w-full object-contain"
                    />
                  </div>
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
                    {project.url && (
                      <span
                        aria-label={`${project.name} 상세 보기 (새 창)`}
                        className="mt-3 inline-block text-sm font-medium text-blue-600 hover:underline"
                      >
                        상세 보기 →
                      </span>
                    )}
                  </div>
                </a>
              ))}
            </div>
          </section>
          {/* 개인 프로젝트 */}

          {/* 연락 */}
          <section className="relative w-full border-t border-dashed border-gray-200 py-20">
            <h2 className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 rotate-270 text-3xl font-bold text-gray-200">
              CONTACT
            </h2>
            <div className="mx-auto flex flex-col items-center">
              <h3 className="text-lg font-semibold">함께 이야기 나눠요.</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                프로젝트나 협업에 대해 편하게 연락해 주세요.
              </p>
              <address className="mt-5 not-italic">
                <a
                  href="mailto:zabefofoon@gmail.com"
                  className="inline-flex items-center gap-2 text-blue-600 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
                >
                  zabefofoon@gmail.com <span aria-hidden="true">↗</span>
                </a>
              </address>
            </div>
          </section>
          {/* 연락 */}
        </div>
      </main>
      <footer className="bg-white px-10 pb-8 text-center text-sm text-gray-500">
        © 정상우
      </footer>
    </>
  )
}

export default App
