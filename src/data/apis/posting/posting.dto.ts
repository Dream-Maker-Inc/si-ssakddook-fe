export type PostingItems = {
  posting: {
    id: number;
    authorId: number;
    category: string;
    title: string;
    content: string;
    viewCount: number;
    attachments: [];
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
    suspendedAt: string | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
  };
  likedCount: number;
  commentCount: number;
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
    attachments: [];
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
  };
  likedCount: number;
};

export type CommentItems = {
  comment: {
    id: number;
    authorId: number;
    postingId: number;
    content: string;
    createdAt: Date;
    updateAt: Date;
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
    suspendedAt: string | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
  };
  likedCount: number;
};

export type AllPostingResponse = {
  items: PostingItems[];
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

export type CommentResponse = {
  items: CommentItems[];
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
    attachments: [];
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
