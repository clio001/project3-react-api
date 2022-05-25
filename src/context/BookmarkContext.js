import { createContext, useState } from "react";
import { myContext } from "./MyContext";

export const BookmarkContext = createContext();

export const BookmarkContextProvider = (props) => {
  const [checked, setChecked] = useState(false);
  const [savedItems, setSavedItems] = useState([]);

  const handleBookmark = () => {
    if (checked === false) {
      setChecked(true);

      console.log("Bookmarked");
    } else {
      setChecked(false);
      console.log("Removed");
    }
  };

  return (
    <>
      <BookmarkContext.Provider value={{ handleBookmark, checked }}>
        {props.children}
      </BookmarkContext.Provider>
    </>
  );
};
