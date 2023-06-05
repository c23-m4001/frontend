import axios from 'axios'
import { API_URL } from '../constant'

const CATEGORY_API_URL = `${API_URL}/categories`

export const CategoryApi = {
  createCategory: async ({ name, logo_type }) => {
    return axios
      .post(`${CATEGORY_API_URL}`, { name, logo_type })
      .then((r) => r.data)
  },
  updateCategory: async ({ id, name, logo_type }) => {
    return axios
      .put(`${CATEGORY_API_URL}/${id}`, { name, logo_type })
      .then((r) => r.data)
  },
  fetchCategories: async ({ page, limit, phrase, sorts }) => {
    return axios
      .post(`${CATEGORY_API_URL}/filter`, { page, limit, phrase, sorts })
      .then((r) => r.data)
  },
  deleteCategory: async ({ id }) => {
    return axios.delete(`${CATEGORY_API_URL}/${id}`).then((r) => r.message)
  },
}
