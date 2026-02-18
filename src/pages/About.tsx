import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import logoImg from '@/assets/logoh.png';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft size={20} />
            <img src={logoImg} alt="Lognet SVA" className="h-12 w-auto" />
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-8 sm:py-12 max-w-4xl prose">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Sobre a LogBooks</h1>

        <section className="mb-6">
          <p>
            A LogBooks é a plataforma de leitura digital da Lognet, dedicada a oferecer acesso a ebooks, audiobooks
            e quadrinhos com uma experiência simples e moderna. Nosso objetivo é democratizar o acesso à cultura,
            conectando leitores a títulos nacionais e internacionais em um único lugar.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Nossa Missão</h2>
          <p>
            Levar conhecimento, entretenimento e educação por meio de experiências digitais de alta qualidade,
            com foco na usabilidade, acessibilidade e suporte ao leitor em todas as plataformas.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">O que oferecemos</h2>
          <ul className="list-disc list-inside text-muted-foreground">
            <li>Acesso a milhares de ebooks e audiobooks</li>
            <li>Modo offline para leitura e áudio</li>
            <li>Sistema de recomendações personalizado</li>
            <li>Suporte e atendimento ao cliente</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Contato</h2>
          <p className="text-muted-foreground">Para parcerias, imprensa ou suporte: contato@lognetbr.com.br</p>
        </section>

        <div className="mt-12 text-center">
          <Link to="/">
            <Button variant="outline" size="lg">
              <ArrowLeft size={18} className="mr-2" />
              Voltar ao Início
            </Button>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8 sm:py-12 mt-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link to="/">
              <img src={logoImg} alt="Lognet SVA" className="h-10 w-auto" />
            </Link>
            <p className="text-sm text-muted-foreground text-center">
              © 2026 <a href="https://lognetbr.com.br/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">BRLognet</a>. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
