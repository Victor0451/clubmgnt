import "../styles/globals.css";
import "react-confirm-alert/src/react-confirm-alert.css";
import "react-table/react-table.css";
import firebase, { FirebaseContext } from "../firebase";
import React from "react";
import useAutenticacion from "../hooks/useAutenticacion";

const MyApp = ({ Component, pageProps }) => {
  const usuario = useAutenticacion();

  return (
    <FirebaseContext.Provider value={{ firebase, usuario }}>
      <Component {...pageProps} />
    </FirebaseContext.Provider>
  );
};

export default MyApp;
