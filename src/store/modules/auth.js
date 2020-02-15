import services from '@/middleware';
const { UserService } = services;

export const initialState = () => ({
  isSigned: false,
  token: '',
  role: '',
});

export const mutations = {
  LOGIN: (state, data) => {
    state.token = data.access_token;
    state.isSigned = true;
    state.role = 'admin';
  },
};

export const actions = {
  async login({ commit }, { login, password }) {
    const user = await UserService.auth(login, password);
    if (user.error) {
      return {
        data: user.error_description || user.error,
        error: true,
      };
    }

    commit('LOGIN', user);
    return { error: false };
  },
};

export const getters = {
  isSigned: state => state.isSigned,
  getUserRole: state => state.role,
  getToken: state => state.token,
};
