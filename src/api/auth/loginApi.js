import axios from 'axios'
import { API_URL } from '../constant'

const LOGIN_API_URL = `${API_URL}/email-login`

export const LoginApi = {
  login: async ({ email, password }) => {
    try {
      const response = await axios.post(`${LOGIN_API_URL}`, {
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })
      const responseJson = await response.json()
      return { data: responseJson.data }
    } catch (error) {
      alert(error.message)
      return { data: null }
    }
  },
}
