import { useEffect } from 'react';

export const ModulesSection = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.gsap && window.ScrollTrigger) {
      window.gsap.registerPlugin(window.ScrollTrigger);

      window.gsap.from('.module-card', {
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.modules-section',
          start: 'top 80%',
        }
      });
    }
  }, []);

  const modules = [
    {
      icon: '🤖',
      title: 'Assistente de Anamnese IA',
      description: 'IA conversacional que conduz anamnese completa, identificando padrões e gerando diagnóstico diferencial baseado em 10.000+ casos clínicos.',
      features: [
        'Questionários adaptativos inteligentes',
        'Integração com prontuário eletrônico',
        'Análise de padrões comportamentais',
        'Sugestões de exames complementares'
      ],
      demo: 'Ver Demo de 2 minutos',
      value: 'R$ 997'
    },
    {
      icon: '📋',
      title: 'Gerador de Planos de Tratamento',
      description: 'Sistema que cria protocolos personalizados baseados em evidências científicas, adaptados para cada condição clínica específica.',
      features: [
        'Base de 10.000+ protocolos validados',
        'Personalização para cada especialidade',
        'Atualizações científicas automáticas',
        'Templates para todas as condições'
      ],
      demo: '50+ templates inclusos',
      value: 'R$ 1.200'
    },
    {
      icon: '📱',
      title: 'Follow-up Automatizado',
      description: 'WhatsApp Bot inteligente que mantém contato com pacientes, monitora adesão e envia lembretes personalizados automaticamente.',
      features: [
        'Mensagens automáticas personalizadas',
        'Alertas de não-aderência',
        'Relatórios de evolução',
        'Dashboard de acompanhamento'
      ],
      demo: 'Case: +80% adesão',
      value: 'R$ 800'
    }
  ];

  const bonuses = [
    {
      title: 'Mentoria Intensiva de 6 Semanas',
      description: 'Acompanhamento 1:1 com Dr. Samuel para implementação e otimização do sistema na sua clínica',
      value: 'R$ 1.200'
    },
    {
      title: 'Certificação em Fisioterapia Digital',
      description: 'Certificado oficial reconhecido pelo mercado que comprova sua expertise em IA clínica',
      value: 'R$ 800'
    },
    {
      title: 'Setup Completo da Clínica',
      description: 'Nossa equipe configura todo o sistema na sua clínica, sem que você precise se preocupar com nada',
      value: 'R$ 500'
    },
    {
      title: 'Kit de Templates Profissionais',
      description: '100+ templates de documentos, protocolos e materiais educativos prontos para usar',
      value: 'R$ 300'
    }
  ];

  return (
    <section className="modules-section py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            O que Você{' '}
            <span className="text-gradient">Recebe</span>{' '}
            no IAC
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Sistema completo de automação clínica com tudo que você precisa para transformar sua fisioterapia em uma operação de alta performance.
          </p>
        </div>

        {/* Main Modules */}
        <div className="space-y-8 mb-20">
          {modules.map((module, index) => (
            <div 
              key={index}
              className="module-card glass-effect rounded-2xl p-8 hover-lift border border-secondary/20"
            >
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-2">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="text-4xl">{module.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-secondary">
                        {module.title}
                      </h3>
                      <div className="inline-block bg-secondary/20 text-secondary px-3 py-1 rounded-full text-sm font-semibold">
                        Valor: {module.value}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {module.description}
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-3">
                    {module.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <span className="text-secondary mr-2">✅</span>
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="glass-effect rounded-xl p-6 border border-accent/30">
                    <div className="w-16 h-16 bg-gradient-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">📺</span>
                    </div>
                    <div className="text-accent font-semibold mb-2">{module.demo}</div>
                    <p className="text-sm text-gray-400">Demonstração prática</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bonus Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-2">
            🎁 Bônus Exclusivos
          </h3>
          <p className="text-gray-300">Apenas para os primeiros 50 inscritos</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-20">
          {bonuses.map((bonus, index) => (
            <div 
              key={index}
              className="module-card glass-effect rounded-xl p-6 border border-accent/20"
            >
              <div className="flex justify-between items-start mb-3">
                <h4 className="font-bold text-accent">{bonus.title}</h4>
                <span className="text-sm bg-accent/20 text-accent px-2 py-1 rounded">
                  {bonus.value}
                </span>
              </div>
              <p className="text-sm text-gray-300">{bonus.description}</p>
            </div>
          ))}
        </div>

        {/* Total Value */}
        <div className="text-center">
          <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto border border-secondary/30">
            <h3 className="text-2xl font-bold mb-4">Valor Total do Pacote</h3>
            <div className="space-y-2 mb-6">
              <div className="flex justify-between">
                <span>3 Módulos Principais:</span>
                <span>R$ 2.997</span>
              </div>
              <div className="flex justify-between">
                <span>4 Bônus Exclusivos:</span>
                <span>R$ 2.800</span>
              </div>
              <div className="border-t border-gray-600 pt-2 mt-4">
                <div className="flex justify-between text-xl font-bold">
                  <span>Valor Total:</span>
                  <span className="text-gray-400 line-through">R$ 5.797</span>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">R$ 897</div>
              <div className="text-accent font-bold text-lg">Economize R$ 4.900 (85% OFF)</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
