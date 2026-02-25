import axios from 'axios';
import type { InternalAxiosRequestConfig } from 'axios';

const meta = (import.meta as unknown as { env?: Record<string, string> });
const baseURL = meta.env?.VITE_API_BASE_URL ?? 'https://logbooks-api.redelognet.com.br';

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Attach token from localStorage to every request if present
api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  try {
    const token = localStorage.getItem('lognet-token');
    if (token) {
      config.headers.set('Authorization', `Bearer ${token}`);
    }
  } catch (e) {
    void e;
  }
  return config;
});

export default api;
