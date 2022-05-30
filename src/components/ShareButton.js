import React from "react";
import ShareIcon from "@mui/icons-material/Share";
import { IconButton } from "@mui/material";

export default function ShareButton(props) {
  let itemRecord = props.itemRecord;
  let itemURL = itemRecord.object.aggregations[0].edmIsShownBy;
  let tweetURL = `https://twitter.com/intent/tweet?text=Check%20out%20this%20fantastic%20photo:%20${itemURL}&via=1989_app&hashtags=digitalhistory`;

  return (
    <>
      {itemRecord && (
        <a href={tweetURL} target="_blank">
          <IconButton>
            <ShareIcon color="secondary" />
          </IconButton>
        </a>
      )}
    </>
  );
}
