import React from "react";
import { Box, Grid, Typography, Button, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import BookmarkButton from "./BookmarkButton";
import PDFButton from "./PDFButton";
import ShareButton from "./ShareButton";
import MapButton from "./MapButton";
import { doc, setDoc, deleteDoc, getDoc } from "firebase/firestore";
import { db } from "../config";

//TODO as a general comment, this component got pretty big, and there are some checks that are repeated , giving us the feeling that maybe splitting them into smaller components might be a good way to make it shorter and more readable.

export default function Details() {
  const { status, user } = useContext(AuthContext);
  const [checked, setChecked] = useState(false);

  window.scrollTo(0, 0);
  const location = useLocation();
  const [itemRecord, setItemRecord] = useState(null);

  const url = location.state.element.link;

  const getRecords = () => {
    fetch(url)
      .then((response) => response.json())
      .then((recordsData) => {
        setItemRecord(recordsData);
      });
  };

  // * Loop over deSubject JSON object with nested arrays to catch all subject entries
  let recordSubjects = []; //TODO maybe move the array inside the function since you are not directly using it later. Or Turn it into a State Variable that you set inside getSubjects()
  const getSubjects = (itemRecord) => {
    let subjects = Object.entries(itemRecord.object.proxies[1].dcSubject);

    for (let i = 0; i < subjects.length; i++) {
      for (let x = 0; x < subjects[i][1].length; x++) {
        recordSubjects.push(subjects[i][1][x]);
      }
    }

    recordSubjects.filter((element) => {
      if (element.includes("#concept")) {
        recordSubjects.pop(element);
      }
    });
    return recordSubjects;
  };

  useEffect(() => {
    getRecords(url);
  }, []);

  // * ADD BOOKMARK

  // * Delete unwanted slashes from item ID

  const id = () => {
    let itemID = location.state.element.id.slice(
      5,
      location.state.element.id.length
    );
    return itemID;
  };

  let finalID = id(); //TODO instead of return itemID you could a) create a state variable, and b) set it in id()

  const addBookmark = async () => {
    try {
      const docRef = await setDoc(
        doc(db, `user/${user.email}/bookmarks`, finalID),
        {
          title: location.state.element.title,
          institution: location.state.element.dataProvider,
          date: new Date(),
          id: finalID,
          img: location.state.element.edmPreview,
        }
      );
      console.log("Item added");
      setChecked(true);
    } catch (error) {
      console.log("Error adding bookmark: ", error);
    }
  };

  // * Remove Bookmark

  const removeBookmark = async () => {
    await deleteDoc(doc(db, `user/${user.email}/bookmarks`, finalID));
    console.log("Item removed");
    setChecked(false);
  };

  // * Set status for bookmark icon

  const bookmarkIconStatus = async () => {
    const bookmarkQuery = await getDoc(
      doc(db, `user/${user.email}/bookmarks`, finalID)
    );
    if (bookmarkQuery.exists()) {
      console.log("Document exists");
      setChecked(true);
    } else {
      console.log("Document doesn't exist");
      setChecked(false);
    }
  };

  useEffect(() => {
    id();
    if (user) {
      bookmarkIconStatus();
    }
  }, []);

  return (
    <>
      {itemRecord && (
        <Box>
          <Paper elevation={3}>
            <img
              src={location.state.element.edmPreview}
              alt=""
              style={{ width: "100%" }}
            />
            <Box style={{ padding: "1rem" }}>
              <Box
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "end",
                }}
              >
                {" "}
                <ShareButton itemRecord={itemRecord} />
                {status && <MapButton location={location} />}
                {status && (
                  <>
                    <PDFButton
                      element={location}
                      fetch={itemRecord}
                      checked={checked}
                    />

                    <BookmarkButton
                      remove={removeBookmark}
                      add={addBookmark}
                      checked={checked}
                    />
                  </>
                )}
              </Box>
              <Typography variant="h6">
                {typeof itemRecord.object.proxies[1].dcTitle == "undefined"
                  ? location.state.element.title
                  : itemRecord.object.proxies[1].dcTitle.de}

                {/*//TODO I (Raul) do not really understand that check with
                typeof...but if it works...  */}
              </Typography>
              <Typography
                paragraph
                style={{ color: "grey", fontSize: "0.9rem" }}
              >
                {location.state.element.dataProvider},{" "}
                {location.state.element.country}
              </Typography>{" "}
              <Typography variant="subtitle2">Beschreibung</Typography>
              <Typography paragraph variant="body2">
                {location.state.element.dcDescription}
              </Typography>
              <Grid container>
                <Grid item xs={6}>
                  {" "}
                  <Typography variant="subtitle2">Jahr</Typography>
                  <Typography paragraph variant="body2">
                    {typeof itemRecord.object.proxies[1].dctermsCreated ==
                    "undefined"
                      ? "Kein Eintrag"
                      : itemRecord.object.proxies[1].dctermsCreated.zxx}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  {" "}
                  <Typography variant="subtitle2">Urheber:in</Typography>
                  <Typography paragraph variant="body2">
                    {typeof itemRecord.object.proxies[1].dcCreator ==
                    "undefined"
                      ? "Kein Eintrag"
                      : itemRecord.object.proxies[1].dcCreator.zxx}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle2" mb={1}>
                    Kategorien
                  </Typography>
                  <Typography
                    paragraph
                    variant="body2"
                    component="div"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      flexWrap: "wrap",
                    }}
                  >
                    {typeof itemRecord.object.proxies[1].dcSubject ==
                    "undefined"
                      ? "Kein Eintrag"
                      : getSubjects(itemRecord).map((each, index) => {
                          return (
                            <span id="category-item" key={index}>
                              {each}
                            </span>
                          );
                        })}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  {" "}
                  <Typography variant="subtitle2">Sprache</Typography>
                  <Typography paragraph variant="body2">
                    {typeof itemRecord.object.europeanaAggregation
                      .edmLanguage == "undefined"
                      ? "Kein Eintrag"
                      : itemRecord.object.europeanaAggregation.edmLanguage.def}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  {" "}
                  <Typography variant="subtitle2">Eintrag erstellt</Typography>
                  <Typography paragraph variant="body2">
                    {typeof itemRecord.object.timestamp_created == "undefined"
                      ? "Kein Eintrag"
                      : new Date(
                          itemRecord.object.timestamp_created
                        ).toLocaleDateString("de-DE", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                  </Typography>
                </Grid>
              </Grid>
              <Grid container>
                <Grid
                  item
                  xs={12}
                  style={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "wrap",
                  }}
                >
                  <Typography variant="subtitle2">Institution</Typography>
                  <Typography paragraph variant="body2">
                    {typeof itemRecord.object.aggregations[0].edmIsShownAt ==
                    "undefined" ? (
                      "Kein Eintrag"
                    ) : (
                      <a
                        id="institution-link"
                        href={itemRecord.object.aggregations[0].edmIsShownAt}
                      >
                        {itemRecord.object.aggregations[0].edmIsShownAt}
                      </a>
                    )}
                  </Typography>
                </Grid>
              </Grid>
              <Typography variant="subtitle2">Rechte</Typography>
              <Typography paragraph variant="body2">
                {typeof itemRecord.object.aggregations[0].edmRights ==
                "undefined"
                  ? "Kein Eintrag"
                  : itemRecord.object.aggregations[0].edmRights.def}
              </Typography>
              <Box
                style={{
                  textAlign: "center",
                  marginTop: "2rem",
                  marginBottom: "5rem",
                }}
              >
                {" "}
                <Link to="../list">
                  <Button variant="outlined" color="secondary">
                    Zurück
                  </Button>
                </Link>
              </Box>
            </Box>
          </Paper>
        </Box>
      )}
    </>
  );
}
