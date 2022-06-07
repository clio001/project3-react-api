import useIsAuthenticated from "../utils/useIsAuthenticated";
import { Navigate } from "react-router-dom";
import React from "react";

export default function ProtectedRoute({ children }) {
  const isAuthenticated = useIsAuthenticated();
  console.log("Authentication status: ", isAuthenticated);
  return <>{isAuthenticated ? children : <Navigate to="/login" replace />}</>;
}
