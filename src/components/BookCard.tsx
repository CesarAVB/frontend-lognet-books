import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Download, BookOpen, Headphones, MessageSquare } from 'lucide-react';
import { Book, formatIcons } from '@/lib/books';
import { useApp } from '@/contexts/app';

interface BookCardProps {
  item: Book & { capa_key?: string; capaKey?: string };
  size?: 'sm' | 'md' | 'lg';
}

const formatIcon = {
  ebook: BookOpen,
  audiobook: Headphones,
  comic: MessageSquare,
};

const BookCard: React.FC<BookCardProps> = ({ item, size = 'md' }) => {
  const { isFavorite, toggleFavorite } = useApp();
  const fav = isFavorite(item.id);
  const Icon = formatIcon[item.format];

  // ✅ Estado para capa do MinIO
  const [capaUrl, setCapaUrl] = useState<string | null>(null);
  const [loadingCapa, setLoadingCapa] = useState(true);
  const [erroCapa, setErroCapa] = useState(false);

  // ✅ Carregar capa do MinIO
  useEffect(() => {
    const fetchCapa = async () => {
      try {
        setLoadingCapa(true);
        setErroCapa(false);

        // Verificar se tem capa_key (pode ser capa_key ou capaKey)
        const capaKey = item.capa_key || item.capaKey;
        
        if (!capaKey) {
          setLoadingCapa(false);
          return;
        }

        const response = await fetch(`/api/v1/livros/${item.id}/capa/link`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('lognet-token')}`,
          },
        });

        if (!response.ok) throw new Error('Erro ao buscar capa');

        const data = await response.json();
        setCapaUrl(data.url);
      } catch (err) {
        console.error('❌ Erro ao carregar capa:', err);
        setErroCapa(true);
      } finally {
        setLoadingCapa(false);
      }
    };

    fetchCapa();
  }, [item.id, item.capa_key, item.capaKey]);

  const sizeClasses = {
    sm: 'w-32',
    md: 'w-40 sm:w-44',
    lg: 'w-48 sm:w-52',
  };

  return (
    <div className={`${sizeClasses[size]} flex-shrink-0 group`}>
      <Link to={`/book/${item.id}`} className="block">
        <div className={`relative aspect-[2/3] rounded-xl overflow-hidden shadow-card group-hover:shadow-card-hover transition-all duration-300 group-hover:scale-105 bg-gradient-to-br ${item.coverColor}`}>
          {/* ✅ Imagem Real da Capa */}
          {capaUrl && !erroCapa && (
            <img
              src={capaUrl}
              alt={item.title}
              className="w-full h-full object-cover"
              onError={() => setErroCapa(true)}
            />
          )}

          {/* Fallback - sem capa ou erro */}
          {(!capaUrl || erroCapa) && (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
              <Icon className="mb-2 opacity-30" size={32} color="white" />
              <h3 className="text-xs sm:text-sm font-bold leading-tight mb-1" style={{ color: 'white' }}>
                {item.title}
              </h3>
              <p className="text-[10px] sm:text-xs opacity-75" style={{ color: 'white' }}>
                {item.author}
              </p>
            </div>
          )}

          {/* Format badge */}
          <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-background/90 text-foreground">
            {formatIcons[item.format]} {item.format === 'ebook' ? 'E-book' : item.format === 'audiobook' ? 'Áudio' : 'HQ'}
          </div>

          {/* Progress bar */}
          {item.progress && (
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-background/30">
              <div className="h-full bg-success transition-all" style={{ width: `${item.progress}%` }} />
            </div>
          )}

          {/* Favorite button */}
          <button
            onClick={(e) => { e.preventDefault(); toggleFavorite(item.id); }}
            className="absolute top-2 right-2 p-1.5 rounded-full bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Heart size={14} className={fav ? 'fill-destructive text-destructive' : 'text-foreground'} />
          </button>
        </div>
      </Link>

      <div className="mt-2 px-1">
        <h4 className="text-xs sm:text-sm font-semibold text-foreground truncate">
          {item.title}
        </h4>
        <p className="text-[10px] sm:text-xs text-muted-foreground truncate">
          {item.author}
        </p>
        <div className="flex items-center gap-1 mt-1">
          <span className="text-warning text-[10px]">★</span>
          <span className="text-[10px] text-muted-foreground">{item.rating}</span>
          <span className="text-[10px] text-muted-foreground ml-1">{item.duration}</span>
        </div>
      </div>
    </div>
  );
};

export default BookCard;