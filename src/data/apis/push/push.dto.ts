export type AgreedItem = {
  createdAt: Date;
  updatedAt: FormDataEntryValue;
  deletedAt: Date | null;
  id: number;
  memberId: number;
  pushNotificationId: number;
};

export type PushItemResponse = {
  createdAt: Date;
  updatedAt: Date;
  deletedAt: null;
  id: number;
  title: string;
  description: string;
  type: string;
  myAgreed: AgreedItem | null;
};

export type ActivatedPushItemResponse = {
  memberId: number;
  pushNotification: {
    createdAt: Date;
    updatedAt: Date;
    deletedAt: null;
    id: number;
    title: string;
    description: string;
    type: string;
  };
  deletedAt: null;
  createdAt: Date;
  updatedAt: Date;
  id: number;
};

export type PushItemsResponse = PushItemResponse[];

export type ActivatedPushItemsResponse = ActivatedPushItemResponse[];
