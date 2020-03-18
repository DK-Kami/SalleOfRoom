const parentRoute = '/realties';

const routes = [
  {
    path: '/',
    name: 'realties.list',
    meta: {
      role: ['admin', 'realtor'],
    },
    component: () => import('@/views/Realties/RealtiesList'),
  },
  {
    path: '/create',
    name: 'realties.create',
    meta: {
      role: ['admin', 'realtor'],
    },
    component: () => import('@/views/Realties/RealtiesModify'),
  },
  {
    path: '/:id/edit',
    name: 'realties.edit',
    meta: {
      role: ['admin', 'realtor'],
    },
    component: () => import('@/views/Realties/RealtiesModify'),
  },
  {
    path: '/:id/view',
    name: 'realties.view',
    meta: {
      role: ['admin', 'realtor'],
    },
    component: () => import('@/views/Realties/RealtiesView'),
  },
];

export default routes.map(route => ({
  ...route,
  path: parentRoute + route.path,
}));
