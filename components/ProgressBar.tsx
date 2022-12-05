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

    useEffect(() => {
        sleep(delay ?? 0).then(() => {
            progressBarControl.start({width: percent})
        })
    })

    return (
        <div>
            {
                label && <div className={`mb-1 text-xl text-base font-medium text-${color}-500`}>{label}</div>
            }
            <div className="w-full h-2.5 mb-4 bg-gray-700">
                <motion.div className={`bg-${color}-400 h-2.5 w-[0%]`}  animate={progressBarControl} />
            </div>
        </div>
    )
}

export default ProgressBar;