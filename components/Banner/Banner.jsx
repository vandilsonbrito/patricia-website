import { Josefin_Slab } from "next/font/google";
const josefin = Josefin_Slab({ subsets: ["latin"], weight:['200', '300', '400', '500', '600']});


export default function Banner() {

  return (
    <section className="w-full h-fit min-h-[400px] xl:min-h-screen bg-secundary flex flex-col xl:flex-row px-5 md:px-10 xl:pt-14 xl:pb-5" /* style={{ minHeight: window.innerWidth >= 1280 ? `calc(100vh - 50px)` : 'auto' }} */
      >
        <div className="w-full h-full text-black flex flex-col xl:flex-row justify-evenly items-center" >
            <div className="w-full h-fit pt-10 py-5 md:px-10 md:py-10 lg:py-16 xl:w-[700px] xl:h-full flex justify-center items-center md:mt-10 lg:left-20 lg:px-20 xl:px-0" >

                <h1 
                style={{
                  fontFamily: `${josefin.style.fontFamily}, serif`,
                }} 
                className="w-full text-[2.5rem] md:text-[3.2rem] lg:text-7xl xl:text-[5rem] lg:leading-[5.5rem] font-bold md:font-semibold text-center">
                    Descomplique sua vida acadêmica! 
                    <span className="block text-xl md:text-2xl lg:text-4xl mt-5 md:mt-2 lg:mt-5">Profa. Patrícia Cruz</span>
                </h1>
            </div>
            <div className="w-full h-1/2 xl:w-fit xl:h-full xl:pt-10 flex flex-col items-center justify-end overflow-hidden">
                  <div className="profile-picture w-[335px] h-[410px]  lg:w-[405px] lg:h-[490px]" role="img" aria-label="Imagem Professora Patrícia Cruz">
                    <div className='profile-overlay'></div> 
                  </div>
            </div>
        </div>

    </section>
  )
}
