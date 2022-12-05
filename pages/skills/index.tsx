import { motion, MotionConfig, useAnimationControls } from 'framer-motion';
import React, { useEffect } from "react"

const sleep = (ms: number) => new Promise(
    resolve => setTimeout(resolve, ms)
);
  
export default function Skills() {

    const gitControls = useAnimationControls()
    const typescriptControls = useAnimationControls()
    const reactControls = useAnimationControls()
    const nestControls = useAnimationControls()
    const dockerControls = useAnimationControls()

    useEffect(() => {
      sleep(2000).then(() => {
        gitControls.start({width: "85%"})
        typescriptControls.start({width: "80%"})
        reactControls.start({width: "75%"})
        nestControls.start({width: "65%"})
        dockerControls.start({width: "55%"})
      })
    })

    return (
        <MotionConfig transition={{duration: 1.5}}>
            <div className='h-screen w-full flex flex-wrap justify-center px-10'>
                <div className='w-full max-w-[1200px] flex flex-col p-5  justify-center'>
                    <h1 className='text-left text-gray-300 text-sm lg:text-l font-regular uppercase'>Développeur web fullstack_</h1>
                    <h1 className='text-left text-cyan-400 text-6xl lg:text-8xl font-bold mt-6 drop-shadow-xl'>Skills & Expérience </h1>
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
                    <div>
                        <div className="mb-1 text-xl text-base font-medium text-red-500">Git</div>
                        <div className="w-full h-2.5 mb-4 bg-gray-700">
                            <motion.div className="bg-red-400 h-2.5 w-[0%]"  animate={gitControls} />
                        </div>
                    </div>
                    <div>
                        <div className="mb-1 text-xl text-base font-medium text-purple-500">Typescript</div>
                        <div className="w-full h-2.5 mb-4 bg-gray-700">
                            <motion.div className="bg-purple-400 h-2.5 w-[0%]"  animate={typescriptControls} />
                        </div>
                    </div>
                    <div>
                        <div className="mb-1 text-xl text-base font-medium text-orange-500">ReactJS</div>
                        <div className="w-full h-2.5 mb-4 bg-gray-700">
                            <motion.div className="bg-orange-400 h-2.5 w-[0%]"  animate={reactControls} />
                        </div>
                    </div>
                    <div>
                        <div className="mb-1 text-xl text-base font-medium text-green-500">NestJS</div>
                        <div className="w-full h-2.5 mb-4 bg-gray-700">
                            <motion.div className="bg-green-400 h-2.5 w-[0%]"  animate={nestControls} />
                        </div>
                    </div>
                    <div>
                        <div className="mb-1 text-xl text-base font-medium text-blue-500">Docker</div>
                        <div className="w-full h-2.5 mb-4 bg-gray-700">
                            <motion.div className="bg-blue-400 h-2.5 w-[0%]"  animate={dockerControls} />

                        </div>
                    </div>
                </div>
            </div>
        </MotionConfig>
  )
}
