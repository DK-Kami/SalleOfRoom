import services from '@/middleware';
const { CounterpartiesService } = services;

const initialCounterparty = () => ({
});

export const initialState = () => ({
  counterparty: initialCounterparty(),
  counterparties: [],
});

export const mutations = {
  SET_USERS: (state, counterparties) => state.counterparty = counterparties,
  SET_USER: (state, counterparty) => {
    state.counterparty = counterparty;
  },
};

export const actions = {
  clearCounterparty: state => state.counterparty = initialCounterparty(),

  async loadCounterparties({ commit }, { page, search, isDisabled }) {
    const { Counterparties, CounterpartyCount } = (await CounterpartiesService.loadCounterparties(page, search, isDisabled)).data;
    commit('SET_USERS', Counterparties);
    return {
      error: false,
      data: CounterpartyCount,
    };
  },

  async loadCounterparty({ commit }, id) {
    const counterparty = (await CounterpartiesService.loadCounterparty(id)).data;
    commit('SET_USER', counterparty);
    return {
      error: false,
      data: counterparty,
    };
  },

  async createCounterparty({ dispatch, state }, isAdmin) {
    const data = (await CounterpartiesService.createCounterparty({
      counterparty: {
      },
      isAdmin,
    })).data;

    dispatch('clearCounterparty');
    if (data.Message) {
      return { error: true, data };
    }
    return { error: false, data };
  },
  async updateCounterparty({ dispatch, state }, id) {
    const data = (await CounterpartiesService.updateCounterparty({
      counterparty: {
      },
      id,
    })).data;
    
    dispatch('clearCounterparty');
    if (data.Message) {
      return { error: true, data };
    }
    return { error: false, data };
  },
};

export const getters = {
  getCounterparties: state => state.counterparties,
  getCounterparty: state => state.counterparty,
};
