import useIsAuthenticated from "../utils/useIsAuthenticated";
import { Navigate } from "react-router-dom";
import React from "react";

export default function ProtectedRoute() {
  const isAuthenticated = useIsAuthenticated();
  console.log(isAuthenticated);
  return (
    <>
      (isAuthenticated ? <Navigate to="../screens/ViewList" replace /> :{" "}
      <Navigate to="/" replace /> )
    </>
  );
}
