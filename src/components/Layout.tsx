
import { Outlet } from "react-router-dom"
import Header from "./Header"

export default function Layout(props) {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header userObj={props.userObj}/>
      <Outlet/>
    </>
  )
}
