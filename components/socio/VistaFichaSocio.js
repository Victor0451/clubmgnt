import React from "react";

const VistaFichaSocio = ({ socio }) => {
  return (
    <div className="container bg-dark rounded-3 border border-dark mt-4 p-4">
      <h1 className="text-white">
        <u>Ficha del Socio</u>: {socio.nsocio} - {socio.apellido},{" "}
        {socio.nombre}
      </h1>

      <div className="mt-4 row border text-white p-4">
        <div className="col-md-4">
          <label className="mt-4 mb-2">
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

        <div className="mt-4 col-md-4">
          <label className="mb-2">
            <u>Domicilio</u>
          </label>
          <input
            type="text"
            className="form-control"
            name="domicilio"
            defaultValue={socio.domicilio}
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
            defaultValue={socio.telefono}
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
            defaultValue={socio.tutor}
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
            defaultValue={socio.diciplina}
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
            defaultValue={socio.categoria}
            readOnly
          />
        </div>
      </div>
    </div>
  );
};

export default VistaFichaSocio;
