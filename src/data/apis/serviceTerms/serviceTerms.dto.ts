export type ServiceFindAllApiResponse = {
  id: number;
  title: string;
  content: string;
  isRequired: boolean;
  createdAt: Date;
  updateAt: Date;
  deletedAt: Date;
}[];

export type ServiceFindOneApiResponse = ServiceFindAllApiResponse[];
