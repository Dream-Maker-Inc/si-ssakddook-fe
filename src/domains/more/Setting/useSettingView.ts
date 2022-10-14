import { AgreedItem } from "./../../../data/apis/push/push.dto";
import PushApiService from "@/data/apis/push/push.api";
import { useMutation } from "react-query";
import { useFindAllPush } from "@/data/apis/push/usePushApiHooks";

export const useSettingView = () => {
  const { data, refetch } = useFindAllPush();

  const { mutate: postMutate } = useMutation(
    ["activate-push"],
    (notificationId: number) => PushApiService.postPush(notificationId),
    {
      onSuccess() {
        refetch();
      },
    }
  );

  const { mutate: deleteMutate } = useMutation(
    ["inactivate-push"],
    (notificationId: number) => PushApiService.deletePush(notificationId),
    {
      onSuccess() {
        refetch();
      },
    }
  );

  const handleSwitchChange = (pushId: number, p: AgreedItem | null) => {
    if (p !== null) {
      deleteMutate(pushId);
    } else {
      postMutate(pushId);
    }
  };

  return { result: data, onChange: handleSwitchChange };
  // result: data,
  // pushState: push,
  // onActive: handleCheckAlarm,
  // onInactive: handleUncheckAlarm,
};
