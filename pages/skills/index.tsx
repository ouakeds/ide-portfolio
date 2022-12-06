import { MotionConfig } from 'framer-motion';
import React from "react"
import ProgressBar from '../../components/ProgressBar';
import TextSpan from '../../components/TextSpan';

export default function Skills() {

    return (
            <div className='h-screen w-full flex flex-wrap justify-center px-4 md:px-10'>
                <div className='md:w-[40vw] flex flex-col p-5  justify-center'>
                    <h1 className='text-left text-gray-300 text-sm lg:text-l font-regular uppercase'>Développeur web fullstack_</h1>
                    <div className='text-left text-cyan-400 text-4xl md:text-6xl font-bold mt-6 drop-shadow-xl'>
                        {
                            "Skills & Expériences".split('').map((letter: string, index: number) => (
                            <TextSpan key={index}>
                                {letter === ' ' ? "\u00A0": letter}
                            </TextSpan>
                            ))
                        }
                    </div>
                    <p className='mt-10 text-white text-xl'>
                        J'ai réalisé mes études au sein d'Epitech Lille durant 5 ans.
                        La méthode de cette école par projet & en autonomie m'a grandement formé.
                    </p>
                    <p className='mt-10 text-white text-xl'>
                        J'ai eu l'opportunité de travailler avec des startups durant 3 ans et de les accompagner dans la construction de leur plateforme.
                    </p>
                    <p className='mt-10 text-white text-xl'>
                        Pour ce faire, j'ai été amené à développer des interfaces responsives & fluides en collaborant avec des porteurs de projets & développeurs talentueux.
                        Mais également à réaliser des architectures évolutives ainsi que des apis afin de répondre au modèle souhaité.
                    </p>
                    <p className='mt-10 text-white text-xl'>
                        Visitez mon profil Linkedin pour plus d'informations ou contactez-moi.
                    </p>
                </div>
                <div className='md:w-[40vw] w-full space-y-4 p-10 justify-center flex flex-col'>
                    <MotionConfig transition={{duration: 1.5}}>
                        <ProgressBar key={"progress-bar-git"} percent='85%' label='Git' color='red' delay={2000} />
                        <ProgressBar key={"progress-bar-typescript"} percent='80%' label='Typescript' color='purple' delay={2200} />
                        <ProgressBar key={"progress-bar-react"} percent='75%' label='React' color='orange' delay={2400} />
                        <ProgressBar key={"progress-bar-nest"} percent='65%' label='Nest' color='green' delay={2600} />
                        <ProgressBar key={"progress-bar-docker"} percent='55%' label='Docker' color='blue' delay={2800} />
                    </MotionConfig>

                </div>
            </div>
  )
}
