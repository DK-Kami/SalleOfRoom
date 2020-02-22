import services from '@/middleware';
const { CounterpartiesService } = services;

const initialCounterparty = () => ({
  firstName: '',
  secondName: '',
  lastName: '',
  phone: '+7 (',
});

export const initialState = () => ({
  counterparty: initialCounterparty(),
  counterparties: [],
});

export const mutations = {
  CLEAR_COUNTERPARTY: state => state.counterparty = initialCounterparty(),
  SET_COUNTERPARTIES: (state, counterparties) => state.counterparties = counterparties,
  SET_COUNTERPARTY: (state, counterparty) => {
    state.counterparty.secondName = counterparty.SecondName;
    state.counterparty.firstName = counterparty.FirstName;
    state.counterparty.lastName = counterparty.LastName;
    state.counterparty.phone = counterparty.Phone;
  },
};

export const actions = {
  clearCounterparty: ({ commit }) => commit('CLEAR_COUNTERPARTY'),

  async loadCounterparties({ commit }, { page, search, isDisabled }) {
    const { Counterparties, CounterpartyCount } = (await CounterpartiesService.loadCounterparties(page, search, isDisabled)).data;
    commit('SET_COUNTERPARTIES', Counterparties);
    return {
      error: false,
      data: CounterpartyCount,
    };
  },

  async loadCounterparty({ commit }, id) {
    const counterparty = (await CounterpartiesService.loadCounterparty(id)).data;
    commit('SET_COUNTERPARTY', counterparty);
    return {
      error: false,
      data: counterparty,
    };
  },

  async createCounterparty({ dispatch, state }) {
    const data = (await CounterpartiesService.createCounterparty({
      counterparty: {
        SecondName: state.counterparty.secondName,
        FirstName: state.counterparty.firstName,
        LastName: state.counterparty.lastName,
        Phone: state.counterparty.phone,
      }
    })).data;

    if (data.Message) {
      return { error: true, data };
    }

    dispatch('notification/set', {
      message: 'Контрагент добавлен в систему',
      type: 'success',
    }, { root: true });
    return { error: false, data };
  },
  async updateCounterparty({ dispatch, state }, id) {
    const data = (await CounterpartiesService.updateCounterparty({
      counterparty: {
        SecondName: state.counterparty.secondName,
        FirstName: state.counterparty.firstName,
        LastName: state.counterparty.lastName,
        Phone: state.counterparty.phone,
      },
      id,
    })).data;
    
    if (data.Message) {
      return { error: true, data };
    }

    dispatch('notification/set', {
      message: 'Контагент изменён',
      type: 'success',
    }, { root: true });
    return { error: false, data };
  },

  async deleteCounterparty({ dispatch }, id) {
    await CounterpartiesService.deleteCounterparty(id);
    dispatch('notification/set', {
      message: 'Контрагент был добавлен в архив',
      type: 'error',
    }, { root: true });
    return { error: false };
  },
};

export const getters = {
  getCounterparties: state => state.counterparties,
  getCounterparty: state => state.counterparty,
};
