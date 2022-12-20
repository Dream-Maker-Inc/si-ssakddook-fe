import { PlainLayout } from "@/common/components/layout/PlainLayout";
import { DefaultTab } from "@/common/components/tab/DefaultTab";
import { AlarmBox } from "../components/AlarmBox";
import { useSettingView } from "./useSettingView";

export const SettingView = () => {
  const { result, onChange } = useSettingView();
  return (
    <PlainLayout isBottomMarginNecessary={false}>
      <DefaultTab category="설정" routePath={"main"} />

      {result?.map((it, index) => (
        <AlarmBox
          key={index}
          pushId={it.id}
          title={it.title}
          desc={it.description}
          isChecked={it.myAgreed}
          onChange={onChange}
        />
      ))}
    </PlainLayout>
  );
};
