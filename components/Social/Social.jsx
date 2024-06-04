
import { MdOutlineMail } from "react-icons/md";
import { GrYoutube, GrInstagram } from 'react-icons/gr'; 

export default function Social() {
  return (
    <nav className="w-full mt-5 ml-2 lg:ml-0 ">
        <ul className="w-full flex justify-center items-center xl:justify-start gap-5">
          <li className="p-2 hover:bg-[#d4a3d8] hover:text-white rounded-full cursor-pointer ease-in-out text-xl md:text-[1.6rem] text-slate-800">
            <a href="https://www.instagram.com/profa.patriciacruz/" target="_blank" rel="noopener noreferrer" aria-label="Acesse o Instagram da professora Patrícia">
                <GrInstagram />
            </a>
          </li>
          <li className="p-2 hover:bg-[#d4a3d8] hover:text-white rounded-full cursor-pointer ease-in-out text-xl md:text-[1.75rem] text-slate-800">
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Acesse o canal do Youtube da professora Patrícia">
                <GrYoutube />
            </a>
          </li>
          <li className="p-2 hover:bg-[#d4a3d8] hover:text-white rounded-full cursor-pointer ease-in-out text-xl md:text-[1.85rem] text-slate-800">
            <a href="mailto:cruzpati@alumni.usp.br" target="_blank" rel="noopener noreferrer" aria-label="Entre em contato pelo e-mail com a professora Patrícia">
                <MdOutlineMail  />
            </a>
          </li>
        </ul>
    </nav>
  )
}
