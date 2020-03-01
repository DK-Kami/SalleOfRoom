export default {
  async auth(login, password) {
    const requestBody = [
      'grant_type=password',
      `password=${password}`,
      `username=${login}`,
    ].join('&');

    const user = (await this.apiClient.post('auth', requestBody)).data;
    
    if (!user.error) {
      this.apiClient.login(user.access_token);
    }
    return user;
  },
  logout() {
    return this.apiClient.post('account/logout');
  },
  loadUserInfo() {
    return this.apiClient.get('account/user-info');
  },

  loadUsers(page, searchString) {
    return this.apiClient.get('account/users', { page, searchString });
  },
  createUser({ user, isAdmin }) {
    return this.apiClient.post('account/register', user, { isAdmin });
  },
  updateUser({ user, id }) {
    return this.apiClient.put('account', user, { id });
  },
  loadUser(id) {
    return this.apiClient.get('account/user', { id });
  },
  deleteUser(id) {
    return this.apiClient.delete('account', { id });
  },

  loadRealtors(page, searchString, isDisabled) {
    return this.apiClient.get('realtor/all', { page, searchString, isDisabled });
  },
  loadRealtor(id) {
    return this.apiClient.get('realtor', { id });
  },
  deleteRealtor(id) {
    return this.apiClient.delete('realtor', {}, { id });
  }
};
