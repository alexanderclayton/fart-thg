//import//
import Logo from '../assets/THG Small (1).png'
import { SignIn } from './SignIn'
import { Logout } from './Logout'
export const Header: React.FC = () => {
  return (
    <header className='p-4 flex w-full justify-between'>
        <img src={Logo} alt="thg logo" className='w-[70px] h-[44px]'/>
        <nav>
            <ul className='flex'>
                <li className='px-2'><a href="/">Home</a></li>
                <li className='px-2'><a href="/">About Us</a></li>
                <li className='px-2'><a href="/">Why THG?</a></li>
                <li className='px-2'><a href="/">Gallery</a></li>
                <li className='px-2'><a href="/">Contact Us</a></li>
            </ul>
        </nav>
        <div>
            <SignIn />
            <Logout />
        </div>
    </header>
  )
}
