import React from "react";
import MapIcon from "@mui/icons-material/Map";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";

export default function MapButton(props) {
  const location = props.location;
  return (
    <div>
      <Link to="/map" state={location}>
        <IconButton>
          <MapIcon color="secondary" />
        </IconButton>
      </Link>
    </div>
  );
}
