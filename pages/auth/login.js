import React, { useState, useContext } from "react";
import Login from "../../components/auth/Login";
import Layout from "../../components/layouts/Layout";
import firebase from "../../firebase/firebase";
import useValidacion from "../../hooks/useValidacion";
import validarIniciarSession from "../../validacion/validarIniciarSession";
import toastr from "toastr";
import Router from "next/router";

const STATE_INICIAL = {
  mail: "",
  contrasena: "",
};

const login = () => {
  const [errorFirebase, guardarErrorFirebase] = useState(false);

  const { valores, errores, handleChange, handleSubmit, handleBlur } =
    useValidacion(STATE_INICIAL, validarIniciarSession, iniciarSession);

  const { mail, contrasena } = valores;

  async function iniciarSession() {
    try {
      await firebase.login(mail, contrasena);

      toastr.success(`Bienvenido al sistema`, "ATENCION");

      setTimeout(() => {
        Router.push("/");
      }, 300);
    } catch (error) {
      console.log(error.message);
      guardarErrorFirebase(error.message);
    }
  }

  return (
    <Layout>
      <Login
        mail={mail}
        contrasena={contrasena}
        handleBlur={handleBlur}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        errores={errores}
        errorFirebase={errorFirebase}
      />
    </Layout>
  );
};

export default login;
