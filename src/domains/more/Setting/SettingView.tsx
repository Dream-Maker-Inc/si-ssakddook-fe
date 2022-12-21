import { PlainLayout } from "@/common/components/layout/PlainLayout";
import { DefaultTab } from "@/common/components/tab/DefaultTab";
import { AlarmBox } from "../components/AlarmBox";
import { LifeAlarmModal } from "./components/LifeAlarmModal";
import { useSettingView } from "./useSettingView";

export const SettingView = () => {
  const { result, onChange, onLifeAlarmChange, modalState } = useSettingView();
  return (
    <PlainLayout isBottomMarginNecessary={false}>
      <DefaultTab category="설정" routePath={"main"} />

      {result?.map((it, index) =>
        it.title == "라이프 알림" ? (
          <AlarmBox
            key={index}
            pushId={it.id}
            title={it.title}
            desc={it.description}
            isChecked={it.myAgreed}
            onChange={onLifeAlarmChange}
          />
        ) : (
          <AlarmBox
            key={index}
            pushId={it.id}
            title={it.title}
            desc={it.description}
            isChecked={it.myAgreed}
            onChange={onChange}
          />
        )
      )}

      <LifeAlarmModal
        isOpen={modalState.isOpen}
        onClose={modalState.onClose}
        onContinue={modalState.onContinue}
      />
    </PlainLayout>
  );
};
