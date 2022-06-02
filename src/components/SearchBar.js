import React from "react";
import { Paper, Button, InputBase, Box, ButtonGroup } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import AdvancedSearch from "./AdvancedSearch";

export default function SearchBar(props) {
  const handleUserInput = props.input;
  const handleEnter = props.enter;

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
            <ButtonGroup variant="outlined" color="secondary">
              <Button onClick={handleUserInput}>
                <SearchIcon color="secondary" />
              </Button>
              <Button onClick={handleClick} style={{ marginRight: "0.5rem" }}>
                <ExpandMoreIcon variant="outlined" color="secondary" />
              </Button>
            </ButtonGroup>
          </span>
        </Paper>
        <AdvancedSearch
          open={open}
          handleClose={handleClose}
          anchor={anchorEl}
        />
      </Box>
    </>
  );
}
