import { motion, useAnimationControls } from 'framer-motion'
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const sleep = (ms: number) => new Promise(
    resolve => setTimeout(resolve, ms)
);
  
const LoadingScreen = () => {
  
    const router = useRouter()
    const controls = useAnimationControls()
  
    useEffect(() => {
      sleep(1000).then(() => {
        controls.start({x: "100vw", transition: {duration: 0.75}})
      })
    })
  
    return (
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
    )
}
  
export default LoadingScreen;