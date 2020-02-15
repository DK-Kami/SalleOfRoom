import { getRoleDefaultRoute } from "@/helper/roles";
import webClient from '@/middleware/WebClient';

const lastRoute = {};

function isEmpty(object) {
  return !Object.keys(object).length;
};

export default function (store) {
  return (to, _, next) => {
    const isSigned = store.getters['auth/isSigned'];
    const role = store.getters['auth/getUserRole'];
    const token = store.getters['auth/getToken'];

    if (isEmpty(lastRoute) && token) {
      webClient.login(token);
    }

    const isPing = !!(to.path === '/ping' && lastRoute);
    const { name, path, matched } = isPing ? lastRoute : to;
    const meta = {};
    matched.forEach(match => Object.assign(meta, match.meta));
    const { role: neededRole } = meta;

    debugger;

    if ((isEmpty(lastRoute) && to.name === 'login') || to.name !== 'login') Object.assign(lastRoute, to);
    if (neededRole === 'none') return next((isPing && path) || true);
    if (!isSigned) {
      if (!neededRole && name) return next((isPing && path) || true);
      return next('/login');
    }
    if (neededRole === 'all'
      || role === neededRole
      || (Array.isArray(neededRole) && neededRole.includes(role))
    ) return next((isPing && path) || true);

    return next(getRoleDefaultRoute(role));
  };
};
