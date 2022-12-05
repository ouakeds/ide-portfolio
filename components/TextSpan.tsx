import {motion} from 'framer-motion'

interface ITextSpanProps {
    children?: React.ReactNode
};
  
const TextSpan: React.FC<ITextSpanProps> = ({children}) => {

    const transform = [
        "scale3d(1, 1, 1)", 
        "scale3d(1.4, .55, 1)", 
        "scale3d(.75, 1.25, 1)", 
        "scale3d(1.25, .85, 1)", 
        "scale3d(.9, 1.05, 1)", 
        "scale3d(1, 1, 1)", 
    ]

    return (
        <motion.span className='inline-block' whileHover={{transform: transform, transition: {times: [0, .4, .6, .7, .8, .9]}}}>
            {children}
        </motion.span>
    )
}

export default TextSpan;