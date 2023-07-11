import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Search from "./pages/Search";
import Faq from "./pages/Faq";
import Tasks from "./pages/Tasks";
import Starred from "./pages/Starred";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";

import Layout from "./components/Layout";
import Error from "./components/Error";

import { useState } from "react";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  redirect,
} from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function defaultLoader(checkLogin: boolean) {
    if (!checkLogin) throw redirect("/login");
    return null;
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={
          <Layout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        }
        errorElement={<Error />}
      >
        <Route index element={<Home isLoggedIn={isLoggedIn} />} />
        <Route
          path="login"
          element={
            <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          }
        />
        <Route
          path="signup"
          element={
            <Signup isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          }
        />
        <Route
          path="search"
          element={<Search />}
          loader={() => defaultLoader(isLoggedIn)}
        />
        <Route path="faq" element={<Faq />} />
        <Route
          path="tasks"
          element={<Tasks />}
          loader={() => defaultLoader(isLoggedIn)}
        />
        <Route
          path="starred"
          element={<Starred />}
          loader={() => defaultLoader(isLoggedIn)}
        />
        <Route path="terms" element={<Terms />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
