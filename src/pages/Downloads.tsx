import React from 'react';
import AppLayout from '@/components/AppLayout';
import BookCard from '@/components/BookCard';
import { useApp } from '@/contexts/app';
import { listBooks } from '@/lib/books';
import { useEffect, useState } from 'react';
import { Download } from 'lucide-react';

const DownloadsPage: React.FC = () => {
  const { downloads } = useApp();
  const [items, setItems] = useState<any[]>([]);
  useEffect(() => {
    let mounted = true;
    if (!downloads || downloads.length === 0) { setItems([]); return; }
    listBooks({ ids: downloads })
      .then(res => { if (mounted) setItems(res); })
      .catch(() => { if (mounted) setItems([]); });
    return () => { mounted = false; };
  }, [downloads]);

  return (
    <AppLayout>
      <h1 className="text-2xl font-bold text-foreground mb-2">Downloads Offline</h1>
      <p className="text-sm text-muted-foreground mb-6">{items.length}/10 itens baixados • {(items.length * 102).toLocaleString()} MB usados de 1 GB</p>
      {items.length === 0 ? (
        <div className="text-center py-20">
          <Download size={48} className="mx-auto text-muted-foreground mb-4" />
          <p className="text-muted-foreground">Nenhum download ainda.</p>
          <p className="text-sm text-muted-foreground mt-1">Baixe conteúdos para ler sem internet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {items.map(item => <BookCard key={item.id} item={item} size="lg" />)}
        </div>
      )}
    </AppLayout>
  );
};

export default DownloadsPage;
