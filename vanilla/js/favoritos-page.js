/**
 * favoritos-page.js
 * Muestra las noticias guardadas por el usuario y permite quitarlas
 * de la lista de favoritos.
 */

function renderizarFavoritos() {
  const ids = obtenerFavoritos();
  const noticiasFavoritas = NOTICIAS.filter((n) => ids.includes(n.id));
  const contenedor = document.getElementById("favoritos-grid");
  const vacio = document.getElementById("favoritos-vacio");

  if (noticiasFavoritas.length === 0) {
    contenedor.innerHTML = "";
    vacio.hidden = false;
    return;
  }

  vacio.hidden = true;
  contenedor.innerHTML = noticiasFavoritas.map((noticia) => `
    <article class="tarjeta" data-categoria="${noticia.categoria}">
      <img class="tarjeta-imagen" src="${noticia.imagen}" alt="${noticia.titulo}" loading="lazy">
      <div class="tarjeta-cuerpo">
        <span class="etiqueta etiqueta-${noticia.categoria}">${NOMBRES_CATEGORIA[noticia.categoria]}</span>
        <h3 class="tarjeta-titulo">${noticia.titulo}</h3>
        <div class="tarjeta-acciones">
          <a class="tarjeta-enlace" href="detalle.html?id=${noticia.id}">Ver más</a>
          <button class="boton-quitar" data-id="${noticia.id}">Quitar</button>
        </div>
      </div>
    </article>
  `).join("");

  // Vincula el botón "Quitar" de cada tarjeta recién creada
  contenedor.querySelectorAll(".boton-quitar").forEach((boton) => {
    boton.addEventListener("click", () => {
      const id = parseInt(boton.dataset.id, 10);
      alternarFavorito(id);
      renderizarFavoritos();
    });
  });
}

document.addEventListener("DOMContentLoaded", renderizarFavoritos);
