const parentRoute = '/counterparties';

const routes = [
  {
    path: '/',
    name: 'counterparties.list',
    meta: {
      role: ['admin', 'realtor'],
    },
    component: () => import('@/views/Counterparties/CounterpartiesList'),
  },
  {
    path: '/create',
    name: 'counterparties.create',
    meta: {
      role: ['admin', 'realtor'],
    },
    component: () => import('@/views/Counterparties/CounterpartiesModify'),
  },
  {
    path: '/:id/edit',
    name: 'counterparties.edit',
    meta: {
      role: ['admin', 'realtor'],
    },
    component: () => import('@/views/Counterparties/CounterpartiesModify'),
  },
  {
    path: '/:id/view',
    name: 'counterparties.view',
    meta: {
      role: ['admin', 'realtor'],
    },
    component: () => import('@/views/Counterparties/CounterpartyView'),
  },
];

export default routes.map(route => ({
  ...route,
  path: parentRoute + route.path,
}));
