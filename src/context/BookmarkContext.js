import { createContext, useState } from "react";

export const BookmarkContext = createContext();
//TODO are you really using it? If not, better remove it , unless you have something planned for it.
export const BookmarkContextProvider = (props) => {
  return (
    <>
      <BookmarkContext.Provider value={{}}>
        {props.children}
      </BookmarkContext.Provider>
    </>
  );
};
