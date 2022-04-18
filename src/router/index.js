import { createRouter, createWebHistory } from 'vue-router';
import { pages } from '@/pages/example';
import Store from '@/store/index.js';

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      // authenticated: true,
    },
    component: () => import('@/pages/Home.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/pages/Login.vue'),
  },
].concat(pages);

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE || ''),
  routes,
});

router.beforeEach((to, from, next) => {
  console.log('to', to);
  console.log('from', from);
  if (!!to.meta.authenticated) {
    const currentUser = Store.getters['user/userGet'];
    if (!currentUser) {
      console.warn('用户未登录！');
      next({ name: 'Login' });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
