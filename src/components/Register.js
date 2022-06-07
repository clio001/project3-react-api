import { IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useState } from "react";
import { TextField, Button, Alert, Collapse } from "@mui/material";
import { AuthContext } from "../context/AuthContext";
import useIsAuthenticated from "../utils/useIsAuthenticated";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const { user, open, unfold, register } = useContext(AuthContext);
  const isAuthenticated = useIsAuthenticated();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

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

  return (
    <>
      {isAuthenticated && navigate(-1)}
      {user && (
        <Collapse in={open}>
          <Alert severity="success"> Account erstellt: {user.email}</Alert>
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
          <Typography
            variant="h4"
            component="h2"
            mb={5}
            style={{ fontFamily: "Gloria Hallelujah" }}
          >
            Neuer Account
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
              onClick={handleRegister}
            >
              Erstellen
            </Button>
          </Box>
          <Box>
            <Link to="/login">
              <IconButton>
                <AccountCircleIcon />
              </IconButton>
              <Button color="secondary">Anmelden</Button>
            </Link>
          </Box>
        </Box>
      </div>
    </>
  );
}
