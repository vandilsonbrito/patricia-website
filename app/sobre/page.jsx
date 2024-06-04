
import Social from '@/components/Social/Social';
import Patricia from '@/public/fotos-patricia/img-perfil-about.webp';
import PatriciaMobile from '@/public/fotos-patricia/img-perfil-about-mobile.webp';
import Image from 'next/image';

export default function Sobre() {

  return (

    <main className="w-full h-full min-h-screen bg-secundary flex flex-col p-10 md:p-14 xl:p-20 justify-between items-center ">
        <div className="py-10 lg:py-10" >
            <h1 className='text-3xl font-medium'>Sobre Mim</h1>
        </div>
        <div className="flex flex-col-reverse xl:flex-row justify-center items-center xl:gap-20">
            <div className="w-[100%] xl:w-[50%] flex flex-col justify-center items-center text-lg xl:text-xl text-left leading-relaxed" >
                <p className="mt-8">A professora Patrícia Cruz é mestre em Ciências pela Universidade de São Paulo, na qual, trabalhou no desenvolvimento de Imunoterapias contra o Câncer induzidos por HPV. Graduada em Biotecnologia pela Universidade Federal da Bahia, e técnica pelo Instituto Federal de Educação, Ciência e Tecnologia da Bahia.
                </p>
                <p className="mt-8">Desde 2011 atua em projetos de pesquisa, possuindo artigos publicados em revista com alto fator de impacto, bem como, trabalhos em congressos nacionais, e premiação em congresso internacional. <strong>Possui ampla experiência em metodologia científica, sendo especialista em orientação de TCC, com método simples e validado, já orientou centenas de alunos de várias áreas do conhecimento a fazer seu TCC de forma simples e descomplicada</strong>.
                </p>
                <p className="mt-8">Tem a missão de ajudar acadêmicos com direcionamento adequado e provar por meio de estratégia que desenvolver um TCC, seja na graduação ou pós graduação, não precisa ser um bicho de sete cabeças. </p>
                
            </div>
            <div className="w-[95%] md:w-[45%] lg:w-[310px] xl:w-[390px] flex flex-col object-cover bg-center overflow-hidden md:mt-8 lg:mt-0 lg:relative lg:left-12" data-aos="fade-left">
            <picture>
                <source media="(max-width: 718px)" srcSet={PatriciaMobile} />
                <source media="(min-width: 719px)" srcSet={Patricia} />
                <Image src={Patricia} alt="Imagem da Professora Patrícia" />
            </picture>
                <div className='visible xl:hidden lg:mt-6 '>
                    <Social/>
                </div>
            </div>

        </div>
        <div className='hidden lg:visible'>
            <Social/>
        </div>
    </main>
  )
}
