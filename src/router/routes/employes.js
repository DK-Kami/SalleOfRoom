const parentRoute = '/employes';

const routes = [
  {
    path: '/',
    name: 'employes.list',
    meta: {
      role: ['admin', 'realtor'],
      layout: 'admin',
    },
    component: () => import('@/views/Employes/EmployesList'),
  },
  {
    path: '/create',
    name: 'employes.create',
    meta: {
      role: ['admin', 'realtor'],
      layout: 'admin',
    },
    component: () => import('@/views/Employes/EmployesModify'),
  },
  {
    path: '/:id/edit',
    name: 'employes.edit',
    meta: {
      role: ['admin', 'realtor'],
      layout: 'admin',
    },
    component: () => import('@/views/Employes/EmployesModify'),
  },
];

export default routes.map(route => ({
  ...route,
  path: parentRoute + route.path,
}));
