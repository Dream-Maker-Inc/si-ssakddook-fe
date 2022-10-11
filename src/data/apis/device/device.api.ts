import { DeviceInfo } from "@/common/flutter-bridge/flutter-bridge";
import { axiosBasicClient } from "@/constants/api/client/client";
import { DeviceApiResponse } from "./device.dto";
import { DeviceApiInterface } from "./device.interface";

class DeviceApiService implements DeviceApiInterface {
  private static instance: DeviceApiService;
  static get Instance(): DeviceApiService {
    return this.instance || (this.instance = new this());
  }
  async registerDevice(
    accessToken: string,
    deviceInfo: DeviceInfo
  ): Promise<DeviceApiResponse> {
    return axiosBasicClient.post(
      "/v1/device",
      {
        uuid: deviceInfo.uuid,
        modelName: deviceInfo.model,
        deviceToken: deviceInfo.token,
      },
      {
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      }
    );
  }
}

const DeviceApi = DeviceApiService.Instance;

export { DeviceApi };
export default DeviceApi;
