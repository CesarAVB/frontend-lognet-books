export type ContentFormat = 'ebook' | 'audiobook' | 'comic';
export type Genre = 'Ficção' | 'Romance' | 'Autoajuda' | 'Negócios' | 'Terror' | 'Fantasia' | 'Infantil' | 'Biografia' | 'Ciência' | 'HQ' | 'Mangá' | 'Poesia' | 'História';

export interface CatalogItem {
  id: string;
  title: string;
  author: string;
  format: ContentFormat;
  genre: Genre;
  language: string;
  duration: string;
  rating: number;
  coverColor: string;
  synopsis: string;
  progress?: number;
  isFavorite?: boolean;
}

const colors = [
  'from-blue-600 to-blue-800',
  'from-emerald-600 to-emerald-800',
  'from-purple-600 to-purple-800',
  'from-rose-600 to-rose-800',
  'from-amber-600 to-amber-800',
  'from-cyan-600 to-cyan-800',
  'from-indigo-600 to-indigo-800',
  'from-pink-600 to-pink-800',
  'from-teal-600 to-teal-800',
  'from-orange-600 to-orange-800',
];

const titles: { title: string; author: string; genre: Genre; format: ContentFormat }[] = [
  { title: 'Dom Casmurro', author: 'Machado de Assis', genre: 'Ficção', format: 'ebook' },
  { title: 'O Cortiço', author: 'Aluísio Azevedo', genre: 'Ficção', format: 'ebook' },
  { title: 'Memórias Póstumas de Brás Cubas', author: 'Machado de Assis', genre: 'Ficção', format: 'audiobook' },
  { title: 'Grande Sertão: Veredas', author: 'Guimarães Rosa', genre: 'Ficção', format: 'audiobook' },
  { title: 'Capitães da Areia', author: 'Jorge Amado', genre: 'Ficção', format: 'ebook' },
  { title: 'O Poder do Hábito', author: 'Charles Duhigg', genre: 'Autoajuda', format: 'audiobook' },
  { title: 'Mindset', author: 'Carol Dweck', genre: 'Autoajuda', format: 'ebook' },
  { title: 'Pai Rico, Pai Pobre', author: 'Robert Kiyosaki', genre: 'Negócios', format: 'audiobook' },
  { title: 'O Homem Mais Rico da Babilônia', author: 'George Clason', genre: 'Negócios', format: 'ebook' },
  { title: 'It: A Coisa', author: 'Stephen King', genre: 'Terror', format: 'ebook' },
  { title: 'O Iluminado', author: 'Stephen King', genre: 'Terror', format: 'audiobook' },
  { title: 'O Senhor dos Anéis', author: 'J.R.R. Tolkien', genre: 'Fantasia', format: 'ebook' },
  { title: 'Harry Potter e a Pedra Filosofal', author: 'J.K. Rowling', genre: 'Fantasia', format: 'audiobook' },
  { title: 'O Pequeno Príncipe', author: 'Saint-Exupéry', genre: 'Infantil', format: 'ebook' },
  { title: 'A Menina que Roubava Livros', author: 'Markus Zusak', genre: 'Ficção', format: 'audiobook' },
  { title: 'Steve Jobs', author: 'Walter Isaacson', genre: 'Biografia', format: 'ebook' },
  { title: 'Elon Musk', author: 'Walter Isaacson', genre: 'Biografia', format: 'audiobook' },
  { title: 'Sapiens', author: 'Yuval Harari', genre: 'Ciência', format: 'ebook' },
  { title: 'Cosmos', author: 'Carl Sagan', genre: 'Ciência', format: 'audiobook' },
  { title: 'Turma da Mônica', author: 'Mauricio de Sousa', genre: 'HQ', format: 'comic' },
  { title: 'Cavaleiros do Zodíaco', author: 'Masami Kurumada', genre: 'Mangá', format: 'comic' },
  { title: 'One Piece Vol. 1', author: 'Eiichiro Oda', genre: 'Mangá', format: 'comic' },
  { title: 'Naruto Vol. 1', author: 'Masashi Kishimoto', genre: 'Mangá', format: 'comic' },
  { title: 'Dragon Ball Vol. 1', author: 'Akira Toriyama', genre: 'Mangá', format: 'comic' },
  { title: 'Sandman Vol. 1', author: 'Neil Gaiman', genre: 'HQ', format: 'comic' },
  { title: 'Watchmen', author: 'Alan Moore', genre: 'HQ', format: 'comic' },
  { title: 'Poemas de Fernando Pessoa', author: 'Fernando Pessoa', genre: 'Poesia', format: 'ebook' },
  { title: '1808', author: 'Laurentino Gomes', genre: 'História', format: 'ebook' },
  { title: '1822', author: 'Laurentino Gomes', genre: 'História', format: 'audiobook' },
  { title: 'A Revolução dos Bichos', author: 'George Orwell', genre: 'Ficção', format: 'ebook' },
  { title: '1984', author: 'George Orwell', genre: 'Ficção', format: 'audiobook' },
  { title: 'O Alquimista', author: 'Paulo Coelho', genre: 'Ficção', format: 'ebook' },
  { title: 'Brida', author: 'Paulo Coelho', genre: 'Romance', format: 'audiobook' },
  { title: 'A Culpa é das Estrelas', author: 'John Green', genre: 'Romance', format: 'ebook' },
  { title: 'Orgulho e Preconceito', author: 'Jane Austen', genre: 'Romance', format: 'audiobook' },
  { title: 'Quincas Borba', author: 'Machado de Assis', genre: 'Ficção', format: 'ebook' },
  { title: 'Iracema', author: 'José de Alencar', genre: 'Romance', format: 'ebook' },
  { title: 'Vidas Secas', author: 'Graciliano Ramos', genre: 'Ficção', format: 'audiobook' },
  { title: 'Macunaíma', author: 'Mário de Andrade', genre: 'Ficção', format: 'ebook' },
  { title: 'A Hora da Estrela', author: 'Clarice Lispector', genre: 'Ficção', format: 'ebook' },
  { title: 'Perto do Coração Selvagem', author: 'Clarice Lispector', genre: 'Ficção', format: 'audiobook' },
  { title: 'Os Lusíadas', author: 'Luís de Camões', genre: 'Poesia', format: 'ebook' },
  { title: 'Batman: Ano Um', author: 'Frank Miller', genre: 'HQ', format: 'comic' },
  { title: 'Spider-Man: Azul', author: 'Jeph Loeb', genre: 'HQ', format: 'comic' },
  { title: 'Attack on Titan Vol. 1', author: 'Hajime Isayama', genre: 'Mangá', format: 'comic' },
  { title: 'Death Note Vol. 1', author: 'Tsugumi Ohba', genre: 'Mangá', format: 'comic' },
  { title: 'Hábitos Atômicos', author: 'James Clear', genre: 'Autoajuda', format: 'ebook' },
  { title: 'As 48 Leis do Poder', author: 'Robert Greene', genre: 'Negócios', format: 'audiobook' },
  { title: 'O Morro dos Ventos Uivantes', author: 'Emily Brontë', genre: 'Romance', format: 'ebook' },
  { title: 'Cem Anos de Solidão', author: 'García Márquez', genre: 'Ficção', format: 'audiobook' },
];

const durations = {
  ebook: ['180 págs', '220 págs', '350 págs', '150 págs', '400 págs', '280 págs'],
  audiobook: ['2h 30min', '4h 20min', '6h 15min', '3h 45min', '8h 10min', '5h 00min'],
  comic: ['48 págs', '96 págs', '120 págs', '64 págs', '200 págs'],
};

const synopses: Record<string, string> = {
  'Dom Casmurro': 'Bentinho narra sua história de amor e ciúme com Capitu, questionando se foi ou não traído.',
  'O Poder do Hábito': 'Por que fazemos o que fazemos na vida e nos negócios. Um guia para transformar hábitos.',
  'Sapiens': 'Uma breve história da humanidade, desde os primeiros seres humanos até o presente.',
};

export const catalogItems: CatalogItem[] = titles.map((item, i) => ({
  id: `item-${i + 1}`,
  title: item.title,
  author: item.author,
  format: item.format,
  genre: item.genre,
  language: i % 5 === 0 ? 'EN' : 'PT-BR',
  duration: durations[item.format][i % durations[item.format].length],
  rating: Math.round((3.5 + Math.random() * 1.5) * 10) / 10,
  coverColor: colors[i % colors.length],
  synopsis: synopses[item.title] || `Uma obra envolvente de ${item.author} que combina narrativa cativante com temas profundos. Leitura essencial para fãs de ${item.genre.toLowerCase()}.`,
  progress: i < 5 ? Math.floor(Math.random() * 80) + 10 : undefined,
}));

export const genres: Genre[] = ['Ficção', 'Romance', 'Autoajuda', 'Negócios', 'Terror', 'Fantasia', 'Infantil', 'Biografia', 'Ciência', 'HQ', 'Mangá', 'Poesia', 'História'];
export const formats: ContentFormat[] = ['ebook', 'audiobook', 'comic'];

export const formatLabels: Record<ContentFormat, string> = {
  ebook: 'E-book',
  audiobook: 'Audiobook',
  comic: 'HQ / Comic',
};

export const formatIcons: Record<ContentFormat, string> = {
  ebook: '📖',
  audiobook: '🎧',
  comic: '💬',
};

export interface Plan {
  id: string;
  name: string;
  price: string;
  priceValue: number;
  features: string[];
  highlighted?: boolean;
  credits: number;
}

export const plans: Plan[] = [
  {
    id: 'basico',
    name: 'Básico',
    price: 'R$ 18,90',
    priceValue: 18.9,
    credits: 10,
    features: [
      '10 títulos por mês',
      'E-books e audiobooks',
      'Leitura online',
      'App mobile',
      'Suporte por email',
    ],
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 'R$ 26,90',
    priceValue: 26.9,
    credits: -1,
    highlighted: true,
    features: [
      'Títulos ilimitados',
      'E-books, audiobooks e comics',
      'Download offline (até 10)',
      '1 best-seller exclusivo/mês',
      'Suporte prioritário',
      'Sem anúncios',
    ],
  },
];

export const testimonials = [
  { name: 'Ana Silva', role: 'Assinante Premium', text: 'Substituí 3 apps de leitura pelo Lognet SVA. O catálogo é incrível e o player de audiobook é o melhor que já usei!', avatar: 'AS' },
  { name: 'Carlos Mendes', role: 'Assinante Básico', text: 'Perfeito pra quem é cliente Lognet Fibra. Leio no ônibus todo dia, funciona super bem offline.', avatar: 'CM' },
  { name: 'Marina Costa', role: 'Assinante Premium', text: 'Meus filhos adoram os comics e eu fico com os audiobooks. Melhor investimento da família!', avatar: 'MC' },
];
