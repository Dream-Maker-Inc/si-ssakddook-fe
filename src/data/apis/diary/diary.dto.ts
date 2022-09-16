export type DiaryItemResponse = {
  id: number;
  authorId: number;
  content: string;
  date: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
};

export type DiaryItemsResponse = DiaryItemResponse[];
