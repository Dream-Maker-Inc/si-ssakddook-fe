import { LightColor } from "@/themes/Color";
import { css } from "@emotion/react";
import { Button, IconButton, Typography, TypographyProps } from "@mui/material";
import Image from "next/image";
import CommentIcon from "@/img/icon-chat-comment.svg";
import ReportIcon from "@/img/icon-chat-report.svg";
import HeartIcon from "@/img/icon-chat-heart.svg";
import RedHeartIcon from "@/img/icon-chat-heart-red.svg";

type ReactionSectionProps = {
  commentCount: number;
  likeState: LikeBoxProps;
};

export const ReactionSection = (props: ReactionSectionProps) => {
  return (
    <div css={st.reactionContainer}>
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

const st = {
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

  button: css`
    width: fit-content;
    height: fit-content;
    min-width: fit-content;
    min-height: fit-content;
    padding: 4px 10px;
    border-radius: 4px;
  `,
};

type LikeBoxProps = {
  likeCount: number;
  onLike: () => void;
  isLike: boolean;
};

const LikeBox = ({ likeCount, onLike, isLike }: LikeBoxProps) => {
  const icon = isLike ? (
    <Image width="16px" height="16px" src={RedHeartIcon} alt="" />
  ) : (
    <Image width="16px" height="16px" src={HeartIcon} alt="" />
  );

  return (
    <div css={st.box}>
      <Button css={st.button} size={"small"} startIcon={icon} onClick={onLike}>
        <Typography variant="body2" lineHeight="1" color={LightColor.TextMain}>
          {likeCount}
        </Typography>
      </Button>
    </div>
  );
};

const CommentBox = (p: TypographyProps) => {
  return (
    <div css={st.box}>
      <Button
        css={st.button}
        size={"small"}
        startIcon={
          <Image width="16px" height="16px" src={CommentIcon} alt="" />
        }
        disableRipple
        disableFocusRipple
        disableTouchRipple
      >
        <Typography
          variant="body2"
          lineHeight="1"
          color={LightColor.TextMain}
          {...p}
        />
      </Button>
    </div>
  );
};

const ReportBox = () => {
  return (
    <div css={st.box}>
      <Button
        css={st.button}
        size={"small"}
        startIcon={<Image width="16px" height="16px" src={ReportIcon} alt="" />}
        onClick={() => alert("준비중입니다.")}
      >
        <Typography variant="body2" lineHeight="1" color={LightColor.TextMain}>
          신고하기
        </Typography>
      </Button>
    </div>
  );
};
