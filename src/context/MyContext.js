import { createContext, useState } from "react";

export const myContext = createContext();

export const MyContextProvider = (props) => {
  const [test, setTest] = useState("My test value!");

  return (
    <myContext.Provider value={{ test, setTest }}>
      {props.children}
    </myContext.Provider>
  );
};
