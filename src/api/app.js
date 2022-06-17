import Http from '@/core/http';

const app = {
  fetchAppInfo() {
    return Http.get('/api/apps/vite-vue3-antdv-starter');
  },
};

export { app };
