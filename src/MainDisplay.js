import React from "react";

// * Import components

import { Typography, Grid, Container } from "@mui/material";
import { useState, useEffect } from "react";
import Item from "./Item";

export default function MainDisplay() {
  const [myData, setMyData] = useState(null);
  let [myResult, setMyResult] = useState(null);
  const url =
    "https://api.europeana.eu/record/v2/search.json?wskey=menewitono&query=Berthold Brecht";

  const getData = () => {
    fetch(url)
      .then((response) => response.json())
      .then((myData) => setMyData(myData));
  };

  useEffect(() => {
    getData(url);
  }, []);

  return (
    <>
      <Container>
        {" "}
        <Typography variant="h4" mt={2}>
          Sammlung
        </Typography>
        <Typography variant="h6" mt={2}>
          Gesamt:
          {myData && myData.totalResults}
        </Typography>
        <Grid container spacing={1} mt={2}>
          {myData &&
            myData.items.map((element) => {
              return <Item key={element.id} element={element} />;
            })}
        </Grid>
      </Container>
    </>
  );
}
