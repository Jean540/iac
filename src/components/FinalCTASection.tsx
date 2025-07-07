
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { LeadCaptureForm } from '@/components/LeadCaptureForm';

export const FinalCTASection = () => {
  const [showLeadForm, setShowLeadForm] = useState(false);

  const scrollToOffer = () => {
    const element = document.getElementById('oferta');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCTAClick = () => {
    setShowLeadForm(true);
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Dramatic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary/10 to-primary"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary/20 via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Headline */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Não fique de fora da{' '}
            <span className="text-gradient">revolução</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            A inteligência artificial já está transformando a fisioterapia —{' '}
            <strong className="text-secondary">e agora é a sua vez</strong>
          </p>

          {/* Key Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
            <div className="glass-effect rounded-xl p-6">
              <div className="text-3xl font-bold text-secondary mb-2">+40%</div>
              <div className="text-gray-300">Mais Pacientes</div>
            </div>
            <div className="glass-effect rounded-xl p-6">
              <div className="text-3xl font-bold text-accent mb-2">-70%</div>
              <div className="text-gray-300">Menos Burocracia</div>
            </div>
            <div className="glass-effect rounded-xl p-6">
              <div className="text-3xl font-bold text-secondary mb-2">30 dias</div>
              <div className="text-gray-300">Garantia Total</div>
            </div>
          </div>

          {/* Urgency Message */}
          <div className="glass-effect rounded-2xl p-8 mb-8 border border-orange-500/30">
            <h3 className="text-2xl font-bold text-orange-300 mb-4">
              ⚠️ Últimas Horas da Oferta Fundador
            </h3>
            <p className="text-gray-300 mb-4">
              Apenas <strong className="text-secondary">23 vagas restantes</strong> com 70% de desconto.
              Após esse período, o valor volta para R$ 2.997.
            </p>
            <div className="text-sm text-gray-400">
              Mais de 127 fisioterapeutas já garantiram sua vaga hoje
            </div>
          </div>

          {/* Main CTA */}
          <div className="mb-8">
            <Button 
              onClick={handleCTAClick}
              size="lg"
              className="bg-gradient-secondary text-primary hover:opacity-90 transition-all duration-300 text-xl md:text-2xl px-12 py-6 pulse-cta font-bold"
            >
              🚀 GARANTIR MINHA TRANSFORMAÇÃO AGORA
            </Button>
          </div>

          {/* Payment Info */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-400 mb-8">
            <span>💳 Parcelamento em até 12x</span>
            <span>🔒 Pagamento 100% Seguro</span>
            <span>🛡️ Garantia de 30 dias</span>
            <span>⚡ Acesso Imediato</span>
          </div>

          {/* Social Proof */}
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary">500+</div>
              <div className="text-gray-300 text-sm">Fisioterapeutas já usam o IAC</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">98%</div>
              <div className="text-gray-300 text-sm">Recomendam para colegas</div>
            </div>
          </div>

          {/* Final Message */}
          <div className="mt-12 glass-effect rounded-2xl p-6 border border-secondary/30">
            <p className="text-gray-300 leading-relaxed">
              "Seu investimento no IAC se paga em menos de 30 dias. Não é apenas uma ferramenta, 
              é a <strong className="text-secondary">evolução da sua carreira profissional</strong>. 
              Junte-se aos fisioterapeutas que escolheram liderar, não seguir."
            </p>
            <div className="text-secondary font-bold mt-4">- Dr. Samuel Alencar</div>
          </div>
        </div>
      </div>

      {/* Lead Capture Form Modal */}
      <LeadCaptureForm 
        isOpen={showLeadForm} 
        onClose={() => setShowLeadForm(false)} 
      />
    </section>
  );
};
