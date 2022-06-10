import React from "react";
import Chat from "../components/Chat";
import FooterChat from "../components/FooterChat";
import Navbar from "../components/Navbar";

export default function ViewChat() {
  return (
    <>
      <Navbar />
      <Chat />
      <FooterChat />
    </>
  );
}
