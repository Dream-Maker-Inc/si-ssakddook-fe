import LocalStorage from "@/data/LocalStorage/LocalStorage";
import { StatusCode } from "@/data/statusCode/StatusCode.enum";
import { logoutAndGoSplash } from "@/domains/auth/functions/auth.func";
import axios, { AxiosError, AxiosResponse } from "axios";
import { useMemo } from "react";

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_CLIENT,
});

axiosClient.interceptors.request.use(function (config) {
  const jwt = LocalStorage.getItem("jwt");
  config.headers = { Authorization: `Bearer ${jwt}` };
  return config;
});

axiosClient.interceptors.response.use(
  (res) => {
    catchIfBlindMemberResponse(res);
    return res;
  },
  (err: AxiosError) => {
    catchIfJwtExpiredResponse(err);
  }
);

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

// jwt 토큰이 만료 / 회원 탈퇴했을 떄 처리
const catchIfJwtExpiredResponse = (res: AxiosError) => {
  const status = res?.response?.status ?? 0;
  if (status === 401) {
    logoutAndGoSplash();
    alert(`토큰이 만료 되었습니다. 다시 로그인 해주세요.`);
  }
};

export { axiosClient, axiosBasicClient };
