
import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface ExitIntentPopupProps {
  onClose: () => void;
}

export const ExitIntentPopup = ({ onClose }: ExitIntentPopupProps) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log('Email captured:', email);
    alert('Cupom enviado! Verifique seu e-mail.');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose}></div>
      
      {/* Popup */}
      <div className="relative max-w-md w-full mx-4 glass-effect rounded-2xl p-8 border border-red-500/50">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          ✕
        </button>

        {/* Content */}
        <div className="text-center">
          <div className="text-4xl mb-4">🚨</div>
          <h3 className="text-2xl font-bold text-red-400 mb-4">
            Espera! Não vá embora!
          </h3>
          <p className="text-gray-300 mb-6">
            Antes de sair, que tal garantir um <strong className="text-secondary">cupom de R$ 200</strong> 
            adicional de desconto no IAC?
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Seu melhor e-mail"
              className="w-full bg-white/10 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-secondary"
              required
            />
            
            <Button
              type="submit"
              className="w-full bg-gradient-secondary text-primary hover:opacity-90 transition-opacity font-bold"
            >
              🎁 GARANTIR CUPOM DE R$ 200
            </Button>
          </form>

          <p className="text-xs text-gray-400 mt-4">
            * Cupom válido por 24h. Não pode ser combinado com outras ofertas.
          </p>
        </div>

        {/* Urgency */}
        <div className="mt-6 bg-red-500/20 border border-red-500/50 rounded-lg p-3 text-center">
          <p className="text-red-300 text-sm font-semibold">
            ⏰ Apenas 12 cupons restantes hoje!
          </p>
        </div>
      </div>
    </div>
  );
};
