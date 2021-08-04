import React, { useContext } from "react";
import { FirebaseContext } from "../../firebase";
import Link from "next/link";
import Img from "next/image";

const NavBar = () => {
  const { usuario, firebase } = useContext(FirebaseContext);

  return (
    <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
      <Link href="/">
        <a className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <span className="fs-5 d-none d-sm-inline">Menu</span>
        </a>
      </Link>
      <ul
        className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
        id="menu"
      >
        <li className="nav-item">
          <Link href="/">
            <a className="nav-link align-middle px-0">
              <i className="fs-4 bi-house"></i>{" "}
              <span className="ms-1 d-none d-sm-inline">Home</span>
            </a>
          </Link>
        </li>
        <li>
          <a
            href="#submenu1"
            data-bs-toggle="collapse"
            className="nav-link px-0 align-middle"
          >
            <i className="fs-4 bi-speedometer2"></i>{" "}
            <span className="ms-1 d-none d-sm-inline">Socios</span>{" "}
          </a>

          <ul
            className="collapse show nav flex-column ms-1"
            id="submenu1"
            data-bs-parent="#menu"
          >
            <li className="w-100">
              <Link href="/socio/nuevo">
                <a className="nav-link px-3">
                  <span className="d-none d-sm-inline"> Registrar Socio</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/socio/listado">
                <a className="nav-link px-3">
                  {" "}
                  <span className="d-none d-sm-inline">Listado</span>{" "}
                </a>
              </Link>
            </li>
          </ul>
        </li>

        <li>
          <a
            href="#submenu3"
            data-bs-toggle="collapse"
            className="nav-link px-0 align-middle"
          >
            <i className="fs-4 bi-grid"></i>{" "}
            <span className="ms-1 d-none d-sm-inline">Pagos</span>{" "}
          </a>
          <ul
            className="collapse nav flex-column ms-1"
            id="submenu3"
            data-bs-parent="#menu"
          >
            <li className="w-100">
              <Link href="/pagos/nuevo">
                <a className="nav-link px-3">
                  {" "}
                  <span className="d-none d-sm-inline">Registrar Pago</span>
                </a>
              </Link>
            </li>
          </ul>
        </li>
      </ul>
      <hr />

      {usuario ? (
        <div className="dropdown pb-4">
          <Link href="#">
            <a
              className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
              id="dropdownUser1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <Img
                src="https://github.com/mdo.png"
                alt="hugenerd"
                width="30"
                height="30"
                className="rounded-circle"
              />
              <span className="d-none d-sm-inline mx-1">
                {usuario.displayName}
              </span>
            </a>
          </Link>
          <ul
            className="dropdown-menu dropdown-menu-dark text-small shadow"
            aria-labelledby="dropdownUser1"
          >
            <li>
              <a className="dropdown-item" href="#">
                New project...
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Settings
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Profile
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a
                className="dropdown-item"
                onClick={async () => {
                  await firebase.logout();
                }}
              >
                Cerrar Sesion
              </a>
            </li>
          </ul>
        </div>
      ) : (
        <div>
          <Link href="/auth/login">
            <a className="btn btn-secondary mb-4">Iniciar Sesion</a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;
