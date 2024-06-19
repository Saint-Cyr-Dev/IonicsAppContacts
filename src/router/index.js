import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from '../views/HomePage.vue';
import CreatePage from '../views/CreatePage.vue';
import DetailPage from '../views/DetailPage.vue';

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/create',
    name: 'Create',
    component: CreatePage
  },
  {
    path: '/:id',
    name: 'Detail',
    component: DetailPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
