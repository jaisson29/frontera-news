/**
 * home.js
 * Renderiza las noticias destacadas en la página de inicio.
 */

document.addEventListener("DOMContentLoaded", () => {
  const destacadas = NOTICIAS.slice(0, 3);
  renderizarGrid("destacadas-grid", destacadas);
});
