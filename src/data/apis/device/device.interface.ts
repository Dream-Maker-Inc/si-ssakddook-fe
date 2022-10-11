import { DeviceInfo } from "@/common/flutter-bridge/flutter-bridge";
import { DeviceApiResponse } from "./device.dto";

export interface DeviceApiInterface {
  registerDevice(
    accessToken: string,
    deviceInfo: DeviceInfo
  ): Promise<DeviceApiResponse>;
}
