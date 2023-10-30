import Social from '../../../components/Social/Social';
import professoraImg from '../../assets/professora.jpg';
import { useEffect } from 'react';


export default function Sobre() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  return (
    <div className="w-full h-full bg-[#318ca517] flex flex-col p-10 md:p-14 lg:p-20 justify-between items-center font-Noto ">
        <div className="pb-10 lg:pb-20">
            <h1 className='text-3xl'>Patrícia Cruz</h1>
        </div>
        <div className="flex flex-col lg:flex-row justify-around items-center ">
            <div className="w-[100%] lg:w-[40%] flex flex-col justify-center items-center text-lg text-center md:text-left leading-relaxed">
                <h3 className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus iste doloribus dolor dolore autem esse, quibusdam veniam et illum aliquid repellat ut totam nemo architecto, quidem officia pariatur corporis atque?Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima vero ratione, incidunt, temporibus placeat beatae atque tempore molestias reiciendis facilis harum, pariatur deserunt amet commodi.
                </h3>
                <h3 className="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. A, maiores voluptates, est laborum dolore praesentium sit sapiente vitae numquam possimus nemo amet eius natus modi aspernatur esse. Unde, rem aliquam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. </h3>
                <h3 className='mt-5'>Accusantium nam optio laboriosam, praesentium distinctio tempora reiciendis laborum aspernatur similique expedita consectetur odit aliquid doloribus quod. Consequatur amet sint voluptatibus nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ut et modi esse quo dicta laudantium, illo eligendi, deleniti amet aliquam quisquam optio repellat ipsum nobis? Facere placeat harum perspiciatis?</h3>
            </div>
            <div className="w-[100%] md:w-[70%] lg:w-[40%] flex flex-col object-cover bg-center overflow-hidden mt-8 lg:mt-0">
                <img src={professoraImg} alt="Foto da Professora Patrícia" className=''/>
            </div>
            
        </div>
        <div className='w-full flex justify-end items-end'>
            <Social/>
        </div>
    </div>
  )
}
