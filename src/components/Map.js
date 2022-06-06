import React, { useContext } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useLocation } from "react-router-dom";
import { myContext } from "../context/MyContext";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

export default function () {
  const location = useLocation();
  const { user } = useContext(myContext);

  return (
    <div id="map">
      <MapContainer
        center={[52.544311105673046, 13.440683638618843]}
        zoom={7}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[52.544311105673046, 13.440683638618843]}>
          <Popup>
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <PersonIcon fontSize="large" color="secondary" />
              <Typography color="text.secondary">{user.email}</Typography>
            </Box>
          </Popup>
        </Marker>
        {location.state.state.element.dataProvider[0] ===
        "Deutsche Fotothek" ? (
          <Marker position={[51.02992552296509, 13.737846406363492]}>
            <Popup>
              <img
                src={require("../components/img/deutsche-fotothek-logo.png")}
                alt="Logo of Code Academy Berlin"
                width="100"
              />
            </Popup>
          </Marker>
        ) : (
          <Marker position={[52.54125564855962, 13.388063821379184]}>
            <Popup>
              <img
                src={require("../components/img/dw.jpeg")}
                alt="Logo of Code Academy Berlin"
                width="100"
              />
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
}
