import React, { useEffect } from "react";
import { createContext, useState } from "react";
import { Navigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const [user, setUser] = useState({ name: "", password: "" });
  const [open, setOpen] = useState(false);
  const [unfold, setUnfold] = useState(false);

  function showAlert() {
    if (user.name !== "John") {
      setOpen(false);
      setUnfold(true);
    } else {
      setUnfold(false);
      setOpen(true);
    }
  }

  const handleLogin = () => {
    let username = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;
    setUser({ name: username, password: password });
  };

  useEffect(() => {
    showAlert();
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, setUser, handleLogin, open, unfold }}>
      {props.children}
    </AuthContext.Provider>
  );
};
