import axios from "axios";

const api = axios.create({
  baseURL: "http://26.9.175.39:8888/api/v1/",
  withCredentials: true,
});

export const authApi = {};
