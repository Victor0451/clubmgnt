import React, { useState, useContext } from "react";
import Layout from "../../components/layouts/Layout";
import FormNuevoSocio from "../../components/socio/FormNuevoSocio";
import useValidacion from "../../hooks/useValidacion";
import validaRegistroSocio from "../../validacion/validaRegistroSocio";
import toastr from "toastr";
import { FirebaseContext } from "../../firebase";
import Router, { useRouter } from "next/router";
import ErrorPage from "../../components/layouts/ErrorPage";

const STATE_INICIAL = {
  inicio: "",
  nsocio: "",
  apellido: "",
  nombre: "",
  dni: "",
  nacimiento: "",
  domicilio: "",
  telefono: "",
  tutor: "",
  diciplina: "",
  categoria: "",
};

const Nuevo = () => {
  const [nombreimagen, guardarNombre] = useState("");
  const [subiendo, guardarSubiendo] = useState(false);
  const [progreso, guardarProgreso] = useState(0);
  const [urlimagen, guardarUrlImagen] = useState("");

  const handleUploadStart = () => {
    guardarProgreso(0);
    guardarSubiendo(true);
  };

  const handleProgress = (progreso) => {
    guardarProgreso({ progreso });
  };

  const handleUploadError = (error) => {
    guardarSubiendo(error);
    console.error(error);
  };

  const handleUploadSuccess = async (nombre) => {
    guardarProgreso(100);
    guardarSubiendo(false);
    guardarNombre(nombre);

    firebase.storage
      .ref("socio")
      .child(nombre)
      .getDownloadURL()
      .then((url) => {
        console.log(url);
        guardarUrlImagen(url);
      });
  };

  const router = useRouter();
  const { firebase, usuario } = useContext(FirebaseContext);

  const [errorFirebase, guardarErrorFirebase] = useState(false);

  const { valores, errores, handleChange, handleSubmit, handleBlur } =
    useValidacion(STATE_INICIAL, validaRegistroSocio, registrarSocio);

  const {
    inicio,
    nsocio,
    apellido,
    nombre,
    dni,
    nacimiento,
    domicilio,
    telefono,
    tutor,
    diciplina,
    categoria,
  } = valores;

  async function registrarSocio() {
    const socio = {
      inicio,
      nsocio,
      apellido,
      nombre,
      dni,
      nacimiento,
      domicilio,
      telefono,
      tutor,
      diciplina,
      categoria,
      url: urlimagen,
    };

    await firebase.db
      .collection("socio")
      .where("nsocio", "==", socio.nsocio)
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.empty === false) {
          querySnapshot.forEach((doc) => {
            toastr.warning(
              `El numero de socio existe y pertenece a ${
                doc.data().apellido
              }, ${doc.data().nombre}`
            );
          });
        } else {
          try {
            firebase.db.collection("socio").add(socio);

            toastr.success(`El socio se registro con exito`, "ATENCION");
          } catch (error) {
            console.log(error.message);
            guardarErrorFirebase(error.message);
          }
        }
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
        toastr.error("Ocurrio un error al eliminar al socio", "ATENCION");
      });
  }

  return (
    <Layout>
      {!usuario ? (
        <ErrorPage />
      ) : (
        <FormNuevoSocio
          inicio={inicio}
          nsocio={nsocio}
          apellido={apellido}
          nombre={nombre}
          dni={dni}
          nacimiento={nacimiento}
          domicilio={domicilio}
          telefono={telefono}
          tutor={tutor}
          diciplina={diciplina}
          categoria={categoria}
          handleBlur={handleBlur}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          errores={errores}
          errorFirebase={errorFirebase}
          handleProgress={handleProgress}
          handleUploadError={handleUploadError}
          handleUploadStart={handleUploadStart}
          handleUploadSuccess={handleUploadSuccess}
          firebase={firebase}
        />
      )}
    </Layout>
  );
};

export default Nuevo;
