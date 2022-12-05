import { QueryFunctionContext, useInfiniteQuery, useQuery } from "react-query";
import LifeApiService from "@/data/apis/life/life.api";
import { axiosClient } from "@/constants/api/client/client";
import { LifeItemsResponse } from "./life.dto";

export const useFindOneLifeById = (lifeId: string) => {
  return useQuery(["all-life", lifeId], () =>
    LifeApiService.findOneLifeById(lifeId)
  );
};

export const useFindAllLife = (size: number) => {
  return useQuery(["find-all-life", size], () =>
    LifeApiService.findAllLife(size)
  );
};

export const useFindAllLifeByViewCount = (size: number) => {
  return useQuery(["find-all-life-by-viewcount", size], () =>
    LifeApiService.findAllLifeByViewCount(size)
  );
};

export const useFetchAllLife = (size: number) =>
  useInfiniteQuery(
    ["all-life"],
    ({ pageParam = 1 }: QueryFunctionContext) =>
      axiosClient.get<LifeItemsResponse>("/v1/life-posting", {
        params: { page: pageParam, size },
      }),
    {
      getNextPageParam: ({ data: { metaData } }) =>
        metaData.isLast ? undefined : metaData.pageNumber + 1,
      onSuccess(data) {
        console.log(data);
      },
    }
  );
