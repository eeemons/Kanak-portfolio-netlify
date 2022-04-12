import { createWebHistory, createRouter } from "vue-router";

import ContactsPage from "../components/ContactsPage.vue";
import ProjectsPage from "../components/ProjectsPage.vue";
import InfoPage from "../components/InfoPage.vue";
import HomePage from "../components/HomePage.vue";

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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
