import { LightColor } from "@/themes/Color";
import { css } from "@emotion/react";
import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { ChannelList, useChatContext } from "stream-chat-react";
import { CustomLoadingIndicator } from "../CustomLoadingIndicator";
import { CustomPreview } from "../CustomPreview";

export const EveryChannelList = () => {
  const { client } = useChatContext();
  const [channels, setChannels] = useState<any[]>([]);
  const [loadingChannels, setLoadingChannels] = useState(true);

  const filter = {
    type: "messaging",
  };
  //const sort = { last_message_at: -1 };

  useEffect(() => {
    const fetchChannels = async () => {
      const response = await client.queryChannels(filter);
      //const filteredChannels = response.filter((c) => c.type === "messaging");

      //setChannels(filteredChannels);
      setLoadingChannels(false);
      await console.log(response);
    };

    fetchChannels();
  }, []);

  return (
    <div css={sx.root}>
      <ChannelList
        filters={filter}
        Preview={CustomPreview}
        LoadingIndicator={CustomLoadingIndicator}
      />
      {/* {loadingChannels ? (
        <Typography>채널을 로딩중 입니다.</Typography>
      ) : (
        channels.map((it, index) => (
          <div key={index} css={sx.channel}>
            {it}
          </div>
        ))
      )} */}
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
