
import Home from './pages/Home'
import Login from './pages/Login'
import Search from './pages/Search'
import Faq from './pages/Faq'
import Tasks from './pages/Tasks'
import Starred from './pages/Starred'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import NotFound from './pages/NotFound'

import Layout from './components/Layout'
import Error from './components/Error'

import { useState } from 'react'

import { 
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider, 
  Route, 
} from 'react-router-dom'


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  
  const userObj = {
    isLoggedIn,
    setIsLoggedIn,
  }

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout userObj={userObj}/>} errorElement={<Error/>}>
      <Route index element={<Home/>}/>
      <Route path="login" element={<Login userObj={userObj}/>} />
      <Route path="search" element={<Search/>}/>
      <Route path="faq" element={<Faq/>}/>
      <Route path="tasks" element={<Tasks/>}/>
      <Route path="starred" element={<Starred/>}/>
      <Route path="terms" element={<Terms/>}/>
      <Route path="Privacy" element={<Privacy/>}/>
      <Route path="*" element={<NotFound />}/>
    </Route>
  ))

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
