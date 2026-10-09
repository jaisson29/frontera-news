<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
</script>

<template>
  <HeaderComponent />

  <RouterView />

  <FooterComponent />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:wght@600;700&family=Inter:wght@400;500;600&display=swap');

:root {
  --primary: #5493ce;
  --papel: #faf8f4;
  --papel-alterno: #f1eee7;
  --tinta: #20242b;
  --tinta-suave: #565c66;
  --linea: #dedad1;
  --mostaza: #c08a2e;
  --mostaza-oscuro: #96691e;
  --verde: #3e6e6a;
  --error: #a6402f;

  --fuente-titulo: 'Source Serif 4', Georgia, serif;
  --fuente-texto: 'Inter', system-ui, sans-serif;
}

* {
  box-sizing: border-box;
}

#app {
  margin: 0;
  padding: 0;
  font-family: var(--fuente-texto);
  color: var(--tinta);
  background: var(--papel);
  line-height: 1.55;
  min-height: 100dvh;
  display: grid;
  grid-template-rows: auto 1fr auto;
}

img {
  max-width: 100%;
  display: block;
}

a {
  color: var(--verde);
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}

h1,
h2,
h3 {
  font-family: var(--fuente-titulo);
  font-weight: 700;
  line-height: 1.2;
  margin: 0 0 0.5em;
}

.contenedor {
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 24px;
}

/* ---------- Secciones ---------- */
.seccion {
  padding: 48px 0;
}

.seccion-titulo {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 24px;
}

.seccion-titulo h2 {
  font-size: 26px;
  margin: 0;
}

.seccion-titulo-formulario {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
}

.seccion-titulo-formulario h2 {
  font-size: 26px;
  margin: 0;
}

.boton {
  display: inline-block;
  background: var(--primary);
  color: #fff;
  font-weight: 600;
  font-size: 15px;
  padding: 12px 22px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.boton:hover {
  background: var(--mostaza-oscuro);
  text-decoration: none;
}

/* ---------- Responsivo ---------- */
@media (max-width: 860px) {
  .hero-grid {
    grid-template-columns: 1fr;
  }
  .grid-tarjetas {
    grid-template-columns: repeat(2, 1fr);
  }
  .nav {
    gap: 16px;
  }
}

@media (max-width: 560px) {
  .grid-tarjetas {
    grid-template-columns: 1fr;
  }
  .encabezado .contenedor {
    flex-direction: column;
    gap: 10px;
    padding-bottom: 14px;
  }
  .nav {
    flex-wrap: wrap;
    justify-content: center;
  }
  .hero h1 {
    font-size: 32px;
  }
}
</style>
