import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/projects',
    alias: '/',
    name: 'projects',
    component: () => import('../views/ProjectList.vue'),
    children: [
      {
        path: '/projects/tags/:tag?',
        name: 'projectsFiltered',
        component: () => import('../views/ProjectList.vue'),
      },
      {
        path: '/projects/categories/:cat?',
        name: 'projectCategories',
        component: () => import('../views/ProjectList.vue'),
      }
    ]
  },
  {
    path: '/map/:tag?',
    alias: '/',
    name: 'map',
    component: () => import('../views/MapView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
