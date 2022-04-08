import { createRouter, createWebHistory } from 'vue-router';
import { defineAsyncComponent } from 'vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
