import Link from "next/link";


export default function Footer() {
  return (
    <footer className="w-full h-36 bg-secundary flex flex-col items-center justify-between text-black px-3 md:px-8">
        <ul className="w-[100%] lg:w-[50%] pt-6 flex items-center justify-around text-sm md:text-xl lg:text-lg font-medium capitalize">
                <li className="hover:text-[#a44fd4]">
                    <Link href='/'>Home</Link>
                </li>
                <li className="hover:text-[#a44fd4]">
                    <Link href='/sobre'>Sobre</Link>
                </li>
                <li className="hover:text-[#a44fd4]">
                    <Link href='/youtube'>Youtube</Link>
                </li>
            </ul>
            <p className='text-xs lg:text-sm mt-8'>&copy; Todos os direitos reservados a <a className='hover:underline' href="https://www.instagram.com/profa.patriciacruz/" target="_blank" rel="noopener noreferrer">profa.patriciacruz</a></p>
            <p className='text-xs my-2'>Desenvolvido por <a href="https://www.linkedin.com/in/vandilson-brito-b791b3216/" target="_blank" rel="noopener noreferrer" className='hover:underline'>Vandilson Brito</a></p>
    </footer>
  )
}
