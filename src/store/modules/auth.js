import services from '@/middleware';
const { UserService } = services;

export const initialState = () => ({
  isSigned: false,
});

export const mutations = {
  LOGIN: (state, data) => {
    state.isSigned = true;
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
};
