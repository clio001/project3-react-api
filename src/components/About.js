import React from "react";
import Typography from "@mui/material/Typography";

export default function About() {
  return (
    <div>
      <Typography variant="h4" component="h2" m={3}>
        Über 1989
      </Typography>
      <Typography paragraph variant="subtitle2" ml={2}>
        Entdecke die Geschichte des Falls der Berliner Mauer im Spiegel des
        europäischen Kulturerbes
      </Typography>
      <Typography paragraph variant="body1" ml={2}>
        Der Fall der Berliner Mauer gilt als eines der zentralen Ereignisse des
        20. Jahrhunderts.
      </Typography>
    </div>
  );
}
