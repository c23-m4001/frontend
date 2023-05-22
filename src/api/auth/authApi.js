import axios from 'axios'
import { API_URL } from '../constant'

const AUTH_API_URL = `${API_URL}/auth`

export const AuthApi = {
  emailLogin: async ({ email, password }) => {
    return axios
      .post(`${AUTH_API_URL}/email-login`, {
        email,
        password,
      })
      .then((r) => r.data)
  },
  emailRegister: async ({ email, name, password }) => {
    return axios
      .post(`${AUTH_API_URL}/email-register`, {
        email,
        name,
        password,
      })
      .then((r) => r.data)
  },
}
