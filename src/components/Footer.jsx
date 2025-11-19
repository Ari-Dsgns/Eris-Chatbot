import help from "../assets/help.svg";
import refresh from "../assets/refresh.svg";

export const Footer = ({ onHelpClick, onReset }) => {
  return (
    <footer className="w-full sticky bottom-0 flex justify-between items-center  bg-zinc-50 border-t">
      <div className="flex w-full justify-around">
        <button
          className="flex flex-col items-center cursor-pointer text-buttons-normal hover:text-buttons-hover bg-transparent border-none outline-none focus:outline-none focus:ring-2 focus:ring-pink-500"
          onClick={onReset}
        >
          <img src={refresh} alt="reset icon" />
          <p>Reset</p>
        </button>

        <button
          className="flex flex-col items-center cursor-pointer text-buttons-normal hover:text-buttons-hover bg-transparent border-none outline-none focus:outline-none focus:ring-2 focus:ring-pink-500"
          onClick={onHelpClick}
        >
          <img src={help} alt="help icon" />
          <p>Help</p>
        </button>
        
      </div>
    </footer>
  );
};