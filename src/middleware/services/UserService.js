export default {
  async auth(login, password) {
    const user = (await this.apiClient.post('Token', {
      grant_type: 'password',
      username: login,
      password,
    })).data;
    console.log(user);
    
    if (!user.error) {
      this.apiClient.login(user.access_token);
    }
    return user;
  },
  logout() {
    return this.apiClient.get('logout');
  },
};
