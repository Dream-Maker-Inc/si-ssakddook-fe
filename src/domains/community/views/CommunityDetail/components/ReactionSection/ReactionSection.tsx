import { LightColor } from "@/themes/Color";
import { css } from "@emotion/react";
import { IconButton, Typography, TypographyProps } from "@mui/material";
import Image from "next/image";

type ReactionSectionProps = {
  commentCount: number;
  likeState: LikeBoxProps;
};

export const ReactionSection = (props: ReactionSectionProps) => {
  return (
    <div css={sx.reactionContainer}>
      <LikeBox
        likeCount={props.likeState.likeCount!!}
        onLike={props.likeState.onLike}
        isLike={props.likeState.isLike}
      />
      <CommentBox>{props.commentCount}</CommentBox>
      <ReportBox />
    </div>
  );
};

const sx = {
  reactionContainer: css`
    width: 100%;
    height: 30px;
    display: flex;

    border-top: 1px solid ${LightColor.Gray500};
    border-bottom: 1px solid ${LightColor.Gray500};
  `,

  box: css`
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
  `,
};

type LikeBoxProps = {
  likeCount: number;
  onLike: () => void;
  isLike: boolean;
};

const LikeBox = ({ likeCount, onLike, isLike }: LikeBoxProps) => {
  return (
    <div css={sx.box}>
      <IconButton onClick={onLike}>
        {isLike ? (
          <Image
            width="16px"
            height="16px"
            src="/img/icon-chat-heart-red.svg"
            alt=""
          />
        ) : (
          <Image
            width="16px"
            height="16px"
            src="/img/icon-chat-heart.svg"
            alt=""
          />
        )}

        <Typography
          variant="body2"
          lineHeight="1"
          color={LightColor.TextMain}
          ml="10px"
        >
          {likeCount}
        </Typography>
      </IconButton>
    </div>
  );
};

const CommentBox = (p: TypographyProps) => {
  return (
    <div css={sx.box}>
      <IconButton>
        <Image
          width="16px"
          height="16px"
          src="/img/icon-chat-comment.svg"
          alt=""
        />
        <Typography
          variant="body2"
          lineHeight="1"
          color={LightColor.TextMain}
          ml="10px"
          {...p}
        />
      </IconButton>
    </div>
  );
};

const ReportBox = () => {
  return (
    <div css={sx.box}>
      <IconButton>
        <Image
          width="16px"
          height="16px"
          src="/img/icon-chat-report.svg"
          alt=""
        />

        <Typography
          variant="body2"
          lineHeight="1"
          color={LightColor.TextMain}
          ml="10px"
        >
          신고하기
        </Typography>
      </IconButton>
    </div>
  );
};
