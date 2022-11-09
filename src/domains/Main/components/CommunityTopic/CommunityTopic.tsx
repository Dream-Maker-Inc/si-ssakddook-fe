import { css } from "@emotion/react";
import { TopicTitle } from "../TopicTitle";
import { CommunityBox } from "./CommunityBox";

export const CommunityTopic = () => {
  const models = [
    {
      category: "직장폭력",
      title: "상사의 사적인 대화, 어떻게 대응해야 하나요? 상사의 사적인 ...",
    },
    {
      category: "비밀",
      title: "상사의 사적인 대화, 어떻게 대응해야 하나요? 상사의 사적인 ...",
    },
    {
      category: "고민",
      title: "상사의 사적인 대화, 어떻게 대응해야 하나요? 상사의 사적인 ...",
    },
    {
      category: "직장폭력",
      title: "상사의 사적인 대화, 어떻게 대응해야 하나요? 상사의 사적인 ...",
    },
  ];
  return (
    <div css={sx.root}>
      <TopicTitle
        title="커뮤니티"
        desc="여러 카테고리에서 나와 비슷한 고민을 가진 사람들이 작성한 글"
      />
      <div css={sx.content}>
        <CommunityBox topic="최근 등록된 글" models={models} />
        <CommunityBox topic="좋아요 많은 글" models={models} />
      </div>
    </div>
  );
};

const sx = {
  root: css`
    width: 100%;
    margin-bottom: 40px;
  `,
  content: css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  `,
};
