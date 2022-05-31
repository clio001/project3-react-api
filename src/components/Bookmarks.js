import { Box, Typography } from "@mui/material";
import React from "react";

export default function Bookmarks() {
  return (
    <div
      style={{
        display: "block",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Box sx={{ padding: "1.5rem" }}>
        <Typography
          variant="h4"
          component="h2"
          mb={1}
          style={{ fontFamily: "Gloria Hallelujah" }}
        >
          Meine Sammlung
        </Typography>
      </Box>
      <Box>
        <Typography color="text.secondary">
          Hier gibt's noch nichts zu sehen ...
        </Typography>
      </Box>
    </div>
  );
}
