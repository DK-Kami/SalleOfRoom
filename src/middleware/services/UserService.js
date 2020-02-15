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

  loadUsers(page, searchString) {
    return this.apiClient.get('account/users', { page, searchString });
  },
  loadUser(id) {
    return this.apiClient.get('account/user', { id });
  },
  loadUserInfo() {
    return this.apiClient.get('account/user-info');
  },
};
