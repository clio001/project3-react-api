import React from "react";
import PictureAsPdfOutlinedIcon from "@mui/icons-material/PictureAsPdfOutlined";
import Tooltip from "@mui/material/Tooltip";
import { IconButton } from "@mui/material";
import { jsPDF } from "jspdf";

export default function PDFButton(props) {
  const location = props.element;
  const contentPDF = `Titel: ${location.state.element.title}`;

  // ? region Copyright (c) 2010-2021 James Hall, https://github.com/MrRio/jsPDF (c) 2015-2021 yWorks GmbH, https://www.yworks.com/
  const handlePDF = () => {
    console.log("Building my PDF ...");
    const doc = new jsPDF();
    doc.text(contentPDF, 10, 10);
    doc.save("a4.pdf");
  };
  // ? endRegion
  return (
    <>
      <Tooltip>
        <IconButton>
          <PictureAsPdfOutlinedIcon color="secondary" onClick={handlePDF} />
        </IconButton>
      </Tooltip>
    </>
  );
}
