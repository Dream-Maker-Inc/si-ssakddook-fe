import { ApiFailedResponse } from "@/data/statusCode/FailedResponse";
import {
  AllCommentResponse,
  AllPostingResponse,
  CommentResponse,
  PostResponse,
} from "./posting.dto";

export interface PostingApiInterface {
  create(formData: any): Promise<ApiFailedResponse>;
  findAllPostById(page: string, size: string): Promise<AllPostingResponse>;
  findAllCommentById(page: string, size: string): Promise<AllCommentResponse>;
  findAllCommentByPostId(
    postId: string,
    page: string,
    size: string
  ): Promise<CommentResponse>;
  findOneByPostId(postId: string): Promise<PostResponse>;
  findAllPostByCategory(
    category: string,
    page: string,
    size: string
  ): Promise<ApiFailedResponse>;

  deleteCommentById(commentId: string): Promise<CommentResponse>;
}
