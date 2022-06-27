import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LivrosView from "../views/LivrosView.vue";
import AutorView from "../views/AutorView.vue";
import EditoraView from "../views/EditoraView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/livros",
      name: "livros",
      component: LivrosView,
    },
    {
      path: "/editoras",
      name: "editoras",
      component: EditoraView,
    },
    {
      path: "/Autor",
      name: "Autor",
      component: AutorView,
    },
  ],
});

export default router;
