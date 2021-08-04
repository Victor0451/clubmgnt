import React from "react";
import ListadoPagos from "./ListadoPagos";
import ModalGenerarPagos from "./ModalGenerarPagos";

const FormRegistrarPago = ({
  nsocioRef,
  dniRef,
  mesRef,
  anoRef,
  importeRef,
  buscarSocio,
  buscarSocioDNI,
  preCargarPago,
  registrarPago,
  eliminarPagoPrecargado,
  eliminarPagosRegistrado,
  totalPagosPrecargados,
  error,
  socio,
  nupagos,
  vipagos,
}) => {
  return (
    <div className="container bg-dark rounded-3 border border-dark mt-4 p-4">
      <h2 className="mb-4 text-white">
        <strong>Buscar Socio</strong>
      </h2>

      <div className="mt-4  rounded-3 border border-white text-white p-4">
        <div className="row">
          <div className="col-md-3 ">
            <input
              type="text"
              className="form-control"
              name="nsocio"
              placeholder="Ingrese Numero De Socio"
              ref={nsocioRef}
            />
          </div>

          <div className="col-md-4 ">
            <button className="btn btn-secondary " onClick={buscarSocio}>
              Buscar
            </button>
          </div>

          <div className="col-md-3">
            <input
              type="text"
              placeholder="Ingrese Numero De DNI"
              className="form-control"
              name="dni"
              ref={dniRef}
            />
          </div>

          <div className="col-md-2">
            <button className="btn btn-secondary" onClick={buscarSocioDNI}>
              Buscar
            </button>
          </div>

          {error && (
            <div className="mt-4 alert alert-danger border border-dark text-center text-uppercase">
              {error}
            </div>
          )}
        </div>
      </div>

      {socio && (
        <>
          <div className="mt-4  rounded-3 border border-white text-white p-4">
            <h2 className="mb-4 text-white">
              <strong>Datos Del Socio</strong>
            </h2>
            <div className="row">
              <div className="col-md-4">
                <label className="mb-2">
                  <u>Numero de Socio</u>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="nsocio"
                  defaultValue={socio.nsocio}
                  readOnly
                />
              </div>

              <div className="col-md-4">
                <label className="mb-2">
                  <u>Fecha de Inicio</u>
                </label>
                <input
                  type="date"
                  className="form-control"
                  name="inicio"
                  defaultValue={socio.inicio}
                  readOnly
                />
              </div>

              <div className="col-md-4">
                <label className="mb-2">
                  <u>Apellido</u>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="apellido"
                  defaultValue={socio.apellido}
                  readOnly
                />
              </div>

              <div className="mt-4 col-md-4">
                <label className="mb-2">
                  <u>Nombre</u>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="nombre"
                  defaultValue={socio.nombre}
                  readOnly
                />
              </div>
              <div className="mt-4 col-md-4">
                <label className="mb-2">
                  <u>DNI</u>
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="dni"
                  defaultValue={socio.dni}
                  readOnly
                />
              </div>
              <div className="mt-4 col-md-4">
                <label className="mb-2">
                  <u>Fecha de Nacimiento</u>
                </label>
                <input
                  type="date"
                  className="form-control"
                  name="nacimiento"
                  defaultValue={socio.nacimiento}
                  readOnly
                />
              </div>
            </div>
          </div>

          <div className="mt-4  rounded-3 border border-white text-white p-4">
            <div className="row">
              <div className="col-md-6">
                <h2 className="mb-4 text-white">
                  <strong>Historial De Pagos</strong>
                </h2>
              </div>
              <div className="col-md-6 ">
                <button
                  className="btn btn-info me-2"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Generar Pagos
                </button>

                <button
                  className="btn btn-secondary "
                  onClick={() => registrarPago()}
                >
                  Registrar Recibo
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <ListadoPagos
                  pagos={vipagos}
                  flag={"0"}
                  eliminarPagosRegistrado={eliminarPagosRegistrado}
                />
              </div>
              <div className="col-md-6">
                <ListadoPagos
                  pagos={nupagos}
                  flag={"1"}
                  eliminarPagoPrecargado={eliminarPagoPrecargado}
                />
                <div className="alert alert-info border border-dark text-center text-uppercase">
                  Total a pagar: ${totalPagosPrecargados(nupagos)}
                </div>
              </div>
            </div>
          </div>

          <ModalGenerarPagos
            socio={socio}
            mesRef={mesRef}
            anoRef={anoRef}
            importeRef={importeRef}
            preCargarPago={preCargarPago}
          />
        </>
      )}
    </div>
  );
};

export default FormRegistrarPago;
