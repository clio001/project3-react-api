import React from "react";
import List from "../components/List";
import Navbar from "../components/Navbar";
import FooterFilter from "../components/FooterFilter";

export default function ViewList() {
  return (
    <>
      <Navbar />
      <List />
      <FooterFilter />
    </>
  );
}
