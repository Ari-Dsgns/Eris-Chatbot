
import robot from '../assets/robot.svg'


export const MessageBubble = ({ msg }) => (
  <div
    className={`my-1 p-4 rounded-full w-auto ${
      msg.from === 'bot'
        ? 'bg-textBackground text-text2 self-start'
        : 'bg-textBackground2 text-text2 self-end '
    }`}
  
  >
    <div className="flex items-center gap-2">
    {msg.from === 'bot' && (
      <img className='animate-bounce' src={robot} alt="Icono de mensaje del bot" />
    )}
    {msg.text}
    
    </div>

  
  </div>
);


