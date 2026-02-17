import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import AppLayout from '@/components/AppLayout';
import BookCard from '@/components/BookCard';
import { catalogItems, genres, formats, formatLabels, type Genre, type ContentFormat } from '@/data/mockData';
import { Search, SlidersHorizontal, X } from 'lucide-react';

const Catalog: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialQ = searchParams.get('q') || '';
  const [query, setQuery] = useState(initialQ);
  const [selectedGenre, setSelectedGenre] = useState<Genre | 'all'>('all');
  const [selectedFormat, setSelectedFormat] = useState<ContentFormat | 'all'>('all');
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    return catalogItems.filter(item => {
      const matchQ = !query || item.title.toLowerCase().includes(query.toLowerCase()) || item.author.toLowerCase().includes(query.toLowerCase());
      const matchG = selectedGenre === 'all' || item.genre === selectedGenre;
      const matchF = selectedFormat === 'all' || item.format === selectedFormat;
      return matchQ && matchG && matchF;
    });
  }, [query, selectedGenre, selectedFormat]);

  const clearFilters = () => { setQuery(''); setSelectedGenre('all'); setSelectedFormat('all'); };

  return (
    <AppLayout>
      <div className="mb-6 animate-fade-in">
        <h1 className="text-2xl font-bold text-foreground mb-4">Catálogo</h1>

        {/* Search */}
        <div className="flex gap-2 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <input
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Buscar por título ou autor..."
              className="w-full h-11 pl-10 pr-4 rounded-xl bg-muted border-none text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {query && (
              <button onClick={() => setQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                <X size={16} />
              </button>
            )}
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`h-11 px-4 rounded-xl flex items-center gap-2 text-sm font-medium transition-colors ${
              showFilters ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:text-foreground'
            }`}
          >
            <SlidersHorizontal size={16} /> Filtros
          </button>
        </div>

        {/* Filters */}
        {showFilters && (
          <div className="flex flex-wrap gap-2 mb-4 animate-scale-in">
            <div className="flex flex-wrap gap-1.5">
              <button onClick={() => setSelectedFormat('all')} className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${selectedFormat === 'all' ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:text-foreground'}`}>
                Todos
              </button>
              {formats.map(f => (
                <button key={f} onClick={() => setSelectedFormat(f)} className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${selectedFormat === f ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:text-foreground'}`}>
                  {formatLabels[f]}
                </button>
              ))}
            </div>
            <div className="w-full" />
            <div className="flex flex-wrap gap-1.5">
              <button onClick={() => setSelectedGenre('all')} className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${selectedGenre === 'all' ? 'bg-secondary text-secondary-foreground' : 'bg-muted text-muted-foreground hover:text-foreground'}`}>
                Todos gêneros
              </button>
              {genres.map(g => (
                <button key={g} onClick={() => setSelectedGenre(g)} className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${selectedGenre === g ? 'bg-secondary text-secondary-foreground' : 'bg-muted text-muted-foreground hover:text-foreground'}`}>
                  {g}
                </button>
              ))}
            </div>
            {(selectedGenre !== 'all' || selectedFormat !== 'all' || query) && (
              <button onClick={clearFilters} className="px-3 py-1.5 rounded-full text-xs font-medium text-destructive hover:bg-destructive/10 transition-colors">
                Limpar filtros
              </button>
            )}
          </div>
        )}

        <p className="text-sm text-muted-foreground">{filtered.length} título{filtered.length !== 1 ? 's' : ''} encontrado{filtered.length !== 1 ? 's' : ''}</p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {filtered.map(item => (
          <BookCard key={item.id} item={item} size="lg" />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20">
          <p className="text-lg text-muted-foreground">Nenhum resultado encontrado.</p>
          <button onClick={clearFilters} className="text-primary text-sm hover:underline mt-2">Limpar filtros</button>
        </div>
      )}
    </AppLayout>
  );
};

export default Catalog;
