import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import logoImg from '@/assets/logoh.png';

const Privacy: React.FC = () => {
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
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Política de Privacidade</h1>
        <h2 className="text-lg font-semibold mb-6">POLÍTICA DE PRIVACIDADE – LogBooks</h2>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-2">1. INTRODUÇÃO</h3>
          <p>
            A presente Política de Privacidade tem por objetivo esclarecer e informar, de forma transparente, como a “LogBooks Editora, Produtos e Serviços Digitais Ltda.” (“Nós” ou “LogBooks”), trata os dados pessoais das pessoas com quem interage como Usuários (a partir de agora também denominados “Você”) e como tais dados são coletados, utilizados, armazenados, tratados e protegidos no contexto da LogBooks (“PLATAFORMA”).
          </p>
          <p>
            Para os fins desta Política de Privacidade, a LogBooks será considerada a Controladora de Dados. Os detalhes de contato são fornecidos ao final desta Política.
          </p>
          <p>
            Ao se cadastrar ou usar, de qualquer forma, a PLATAFORMA ou o website da LogBooks, bem como ao clicar “EU ACEITO”, você concorda com esta Política de Privacidade e com todos os seus termos e condições.
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-2">2. FINALIDADES DA POLÍTICA DE PRIVACIDADE</h3>
          <p>
            Esta seção explica as finalidades do tratamento de dados: transparência sobre motivos da coleta, operações de tratamento, direitos do usuário e bases legais aplicáveis.
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-2">3. DADOS PESSOAIS</h3>
          <p className="mb-2">Dados fornecidos pelo Usuário (exemplos):</p>
          <ul className="list-disc list-inside mb-4 text-muted-foreground">
            <li>Nome</li>
            <li>CPF</li>
            <li>E-mail</li>
            <li>Telefone celular</li>
            <li>Data de nascimento</li>
          </ul>
          <p className="mb-2">Dados adicionais que podem ser fornecidos:</p>
          <ul className="list-disc list-inside mb-4 text-muted-foreground">
            <li>RG</li>
            <li>Endereço</li>
            <li>Fotografia (selfie)</li>
            <li>Digital</li>
            <li>Placa de veículo</li>
          </ul>
          <p>
            A partir do uso da PLATAFORMA também são gerados dados técnicos e estatísticos (ex.: uso, consumo, avaliações) que permitem aprimorar recomendações e serviços.
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-2">4. COLETA DE DADOS PESSOAIS</h3>
          <p>
            Os dados são, em regra, fornecidos pelo próprio Usuário no cadastro ou durante o uso da PLATAFORMA. Também poderemos tratar dados de forma agregada e anônima para fins estatísticos.
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-2">5. OPERAÇÕES DE TRATAMENTO E FINALIDADES</h3>
          <p className="mb-2">Principais finalidades e operações de tratamento incluem:</p>
          <ul className="list-disc list-inside mb-4 text-muted-foreground">
            <li>Cadastro e verificação cadastral (Base legal: execução de contrato)</li>
            <li>Atendimento e suporte ao usuário (Base legal: execução de contrato / legítimo interesse)</li>
            <li>Análise de avaliações e aprimoramento de produtos (Base legal: legítimo interesse / consentimento)</li>
            <li>Marketing e comunicações (Base legal: consentimento / legítimo interesse)</li>
            <li>Operacionalização da Plataforma (relatórios, transferências de direitos, etc.)</li>
          </ul>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-2">6. COMPARTILHAMENTO DE DADOS COM TERCEIROS</h3>
          <p>
            Compartilhamos dados com prestadores de serviços (hospedagem, analytics, pagamentos), autoridades competentes quando exigido por lei, e parceiros quando necessário para a prestação do serviço, sempre observando obrigações contratuais de proteção de dados.
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-2">7. TRANSFERÊNCIA INTERNACIONAL DE DADOS</h3>
          <p>
            Poderemos transferir dados para provedores localizados em outros países quando necessário — sempre observando as exigências legais e medidas contratuais de proteção de dados.
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-2">8. SEGURANÇA</h3>
          <p>
            Adotamos medidas técnicas e administrativas para proteger seus dados, contudo nenhum sistema é totalmente invulnerável. Em caso de incidente de segurança, notificaremos os titulares e autoridades conforme a legislação aplicável.
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-2">9. COOKIES</h3>
          <p>
            Utilizamos cookies de sessão e persistentes para melhorar a experiência do usuário; você pode ajustar as preferências do seu navegador para bloquear cookies, tendo ciência de que algumas funcionalidades podem ser impactadas.
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-2">10. QUALIDADE, RETENÇÃO E DIREITOS</h3>
          <p>
            Mantemos seus dados corretos e atualizados pelo tempo necessário à finalidade; você tem direitos de acesso, retificação, eliminação, oposição, portabilidade e reclamação junto à ANPD.
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-2">11. INFORMAÇÕES DE CONTATO</h3>
          <p>Em caso de dúvidas ou solicitações relativas a dados pessoais:</p>
          <ul className="list-disc list-inside text-muted-foreground">
            <li>E-mail: contato@lognetrj.com.br</li>
            <li>Telefone: (11) 5645-1100</li>
            <li>Endereço: Rua Cerro Corá, 2175 - Vila Romana, São Paulo - SP, 05061-450</li>
            <li>Encarregado de Dados (DPO): Diego Orsatti — dpo@lognetrj.com.br</li>
          </ul>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-2">12. ATUALIZAÇÕES E ALTERAÇÕES</h3>
          <p>
            Esta Política poderá ser atualizada periodicamente; a continuidade no uso da PLATAFORMA após alterações implica aceitação das novas condições.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2">13. LEI APLICÁVEL</h3>
          <p>Estas disposições são regidas pelas leis da República Federativa do Brasil.</p>
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