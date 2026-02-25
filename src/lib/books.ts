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
  capaKey?: string;
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
  const env = (import.meta as unknown as { env?: Record<string, string> }).env || {};
  if (env.VITE_API_URL) return env.VITE_API_URL.replace(/\/$/, '');
  try {
    const loc = window.location;
    return `${loc.protocol}//${loc.hostname}:8080`;
  } catch (e) {
    return 'http://localhost:8080';
  }
};

export const apiBase = getApiBase();

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

// ====================================
// ✅ TRATAMENTO DE 401 E 403 (Token Expirado)
// ====================================
function handleTokenExpired(status: number) {
  if (status === 401 || status === 403) {
    console.warn('🔴 Sessão expirada! Redirecionando para login...');
    
    // Limpar dados de autenticação
    localStorage.removeItem('lognet-token');
    localStorage.removeItem('lognet-user');
    
    // Mostrar mensagem amigável
    const message = status === 401 
      ? '⏰ Sua sessão expirou. Por favor, faça login novamente.'
      : '🔒 Sua sessão expirou por inatividade. Por favor, faça login novamente.';
    
    // Redirecionar para login com mensagem
    window.location.href = `/login?reason=${encodeURIComponent(message)}`;
    
    throw new Error(message);
  }
}

function qs(params: Record<string, unknown>) {
  const parts: string[] = [];
  Object.keys(params).forEach((k) => {
    const v = params[k as keyof typeof params];
    if (v === undefined || v === null || v === '') return;
    if (Array.isArray(v)) {
      (v as unknown[]).forEach((vv) => parts.push(`${encodeURIComponent(k)}=${encodeURIComponent(String(vv))}`));
    } else {
      parts.push(`${encodeURIComponent(k)}=${encodeURIComponent(String(v))}`);
    }
  });
  return parts.length ? `?${parts.join('&')}` : '';
}

export async function listBooks(options?: { q?: string; genre?: string; format?: string; page?: number; limit?: number; ids?: string[] }) {
  const params: Record<string, unknown> = {};
  if (options?.q) params.q = options.q;
  if (options?.genre) params.genre = options.genre;
  if (options?.format) params.format = options.format;
  if (options?.page) params.page = options.page;
  if (options?.limit) params.limit = options.limit;
  if (options?.ids) params.ids = options.ids;

  const url = `${apiBase}/api/v1/livros${qs(params)}`;
  
  try {
    const res = await fetch(url, { method: 'GET', headers: buildHeaders() });
    
    // ✅ TRATAR 401 OU 403 COMO TOKEN EXPIRADO
    if (res.status === 401 || res.status === 403) {
      handleTokenExpired(res.status);
    }
    
    if (!res.ok) throw new Error(`Failed to fetch books: ${res.status}`);
    const data = await res.json().catch(() => null);
    if (!data) return [];

    const normalize = (raw: unknown): Book => {
      const r = raw as Record<string, unknown>;
      const maybeTitulo = (r.title as string) || (r.titulo as string) || (r.nome as string) || '';
      const maybeAuthor = (r.author as string) || (r.autor as string) || '';
      let format = (r.format as string) || (r.formato as string) || undefined;
      if (!format) {
        const t = ((r.tipo as string) || '').toString().toUpperCase();
        if (t === 'AUDIOBOOK') format = 'audiobook';
        else if (t === 'PDF' || t === 'EPUB') format = 'ebook';
        else if (t === 'HQ' || t === 'MANGA' || t === 'MANGÁ' || t === 'COMIC') format = 'comic';
        else format = 'ebook';
      }

      return {
        id: r.id ? String(r.id) : String(Math.random()),
        title: maybeTitulo,
        author: maybeAuthor,
        format: format as ContentFormat,
        genre: ((r.genero as Genre) || (r.genre as Genre)) || 'Ficção',
        language: (r.language as string) || (r.idioma as string) || undefined,
        duration: (r.duration as string) || (r.duracao as string) || undefined,
        rating: typeof r.rating === 'number' ? (r.rating as number) : undefined,
        coverColor: (r.coverColor as string) || (r.capaColor as string) || 'from-amber-100 to-orange-100',
        synopsis: (r.synopsis as string) || (r.descricao as string) || undefined,
        progress: typeof r.progress === 'number' ? (r.progress as number) : undefined,
        isFavorite: !!r.isFavorite,
        capa_key: (r.capa_key as string) || (r.capaKey as string) || undefined,
        capaKey: (r.capa_key as string) || (r.capaKey as string) || undefined,
      } as Book;
    };

    // If API returned a page
    if (Array.isArray(data)) return data.map(normalize);
    if (data && typeof data === 'object' && Array.isArray(data.content)) return data.content.map(normalize);
    return [];
  } catch (error) {
    console.error('❌ Erro ao listar livros:', error);
    throw error;
  }
}

export async function getBook(id: string) {
  const url = `${apiBase}/api/v1/livros/${encodeURIComponent(id)}`;
  
  try {
    const res = await fetch(url, { method: 'GET', headers: buildHeaders() });
    
    // ✅ TRATAR 401 OU 403 COMO TOKEN EXPIRADO
    if (res.status === 401 || res.status === 403) {
      handleTokenExpired(res.status);
    }
    
    if (!res.ok) throw new Error(`Failed to fetch book ${id}: ${res.status}`);
    const raw = await res.json();

    const normalize = (raw: unknown): Book => {
      const r = raw as Record<string, unknown>;
      const maybeTitulo = (r.title as string) || (r.titulo as string) || (r.nome as string) || '';
      const maybeAuthor = (r.author as string) || (r.autor as string) || '';
      let format = (r.format as string) || (r.formato as string) || undefined;
      if (!format) {
        const t = ((r.tipo as string) || '').toString().toUpperCase();
        if (t === 'AUDIOBOOK') format = 'audiobook';
        else if (t === 'PDF' || t === 'EPUB') format = 'ebook';
        else if (t === 'HQ' || t === 'MANGA' || t === 'MANGÁ' || t === 'COMIC') format = 'comic';
        else format = 'ebook';
      }

      return {
        id: r.id ? String(r.id) : String(Math.random()),
        title: maybeTitulo,
        author: maybeAuthor,
        format: format as ContentFormat,
        genre: ((r.genero as Genre) || (r.genre as Genre)) || 'Ficção',
        language: (r.language as string) || (r.idioma as string) || undefined,
        duration: (r.duration as string) || (r.duracao as string) || undefined,
        rating: typeof r.rating === 'number' ? (r.rating as number) : undefined,
        coverColor: (r.coverColor as string) || (r.capaColor as string) || 'from-amber-100 to-orange-100',
        synopsis: (r.synopsis as string) || (r.descricao as string) || undefined,
        progress: typeof r.progress === 'number' ? (r.progress as number) : undefined,
        isFavorite: !!r.isFavorite,
        capa_key: (r.capa_key as string) || (r.capaKey as string) || undefined,
        capaKey: (r.capa_key as string) || (r.capaKey as string) || undefined,
      } as Book;
    };

    return normalize(raw);
  } catch (error) {
    console.error('❌ Erro ao buscar livro:', error);
    throw error;
  }
}

export async function createBook(payload: Partial<Book>) {
  const url = `${apiBase}/api/v1/livros`;
  
  try {
    const res = await fetch(url, { method: 'POST', headers: buildHeaders('application/json'), body: JSON.stringify(payload) });
    
    // ✅ TRATAR 401 OU 403 COMO TOKEN EXPIRADO
    if (res.status === 401 || res.status === 403) {
      handleTokenExpired(res.status);
    }
    
    if (!res.ok) throw new Error(`Failed to create book: ${res.status}`);
    return (await res.json()) as Book;
  } catch (error) {
    console.error('❌ Erro ao criar livro:', error);
    throw error;
  }
}

export async function updateBook(id: string, payload: Partial<Book>) {
  const url = `${apiBase}/api/v1/livros/${encodeURIComponent(id)}`;
  
  try {
    const res = await fetch(url, { method: 'PUT', headers: buildHeaders('application/json'), body: JSON.stringify(payload) });
    
    // ✅ TRATAR 401 OU 403 COMO TOKEN EXPIRADO
    if (res.status === 401 || res.status === 403) {
      handleTokenExpired(res.status);
    }
    
    if (!res.ok) throw new Error(`Failed to update book ${id}: ${res.status}`);
    return (await res.json()) as Book;
  } catch (error) {
    console.error('❌ Erro ao atualizar livro:', error);
    throw error;
  }
}

export async function patchStatus(id: string, status: 'ATIVO' | 'INATIVO') {
  const url = `${apiBase}/api/v1/livros/${encodeURIComponent(id)}/status`;
  
  try {
    const res = await fetch(url, { method: 'PATCH', headers: buildHeaders('application/json'), body: JSON.stringify({ status }) });
    
    // ✅ TRATAR 401 OU 403 COMO TOKEN EXPIRADO
    if (res.status === 401 || res.status === 403) {
      handleTokenExpired(res.status);
    }
    
    if (!res.ok) throw new Error(`Failed to patch status for ${id}: ${res.status}`);
    return (await res.json()) as Book;
  } catch (error) {
    console.error('❌ Erro ao atualizar status:', error);
    throw error;
  }
}

export async function deleteBook(id: string) {
  const url = `${apiBase}/api/v1/livros/${encodeURIComponent(id)}`;
  
  try {
    const res = await fetch(url, { method: 'DELETE', headers: buildHeaders() });
    
    // ✅ TRATAR 401 OU 403 COMO TOKEN EXPIRADO
    if (res.status === 401 || res.status === 403) {
      handleTokenExpired(res.status);
    }
    
    if (!res.ok) throw new Error(`Failed to delete book ${id}: ${res.status}`);
    return true;
  } catch (error) {
    console.error('❌ Erro ao deletar livro:', error);
    throw error;
  }
}

// ====================================
// FUNÇÕES PARA UPLOAD
// ====================================
export async function uploadArquivo(id: string | number, file: File): Promise<unknown> {
  const url = `${apiBase}/api/v1/livros/${id}/arquivo`;
  
  const formData = new FormData();
  formData.append('arquivo', file);

  try {
    const headers: Record<string, string> = {};
    try {
      const token = localStorage.getItem('lognet-token');
      if (token) headers['Authorization'] = `Bearer ${token}`;
    } catch (e) {
      // ignore
    }

    const res = await fetch(url, {
      method: 'POST',
      headers,
      body: formData,
    });

    // ✅ TRATAR 401 OU 403 COMO TOKEN EXPIRADO
    if (res.status === 401 || res.status === 403) {
      handleTokenExpired(res.status);
    }

    if (!res.ok) throw new Error(`Failed to upload arquivo: ${res.status}`);
    return await res.json() as unknown;
  } catch (error) {
    console.error('❌ Erro ao fazer upload:', error);
    throw error;
  }
}

export async function uploadCapa(id: string | number, file: File): Promise<unknown> {
  const url = `${apiBase}/api/v1/livros/${id}/capa`;
  
  const formData = new FormData();
  formData.append('capa', file);

  try {
    const headers: Record<string, string> = {};
    try {
      const token = localStorage.getItem('lognet-token');
      if (token) headers['Authorization'] = `Bearer ${token}`;
    } catch (e) {
      // ignore
    }

    const res = await fetch(url, {
      method: 'POST',
      headers,
      body: formData,
    });

    // ✅ TRATAR 401 OU 403 COMO TOKEN EXPIRADO
    if (res.status === 401 || res.status === 403) {
      handleTokenExpired(res.status);
    }

    if (!res.ok) throw new Error(`Failed to upload capa: ${res.status}`);
    return await res.json() as unknown;
  } catch (error) {
    console.error('❌ Erro ao fazer upload de capa:', error);
    throw error;
  }
}