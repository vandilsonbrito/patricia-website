
export default function Banner() {

  return (
    <div className="w-full h-[300px] sm:h-[420px] md:h-[500px] lg:h-[800px] 2xl:h-[950px] relative">
      <div className="h-full font-Playpen overflow-hidden bg-hero-pattern bg-cover bg-no-repeat bg-center" >
        <div className="w-full h-full bg-[#00000052] "></div>

          <div className="w-full flex flex-col items-center">
            <div className="absolute top-[20%] lg:top-[25%] w-[85%] lg:w-[70%] text-center">
              <h2 className="text-[1.5rem] sm:text-2xl md:text-4xl xl:text-[4.5rem] rounded-2xl py-2 text-[#fff] font-semibold leading-[2.2rem] md:leading-snug lg:leading-[6rem]">Orientação e Formatação de Textos Acadêmicos</h2>
            </div>
            <div className="absolute top-[65%] lg:top-[70%] w-[80%] text-center ">
              <h2 className="text-base sm:text-xl  md:text-4xl rounded-2xl py-2 text-[#fff] font-semibold leading-tight md:leading-snug lg:leading-tight">O Caminho para o Seu Sucesso!</h2>
            </div>
          </div>
      </div>
    </div>
  )
}


          