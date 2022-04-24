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
    loadAppInfoAction({commit}) {},
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
