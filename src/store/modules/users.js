import services from '@/middleware';
const { UserService } = services;

const initialUser = () => ({
  username: '',
});

export const initialState = () => ({
  user: initialUser(),
  users: [],
});

export const mutations = {
  SET_USERS: (state, users) => state.users = users,
  SET_USER: (state, user) => state.user = user,
},

export const actions = {
  async loadUsers({ commit }, search) {
    const users = (await UserService.loadUsers(search)).data;
    commit('SET_USERS', users);
    return {
      error: false,
      data: users,
    };
  },

  async loadUser({ commit }, id) {
    const user = (await UserService.loadUser(id)).data;
    commit('SET_USER', user);
    return {
      error: false,
      data: user,
    };
  },
};

export const getters = {
  getUsers: state => state.users,
  getUser: state => state.user,
};
