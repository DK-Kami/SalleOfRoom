import Vue from 'vue';
import Vuex from 'vuex';
import modules from './modules';
import initialModules from './initialModules';

Vue.use(Vuex);

const initialState = () => ({
  
});

const vuex = new Vuex.Store({
  state: initialState(),
  mutations: {
    UNSET_DATA: state => state = initialState(),
  },
  actions: {
    unsetUserData({ commit, dispatch }) {
      Object.keys(modules).forEach(m => {
        commit(`${m}/UNSET_DATA`);
      });
      commit('UNSET_DATA');
      dispatch('saveToLocaleStorage');
      WebClient.logout();
    },
  },
  getters: {
  },
  modules: initialModules(modules),
});

export default vuex;
