import { LightColor } from "@/themes/Color";
import { css } from "@emotion/react";
import { Typography } from "@mui/material";

type CommunityTopicType = {
  category: string;
  title: string;
};

type CommunityBoxProps = {
  topic: string;
  models: CommunityTopicType[];
};

export const CommunityBox = ({ topic, models }: CommunityBoxProps) => {
  return (
    <div css={sx.root}>
      <div css={sx.topicContainer}>
        <Typography variant="h3" color="black">
          {topic}
        </Typography>
        <Typography
          variant="h3"
          color={LightColor.PrimaryDark}
          onClick={() => alert("더보기")}
          sx={{ cursor: "pointer" }}
        >
          {"더보기 >"}
        </Typography>
      </div>
      <div css={sx.hr}></div>
      <div css={sx.contentContainer}>
        {models.map((it, index) => (
          <div css={sx.wrapper} key={index}>
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
  `,

  title: css`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,
};
