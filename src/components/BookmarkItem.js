import React, { useContext } from "react";
import { ListItemText, ListItemIcon, Typography, Paper } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../config";
import { myContext } from "../context/MyContext";
import MapButton from "./MapButton";
import { Box } from "@mui/system";
import { AuthContext } from "../context/AuthContext";
import { IconButton } from "@mui/material";

export default function BookmarkItem({ bookmark, index }) {
  const { myData, checked, setChecked } = useContext(myContext);
  const { user } = useContext(AuthContext);
  const messageDate = (time) => {
    return new Date(time * 1000).toLocaleTimeString("de-DE", {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // * Remove Bookmark

  const removeBookmark = async () => {
    await deleteDoc(doc(db, `user/${user.email}/bookmarks`, bookmark.id));
    console.log("Item removed");
  };

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
        <img src={bookmark.img} alt="img" width="75rem" />
      </div>
      <ListItemText sx={{ marginLeft: "0.5rem", marginBottom: "0.7rem" }}>
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
          <IconButton onClick={removeBookmark}>
            <DeleteOutlineIcon color="secondary" />
          </IconButton>
        </Box>
      </ListItemIcon>
    </Paper>
  );
}
