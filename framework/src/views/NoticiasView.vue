<script lang="ts" setup>
import { useNoticiasStore } from "@/stores/noticiaStore";
import DetalleCard from "@/components/DetalleCard.vue";
import CategoryChip from "@/components/CategoryChip.vue";

const newsStore = useNoticiasStore();
</script>

<template>
  <main>
    <section class="seccion">
      <div class="contenedor">
        <div class="seccion-titulo">
          <h2>Catálogo de noticias</h2>
        </div>

        <div class="chips">
          <CategoryChip
            clave="todas"
            categoria="Todas"
            :activo="newsStore.categoriaSeleccionada === 'todas'"
            @seleccionar="newsStore.seleccionarCategoria"
          />
          <CategoryChip
            v-for="(nombre, clave) in newsStore.NOMBRES_CATEGORIA"
            :key="clave"
            :clave="clave"
            :categoria="nombre"
            :activo="newsStore.categoriaSeleccionada === clave"
            @seleccionar="newsStore.seleccionarCategoria"
          />
        </div>

        <div id="noticias-grid" class="grid-tarjetas">
          <DetalleCard
            v-for="noticia in newsStore.noticiasFiltradas"
            :key="noticia.id"
            :noticia="noticia"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<style>
.chips {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 28px;
}

.chip {
  background: var(--papel-alterno);
  border: 1px solid var(--linea);
  color: var(--tinta-suave);
  font-size: 13.5px;
  font-weight: 500;
  padding: 7px 16px;
  border-radius: 20px;
  cursor: pointer;
}

.chip-activo {
  background: var(--tinta);
  border-color: var(--tinta);
  color: #fff;
}
</style>
