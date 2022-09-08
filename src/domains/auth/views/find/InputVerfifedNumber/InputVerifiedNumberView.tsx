import { PrevButton } from "@/common/components/button/PrevButton";
import { SubmitButton } from "@/common/components/button/SubmitButton";
import { TitleWithDesc } from "@/common/components/title/TitleWithDesc";
import { css } from "@emotion/react";

export const InputVerifiedNumberView = () => {
  return (
    <div css={sx.root}>
      <div css={sx.container}>
        <PrevButton />
        <TitleWithDesc
          title="인증 번호 입력"
          desc="발송된 인증 번호를 3분 안에 입력해 주세요."
        />
      </div>
    </div>
  );
};

const sx = {
  root: css`
    width: 100%;
    height: 100%;
    padding: 16px;
  `,
  container: css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    text-align: center;

    position: relative;
  `,
};
