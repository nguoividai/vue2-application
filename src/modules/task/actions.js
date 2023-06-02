import {
  getListTaskAPI,
  updateTaskAPI,
  createTaskAPI,
  deleteTaskAPI,
} from "./apis";

const actions = {
  async getListTaskAction({ state }, payload) {
    try {
      const { callback, ...params } = payload || {};
      state.loading = true;
      const { data } = await getListTaskAPI(params);
      state.taskManagements = [...data.data];

      if (callback) {
        callback(data.data);
      }
    } catch (e) {
      console.error(e);
    } finally {
      state.loading = false;
    }
  },
  async getListPaginationTaskAction({ state }, payload) {
    try {
      const { callback, ...params } = payload || {};
      state.loading = true;
      const { data } = await getListTaskAPI(params);
      state.taskManagements = state.taskManagements
        ? [...state.taskManagements, ...data.data]
        : [...data.data];

      if (callback) {
        callback(data.data);
      }
    } catch (e) {
      console.error(e);
    } finally {
      state.loading = false;
    }
  },
  async updateTaskAction({ state }, payload) {
    try {
      state.loadingBtn = true;
      const { data } = await updateTaskAPI(payload);

      if (payload.callback) {
        payload.callback(data.data);
      }
    } catch (e) {
      console.error(e);
    } finally {
      state.loadingBtn = false;
    }
  },
  async createTaskAction({ state }, payload) {
    try {
      state.loadingBtn = true;
      const { data } = await createTaskAPI(payload);

      if (payload.callback) {
        payload.callback(data.data);
      }
    } catch (e) {
      console.error(e);
    } finally {
      state.loadingBtn = false;
    }
  },
  async deleteTaskAction({ commit, state }, payload) {
    try {
      state.loadingBtn = true;
      const { data } = await deleteTaskAPI(payload);
      commit("deleteTaskManagement", data.data);
    } catch (e) {
      console.error(e);
    } finally {
      state.loadingBtn = false;
    }
  },
};

export default actions;
