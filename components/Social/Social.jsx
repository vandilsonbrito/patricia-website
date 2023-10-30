
import { BsWhatsapp } from 'react-icons/bs'; 
import { GrYoutube, GrInstagram } from 'react-icons/gr'; 

export default function Social() {
  return (
    <div className="w-full mt-10 flex justify-center gap-5">
        <a href="https://www.instagram.com/profa.patriciacruz/" target="_blank" rel="noopener noreferrer" className="w-fit h-fit p-2 md:p-3 text-xl md:text-2xl text-[#e44ca0] bg-white hover:bg-[#e44ca0] hover:text-white rounded-full cursor-pointer ease-in-out">
            <GrInstagram />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="w-fit h-fit p-2 md:p-3 text-xl md:text-2xl text-red-500 bg-white hover:bg-red-500 hover:text-white rounded-full cursor-pointer ease-in-out">
            <GrYoutube />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="w-fit h-fit p-2 md:p-3 text-xl md:text-2xl text-green-500 bg-white hover:bg-green-500 hover:text-white rounded-full cursor-pointer ease-in-out">
            <BsWhatsapp />
        </a>
    </div>
  )
}
