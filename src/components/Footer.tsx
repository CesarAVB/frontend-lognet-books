import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '@/assets/logoht.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <>
      {/* Detailed footer for small screens (hidden on large where sidebar is fixed) */}
      <footer className="block lg:hidden mt-12 bg-amber-500 border-t border-amber-600 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col gap-4">
              <Link to="/" className="flex items-center gap-3">
                <img src={logoImg} alt="Lognet" className="h-10 w-auto" />
              </Link>
              <p className="text-sm max-w-md">Plataforma de leitura digital da Lognet. Ebooks, audiobooks e quadrinhos com acesso fácil.</p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Navegação</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="text-amber-50 hover:text-white transition-colors">Início</Link></li>
                <li><Link to="/catalog" className="text-amber-50 hover:text-white transition-colors">Catálogo</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Saiba mais</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/terms" className="text-amber-50 hover:text-white transition-colors">Termos de uso</Link></li>
                <li><Link to="/privacy" className="text-amber-50 hover:text-white transition-colors">Política de privacidade</Link></li>

                <li><a href="mailto:contato@lognetrj.com.br" className="text-amber-50 hover:text-white transition-colors">Fale conosco</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Contato</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center">
                  <FontAwesomeIcon icon={["fas", "envelope"]} className="w-5 h-5 text-amber-50 mr-3" />
                  <a href="mailto:contato@lognetbr.com.br" className="text-amber-50 hover:text-white transition-colors">contato@lognetbr.com.br</a>
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon icon={["fab", "whatsapp"]} className="w-5 h-5 text-amber-50 mr-3" />
                  <a href="https://wa.me/5508000000192" target="_blank" rel="noreferrer" className="text-amber-50 hover:text-white transition-colors">0800 000 0192</a>
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon icon={["fas", "globe"]} className="w-5 h-5 text-amber-50 mr-3" />
                  <a href="https://lognetbr.com.br/" target="_blank" rel="noreferrer" className="text-amber-50 hover:text-white transition-colors">lognetbr.com.br</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-amber-600 py-4">
          <div className="container mx-auto px-4 text-sm text-amber-50 text-center">© {year} <a href="https://lognetbr.com.br/" target="_blank" rel="noreferrer" className="text-amber-50/95 hover:text-white font-semibold">BRLognet</a>. Todos os direitos reservados.</div>
        </div>
      </footer>

      {/* Simple footer for large screens where sidebar is fixed (avoid being covered) */}
      <footer className="hidden lg:flex items-center justify-center bg-amber-500 border-t border-amber-600 text-white py-4 lg:ml-64 lg:w-[calc(100%_-_16rem)]">
        <div className="px-4 text-sm text-amber-50 text-center">© {year} <a href="https://lognetbr.com.br/" target="_blank" rel="noreferrer" className="text-amber-50/95 hover:text-white font-semibold">BRLognet</a>. Todos os direitos reservados.</div>
      </footer>
    </>
  );
};

export default Footer;
