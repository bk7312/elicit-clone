import elicitLogo from '../assets/elicit-logo.svg'

import { 
  FaRegQuestionCircle,
  FaRegStar,
  FaListUl,
} from 'react-icons/fa'
import { 
  PiShieldBold,
  PiDownloadBold, 
  PiUserCircleBold 
} from 'react-icons/pi'
import { FiLogOut } from 'react-icons/fi'
import { TbLayoutGrid } from 'react-icons/tb'

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
  Flex,
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
    <Flex as='header' alignItems='center' justifyContent='space-between' padding='2'>
      <Button variant='link'>
        <Link to='/'>
          <img src={elicitLogo} alt=''/>
        </Link>
      </Button>
      <Flex as='nav' alignItems='center' justifyContent='space-between'>
        <ButtonGroup variant='ghost'>
          <NavLink to='/faq'>
            <Button 
              leftIcon={<FaRegQuestionCircle/>} 
              color='gray.500'
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
                <IconButton aria-label='profile' color='gray.500' icon={<PiUserCircleBold/>}/>
              </PopoverTrigger>
              <PopoverContent width='min-content'>
                <PopoverHeader padding='1'>
                  <Button 
                    color='gray.500' 
                    width="100%" 
                    justifyContent="flex-start" 
                    leftIcon={<PiUserCircleBold/>}
                  >UserName</Button>
                </PopoverHeader>
                <PopoverBody padding='1'>
                  <Button 
                    color='gray.500' 
                    width="100%" 
                    justifyContent="flex-start" 
                    leftIcon={<PiDownloadBold/>}
                  >Download Desktop app</Button>
                  <Button 
                    color='gray.500' 
                    width="100%" 
                    justifyContent="flex-start" 
                    leftIcon={<FaListUl/>}
                  >
                    <NavLink to='/terms'>Terms of service</NavLink>
                  </Button>
                  <Button 
                    color='gray.500' 
                    width="100%" 
                    justifyContent="flex-start" 
                    leftIcon={<PiShieldBold/>}
                  >
                    <NavLink to='/privacy'>Privacy policy</NavLink>
                  </Button>
                </PopoverBody>
                <PopoverFooter padding='1'>
                <Button 
                  color='gray.500'
                  leftIcon={<FiLogOut/> }
                  width="100%" 
                  justifyContent="flex-start"
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
      </Flex>
    </Flex>
  )
}

