import { LightColor } from "@/themes/Color";
import { css } from "@emotion/react";
import { IconButton, Typography, TypographyProps } from "@mui/material";
import Image from "next/image";

export const ReactionSection = () => {
  return (
    <div css={sx.reactionContainer}>
      <LikeBox>1,300</LikeBox>
      <CommentBox>1,300</CommentBox>
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

const LikeBox = (p: TypographyProps) => {
  return (
    <div css={sx.box}>
      <IconButton>
        <Image
          width="16px"
          height="16px"
          src="/img/icon-chat-heart.svg"
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
