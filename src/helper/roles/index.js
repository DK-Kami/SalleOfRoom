import { ROLES, defaultRole } from "./roles";

export const getRoles = () => ROLES;

export const getCurrentRoleBy = (key, value) => {
  if (!Object.keys(ROLES[0]).includes(key)) return;

  const role = ROLES.find(r => r[key] === value);
  return role || defaultRole();
};
export const getCurrentRoleByValue = value => getCurrentRoleBy('value', value);
export const getCurrentRoleByRoute = value => getCurrentRoleBy('route', value);
export const getCurrentRoleByName = value => getCurrentRoleBy('name', value);

export const getRoleDefaultRoute = role => getCurrentRoleByValue(role).route || role;
