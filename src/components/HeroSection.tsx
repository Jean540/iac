
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';

export const HeroSection = () => {
  useEffect(() => {
    // GSAP animations for hero section
    if (typeof window !== 'undefined' && window.gsap) {
      const tl = window.gsap.timeline();
      
      tl.from('.hero-title', { 
        y: 100, 
        opacity: 0, 
        duration: 1, 
        ease: 'power3.out' 
      })
      .from('.hero-subtitle', { 
        y: 50, 
        opacity: 0, 
        duration: 0.8, 
        ease: 'power3.out' 
      }, '-=0.5')
      .from('.hero-cta', { 
        y: 30, 
        opacity: 0, 
        duration: 0.6, 
        ease: 'power3.out' 
      }, '-=0.3')
      .from('.hero-mockup', { 
        scale: 0.8, 
        opacity: 0, 
        duration: 1, 
        ease: 'power3.out' 
      }, '-=0.8');
    }
  }, []);

  const scrollToOffer = () => {
    const element = document.getElementById('oferta');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-secondary/10 rounded-full blur-xl floating"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-accent/10 rounded-full blur-2xl floating" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-secondary rounded-full opacity-20 rotate-slow"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="hero-title text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Reduza sua Documentação Clínica de{' '}
            <span className="text-gradient">2h para 20 minutos</span>{' '}
            com IA Validada Cientificamente
          </h1>

          {/* Subheadline */}
          <p className="hero-subtitle text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Mais de <strong className="text-secondary">500 fisioterapeutas</strong> já economizam{' '}
            <strong className="text-secondary">15h/semana</strong> usando nossos agentes de IA.{' '}
            <span className="text-red-400">Últimas 47 vagas</span> com{' '}
            <strong className="text-secondary">70% de desconto</strong>.
          </p>

          {/* Social Proof */}
          <div className="hero-subtitle flex flex-wrap justify-center items-center gap-6 mb-8 text-sm text-gray-400">
            <div className="flex items-center">
              <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
              500+ Fisioterapeutas
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
              15.000+ Horas Economizadas
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
              98% de Satisfação
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              onClick={scrollToOffer}
              size="lg"
              className="bg-gradient-secondary text-primary hover:opacity-90 transition-all duration-300 text-lg px-8 py-4 pulse-cta font-semibold"
            >
              🚀 Garantir Minha Vaga (70% OFF)
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-secondary text-secondary hover:bg-secondary hover:text-primary transition-all duration-300 text-lg px-8 py-4"
              onClick={() => {
                const element = document.getElementById('demonstracao');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              📺 Ver Demonstração
            </Button>
          </div>

          {/* Mockup/Demo Video */}
          <div className="hero-mockup max-w-4xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl glass-effect">
              <div className="aspect-video bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Veja o IAC em Ação</h3>
                  <p className="text-gray-300 text-sm">Demonstração completa em 3 minutos</p>
                </div>
              </div>
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/10 transition-colors cursor-pointer">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-primary ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-sm">✅ Aprovado pelo CFT</div>
            <div className="text-sm">🔒 LGPD Compliant</div>
            <div className="text-sm">📊 Validado Cientificamente</div>
            <div className="text-sm">💎 Garantia 30 Dias</div>
          </div>
        </div>
      </div>
    </section>
  );
};
