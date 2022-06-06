import React, { useContext } from "react";
import { ListItemText, ListItemIcon, Typography, Paper } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../config";
import { myContext } from "../context/MyContext";
import MapButton from "./MapButton";
import { Box } from "@mui/system";

export default function BookmarkItem({ bookmark, index }) {
  const { myData } = useContext(myContext);
  const messageDate = (time) => {
    return new Date(time * 1000).toLocaleTimeString("de-DE", {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };
  console.log(myData);
  return (
    <Paper
      style={{
        backgroundColor: "#F3E5F5",

        margin: "0.5rem",
        display: "flex",
        flexDirection: "row",
        alignItems: "start",
        width: "100%",
      }}
      elevation={5}
    >
      <div>
        {myData && (
          <img src={myData.items[0].edmIsShownBy} alt="img" width="75rem" />
        )}
      </div>
      <ListItemText sx={{ marginLeft: "0.5rem" }}>
        <Typography variant="subtitle2" key={index}>
          {bookmark.title}, <i>{bookmark.institution}</i>
          <Typography variant="body2" color="text.secondary">
            {messageDate(bookmark.date.seconds)} Uhr
          </Typography>
        </Typography>
      </ListItemText>
      <ListItemIcon
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginRight: "0.5rem",
          marginTop: "0.5rem",
        }}
      >
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <MapButton />
          <DeleteOutlineIcon color="secondary" />
        </Box>
      </ListItemIcon>
    </Paper>
  );
}
