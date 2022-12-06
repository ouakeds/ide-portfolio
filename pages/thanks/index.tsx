import TextSpan from "../../components/TextSpan";

export default function Contact() {
    return (
        <div className='flex flex-col  h-screen  w-full items-center justify-center'>
            <div className='text-left text-cyan-400 text-8xl font-bold mt-6 drop-shadow-xl'>
                {
                    "Merci,".split('').map((letter: string, index: number) => (
                    <TextSpan key={index}>
                        {letter === ' ' ? "\u00A0": letter}
                    </TextSpan>
                    ))
                }
            </div>
            <h1 className="text-xl text-gray-600 mt-4">Je reviens vers vous dans les plus brefs délais</h1>


        </div>
    )
}
