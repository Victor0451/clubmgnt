import React from "react";
import moment from "moment";

const ModalGenerarPagos = ({
  socio,
  mesRef,
  anoRef,
  importeRef,
  preCargarPago,
}) => {
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
              Formulario de Pago
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
                <div className="col-md-2">
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

                <div className="col-md-2">
                  <label className="mb-2">
                    <u>Importe</u>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="importe"
                    ref={importeRef}
                  />
                </div>

                <div className="col-md-2">
                  <label className="mb-2">
                    <u>Mes</u>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="mes"
                    ref={mesRef}
                  />
                </div>

                <div className="col-md-2">
                  <label className="mb-2">
                    <u>Año</u>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="ano"
                    ref={anoRef}
                  />
                </div>
                <div className="col-md-3">
                  <label className="mb-2">
                    <u>Fecha</u>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="nsocio"
                    defaultValue={moment().format("DD/MM/YYYY HH:mm")}
                    readOnly
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={preCargarPago}
            >
              Precargar Pago
            </button>
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

export default ModalGenerarPagos;
