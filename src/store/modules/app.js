import { fetchAppInfo } from '@/api/app';

export default {
  namespaced: true,
  state: {
    app: undefined,
  },
  getters: {
    appGet: (state) => state.app,
  },
  actions: {
    loadAppAction({ commit }) {
      return new Promise((resolve, reject) => {
        fetchAppInfo()
          .then((res) => {
            commit('loadAppAction', res.data);
            resolve(res.data);
          })
          .catch(reject);
      });
    },
  },
  mutations: {
    loadAppAction(state, app) {
      state.app = app;
    },
  },
};
