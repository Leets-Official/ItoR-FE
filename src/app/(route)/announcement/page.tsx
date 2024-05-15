'use client'

import News from '@/_components/common/News'
import Header from '@/_components/layout/Header'
import { SUB_NEWS_231218 } from '@/_constants/announcement'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import SecondGuide from '@/_components/guide/SecondGuide'

export default function AnnouncementPage() {
  const [showSecondGuide, setShowSecondGuide] = useState(false)

  return (
    <section>
      {showSecondGuide && (
        <div className="fixed ml-6 -mt-4">
          <SecondGuide btn="닫기" onClose={() => setShowSecondGuide(false)} />
        </div>
      )}
      <div>
        <div className="mt-6">
          <Header partner />
        </div>
        <p className="mb-7 mt-8 ml-7 text-primary font-bold text-2xl">
          📣 공지사항
        </p>
        <News news={SUB_NEWS_231218.five} mainNews />
        <News news={SUB_NEWS_231218.two} />
        <News news={SUB_NEWS_231218.three} />
        <News news={SUB_NEWS_231218.four} />
        <div
          onClick={() => setShowSecondGuide(true)}
          className="cursor-pointer mt-8 rounded-lg text-center px-3 py-2 text-[14px] mx-7 border bg-gray-400 text-white "
        >
          앱 추출하는 방법 보러가기
        </div>
        <div className="mt-6 mx-6">
          <hr />
          <div className="text-[14px] text-gray-500 p-4 ">
            <p>더 궁금한 점이 있다면?</p>
            <p className="underline">
              <a href="https://open.kakao.com/o/sGZ8MvYf">
                🛎️ 무드메이트 상담소 오픈채팅 바로가기
              </a>
            </p>
            <p>🔍 instagram : @gcmoodmate</p>
          </div>
        </div>
      </div>
    </section>
  )
}
