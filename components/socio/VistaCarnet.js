import React, { useState, useEffect } from "react";
import QRCode from "qrcode";
import Spinner from "../layouts/Spinner";

const VistaCarnet = ({ id, socio }) => {
  const [code, guardarCode] = useState();

  const dataToQR = (text) => {
    QRCode.toDataURL(text)
      .then((url) => {
        guardarCode(url);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    dataToQR(`http://192.168.1.71:3000/socio/ficha?id=${id}`);
  }, []);

  if (!socio) return <Spinner />;

  return (
    <div className=" container bg-dark rounded-3 border border-dark mt-4 p-4">
      <h1 className="mb-4 text-white">
        <u>Carnet Del Socio</u>
      </h1>

      <div className="row col-md-6 border border-dark  list p-4">
        <div className="col-md-8">
          <h4>
            Socio N° {socio.nsocio}: {socio.apellido}, {socio.nombre}
          </h4>
        </div>
        <div className="col-md-4 d-flex justify-content-end">
          <img
            className="img-carnet"
            src="https://logodownload.org/wp-content/uploads/2016/10/boca-juniors-logo-escudo-1-1.png"
          />
        </div>

        <div className="mt-4 col-md-6">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>

        <div className="mt-4  col-md-6">
          <img className="img-qr" src={code} />
        </div>
      </div>
    </div>
  );
};

export default VistaCarnet;
