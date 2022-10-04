import { LightColor } from "@/themes/Color";
import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import Image from "next/image";
import { useParticipatedChannelItem } from "./useParticipatedChannelItem";
import ArrowRightIcon from "@/img/arrowIcon/icon-arrow-right.svg";

type ParticipatedChannelItemProps = {
  channel: any;
};
export const ParticipatedChannelItem = ({
  channel,
}: ParticipatedChannelItemProps) => {
  const { onOpen } = useParticipatedChannelItem(channel);

  const renderMessageText = () => {
    const lastMessageText =
      channel.state.messages[channel.state.messages.length - 1];

    const text = lastMessageText == null ? "" : lastMessageText.text;
    return text.length < 60 ? text : `${text.slice(0, 70)}...`;
  };

  return (
    <div css={sx.root} onClick={onOpen}>
      <Typography variant="body1" color="black">
        {channel.data.name}
      </Typography>
      <p className="channel-preview__content-message">{renderMessageText()}</p>

      <div css={sx.join}>
        <Image width="24px" height="24px" src={ArrowRightIcon} alt="" />
      </div>
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
