import React from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";

export default function Chat() {
  return (
    <div
      style={{
        display: "block",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Box sx={{ padding: "1.5rem" }}>
        <Typography variant="h4" component="h2" mb={1}>
          Feedback
        </Typography>
      </Box>

      <Grid container sx={{ padding: "1rem" }}>
        <Grid
          item
          sx={{
            padding: "1rem",
            backgroundColor: "#F3E5F5",
            borderRadius: "10px",
            width: "80%",
            textAlign: "start",
            marginBottom: "10px",
          }}
        >
          <Typography variant="body2">
            Sehr spannend mehr über den Hintergrund dieser Geschichte zu lernen.
          </Typography>
        </Grid>
        <Grid item></Grid>
        <Grid
          item
          sx={{
            padding: "1rem",
            backgroundColor: "#F3E5F5",
            borderRadius: "10px",
            width: "80%",
            textAlign: "start",
            marginBottom: "10px",
          }}
        >
          <Typography variant="body2">
            Was für ein interessantes Objekt!
          </Typography>
        </Grid>
        <Grid item></Grid>
      </Grid>
    </div>
  );
}
