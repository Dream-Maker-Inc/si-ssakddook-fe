import LocalStorage from "@/data/LocalStorage/LocalStorage";
import { StatusCode } from "@/data/statusCode/StatusCode.enum";
import { logoutAndGoSplash } from "@/domains/auth/functions/auth.func";
import axios, { AxiosResponse } from "axios";

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_CLIENT,
});

axiosClient.interceptors.request.use(function (config) {
  const jwt = LocalStorage.getItem("jwt");
  config.headers = { Authorization: `Bearer ${jwt}` };
  return config;
});

axiosClient.interceptors.response.use((res) => {
  catchIfBlindMemberResponse(res);

  return res;
});

const axiosBasicClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_CLIENT,
});

// statusCode가 블라인드 이벤트 코드인 경우 처리
const catchIfBlindMemberResponse = (res: AxiosResponse<any, any>) => {
  if (res?.data?.statusCode === StatusCode.BLIND_MEMBER) {
    alert(`(이용 불가) 정지된 계정의 활동 시도 입니다.`);
    logoutAndGoSplash();
  }
};

export { axiosClient, axiosBasicClient };
