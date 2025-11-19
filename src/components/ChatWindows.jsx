import { useState, useRef, useEffect } from "react";
import { MessageBubble } from "./MessageBubble";
import { MessageInput } from "./MessageInput";
import { getBotReply } from "../BotLogic";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const ChatWindow = () => {
  const [messages, setMessages] = useState([]);
  const [mode, setMode] = useState("faq"); // Estado para el modo de la ventana
  const messagesEndRef = useRef(null);

  const faqs = [
    "¿Cuál es el horario de la biblioteca?",
    "¿Cómo accedo al campus virtual?",
    "¿Dónde puedo ver mis calificaciones?",
    "¿Hay posibilidad de obtener becas y ayudas al estudio?",
    "¿Cómo puedo contactar a un profesor?",
  ];

  const sendMessage = (userInput) => {
    if (!userInput.trim()) return;

    if (mode !== "chat") setMode("chat"); // Pasamos al modo chat

    setMessages((prev) => [...prev, { from: "user", text: userInput }]);

    setTimeout(() => {
      const reply = getBotReply(userInput);
      setMessages((prev) => [...prev, { from: "bot", text: reply }]);
    }, 500);
  };

  const handleFaqClick = (question) => {
    sendMessage(question); // Llama a sendMessage y cambia al modo chat
  };

  const resetChat = () => {
    setMessages([]);
    setMode("faq"); // Resetea al modo FAQ
  };

  

  const handleHelpClick = () => {
    alert(
      "Para más información, visita nuestra sección de ayuda en el sitio web."
    );
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <main
      role="main"
      className="
  w-full 
  max-w-lg
  h-[820px]      /* altura fija */
  p-3 sm:p-4 md:p-5 lg:p-6
               /* Móvil: ocupa el 100vh real */
    max-h-screen
    flex flex-col 
    overflow-hidden
  border-4 border-orange-600
  rounded-2xl
  bg-zinc-50 
  text-text1 
  shadow-lg
"
    >
      <Header />

      {mode === "faq" && (
        <div className="flex-1 overflow-y-auto px-2 flex h-auto gap-1 flex-col mb-2 p-2 rounded-md bg-zinc-100 no-scrollbar ">
          <h2 className="text-text2 mb-4 pl-2 font-semibold ">
            FAQ
          </h2>
          {faqs.map((faq, index) => (
            <button
              onClick={() => handleFaqClick(faq)}
              key={index}
              className="mb-1 p-2 bg-zinc-100 text-text2 text-start hover:bg-zinc-200 font-normal"
              aria-label={`Pregunta frecuente: ${faq}`}
            >
              {faq}
            </button>
          ))}
        </div>
      )}

      {mode === "chat" && (
        <div className="flex-1 overflow-y-auto px-2 ">
          <h2 className="text-text2  mt-4 ps-5 ">
            Conversación iniciada
          </h2>
          {messages.map((msg, idx) => (
            <MessageBubble key={idx} msg={msg} />
          ))}
          <div ref={messagesEndRef}></div>
        </div>
      )}

      <div >
        <MessageInput onSend={sendMessage} />
        {/* <ResetButton onReset={resetChat} /> */}
      </div>
      <Footer onHelpClick={handleHelpClick} onReset={resetChat} />
    </main>
  );
};
