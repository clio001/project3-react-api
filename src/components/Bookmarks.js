import { Box, Typography, Divider, Button } from "@mui/material";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { db } from "../config";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import BookmarkItem from "./BookmarkItem";
import { jsPDF } from "jspdf";

export default function Bookmarks() {
  const { user } = useContext(AuthContext);

  // * Firestore bookmarking functions

  const [bookmarks, setBookmarks] = useState([]);
  const [bookmarkUser, setBookmarkUser] = useState([]);

  const getBookmarks = () => {
    // * First: get user credential from Firestore
    const userQ = query(collection(db, "user"));
    onSnapshot(userQ, (querySnapshot) => {
      const myUser = [];
      querySnapshot.forEach((doc) => {
        myUser.push(doc.data());
      });
      /* console.log("User query: ", myUser); */
      setBookmarkUser(myUser);
    });

    // * Second: get user's bookmark collection:
    const bookmarkQ = query(
      collection(db, `user/${user.email}/bookmarks`),
      orderBy("date", "desc")
    );
    onSnapshot(bookmarkQ, (querySnapshot) => {
      const myBookmarks = [];
      querySnapshot.forEach((doc) => {
        myBookmarks.push(doc.data());
      });
      setBookmarks(myBookmarks);
    });
  };

  // TODO BUILDING PDF BIBLIOGRAPHY
  const createList = () => {
    const pdf = new jsPDF();
  };

  useEffect(() => {
    getBookmarks();
  }, []);
  return (
    <>
      <div
        style={{
          display: "block",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Box sx={{ padding: "1.5rem" }}>
          <Typography
            variant="h4"
            component="h2"
            mb={3}
            style={{ fontFamily: "Gloria Hallelujah" }}
          >
            Meine Sammlung
          </Typography>
        </Box>
      </div>
      <div>
        <Box>
          {user && (
            <div>
              <Typography
                variant="h6"
                color="text.secondary"
                style={{ textAlign: "center", marginBottom: "2rem" }}
              >
                <CollectionsBookmarkIcon
                  fontSize="large"
                  color="secondary"
                  style={{ marginBottom: "0.5rem" }}
                />
                <br />
                {user.email}
              </Typography>
            </div>
          )}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: "5rem",
            }}
          >
            {bookmarks.length === 0 && (
              <Typography color="text.secondary">Keine Einträge</Typography>
            )}
            {bookmarks != [] ? (
              bookmarks.map((bookmark, index) => {
                return (
                  <BookmarkItem bookmark={bookmark} key={index} index={index} />
                );
              })
            ) : (
              <Typography>Keine Lesezeichen</Typography>
            )}
          </div>

          {/*  <Box
            m={3}
            mb={12}
            style={{ display: "flex", justifyContent: "center" }}
          >
            {bookmarks.length > 0 && (
              <Button
                variant="contained"
                color="secondary"
                onClick={createList}
              >
                {" "}
                Erstelle PDF
              </Button>
            )}
          </Box> */}
        </Box>
      </div>
    </>
  );
}
