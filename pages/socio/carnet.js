import React, { useContext, useEffect, useState } from "react";
import ErrorPage from "../../components/layouts/ErrorPage";
import Layout from "../../components/layouts/Layout";
import VistaCarnet from "../../components/socio/VistaCarnet";
import { FirebaseContext } from "../../firebase";
import { useRouter } from "next/router";

const Carnet = () => {
  const [socio, guardarSocio] = useState({});

  const { firebase, usuario } = useContext(FirebaseContext);

  const router = useRouter();

  const imprimir = () => {
    let contenido = document.getElementById("carnet").innerHTML;
    let contenidoOrg = document.body.innerHTML;

    document.body.innerHTML = contenido;

    window.print();

    document.body.innerHTML = contenidoOrg;
  };

  useEffect(() => {
    const traerSocio = async (id) => {
      const query = await firebase.db.collection("socio").doc(id).get();

      if (query.exists === true) {
        guardarSocio(query.data());
      }
    };

    traerSocio(router.query.id);
  }, [router, firebase]);

  return (
    <Layout>
      {!usuario ? (
        <ErrorPage />
      ) : (
        <VistaCarnet id={router.query.id} socio={socio} imprimir={imprimir} />
      )}
    </Layout>
  );
};

export default Carnet;
