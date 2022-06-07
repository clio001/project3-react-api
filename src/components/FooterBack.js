import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BackButton from "./BackButton";
import Paper from "@mui/material/Paper";

export default function FooterBack() {
  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0, width: "100%" }}
      elevation={3}
    >
      <BottomNavigation
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <BackButton />
      </BottomNavigation>
    </Paper>
  );
}
