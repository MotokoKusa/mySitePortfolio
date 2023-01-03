import { createRouter, createWebHistory } from "vue-router";
import MainPage from "../views/MainPage.vue";

const routes = [
  {
    path: "/",
    name: "MainPage",
    component: MainPage,
  },
  {
    path: "/about",
    name: "AboutPage",
  },
  {
    path: "/resume",
    name: "ResumePage",
  },
  {
    path: "/contact",
    name: "ContactPage",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
