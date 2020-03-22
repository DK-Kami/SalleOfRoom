import services from '@/middleware';
const { UserService } = services;

const initialUser = () => ({
  confirmPassword: '',
  secondName: '',
  firstName: '',
  password: '',
  lastName: '',
  email: '',
  role: '',
  phone: '+7 (',
  name: '',
  estates: [],
});

export const initialState = () => ({
  user: initialUser(),
  users: [],
});

export const mutations = {
  CLEAR_USER: state => state.user = initialUser(),
  SET_USERS: (state, users) => state.users = users || [],
  SET_USER: (state, user) => {
    state.user.confirmPassword = user.Password;
    state.user.secondName = user.SecondName;
    state.user.phone = user.Phone || '+7 (';
    state.user.firstName = user.FirstName;
    state.user.lastName = user.LastName;
    state.user.password = user.Password;
    state.user.email = user.Email;
    state.user.role = user.Role;
    state.user.name = user.Name;
    state.user.estates = user.Estates;
  },
};

export const actions = {
  clearUser: ({ commit }) => commit('CLEAR_USER'),

  async loadUsers({ commit }, { page, search }) {
    const { Users, UsersCount } = (await UserService.loadUsers(page, search)).data;
    commit('SET_USERS', Users);
    return {
      error: false,
      data: UsersCount,
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

  async loadRealtors({ commit }, { page, search, isDisabled }) {
    const { Realtors, RealtorCount } = (await UserService.loadRealtors(page, search, isDisabled)).data;
    commit('SET_USERS', Realtors);
    return {
      error: false,
      data: RealtorCount,
    };
  },
  async deleteRealtor({ dispatch }, id) {
    await UserService.deleteRealtor(id);
    dispatch('notification/set', {
      message: 'Риелтор удалён',
      type: 'success',
    }, { root: true });
    return { error: false };
  },
  async loadRealtor({ commit }, id) {
    const realtor = (await UserService.loadRealtor(id)).data;
    commit('SET_USER', realtor);
    return {
      error: false,
      data: realtor,
    };
  },

  async deleteUser(_, id) {
    await UserService.deleteUser(id);
    return { error: false };
  },

  async createUser({ dispatch, state }, isAdmin) {
    const data = (await UserService.createUser({
      user: {
        ConfirmPassword: state.user.confirmPassword,
        SecondName: state.user.secondName,
        FirstName: state.user.firstName,
        LastName: state.user.lastName,
        Password: state.user.password,
        Email: state.user.email,
        Phone: state.user.phone,
      },
      isAdmin,
    })).data;

    if (data.Message) {
      return { error: true, data };
    }

    dispatch('notification/set', {
      message: 'Пользователь добавлен в систему',
      type: 'success',
    }, { root: true });
    return { error: false, data };
  },
  async updateUser({ dispatch, state }, id) {
    const data = (await UserService.updateUser({
      user: {
        SecondName: state.user.secondName,
        Password: state.user.password,
        FirstName: state.user.firstName,
        LastName: state.user.lastName,
        Email: state.user.email,
        Phone: state.user.phone,
      },
      id,
    })).data;
    
    if (data.Message) {
      return { error: true, data };
    }

    dispatch('notification/set', {
      message: 'Пользователь изменён',
      type: 'success',
    }, { root: true });
    return { error: false, data };
  },
};

export const getters = {
  getRealtor: state => {
    return state.users.filter(u => u.Role.toLowerCase() === 'realtor');
  },
  getUsers: state => state.users,
  getUser: state => state.user,
};
