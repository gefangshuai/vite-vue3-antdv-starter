import { createRouter, createWebHistory } from 'vue-router';
import example from "@/pages/example";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/Home.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/pages/Login.vue')
  }
].concat(example);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
