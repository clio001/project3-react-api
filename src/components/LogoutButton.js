import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Button } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

export default function LogoutButton() {
  const { logout } = useContext(AuthContext);

  return (
    <>
      <Button variant="primary" sx={{ color: "white" }} onClick={logout}>
        <LogoutIcon />
      </Button>
    </>
  );
}
