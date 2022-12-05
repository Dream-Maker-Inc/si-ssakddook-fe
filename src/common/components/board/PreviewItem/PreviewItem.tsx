import { css } from "@emotion/react";
import { RoutePath } from "@/constants/Path";
import { LightColor } from "@/themes/Color";
import { colors, Typography } from "@mui/material";
import { useRouter } from "next/router";
import Image from "next/image";

type PreviewItemProps = {
  id: string;
  title: string;
  desc: string;
  image?: string;
  date: string;
};

export const PreviewItem = ({
  id,
  title,
  desc,
  image,
  date,
}: PreviewItemProps) => {
  const router = useRouter();
  const onClick = () => {
    router.push({
      pathname: RoutePath.LifeDefail,
      query: { lifeId: id },
    });
  };
  return (
    <div css={sx.itemContainer} onClick={onClick}>
      {image && (
        <div css={sx.image}>
          <Image layout="fill" src={image} alt="image" />
        </div>
      )}
      <div css={sx.textWrapper}>
        <Typography variant="h4" css={sx.title}>
          {title}
        </Typography>
        <Typography variant="h5" color={LightColor.Gray100} css={sx.desc}>
          {desc}
        </Typography>
        <Typography
          variant="h5"
          color={LightColor.Gray100}
          sx={{ whiteSpace: "nowrap" }}
        >
          {date}
        </Typography>
      </div>
    </div>
  );
};

const sx = {
  itemContainer: css`
    width: 100%;
    height: 76px;
    padding: 10px 16px;
    display: flex;
    gap: 10px;
    border-bottom: 1px solid ${LightColor.Gray500};
    cursor: pointer;
  `,
  image: css`
    position: relative;
    width: 56px;
    height: 56px;
    background-color: ${LightColor.Gray500};
    border-radius: 8px;
  `,
  textWrapper: css`
    width: 79%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `,
  title: css`
    width: 100%;
    display: inline-block;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  `,
  desc: css`
    width: 100%;
    display: inline-block;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  `,
};
