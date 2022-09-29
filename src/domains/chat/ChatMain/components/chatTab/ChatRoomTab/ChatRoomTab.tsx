import { ChatModal } from "@/common/components/modal/ChatModal/ChatModal";
import { css } from "@emotion/react";
import { IconButton, Typography } from "@mui/material";
import Image from "next/image";
import { useChatTab } from "./useChatTab";
import PrevIconImg from "public/img/arrowIcon/prev-icon.svg";
import LogoutImg from "public/img/icon-logout.svg";

export const ChatRoomTab = () => {
  const { tabState, modalState } = useChatTab();

  return (
    <div css={sx.tabContainer}>
      <div css={sx.tab}>
        <IconButton onClick={tabState.onPrev}>
          <Image width="24px" height="24px" src={PrevIconImg} alt="logo" />
        </IconButton>
        <Typography variant="h2" lineHeight="1" ml="12px">
          채팅방
        </Typography>
      </div>
      <IconButton onClick={modalState.onOpen}>
        <Image width="24px" height="24px" src={LogoutImg} alt="logo" />
      </IconButton>
      <ChatModal
        isOpen={modalState.isOpen}
        title="채팅방에서 나가시겠습니까?"
        continueText="나가기"
        onClose={modalState.onClose}
        onContinue={modalState.onContinue}
      />
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
    justify-content: space-between;
    align-items: center;

    padding: 0 16px;

    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
  `,

  tab: css`
    display: flex;
    align-items: center;
  `,
};
