import { Link } from "react-router-dom";
import { AiOutlineCheckCircle } from 'react-icons/ai';
import Social from "../Social/Social";
import ProfilePicture from '../../src/assets/profile-picture.jpg';
import waveDown from '../../src/assets/wave-down.svg';


export default function Presentation() {
  return (
    <>
        <section className="w-full min-h-[400px] bg-[#7ea1aac4] flex flex-col justify-center items-center lg:px-10 md:pt-8 lg:pt-10 gap-12 ">
            <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-8 sm:gap-12">
                <div className="w-[88%] md:w-[70%] lg:w-[65%] lg:mt-5 lg:pl-12">
                    <h3 className="text-center lg:text-left text-base sm:text-[1.2rem]  lg:text-[1.5rem] lg:leading-[2.1rem] font-semibold">A Mestre Patrícia Cruz é Bacharel em Biotecnologia pela UFBA e Mestre em Ciências pela USP. Atua como Mentora acadêmica há mais de 4 anos e já ajudou mais de 50 alunos a atingirem seus objetivos com excelência. <Link to="Sobre" className="cursor-pointer text-blue-600 hover:underline">(saiba mais)</Link></h3>
    
                    <Social/>
                </div>
                <div className="w-[35%] flex justify-center items-center mt-5">
                    <img className="w-72 rounded-full z-10 border-[5px] border-[#651f8d]" src={ProfilePicture} alt="" />
                </div>
            </div>

            <div className="w-full h-full flex justify-center items-center relative mt-12 lg:mt-40">
                <div className="blob w-[350px] h-[350px] md:w-[500px] md:h-[450px] lg:w-[600px] lg:h-[550px] md:mt-10 xl:mt-0"></div>
                <div className="w-fit h-full p-8 md:mt-10 xl:mt-0 relative">
                    <ul className="font-Playpen text-[#fff] font-bold text-xl ml-14 md:text-3xl flex flex-col gap-5 md:mt-5">
                        <li className="flex gap-4 items-center">TCC <AiOutlineCheckCircle className='text-green-400'/></li>
                        <li className="flex gap-4 items-center">Artigo Científico <AiOutlineCheckCircle className='text-green-400'/></li>
                        <li className="flex gap-4 items-center">Projeto de Pesquisa <AiOutlineCheckCircle className='text-green-400'/></li>
                        <li className="flex gap-4 items-center">Relatório <AiOutlineCheckCircle className='text-green-400'/></li>
                        <li className="flex gap-4 items-center">Pôster Científico <AiOutlineCheckCircle className='text-green-400'/></li>
                    </ul>
                
                </div>
            </div>

            <Link to='/' className="mt-10 lg:mt-28 lg:mb-5">
                <button className='bg-[#651f8d] btn-cta '>Entrar em Contato</button>
            </Link>

        </section>
        <div className="relative h-[0.5rem] lg:h-[2rem] w-full z-10">
            <img className="w-full " src={waveDown} alt="" />
        </div>
    </>
  )
}
