import { css } from "@emotion/react";
import { DefaultTab } from "@/common/components/tab/DefaultTab";
import { Typography } from "@mui/material";
import { LightColor } from "@/themes/Color";
import { PlainLayout } from "@/common/components/layout/PlainLayout";
import Image from "next/image";
import { useLifeDetailView } from "./useLifeDetailView";
import { CircularLoading } from "@/common/components/progress/CircularProgress/CircularLoading";
import { ShowThumbnailSection } from "@/common/components/thumbnail/ShowThumbnailSection";

export const LifeDetailView = () => {
  const { fetchState, result } = useLifeDetailView();
  if (fetchState.isLoading) return <CircularLoading />;
  if (fetchState.isError) return <CircularLoading />;

  return (
    <PlainLayout>
      <DefaultTab category="라이프" />
      <div css={sx.root}>
        <TitleSection
          title={result.title}
          date={result.date}
          viewCount={result.viewCount}
        />
        <ContentSection content={result.content} images={result.attachments} />
        <ImageSourceSection link={result.link} />
      </div>
    </PlainLayout>
  );
};

const sx = {
  root: css`
    width: 100%;
    height: 100%;

    overflow-y: scroll;
    ::-webkit-scrollbar {
      display: none;
    }
  `,
  titleRoot: css`
    width: 100%;
    padding: 16px 16px 12px 16px;

    border-bottom: 1px solid ${LightColor.Gray500};
  `,
  titleWrapper: css`
    width: 100%;
    display: flex;
    justify-content: space-between;
  `,
  title: css`
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  `,
  viewWrapper: css`
    display: flex;
    align-items: center;
    gap: 4px;
  `,
  contentRoot: css`
    width: 100%;
    padding: 16px;
  `,
  sourceRoot: css`
    width: 100%;
    height: 37px;
    background-color: white;

    display: flex;
    align-items: center;
    gap: 6px;

    padding: 0 16px;

    position: absolute;
    bottom: 0;
    left: 0;

    border-top: 1px solid ${LightColor.Gray500};
    z-index: 100;
  `,
  image: css`
    width: 100%;
    text-align: center;
  `,
  src: css`
    width: 100%;
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,
};

export type TitleSectionProps = {
  title: string;
  date: string;
  viewCount: number;
};

const TitleSection = ({ title, date, viewCount }: TitleSectionProps) => {
  return (
    <div css={sx.titleRoot}>
      <Typography variant="h2" color="black" mb={"12px"} css={sx.title}>
        {title}
      </Typography>
      <div css={sx.titleWrapper}>
        <Typography variant="h5" color={LightColor.Gray100}>
          관리자 · {date}
        </Typography>
        <div css={sx.viewWrapper}>
          <Image width="10px" height="10px" src="/img/icon-view.svg" alt="" />
          <Typography variant="h5" color={LightColor.Gray100}>
            {viewCount}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export type ContentSectionProps = {
  content: string;
  images: string[];
};

const ContentSection = ({ content, images }: ContentSectionProps) => {
  return (
    <div css={sx.contentRoot}>
      <Typography variant="body2" color="black" mb="16px">
        {content}
      </Typography>
      {images?.length !== 0 && (
        <ShowThumbnailSection uploadImageList={images} isVisible={true} />
      )}
    </div>
  );
};

export type ImageSourceSectionProps = {
  link: string;
};

const ImageSourceSection = ({ link }: ImageSourceSectionProps) => {
  return (
    <div css={sx.sourceRoot}>
      <Image width="12px" height="12px" src="/img/icon-img-link.svg" alt="" />
      <Typography
        component="a"
        variant="body2"
        color={LightColor.Gray100}
        href={link}
        css={sx.src}
      >
        {link}
      </Typography>
    </div>
  );
};
