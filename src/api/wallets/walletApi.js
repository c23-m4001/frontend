import axios from 'axios'
import { API_URL } from '../constant'

const WALLET_API_URL = `${API_URL}/wallets`

export const WalletApi = {
  createWallet: async ({ name, logo_type }) => {
    return axios
      .post(`${WALLET_API_URL}`, { name, logo_type })
      .then((r) => r.data)
  },
  updateWallet: async ({ id, name, logo_type }) => {
    return axios
      .put(`${WALLET_API_URL}/${id}`, { name, logo_type })
      .then((r) => r.data)
  },
  fetchWallets: async ({ page, limit, phrase, sorts }) => {
    return axios
      .post(`${WALLET_API_URL}/filter`, { page, limit, phrase, sorts })
      .then((r) => r.data)
  },
  deleteWallet: async ({ id }) => {
    return axios.delete(`${WALLET_API_URL}/${id}`).then((r) => r.message)
  },
}
