import { ChatAtom } from "@/recoil/Navigation/Navigation.atom";
import { css } from "@emotion/react";
import { IconButton, Typography } from "@mui/material";
import Image from "next/image";
import { useRecoilState } from "recoil";

export const ChatRoomTab = () => {
  const [isChannelListVisible, setIsChannelListVisible] =
    useRecoilState(ChatAtom);

  const handleBackToChannelList = () => {
    setIsChannelListVisible(true);
  };
  return (
    <div css={sx.tabContainer}>
      <IconButton onClick={handleBackToChannelList}>
        <Image
          width="24px"
          height="24px"
          src="/img/arrowIcon/prev-icon.svg"
          alt="logo"
        />
      </IconButton>
      <Typography variant="h2" lineHeight="1" ml="12px">
        채팅방
      </Typography>
    </div>
  );
};

const sx = {
  tabContainer: css`
    position: absolute;
    width: 100%;
    height: 50px;
    left: 0px;
    top: 0px;

    display: flex;
    align-items: center;

    padding: 0 16px;

    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
  `,
};
