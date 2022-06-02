import React from "react";
import PictureAsPdfOutlinedIcon from "@mui/icons-material/PictureAsPdfOutlined";
import Tooltip from "@mui/material/Tooltip";
import { IconButton, imageListClasses } from "@mui/material";
import { jsPDF } from "jspdf";

export default function PDFButton(props) {
  const location = props.element;
  const itemRecord = props.fetch;

  // ? region Copyright (c) 2010-2021 James Hall, https://github.com/MrRio/jsPDF (c) 2015-2021 yWorks GmbH, https://www.yworks.com/
  const handlePDF = () => {
    console.log("Building my PDF ...");
    const doc = new jsPDF();

    const wrapTitle = doc.splitTextToSize(location.state.element.title, 172);

    const wrapDescription = doc.splitTextToSize(
      location.state.element.dcDescription,
      172
    );

    const wrapCreator = doc.splitTextToSize(
      itemRecord.object.proxies[1].dcCreator.zxx,
      102
    );

    const wrapInstitution = doc.splitTextToSize(
      itemRecord.object.aggregations[0].edmIsShownAt,
      172
    );

    const wrapRights = doc.splitTextToSize(
      itemRecord.object.aggregations[0].edmRights.def,
      172
    );

    doc
      .setFont("times", "bold")
      .setFontSize(18)
      .text("1989 - Der Fall der Berliner Mauer", 20, 25);

    doc.setFont("times", "normal").setFontSize(14).text("Einzelobjekt", 20, 35);

    doc.addImage(
      itemRecord.object.aggregations[0].edmIsShownBy,
      "jpeg",
      20,
      42,
      60,
      0
    );
    doc.setFontSize(12).setFont("times", "bold").text("Titel:", 85, 45);
    doc.setFont("times", "normal").text(wrapTitle, 85, 50);

    doc.setFontSize(12).setFont("times", "bold").text("Beschreibung:", 85, 65);
    doc.setFont("times", "normal").text(wrapDescription, 85, 70);

    doc.setFont("times", "bold").text("Jahr:", 85, 90);
    doc
      .setFont("times", "normal")
      .text(itemRecord.object.proxies[1].dctermsCreated.zxx, 85, 95);

    doc.setFont("times", "bold").text("Urheber:in:", 135, 90);
    doc.setFont("times", "normal").text(wrapCreator, 135, 95);

    doc.setFont("times", "bold").text("Sprache:", 85, 110);
    doc
      .setFont("times", "normal")
      .text(itemRecord.object.europeanaAggregation.edmLanguage.def, 85, 115);

    doc.setFont("times", "bold").text("Eintrag erstellt:", 135, 110);
    doc
      .setFont("times", "normal")
      .text(
        new Date(itemRecord.object.timestamp_created).toLocaleDateString(
          "de-DE",
          { year: "numeric", month: "long", day: "numeric" }
        ),
        135,
        115
      );

    doc.setFontSize(12).setFont("times", "bold").text("Institution:", 85, 130);
    doc.setFont("times", "normal").text(wrapInstitution, 85, 135);

    doc.setFontSize(12).setFont("times", "bold").text("Rechte:", 85, 150);
    doc.setFont("times", "normal").text(wrapRights, 85, 155);

    doc.save("test.pdf");
  };
  // ? endRegion
  return (
    <>
      <Tooltip title="PDF erstellen">
        <IconButton onClick={handlePDF}>
          <PictureAsPdfOutlinedIcon color="secondary" />
        </IconButton>
      </Tooltip>
    </>
  );
}
