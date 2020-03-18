const parentRoute = '/realtors';

const routes = [
  {
    path: '/',
    name: 'realtors.list',
    meta: {
      role: 'admin',
    },
    component: () => import('@/views/Realtors/RealtorsList'),
  },
  {
    path: '/:id/view',
    name: 'realtors.view',
    meta: {
      role: ['admin', 'realtor'],
    },
    component: () => import('@/views/Realtors/RealtorsView'),
  },
];

export default routes.map(route => ({
  ...route,
  path: parentRoute + route.path,
}));
