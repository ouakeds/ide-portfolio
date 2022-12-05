import Link from "next/link";
import TextShpere from "../components/TextSphere";

import {motion} from 'framer-motion'
import React from "react";
import TextSpan from "../components/TextSpan";


export default function Home() {

  const letters = "À propos";

  return (
    <div className='h-screen w-full flex flex-wrap justify-center px-10'>
      <div className='w-full max-w-[1200px] flex flex-col p-5 justify-center'>
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
      <div className='w-full max-w-[1100px] flex flex-col p-5'>
          <TextShpere/>
      </div>
    </div>
  )
}
