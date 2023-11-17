'use client'

import { back, home } from '@/_ui/IconsPath'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Icons from '../common/Icons'

const Header = ({ chat }: { chat?: boolean }) => {
  const router = useRouter()

  return (
    <section className="flex items-center justify-between w-full h-[47px] px-[26px]">
      {chat ? (
        <h1 className="text-[20px] font-bold">채팅</h1>
      ) : (
        <Icons name={back} onClick={() => router.back()} />
      )}
      <div className="flex flex-row items-center justify-center gap-3">
        <Link href="/main">
          <Icons name={home} />
        </Link>
      </div>
    </section>
  )
}

export default Header
