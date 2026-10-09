/**
 * detalle.js
 * Lee el id de la noticia desde la URL (?id=) y renderiza su información completa.
 * También gestiona el botón de agregar/quitar de favoritos.
 */

document.addEventListener("DOMContentLoaded", () => {
  const parametros = new URLSearchParams(window.location.search);
  const id = parseInt(parametros.get("id"), 10);
  const noticia = NOTICIAS.find((n) => n.id === id);

  const contenedor = document.getElementById("detalle-contenedor");
  const noEncontrada = document.getElementById("detalle-no-encontrada");

  if (!noticia) {
    contenedor.hidden = true;
    noEncontrada.hidden = false;
    return;
  }

  document.getElementById("detalle-imagen").src = noticia.imagen;
  document.getElementById("detalle-imagen").alt = noticia.titulo;
  document.getElementById("detalle-categoria").textContent = NOMBRES_CATEGORIA[noticia.categoria];
  document.getElementById("detalle-titulo").textContent = noticia.titulo;
  document.getElementById("detalle-fecha").textContent = formatearFecha(noticia.fecha);
  document.getElementById("detalle-contenido").textContent = noticia.contenido;

  const botonFavorito = document.getElementById("boton-favorito");

  function actualizarBotonFavorito() {
    const marcada = esFavorito(noticia.id);
    botonFavorito.textContent = marcada ? "Quitar de favoritos" : "Agregar a favoritos";
    botonFavorito.classList.toggle("boton-favorito-activo", marcada);
  }

  actualizarBotonFavorito();

  botonFavorito.addEventListener("click", () => {
    alternarFavorito(noticia.id);
    actualizarBotonFavorito();
  });
});
