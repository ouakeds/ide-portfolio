interface IProgressBarProps {
    label: string;
    percent: number;
    color: string;
}

const ProgressBar: React.FC<IProgressBarProps> = ({label, percent, color}) => {
    return (
        <div>
            <div className={"mb-1 text-xl text-base font-medium " + `text-${color}-500`}>{label}</div>
            <div className="w-full h-2.5 mb-4 bg-gray-700">
                <div className={`bg-${color}-400 h-2.5 w-[${percent}%]`}/>
            </div>
        </div>
    )
}

export default ProgressBar;