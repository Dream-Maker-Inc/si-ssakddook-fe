export type DeviceApiResponse = {
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  id: number;
  uuid: string;
  modelName: string;
  deviceToken: string;
};
