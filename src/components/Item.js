import React from "react";
import { Grid, Typography, Paper, Box, Button } from "@mui/material";

export default function Item(props) {
  const element = props.element;

  /*  const imgURL = element.edmPreview.slice(0, element.edmPreview.length - 11); */

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
            <Button variant="outlined" color="secondary">
              Details
            </Button>
          </Box>
          <Box></Box>
        </Paper>
      </Grid>
    </>
  );
}
