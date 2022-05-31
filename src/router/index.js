import { createWebHistory, createRouter } from "vue-router";

import ContactsPage from "../components/ContactsPage.vue";
import ProjectsPage from "../components/ProjectsPage.vue";
import InfoPage from "../components/InfoPage.vue";
import HomePage from "../components/HomePage.vue";
import ProjectGalleryPage from "../components/ProjectGalleryPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/projects",
    name: "Projects",
    component: ProjectsPage,
  },
  {
    path: "/info",
    name: "Info",
    component: InfoPage,
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: ContactsPage,
  },
  {
    path: "/projectgallery",
    name: "ProjectGallery",
    component: ProjectGalleryPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
