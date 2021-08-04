import React, { useContext, useEffect, useState } from "react";
import ErrorPage from "../../components/layouts/ErrorPage";
import Layout from "../../components/layouts/Layout";
import { FirebaseContext } from "../../firebase";
import { useRouter } from "next/router";
import { confirmAlert } from "react-confirm-alert";
import FormRegistrarPago from "../../components/pagos/FormRegistrarPago";
import moment from "moment";
import toastr from "toastr";

const Nuevo = () => {
  let nsocioRef = React.createRef();
  let dniRef = React.createRef();
  let mesRef = React.createRef();
  let anoRef = React.createRef();
  let importeRef = React.createRef();

  const { firebase, usuario } = useContext(FirebaseContext);

  const router = useRouter();

  const [errorFirebase, guardarErrorFirebase] = useState(false);
  const [error, guardarError] = useState(null);
  const [socio, guardarSocio] = useState(null);
  const [nupagos, guardarNuPagos] = useState([]);
  const [vipagos, guardarViPagos] = useState([]);

  const traerPagos = async (id) => {
    await firebase.db
      .collection("pago")
      .where("nsocio", "==", id)
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.empty === true) {
          toastr.warning(`El socio no tiene pagos registrados`, "ATENCION");
        } else {
          const vipa = querySnapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });

          guardarViPagos([...vipa]);
        }
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
        toastr.error("Ocurrio un error al buscar al socio", "ATENCION");
      });
  };

  const buscarSocio = async () => {
    if (nsocioRef.current.value === "") {
      guardarError("Debes ingresar un numero de socio");
    } else {
      await firebase.db
        .collection("socio")
        .where("nsocio", "==", nsocioRef.current.value)
        .get()
        .then((querySnapshot) => {
          if (querySnapshot.empty === true) {
            toastr.warning(
              `El numero  ingresado no pertenece a un socio registrado`
            );
          } else {
            querySnapshot.forEach((doc) => {
              const socio = {
                id: doc.id,
                ...doc.data(),
              };
              guardarSocio(socio);
              traerPagos(socio.nsocio);
            });
          }
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
          toastr.error("Ocurrio un error al buscar al socio", "ATENCION");
        });
    }
  };

  const buscarSocioDNI = async () => {
    if (dniRef.current.value === "") {
      guardarError("Debes ingresar un numero de dni");
    } else {
      await firebase.db
        .collection("socio")
        .where("nsocio", "==", dniRef.current.value)
        .get()
        .then((querySnapshot) => {
          if (querySnapshot.empty === true) {
            toastr.warning(
              `El dni ingresado no pertenece a un socio registrado`
            );
          } else {
            querySnapshot.forEach((doc) => {
              const socio = {
                id: doc.id,
                ...doc.data(),
              };
              guardarSocio(socio);
              traerPagos(socio.nsocio);
            });
          }
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
          toastr.error("Ocurrio un error al buscar al socio", "ATENCION");
        });
    }
  };

  const preCargarPago = () => {
    const prepago = {
      serie: "",
      recibo: "",
      id: socio.id,
      nsocio: socio.nsocio,
      dni: socio.dni,
      mes: mesRef.current.value,
      ano: anoRef.current.value,
      importe: importeRef.current.value,
      fecha: moment().format("YYYY-MM-DD"),
    };

    if (prepago.mes === "") {
      toastr.warning("Debes ingresar el mes a cobrar", "ATENCION");
    } else if (prepago.ano === "") {
      toastr.warning("Debes ingresar el año a cobrar", "ATENCION");
    } else {
      toastr.info("Recibo pre cargado exitosamente", "ATENCION");
      guardarNuPagos([...nupagos, prepago]);
    }
  };

  const totalPagosPrecargados = (arr) => {
    let total = 0;

    for (let i = 0; i < arr.length; i++) {
      total += parseFloat(arr[i].importe);
    }

    return total.toFixed(2);
  };

  const registrarPago = async () => {
    try {
      for (let i = 0; i < nupagos.length; i++) {
        await firebase.db.collection("pago").add(nupagos[i]);
      }

      toastr.success(`El recibo se registro con exito`, "ATENCION");

      traerPagos(socio.nsocio);
    } catch (error) {
      console.log(error.message);
      guardarErrorFirebase(error.message);
    }
  };

  const eliminarPagoPrecargado = (index) => {
    nupagos.splice(index, 1);

    guardarNuPagos([...nupagos]);
  };

  const eliminarPagosRegistrado = async (id) => {
    await confirmAlert({
      title: "ATENCION",
      message: "¿Estas seguro que deseas eliminar el gasto registrado?",
      buttons: [
        {
          label: "Si",
          onClick: () => {
            firebase.db
              .collection("pago")
              .doc(id)
              .get()
              .then(function (querySnapshot) {
                querySnapshot.ref.delete();

                toastr.success(`El pago fue eliminado correctamente`);

                traerPagos(socio.nsocio);
              })

              .catch((error) => {
                console.log("Error getting documents: ", error);
                toastr.error(
                  "Ocurrio un error al eliminar el pago seleccionado",
                  "ATENCION"
                );
              });
          },
        },
        {
          label: "No",
          onClick: () => {
            toastr.info("El pago no se elimino", "ATENCION");
          },
        },
      ],
    });
  };

  return (
    <Layout>
      {!usuario ? (
        <ErrorPage />
      ) : (
        <FormRegistrarPago
          nsocioRef={nsocioRef}
          dniRef={dniRef}
          mesRef={mesRef}
          anoRef={anoRef}
          importeRef={importeRef}
          buscarSocio={buscarSocio}
          buscarSocioDNI={buscarSocioDNI}
          preCargarPago={preCargarPago}
          registrarPago={registrarPago}
          eliminarPagoPrecargado={eliminarPagoPrecargado}
          eliminarPagosRegistrado={eliminarPagosRegistrado}
          totalPagosPrecargados={totalPagosPrecargados}
          error={error}
          socio={socio}
          nupagos={nupagos}
          vipagos={vipagos}
        />
      )}
    </Layout>
  );
};

export default Nuevo;
