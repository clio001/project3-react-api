import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Grid,
  Typography,
  Paper,
  InputBase,
  IconButton,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import ChatMessageLeft from "./ChatMessageLeft";
import ChatMessageRight from "./ChatMessageRight";
import { myContext } from "../context/MyContext";
import { AuthContext } from "../context/AuthContext";

export default function Chat() {
  const { messages, handleNewMsg, addChatMsg, documentID } =
    useContext(myContext);
  const { user } = useContext(AuthContext);

  return (
    <div
      style={{
        display: "block",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Box sx={{ padding: "1.5rem" }}>
        <Typography
          variant="h4"
          component="h2"
          mb={1}
          style={{ fontFamily: "Gloria Hallelujah" }}
        >
          Feedback
        </Typography>
      </Box>
      <Grid container sx={{ padding: "1rem" }} mb={5}>
        {messages &&
          messages.map((message, index) => {
            if (index % 2 === 0) {
              return (
                <ChatMessageLeft
                  message={message}
                  index={index}
                  docID={documentID}
                />
              );
            } else {
              return (
                <ChatMessageRight
                  message={message}
                  index={index}
                  docID={documentID}
                />
              );
            }
          })}
      </Grid>
    </div>
  );
}
