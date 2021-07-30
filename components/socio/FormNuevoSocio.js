import React from "react";
import FileUploader from "react-firebase-file-uploader";

const FormNuevoSocio = ({
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
  handleBlur,
  handleChange,
  handleSubmit,
  errores,
  errorFirebase,
  handleProgress,
  handleUploadError,
  handleUploadStart,
  handleUploadSuccess,
  firebase,
}) => {
  return (
    <div className="container bg-dark rounded-3 border border-dark mt-4 p-4">
      <h2 className="mb-4 text-white">
        <strong>
          <u>Registrar Socios</u>
        </strong>
      </h2>

      <div className="mt-4  rounded-3 border border-dark text-white p-4">
        <div className="row">
          <div className="col-md-4">
            <label className="mb-2">
              <u>Numero de Socio</u>
            </label>
            <input
              type="text"
              className="form-control"
              name="nsocio"
              value={nsocio}
              onBlur={handleBlur}
              onChange={handleChange}
            />

            {errores.nsocio && (
              <div className="mt-2 alert alert-danger border border-dark text-center text-uppercase">
                {errores.nsocio}
              </div>
            )}
          </div>

          <div className="col-md-4">
            <label className="mb-2">
              <u>Fecha de Inicio</u>
            </label>
            <input
              type="date"
              className="form-control"
              name="inicio"
              value={inicio}
              onBlur={handleBlur}
              onChange={handleChange}
            />

            {errores.inicio && (
              <div className="mt-2 alert alert-danger border border-dark text-center text-uppercase">
                {errores.inicio}
              </div>
            )}
          </div>

          <div className="col-md-4">
            <label className="mb-2">
              <u>Apellido</u>
            </label>
            <input
              type="text"
              className="form-control"
              name="apellido"
              value={apellido}
              onBlur={handleBlur}
              onChange={handleChange}
            />

            {errores.apellido && (
              <div className="mt-2 alert alert-danger border border-dark text-center text-uppercase">
                {errores.apellido}
              </div>
            )}
          </div>

          <div className="mt-4 col-md-4">
            <label className="mb-2">
              <u>Nombre</u>
            </label>
            <input
              type="text"
              className="form-control"
              name="nombre"
              value={nombre}
              onBlur={handleBlur}
              onChange={handleChange}
            />

            {errores.nombre && (
              <div className="mt-2 alert alert-danger border border-dark text-center text-uppercase">
                {errores.nombre}
              </div>
            )}
          </div>
          <div className="mt-4 col-md-4">
            <label className="mb-2">
              <u>DNI</u>
            </label>
            <input
              type="number"
              className="form-control"
              name="dni"
              value={dni}
              onBlur={handleBlur}
              onChange={handleChange}
            />

            {errores.dni && (
              <div className="mt-2 alert alert-danger border border-dark text-center text-uppercase">
                {errores.dni}
              </div>
            )}
          </div>
          <div className="mt-4 col-md-4">
            <label className="mb-2">
              <u>Fecha de Nacimiento</u>
            </label>
            <input
              type="date"
              className="form-control"
              name="nacimiento"
              value={nacimiento}
              onBlur={handleBlur}
              onChange={handleChange}
            />

            {errores.nacimiento && (
              <div className="mt-2 alert alert-danger border border-dark text-center text-uppercase">
                {errores.nacimiento}
              </div>
            )}
          </div>

          <div className="mt-4 col-md-4">
            <label className="mb-2">
              <u>Domicilio</u>
            </label>
            <input
              type="text"
              className="form-control"
              name="domicilio"
              value={domicilio}
              onBlur={handleBlur}
              onChange={handleChange}
            />

            {errores.domicilio && (
              <div className="mt-2 alert alert-danger border border-dark text-center text-uppercase">
                {errores.domicilio}
              </div>
            )}
          </div>

          <div className="mt-4 col-md-4">
            <label className="mb-2">
              <u>Telefono</u>
            </label>
            <input
              type="text"
              className="form-control"
              name="telefono"
              value={telefono}
              onBlur={handleBlur}
              onChange={handleChange}
            />

            {errores.telefono && (
              <div className="mt-2 alert alert-danger border border-dark text-center text-uppercase">
                {errores.telefono}
              </div>
            )}
          </div>

          <div className="mt-4 col-md-4">
            <label className="mb-2">
              <u>Tutor</u>
            </label>
            <input
              type="text"
              className="form-control"
              name="tutor"
              value={tutor}
              onBlur={handleBlur}
              onChange={handleChange}
            />

            {errores.tutor && (
              <div className="mt-2 alert alert-danger border border-dark text-center text-uppercase">
                {errores.tutor}
              </div>
            )}
          </div>

          <div className="mt-4 col-md-4">
            <label className="mb-2">
              <u>Disciplina</u>
            </label>
            <input
              type="text"
              className="form-control"
              name="diciplina"
              value={diciplina}
              onBlur={handleBlur}
              onChange={handleChange}
            />

            {errores.diciplina && (
              <div className="mt-2 alert alert-danger border border-dark text-center text-uppercase">
                {errores.diciplina}
              </div>
            )}
          </div>

          <div className="mt-4 col-md-4">
            <label className="mb-2">
              <u>Categoria</u>
            </label>
            <input
              type="text"
              className="form-control"
              name="categoria"
              value={categoria}
              onBlur={handleBlur}
              onChange={handleChange}
            />

            {errores.categoria && (
              <div className="mt-2 alert alert-danger border border-dark text-center text-uppercase">
                {errores.categoria}
              </div>
            )}
          </div>

          <div className="mt-4 col-md-4">
            <label className="mb-2">
              <u>Subir Imagen</u>
            </label>

            <FileUploader
              accept="image/*"
              name="imagen"
              randomizeFilename
              storageRef={firebase.storage.ref("socio")}
              onUploadStart={handleUploadStart}
              onUploadError={handleUploadError}
              onUploadSuccess={handleUploadSuccess}
              onProgress={handleProgress}
            />
          </div>
        </div>
      </div>
      <div className="mt-4 d-grid gap-2 d-md-flex justify-content-md-end">
        <button className="btn btn-secondary " onClick={handleSubmit}>
          Registrar
        </button>

        <a href="/" className="btn btn-danger ">
          Cancelar
        </a>
      </div>
    </div>
  );
};

export default FormNuevoSocio;
