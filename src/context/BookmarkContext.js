import { createContext, useState } from "react";

export const BookmarkContext = createContext();

export const BookmarkContextProvider = (props) => {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <BookmarkContext.Provider value={{ setChecked, checked }}>
        {props.children}
      </BookmarkContext.Provider>
    </>
  );
};
