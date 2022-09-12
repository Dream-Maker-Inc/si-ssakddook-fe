import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "http://ssakduk-api.ureca.im:3000/api",
});
