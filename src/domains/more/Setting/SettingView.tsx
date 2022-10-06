import { PlainLayout } from "@/common/components/layout/PlainLayout";
import { DefaultTab } from "@/common/components/tab/DefaultTab";
import { AlarmBox } from "../components/AlarmBox";
import { useSettingView } from "./useSettingView";

export const SettingView = () => {
  const { chatState, communityState, lifeState } = useSettingView();
  return (
    <PlainLayout isBttomMarginNecessary={false}>
      <DefaultTab category="설정" />
      <AlarmBox
        title={chatState.title}
        desc={chatState.desc}
        isChecked={chatState.value}
        onChange={chatState.onChange}
      />
      <AlarmBox
        title={communityState.title}
        desc={communityState.desc}
        isChecked={communityState.value}
        onChange={communityState.onChange}
      />
      <AlarmBox
        title={lifeState.title}
        desc={lifeState.desc}
        isChecked={lifeState.value}
        onChange={lifeState.onChange}
      />
    </PlainLayout>
  );
};
