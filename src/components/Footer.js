import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0, width: "100%" }}
      elevation={3}
    >
      <BottomNavigation
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Link to="../login">
          <AccountCircleIcon color="secondary" />
        </Link>
      </BottomNavigation>
    </Paper>
  );
}
