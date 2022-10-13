export type PushItemResponse = {
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  id: number;
  title: string;
  description: string;
  type: string;
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
