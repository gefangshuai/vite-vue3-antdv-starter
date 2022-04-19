import { createApp } from 'vue';
import 'ant-design-vue/es/message/style/css';
import '@/assets/less/main.less';
import '@/core/dayjs';
import App from './App.vue';
import router from '@/router';
import store from '@/store';
import filter from '@/core/filters';
import directive from '@/core/directive.js';

createApp(App).use(store).use(directive).use(router).use(filter).mount('#app');
