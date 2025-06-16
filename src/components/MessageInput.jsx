import { useState } from 'react';

export const MessageInput = ({ onSend }) => {
  const [input, setInput] = useState('');

  const handleKey = (e) => {
    if (e.key === 'Enter') {
      onSend(input);
      setInput('');
    }
  };

  return (
    <input
      type="text"
      className="w-full p-3 rounded-3xl focus:outline-none mb-2 mt-2 focus:ring-2 focus:ring-complementary text-black bg-zinc-100"
      placeholder="Ej: ¿Cuándo empiezan los exámenes?"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      onKeyDown={handleKey}
    />
  );
};

