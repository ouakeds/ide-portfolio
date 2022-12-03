import Link from 'next/link'

interface ISideBarLinkProps {
    label: string;
    href: string;
    selected?: boolean;
}

const SideBarLink: React.FC<ISideBarLinkProps> = ({href, label, selected}) => {
    return (
        <li>
            <Link href={href} className={`flex items-center p-2 font-semibold text-base text-white hover:bg-gray-700 uppercase ${selected ? 'bg-cyan-500 bg-opacity-20 border border-cyan-800 hover:bg-cyan-500': ''}`}>
                <span className="ml-3 text-sm">{label}</span>
            </Link>
            <hr className="my-2 h-px  border-0 bg-gray-700"/>
        </li>
    )
}

export default SideBarLink;