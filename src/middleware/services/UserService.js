export default {
  async auth(login, password) {
    const requestBody = [
      'grant_type=password',
      `password=${password}`,
      `username=${login}`,
    ].join('&');

    const user = (await this.apiClient.post('Token', requestBody)).data;
    console.log(user);
    
    if (!user.error) {
      this.apiClient.login(user.access_token);
    }
    return user;
  },
  logout() {
    return this.apiClient.get('logout');
  },

  loadUsers(search) {
    return this.apiClient.get('users', { search });
  },
  loadUser(id) {
    return this.apiClient.get('user', { id });
  },
};
