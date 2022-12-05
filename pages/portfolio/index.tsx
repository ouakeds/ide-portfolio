import Image from "next/image";

const sites = [
    {
        label: 'Ivestu',
        picture: '/projects/logo/ivestu.png'
    },
    {
        label: 'SDIS',
        picture: '/projects/logo/sdis.png'
    },
    {
        label: 'Occo',
        picture: '/projects/logo/occo.png'
    },
    {
        label: 'Supply Hub',
        picture: '/projects/logo/supply-hub.png'
    },
    {
        label: 'RiskManagement',
        picture: '/projects/logo/riskmanagement.png'
    },
    {
        label: 'Resolver',
        picture: '/projects/logo/resolver.png'
    },
    {
        label: 'Veltrix',
        picture: '/projects/logo/veltrix.png'
    },
    {
        label: 'Loumee',
        picture: '/projects/logo/loumee.png'
    },
]

export default function Portfolio() {
    return (
        <div className='h-screen w-full '>
            <div className="flex flex-wrap grid grid-cols-2 md:grid-cols-4">
                {
                    sites.map(({label, picture}) => (
                        <div key={label} className="w-full h-64 md:h-96  shadow-md relative flex justify-center z-10">
                            <div className="flex flex-col justify-center">
                                <button type="button" className="hover:bg-opacity-100 text-white bg-orange-700 hover:bg-orange-800 focus:outline-none focus:ring-4 focus:ring-orange-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
                                    Voir plus
                                </button>
                                {
                                    picture && <Image src={picture} fill alt={`${label}-picture`} className="z-20  hover:z-20 hover:opacity-20 bg-gray-900 overflow-hidden"/>
                                }
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}
