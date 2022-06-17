import { app } from '_api/app.js';

export default {
  namespaced: true,
  state: {
    info: undefined,
    pageLoading: true,
  },
  getters: {
    infoGet: (state) => state.info,
    pageLoadingGet: (state) => state.pageLoading,
  },
  actions: {
    loadAppInfoAction({ commit }) {
      return new Promise((resolve, reject) => {
        app
          .fetchAppInfo()
          .then((res) => {
            commit('loadAppInfoAction', res.data);
            resolve(res.data);
          })
          .catch(reject);
      });
    },
    changePageLoadingAction({ commit }, { loading }) {
      commit('changePageLoadingAction', loading);
    },
  },
  mutations: {
    loadAppInfoAction(state, info) {
      state.info = info;
    },
    changePageLoadingAction(state, loading) {
      state.pageLoading = loading;
    },
  },
};
