import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="w-full h-28 bg-[#4a185a] flex flex-col items-center justify-between">
        <ul className="w-[100%] md:w-[50%] pt-6 flex items-center justify-around text-sm lg:text-lg  text-[#fff] font-semibold uppercase ">
                <Link to='Home'>
                    <li className="hover:text-[#ffce64]">Home</li>
                </Link>
                <Link to='Sobre'>
                    <li className="hover:text-[#ffce64]">Sobre</li>
                </Link>
                <Link to='YouTube'>
                    <li className="hover:text-[#ffce64]">YouTube</li>
                </Link>
                <Link to='Contato'>
                    <li className="hover:text-[#ffce64]">Contato</li>
                </Link>
            </ul>
            <p className='text-white text-sm mb-2'>&copy; Copyright Pati Cruz</p>
    </div>
  )
}
