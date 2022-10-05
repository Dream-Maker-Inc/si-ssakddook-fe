// 디바이스 정보 얻기
// result type { uuid: string, model: string, token: string}

type DeviceInfo = {
  uuid: string;
  model: string;
  token: string;
};

export const handleGetDeviceInfo = (window: any) => {
  window?.flutter_inappwebview
    ?.callHandler("getDeviceInfo", "")
    .then((result: DeviceInfo) => {
      const deviceInfo = JSON.stringify(result);
      alert(deviceInfo);
    })
    .catch((e: Error) => {
      alert(e);
    });
};
