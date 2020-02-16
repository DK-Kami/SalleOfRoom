const parentRoute = '/realties';

const routes = [
  {
    path: '/',
    name: 'realties.list',
    meta: {
      role: 'admin',
    },
    component: () => import('@/views/Realties/RealtiesList'),
  },
  {
    path: '/create',
    name: 'realties.create',
    meta: {
      role: 'admin',
    },
    component: () => import('@/views/Realties/RealtiesModify'),
  },
  {
    path: '/:id/edit',
    name: 'realties.edit',
    meta: {
      role: 'admin',
    },
    component: () => import('@/views/Realties/RealtiesModify'),
  },
];

export default routes.map(route => ({
  ...route,
  path: parentRoute + route.path,
}));
