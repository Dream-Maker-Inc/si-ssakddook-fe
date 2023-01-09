import { RoutePath } from "@/constants/Path";
import { PostingItemResponse } from "@/data/apis/posting/posting.dto";
import { LightColor } from "@/themes/Color";
import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import { useRouter } from "next/router";

type CommunityBoxProps = {
  topic: string;
  models: { data?: PostingItemResponse[]; isError: any };
  hasMore?: boolean;
};

export const CommunityBox = ({
  topic,
  models,
  hasMore = false,
}: CommunityBoxProps) => {
  const router = useRouter();
  const onRecentView = () => {
    router.push({ pathname: RoutePath.CommunityList, query: { category: "" } });
  };

  const onPostView = (postId: string) => {
    router.push({
      pathname: RoutePath.CommunityDetail,
      query: { postId: postId, category: "main" },
    });
  };

  return (
    <div css={sx.root}>
      <div css={sx.topicContainer}>
        <Typography variant="h3" color="black">
          {topic}
        </Typography>
        {hasMore ? (
          <Typography
            variant="h3"
            color={LightColor.PrimaryDark}
            onClick={onRecentView}
            sx={{ cursor: "pointer" }}
          >
            {"더보기 >"}
          </Typography>
        ) : (
          <div></div>
        )}
      </div>
      <div css={sx.hr}></div>
      <div css={sx.contentContainer}>
        {models?.data?.map((it, index) => (
          <div
            css={sx.wrapper}
            key={index}
            onClick={() => onPostView(it.id + "")}
          >
            <Typography
              variant="body2"
              color={LightColor.PrimaryDark}
              sx={{ whiteSpace: "noWrap" }}
            >
              {it.category}
            </Typography>
            <Typography variant="body2" css={sx.title}>
              {it.title}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

const sx = {
  root: css`
    width: 100%;
    border: 1px solid ${LightColor.Gray500};
    border-radius: 8px;
    padding: 16px;
    border: 1px solid ${LightColor.Gray500};
    border-radius: 8px;
  `,
  topicContainer: css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  hr: css`
    width: 100%;
    height: 1px;
    background-color: ${LightColor.Gray500};
    margin: 10px 0;
  `,
  contentContainer: css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  `,
  wrapper: css`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
  `,

  title: css`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,
};
