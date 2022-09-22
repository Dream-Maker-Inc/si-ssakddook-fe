import { axiosClient } from "@/constants/api/client/client";
import LocalStorage from "@/data/LocalStorage/LocalStorage";
import { ApiFailedResponse } from "@/data/statusCode/FailedResponse";
import {
  AllCommentResponse,
  AllPostingResponse,
  CommentResponse,
  PostResponse,
} from "./posting.dto";
import { PostingApiInterface } from "./posting.interface";

class PostingApiService implements PostingApiInterface {
  private static instance: PostingApiService;
  static get Instance(): PostingApiService {
    return this.instance || (this.instance = new this());
  }

  get id() {
    return LocalStorage.getItem("id");
  }

  async createPost(formData: any): Promise<ApiFailedResponse> {
    const response = await axiosClient.post("/v1/posting", formData);
    return response.data;
  }

  async findAllPost(
    page: string,
    size: string,
    withDeleted: boolean
  ): Promise<AllPostingResponse> {
    const response = await axiosClient.get(
      `/v1/posting?page=${page}&size=${size}&withDeleted=${withDeleted}`
    );
    return response.data;
  }

  async findAllPostById(
    page: string,
    size: string
  ): Promise<AllPostingResponse> {
    const response = await axiosClient.get(
      `/v1/posting?memberId=${this.id}&page=${page}&size=${size}`
    );
    return response.data;
  }

  async findAllPostByKeyword(
    keyword: string,
    page: number,
    size: number
  ): Promise<AllPostingResponse> {
    const response = await axiosClient.get(
      `/v1/posting?keyword=${keyword}&page=${page}&size=${size}`
    );
    return response.data;
  }

  async findAllCommentById(
    page: string,
    size: string
  ): Promise<AllCommentResponse> {
    const response = await axiosClient.get(
      `/v1/comment?authorId=${this.id}&page=${page}&size=${size}`
    );
    return response.data;
  }

  async findAllCommentByPostId(
    postId: string,
    page: string,
    size: string
  ): Promise<CommentResponse> {
    const response = await axiosClient.get(
      `/v1/comment?postingId=${postId}&page=${page}&size=${size}`
    );
    return response.data;
  }

  async findOneByPostId(postId: string): Promise<PostResponse> {
    const response = await axiosClient.get(`/v1/posting/${postId}`);
    return response.data;
  }

  async findAllPostByCategory(
    category: string,
    page: string,
    size: string
  ): Promise<AllPostingResponse> {
    const response = await axiosClient.get(
      `/v1/posting?category=${category}&page=${page}&size=${size}`
    );
    return response.data;
  }

  async deleteCommentById(commentId: string): Promise<CommentResponse> {
    const response = await axiosClient.delete(`/v1/comment/${commentId}`);
    return response.data;
  }

  async createComment(body: any): Promise<CommentResponse> {
    const response = await axiosClient.post("/v1/comment", body);
    return response.data;
  }
}

export default PostingApiService.Instance;
