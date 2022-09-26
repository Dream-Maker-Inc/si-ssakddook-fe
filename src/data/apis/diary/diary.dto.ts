export type DiaryItemResponse = {
  id: number;
  authorId: number;
  content: string;
  date: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
};

export type DiaryItemsResponse = {
  yearMonth: string;
  data: DiaryItemResponse[];
}[];
