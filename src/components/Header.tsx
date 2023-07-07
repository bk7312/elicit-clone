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

import { 
  Link, 
  NavLink, 
  useNavigate, 
  // useLocation 
} from 'react-router-dom'

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
  Tooltip,
} from '@chakra-ui/react'

import { forwardRef } from 'react'

// import SearchBar from './SearchBar'

interface UserProps {
  isLoggedIn: boolean
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
}

const ProfilePopover = forwardRef<HTMLButtonElement>((props, ref) => (
  <PopoverTrigger>
    <IconButton 
      aria-label='profile' 
      color='gray.500' 
      icon={<PiUserCircleBold/>}
      {...props}
      ref={ref}
    />
  </PopoverTrigger>)
)

export default function Header({ isLoggedIn, setIsLoggedIn }: UserProps) {

  const navigate = useNavigate()
  // const location = useLocation()

  function logout() {
    setIsLoggedIn(false)
    navigate('/')
  }

  return (
    <Flex as='header' alignItems='center' justifyContent='space-between' paddingY='2' paddingX='4'>
      <Button variant='link'>
        <Link to='/'>
          <img src={elicitLogo} alt=''/>
        </Link>
      </Button>

      {/* {location.pathname === '/search' && <SearchBar/>} */}

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
              <Tooltip label='Account settings'>
                <ProfilePopover/>
              </Tooltip>
                
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

