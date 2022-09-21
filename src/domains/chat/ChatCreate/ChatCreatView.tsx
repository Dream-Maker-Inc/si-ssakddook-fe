import { generateRandomString } from "@/utils/random/generateRandomString";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useChatContext } from "stream-chat-react";
import { css } from "@emotion/react";
import { ChatMainTab } from "../ChatMain/components/chatTab/ChatMainTab";

type ChatCreateViewProps = {
  onClose: () => void;
};

export const ChatCreateView = ({ onClose }: ChatCreateViewProps) => {
  const { client, setActiveChannel } = useChatContext();
  const [name, setName] = useState("");

  const handleNameChange = (e: string) => {
    setName(e);
  };

  const createChannel = async () => {
    const channelId = generateRandomString(10);
    const channel = client.channel("messaging", channelId, {
      name: name,
      members: [client.user!!.id],
    });

    await channel.create();
    await channel.watch();
    await setActiveChannel(channel);
    await onClose();
  };

  return (
    <div css={sx.root}>
      <div css={sx.container}>
        <TextField
          fullWidth
          value={name}
          onChange={(e) => handleNameChange(e.target.value)}
          sx={{ marginBottom: "20px" }}
        />
        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={createChannel}
        >
          채팅방 만들기
        </Button>
      </div>
    </div>
  );
};

const sx = {
  root: css`
    width: 100%;
    height: 100%;
    padding: 16px;

    display: flex;
    justify-content: center;
    align-items: center;
  `,

  container: css`
    width: 100%;
  `,
};
