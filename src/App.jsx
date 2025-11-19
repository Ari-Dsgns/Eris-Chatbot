import { ChatWindow } from "./components/ChatWindows";

export function App() {
  return (
    <div
      className="
        flex 
        items-center 
        justify-center 
        min-h-screen 
        w-full         /* ocupa todo el ancho disponible */
        p-3 sm:p-4 md:p-6 /* padding responsive */
        
      "
      role="application"
    >
      <ChatWindow />
    </div>
  );
}
