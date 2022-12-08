import { ChatModal } from "@/common/components/modal/ChatModal/ChatModal";
import { LightColor } from "@/themes/Color";
import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import "moment/locale/ko";
import { usePublicChannelItem } from "./usePublicChannelItem";
import Image from "next/image";
import LogoImage from "@/img/logo/main.svg";

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
            <Typography variant="body1" color="black" lineHeight={"16px"}>
              {channel.data.name}
            </Typography>
            <Typography
              variant="body2"
              color={LightColor.Gray100}
              lineHeight={"16px"}
            >
              {channel.data.desc}
            </Typography>
            <Typography
              variant="h5"
              color={LightColor.Gray100}
              lineHeight={"13px"}
            >
              {channel.data.created_by.name}
              {" · "}
              {channelState.channelCategory}
            </Typography>
          </div>

          {!channel.data.image ? (
            <SampleImage />
          ) : (
            <div css={sx.chatImageWrapper}>
              <Image
                layout="fill"
                src={channel.data.image}
                alt="profile-image"
                css={sx.chatImage}
              />
            </div>
          )}
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
    height: 85px;
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
    gap: 4px;
  `,
  wrapper: css`
    display: flex;
  `,
  join: css`
    width: 100%;
    cursor: pointer;
  `,
  chatImageWrapper: css`
    position: relative;
    width: 53px;
    height: 53px;
    border-radius: 8px;
  `,
  chatImage: css`
    border-radius: 8px;
  `,

  samplgeImageWrapper: css`
    width: 53px;
    height: 53px;
    border-radius: 8px;
    border: 1px solid ${LightColor.Gray500};
    padding: 8px;
  `,
  sampleImage: css`
    position: relative;
    width: 100%;
    height: 100%;
  `,
};

const SampleImage = () => {
  return (
    <div css={sx.samplgeImageWrapper}>
      <div css={sx.sampleImage}>
        <Image layout="fill" src={LogoImage} alt="profile-image" />
      </div>
    </div>
  );
};
