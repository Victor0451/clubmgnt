import React, { useState, useEffect, useContext } from "react";
import Layout from "../../components/layouts/Layout";
import { FirebaseContext } from "../../firebase";
import Router, { useRouter } from "next/router";
import ListadoSocio from "../../components/socio/ListadoSocios";
import { confirmAlert } from "react-confirm-alert"; 
import toastr from "toastr";
import ErrorPage from "../../components/layouts/ErrorPage";

const Listado = () => {
  const [socios, guardarSocios] = useState(null);
  const [soc, guardarSoc] = useState({});

  const router = useRouter();
  const { firebase, usuario } = useContext(FirebaseContext);

  const manejarSnapshot = (snapshot) => {
    const socio = snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });

    guardarSocios(socio);
  };

  const verSocio = (row) => {
    guardarSoc(null);

    guardarSoc(row);
  };

  const eliminarSocio = async (id) => {
    await confirmAlert({
      title: "ATENCION",
      message: "¿Estas seguro que quiere eliminar al socio?",
      buttons: [
        {
          label: "Si",
          onClick: () => {
            firebase.db
              .collection("socio")
              .where("nsocio", "==", id)
              .get()
              .then((querySnapshot) => {
                querySnapshot.forEach((element) => {
                  element.ref.delete();
                  toastr.success(`El socio ${id} fue eliminaro correctamente`);
                });
              })
              .catch((error) => {
                console.log("Error getting documents: ", error);
                toastr.error(
                  "Ocurrio un error al eliminar al socio",
                  "ATENCION"
                );
              });
          },
        },
        {
          label: "No",
          onClick: () => {},
        },
      ],
    });
  };

  useEffect(() => {
    const traerSocios = async () => {
      try {
        await firebase.db.collection("socio").onSnapshot(manejarSnapshot);
      } catch (error) {
        toastr.error("Ocurrio un error al traer los socios", "ATENCION");
        console.log(error.message);
      }
    };

    traerSocios();
  }, [firebase]);

  return (
    <Layout>
      {!usuario ? (
        <ErrorPage />
      ) : (
        <ListadoSocio
          socios={socios}
          verSocio={verSocio}
          soc={soc}
          eliminarSocio={eliminarSocio}
        />
      )}
    </Layout>
  );
};

export default Listado;
