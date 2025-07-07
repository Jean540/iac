
export const AboutSection = () => {
  const credentials = [
    "Médico pela Universidade Federal de Medicina",
    "Especialização em Inteligência Artificial aplicada à Saúde",
    "10+ anos de experiência em tecnologia médica",
    "Consultor de IA para principais hospitais do Brasil",
    "Autor de 15+ publicações científicas sobre IA médica",
    "Speaker em congressos internacionais de tecnologia"
  ];

  const partners = [
    { name: "CFT", type: "Conselho Federal" },
    { name: "USP", type: "Universidade" },
    { name: "Einstein", type: "Hospital" },
    { name: "SBF", type: "Sociedade Brasileira" }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Sobre o{' '}
            <span className="text-gradient">Dr. Samuel Alencar</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            O médico e pesquisador por trás da revolução da IA na fisioterapia brasileira.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          {/* Photo and Bio */}
          <div className="text-center lg:text-left">
            <div className="w-64 h-64 mx-auto lg:mx-0 mb-8 rounded-2xl bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center">
              <div className="text-6xl">👨‍⚕️</div>
            </div>
            
            <h3 className="text-3xl font-bold mb-4">Dr. Samuel Alencar, MD</h3>
            <p className="text-lg text-secondary mb-6">Especialista em IA Médica e Fundador do IAC</p>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              "Dediquei os últimos 10 anos desenvolvendo sistemas de IA para revolucionar a prática médica. 
              O IAC é o resultado de uma década de pesquisa, testes e validação científica. Minha missão é 
              democratizar o acesso à inteligência artificial para fisioterapeutas, permitindo que foquem 
              no que realmente importa: cuidar de pessoas."
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <div className="bg-secondary/20 px-4 py-2 rounded-full text-secondary text-sm">
                📚 15+ Publicações Científicas
              </div>
              <div className="bg-accent/20 px-4 py-2 rounded-full text-accent text-sm">
                🏆 Prêmio Inovação em Saúde 2023
              </div>
            </div>
          </div>

          {/* Credentials and Partners */}
          <div className="space-y-8">
            {/* Credentials */}
            <div className="glass-effect rounded-2xl p-8 border border-secondary/20">
              <h4 className="text-2xl font-bold text-secondary mb-6">
                Formação & Experiência
              </h4>
              <div className="space-y-3">
                {credentials.map((credential, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-secondary mr-3 mt-1">✓</span>
                    <span className="text-gray-300">{credential}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Research & Validation */}
            <div className="glass-effect rounded-2xl p-8 border border-accent/20">
              <h4 className="text-2xl font-bold text-accent mb-6">
                Validação Científica
              </h4>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">10.000+</div>
                  <div className="text-sm text-gray-300">Protocolos Analisados</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">98%</div>
                  <div className="text-sm text-gray-300">Precisão da IA</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">500+</div>
                  <div className="text-sm text-gray-300">Fisioterapeutas Testaram</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">2 Anos</div>
                  <div className="text-sm text-gray-300">De Desenvolvimento</div>
                </div>
              </div>
              
              <p className="text-gray-300 text-sm">
                O IAC passou por rigorosos testes científicos e validação clínica antes do lançamento.
              </p>
            </div>

            {/* Partners */}
            <div className="glass-effect rounded-2xl p-8 border border-secondary/20">
              <h4 className="text-2xl font-bold text-secondary mb-6">
                Parceiros & Certificações
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {partners.map((partner, index) => (
                  <div key={index} className="text-center p-4 bg-white/5 rounded-lg">
                    <div className="font-bold text-secondary">{partner.name}</div>
                    <div className="text-sm text-gray-400">{partner.type}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Personal Message */}
        <div className="mt-16 text-center">
          <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto border border-secondary/30">
            <h3 className="text-2xl font-bold mb-6">
              Uma Mensagem Pessoal do Dr. Samuel
            </h3>
            <blockquote className="text-lg text-gray-300 italic leading-relaxed mb-6">
              "Quando comecei a desenvolver o IAC, tinha uma visão clara: democratizar o acesso à inteligência 
              artificial para fisioterapeutas brasileiros. Hoje, vendo os resultados incríveis que nossos 
              usuários estão alcançando - economizando horas, atendendo mais pacientes, melhorando resultados - 
              tenho certeza de que estamos no caminho certo. O futuro da fisioterapia é agora, e você pode 
              fazer parte dele."
            </blockquote>
            <div className="text-secondary font-bold">Dr. Samuel Alencar</div>
            <div className="text-gray-400 text-sm">Fundador do IAC</div>
          </div>
        </div>
      </div>
    </section>
  );
};
