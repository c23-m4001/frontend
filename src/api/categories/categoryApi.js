import axios from 'axios'
import { API_URL } from '../constant'

const CATEGORY_API_URL = `${API_URL}/categories`

export const CategoryApi = {
  createCategory: async ({ name, logo_type, is_expense }) => {
    return axios
      .post(`${CATEGORY_API_URL}`, { name, logo_type, is_expense })
      .then((r) => r.data)
  },
  updateCategory: async ({ id, name, logo_type, is_expense }) => {
    return axios
      .put(`${CATEGORY_API_URL}/${id}`, { name, logo_type, is_expense })
      .then((r) => r.data)
  },
  fetchCategories: async ({ page, limit, phrase, sorts }) => {
    return axios
      .post(`${CATEGORY_API_URL}/filter`, {
        page,
        limit,
        phrase,
        sorts,
      })
      .then((r) => r.data)
  },
  fetchDefaultCategories: async () => {
    return axios.post(`${CATEGORY_API_URL}/defaults`).then((r) => r.data)
  },
  deleteCategory: async ({ id }) => {
    return axios.delete(`${CATEGORY_API_URL}/${id}`).then((r) => r.message)
  },
  optionTransactionForm: async ({ page, limit, phrase, sorts }) => {
    return axios
      .post(`${CATEGORY_API_URL}/options/transaction-form`, {
        page,
        limit,
        phrase,
        sorts,
      })
      .then((r) => r.data)
  },
}
