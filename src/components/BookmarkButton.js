import React from "react";
import { useContext, useState } from "react";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import BookmarkRemoveIcon from "@mui/icons-material/BookmarkRemove";
import Tooltip from "@mui/material/Tooltip";
import { IconButton } from "@mui/material";
import { AuthContext } from "../context/AuthContext";
import { BookmarkContext } from "../context/BookmarkContext";

export default function BookmarkButton(props) {
  const removeBookmark = props.remove;
  const addBookmark = props.add;
  const checked = props.checked;

  return (
    <>
      {" "}
      {checked ? (
        <Tooltip title="Entfernen">
          <IconButton onClick={removeBookmark}>
            <BookmarkRemoveIcon color="secondary" />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Merken">
          <IconButton onClick={addBookmark}>
            <BookmarkAddIcon color="secondary" />
          </IconButton>
        </Tooltip>
      )}
    </>
  );
}
