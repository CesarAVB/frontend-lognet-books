import React from 'react';
import { useAuth } from '@/contexts/useAuth';
import { listBooks, Book as ApiBook } from '@/lib/books';
import { useEffect, useState } from 'react';
import CategorySlider from '@/components/CategorySlider';
import AppLayout from '@/components/AppLayout';
import { BookOpen, Headphones, MessageSquare, TrendingUp } from 'lucide-react';

interface Book extends ApiBook {
  nome: string;
  autor?: string;
  descricao?: string;
  genero?: string;
  tipo: 'PDF' | 'EPUB' | 'AUDIOBOOK';
  status: string;
  [key: string]: unknown;
}

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  const [items, setItems] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    const fetchBooks = async () => {
      try {
        setLoading(true);
        console.log('📚 Carregando livros...');
        
        const res = await listBooks({ limit: 100, page: 0 });
        
        console.log('📦 Resposta da API:', res);
        
        // ✅ Tratar resposta (pode ser array ou Page object)
        let apiBooks: ApiBook[] = [];
        
        if (Array.isArray(res)) {
          apiBooks = res;
          console.log('✅ Resposta é um array');
        } else if (res && typeof res === 'object') {
          // Se for um objeto Page do Spring
          const pageRes = res as { content?: ApiBook[] };
          if ('content' in res && pageRes.content) {
            apiBooks = pageRes.content;
            console.log('✅ Resposta é um Page object, extraído content');
          } else {
            apiBooks = [];
            console.log('⚠️ Resposta é objeto mas sem propriedade content');
          }
        }
        
        // Transform ApiBook to Book interface
        const books: Book[] = apiBooks.map(book => ({
          ...book,
          nome: (book as ApiBook & { titulo?: string }).titulo || '',
          tipo: ((book as unknown as { tipo?: string }).tipo as 'PDF' | 'EPUB' | 'AUDIOBOOK') || 'PDF',
          status: ((book as unknown as { status?: string }).status) || 'disponível',
        }));
        
        console.log('📚 Livros carregados:', books.length);
        
        if (mounted) {
          setItems(books);
          setError(null);
        }
      } catch (err) {
        console.error('❌ Erro ao carregar livros:', err);
        if (mounted) {
          setError(err instanceof Error ? err.message : 'Erro ao carregar livros');
          setItems([]);
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    fetchBooks();
    
    return () => { 
      mounted = false; 
    };
  }, []);

  // ✅ Usar array vazio como fallback
  const safeItems = Array.isArray(items) ? items : [];

  const continueReading = safeItems
    .filter(i => i.progress && i.progress > 0)
    .slice(0, 10);
    
  const newReleases = safeItems.slice(0, 12);
  
  const bestSellers = safeItems
    .filter(i => i.rating >= 4.5)
    .slice(0, 12);
    
  const audiobooks = safeItems
    .filter(i => i.tipo === 'AUDIOBOOK')
    .slice(0, 12);
    
  const comics = safeItems
    .filter(i => i.formato === 'comic')
    .slice(0, 12);
    
  const recommended = safeItems
    .filter(i => i.genero === 'Ficção')
    .slice(0, 12);

  const stats = [
    { icon: BookOpen, label: 'E-books Lidos', value: '12', color: 'text-primary' },
    { icon: Headphones, label: 'Horas Ouvidas', value: '34h', color: 'text-secondary' },
    { icon: MessageSquare, label: 'HQs Lidas', value: '8', color: 'text-accent' },
    { icon: TrendingUp, label: 'Sequência', value: '5 dias', color: 'text-warning' },
  ];

  if (loading) {
    return (
      <AppLayout>
        <div className="flex items-center justify-center h-96">
          <p className="text-muted-foreground">Carregando livros...</p>
        </div>
      </AppLayout>
    );
  }

  if (error) {
    return (
      <AppLayout>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
          <p className="text-red-700 font-semibold">❌ Erro ao carregar livros</p>
          <p className="text-red-600 text-sm mt-1">{error}</p>
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      {/* Greeting */}
      <div className="mb-8 animate-fade-in">
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
          Olá, <span className="gradient-text">{user?.name || 'Leitor'}</span> 👋
        </h1>
        <p className="text-muted-foreground mt-1">O que vamos ler hoje?</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8 animate-slide-up">
        {stats.map(({ icon: Icon, label, value, color }) => (
          <div key={label} className="bg-card rounded-2xl p-4 shadow-card border border-border">
            <Icon size={20} className={`${color} mb-2`} />
            <p className="text-xl sm:text-2xl font-bold text-card-foreground">{value}</p>
            <p className="text-xs text-muted-foreground">{label}</p>
          </div>
        ))}
      </div>

      {/* Content */}
      {continueReading.length > 0 && <CategorySlider title="📖 Continuar Lendo" items={continueReading} />}
      {newReleases.length > 0 && <CategorySlider title="🔥 Novos Lançamentos" items={newReleases} />}
      {bestSellers.length > 0 && <CategorySlider title="⭐ Best-sellers" items={bestSellers} />}
      {audiobooks.length > 0 && <CategorySlider title="🎧 Audiobooks Populares" items={audiobooks} />}
      {comics.length > 0 && <CategorySlider title="💬 Comics & Mangás" items={comics} />}
      {recommended.length > 0 && <CategorySlider title="✨ Recomendados para Você" items={recommended} accent="gradient-text" />}

      {/* Empty state */}
      {safeItems.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">Nenhum livro disponível no momento.</p>
        </div>
      )}
    </AppLayout>
  );
};

export default Dashboard;