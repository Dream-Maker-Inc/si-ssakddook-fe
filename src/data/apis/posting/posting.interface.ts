import { ApiFailedResponse } from "@/data/statusCode/FailedResponse";
import {
  CommentItemResponse,
  CommentItemsResponse,
  PostingItemResponse,
  PostingItemsResponse,
} from "./posting.dto";

export interface PostingApiInterface {
  // post
  createPost(formData: any): Promise<ApiFailedResponse>;
  findAllPost(page: string, size: string): Promise<PostingItemsResponse>;
  findAllPostById(page: string, size: string): Promise<PostingItemsResponse>;
  findAllPostByCategory(
    category: string,
    page: string,
    size: string
  ): Promise<PostingItemsResponse>;
  findOneByPostId(postId: string): Promise<PostingItemResponse>;
  findAllPostByKeyword(
    keyword: string,
    page: number,
    size: number
  ): Promise<PostingItemsResponse>;
  updatePost(postId: string, body: any): Promise<PostingItemResponse>;
  deletePost(postId: string): Promise<PostingItemResponse>;

  // comment
  createComment(body: any): Promise<CommentItemResponse>;
  findAllCommentById(page: string, size: string): Promise<CommentItemsResponse>;
  findAllCommentByPostId(
    postId: string,
    page: string,
    size: string
  ): Promise<CommentItemsResponse>;

  // like
  deleteCommentById(commentId: string): Promise<CommentItemResponse>;
}
