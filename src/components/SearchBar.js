import React from "react";
import { Paper, Button, InputBase, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar(props) {
  const handleUserInput = props.input;
  const handleEnter = props.enter;
  return (
    <>
      <Box>
        <Paper
          elevation={3}
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            paddingTop: "0.5rem",
            paddingBottom: "0.5rem",
          }}
        >
          <InputBase
            id="userInputValue"
            sx={{ ml: 1, flex: 1 }}
            placeholder="Suchen ..."
            inputProps={{ "aria-label": "Suche" }}
            onKeyUp={handleEnter}
          />
          <span>
            <Button
              variant="outlined"
              color="secondary"
              onClick={handleUserInput}
              style={{ marginRight: "1rem" }}
            >
              <SearchIcon color="secondary" />
            </Button>
          </span>
        </Paper>
      </Box>
    </>
  );
}
