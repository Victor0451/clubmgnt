import React, { useState, useEffect } from "react";
import QRCode from "qrcode";
import Spinner from "../layouts/Spinner";
import Img from "next/image";

const VistaCarnet = ({ id, socio, imprimir }) => {
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
    const getUrl = window.location.href;
    const url = `http://${getUrl.split("/")[2]}/socio/ficha`;
    dataToQR(`${url}?id=${id}`);
  }, [id]);

  if (!socio) return <Spinner />;

  return (
    <div className=" container bg-dark rounded-3 border border-dark mt-4 p-4">
      <h2 className="mb-4 text-white">
        <strong>Carnet Del Socio</strong>
      </h2>

      <div id="carnet" className="carnet-print">
        <div className="card col-md-6 mb-3 border border-dark">
          <div className="row no-gutters ">
            <div className="col-md-4 ">
              {socio.url ? (
                <Img
                  src={`${socio.url}`}
                  width={300}
                  height={300}
                  alt="Foto del socio"
                  className="border border-dark"
                />
              ) : null}
            </div>

            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title"> Club Atletico Gorriti</h5>
                <div className="card-text">
                  <h6 className="mt-4">Socio N° {socio.nsocio}</h6>

                  <h6 className="mt-2">
                    {socio.apellido}, {socio.nombre}
                  </h6>

                  <small className="card-text">
                    Fecha de Inicio: {socio.inicio}
                  </small>
                </div>
              </div>
            </div>

            <div className="mt-3 col-md-4">
              <Img
                src="/img/carnet/logoclub.png"
                width={65}
                height={65}
                alt="Logo del Club"
              />
            </div>
            <div className="col-md-8 d-flex justify-content-end">
              {code ? (
                <Img src={`${code}`} width={80} height={80} alt="QR" />
              ) : null}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 container bg-dark rounded-3 border border-dark p-4">
        <h4 className="text-white">Opciones</h4>

        <div className="border border-white p-4">
          <button className="btn btn-secondary" onClick={() => imprimir()}>
            Imprimir
          </button>
        </div>
      </div>
    </div>
  );
};

export default VistaCarnet;
