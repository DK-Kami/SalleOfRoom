/**
 * Роли приложения
 */
export const ROLES = [
  { name: 'Администратор',  value: 'admin',     route: '/users'     },
  { name: 'Риелтор',        value: 'realtor',   route: '/realties'  },
];

/**
 * Заглушка роли
 */
export const defaultRole = () => ({
  value: '',
  route: '',
  name: '',
})
