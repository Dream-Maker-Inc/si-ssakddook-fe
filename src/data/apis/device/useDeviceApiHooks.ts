import { DeviceInfo } from "@/common/flutter-bridge/flutter-bridge";
import DeviceApiService from "./device.api";

export const useRegisterDevice = (
  accessToken: string,
  deviceInfo: DeviceInfo
) => {
  return DeviceApiService.registerDevice(accessToken, deviceInfo);
};
