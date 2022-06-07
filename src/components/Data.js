import { Typography } from "@mui/material";
import React from "react";
import Logo from "./Logo";

export default function Data() {
  return (
    <div>
      <Typography
        variant="h4"
        component="h2"
        m={3}
        style={{ fontFamily: "Gloria Hallelujah", textAlign: "center" }}
      >
        Daten
      </Typography>
      <Typography paragraph variant="lead" m={2}>
        <span style={{ fontFamily: "Gloria Hallelujah" }}>1989</span> verwendet
        die Sammlungen und Daten der Europeana und der Deutschen Fotothek.
      </Typography>
      <Typography paragraph variant="body2" m={2} color="text.secondary">
        Die Europeana Foundation ist eine EU-geförderte Stiftung zur digitalen
        Vermittlung des europäischen Kulturerbes.
      </Typography>
      <Typography paragraph variant="body2" m={2} color="text.secondary">
        <span style={{ fontFamily: "Gloria Hallelujah" }}>1989</span> verwendet
        zwei von der Europeana angebotenen REST APIs. Für die Suche nutzt die
        Anwendung die Search API. Dabei werden eine Reihe Query-Parameter der
        API für eine erweiterte Suche zur Verfügung gestellt. Für die
        Darstellung individueller Objekte nutzt{" "}
        <span style={{ fontFamily: "Gloria Hallelujah" }}>1989</span> die
        Records API.
      </Typography>
      <Typography paragraph variant="body2" m={2} color="text.secondary">
        Weitere Informationen für Entwickler und zur Dokumentation der
        verschiedenen Web-APIs befinden sich hier:
      </Typography>
      <Logo />
    </div>
  );
}
