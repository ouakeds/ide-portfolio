import Map from "../../components/Map/Map";
import TextSpan from "../../components/TextSpan";

export default function Contact() {

    const letters = "Contact";

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 h-screen justify-center w-full '>
            <div className='w-full max-w-[1100px] flex flex-col justify-center pt-10 px-20 content-center'>
                <div className='justify-center'>
                    <h1 className='text-left text-gray-300 text-sm lg:text-l font-regular uppercase'>Développeur web fullstack_</h1>
                    <h1 className='text-left text-cyan-400 text-6xl lg:text-8xl font-bold mt-6 drop-shadow-xl'>
                        
                        {
                            letters.split('').map((letter: string, index: number) => (
                                <TextSpan>
                                    {letter === ' ' ? "\u00A0": letter}
                                </TextSpan>
                            ))
                        }

                    </h1>
                    <p className='mt-10 text-white text-2xl'>
                        Je suis ouvert à tout opportunité de freelance avec une préférence pour les projets à longue durée.
                        Cependant, si vous avez une requêtes ou une question, n'hésitez pas à me contacter
                    </p>
                </div>
                <div className='mt-12'>
                    <form>
                        <div className='grid grid-cols-2 w-full gap-4'>
                            <input type="name" className="mb-6 border text-xl  focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 dark:bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-400 focus:ring-cyan-500 focus:border-cyan-500" required placeholder='Nom' />
                            <input type="email" className="mb-6 border  text-xl  focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-400 focus:ring-cyan-500 focus:border-cyan-500" required placeholder='Email' />
                        </div>
                        <input type="subject" className="mb-6 border  text-xl  focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-400 focus:ring-cyan-500 focus:border-cyan-500" required placeholder='Sujet' />
                        <div className="px-4 py-2 bg-gray-700">
                            <label className="sr-only">Message</label>
                            <textarea id="comment" rows={6} className="w-full text-xl text-gray-400 border-0 bg-gray-700 focus:ring-0 placeholder-gray-400" required placeholder="Message"></textarea>
                        </div>
                        <button className="mt-10 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                Envoyer
                            </span>
                        </button>
                    </form>
                </div>
            </div>
            <div className='w-full  h-full max-w-[1400px] flex items-center overflow-hidden'>
                <Map />
            </div>
        </div>
    )
}
