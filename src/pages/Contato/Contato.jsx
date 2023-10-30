import { useEffect } from "react";
import { BsWhatsapp } from 'react-icons/bs'; 
import { GrYoutube, GrInstagram } from 'react-icons/gr'; 

export default function Contato() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  return (
    <div className="w-full h-screen bg-[#318ca517] flex flex-col items-center justify-center font-Noto p-5 sm:p-8 lg:p-20 text-center">
        <div className="w-full lg:w-[70%] flex flex-col bg-white p-5 rounded-lg">
            <div className="w-full flex flex-col justify-center items-center gap-8 lg:gap-20">
                <h4 className="text-2xl sm:text-4xl uppercase font-semibold text-purple-800">Fale comigo!</h4>
            
                <div className="w-[80%] flex flex-col justify-center gap-10">
            
                    <div className="text-xl sm:text-2xl w-full flex flex-col">
                        <p className="mb-2">Pelo Telefone:</p>
                        <p><strong>77 99907-2428</strong></p>
                    </div>
                    <div className="w-full flex flex-col justify-center items-center gap-3">
                        <p className="text-sm sm:text-xl capitalize">diretamente pelo WhatsApp Clicando no ícone:</p>
                        <div className="w-fit h-fit p-2 md:p-4 text-2xl md:text-3xl text-white hover:text-green-500 hover:bg-white bg-green-500  rounded-full cursor-pointer ease-in-out"><a href="#" target="_blank" rel="noopener noreferrer" ><BsWhatsapp /></a>
                        </div>
                    </div>
                    <div className="w-full flex flex-col justify-center items-center gap-3">
                        <p className="text-sm sm:text-xl ">Me Acompanhe Também Pelo Instagram e YouTube:</p>
                        <div className="w-full flex justify-center gap-8 sm:gap-20">
                            <div className="flex flex-col items-center">
                                <div className="w-fit h-fit p-2 md:p-4 text-2xl md:text-3xl text-white hover:text-[#e44ca0] hover:bg-white bg-[#e44ca0]  rounded-full cursor-pointer ease-in-out">
                                    <a href="https://www.instagram.com/profa.patriciacruz/" target="_blank" rel="noopener noreferrer"><GrInstagram /></a>
                                </div>
                                <p className="text-xs sm:text-sm mt-1">@profa.patriciacruz</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="w-fit h-fit p-2 md:p-4 text-2xl md:text-3xl text-white  hover:text-red-500 hover:bg-white bg-red-500 rounded-full cursor-pointer ease-in-out"><a href="#" target="_blank" rel="noopener noreferrer"><GrYoutube /></a>
                                </div>
                                <p className="text-xs sm:text-sm mt-1">profa.patriciacruz</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
