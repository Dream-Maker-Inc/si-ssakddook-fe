import { css } from "@emotion/react";
import { ChatAtom } from "@/recoil/Navigation/Navigation.atom";
import Image from "next/image";
import { useRecoilState } from "recoil";
import {
  ChannelPreviewUIComponentProps,
  useChatContext,
} from "stream-chat-react";

export const CustomPreview = (props: ChannelPreviewUIComponentProps) => {
  const { channel, setActiveChannel } = props;
  const [isChannelListVisible, setIsChannelListVisible] =
    useRecoilState(ChatAtom);

  const handleChannelClick = () => {
    setActiveChannel(channel);
    setIsChannelListVisible(false);
  };

  const { channel: activeChannel } = useChatContext();

  const selected = channel?.id === activeChannel?.id;

  const renderMessageText = () => {
    const lastMessageText =
      channel.state.messages[channel.state.messages.length - 1].text;

    const text = lastMessageText || "message text";

    return text.length < 60 ? lastMessageText : `${text.slice(0, 70)}...`;
  };

  if (!channel.state.messages.length) return null;

  return (
    <div
      className={
        selected
          ? "channel-preview__container selected"
          : "channel-preview__container"
      }
      onClick={handleChannelClick}
    >
      <div className="channel-preview__content-wrapper">
        <div className="channel-preview__content-top">
          <p className="channel-preview__content-name">
            {channel.data?.name || "Channel"}
          </p>
          <p className="channel-preview__content-name">
            {channel.data?.subtitle}
          </p>
        </div>
        <p className="channel-preview__content-message">
          {renderMessageText()}
        </p>
        <div css={sx.arrowIcon}>
          <Image
            width="24px"
            height="24px"
            src="/img/arrowIcon/icon-arrow-right.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

const sx = {
  arrowIcon: css`
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
  `,
};
