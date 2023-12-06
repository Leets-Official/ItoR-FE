import axios, { InternalAxiosRequestConfig } from 'axios'

const api = axios.create({
  baseURL: process.env.GOOGLE_LOGIN, // server url 변경!
})

// export const loginApi = axios.create({
//   baseURL: process.env.GOOGLE_LOGIN,
// })

api.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    // if (token) {
    // eslint-disable-next-line no-param-reassign
    // config.headers.Authorization = `Bearer ${token}`
    // }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

api.interceptors.response.use(
  (response) => {
    return response
  },
  async (error) => {
    const originalRequest = error.config
    if (
      error.response.status === 401 &&
      originalRequest &&
      // eslint-disable-next-line no-underscore-dangle
      !error.config.__isRetryRequest
    ) {
      try {
        await axios.post(`${process.env.GOOGLE_LOGIN}/users/refresh`)
        console.log('성공')
      } catch (e) {
        console.log(e)
      }
    }
  },
)

export default api
