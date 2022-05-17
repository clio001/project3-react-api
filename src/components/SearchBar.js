import React from "react";
import { Paper, Button, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar(props) {
  const handleUserInput = props.handleUserInput;
  return (
    <>
      <Paper
        elevation={3}
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: "100%",
          padding: "0.5rem",
        }}
      >
        <InputBase
          id="userInputValue"
          sx={{ ml: 1, flex: 1 }}
          placeholder="Suchen ..."
          inputProps={{ "aria-label": "Suche" }}
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
    </>
  );
}
