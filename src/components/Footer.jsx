import home from "../assets/home.svg";
import help from "../assets/help.svg";

export const Footer = ({ onHomeClick, onHelpClick }) => {
  return (
    <footer className="flex justify-evenly items-center mt-2 p-4 rounded-2xl shadow-normal ">
      <button
        className="flex flex-col items-center cursor-pointer text-buttons-normal hover:text-buttons-hover bg-transparent border-none outline-none focus:outline-none focus:ring-2 focus:ring-pink-500"
        onClick={onHomeClick}
        aria-label="Ir a la pantalla de inicio"
      >
        <img src={home} alt="" />
        <p>Home</p>
      </button>
      <button
        className="flex flex-col items-center cursor-pointer text-buttons-normal hover:text-buttons-hover bg-transparent border-none outline-none focus:outline-none focus:ring-2 focus:ring-pink-500"
        onClick={onHelpClick}
        aria-label="mensaje de ayuda"
      >
        <img src={help} alt="" />
        <p>Help</p>
      </button>
    </footer>
  );
};
