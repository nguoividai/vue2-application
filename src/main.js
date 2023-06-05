import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import store from "./store";
import "./plugins/base";
import { timeAgo } from "./filters";

Vue.config.productionTip = process.env.NODE_ENV ? true : false;
Vue.config.devtools = process.env.NODE_ENV ? true : false;

Vue.filter("timeAgo", timeAgo);

new Vue({
  vuetify,
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
