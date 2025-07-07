
import { useEffect } from 'react';

export const SolutionSection = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.gsap && window.ScrollTrigger) {
      window.gsap.registerPlugin(window.ScrollTrigger);

      // Main title animation
      window.gsap.from('.solution-title', {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.solution-section',
          start: 'top 80%',
        }
      });

      // Cards animation
      window.gsap.from('.solution-card', {
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.solution-cards',
          start: 'top 80%',
        }
      });

      // Floating interface
      window.gsap.to('.floating-interface', {
        y: -20,
        duration: 3,
        ease: 'power2.inOut',
        repeat: -1,
        yoyo: true
      });
    }
  }, []);

  return (
    <section id="solucao" className="solution-section py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-56 h-56 bg-accent/10 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="solution-title text-4xl md:text-5xl font-bold mb-6">
            Transforme sua Clínica com{' '}
            <span className="text-gradient">IA Médica</span>:{' '}
            <br className="hidden md:block" />
            +40% Pacientes, -70% Burocracia
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            O <strong className="text-secondary">IAC (Inteligência Artificial Clínica)</strong> é o primeiro sistema completo de automação para fisioterapeutas do Brasil, desenvolvido por médico especialista em IA com validação científica.
          </p>
          
          {/* Credibility */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-400">
            <div className="flex items-center">
              <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
              Desenvolvido por Dr. Samuel Alencar, MD
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
              Base científica com 10.000+ protocolos
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
              Conforme resolução CFT 424/2018
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="solution-cards grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-24">
          <div className="solution-card glass-effect rounded-2xl p-8 text-center hover-lift">
            <div className="w-16 h-16 bg-gradient-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">🤖</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">1. IA Analisa o Paciente</h3>
            <p className="text-gray-300">
              Nossa IA faz anamnese completa, identifica padrões e gera diagnóstico diferencial baseado em milhares de casos clínicos.
            </p>
          </div>

          <div className="solution-card glass-effect rounded-2xl p-8 text-center hover-lift">
            <div className="w-16 h-16 bg-gradient-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">📋</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">2. Gera Documentação</h3>
            <p className="text-gray-300">
              Evolução clínica, plano de tratamento e orientações são criados automaticamente em segundos, prontos para uso.
            </p>
          </div>

          <div className="solution-card glass-effect rounded-2xl p-8 text-center hover-lift">
            <div className="w-16 h-16 bg-gradient-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">📱</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">3. Acompanha Resultados</h3>
            <p className="text-gray-300">
              Sistema de follow-up automatizado via WhatsApp mantém pacientes engajados e melhora adesão ao tratamento.
            </p>
          </div>
        </div>

        {/* Demo Interface */}
        <div id="demonstracao" className="text-center mb-24">
          <h3 className="text-3xl font-bold mb-8">Veja o Sistema em Ação</h3>
          <div className="max-w-4xl mx-auto">
            <div className="floating-interface glass-effect rounded-2xl p-8 border border-secondary/30">
              <div className="bg-gradient-to-br from-primary to-primary/80 rounded-xl p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold">Interface do IAC</h4>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div className="space-y-3">
                    <div className="bg-white/10 rounded-lg p-3">
                      <div className="text-sm text-gray-300">Entrada:</div>
                      <div className="text-sm">"Paciente, 35 anos, dor lombar há 3 meses..."</div>
                    </div>
                    <div className="bg-secondary/20 rounded-lg p-3">
                      <div className="text-sm text-secondary">IA Processando...</div>
                      <div className="w-full bg-gray-600 rounded-full h-2 mt-2">
                        <div className="bg-secondary h-2 rounded-full w-3/4"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-green-500/20 rounded-lg p-3">
                      <div className="text-sm text-green-300">Resultado:</div>
                      <div className="text-sm">✅ Evolução clínica completa<br/>✅ Plano de tratamento<br/>✅ Orientações domiciliares</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-gray-300 mb-4">De 30 minutos para 30 segundos</p>
                <div className="inline-block bg-gradient-secondary text-primary px-6 py-2 rounded-full font-semibold">
                  🚀 60x Mais Rápido
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Results Preview */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-12">Resultados que Você Pode Esperar</h3>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="glass-effect rounded-xl p-6">
              <div className="text-3xl font-bold text-secondary mb-2">15h</div>
              <div className="text-gray-300">Economizadas por semana</div>
            </div>
            <div className="glass-effect rounded-xl p-6">
              <div className="text-3xl font-bold text-accent mb-2">40%</div>
              <div className="text-gray-300">Mais pacientes atendidos</div>
            </div>
            <div className="glass-effect rounded-xl p-6">
              <div className="text-3xl font-bold text-secondary mb-2">300%</div>
              <div className="text-gray-300">ROI em 90 dias</div>
            </div>
            <div className="glass-effect rounded-xl p-6">
              <div className="text-3xl font-bold text-accent mb-2">98%</div>
              <div className="text-gray-300">Taxa de satisfação</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
