'use client'
import { useState } from "react";
import { GrYoutube, GrInstagram } from 'react-icons/gr'; 

export default function Contato() {

    const FORMS_KEY = process.env.STATIC_FORMS_KEY;

    const handleChange = e => setContact({ ...contact, [e.target.name]: e.target.value });
  
    const [contact, setContact] = useState({
        name: '',
        email: '',
        subject: 'StaticForms - Contact Form',
        honeypot: '', // if any value received in this field, form submission will be ignored.
        message: '',
        replyTo: '@', 
        accessKey: FORMS_KEY 
    });
    const [response, setResponse] = useState({
        type: '',
        message: ''
    });

    const handleSubmit = async e => {
        e.preventDefault();
        try {
        const res = await fetch('https://api.staticforms.xyz/submit', {
            method: 'POST',
            body: JSON.stringify(contact),
            headers: { 'Content-Type': 'application/json' }
        });

        const json = await res.json();

        if (json.success) {
            setResponse({
            type: 'success',
            message: 'Obrigado por entrar em contato!'
            });

            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('message').value = '';
            
        } else {
            setResponse({
            type: 'error',
            message: json.message
            });
        }
        } catch (e) {
        console.log('An error occurred', e);
        setResponse({
            type: 'error',
            message: 'An error occured while submitting the form'
        });
        }
    };

  return (

    <main className="w-full h-full bg-secundary flex flex-col xl:flex-row items-center justify-evenly font-Noto p-5 sm:p-8 lg:p-20 gap-6 text-center" style={{ minHeight: 'calc(100vh - 190px)' }}>

        <div className="w-full xl:w-1/2 h-full flex flex-col justify-center items-center pt-8">
            <div className="w-full flex flex-col lg:py-5 rounded-lg">
                <div className="w-full flex flex-col justify-center items-center gap-8 lg:gap-5" data-aos="fade-right">
                    
                    <h1 className="text-2xl sm:text-[1.4rem] lg:text-2xl font-semibold  text-black text-left">Se tiver alguma dúvida, entre em contato comigo!</h1>
                    
                    <div className="w-full h-full sm:w-[500px] bg-[#dbdbdb86] rounded-2xl mt-10 px-5 pt-12 py-8 flex flex-col items-center font-Montserrat" id="/contato">

                        <form action="https://api.staticforms.xyz/submit" 
                        method="POST" 
                        onSubmit={handleSubmit}
                        className="w-[95%] md:w-[70%] lg:w-[80%] h-full flex flex-col items-center gap-8"
                        >

                            <input 
                            type="text" 
                            name="name"
                            id="name"
                            className="w-full h-[45px] rounded-md px-3" 
                            placeholder="Digite Seu Nome" required 
                            maxLength='25' 
                            onChange={handleChange}
                            />
                            <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            className="w-full h-[45px] rounded-md px-3" 
                            placeholder="Digite Seu E-mail" required 
                            maxLength='50' 
                            onChange={handleChange}
                            /> 
                            <textarea 
                            type="text"
                            name="message"
                            id="message"
                            className="w-full h-[100px] rounded-md px-3 pt-1" 
                            placeholder="Mensagem" 
                            required 
                            onChange={handleChange}
                            />
                            <input 
                            type="submit"
                            value="Enviar" 
                            className="uppercase w-[50%] xl:w-[40%] h-[50px] rounded-xl bg-blue-700 text-white text-lg lg:text-xl font-semibold  cursor-pointer hover:shadow-xl hover:bg-blue-800  active:scale-[0.98] ease-in-out duration-200"
                            />
                            <div className="w-full flex justify-center">
                                <p className=' font-semibold'>{response.type === 'error' ? 'Ocorreu um erro ao enviar. Tente novamente.' : response.message }</p>
                            </div>
                        </form>
                    </div>
                    
                </div>
            </div>
            <div className="w-full flex flex-col p-5 md:p-10  rounded-lg">
                <div className="w-full flex flex-col justify-center items-center gap-8" data-aos="fade-up">
                    <h2 className="text-sm sm:text-xl w-full  font-semibold">Siga minhas redes sociais para ver conteúdos postados diariamente:</h2>
                    <div className="w-full flex justify-center gap-8 sm:gap-20 text-black">
                        <div className="flex flex-col items-center">
                            <div className="w-fit h-fit p-2 md:p-3 text-2xl md:text-3xl bg-[#d4a3d8] text-white hover:shadow-xl rounded-full cursor-pointer ease-in-out active:scale-[.98]">
                                <a href="https://www.instagram.com/profa.patriciacruz/" target="_blank" rel="noopener noreferrer"><GrInstagram /></a>
                            </div>
                            <p className="text-xs sm:text-sm mt-1">@profa.patriciacruz</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-fit h-fit p-2 md:p-3 text-2xl md:text-3xl bg-[#d4a3d8] text-white hover:shadow-xl rounded-full cursor-pointer ease-in-out active:scale-[.98]"><a href="#" target="_blank" rel="noopener noreferrer"><GrYoutube /></a>
                            </div>
                            <p className="text-xs sm:text-sm mt-1">profa.patriciacruz</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </main>
  )
}


/* 

*/