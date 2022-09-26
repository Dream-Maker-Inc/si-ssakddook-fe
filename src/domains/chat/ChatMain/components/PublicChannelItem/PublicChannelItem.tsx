import { ChatModal } from "@/common/components/modal/ChatModal/ChatModal";
import { LightColor } from "@/themes/Color";
import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import Image from "next/image";
import { usePublicChannelItem } from "./usePublicChannelItem";

type PublicChannelItemProps = {
  channel: any;
};
export const PublicChannelItem = ({ channel }: PublicChannelItemProps) => {
  const { modalState, channelState } = usePublicChannelItem(channel);
  return (
    <div css={sx.root}>
      <Typography variant="body1" color="black">
        {channel.data.name}
      </Typography>
      {channelState.channelUserid == channelState.clientUserId || (
        <div css={sx.join} onClick={modalState.onOpen}>
          <Image
            width="24px"
            height="24px"
            src="/img/arrowIcon/icon-arrow-right.svg"
            alt=""
          />
        </div>
      )}
      <ChatModal
        isOpen={modalState.isOpen}
        onClose={modalState.onClose}
        onContinue={modalState.onContinue}
      />
    </div>
  );
};

const sx = {
  root: css`
    width: 100%;
    height: 71px;
    border-bottom: 1px solid ${LightColor.Gray500};
    padding-left: 16px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    position: relative;
  `,

  join: css`
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);

    cursor: pointer;
  `,
};