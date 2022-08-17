import { PrevButton } from "@/common/components/button/PrevButton";
import { SubmitButton } from "@/common/components/button/SubmitButton";
import { TitleWithDesc } from "@/common/components/title/TitleWithDesc";
import { css } from "@emotion/react";
import { TextField } from "@mui/material";

export const InputEmailView = () => {
  return (
    <div css={sx.root}>
      <div css={sx.container}>
        <PrevButton />
        <SubmitButton />
        <TitleWithDesc
          title="아이디 (이메일) 입력"
          desc="회원가입 시 등록한 아이디 (이메일) 을 입력해 주세요."
        />
        <TextField fullWidth placeholder="account@ssakduk.com" />
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
