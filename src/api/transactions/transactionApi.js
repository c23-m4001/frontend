import axios from 'axios'
import { API_URL } from '../constant'

const TRANSACTION_API_URL = `${API_URL}/transactions`

export const TransactionApi = {
  createTransaction: async ({ name, date, amount, category_id, wallet_id }) => {
    return axios
      .post(`${TRANSACTION_API_URL}`, {
        name,
        date,
        amount,
        category_id,
        wallet_id,
      })
      .then((r) => r.data)
  },
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
  fetchTransactionSummary: async ({ start_date, end_date, wallet_id }) => {
    return axios
      .post(`${TRANSACTION_API_URL}/summary`, {
        start_date,
        end_date,
        wallet_id,
      })
      .then((r) => r.data)
  },
  fetchTransactionSummaryTotal: async ({ wallet_id }) => {
    return axios
      .post(`${TRANSACTION_API_URL}/summary-total`, {
        wallet_id,
      })
      .then((r) => r.data)
  },
  deleteTransaction: async ({ id }) => {
    return axios.delete(`${TRANSACTION_API_URL}/${id}`).then((r) => r.message)
  },
}
