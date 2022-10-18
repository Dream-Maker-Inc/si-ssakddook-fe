import { ChatModal } from "@/common/components/modal/ChatModal/ChatModal";
import { LightColor } from "@/themes/Color";
import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import "moment/locale/ko";
import { usePublicChannelItem } from "./usePublicChannelItem";
import { getTimeFromNow } from "@/utils/moment/DateMoment";

type PublicChannelItemProps = {
  channel: any;
};
export const PublicChannelItem = ({ channel }: PublicChannelItemProps) => {
  const { modalState, channelState } = usePublicChannelItem(channel);
  return (
    <div css={sx.join}>
      {channelState.isJoined || (
        <div css={sx.root} onClick={modalState.onOpen}>
          <div css={sx.container}>
            <Typography variant="body1" color="black">
              {channel.data.name}
            </Typography>
            <Typography variant="body2" color={LightColor.Gray100}>
              {channel.data.desc}
            </Typography>
          </div>
          <Typography variant="h5" color={LightColor.Gray600}>
            {getTimeFromNow(channel.data.created_at)}
          </Typography>
        </div>
      )}
      <ChatModal
        isOpen={modalState.isOpen}
        title="채팅방에 참여하시겠습니까?"
        continueText="참여하기"
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
    padding: 0 16px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    &:hover {
      background-color: ${LightColor.Gray500};
    }
  `,
  container: css`
    display: flex;
    flex-direction: column;
  `,

  join: css`
    width: 100%;
    cursor: pointer;
  `,
};
