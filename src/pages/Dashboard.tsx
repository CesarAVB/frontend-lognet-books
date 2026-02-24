import React from 'react';
import { useAuth } from '@/contexts/auth';
import { useApp } from '@/contexts/app';
import { listBooks } from '@/lib/books';
import { useEffect, useState } from 'react';
import CategorySlider from '@/components/CategorySlider';
import AppLayout from '@/components/AppLayout';
import { BookOpen, Headphones, MessageSquare, TrendingUp } from 'lucide-react';

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const { readingProgress } = useApp();

  const [items, setItems] = useState<any[]>([]);
  useEffect(() => {
    let mounted = true;
    listBooks({ limit: 100 })
      .then(res => { if (mounted) setItems(res); })
      .catch(() => { if (mounted) setItems([]); });
    return () => { mounted = false; };
  }, []);

  const continueReading = items.filter(i => i.progress && i.progress > 0).slice(0, 10);
  const newReleases = items.slice(10, 22);
  const bestSellers = items.filter(i => i.rating >= 4.5).slice(0, 12);
  const audiobooks = items.filter(i => i.format === 'audiobook').slice(0, 12);
  const comics = items.filter(i => i.format === 'comic').slice(0, 12);
  const recommended = items.filter(i => i.genre === 'Ficção').slice(0, 12);

  const stats = [
    { icon: BookOpen, label: 'E-books Lidos', value: '12', color: 'text-primary' },
    { icon: Headphones, label: 'Horas Ouvidas', value: '34h', color: 'text-secondary' },
    { icon: MessageSquare, label: 'HQs Lidas', value: '8', color: 'text-accent' },
    { icon: TrendingUp, label: 'Sequência', value: '5 dias', color: 'text-warning' },
  ];

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
      <CategorySlider title="🔥 Novos Lançamentos" items={newReleases} />
      <CategorySlider title="⭐ Best-sellers" items={bestSellers} />
      <CategorySlider title="🎧 Audiobooks Populares" items={audiobooks} />
      <CategorySlider title="💬 Comics & Mangás" items={comics} />
      <CategorySlider title="✨ Recomendados para Você" items={recommended} accent="gradient-text" />
    </AppLayout>
  );
};

export default Dashboard;
