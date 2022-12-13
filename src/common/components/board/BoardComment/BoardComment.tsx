import LocalStorage from "@/data/LocalStorage/LocalStorage";
import { LightColor } from "@/themes/Color";
import { css } from "@emotion/react";
import { IconButton, Typography } from "@mui/material";
import Image from "next/image";
import ChatCloseIcon from "@/img/icon-chat-close.svg";
import RedHeartIcon from "@/img/icon-chat-heart-red.svg";
import HeartIcon from "@/img/icon-chat-heart.svg";
import { CloseRounded } from "@mui/icons-material";

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

  const likedIcon = isLike ? RedHeartIcon : HeartIcon;

  return (
    <div css={sx.item}>
      <div css={sx.row}>
        <Typography variant="h4" lineHeight="1" color={LightColor.Gray100}>
          {nickname}
          {" · "}
          {date}
        </Typography>

        <div>
          {writerId == myId && (
            <IconButton size={"small"} onClick={() => onDelete(commentId + "")}>
              <CloseRounded css={sx.miniIcon} />
            </IconButton>
          )}
        </div>
      </div>
      <div css={sx.contentWrapper}>
        <Typography variant="h3" color="black" css={sx.content}>
          {content}
        </Typography>
      </div>
      <div css={sx.wrapper}>
        <IconButton onClick={onLike}>
          <Image width="12px" height="12px" src={likedIcon} alt="" />
        </IconButton>
        <Typography variant="h4" lineHeight="1" color={LightColor.Gray100}>
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
    padding: 10px 8px;
  `,
  row: css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 8px;
  `,
  contentWrapper: css`
    width: 100%;
    margin-top: 4px;
    margin-bottom: 4px;
    padding: 0 8px;
  `,
  wrapper: css`
    display: flex;
    align-items: center;
  `,
  content: css`
    text-align: left;
  `,
  miniIcon: css`
    width: 10px;
    height: auto;
    aspect-ratio: 1;
  `,
};
