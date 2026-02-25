import React, { useState, useCallback, useEffect, ReactNode } from 'react';
import { AuthContext, AuthContextType, User } from './auth';

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Restaurar usuário do localStorage ao montar
  useEffect(() => {
    const saved = localStorage.getItem('lognet-user');
    const token = localStorage.getItem('lognet-token');

    if (saved && token) {
      try {
        const parsedUser = JSON.parse(saved);
        setUser(parsedUser);
      } catch (e) {
        console.error('Erro ao restaurar usuário:', e);
        localStorage.removeItem('lognet-user');
        localStorage.removeItem('lognet-token');
      }
    }
    setIsLoading(false);
  }, []);

  const apiBase = (() => {
    const env = (import.meta as unknown as { env?: Record<string, string> }).env || {};
    if (env.VITE_API_URL) return env.VITE_API_URL.replace(/\/$/, '');
    try {
      const loc = window.location;
      return `${loc.protocol}//${loc.hostname}:8080`;
    } catch (e) {
      return 'http://localhost:8080';
    }
  })();

  const saveUser = useCallback((u: User) => {
    setUser(u);
    localStorage.setItem('lognet-user', JSON.stringify(u));
  }, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  const login = useCallback(
    async (login: string, senha: string): Promise<boolean> => {
      setIsLoading(true);
      setError(null);

      try {
        // Validações básicas
        if (!login || !senha) {
          throw new Error('Login e senha são obrigatórios');
        }

        if (login.length < 3) {
          throw new Error('Login deve ter no mínimo 3 caracteres');
        }

        if (senha.length < 6) {
          throw new Error('Senha deve ter no mínimo 6 caracteres');
        }

        console.log('🔐 Tentando login com:', { login, senhaLength: senha.length });

        // Chamada à API - usando login e senha (como esperado pela API)
        console.debug('[Auth] calling', `${apiBase}/api/v1/auth/login`);
        const response = await fetch(`${apiBase}/api/v1/auth/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ login, senha }),
        });

        console.log('📡 Resposta da API:', {
          status: response.status,
          statusText: response.statusText,
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          console.error('❌ Erro na resposta:', errorData);

          // Se houver detalhes de validação, mostre-os
          if (errorData.errors && Array.isArray(errorData.errors)) {
            const errorMessages = errorData.errors
              .map((e: { message?: string }) => e.message || String(e))
              .join(', ');
            throw new Error(errorMessages);
          }

          throw new Error(
            errorData.message ||
              errorData.msg ||
              `Erro ao fazer login (${response.status})`
          );
        }

        const data = await response.json();
        console.log('✅ Login bem-sucedido:', data);

        const token = data.token || data.accessToken || data.access_token;
        if (!token) {
          throw new Error('Token não recebido do servidor');
        }

        localStorage.setItem('lognet-token', token);

        // A resposta pode conter user ou ser o próprio usuário
        const serverUser = data.user || data.usuario || data;
        const u: User = {
          id: serverUser.id ? String(serverUser.id) : '1',
          name: serverUser.name || serverUser.nome || login,
          email: serverUser.email || serverUser.login || login,
          avatar: serverUser.avatar,
          plan: (serverUser.plan as User['plan']) || 'trial',
          planExpiresAt:
            serverUser.planExpiresAt ||
            new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
          credits: typeof serverUser.credits === 'number' ? serverUser.credits : 10,
        };

        saveUser(u);
        console.log('👤 Usuário salvo:', u);

        // webhook disabled

        return true;
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Falha ao fazer login';
        setError(errorMessage);
        console.error('❌ Login failed:', errorMessage, err);
        return false;
      } finally {
        setIsLoading(false);
      }
    },
    [saveUser]
  );

  const register = useCallback(
    async (name: string, email: string, password: string): Promise<boolean> => {
      setIsLoading(true);
      setError(null);

      try {
        // Validações básicas
        if (!name || !email || !password) {
          throw new Error('Nome, email e senha são obrigatórios');
        }

        if (name.length < 3) {
          throw new Error('Nome deve ter no mínimo 3 caracteres');
        }

        if (!email.includes('@')) {
          throw new Error('Email inválido');
        }

        if (password.length < 6) {
          throw new Error('Senha deve ter no mínimo 6 caracteres');
        }

        console.log('📝 Tentando registro com:', { name, email, passwordLength: password.length });

        // Tenta registrar via API
        try {
          const response = await fetch(`${apiBase}/api/v1/auth/register`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password }),
          });

          console.log('📡 Resposta do registro:', {
            status: response.status,
            statusText: response.statusText,
          });

          if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            console.error('❌ Erro no registro:', errorData);

            // Se houver detalhes de validação, mostre-os
            if (errorData.errors && Array.isArray(errorData.errors)) {
              const errorMessages = errorData.errors
                .map((e: { message?: string }) => e.message || String(e))
                .join(', ');
              throw new Error(errorMessages);
            }

            throw new Error(
              errorData.message ||
                errorData.msg ||
                `Erro ao registrar (${response.status})`
            );
          }

          const data = await response.json();
          console.log('✅ Registro bem-sucedido:', data);

          const token = data.token || data.accessToken || data.access_token;
          if (token) {
            localStorage.setItem('lognet-token', token);
          }

          const serverUser = data.user || data.usuario || data;
          const u: User = {
            id: serverUser.id ? String(serverUser.id) : '1',
            name: serverUser.name || serverUser.nome || name,
            email: serverUser.email || email,
            avatar: serverUser.avatar,
            plan: (serverUser.plan as User['plan']) || 'trial',
            planExpiresAt:
              serverUser.planExpiresAt ||
              new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
            credits: typeof serverUser.credits === 'number' ? serverUser.credits : 10,
          };

          saveUser(u);
          console.log('👤 Usuário registrado:', u);

          // webhook disabled

          return true;
        } catch (apiErr) {
          // Se API falhar, cria usuário localmente como fallback
          console.warn('API registration failed, using local fallback', apiErr);
          const u: User = {
            id: Math.random().toString(36).substring(2, 9),
            name,
            email,
            plan: 'trial',
            planExpiresAt: new Date(
              Date.now() + 7 * 24 * 60 * 60 * 1000
            ).toISOString(),
            credits: 10,
          };
          saveUser(u);
          return true;
        }
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Falha ao registrar';
        setError(errorMessage);
        console.error('❌ Register failed:', errorMessage, err);
        return false;
      } finally {
        setIsLoading(false);
      }
    },
    [saveUser]
  );

  const logout = useCallback(() => {
    setUser(null);
    setError(null);
    localStorage.removeItem('lognet-user');
    localStorage.removeItem('lognet-token');
    console.log('🚪 Logout realizado');
  }, []);

  const updatePlan = useCallback(
    (plan: User['plan']) => {
      if (user) {
        const updated: User = {
          ...user,
          plan,
          credits: plan === 'premium' ? 999 : 10,
          planExpiresAt: new Date(
            Date.now() + 30 * 24 * 60 * 60 * 1000
          ).toISOString(),
        };
        saveUser(updated);
        console.log('📊 Plano atualizado para:', plan);
      }
    },
    [user, saveUser]
  );

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    isLoading,
    error,
    login,
    register,
    logout,
    updatePlan,
    clearError,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};