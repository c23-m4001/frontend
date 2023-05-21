import { getAuthToken, removeAuthToken } from '../Auth/AuthProvider'

export const setupAxiosInterceptor = (axios) => {
  axios.defaults.headers.common.Accept = 'application/json'

  axios.interceptors.request.use((config) => {
    if (!config.headers) {
      config.headers = {}
    }

    // Authorization
    const auth = getAuthToken()
    if (auth?.token) {
      config.headers.Authorization = `${auth.token_type} ${auth.token}`
    }

    // Language
    config.headers['Accept-Language'] = 'id'

    return config
  })

  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response?.status === 401) {
        removeAuthToken()

        if (window.location.pathname !== '/auth/login') {
          window.location.href = '/auth/login'
        }
      }
      throw error
    }
  )
}
