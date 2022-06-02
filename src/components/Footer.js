import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
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
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Link to="../list">
          <SearchIcon color="secondary" />
        </Link>
      </BottomNavigation>
    </Paper>
  );
}
