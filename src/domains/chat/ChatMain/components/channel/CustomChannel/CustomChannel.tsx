import { LightColor } from "@/themes/Color";
import { css } from "@emotion/react";
import { Channel } from "stream-chat-react";

type CustomChannelType = {
  channel?: any;
  children: any;
  isVisible: boolean;
};
export const CustomChannel = ({
  channel,
  children,
  isVisible,
}: CustomChannelType) => {
  return (
    <div css={sx.root(isVisible)}>
      <Channel channel={channel}>{children}</Channel>
    </div>
  );
};

const sx = {
  root: (isVisible: boolean) => css`
    display: ${isVisible ? "block" : "none"};

    & .str-chat {
      background-color: white;
      height: calc(100vh - 66px);
      border-top: 1px solid ${LightColor.Gray500};
    }

    & .str-chat__main-panel {
      padding: 0px !important;
    }
  `,
};
