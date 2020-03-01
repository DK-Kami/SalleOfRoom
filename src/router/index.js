import Vue from 'vue';
import VueRouter from 'vue-router';
import initListners from './initListners';
import listners from './listners';

import counterpartiesRoutes from './routes/counterparties';
import realtiesRoutes from './routes/realties';
import realtorsRoutes from './routes/realtors';
import usersRoutes from './routes/users';

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login'),
  },
  {
    path: '/history',
    name: 'history.list',
    meta: {
      role: 'admin',
    },
    component: () => import('@/views/History'),
  },

  ...counterpartiesRoutes,
  ...realtiesRoutes,
  ...realtorsRoutes,
  ...usersRoutes,

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
