import React from "react";
import { useContext } from "react";
import { BookmarkContext } from "../context/BookmarkContext";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import Tooltip from "@mui/material/Tooltip";
import { IconButton } from "@mui/material";

export default function BookmarkButton() {
  const { handleBookmark, checked } = useContext(BookmarkContext);
  return (
    <>
      {" "}
      {checked ? (
        <Tooltip title="Entfernen">
          <IconButton onClick={handleBookmark}>
            <BookmarkIcon color="secondary" />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Merken">
          <IconButton onClick={handleBookmark}>
            <BookmarkBorderIcon color="secondary" />
          </IconButton>
        </Tooltip>
      )}
    </>
  );
}
