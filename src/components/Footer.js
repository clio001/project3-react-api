import * as React from "react";
import { useState } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChatIcon from "@mui/icons-material/Chat";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

export default function Footer() {
  const [value, setValue] = React.useState(0);

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0, width: "100%" }}
      elevation={3}
    >
      <BottomNavigation sx={{ alignItems: "center" }}>
        <Link to="../chat">
          <BottomNavigationAction
            icon={<AccountCircleIcon color="secondary" />}
          />
        </Link>
        <Link to="../chat">
          <BottomNavigationAction icon={<ChatIcon color="secondary" />} />
        </Link>
      </BottomNavigation>
    </Paper>
  );
}
