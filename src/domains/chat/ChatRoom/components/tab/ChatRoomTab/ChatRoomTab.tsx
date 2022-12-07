import { ChatModal } from "@/common/components/modal/ChatModal/ChatModal";
import { css } from "@emotion/react";
import { Box, Drawer, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import { useChatRoomTab } from "./useChatRoomTab";
import PrevIconImg from "@/img/arrowIcon/prev-icon.svg";
import LogoutImg from "@/img/icon-logout.svg";
import MenuIcon from "@mui/icons-material/Menu";
import { LightColor } from "@/themes/Color";

export const ChatRoomTab = () => {
  const { tabState, channelState, drawerState, modalState } = useChatRoomTab();

  return (
    <div css={sx.root}>
      <div css={sx.tab}>
        <IconButton onClick={tabState.onBack}>
          <Image width="24px" height="24px" src={PrevIconImg} alt="logo" />
        </IconButton>
        <Typography variant="h2" lineHeight="1" ml="12px">
          채팅방
        </Typography>
      </div>
      <IconButton onClick={drawerState.onClose(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="right"
        open={drawerState.isOpen}
        onClose={drawerState.onClose(false)}
      >
        <Box css={sx.drawerContainer} role="presentation">
          <div css={sx.chatHeaderSection}>
            <Typography variant="h3" color="black">
              채팅방 정보
            </Typography>
          </div>
          <div css={sx.chatContentSection}>
            <div css={sx.content}>
              <Typography variant="body1" color="TextMain">
                제목
              </Typography>
              <Typography variant="body2" color="TextSub">
                {channelState.title}
              </Typography>
            </div>

            <div css={sx.content}>
              <Typography variant="body1" color="TextMain">
                설명
              </Typography>
              <Typography variant="body2" color="TextSub">
                {channelState.desc}
              </Typography>
            </div>

            <div css={sx.content}>
              <Typography variant="body1" color="TextMain">
                생성날짜
              </Typography>
              <Typography variant="body2" color="TextSub">
                {channelState.createdAt}
              </Typography>
            </div>
          </div>
          <div css={sx.chatExitSection}>
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
        </Box>
      </Drawer>
    </div>
  );
};

const sx = {
  root: css`
    position: absolute;
    width: 100%;
    height: 50px;
    left: 0px;
    top: 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  `,
  tab: css`
    display: flex;
    align-items: center;
  `,
  drawerContainer: css`
    width: 240px;
  `,
  content: css`
    width: 100%;
    border-bottom: 1px solid ${LightColor.Gray500};
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8px;
    padding: 16px;
  `,
  chatHeaderSection: css`
    width: 100%;
    height: 50px;
    border-bottom: 1px solid ${LightColor.Gray500};
    display: flex;
    align-items: center;
    padding-left: 16px;
  `,
  chatContentSection: css`
    width: 100%;
  `,
  chatExitSection: css`
    width: 100%;
    height: 50px;
    position: absolute;
    left: 0;
    bottom: 0;
    border-top: 1px solid ${LightColor.Gray500};
    display: flex;
    align-items: center;
    padding-left: 16px;
  `,
};
