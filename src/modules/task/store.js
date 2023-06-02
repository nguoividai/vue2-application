import actions from "./actions";

const taskModule = {
  state: () => ({
    tasks: [],
    taskManagements: [],
    loading: false,
    loadingBtn: false,
  }),
  actions,
  mutations: {
    createTask(state, payload) {
      state.tasks.unshift(payload);
    },
    deleteTask(state, payload) {
      state.tasks = state.tasks.filter((task) => task.id !== payload.id);
    },
    updateTask(state, payload) {
      state.tasks = state.tasks.map((task) =>
        task.id === payload.id ? { ...task, ...payload } : task
      );
    },
    updateTaskManagement(state, payload) {
      state.taskManagements = state.taskManagements.map((task) =>
        task.id === payload.id ? { ...task, ...payload } : task
      );
    },
    createTaskManagement(state, payload) {
      state.taskManagements.unshift(payload);
    },
    deleteTaskManagement(state, payload) {
      state.taskManagements = state.taskManagements.filter(
        (task) => task.id !== payload.id
      );
    },
  },
  getters: {
    taskCompleted(state) {
      return state.taskManagements?.filter((e) => e.done)?.length ?? 0;
    },
    taskRemaining(state) {
      return state.taskManagements?.filter((e) => !e.done)?.length ?? 0;
    },
    progress(state, getters) {
      return (getters.taskCompleted / state.taskManagements.length) * 100;
    },
    taskManagementCompletedList(state) {
      return state.taskManagements?.filter((e) => e.done);
    },
    taskManagementRemainingList(state) {
      return state.taskManagements?.filter((e) => !e.done);
    },
  },
};

export default taskModule;
