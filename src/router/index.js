import { createRouter, createWebHistory } from "vue-router";
import ViewHome from "../views/ViewHome.vue";
import ViewCategory from "../views/ViewCategory.vue";
import ViewSingle from "../views/ViewSingle.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: ViewHome,
  },
  {
    path: "/category",
    name: "category",
    component: ViewCategory,
  },
  {
    path: "/single",
    name: "single",
    component: ViewSingle,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
