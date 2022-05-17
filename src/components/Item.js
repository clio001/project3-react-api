import React from "react";
import { Grid, Typography, Paper } from "@mui/material";

export default function Item(props) {
  const element = props.element;
  return (
    <div>
      <Grid item xs={4}>
        <Paper
          elevation={3}
          style={{ width: "17rem", padding: "0.6rem", marginBottom: "0.7rem" }}
        >
          <Typography paragraph key={element.id}>
            {element.title}
          </Typography>
        </Paper>
      </Grid>
    </div>
  );
}
