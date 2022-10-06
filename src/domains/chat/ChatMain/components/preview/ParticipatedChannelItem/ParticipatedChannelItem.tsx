import { LightColor } from "@/themes/Color";
import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import { useParticipatedChannelItem } from "./useParticipatedChannelItem";
import { getDateFromNow } from "@/utils/moment/DateMoment";

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

      <div css={sx.date}>
        <Typography variant="h5" color={LightColor.Gray600}>
          {getDateFromNow(channel.data.created_at)}
        </Typography>
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

    cursor: pointer;
  `,
};
