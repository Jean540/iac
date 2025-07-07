
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      message: 'Olá! 👋 Sou a assistente virtual do IAC. Como posso ajudar você hoje?',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const quickQuestions = [
    "Como funciona o IAC?",
    "Qual o preço?",
    "Tem garantia?",
    "Falar com especialista"
  ];

  const handleSendMessage = (message: string) => {
    if (!message.trim()) return;

    // Add user message
    const newMessages = [...messages, {
      type: 'user',
      message: message,
      timestamp: new Date()
    }];

    // Simulate bot response
    setTimeout(() => {
      let botResponse = "Obrigado pela sua pergunta! Nossa equipe entrará em contato em breve. Para respostas imediatas, você pode clicar no botão 'Garantir Vaga' e conhecer todos os detalhes do IAC.";
      
      if (message.toLowerCase().includes('preço') || message.toLowerCase().includes('valor')) {
        botResponse = "💰 O IAC está com 70% de desconto: de R$ 2.997 por apenas R$ 897. Inclui licença vitalícia + 12 meses de suporte + bônus exclusivos. Clique em 'Garantir Vaga' para ver todos os detalhes!";
      } else if (message.toLowerCase().includes('garantia')) {
        botResponse = "🛡️ Sim! Oferecemos garantia TOTAL de 30 dias. Se não ficar 100% satisfeito, devolvemos seu dinheiro integralmente, sem perguntas.";
      } else if (message.toLowerCase().includes('funciona') || message.toLowerCase().includes('como')) {
        botResponse = "🤖 O IAC automatiza sua documentação clínica em 3 passos: 1) IA analisa o paciente, 2) Gera documentação completa, 3) Acompanha resultados. Economiza 15h/semana!";
      }

      setMessages(prev => [...prev, {
        type: 'bot',
        message: botResponse,
        timestamp: new Date()
      }]);
    }, 1000);

    setMessages(newMessages);
    setInputMessage('');
  };

  const handleQuickQuestion = (question: string) => {
    if (question === "Falar com especialista") {
      window.open('https://wa.me/5511999999999?text=Olá! Vim do site do IAC e gostaria de falar com um especialista.', '_blank');
      return;
    }
    handleSendMessage(question);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-gradient-secondary rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform pulse-cta"
        >
          <span className="text-2xl">💬</span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-80 h-96 glass-effect rounded-2xl border border-secondary/30 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-secondary p-4 flex justify-between items-center">
            <div>
              <h4 className="font-bold text-primary">Assistente IAC</h4>
              <p className="text-xs text-primary/80">Online agora</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-primary hover:text-primary/80"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-lg ${
                  msg.type === 'user' 
                    ? 'bg-secondary text-primary' 
                    : 'bg-white/10 text-white'
                }`}>
                  <p className="text-sm">{msg.message}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Questions */}
          <div className="p-2 border-t border-gray-600">
            <div className="grid grid-cols-2 gap-1">
              {quickQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickQuestion(question)}
                  className="text-xs p-2 bg-white/5 hover:bg-white/10 rounded text-secondary transition-colors"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-600">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputMessage)}
                placeholder="Digite sua pergunta..."
                className="flex-1 bg-white/10 border border-gray-600 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-secondary"
              />
              <Button
                onClick={() => handleSendMessage(inputMessage)}
                size="sm"
                className="bg-secondary text-primary hover:opacity-80"
              >
                📤
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
