import HomeLanding from "./HomeLanding";
import HomeSearch from "./HomeSearch";

interface UserProps {
  isLoggedIn: boolean;
}

export default function Home({ isLoggedIn }: UserProps) {
  return <>{isLoggedIn ? <HomeSearch /> : <HomeLanding />}</>;
}
