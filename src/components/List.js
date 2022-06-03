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
  const [page, setPage] = useState(1);
  const {
    test,
    myData,
    loading,
    getData,
    url,
    mark,
    userInput,
    handleUserInput,
    handleEnter,
    collections,
    rights,
  } = useContext(myContext);

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
        <Box>
          {userInput != "" && (
            <Chip
              variant="filled"
              color="secondary"
              label={userInput}
              style={{
                marginRight: "0.2rem",
                marginBottom: "0.3rem",
              }}
            />
          )}
          <Chip
            variant="filled"
            color="secondary"
            label={collections}
            style={{ marginRight: "0.2rem", marginBottom: "0.3rem" }}
          />
          {rights != "" && (
            <Chip
              variant="filled"
              color="secondary"
              label={rights}
              style={{ marginRight: "0.2rem", marginBottom: "0.3rem" }}
            />
          )}

          <Chip
            variant="filled"
            color="secondary"
            label={mark}
            style={{ marginRight: "0.2rem", marginBottom: "0.3rem" }}
          />
        </Box>
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
      {/*       <Stack spacing={0} mb={10}>
        <Pagination
          count={myData && myData.totalResults}
          variant="outlined"
          color="secondary"
          page={page}
          onChange={handleChange}
        />
      </Stack> */}
    </>
  );
}
