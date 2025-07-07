
export const TargetAudienceSection = () => {
  const profiles = [
    {
      icon: '🏥',
      title: 'Dono de Clínica',
      description: 'Você tem uma clínica estabelecida mas quer aumentar a produtividade e atender mais pacientes sem contratar mais funcionários.',
      painPoints: [
        'Equipe sobrecarregada com burocracia',
        'Dificuldade para escalar o negócio',
        'Margem de lucro estagnada'
      ],
      benefits: [
        'Aumente 40% a capacidade sem contratar',
        'Padronize protocolos da equipe',
        'ROI de 300% em 90 dias'
      ]
    },
    {
      icon: '👨‍⚕️',
      title: 'Fisioterapeuta Autônomo',
      description: 'Profissional que atende pacientes particulares e quer otimizar seu tempo para focar no que realmente importa: o tratamento.',
      painPoints: [
        'Horas perdidas com documentação',
        'Protocolos inconsistentes',
        'Baixa adesão dos pacientes'
      ],
      benefits: [
        'Economize 15h por semana',
        'Protocolos baseados em evidências',
        '80% mais adesão ao tratamento'
      ]
    },
    {
      icon: '🏃‍♀️',
      title: 'Especialista em Esportes',
      description: 'Fisioterapeuta que trabalha com atletas e precisa de protocolos específicos e acompanhamento rigoroso de performance.',
      painPoints: [
        'Protocolos genéricos',
        'Dificuldade no acompanhamento',
        'Falta de dados de evolução'
      ],
      benefits: [
        'Protocolos específicos para esportes',
        'Dashboard de acompanhamento',
        'Relatórios detalhados de evolução'
      ]
    },
    {
      icon: '🧠',
      title: 'Neurofuncional',
      description: 'Especialista que trabalha com reabilitação neurológica e precisa de protocolos complexos e acompanhamento especializado.',
      painPoints: [
        'Casos complexos demandam muito tempo',
        'Documentação extensa obrigatória',
        'Famílias precisam de orientação constante'
      ],
      benefits: [
        'IA especializada em neurologia',
        'Documentação automática completa',
        'Orientações para familiares automatizadas'
      ]
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            O IAC é{' '}
            <span className="text-gradient">Perfeito</span>{' '}
            Para Você?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Desenvolvido especificamente para fisioterapeutas que querem sair da operação manual e entrar na era da automação inteligente.
          </p>
        </div>

        {/* Profiles Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {profiles.map((profile, index) => (
            <div 
              key={index}
              className="glass-effect rounded-2xl p-8 hover-lift border border-secondary/20"
            >
              <div className="text-4xl mb-4">{profile.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-secondary">{profile.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{profile.description}</p>
              
              {/* Pain Points */}
              <div className="mb-6">
                <h4 className="font-semibold text-red-400 mb-3">Seus desafios atuais:</h4>
                <div className="space-y-2">
                  {profile.painPoints.map((pain, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-300">
                      <span className="text-red-400 mr-2">❌</span>
                      {pain}
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h4 className="font-semibold text-secondary mb-3">Como o IAC resolve:</h4>
                <div className="space-y-2">
                  {profile.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-300">
                      <span className="text-secondary mr-2">✅</span>
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Requirements */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-8">
            Requisitos Mínimos
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* What you need */}
            <div className="glass-effect rounded-xl p-6 border border-secondary/20">
              <h4 className="text-xl font-bold text-secondary mb-4">✅ Você precisa ter:</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="text-secondary mr-2">📋</span>
                  <span>Registro ativo no CREFITO</span>
                </div>
                <div className="flex items-center">
                  <span className="text-secondary mr-2">💻</span>
                  <span>Computador ou smartphone</span>
                </div>
                <div className="flex items-center">
                  <span className="text-secondary mr-2">🌐</span>
                  <span>Conexão com internet</span>
                </div>
                <div className="flex items-center">
                  <span className="text-secondary mr-2">🎯</span>
                  <span>Vontade de crescer e inovar</span>
                </div>
              </div>
            </div>

            {/* What you don't need */}
            <div className="glass-effect rounded-xl p-6 border border-accent/20">
              <h4 className="text-xl font-bold text-accent mb-4">❌ Você NÃO precisa:</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="text-accent mr-2">🚫</span>
                  <span>Conhecimento em tecnologia</span>
                </div>
                <div className="flex items-center">
                  <span className="text-accent mr-2">🚫</span>
                  <span>Experiência com IA</span>
                </div>
                <div className="flex items-center">
                  <span className="text-accent mr-2">🚫</span>
                  <span>Investimento em equipamentos</span>
                </div>
                <div className="flex items-center">
                  <span className="text-accent mr-2">🚫</span>
                  <span>Conhecimento em programação</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="glass-effect rounded-2xl p-8 max-w-3xl mx-auto border border-secondary/30">
            <h3 className="text-2xl font-bold mb-4">
              Se você se identificou com pelo menos um perfil...
            </h3>
            <p className="text-xl text-gray-300 mb-6">
              O IAC foi feito especialmente para você. Junte-se aos 500+ fisioterapeutas que já estão no futuro.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('oferta');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-secondary text-primary hover:opacity-90 transition-opacity px-8 py-4 rounded-lg font-bold text-lg pulse-cta"
            >
              🚀 Quero Transformar Minha Clínica
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
