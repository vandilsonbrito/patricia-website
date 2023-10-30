import Overlay from './Overlay';
import { FaWindowClose } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useGlobal } from '../GlobalProviderMenuIsOpen/MenuIsOpen';
import PropTypes from 'prop-types';

export default function NavMobile({ className }) {
    const { globalVariable, setGlobalVariable } = useGlobal();

    const toggleBurgerMenu = () => {
      document.querySelector('.burger-menu').classList.toggle('flex');
      document.querySelector('.burger-menu').classList.toggle('hidden');
      document.querySelector('.overlay').classList.toggle('flex');
      document.querySelector('.overlay').classList.toggle('hidden');

      setGlobalVariable(!globalVariable)
    }

    useEffect(() => {
      if (globalVariable) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
      
    }, [globalVariable]);

  return (
    <>
        <Overlay className="overlay w-full h-screen absolute top-0 left-0 bg-[#00000063] z-40 hidden"/>
        <div className={`${className} menu`} >
            <button className="w-full flex justify-end">
                <FaWindowClose className='close-menu text-white text-3xl z-[80]' onClick={() => toggleBurgerMenu()}/>
            </button>
            <ul className="w-full h-[50%] flex flex-col justify-evenly items-center text-lg  text-[#fff] font-semibold uppercase mt-8">
            <Link to='/' onClick={() => toggleBurgerMenu()}>
                <li className="hover:text-[#ffce64]">Home</li>
            </Link>
            <Link to='Sobre' onClick={() => toggleBurgerMenu()}>
                <li className="hover:text-[#ffce64]">Sobre</li>
            </Link>
            <Link to='Youtube' onClick={() => toggleBurgerMenu()}>
                <li className="hover:text-[#ffce64]">Youtube</li>
            </Link>
            <Link to='Contato' onClick={() => toggleBurgerMenu()}>
                <li className="hover:text-[#ffce64]">Contato</li>
            </Link>
        </ul>
        </div>
    </>
    
  )
}

NavMobile.propTypes = {
    className: PropTypes.string,
    value: PropTypes.node,
}

