import axiosInceptors from "@/services/axiosInceptors";

export const getListTaskAPI = (params) => {
  return axiosInceptors.get("tasks", { params });
};

export const createTaskAPI = (payload) => {
  return axiosInceptors.post("tasks", payload);
};

export const updateTaskAPI = (payload) => {
  return axiosInceptors.put("tasks/" + payload.id, payload);
};

export const deleteTaskAPI = (payload) => {
  return axiosInceptors.delete("tasks/" + payload.id);
};

export const reportTaskAPI = () => {
  return axiosInceptors.get("tasks/report");
};
