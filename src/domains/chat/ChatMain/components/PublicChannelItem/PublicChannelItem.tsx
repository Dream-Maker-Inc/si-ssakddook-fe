import { ChatModal } from "@/common/components/modal/ChatModal/ChatModal";
import { ChatAtom } from "@/recoil/Navigation/Navigation.atom";
import { LightColor } from "@/themes/Color";
import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { useChatContext } from "stream-chat-react";

type PublicChannelItemProps = {
  channel: any;
};
export const PublicChannelItem = ({ channel }: PublicChannelItemProps) => {
  const { client, setActiveChannel } = useChatContext();

  const [modalOpen, setModalOpen] = useState(false);
  const setIsChannelListVisible = useSetRecoilState(ChatAtom);

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);
  const handleChatJoin = async () => {
    setModalOpen(false);

    await channel.addMembers([client.user?.id]);
    await channel.watch();
    await setActiveChannel(channel);

    await setIsChannelListVisible(false);
  };

  return (
    <div css={sx.root}>
      <Typography variant="body1" color="black">
        {channel.data.name}
      </Typography>
      {channel.data.created_by.id == client.user?.id || (
        <div css={sx.joinText} onClick={handleModalOpen}>
          <Image
            width="24px"
            height="24px"
            src="/img/arrowIcon/icon-arrow-right.svg"
            alt=""
          />
        </div>
      )}

      <ChatModal
        isOpen={modalOpen}
        onClose={handleModalClose}
        onContinue={handleChatJoin}
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

  joinText: css`
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
  `,
};
