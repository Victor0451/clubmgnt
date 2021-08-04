import React from "react";
import ReactTable from "react-table";
import Spinner from "../layouts/Spinner";
import ModalVerSocio from "./ModalVerSocio";
import matchSorter from "match-sorter";
import router from "next/router";

const ListadoSocio = ({ socios, verSocio, soc, eliminarSocio }) => {
  if (!socios) return <Spinner />;

  return (
    <div className="container bg-dark  rounded-3 border border-dark mt-4 p-4">
      <h2 className="mb-4 text-white">
        <strong>Listado de socios</strong>
      </h2>

      <div className="list">
        <ReactTable
          data={socios}
          filterable
          defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
          columns={[
            {
              Header: "Socios",
              columns: [
                {
                  Header: "N° Socio",
                  id: "nsocio",
                  accessor: (d) => d.nsocio,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["nsocio"] }),
                  filterAll: true,
                },
                {
                  Header: "Apellido",
                  id: "apellido",
                  accessor: (d) => d.apellido,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["apellido"] }),
                  filterAll: true,
                },
                {
                  Header: "Nombre",
                  id: "nombre",
                  accessor: (d) => d.nombre,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["nombre"] }),
                  filterAll: true,
                },
                {
                  Header: "DNI",
                  id: "dni",
                  accessor: (d) => d.dni,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["dni"] }),
                  filterAll: true,
                },
                {
                  Header: "Tutor",
                  id: "tutor",
                  accessor: (d) => d.tutor,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["tutor"] }),
                  filterAll: true,
                },
              ],
            },
            {
              Header: "Aciones",
              id: "Acciones",
              filterAll: true,

              Cell: function acciones(row) {
                return (
                  <div className="">
                    <button
                      className="btn btn-secondary me-1 btn-sm"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      onClick={() => verSocio(row.original)}
                    >
                      <i
                        className="text-dark fa fa-search"
                        aria-hidden="true"
                      ></i>
                    </button>
                    <button
                      className=" btn btn-warning me-1 btn-sm "
                      // onClick={() => verSocio(row.original)}
                    >
                      <i className="fa fa-pencil" aria-hidden="true"></i>
                    </button>
                    <button
                      className=" btn btn-danger me-1 btn-sm"
                      onClick={() => eliminarSocio(row.original.nsocio)}
                    >
                      <i
                        className="text-dark fa fa-trash"
                        aria-hidden="true"
                      ></i>
                    </button>
                    <button
                      className=" btn btn-info btn-sm"
                      onClick={() => {
                        router.push({
                          pathname: "/socio/carnet",
                          query: {
                            id: row.original.id,
                          },
                        });
                      }}
                    >
                      <i
                        className="text-dark fa fa-address-card-o"
                        aria-hidden="true"
                      ></i>
                    </button>
                  </div>
                );
              },
            },
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
      </div>

      {!soc ? null : <ModalVerSocio soc={soc} />}
    </div>
  );
};

export default ListadoSocio;
