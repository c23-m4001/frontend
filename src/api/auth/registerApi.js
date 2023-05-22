import axios from 'axios'
import { API_URL } from '../constant'

const REGISTER_API_URL = `${API_URL}/email-register`

export const RegisterApi = {
  register: async ({ name, email, password }) => {
    try {
      const response = await axios.post(`${REGISTER_API_URL}`, {
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      })
      const responseJson = response.json()
      return { data: responseJson.data }
    } catch (error) {
      alert(error.message)
      return { data: null }
    }
  },
}
