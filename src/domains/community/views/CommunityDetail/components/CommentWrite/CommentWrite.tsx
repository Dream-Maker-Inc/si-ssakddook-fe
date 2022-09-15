import { LightColor } from "@/themes/Color";
import { css } from "@emotion/react";
import { IconButton, TextField } from "@mui/material";
import Image from "next/image";

type CommentWriteProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  postId: string;
  onCommentSubmit: () => void;
};

export const CommentWrite = ({
  value,
  onChange,
  postId,
  onCommentSubmit,
}: CommentWriteProps) => {
  return (
    <div css={sx.commentWriteContainer}>
      <TextField
        value={value}
        onChange={onChange}
        fullWidth
        placeholder={"댓글을 입력하세요."}
        variant="standard"
        css={sx.searchField}
        InputProps={{
          disableUnderline: true,
          endAdornment: (
            <IconButton onClick={onCommentSubmit}>
              <Image
                width="24px"
                height="24px"
                src="/img/icon-send.svg"
                alt=""
              />
            </IconButton>
          ),
        }}
      />
    </div>
  );
};

const sx = {
  commentWriteContainer: css`
    width: 100%;
    height: 40px;
    border-top: 1px solid ${LightColor.Gray500};

    padding: 0 16px;

    position: absolute;
    bottom: 0;
    left: 0;

    display: flex;
    align-items: center;
  `,

  searchField: css`
    font-size: 16px;

    input {
      font-size: 12px;

      ::placeholder {
        font-size: 12px;
      }
    }
  `,
};
