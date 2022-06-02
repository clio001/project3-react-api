import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { db } from "../config";
import {
  collection,
  query,
  getDocs,
  onSnapshot,
  orderBy,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";

export const myContext = createContext();

export const MyContextProvider = (props) => {
  const [test, setTest] = useState({ name: "John", password: "tomato" });

  const [myData, setMyData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userInput, setUserInput] = useState("Mauer");
  const [rights, setRights] = useState("");
  let [collections, setCollection] = useState(["Deutsche Fotothek"]);
  const [sort, setSort] = useState("");
  const [rows, setRows] = useState("20");
  const [fotothek, setFotothek] = useState(true);
  const [welle, setWelle] = useState(false);
  const [mark, setMark] = useState("20");
  const [score, setScore] = useState(false);
  const [random, setRandom] = useState(true);
  const { user } = useContext(AuthContext);

  const url = `https://api.europeana.eu/record/v2/search.json?wskey=menewitono&reusability=${rights}&rows=${rows}&query=${collections}+${userInput}${sort}`;
  /* console.log("API URL: ", url); */

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
  };

  const handleSort = (event) => {
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
    setMark(event.target.value);
    setRows(event.target.value);
  };

  const handleFotothek = (event) => {
    if (event.target.checked) {
      collections.push(event.target.value);
      setFotothek(true);
    } else {
      let item = collections.indexOf(event.target.value);
      collections.splice(item, 1);
      setCollection(collections);
      setFotothek(false);
    }
  };

  const handleWelle = (event) => {
    if (event.target.checked) {
      collections.push(event.target.value);
      setWelle(true);
    } else {
      let item = collections.indexOf(event.target.value);
      collections.splice(item, 1);
      setCollection(collections);
      setWelle(false);
    }
  };

  // * Firestore

  // console.log("DB: ", db);

  const [messages, setMessages] = useState(null);
  const [chatMsg, setChatMsg] = useState("");
  const [documentID, setDocumentID] = useState("");

  const getMessages = () => {
    const q = query(collection(db, "chat"), orderBy("date"));
    onSnapshot(q, (querySnapshot) => {
      const myMessages = [];
      querySnapshot.forEach((doc) => {
        myMessages.push(doc.data());
      });
      setMessages(myMessages);
    });
  };

  // ? Deprecated Firestore method to read data from chat database. Replaced by realtime update listener method above.
  /*   const getMessages = async () => {
    const querySnapshot = await getDocs(collection(db, "chat"));
    const myMessages = [];
    querySnapshot.forEach((doc) => {
      myMessages.push(doc.data());
    });
    console.log(myMessages);
    setMessages(myMessages);
  }; */

  const handleNewMsg = (event) => {
    setChatMsg(event.target.value);
  };

  const addChatMsg = async () => {
    const chatMsgObject = {
      author: user.email,
      text: chatMsg,
      date: new Date(),
    };
    try {
      const docRef = await addDoc(collection(db, "chat"), chatMsgObject);
      setDocumentID(docRef.id);
      const idField = doc(db, "chat", docRef.id);
      await updateDoc(idField, {
        id: docRef.id,
      });
    } catch (error) {
      console.log("Error adding document: ", error);
    }

    window.scrollTo(0, document.body.scrollHeight);
  };

  useEffect(() => {
    getMessages();
  }, [documentID]);

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
        fotothek,
        welle,
        handleWelle,
        handleFotothek,
        mark,
        score,
        random,
        collections,
        messages,
        handleNewMsg,
        addChatMsg,
        documentID,
        user,
      }}
    >
      {props.children}
    </myContext.Provider>
  );
};
