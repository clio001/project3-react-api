import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MenuList from "@mui/material/MenuList";
import { ListItemIcon } from "@mui/material";
import { ListItemText } from "@mui/material";
import { ContentCut } from "@mui/icons-material";
import { MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import BubbleChartIcon from "@mui/icons-material/BubbleChart";
import SearchIcon from "@mui/icons-material/Search";
import InfoIcon from "@mui/icons-material/Info";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";

export default function Navbar() {
  const [show, setShow] = useState(false);

  /* const handleClose = () => setShow(false); */
  const handleShow = () => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

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
                onClick={handleShow}
              >
                <MenuIcon />
              </IconButton>
              <Offcanvas show={show}>
                <Offcanvas.Header>
                  <Offcanvas.Title>s</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <MenuList>
                    <Link to="../about">
                      <MenuItem>
                        <ListItemIcon>
                          <InfoIcon />
                        </ListItemIcon>
                        <ListItemText className="LinkDark">
                          Über 1989
                        </ListItemText>
                      </MenuItem>
                    </Link>
                    <Link to="../list" color="secondary">
                      <MenuItem>
                        <ListItemIcon>
                          <SearchIcon />
                        </ListItemIcon>
                        <ListItemText className="LinkDark">Suche</ListItemText>
                      </MenuItem>
                    </Link>
                    <Link to="../data">
                      <MenuItem>
                        <ListItemIcon>
                          <BubbleChartIcon />
                        </ListItemIcon>
                        <ListItemText className="LinkDark">Daten</ListItemText>
                      </MenuItem>
                    </Link>
                    <Link to="../impressum">
                      <MenuItem>
                        <ListItemIcon>
                          <TextSnippetIcon />
                        </ListItemIcon>
                        <ListItemText className="LinkDark">
                          Impressum
                        </ListItemText>
                      </MenuItem>
                    </Link>
                  </MenuList>
                </Offcanvas.Body>
              </Offcanvas>
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
              {/*               <Link to="../login">
                <AccountCircleIcon />
              </Link> */}
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
