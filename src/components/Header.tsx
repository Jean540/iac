
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-effect' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-secondary rounded-lg flex items-center justify-center">
              <span className="text-primary font-bold text-lg">IA</span>
            </div>
            <span className="text-xl font-bold">IAC</span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('problema')} className="hover:text-secondary transition-colors">
              Problema
            </button>
            <button onClick={() => scrollToSection('solucao')} className="hover:text-secondary transition-colors">
              Solução
            </button>
            <button onClick={() => scrollToSection('beneficios')} className="hover:text-secondary transition-colors">
              Benefícios
            </button>
            <button onClick={() => scrollToSection('depoimentos')} className="hover:text-secondary transition-colors">
              Depoimentos
            </button>
            <button onClick={() => scrollToSection('oferta')} className="hover:text-secondary transition-colors">
              Oferta
            </button>
            <Button 
              onClick={() => scrollToSection('oferta')}
              className="bg-gradient-secondary text-primary hover:opacity-90 transition-opacity pulse-cta"
            >
              Garantir Vaga
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col space-y-1 z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className={`w-6 h-0.5 bg-white transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-white transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-white transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${
        isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="glass-effect border-t border-white/20">
          <nav className="container mx-auto px-4 py-4 space-y-4 max-w-7xl">
            <button 
              onClick={() => scrollToSection('problema')} 
              className="block w-full text-left hover:text-secondary transition-colors py-2"
            >
              Problema
            </button>
            <button 
              onClick={() => scrollToSection('solucao')} 
              className="block w-full text-left hover:text-secondary transition-colors py-2"
            >
              Solução
            </button>
            <button 
              onClick={() => scrollToSection('beneficios')} 
              className="block w-full text-left hover:text-secondary transition-colors py-2"
            >
              Benefícios
            </button>
            <button 
              onClick={() => scrollToSection('depoimentos')} 
              className="block w-full text-left hover:text-secondary transition-colors py-2"
            >
              Depoimentos
            </button>
            <button 
              onClick={() => scrollToSection('oferta')} 
              className="block w-full text-left hover:text-secondary transition-colors py-2"
            >
              Oferta
            </button>
            <Button 
              onClick={() => scrollToSection('oferta')}
              className="w-full bg-gradient-secondary text-primary hover:opacity-90 transition-opacity mt-4"
            >
              Garantir Vaga
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};
