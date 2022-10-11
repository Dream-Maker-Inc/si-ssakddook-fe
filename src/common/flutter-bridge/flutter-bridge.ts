// 디바이스 정보 얻기
// result type { uuid: string, model: string, token: string}

export type DeviceInfo = {
  uuid: string;
  model: string;
  token: string;
};

export const handleGetDeviceInfo = async (window: any): Promise<DeviceInfo> => {
  return window?.flutter_inappwebview?.callHandler("getDeviceInfo", "");
};
