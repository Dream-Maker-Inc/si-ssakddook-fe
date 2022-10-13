import { RoutePath } from "@/constants/Path";
import { LightColor } from "@/themes/Color";
import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import HeartIcon from "@/img/icon-chat-heart.svg";
import CommentIcon from "@/img/icon-chat-comment.svg";
type BoardItemProps = {
  postId: number;
  title: string;
  date: string;
  nicknameOrTitle: string;
  category?: string;
  like?: string;
  comments?: string;
  isInMyArticleList?: boolean;
  isPost?: boolean;
};

export const BoardItem = ({
  postId,
  title,
  date,
  nicknameOrTitle,
  category,
  like,
  comments,
  isInMyArticleList = false,
  isPost = true,
}: BoardItemProps) => {
  const router = useRouter();
  const handleBoxClick = () => {
    router.push({
      pathname: RoutePath.CommunityDetail,
      query: { postId: postId },
    });
  };
  return (
    <div css={sx.item(isInMyArticleList)} onClick={handleBoxClick}>
      <div css={sx.rowWrapper}>
        <Typography variant="body1" color="black">
          {title}
        </Typography>
        <Typography variant="h5" color={LightColor.Gray100}>
          {date.slice(0, 10)}
        </Typography>
      </div>
      <div css={sx.rowWrapper}>
        <Typography
          variant="h5"
          color={LightColor.Gray100}
          css={sx.nicknameOrTitle}
        >
          {nicknameOrTitle}
          {category && " · "}
          {category}
        </Typography>
        {isPost && (
          <div css={sx.chatWrapper}>
            <div css={sx.wrapper}>
              <Image width="10px" height="10px" src={HeartIcon} alt="" />
              <Typography variant="h5" color={LightColor.Gray100}>
                {like}
              </Typography>
            </div>
            <div css={sx.wrapper}>
              <Image width="10px" height="10px" src={CommentIcon} alt="" />
              <Typography variant="h5" color={LightColor.Gray100}>
                {comments}
              </Typography>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const sx = {
  item: (isInMyArticleList: boolean) => css`
    width: 100%;
    height: 52px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    border-bottom: 1px solid ${LightColor.Gray500};
    padding: ${isInMyArticleList ? "10px 16px" : "0px"};

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

  nicknameOrTitle: css`
    width: 90%;
    display: inline-block;
    white-space: nowrap;

    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  `,
};
