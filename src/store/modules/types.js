import services from '@/middleware';
const { TypeService } = services;

export const initialState = () => ({
  wallMaterial: [],
  transaction: [],
  category: [],
});

export const mutations = {
  SET_WALL_MATERIAL: (state, wallMaterial) => state.wallMaterial = wallMaterial,
  SET_TRANSACTION: (state, transaction) => state.transaction = transaction,
  SET_CATEGORY: (state, category) => state.category = category,
};

export const actions = {
  async loadWallMaterial({ commit }) {
    const data = (await TypeService.loadWallMaterial()).data;
    commit('SET_WALL_MATERIAL', data);
  },
  async loadTransaction({ commit }) {
    const data = (await TypeService.loadTransaction()).data;
    commit('SET_TRANSACTION', data);
  },
  async loadCategory({ commit }) {
    const data = (await TypeService.loadCategory()).data;
    commit('SET_CATEGORY', data);
  },
}

export const getters = {
  getWallMaterial: state => state.wallMaterial,
  getTransaction: state => state.transaction,
  getCategory: state => state.category,
};
