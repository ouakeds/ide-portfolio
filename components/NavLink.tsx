import Link from "next/link";

interface ILinkProps {
    title: string;
    href: string;
}

const NavigationLink: React.FC<ILinkProps> = ({href, title}) => {
    return (

        <Link href={href}>
            <button className="font-semibold text-xl text-gray-800 decoration-[#1c1c1c] hover:underline decoration-2 underline-offset-8">
            {title}
            </button>
        </Link>
    )
}

export default NavigationLink;