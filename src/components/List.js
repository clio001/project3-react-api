import React from "react";

// * Import components
import SearchBar from "./SearchBar";
import Logo from "./Logo";
import Item from "./Item";

import { Typography, Grid, Box } from "@mui/material";
import { useState, useEffect, useContext } from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";
import Pagination from "@mui/material/Pagination";
import { myContext } from "../context/MyContext";

export default function List() {
  const [myData, setMyData] = useState(null);
  const [userInput, setUserInput] = useState("Berliner Mauer");
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const { test } = useContext(myContext);

  console.log("Test: ", test);

  const collection = "";

  const url = `https://api.europeana.eu/record/v2/search.json?wskey=menewitono&query=${collection}+${userInput}&start=${page}&rows=1`;
  console.log(url);

  const getData = () => {
    fetch(url)
      .then((response) => response.json())
      .then((myData) => {
        setMyData(myData);
        setLoading(false);
      });
  };

  const handleUserInput = () => {
    let value = document.querySelector("#userInputValue").value;
    setUserInput(value);
    setLoading(true);
  };

  const handleEnter = () => {
    let inputField = document.querySelector("#userInputValue");
    inputField.addEventListener("keyup", (event) => {
      if (event.key === "Enter") {
        let value = document.querySelector("#userInputValue").value;
        setUserInput(value);
        setLoading(true);
      }
    });
  };

  const handleChange = (event) => {
    let offset = page + 1;
    console.log("offset ", offset);
    setPage(offset);
  };

  useEffect(() => {
    getData(url);
    handleEnter();
  }, [userInput, page]);

  return (
    <>
      <SearchBar input={handleUserInput} enter={handleEnter} />
      {loading && (
        <Stack sx={{ width: "100%", color: "grey.500" }} spacing={2}>
          <LinearProgress color="secondary" />
        </Stack>
      )}
      <div className="logo">
        <Logo />
      </div>
      <Box ml={1}>
        <Chip variant="filled" color="secondary" label={userInput} />
        <Typography variant="h6" mt={2}>
          Ergebnisse: {myData && myData.totalResults}
        </Typography>
      </Box>
      <Grid container mt={2} mb={2}>
        {myData &&
          myData.items.map((element) => {
            return <Item key={element.id} element={element} />;
          })}
      </Grid>{" "}
      <Stack spacing={0} mb={10}>
        <Pagination
          count={myData && myData.totalResults}
          variant="outlined"
          color="secondary"
          page={page}
          onChange={handleChange}
        />
      </Stack>
    </>
  );
}
