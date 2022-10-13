import { PlainLayout } from "@/common/components/layout/PlainLayout";
import { DefaultTab } from "@/common/components/tab/DefaultTab";
import { AlarmBox } from "../components/AlarmBox";
import { useSettingView } from "./useSettingView";

export const SettingView = () => {
  // const { } = useSettingView();
  return (
    <PlainLayout isBttomMarginNecessary={false}>
      <DefaultTab category="설정" />
      {/* 
      {result?.map((it, index) => (
        <AlarmBox
          key={index}
          title={it.title}
          desc={it.description}
          isChecked={pushState.filter(item => item.id === it.id)[0].check}
          onChange={chatState.onChange}
        />
      ))} */}
    </PlainLayout>
  );
};
