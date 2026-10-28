function App() {
  return (
    <>
      {/* <header>header</header> */}
      <main className="bg-blue-100">
        {/* 상단 영역 */}
        <section className="scroll-opacity -mb-10 flex flex-col items-center justify-center pb-10">
          <div className="flex items-center gap-5 py-30">
            <figure className="flex flex-col items-center gap-2">
              <img
                className="aspect-square w-32"
                src="/resources/images/profile.webp"
                alt="내 프로필"
              />
              <figcaption className="text-sm text-gray-600">
                1995.05.03, 7년차
              </figcaption>
            </figure>
            <div>
              <h1 className="text-2xl leading-[140%] whitespace-pre-wrap">
                {`반갑습니다.\n프론트엔드 정상우입니다.`}
              </h1>
            </div>
          </div>
        </section>
        {/* 상단 영역 */}

        <section className="relative z-1 mx-auto max-w-[1920px] rounded-t-4xl bg-white p-10">
          <h2 className="text-3xl font-bold text-gray-200">CAREER</h2>
          <div className="flex items-center justify-center">
            <div className="relative m-5 flex flex-col gap-3">
              <div className="absolute left-0.75 h-full border-l-2 border-dotted border-gray-500"></div>
              <div className="relative flex items-start gap-2">
                <div className="absolute left-0.5 h-3 w-1 bg-white dark:bg-black"></div>
                <div className="relative mt-2 size-2 rounded-full bg-blue-500"></div>
                <div>
                  <p className="mb-1 text-[15px] font-bold">
                    <span className="text-[13px] font-light text-gray-500">
                      26.06.10 ~ 26.06.10
                    </span>
                  </p>
                  <div className="flex flex-col gap-1">
                    <p className="text-[16px] font-bold">
                      이커머스 전문 IT기업 <b className="text-blue-500">UZEN</b>{' '}
                      입사
                    </p>
                    <p className="text-[15px]">
                      · 온라인 쇼핑몰 <b>ZEROGRAM</b> 구축/운영
                    </p>
                    <p className="text-[15px]">
                      · 사내 라이브러리 <b>@g1cloud </b>제작 참여
                    </p>
                    <p className="text-[15px]">
                      · 로우코드 에디터 <b>페이지빌더</b> 구축
                    </p>
                    <p className="text-[15px]">
                      · 온라인 쇼핑몰 <b>바이린</b> 구축/운영
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative flex items-start gap-2">
                <div className="relative mt-2 size-2 rounded-full bg-blue-500"></div>
                <div>
                  <p className="mb-1 text-[15px] font-bold">
                    <span className="text-[13px] font-light text-gray-500">
                      26.06.10 ~ 26.06.10
                    </span>
                  </p>
                  <div className="flex flex-col gap-1">
                    <p className="text-[16px] font-bold">
                      광고대행 전문 기업{' '}
                      <b className="text-blue-500">인크로스</b> 입사
                    </p>
                    <p className="text-[15px]">
                      · 쇼핑몰 <b>T deal</b> 유지보수 참여
                    </p>
                    <p className="text-[15px]">
                      · 광고주 리포트 <b>Nboard</b> 유지보수 참여
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative flex items-start gap-2">
                {/* <div className="absolute -bottom-1 left-[2px] h-full w-1 bg-white dark:bg-black"></div> */}
                <div className="relative mt-2 size-2 rounded-full bg-blue-500"></div>
                <div>
                  <p className="mb-1 text-[15px] font-bold">
                    <span className="text-[13px] font-light text-gray-500">
                      26.06.10 ~ 26.06.10
                    </span>
                  </p>
                  <div className="flex flex-col gap-1">
                    <p className="text-[16px] font-bold">
                      스타트업 <b className="text-blue-500">크리에이블</b> 입사
                    </p>
                    <p className="text-[15px]">
                      · 수익창출 플랫폼 <b>짤 스튜디오</b> 유지보수
                    </p>
                    <p className="text-[15px]">
                      · 짤 스튜디오 내 TTS 서비스 <b>AI Studio</b> 구축
                    </p>
                    <p className="text-[15px]">
                      · 짤 스튜디오 광고플랫폼 <b>Connect Studio</b> 구축
                    </p>
                    <p className="text-[15px]">
                      · <b>MCN 전용 짤스튜디오</b> 구축
                    </p>
                    <p className="text-[15px]">
                      · 앱테크 서비스 <b>고고고</b> 구축
                    </p>
                    <p className="text-[15px]">
                      · 음원유통서비스 <b>SoundArchive</b> 구축
                    </p>
                    <p className="text-[15px]">
                      · 커뮤니티 서비스 <b>Asked</b> 리빌딩
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>footer</footer>
    </>
  )
}

export default App
