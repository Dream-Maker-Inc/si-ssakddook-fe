import { LightColor } from "@/themes/Color";
import { css } from "@emotion/react";
import { ChannelList, ChannelListProps } from "stream-chat-react";

type CustomChannelListProps = {
  props: ChannelListProps;
};

export const CustomChannelList = ({ props }: CustomChannelListProps) => {
  return (
    <div css={sx.root}>
      <ChannelList {...props} />
    </div>
  );
};

const sx = {
  root: css`
    width: 100%;

    & .str-chat {
      width: 100%;
      background-color: white;
      position: unset;
      left: unset;
      top: unset;
      z-index: unset;
      min-height: unset;
      overflow-y: unset;
      box-shadow: unset;
      transition: unset;
    }

    & .str-chat__channel-list-messenger {
      width: 100%;
      background-color: white;
    }

    & .str-chat__channel-list-messenger__main {
      padding: 0px;
    }

    button {
      padding: 16px;
      box-shadow: unset;
      margin: 0px;
      border-bottom: 1px solid ${LightColor.Gray500};

      &:hover {
        background-color: ${LightColor.Gray500};
        transition: 0.3s;
      }
    }
  `,
};
