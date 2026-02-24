import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import BookCard from './BookCard';
import { Book } from '@/lib/books';

interface CategorySliderProps {
  title: string;
  items: Book[];
  accent?: string;
}

const CategorySlider: React.FC<CategorySliderProps> = ({ title, items, accent }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === 'left' ? -300 : 300, behavior: 'smooth' });
    }
  };

  if (!items.length) return null;

  return (
    <section className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className={`text-lg sm:text-xl font-bold ${accent || 'text-foreground'}`}>{title}</h2>
        <div className="flex gap-1">
          <button onClick={() => scroll('left')} className="p-1.5 rounded-lg bg-muted hover:bg-muted/80 text-muted-foreground transition-colors">
            <ChevronLeft size={18} />
          </button>
          <button onClick={() => scroll('right')} className="p-1.5 rounded-lg bg-muted hover:bg-muted/80 text-muted-foreground transition-colors">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
      <div ref={scrollRef} className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
        {items.map(item => (
          <BookCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default CategorySlider;
