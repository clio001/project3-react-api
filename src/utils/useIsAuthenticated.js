import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export default function useIsAuthenticated() {
  const { user } = useContext(AuthContext);
  /* console.log("User name from useContext: ", user); */

  const isAuthenticated = user.name === "John" ? true : false;
  return isAuthenticated;
}
