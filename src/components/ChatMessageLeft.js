import React, { useContext, useState } from "react";
import { db } from "../config";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Button, Grid, Typography } from "@mui/material";
import { doc, deleteDoc } from "firebase/firestore";
import { myContext } from "../context/MyContext";

export default function ChatMessageLeft(props) {
  const message = props.message;
  const index = props.index;
  const { user } = useContext(myContext);

  const id = message.id;

  const deleteChatMsg = async () => {
    await deleteDoc(doc(db, "chat", id));
  };

  const messageDate = (time) => {
    return new Date(time * 1000).toLocaleTimeString("de-DE", {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <Box style={{ textAlign: "start", width: "100%" }}>
      <Grid
        item
        sx={{
          padding: "1rem",
          backgroundColor: "#F3E5F5",
          borderRadius: "25px 10px 25px 10px",
          width: "90%",
          textAlign: "start",
          marginBottom: "10px",
        }}
        key={index}
      >
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="subtitle2" style={{ marginBottom: "0.1rem" }}>
            {message.author}
          </Typography>
          {user.email === message.author && (
            <CloseIcon fontSize="small" onClick={deleteChatMsg} />
          )}
        </Box>

        <Typography variant="body2">{message.text}</Typography>
        <Box style={{ textAlign: "end" }}>
          <Typography
            variant="body2"
            color="text.secondary"
            style={{ fontSize: "0.8rem" }}
          >
            {messageDate(message.date.seconds)} Uhr
          </Typography>
        </Box>
      </Grid>
    </Box>
  );
}
