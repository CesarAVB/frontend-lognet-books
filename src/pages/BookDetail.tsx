import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import AppLayout from '@/components/AppLayout';
import CategorySlider from '@/components/CategorySlider';
import { Button } from '@/components/ui/button';
import { useApp } from '@/contexts/app';
import { getBook, listBooks, formatLabels, formatIcons, type Book } from '@/lib/books';
import { useEffect, useState } from 'react';
import { Heart, Download, Play, BookOpen, Share2, Star, ArrowLeft, Clock, Globe } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const BookDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { isFavorite, toggleFavorite, isDownloaded, toggleDownload, readingProgress } = useApp();

  const [item, setItem] = useState<Book | null>(null);
  const [related, setRelated] = useState<Book[]>([]);
  useEffect(() => {
    if (!id) return;
    let mounted = true;
    getBook(id)
      .then(b => { if (mounted) setItem(b); })
      .catch(() => { if (mounted) setItem(null); });
    return () => { mounted = false; };
  }, [id]);

  useEffect(() => {
    let mounted = true;
    if (item) {
      listBooks({ genre: item.genre, limit: 10 })
        .then(res => { if (mounted) setRelated(res.filter(r => r.id !== item.id)); })
        .catch(() => { if (mounted) setRelated([]); });
    }
    return () => { mounted = false; };
  }, [item]);

  if (!item) return <AppLayout><div className="text-center py-20"><p className="text-muted-foreground">Item não encontrado.</p><Link to="/catalog" className="text-primary hover:underline">Voltar ao catálogo</Link></div></AppLayout>;

  const progress = readingProgress[item.id] || item.progress || 0;
  const fav = isFavorite(item.id);
  const downloaded = isDownloaded(item.id);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ title: item.title, text: `Confira "${item.title}" no Lognet SVA!`, url: window.location.href });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({ title: 'Link copiado!' });
    }
  };

  return (
    <AppLayout>
      <button onClick={() => navigate(-1)} className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors">
        <ArrowLeft size={16} /> Voltar
      </button>

      <div className="flex flex-col md:flex-row gap-8 mb-12 animate-fade-in">
        {/* Cover */}
        <div className={`flex-shrink-0 w-48 sm:w-56 mx-auto md:mx-0 aspect-[2/3] rounded-2xl bg-gradient-to-br ${item.coverColor} shadow-card-hover flex items-center justify-center`}>
          <div className="text-center p-6">
            <p className="text-lg font-bold mb-1" style={{ color: 'white' }}>{item.title}</p>
            <p className="text-sm opacity-75" style={{ color: 'white' }}>{item.author}</p>
          </div>
        </div>

        {/* Info */}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">
              {formatIcons[item.format]} {formatLabels[item.format]}
            </span>
            <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-muted text-muted-foreground">{item.genre}</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-1">{item.title}</h1>
          <p className="text-base text-muted-foreground mb-4">{item.author}</p>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
            <span className="flex items-center gap-1"><Star size={14} className="text-warning" /> {item.rating}</span>
            <span className="flex items-center gap-1"><Clock size={14} /> {item.duration}</span>
            <span className="flex items-center gap-1"><Globe size={14} /> {item.language}</span>
          </div>

          {progress > 0 && (
            <div className="mb-4">
              <div className="flex justify-between text-xs text-muted-foreground mb-1">
                <span>Progresso</span><span>{progress}%</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-success rounded-full transition-all" style={{ width: `${progress}%` }} />
              </div>
            </div>
          )}

          <p className="text-sm text-muted-foreground leading-relaxed mb-6">{item.synopsis}</p>

          <div className="flex flex-wrap gap-3">
            <Link to={`/player/${item.id}`}>
              <Button variant="hero" size="lg">
                <Play size={18} /> {progress > 0 ? 'Continuar' : item.format === 'audiobook' ? 'Ouvir Agora' : 'Ler Agora'}
              </Button>
            </Link>
            <Button variant="outline" size="lg" onClick={() => { toggleDownload(item.id); toast({ title: downloaded ? 'Removido dos downloads' : 'Baixando para offline...' }); }}>
              <Download size={18} /> {downloaded ? 'Baixado' : 'Baixar'}
            </Button>
            <Button variant="ghost" size="icon" onClick={() => { toggleFavorite(item.id); toast({ title: fav ? 'Removido dos favoritos' : 'Adicionado aos favoritos ❤️' }); }}>
              <Heart size={20} className={fav ? 'fill-destructive text-destructive' : ''} />
            </Button>
            <Button variant="ghost" size="icon" onClick={handleShare}>
              <Share2 size={20} />
            </Button>
          </div>
        </div>
      </div>

      {related.length > 0 && <CategorySlider title="Você também pode gostar" items={related} />}
    </AppLayout>
  );
};

export default BookDetail;
