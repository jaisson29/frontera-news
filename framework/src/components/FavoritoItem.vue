<script lang="ts" setup>
import { useNoticiasStore } from "@/stores/noticiaStore";
import type { Noticia } from "@/stores/noticiaStore";

defineProps<{ noticia: Noticia }>();

const newsStore = useNoticiasStore();
</script>

<template>
  <article class="tarjeta" :data-categoria="noticia.categoria">
    <img class="tarjeta-imagen" :src="noticia.imagen" :alt="noticia.titulo" loading="lazy" />
    <div class="tarjeta-cuerpo">
      <span class="etiqueta etiqueta-${noticia.categoria}">{{
        newsStore.NOMBRES_CATEGORIA[noticia.categoria]
      }}</span>
      <h3 class="tarjeta-titulo">{{ noticia.titulo }}</h3>
      <div class="tarjeta-acciones">
        <RouterLink class="tarjeta-enlace" :to="`/detalle/${noticia.id}`">Ver más</RouterLink>
        <button class="boton-quitar" :data-id="noticia.id" @click="() => newsStore.toggleFavorito(noticia.id)">
          Quitar
        </button>
      </div>
    </div>
  </article>
</template>

<style>
.tarjeta {
  border-top: 3px solid var(--linea);
  padding-top: 16px;
  display: flex;
  flex-direction: column;
}

.tarjeta[data-categoria="educativas"] {
  border-top-color: var(--verde);
}
.tarjeta[data-categoria="tecnologicas"] {
  border-top-color: var(--mostaza);
}
.tarjeta[data-categoria="turisticas"] {
  border-top-color: #7c6a9c;
}
.tarjeta[data-categoria="comerciales"] {
  border-top-color: #a6402f;
}

.tarjeta-imagen {
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 12px;
}

.etiqueta {
  font-size: 12px;
  font-weight: 600;
  color: var(--tinta-suave);
  margin-bottom: 6px;
  display: inline-block;
}

.tarjeta-titulo {
  font-size: 19px;
  margin-bottom: 8px;
}

.tarjeta-resumen {
  color: var(--tinta-suave);
  font-size: 14.5px;
  margin: 0 0 12px;
  flex-grow: 1;
}

.tarjeta-enlace {
  font-weight: 600;
  font-size: 14px;
}

.tarjeta-acciones {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 4px;
}

.boton-quitar {
  background: none;
  border: 1px solid var(--linea);
  color: var(--tinta-suave);
  font-size: 13px;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
}

.boton-quitar:hover {
  border-color: var(--error);
  color: var(--error);
}

.mensaje-vacio {
  color: var(--tinta-suave);
  font-style: italic;
}
</style>
