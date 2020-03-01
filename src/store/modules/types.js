import services from '@/middleware';
const { TypeService } = services;

export const initialState = () => ({
  wallMaterial: [],
  transaction: [],
  category: [],
  history: [],
  models: [],
});

export const mutations = {
  SET_WALL_MATERIAL: (state, wallMaterial) => state.wallMaterial = wallMaterial,
  SET_TRANSACTION: (state, transaction) => state.transaction = transaction,
  SET_CATEGORY: (state, category) => state.category = category,
  SET_HISTORY: (state, history) => state.history = history,
  SET_MODELS: (state, models) => state.models = models,
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
  async loadHistory({ commit }, { tableName, page }) {
    const { History, HistoryCount } = (await TypeService.loadHistory({ tableName, page })).data;
    commit('SET_HISTORY', History);
    return {
      data: HistoryCount,
      error: false,
    };
  },
  async loadModels({ commit }) {
    const data = (await TypeService.loadModels()).data;
    commit('SET_MODELS', data);
  },
};

export const getters = {
  getWallMaterial: state => state.wallMaterial,
  getTransaction: state => state.transaction,
  getCategory: state => state.category,
  getHistory: state => state.history,
  getModels: state => state.models,
};
