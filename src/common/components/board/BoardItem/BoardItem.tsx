import { LightColor } from "@/themes/Color";
import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import Image from "next/image";
type BoardItemProps = {
  title: string;
  date: string;
  nickname: string;
  category: string;
  like: string;
  comments: string;
};

export const BoardItem = ({
  title,
  date,
  nickname,
  category,
  like,
  comments,
}: BoardItemProps) => {
  return (
    <div css={sx.item}>
      <div css={sx.rowWrapper}>
        <Typography variant="body2" color="black">
          {title}
        </Typography>
        <Typography fontSize="8px" color={LightColor.Gray100}>
          {date}일전
        </Typography>
      </div>
      <div css={sx.rowWrapper}>
        <Typography fontSize="8px" color={LightColor.Gray100}>
          {nickname}
          {" · "}
          {category}
        </Typography>

        <div css={sx.chatWrapper}>
          <div css={sx.wrapper}>
            <Image
              width="10px"
              height="10px"
              src="/img/icon-chat-heart.svg"
              alt=""
            />
            <Typography fontSize="8px" color={LightColor.Gray100}>
              {like}
            </Typography>
          </div>
          <div css={sx.wrapper}>
            <Image
              width="10px"
              height="10px"
              src="/img/icon-chat-comment.svg"
              alt=""
            />
            <Typography fontSize="8px" color={LightColor.Gray100}>
              {comments}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

const sx = {
  item: css`
    width: 100%;
    height: 52px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    border-bottom: 1px solid ${LightColor.Gray500};
  `,
  rowWrapper: css`
    width: 100%;
    display: flex;
    justify-content: space-between;
  `,

  chatWrapper: css`
    display: flex;
    gap: 10px;
  `,
  wrapper: css`
    display: flex;
    align-items: center;
    gap: 2px;
  `,
};