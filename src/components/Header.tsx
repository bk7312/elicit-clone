import elicitLogo from '../assets/elicit-logo.svg'
import faqIcon from '../assets/faq-icon.svg'
import tasksIcon from '../assets/tasks-icon.svg'
import starredIcon from '../assets/starred-icon.svg'
import profileIcon from '../assets/profile-icon.svg'
import downloadIcon from '../assets/download-icon.svg'
import termsIcon from '../assets/terms-icon.svg'
import privacyIcon from '../assets/privacy-icon.svg'
import logoutIcon from '../assets/logout-icon.svg'

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
              leftIcon={<img src={faqIcon}/>} 
              color='#94a3b8'
            >FAQ</Button>
          </NavLink>
          {isLoggedIn ? 
          <>
            <NavLink to='/tasks'>
              <Button 
                leftIcon={<img src={tasksIcon}/>} 
                color='gray.500'
              >Tasks</Button>
            </NavLink>
            <NavLink to='/starred'>
              <Button 
                leftIcon={<img src={starredIcon}/>} 
                color='gray.500'
              >Starred</Button>
            </NavLink>
            <Popover>
              <PopoverTrigger>
                <IconButton aria-label='profile' icon={<img src={profileIcon}/>}/>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverHeader padding='1'>
                  <Button variant='ghost' leftIcon={<img src={profileIcon}/>}>UserName</Button>
                </PopoverHeader>
                <PopoverBody padding='1'>
                  <Button variant='ghost' leftIcon={<img src={downloadIcon}/>}>Download Desktop app</Button>
                  <NavLink to='/terms'>
                    <Button variant='ghost' leftIcon={<img src={termsIcon}/>}>Terms of service</Button>
                  </NavLink>
                  <NavLink to='/privacy'>
                    <Button variant='ghost' leftIcon={<img src={privacyIcon}/>}>Privacy policy</Button>
                  </NavLink>
                </PopoverBody>
                <PopoverFooter padding='1'>
                <Button 
                  variant='ghost' 
                  leftIcon={<img src={logoutIcon}/> }
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

