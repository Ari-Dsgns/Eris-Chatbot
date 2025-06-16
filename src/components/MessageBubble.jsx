
import robot from '../assets/robot.svg'


export const MessageBubble = ({ msg }) => (
  <div
    className={`my-1 p-4 rounded-full w-auto ${
      msg.from === 'bot'
        ? 'bg-slate-300 text-blue-950 self-start'
        : 'bg-slate-400 text-white self-end '
    }`}
  
  >
    <div className="flex items-center gap-2">
    {msg.from === 'bot' && (
      <img className='animate-bounce' src={robot} alt="" />
    )}
    {msg.text}
    
    </div>

  
  </div>
);


