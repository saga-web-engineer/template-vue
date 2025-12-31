import Material from '@primeuix/themes/material';
import { createHead } from '@unhead/vue/client';
import { createPinia } from 'pinia';
import 'primeicons/primeicons.css';
import PrimeVue from 'primevue/config';
import { createApp } from 'vue';

import App from '@/App.vue';
import router from '@/router';
import '@/styles/index.css';

const app = createApp(App);
const head = createHead();

app
  .use(head)
  .use(createPinia())
  .use(router)
  .use(PrimeVue, {
    theme: {
      preset: Material,
      ripple: true,
      options: {
        darkModeSelector: '.my-app-dark',
      },
    },
  });

app.mount('#app');
