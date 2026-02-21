# LogBooks — Plataforma de Leitura Digital

Plataforma de leitura digital da **Lognet**, que oferece acesso a ebooks, audiobooks e quadrinhos (HQs/mangás) em uma experiência moderna e responsiva.

<img width="1898" height="870" alt="image" src="https://github.com/user-attachments/assets/12940e56-b98c-43f2-a6e2-47241b8032ae" />

---

## Tecnologias

| Categoria | Tecnologia |
|---|---|
| Framework | React 18 + TypeScript |
| Build | Vite 5 |
| Estilização | Tailwind CSS 3 |
| Componentes UI | Radix UI + shadcn/ui |
| Roteamento | React Router DOM v6 |
| Formulários | React Hook Form + Zod |
| Estado/Cache | TanStack React Query |
| Ícones | Lucide React + Font Awesome |
| Carrossel | Embla Carousel |
| Animações | Framer Motion |
| Notificações | Sonner |
| Testes | Vitest + Testing Library |

---

## Funcionalidades

- **Autenticação** — Cadastro, login e logout com persistência via `localStorage`
- **Catálogo** — Listagem com filtros por gênero, formato e busca textual
- **Player** — Leitor de ebooks/comics com controle de fonte e modo escuro; player de audiobooks com velocidade ajustável e progresso
- **Favoritos** — Adicionar/remover títulos favoritos
- **Downloads** — Gerenciamento de conteúdos disponíveis offline
- **Planos** — Tela de assinatura com fluxo de checkout simulado (Básico e Premium)
- **Perfil** — Exibição de dados do usuário, estatísticas e gerenciamento de conta
- **Páginas institucionais** — Sobre, Política de Privacidade e Termos de Uso
- **Landing Page** — Página pública com carrossel de imagens e destaques de funcionalidades

---

## Estrutura do Projeto

```
src/
├── assets/          # Imagens e logotipos
├── components/      # Componentes reutilizáveis
│   ├── ui/          # Componentes base (shadcn/ui)
│   ├── AppLayout    # Layout principal autenticado (header + sidebar)
│   ├── BookCard     # Card de item do catálogo
│   ├── CategorySlider # Slider horizontal de livros por categoria
│   ├── Footer       # Rodapé global
│   └── NavLink      # Wrapper de NavLink com suporte a classes ativas
├── contexts/
│   ├── AuthContext  # Autenticação do usuário
│   └── AppContext   # Estado global (favoritos, downloads, progresso)
├── data/
│   └── mockData     # Dados simulados: catálogo, planos, depoimentos
├── hooks/           # Hooks utilitários (useToast, useIsMobile)
├── lib/             # Utilitários (cn)
├── pages/           # Páginas da aplicação
└── index.css        # Tokens de design (CSS custom properties)
```

---

## Instalação e Execução

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Passos

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

---

## Scripts Disponíveis

| Script | Descrição |
|---|---|
| `npm run dev` | Servidor de desenvolvimento (Vite) |
| `npm run build` | Build de produção |
| `npm run build:dev` | Build em modo development |
| `npm run preview` | Preview do build local |
| `npm run lint` | Lint com ESLint |
| `npm run test` | Executa testes (Vitest) |
| `npm run test:watch` | Testes em modo watch |

---

## Temas e Estilização

O projeto utiliza CSS custom properties definidas em `src/index.css` para suporte a tema claro e escuro. As cores primárias seguem a identidade visual da Lognet (paleta âmbar/laranja).

Principais tokens:

```css
--primary: 23 88% 51%;       /* Âmbar principal */
--accent: 263 54% 51%;       /* Roxo para destaques */
--gradient-primary: ...      /* Gradiente âmbar */
```

---

## Autenticação e Estado

A autenticação é simulada (sem backend real). Qualquer email/senha válidos criam uma sessão com plano `trial` de 7 dias. Os dados são persistidos no `localStorage` com as chaves:

| Chave | Conteúdo |
|---|---|
| `lognet-user` | Dados do usuário autenticado |
| `lognet-favs` | IDs dos favoritos |
| `lognet-downloads` | IDs dos downloads |
| `lognet-progress` | Progresso de leitura por ID |

---

## Versão

Versão atual: **1.7.0** — Veja o [CHANGELOG](./CHANGELOG.md) para o histórico completo de alterações.

---

## Contato

- **Email:** contato@lognetbr.com.br  
- **Site:** [lognetbr.com.br](https://lognetbr.com.br)  
- **WhatsApp:** 0800 000 0192
