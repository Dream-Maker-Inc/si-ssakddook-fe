import { useMutation, useQuery } from "react-query";
import PushApiService from "@/data/apis/push/push.api";

export const useFindAllPush = () => {
  return useQuery(["all-push"], () => PushApiService.findAllPush());
};

export const useActivatePush = (notificationId: number) => {
  return useMutation(["activate-push"], () =>
    PushApiService.postPush(notificationId)
  );
};

export const useInactivatePush = (notificationId: number) => {
  return useMutation(["inactivate-push"], () =>
    PushApiService.deletePush(notificationId)
  );
};
