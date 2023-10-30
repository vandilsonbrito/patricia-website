import BlankPage from '../../src/assets/blank-page.jpg';
import waveUp from '../../src/assets/wave.svg'

export default function SectionIntro() {
  return (
    <>
        <section className='w-full min-h-[400px] h-fit flex flex-col items-center p-3 text-center bg-[#318ca517] font-Noto font-semibold text-lg sm:text-2xl md:text-3xl xl:text-4xl text-[#000] pb-10 lg:pb-20 overflow-hidden'>
            <h2 className="w-[95%] min-h-[100px] my-3 sm:my-5 leading-snug  sm:w-[70%] lg:mt-5">Você precisa fazer seu <strong>TCC, artigo, projeto de pesquisa, relatório</strong> e não sabe como ou por onde começar?</h2>
            <img className="w-[70%] rounded-md -mt-2 sm:mt-0"  src={BlankPage} alt="página em branco" />
            <p className="mt-3 sm:mt-5 lg:mt-8 text-sm sm:text-lg md:text-2xl lg:text-3xl font-bold py-3 px-4 bg-blue-700 rounded-md text-white">Pois você está no lugar certo!</p>
            
            <div className="relative h-[2rem] sm:h-[5rem] md:h-[7rem] lg:h-[8rem] w-[110%] sm:w-[105%] z-50">
                <img src={waveUp} alt="" />
                
            </div>
        </section>
    </>
  )
}
