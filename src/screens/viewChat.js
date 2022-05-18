import React from "react";
import Chat from "../components/Chat";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function ViewChat() {
  return (
    <>
      <Navbar />
      <Chat />
      <Footer />
    </>
  );
}