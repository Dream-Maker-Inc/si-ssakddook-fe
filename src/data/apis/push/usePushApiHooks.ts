import { useQuery } from "react-query";
import PushApiService from "@/data/apis/push/push.api";

export const useFindAllPush = () => {
  return useQuery(["all-push"], () => PushApiService.findAllPush());
};
