import { useFindAllPush } from "@/data/apis/push/usePushApiHooks";

export const useSettingView = () => {
  // get push list api
  const { data } = useFindAllPush();

  return null;
  // result: data,
  // pushState: push,
  // onActive: handleCheckAlarm,
  // onInactive: handleUncheckAlarm,
};
