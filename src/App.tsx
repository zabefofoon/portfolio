function App() {
  const timelines = [
    {
      period: '26.06.10 ~ 26.06.10',
      title: `이커머스 전문 IT기업 <b class="text-blue-500">UZEN</b> 입사`,
      items: [
        '온라인 쇼핑몰 <b>ZEROGRAM</b> 구축/운영',
        '사내 라이브러리 <b>@g1cloud </b>제작 참여',
        '로우코드 에디터 <b>페이지빌더</b> 구축',
        '온라인 쇼핑몰 <b>바이린</b> 구축/운영',
      ],
    },
    {
      period: '26.06.10 ~ 26.06.10',
      title: `광고대행 전문 기업 <b class="text-blue-500">인크로스</b> 입사`,
      items: [
        '쇼핑몰 <b>T deal</b> 유지보수 참여',
        '광고주 리포트 <b>Nboard</b> 유지보수 참여',
      ],
    },
    {
      period: '26.06.10 ~ 26.06.10',
      title: `스타트업 <b className="text-blue-500">크리에이블</b> 입사`,
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

  return (
    <>
      {/* <header>header</header> */}
      <main className="bg-linear-to-br from-blue-100 to-blue-200 text-gray-900">
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
              </h1>{' '}
              <p className="mt-1 text-sm leading-[140%] font-semibold whitespace-pre-wrap text-blue-500">
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
                {timelines.map((timeline, index) => (
                  <div className="relative flex items-start gap-2">
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
                        <p
                          className="text-[16px] font-bold"
                          dangerouslySetInnerHTML={{ __html: timeline.title }}
                        ></p>
                        {timeline.items.map((item) => (
                          <p className="text-[15px]">
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
                        className="absolute -bottom-2 -left-4.5 size-9"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
          {/* 타임라인 */}

          {/* 소개 */}
          <section className="relative w-full border-t border-dashed border-gray-200 py-20">
            <h2 className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 rotate-270 text-3xl font-bold text-gray-200">
              ABOUT
            </h2>
            <div className="mx-auto flex max-w-200 items-center justify-center text-left leading-relaxed text-pretty break-keep">
              안녕하세요. 만들기를 좋아하는 프론트엔드 개발자 정상우 입니다.
              안녕하세요. 만들기를 좋아하는 프론트엔드 개발자 정상우 입니다.
              안녕하세요. 만들기를 좋아하는 프론트엔드 개발자 정상우 입니다.
            </div>
          </section>
          {/* 소개 */}
        </div>
      </main>
      <footer>footer</footer>
    </>
  )
}

export default App
