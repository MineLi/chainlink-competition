import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

export default createStore({
  plugins: [ createPersistedState({ key: 'local' }) ],
  state: {
  },
  mutations: {
  },
  getters: {},
  actions: {},
  modules: {}
});