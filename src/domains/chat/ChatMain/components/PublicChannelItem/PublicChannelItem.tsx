import { ChatModal } from "@/common/components/modal/ChatModal/ChatModal";
import { LightColor } from "@/themes/Color";
import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

type PublicChannelItemProps = {
  channel: any;
};
export const PublicChannelItem = ({ channel }: PublicChannelItemProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onModalOpen = () => {
    setIsModalOpen(true);
  };

  const onModalClose = () => {
    setIsModalOpen(false);
  };

  const onChatParticipate = () => {
    alert(1);
  };
  return (
    <div css={sx.root} onClick={onModalOpen}>
      <Typography variant="body1" color="black">
        {channel.data.name}
      </Typography>

      <div css={sx.arrowIcon}>
        <Image
          width="24px"
          height="24px"
          src="/img/arrowIcon/icon-arrow-right.svg"
          alt=""
        />
      </div>
      <ChatModal
        isOpen={isModalOpen}
        onClose={onModalClose}
        onContinue={onChatParticipate}
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
    cursor: pointer; ;
  `,

  arrowIcon: css`
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
  `,
};
