import { css } from "@emotion/react";
import { RoutePath } from "@/constants/Path";
import { LightColor } from "@/themes/Color";
import { Typography } from "@mui/material";
import { useRouter } from "next/router";

type PreviewItemProps = {
  id: string;
  title: string;
  desc: string;
  date: string;
};

export const PreviewItem = ({ id, title, desc, date }: PreviewItemProps) => {
  const router = useRouter();
  const onClick = () => {
    router.push({
      pathname: RoutePath.LifeDefail,
      query: { lifeId: id },
    });
  };
  return (
    <div css={sx.itemContainer} onClick={onClick}>
      <div css={sx.textWrapper}>
        <Typography variant="h4" css={sx.title}>
          {title}
        </Typography>
        <Typography variant="h5" color={LightColor.Gray100} css={sx.desc}>
          {desc}
        </Typography>
      </div>
      <Typography
        variant="h5"
        color={LightColor.Gray100}
        sx={{ whiteSpace: "nowrap" }}
      >
        {date}
      </Typography>
    </div>
  );
};

const sx = {
  itemContainer: css`
    width: 100%;
    height: 52px;
    padding: 10px 16px;

    display: flex;
    justify-content: space-between;

    border-bottom: 1px solid ${LightColor.Gray500};

    cursor: pointer;
  `,
  textWrapper: css`
    width: 87%;
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
