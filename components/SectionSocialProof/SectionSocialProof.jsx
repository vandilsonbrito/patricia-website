"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import feedback1 from '@/public/social-proof/feedback1.webp';
import feedback2 from "@/public/social-proof/feedback2.webp";
import feedback3 from "@/public/social-proof/feedback3.webp";
import feedback4 from "@/public/social-proof/feedback4.webp";
import feedback5 from "@/public/social-proof/feedback5.webp";
import feedback6 from "@/public/social-proof/feedback6.webp";
import feedback7 from "@/public/social-proof/feedback7.webp";
import feedback8 from "@/public/social-proof/feedback8.webp";
import feedback9 from "@/public/social-proof/feedback9.webp";
import Image from 'next/image';
import Aos from 'aos';
import { useEffect } from 'react';


export default function SocialProof() {

    useEffect(() => {
      Aos.init({
          duration: 1000
      });
    }, []);

    return (
      <section  className="w-full min-h-[600px] h-fit flex flex-col justify-center items-center bg-primary pt-5 px-5 lg:px-14 text-black">
        <div className="w-full flex justify-center items-center lg:mb-8 mt-8 lg:mt-16 lg:my-10" >
          <h3 className="w-[100%] lg:w-[90%] text-center text-2xl md:text-2xl lg:text-3xl font-semibold px-4 rounded-lg">Depoimentos de alunos que já foram mentoradas</h3>
        </div>

        <div className="lg:hidden">
          <Swiper
            modules={[ Navigation, Pagination ]}
            navigation={false}
            pagination={{ clickable: true }}
            loop={true}
            className="w-[290px] h-full justify-center items-center"
          >
            <SwiperSlide  className="swiperSlide">
                <div className="w-full h-full rounded-s-xl flex flex-col justify-center items-center">
                  <Image
                    className="swiper-social-proof-imgs"
                    src={feedback1}
                    alt="mensagem agradecendo Patrícia Cruz pelo trabalho prestado"
                  />
                </div>
            </SwiperSlide>
            <SwiperSlide className="swiperSlide">
              <div className="w-full h-full rounded-s-xl flex flex-col justify-center items-center">
                <Image
                  className="swiper-social-proof-imgs"
                  src={feedback2}
                  alt="mensagem agradecendo Patrícia Cruz pelo trabalho prestado"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiperSlide">
              <div className="w-full h-full rounded-s-xl flex flex-col justify-center items-center">
                <Image
                  className="swiper-social-proof-imgs"
                  src={feedback3}
                  alt="mensagem agradecendo Patrícia Cruz pelo trabalho prestado com sucesso"
                />
              </div>
            </SwiperSlide>
      
            <SwiperSlide  className="swiperSlide">
                <div className="w-full h-full rounded-s-xl flex flex-col justify-center items-center">
                  <Image
                    className="w-72"
                    src={feedback4}
                    alt="mensagem agradecendo Patrícia Cruz pelo trabalho prestado"
                  />
                </div>
            </SwiperSlide>
            <SwiperSlide className="swiperSlide">
              <div className="w-full h-full flex flex-col justify-center items-center">
                <Image
                  className="w-72"
                  src={feedback5}
                  alt="mensagem agradecendo Patrícia Cruz pelo trabalho prestado"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiperSlide">
              <div className="w-full h-full rounded-e-xl flex flex-col justify-center items-center">
                <Image
                  className="w-72"
                  src={feedback6}
                  alt="mensagem agradecendo Patrícia Cruz pelo trabalho prestado"
                />
              </div>
            </SwiperSlide>
          
            <SwiperSlide className="swiperSlide">
              <div className="w-full h-full rounded-e-xl flex flex-col justify-center items-center">
                <Image
                  className="swiper-social-proof-imgs"
                  src={feedback7}
                  alt="mensagem agradecendo Patrícia Cruz pelo trabalho prestado"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiperSlide">
              <div className="w-full h-full rounded-e-xl flex flex-col justify-center items-center">
                <Image
                  className="swiper-social-proof-imgs"
                  src={feedback8}
                  alt="mensagem agradecendo Patrícia Cruz pelo trabalho prestado"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiperSlide">
              <div className="w-full h-full rounded-e-xl flex flex-col justify-center items-center">
                <Image
                  className="swiper-social-proof-imgs"
                  src={feedback9}
                  alt="mensagem agradecendo Patrícia Cruz pelo trabalho prestado"
                />
              </div>
            </SwiperSlide>

          </Swiper>
        </div>
          <div className="relative lg:hidden">
            <p className='text-lg font-Noto font-medium '>Deslize para ver mais depoimentos</p>
          </div>

        <div className="hidden lg:flex w-full h-fit flex-wrap gap-5 justify-center items-center overflow-hidden py-5 px-32" >
            <Image
                className="social-proof-imgs"
                src={feedback1}
                alt="mensagem agradecendo Patrícia Cruz pelo trabalho prestado"
                data-aos="fade-up"
            />
            <Image
                className="social-proof-imgs"
                src={feedback2}
                alt="mensagem agradecendo Patrícia Cruz pelo trabalho prestado"
                data-aos="fade-up"
            />
            <Image
                className="social-proof-imgs"
                src={feedback3}
                alt="mensagem agradecendo Patrícia Cruz pelo trabalho prestado"
                data-aos="fade-up"
            />
            <Image
                className="social-proof-imgs"
                src={feedback4}
                alt="mensagem agradecendo Patrícia Cruz pelo trabalho prestado"
                data-aos="fade-up"
            />    
            <Image
                className="social-proof-imgs"
                src={feedback5}
                alt="mensagem agradecendo Patrícia Cruz pelo trabalho prestado"
                data-aos="fade-up"
            />
            <Image
                className="social-proof-imgs"
                src={feedback6}
                alt="mensagem agradecendo Patrícia Cruz pelo trabalho prestado"
                data-aos="fade-up"
            />
            <Image
                className="social-proof-imgs"
                src={feedback7}
                alt="mensagem agradecendo Patrícia Cruz pelo trabalho prestado"
                data-aos="fade-up"
            />
            <Image
                className="social-proof-imgs"
                src={feedback8}
                alt="mensagem agradecendo Patrícia Cruz pelo trabalho prestado"
                data-aos="fade-up"
            /> 
            <Image
                className="social-proof-imgs"
                src={feedback9}
                alt="mensagem agradecendo Patrícia Cruz pelo trabalho prestado"
                data-aos="fade-up"
            /> 
        </div>

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
    );
}
