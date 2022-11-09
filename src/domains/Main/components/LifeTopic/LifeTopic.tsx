import { css } from "@emotion/react";
import { TopicTitle } from "../TopicTitle";
import { LifeBox } from "./LifeBox";

export const LifeTopic = () => {
  const models = [
    {
      title: "우울증엔 이것이 정답! 하루에 10분만 투자해보세요.",
      desc: "우리 커다란 가슴에 약동하다. 무엇이 방지하는 살 길지 대고, 피어나기 청춘이 사막이다. 만물은 주...",
    },
    {
      title: "우울증엔 이것이 정답! 하루에 10분만 투자해보세요.",
      desc: "우리 커다란 가슴에 약동하다. 무엇이 방지하는 살 길지 대고, 피어나기 청춘이 사막이다. 만물은 주...",
    },
    {
      title: "우울증엔 이것이 정답! 하루에 10분만 투자해보세요.",
      desc: "우리 커다란 가슴에 약동하다. 무엇이 방지하는 살 길지 대고, 피어나기 청춘이 사막이다. 만물은 주...",
    },
    {
      title: "우울증엔 이것이 정답! 하루에 10분만 투자해보세요.",
      desc: "우리 커다란 가슴에 약동하다. 무엇이 방지하는 살 길지 대고, 피어나기 청춘이 사막이다. 만물은 주...",
    },
  ];

  return (
    <div css={sx.root}>
      <TopicTitle
        title="라이프"
        desc="운영자가 직접 추천하는 칼럼과 취미, 싹둑 라이프"
      />
      <div css={sx.content}>
        <LifeBox topic="최근 등록된 글" models={models} />
        <LifeBox topic="좋아요 많은 글" models={models} />
      </div>
    </div>
  );
};

const sx = {
  root: css`
    width: 100%;
  `,
  content: css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  `,
};
