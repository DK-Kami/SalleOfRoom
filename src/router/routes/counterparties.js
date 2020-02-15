const parentRoute = '/counterparties';

const routes = [
  {
    path: '/',
    name: 'counterparties.list',
    meta: {
      role: 'admin',
    },
    component: () => import('@/views/Counterparties/CounterpartiesList'),
  },
  {
    path: '/create',
    name: 'counterparties.create',
    meta: {
      role: 'admin',
    },
    component: () => import('@/views/Counterparties/CounterpartiesModify'),
  },
  {
    path: '/:id/edit',
    name: 'counterparties.edit',
    meta: {
      role: 'admin',
    },
    component: () => import('@/views/Counterparties/CounterpartiesModify'),
  },
];

export default routes.map(route => ({
  ...route,
  path: parentRoute + route.path,
}));
