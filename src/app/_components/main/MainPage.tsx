'use client'

import Timer from '@/_components/common/Timer'
import React, { useEffect } from 'react'
import TimerFirstText from '@/_components/timer/containers/TimerFirstText'
import TimerMiddleText from '@/_components/timer/containers/TimerMiddleText'
import NavBar from '@/_components/common/NavBar'
import { useMainQuery } from '@/_hooks/useMainQuery'
import Image from 'next/image'
import Loading from '@/_components/common/Loading'
import afterMatch from 'public/illustration/female/main/afterMatch.png'
import beforeMatch from 'public/illustration/common/main/beforeMatch.png'
import grayLogo from 'public/illustration/common/logo/graylogo.png'
import pinkLogo from 'public/illustration/common/logo/pinklogo.png'

interface MatchProps {
  type: 'BEFORE' | 'AFTER'
}

const getBGStyle = (type: string) => {
  switch (type) {
    case 'BEFORE':
      return {
        targetHour: 22,
        logo: grayLogo,
        background: 'mt-2',
        image: beforeMatch,
        textUi: 'mb-1.5',
        imageUi: 'mt-5',
      }
    case 'AFTER':
      return {
        targetHour: 20,
        logo: pinkLogo,
        background: 'pt-2 bg-[#FFE5E7] h-screen',
        image: afterMatch,
        textUi: '',
        imageUi: '',
      }
    default:
      return {
        logo: '',
        background: '',
        targetHour: 0,
        image: '',
        textUi: '',
        imageUi: '',
      }
  }
}
const MainPage = ({ type }: MatchProps) => {
  const { isLoading, isError, data } = useMainQuery()
  useEffect(() => {
    console.log(data?.mainPageResponse)
  }, [data])
  if (isLoading) {
    return <Loading />
  }
  if (isError || !data) {
    return <div>Error...</div>
  }
  const { roomActive, roomId, userId } = data.mainPageResponse
  return (
    <div className={`${getBGStyle(type).background} h-screen flex flex-col`}>
      <div className="flex flex-col">
        <Image
          src={getBGStyle(type).logo}
          alt="graylogo"
          className={`${
            getBGStyle(type).textUi
          } w-[85px] h-[13px] mt-5 mx-auto`}
        />
        <TimerFirstText type={type} />
        <Timer targetHour={getBGStyle(type).targetHour} />
        <TimerMiddleText type={type} />
        <Image
          src={getBGStyle(type).image}
          alt="Matching"
          className={`-mt-5 ${getBGStyle(type).imageUi}`}
        />
      </div>
      <NavBar
        type={type}
        roomId={roomId}
        userId={userId}
        roomActive={roomActive}
      />
    </div>
  )
}
export default MainPage
