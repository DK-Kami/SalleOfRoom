import services from '@/middleware';
const { UserService } = services;

export const initialState = () => ({
  isSigned: false,
  userName: '',
  email: '',
  token: '',
  role: '',
  id: '',
});

export const mutations = {
  LOGIN: (state, data) => {
    state.userName = data.userName;
    state.email = data.email;
    state.token = data.token;
    state.role = data.role;
    state.isSigned = true;
    state.id = data.id;
  },
};

export const actions = {
  loginFromState: ({ commit }, data) => commit('LOGIN', data),
  async login({ dispatch }, { login, password }) {
    const user = await UserService.auth(login, password);
    if (user.error) {
      return {
        data: user.error_description || user.error,
        error: true,
      };
    }

    await dispatch('setUserInfo', user);
    return { error: false };
  },
  async setUserInfo({ dispatch, commit }, data) {
    const user = (await UserService.loadUserInfo()).data;

    const userData = {
      role: user.Role.toLowerCase(),
      token: data.access_token,
      userName: data.userName,
      email: user.Email,
      id: user.Id,
    }
    commit('LOGIN', userData);
    dispatch('saveToLocaleStorage', userData, { root: true });
    return;
  },
};

export const getters = {
  isSigned: state => state.isSigned,
  getUserRole: state => state.role,
  getToken: state => state.token,
  getUserId: state => state.id,
  getUser: state => ({
    userName: state.userName,
    email: state.email,
    role: state.role,
    id: state.id,
  }),
};
