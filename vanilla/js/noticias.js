/**
 * noticias.js
 * Renderiza el catálogo completo de noticias y gestiona el filtro por categoría.
 */

document.addEventListener("DOMContentLoaded", () => {
  const chips = document.querySelectorAll(".chip");

  // Render inicial: todas las noticias
  renderizarGrid("noticias-grid", NOTICIAS);

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      // Marca visualmente el chip activo
      chips.forEach((c) => c.classList.remove("chip-activo"));
      chip.classList.add("chip-activo");

      const categoria = chip.dataset.categoria;
      const filtradas = categoria === "todas"
        ? NOTICIAS
        : NOTICIAS.filter((n) => n.categoria === categoria);

      renderizarGrid("noticias-grid", filtradas);
    });
  });
});
