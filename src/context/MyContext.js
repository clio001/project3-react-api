import { FamilyRestroomRounded } from "@mui/icons-material";
import { elementAcceptingRef } from "@mui/utils";
import { createContext, useRef, useState } from "react";

export const myContext = createContext();

export const MyContextProvider = (props) => {
  const [test, setTest] = useState({ name: "John", password: "tomato" });
  const checkboxElement = useRef();
  console.log(checkboxElement);

  const [myData, setMyData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userInput, setUserInput] = useState("Mauer");
  const [rights, setRights] = useState("");
  let [collection, setCollection] = useState(["Deutsche Fotothek"]);
  const [sort, setSort] = useState("");
  const [rows, setRows] = useState("20");
  const [fotothek, setFotothek] = useState(true);
  const [welle, setWelle] = useState(false);
  const [mark, setMark] = useState("20");
  const [score, setScore] = useState(false);
  const [random, setRandom] = useState(true);

  const url = `https://api.europeana.eu/record/v2/search.json?wskey=menewitono&rows=${rows}&query=${collection}+${userInput}${rights}${sort}`;
  console.log("API URL: ", url);
  console.log("Collection : ", collection);

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

  const handleSort = (event) => {
    console.log("Sortierung: ", event.target.value);
    setSort(`&sort=${event.target.value}`);
    if (event.target.value === "score") {
      setScore(true);
      setRandom(false);
    } else {
      setRandom(true);
      setScore(false);
    }
  };

  const handleSlider = (event) => {
    console.log("Rows: ", event.target.value);
    setMark(event.target.value);
    setRows(event.target.value);
  };

  const handleFotothek = (event) => {
    if (event.target.checked) {
      collection.push(event.target.value);
      setFotothek(true);
    } else {
      let item = collection.indexOf(event.target.value);
      collection.splice(item, 1);
      setCollection(collection);
      console.log("Collection after slicing: ", collection);

      setFotothek(false);
    }
  };

  const handleWelle = (event) => {
    if (event.target.checked) {
      collection.push(event.target.value);
      setWelle(true);
    } else {
      let item = collection.indexOf(event.target.value);
      collection.splice(item, 1);
      setCollection(collection);
      console.log("Collection after splicing: ", collection);
      setWelle(false);
    }
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
        handleSort,
        handleSlider,
        checkboxElement,
        fotothek,
        welle,
        handleWelle,
        handleFotothek,
        mark,
        score,
        random,
      }}
    >
      {props.children}
    </myContext.Provider>
  );
};
