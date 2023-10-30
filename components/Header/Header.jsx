import { Link } from "react-router-dom";
import { RxHamburgerMenu } from 'react-icons/rx';
import NavMobile from '../NavMobile/NavMobile';
import { useEffect } from "react";
import { useGlobal } from '../GlobalProviderMenuIsOpen/MenuIsOpen';
import Overlay from "../NavMobile/Overlay";

export default function Header() {
    const { globalVariable, setGlobalVariable } = useGlobal();

    const toggleBurgerMenu = () => {
        document.querySelector('.burger-menu').classList.toggle('flex');
        document.querySelector('.burger-menu').classList.toggle('hidden');
        document.querySelector('.overlay').classList.toggle('flex');
        document.querySelector('.overlay').classList.toggle('hidden');
  
        setGlobalVariable(!globalVariable);
      }

    useEffect(() => {
        if (globalVariable) {
            document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'auto';
        }
      }, [globalVariable]);
  
    return (
      <div className=" w-full h-[80px] bg-[#4a185a] px-3 sm:px-8 flex items-center justify-between font-Noto font-semibold relative">
            <Link to='/'>
                <div className="w-[70px] sm:w-[100px] lg:ml-3">
                    <h1 className="text-[.85rem] sm:text-xl text-center text-[#fff]">Profa. Pati Cruz</h1>
                </div>
            </Link>

            <div className="mr-1 cursor-pointer">
                <div className="sm:hidden w-full">
                    <RxHamburgerMenu className="menu-burger text-white text-3xl z-50" onClick={() => toggleBurgerMenu()}/>
                    <NavMobile className="burger-menu  w-[70%] h-screen bg-[#4a185a] absolute top-0 right-0 z-[80] px-4 pt-7 flex-col transition ease-in-out duration-700 hidden"/>
                    <Overlay className="overlay w-full h-screen absolute top-0 left-0 bg-[#00000070] z-40 hidden"/>
                </div>
            </div>

            <ul className="w-[50%] items-center justify-around text-sm lg:text-lg  text-[#fff] font-semibold uppercase hidden sm:flex">
                <Link to='/'>
                    <li className="hover:text-[#ffce64]">Home</li>
                </Link>
                <Link to='Sobre'>
                    <li className="hover:text-[#ffce64]">Sobre</li>
                </Link>
                <Link to='Youtube'>
                    <li className="hover:text-[#ffce64]">Youtube</li>
                </Link>
                <Link to='Contato'>
                    <li className="hover:text-[#ffce64]">Contato</li>
                </Link>
            </ul>

      </div>
    )
  }