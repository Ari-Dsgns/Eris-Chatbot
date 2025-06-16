import refresh from '../assets/refresh.svg';

export const ResetButton = ({ onReset }) => (
  <button
    className="m-2 p-2 flex gap-2 text-white rounded-3xl bg-pink-600 hover:bg-blue-600 transition-colors duration-300"
    onClick={onReset}
  >
    Reset
    <img src={refresh}alt="refresh icon" />
  </button>
);

