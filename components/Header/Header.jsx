import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full h-[50px] bg-secundary px-3 sm:px-8 lg:py-8 font-medium z-[100] relative ">
      <nav className="w-full h-full flex justify-center items-center">
        <ul className="w-[90%] md:w-[80%] xl:w-[70%] items-end justify-around text-sm md:text-xl lg:text-[1.3rem] text-black flex">
            <li /* className="hover:text-[#a44fd4]" */>
                <Link href='/'>Home</Link>
            </li>
            <li /* className="hover:text-[#a44fd4]" */>
                <Link href='/sobre'>Sobre</Link>
            </li>
            <li /* className="hover:text-[#a44fd4]" */>
                <Link href='/youtube'>Youtube</Link>
            </li>
        </ul>
      </nav>
    </header>
  );
}
