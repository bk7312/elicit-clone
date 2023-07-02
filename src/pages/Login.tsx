
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

import { Flex, Text, Button } from '@chakra-ui/react'
import { FcGoogle } from 'react-icons/fc'
import { MdMail } from 'react-icons/md'

// export async function loader({ request }) {
//   try {
//     console.log(request)
//   } catch(error) {
//     return error
//   }
// }

// export async function action({ request }) {

//   try {
//     console.log(request)
//   } catch(error) {
//     return error
//   }
// }


interface UserProps {
  isLoggedIn: boolean
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
}


export default function Login({ isLoggedIn, setIsLoggedIn }: UserProps) {

  const navigate = useNavigate()

  function login() {
    setIsLoggedIn(true)
    navigate('/')
  }
  
  useEffect(() => {
    if (isLoggedIn) {
      navigate('/')
    }
  })

  return (
    <Flex 
      direction='column' 
      margin='auto' 
      maxWidth='400px'
      justifyContent='center'
      height='85dvh' 
    >
      <Flex justifyContent='space-between' alignItems='center'>
        <Text fontSize='xl' fontWeight='bold'>Log in</Text>
        <Link to='/signup'><Text>Sign up for an account</Text></Link>
      </Flex>
      <Button 
        colorScheme='messenger' 
        onClick={login} 
        leftIcon={<MdMail/>} 
        marginTop='1em'
        size='lg'
      >Log in with email</Button>
      <Button 
        variant='outline' 
        onClick={login} 
        leftIcon={<FcGoogle/>} 
        marginTop='1em'
        size='lg'
      >Log in with Google</Button>
      <Text textAlign='center' marginTop='1.5em'>
        By continuing, you are indicating that you accept our 
        <Link to='/terms'>Terms of Service</Link> and 
        <Link to='/privacy'>Privacy Policy</Link>.
      </Text>
      <Text textAlign='center' marginTop='1.5em'>Need help? Email us at help@elicit.org</Text>
    </Flex>
  )
}
