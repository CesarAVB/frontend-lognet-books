import React from 'react';
import AppLayout from '@/components/AppLayout';
import { useAuth } from '@/contexts/auth';
import { useApp } from '@/contexts/app';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Crown, BookOpen, Heart, Download, Settings, LogOut } from 'lucide-react';

const Profile: React.FC = () => {
  const { user, logout } = useAuth();
  const { favorites, downloads } = useApp();

  if (!user) return null;

  const planLabels: Record<string, string> = { none: 'Sem plano', trial: 'Trial (7 dias)', basico: 'Básico', premium: 'Premium' };

  return (
    <AppLayout>
      <div className="max-w-2xl mx-auto animate-fade-in">
        {/* Avatar section */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="w-20 h-20 rounded-full gradient-bg flex items-center justify-center text-2xl font-bold text-primary-foreground mb-3">
            {user.name.charAt(0).toUpperCase()}
          </div>
          <h1 className="text-xl font-bold text-foreground">{user.name}</h1>
          <p className="text-sm text-muted-foreground">{user.email}</p>
          <span className="mt-2 inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">
            <Crown size={12} /> {planLabels[user.plan]}
          </span>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          {[
            { icon: BookOpen, label: 'Créditos', value: user.credits === 999 ? '∞' : String(user.credits) },
            { icon: Heart, label: 'Favoritos', value: String(favorites.length) },
            { icon: Download, label: 'Downloads', value: String(downloads.length) },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="bg-card rounded-2xl p-4 text-center shadow-card border border-border">
              <Icon size={20} className="mx-auto text-primary mb-1" />
              <p className="text-lg font-bold text-card-foreground">{value}</p>
              <p className="text-xs text-muted-foreground">{label}</p>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="space-y-2">
          <Link to="/plans" className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:shadow-card transition-all">
            <Crown size={20} className="text-primary" />
            <div className="flex-1"><p className="text-sm font-medium text-card-foreground">Gerenciar Assinatura</p><p className="text-xs text-muted-foreground">Alterar plano, ver faturas</p></div>
          </Link>
          <div className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
            <Settings size={20} className="text-muted-foreground" />
            <div className="flex-1"><p className="text-sm font-medium text-card-foreground">Configurações</p><p className="text-xs text-muted-foreground">Idioma, notificações, cache</p></div>
          </div>
          <button onClick={logout} className="w-full flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:shadow-card transition-all text-left">
            <LogOut size={20} className="text-destructive" />
            <p className="text-sm font-medium text-destructive">Sair da conta</p>
          </button>
        </div>
      </div>
    </AppLayout>
  );
};

export default Profile;
