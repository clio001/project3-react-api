import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export default function useIsAuthenticated() {
  const { status } = useContext(AuthContext);
  /* console.log("User name from useContext: ", user); */

  const isAuthenticated = status ? true : false;
  return isAuthenticated;
}
