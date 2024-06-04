
import { AiOutlineCheckCircle } from 'react-icons/ai';
import Social from "@/components/Social/Social";
import ProfilePicture from '@/public/fotos-patricia/img-perfil2.jpg';
import Image from "next/image";
import Link from 'next/link';

export default function Presentation() {

  return (
    <>
        <section className="w-full min-h-[400px] bg-secundary text-black flex flex-col justify-center items-center lg:px-10 md:pt-8 lg:pt-10 xl:gap-8 ">
            <section className="flex flex-col lg:flex-row justify-center items-center gap-8 sm:gap-16 pt-14 lg:pt-8 pb-14">
                <div className="w-full lg:w-fit h-fit lg:h-full z-20 flex flex-col items-center lg:items-end -mt-5 lg:mt-0 "> 
                    <Image className='w-48 md:w-64 xl:w-72 rounded-full' src={ProfilePicture} alt="Imagem da Professora Patrícia Cruz" />
                </div>
                <div className="w-[80%] md:w-[70%] lg:w-[50%] lg:mt-5 ">
                    <h3 className="text-left text-base sm:text-[1.1rem] lg:text-[1.35rem] lg:leading-[1.8rem] font-medium">A Professora Patrícia Cruz é Mestre em Ciências pela USP. Atua como Mentora acadêmica há mais de 4 anos e já ajudou centenas de alunos a atingirem seus objetivos com excelência. <Link href="sobre" className="cursor-pointer underline hover:text-blue-500">Saiba mais.</Link></h3>
    
                    <Social/>
                </div>
            </section>

            <section className="w-full h-full flex flex-col justify-center items-center relative xl:px-20 ">

                <div className="w-full h-full p-8 md:mt-0 xl:mt-0">
                    <ul className="w-full h-full font-semibold text-xl md:text-2xl xl:text-[1.8rem] flex flex-wrap justify-center items-center gap-8 xl:gap-16 text-black">
                        <li className="animation1 px-10 py-5 rounded-md bg-work">
                            <h2 className="flex gap-4 items-center">TCC <AiOutlineCheckCircle className='text-green-600'/></h2>
                        </li>
                        <li className="animation1 px-10 py-5 rounded-md bg-work flex gap-4 items-center">
                            <h2 className="flex gap-4 items-center">Artigo Científico <AiOutlineCheckCircle className='text-green-600'/></h2>
                        </li>
                        <li className="animation1 px-10 py-5 rounded-md bg-work flex gap-4 items-center">
                            <h2 className="flex gap-4 items-center">Projeto de Pesquisa <AiOutlineCheckCircle className='text-green-600'/></h2>
                        </li>
                        <li className="animation1 px-10 py-5 rounded-md bg-work flex gap-4 items-center">
                            <h2 className="flex gap-4 items-center">Relatório <AiOutlineCheckCircle className='text-green-600'/></h2>
                        </li>
                        <li className="animation1 px-10 py-5 rounded-md bg-work flex gap-4 items-center">
                            <h2 className="flex gap-4 items-center">Pôster Científico <AiOutlineCheckCircle className='text-green-600'/></h2>
                        </li>
                        <li className="animation1 px-10 py-5 rounded-md bg-work flex gap-4 items-center">
                            <h2 className="flex gap-4 items-center">Relato de Caso <AiOutlineCheckCircle className='text-green-600'/></h2>
                        </li>
                    </ul>
                </div>
            </section>

            <div className="mt-10 mb-10 lg:mb-10">
                <a 
                href="https://www.instagram.com/profa.patriciacruz/" 
                target="_blank" 
                rel="noopener noreferrer">
                    <button 
                    role='button' 
                    className='bg-button btn-cta ' 
                    aria-label="Entrar em Contato">
                        Entrar em Contato
                    </button>
                </a>
            </div>

        </section>

    </>
  )
}
