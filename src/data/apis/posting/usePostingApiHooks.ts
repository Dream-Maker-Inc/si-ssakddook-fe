import PostingApiService from "./posting.api";
import { useMutation } from "react-query";

export const useCreatePost = () => {
  return useMutation((formData: any) => PostingApiService.create(formData));
};

export const useFindAllPostById = (id: string, page: string, size: string) => {
  return PostingApiService.findAllPostById(id, page, size);
};

export const useFindAllPostByCategory = (body: any) => {
  return useMutation(() => PostingApiService.create(body));
};
