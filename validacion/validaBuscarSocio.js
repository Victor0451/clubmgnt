export default function validarBuscarSocio(valores) {
  let errores = {};

  if (!valores.nsocio) {
    errores.nsocio = "El numero de socio es obligatorio";
  }

  if (!valores.dni) {
    errores.dni = "El dni es obligatorio";
  }

  return errores;
}
