import Sidebar from './Sidebar'
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import json from './feature.json'
import Map from './Map';
import {motion, useAnimation, AnimatePresence, MotionConfig, useAnimationControls, Variants} from 'framer-motion'
import { cp } from 'fs/promises';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

interface ILayoutProps {
    children: React.ReactNode
}

const sleep = (ms: number) => new Promise(
  resolve => setTimeout(resolve, ms)
);



const Layout: React.FC<ILayoutProps> = ({ children }) => {

  const router = useRouter()
  const controls = useAnimationControls()

  useEffect(() => {
    sleep(1000).then(() => {
      controls.start({x: "100vw", transition: {duration: 0.75}})
    })
  })

  return (
    <>
      <main className='flex w-screen h-screen bg-[#1c1c1c] overflow-hidden overflow-y-auto z-0 relative'>
          <Sidebar />
          
          {children}

          <motion.div key={router.pathname} className='w-full h-full overflow-x-auto absolute z-20 bg-[#1c1c1c] flex items-center' animate={controls}>
            <div className='w-96 mx-auto flex flex-col items-center space-y-10'>

              <div className='flex flex-col items-center space-y-2'>
                <h1 className='text-3xl text-cyan-500 font-semibold'>Sabri IDE</h1>
                <h2 className='text-xl text-gray-600' >Loading ...</h2>
              </div>
              <div className="w-full h-2.5 mb-4 bg-gray-700">
                <motion.div key={router.pathname} className="bg-gradient-to-r from-cyan-500 to-green-500 h-2.5 w-[0%]"  animate={{width: "100%", transition: { duration: 0.55 }}} />
              </div>

            </div>
          </motion.div>

      </main>

    </>
  )
}

export default Layout;