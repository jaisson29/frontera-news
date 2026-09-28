/**
 * contacto.js
 * Valida el formulario de contacto (campos obligatorios y formato de correo)
 * y muestra un mensaje de confirmación al enviarlo correctamente.
 */

document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("form-contacto");
  const confirmacion = document.getElementById("mensaje-confirmacion");
  const REGEX_CORREO = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    let esValido = true;

    const campos = [
      { id: "nombre", mensaje: "Ingresa tu nombre." },
      { id: "correo", mensaje: "Ingresa un correo válido." },
      { id: "asunto", mensaje: "Ingresa un asunto." },
      { id: "mensaje", mensaje: "Escribe tu mensaje." }
    ];

    campos.forEach(({ id, mensaje }) => {
      const campo = document.getElementById(id);
      const error = document.getElementById(`error-${id}`);
      const valor = campo.value.trim();
      let campoValido = valor.length > 0;

      if (id === "correo" && campoValido) {
        campoValido = REGEX_CORREO.test(valor);
      }

      campo.classList.toggle("campo-invalido", !campoValido);
      error.textContent = campoValido ? "" : mensaje;
      if (!campoValido) esValido = false;
    });

    if (esValido) {
      confirmacion.hidden = false;
      formulario.reset();
      setTimeout(() => confirmacion.hidden = true, 6000);
    } else {
      confirmacion.hidden = true;
    }
  });
});
