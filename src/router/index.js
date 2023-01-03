import { createRouter, createWebHistory } from "vue-router";
import MainPage from "../views/MainPage.vue";
import AboutPage from "@/views/AboutPage";
import ContactPage from "@/views/ContactPage";
import ResumePage from "@/views/ResumePage";

const routes = [
  {
    path: "/",
    name: "MainPage",
    component: MainPage,
  },
  {
    path: "/about",
    name: "AboutPage",
    component: AboutPage,
  },
  {
    path: "/resume",
    name: "ResumePage",
    component: ResumePage,
  },
  {
    path: "/contact",
    name: "ContactPage",
    component: ContactPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
