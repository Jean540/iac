import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { LeadCaptureForm } from '@/components/LeadCaptureForm';

export const OfferSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 72,
    minutes: 0,
    seconds: 0
  });

  const [spotsLeft] = useState(23);
  const [showLeadForm, setShowLeadForm] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const offerItems = [
    { name: 'Assistente de Anamnese IA', value: 'R$ 997' },
    { name: 'Gerador de Planos de Tratamento', value: 'R$ 1.200' },
    { name: 'Sistema de Follow-up Automatizado', value: 'R$ 800' },
    { name: 'Mentoria Intensiva 6 Semanas', value: 'R$ 1.200' },
    { name: 'Certificação em Fisioterapia Digital', value: 'R$ 800' },
    { name: 'Setup Completo da Clínica', value: 'R$ 500' },
    { name: 'Kit de Templates Profissionais', value: 'R$ 300' },
    { name: 'Acesso VIP ao Dr. Samuel (90 dias)', value: 'R$ 800' }
  ];

  const handleCTAClick = () => {
    setShowLeadForm(true);
  };

  return (
    <section id="oferta" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary via-primary/95 to-primary"></div>
        <div className="absolute top-20 right-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-accent/10 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Urgency Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-red-500/20 border border-red-500/50 rounded-lg px-6 py-3 mb-6">
            <div className="text-red-300 font-bold">⚠️ OFERTA LIMITADA - ÚLTIMAS HORAS</div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Acesso Fundador</span>{' '}
            IAC 2025
          </h2>
          
          {/* Countdown Timer */}
          <div className="flex justify-center items-center space-x-4 mb-6">
            <div className="glass-effect rounded-lg p-4 min-w-[80px]">
              <div className="text-2xl font-bold text-secondary">{timeLeft.hours.toString().padStart(2, '0')}</div>
              <div className="text-sm text-gray-300">Horas</div>
            </div>
            <div className="text-2xl text-secondary">:</div>
            <div className="glass-effect rounded-lg p-4 min-w-[80px]">
              <div className="text-2xl font-bold text-secondary">{timeLeft.minutes.toString().padStart(2, '0')}</div>
              <div className="text-sm text-gray-300">Min</div>
            </div>
            <div className="text-2xl text-secondary">:</div>
            <div className="glass-effect rounded-lg p-4 min-w-[80px]">
              <div className="text-2xl font-bold text-secondary">{timeLeft.seconds.toString().padStart(2, '0')}</div>
              <div className="text-sm text-gray-300">Seg</div>
            </div>
          </div>

          {/* Spots Left */}
          <div className="inline-block bg-orange-500/20 border border-orange-500/50 rounded-lg px-4 py-2">
            <span className="text-orange-300">🔥 Restam apenas {spotsLeft} vagas de 50</span>
          </div>
        </div>

        {/* Offer Box */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-effect rounded-3xl p-8 border-2 border-secondary/50 relative overflow-hidden">
            {/* Discount Badge */}
            <div className="absolute -top-4 -right-4 bg-red-500 text-white rounded-full w-24 h-24 flex items-center justify-center font-bold text-lg rotate-12 shadow-lg">
              70% OFF
            </div>

            {/* Pricing */}
            <div className="text-center mb-8">
              <div className="text-gray-400 text-xl mb-2">De <span className="line-through">R$ 5.797</span> por apenas</div>
              <div className="text-5xl md:text-6xl font-bold text-secondary mb-2">R$ 897</div>
              <div className="text-xl text-accent font-bold">Economia de R$ 4.900</div>
              <div className="text-sm text-gray-300 mt-2">ou 12x de R$ 89,70 sem juros</div>
            </div>

            {/* What's Included */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="font-bold text-secondary mb-4 text-lg">✅ Tudo que está incluído:</h4>
                <div className="space-y-3">
                  {offerItems.map((item, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-gray-300 text-sm">{item.name}</span>
                      <span className="text-secondary font-semibold text-sm">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-accent mb-4 text-lg">🎁 Bônus exclusivos (apenas hoje):</h4>
                <div className="space-y-3 mb-6">
                  <div className="bg-accent/10 rounded-lg p-3">
                    <div className="font-semibold text-accent">🚀 Setup Premium Express</div>
                    <div className="text-sm text-gray-300">Nossa equipe configura tudo em 24h</div>
                  </div>
                  <div className="bg-accent/10 rounded-lg p-3">
                    <div className="font-semibold text-accent">📞 Consultoria 1:1 Exclusiva</div>
                    <div className="text-sm text-gray-300">1h com Dr. Samuel para sua clínica</div>
                  </div>
                  <div className="bg-accent/10 rounded-lg p-3">
                    <div className="font-semibold text-accent">📈 Plano de Crescimento</div>
                    <div className="text-sm text-gray-300">Estratégia personalizada para 2025</div>
                  </div>
                </div>

                {/* Guarantee */}
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-2">🛡️</span>
                    <span className="font-bold text-green-300">Garantia Total de 30 Dias</span>
                  </div>
                  <p className="text-sm text-gray-300">
                    Se não estiver 100% satisfeito, devolvemos seu dinheiro integralmente.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <Button 
                onClick={handleCTAClick}
                size="lg"
                className="bg-gradient-secondary text-primary hover:opacity-90 transition-all duration-300 text-xl px-12 py-6 pulse-cta font-bold w-full md:w-auto"
              >
                🚀 GARANTIR MINHA VAGA AGORA
                <br />
                <span className="text-sm opacity-80">Clique aqui para acessar o pagamento seguro</span>
              </Button>
              
              {/* Payment Methods */}
              <div className="mt-6 flex flex-wrap justify-center items-center gap-4 text-sm text-gray-400">
                <span>💳 Cartão de Crédito</span>
                <span>🏦 PIX</span>
                <span>📄 Boleto</span>
                <span>🔒 Pagamento 100% Seguro</span>
              </div>

              {/* Social Proof */}
              <div className="mt-4 text-sm text-gray-400">
                <span className="text-secondary font-semibold">127 fisioterapeutas</span> se inscreveram hoje
              </div>
            </div>
          </div>
        </div>

        {/* Risk Reversal */}
        <div className="text-center mt-12">
          <div className="max-w-3xl mx-auto glass-effect rounded-2xl p-6 border border-green-500/30">
            <h3 className="text-2xl font-bold text-green-300 mb-4">
              💰 Sem Risco Para Você
            </h3>
            <p className="text-gray-300">
              Você tem <strong>30 dias completos</strong> para testar o IAC. Se por qualquer motivo não ficar satisfeito, 
              devolvemos <strong>100% do seu investimento</strong>, sem perguntas, sem burocracia.
            </p>
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
