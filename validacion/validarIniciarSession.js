export default function validarIniciarSession(valores) {
  let errores = {};

  if (!valores.mail) {
    errores.mail = "El correo electronico es obligatorio";
  }

  if (!valores.contrasena) {
    errores.contrasena = "El contraseña es obligatoria";
  }

  if (valores.contrasena.length < 6) {
    errores.contrasena = "La contraseña debe ser de al menos 6 caracteres";
  }

  return errores;
}
