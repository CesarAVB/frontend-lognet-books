import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { CatalogItem } from '@/data/mockData';

interface AppContextType {
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

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<string[]>(() => JSON.parse(localStorage.getItem('lognet-favs') || '[]'));
  const [downloads, setDownloads] = useState<string[]>(() => JSON.parse(localStorage.getItem('lognet-downloads') || '[]'));
  const [wishlist, setWishlist] = useState<string[]>(() => JSON.parse(localStorage.getItem('lognet-wishlist') || '[]'));
  const [readingProgress, setReadingProgress] = useState<Record<string, number>>(() => JSON.parse(localStorage.getItem('lognet-progress') || '{}'));
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => { localStorage.setItem('lognet-favs', JSON.stringify(favorites)); }, [favorites]);
  useEffect(() => { localStorage.setItem('lognet-downloads', JSON.stringify(downloads)); }, [downloads]);
  useEffect(() => { localStorage.setItem('lognet-wishlist', JSON.stringify(wishlist)); }, [wishlist]);
  useEffect(() => { localStorage.setItem('lognet-progress', JSON.stringify(readingProgress)); }, [readingProgress]);

  const toggle = (list: string[], setList: React.Dispatch<React.SetStateAction<string[]>>, id: string) => {
    setList(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const toggleFavorite = useCallback((id: string) => toggle(favorites, setFavorites, id), [favorites]);
  const toggleDownload = useCallback((id: string) => toggle(downloads, setDownloads, id), [downloads]);
  const toggleWishlist = useCallback((id: string) => toggle(wishlist, setWishlist, id), [wishlist]);

  const setProgress = useCallback((id: string, progress: number) => {
    setReadingProgress(prev => ({ ...prev, [id]: progress }));
  }, []);

  return (
    <AppContext.Provider value={{
      favorites, downloads, wishlist, readingProgress,
      toggleFavorite, toggleDownload, toggleWishlist, setProgress,
      isFavorite: (id) => favorites.includes(id),
      isDownloaded: (id) => downloads.includes(id),
      isWishlisted: (id) => wishlist.includes(id),
      searchQuery, setSearchQuery,
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be inside AppProvider');
  return ctx;
};
