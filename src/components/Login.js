import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext } from "react";
import { TextField, Button, Paper, Alert, Collapse } from "@mui/material";
import { useState } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  const { user, setUser } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  const handleLogin = () => {
    let username = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;
    setUser({ name: username, password: password });
    if (user.name === "") {
      setOpen(false);
    } else {
      setOpen(true);
    }
    console.log("After login: ", user);
  };

  return (
    <>
      {user.name !== "" && (
        <Collapse in={open}>
          <Alert severity="success">{user.name} ist eingeloggt!</Alert>
        </Collapse>
      )}

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
