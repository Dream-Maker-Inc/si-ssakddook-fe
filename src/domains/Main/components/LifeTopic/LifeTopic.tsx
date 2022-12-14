import { LifeItemResponse } from "@/data/apis/life/life.dto";
import { css } from "@emotion/react";
import { TopicTitle } from "../TopicTitle";
import { LifeBox } from "./LifeBox";

type LifeTopicProps = {
  data: {
    lifePost: { data?: LifeItemResponse[]; isError: any };
    lifePostByView: { data?: LifeItemResponse[]; isError: any };
  };
};

export const LifeTopic = ({ data }: LifeTopicProps) => {
  return (
    <div css={sx.root}>
      <TopicTitle title="라이프" desc="칼럼과 취미, 싹둑 라이프" />
      <div css={sx.content}>
        <LifeBox topic="최근 등록된 글" models={data.lifePost} hasMore />
        <LifeBox topic="조회수 높은 글" models={data.lifePostByView} />
      </div>
    </div>
  );
};

const sx = {
  root: css`
    width: 100%;
    margin-bottom: 20px;
  `,
  content: css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  `,
};
