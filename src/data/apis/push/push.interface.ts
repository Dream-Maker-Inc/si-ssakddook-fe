import {
  ActivatedPushItemResponse,
  ActivatedPushItemsResponse,
  PushItemsResponse,
} from "./push.dto";

export interface PushApiInterface {
  findAllPush(): Promise<PushItemsResponse>;
  findActivatedPush(): Promise<ActivatedPushItemsResponse>;
  activatePush(notificationId: number): Promise<ActivatedPushItemResponse>;
  deletePush(notificationId: number): Promise<ActivatedPushItemResponse>;
}
