import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();

  const navigateBack = () => {
    navigate(-1);
  };

  return (
    <>
      <IconButton onClick={navigateBack}>
        <ArrowBackIosIcon color="secondary" />
      </IconButton>
    </>
  );
}
