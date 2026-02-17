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
            <img src={logoImg} alt="Lognet SVA" className="h-8 w-auto" />
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-8 sm:py-12 max-w-4xl">
        <div className="prose max-w-none">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
            Política de Privacidade
          </h1>

          {/* LGPD Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Lei Geral de Proteção de Dados Pessoais (LGPD)
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A Lei Geral de Proteção de Dados Pessoais (LGPD), Lei n° 13.709/2018, foi promulgada para proteger os direitos fundamentais de liberdade e de privacidade e a livre formação da personalidade de cada indivíduo. A Lei fala sobre o tratamento de dados pessoais, dispostos em meio físico ou digital, feito por pessoa física ou jurídica de direito público ou privado, englobando um amplo conjunto de operações que podem ocorrer em meios manuais ou digitais.
            </p>
            <p className="text-sm text-muted-foreground italic">
              Informação provida do site gov.br na página Ministério da Cidadania.
            </p>
          </section>

          {/* Privacy Policy */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Política de Privacidade
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A sua privacidade é importante para nós. É política da LOGNET respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no nosso site.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contacto connosco.
            </p>
          </section>

          {/* Google AdSense */}
          <section className="mb-8">
            <p className="text-muted-foreground leading-relaxed mb-4">
              O serviço Google AdSense que usamos para veicular publicidade usa um cookie DoubleClick para veicular anúncios mais relevantes em toda a Web e limitar o número de vezes que um determinado anúncio é exibido para você.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Para mais informações sobre o Google AdSense, consulte as FAQs oficiais sobre privacidade do Google AdSense.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Utilizamos anúncios para compensar os custos de funcionamento deste site e fornecer financiamento para futuros desenvolvimentos. Os cookies de publicidade comportamental usados por este site foram projetados para garantir que você forneça os anúncios mais relevantes sempre que possível, rastreando anonimamente seus interesses e apresentando coisas semelhantes que possam ser do seu interesse.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Vários parceiros anunciam em nosso nome e os cookies de rastreamento de afiliados simplesmente nos permitem ver se nossos clientes acessaram o site através de um dos sites de nossos parceiros, para que possamos creditá-los adequadamente e, quando aplicável, permitir que nossos parceiros afiliados ofereçam qualquer promoção que pode fornecê-lo para fazer uma compra.
            </p>
          </section>

          {/* User Commitment */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Compromisso do Usuário
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              O usuário se compromete a fazer uso adequado dos conteúdos e da informação que a LOGNET oferece no site e com caráter enunciativo, mas não limitativo:
            </p>
            <ul className="list-disc list-inside text-muted-foreground leading-relaxed mb-4 space-y-2">
              <li>A) Não se envolver em atividades que sejam ilegais ou contrárias à boa fé a à ordem pública;</li>
              <li>B) Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, ERROR ou azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;</li>
              <li>C) Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) da LOGNET, de seus fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas de hardware ou software que sejam capazes de causar danos anteriormente mencionados.</li>
            </ul>
          </section>

          {/* More Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Mais informações
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Esperemos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos que você usa em nosso site.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Esta política é efetiva a partir de <strong>21 de Novembro de 2022</strong>.
            </p>
          </section>

          {/* Terms and Conditions */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              Termos e Condições
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">1. Termos</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ao acessar ao site LOGNET, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">2. Uso de Licença</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site LOGNET , apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode:
                </p>
                <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-1">
                  <li>modificar ou copiar os materiais;</li>
                  <li>usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial);</li>
                  <li>tentar descompilar ou fazer engenharia reversa de qualquer software contido no site LOGNET;</li>
                  <li>remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou</li>
                  <li>transferir os materiais para outra pessoa ou 'espelhe' os materiais em qualquer outro servidor.</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  Esta licença será automaticamente rescindida se você violar alguma dessas restrições e poderá ser rescindida por LOGNET a qualquer momento. Ao encerrar a visualização desses materiais ou após o término desta licença, você deve apagar todos os materiais baixados em sua posse, seja em formato eletrônico ou impresso.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">3. Isenção de responsabilidade</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Os materiais no site da LOGNET são fornecidos 'como estão'. LOGNET não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Além disso, a LOGNET não garante ou faz qualquer representação relativa à precisão, aos resultados prováveis ou à confiabilidade do uso dos materiais em seu site ou de outra forma relacionado a esses materiais ou em sites vinculados a este site.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">4. Limitações</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Em nenhum caso a LOGNET ou seus fornecedores serão responsáveis por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em LOGNET, mesmo que LOGNET ou um representante autorizado da LOGNET tenha sido notificado oralmente ou por escrito da possibilidade de tais danos. Como algumas jurisdições não permitem limitações em garantias implícitas, ou limitações de responsabilidade por danos consequentes ou incidentais, essas limitações podem não se aplicar a você.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">5. Precisão dos materiais</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Os materiais exibidos no site da LOGNET podem incluir erros técnicos, tipográficos ou fotográficos. LOGNET não garante que qualquer material em seu site seja preciso, completo ou atual. LOGNET pode fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio. No entanto, LOGNET não se compromete a atualizar os materiais.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">6. Links</h3>
                <p className="text-muted-foreground leading-relaxed">
                  O LOGNET não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por LOGNET do site. O uso de qualquer site vinculado é por conta e risco do usuário.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Modificações</h3>
                <p className="text-muted-foreground leading-relaxed">
                  O LOGNET pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Lei aplicável</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Estes termos e condições são regidos e interpretados de acordo com as leis da LOGNET e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou localidade.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Back to Home */}
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
              <img src={logoImg} alt="Lognet SVA" className="h-6 w-auto" />
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