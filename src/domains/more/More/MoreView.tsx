import { AppbarLayout } from "@/common/components/layout/AppbarLayout";
import { PlainTab } from "@/common/components/tab/PlainTab";
import { css } from "@emotion/react";
import { ClickBox } from "../components/ClickBox/ClickBox";
import { moreModel } from "../model/MoreModels";

export const MoreView = () => {
  return (
    <AppbarLayout>
      <div css={sx.root}>
        <PlainTab category="더보기" />
        {moreModel.map((it, index) => (
          <ClickBox
            key={index}
            title={it.title}
            desc={it.desc}
            iconSrc={it.iconSrc}
            nextButtonState={it.nextButtonState}
            onClick={it.onClick}
          />
        ))}
      </div>
    </AppbarLayout>
  );
};

const sx = {
  root: css`
    width: 100%;
    height: 100%;
  `,
};
