import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import { BottomNavigationAction } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0, width: "100%" }}
      elevation={3}
    >
      <BottomNavigation
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <BottomNavigationAction
          label="Search"
          icon={
            <Link to="../list">
              <SearchIcon color="secondary" />
            </Link>
          }
        />
      </BottomNavigation>
    </Paper>
  );
}
