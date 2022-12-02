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

      <main className="bg-white flex flex-col">
        <div className="h-[100vh] w-full bg-slate-100">
          <NavBar/>
          <div className='flex h-full px-4 md:px-10 lg:px-96 md:pt-20 '>
              <div className='flex flex-col my-2 md:my-12 md:my-48  items-center md:items-start'>
                  <h1 className='text-center md:text-left text-black text-sm md:text-xl font-regular uppercase'>Développeur web fullstack_</h1>
                  <h1 className='text-center md:text-left text-gray-900 text-4xl lg:text-8xl font-bold mt-6 md:mt-10'>Bienvenue !</h1>
                  <h1 className='text-center md:text-left text-gray-900 text-4xl lg:text-8xl font-bold mt-2 drop-shadow-lg'>Je suis Sabri</h1>
                  <h1 className='text-center md:text-left text-gray-700 text-sm md:text-xl font-regular uppercase mt-12'>Je réalise vos sites webs & api, n'hésitez pas à regarder mon portfolio</h1>
                  <button type="button" className="mt-16 h-16 w-48 text-white font-bold bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                    VOIR LE PORTFOLIO
                  </button>
              </div>
              {/* <div className='flex basis-1/2 h-full bg-blue-500 relative hidden md:block  '>
                <Image src='/photo.png' fill/>
              </div> */}
          </div> 
        </div>


        <div className="h-[100vh] w-full  z-10">
          <div className='md:flex px-4 md:px-80'>
              <div className='basis-3/3 md:basis-2/3 w-full flex flex-col my-10 md:my-20 md:my-48'>
                  <h1 className='text-center md:text-left text-gray-900 text-5xl lg:text-8xl font-bold mt-10'>Qui suis-je ?</h1>
              </div>
          </div> 
        </div>

      </main>

      <footer className="">

      </footer>
    </div>
  )
}
