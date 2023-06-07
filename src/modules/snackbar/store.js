const snackbarModule = {
  namespaced: true,
  state: () => ({
    content: "",
    color: "",
    show: false,
  }),
  mutations: {
    showSuccess(state, payload) {
      state.content = payload?.content;
      state.color = payload?.color;
    },
    showError(state, payload) {
      state.content = payload?.content;
      state.color = payload?.color;
    },
    hideSnackbar(state, payload) {
      state.show = payload?.show;
    },
  },
};

export default snackbarModule;
