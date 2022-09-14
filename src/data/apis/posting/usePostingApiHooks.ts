import PostingApiService from "./posting.api";
import { useMutation } from "react-query";

export const useCreatePost = () => {
  return useMutation((formData: any) => PostingApiService.create(formData));
};

export const useFindAllPostById = (page: string, size: string) => {
  return PostingApiService.findAllPostById(page, size);
};

export const useFindAllPostByCategory = (body: any) => {
  return useMutation(() => PostingApiService.create(body));
};
