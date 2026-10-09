<script lang="ts" setup>
import { useNoticiasStore } from "@/stores/noticiaStore";
import FavoritoItem from "@/components/FavoritoItem.vue";

const newsStore = useNoticiasStore();
</script>

<template>
  <main>
    <section class="seccion">
      <div class="contenedor">
        <div class="seccion-titulo">
          <h2>Tus noticias guardadas</h2>
        </div>

        <p
          v-if="newsStore.favoritos.length === 0"
          id="favoritos-vacio"
          class="mensaje-vacio"
          hidden
        >
          Aún no tienes noticias guardadas. Explora el <a href="noticias.html">catálogo</a> y agrega
          las que más te interesen.
        </p>

        <div v-else id="favoritos-grid" class="grid-tarjetas">
          <FavoritoItem
            v-for="noticia in newsStore.noticias.filter((n) => newsStore.favoritos.includes(n.id))"
            :key="noticia.id"
            :noticia="noticia"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<style>
.mensaje-vacio {
  color: var(--tinta-suave);
  font-style: italic;
}

.grid-tarjetas {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
</style>
