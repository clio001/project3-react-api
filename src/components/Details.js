import React from "react";
import { Box, Grid, Typography, Button, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Details() {
  window.scrollTo(0, 0);
  const location = useLocation();

  return (
    <>
      <Box>
        <Paper elevation={3}>
          <img
            src={location.state.element.edmPreview}
            alt=""
            style={{ width: "100%" }}
          />
          <Box style={{ padding: "1rem" }}>
            {" "}
            <Typography variant="h6">{location.state.element.title}</Typography>
            <Typography paragraph style={{ color: "grey", fontSize: "0.9rem" }}>
              {location.state.element.dataProvider},{" "}
              {location.state.element.country}
            </Typography>{" "}
            <Typography variant="subtitle2">Beschreibung</Typography>
            <Typography paragraph variant="body2">
              {location.state.element.dcDescription}
            </Typography>
            <Grid container>
              <Grid item xs={6}>
                {" "}
                <Typography variant="subtitle2">Jahr</Typography>
                <Typography paragraph variant="body2">
                  dctermsCreated
                </Typography>
              </Grid>
              <Grid item xs={6}>
                {" "}
                <Typography variant="subtitle2">Creator</Typography>
                <Typography paragraph variant="body2">
                  dcCreator
                </Typography>
              </Grid>
            </Grid>
            <Typography variant="subtitle2">Kategorien</Typography>
            <Typography paragraph variant="body2">
              dcSubject (records api)
            </Typography>
            <Typography variant="subtitle2">Sprache</Typography>
            <Typography paragraph variant="body2">
              dcCreator (records api)
            </Typography>
            <Typography variant="subtitle2">Institution</Typography>
            <Typography paragraph variant="body2">
              dcCreator (records api)
            </Typography>
            <Typography variant="subtitle2">Rechte</Typography>
            <Typography paragraph variant="body2">
              dcCreator (records api)
            </Typography>
            <Box
              style={{
                textAlign: "center",
                marginTop: "2rem",
                marginBottom: "5rem",
              }}
            >
              {" "}
              <Link to="../list">
                <Button variant="outlined" color="secondary">
                  Zurück
                </Button>
              </Link>
            </Box>
          </Box>
        </Paper>
      </Box>
    </>
  );
}
