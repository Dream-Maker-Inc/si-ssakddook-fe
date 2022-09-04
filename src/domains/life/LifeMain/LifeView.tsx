import { css } from "@emotion/react";
import { DefaultTab } from "@/common/components/tab/DefaultTab";
import { Typography } from "@mui/material";
import { LightColor } from "@/themes/Color";
import { lifeModel } from "../model/LifeModel";
import { PlainLayout } from "@/common/components/layout/PlainLayout";
import { useRouter } from "next/router";
import { RoutePath } from "@/constants/Path";

export const LifeView = () => {
  return (
    <PlainLayout>
      <DefaultTab category="라이프" />
      <div css={sx.root}>
        {lifeModel.map((it, index) => (
          <PreviewBox
            key={index}
            title={it.title}
            desc={it.desc}
            date={it.date}
          />
        ))}
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

  boxContainer: css`
    width: 100%;
    height: 52px;
    padding: 10px 16px;

    display: flex;
    justify-content: space-between;

    border-bottom: 1px solid ${LightColor.Gray500};

    cursor: pointer;
  `,
  boxTextWrapper: css`
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

type PreviewBoxProps = {
  title: string;
  desc: string;
  date: string;
};

const PreviewBox = ({ title, desc, date }: PreviewBoxProps) => {
  const router = useRouter();
  const onClick = () => {
    router.push(RoutePath.LifeDefail);
  };
  return (
    <div css={sx.boxContainer} onClick={onClick}>
      <div css={sx.boxTextWrapper}>
        <Typography variant="h4" css={sx.title}>
          {title}
        </Typography>
        <Typography variant="h5" color={LightColor.Gray100} css={sx.desc}>
          {desc}
        </Typography>
      </div>
      <Typography variant="h5" sx={{ whiteSpace: "nowrap" }}>
        {date}
      </Typography>
    </div>
  );
};
