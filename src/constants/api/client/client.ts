import axios from "axios";

export const AxiosClient = axios.create({
  baseURL: "ssakduk-api.ureca.im:3000/api",
});
