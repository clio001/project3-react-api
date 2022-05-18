import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" color="secondary" elevation={0}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Link to="/">
            {" "}
            <Typography variant="h6" component="div" mr={2}>
              1989
            </Typography>
          </Link>
          <Link to="../list">
            {" "}
            <Typography variant="subtitle1" component="div" mr={1}>
              Sammlung
            </Typography>
          </Link>
          <Link to="../login">
            <Typography variant="subtitle1">Einloggen</Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
