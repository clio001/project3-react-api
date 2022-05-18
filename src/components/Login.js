import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { TextField, Button, Paper } from "@mui/material";

export default function Login() {
  return (
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
            label="Required"
            defaultValue="Username"
            sx={{ marginBottom: "20px" }}
          />
          <TextField
            required
            variant="standard"
            label="Required"
            defaultValue="Password"
          />
        </Box>

        <Box mb={3}>
          <Button
            variant="outlined"
            color="secondary"
            sx={{ marginRight: "1rem" }}
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
  );
}
