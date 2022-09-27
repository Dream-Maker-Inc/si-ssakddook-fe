export type LikeItemResponse = {
  id: number;
  type: string;
  memberId: number;
  contentId: number;
  createdAt: Date;
  updateAt: Date;
  deletedAt: Date | null;
};

export type LikeItemsResponse = {
  items: LikeItemResponse[];
};
