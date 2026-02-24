import axios from 'axios';

const baseURL = (import.meta as any).env?.VITE_API_BASE_URL ?? 'https://logbooks-api.redelognet.com.br';

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Attach token from localStorage to every request if present
api.interceptors.request.use((config) => {
  try {
    const token = localStorage.getItem('lognet-token');
    if (token) {
      config.headers = config.headers || {};
      (config.headers as Record<string, any>)['Authorization'] = `Bearer ${token}`;
    }
  } catch (e) {
    // ignore
  }
  return config;
});

export default api;
