/**
 * favoritos.js
 * Utilidades para gestionar la lista de noticias favoritas del usuario
 * usando localStorage. Se guarda únicamente un arreglo de ids.
 */

const CLAVE_FAVORITOS = "favoritos";

// Devuelve el arreglo de ids guardados como favoritos
function obtenerFavoritos() {
  const datos = localStorage.getItem(CLAVE_FAVORITOS);
  return datos ? JSON.parse(datos) : [];
}

// Indica si una noticia (por id) ya está marcada como favorita
function esFavorito(id) {
  return obtenerFavoritos().includes(id);
}

// Agrega o quita una noticia de favoritos según su estado actual
// Devuelve el nuevo estado (true = quedó como favorito, false = se quitó)
function alternarFavorito(id) {
  let favoritos = obtenerFavoritos();
  if (favoritos.includes(id)) {
    favoritos = favoritos.filter((idGuardado) => idGuardado !== id);
  } else {
    favoritos.push(id);
  }
  localStorage.setItem(CLAVE_FAVORITOS, JSON.stringify(favoritos));
  return esFavorito(id);
}
