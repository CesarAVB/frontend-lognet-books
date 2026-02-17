import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useApp } from '@/contexts/AppContext';
import { Button } from '@/components/ui/button';
import {
  Home, BookOpen, Heart, Download, User, LogOut, Menu, X, Search, Crown, Library
} from 'lucide-react';
import logoImg from '@/assets/logoh.png';

const navItems = [
  { to: '/', icon: Home, label: 'Home' },
  { to: '/catalog', icon: Library, label: 'Catálogo' },
  { to: '/favorites', icon: Heart, label: 'Favoritos' },
  { to: '/downloads', icon: Download, label: 'Downloads' },
  { to: '/profile', icon: User, label: 'Perfil' },
];

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, logout } = useAuth();
  const { searchQuery, setSearchQuery } = useApp();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) navigate(`/catalog?q=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="flex h-full items-center gap-4 px-4">
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="lg:hidden text-foreground">
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <Link to="/" className="flex items-center gap-2 font-bold text-lg">
            <img src={logoImg} alt="Lognet SVA" className="h-6 w-auto" />
          </Link>

          <form onSubmit={handleSearch} className="hidden sm:flex flex-1 max-w-md mx-auto">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar livros, audiobooks, comics..."
                className="w-full h-10 pl-10 pr-4 rounded-xl bg-muted border-none text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </form>

          <div className="ml-auto flex items-center gap-2">
            {user?.plan === 'premium' && (
              <span className="hidden sm:flex items-center gap-1 text-xs font-semibold text-warning bg-warning/10 px-2 py-1 rounded-full">
                <Crown size={12} /> Premium
              </span>
            )}
            <Link to="/plans">
              <Button variant="ghost" size="sm">{user?.plan === 'none' || user?.plan === 'trial' ? 'Assinar' : 'Planos'}</Button>
            </Link>
            <button onClick={logout} className="text-muted-foreground hover:text-foreground transition-colors">
              <LogOut size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Sidebar overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 bg-foreground/20 backdrop-blur-sm lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={`fixed top-16 left-0 bottom-0 z-40 w-64 border-r border-border bg-sidebar transition-transform duration-300 lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <nav className="flex flex-col gap-1 p-4">
          {navItems.map(({ to, icon: Icon, label }) => {
            const active = location.pathname === to;
            return (
              <Link
                key={to}
                to={to}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  active
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'text-sidebar-foreground hover:bg-sidebar-accent'
                }`}
              >
                <Icon size={20} />
                {label}
              </Link>
            );
          })}
        </nav>

        {user && (
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-sidebar-border">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-sm font-bold text-primary-foreground">
                {user.name.charAt(0).toUpperCase()}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate text-sidebar-foreground">{user.name}</p>
                <p className="text-xs text-muted-foreground truncate">{user.email}</p>
              </div>
            </div>
          </div>
        )}
      </aside>

      {/* Main */}
      <main className="pt-16 lg:pl-64">
        <div className="p-4 md:p-6 lg:p-8">
          {children}
        </div>
      </main>
    </div>
  );
};

export default AppLayout;
