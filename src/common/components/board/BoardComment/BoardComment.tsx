import LocalStorage from "@/data/LocalStorage/LocalStorage";
import { LightColor } from "@/themes/Color";
import { css } from "@emotion/react";
import { IconButton, Typography } from "@mui/material";
import Image from "next/image";
import ChatCloseIcon from "@/img/icon-chat-close.svg";
import RedHeartIcon from "@/img/icon-chat-heart-red.svg";
import HeartIcon from "@/img/icon-chat-heart.svg";

type BoardCommentProps = {
  commentId: number;
  content: string;
  date: string;
  writerId: string;
  nickname: string;
  likeCount: number;
  isLike: boolean;
  onLike: () => void;
  onDelete: (e: string) => void;
};

export const BoardComment = ({
  commentId,
  content,
  date,
  writerId,
  nickname,
  likeCount,
  isLike,
  onLike,
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
            <Image width="10px" height="10px" src={ChatCloseIcon} alt="" />
          </IconButton>
        ) : (
          <div></div>
        )}
      </div>
      <div css={sx.contentWrapper}>
        <Typography variant="h4" color="black" css={sx.content}>
          {content}
        </Typography>
      </div>
      <div css={sx.wrapper}>
        <IconButton onClick={onLike}>
          {isLike ? (
            <Image width="10px" height="10px" src={RedHeartIcon} alt="" />
          ) : (
            <Image width="10px" height="10px" src={HeartIcon} alt="" />
          )}
        </IconButton>
        <Typography variant="h5" lineHeight="1" color={LightColor.Gray100}>
          {likeCount}
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
    text-align: left;
  `,
};
