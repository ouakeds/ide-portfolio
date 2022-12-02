import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../components/Navbar'


export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Sabri Ouaked</title>
        <meta name="description" content="Développeur Fullstack" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-slate-100">
          <NavBar/>
          <div className="relative">
            <div className="p-8 max-w-[1200px] h-screen mt-[-160px] w-full mx-auto flex flex-col justify-center z-10 relative ">
              <div className='p-8 max-w-[800px] h-full w-full mx-auto flex flex-wrap flex-col justify-center'>
                <h1 className='text-left text-black text-sm lg:text-l font-regular uppercase'>Développeur web fullstack_</h1>
                <h1 className='text-left text-gray-900 text-6xl lg:text-8xl font-bold mt-6 drop-shadow-xl'>Bienvenue</h1>
                <h1 className='text-left text-gray-900 text-6xl lg:text-8xl font-bold mt-2 drop-shadow-xl'>Je suis Sabri</h1>
                <h1 className='text-left text-gray-700 text-sm lg:text-l font-regular uppercase mt-12'>Je réalise vos sites webs & api, n'hésitez pas à regarder mon portfolio</h1>
                <button type="button" className="mt-10 h-12 w-48 text-white font-bold bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 uppercase">
                  Voir le portfolio
                </button>
              </div>
            </div>
            <Image src='/photo.jpeg' fill className='z-0 hidden md:block'/>
          </div>


      </main>

      <footer className="">

      </footer>
    </div>
  )
}
