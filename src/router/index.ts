import type { RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router';

import AboutView from '@/views/about/AboutView.vue';
import TopView from '@/views/top/TopView.vue';

const routeSetting: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'top',
    component: TopView,
  },
  {
    path: '/about',
    name: 'about',
    component: () => AboutView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routeSetting,
});

export default router;
