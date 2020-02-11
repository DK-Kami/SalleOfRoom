export const initialState = () => ({
  show: false,
  message: '',
  type: '',
});

export const mutations = {
  SET(state, { type, message }) {
    state.type = type;
    state.message = message;
  },
  CHANGE_SHOW: (state, show) => state.show = show,
};
export const actions = {
  set({ commit }, notification) {
    commit('SET', notification);
    commit('CHANGE_SHOW', true);
  },
};
