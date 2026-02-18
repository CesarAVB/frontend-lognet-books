import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BookOpen, Headphones, Smartphone, Wifi, Star, ChevronRight, Menu, X } from 'lucide-react';
import { testimonials } from '@/data/mockData';
import logoImg from '@/assets/logoh.png';
import Footer from '@/components/Footer';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const Landing: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const heroImages = [
    'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&h=800&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=800&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=1200&h=800&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=1200&h=800&fit=crop&crop=center',
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-amber-500 via-amber-400 to-orange-400 backdrop-blur-md border-b border-amber-600/50 text-white shadow-lg">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src={logoImg} alt="Lognet SVA" className="h-12 w-auto" />
            <span className="text-xl font-bold hidden sm:block">LogBooks</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-white/90 hover:text-white hover:scale-105 transition-all duration-200 font-medium">Início</Link>
            <Link to="/catalog" className="text-white/90 hover:text-white hover:scale-105 transition-all duration-200 font-medium">Catálogo</Link>
            <Link to="/plans" className="text-white/90 hover:text-white hover:scale-105 transition-all duration-200 font-medium">Planos</Link>
            <Link to="/about" className="text-white/90 hover:text-white hover:scale-105 transition-all duration-200 font-medium">Sobre</Link>
          </nav>
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-3">
              <Link to="/login">
                <Button variant="ghost" size="sm" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white hover:text-white transition-all duration-200">
                  Entrar
                </Button>
              </Link>
              <Link to="/register">
                <Button size="sm" className="bg-white text-amber-600 hover:bg-amber-50 transition-all duration-200 shadow-md">
                  Cadastrar
                </Button>
              </Link>
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gradient-to-r from-amber-500 via-amber-400 to-orange-400 border-t border-amber-600/50">
            <nav className="container mx-auto px-4 py-4 space-y-3">
              <Link to="/" className="block text-white/90 hover:text-white py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>Início</Link>
              <Link to="/catalog" className="block text-white/90 hover:text-white py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>Catálogo</Link>
              <Link to="/plans" className="block text-white/90 hover:text-white py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>Planos</Link>
              <Link to="/about" className="block text-white/90 hover:text-white py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>Sobre</Link>
              <div className="pt-3 border-t border-amber-600/50 flex flex-col gap-3">
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="ghost" size="sm" className="w-full bg-white/10 hover:bg-white/20 border border-white/20 text-white">
                    Entrar
                  </Button>
                </Link>
                <Link to="/register" onClick={() => setIsMenuOpen(false)}>
                  <Button size="sm" className="w-full bg-white text-amber-600 hover:bg-amber-50">
                    Cadastrar
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative pt-20 overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0">
          <Carousel className="w-full h-full">
            <CarouselContent>
              {heroImages.map((image, index) => (
                <CarouselItem key={index}>
                  <img src={image} alt={`Hero ${index + 1}`} className="w-full h-screen object-cover object-center" />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
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
              Leia e ouça histórias onde, como e quando quiser! Milhares de ebooks, audiobooks e comics na palma da sua mão. Leitura e áudio onde e quando quiser.
            </p>
            <div className="flex">
              <Link to="/catalog" className="mx-auto sm:mx-0"><Button variant="outline" size="xl">Explorar Catálogo <ChevronRight size={18} /></Button></Link>
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
