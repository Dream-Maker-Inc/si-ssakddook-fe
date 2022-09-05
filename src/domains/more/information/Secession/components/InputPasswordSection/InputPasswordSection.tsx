import { LightColor } from "@/themes/Color";
import { TextField, TextFieldProps, Typography } from "@mui/material";
import { css } from "@emotion/react";

export const InputPasswordSection = (p: TextFieldProps) => {
  return (
    <div css={sx.inputPasswordSectionContainer}>
      <Typography variant="body1" color="black" mb="4px">
        비밀번호 입력
      </Typography>
      <Typography variant="body2" color={LightColor.Gray100} mb="10px">
        회원 탈퇴를 위해 현재 계정의 비밀번호를 입력해 주세요.
      </Typography>
      <TextField type="password" placeholder="****" fullWidth {...p} />
    </div>
  );
};

const sx = {
  inputPasswordSectionContainer: css`
    width: 100%;
    align-self: flex-start;
    margin-bottom: 40px;
  `,
};
