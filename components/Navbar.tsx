import Image from 'next/image'
import NavigationLink from './NavLink';

const NavBar = () => {
    return (
      <nav className="h-40 w-full z-20 top-0 left-0 border-b border-gray-200">
        <div className="flex px-10">
          
          <div className="h-40 hidden md:flex">
              <div className='my-auto h-20 w-20 bg-gray-800 relative my-auto'>
                  <Image src='/icon.png' fill/>
              </div>
          </div>
  
          <div className="flex items-center w-full h-40 text-align-center">
            <div className='space-x-12 mx-auto'>
              <NavigationLink title='Home' href='#'/>
              <NavigationLink title='Services' href='#'/>
              <NavigationLink title='Contact' href='#'/>
            </div>
          </div>
  
          <div className="h-40 flex">
              <div className='ml-auto my-auto h-10 w-10 md:h-20 md:w-20 bg-gray-800 grid'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="h-8 w-10 md:w-16 md:h-10 mx-auto my-auto">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
  
              </div>
          </div>
          
        </div>
      </nav>
    )
}

export default NavBar;