import { useState, useRef, useEffect } from 'react';
import {MessageBubble }from './MessageBubble';
import {MessageInput} from './MessageInput';
import {ResetButton} from './ResetButton';
import { getBotReply } from '../BotLogic';
import {Footer} from './Footer';
import {Header} from './Header';



export const ChatWindow = () => {
  const [messages, setMessages] = useState([]);
  const [mode, setMode] = useState('faq'); // Estado para el modo de la ventana
  const messagesEndRef = useRef(null);

  const faqs = [
    "¿Cuál es el horario de la biblioteca?",
    "¿Cómo accedo al campus virtual?",
    "¿Dónde puedo ver mis calificaciones?",
    "¿Hay posibilidad de obtener becas y ayudas al estudio?",
    "¿Cómo puedo contactar a un profesor?"

  ];

  const sendMessage = (userInput) => {
    if (!userInput.trim()) return;

    if(mode !== 'chat') setMode('chat'); // Pasamos al modo chat

    setMessages(prev => [...prev, { from: 'user', text: userInput }]);

    setTimeout(() => {
      const reply = getBotReply(userInput);
      setMessages(prev => [...prev, { from: 'bot', text: reply }]);
    }, 500);
  };


  const handleFaqClick = (question) => {
    sendMessage(question); // Llama a sendMessage y cambia al modo chat
  }

  const resetChat = () => {
    setMessages([]);
    setMode('faq'); // Resetea al modo FAQ
  };

  const handleHomeClick = () => {
    resetChat();
  };

  const handleHelpClick = () => {
    alert("Para más información, visita nuestra sección de ayuda en el sitio web.");
  };


  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);








  return (
    <div
      className="w-full max-w-lg p-6 sm:p-5 rounded-none sm:rounded-3xl flex flex-col overflow-hidden 
            bg-gradient-to-b from-primary to-blue-300  text-gray-900 shadow-shiny">
      <Header />

      {mode === "faq" && (
        <div className="flex gap-1 flex-col rounded-md p-2   ">
          <p className="text-white font-bold mb-4 ps-5">
            Preguntas frecuentes:
          </p>
          {faqs.map((faq, index) => (
            <button
              onClick={() => handleFaqClick(faq)}
              key={index}
              className="mb-1 p-3  bg-slate-300 border-none text-gray-800 text-start rounded-full hover:bg-slate-400 hover:border-none "
            >
              {faq}
            </button>
          ))}
        </div>
      )}

      {mode === "chat" && (
        <div className="flex-1 rounded-md min-h-40 max-h-80 overflow-auto p-2 mb-2 ">
          {messages.map((msg, idx) => (
            <MessageBubble key={idx} msg={msg} />
          ))}
          <div ref={messagesEndRef}></div>
        </div>
      )}

      <div className=" border-gray-200">
        <p className="text-white mt-4 font-bold ps-5 ">O escribe tu consulta:</p>
        <MessageInput onSend={sendMessage} />
        <ResetButton onReset={resetChat} />
      </div>
      <Footer onHomeClick={handleHomeClick} onHelpClick={handleHelpClick}/>
    </div>
  );
};


