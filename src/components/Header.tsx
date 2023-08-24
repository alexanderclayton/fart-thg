//import//
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebaseAuth";
import Logo from '../assets/THG Small (1).png'
import { SignIn } from './SignIn'
import { Logout } from './Logout'
export const Header: React.FC = () => {
  const [user] = useAuthState(auth)

  return (
    <header className='p-4 flex w-full justify-between fixed'>
        <img src={Logo} alt="thg logo" className='w-[70px] h-[44px]'/>
        <nav>
            <ul className='flex'>
                <li className='px-2'><a href="/">Home</a></li>
                <li className='px-2'><a href="/about">About Us</a></li>
                <li className='px-2'><a href="/whythg">Why THG?</a></li>
                <li className='px-2'><a href="/gallery">Gallery</a></li>
                <li className='px-2'><a href="/contact">Contact Us</a></li>
            </ul>
        </nav>
        <div>
          {!user ? <SignIn /> : <Logout />}
            
            
        </div>
    </header>
  )
}
