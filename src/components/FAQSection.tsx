
import { useState } from 'react';

export const FAQSection = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(0);

  const faqs = [
    {
      question: "Não entendo nada de tecnologia. O IAC é muito complicado?",
      answer: "Absolutamente não! O IAC foi desenvolvido para ser mais simples que o WhatsApp. Nossa interface é intuitiva e você recebe treinamento completo. Além disso, nossa equipe faz todo o setup para você em 24h. Você só precisa saber usar um computador ou smartphone."
    },
    {
      question: "Funciona para a minha especialidade?",
      answer: "Sim! O IAC funciona para TODAS as especialidades da fisioterapia: ortopedia, neurologia, respiratória, esportiva, pediátrica, geriátrica, e muito mais. Nossa base de dados tem mais de 10.000 protocolos específicos para cada área."
    },
    {
      question: "Quanto tempo leva para implementar na minha clínica?",
      answer: "Em 24 horas sua clínica já estará funcionando com o IAC. Nossa equipe técnica faz todo o setup, configuração e treinamento inicial. Em uma semana você já estará economizando horas diárias de trabalho."
    },
    {
      question: "O sistema é aprovado pelos órgãos reguladores?",
      answer: "Sim! O IAC está totalmente conforme a resolução CFT 424/2018 sobre tecnologia em fisioterapia. Também seguimos todas as normas da LGPD para proteção de dados. Você pode usar com total segurança legal."
    },
    {
      question: "E se eu não ficar satisfeito?",
      answer: "Oferecemos garantia incondicional de 30 dias. Se por qualquer motivo você não ficar 100% satisfeito, devolvemos integralmente seu investimento, sem perguntas, sem burocracia. Assumimos todo o risco para você."
    },
    {
      question: "Preciso pagar mensalidade?",
      answer: "Não! Seu investimento é único. Você adquire licença vitalícia do sistema e nunca mais paga nada. Incluímos também 12 meses de suporte técnico gratuito e atualizações automáticas."
    },
    {
      question: "Como funciona o suporte técnico?",
      answer: "Você tem acesso direto à nossa equipe de suporte via WhatsApp, e-mail e chamadas de vídeo. Respondemos em até 2 horas durante dias úteis. Além disso, há a mentoria direta com Dr. Samuel por 6 semanas."
    },
    {
      question: "Posso usar em várias clínicas?",
      answer: "Sim! Sua licença permite uso em múltiplas clínicas do mesmo proprietário. Não há limitação de número de pacientes ou profissionais. Muitos clientes nossos usam em 2 ou 3 unidades."
    },
    {
      question: "Os dados dos pacientes ficam seguros?",
      answer: "Absolutamente! Utilizamos criptografia de nível bancário e servidores no Brasil. Somos 100% compatíveis com a LGPD. Seus dados e de seus pacientes estão mais seguros que em sistemas tradicionais."
    },
    {
      question: "Como posso ter certeza que funciona?",
      answer: "Além dos 500+ depoimentos de fisioterapeutas ativos, oferecemos garantia de 30 dias. Também temos cases documentados com resultados específicos. Você pode testar sem risco e comprovar os resultados."
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Perguntas{' '}
            <span className="text-gradient">Frequentes</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Esclarecemos todas as dúvidas que fisioterapeutas como você têm sobre o IAC.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="glass-effect rounded-xl border border-secondary/20 overflow-hidden"
            >
              <button
                className="w-full p-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
                onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
              >
                <h3 className="text-lg font-semibold text-secondary pr-4">
                  {faq.question}
                </h3>
                <div className={`transform transition-transform duration-200 text-secondary ${
                  openQuestion === index ? 'rotate-180' : ''
                }`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                openQuestion === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="p-6 pt-0 border-t border-gray-600">
                  <p className="text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions */}
        <div className="text-center mt-16">
          <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto border border-secondary/30">
            <h3 className="text-2xl font-bold mb-4">
              Ainda tem alguma dúvida?
            </h3>
            <p className="text-gray-300 mb-6">
              Fale diretamente com nossa equipe pelo WhatsApp. Respondemos em minutos!
            </p>
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              💬 Falar no WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
