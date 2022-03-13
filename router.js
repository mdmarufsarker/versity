import { createRouter, createWebHistory } from "vue-router";

import Home from "./src/views/Home.vue";
import About from "./src/views/About.vue";
import Projects from "./src/views/Projects.vue";
import Achievements from "./src/views/Achievements.vue";
import Contact from "./src/views/Contact.vue";
import NotFound from "./src/components/NotFound.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/projects",
    component: Projects,
  },
  {
    path: "/achievements",
    component: Achievements,
  },
  {
    path: "/contact",
    component: Contact,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
