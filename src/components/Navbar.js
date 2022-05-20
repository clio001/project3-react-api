import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" color="secondary" elevation={0}>
        <Toolbar>
          <Grid container style={{ alignItems: "center" }}>
            <Grid item xs={4}>
              {" "}
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
            </Grid>
            <Grid item xs={4} style={{ textAlign: "center" }}>
              <Link to="/">
                {" "}
                <Typography
                  variant="h4"
                  component="div"
                  mr={2}
                  style={{
                    letterSpacing: "0.2em",
                    fontFamily: "Gloria Hallelujah",
                  }}
                >
                  1989
                </Typography>
              </Link>
            </Grid>
            <Grid item xs={4} style={{ textAlign: "end" }}>
              <Link to="../login">
                <AccountCircleIcon />
              </Link>
            </Grid>
          </Grid>

          {/*  <Link to="../list">
            {" "}
            <Typography variant="subtitle1" component="div" mr={1}>
              Sammlung
            </Typography>
          </Link> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
