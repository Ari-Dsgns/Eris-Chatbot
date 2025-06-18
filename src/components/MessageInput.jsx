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
      className="w-full p-4 rounded-full focus:outline-none mb-2 mt-2 ring-4 focus:ring-2 focus:ring-black text-black bg-zinc-100"
      placeholder="Ej: ¿Cuándo empiezan los exámenes?"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      onKeyDown={handleKey}
    />
  );
};
