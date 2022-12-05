import { LightColor } from "@/themes/Color";
import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import Image from "next/image";
import { LifeItemResponse } from "@/data/apis/life/life.dto";
import { useRouter } from "next/router";
import { RoutePath } from "@/constants/Path";

type LifeBoxProps = {
  topic: string;
  models: { data?: LifeItemResponse[]; isError: any };
  hasMore?: boolean;
};

export const LifeBox = ({ topic, models, hasMore = false }: LifeBoxProps) => {
  const router = useRouter();
  const onLifeView = () => {
    router.push(RoutePath.Life);
  };
  const onLifeDetailView = (id: string) => {
    router.push({
      pathname: RoutePath.LifeDefail,
      query: { lifeId: id },
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
            onClick={onLifeView}
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
        {models.data?.map((it, index) => (
          <div
            css={sx.wrapper}
            key={index}
            onClick={() => onLifeDetailView(it.id + "")}
          >
            <div css={sx.imageWrapper}>
              <Image
                layout={"fill"}
                src={it.attachments[0]}
                alt=""
                css={sx.image}
              />
            </div>
            <div css={sx.content}>
              <Typography variant="body2" color="black" css={sx.text}>
                {it.title}
              </Typography>
              <Typography
                variant="h5"
                color={LightColor.TextMain}
                fontWeight={400}
                css={sx.text}
              >
                {it.content}
              </Typography>
            </div>
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

  imageWrapper: css`
    width: 32px;
    height: 32px;
    border-radius: 8px;
    position: relative;
  `,
  image: css`
    border-radius: 8px;
  `,

  content: css`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 4px;
    overflow: hidden;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  `,

  text: css`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,
};
