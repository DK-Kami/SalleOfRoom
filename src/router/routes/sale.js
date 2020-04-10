const parentRoute = '/sale';

const routes = [
  {
    path: '/list',
    name: 'sale.list',
    component: () => import('@/views/SalePage/AllSale'),
  },
  {
    path: '/:id',
    name: 'sale.view',
    component: () => import('@/views/SalePage/SaleView'),
  },
];

export default routes.map(route => ({
  ...route,
  path: parentRoute + route.path,
}));
