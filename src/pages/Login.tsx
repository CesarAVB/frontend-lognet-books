import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/useAuth';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';
import { Eye, EyeOff, Mail, BookOpen, Headphones, Smartphone, Star } from 'lucide-react';
import logo02 from '@/assets/logo02.jpg';

const Login: React.FC = () => {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);
  const [remember, setRemember] = useState(false);
  const { login: authLogin, error, clearError } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const saved = localStorage.getItem('lognet-credentials');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed?.login) setLogin(parsed.login);
        if (parsed?.senha) setSenha(parsed.senha);
        setRemember(true);
      }
    } catch {
      // ignore
    }
  }, []);

  // Limpar erro quando o usuário começa a digitar
  useEffect(() => {
    if (error) {
      clearError();
    }
  }, [login, senha, error, clearError]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!login || !senha) {
      toast({
        title: 'Preencha todos os campos',
        variant: 'destructive',
      });
      return;
    }

    setLoading(true);
    const ok = await authLogin(login, senha);
    setLoading(false);

    if (ok) {
      try {
        if (remember) {
          localStorage.setItem('lognet-credentials', JSON.stringify({ login, senha }));
        } else {
          localStorage.removeItem('lognet-credentials');
        }
      } catch {
        // ignore storage errors
      }
      toast({ title: 'Bem-vindo de volta!' });
      navigate('/');
    } else {
      // Erro será exibido no toast ou no formulário
      if (error) {
        toast({
          title: 'Erro ao fazer login',
          description: error,
          variant: 'destructive',
        });
      } else {
        toast({
          title: 'Erro ao fazer login',
          description: 'Verifique suas credenciais e tente novamente',
          variant: 'destructive',
        });
      }
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Left - features (visible on md+) */}
      <aside className="hidden md:flex relative flex-col justify-center p-12 bg-gradient-to-br from-amber-200 via-amber-300 to-orange-300 overflow-hidden">
        {/* decorative blobs */}
        <div aria-hidden className="absolute -top-20 -left-12 w-72 h-72 rounded-full bg-gradient-to-tr from-amber-200 via-amber-100 to-transparent blur-3xl opacity-30 pointer-events-none" />
        <div aria-hidden className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full bg-gradient-to-br from-amber-100/30 to-transparent blur-2xl opacity-20 pointer-events-none" />

        <div className="max-w-lg mx-auto text-center">
          <div className="flex items-center gap-4 justify-center mb-4">
            <img src={logo02} alt="Lognet" className="h-24 md:h-28 w-auto" />
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight tracking-tight">Descubra mais com a Lognet</h2>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4">
            <article className="group bg-white/95 border border-border rounded-2xl p-4 flex flex-col items-center gap-3 shadow-sm transform-gpu transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-amber-400 to-orange-300 flex items-center justify-center text-white shadow-md transform transition-transform group-hover:-translate-y-1">
                <BookOpen size={20} />
              </div>
              <div>
                <p className="text-base md:text-lg font-semibold text-foreground">Milhares de títulos</p>
                <p className="text-sm text-muted-foreground/90">E-books nacionais e internacionais.</p>
              </div>
            </article>

            <article className="group bg-white/95 border border-border rounded-2xl p-4 flex flex-col items-center gap-3 shadow-sm transform-gpu transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-amber-400 to-orange-300 flex items-center justify-center text-white shadow-md transform transition-transform group-hover:-translate-y-1">
                <Headphones size={20} />
              </div>
              <div>
                <p className="text-base md:text-lg font-semibold text-foreground">Audiobooks</p>
                <p className="text-sm text-muted-foreground/90">Narradores profissionais.</p>
              </div>
            </article>

            <article className="group bg-white/95 border border-border rounded-2xl p-4 flex flex-col items-center gap-3 shadow-sm transform-gpu transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-amber-400 to-orange-300 flex items-center justify-center text-white shadow-md transform transition-transform group-hover:-translate-y-1">
                <Smartphone size={20} />
              </div>
              <div>
                <p className="text-base md:text-lg font-semibold text-foreground">Modo offline</p>
                <p className="text-sm text-muted-foreground/90">Baixe conteúdos para acessar sem internet.</p>
              </div>
            </article>

            <article className="group bg-white/95 border border-border rounded-2xl p-4 flex flex-col items-center gap-3 shadow-sm transform-gpu transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-amber-400 to-orange-300 flex items-center justify-center text-white shadow-md transform transition-transform group-hover:-translate-y-1">
                <Star size={20} />
              </div>
              <div>
                <p className="text-base md:text-lg font-semibold text-foreground">Recomendações</p>
                <p className="text-sm text-muted-foreground/90">Sugestões personalizadas com base no seu gosto.</p>
              </div>
            </article>
          </div>
        </div>
      </aside>

      {/* Right - form */}
      <main className="flex items-center justify-center p-6 bg-background">
        <div className="w-full max-w-md animate-scale-in">
          <header className="text-center mb-6">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">Entrar na sua conta</h3>
            <p className="text-sm text-muted-foreground mt-2">Use seu login e senha para acessar.</p>
          </header>

          {/* mobile features (visible only on small screens) */}
          <div className="md:hidden mb-4 flex gap-3 overflow-x-auto">
            <div className="min-w-[11rem] bg-gradient-to-br from-amber-50 to-amber-100/30 border border-border rounded-xl p-3 flex items-center gap-3 shadow-sm">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-400 to-orange-300 flex items-center justify-center text-primary-foreground">
                <BookOpen size={18} />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Milhares de títulos</p>
                <p className="text-xs text-muted-foreground">E-books e audiobooks.</p>
              </div>
            </div>
            <div className="min-w-[11rem] bg-gradient-to-br from-amber-50 to-amber-100/30 border border-border rounded-xl p-3 flex items-center gap-3 shadow-sm">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-400 to-orange-300 flex items-center justify-center text-primary-foreground">
                <Headphones size={18} />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Audiobooks</p>
                <p className="text-xs text-muted-foreground">Ouça no caminho.</p>
              </div>
            </div>
          </div>

          <section className="bg-card/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg ring-1 ring-border">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Login</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                  <input
                    type="text"
                    value={login}
                    onChange={e => setLogin(e.target.value)}
                    placeholder="seu login"
                    className="w-full h-14 pl-10 pr-4 rounded-xl bg-muted border border-transparent text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:shadow-sm transition"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Senha</label>
                <div className="relative">
                  <input
                    type={showPw ? 'text' : 'password'}
                    value={senha}
                    onChange={e => setSenha(e.target.value)}
                    placeholder="••••••••"
                    className="w-full h-14 pl-4 pr-10 rounded-xl bg-muted border border-transparent text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:shadow-sm transition"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPw(!showPw)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition"
                  >
                    {showPw ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="inline-flex items-center gap-2 text-sm text-muted-foreground cursor-pointer">
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={e => setRemember(e.target.checked)}
                    className="h-4 w-4 rounded border border-border bg-background text-primary focus:ring-2 focus:ring-primary"
                  />
                  <span>Lembrar-me</span>
                </label>
                <button
                  type="button"
                  className="text-xs text-primary hover:underline"
                  onClick={() =>
                    toast({
                      title: 'Esqueceu a senha?',
                      description: 'Por favor, entre em contato com o atendimento do provedor: contato@lognetrj.com.br',
                    })
                  }
                >
                  Esqueceu a senha?
                </button>
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-2xl transform-gpu hover:-translate-y-0.5 hover:shadow-glow"
                disabled={loading}
              >
                {loading ? 'Entrando...' : 'Entrar'}
              </Button>

              {error && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-sm font-semibold text-red-800 mb-1">Erro ao fazer login:</p>
                  <p className="text-sm text-red-700 whitespace-pre-wrap">{error}</p>
                </div>
              )}
            </form>

            <p className="mt-4 text-xs text-muted-foreground text-center">
              Ao entrar, você concorda com nossos <a className="text-amber-500 underline" href="/privacy">termos</a>.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Login;