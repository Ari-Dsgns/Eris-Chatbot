
import {RotatingDotsIcon} from './RotatingDotsIcon';



export const Header = () => {
    return (
        <header className="flex items-center justify-between p-4 rounded-xl mb-12 mt-4 text-white  ]">
        <div className=' contain-content flex w-full h-30 items-center justify-center'>
            <p className='text-2xl'>¡Hola! Soy Eris, tu asistente virtual. ¿Cómo puedo ayudarte?</p>
            <RotatingDotsIcon/>
        </div>
        </header>
    );
};

