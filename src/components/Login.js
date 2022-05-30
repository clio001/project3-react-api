import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import { TextField, Button, Alert, Collapse } from "@mui/material";
import { AuthContext } from "../context/AuthContext";
import useIsAuthenticated from "../utils/useIsAuthenticated";
import { Navigate } from "react-router-dom";

export default function Login() {
  const { user, login, open, unfold, register } = useContext(AuthContext);
  const isAuthenticated = useIsAuthenticated();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRegister = () => {
    // TODO: include checks for input type, characters, blank spaces
    register(email, password);
  };

  const handleLogin = () => {
    // TODO: include checks for input type, characters, blank spaces
    login(email, password);
  };

  return (
    <>
      {/* {isAuthenticated && <Navigate to="/chat" replace />} */}
      {user && (
        <Collapse in={open}>
          <Alert severity="success"> Herzlich willkommen, {user.email}!</Alert>
        </Collapse>
      )}
      {/*       <Collapse in={unfold}>
        <Alert severity="info"> Benutzer:in nicht eingeloggt!</Alert>
      </Collapse> */}
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
          <Typography variant="h4" component="h2" mb={5}>
            Profil
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
              Einloggen
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={handleRegister}
            >
              Anmelden
            </Button>
          </Box>
          <Box>
            <Typography variant="body2">Google Authentifizierung</Typography>
          </Box>
        </Box>
      </div>
    </>
  );
}
