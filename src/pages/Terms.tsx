import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import logoImg from '@/assets/logoh.png';

const Terms: React.FC = () => {
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

      <main className="container mx-auto px-4 py-8 sm:py-12 max-w-4xl prose">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Termos e Condições de Uso – LogBooks</h1>

        <section>
          <h2 className="text-xl font-semibold mb-2">INTRODUÇÃO</h2>
          <p>
            O LogBooks é uma plataforma detida de responsabilidade da LogBooks Editora, Produtos e Serviços Digitais Ltda, empresa com sede no Brasil e inscrita no CNPJ sob o número 16.881.623/0001-50 (“LogBooks”).
          </p>
          <p>
            O LogBooks (“Plataforma”) serve como meio para que pessoas interessadas tenham acesso garantido e contínuo às versões digitais completas de várias obras literárias.
          </p>
          <p>
            Por meio destes Termos e Condições Gerais de Uso (“Termos”), o LogBooks apresenta aos usuários em geral as condições essenciais para o uso dos serviços oferecidos na Plataforma.
          </p>
          <p className="font-semibold">AO CLICAR EM “EU ACEITO”, VOCÊ CONCORDA COM OS PRESENTES TERMOS E CONDIÇÕES DE USO. AS DISPOSIÇÕES AQUI PRESENTES REGULAMENTARÃO A UTILIZAÇÃO DA PLATAFORMA, PORTANTO, LEIA-OS COM ATENÇÃO!</p>
          <p>
            Ao aceitar os Termos, você está confirmando que entende e concorda em obedecer a seus termos e é o único responsável por entender e cumprir todas as leis, normas, regulamentos e requisitos da jurisdição onde reside, que possam ser aplicáveis ao seu uso da plataforma.
          </p>
          <p>
            Salve ou imprima uma cópia dos termos para seu controle. Se você não entender qualquer uma das disposições dos termos, entre em contato conosco antes de usar a Plataforma.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-6 mb-2">CADASTRO</h2>
          <p>
            Por meio da plataforma os usuários, observados determinados requisitos abaixo especificados, terão acesso garantido e contínuo às seguintes obras digitais: Obras literárias (E-books) e/ou obras literárias em formato de áudio (Audiobooks). "Obras Digitais" significam E-books e Audiobooks, em conjunto ou individualmente.
          </p>
          <p>
            Os interessados poderão se cadastrar na plataforma através de nosso website ou de nosso aplicativo e, uma vez cadastrados, poderão acessar as obras digitais a que tiverem acesso por meio de nosso aplicativo, disponível para dispositivos Android (a partir da versão 8.0) e IOS (a partir da versão 15.0).
          </p>
          <p>
            Para fins de utilização da plataforma, os usuários deverão criar uma conta na plataforma LogBooks informando, para fins de cadastro e verificação de benefícios, seus dados pessoais (nome, CPF, e-mail, telefone).
          </p>
          <p>
            Os usuários que efetuarem cadastro vinculado a algum parceiro do LogBooks só terão o cadastro aprovado caso estejam em dia com suas obrigações perante o respectivo parceiro.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-6 mb-2">Planos de Contratação</h2>
          <p>
            O Cliente Avulso poderá se beneficiar da utilização do LogBooks e acesso às obras digitais mediante a contratação de um Plano de utilização diretamente com o LogBooks.
          </p>
          <p>
            Para contratação de plano de utilização, o cliente avulso deverá acessar a loja de aplicativos correspondente ao sistema operacional de seu dispositivo e realizar pela própria loja de aplicativos a assinatura mensal, conforme condições disponíveis no momento da contratação.
          </p>
          <p>
            Esses são os planos de contratação atualmente disponíveis para contratação (exemplo):
          </p>
          <ul>
            <li>E-books + Audiobooks R$ 39</li>
            <li>E-books R$ 23,90</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-6 mb-2">OBRAS DIGITAIS DO CONTEÚDO</h2>
          <p>
            As Obras Digitais serão mensalmente disponibilizadas a todos os usuários conforme plano de utilização associado à sua conta. Os títulos poderão variar conforme contratos com editoras e distribuidoras.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-6 mb-2">USO DAS OBRAS DIGITAIS</h2>
          <p>
            As obras digitais serão disponibilizadas e utilizadas apenas para fins pessoais e domésticos. O LogBooks garante aos usuários o direito exclusivo de visualizar e utilizar as obras digitais de forma irrestrita, a qualquer momento após o download, porém apenas para uso pessoal e não comercial.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-6 mb-2">TRANSFERÊNCIA DE OBRAS DIGITAIS</h2>
          <p>
            Os usuários poderão exercer o direito de transferência de direitos das obras adquiridas através do LogBooks a outros Usuários cadastrados, observadas as regras descritas nos Termos.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-6 mb-2">USO DA PLATAFORMA</h2>
          <p>
            O acesso à Plataforma é condicionado a utilização de equipamentos e softwares compatíveis. A responsabilidade pela verificação da compatibilidade técnica do aparelho é exclusiva dos usuários.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-6 mb-2">EXCLUSÃO DE RESPONSABILIDADE</h2>
          <p>
            O uso da plataforma por menores de idade não é permitido; o LogBooks não se responsabiliza por interrupções fora de seu controle; e não oferece garantias além das previstas explicitamente nestes Termos.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-6 mb-2">CANCELAMENTO</h2>
          <p>
            O LogBooks se reserva o direito de interromper o serviço, cancelar contas e manter acesso às obras já disponibilizadas conforme descrito nos Termos.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-6 mb-2">PROPRIEDADE INTELECTUAL</h2>
          <p>
            Todos os conteúdos disponibilizados na plataforma são protegidos pelas leis de Propriedade Intelectual aplicáveis. É proibida a reprodução não autorizada das obras digitais.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-6 mb-2">DISPOSIÇÕES GERAIS</h2>
          <p>
            O presente Termo poderá ser alterado a qualquer momento a critério exclusivo do LogBooks. As condições destes Termos serão regidas e interpretadas de acordo com as leis da República Federativa do Brasil.
          </p>
        </section>

        <section className="mt-8">
          <p className="font-semibold">Quer falar com a gente?</p>
          <p className="text-sm">contato@lognetrj.com.br</p>
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
              © 2026 <a href="https://lognetbr.com.br/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">BRLognet</a>. Todos os direitos reservados. | <Link to="/privacy" className="hover:text-primary transition-colors">Privacidade</Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Privacy;
