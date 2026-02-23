import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  plan: 'none' | 'basico' | 'premium' | 'trial';
  planExpiresAt?: string;
  credits: number;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  updatePlan: (plan: User['plan']) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem('lognet-user');
    if (saved) {
      setUser(JSON.parse(saved));
    }
    setIsLoading(false);
  }, []);

  const saveUser = (u: User) => {
    setUser(u);
    localStorage.setItem('lognet-user', JSON.stringify(u));
  };

  const login = useCallback(async (email: string, _password: string): Promise<boolean> => {
    setIsLoading(true);
    await new Promise(r => setTimeout(r, 500));
    const u: User = {
      id: '1',
      name: email.includes('@') ? email.split('@')[0] : email,
      email,
      plan: 'trial',
      planExpiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
      credits: 10,
    };

    // salva usuário localmente
    saveUser(u);

    // chama webhook (não bloqueia o login em caso de erro)
    try {
      const webhook = (import.meta as any).env?.VITE_WEBHOOK_URL ?? 'https://n8nwebhook.redelognet.com.br/webhook/vudyr827hohm43hjvb39tagenwcpxpbg';
      if (webhook) {
        await fetch(webhook, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ event: 'login', email, timestamp: new Date().toISOString() }),
        });
      }
    } catch (e) {
      // não interrompe o fluxo de login — apenas loga no console
      // eslint-disable-next-line no-console
      console.warn('Webhook call failed', e);
    }

    setIsLoading(false);
    return true;
  }, []);

  const register = useCallback(async (name: string, email: string, _password: string): Promise<boolean> => {
    setIsLoading(true);
    await new Promise(r => setTimeout(r, 800));
    const u: User = {
      id: '1',
      name,
      email,
      plan: 'trial',
      planExpiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
      credits: 10,
    };
    saveUser(u);
    setIsLoading(false);
    return true;
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem('lognet-user');
  }, []);

  const updatePlan = useCallback((plan: User['plan']) => {
    if (user) {
      const updated = { ...user, plan, credits: plan === 'premium' ? 999 : 10 };
      saveUser(updated);
    }
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, isLoading, login, register, logout, updatePlan }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be inside AuthProvider');
  return ctx;
};
