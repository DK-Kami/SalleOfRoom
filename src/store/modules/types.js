import services from '@/middleware';
const { TypeService } = services;

export const initialState = () => ({
  estateStates: [],
  wallMaterial: [],
  dealStatuses: [],
  transaction: [],
  roomTypes: [],
  category: [],
  history: [],
  repairs: [],
  models: [],
});

export const mutations = {
  SET_ESTATE_STATES: (state, estateStates) => state.estateStates = estateStates,
  SET_WALL_MATERIAL: (state, wallMaterial) => state.wallMaterial = wallMaterial,
  SET_DEAL_STATUSES: (state, dealStatuses) => state.dealStatuses = dealStatuses,
  SET_TRANSACTION: (state, transaction) => state.transaction = transaction,
  SET_ROOM_TYPES: (state, roomTypes) => state.roomTypes = roomTypes,
  SET_CATEGORY: (state, category) => state.category = category,
  SET_HISTORY: (state, history) => state.history = history || [],
  SET_REPAIRS: (state, repairs) => state.repairs = repairs,
  SET_MODELS: (state, models) => state.models = models,
};

export const actions = {
  async loadWallMaterial({ commit }) {
    const data = (await TypeService.loadWallMaterial()).data;
    commit('SET_WALL_MATERIAL', data);
  },
  async loadDealStatuses({ commit }) {
    const data = (await TypeService.loadDealStatuses()).data;
    commit('SET_DEAL_STATUSES', data);
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
  async loadEstateStates({ commit }) {
    const data = (await TypeService.loadEstateState()).data;
    commit('SET_ESTATE_STATES', data);
  },
  async loadRoomTypes({ commit }) {
    const data = (await TypeService.loadRoomType()).data;
    commit('SET_ROOM_TYPES', data);
  },
  async loadRepairs({ commit }) {
    const data = (await TypeService.loadRepairs()).data;
    commit('SET_REPAIRS', data);
  },
};

export const getters = {
  getEstateStates: state => state.estateStates,
  getWallMaterial: state => state.wallMaterial,
  getDealStatuses: state => state.dealStatuses,
  getTransaction: state => state.transaction,
  getRoomTypes: state => state.roomTypes,
  getCategory: state => state.category,
  getRepairs: state => state.repairs,
  getHistory: state => state.history,
  getModels: state => state.models,
};
