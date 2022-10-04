export type PostingItemResponse = {
  deletedAt: Date | null;
  blind: any;
  id: number;
  category: string;
  title: string;
  content: string;
  viewCount: number;
  attachments: string[];
  likedCount: number;
  commentCount: number;
  author: {
    id: number;
    nickname: string;
  };
  createdAt: Date;
  updatedAt: Date;
  myLiked: any;
};

export type PostingItemsResponse = {
  items: PostingItemResponse[];
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

export type MyCommentItems = {
  comment: {
    id: number;
    authorId: number;
    postingId: number;
    content: string;
    createdAt: Date;
    updateAt: Date;
    deletedAt: null;
  };
  posting: {
    id: number;
    authorId: number;
    category: string;
    title: string;
    content: string;
    viewCount: number;
    attachments: string[];
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
  };
  likedCount: number;
};

export type AllCommentResponse = {
  items: MyCommentItems[];
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

export type CommentItemResponse = {
  deletedAt: Date | null;
  blind: any;
  id: number;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  author: {
    id: number;
    nickname: string;
  };
  posting: {
    id: number;
    title: string;
  };
  likedCount: number;
  myLiked: any;
};

export type CommentItemsResponse = {
  items: CommentItemResponse[];
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

export type PostResponse = {
  posting: {
    id: number;
    authorId: number;
    category: string;
    title: string;
    content: string;
    viewCount: number;
    attachments: string[];
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
  };
  member: {
    id: number;
    email: string;
    nickname: string;
    name: string;
    birthDay: string;
    phone: string;
    profileImageUrl: string;
    suspendedAt: null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
  };
  likedCount: number;
  commentCount: number;
};
