const parentRoute = '/realtors';

const routes = [
  {
    path: '/',
    name: 'realtors.list',
    meta: {
      role: 'admin',
      layout: 'admin',
    },
    component: () => import('@/views/Realtors/RealtorsList'),
  },
  {
    path: '/:id/view',
    name: 'realtors.view',
    meta: {
      role: ['admin', 'realtor'],
      layout: 'admin',
    },
    component: () => import('@/views/Realtors/RealtorsView'),
  },
];

export default routes.map(route => ({
  ...route,
  path: parentRoute + route.path,
}));
