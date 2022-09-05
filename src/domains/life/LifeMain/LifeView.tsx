import { css } from "@emotion/react";
import { DefaultTab } from "@/common/components/tab/DefaultTab";
import { Typography } from "@mui/material";
import { LightColor } from "@/themes/Color";
import { lifeModel } from "../model/LifeModel";
import { PlainLayout } from "@/common/components/layout/PlainLayout";
import { PreviewItem } from "@/common/components/board/PreviewItem";

export const LifeView = () => {
  return (
    <PlainLayout>
      <DefaultTab category="라이프" />
      <div css={sx.root}>
        {lifeModel.map((it, index) => (
          <PreviewItem
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
};
