import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useState } from "react";
import { Button } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

export default function LogoutButton() {
  const { setUser } = useContext(AuthContext);
  const logout = () => {
    setUser({ name: "", password: "" });
  };
  return (
    <>
      <Button variant="primary" sx={{ color: "white" }} onClick={logout}>
        <LogoutIcon />
      </Button>
    </>
  );
}
