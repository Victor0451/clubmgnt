import React from "react";
import ReactTable from "react-table";

import matchSorter from "match-sorter";
import router from "next/router";

const ListadoPagos = ({
  pagos,
  flag,
  eliminarPagoPrecargado,
  eliminarPagosRegistrado,
}) => {
  if (!pagos)
    return (
      <div className="alert alert-info border border-dark text-center text-uppercase">
        No hay Pagos Registrados
      </div>
    );

  return (
    <div className="container bg-dark  rounded-3 border border-dark  p-4">
      <div className="list text-dark">
        <ReactTable
          data={pagos}
          filterable
          defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
          columns={[
            {
              Header: "Pagos",
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
                  Header: "Mes",
                  id: "mes",
                  accessor: (d) => d.mes,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["mes"] }),
                  filterAll: true,
                  width: 50,
                },
                {
                  Header: "Año",
                  id: "ano",
                  accessor: (d) => d.ano,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["ano"] }),
                  filterAll: true,
                },
                {
                  Header: "Importe",
                  id: "importe",
                  accessor: (d) => d.importe,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["importe"] }),
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
                    {flag === "0" ? (
                      <button
                        className=" btn btn-danger btn-sm"
                        onClick={() => eliminarPagosRegistrado(row.original.id)}
                      >
                        <i
                          className="text-dark fa fa-trash"
                          aria-hidden="true"
                        ></i>
                      </button>
                    ) : flag === "1" ? (
                      <button
                        className=" btn btn-danger btn-sm"
                        onClick={() => eliminarPagoPrecargado(row.index)}
                      >
                        <i
                          className="text-dark fa fa-trash"
                          aria-hidden="true"
                        ></i>
                      </button>
                    ) : null}
                  </div>
                );
              },
            },
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
      </div>
    </div>
  );
};

export default ListadoPagos;
