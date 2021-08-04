import React, { useContext, useEffect, useState } from "react";
import Layout from "../../components/layouts/Layout";
import { FirebaseContext } from "../../firebase";
import { useRouter } from "next/router";
import VistaFichaSocio from "../../components/socio/VistaFichaSocio";

const Ficha = () => {
  const [socio, guardarSocio] = useState({});

  const { firebase, usuario } = useContext(FirebaseContext);

  const router = useRouter();

  useEffect(() => {
    const url = window.location.href;
    url.split("=");
    let id = url.split("=")[1];

    const traerSocio = async (id) => {
      const query = await firebase.db.collection("socio").doc(id).get();

      if (query.exists === true) {
        guardarSocio(query.data());
      }
    };

    traerSocio(id);
  }, [firebase]);

  return (
    <Layout flag={true}>
      <VistaFichaSocio socio={socio} />
    </Layout>
  );
};

export default Ficha;
