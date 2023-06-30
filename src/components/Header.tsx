import elicitLogo from '../assets/elicit-logo.svg'

import { 
  FaRegQuestionCircle,
  FaRegStar,
  FaListUl,
} from 'react-icons/fa'
import { FiLogOut } from 'react-icons/fi'
import { TbLayoutGrid } from 'react-icons/tb'
import { PiShieldBold, PiDownloadBold, PiUserCircleBold } from 'react-icons/pi'

// elicit logo color #94a3b8
import { Link, NavLink } from 'react-router-dom'
import {
  Button,
  ButtonGroup,
  IconButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
} from '@chakra-ui/react'

interface UserProps {
  isLoggedIn: boolean
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Header({ isLoggedIn, setIsLoggedIn }: UserProps) {
  function logout() {
    setIsLoggedIn(false)
  }

  return (
    <header className='flex items-center justify-between px-4 py-2'>
      <Link to='/'>
        <img src={elicitLogo} alt=''/>
      </Link>
      <nav className='flex items-center justify-between'>
        <ButtonGroup variant='ghost'>
          <NavLink to='/faq'>
            <Button 
              leftIcon={<FaRegQuestionCircle/>} 
              color='#94a3b8'
            >FAQ</Button>
          </NavLink>
          {isLoggedIn ? 
          <>
            <NavLink to='/tasks'>
              <Button 
                leftIcon={<TbLayoutGrid/>} 
                color='gray.500'
              >Tasks</Button>
            </NavLink>
            <NavLink to='/starred'>
              <Button 
                leftIcon={<FaRegStar/>} 
                color='gray.500'
              >Starred</Button>
            </NavLink>
            <Popover>
              <PopoverTrigger>
                <IconButton aria-label='profile' icon={<PiUserCircleBold/>}/>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverHeader padding='1'>
                  <Button variant='ghost' leftIcon={<PiUserCircleBold/>}>UserName</Button>
                </PopoverHeader>
                <PopoverBody padding='1'>
                  <Button variant='ghost' leftIcon={<PiDownloadBold/>}>Download Desktop app</Button>
                  <NavLink to='/terms'>
                    <Button variant='ghost' leftIcon={<FaListUl/>}>Terms of service</Button>
                  </NavLink>
                  <NavLink to='/privacy'>
                    <Button variant='ghost' leftIcon={<PiShieldBold/>}>Privacy policy</Button>
                  </NavLink>
                </PopoverBody>
                <PopoverFooter padding='1'>
                <Button 
                  variant='ghost' 
                  leftIcon={<FiLogOut/> }
                  onClick={logout}
                >Logout</Button>
                </PopoverFooter>
              </PopoverContent>
            </Popover>


            
          </> : 
          <NavLink to='login'>
            <Button color='gray.500'>Log in</Button>
          </NavLink>}
          
        </ButtonGroup>
      </nav>
    </header>
  )
}

