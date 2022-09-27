import { LightColor } from "@/themes/Color";
import { css } from "@emotion/react";

import { TextField, TextFieldProps, Typography } from "@mui/material";

export const ContentSecton = (p: TextFieldProps) => {
  return (
    <div>
      <TextField
        fullWidth
        multiline
        variant="standard"
        InputProps={{ disableUnderline: true }}
        css={sx.contentField}
        {...p}
      />
      <div css={sx.notice}>
        <Typography variant="h5" color={LightColor.Gray100}>
          ※ 카테고리와 이미지, 동영상은 최초 등록 이후 변경 및 삭제가
          불가합니다.
          <br />※ 이미지와 동영상을 재등록하시려면 게시글을 삭제 후 재등록해
          주세요.
        </Typography>
      </div>
    </div>
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

  notice: css`
    width: 100%;
    padding: 16px;

    position: absolute;
    left: 0;
    bottom: 0;
  `,
};
