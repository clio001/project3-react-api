import { IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useState } from "react";
import { TextField, Input, Button, Alert, Collapse } from "@mui/material";
import { AuthContext } from "../context/AuthContext";
import useIsAuthenticated from "../utils/useIsAuthenticated";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const {
    user,
    open,
    unfold,
    register,
    validEmail,
    setValidEmail,
    validPassword,
    setValidPassword,
  } = useContext(AuthContext);
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
    // Regular expressions: i ignores lower/upper case
    console.log("Valid email: ", /[A-za-z]+[0-9]*@{1}/i.test(email));

    if (/[A-za-z]+[0-9]*@{1}/i.test(email)) {
      setValidEmail(false);
      register(email, password);
    } else {
      console.log("Bitte geben Sie eine gültige E-Mail ein.");
      setValidEmail(true);
    }
  };

  return (
    <>
      {isAuthenticated && navigate(-1)}
      {validEmail && (
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
      )}
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
              type="email"
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
