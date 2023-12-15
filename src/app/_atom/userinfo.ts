import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const sessionStorage =
  typeof window !== 'undefined' ? window.sessionStorage : undefined

const { persistAtom: userinfoPersistAtom } = recoilPersist({
  key: 'userInfoState',
  storage: sessionStorage,
})

const { persistAtom: perferinfoPersistAtom } = recoilPersist({
  key: 'preferInfoState',
  storage: sessionStorage,
})

export const userInfoState = atom<UserInfoData>({
  key: 'userInfoState',
  default: {
    nickname: '',
    gender: '',
    year: 0,
    department: '',
    keywords: [],
  },
  effects_UNSTABLE: [userinfoPersistAtom],
})

export const preferInfoState = atom<PreferInfoData>({
  key: 'preferInfoState',
  default: {
    preferYearMin: 0,
    preferYearMax: 0,
    preferDepartmentPossible: true,
    preferMood: '',
  },
  effects_UNSTABLE: [perferinfoPersistAtom],
})
