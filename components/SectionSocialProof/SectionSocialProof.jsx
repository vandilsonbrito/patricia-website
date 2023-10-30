
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Link } from "react-router-dom";

import 'swiper/css'; // Importe o CSS principal do Swiper
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';

import marcosImg from '../../src/assets/social-proof/marcos.jpg';
import rebecaImg from "../../src/assets/social-proof/rebeca.jpg";
import isabelleImg from "../../src/assets/social-proof/isabelle.jpg";
import larissaImg from "../../src/assets/social-proof/larissa.jpg";
import anaImg from "../../src/assets/social-proof/ana.jpg";
import majuImg from "../../src/assets/social-proof/maju.jpg";
import marceloImg from "../../src/assets/social-proof/marcelo.jpg";
import carlaImg from "../../src/assets/social-proof/carla.jpg";

// Importe os módulos desejados
SwiperCore.use([Navigation, Pagination, Scrollbar]);

export default function SocialProof() {

  const imagesFeedback = [ marcosImg, rebecaImg, isabelleImg, larissaImg, anaImg, majuImg, marceloImg, carlaImg ]
  const displayImagesFeedbakc = () => {
      let draftArr = [];
      let draftArr2 = [];
      for( let i = 0; i < imagesFeedback.length; i++) {
        draftArr.push(
              <img
              className="swiper-imgs"
              src={imagesFeedback[i]}
              alt="mensagem agradecendo pelo trabalho prestado"
            />
        )
        if(draftArr.length === 2) {
          draftArr2.push(draftArr);
        }
      }
      /* const control = parseInt(imagesFeedback.length / 3)
      console.log(draftArr2)
      for(let i = 0; i < d; i++) {

      } */
      draftArr2.map((arr, index) => {
        return (
          <SwiperSlide key={index} className="swiperSlide">
              {arr}
          </SwiperSlide>
        );
      })
  }

    
  return (
    <div  className="w-full min-h-[600px] h-fit flex flex-col justify-center items-center bg-[#318ca523] pt-5 overflow-hidden">
      <div className="mb-8 mt-16 sm:mt-32 lg:mb-14 lg:mt-48">
        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-Playpen text-[#2e8396] font-bold bg- px-4 py-2 rounded-lg shadow-inner shadow-[#55458391]">
          Pessoas que já foram mentoradas
        </h3>
      </div>

      <div className="w-full h-fit lg:h-[400px] flex flex-wrap gap-5 lg:flex-nowrap justify-center  items-center overflow-hidden pb-10">

        <Swiper 
          navigation={window.innerWidth > 760 ? true : false}
          pagination={true}
          loop={true}
          className="w-[1100px] "
          
        > 
        {/* {displayImagesFeedbakc()} */}
          <SwiperSlide className="swiperSlide">
              <img
                className="swiper-imgs"
                src={marcosImg}
                alt="mensagem agradecendo pelo trabalho prestado"
              />
              <img
                className="swiper-imgs"
                src={rebecaImg}
                alt="mensagem agradecendo pelo trabalho prestado"
              />
              <img
                className="swiper-imgs"
                src={isabelleImg}
                alt="mensagem agradecendo pelo trabalho prestado"
              />
         
          </SwiperSlide>
         
          <SwiperSlide className="swiperSlide">
            <img
              className="swiper-imgs"
              src={larissaImg}
              alt="mensagem agradecendo pelo trabalho prestado"
            />
            <img
              className="swiper-imgs"
              src={anaImg}
              alt="mensagem agradecendo pelo trabalho prestado"
            />
            <img
              className="swiper-imgs"
              src={marceloImg}
              alt="mensagem agradecendo pelo trabalho prestado"
            />
          </SwiperSlide>
          <SwiperSlide className="swiperSlide">
              <img
                className="swiper-imgs"
                src={carlaImg}
                alt="mensagem agradecendo pelo trabalho prestado"
              />
              <img
                className="swiper-imgs"
                src={majuImg}
                alt="mensagem agradecendo pelo trabalho prestado"
              />
              <img
                className="swiper-imgs"
                src={isabelleImg}
                alt="mensagem agradecendo pelo trabalho prestado"
              />
          </SwiperSlide>

        </Swiper>
      </div>
      <div className="relative">
          <p className='text-lg text-[#2e8396] font-Playpen font-semibold'>Deslize para ver mais depoimentos</p>
      </div>

      <Link to='/' className="my-14 lg:mt-20 lg:mb-10">
            <button className='bg-green-500 btn-cta '>Entrar em Contato</button>
      </Link>
    </div>
  );
}
