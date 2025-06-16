import refresh from '../assets/refresh.svg';

export const ResetButton = ({ onReset }) => (
  <button
    className="m-2 p-2 flex gap-2 text-white rounded-3xl bg-primaryButton hover:bg-pink-700  focus:outline-none "
    onClick={onReset}
  >
    Reset 
    <img src={refresh}alt="refresh icon" />
  </button>
);

