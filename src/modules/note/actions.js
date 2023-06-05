import {
  getListNoteAPI,
  updateNoteAPI,
  createNoteAPI,
  deleteNoteAPI,
  reportNoteAPI,
} from "./apis";

const actions = {
  async getListNoteAction({ state }, payload) {
    try {
      const { callback, ...params } = payload || {};
      state.loading = true;
      const { data } = await getListNoteAPI(params);
      state.notes = [...data.data];

      if (callback) {
        callback(data.data);
      }
    } catch (e) {
      console.error(e);
    } finally {
      state.loading = false;
    }
  },
  async getListPaginationNoteAction({ state }, payload) {
    try {
      const { callback, ...params } = payload || {};
      state.loading = true;
      const { data } = await getListNoteAPI(params);
      state.notes = state.notes
        ? [...state.notes, ...data.data]
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
  async updateNoteAction({ commit, state }, payload) {
    try {
      state.loadingBtn = true;
      const { data } = await updateNoteAPI(payload);
      commit("updateNote", data.data);

      if (payload.callback) {
        payload.callback(data.data);
      }
    } catch (e) {
      console.error(e);
    } finally {
      state.loadingBtn = false;
    }
  },
  async createNoteAction({ commit, state }, payload) {
    try {
      state.loadingBtn = true;
      const { data } = await createNoteAPI(payload);
      commit("createNote", data.data);
      if (payload.callback) {
        payload.callback(data.data);
      }
    } catch (e) {
      console.error(e);
    } finally {
      state.loadingBtn = false;
    }
  },
  async deleteNoteAction({ commit, state }, payload) {
    try {
      state.loadingBtn = true;
      await deleteNoteAPI(payload);
      commit("deleteNote", payload);
      if (payload.callback) {
        payload.callback(payload);
      }
    } catch (e) {
      console.error(e);
    } finally {
      state.loadingBtn = false;
    }
  },
  async reportNoteAction({ state }, payload) {
    try {
      state.loadingBtn = true;
      const { data } = await reportNoteAPI(payload);
      state.report = { ...data.data };
      console.log(data.data);
    } catch (e) {
      console.error(e);
    } finally {
      state.loadingBtn = false;
    }
  },
};

export default actions;
