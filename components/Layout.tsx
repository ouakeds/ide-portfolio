import Sidebar from './Sidebar'
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import json from './feature.json'
import Map from './Map';

interface ILayoutProps {
    children: React.ReactNode
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {

  return (
    <>
        <main className='bg-gray-900 w-screen h-screen'>
          <div className='flex'>
            <Sidebar />
            <div className='h-screen overflow-y-auto w-full '>
              {children}
            </div>
          </div>
        </main>

    </>
  )
}

export default Layout;