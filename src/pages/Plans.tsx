import React, { useState } from 'react';
import AppLayout from '@/components/AppLayout';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { plans } from '@/data/mockData';
import { Star, Check, CreditCard, X } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Plans: React.FC = () => {
  const { user, updatePlan } = useAuth();
  const [showCheckout, setShowCheckout] = useState<string | null>(null);
  const [processing, setProcessing] = useState(false);

  const handleSubscribe = async (planId: string) => {
    setProcessing(true);
    await new Promise(r => setTimeout(r, 1500));
    updatePlan(planId as 'basico' | 'premium');
    setShowCheckout(null);
    setProcessing(false);
    toast({ title: '🎉 Assinatura ativada com sucesso!' });
  };

  const selectedPlan = plans.find(p => p.id === showCheckout);

  return (
    <AppLayout>
      <div className="max-w-3xl mx-auto animate-fade-in">
        <h1 className="text-2xl font-bold text-foreground text-center mb-2">Escolha seu Plano</h1>
        <p className="text-center text-muted-foreground mb-8">Comece com 7 dias grátis. Cancele quando quiser.</p>

        {user?.plan && user.plan !== 'none' && (
          <div className="bg-primary/5 rounded-2xl p-4 mb-8 text-center">
            <p className="text-sm text-primary font-medium">
              Plano atual: <strong>{user.plan === 'trial' ? 'Trial Grátis' : user.plan.charAt(0).toUpperCase() + user.plan.slice(1)}</strong>
              {user.planExpiresAt && ` • Ativo até ${new Date(user.planExpiresAt).toLocaleDateString('pt-BR')}`}
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {plans.map(plan => (
            <div
              key={plan.id}
              className={`relative rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 ${
                plan.highlighted ? 'gradient-bg text-primary-foreground shadow-glow' : 'bg-card border border-border shadow-card'
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-warning text-warning-foreground text-xs font-bold">
                  Mais Popular
                </span>
              )}
              <h3 className={`text-xl font-bold mb-1 ${plan.highlighted ? '' : 'text-card-foreground'}`}>{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-3xl font-extrabold">{plan.price}</span>
                <span className={`text-sm ${plan.highlighted ? 'opacity-80' : 'text-muted-foreground'}`}>/mês</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map(f => (
                  <li key={f} className={`flex items-start gap-2 text-sm ${plan.highlighted ? 'opacity-90' : 'text-muted-foreground'}`}>
                    <Check size={14} className="mt-0.5 flex-shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.highlighted ? 'secondary' : 'hero'}
                size="lg"
                className="w-full"
                onClick={() => setShowCheckout(plan.id)}
                disabled={user?.plan === plan.id}
              >
                {user?.plan === plan.id ? 'Plano Atual' : 'Assinar'}
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Checkout Modal */}
      {showCheckout && selectedPlan && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/30 backdrop-blur-sm p-4">
          <div className="bg-card rounded-2xl p-6 sm:p-8 w-full max-w-md shadow-card-hover animate-scale-in border border-border">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-card-foreground">Checkout - {selectedPlan.name}</h2>
              <button onClick={() => setShowCheckout(null)} className="text-muted-foreground hover:text-foreground"><X size={20} /></button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Nome no Cartão</label>
                <input defaultValue={user?.name} className="w-full h-11 px-4 rounded-xl bg-muted border-none text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Número do Cartão</label>
                <input placeholder="4242 4242 4242 4242" className="w-full h-11 px-4 rounded-xl bg-muted border-none text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Validade</label>
                  <input placeholder="12/28" className="w-full h-11 px-4 rounded-xl bg-muted border-none text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">CVV</label>
                  <input placeholder="123" className="w-full h-11 px-4 rounded-xl bg-muted border-none text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">CPF</label>
                <input placeholder="000.000.000-00" className="w-full h-11 px-4 rounded-xl bg-muted border-none text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-muted">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-muted-foreground">Plano {selectedPlan.name}</span>
                <span className="font-semibold text-foreground">{selectedPlan.price}/mês</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">7 dias grátis</span>
                <span className="font-semibold text-success">- {selectedPlan.price}</span>
              </div>
              <div className="border-t border-border mt-2 pt-2 flex justify-between text-sm">
                <span className="font-bold text-foreground">Total hoje</span>
                <span className="font-bold text-foreground">R$ 0,00</span>
              </div>
            </div>

            <Button variant="hero" size="lg" className="w-full mt-4" onClick={() => handleSubscribe(selectedPlan.id)} disabled={processing}>
              <CreditCard size={18} /> {processing ? 'Processando...' : `Pagar ${selectedPlan.price}`}
            </Button>
            <p className="text-[10px] text-muted-foreground text-center mt-3">Pagamento simulado. Nenhum valor real será cobrado.</p>
          </div>
        </div>
      )}
    </AppLayout>
  );
};

export default Plans;
