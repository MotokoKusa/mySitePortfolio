import { createRouter, createWebHistory } from "vue-router";
import MainPage from "@/views/MainPage";
import AboutPage from "@/views/AboutPage";
import ContactPage from "@/views/ContactPage";
import ResumePage from "@/views/ResumePage";

const routes = [
  {
    path: "/",
    name: "main",
    component: MainPage,
    meta: {
      enterClass: "animate__animated animate__fadeInLeft",
      leaveClass: "animate__animated animate__fadeOutRight",
    },
  },
  {
    path: "/about",
    name: "about",
    component: AboutPage,
  },
  {
    path: "/experience",
    name: "experience",
    component: ResumePage,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
