
import bot from "../assets/bot.svg";


export const Header = () => {
  return (
    <header className=" w-full sticky top-0 justify-between p-4 mb-12 mt-4 ">
      <div className=" flex-col contain-content flex w-full h-30 items-start justify-center">
        <img src={bot} alt="Bot" />
        <h1 className="text-3xl font-inter font-semibold mt-10 text-gray-800">
          ¡Hola! Soy Eris, tu asistente virtual. ¿Cómo puedo ayudarte?
        </h1>
        
      </div>
    </header>
  );
};
