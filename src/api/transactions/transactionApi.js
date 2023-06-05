import axios from 'axios'
import { API_URL } from '../constant'

const TRANSACTION_API_URL = `${API_URL}/transactions`

export const TransactionApi = {
  // createTransaction: async ({ name, logo_type }) => {
  //   return axios
  //     .post(`${TRANSACTION_API_URL}`, { name, logo_type })
  //     .then((r) => r.data)
  // },
  fetchTransactions: async ({
    page,
    limit,
    start_date,
    end_date,
    wallet_id,
    phrase,
    sorts,
  }) => {
    return axios
      .post(`${TRANSACTION_API_URL}/filter`, {
        page,
        limit,
        wallet_id,
        phrase,
        start_date,
        end_date,
        sorts,
      })
      .then((r) => r.data)
  },
  deleteTransaction: async ({ id }) => {
    return axios.delete(`${TRANSACTION_API_URL}/${id}`).then((r) => r.message)
  },
}
