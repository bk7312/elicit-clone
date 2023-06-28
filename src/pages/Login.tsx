
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

export default function Login(props) {
  // const errorMessage = useActionData()
  // const message = useLoaderData()
  // const navigation = useNavigation()
  const { setIsLoggedIn } = props.userObj

  function login() {
    setIsLoggedIn(true)
  }

  return (
    <>
      <Button onClick={login}>Log in</Button>
    </>
  )
}
