import { LightColor } from "@/themes/Color";
import { css } from "@emotion/react";
import { IconButton, TextField } from "@mui/material";
import Image from "next/image";
import SendIcon from "@/img/icon-send.svg";
import ActivatedSendIcon from "@/img/icon-send-activate.svg";

type CommentWriteProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCommentSubmit: () => void;
};

export const CommentWrite = ({
  value,
  onChange,
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
          endAdornment:
            value !== "" ? (
              <IconButton onClick={onCommentSubmit}>
                <Image
                  width="24px"
                  height="24px"
                  src={ActivatedSendIcon}
                  alt=""
                />
              </IconButton>
            ) : (
              <Image width="24px" height="24px" src={SendIcon} alt="" />
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
    font-size: 18px;

    input {
      font-size: 14px;

      ::placeholder {
        font-size: 14px;
      }
    }
  `,
};
