import { LightColor } from "@/themes/Color";
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { useChatContext } from "stream-chat-react";
import { CustomLoadingIndicator } from "../../indicator/CustomLoadingIndicator";
import { ParticipatedChannelItem } from "../../preview/ParticipatedChannelItem";

export const ParticipatedChannelList = () => {
  const { client } = useChatContext();
  const [channels, setChannels] = useState<any[]>([]);
  const [loadingChannels, setLoadingChannels] = useState(true);

  const filter = {
    joined: true,
    // members: { $in: [client.user?.id!!] },
  };

  useEffect(() => {
    const fetchChannels = async () => {
      const filteredChannels = await client.queryChannels(filter);

      setChannels(filteredChannels);
      setLoadingChannels(false);
    };

    fetchChannels();
  }, []);

  return (
    <div css={sx.root}>
      {loadingChannels ? (
        <CustomLoadingIndicator />
      ) : (
        channels.map((it, index) => (
          <ParticipatedChannelItem key={index} channel={it} />
        ))
      )}
    </div>
  );
};

const sx = {
  root: css`
    width: 100%;

    & .str-chat {
      width: 100%;
      background-color: white !important;
      position: unset !important;
      left: unset !important;
      top: unset !important;
      z-index: unset !important;
      min-height: unset !important;
      overflow-y: unset;
      box-shadow: unset;
      transition: unset;
    }

    & .str-chat__channel-list-messenger {
      width: 100%;
      background-color: white;
    }

    & .str-chat__channel-list-messenger__main {
      padding: 0px !important;
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

  channel: css`
    width: 100%;
    height: 200px;
    background-color: red;
  `,
};
