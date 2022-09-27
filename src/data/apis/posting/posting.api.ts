import { axiosClient } from "@/constants/api/client/client";
import LocalStorage from "@/data/LocalStorage/LocalStorage";
import { ApiFailedResponse } from "@/data/statusCode/FailedResponse";
import {
  CommentItemResponse,
  CommentItemsResponse,
  PostingItemResponse,
  PostingItemsResponse,
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

  async findAllPost(page: string, size: string): Promise<PostingItemsResponse> {
    const response = await axiosClient.get(
      `/v1/posting?page=${page}&size=${size}`
    );
    return response.data;
  }

  async findAllPostById(
    page: string,
    size: string
  ): Promise<PostingItemsResponse> {
    const response = await axiosClient.get(
      `/v1/posting?memberId=${this.id}&page=${page}&size=${size}`
    );
    return response.data;
  }

  async findAllPostByKeyword(
    keyword: string,
    page: number,
    size: number
  ): Promise<PostingItemsResponse> {
    const response = await axiosClient.get(
      `/v1/posting?keyword=${keyword}&page=${page}&size=${size}`
    );
    return response.data;
  }

  async findAllCommentById(
    page: string,
    size: string
  ): Promise<CommentItemsResponse> {
    const response = await axiosClient.get(
      `/v1/comment/mine?&page=${page}&size=${size}`
    );
    return response.data;
  }

  async findAllCommentByPostId(
    postId: string,
    page: string,
    size: string
  ): Promise<CommentItemsResponse> {
    const response = await axiosClient.get(
      `/v1/comment?postingId=${postId}&page=${page}&size=${size}`
    );
    return response.data;
  }

  async findOneByPostId(postId: string): Promise<PostingItemResponse> {
    const response = await axiosClient.get(`/v1/posting/${postId}`);
    return response.data;
  }

  async findAllPostByCategory(
    category: string,
    page: string,
    size: string
  ): Promise<PostingItemsResponse> {
    const response = await axiosClient.get(
      `/v1/posting?category=${category}&page=${page}&size=${size}`
    );
    return response.data;
  }

  async updatePost(postId: string, body: any): Promise<PostingItemResponse> {
    const response = await axiosClient.patch(`/v1/posting/${postId}`, body);
    return response.data;
  }

  async deletePost(postId: string): Promise<PostingItemResponse> {
    const response = await axiosClient.delete(`/v1/posting/${postId}`);
    return response.data;
  }

  async deleteCommentById(commentId: string): Promise<CommentItemResponse> {
    const response = await axiosClient.delete(`/v1/comment/${commentId}`);
    return response.data;
  }

  async createComment(body: any): Promise<CommentItemResponse> {
    const response = await axiosClient.post("/v1/comment", body);
    return response.data;
  }
}

export default PostingApiService.Instance;
