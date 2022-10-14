import { ActivatedPushItemResponse, PushItemsResponse } from "./push.dto";

export interface PushApiInterface {
  findAllPush(): Promise<PushItemsResponse>;
  postPush(notificationId: number): Promise<ActivatedPushItemResponse>;
  deletePush(notificationId: number): Promise<ActivatedPushItemResponse>;
}
