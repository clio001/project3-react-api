import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export default function useIsAuthenticated() {
  const { user } = useContext(AuthContext);

  const isAuthenticated = user.name !== "" ? true : false;
  return isAuthenticated;
}
