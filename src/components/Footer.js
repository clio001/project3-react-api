import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FilterListIcon from "@mui/icons-material/FilterList";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0, width: "100%" }}
      elevation={3}
    >
      <BottomNavigation sx={{ alignItems: "center" }}>
        <Link to="../chat">
          <BottomNavigationAction icon={<FilterListIcon color="secondary" />} />
        </Link>
      </BottomNavigation>
    </Paper>
  );
}
