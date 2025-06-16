import home from '../assets/home.svg';
import help from '../assets/help.svg';



export const Footer = ({ onHomeClick, onHelpClick }) => {
    return (
        <div className='flex justify-evenly items-center mt-2 p-6 rounded-2xl shadow-normal '>
            <div className='flex flex-col items-center cursor-pointer text-primaryButton hover:text-pink-600'
                onClick={onHomeClick}>
                <img src={home} alt="" />
                <p>Home</p>
            </div>
            <div className='flex flex-col items-center cursor-pointer text-primaryButton hover:text-pink-600 '
                onClick={onHelpClick}>
                <img src={help} alt="" />
                <p>Help</p>
            </div>
        </div>
    );  

};

