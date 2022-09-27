import { useMutation, useQuery } from "react-query";
import LikeApiService from "@/data/apis/like/like.api";

export const useCreateLike = (type: string, contentId: number) => {
  return useMutation(() => LikeApiService.createLike(type, contentId));
};

export const useDeleteLike = (id: number) => {
  return useMutation(() => LikeApiService.deleteLike(id));
};
