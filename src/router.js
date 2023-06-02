import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "dashboard/main-dashboard",
      component: () => import("@/layouts/Layout"),
      children: [
        // Components
        {
          name: "Alerts",
          path: "pages/alerts",
          component: () => import("@/views/pages/Alerts"),
        },

        {
          name: "Profile",
          path: "pages/profile",
          component: () => import("@/views/pages/Profile"),
        },

        {
          name: "Icons",
          path: "pages/icons",
          component: () => import("@/views/pages/Icons"),
        },

        {
          name: "TableSimple",
          path: "pages/tables-simple",
          component: () => import("@/views/pages/TableSimple"),
        },

        {
          name: "Template Dashboard",
          path: "dashboard/basic-dashboard",
          component: () => import("@/views/dashboard/BasicDashboard"),
        },
        {
          name: "Dashboard",
          path: "dashboard/main-dashboard",
          component: () => import("@/views/appDashboard/AppDashboard"),
        },
        {
          name: "TaskManagement",
          path: "dashboard/task-management",
          component: () => import("@/views/dashboard/TaskManagement"),
        },
      ],
    },
  ],
});
