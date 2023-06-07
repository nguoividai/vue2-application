import Vue from "vue";
import store from "@/store";

const notifier = () => {
  Vue.prototype.$notifier = {};

  Vue.prototype.$notifier.showSuccess = (payload) =>
    store.commit("snackbar/showSuccess", payload);

  Vue.prototype.$notifier.showError = (payload) =>
    store.commit("snackbar/showError", payload);
};

export default notifier;
