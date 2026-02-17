import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '@/assets/logoh.png';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-12 bg-background border-t border-border text-muted-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-3">
              <img src={logoImg} alt="Lognet" className="h-10 w-auto" />
            </Link>
            <p className="text-sm max-w-md">Plataforma de leitura digital da Lognet — e-books, audiobooks e quadrinhos com acesso fácil e downloads offline.</p>
          </div>

          <div>
            <h4 className="text-foreground font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-foreground transition-colors">Início</Link></li>
              <li><Link to="/catalog" className="hover:text-foreground transition-colors">Catálogo</Link></li>
              <li><Link to="/plans" className="hover:text-foreground transition-colors">Planos</Link></li>
              <li><Link to="/downloads" className="hover:text-foreground transition-colors">Downloads</Link></li>
              <li><Link to="/privacy" className="hover:text-foreground transition-colors">Privacidade</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="mailto:contato@lognetbr.com.br" className="hover:text-foreground transition-colors">contato@lognetbr.com.br</a></li>
              <li><a href="tel:+5521976873801" className="hover:text-foreground transition-colors">(21) 97687-3801</a></li>
              <li><a href="https://lognetbr.com.br/" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">Lognet</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-border py-4">
        <div className="container mx-auto px-4 text-sm text-muted-foreground">© {year} BRLognet. Todos os direitos reservados.</div>
      </div>
    </footer>
  );
};

export default Footer;
