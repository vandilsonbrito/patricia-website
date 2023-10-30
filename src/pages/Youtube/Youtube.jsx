import { useEffect } from "react";
import { GrYoutube } from 'react-icons/gr'; 

export default function Youtube() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  return (
    <div className="w-full h-screen bg-[#318ca517] py-10 lg:py-20 px-5 lg:px-28 flex flex-col items-center gap-8 lg:gap-5">
        <h2 className="w-[] text-lg md:text-2xl text-center px-5">Tenho conteúdos gratuito no YouTube que pode ser de grande ajuda para você que está procurando por insights ou dicas para fazer seu trabalho.</h2>
        <div className="w-[90%] lg:w-[60%] h-[210px] lg:h-[420px] bg-slate-700 flex flex-col justify-center items-center"><GrYoutube className="text-7xl text-red-600"/></div>
    </div>
  )
}
