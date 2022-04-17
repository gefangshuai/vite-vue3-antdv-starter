import { createRouter, createWebHistory } from 'vue-router';
import { pages } from '@/pages/example';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/Home.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/pages/Login.vue'),
  },
].concat(pages);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
