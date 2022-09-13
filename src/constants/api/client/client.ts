import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "https://ssakduk-api.ureca.im/api",
  //baseURL: "http://192.168.0.32:3001/api",
});
