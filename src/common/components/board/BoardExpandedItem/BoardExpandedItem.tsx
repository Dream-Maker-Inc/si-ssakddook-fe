import { RoutePath } from "@/constants/Path";
import { LightColor } from "@/themes/Color";
import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import HeartIcon from "@/img/icon-chat-heart.svg";
import CommentIcon from "@/img/icon-chat-comment.svg";

type BoardExpandedItemProps = {
  postId: string;
  title: string;
  date: string;
  nickname: string;
  category: string;
  like: string;
  comments: string;
};

export const BoardExpandedItem = ({
  postId,
  title,
  date,
  nickname,
  category,
  like,
  comments,
}: BoardExpandedItemProps) => {
  const router = useRouter();
  const handleBoxClick = () => {
    router.push({
      pathname: RoutePath.CommunityDetail,
      query: { postId: postId },
    });
  };
  return (
    <div css={sx.item} onClick={handleBoxClick}>
      <div css={sx.rowWrapper}>
        <Typography variant="body1" color="black">
          {title}
        </Typography>
        <Typography variant="h5" lineHeight="1" color={LightColor.Gray100}>
          {date}
        </Typography>
      </div>
      <div css={sx.rowWrapper}>
        <Typography variant="h5" lineHeight="1" color={LightColor.Gray100}>
          {nickname}
          {" · "}
          {category}
        </Typography>

        <div css={sx.chatWrapper}>
          <div css={sx.wrapper}>
            <Image width="10px" height="10px" src={HeartIcon} alt="" />
            <Typography variant="h5" lineHeight="1" color={LightColor.Gray100}>
              {like}
            </Typography>
          </div>
          <div css={sx.wrapper}>
            <Image width="10px" height="10px" src={CommentIcon} alt="" />
            <Typography variant="h5" lineHeight="1" color={LightColor.Gray100}>
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
    gap: 7px;

    border-bottom: 1px solid ${LightColor.Gray500};

    padding: 0 16px;

    cursor: pointer;
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
