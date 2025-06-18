import { LogoErisRotating } from "./LogoErisRotating";

export const Header = () => {
  return (
    <header className="flex items-center justify-between  p-4 rounded-xl mb-12 mt-4 text-text1  ]">
      <div className=" contain-content flex w-full h-30 items-center justify-center">
        <h1 className="text-2xl">
          ¡Hola! Soy Eris, tu asistente virtual. ¿Cómo puedo ayudarte?
        </h1>
        <LogoErisRotating />
      </div>
    </header>
  );
};
