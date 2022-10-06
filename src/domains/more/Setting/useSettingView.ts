import { useState } from "react";

export const useSettingView = () => {
  const [isChatAlarmChecked, setIsChatAlarmChecked] = useState(false);
  const [isCommunityAlarmChecked, setIsCommunityAlarmChecked] = useState(false);
  const [isLifeAlarmChecked, setIsLifeAlarmChecked] = useState(false);

  const handleChangeChatAlarm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChatAlarmChecked(e.target.checked);
  };

  const handleChangeCommunityAlarm = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setIsCommunityAlarmChecked(e.target.checked);
  };

  const handleChangeLifeAlarm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsLifeAlarmChecked(e.target.checked);
  };

  return {
    chatState: {
      title: "채팅방 알림",
      desc: "채팅방 알림을 설정합니다.",
      value: isChatAlarmChecked,
      onChange: handleChangeChatAlarm,
    },
    communityState: {
      title: "활동 알림",
      desc: "댓글 및 좋아요 알림을 설정합니다.",
      value: isCommunityAlarmChecked,
      onChange: handleChangeCommunityAlarm,
    },
    lifeState: {
      title: "라이프 알림",
      desc: "라이프 알림을 설정합니다.",
      value: isLifeAlarmChecked,
      onChange: handleChangeLifeAlarm,
    },
  };
};
