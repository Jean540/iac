
import { useEffect } from 'react';

export const BenefitsSection = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.gsap && window.ScrollTrigger) {
      window.gsap.registerPlugin(window.ScrollTrigger);

      // Counter animation
      const counters = document.querySelectorAll('.counter');
      counters.forEach((counter) => {
        const target = parseInt(counter.getAttribute('data-target') || '0');
        const obj = { value: 0 };
        
        window.gsap.to(obj, {
          value: target,
          duration: 2,
          ease: 'power2.out',
          onUpdate: function() {
            counter.textContent = Math.round(obj.value).toString();
          },
          scrollTrigger: {
            trigger: counter,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        });
      });

      // Benefits cards animation
      window.gsap.from('.benefit-card', {
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.benefits-grid',
          start: 'top 80%',
        }
      });
    }
  }, []);

  const benefits = [
    {
      icon: '⚡',
      title: 'Redução de 63% no Tempo',
      description: 'Documentação clínica completa em segundos, não horas.',
      metric: '63',
      unit: '%',
      detail: 'Menos tempo com burocracia'
    },
    {
      icon: '⏱️',
      title: 'Economia de 15h/Semana',
      description: 'Libere tempo para focar no que realmente importa: seus pacientes.',
      metric: '15',
      unit: 'h',
      detail: 'Economizadas semanalmente'
    },
    {
      icon: '🚀',
      title: 'Evoluções em Segundos',
      description: 'IA gera evoluções clínicas completas e personalizadas automaticamente.',
      metric: '30',
      unit: 's',
      detail: 'Para gerar evolução completa'
    },
    {
      icon: '📈',
      title: '80% Mais Adesão',
      description: 'Orientações claras e personalizadas aumentam adesão ao tratamento.',
      metric: '80',
      unit: '%',
      detail: 'Melhoria na adesão'
    },
    {
      icon: '📚',
      title: '10.000+ Protocolos',
      description: 'Base científica robusta com diretrizes atualizadas constantemente.',
      metric: '10000',
      unit: '+',
      detail: 'Protocolos validados'
    },
    {
      icon: '💰',
      title: 'ROI de 300% em 90 Dias',
      description: 'Atenda mais pacientes com a mesma equipe e maximize sua receita.',
      metric: '300',
      unit: '%',
      detail: 'Retorno sobre investimento'
    }
  ];

  return (
    <section id="beneficios" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-accent/5 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Benefícios{' '}
            <span className="text-gradient">Mensuráveis</span>{' '}
            e Comprovados
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Não são apenas promessas. São resultados reais que centenas de fisioterapeutas já estão alcançando com o IAC.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="benefits-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="benefit-card glass-effect rounded-2xl p-8 hover-lift border border-secondary/20 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-secondary">
                {benefit.title}
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {benefit.description}
              </p>
              
              <div className="border-t border-gray-600 pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-baseline">
                      <span 
                        className="counter text-3xl font-bold text-accent"
                        data-target={benefit.metric}
                      >
                        0
                      </span>
                      <span className="text-xl text-accent ml-1">{benefit.unit}</span>
                    </div>
                    <div className="text-sm text-gray-400">{benefit.detail}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Section */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">
            Antes vs Depois do IAC
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Antes */}
            <div className="glass-effect rounded-2xl p-8 border border-red-500/30">
              <h4 className="text-2xl font-bold text-red-400 mb-6 text-center">❌ Sem o IAC</h4>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-red-400 mr-3">⏰</span>
                  <span>2-3 horas diárias só com documentação</span>
                </div>
                <div className="flex items-center">
                  <span className="text-red-400 mr-3">📋</span>
                  <span>Protocolos inconsistentes entre profissionais</span>
                </div>
                <div className="flex items-center">
                  <span className="text-red-400 mr-3">😞</span>
                  <span>70% dos pacientes abandonam o tratamento</span>
                </div>
                <div className="flex items-center">
                  <span className="text-red-400 mr-3">📉</span>
                  <span>Crescimento limitado pela capacidade manual</span>
                </div>
                <div className="flex items-center">
                  <span className="text-red-400 mr-3">💸</span>
                  <span>Perda de receita por baixa produtividade</span>
                </div>
              </div>
            </div>

            {/* Depois */}
            <div className="glass-effect rounded-2xl p-8 border border-secondary/30">
              <h4 className="text-2xl font-bold text-secondary mb-6 text-center">✅ Com o IAC</h4>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-secondary mr-3">⚡</span>
                  <span>20 minutos para toda documentação</span>
                </div>
                <div className="flex items-center">
                  <span className="text-secondary mr-3">📊</span>
                  <span>Protocolos padronizados e baseados em evidências</span>
                </div>
                <div className="flex items-center">
                  <span className="text-secondary mr-3">😊</span>
                  <span>98% de satisfação e 80% mais adesão</span>
                </div>
                <div className="flex items-center">
                  <span className="text-secondary mr-3">📈</span>
                  <span>40% mais pacientes com mesma equipe</span>
                </div>
                <div className="flex items-center">
                  <span className="text-secondary mr-3">💰</span>
                  <span>ROI de 300% em apenas 90 dias</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto border border-secondary/30">
            <h3 className="text-3xl font-bold mb-4">
              Pare de Trabalhar MAIS e Comece a Trabalhar MELHOR
            </h3>
            <p className="text-xl text-gray-300 mb-6">
              Junte-se aos 500+ fisioterapeutas que já transformaram suas clínicas com IA
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <span>✅ Implementação em 24h</span>
              <span>✅ Suporte completo</span>
              <span>✅ Garantia de 30 dias</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
