import React, { useContext, useEffect, useState } from "react";
import ErrorPage from "../../components/layouts/ErrorPage";
import Layout from "../../components/layouts/Layout";
import VistaCarnet from "../../components/socio/VistaCarnet";
import { FirebaseContext } from "../../firebase";
import { useRouter } from "next/router";

const carnet = () => {
  const [socio, guardarSocio] = useState({});

  const { firebase, usuario } = useContext(FirebaseContext);

  const router = useRouter();

  const traerSocio = async (id) => {
    const query = await firebase.db.collection("socio").doc(id).get();

    if (query.exists === true) {
      guardarSocio(query.data());
    }
  };

  useEffect(() => {
    traerSocio(router.query.id);
  }, []);

  return (
    <Layout>
      {!usuario ? (
        <ErrorPage />
      ) : (
        <VistaCarnet id={router.query.id} socio={socio} />
      )}
    </Layout>
  );
};

export default carnet;
