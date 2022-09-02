import { css } from "@emotion/react";
import { AppbarLayout } from "@/common/components/layout/AppbarLayout";
import { WritingTab } from "@/common/components/tab/WritingTab";
import { PasswordBox } from "./components/PasswordBox/PasswordBox";
import { useChangePasswordView } from "./useChangePasswordView";

export const ChangePasswordView = () => {
  const { currPwStae, newPwStae, confirmPwState } = useChangePasswordView();
  return (
    <AppbarLayout>
      <WritingTab title="비밀번호 변경" />
      <div css={sx.root}>
        <div css={sx.container}>
          <PasswordBox
            titleProps={{
              title: "기존 비밀번호",
              desc: "기존 비밀번호를 입력해 주세요.",
            }}
            fieldProps={{
              value: currPwStae.value,
              onChange: currPwStae.onChange,
            }}
          />
          <PasswordBox
            titleProps={{
              title: "변경할 비밀번호",
              desc: "변경할 비밀번호를 입력해 주세요.",
            }}
            fieldProps={{
              value: newPwStae.value,
              onChange: newPwStae.onChange,
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
