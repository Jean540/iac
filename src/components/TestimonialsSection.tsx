import { useEffect } from "react";

export const TestimonialsSection = () => {
  useEffect(() => {
    if (typeof window !== "undefined" && window.gsap && window.ScrollTrigger) {
      window.gsap.registerPlugin(window.ScrollTrigger);

      window.gsap.from(".testimonial-card", {
        x: (index: number) => (index % 2 === 0 ? -100 : 100),
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".testimonials-section",
          start: "top 80%",
        },
      });
    }
  }, []);

  const testimonials = [
    {
      name: "Dra. Ana Paula Ribeiro",
      specialty: "Fisioterapeuta Ortopédica",
      location: "São Paulo - SP",
      crefito: "CREFITO-3 123456-F",
      photo:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
      quote:
        "O IAC transformou completamente minha rotina. Economizo 2 horas diárias na documentação e meu faturamento aumentou 35% em apenas 3 meses. É como ter um assistente especialista trabalhando 24h comigo.",
      metrics: {
        timeSaved: "2h/dia",
        revenue: "+35%",
        satisfaction: "98%",
      },
      videoLink: "#",
    },
    {
      name: "Dr. Carlos Eduardo Santos",
      specialty: "Fisioterapeuta Neurofuncional",
      location: "Rio de Janeiro - RJ",
      crefito: "CREFITO-2 789012-F",
      photo:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face",
      quote:
        "Consegui abrir uma segunda clínica com a mesma equipe graças à automação do IAC. O ROI foi de 400% no primeiro ano. A qualidade dos protocolos é impressionante, baseada em evidências reais.",
      metrics: {
        roi: "400%",
        efficiency: "+60%",
        clinics: "2 unidades",
      },
      videoLink: "#",
    },
    {
      name: "Dra. Mariana Costa",
      specialty: "Fisioterapeuta Esportiva",
      location: "Belo Horizonte - MG",
      crefito: "CREFITO-4 345678-F",
      photo:
        "https://images.unsplash.com/photo-1594824020757-7fcd8c61c7d5?w=150&h=150&fit=crop&crop=face",
      quote:
        "A adesão dos meus pacientes aumentou 80% com as orientações personalizadas da IA. Eles recebem lembretes e exercícios pelo WhatsApp. É fisioterapia do futuro acontecendo hoje.",
      metrics: {
        adherence: "+80%",
        patients: "150 ativos",
        rating: "4.9/5",
      },
      videoLink: "#",
    },
  ];

  const stats = [
    { number: "500+", label: "Fisioterapeutas Ativas" },
    { number: "15.000+", label: "Horas Economizadas" },
    { number: "98%", label: "Taxa de Satisfação" },
    { number: "300%", label: "ROI Médio em 90 Dias" },
  ];

  return (
    <section
      id="depoimentos"
      className="testimonials-section py-20 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-56 h-56 bg-accent/5 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Resultados <span className="text-gradient">Reais</span> de Quem Já
            Usa
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Não são apenas números. São histórias de transformação de
            fisioterapeutas que decidiram abraçar o futuro da profissão.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="space-y-8 max-w-6xl mx-auto mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card glass-effect rounded-2xl p-8 hover-lift border border-secondary/20"
            >
              <div className="grid lg:grid-cols-4 gap-6 items-start">
                {/* Photo and Info */}
                <div className="text-center lg:text-left">
                  <img
                    src={testimonial.photo}
                    alt={testimonial.name}
                    className="w-24 h-24 rounded-full mx-auto lg:mx-0 mb-4 object-cover"
                  />
                  <h4 className="font-bold text-secondary mb-1">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-300 mb-1">
                    {testimonial.specialty}
                  </p>
                  <p className="text-xs text-gray-400 mb-1">
                    {testimonial.location}
                  </p>
                  <p className="text-xs text-accent">{testimonial.crefito}</p>
                </div>

                {/* Quote */}
                <div className="lg:col-span-2">
                  <blockquote className="text-gray-300 leading-relaxed mb-4">
                    "{testimonial.quote}"
                  </blockquote>

                  <a
                    href={testimonial.videoLink}
                    className="inline-flex items-center text-accent hover:text-secondary transition-colors"
                  >
                    <span className="mr-2">📹</span>
                    Ver vídeo-depoimento completo
                  </a>
                </div>

                {/* Metrics */}
                <div className="space-y-3">
                  {Object.entries(testimonial.metrics).map(
                    ([key, value], idx) => (
                      <div
                        key={idx}
                        className="bg-secondary/10 rounded-lg p-3 text-center"
                      >
                        <div className="text-lg font-bold text-secondary">
                          {value}
                        </div>
                        <div className="text-xs text-gray-400 capitalize">
                          {key.replace(/([A-Z])/g, " $1").toLowerCase()}
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Testimonials CTA */}
        <div className="text-center">
          <div className="glass-effect rounded-2xl p-8 max-w-3xl mx-auto border border-secondary/30">
            <h3 className="text-2xl font-bold mb-4">
              Quer ver mais depoimentos?
            </h3>
            <p className="text-gray-300 mb-6">
              Temos mais de 50 vídeo-depoimentos de fisioterapeutas que
              transformaram suas clínicas com o IAC.
            </p>
            <button className="bg-accent hover:bg-accent/80 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              📺 Ver Todos os Depoimentos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
