
// import {
//   useLoaderData,
//   useNavigation,
//   Form,
//   Link,
//   redirect,
//   useActionData
// } from "react-router-dom"

import { Button } from "@chakra-ui/react"

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
  // const errorMessage = useActionData()
  // const message = useLoaderData()
  // const navigation = useNavigation()

  function login() {
    setIsLoggedIn(true)
  }

  if (isLoggedIn) {
    // redirect
  }

  return (
    <>
      <Button onClick={login}>Log in</Button>
    </>
  )
}
