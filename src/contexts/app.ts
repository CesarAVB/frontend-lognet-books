import { createContext, useContext } from 'react';
import { Book } from '@/lib/books';

export interface AppContextType {
  favorites: string[];
  downloads: string[];
  wishlist: string[];
  readingProgress: Record<string, number>;
  toggleFavorite: (id: string) => void;
  toggleDownload: (id: string) => void;
  toggleWishlist: (id: string) => void;
  setProgress: (id: string, progress: number) => void;
  isFavorite: (id: string) => boolean;
  isDownloaded: (id: string) => boolean;
  isWishlisted: (id: string) => boolean;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = (): AppContextType => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp deve ser usado dentro de um AppProvider');
  return ctx;
};
