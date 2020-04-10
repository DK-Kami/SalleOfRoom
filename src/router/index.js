import Vue from 'vue';
import VueRouter from 'vue-router';
import initListners from './initListners';
import listners from './listners';

import counterpartiesRoutes from './routes/counterparties';
import realtiesRoutes from './routes/realties';
import realtorsRoutes from './routes/realtors';
import usersRoutes from './routes/users';
import saleRoutes from './routes/sale';

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login'),
  },

  ...counterpartiesRoutes,
  ...realtiesRoutes,
  ...realtorsRoutes,
  ...usersRoutes,
  ...saleRoutes,

  {
    path: '/favorite',
    name: 'favorite',
    component: () => import('@/views/FavoritePage'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutPage'),
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: () => import('@/views/ContactsPage'),
  },
  {
    path: '/job',
    name: 'job',
    component: () => import('@/views/JobPage'),
  },
  {
    path: '/reviews',
    name: 'reviews',
    component: () => import('@/views/ReviewsPage'),
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: () => import('@/views/PrivacyPage'),
  },
  {
    path: '/condition',
    name: 'condition',
    component: () => import('@/views/ConditionPage'),
  },

  {
    path: '/history',
    name: 'history.list',
    meta: {
      role: 'admin',
    },
    component: () => import('@/views/History'),
  },

  {
    path: '/ping',
    name: 'ping',
  },
  {
    path: '/',
    redirect: '/login',
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default initListners(router, listners);
