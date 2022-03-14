import { createRouter, createWebHistory } from "vue-router";

import Home from "./src/views/Home.vue";
import NotFound from "./src/components/NotFound.vue";

import CourseArchive from "./src/views/CourseArchive.vue";
import CourseDetail from "./src/views/CourseDetail.vue";
import Gallery from "./src/views/Gallery.vue";
import BlogArchive from "./src/views/BlogArchive.vue";
import BlogSingle from "./src/views/BlogSingle.vue";
import Contact from "./src/views/Contact.vue";

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
    path: "/courseArchive",
    component: CourseArchive,
  },
  {
    path: "/courseDetail",
    component: CourseDetail,
  },
  {
    path: "/gallery",
    component: Gallery,
  },
  {
    path: "/blogArchive",
    component: BlogArchive,
  },
  {
    path: "/blogSingle",
    component: BlogSingle,
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
