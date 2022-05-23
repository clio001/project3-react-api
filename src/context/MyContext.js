import { createContext, useState } from "react";

export const myContext = createContext();

export const MyContextProvider = (props) => {
  const [test, setTest] = useState({ name: "John", password: "tomato" });

  const [myData, setMyData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userInput, setUserInput] = useState("Berliner Mauer");

  const collection = "";
  const url = `https://api.europeana.eu/record/v2/search.json?wskey=menewitono&query=${userInput}`;
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
      }}
    >
      {props.children}
    </myContext.Provider>
  );
};
