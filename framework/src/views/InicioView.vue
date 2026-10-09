<script lang="ts" setup>
import DetalleCard from "@/components/DetalleCard.vue";
import { useNoticiasStore } from "@/stores/noticiaStore";
const newsStore = useNoticiasStore();
</script>

<template>
  <main>
    <section class="hero">
      <div class="contenedor hero-grid">
        <div>
          <h1>Noticias que importan, contadas con claridad</h1>
          <p>
            Un espacio para explorar historias educativas, tecnológicas, turísticas y comerciales,
            con la información completa a un clic de distancia.
          </p>
          <a class="boton" href="noticias.html">Explorar noticias</a>
        </div>
        <div class="hero-imagen">
          <img src="https://picsum.photos/seed/hero1/700/520" alt="Portada de la edición del día" />
        </div>
      </div>
    </section>

    <section class="seccion">
      <div class="contenedor">
        <div class="seccion-titulo">
          <h2>Noticias destacadas</h2>
          <RouterLink to="/noticias">Ver todas</RouterLink>
        </div>
        <div v-if="newsStore.destacadas.length > 0" id="destacadas-grid" class="grid-tarjetas">
          <DetalleCard
            v-for="noticia in newsStore.destacadas"
            :key="noticia.id"
            :noticia="noticia"
          />
        </div>
        <p v-else class="mensaje-vacio">No hay noticias para mostrar.</p>
      </div>
    </section>
  </main>
</template>

<style scoped>
.hero {
  padding: 64px 0 48px;
  border-bottom: 1px solid var(--linea);
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 48px;
  align-items: center;
}

.hero h1 {
  font-size: 42px;
  max-width: 11ch;
}

.hero p {
  color: var(--tinta-suave);
  font-size: 17px;
  max-width: 46ch;
  margin-bottom: 28px;
}

.hero-imagen {
  border-radius: 4px;
  overflow: hidden;
  aspect-ratio: 4 / 3;
}

.hero-imagen img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.grid-tarjetas {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
</style>
