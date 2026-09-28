/**
 * render.js
 * Funciones reutilizables para construir el HTML de las tarjetas de noticias
 * y formatear datos comunes. Se usan desde home.js, noticias.js y favoritos-page.js.
 */

// Convierte "2026-08-14" en "14 ago 2026"
function formatearFecha(fechaTexto) {
  const meses = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];
  const [anio, mes, dia] = fechaTexto.split("-");
  return `${parseInt(dia, 10)} ${meses[parseInt(mes, 10) - 1]} ${anio}`;
}

// Nombre legible de cada categoría
const NOMBRES_CATEGORIA = {
  educativas: "Educativa",
  tecnologicas: "Tecnológica",
  turisticas: "Turística",
  comerciales: "Comercial"
};

// Construye el HTML de una tarjeta de noticia
function crearTarjetaHTML(noticia) {
  return `
    <article class="tarjeta" data-categoria="${noticia.categoria}">
      <img class="tarjeta-imagen" src="${noticia.imagen}" alt="${noticia.titulo}" loading="lazy">
      <div class="tarjeta-cuerpo">
        <span class="etiqueta etiqueta-${noticia.categoria}">${NOMBRES_CATEGORIA[noticia.categoria]}</span>
        <h3 class="tarjeta-titulo">${noticia.titulo}</h3>
        <p class="tarjeta-resumen">${noticia.resumen}</p>
        <a class="tarjeta-enlace" href="detalle.html?id=${noticia.id}">Ver más</a>
      </div>
    </article>
  `;
}

// Renderiza un arreglo de noticias dentro de un contenedor por su id
function renderizarGrid(idContenedor, noticias) {
  const contenedor = document.getElementById(idContenedor);
  if (!contenedor) return;

  if (noticias.length === 0) {
    contenedor.innerHTML = `<p class="mensaje-vacio">No hay noticias para mostrar.</p>`;
    return;
  }

  contenedor.innerHTML = noticias.map(crearTarjetaHTML).join("");
}
