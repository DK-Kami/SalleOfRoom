import services from '@/middleware';
const { UserService } = services;

export const initialState = () => ({
  isSigned: false,
  userName: '',
  token: '',
  role: '',
});

export const mutations = {
  LOGIN: (state, data) => {
    state.userName = data.userName;
    state.token = data.token;
    state.isSigned = true;
    state.role = 'admin';
  },
};

export const actions = {
  loginFromState: ({ commit }, data) => commit('LOGIN', data),
  async login({ commit, dispatch }, { login, password }) {
    const user = await UserService.auth(login, password);
    if (user.error) {
      return {
        data: user.error_description || user.error,
        error: true,
      };
    }

    const data = {
      token: user.access_token,
      userName: user.userName,
      role: 'admin',
    }
    commit('LOGIN', data);
    dispatch('saveToLocaleStorage', data, { root: true });
    return { error: false, data };
  },
};

export const getters = {
  isSigned: state => state.isSigned,
  getUserRole: state => state.role,
  getToken: state => state.token,
};
