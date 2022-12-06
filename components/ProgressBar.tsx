import { motion, useAnimationControls } from 'framer-motion';
import React, { useEffect } from "react"

const sleep = (ms: number) => new Promise(
    resolve => setTimeout(resolve, ms)
);

interface IProgressBarProps {
    percent: string;
    label?: string;
    delay?: number;
    color?: string;
}

const ProgressBar: React.FC<IProgressBarProps> = ({label, percent, delay, color}) => {
    const progressBarControl = useAnimationControls()

    const divClassName = `mb-1 text-xl text-base font-medium text-red-500`
    const motionDivClassName = `h-2.5 w-[0%] bg-red-400`

    console.log('text color: ', divClassName)
    console.log('bg color: ', motionDivClassName)

    useEffect(() => {
        sleep(delay ?? 0).then(() => {
            progressBarControl.start({width: percent})
        })
    })

    return (
        <div>
            {
                label && <div className={divClassName}>{label}</div>
            }
            <div className="w-full h-2.5 mb-4 bg-gray-700">
                <motion.div className={motionDivClassName}  animate={progressBarControl} />
            </div>
        </div>
    )
}

export default ProgressBar;