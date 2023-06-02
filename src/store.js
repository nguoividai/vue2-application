import Vue from "vue";
import Vuex from "vuex";
import taskModule from "@/modules/task/store";
import noteModule from "@/modules/note/store";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    task: taskModule,
    note: noteModule,
  },

  state: {
    Sidebar_drawer: null,
    Customizer_drawer: false,
    SidebarColor: "white",
    SidebarBg: "",
  },
  mutations: {
    SET_SIDEBAR_DRAWER(state, payload) {
      state.Sidebar_drawer = payload;
    },
    SET_CUSTOMIZER_DRAWER(state, payload) {
      state.Customizer_drawer = payload;
    },
    SET_SIDEBAR_COLOR(state, payload) {
      state.SidebarColor = payload;
    },
  },
  actions: {},
});
