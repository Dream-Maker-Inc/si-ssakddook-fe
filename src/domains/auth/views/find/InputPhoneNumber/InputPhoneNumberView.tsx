import { PrevButton } from "@/common/components/button/PrevButton";
import { SubmitButton } from "@/common/components/button/SubmitButton";
import { TitleWithDesc } from "@/common/components/title/TitleWithDesc";
import { css } from "@emotion/react";
import { TextField } from "@mui/material";
import { useInputPhoneNumberView } from "./useInputPhoneNumberView";

export const InputPhoneNumberView = () => {
  const { phoneState } = useInputPhoneNumberView();
  return (
    <div css={sx.root}>
      <div css={sx.container}>
        <PrevButton />
        <SubmitButton />
        <TitleWithDesc
          title="휴대폰 번호 입력"
          desc="회원가입 시 등록한 휴대폰 번호로 인증해 주세요."
        />
        <TextField
          fullWidth
          placeholder="010-1234-5678"
          value={phoneState.value}
          onChange={phoneState.onChange}
          inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
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
