
export default function Skills() {
  return (

          <div className='h-screen  flex flex-wrap justify-center'>
              <div className='w-[800px] max-w-[800px] w-full flex flex-col p-5  justify-center'>
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
              <div className='w-[800px] max-w-[800px] space-y-4 p-10 justify-center flex flex-col'>
                <div>
                    <div className="mb-1 text-xl text-base font-medium text-cyan-500">Git</div>
                    <div className="w-full h-2.5 mb-4 bg-gray-700">
                        <div className="bg-cyan-400 h-2.5 w-[85%]"/>
                    </div>
                </div>

                <div>
                    <div className="mb-1 text-xl text-base font-medium text-purple-500">Typescript</div>
                    <div className="w-full h-2.5 mb-4 bg-gray-700">
                        <div className="bg-purple-400 h-2.5 w-[80%]"/>
                    </div>
                </div>

                <div>
                    <div className="mb-1 text-xl text-base font-medium text-rose-500">ReactJS</div>
                    <div className="w-full h-2.5 mb-4 bg-gray-700">
                        <div className="bg-rose-400 h-2.5 w-[75%]"/>
                    </div>
                </div>

                <div>
                    <div className="mb-1 text-xl text-base font-medium text-teal-500">NestJS</div>
                    <div className="w-full h-2.5 mb-4 bg-gray-700">
                        <div className="bg-teal-400 h-2.5 w-[65%]"/>
                    </div>
                </div>

                <div>
                    <div className="mb-1 text-xl text-base font-medium text-emerald-500">Docker</div>
                    <div className="w-full h-2.5 mb-4 bg-gray-700">
                        <div className="bg-emerald-400 h-2.5 w-[55%]"/>
                    </div>
                </div>
              </div>
          </div>
  )
}
