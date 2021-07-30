import React, { useState } from "react";
import SingUp from "../../components/auth/SingUp";
import Layout from "../../components/layouts/Layout";
import firebase from "../../firebase/firebase";
import useValidacion from "../../hooks/useValidacion";
import validarRegistrarUsuario from "../../validacion/validaRegistrarUsuario";
import toastr from "toastr";
import Router from "next/router";

const STATE_INICIAL = {
  mail: "",
  usuario: "",
  contrasena: "",
};

const singup = () => {
  const [errorFirebase, guardarErrorFirebase] = useState(false);

  const { valores, errores, handleChange, handleSubmit, handleBlur } =
    useValidacion(STATE_INICIAL, validarRegistrarUsuario, registrarUsuario);

  const { mail, usuario, contrasena } = valores;

  async function registrarUsuario() {
    try {
      await firebase.registrar(usuario, mail, contrasena);
      toastr.success("El usuario fue registrado con exito", "ATENCION");

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
      <SingUp
        mail={mail}
        usuario={usuario}
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

export default singup;
