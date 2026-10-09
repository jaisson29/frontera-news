<script lang="ts" setup>
import { useNoticiasStore } from "@/stores/noticiaStore";
import type { Noticia } from "@/stores/noticiaStore";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const newsStore = useNoticiasStore();

const noticia = ref<Noticia | null>(null);

onMounted(() => {
  const id = Number.parseInt(route.params.id as string);
  noticia.value = newsStore.buscarPorId(id) ?? null;
});
console.log(newsStore.favoritos);
</script>

<template>
  <main>
    <article v-if="noticia" id="detalle-contenedor" class="detalle">
      <img id="detalle-imagen" class="detalle-imagen" :src="noticia.imagen" :alt="noticia.titulo" />
      <p class="detalle-meta">
        <span id="detalle-categoria">{{ newsStore.NOMBRES_CATEGORIA[noticia.categoria] }}</span> ·
        <span id="detalle-fecha">{{ noticia.fecha }}</span>
      </p>
      <h1 id="detalle-titulo">{{ noticia.titulo }}</h1>
      <p id="detalle-contenido" class="detalle-contenido">{{ noticia.contenido }}</p>

      <div class="acciones-detalle">
        <button id="boton-favorito" class="boton-secundario" @click="newsStore.toggleFavorito(noticia.id)">
          <span v-if="newsStore.esFavorito(noticia.id)">Quitar de favoritos</span>
          <span v-else>Agregar a favoritos</span>
        </button>
        <a class="boton-secundario" href="contacto.html">Contactar</a>
      </div>
    </article>

    <div v-else id="detalle-no-encontrada" class="detalle">
      <h1>Noticia no encontrada</h1>
      <p>
        La noticia que buscas no existe o fue eliminada.
        <a href="noticias.html">Volver al catálogo</a>.
      </p>
    </div>
  </main>
</template>

<style scoped>
.detalle {
  max-width: 700px;
  margin: 0 auto;
  padding: 48px 24px 64px;
}

.detalle-imagen {
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 24px;
}

.detalle-meta {
  color: var(--tinta-suave);
  font-size: 14px;
  margin-bottom: 4px;
}

.detalle h1 {
  font-size: 30px;
  margin-bottom: 20px;
}

.detalle-contenido {
  font-size: 16.5px;
  color: #383d45;
}

.acciones-detalle {
  display: flex;
  gap: 12px;
  margin-top: 32px;
}

.boton-secundario {
  background: none;
  border: 1px solid var(--tinta);
  color: var(--tinta);
  font-weight: 600;
  font-size: 15px;
  padding: 11px 20px;
  border-radius: 4px;
  cursor: pointer;
}

.boton-secundario:hover {
  background: var(--tinta);
  color: #fff;
}

.boton-favorito-activo {
  background: var(--verde);
  border-color: var(--verde);
  color: #fff;
}
</style>
