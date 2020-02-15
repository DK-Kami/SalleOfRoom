export default [
  {
    path: '/',
    name: 'user.lists',
    component: () => import('@/views/Users/UsersList'),
  },
  {
    path: '/create',
    name: 'user.create',
    component: () => import('@/views/Users/UsersModify'),
  },
  {
    path: '/:id/edit',
    name: 'user.edit',
    component: () => import('@/views/Users/UsersModify'),
  },
];
