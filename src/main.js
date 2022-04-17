import { createApp } from 'vue';
import '@/assets/less/main.less';
import App from './App.vue';
import router from '@/router';
import store from '@/store';
import filter from '@/core/filters';

createApp(App)
    .use(store)
    .use(router).use(filter).mount('#app');
