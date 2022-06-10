import { IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useState } from "react";
import { TextField, Button, Alert, Collapse } from "@mui/material";
import { AuthContext } from "../context/AuthContext";
import useIsAuthenticated from "../utils/useIsAuthenticated";
import { Link } from "react-router-dom";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import GoogleIcon from "@mui/icons-material/Google";

export default function Login() {
  const {
    user,
    login,
    open,
    auth,
    validEmail,
    validPassword,
    setValidEmail,
    setValidPassword,
  } = useContext(AuthContext);
  const isAuthenticated = useIsAuthenticated();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    // Regular expressions: i ignores lower/upper case
    login(email, password);
  };

  return (
    <>
      {/* {isAuthenticated && <Navigate to="/chat" replace />} */}
      {user && (
        <Collapse in={open} style={{ zIndex: "10" }}>
          <Alert severity="success"> Herzlich willkommen, {user.email}!</Alert>
        </Collapse>
      )}
      {/*       {validEmail && (
        <Collapse in={validEmail} style={{ zIndex: "10" }}>
          <Alert severity="warning">
            {" "}
            Bitte geben Sie eine gültige E-Mail ein.
          </Alert>
        </Collapse>
      )}
      {validPassword && (
        <Collapse in={validPassword} style={{ zIndex: "10" }}>
          <Alert severity="warning">
            Bitte geben Sie ein gültiges Passwort ein.
          </Alert>
        </Collapse>
      )} */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
          textAlign: "center",
        }}
      >
        <Box component="form" sx={{ padding: "1.5rem" }}>
          <Typography
            variant="h4"
            component="h2"
            mb={5}
            style={{ fontFamily: "Gloria Hallelujah" }}
          >
            Anmelden
          </Typography>

          <Box mb={5}>
            {" "}
            <TextField
              required
              variant="standard"
              color="secondary"
              label="E-Mail"
              id="username"
              sx={{ marginBottom: "20px" }}
              onChange={handleEmailChange}
            />
            <br />
            <TextField
              required
              variant="standard"
              color="secondary"
              label="Passwort"
              id="password"
              type="password"
              autoComplete="current-password"
              onChange={handlePasswordChange}
            />
          </Box>

          <Box mb={3}>
            <Button
              variant="outlined"
              color="secondary"
              sx={{ marginRight: "1rem" }}
              onClick={handleLogin}
            >
              Anmelden
            </Button>
            {/*             <Button
              variant="outlined"
              color="secondary"
              onClick={handleRegister}
            >
              Anmelden
            </Button> */}
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Link to="/register">
              <IconButton>
                <PersonAddAltIcon />
              </IconButton>
              <Button color="secondary">Erstellen</Button>
            </Link>
            {/* 
            <Link to="/">
              {" "}
              <IconButton>
                <GoogleIcon />
              </IconButton>
              <Button color="secondary">Google</Button>
            </Link> */}
          </Box>
        </Box>
      </div>
    </>
  );
}
