import actions from "./actions";

const noteModule = {
  state: () => ({
    notes: [],
    loading: false,
    loadingBtn: false,
  }),
  actions,
  mutations: {
    createNote(state, payload) {
      if (!payload.title) {
        return;
      }
      state.notes.unshift(payload);
    },
    deleteNote(state, payload) {
      state.notes = state.notes.filter((note) => note.id !== payload.id);
    },
    updateNote(state, payload) {
      state.notes = state.notes.map((note) =>
        note.id === payload.id ? { ...note, ...payload } : note
      );
    },
  },
  getters: {},
};

export default noteModule;
