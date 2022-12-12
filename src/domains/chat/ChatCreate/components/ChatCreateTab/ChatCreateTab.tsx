import { css } from "@emotion/react";
import { IconButton, Typography } from "@mui/material";
import Image from "next/image";
import PrevIconImg from "@/img/arrowIcon/prev-icon.svg";
import IconSubmit from "@/img/icon-submit.svg";
import IconDisabledSubmit from "@/img/icon-submit-disabled.svg";

type ChatMainTabProps = {
  onBack: () => void;
  onSubmit: () => void;
  disabled: boolean;
};

export const ChatCreateTab = ({
  onBack,
  onSubmit,
  disabled,
}: ChatMainTabProps) => {
  return (
    <div css={sx.root}>
      <div css={sx.wrapper}>
        <IconButton onClick={onBack}>
          <Image width="24px" height="24px" src={PrevIconImg} alt="logo" />
        </IconButton>

        <Typography variant="h2" lineHeight="1" ml="4px">
          톡방 개설하기
        </Typography>
      </div>
      <div>
        {disabled ? (
          <IconButton>
            <Image width="24px" height="24px" src={IconDisabledSubmit} alt="" />
          </IconButton>
        ) : (
          <IconButton onClick={onSubmit}>
            <Image width="24px" height="24px" src={IconSubmit} alt="" />
          </IconButton>
        )}
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

    padding: 8px;

    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
  `,

  wrapper: css`
    display: flex;
    align-items: center;
  `,
};
