import { css } from "@emotion/react";
import { AppbarLayout } from "@/common/components/layout/AppbarLayout";
import { WritingTab } from "@/common/components/tab/WritingTab";
import { PasswordBox } from "@/common/components/field/PasswordBox/PasswordBox";
import { useChangePasswordView } from "./useChangePasswordView";
import { CheckModal } from "@/common/components/modal/CheckModal";
import { NoticeModal } from "@/common/components/modal/NoticeModal";

export const ChangePasswordView = () => {
  const { currPwState, newPwState, confirmPwState, tabState, modalState } =
    useChangePasswordView();
  return (
    <AppbarLayout>
      <WritingTab
        title={tabState.title}
        onActive={tabState.onActive}
        onClick={tabState.onClick}
      />
      <div css={sx.root}>
        <div css={sx.container}>
          <PasswordBox
            titleProps={{
              title: "기존 비밀번호",
              desc: "기존 비밀번호를 입력해 주세요.",
            }}
            fieldProps={{
              value: currPwState.value,
              onChange: currPwState.onChange,
            }}
          />
          <PasswordBox
            titleProps={{
              title: "변경할 비밀번호",
              desc: "변경할 비밀번호를 입력해 주세요.\n이전에 사용하셨던 비밀번호는 다시 사용할 수 없어요.",
            }}
            fieldProps={{
              value: newPwState.value,
              onChange: newPwState.onChange,
              error: newPwState.error,
              helperText: newPwState.helperText,
            }}
          />
          <PasswordBox
            titleProps={{
              title: "변경할 비밀번호 확인",
              desc: "변경할 비밀번호를 한번 더 입력해 주세요.",
            }}
            fieldProps={{
              value: confirmPwState.value,
              onChange: confirmPwState.onChange,
              error: confirmPwState.error,
              helperText: confirmPwState.helperText,
            }}
          />
        </div>
      </div>
      <CheckModal
        isOpen={modalState.changeModal.isOpen}
        onClose={modalState.changeModal.onClose}
        onContinue={modalState.changeModal.onContinue}
        editValue={modalState.changeModal.editValue}
      />
      <NoticeModal
        isOpen={modalState.noticeModal.isOpen}
        onClose={modalState.noticeModal.onClose}
        text={modalState.noticeModal.text}
      />
    </AppbarLayout>
  );
};

const sx = {
  root: css`
    width: 100%;
    height: 100%;
    padding: 20px 16px;
  `,

  container: css`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    gap: 40px;
  `,
};
