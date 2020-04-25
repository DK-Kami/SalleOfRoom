import Vue from 'vue';
import VueRouter from 'vue-router';
import initListners from './initListners';
import listners from './listners';

import counterpartiesRoutes from './routes/counterparties';
import realtiesRoutes from './routes/realties';
import realtorsRoutes from './routes/realtors';
import usersRoutes from './routes/users';
import saleRoutes from './routes/sale';
import rentRoutes from './routes/rent';

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'login',
    meta: {
      layout: 'empty',
    },
    component: () => import('@/views/Login'),
  },

  ...counterpartiesRoutes,
  ...realtiesRoutes,
  ...realtorsRoutes,
  ...usersRoutes,
  ...saleRoutes,
  ...rentRoutes,

  {
    path: '/',
    name: 'main',
    meta: {
      title: 'Продажа и аренда недвижимости с Маяком',
      header: 'main.png',
    },
    component: () => import('@/views/MainPage'),
  },
  {
    path: '/favorite',
    name: 'favorite',
    component: () => import('@/views/FavoritePage'),
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      header: 'about.png',
      title: 'Наш Маяк ориентир к Вашему процветанию в море недвижимости',
    },
    component: () => import('@/views/AboutPage'),
  },
  {
    path: '/services',
    name: 'services',
    meta: {
      header: 'services.png',
      title: 'Маяк предоставляет первоклассные услуги для Вашего удобства',
    },
    component: () => import('@/views/ServicesPage'),
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: () => import('@/views/ContactsPage'),
  },
  {
    path: '/job',
    name: 'job',
    meta: {
      header: 'job.png',
      title: 'Присоединяйся к нашей команде специалистов',
    },
    component: () => import('@/views/JobPage'),
  },
  {
    path: '/reviews',
    name: 'reviews',
    meta: {
      header: 'reviews.png',
      title: 'Отзывы',
    },
    component: () => import('@/views/ReviewsPage'),
  },
  {
    path: '/privacy',
    name: 'privacy',
    meta: {
      header: 'condition.png',
      title: 'Кофиденциальность',
    },
    component: () => import('@/views/PrivacyPage'),
  },
  {
    path: '/condition',
    name: 'condition',
    meta: {
      header: 'condition.png',
      title: 'Условия',
    },
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
    path: '/*',
    redirect: '/login',
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default initListners(router, listners);
