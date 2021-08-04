import React from "react";
import Img from "next/image";

const ModalVerSocio = ({ soc }) => {
  
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              <u>Socio N°</u>: {soc.nsocio} - {soc.apellido}, {soc.nombre}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="mt-4 bg-dark rounded-3 border border-dark text-white p-4">
              <div className="row">
                <div className="col-md-4">
                  <label className="mb-2">
                    <u>Numero de Socio</u>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="nsocio"
                    defaultValue={soc.nsocio}
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
                    defaultValue={soc.inicio}
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
                    defaultValue={soc.apellido}
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
                    defaultValue={soc.nombre}
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
                    defaultValue={soc.dni}
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
                    defaultValue={soc.nacimiento}
                    readOnly
                  />
                </div>

                <div className="mt-4 col-md-4">
                  <label className="mb-2">
                    <u>Domicilio</u>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="domicilio"
                    defaultValue={soc.domicilio}
                    readOnly
                  />
                </div>

                <div className="mt-4 col-md-4">
                  <label className="mb-2">
                    <u>Telefono</u>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="telefono"
                    defaultValue={soc.telefono}
                    readOnly
                  />
                </div>

                <div className="mt-4 col-md-4">
                  <label className="mb-2">
                    <u>Tutor</u>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="tutor"
                    defaultValue={soc.tutor}
                    readOnly
                  />
                </div>

                <div className="mt-4 col-md-4">
                  <label className="mb-2">
                    <u>Disciplina</u>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="diciplina"
                    defaultValue={soc.diciplina}
                    readOnly
                  />
                </div>

                <div className="mt-4 col-md-4">
                  <label className="mb-2">
                    <u>Categoria</u>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="categoria"
                    defaultValue={soc.categoria}
                    readOnly
                  />
                </div>
              </div>

              {!soc.url ? (
                <div className="mt-4 col-md-4">
                  <label className="mb-2">
                    <u>No tiene imagenes cargadas</u>
                  </label>
                </div>
              ) : (
                <div className="mt-4 row d-flex justify-content-center">
                  <div className="mt-4 col-md-6  ">
                    <label className="mb-2">
                      <u>Imagen</u>
                    </label>
                    <div>
                      <Img
                        src={`${soc.url}`}
                        width={300}
                        height={300}
                        className="img-soc"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-danger"
              data-bs-dismiss="modal"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalVerSocio;
