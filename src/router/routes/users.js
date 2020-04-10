const parentRoute = '/users';

const routes = [
  {
    path: '/',
    name: 'users.list',
    meta: {
      role: 'admin',
      layout: 'admin',
    },
    component: () => import('@/views/Users/UsersList'),
  },
  {
    path: '/create',
    name: 'users.create',
    meta: {
      role: 'admin',
      layout: 'admin',
    },
    component: () => import('@/views/Users/UsersModify'),
  },
  {
    path: '/:id/edit',
    name: 'users.edit',
    meta: {
      role: 'admin',
      layout: 'admin',
    },
    component: () => import('@/views/Users/UsersModify'),
  },
];

export default routes.map(route => ({
  ...route,
  path: parentRoute + route.path,
}));
