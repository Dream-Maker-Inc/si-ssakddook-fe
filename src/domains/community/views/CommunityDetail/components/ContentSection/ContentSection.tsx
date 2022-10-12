import { CategoryChip } from "@/common/components/chip/CategoryChip";
import { ShowThumbnailSection } from "@/common/components/thumbnail/ShowThumbnailSection";
import { LightColor } from "@/themes/Color";
import { css } from "@emotion/react";
import { Typography, TypographyProps } from "@mui/material";

type ContentSectionProps = {
  category: string;
  title: string;
  nickname: string;
  date: string;
  content: string;
  attachments: string[];
};

export const ContentSection = (props: ContentSectionProps) => {
  return (
    <div css={sx.contentRoot}>
      <CategoryChip>{props.category}</CategoryChip>
      <Title>{props.title}</Title>
      <ContentInfos nickname={props.nickname} date={props.date} />
      <Content text={props.content} />
      {props.attachments.length !== 0 && (
        <ShowThumbnailSection
          uploadImageList={props.attachments}
          isVisible={true}
        />
      )}
    </div>
  );
};

const sx = {
  contentRoot: css`
    width: 100%;
    padding: 0 16px;
  `,
  contentContainer: css`
    width: 100%;
    padding: 20px 0;
  `,

  contentText: css`
    white-space: break-spaces;
    text-align: left;
  `,
};

const Title = (p: TypographyProps) => {
  return <Typography variant="h2" color="black" mt="10px" mb="6px" {...p} />;
};

type ContentInfosProps = {
  nickname: string | undefined;
  date: string | undefined;
};

const ContentInfos = ({ nickname, date }: ContentInfosProps) => {
  return (
    <Typography variant="h4" color={LightColor.Gray100}>
      {nickname}
      {" | "}
      {date}
    </Typography>
  );
};

type ContentProps = {
  text: string | undefined;
};

const Content = ({ text }: ContentProps) => {
  return (
    <div css={sx.contentContainer}>
      <Typography variant="h3" color={LightColor.TextMain} css={sx.contentText}>
        {text}
      </Typography>
    </div>
  );
};
