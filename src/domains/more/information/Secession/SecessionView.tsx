import { PlainLayout } from "@/common/components/layout/PlainLayout";
import { NoticeModal } from "@/common/components/modal/NoticeModal";
import { DefaultTab } from "@/common/components/tab/DefaultTab";
import { RoutePath } from "@/constants/Path";
import { css } from "@emotion/react";
import { DescriptionSection } from "./components/DescriptionSection";
import { ImageSection } from "./components/ImageSection";
import { SecessionConfirmModal } from "./components/SecessionConfirmModal";
import { SubmitButton } from "./components/SubmitButton";
import { useSecessionView } from "./useSecessionView";

export const SecessionView = () => {
  const { checkboxState, buttonState, modalState } = useSecessionView();

  return (
    <PlainLayout isBottomMarginNecessary={false}>
      <DefaultTab category="회원 탈퇴" routePath={RoutePath.MyInformation} />
      <div css={sx.root}>
        <div css={sx.container}>
          <ImageSection />
          <DescriptionSection
            check={checkboxState.check}
            onChange={checkboxState.onChange}
          />
          {/* 비밀번호 필드 */}
          {/* <InputPasswordSection
            value={passwordState.value}
            onChange={passwordState.onChange}
            error={passwordState.error}
            helperText={passwordState.helperText}
          /> */}
          <SubmitButton
            disabled={buttonState.disable}
            onClick={buttonState.onClick}
          />
          <SecessionConfirmModal
            isOpen={modalState.checkModal.isOpen}
            onClose={modalState.checkModal.onClose}
            onContinue={modalState.checkModal.onContinue}
          />
        </div>
        <NoticeModal
          isOpen={modalState.noticeModal.isOpen}
          onClose={modalState.noticeModal.onClose}
          text={modalState.noticeModal.text}
        />
      </div>
    </PlainLayout>
  );
};

const sx = {
  root: css`
    width: 100%;
    height: 100%;
    padding: 16px 16px 0 16px;
  `,
  container: css`
    width: 100%;
    height: 100%;

    padding-bottom: 16px;

    display: flex;
    flex-direction: column;
    align-items: center;

    overflow-y: scroll;
    ::-webkit-scrollbar {
      display: none;
    }
  `,
};
