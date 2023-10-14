// src/api/yourApi.js
import axios from 'axios';

const baseUrl = 'http://localhost:3000/'; // my  backend's base URL

export const api = {
  getItems: () => axios.get(`${baseUrl}tasks`),
  getItem: (id) => axios.get(`${baseUrl}task/${id}`),
  createItem: (item) => axios.post(`${baseUrl}task`, item),
  updateItem: (id, item) => axios.put(`${baseUrl}task/${id}`, item),
  deleteItem: (id) => axios.delete(`${baseUrl}task/${id}`),
};
export default api
