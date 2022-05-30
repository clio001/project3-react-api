import { createContext, useState } from "react";

export const myContext = createContext();

export const MyContextProvider = (props) => {
  const [test, setTest] = useState({ name: "John", password: "tomato" });

  const [myData, setMyData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userInput, setUserInput] = useState("Mauer");
  const [rights, setRights] = useState("");
  const [media, setMedia] = useState(false);
  const [collection, setCollection] = useState("Deutsche Fotothek");

  const url = `https://api.europeana.eu/record/v2/search.json?wskey=menewitono&query=${collection}+${userInput}${rights}`;
  console.log(url);

  const getData = () => {
    fetch(url)
      .then((response) => response.json())
      .then((myData) => {
        setMyData(myData);
        setLoading(false);
      });
  };

  const handleUserInput = () => {
    let value = document.querySelector("#userInputValue").value;
    setUserInput(value);
    setLoading(true);
    getData(url);
  };

  const handleEnter = () => {
    let inputField = document.querySelector("#userInputValue");
    inputField.addEventListener("keyup", (event) => {
      if (event.key === "Enter") {
        let value = document.querySelector("#userInputValue").value;
        setUserInput(value);
        setLoading(true);
      }
    });
  };

  // * Advanced Search parameters:

  const handleReusability = (event) => {
    setRights(event.target.value);
    console.log("Rechte: ", event.target.value);
  };

  const handleMedia = (event) => {
    setMedia(event.target.value);
    console.log("Media: ", event.target.value);
  };

  return (
    <myContext.Provider
      value={{
        test,
        setTest,
        myData,
        setMyData,
        loading,
        setLoading,
        getData,
        url,
        userInput,
        setUserInput,
        handleUserInput,
        handleEnter,
        rights,
        handleReusability,
        media,
        handleMedia,
      }}
    >
      {props.children}
    </myContext.Provider>
  );
};
