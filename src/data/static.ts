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
