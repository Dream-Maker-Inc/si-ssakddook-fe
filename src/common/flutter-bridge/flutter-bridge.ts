// JS -> Flutter
export enum FlutterSendBridgeKeys {
  GetDeviceInfo = "getDeviceInfo",
  RestartWebApp = "restartApp",
  ExitApp = "exitApp",
  GoBack = "goBack",
}

// Flutter -> JS
export enum FlutterReceiveBridgeKeys {
  MessageEvent = "flutterMessageEvent",
  CanGoBack = "canGoBack",
}

export type DeviceInfo = {
  uuid: string;
  model: string;
  token: string;
};

// 디바이스 정보 얻기
export const handleGetDeviceInfo = async (window: any): Promise<DeviceInfo> => {
  return window?.flutter_inappwebview?.callHandler(
    FlutterSendBridgeKeys.GetDeviceInfo
  );
};

// 앱 재실행
export const restartWebApp = async (window: any) => {
  return window?.flutter_inappwebview?.callHandler(
    FlutterSendBridgeKeys.RestartWebApp
  );
};

// (Android) 앱 종료
export const exitWebApp = async (window: any) => {
  return window?.flutter_inappwebview?.callHandler(
    FlutterSendBridgeKeys.ExitApp
  );
};

// 뒤로가기
export const goBack = async (window: any) => {
  return window?.flutter_inappwebview?.callHandler(
    FlutterSendBridgeKeys.GoBack
  );
};
