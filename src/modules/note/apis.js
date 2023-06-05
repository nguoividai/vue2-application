import axiosInceptors from "@/services/axiosInceptors";

export const getListNoteAPI = (params) => {
  return axiosInceptors.get("notes", { params });
};

export const createNoteAPI = (payload) => {
  return axiosInceptors.post("notes", payload);
};

export const updateNoteAPI = (payload) => {
  return axiosInceptors.put("notes/" + payload.id, payload);
};

export const deleteNoteAPI = (payload) => {
  return axiosInceptors.delete("notes/" + payload.id);
};
