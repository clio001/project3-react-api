import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import { TextField, Button, Alert, Collapse } from "@mui/material";
import { AuthContext } from "../context/AuthContext";
import useIsAuthenticated from "../utils/useIsAuthenticated";
import { Navigate } from "react-router-dom";

export default function Login() {
  const { user, handleLogin, open, unfold } = useContext(AuthContext);
  const isAuthenticated = useIsAuthenticated();

  return (
    <>
      {isAuthenticated && <Navigate to="/chat" replace />}
      <Collapse in={open}>
        <Alert severity="success"> Herzlich willkommen, {user.name}!</Alert>
      </Collapse>
      <Collapse in={unfold}>
        <Alert severity="info"> Benutzer:in nicht eingeloggt!</Alert>
      </Collapse>
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
              label="Required"
              id="username"
              defaultValue="Benutzername"
              sx={{ marginBottom: "20px" }}
            />
            <br />
            <TextField
              required
              variant="standard"
              color="secondary"
              label="Required"
              id="password"
              defaultValue="Passwort"
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
            <Button variant="outlined" color="secondary">
              Abbrechen
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
