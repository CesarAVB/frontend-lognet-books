import React from 'react';
import AppLayout from '@/components/AppLayout';
import BookCard from '@/components/BookCard';
import { useApp } from '@/contexts/AppContext';
import { catalogItems } from '@/data/mockData';
import { Heart } from 'lucide-react';

const Favorites: React.FC = () => {
  const { favorites } = useApp();
  const items = catalogItems.filter(i => favorites.includes(i.id));

  return (
    <AppLayout>
      <h1 className="text-2xl font-bold text-foreground mb-6">Favoritos</h1>
      {items.length === 0 ? (
        <div className="text-center py-20">
          <Heart size={48} className="mx-auto text-muted-foreground mb-4" />
          <p className="text-muted-foreground">Nenhum favorito ainda.</p>
          <p className="text-sm text-muted-foreground mt-1">Toque no ❤️ em qualquer título para adicionar.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {items.map(item => <BookCard key={item.id} item={item} size="lg" />)}
        </div>
      )}
    </AppLayout>
  );
};

export default Favorites;
