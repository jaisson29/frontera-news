<template>
  <footer class="pie">
    <div class="contenedor">
      <span>© 2026 NewsHub — Proyecto académico de Desarrollo Front-end</span>
      <a href="contacto.html">Contáctanos</a>
    </div>
  </footer>
</template>

<style>
.pie {
  border-top: 1px solid var(--linea);
  padding: 32px 0;
  margin-top: 40px;
  background: var(--primary);
}

.pie .contenedor {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  color: var(--papel);
  font-size: 14px;
}

.pie .contenedor a {
  color: var(--papel);
  text-decoration: underline;
  font-weight: 500;
}
</style>
