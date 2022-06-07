import React from "react";
import Bookmarks from "../components/Bookmarks";
import FooterBack from "../components/FooterBack";
import Navbar from "../components/Navbar";

export default function ViewBookmarks() {
  return (
    <>
      <Navbar />
      <Bookmarks />
      <FooterBack />
    </>
  );
}
