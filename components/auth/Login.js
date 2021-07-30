import React from "react";

const Login = ({
  mail,
  contrasena,
  handleBlur,
  handleChange,
  handleSubmit,
  errores,
  errorFirebase,
}) => {
  return (
    <div className="container  col-md-6 border border-dark mt-4 p-4">
      <h2 className=" mb-4">
        <u>Iniciar Sesion</u>
      </h2>

      <div className="border border-dark p-4">
        <div className="row  mt-4 mb-4">
          <div className="col-md-6">
            <label className="mb-2">
              <u>Mail</u>
            </label>
            <input
              type="mail"
              className="form-control"
              name="mail"
              value={mail}
              onBlur={handleBlur}
              onChange={handleChange}
            />

            {errores.mail && (
              <div className="alert alert-danger border border-dark text-center text-uppercase">
                {errores.mail}
              </div>
            )}
          </div>

          <div className="col-md-6">
            <label className="mb-2">
              <u>Contraseña</u>
            </label>
            <input
              type="password"
              className="form-control"
              name="contrasena"
              value={contrasena}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {errores.contrasena && (
              <div className="alert alert-danger border border-dark text-center text-uppercase">
                {errores.contrasena}
              </div>
            )}
          </div>
        </div>

        {errorFirebase && (
          <div className="mt-4 alert alert-danger border border-dark text-center text-uppercase">
            {errorFirebase}
          </div>
        )}

        <div className=" mt-4 row">
          <div className="col-md-12 d-flex justify-content-end">
            <button className="btn btn-secondary" onClick={handleSubmit}>
              Iniciar Sesion
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
