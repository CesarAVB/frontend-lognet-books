import axios from 'axios';

const baseURL = (import.meta as any).env?.VITE_API_BASE_URL ?? 'https://logbooks-api.redelognet.com.br';

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
