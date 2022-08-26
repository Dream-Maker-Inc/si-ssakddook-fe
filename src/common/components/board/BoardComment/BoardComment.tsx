import { LightColor } from "@/themes/Color";
import { css } from "@emotion/react";
import { IconButton, Typography } from "@mui/material";
import Image from "next/image";
type BoardCommentProps = {
  content: string;
  date: string;
  nickname: string;
  like: string;
};

export const BoardComment = ({
  content,
  date,
  nickname,
  like,
}: BoardCommentProps) => {
  return (
    <div css={sx.item}>
      <div css={sx.row}>
        <Typography variant="h5" lineHeight="1" color={LightColor.Gray100}>
          {nickname}
          {" · "}
          {date}
        </Typography>
        <IconButton>
          <Image
            width="10px"
            height="10px"
            src="/img/icon-chat-close.svg"
            alt=""
          />
        </IconButton>
      </div>
      <div css={sx.contentWrapper}>
        <p css={sx.content}>{content}</p>
      </div>
      <div css={sx.wrapper}>
        <Image
          width="10px"
          height="10px"
          src="/img/icon-chat-heart.svg"
          alt=""
        />
        <Typography fontSize="8px" lineHeight="1" color={LightColor.Gray100}>
          {like}
        </Typography>
      </div>
    </div>
  );
};

const sx = {
  item: css`
    width: 100%;

    border-bottom: 1px solid ${LightColor.Gray500};

    padding: 10px 16px;
  `,
  row: css`
    width: 100%;
    display: flex;
    justify-content: space-between;
  `,

  wrapper: css`
    display: flex;
    align-items: center;
    gap: 2px;
  `,
  contentWrapper: css`
    width: 100%;
    margin-top: 4px;
    margin-bottom: 10px;
  `,
  content: css`
    font-size: 10px;
    line-height: 16.65px;
    color: black;

    text-align: left;
  `,
};
