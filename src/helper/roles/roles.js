/**
 * Роли приложения
 */
export const ROLES = [
  { name: 'Администратор',  value: 'admin',     route: '/users' },
  { name: 'Риелтор',        value: 'rieltor',   route: '/users' },
];

/**
 * Заглушка роли
 */
export const defaultRole = () => ({
  value: '',
  route: '',
  name: '',
})
