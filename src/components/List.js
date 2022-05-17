import React from "react";

// * Import components
import SearchBar from "./SearchBar";
import Logo from "./Logo";
import Item from "./Item";

import { Typography, Grid, Box } from "@mui/material";
import { useState, useEffect } from "react";
import Chip from "@mui/material/Chip";

export default function List() {
  const [myData, setMyData] = useState(null);
  const [userInput, setUserInput] = useState("Mauerfall");

  const url = `https://api.europeana.eu/record/v2/search.json?wskey=menewitono&query=${userInput}`;

  const getData = () => {
    fetch(url)
      .then((response) => response.json())
      .then((myData) => setMyData(myData));
  };

  const handleUserInput = (event) => {
    let value = document.querySelector("#userInputValue").value;
    setUserInput(value);
    getData(url);
  };

  useEffect(() => {
    getData(url);
  }, []);

  return (
    <>
      <SearchBar handleUserInput={handleUserInput} />
      <div className="logo">
        <Logo />
      </div>
      <Box ml={1}>
        <Chip variant="filled" color="secondary" label={userInput} />
        <Typography variant="h6" mt={2}>
          Ergebnisse: {myData && myData.totalResults}
        </Typography>
      </Box>

      <Grid container mt={2} mb={10}>
        {myData &&
          myData.items.map((element) => {
            return <Item key={element.id} element={element} />;
          })}
      </Grid>
    </>
  );
}
