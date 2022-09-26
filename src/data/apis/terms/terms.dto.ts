export type TermsItemResponse = {
  id: number;
  title: string;
  content: string;
  isRequired: true;
  createdAt: Date;
  updateAt: Date;
  deletedAt: Date | null;
};

export type TermsItemsResponse = TermsItemResponse[];
