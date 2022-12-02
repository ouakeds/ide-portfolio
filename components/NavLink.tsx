
interface ILinkProps {
    title: string;
    href: string;
}

const NavigationLink: React.FC<ILinkProps> = ({href, title}) => {
    return (
        <a href={href} className="font-semibold text-xl text-gray-700 decoration-gray-700 hover:underline decoration-2 underline-offset-8">
        {title}
        </a>
    )
}

export default NavigationLink;