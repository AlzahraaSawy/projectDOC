import { createRouter, createWebHistory } from 'vue-router';
import index from "../views/index";
import create from "../views/create";
import Edit from "../views/Edit.vue";
const routes = [
  {
    name:"index",
    path:"/",
    component: index,
  },
  {
    name:"create",
    path:"/create",
    component: create,
  },
  {
    name: "Edit",
    path: "/edit/:id",
    component: Edit,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router
