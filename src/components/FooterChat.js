import * as React from "react";
import SendIcon from "@mui/icons-material/Send";
import { Button, InputBase, Box, ButtonGroup } from "@mui/material";
import { myContext } from "../context/MyContext";
import { useContext } from "react";

import Paper from "@mui/material/Paper";

export default function Footer() {
  const { handleNewMsg, addChatMsg } = useContext(myContext);
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        width: "100%",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          height: "4rem",
          paddingTop: "0.5rem",
          paddingBottom: "0.5rem",
          border: "1px",
        }}
      >
        <InputBase
          id="userInputValue"
          sx={{ ml: 2, flex: 1 }}
          placeholder="Neue Nachricht ..."
          inputProps={{ "aria-label": "Neue Nachricht" }}
          onChange={handleNewMsg}
        />
        <span>
          <ButtonGroup
            variant="outlined"
            color="secondary"
            onClick={addChatMsg}
          >
            <Button style={{ marginRight: "0.5rem", marginLeft: "0.5rem" }}>
              <SendIcon color="secondary" />
            </Button>
          </ButtonGroup>
        </span>
      </Paper>
    </Box>
  );
}
