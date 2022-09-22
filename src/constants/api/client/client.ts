import LocalStorage from "@/data/LocalStorage/LocalStorage";
import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://ssakduk-api.ureca.im/api",
  // baseURL: "http://192.168.0.32:3001/api",
});

axiosClient.interceptors.request.use(function (config) {
  const jwt = LocalStorage.getItem("jwt");
  config.headers = { Authorization: `Bearer ${jwt}` };
  return config;
});

const axiosBasicClient = axios.create({
  baseURL: "https://ssakduk-api.ureca.im/api",
});

export { axiosClient, axiosBasicClient };
