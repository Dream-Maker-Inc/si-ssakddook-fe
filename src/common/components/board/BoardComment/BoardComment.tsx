import LocalStorage from "@/data/LocalStorage/LocalStorage";
import { LightColor } from "@/themes/Color";
import { css } from "@emotion/react";
import { IconButton, Typography } from "@mui/material";
import Image from "next/image";
type BoardCommentProps = {
  commentId: number;
  content: string;
  date: string;
  writerId: string;
  nickname: string;
  like: number;
  onDelete: (e: string) => void;
};

export const BoardComment = ({
  commentId,
  content,
  date,
  writerId,
  nickname,
  like,
  onDelete,
}: BoardCommentProps) => {
  const myId = LocalStorage.getItem("id");
  return (
    <div css={sx.item}>
      <div css={sx.row}>
        <Typography variant="h5" lineHeight="1" color={LightColor.Gray100}>
          {nickname}
          {" · "}
          {date}
        </Typography>
        {writerId == myId ? (
          <IconButton onClick={() => onDelete(commentId + "")}>
            <Image
              width="10px"
              height="10px"
              src="/img/icon-chat-close.svg"
              alt=""
            />
          </IconButton>
        ) : (
          <div></div>
        )}
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
