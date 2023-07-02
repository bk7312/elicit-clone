
import Landing from "./Landing"
import SearchBar from "../components/SearchBar"


interface UserProps {
  isLoggedIn: boolean
}


export default function Home({ isLoggedIn }: UserProps) {

  return (
    <>
      {isLoggedIn ? <SearchBar/> : <Landing/>}
    </>
  )
}




