
import { useEffect } from 'react';

export const ProblemSection = () => {
  useEffect(() => {
    // GSAP ScrollTrigger animations
    if (typeof window !== 'undefined' && window.gsap && window.ScrollTrigger) {
      window.gsap.registerPlugin(window.ScrollTrigger);

      window.gsap.from('.problem-card', {
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.problem-section',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      });
    }
  }, []);

  const problems = [
    {
      icon: '⏰',
      title: 'Horas Perdidas com Documentação',
      description: 'Você passa 2-3 horas por dia preenchendo evoluções clínicas, protocolos e relatórios que poderiam ser automatizados.',
      impact: '40% do seu tempo desperdiçado'
    },
    {
      icon: '📋',
      title: 'Falta de Padronização',
      description: 'Cada profissional da sua clínica atende de um jeito, sem protocolos claros, gerando inconsistência nos resultados.',
      impact: '60% menos efetividade'
    },
    {
      icon: '📈',
      title: 'Impossível Escalar a Clínica',
      description: 'Você não consegue atender mais pacientes porque está limitado pela capacidade manual de documentar cada atendimento.',
      impact: 'Crescimento estagnado'
    },
    {
      icon: '😞',
      title: 'Pacientes Sem Adesão',
      description: 'Seus pacientes não seguem as orientações porque recebem instruções vagas ou genéricas, prejudicando os resultados.',
      impact: '70% abandonam o tratamento'
    }
  ];

  return (
    <section id="problema" className="problem-section py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-red-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-orange-500/5 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            O que está te{' '}
            <span className="text-gradient">atrasando</span>{' '}
            hoje?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Enquanto você perde tempo com burocracia, seus concorrentes já estão na frente usando tecnologia para crescer exponencialmente.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-24">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="problem-card glass-effect rounded-2xl p-8 hover-lift border border-red-500/20"
            >
              <div className="text-4xl mb-4">{problem.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-red-400">{problem.title}</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">{problem.description}</p>
              <div className="inline-block bg-red-500/20 text-red-300 px-4 py-2 rounded-full text-sm font-semibold">
                {problem.impact}
              </div>
            </div>
          ))}
        </div>

        {/* Pain Amplification */}
        <div className="mb-24">
          <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto border border-red-500/30">
            <h3 className="text-3xl font-bold mb-6 text-red-400 text-center">
              Resultado: Você trabalha MAIS e ganha MENOS
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-red-400 mb-2">-40%</div>
                <div className="text-gray-300">Produtividade perdida</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-400 mb-2">+60%</div>
                <div className="text-gray-300">Stress e burnout</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-400 mb-2">-30%</div>
                <div className="text-gray-300">Satisfação profissional</div>
              </div>
            </div>
          </div>
        </div>

        {/* Transition to Solution */}
        <div className="text-center">
          <p className="text-2xl text-gray-300 mb-8">
            Mas e se eu te disser que existe uma forma de{' '}
            <span className="text-secondary font-bold">reverter</span> esse cenário?
          </p>
          <div className="w-16 h-1 bg-gradient-secondary mx-auto"></div>
        </div>
      </div>
    </section>
  );
};
