import refresh from '../assets/refresh.svg';

export const ResetButton = ({ onReset }) => (
  <button
    className="m-2 p-2 flex gap-2 text-white rounded-3xl bg-buttons hover:bg-pink-800  focus:ring-2 focus:ring-pink-500"
    onClick={onReset}
    aria-label="Reiniciar conversación"
  >
    Reset 
    <img src={refresh}alt="Icono de reinicio" />
  </button>
);

