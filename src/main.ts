import { createHead } from '@unhead/vue';
import { createPinia } from 'pinia';
import { createApp } from 'vue';

import App from '@/App.vue';
import router from '@/router';
import '@/styles/style.scss';

const app = createApp(App);
const head = createHead();

app.use(head).use(createPinia()).use(router);

app.mount('#app');
