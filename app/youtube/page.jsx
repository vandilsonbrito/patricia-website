import { GrYoutube } from 'react-icons/gr'; 

export default function Youtube() {

  return (
  
    <main className="w-full bg-primary py-10 lg:py-20 px-5 lg:px-28 flex flex-col justify-center items-center gap-8 lg:gap-5" style={{ minHeight: 'calc(100vh - 100px)' }}>
        <h1 className="w-[] text-lg md:text-xl text-center px-5 lg:px-10">Tenho conteúdos gratuito no YouTube que pode ser de grande ajuda para você que está procurando por insights ou dicas para fazer seu trabalho.</h1>
        <div className="w-[90%] lg:w-[60%] h-[210px] lg:h-[420px] bg-slate-700 flex flex-col justify-center items-center"><GrYoutube className="text-7xl text-red-600"/></div>
    </main>
  )
}
