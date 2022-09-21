import { generateRandomString } from "@/utils/random/generateRandomString";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useChatContext } from "stream-chat-react";
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
    <div>
      <TextField
        fullWidth
        value={name}
        onChange={(e) => handleNameChange(e.target.value)}
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
  );
};
