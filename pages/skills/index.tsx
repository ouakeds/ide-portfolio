import { MotionConfig } from 'framer-motion';
import React from "react"
import ProgressBar from '../../components/ProgressBar';
import TextSpan from '../../components/TextSpan';

export default function Skills() {

    const letters = "Skills & Expériences";

    return (
            <div className='h-screen w-full flex flex-wrap justify-center px-10'>
                <div className='w-full max-w-[1200px] flex flex-col p-5  justify-center'>
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
                    <p className='mt-10 text-white text-xl'>
                        J'ai réalisé mes études au sein de Epitech Lille  5 ans.
                        La méthodologie de cette école par projet & en autonomie m'a grandement formés.
                    </p>
                    <p className='mt-10 text-white text-xl'>
                        J'ai eut l'opportunité de travailler avec des startups durant 3 ans et de les accompagner dans la construction de leur plateforme.
                    </p>
                    <p className='mt-10 text-white text-xl'>
                        Pour ce faire, j'ai été amené à développer des interfaces responsives & fluide en collaborant avec des porteurs de projets & développeurs talentueux.
                        Mais également à réaliser des architectures évolutives ainsi que des apis afin de répondre au modèle souhaité.
                    </p>
                    <p className='mt-10 text-white text-xl'>
                        Visitez mon profil LinkedIn pour plus d'informations ou contactez-moi.
                    </p>
                </div>
                <div className='w-full max-w-[1200px] space-y-4 p-10 justify-center flex flex-col'>
                    <MotionConfig transition={{duration: 1.5}}>
                        <ProgressBar key={"Git"} percent='85%' label='Git' color='red' delay={2000} />
                        <ProgressBar key={"Typescript"} percent='80%' label='Typescript' color='purple' delay={2200} />
                        <ProgressBar key={"React"} percent='75%' label='React' color='orange' delay={2400} />
                        <ProgressBar key={"Nest"} percent='65%' label='Nest' color='green' delay={2600} />
                        <ProgressBar key={"Docker"} percent='55%' label='Docker' color='blue' delay={2800} />
                    </MotionConfig>

                </div>
            </div>
  )
}
