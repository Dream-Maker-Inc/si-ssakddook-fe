import { generateRandomString } from "@/utils/random/generateRandomString";
import { css } from "@emotion/react";
import { IconButton, Typography } from "@mui/material";
import Image from "next/image";
import PrevIconImg from "public/img/arrowIcon/prev-icon.svg";
import LogoImg from "public/img/main/logo.svg";
import SubmitIconImg from "public/img/icon-submit.svg";
import AddCHatIconImg from "public/img/tab/icon-add-chat.svg";
import { useChatContext } from "stream-chat-react";

type ChatMainTabProps = {
  name: string;
  desc: string;
  onClick: () => void;
  onBack: () => void;
  onChangeTabState: () => void;
  isCreateView: boolean;
};

export const ChatMainTab = ({
  name,
  desc,
  onClick,
  onBack,
  onChangeTabState,
  isCreateView,
}: ChatMainTabProps) => {
  const { client, setActiveChannel } = useChatContext();

  const handleCreateChat = async () => {
    const channelId = generateRandomString(10);
    const channel = client.channel("messaging", channelId, {
      name,
      desc,
      members: [client.user!!.id],
    });

    await channel.create();
    await channel.watch();
    await setActiveChannel(channel);
    await onChangeTabState();
  };

  return (
    <div css={sx.tabContainer}>
      <div css={sx.wrapper}>
        {isCreateView ? (
          <IconButton onClick={onBack}>
            <Image width="24px" height="24px" src={PrevIconImg} alt="logo" />
          </IconButton>
        ) : (
          <IconButton>
            <Image width="24px" height="16px" src={LogoImg} alt="logo" />
          </IconButton>
        )}

        <Typography variant="h2" lineHeight="1" ml="12px">
          {isCreateView ? "톡방 개설하기" : "톡"}
        </Typography>
      </div>
      <div>
        {isCreateView ? (
          <IconButton onClick={handleCreateChat}>
            <Image width="24px" height="24px" src={SubmitIconImg} alt="" />
          </IconButton>
        ) : (
          <IconButton onClick={onClick}>
            <Image width="18px" height="18px" src={AddCHatIconImg} alt="" />
          </IconButton>
        )}
      </div>
    </div>
  );
};

const sx = {
  tabContainer: css`
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