import Sidebar from './SideBar/Sidebar'
import LoadingScreen from './LoadingScreen';

interface ILayoutProps {
    children: React.ReactNode
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {

  return (
    <>
      <main className='flex w-screen h-screen bg-[#1c1c1c] overflow-hidden overflow-y-auto z-0 relative'>
          <Sidebar />
          {children}
          <LoadingScreen/>
      </main>

    </>
  )
}

export default Layout;