import React from "react";
import { Typography, Box, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Contact() {
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "75vh",
        textAlign: "center",
      }}
    >
      {" "}
      <Typography
        variant="h4"
        component="h2"
        m={3}
        style={{ fontFamily: "Gloria Hallelujah", textAlign: "center" }}
      >
        Impressum
      </Typography>
      <Typography
        variant="body2"
        m={2}
        color="text.secondary"
        style={{ textAlign: "center" }}
      >
        Dr. John Woitkowitz
        <br />
        Friesickestraße 33
        <br />
        13086 Berlin
      </Typography>
      <Box style={{ textAlign: "center" }}>
        <a href="http://www.twitter.com/john_woitkowitz" target="_blank">
          <IconButton>
            <TwitterIcon color="secondary" />
          </IconButton>
        </a>
        <a href="mailto:j.woitkowitz@posteo.de">
          <IconButton>
            <EmailIcon color="secondary" />
          </IconButton>
        </a>
      </Box>
      <Typography
        variant="body2"
        m={2}
        color="text.secondary"
        style={{ textAlign: "center" }}
      >
        Copyrights © 2022
      </Typography>
    </Box>
  );
}
