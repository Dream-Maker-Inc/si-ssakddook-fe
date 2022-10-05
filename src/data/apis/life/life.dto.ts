export type LifeItemResponse = {
  id: number;
  title: string;
  content: string;
  viewCount: number;
  attachments: string;
  link: string;
  createdAt: Date;
  updateAt: Date;
  deletedAt: Date | null;
};

export type LifeItemsResponse = {
  items: LifeItemResponse[];
  metaData: {
    offset: number;
    pageSize: number;
    pageNumber: number;
    totalPageCount: number;
    itemCount: number;
    totalItemCount: number;
    isFirst: boolean;
    isLast: boolean;
  };
};
