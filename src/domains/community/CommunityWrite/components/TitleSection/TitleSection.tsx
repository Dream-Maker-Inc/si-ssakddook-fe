import { css } from "@emotion/react";
import { LightColor } from "@/themes/Color";
import { TextField, TextFieldProps } from "@mui/material";

export const TitleSection = (p: TextFieldProps) => {
  return (
    <TextField
      fullWidth
      variant="standard"
      placeholder={"제목을 입력해 주세요. (최대 30자)"}
      InputProps={{ disableUnderline: true }}
      css={sx.titleField}
      {...p}
    />
  );
};

const sx = {
  titleField: css`
    width: 100%;
    height: 40px;
    padding: 0 16px;
    border-bottom: 1px solid ${LightColor.Gray500};
  `,
};
