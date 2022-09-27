import { useMutation, useQuery } from "react-query";
import LikeApiService from "@/data/apis/like/like.api";

export const useCreateLike = (body: any) => {
  return useMutation(() => LikeApiService.createLike(body));
};

export const useDeleteLike = (id: number) => {
  return useMutation(() => LikeApiService.deleteLike(id));
};
