import { ApiFailedResponse } from "@/data/statusCode/FailedResponse";
import {
  AllCommentResponse,
  AllPostingResponse,
  CommentResponse,
  PostResponse,
} from "./posting.dto";

export interface PostingApiInterface {
  // post
  createPost(formData: any): Promise<ApiFailedResponse>;
  findAllPost(
    page: string,
    size: string,
    withDeleted: boolean
  ): Promise<AllPostingResponse>;
  findAllPostById(page: string, size: string): Promise<AllPostingResponse>;
  findAllPostByCategory(
    category: string,
    page: string,
    size: string
  ): Promise<AllPostingResponse>;
  findOneByPostId(postId: string): Promise<PostResponse>;

  // comment
  createComment(body: any): Promise<CommentResponse>;
  findAllCommentById(page: string, size: string): Promise<AllCommentResponse>;
  findAllCommentByPostId(
    postId: string,
    page: string,
    size: string
  ): Promise<CommentResponse>;

  // like
  deleteCommentById(commentId: string): Promise<CommentResponse>;
}
