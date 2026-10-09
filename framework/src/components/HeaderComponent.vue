<template>
  <header class="encabezado">
    <div class="contenedor">
      <div class="logo">
        <img src="@/assets/logo_white.svg" alt="Logo de Frontera news" />FRONTERA<span>NEWS</span>
      </div>
      <nav class="nav">
        <RouterLink to="/">Inicio</RouterLink>
        <RouterLink to="/noticias">Noticias</RouterLink>
        <RouterLink to="/favoritos">Favoritos</RouterLink>
        <RouterLink to="/contacto">Contacto</RouterLink>
      </nav>
    </div>
  </header>
</template>

<style>
.encabezado {
  border-bottom: 1px solid var(--linea);
  background: var(--primary);
  position: sticky;
  top: 0;
  z-index: 10;
}

.encabezado .contenedor {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 18px;
  padding-bottom: 18px;
}

.logo {
  display: flex;
  align-items: center;
  font-family: var(--fuente-titulo);
  font-size: 22px;
  font-weight: 700;
  color: var(--papel);
}

.logo img {
  width: 52px;
  height: 52px;
  margin-right: 8px;
}

.logo span {
  color: var(--papel);
  margin-left: 8px;
}

.nav {
  display: flex;
  gap: 28px;
}

.nav a {
  color: var(--tinta);
  font-size: 15px;
  font-weight: 500;
}

.nav a.router-link-exact-active {
  color: var(--papel);
  text-decoration: none;
  border-bottom: 2px solid var(--mostaza);
  padding-bottom: 4px;
}

.nav a.router-link-exact-active:hover {
  color: var(--papel);
  text-decoration: none;
  border-bottom: 2px solid var(--mostaza);
  padding-bottom: 4px;
}
</style>
