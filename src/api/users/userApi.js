import axios from 'axios'
import { API_URL } from '../constant'

const USER_API_URL = `${API_URL}/users`

export const UserApi = {
  getMe: async () => {
    return axios.get(`${USER_API_URL}/me`).then((r) => r.data)
  },
}
