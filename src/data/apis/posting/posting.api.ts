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
    return response.data.data;
  }

  async findAllPost(size: number): Promise<PostingItemsResponse> {
    const response = await axiosClient.get(`/v1/posting?page=1&size=${size}`);
    return response.data.data;
  }

  async findAllPostByLikeCount(): Promise<PostingItemsResponse> {
    const response = await axiosClient.get(`/v1/posting/sortedLiked`);
    return response.data.data;
  }

  async findAllPostById(
    page: string,
    size: string
  ): Promise<PostingItemsResponse> {
    const response = await axiosClient.get(
      `/v1/posting?memberId=${this.id}&page=${page}&size=${size}`
    );
    return response.data.data;
  }

  async findAllPostByKeyword(
    keyword: string,
    page: number,
    size: number
  ): Promise<PostingItemsResponse> {
    const response = await axiosClient.get(
      `/v1/posting?keyword=${keyword}&page=${page}&size=${size}`
    );
    return response.data.data;
  }

  async findAllCommentById(
    page: string,
    size: string
  ): Promise<CommentItemsResponse> {
    const response = await axiosClient.get(
      `/v1/comment/mine?&page=${page}&size=${size}`
    );
    return response.data.data;
  }

  async findAllCommentByPostId(
    postId: string,
    page: string,
    size: string
  ): Promise<CommentItemsResponse> {
    const response = await axiosClient.get(
      `/v1/comment?postingId=${postId}&page=${page}&size=${size}`
    );
    return response.data.data;
  }

  async findOneByPostId(postId: string): Promise<PostingItemResponse> {
    const response = await axiosClient.get(`/v1/posting/${postId}`);
    return response.data.data;
  }

  async findAllPostByCategory(
    category: string,
    pageParam: number
  ): Promise<PostingItemsResponse> {
    const response = await axiosClient.get(`/v1/posting`, {
      params: { category, page: pageParam, size: 15 },
    });
    console.log(response.data);
    return response.data.data;
  }

  async updatePost(postId: string, body: any): Promise<PostingItemResponse> {
    const response = await axiosClient.patch(`/v1/posting/${postId}`, body);
    return response.data.data;
  }

  async deletePost(postId: string): Promise<PostingItemResponse> {
    const response = await axiosClient.delete(`/v1/posting/${postId}`);
    return response.data.data;
  }

  async deleteCommentById(commentId: string): Promise<CommentItemResponse> {
    const response = await axiosClient.delete(`/v1/comment/${commentId}`);
    return response.data.data;
  }

  async createComment(body: any): Promise<CommentItemResponse> {
    const response = await axiosClient.post("/v1/comment", body);
    return response.data.data;
  }
}

export default PostingApiService.Instance;
