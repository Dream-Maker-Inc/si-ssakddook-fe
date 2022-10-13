import { PrevButton } from "@/common/components/button/PrevButton";
import { SubmitButton } from "@/common/components/button/SubmitButton";
import { TitleWithDesc } from "@/common/components/title/TitleWithDesc";
import { css } from "@emotion/react";

export const FindPasswordView = () => {
  return (
    <div css={sx.root}>
      <div css={sx.container}>
        <div css={sx.header}>
          <PrevButton />
          <SubmitButton />
        </div>
        <TitleWithDesc
          title="본인 인증"
          desc="비밀번호 찾기를 위해 본인 인증을 진행해 주세요."
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
  header: css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  `,
};
