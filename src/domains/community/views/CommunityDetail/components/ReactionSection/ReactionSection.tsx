import { NoticeModal } from "@/common/components/modal/NoticeModal";
import CommentIcon from "@/img/icon-chat-comment.svg";
import RedHeartIcon from "@/img/icon-chat-heart-red.svg";
import HeartIcon from "@/img/icon-chat-heart.svg";
import ReportIcon from "@/img/icon-chat-report.svg";
import { LightColor } from "@/themes/Color";
import { css } from "@emotion/react";
import { Button, Typography, TypographyProps } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

type ReactionSectionProps = {
  commentCount: number;
  likeState: LikeBoxProps;
};

export const ReactionSection = (props: ReactionSectionProps) => {
  // notice modal
  const [isNoticeOpen, setIsNoticeOpen] = useState(false);

  // notice modal functions
  const handleNoticeOpen = () => setIsNoticeOpen(true);
  const handleNoticeClose = () => setIsNoticeOpen(false);
  return (
    <div css={st.reactionContainer}>
      <LikeBox
        likeCount={props.likeState.likeCount!!}
        onLike={props.likeState.onLike}
        isLike={props.likeState.isLike}
      />
      <CommentBox>{props.commentCount}</CommentBox>
      <ReportBox onClick={handleNoticeOpen} />
      <NoticeModal
        isOpen={isNoticeOpen}
        onClose={handleNoticeClose}
        text={"준비중입니다."}
      />
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

type ReportBoxProps = {
  onClick: () => void;
};

const ReportBox = ({ onClick }: ReportBoxProps) => {
  return (
    <div css={st.box}>
      <Button
        css={st.button}
        size={"small"}
        startIcon={<Image width="16px" height="16px" src={ReportIcon} alt="" />}
        onClick={onClick}
      >
        <Typography variant="body2" lineHeight="1" color={LightColor.TextMain}>
          신고하기
        </Typography>
      </Button>
    </div>
  );
};
