import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import store from "./store";
import "./plugins/base";
import { timeAgo } from "./filters";

import notifier from "@/plugins/vuex/notifier";

Vue.config.productionTip =
  process.env.NODE_ENV === "development" ? true : false;
Vue.config.devtools = process.env.NODE_ENV === "development" ? true : false;

Vue.filter("timeAgo", timeAgo);

Vue.use(notifier);

new Vue({
  vuetify,
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
