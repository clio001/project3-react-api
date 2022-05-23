import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0, width: "100%" }}
      elevation={3}
    >
      <BottomNavigation sx={{ alignItems: "center" }}>
        <Link to="../login">
          <BottomNavigationAction
            icon={<AccountCircleIcon color="secondary" />}
          />
        </Link>
      </BottomNavigation>
    </Paper>
  );
}
