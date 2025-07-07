
export const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-12 border-t border-gray-700 relative">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-secondary rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-lg">IA</span>
              </div>
              <span className="text-xl font-bold">IAC</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Inteligência Artificial Clínica - Revolucionando a fisioterapia brasileira com 
              tecnologia de ponta e validação científica.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
                <span className="sr-only">Facebook</span>
                📘
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
                <span className="sr-only">Instagram</span>
                📷
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
                <span className="sr-only">LinkedIn</span>
                💼
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
                <span className="sr-only">YouTube</span>
                📺
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-secondary mb-4">Navegação</h4>
            <div className="space-y-2">
              <button 
                onClick={() => scrollToSection('problema')}
                className="block text-gray-300 hover:text-secondary transition-colors"
              >
                Problema
              </button>
              <button 
                onClick={() => scrollToSection('solucao')}
                className="block text-gray-300 hover:text-secondary transition-colors"
              >
                Solução
              </button>
              <button 
                onClick={() => scrollToSection('beneficios')}
                className="block text-gray-300 hover:text-secondary transition-colors"
              >
                Benefícios
              </button>
              <button 
                onClick={() => scrollToSection('depoimentos')}
                className="block text-gray-300 hover:text-secondary transition-colors"
              >
                Depoimentos
              </button>
              <button 
                onClick={() => scrollToSection('oferta')}
                className="block text-gray-300 hover:text-secondary transition-colors"
              >
                Oferta
              </button>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-secondary mb-4">Contato</h4>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center">
                <span className="mr-2">📱</span>
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">📧</span>
                <span>contato@iac.med.br</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">🕒</span>
                <span>Seg-Sex: 8h às 18h</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 IAC - Inteligência Artificial Clínica. Todos os direitos reservados.
            </div>
            <div className="flex space-x-4 text-sm text-gray-400">
              <a href="#" className="hover:text-secondary transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                LGPD
              </a>
            </div>
          </div>
          
          {/* Disclaimer */}
          <div className="mt-4 text-xs text-gray-500 text-center">
            <p>
              Este produto não substitui o julgamento clínico profissional. O IAC é uma ferramenta de apoio 
              que deve ser utilizada por profissionais qualificados e registrados no CREFITO.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
