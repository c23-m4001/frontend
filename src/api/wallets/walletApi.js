import axios from 'axios'
import { API_URL } from '../constant'

const WALLET_API_URL = `${API_URL}/wallets`

export const WalletApi = {
  fetchWallets: async ({ page, limit, phrase, sorts }) => {
    return axios
      .post(`${WALLET_API_URL}/filter`, { page, limit, phrase, sorts })
      .then((r) => r.data)
  },
}
