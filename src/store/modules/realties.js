import services from '@/middleware';
const { RealtiesService } = services;

const initialRealty = () => ({
  transactionTypeId: 0,
  counterpartyId: 0,
  wallMaterialId: 0,
  categoryId: 0,
  realtorId: 0,

  houseNumber: 0,
  kitchenArea: 0,
  flatNumber: 0,
  livingArea: 0,
  roomCount: 0,
  price: 0.00,
  floor: 0,
  
  readyState: 'ready',
  cityDistrict: '',
  district: '',
  region: '',
  comment: '',
  street: '',
  area: '',
  city: '',
  
  coord: '53, 37',
  pictures: [],
});

export const initialState = () => ({
  realty: initialRealty(),
  realties: [],
});

export const mutations = {
  SET_REALTIES: (state, realties) => state.realties = realties,
  SET_REALTY: (state, realty) => {
  },
};

export const actions = {
  clearRealty: state => state.realty = initialRealty(),

  async loadRealties({ commit }, { page, search, isDisabled }) {
    const { Estates, EstateCount } = (await RealtiesService.loadRealties(page, search, isDisabled)).data;
    commit('SET_REALTIES', Estates);
    return {
      error: false,
      data: EstateCount,
    };
  },

  async loadRealty({ commit }, id) {
    const realty = (await RealtiesService.loadRealty(id)).data;
    commit('SET_REALTY', realty);
    return {
      error: false,
      data: realty,
    };
  },

  async createRealty({ dispatch, state }, isAdmin) {
    const data = (await RealtiesService.createRealty({
      realty: {
      },
      isAdmin,
    })).data;

    dispatch('clearRealty');
    if (data.Message) {
      return { error: true, data };
    }
    return { error: false, data };
  },
  async updateRealty({ dispatch, state }, id) {
    const data = (await RealtiesService.updateRealty({
      realty: {
      },
      id,
    })).data;
    
    dispatch('clearRealty');
    if (data.Message) {
      return { error: true, data };
    }
    return { error: false, data };
  },

  async deleteRealty({ dispatch }, id) {
    await RealtiesService.deleteRealty(id);
    dispatch('notification/set', {
      message: 'Контрагент был добавлен в архив',
      type: 'error',
    }, { root: true });
    return { error: false };
  },
};

export const getters = {
  getRealties: state => state.realties,
  getRealty: state => state.realty,
};
