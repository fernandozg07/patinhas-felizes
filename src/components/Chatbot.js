import React, { useState, useRef, useEffect } from 'react';

const Chatbot = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Olá! Sou o Doutor Patinha, assistente virtual da Patinhas Felizes! 🐾 Como posso ajudar você hoje?', sender: 'bot', time: new Date() }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const botResponses = {
    'agendamento': 'Perfeito! Para agendar uma consulta, preciso de algumas informações:\n\n🐕 Nome do seu pet\n📅 Data preferida\n🕐 Horário preferido\n📋 Tipo de consulta\n\nQual seria a data ideal para você?',
    'precos': 'Nossos preços são super justos! 💰\n\n🩺 Consulta geral: R$ 80-120\n💉 Vacinas: R$ 45-80\n🎁 Kit Coleira+Pulseira: R$ 450-600\n⚕️ Cirurgias: consulte valores\n\nTemos desconto de 10% para clientes do programa fidelidade!',
    'coleira': 'Nossa coleira inteligente é incrível! 🔥\n\n📡 Monitoramento 24h\n📍 GPS em tempo real\n💓 Monitor cardíaco\n🏃 Contador de atividade\n📱 App exclusivo\n\nVem com pulseira matching para você! Quer saber mais?',
    'horarios': 'Nossos horários de funcionamento:\n\n📅 Segunda a Sexta: 8h às 18h\n📅 Sábado: 8h às 14h\n🚨 Domingo: Apenas emergências\n\nQual dia seria melhor para você?',
    'emergencia': '🚨 EMERGÊNCIA VETERINÁRIA 🚨\n\nSe é uma emergência, ligue AGORA:\n📞 (11) 9999-9999\n\nOu venha direto à clínica:\n📍 Rua das Gardênias, 128\nJardim Aurora - São Paulo\n\nEstamos aqui para ajudar!'
  };

  const quickReplies = [
    { text: '📅 Agendar consulta', key: 'agendamento' },
    { text: '💰 Ver preços', key: 'precos' },
    { text: '📡 Coleira inteligente', key: 'coleira' },
    { text: '🕐 Horários', key: 'horarios' },
    { text: '🚨 Emergência', key: 'emergencia' }
  ];

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = (text = inputText) => {
    if (!text.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: text,
      sender: 'user',
      time: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simular resposta do bot
    setTimeout(() => {
      const botResponse = getBotResponse(text.toLowerCase());
      const botMessage = {
        id: Date.now() + 1,
        text: botResponse,
        sender: 'bot',
        time: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const getBotResponse = (text) => {
    for (const [key, response] of Object.entries(botResponses)) {
      if (text.includes(key) || text.includes(key.slice(0, -1))) {
        return response;
      }
    }

    if (text.includes('oi') || text.includes('olá') || text.includes('ola')) {
      return 'Oi! Que bom te ver aqui! 😊 Sou o Doutor Patinha, assistente da Patinhas Felizes. Como posso ajudar você e seu bichinho hoje?';
    }

    if (text.includes('obrigad')) {
      return 'De nada! Foi um prazer ajudar! 🐾💕 Se precisar de mais alguma coisa, estarei aqui. Cuide bem do seu bichinho!';
    }

    return 'Entendi! Para te ajudar melhor, você pode:\n\n📅 Agendar uma consulta\n💰 Ver nossos preços\n📡 Conhecer nossa coleira inteligente\n🕐 Consultar horários\n🚨 Reportar emergência\n\nOu me conte mais sobre o que precisa! 😊';
  };

  const handleQuickReply = (key) => {
    handleSendMessage(botResponses[key] ? key : 'informações');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md h-[600px] flex flex-col">
        
        {/* Header */}
        <div className="text-white p-6 rounded-t-2xl flex justify-between items-center" style={{
          background: 'linear-gradient(135deg, #ec4899, #8b5cf6)'
        }}>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{
              background: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)'
            }}>
              🐶
            </div>
            <div>
              <h3 className="font-bold">Doutor Patinha</h3>
              <p className="text-xs opacity-90">Assistente IA - Patinhas Felizes</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-white hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition-all"
          >
            ✕
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map(message => (
            <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] p-3 rounded-2xl ${
                message.sender === 'user' 
                  ? 'bg-blue-500 text-white rounded-br-sm' 
                  : 'bg-gray-100 text-gray-800 rounded-bl-sm'
              }`}>
                <p className="text-sm whitespace-pre-line">{message.text}</p>
                <p className="text-xs opacity-70 mt-1">
                  {message.time.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-gray-100 p-3 rounded-2xl rounded-bl-sm">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Replies */}
        <div className="p-4 border-t">
          <div className="flex flex-wrap gap-2 mb-3">
            {quickReplies.map(reply => (
              <button
                key={reply.key}
                onClick={() => handleQuickReply(reply.key)}
                className="px-4 py-2 rounded-full text-xs font-medium transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #fce7f3, #e9d5ff)',
                  color: '#8b5cf6',
                  border: '1px solid #ddd6fe'
                }}
              >
                {reply.text}
              </button>
            ))}
          </div>
          
          {/* Input */}
          <div className="flex gap-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Digite sua mensagem..."
              className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-blue-500"
            />
            <button
              onClick={() => handleSendMessage()}
              className="text-white rounded-full p-3 transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #ec4899, #8b5cf6)'
              }}
            >
              📤
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;