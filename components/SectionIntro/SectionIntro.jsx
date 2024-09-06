'use client'
import Image from 'next/image';
import BlankNote from '@/public/img-design/blank-page.jpg';
import Aos from 'aos';
import { useEffect } from 'react';


export default function SectionIntro() {

  useEffect(() => {
    Aos.init({
        duration: 1000
    });
}, []);

  return (
      <section className='w-full min-h-[400px] h-fit flex flex-col items-center px-8 py-5 text-left bg-primary font-medium text-lg sm:text-2xl md:text-3xl xl:text-[2rem] text-[#000] pb-10 lg:py-12 lg:pb-5 overflow-hidden'>
      <div className="w-full h-full flex flex-col justify-center items-center " data-aos="fade-right">
            <h2 className="sm:w-[70%] lg:w-[62%] min-h-[100px] my-3 sm:my-5 leading-snug lg:mt-5 lg:mb-10 text-center md:text-left">Você precisa escrever seu <span className='text-[#5e2b64] font-semibold'>TCC, Artigo, Projeto de Pesquisa, Relatório</span> e não sabe como ou por onde começar?</h2>
            <Image 
              className="w-[80%] sm:w-[70%] lg:w-[50%] rounded-md mt-3 lg:-mt-2 sm:mt-0" 
              src={BlankNote} 
              alt="Página de caderno em branco" 
              />
            <p className="mt-3 sm:mt-5 lg:my-6 sm:text-lg md:text-2xl lg:text-3xl font-bold py-3 px-4 rounded-md " data-aos="fade-left">Você está no lugar certo!</p>
          </div>
      </section>

  )
}
