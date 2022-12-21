import { AgreedItem } from "./../../../data/apis/push/push.dto";
import PushApiService from "@/data/apis/push/push.api";
import { useMutation } from "react-query";
import { useFindAllPush } from "@/data/apis/push/usePushApiHooks";
import { useState } from "react";

export const useSettingView = () => {
  const { data, refetch } = useFindAllPush();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleModalOpen = () => setIsModalVisible(true);
  const handleModalClose = () => setIsModalVisible(false);

  // 라이프 알림 id
  const lifeAlarmPushId = data?.filter(
    (item) => item.title == "라이프 알림"
  )!![0].id as number;

  const { data: postData, mutate: postMutate } = useMutation(
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
      onSuccess(res) {
        refetch();
      },
    }
  );

  const handleSwitchChange = (pushId: number, p: AgreedItem | null) => {
    if (p !== null) {
      deleteMutate(p.id);
    } else {
      postMutate(pushId);
    }
  };

  const handleLifeSwitchChange = (pushId: number, p: AgreedItem | null) => {
    if (p !== null) {
      deleteMutate(p.id);
    } else {
      handleModalOpen();
    }
  };

  const handlePushLifeAlarm = () => {
    handleModalClose();
    postMutate(lifeAlarmPushId);
  };

  return {
    result: data,
    onChange: handleSwitchChange,
    onLifeAlarmChange: handleLifeSwitchChange,
    modalState: {
      isOpen: isModalVisible,
      onClose: handleModalClose,
      onContinue: handlePushLifeAlarm,
    },
  };
};
