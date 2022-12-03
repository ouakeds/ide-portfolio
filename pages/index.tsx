import Link from "next/link";
import { ComposableMap, Geographies, Geography } from "react-simple-maps"

export default function Home() {
  return (
    <div className='h-screen flex flex-wrap justify-center'>
      <div className='max-w-[800px] flex flex-col p-5'>
        <h1 className='text-left text-gray-300 text-sm lg:text-l font-regular uppercase'>Développeur web fullstack_</h1>
        <h1 className='text-left text-cyan-400 text-6xl lg:text-8xl font-bold mt-6 drop-shadow-xl'>À propos</h1>
        <p className='mt-10 text-white text-2xl'>
          Je suis développeur fullstack localisé à Lille.
          J'apprécie concevoir de nouveaux projets et réaliser des architectures évolutives ainsi que des interfaces utilisateurs. 
        </p>
        <p className='mt-10 text-white text-2xl'>
          Je suis une personne organisé, aimant apprendre chaque jours de nouvelles choses.
          Fan de jeux vidéos, séries télévisés et d'IT.
        </p>
        <p className='mt-10 text-white text-2xl'>
          Intéréssé par du développement web & api en Typescript, je reste ouvert à d'autre proposition de languague étant ouvert au challenges.
        </p>

        <Link className='mt-10 text-cyan-400 font-semibold text-2xl' href='/contact'>
          Construisons votre projet ensemble
        </Link>
      </div>
      <div className=' w-[800px] max-w-[800px] flex flex-col p-5 bg-black'>
          llal
      </div>

    </div>
  )
}
