import { createRouter, createWebHistory } from "vue-router";
import InicioView from "@/views/InicioView.vue";
import NoticiasView from "@/views/NoticiasView.vue";
import FavoritosView from "@/views/FavoritosView.vue";
import ContactoView from "@/views/ContactoView.vue";
import DetalleView from "@/views/DetalleView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: InicioView,
    },
    {
      path: "/noticias",
      name: "noticias",
      component: NoticiasView,
    },
    {
      path: "/favoritos",
      name: "favoritos",
      component: FavoritosView,
    },
    {
      path: "/contacto",
      name: "contacto",
      component: ContactoView,
    },
    {
      path: "/detalle/:id",
      name: "detalle",
      component: DetalleView,
    },
  ],
});

export default router;
