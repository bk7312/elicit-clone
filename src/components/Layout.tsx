import { Outlet } from "react-router-dom";
import Header from "./Header";

interface UserProps {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Layout({ isLoggedIn, setIsLoggedIn }: UserProps) {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Outlet />
    </>
  );
}
