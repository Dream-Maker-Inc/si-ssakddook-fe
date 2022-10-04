export type PaginationResponse = {
  offset: number;
  pageSize: number;
  pageNumber: number;
  totalPageCount: number;
  itemCount: number;
  totalItemCount: number;
  isFirst: boolean;
  isLast: boolean;
};
