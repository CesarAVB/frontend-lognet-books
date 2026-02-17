import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BookOpen, Headphones, Smartphone, Wifi, Star, ChevronRight } from 'lucide-react';
import { plans, testimonials } from '@/data/mockData';
import heroBg from '@/assets/hero-bg.png';
import logoImg from '@/assets/logoh.png';
import Footer from '@/components/Footer';

const Landing: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur border-b border-border">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <Link to="/">
            <img src={logoImg} alt="Lognet SVA" className="h-12 w-auto" />
          </Link>
          <div className="flex items-center gap-3">
            <Link to="/login"><Button variant="ghost" size="sm">Entrar</Button></Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-16 overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
        </div>
        <div className="relative container mx-auto px-4 py-20 sm:py-32 md:py-40">
          <div className="max-w-xl animate-slide-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Wifi size={14} /> Exclusivo para clientes Lognet
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground leading-tight mb-4">
              Leitura, Áudio e HQs <span className="gradient-text">Ilimitados</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed">
              Milhares de e-books, audiobooks e comics na palma da sua mão. Comece seu trial grátis de 7 dias e descubra o prazer da leitura digital com a velocidade da fibra Lognet.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/register"><Button variant="hero" size="xl">Comece Grátis 7 Dias</Button></Link>
              <Link to="/catalog"><Button variant="outline" size="xl">Explorar Catálogo <ChevronRight size={18} /></Button></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 sm:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-12">
            Tudo em um só lugar
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: BookOpen, title: 'E-books', desc: 'Milhares de títulos nacionais e internacionais para ler a qualquer hora.' },
              { icon: Headphones, title: 'Audiobooks', desc: 'Ouça livros narrados por profissionais enquanto se exercita ou dirige.' },
              { icon: Smartphone, title: 'Comics & HQs', desc: 'Mangás, quadrinhos e graphic novels com visualização painel a painel.' },
              { icon: Wifi, title: 'Modo Offline', desc: 'Baixe conteúdos e leia sem internet. Perfeito para o metrô!' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4">
                  <Icon size={24} className="text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold text-card-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-4">Escolha seu plano</h2>
          <p className="text-center text-muted-foreground mb-12">Comece com 7 dias grátis. Cancele quando quiser.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {plans.map(plan => (
              <div
                key={plan.id}
                className={`relative rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 ${
                  plan.highlighted
                    ? 'gradient-bg text-primary-foreground shadow-glow'
                    : 'bg-card border border-border shadow-card'
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-warning text-warning-foreground text-xs font-bold">
                    Mais Popular
                  </span>
                )}
                <h3 className={`text-xl font-bold mb-1 ${plan.highlighted ? '' : 'text-card-foreground'}`}>{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-3xl font-extrabold">{plan.price}</span>
                  <span className={`text-sm ${plan.highlighted ? 'opacity-80' : 'text-muted-foreground'}`}>/mês</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map(f => (
                    <li key={f} className={`flex items-start gap-2 text-sm ${plan.highlighted ? 'opacity-90' : 'text-muted-foreground'}`}>
                      <Star size={14} className="mt-0.5 flex-shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <Link to="/register">
                  <Button
                    variant={plan.highlighted ? 'secondary' : 'hero'}
                    size="lg"
                    className="w-full"
                  >
                    Começar Trial Grátis
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-12">O que nossos leitores dizem</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {testimonials.map(t => (
              <div key={t.name} className="bg-card rounded-2xl p-6 shadow-card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-sm font-bold text-primary-foreground">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-card-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">"{t.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;
