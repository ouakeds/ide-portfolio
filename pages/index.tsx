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

      <main className="bg-gray-200">
          <NavBar/>
          <div className="relative" id='home'>
            <div className="p-8 max-w-[1800px] h-screen mt-[-160px] w-full mx-auto flex flex-col justify-center z-10 relative ">
              <div className='p-8 max-w-[1800px] h-full w-full mx-auto flex flex-wrap flex-col justify-center'>
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

          <div className="relative bg-slate-50" id='services'>
            <div className="p-8 max-w-[1800px] mt-[-160px] w-full mx-auto flex flex-col justify-center z-10 relative ">
              <div className='p-8 max-w-[1800px] h-full w-full mx-auto flex flex-wrap flex-col justify-center grid grid-cols-1 md:grid-cols-2 space-x-0 md:space-x-20'>
                  <div className='mt-20'>
                    <h1 className='text-left text-black text-sm lg:text-l font-regular uppercase'>Services_</h1>
                    <h1 className='text-left text-gray-900 text-3xl lg:text-6xl font-bold mt-6 drop-shadow-xl'>Compétences</h1>
                    <p className='mt-10 text-gray-600 text-l mt-4'>
                      Passionné depuis toujours d'informatique, j'ai réalisé mon cursus au sein d'epitech Lille.
                      J'ai pus m'épanouir dans les différents projets proposés et par la suite encore plus en proposant mes services.
                      <br/> Ce que j'aime ? Découvrir de nouvelles notions chaque jours dans ce domaine infini du développement.
                    </p>
                  </div>

                  <div className='mt-20'>
                    <ul>
                      <li className='p-4'>
                        <p className='text-start text-2xl md:text-4xl text-gray-800 font-semibold'>Développement Front</p>
                        <hr className="my-8 h-px bg-gray-200 border-0 bg-gray-400"/>
                      </li>
                      <li className='p-4'>
                        <p className='text-start text-2xl md:text-4xl text-gray-800 font-semibold'>Api Rest</p>
                        <hr className="my-8 h-px bg-gray-200 border-0 bg-gray-400"/>
                      </li>
                      <li className='p-4'>
                        <p className='text-start text-2xl md:text-4xl text-gray-800 font-semibold'>E-Commerce</p>
                        <hr className="my-8 h-px bg-gray-200 border-0 bg-gray-400"/>
                      </li>
                      <li className='p-4'>
                        <p className='text-start text-2xl md:text-4xl text-gray-800 font-semibold'>Site Vitrine</p>
                        <hr className="my-8 h-px bg-gray-200 border-0 bg-gray-400"/>
                      </li>
                    </ul>
                  </div>

              </div>
            </div>
          </div>

      </main>

      <footer className="">

      </footer>
    </div>
  )
}
