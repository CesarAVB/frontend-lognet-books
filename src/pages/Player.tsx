import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { catalogItems } from '@/data/mockData';
import { useApp } from '@/contexts/AppContext';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Play, Pause, SkipBack, SkipForward, Bookmark, Moon, Type, Minus, Plus, ChevronLeft, ChevronRight } from 'lucide-react';

const Player: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { setProgress, readingProgress } = useApp();
  const item = catalogItems.find(i => i.id === id);

  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [currentProgress, setCurrentProgress] = useState(readingProgress[id || ''] || 0);
  const [fontSize, setFontSize] = useState(16);
  const [darkReader, setDarkReader] = useState(false);

  useEffect(() => {
    if (!item) return;
    let interval: NodeJS.Timeout;
    if (isPlaying && item.format === 'audiobook') {
      interval = setInterval(() => {
        setCurrentProgress(p => {
          const next = Math.min(p + 0.5 * speed, 100);
          setProgress(item.id, Math.round(next));
          return next;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, speed, item, setProgress]);

  if (!item) return <div className="min-h-screen flex items-center justify-center bg-background"><p className="text-muted-foreground">Item não encontrado.</p></div>;

  const speeds = [0.5, 0.75, 1, 1.25, 1.5, 2, 3];

  // Mock text content for ebook/comic
  const mockText = `Capítulo 1\n\n${item.synopsis}\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\nSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.\n\nNemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.`;

  return (
    <div className={`min-h-screen ${darkReader ? 'bg-[hsl(220,15%,8%)] text-[hsl(0,0%,88%)]' : 'bg-background text-foreground'} transition-colors duration-300`}>
      {/* Top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-14 flex items-center justify-between px-4 bg-background/90 backdrop-blur border-b border-border">
        <button onClick={() => navigate(-1)} className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft size={18} /> Voltar
        </button>
        <div className="text-center">
          <p className="text-sm font-semibold text-foreground truncate max-w-[200px]">{item.title}</p>
          <p className="text-xs text-muted-foreground">{item.author}</p>
        </div>
        <Button variant="ghost" size="icon" onClick={() => setDarkReader(!darkReader)}>
          <Moon size={18} />
        </Button>
      </div>

      {/* Progress bar */}
      <div className="fixed top-14 left-0 right-0 z-40 h-1 bg-muted">
        <div className="h-full bg-primary transition-all duration-300" style={{ width: `${currentProgress}%` }} />
      </div>

      {/* Content */}
      <div className="pt-20 pb-32 px-4 max-w-2xl mx-auto">
        {item.format === 'audiobook' ? (
          <div className="flex flex-col items-center justify-center min-h-[60vh]">
            <div className={`w-64 h-64 rounded-2xl bg-gradient-to-br ${item.coverColor} shadow-glow flex items-center justify-center mb-8`}>
              <p className="text-lg font-bold text-center px-4" style={{ color: 'white' }}>{item.title}</p>
            </div>
            <p className="text-sm text-muted-foreground mb-2">{Math.round(currentProgress)}% concluído</p>
            <div className="w-full max-w-sm h-2 bg-muted rounded-full overflow-hidden mb-8">
              <div className="h-full bg-primary rounded-full transition-all" style={{ width: `${currentProgress}%` }} />
            </div>
          </div>
        ) : (
          <div>
            {/* Reader controls */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <button onClick={() => setFontSize(s => Math.max(12, s - 2))} className="p-2 rounded-lg bg-muted text-muted-foreground hover:text-foreground"><Minus size={16} /></button>
              <span className="text-xs text-muted-foreground flex items-center gap-1"><Type size={14} /> {fontSize}px</span>
              <button onClick={() => setFontSize(s => Math.min(28, s + 2))} className="p-2 rounded-lg bg-muted text-muted-foreground hover:text-foreground"><Plus size={16} /></button>
            </div>

            <div className="prose max-w-none" style={{ fontSize: `${fontSize}px`, lineHeight: 1.8 }}>
              {mockText.split('\n\n').map((p, i) => (
                <p key={i} className={`mb-4 ${darkReader ? 'text-[hsl(0,0%,88%)]' : 'text-foreground'}`}>{p}</p>
              ))}
            </div>

            {/* Page navigation */}
            <div className="flex items-center justify-between mt-8">
              <Button variant="outline" size="sm" onClick={() => setCurrentProgress(p => { const n = Math.max(0, p - 10); setProgress(item.id, n); return n; })}>
                <ChevronLeft size={16} /> Anterior
              </Button>
              <span className="text-xs text-muted-foreground">Página {Math.round(currentProgress / 10) + 1} de 10</span>
              <Button variant="outline" size="sm" onClick={() => setCurrentProgress(p => { const n = Math.min(100, p + 10); setProgress(item.id, n); return n; })}>
                Próxima <ChevronRight size={16} />
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Audio controls (audiobook only) */}
      {item.format === 'audiobook' && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur border-t border-border p-4">
          <div className="max-w-md mx-auto flex flex-col items-center gap-3">
            <div className="flex items-center gap-6">
              <button onClick={() => setCurrentProgress(p => Math.max(0, p - 5))} className="text-muted-foreground hover:text-foreground">
                <SkipBack size={22} />
              </button>
              <button onClick={() => setIsPlaying(!isPlaying)} className="w-14 h-14 rounded-full gradient-bg flex items-center justify-center shadow-glow">
                {isPlaying ? <Pause size={24} className="text-primary-foreground" /> : <Play size={24} className="text-primary-foreground ml-0.5" />}
              </button>
              <button onClick={() => setCurrentProgress(p => Math.min(100, p + 5))} className="text-muted-foreground hover:text-foreground">
                <SkipForward size={22} />
              </button>
            </div>
            <div className="flex items-center gap-4">
              <button onClick={() => { const i = speeds.indexOf(speed); setSpeed(speeds[(i + 1) % speeds.length]); }}
                className="px-3 py-1 rounded-full bg-muted text-xs font-semibold text-muted-foreground hover:text-foreground">
                {speed}x
              </button>
              <button className="text-muted-foreground hover:text-foreground"><Bookmark size={18} /></button>
              <button className="text-muted-foreground hover:text-foreground"><Moon size={18} /></button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Player;
