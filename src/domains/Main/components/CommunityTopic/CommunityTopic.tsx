import { PostingItemResponse } from "@/data/apis/posting/posting.dto";
import { css } from "@emotion/react";
import { TopicTitle } from "../TopicTitle";
import { CommunityBox } from "./CommunityBox";

type CommunityTopicProps = {
  data: {
    post: { data?: PostingItemResponse[]; isError: any };
    postByLike: { data?: PostingItemResponse[]; isError: any };
  };
};

export const CommunityTopic = ({ data }: CommunityTopicProps) => {
  return (
    <div css={sx.root}>
      <TopicTitle
        title="커뮤니티"
        desc="여러 카테고리에서 나와 비슷한 고민을 가진 사람들이 작성한 글"
      />
      <div css={sx.content}>
        <CommunityBox topic="최근 등록된 글" models={data.post} hasMore />
        <CommunityBox topic="좋아요 많은 글" models={data.postByLike} />
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
