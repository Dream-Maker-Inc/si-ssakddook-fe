import { css } from "@emotion/react";
import { IconButton, Typography } from "@mui/material";
import Image from "next/image";
import PrevIconImg from "@/img/arrowIcon/prev-icon.svg";
import SubmitIconImg from "@/img/icon-submit.svg";

type ChatMainTabProps = {
  onBack: () => void;
  onSubmit: () => void;
};

export const ChatCreateTab = ({ onBack, onSubmit }: ChatMainTabProps) => {
  return (
    <div css={sx.root}>
      <div css={sx.wrapper}>
        <IconButton onClick={onBack}>
          <Image width="24px" height="24px" src={PrevIconImg} alt="logo" />
        </IconButton>

        <Typography variant="h2" lineHeight="1" ml="12px">
          톡방 개설하기
        </Typography>
      </div>
      <div>
        <IconButton onClick={onSubmit}>
          <Image width="24px" height="24px" src={SubmitIconImg} alt="" />
        </IconButton>
      </div>
    </div>
  );
};

const sx = {
  root: css`
    width: 100%;
    height: 50px;
    position: absolute;
    left: 0px;
    top: 0px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 16px;

    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
  `,

  wrapper: css`
    display: flex;
    align-items: center;
  `,
};
