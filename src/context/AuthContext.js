import React, { useContext, useEffect } from "react";
import { createContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../config";
import { Navigate, useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const [status, setStatus] = useState(false);
  const [open, setOpen] = useState(false);
  const [unfold, setUnfold] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const navigate = useNavigate();

  function closeBanner() {
    setOpen(false);
    navigate(-1);
  }

  // * FIREBASE REGISTER FUNCTION

  const register = async (email, password) => {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    setUser(userCredential.user);
    setOpen(true);
    setStatus(true);
    setTimeout(closeBanner, 2000);
    console.log("New account: ", userCredential.user.email);
  };

  // * FIREBASE LOGIN FUNCTION

  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      const user = userCredential.user;
      setUser(user);
      setOpen(true);
      setStatus(true);
      setTimeout(closeBanner, 2000);
      console.log("User logged in: ", user.email);
    });
  };

  // * FIREBASE OBSERVER FUNCTION

  const checkIfUserIsLoggedIn = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setStatus(true);
        setUser(user);
      } else {
        setStatus(false);
        setUser(null);
        setOpen(false);
      }
    });
  };

  // * FIREBASE LOGOUT FUNCTION

  const logout = () => {
    signOut(auth)
      .then(() => {
        setStatus(false);
        setUser(null);
        setOpen(false);
        console.log("Logged out: ", user.email);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    checkIfUserIsLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        login,
        open,
        unfold,
        register,
        status,
        logout,
        user,
        auth,
        validEmail,
        validPassword,
        setValidEmail,
        setValidPassword,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
