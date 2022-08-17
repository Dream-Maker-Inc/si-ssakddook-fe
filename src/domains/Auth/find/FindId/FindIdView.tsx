import { PrevButton } from "@/common/components/button/PrevButton";
import { SubmitButton } from "@/common/components/button/SubmitButton";
import { TitleWithDesc } from "@/common/components/title/TitleWithDesc";
import { css } from "@emotion/react";
import { TextField } from "@mui/material";

export const FindIdView = () => {
  return (
    <div css={sx.root}>
      <div css={sx.container}>
        <PrevButton />
        <SubmitButton />
        <TitleWithDesc
          title="본인 인증"
          desc="아이디 (이메일) 찾기를 위해 본인 인증을 진행해 주세요."
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
