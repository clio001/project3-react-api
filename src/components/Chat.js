import React, { useContext } from "react";
import { Box, Grid, Typography } from "@mui/material";
import ChatMessageLeft from "./ChatMessageLeft";
import ChatMessageRight from "./ChatMessageRight";
import { myContext } from "../context/MyContext";
//TODO as a general message, it would be nicer to have user's messages on the leftside (if you are a righty :P ) and the rest of the messages on the right side. You probably tried already, so this would be a nice addition.
export default function Chat() {
  const { messages, documentID } = useContext(myContext);

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
                  key={index}
                />
              );
            } else {
              return (
                <ChatMessageRight
                  message={message}
                  index={index}
                  docID={documentID}
                  key={index}
                />
              );
            }
          })}
      </Grid>
    </div>
  );
}
