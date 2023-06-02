import axios from "axios";

const { VUE_APP_HOST } = process.env;

const config = {
  baseURL: VUE_APP_HOST + "/api",
  headers: {
    "Content-Type": "application/json",
    // Authorization: `Bearer ${
    //   REACT_APP_STORED ? localStorage.getItem(REACT_APP_STORED) : ""
    // }`,
  },
};

const axiosInceptors = axios.create(config);

export default axiosInceptors;
