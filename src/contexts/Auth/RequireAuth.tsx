import { useContext } from "react";
import SignIn from "../../pages/Signin";
import { AuthContext } from "./AuthContext";
import Hero from "../../pages/Hero/Hero";

// eslint-disable-next-line no-empty-pattern
export const RequireAuth = ({}: { children: JSX.Element }) => {
  const auth = useContext(AuthContext);
  if (!auth.user) {
    return <SignIn />;
  }
  return <Hero />;
};
