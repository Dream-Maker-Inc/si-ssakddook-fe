import { useQuery } from "react-query";
import LifeApiService from "@/data/apis/life/life.api";

export const useFindAllLife = (page: number, size: number) => {
  return useQuery(["all-life", page, size], () =>
    LifeApiService.findAllLife(page, size)
  );
};

export const useFindOneLifeById = (lifeId: string) => {
  return useQuery(["all-life", lifeId], () =>
    LifeApiService.findOneLifeById(lifeId)
  );
};
