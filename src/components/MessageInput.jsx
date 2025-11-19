import { useState } from "react";

export const MessageInput = ({ onSend }) => {
  const [input, setInput] = useState("");

  const handleKey = (e) => {
    if (e.key === "Enter") {
      onSend(input);
      setInput("");
    }
  };

  return (
    <input
      type="text"
      role="textbox"
      aria-label="Campo para escribir tu consulta"
      className="w-full p-4 focus:outline-none mb-2 mt-2 ring-0 rounded-md focus:ring-1 focus:ring-black text-black bg-zinc-200  border-2 border-gray-500"
      placeholder="Ej: Escribe tu consulta aquí..."
      value={input}
      onChange={(e) => setInput(e.target.value)}
      onKeyDown={handleKey}
    />
  );
};
