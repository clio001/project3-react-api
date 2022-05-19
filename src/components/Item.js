import React from "react";
import { Grid, Typography, Paper, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Item(props) {
  const [element, setElement] = useState(props.element);

  return (
    <>
      <Grid item xs={12} sm={6} md={4} lg={3} mb={2} key={element.id}>
        <Paper elevation={3}>
          <img src={element.edmPreview} style={{ width: "100%" }} />
          <Box style={{ padding: "0.8rem" }}>
            <Typography style={{ color: "grey", fontSize: "0.9rem" }}>
              {element.dataProvider}, {element.country}
            </Typography>
            <Typography paragraph variant="h6">
              {element.title}
            </Typography>
            <Link to="../item" state={{ element }}>
              {" "}
              <Button variant="outlined" color="secondary">
                Details
              </Button>
            </Link>
          </Box>
          <Box></Box>
        </Paper>
      </Grid>
    </>
  );
}
