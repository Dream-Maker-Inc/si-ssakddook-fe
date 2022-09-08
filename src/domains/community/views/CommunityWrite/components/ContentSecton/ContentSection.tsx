import { css } from "@emotion/react";

import { TextField, TextFieldProps } from "@mui/material";

export const ContentSecton = (p: TextFieldProps) => {
  return (
    <TextField
      fullWidth
      multiline
      variant="standard"
      placeholder={
        "카테고리에 맞지 않는 글로 판단되어 다른 사용자로부터 일정 수 이상의 신고를 받는 경우, 관리자 판단 하에 글이 삭제 또는 숨김 처리될 수 있습니다."
      }
      InputProps={{ disableUnderline: true }}
      css={sx.contentField}
      {...p}
    />
  );
};

const sx = {
  contentField: css`
    width: 100%;
    min-height: 400px;
    padding: 16px;
    overflow-y: scroll;
    ::-webkit-scrollbar {
      display: none;
    }
  `,
};
