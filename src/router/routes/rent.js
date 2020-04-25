const parentRoute = '/rent';

const routes = [
  {
    path: '/list',
    name: 'rent.list',
    component: () => import('@/views/SalePage/AllSale'),
  },
  {
    path: '/:id',
    name: 'rent.view',
    component: () => import('@/views/SalePage/SaleView'),
  },
];

export default routes.map(route => ({
  ...route,
  path: parentRoute + route.path,
}));
