import React from "react";
import Typography from "@mui/material/Typography";
import Logo from "./Logo";
import { Box, Button, Divider } from "@mui/material";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <Typography
        variant="h4"
        component="h2"
        m={3}
        style={{ fontFamily: "Gloria Hallelujah" }}
      >
        Über 1989
      </Typography>
      <Typography paragraph variant="lead" m={2}>
        Entdecke die Geschichte des Falls der Berliner Mauer im Spiegel des
        europäischen Kulturerbes.
      </Typography>
      <Typography paragraph variant="body2" m={2} color="text.secondary">
        Das Jahr 1989 und der Fall der Berliner Mauer sind zentrale Ereignisse
        der Geschichte des 20. Jahrhunderts. Das Ende der Teilung Deutschlands
        führte zu neuen Perspektiven und zu Brüchen in Ost und West. Der Fall
        der Mauer läutete ebenso eine Zeit der Neuorientung Europas ein.
      </Typography>
      <Typography paragraph variant="body2" m={2} color="text.secondary">
        <span style={{ fontFamily: "Gloria Hallelujah" }}>1989</span> eröffnet
        einen einzigartigen Zugang zur Geschichte um den Fall der Berliner Mauer
        und das Jahr 1989. Durch Fotografien der Deutschen Fotothek ist es
        möglich Menschen, Orte und Momente zu betrachten. Dabei entstehen neue
        Perspektiven auf bekannte Erzählungen. Die Fotografien erlauben
        darüberhinaus seltene Einblicke in den Alltag und in persönliche
        Erlebnisse entlang der Berliner Mauer.
      </Typography>

      <Box style={{ textAlign: "center" }} mt={3} mb={4}>
        {" "}
        <Link to="/list" replace>
          <Button variant="outlined" color="secondary">
            Los geht's
          </Button>
        </Link>
      </Box>
      <Divider />
      <Box
        style={{
          display: "flex",
          flexDirection: "row wrap",
          justifyContent: "space-evenly",
        }}
        mt={5}
        mb={9}
      >
        <img
          src={require("../components/img/finalfinalfinal_primary_NoBg_crop.png")}
          alt="Logo of Code Academy Berlin"
          width="180"
        />
        <Typography paragraph variant="body2" mr={2} color="text.secondary">
          <span style={{ fontFamily: "Gloria Hallelujah" }}>1989</span> wurde im
          Rahmen des Web-Entwicklungs-Bootcamps der Code Academy Berlin
          entwickelt.
        </Typography>
      </Box>
    </div>
  );
}
