import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/projects/:tag?',
    alias: '/',
    name: 'projects',
    component: () => import('../views/ProjectList.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
