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
import { MenuItem, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { Offcanvas } from "react-bootstrap";
import BubbleChartIcon from "@mui/icons-material/BubbleChart";
import SearchIcon from "@mui/icons-material/Search";
import InfoIcon from "@mui/icons-material/Info";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import { AuthContext } from "../context/AuthContext";
import LogoutButton from "./LogoutButton";
import ForumIcon from "@mui/icons-material/Forum";
import useIsAuthenticated from "../utils/useIsAuthenticated";
import PersonIcon from "@mui/icons-material/Person";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";

export default function Navbar() {
  const [show, setShow] = useState(false);
  const { status, user, logout } = useContext(AuthContext);
  const isAuthenticated = useIsAuthenticated();

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
              <Offcanvas show={show} style={{ width: "18rem" }}>
                <Offcanvas.Header>
                  <Offcanvas.Title>s</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  {isAuthenticated && (
                    <div>
                      <Box m={1}>
                        <PersonIcon
                          fontSize="large"
                          style={{ marginBottom: "0.5rem" }}
                        />
                        <Typography mb={2}>{user.email}</Typography>
                      </Box>

                      <Divider />
                      <Box mt={1} mb={1}>
                        {" "}
                        <Link to="../bookmarks">
                          <MenuItem>
                            <ListItemIcon>
                              <CollectionsBookmarkIcon />
                            </ListItemIcon>
                            <ListItemText className="LinkDark">
                              Meine Sammlung
                            </ListItemText>
                          </MenuItem>
                        </Link>
                        <Link to="../chat">
                          <MenuItem>
                            <ListItemIcon>
                              <ForumIcon />
                            </ListItemIcon>
                            <ListItemText className="LinkDark">
                              Feedback
                            </ListItemText>
                          </MenuItem>
                        </Link>
                      </Box>

                      <Divider />
                    </div>
                  )}

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
                    <Divider />
                    <Box mt={1}>
                      {isAuthenticated ? (
                        <MenuItem onClick={logout}>
                          <ListItemIcon>
                            <LogoutIcon />
                          </ListItemIcon>
                          <ListItemText className="LinkDark">
                            Abmelden
                          </ListItemText>
                        </MenuItem>
                      ) : (
                        <Link to="../login">
                          <MenuItem>
                            <ListItemIcon>
                              <AccountCircleIcon />
                            </ListItemIcon>
                            <ListItemText className="LinkDark">
                              Anmelden
                            </ListItemText>
                          </MenuItem>
                        </Link>
                      )}
                    </Box>
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
            {status && (
              <Grid item xs={4} style={{ textAlign: "end" }}>
                <LogoutButton />
              </Grid>
            )}
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
