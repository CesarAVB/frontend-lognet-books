export type ContentFormat = 'ebook' | 'audiobook' | 'comic';
export type Genre =
  | 'Ficção'
  | 'Romance'
  | 'Autoajuda'
  | 'Negócios'
  | 'Terror'
  | 'Fantasia'
  | 'Infantil'
  | 'Biografia'
  | 'Ciência'
  | 'HQ'
  | 'Mangá'
  | 'Poesia'
  | 'História';

export interface Book {
  id: string;
  title: string;
  author: string;
  format: ContentFormat;
  genre: Genre;
  language?: string;
  duration?: string;
  rating?: number;
  coverColor?: string;
  synopsis?: string;
  progress?: number;
  isFavorite?: boolean;
}

export const genres: Genre[] = [
  'Ficção',
  'Romance',
  'Autoajuda',
  'Negócios',
  'Terror',
  'Fantasia',
  'Infantil',
  'Biografia',
  'Ciência',
  'HQ',
  'Mangá',
  'Poesia',
  'História',
];

export const formats: ContentFormat[] = ['ebook', 'audiobook', 'comic'];

export const formatLabels: Record<ContentFormat, string> = {
  ebook: 'E-book',
  audiobook: 'Audiobook',
  comic: 'HQ / Comic',
};

export const formatIcons: Record<ContentFormat, string> = {
  ebook: '📖',
  audiobook: '🎧',
  comic: '💬',
};

const getApiBase = () => {
  const env = (import.meta as any).env || {};
  if (env.VITE_API_URL) return env.VITE_API_URL.replace(/\/$/, '');
  try {
    const loc = window.location;
    return `${loc.protocol}//${loc.hostname}:8080`;
  } catch (e) {
    return 'http://localhost:8080';
  }
};

const apiBase = getApiBase();

function buildHeaders(contentType?: string) {
  const headers: Record<string, string> = {
    Accept: 'application/json',
  };
  if (contentType) headers['Content-Type'] = contentType;
  try {
    const token = localStorage.getItem('lognet-token');
    if (token) headers['Authorization'] = `Bearer ${token}`;
  } catch (e) {
    // ignore
  }
  return headers;
}

function qs(params: Record<string, any>) {
  const parts: string[] = [];
  Object.keys(params).forEach((k) => {
    const v = params[k];
    if (v === undefined || v === null || v === '') return;
    if (Array.isArray(v)) {
      v.forEach((vv) => parts.push(`${encodeURIComponent(k)}=${encodeURIComponent(vv)}`));
    } else {
      parts.push(`${encodeURIComponent(k)}=${encodeURIComponent(String(v))}`);
    }
  });
  return parts.length ? `?${parts.join('&')}` : '';
}

export async function listBooks(options?: { q?: string; genre?: string; format?: string; page?: number; limit?: number; ids?: string[] }) {
  const params: Record<string, any> = {};
  if (options?.q) params.q = options.q;
  if (options?.genre) params.genre = options.genre;
  if (options?.format) params.format = options.format;
  if (options?.page) params.page = options.page;
  if (options?.limit) params.limit = options.limit;
  if (options?.ids) params.ids = options.ids;

  const url = `${apiBase}/api/v1/livros${qs(params)}`;
  const res = await fetch(url, { method: 'GET', headers: buildHeaders() });
  if (!res.ok) throw new Error(`Failed to fetch books: ${res.status}`);
  return (await res.json()) as Book[];
}

export async function getBook(id: string) {
  const url = `${apiBase}/api/v1/livros/${encodeURIComponent(id)}`;
  const res = await fetch(url, { method: 'GET', headers: buildHeaders() });
  if (!res.ok) throw new Error(`Failed to fetch book ${id}: ${res.status}`);
  return (await res.json()) as Book;
}

export async function createBook(payload: Partial<Book>) {
  const url = `${apiBase}/api/v1/livros`;
  const res = await fetch(url, { method: 'POST', headers: buildHeaders('application/json'), body: JSON.stringify(payload) });
  if (!res.ok) throw new Error(`Failed to create book: ${res.status}`);
  return (await res.json()) as Book;
}

export async function updateBook(id: string, payload: Partial<Book>) {
  const url = `${apiBase}/api/v1/livros/${encodeURIComponent(id)}`;
  const res = await fetch(url, { method: 'PUT', headers: buildHeaders('application/json'), body: JSON.stringify(payload) });
  if (!res.ok) throw new Error(`Failed to update book ${id}: ${res.status}`);
  return (await res.json()) as Book;
}

export async function patchStatus(id: string, status: 'ATIVO' | 'INATIVO') {
  const url = `${apiBase}/api/v1/livros/${encodeURIComponent(id)}/status`;
  const res = await fetch(url, { method: 'PATCH', headers: buildHeaders('application/json'), body: JSON.stringify({ status }) });
  if (!res.ok) throw new Error(`Failed to patch status for ${id}: ${res.status}`);
  return (await res.json()) as Book;
}

export async function deleteBook(id: string) {
  const url = `${apiBase}/api/v1/livros/${encodeURIComponent(id)}`;
  const res = await fetch(url, { method: 'DELETE', headers: buildHeaders() });
  if (!res.ok) throw new Error(`Failed to delete book ${id}: ${res.status}`);
  return true;
}
