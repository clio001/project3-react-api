import React, { useContext } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../config";
import { Box, Grid, Typography } from "@mui/material";
import { myContext } from "../context/MyContext";

export default function ChatMessageRight(props) {
  const message = props.message;
  const index = props.index;
  const documentID = props.docID;
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
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        width: "100%",
      }}
    >
      <Box
        style={{
          textAlign: "end",
          width: "80%",
        }}
      >
        <Grid
          item
          sx={{
            padding: "1rem",
            backgroundColor: "#e1bee7",
            borderRadius: "10px 25px 10px 25px",
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
    </div>
  );
}
