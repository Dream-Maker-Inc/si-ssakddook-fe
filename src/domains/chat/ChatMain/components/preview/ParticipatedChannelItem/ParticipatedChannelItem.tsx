import { LightColor } from "@/themes/Color";
import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import { useParticipatedChannelItem } from "./useParticipatedChannelItem";

type ParticipatedChannelItemProps = {
  channel: any;
};
export const ParticipatedChannelItem = ({
  channel,
}: ParticipatedChannelItemProps) => {
  const { onOpen, lastMessage, channelState } =
    useParticipatedChannelItem(channel);

  return (
    <div css={sx.root} onClick={onOpen}>
      <Typography variant="h5" color={LightColor.PrimaryDark}>
        #{channelState.channelCategory}
      </Typography>
      <Typography variant="body1" color="black">
        {channelState.title}
      </Typography>

      <p className="channel-preview__content-message">{lastMessage()}</p>
      <div css={sx.date}>
        <Typography variant="h5" color={LightColor.Gray600} textAlign="right">
          {channelState.lastDate}
        </Typography>
      </div>
    </div>
  );
};

const sx = {
  root: css`
    width: 100%;
    height: 85px;
    border-bottom: 1px solid ${LightColor.Gray500};
    padding-left: 16px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    position: relative;
    gap: 4px;

    cursor: pointer;

    &:hover {
      background-color: ${LightColor.Gray500};
    }
  `,

  date: css`
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
  `,
};
